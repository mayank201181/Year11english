// Usage:
//   npx tsx scripts/blind-compare.ts                    -> compares all .audit-tmp/blind/*.json against topics + exam papers
//   npx tsx scripts/blind-compare.ts <id> [outDir]      -> compares a single topic or exam paper
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { checkAnswer, displayAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-lang1", "exam-lang2", "exam-lit1", "exam-lit2"] as const;

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

async function questionsFor(id: string): Promise<Question[]> {
  if (id === "exam") {
    const all: Question[] = [];
    for (const e of EXAM_IDS) all.push(...(((await load<ExamPaper>(`lib/exam/${e}.ts`, "paper"))?.questions) ?? []));
    return all;
  }
  if ((EXAM_IDS as readonly string[]).includes(id)) {
    return ((await load<ExamPaper>(`lib/exam/${id}.ts`, "paper"))?.questions) ?? [];
  }
  const practice = await load<TopicPractice>(`lib/topics/${id}/practice.ts`, "practice");
  return [
    ...(practice?.quiz ?? []),
    ...((await load<Paper[]>(`lib/topics/${id}/mcq.ts`, "mcqPapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.papers ?? []).flatMap((p) => p.questions),
    ...((await load<Paper[]>(`lib/topics/${id}/practice2.ts`, "morePapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.challenge ?? []),
  ];
}

interface BlindEntry {
  id: string;
  answer: unknown;
  note?: string;
}

function readBlindEntries(raw: unknown): BlindEntry[] {
  if (Array.isArray(raw)) return raw as BlindEntry[];
  if (raw && typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    if (Array.isArray(obj.answers)) return obj.answers as BlindEntry[];
    // Also support { "question-id": answer } maps
    return Object.entries(obj).map(([id, answer]) => ({ id, answer }));
  }
  return [];
}

function compareSet(label: string, qs: Question[], answers: BlindEntry[]) {
  const autoQs = qs.filter((q) => q.kind !== "written");
  const byId = new Map(autoQs.map((q) => [q.id, q]));
  const seen = new Set<string>();
  const mismatches: unknown[] = [];
  let agree = 0;
  let compared = 0;
  for (const a of answers) {
    const q = byId.get(a.id);
    if (!q || seen.has(a.id)) continue;
    seen.add(a.id);
    compared++;
    if (q.kind === "mcq") {
      if (Number(a.answer) === q.answerIndex) agree++;
      else mismatches.push({ id: q.id, kind: "mcq", solver: { index: a.answer, text: q.options[Number(a.answer)] }, key: { index: q.answerIndex, text: q.options[q.answerIndex] }, solverNote: a.note });
    } else if (q.kind === "short") {
      const r = checkAnswer(q.answer, String(a.answer ?? ""));
      if (r.status === "correct") agree++;
      else mismatches.push({ id: q.id, kind: "short", solver: a.answer, checker: r, key: displayAnswer(q.answer), spec: q.answer, solverNote: a.note });
    }
  }
  const unanswered = autoQs.filter((q) => !seen.has(q.id)).map((q) => q.id);
  const pct = autoQs.length ? +((agree / autoQs.length) * 100).toFixed(1) : 100;
  return { report: { topic: label, total: autoQs.length, compared, agree, agreementPct: `${pct}%`, mismatches: mismatches.length, unanswered: unanswered.length }, mismatches, unanswered };
}

const [argId, argOutDir] = process.argv.slice(2);
if (!argId) {
  const blindDir = path.join(root, ".audit-tmp", "blind");
  mkdirSync(blindDir, { recursive: true });
  const allBlind: BlindEntry[] = [];
  for (const f of readdirSync(blindDir).filter((f) => f.endsWith(".json") && !f.endsWith(".mismatches.json") && f !== "summary.json")) {
    allBlind.push(...readBlindEntries(JSON.parse(readFileSync(path.join(blindDir, f), "utf8"))));
  }
  const allQs: Question[] = [];
  const perFile: unknown[] = [];
  for (const id of [...TOPIC_META.map((t) => t.id), ...EXAM_IDS]) {
    const qs = await questionsFor(id);
    if (!qs.length) continue;
    allQs.push(...qs);
    const res = compareSet(id, qs, allBlind);
    perFile.push(res.report);
    if (res.mismatches.length || res.unanswered.length) {
      writeFileSync(path.join(blindDir, `${id}.mismatches.json`), JSON.stringify(res, null, 1));
    }
    console.log(JSON.stringify(res.report));
  }
  const overall = compareSet("ALL", allQs, allBlind);
  writeFileSync(path.join(blindDir, "summary.json"), JSON.stringify({ overall: overall.report, perFile, mismatches: overall.mismatches, unanswered: overall.unanswered }, null, 1));
  console.log("OVERALL:", JSON.stringify(overall.report));
  if (overall.mismatches.length > 0 || overall.unanswered.length > 0) process.exit(1);
} else {
  const outDir = argOutDir ?? path.join(root, ".audit-tmp", "blind");
  mkdirSync(outDir, { recursive: true });
  const answers: BlindEntry[] = [];
  for (const f of readdirSync(outDir).filter((f) => (f.startsWith(`${argId}.answers`) || f === `${argId}.json`) && f.endsWith(".json"))) {
    answers.push(...readBlindEntries(JSON.parse(readFileSync(path.join(outDir, f), "utf8"))));
  }
  const ansSub = path.join(outDir, "answers");
  if (existsSync(ansSub)) {
    for (const f of readdirSync(ansSub).filter((f) => f === `${argId}.json` || (f.startsWith(`${argId}.answers`) && f.endsWith(".json")))) {
      answers.push(...readBlindEntries(JSON.parse(readFileSync(path.join(ansSub, f), "utf8"))));
    }
  }
  const qs = await questionsFor(argId);
  const res = compareSet(argId, qs, answers);
  writeFileSync(path.join(outDir, `${argId}.mismatches.json`), JSON.stringify(res, null, 1));
  console.log(JSON.stringify(res.report));
  if (res.mismatches.length > 0) process.exit(1);
}

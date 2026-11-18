// Usage:
//   npx tsx scripts/blind-export.ts                     -> exports all topics + exam papers to .audit-tmp/questions/<id>.json
//   npx tsx scripts/blind-export.ts <id> [outDir]       -> exports one topic or exam paper
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { AnswerSpec, ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-lang1", "exam-lang2", "exam-lit1", "exam-lit2"] as const;

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

function form(a: AnswerSpec): string {
  switch (a.type) {
    case "number": return `a single number${a.allowFraction === false ? " (as a decimal, not a fraction)" : ""}${a.standardForm ? " in standard form like 3.2 x 10^4" : ""}`;
    case "fraction": return `a fraction${a.simplest ? " in simplest form" : ""}${a.form === "mixed" ? " written as a mixed number like 2 1/3" : a.form === "improper" ? " written as an improper fraction" : ""}`;
    case "list": return `${a.values.length} numbers separated by commas${a.ordered ? " IN THE ORDER THE QUESTION ASKS" : " (any order)"}`;
    case "ratio": return `a ratio with ${a.parts.length} parts like 3:4${a.simplest ? " in simplest form" : ""}`;
    case "expression": return `an algebraic expression in plain text${a.form && a.form !== "any" ? ` (${a.form})` : ""}`;
    case "text": return "a short word or phrase";
  }
}

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

function serialize(qs: Question[]) {
  return qs
    .filter((q) => q.kind !== "written")
    .map((q) =>
      q.kind === "mcq"
        ? { id: q.id, kind: "mcq", question: q.question, hasDiagram: !!q.diagram, diagram: q.diagram, options: q.options.map((o, i) => ({ i, text: o })) }
        : { id: q.id, kind: "short", question: q.question, hasDiagram: !!q.diagram, diagram: q.diagram, answerFormat: form(q.answer) },
    );
}

const [argId, argOutDir] = process.argv.slice(2);
if (!argId) {
  const outDir = path.join(root, ".audit-tmp", "questions");
  mkdirSync(outDir, { recursive: true });
  let total = 0;
  for (const id of [...TOPIC_META.map((t) => t.id), ...EXAM_IDS]) {
    const out = serialize(await questionsFor(id));
    if (!out.length) continue;
    writeFileSync(path.join(outDir, `${id}.json`), JSON.stringify(out, null, 1));
    total += out.length;
    console.log(`${id}: ${out.length} questions → .audit-tmp/questions/${id}.json`);
  }
  console.log(`Total exported: ${total} auto-marked questions`);
} else {
  const outDir = argOutDir ?? path.join(root, ".audit-tmp", "questions");
  mkdirSync(outDir, { recursive: true });
  const out = serialize(await questionsFor(argId));
  const fname = argOutDir ? `${argId}.questions.json` : `${argId}.json`;
  writeFileSync(path.join(outDir, fname), JSON.stringify(out, null, 1));
  console.log(`${out.length} questions → ${path.join(outDir, fname)}`);
}

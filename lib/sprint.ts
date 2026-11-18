// ---------------------------------------------------------------------------
// 60-Second Literary & Rhetorical Sprint: quick-fire recall of IGCSE English
// Language (9270) & English Literature (4ET1) devices, quotes, context & craft.
//
// Pure (no React, no registry import) so it can be unit-tested directly by Node.
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "language" | "literature" | "mixed";
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["language", "literature", "mixed"];

export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  language: "Language 9270",
  literature: "Literature 4ET1",
};

export const SPRINT_SECONDS = 60;
export const SPRINT_MAX_LEVEL = 2;
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  language: {
    label: "Language 9270",
    icon: "🔍",
    description: "OxfordAQA 9270 linguistic & structural methods, rhetorical devices, punctuation craft and directed-writing conventions.",
    example: "Name the device when a speaker asks a question and immediately answers it · Which sign-off follows 'Dear Sir or Madam'?",
  },
  literature: {
    label: "Literature 4ET1",
    icon: "👑",
    description: "Edexcel 4ET1 set-text quotations, speaker attribution, Jacobean/1912/1930s context and Anthology poetic methods.",
    example: "Complete Goole's warning: 'fire and blood and ___' · Which poet wrote 'Search For My Tongue'?",
  },
  mixed: {
    label: "Mixed IGCSE",
    icon: "⚡",
    description: "Rapid-fire mix across OxfordAQA 9270 Language and Edexcel 4ET1 Literature — the sharpest warm-up before mock papers.",
    example: "Quotes, literary devices, rhetorical craft and examiner terminology across all 8 topics",
  },
};

export interface SprintItem {
  key: string;
  prompt: string;
  answer: AnswerSpec;
  answerText: string;
  traps?: Trap[];
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));

export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

export function sprintPool(mode: SprintMode, drills: readonly Drill[]): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

export function sprintPoolSizes(drills: readonly Drill[]): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills).length;
  return out;
}

function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}

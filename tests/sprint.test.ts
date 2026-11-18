import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms"): Drill {
  const bank = [
    ["Name the device when a speaker asks a question and answers it immediately", "hypophora"],
    ["Complete Goole's warning: 'fire and blood and ___'", "anguish"],
    ["Which poet wrote 'Search For My Tongue'?", "Sujata Bhatt"],
    ["Name the flaw that brings down a tragic hero", "hamartia"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake drill",
    level,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.lines`,
    topicId,
    title: "Fake line-count drill",
    level: 1,
    generate(rng) {
      const stanzas = rng.int(2, 6);
      const per = rng.int(4, 8);
      return {
        prompt: `A poem has ${stanzas} stanzas of ${per} lines each. Total lines?`,
        answer: { type: "number", value: stanzas * per, tolerance: 0 },
        solution: [`${stanzas} × ${per} = ${stanzas * per}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are the two strands plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["language", "literature", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("tables"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; mixed takes all", () => {
  const lang = firstTopic("Language 9270");
  const lit = firstTopic("Literature 4ET1");
  const drills = [bankDrill(lang, 1), bankDrill(lang, 3, "hard"), bankDrill(lit, 2), bankDrill("not-a-topic", 1)];
  assert.deepEqual(sprintPool("language", drills).map((d) => d.id), [`${lang}.terms`]);
  assert.deepEqual(sprintPool("literature", drills).map((d) => d.id), [`${lit}.terms`]);
  assert.deepEqual(sprintPool("mixed", drills).map((d) => d.id).sort(), [`${lang}.terms`, `${lit}.terms`].sort());
});

test("items carry a checkable answer and preserve AnswerSpec tolerance", () => {
  const lit = firstTopic("Literature 4ET1");
  const pool = sprintPool("mixed", [bankDrill(lit, 1), numberDrill(lit)]);
  const rng = makeRng(42);
  const keys = new Set<string>();
  for (let i = 0; i < 200; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it, "always produces an item");
    assert.ok(it.prompt && it.answerText && it.key);
    keys.add(it.key);
    if (it.answer.type === "text") {
      assert.equal(it.answerText, it.answer.accept[0]);
      assert.equal(checkAnswer(it.answer, it.answer.accept[0].toUpperCase()).status, "correct");
    } else if (it.answer.type === "number") {
      assert.equal(it.answerText, String(it.answer.value));
      assert.equal(checkAnswer(it.answer, String(it.answer.value)).status, "correct");
    }
  }
  assert.ok(keys.size > 10, "varied items");
});

test("a drill that throws is skipped, not fatal", () => {
  const lang = firstTopic("Language 9270");
  const broken: Drill = { id: `${lang}.broken`, topicId: lang, title: "Broken", level: 1, generate() { throw new Error("boom"); } };
  const pool = sprintPool("language", [broken, bankDrill(lang, 1)]);
  const rng = makeRng(7);
  for (let i = 0; i < 50; i++) assert.ok(sprintItem(pool, rng));
  assert.equal(sprintItem(sprintPool("language", [broken]), makeRng(3)), null);
});

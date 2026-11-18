// ---------------------------------------------------------------------------
// Self-mark suggestion helper for written IGCSE English Language & Literature questions.
// Pure (no React) so it can be shared by QuestionCard, validate.ts and tests.
//
// Hardened against:
//   1. Non-answers ("idk", "I don't know", "not sure", "skip", etc.)
//   2. Classic examiner-hated empty filler ("makes the reader want to read on",
//      "paints a picture in the reader's head", "hooks the reader", etc.)
//   3. Verbatim >=4-word runs copied from the question stem / embedded extract
//   4. Short-keyword (<=3 chars) substring false positives ("now" inside "know")
// ---------------------------------------------------------------------------
import type { WrittenQ } from "./types.ts";

const NON_ANSWER =
  /^(?:i\s*(?:don'?t|do\s*not)\s*know|idk|dunno|(?:i'?m\s*|i\s*am\s*)?(?:not\s*sure|unsure)|(?:i\s*have\s*)?no\s*idea|no\s*clue|not\s*a\s*clue|skip|pass|none|nothing|n\/a|na|tbd)+$/i;

/** Empty examiner-trap clichés stripped before keyword matching so generic waffle never earns credit. */
const GENERIC_FILLER = [
  /\b(?:it\s+|this\s+)?makes?\s+the\s+(?:reader|audience)\s+want\s+to\s+read\s+on\b/gi,
  /\b(?:it\s+|this\s+)?hooks?\s+the\s+(?:reader|audience)\b/gi,
  /\b(?:it\s+|this\s+)?grabs?\s+the\s+(?:reader'?s?|audience'?s?)\s+attention\b/gi,
  /\b(?:it\s+|this\s+)?(?:paints?|creates?|puts?)\s+a\s+(?:vivid\s+)?(?:picture|image)\s+in\s+the\s+(?:reader'?s?|audience'?s?)\s+(?:head|mind)\b/gi,
  /\b(?:it\s+|this\s+)?is\s+very\s+(?:effective|interesting|good|powerful)\s+and\s+flows?\s+well\b/gi,
  /\bthe\s+writer\s+uses?\s+words?\s+to\s+make\s+it\s+interesting\b/gi,
];

function cleanMarkup(s: string): string {
  return (s ?? "")
    .replace(/\{\{|\}\}/g, "")
    .replace(/\*\*|__|\*|_|`/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[−–—]/g, "-");
}

function stripGenericFiller(s: string): string {
  let out = s;
  for (const pat of GENERIC_FILLER) out = out.replace(pat, " ");
  return out;
}

interface WordSpan {
  norm: string;
  start: number;
  end: number;
}

function wordSpans(s: string): WordSpan[] {
  const out: WordSpan[] = [];
  for (const m of s.matchAll(/[a-z0-9]+(?:'[a-z0-9]+)*/gi)) {
    out.push({ norm: m[0].toLowerCase(), start: m.index!, end: m.index! + m[0].length });
  }
  return out;
}

/** Remove verbatim >=4-word runs copied directly from the question stem or embedded extract. */
function stripCopiedStemRuns(question: string, answer: string): string {
  const qWords = wordSpans(cleanMarkup(question));
  const aClean = stripGenericFiller(cleanMarkup(answer));
  if (qWords.length < 4) return aClean;
  const ngrams = new Set<string>();
  for (let i = 0; i + 3 < qWords.length; i++) {
    ngrams.add(`${qWords[i].norm} ${qWords[i + 1].norm} ${qWords[i + 2].norm} ${qWords[i + 3].norm}`);
  }
  const aWords = wordSpans(aClean);
  if (aWords.length < 4) return aClean;
  const copied = new Uint8Array(aWords.length);
  for (let i = 0; i + 3 < aWords.length; i++) {
    const key = `${aWords[i].norm} ${aWords[i + 1].norm} ${aWords[i + 2].norm} ${aWords[i + 3].norm}`;
    if (ngrams.has(key)) {
      copied[i] = copied[i + 1] = copied[i + 2] = copied[i + 3] = 1;
    }
  }
  const chars = aClean.split("");
  let i = 0;
  while (i < aWords.length) {
    if (!copied[i]) {
      i++;
      continue;
    }
    let j = i;
    while (j + 1 < aWords.length && copied[j + 1]) j++;
    let from = aWords[i].start;
    let to = aWords[j].end;
    while (from > 0 && /[%°+$£€₦"']/.test(chars[from - 1])) from--;
    while (to < chars.length && /[%°+"']/.test(chars[to])) to++;
    for (let p = from; p < to; p++) chars[p] = " ";
    i = j + 1;
  }
  return chars.join("");
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeyword(haystack: string, rawKw: string): boolean {
  const kw = cleanMarkup(rawKw).toLowerCase().replace(/\s+/g, " ").trim();
  if (!kw) return false;
  if (kw.length <= 3) {
    const esc = escapeRegex(kw);
    const pre = /^[a-z]/.test(kw) ? "(?<![a-z0-9])" : /^[0-9]/.test(kw) ? "(?<![a-z0-9.])" : "";
    const post = /[a-z]$/.test(kw) ? "(?![a-z0-9])" : /[0-9]$/.test(kw) ? "(?![0-9.])" : "";
    return new RegExp(`${pre}${esc}${post}`).test(haystack);
  }
  return haystack.includes(kw);
}

export function suggestMarks(q: WrittenQ, text: string): boolean[] {
  const raw = stripGenericFiller(cleanMarkup(text)).trim();
  const alphaCheck = raw.replace(/[^a-z0-9'\s]/gi, " ").replace(/\s+/g, " ").trim();
  if (!alphaCheck || alphaCheck.replace(/\s+/g, "").length < 2 || NON_ANSWER.test(alphaCheck)) {
    return q.markScheme.map(() => false);
  }
  const stripped = stripCopiedStemRuns(q.question, raw);
  const t = ` ${stripped.toLowerCase().replace(/\s+/g, " ").trim()} `;
  if (t.trim().length < 2) return q.markScheme.map(() => false);
  return q.markScheme.map((p) => p.keywords.some((k) => matchesKeyword(t, k)));
}

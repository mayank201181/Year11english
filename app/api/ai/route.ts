import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";
import { throttle, takeDailyAllowance } from "@/lib/server/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const DEFAULT_MODEL = "claude-opus-5-5";
const FALLBACK_MODELS = new Set(["claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"]);

const RESTING = "Dr Quill needs a rest — try again tomorrow.";
function dailyLimit(name: string, fallback: number): number {
  const n = Math.floor(Number(process.env[name]));
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

const SYSTEM = `You are Dr Quill, a warm, sharp IGCSE English Language and Literature examiner-coach inside a Year 11 revision app used by Vanishree at Tanglin Trust School in Singapore.
Syllabuses covered:
- IGCSE English Language: OxfordAQA (9270) — Paper 1 (Literary Non-Fiction & Composition) and Paper 2 (Source-Based Reading & Directed Writing).
- IGCSE English Literature: Pearson Edexcel (4ET1) — Paper 1 (Unseen Modern Poetry, Edexcel Poetry Anthology comparison, Of Mice and Men) and Paper 2 (An Inspector Calls, Macbeth).

How you teach (discovery-first, Grade-9 examiner precision):
- Never hand over a complete answer immediately if the learner is mid-question. Ask one Socratic question (e.g. "Zoom onto the single verb — what connotations does it carry?", "How does a 1945 audience react differently from Birling in 1912?"), then let them try.
- Replace empty waffle ("makes the reader want to read on", feature-spotting without effect, bolt-on historical biography) with tight micro-quotations, writer's method, and precise reader/audience effect.
- Use British English spelling. Keep replies concise (2–6 sentences), warm, intellectually respectful, with **bold** key terms and simple "- " bullets where helpful.
- Stay strictly within English Language, English Literature, and exam study skills.`;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function cleanTurns(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return [];
  const turns = raw
    .filter((m): m is ChatTurn => !!m && typeof m === "object" && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-10);
  while (turns.length && turns[0].role !== "user") turns.shift();
  const out: ChatTurn[] = [];
  for (const t of turns) {
    if (out.length && out[out.length - 1].role === t.role) out[out.length - 1] = { role: t.role, content: `${out[out.length - 1].content}\n\n${t.content}` };
    else out.push(t);
  }
  return out;
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Dr Quill isn't switched on for this site yet — ask a grown-up to add an AI key." }, { status: 503 });
  }
  const account = await currentAccount().catch(() => null);
  if (!account) return NextResponse.json({ error: "Dr Quill is available once you're signed in to a family account." }, { status: 401 });
  if (!throttle(`ai:${account.id}`, 30, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Dr Quill needs a short break — try again in a few minutes." }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const turns = cleanTurns(body.messages);
  if (!turns.length || turns[turns.length - 1].role !== "user") return NextResponse.json({ error: "Ask a question first." }, { status: 400 });
  const context = typeof body.context === "string" ? body.context.slice(0, 4000) : "";

  try {
    const allowed =
      (await takeDailyAllowance(`ai-${account.id}`, dailyLimit("AI_ACCOUNT_DAILY_LIMIT", 100))) && (await takeDailyAllowance("ai-site", dailyLimit("AI_DAILY_LIMIT", 300)));
    if (!allowed) return NextResponse.json({ error: RESTING }, { status: 429 });
  } catch {
    return NextResponse.json({ error: "Dr Quill couldn't answer just now. Please try again." }, { status: 503 });
  }

  const messages: Anthropic.Beta.BetaMessageParam[] = turns.map((t, i) => ({
    role: t.role,
    content: i === 0 && context ? `What I'm working on in the app:\n${context}\n\n---\n\n${t.content}` : t.content,
  }));

  const model = process.env.AI_MODEL || DEFAULT_MODEL;
  const client = new Anthropic();
  try {
    const useFallback = FALLBACK_MODELS.has(model);
    const response = await client.beta.messages.create({
      model,
      max_tokens: 2000,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { effort: "low" },
      messages,
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: "Let's keep our chat focused on IGCSE English Language & Literature. What text or paper are you working on?" });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: reply || "I lost my train of thought — could you ask that again?" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Lots of learners are asking Dr Quill right now — try again in a minute." }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error("AI tutor API error", error.status, error.message);
      return NextResponse.json({ error: "Dr Quill couldn't answer just now. Please try again." }, { status: 502 });
    }
    console.error("AI tutor error", error);
    return NextResponse.json({ error: "Dr Quill couldn't answer just now. Please try again." }, { status: 500 });
  }
}

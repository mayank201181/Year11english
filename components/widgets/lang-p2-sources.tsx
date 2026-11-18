"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type SourceKey = "A" | "B" | "C" | "D" | "E";
type LensMode = "synthesis" | "perspectives" | "methods";

interface PackSource {
  key: SourceKey;
  label: string;
  genre: string;
  era: string;
  role: string;
  audience: string;
  tone: string;
  method: string;
  quote: string;
  zoomWord: string;
  zoomNote: string;
  stanceScore: number; // -100 (restrict / caution) to +100 (celebrate / expand)
  registerScore: number; // -100 (intimate / visceral) to +100 (clinical / institutional)
  color: string;
}

const PACK: Record<SourceKey, PackSource> = {
  A: {
    key: "A",
    label: "Source A · Paramedic Memoir",
    genre: "Contemporary Memoir (2024)",
    era: "2024",
    role: "Night-shift A&E Paramedic",
    audience: "General non-fiction readers",
    tone: "Visceral, weary indignation",
    method: "Asyndetic sensory listing + metaphor",
    quote: "blue lights strobing wet cobbles, sirens swallowing sleep, casualties of neon greed",
    zoomWord: "casualties",
    zoomNote: "Warfare lexis frames commercial late-night licensing as inflicting physical collateral damage on crews and revellers alike.",
    stanceScore: -68,
    registerScore: -76,
    color: "#2563eb",
  },
  B: {
    key: "B",
    label: "Source B · Hospitality Report",
    genre: "Economic Policy Briefing (2024)",
    era: "2024",
    role: "Metropolitan Chamber of Commerce",
    audience: "City mayors & licensing committees",
    tone: "Buoyant, technocratic advocacy",
    method: "Quantitative logos + medical vitality metaphor",
    quote: "extended metro hours injected £1.4 billion and sustained 38,000 nocturnal livelihoods",
    zoomWord: "injected",
    zoomNote: "Clinical transfusion metaphor casts 24-hour trading as life-saving economic medicine rather than rowdy excess.",
    stanceScore: 82,
    registerScore: 78,
    color: "#059669",
  },
  C: {
    key: "C",
    label: "Source C · 1894 Parish Archive",
    genre: "Victorian Municipal Minute (1894)",
    era: "1894",
    role: "Chief Gas-Lamp & Watch Inspector",
    audience: "Aldermen & ratepayers",
    tone: "Paternalistic, moralising vigilance",
    method: "Antithesis + hierarchical diction",
    quote: "well-governed lamplight shields thrifty artisans, yet uncurbed midnight taverns breed unruly folly",
    zoomWord: "uncurbed",
    zoomNote: "Equine/reining metaphor treats working-class citizens as unruly horses needing firm municipal supervision after dark.",
    stanceScore: -32,
    registerScore: 46,
    color: "#d97706",
  },
  D: {
    key: "D",
    label: "Source D · Broadsheet Column",
    genre: "Satirical Opinion Column (2024)",
    era: "2024",
    role: "Urban Culture Columnist",
    audience: "Broadsheet subscribers",
    tone: "Sardonic, bathetic mockery",
    method: "Litotes + comic bathos",
    quote: "calling our city twenty-four-hour when the last bus vanishes at eleven is scarcely a triumph of cosmopolitan glamour",
    zoomWord: "scarcely a triumph",
    zoomNote: "Dry litotes punctures civic boasting by contrasting international metropolis hype against stranded commuters.",
    stanceScore: 48,
    registerScore: -28,
    color: "#db2777",
  },
  E: {
    key: "E",
    label: "Source E · Sleep Lab Factfile",
    genre: "Epidemiological Factfile (2023)",
    era: "2023",
    role: "Circadian Neuroscience Institute",
    audience: "Public-health regulators",
    tone: "Clinical, forensic warning",
    method: "Causal ratios + impersonal register",
    quote: "chronic graveyard-shift disruption elevates metabolic syndrome incidence by 29% across five-year cohorts",
    zoomWord: "29%",
    zoomNote: "Longitudinal cohort ratio strips away melodrama to establish indisputable biological cost via rational logos.",
    stanceScore: -62,
    registerScore: 86,
    color: "#7c3aed",
  },
};

const KEYS: SourceKey[] = ["A", "B", "C", "D", "E"];

function buildComparison(s1: PackSource, s2: PackSource, lens: LensMode) {
  const sameSign = (s1.stanceScore >= 0 && s2.stanceScore >= 0) || (s1.stanceScore < 0 && s2.stanceScore < 0);
  const relation = sameSign ? "Convergent Concern, Divergent Lens" : "Divergent Ideological Stances";
  const hinge = sameSign
    ? `Corroborating this stance — albeit shifting from ${s1.tone.toLowerCase()} to ${s2.tone.toLowerCase()} — ${s2.label.split(" · ")[0]}`
    : `Diametrically opposed in agenda, ${s2.label.split(" · ")[0]} counters ${s1.label.split(" · ")[0]}'s ${s1.tone.toLowerCase()} with ${s2.tone.toLowerCase()}, as`;

  const band2 = `${s1.label.split(" · ")[0]} is a ${s1.genre.toLowerCase()} that says "${s1.quote}". This makes the reader want to read on. Also, ${s2.label.split(" · ")[0]} says "${s2.quote}", which shows the writer's opinion clearly.`;

  let grade9 = "";
  if (lens === "synthesis") {
    grade9 = sameSign
      ? `Both ${s1.label.split(" · ")[0]} and ${s2.label.split(" · ")[0]} highlight acute pressures surrounding the twenty-four-hour city, yet they diagnose its stakes at contrasting scales: ${s1.role.toLowerCase()} foregrounds "${s1.zoomWord}" from lived experience, whereas ${s2.role.toLowerCase()} anchors the issue in "${s2.zoomWord}" for ${s2.audience.toLowerCase()}.`
      : `Synthesising ${s1.label.split(" · ")[0]} and ${s2.label.split(" · ")[0]} exposes the central trade-off of nocturnal cities: what ${s1.label.split(" · ")[0]} frames through "${s1.zoomWord}" from the vantage point of a ${s1.role.toLowerCase()}, ${s2.label.split(" · ")[0]} reframes via "${s2.zoomWord}" to prioritise ${s2.audience.toLowerCase()}.`;
  } else if (lens === "perspectives") {
    grade9 = `Whereas ${s1.label.split(" · ")[0]} adopts ${s1.tone.toLowerCase()} shaped by a ${s1.role.toLowerCase()}'s direct stake ("${s1.zoomWord}"), ${s2.label.split(" · ")[0]} shifts into ${s2.tone.toLowerCase()} ("${s2.zoomWord}"). Ultimately, this divergence reflects positionality: ${s1.label.split(" · ")[0]} addresses ${s1.audience.toLowerCase()}, whilst ${s2.label.split(" · ")[0]} writes in ${s2.era} for ${s2.audience.toLowerCase()}.`;
  } else {
    grade9 = `Both writers craft purposeful rhetoric on night-time urban life, yet their methods pull reader alignment in distinct directions. ${s1.label.split(" · ")[0]} deploys ${s1.method.toLowerCase()}, zooming onto "${s1.zoomWord}" — ${s1.zoomNote.charAt(0).toLowerCase() + s1.zoomNote.slice(1)} ${hinge} relies on ${s2.method.toLowerCase()} ("${s2.zoomWord}") to persuade ${s2.audience.toLowerCase()}.`;
  }

  return { relation, hinge, band2, grade9 };
}

function MultiSourceMatrixWidget() {
  const [first, setFirst] = useState<SourceKey>("A");
  const [second, setSecond] = useState<SourceKey>("B");
  const [lens, setLens] = useState<LensMode>("methods");
  const [showBand2, setShowBand2] = useState(false);

  const pickFirst = (k: SourceKey) => {
    setFirst(k);
    if (k === second) setSecond(KEYS.find((x) => x !== k) ?? "B");
  };
  const pickSecond = (k: SourceKey) => {
    setSecond(k);
    if (k === first) setFirst(KEYS.find((x) => x !== k) ?? "A");
  };

  const s1 = PACK[first];
  const s2 = PACK[second];
  const comp = buildComparison(s1, s2, lens);

  const mapX = (stance: number) => 260 + stance * 1.9;
  const mapY = (reg: number) => 115 - reg * 0.78;

  return (
    <WidgetFrame
      title="Multi-Source Synthesis & Perspective Matrix"
      tryThis={[
        "Pair **Source A** (Paramedic) with **Source E** (Sleep Lab) to see **convergent concern** across visceral vs clinical methods.",
        "Pair **Source B** (Chamber of Commerce) with **Source C** (1894 Inspector) to test how **era and vested interest** split perspective.",
        "Switch between **Synthesis**, **Perspectives**, and **Methods** to watch your **WEAVE** paragraph adapt to the exact exam command word!",
      ]}
      caption={
        <div>
          <strong>Examiner takeaway:</strong> Notice how plotting two texts on <em>Stance</em> (horizontal) vs <em>Register</em> (vertical) instantly reveals whether you need a <strong>convergent-with-nuance hinge</strong> (same half horizontally, split vertically) or a <strong>divergent hinge</strong> (opposite sides).
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Select First Stimulus Text</div>
            <Segmented
              label="First source"
              value={first}
              onChange={pickFirst}
              options={KEYS.map((k) => ({ value: k, label: `Source ${k}` }))}
            />
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Select Paired Stimulus Text</div>
            <Segmented
              label="Second source"
              value={second}
              onChange={pickSecond}
              options={KEYS.map((k) => ({ value: k, label: `Source ${k}` }))}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Question stem lens"
            value={lens}
            onChange={setLens}
            options={[
              { value: "synthesis", label: "What: Synthesis" },
              { value: "perspectives", label: "Why: Perspectives" },
              { value: "methods", label: "How: Methods (WEAVE)" },
            ]}
          />
          <button
            type="button"
            onClick={() => setShowBand2((v) => !v)}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink hover:bg-surface-2"
          >
            {showBand2 ? "Hide Band-2 Silo Trap" : "Compare vs Band-2 Silo Trap"}
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 520 230"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Two-dimensional source pack map plotting all five stimulus texts across Stance and Register"
            className="w-full h-auto"
          >
            <rect x="8" y="8" width="504" height="214" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
            <line x1="56" y1="115" x2="464" y2="115" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="260" y1="26" x2="260" y2="204" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="260" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
              CLINICAL / INSTITUTIONAL REGISTER
            </text>
            <text x="260" y="216" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
              INTIMATE / VISCERAL / SATIRICAL VOICE
            </text>
            <text x="62" y="108" fontSize="9.5" fontWeight="700" fill="#b91c1c">
              ← CAUTION / REFORM
            </text>
            <text x="458" y="108" textAnchor="end" fontSize="9.5" fontWeight="700" fill="#047857">
              EXPAND 24-HR CITY →
            </text>

            <line
              x1={mapX(s1.stanceScore)}
              y1={mapY(s1.registerScore)}
              x2={mapX(s2.stanceScore)}
              y2={mapY(s2.registerScore)}
              stroke="#0f172a"
              strokeWidth="2.2"
              strokeDasharray="5 4"
            />

            {KEYS.map((k) => {
              const item = PACK[k];
              const cx = mapX(item.stanceScore);
              const cy = mapY(item.registerScore);
              const active = k === first || k === second;
              return (
                <g key={k}>
                  {active ? <circle cx={cx} cy={cy} r="16" fill={item.color} opacity="0.18" /> : null}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={active ? 11 : 7.5}
                    fill={item.color}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <text
                    x={cx}
                    y={cy + 3.5}
                    textAnchor="middle"
                    fontSize={active ? "10.5" : "9"}
                    fontWeight="800"
                    fill="#ffffff"
                  >
                    {k}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[s1, s2].map((s) => (
            <div key={s.key} className="rounded-xl border border-line bg-surface p-3.5 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-extrabold text-ink">{s.label}</span>
                <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-bold text-ink-2">{s.era}</span>
              </div>
              <div className="text-xs text-ink-2">
                <strong>GAP:</strong> {s.genre} · <em>{s.role}</em> → {s.audience}
              </div>
              <div className="text-xs text-ink-2">
                <strong>Tone:</strong> {s.tone} · <strong>Method:</strong> {s.method}
              </div>
              <blockquote className="rounded-lg bg-surface-2 p-2 text-xs italic text-ink">
                “{s.quote}”
              </blockquote>
              <div className="text-xs text-ink-2">
                <strong>Zoom (“{s.zoomWord}”):</strong> {s.zoomNote}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Readout label="Pairing Diagnosis" value={comp.relation} tone="brand" />
          <Readout label="Active Stem Gear" value={lens.toUpperCase()} tone="good" />
        </div>

        {showBand2 ? (
          <div className="rounded-xl border border-bad/40 bg-surface-2 p-3 text-sm text-ink space-y-1">
            <div className="text-xs font-extrabold uppercase tracking-wide text-bad">
              Band-2 Sequential Silo Trap (Capped Marks)
            </div>
            <p className="leading-relaxed">{comp.band2}</p>
          </div>
        ) : null}

        <div className="rounded-xl border border-good/40 bg-surface p-3.5 text-sm text-ink space-y-1.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-good">
            Grade-9 Woven Model ({lens === "synthesis" ? "BRIDGE Synthesis" : lens === "perspectives" ? "Positionality & Tone" : "Full WEAVE Method Comparison"})
          </div>
          <p className="leading-relaxed">{comp.grade9}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "multi-source-synthesis-matrix",
    title: "Multi-Source Synthesis & Perspective Matrix",
    blurb: "Compare any pair from a 5-text Paper 2A dossier across GAP-R, Tone, Method & Positionality, and generate woven Grade-9 paragraphs.",
    Component: MultiSourceMatrixWidget,
  },
];

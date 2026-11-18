"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Slider, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// WIDGET 1: Quote & Method Micro-Zoom Analyser
// ---------------------------------------------------------------------------
interface ZoomTarget {
  id: string;
  label: string;
  layer: "Lexical" | "Syntactic" | "Structural";
  microQuote: string;
  singleWord: string;
  wordClass: string;
  connotations: [string, string];
  band2Trap: string;
  grade9Petal: string;
}

interface ExtractSample {
  id: string;
  title: string;
  genre: string;
  passage: string;
  toneSummary: string;
  targets: ZoomTarget[];
}

const EXTRACTS: ExtractSample[] = [
  {
    id: "arctic",
    title: "Arctic Ridge Diary",
    genre: "Expedition Memoir",
    passage:
      "For six hours the blizzard interrogated every seam of our canvas tent, prying at the guy-ropes with white scalpels — until abruptly, at midnight, the wind dropped. Silence. A brittle, trespassing silence.",
    toneSummary: "Claustrophobic siege pivoting to eerie, humbled awe",
    targets: [
      {
        id: "interrogated",
        label: "Lexical: 'interrogated'",
        layer: "Lexical",
        microQuote: "blizzard interrogated every seam",
        singleWord: "interrogated",
        wordClass: "Dynamic transitive verb (personification)",
        connotations: [
          "Relentless police/military questioning probing systematically for weakness",
          "Grants blind weather hostile, calculating intelligence against fragile 'canvas'",
        ],
        band2Trap:
          "The writer uses personification in 'the blizzard interrogated every seam of our canvas tent' which paints a vivid picture in the reader's head and shows the storm was very strong and loud.",
        grade9Petal:
          "Personifying the storm through the dynamic verb 'interrogated' transforms blind weather into a calculating inquisitor. Specifically, 'interrogated' carries connotations of relentless, systematic probing for vulnerability, exposing how precarious the explorers' thin 'canvas' barrier truly is.",
      },
      {
        id: "scalpels",
        label: "Imagery: 'white scalpels'",
        layer: "Lexical",
        microQuote: "prying... with white scalpels",
        singleWord: "scalpels",
        wordClass: "Concrete noun (surgical metaphor)",
        connotations: [
          "Razor-sharp surgical blades capable of slicing skin cleanly without mercy",
          "Clinical, sterile coldness — nature dissects human trespassers impassively",
        ],
        band2Trap:
          "The metaphor 'white scalpels' shows the snow is white and sharp like a knife, making the reader feel scared for the climbers.",
        grade9Petal:
          "The surgical metaphor 'white scalpels' fuses sub-zero colour with clinical lethality: zooming onto 'scalpels' evokes razor-edged precision slicing cleanly through protective fabric, framing the Arctic as an operating theatre indifferent to human survival.",
      },
      {
        id: "silence",
        label: "Syntax: 'Silence.' drop",
        layer: "Syntactic",
        microQuote: "wind dropped. Silence.",
        singleWord: "Silence.",
        wordClass: "Em-dash pivot + one-word minor sentence",
        connotations: [
          "Abrupt syntactic arrest severs the 26-word cumulative storm clause",
          "Replaces acoustic assault with uncanny, suffocating vacuum ('brittle, trespassing')",
        ],
        band2Trap:
          "The writer uses a very short sentence 'Silence.' for dramatic impact and to hook the reader so they want to read on.",
        grade9Petal:
          "Following a sprawling multi-clause sentence of relentless wind, the em-dash hinge and one-word minor fragment 'Silence.' sever momentum instantaneously — forcing the reader to experience the disorienting acoustic vacuum before 'trespassing' reframes the climbers as intruders.",
      },
    ],
  },
  {
    id: "warehouse",
    title: "Automated Fulfilment Hub",
    genre: "Investigative Journalism",
    passage:
      "Two thousand tangerine robots glided in silent ballet across polished concrete; between their lanes, a lone seasonal picker sprinted while her wrist-scanner bleeped a crimson countdown: eleven seconds to aisle nine.",
    toneSummary: "Ambivalent marvel turning into quiet moral indictment",
    targets: [
      {
        id: "ballet",
        label: "Lexical: 'silent ballet'",
        layer: "Lexical",
        microQuote: "glided in silent ballet",
        singleWord: "ballet",
        wordClass: "Abstract noun (choreographic metaphor)",
        connotations: [
          "Effortless, rehearsed artistic grace and serene poise",
          "Ironic elevation — machines enjoy aesthetic dignity denied to human staff",
        ],
        band2Trap:
          "The writer uses a metaphor 'silent ballet' to show the robots move nicely like dancers and do not make noise.",
        grade9Petal:
          "Initially, the writer concedes technological wonder through the choreographic metaphor 'silent ballet': 'ballet' connotes poised, effortless artistry, granting inanimate machines a serene dignity that sharpens the subsequent human contrast.",
      },
      {
        id: "semicolon",
        label: "Structure: ';' fulcrum",
        layer: "Structural",
        microQuote: "concrete; between their lanes",
        singleWord: ";",
        wordClass: "Semicolon antithesis + panoramic-to-individual zoom",
        connotations: [
          "Pivots camera from 2,000 collective robots onto 1 isolated human ('lone')",
          "Inverts power hierarchy: machines 'glided' serenely whereas the human 'sprinted'",
        ],
        band2Trap:
          "Then in the second half of the sentence the writer talks about a worker running fast so the reader feels sorry for her.",
        grade9Petal:
          "Structurally, the semicolon acts as an ethical fulcrum, zooming from a 2,000-robot panorama onto a 'lone' worker and inverting verb agency: effortless mechanical 'glided' collides against panicked human 'sprinted'.",
      },
      {
        id: "colon",
        label: "Syntax: ': eleven seconds'",
        layer: "Syntactic",
        microQuote: "countdown: eleven seconds",
        singleWord: "crimson",
        wordClass: "Colon reveal + sensory modifier",
        connotations: [
          "Colon unveils relentless algorithmic surveillance governing every breath",
          "'Crimson' carries connotations of alarm, blood-rush, and punitive warning",
        ],
        band2Trap:
          "The colon introduces the time left on her scanner, showing she only has eleven seconds which builds lots of tension.",
        grade9Petal:
          "The colon snaps focus onto the unforgiving metric 'eleven seconds to aisle nine', while the modifier 'crimson' tinges digital surveillance with connotations of alarm and bodily strain — exposing efficiency achieved by mechanising human beings.",
      },
    ],
  },
  {
    id: "harbour",
    title: "Return to Saltwick Quay",
    genre: "Autobiographical Travelogue",
    passage:
      "Cottages where herring-gutters once thawed split knuckles beside peat fires now advertise 'bespoke coastal serenity' at eight hundred pounds a weekend; the quay has never looked neater, brighter, or more thoroughly dead.",
    toneSummary: "Sardonic satire blended with elegiac grief for erased community",
    targets: [
      {
        id: "knuckles",
        label: "Lexical: 'split knuckles'",
        layer: "Lexical",
        microQuote: "thawed split knuckles",
        singleWord: "split",
        wordClass: "Visceral participial modifier",
        connotations: [
          "Raw, painful manual labour etched physically into working-class skin",
          "Authentic historical livelihood grounded in survival rather than aesthetics",
        ],
        band2Trap:
          "Saying 'split knuckles' shows that gutting fish in the old days hurt people's hands in the cold winter.",
        grade9Petal:
          "Visceral tactile imagery in 'thawed split knuckles' grounds the island's past in raw, weathered manual labour — establishing an authentic working-class vitality against which modern tourist luxury feels synthetic.",
      },
      {
        id: "scarequotes",
        label: "Viewpoint: scare quotes",
        layer: "Structural",
        microQuote: "'bespoke coastal serenity'",
        singleWord: "bespoke",
        wordClass: "Ironic scare quotes + marketing register",
        connotations: [
          "Ventriloquises glossy estate-agent jargon to mock commodified peace",
          "Juxtaposes pampered £800 escapism directly against vanished working families",
        ],
        band2Trap:
          "The quote 'bespoke coastal serenity' tells us the cottages are now really peaceful and expensive to rent.",
        grade9Petal:
          "Enclosing ''bespoke coastal serenity'' in sardonic scare quotes distances the writer from pretentious holiday-let branding, exposing how commercial gentrification repackages a working harbour as an exclusive toy for wealthy outsiders.",
      },
      {
        id: "tricolon",
        label: "Syntax: subverted tricolon",
        layer: "Syntactic",
        microQuote: "neater, brighter, or more thoroughly dead",
        singleWord: "dead",
        wordClass: "Subverted comparative tricolon (bathos/sting)",
        connotations: [
          "First two adjectives ('neater, brighter') feign admiration for cosmetic polish",
          "Blunt monosyllable 'dead' springs an elegiac trap: prettiness = social extinction",
        ],
        band2Trap:
          "The rule of three at the end uses the word 'dead' to shock the reader and show nobody lives there anymore.",
        grade9Petal:
          "Across the closing tricolon, two upbeat comparatives ('neater, brighter') lull the reader into expecting praise before the blunt monosyllable 'dead' subverts the cadence — indicting cosmetic preservation that hollows out living community.",
      },
    ],
  },
];

function MicroZoomAnalyser() {
  const [extractId, setExtractId] = useState<string>("arctic");
  const [targetIdx, setTargetIdx] = useState<number>(0);
  const [band, setBand] = useState<"band2" | "grade9">("grade9");

  const ex = EXTRACTS.find((e) => e.id === extractId) ?? EXTRACTS[0];
  const safeIdx = Math.min(targetIdx, ex.targets.length - 1);
  const target = ex.targets[safeIdx];

  return (
    <WidgetFrame
      title="Quote & Method Micro-Zoom Analyser"
      tryThis={[
        "Switch between **Arctic Ridge**, **Automated Hub**, and **Saltwick Quay**, then click each craft target.",
        "Toggle **Band-2 Trap** vs **Grade-9 PETAL** to see how single-word connotative zoom eliminates waffle.",
      ]}
      caption={
        <span>
          <strong>Overall Viewpoint Thesis:</strong> {ex.toneSummary}. Notice how every Grade-9 paragraph embeds{" "}
          <strong>≤5 words</strong> and isolates <strong>1 word</strong> (<em>“{target.singleWord}”</em>) for dual connotations.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select Literary Non-Fiction Extract"
            options={EXTRACTS.map((e) => ({ value: e.id, label: e.title }))}
            value={extractId}
            onChange={(v) => {
              setExtractId(v);
              setTargetIdx(0);
            }}
          />
          <Segmented
            label="Compare Response Band"
            options={[
              { value: "band2", label: "❌ Band-2 Waffle" },
              { value: "grade9", label: "✅ Grade-9 PETAL" },
            ]}
            value={band}
            onChange={setBand}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <div className="mb-1 text-xs font-bold uppercase tracking-wide text-brand">
            {ex.genre} — Unseen Mini-Extract
          </div>
          <p className="font-serif text-base leading-relaxed text-ink">“{ex.passage}”</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {ex.targets.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTargetIdx(idx)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                idx === safeIdx
                  ? "border-brand bg-brand text-white shadow-sm"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              🔍 {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Ring 1: Micro-Quote (2–5w)" value={`"${target.microQuote}"`} tone="brand" />
          <Readout label="Ring 2: Zoom Word" value={`"${target.singleWord}"`} tone="good" />
          <Readout label="Craft Layer" value={target.layer} tone="ink" />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3.5 text-sm">
          <div className="font-bold text-ink">Method &amp; Dual Connotations ({target.wordClass}):</div>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-ink-2">
            <li>{target.connotations[0]}</li>
            <li>{target.connotations[1]}</li>
          </ul>
        </div>

        <div
          className={`rounded-xl border-2 p-4 text-sm leading-relaxed ${
            band === "grade9"
              ? "border-emerald-500/50 bg-emerald-500/10 text-ink"
              : "border-rose-500/50 bg-rose-500/10 text-ink"
          }`}
        >
          <div className="mb-1 text-xs font-extrabold uppercase tracking-wider">
            {band === "grade9"
              ? "✅ Grade-9 Examiner Verdict: Perceptive Micro-Zoom (Level 4)"
              : "❌ Band-2 Examiner Verdict: Feature-Spotting / Empty Cliché"}
          </div>
          <p>{band === "grade9" ? target.grade9Petal : target.band2Trap}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// WIDGET 2: Structural Shift & Tension Tracker Across 4 Sections
// ---------------------------------------------------------------------------
interface SectionBeat {
  sec: number;
  lens: string;
  tension: number;
  summary: string;
  structuralMove: string;
  whyHere: string;
}

interface ArcScenario {
  id: string;
  title: string;
  beats: [SectionBeat, SectionBeat, SectionBeat, SectionBeat];
}

const ARCS: ArcScenario[] = [
  {
    id: "lighthouse",
    title: "Abandoned Lighthouse Memoir",
    beats: [
      {
        sec: 1,
        lens: "Wide Panoramic Shot",
        tension: 22,
        summary: "Sunlit August cliffs; carefree tourists photographing gulls around the white tower.",
        structuralMove: "Baseline Equilibrium",
        whyHere: "Lulls the reader into postcard serenity so later decay and storm trauma strike by stark contrast.",
      },
      {
        sec: 2,
        lens: "Extreme Close-Up Zoom",
        tension: 54,
        summary: "Camera narrows onto a rusted padlock and salt-peeled 1979 warning plate on the oak door.",
        structuralMove: "Panoramic-to-Micro Zoom + Withholding",
        whyHere: "Punctures holiday warmth with an unexplained anomaly, planting quiet foreboding without clichés.",
      },
      {
        sec: 3,
        lens: "Temporal Shift (Analepsis)",
        tension: 88,
        summary: "Flashback to December 1979: the narrator's grandfather tending the failing lamp alone in a hurricane.",
        structuralMove: "Analepsis (Flashback) + Climax",
        whyHere: "Ruptures linear chronology to reveal the human sacrifice hidden behind Section 2's rusted lock.",
      },
      {
        sec: 4,
        lens: "Transformed Wide Shot",
        tension: 40,
        summary: "Return to present dusk; tourists gone, unlit lantern glass catching one last crimson streak of sunset.",
        structuralMove: "Transformed Cyclical Return",
        whyHere: "Echoes Section 1's cliffs at twilight, transforming carefree scenery into elegiac remembrance.",
      },
    ],
  },
  {
    id: "glacier",
    title: "Solo Crevasse Survival",
    beats: [
      {
        sec: 1,
        lens: "In Medias Res Close-Up",
        tension: 85,
        summary: "Opens dangling upside-down in blue darkness from one jammed ice-screw.",
        structuralMove: "In Medias Res Hook",
        whyHere: "Drops the reader immediately into mortal jeopardy, bypassing slow base-camp exposition.",
      },
      {
        sec: 2,
        lens: "Analepsis (2 Hours Earlier)",
        tension: 35,
        summary: "Steps back to crisp dawn coffee and overconfident laughter as the narrator skipped roping up.",
        structuralMove: "Retrospective Irony + Backstory",
        whyHere: "Knowing Section 1's fall already happened charges every casual boast in Section 2 with dramatic irony.",
      },
      {
        sec: 3,
        lens: "Micro-Sensory Interiority",
        tension: 94,
        summary: "Back in the crevasse: numb fingers inching a penknife toward the tangled pack-strap as ice groans.",
        structuralMove: "Slow-Motion Interior Pivot",
        whyHere: "Compresses external geography down to millimetres of steel and breath at peak suspense.",
      },
      {
        sec: 4,
        lens: "Panoramic Pull-Back",
        tension: 48,
        summary: "Crawling onto sunlit snow-crust alone — vast silent peaks indifferent to human survival.",
        structuralMove: "Scale Inversion (Micro → Vast)",
        whyHere: "Pulling the lens suddenly wide dwarfs human triumph beneath nature's sublime indifference.",
      },
    ],
  },
];

function StructuralShiftTracker() {
  const [arcId, setArcId] = useState<string>("lighthouse");
  const [secNum, setSecNum] = useState<number>(1);

  const arc = ARCS.find((a) => a.id === arcId) ?? ARCS[0];
  const beat = arc.beats[secNum - 1];

  const xs = [65, 205, 345, 485];
  const yOf = (t: number) => 148 - (t / 100) * 108;
  const polyPoints = arc.beats.map((b, i) => `${xs[i]},${yOf(b.tension)}`).join(" ");

  return (
    <WidgetFrame
      title="4-Section Structural Shift & Tension Tracker"
      tryThis={[
        "Scrub across **Section 1 → Section 4** to watch camera lens and tension shift.",
        "Compare a **Pan-Zoom-Flashback-Cycle** arc against an **In Medias Res** survival arc.",
      ]}
      caption={
        <span>
          <strong>Structural Stem for Section {beat.sec}:</strong>{" "}
          <em>
            “In Section {beat.sec}, the writer deploys <strong>{beat.structuralMove.toLowerCase()}</strong> ({beat.lens.toLowerCase()}):{" "}
            {beat.whyHere.charAt(0).toLowerCase() + beat.whyHere.slice(1)}”
          </em>
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose Whole-Text Structural Architecture"
          options={ARCS.map((a) => ({ value: a.id, label: a.title }))}
          value={arcId}
          onChange={(v) => {
            setArcId(v);
            setSecNum(1);
          }}
        />

        <Slider
          label="Scrub Paper 1A Numbered Section"
          value={secNum}
          min={1}
          max={4}
          step={1}
          onChange={setSecNum}
          format={(v) => `Section ${v} of 4`}
        />

        <svg
          viewBox="0 0 550 175"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Tension curve across four numbered sections of a Paper 1A extract"
          className="w-full rounded-xl border border-line bg-surface-2"
        >
          <line x1="40" y1="148" x2="515" y2="148" stroke="#94a3b8" strokeWidth={1.5} />
          <line x1="40" y1="40" x2="515" y2="40" stroke="#cbd5e1" strokeWidth={1} strokeDasharray="4 4" />
          <text x="12" y="44" fontSize={9} fontWeight={700} fill="#64748b">HIGH</text>
          <text x="12" y="150" fontSize={9} fontWeight={700} fill="#64748b">LOW</text>
          <polyline fill="none" stroke="#6366f1" strokeWidth={3} points={polyPoints} />
          {arc.beats.map((b, i) => {
            const active = b.sec === secNum;
            const cx = xs[i];
            const cy = yOf(b.tension);
            return (
              <g key={b.sec} onClick={() => setSecNum(b.sec)} className="cursor-pointer">
                <circle
                  cx={cx}
                  cy={cy}
                  r={active ? 9 : 6}
                  fill={active ? "#4f46e5" : "#ffffff"}
                  stroke="#4f46e5"
                  strokeWidth={2.5}
                />
                <text x={cx} y={166} textAnchor="middle" fontSize={11} fontWeight={active ? 800 : 600} fill="#1e293b">
                  Sec {b.sec}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Camera / Timeline Lens" value={beat.lens} tone="brand" />
          <Readout label="Structural Device" value={beat.structuralMove} tone="good" />
          <Readout label="Tension Index" value={`${beat.tension} / 100`} tone="ink" />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3.5 text-sm space-y-1.5">
          <div>
            <span className="font-bold text-ink">What happens in Section {beat.sec}: </span>
            <span className="text-ink-2">{beat.summary}</span>
          </div>
          <div>
            <span className="font-bold text-brand">Why THIS detail HERE (Grade-9 Structure): </span>
            <span className="text-ink">{beat.whyHere}</span>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "lang-p1-reading-micro-zoom",
    title: "Quote & Method Micro-Zoom Analyser",
    blurb: "Zoom from 2–5 word micro-quotations onto single words and compare Band-2 waffle against Grade-9 PETAL paragraphs.",
    Component: MicroZoomAnalyser,
  },
  {
    id: "lang-p1-reading-structure-tracker",
    title: "4-Section Structural Shift & Tension Tracker",
    blurb: "Scrub across numbered sections to see how camera zoom, flashbacks, and cyclical framing engineer reader alignment.",
    Component: StructuralShiftTracker,
  },
];

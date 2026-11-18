"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Slider, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// WIDGET 1: 5-Lens Descriptive Camera Zoom Workbench (ZOOM-5)
// ---------------------------------------------------------------------------
interface LensBox {
  box: number;
  lensName: string;
  focalRadius: number;
  craftFocus: string;
  band2Trap: string;
  grade9Prose: string;
}

interface ScenePreset {
  id: string;
  title: string;
  extendedMetaphor: string;
  lenses: [LensBox, LensBox, LensBox, LensBox, LensBox];
}

const SCENES: ScenePreset[] = [
  {
    id: "station",
    title: "Midnight Railway Terminus",
    extendedMetaphor: "Cavernous sleeping cathedral of iron & amber",
    lenses: [
      {
        box: 1,
        lensName: "1. Wide Sky & Pathetic Fallacy",
        focalRadius: 72,
        craftFocus: "Establish mood via sullen weather + chromatic light",
        band2Trap:
          "It was midnight at the train station and the sky outside was pitch black and raining really hard.",
        grade9Prose:
          "Above the soot-darkened glass vault, sleepless November drizzle drummed insistent fingers against iron ribs while sodium streetlamps bled bruised amber across the clouds.",
      },
      {
        box: 2,
        lensName: "2. Mid-Ground Extended Metaphor",
        focalRadius: 54,
        craftFocus: "Sustain architectural / organism metaphor across space",
        band2Trap:
          "The platforms were empty and scary. Suddenly a mysterious man in a black hood ran past me!",
        grade9Prose:
          "Empty platforms stretched parallel like the nave of an abandoned iron cathedral; overhead, departure boards clicked through blank black psalms to rows of chained luggage trolleys.",
      },
      {
        box: 3,
        lensName: "3. Macro Micro-Object Zoom",
        focalRadius: 20,
        craftFocus: "Zoom inches close onto 1 tiny overlooked object",
        band2Trap:
          "There was rubbish lying on the wet floor near the bench where I stood waiting.",
        grade9Prose:
          "Wedged beside a cast-iron bench leg, a single sodden return-ticket softened into pale pulp — its purple ink bleeding indistinct across a sheen of spilled coffee.",
      },
      {
        box: 4,
        lensName: "4. Olfactory, Auditory & Tactile Shift",
        focalRadius: 36,
        craftFocus: "Close your eyes: smell + ambient sound + cold touch",
        band2Trap:
          "The station smelled bad like trains and felt very cold on my hands.",
        grade9Prose:
          "Metallic ozone and stale diesel lingered sharp in the tunnel draught, chilling my knuckles inside damp wool pockets; far down Track Four, a leaking gutter-pipe metered out hollow seconds.",
      },
      {
        box: 5,
        lensName: "5. Transformed Sky / Cyclical Close",
        focalRadius: 68,
        craftFocus: "Return upward with altered light/weather echo",
        band2Trap:
          "Finally my train arrived and I jumped on happily and went home to bed.",
        grade9Prose:
          "High in the glass vault, the drumming rain slackened at last to silver mist — twin white headlamps piercing the tunnel mouth to wake the sleeping iron ribs.",
      },
    ],
  },
  {
    id: "market",
    title: "Pre-Monsoon Spice Bazaar",
    extendedMetaphor: "Simmering copper cauldron under storm pressure",
    lenses: [
      {
        box: 1,
        lensName: "1. Wide Sky & Pathetic Fallacy",
        focalRadius: 72,
        craftFocus: "Brassy oppressive heat + brooding thunderheads",
        band2Trap:
          "The sun was hot as fire above the market and big grey clouds were coming soon.",
        grade9Prose:
          "Swollen violet thunderheads crouched low over the parapet roofs, clamping a lid of brassy, breathless humidity down onto the tangled market lanes.",
      },
      {
        box: 2,
        lensName: "2. Mid-Ground Extended Metaphor",
        focalRadius: 54,
        craftFocus: "Awnings & stalls as a pressurized cauldron",
        band2Trap:
          "Lots of sellers were shouting loudly and selling colourful spices everywhere.",
        grade9Prose:
          "Beneath patchwork tarpaulins sagging with heat, the narrow lane simmered like an overfilled copper pot: scooters wove between burlap sacks while brass balance-pans chimed.",
      },
      {
        box: 3,
        lensName: "3. Macro Micro-Object Zoom",
        focalRadius: 20,
        craftFocus: "Single spice scoop & calloused thumb detail",
        band2Trap:
          "One seller scooped yellow turmeric powder into a small paper bag.",
        grade9Prose:
          "Across a scarred cedar counter, a merchant's thumb — stained marigold-gold in every skin crease — levelled a tin scoop of turmeric so fine a stray breath lifted saffron dust.",
      },
      {
        box: 4,
        lensName: "4. Olfactory, Auditory & Tactile Shift",
        focalRadius: 36,
        craftFocus: "Cardamom, roasting chilli, sticky heat & first gust",
        band2Trap:
          "The spices smelled really strong and spicy and made my nose tickle.",
        grade9Prose:
          "Crushed cardamom, charred flatbread, and blistered green chillies prickled the back of the throat; abruptly, one cool damp gust rippled the canvas overhead.",
      },
      {
        box: 5,
        lensName: "5. Transformed Sky / Cyclical Close",
        focalRadius: 68,
        craftFocus: "Cloudburst release + rising petrichor",
        band2Trap:
          "Then it started raining heavily so everyone ran inside the shops.",
        grade9Prose:
          "Overhead, the bruised violet lid split open: warm sheet-rain drummed the tarpaulins taut, lifting rich petrichor from baked red cobbles.",
      },
    ],
  },
];

function CameraZoomWorkbench() {
  const [sceneId, setSceneId] = useState<string>("station");
  const [boxNum, setBoxNum] = useState<number>(1);
  const [mode, setMode] = useState<"grade9" | "band2">("grade9");

  const preset = SCENES.find((s) => s.id === sceneId) ?? SCENES[0];
  const lens = preset.lenses[boxNum - 1];

  return (
    <WidgetFrame
      title="5-Lens Descriptive Camera Zoom Workbench (ZOOM-5)"
      tryThis={[
        "Scrub from **Box 1 (Wide Sky)** down to **Box 3 (Macro Close-Up)** and back out to **Box 5**.",
        "Toggle **Band-2 Plot/Telling Trap** vs **Grade-9 Sensory Craft** on each lens.",
      ]}
      caption={
        <span>
          <strong>Sustained Metaphor Spine:</strong> <em>{preset.extendedMetaphor}</em>. Notice zero car chases or melodrama —{" "}
          <strong>camera movement + sensory shifts</strong> drive all five paragraphs!
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select Descriptive Setting"
            options={SCENES.map((s) => ({ value: s.id, label: s.title }))}
            value={sceneId}
            onChange={(v) => {
              setSceneId(v);
              setBoxNum(1);
            }}
          />
          <Segmented
            label="Compare Draft Quality"
            options={[
              { value: "band2", label: "❌ Band-2 Telling" },
              { value: "grade9", label: "✅ Grade-9 Showing" },
            ]}
            value={mode}
            onChange={setMode}
          />
        </div>

        <Slider
          label="Scrub ZOOM-5 Camera Paragraph Box"
          value={boxNum}
          min={1}
          max={5}
          step={1}
          onChange={setBoxNum}
          format={(v) => `Box ${v} of 5`}
        />

        <svg
          viewBox="0 0 540 165"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Camera viewfinder aperture illustrating focal zoom across five descriptive boxes"
          className="w-full rounded-xl border border-line bg-slate-950"
        >
          <rect x={14} y={14} width={210} height={137} rx={10} fill="#0f172a" stroke="#334155" strokeWidth={1.5} />
          <circle cx={119} cy={82} r={62} fill="none" stroke="#475569" strokeDasharray="4 3" />
          <circle
            cx={119}
            cy={82}
            r={lens.focalRadius * 0.78}
            fill="#6366f1"
            fillOpacity={0.22}
            stroke="#818cf8"
            strokeWidth={2.5}
          />
          <line x1={109} y1={82} x2={129} y2={82} stroke="#e0e7ff" strokeWidth={1.5} />
          <line x1={119} y1={72} x2={119} y2={92} stroke="#e0e7ff" strokeWidth={1.5} />
          <text x={119} y={142} textAnchor="middle" fontSize={10} fontWeight={700} fill="#cbd5e1">
            VIEWFINDER APERTURE
          </text>

          <text x={244} y={36} fontSize={13} fontWeight={800} fill="#f8fafc">
            {lens.lensName}
          </text>
          <text x={244} y={58} fontSize={11} fill="#93c5fd">
            Target: {lens.craftFocus}
          </text>
          {preset.lenses.map((b, i) => (
            <g key={b.box} onClick={() => setBoxNum(b.box)} className="cursor-pointer">
              <rect
                x={244 + i * 56}
                y={82}
                width={48}
                height={46}
                rx={8}
                fill={b.box === boxNum ? "#4f46e5" : "#1e293b"}
                stroke={b.box === boxNum ? "#a5b4fc" : "#475569"}
                strokeWidth={1.8}
              />
              <text
                x={268 + i * 56}
                y={109}
                textAnchor="middle"
                fontSize={12}
                fontWeight={800}
                fill="#ffffff"
              >
                B{b.box}
              </text>
            </g>
          ))}
        </svg>

        <div
          className={`rounded-xl border-2 p-4 text-sm leading-relaxed ${
            mode === "grade9"
              ? "border-emerald-500/50 bg-emerald-500/10 text-ink"
              : "border-rose-500/50 bg-rose-500/10 text-ink"
          }`}
        >
          <div className="mb-1 text-xs font-extrabold uppercase tracking-wider">
            {mode === "grade9"
              ? `✅ Grade-9 Sensory Prose — ${lens.lensName}`
              : `❌ Band-2 Telling / Plot Bloat — ${lens.lensName}`}
          </div>
          <p className="font-serif text-base">“{mode === "grade9" ? lens.grade9Prose : lens.band2Trap}”</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// WIDGET 2: Live Sentence-Rhythm & Register Transformer
// ---------------------------------------------------------------------------
interface TransformPass {
  stage: string;
  spagBand: string;
  punctUsed: string;
  text: string;
  note: string;
}

interface DraftCase {
  id: string;
  label: string;
  passes: [TransformPass, TransformPass, TransformPass];
}

const DRAFTS: DraftCase[] = [
  {
    id: "splice",
    label: "Descriptive: Comma-Spliced Monotony",
    passes: [
      {
        stage: "Pass 0: Raw Band-2 Draft (Comma Splices + 'I/The' Plodding)",
        spagBand: "Band 2 (Capped)",
        punctUsed: "Illegal comma splices",
        text: "I walked onto the pier. The wind was very cold, waves hit it's iron pillars loudly. I looked at the lighthouse, the lamp was broken.",
        note: "Two comma splices, possessive 'it's' error, repetitive 'I/The' starts, and weak 'very cold / loudly'.",
      },
      {
        stage: "Pass 1: PACE Grammar & Punctuation Surgery",
        spagBand: "Band 3–4 (Clean)",
        punctUsed: "Semicolon + Colon",
        text: "Stepping onto the pier, I braced against the gale; heavy waves battered its iron pillars. Ahead stood the lighthouse: the lamp was shattered.",
        note: "Fixed 'its', cured both comma splices with ';' and ':', and opened with a fronted '-ing' participle.",
      },
      {
        stage: "Pass 2: Full Grade-9 3-Speed Musical Cadence",
        spagBand: "Grade 9 (Top Band)",
        punctUsed: "Dashes + Semicolon + Colon + Minor Drop",
        text: "Stepping onto the salt-slick pier, I braced as Atlantic gusts — sharp, briny, relentless — hammered its iron pilings; spray hissed knee-high across the planks. Ahead loomed the lantern tower: shattered glass. Nothing burned.",
        note: "Combines participial opener, parenthetical asyndetic tricolon, semicolon balance, colon reveal, and 2-word minor arrest.",
      },
    ],
  },
  {
    id: "discursive",
    label: "Discursive: One-Sided Rant → Broadsheet Synthesis",
    passes: [
      {
        stage: "Pass 0: Raw Band-2 Rant (Fake Stats + Colloquial Slang)",
        spagBand: "Band 2 (Rant)",
        punctUsed: "Exclamation marks (!!)",
        text: "In my opinion smartphones are 100% ruining teenagers!! 99.4% of doctors proved yesterday that phones destroy brains, everyone is totally addicted 24/7!",
        note: "Fake statistic, comma splice, colloquial hyperbole ('100%', '24/7'), double exclamation marks, zero concession.",
      },
      {
        stage: "Pass 1: Steelmanning + Modal Precision",
        spagBand: "Band 4 (Balanced)",
        punctUsed: "Semicolon pivot",
        text: "Admittedly, smartphones connect isolated teenagers to vital learning communities; nevertheless, algorithmic feeds often fragment sustained attention.",
        note: "Removed fake stats and 'In my opinion'; added 'Admittedly...; nevertheless...' steelman hinge and modal qualifier 'often'.",
      },
      {
        stage: "Pass 2: Grade-9 Broadsheet Rhetoric (Hypophora + Antithesis)",
        spagBand: "Grade 9 (Top Band)",
        punctUsed: "Hypophora (?) + Semicolon + Colon",
        text: "Do pocket screens inevitably erode adolescent curiosity? Hardly: for rural or housebound youths, digital forums offer vital intellectual lifelines. Yet algorithms monetise outrage rather than reflection; we have multiplied instant notifications while rationing unhurried thought.",
        note: "Deploys hypophora, steelmans fairly, and lands a memorable closing antithesis without a single cliché.",
      },
    ],
  },
];

function RhythmRegisterTransformer() {
  const [draftId, setDraftId] = useState<string>("splice");
  const [passIdx, setPassIdx] = useState<number>(2);

  const d = DRAFTS.find((x) => x.id === draftId) ?? DRAFTS[0];
  const p = d.passes[passIdx];

  return (
    <WidgetFrame
      title="Sentence-Rhythm, Punctuation & Register Transformer"
      tryThis={[
        "Slide from **Pass 0 (Raw Exam Mistake)** → **Pass 1 (PACE Fix)** → **Pass 2 (Grade-9 Craft)**.",
        "Switch between **Descriptive Cadence** and **Discursive Broadsheet Rhetoric**.",
      ]}
      caption={
        <span>
          <strong>Examiner Upgrade Note:</strong> {p.note}
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose Composition Genre"
          options={DRAFTS.map((x) => ({ value: x.id, label: x.label }))}
          value={draftId}
          onChange={(v) => {
            setDraftId(v);
            setPassIdx(2);
          }}
        />

        <Slider
          label="Scrub Editorial Upgrade Pass"
          value={passIdx}
          min={0}
          max={2}
          step={1}
          onChange={setPassIdx}
          format={(v) => `Pass ${v} of 2`}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout
            label="Technical Band"
            value={p.spagBand}
            tone={passIdx === 2 ? "good" : passIdx === 1 ? "brand" : "bad"}
          />
          <Readout label="Punctuation Toolkit" value={p.punctUsed} tone="ink" />
          <Readout label="Word Count" value={`${p.text.split(/\s+/).length} words`} tone="brand" />
        </div>

        <div
          className={`rounded-xl border-2 p-4 ${
            passIdx === 2
              ? "border-emerald-500/50 bg-emerald-500/10"
              : passIdx === 1
                ? "border-indigo-500/50 bg-indigo-500/10"
                : "border-rose-500/50 bg-rose-500/10"
          }`}
        >
          <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-ink-2">{p.stage}</div>
          <p className="font-serif text-base leading-relaxed text-ink">“{p.text}”</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "lang-p1-composition-camera-zoom",
    title: "5-Lens Descriptive Camera Zoom Workbench",
    blurb: "Pan across Wide Sky, Mid-Ground, Micro-Object Close-Up, Non-Visual Senses, and Transformed Sky without plot bloat.",
    Component: CameraZoomWorkbench,
  },
  {
    id: "lang-p1-composition-rhythm-transformer",
    title: "Sentence-Rhythm & Register Transformer",
    blurb: "Cure comma splices and one-sided rants step-by-step into Grade-9 musical prose and broadsheet synthesis.",
    Component: RhythmRegisterTransformer,
  },
];

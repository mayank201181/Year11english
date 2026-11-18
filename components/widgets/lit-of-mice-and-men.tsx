"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

interface CharacterProfile {
  id: "lennie" | "george" | "curleys-wife" | "crooks" | "candy" | "slim" | "curley";
  name: string;
  role: string;
  power: number; // 0-100 on ranch hierarchy
  isolation: number; // 0-100 emotional/social isolation
  quotes: string[];
  ao4Anchor: string;
  structuralRole: string;
  band2BoltOn: string;
  grade9Integrated: string;
}

const PROFILES: readonly CharacterProfile[] = [
  {
    id: "lennie",
    name: "Lennie Small",
    role: "Migrant barley bucker · Childlike giant",
    power: 15,
    isolation: 45,
    quotes: [
      "\"dragging his feet a little, the way a bear drags his paws\" (Sec 1)",
      "\"An' live off the fatta the lan'\" (Sec 1 & Sec 6)",
      "\"Why do you got to get killed? You ain't so little as mice.\" (Sec 5)",
    ],
    ao4Anchor:
      "1930s absence of humane community support for intellectual disability: men who could not conform faced vigilante lynching or being 'strapped down' in an asylum cage.",
    structuralRole:
      "Drives the escalating tactile-accident chain (Weed dress -> mice -> Curley's hand -> puppy -> Curley's wife) and embodies Robert Burns's doomed 'mouse' destroyed by an indifferent world.",
    band2BoltOn:
      "Lennie likes petting soft things like mice and puppies. In the 1930s there were no good hospitals for disabled people and asylums were very cruel places.",
    grade9Integrated:
      "Steinbeck's zoomorphic framing of Lennie — dragging his feet 'the way a bear drags his paws' — fuses pre-moral innocence with uncalibrated force, exposing a utilitarian 1930s society whose only answers to neurodivergence are Curley's shotgun or an asylum 'cage'.",
  },
  {
    id: "george",
    name: "George Milton",
    role: "Migrant barley bucker · Reluctant guardian",
    power: 38,
    isolation: 50,
    quotes: [
      "\"Guys like us, that work on ranches, are the loneliest guys in the world... With us it ain't like that.\" (Sec 1)",
      "\"I think I knowed from the very first. I think I knowed we'd never do her.\" (Sec 5)",
      "\"No, Lennie. I ain't mad. I never been mad, an' I ain't now.\" (Sec 6)",
    ],
    ao4Anchor:
      "Post-1929 itinerant 'bindle-stiff' labour: seasonal workers drifted via Murray and Ready's agency slips, blowing $50 monthly stakes in saloons out of chronic rootlessness.",
    structuralRole:
      "Sustains the Edenic farm liturgy as spiritual resistance to ranch atomisation; his recurring game of solitaire foreshadows his tragic assimilation into solitary ranch life after shooting Lennie.",
    band2BoltOn:
      "George looks after Lennie even though he gets annoyed. In October 1929 the Wall Street Crash happened and 25% of workers were unemployed so men travelled with bindles.",
    grade9Integrated:
      "While George complains he 'could live so easy' alone, Steinbeck shows that Lennie saves George from the hollow bindle-stiff anonymity of 1930s Soledad; firing Carlson's Luger mercifully saves Lennie from brutality yet condemns George to dreamless solitude.",
  },
  {
    id: "curleys-wife",
    name: "Curley's Wife",
    role: "Sole woman on the ranch · Nameless bride",
    power: 28,
    isolation: 95,
    quotes: [
      "\"the rectangle of sunshine in the doorway was cut off\" (Sec 2)",
      "\"I could get you strung up on a tree so easy it ain't even funny.\" (Sec 4)",
      "\"the ache for attention were all gone from her face... sweet and young.\" (Sec 5)",
    ],
    ao4Anchor:
      "1930s rural patriarchy (grammatical ownership as 'Curley's wife') collided with Golden Age Hollywood cinema escapism ('in the pitchers') and white racial privilege under Jim Crow.",
    structuralRole:
      "Her red ostrich-feather mules echo the red dress in Weed; Section 4 exposes her displaced racial cruelty, while Section 5's post-mortem stillness overturns male 'tart' scapegoating.",
    band2BoltOn:
      "Curley's wife flirts with the ranch men and wears red shoes. Women in the 1930s stayed at home and liked watching Hollywood movies at the cinema.",
    grade9Integrated:
      "Withholding her personal name, Steinbeck encodes 1930s patriarchal possession inside 'Curley's wife': though she cruelly wields Jim Crow terror over Crooks when humiliated, death strips away 'the ache for attention' to unmask a lonely teenager seduced by Hollywood myth.",
  },
  {
    id: "crooks",
    name: "Crooks",
    role: "Segregated stable buck · Permanent worker",
    power: 8,
    isolation: 98,
    quotes: [
      "\"a mauled copy of the California civil code for 1905\" (Sec 4)",
      "\"A guy goes nuts if he ain't got nobody... a guy gets too lonely an' he gets sick.\" (Sec 4)",
      "\"Nobody never gets to heaven, and nobody gets no land.\" (Sec 4)",
    ],
    ao4Anchor:
      "De facto 1930s Jim Crow racial segregation and extra-legal lynching terror across America, rendering statutory legal equality ('1905 civil code') powerless against a white woman's accusation.",
    structuralRole:
      "Anchors Section 4's sociological X-ray of 'all the weak ones' and voices Steinbeck's sharpest sceptical critique of the American Dream before retreating 'into himself'.",
    band2BoltOn:
      "Crooks has to sleep in the barn because he is Black. In the 1930s there were Jim Crow laws and racism in America and lynchings happened.",
    grade9Integrated:
      "Crooks's 'mauled copy of the California civil code for 1905' proves his proud literacy and awareness of statutory rights — making his instant silence when Curley's wife threatens lynching ('strung up on a tree') a searing indictment of 1930s racial terror.",
  },
  {
    id: "candy",
    name: "Candy",
    role: "One-handed elderly swamper",
    power: 18,
    isolation: 82,
    quotes: [
      "\"I ought to of shot that dog myself, George. I shouldn't ought to of let no stranger shoot my dog.\" (Sec 3)",
      "\"Tha's three hundred an' fifty bucks I'd put in.\" (Sec 3)",
      "\"When they can me here I wisht somebody'd shoot me.\" (Sec 3)",
    ],
    ao4Anchor:
      "Utilitarian 1930s agribusiness disposability: agricultural workers were excluded from the 1935 Social Security Act, leaving disabled older men facing 'the county' once fired.",
    structuralRole:
      "His $350 injury stake elevates the farm dream to tangible tragedy in Section 3, while Carlson shooting his blind sheepdog directly foreshadows George's mercy killing of Lennie.",
    band2BoltOn:
      "Candy is old and missing a hand and Carlson shoots his smelly dog. Old workers in the Great Depression did not get good pensions when they retired.",
    grade9Integrated:
      "Pairing one-handed Candy with his blind sheepdog, Steinbeck exposes 1930s utilitarian capitalism where aging farmhands — excluded from New Deal Social Security — are 'canned' once unproductive, while Candy's regret plants George's merciful duty in Section 6.",
  },
  {
    id: "slim",
    name: "Slim",
    role: "Master jerkline skinner · Moral authority",
    power: 78,
    isolation: 30,
    quotes: [
      "\"He was the prince of the ranch... quiet so profound that all talk stopped\" (Sec 2)",
      "\"Maybe ever'body in the whole damn world is scared of each other.\" (Sec 3)",
      "\"Never you mind. A guy got to sometimes.\" (Sec 6)",
    ],
    ao4Anchor:
      "Skilled craft aristocracy among migrant workers: indispensable mule-team expertise earns Slim organic dignity above transient barley buckers and insecure management.",
    structuralRole:
      "Acts as the novella's clear-eyed moral compass — confessor to George in Section 3, protector against Curley firing them, and sole figure perceptive enough to console George in Section 6.",
    band2BoltOn:
      "Slim is very respected and nice to George and Lennie. Jerkline skinners drove mule teams on California ranches in the 1930s.",
    grade9Integrated:
      "Steinbeck crowns Slim 'the prince of the ranch' to contrast earned craft majesty against Curley's inherited bullying; yet Slim's unsentimental verdicts on Candy's dog and Lennie ('A guy got to sometimes') underscore how even compassion bows to harsh ranch reality.",
  },
  {
    id: "curley",
    name: "Curley",
    role: "The Boss's son · Ex-lightweight boxer",
    power: 88,
    isolation: 68,
    quotes: [
      "\"keeps that glove fulla vaseline\" (Sec 2)",
      "\"flopping like a fish on a line\" — his crushed hand (Sec 3)",
      "\"I'm gonna shoot the guts outa that big bastard myself\" (Sec 5)",
    ],
    ao4Anchor:
      "Inherited managerial immunity under 1930s ranch capitalism: unlike migrant hands who are 'canned' for fighting back, the Boss's son bullies with impunity.",
    structuralRole:
      "Embodies pugnacious toxic masculinity and institutional menace; his sadistic lynch posse in Section 5 eliminates any peaceful survival option for Lennie.",
    band2BoltOn:
      "Curley is short and mean and likes picking fights with big guys like Lennie. Because his dad owns the ranch nobody is allowed to hit him back.",
    grade9Integrated:
      "Protected by his father's capital, Curley weaponises inherited rank to compensate for physical insecurity — parading his unnamed bride via a vaseline-filled glove before leading the vengeful lynch mob that forces George's hand in Section 6.",
  },
];

function RanchPowerMatrix() {
  const [selectedId, setSelectedId] = useState<CharacterProfile["id"]>("crooks");
  const [gradeMode, setGradeMode] = useState<"band2" | "grade9">("grade9");
  const active = PROFILES.find((p) => p.id === selectedId) ?? PROFILES[0];

  return (
    <WidgetFrame
      title="Ranch Power, Loneliness & AO4 Context Matrix"
      tryThis={[
        "Click **Crooks**, **Curley's Wife** and **Candy** to see why Section 4's outcasts hold low power yet sky-high isolation.",
        "Toggle **Band-2 Bolt-On ❌** vs **Grade-9 Weave ✅** to spot how Edexcel 4ET1 rewards fused AO1 + AO4 sentences.",
      ]}
      caption={
        <span>
          <strong>{active.name}</strong> ({active.role}): Ranch Hierarchy Power <strong>{active.power}/100</strong> · Isolation Index{" "}
          <strong>{active.isolation}/100</strong>. Notice how only <strong>Slim</strong> achieves high authority without toxic alienation.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Select character">
          {PROFILES.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={p.id === selectedId}
              onClick={() => setSelectedId(p.id)}
              className={`rounded-lg border px-3 py-1.5 text-xs sm:text-sm font-bold transition ${
                p.id === selectedId
                  ? "border-brand bg-brand text-white shadow-sm"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <svg
          viewBox="0 0 540 165"
          className="w-full rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label="Scatter chart plotting ranch hierarchy power horizontally and social isolation vertically for all seven characters"
        >
          <line x1="56" y1="134" x2="512" y2="134" className="stroke-ink-2" strokeWidth={1.5} />
          <line x1="56" y1="18" x2="56" y2="134" className="stroke-ink-2" strokeWidth={1.5} />
          <text x="284" y="156" fontSize={11} fontWeight="bold" textAnchor="middle" className="fill-ink-2">
            Ranch Hierarchy Power (0 = Outcast → 100 = Boss Capital)
          </text>
          <text x="16" y="78" fontSize={10} fontWeight="bold" textAnchor="middle" transform="rotate(-90 16 78)" className="fill-ink-2">
            Isolation
          </text>
          {PROFILES.map((p) => {
            const cx = 56 + (p.power / 100) * 440;
            const cy = 134 - (p.isolation / 100) * 106;
            const isSel = p.id === selectedId;
            return (
              <g key={p.id} onClick={() => setSelectedId(p.id)} style={{ cursor: "pointer" }}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSel ? 9 : 6}
                  fill={isSel ? "#d97706" : "#64748b"}
                  stroke={isSel ? "#78350f" : "#ffffff"}
                  strokeWidth={2}
                />
                <text
                  x={cx}
                  y={cy - 11}
                  fontSize={isSel ? 11 : 9.5}
                  fontWeight={isSel ? "bold" : "normal"}
                  textAnchor="middle"
                  className="fill-ink"
                >
                  {p.name.split(" ")[0]}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Readout label="Ranch Power" value={`${active.power} / 100`} tone={active.power >= 60 ? "good" : "bad"} />
          <Readout label="Isolation Level" value={`${active.isolation} / 100`} tone={active.isolation >= 75 ? "bad" : "brand"} />
          <Readout label="4ET1 Weighting" value="20 AO1 + 20 AO4" tone="ink" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">Closed-Book Micro-Quotes (AO1)</div>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-ink">
              {active.quotes.map((q) => (
                <li key={q} className="italic">{q}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3 text-sm space-y-2">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">1930s Historical Lens (AO4)</div>
              <p className="mt-1 text-ink">{active.ao4Anchor}</p>
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Play-Novelette Role</div>
              <p className="mt-0.5 text-ink-2">{active.structuralRole}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Compare Paragraph Quality:</span>
            <Segmented
              label="Paragraph quality toggle"
              value={gradeMode}
              onChange={setGradeMode}
              options={[
                { value: "band2", label: "Band-2 Bolt-On ❌" },
                { value: "grade9", label: "Grade-9 Integrated ✅" },
              ]}
            />
          </div>
          <div
            className={`rounded-xl border p-3 text-sm leading-relaxed ${
              gradeMode === "grade9" ? "border-good bg-surface text-ink" : "border-bad bg-surface text-ink"
            }`}
          >
            {gradeMode === "grade9" ? active.grade9Integrated : active.band2BoltOn}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

const SCENES = [
  {
    sec: 1,
    setting: "Salinas River Pool (Thursday Evening)",
    lighting: "Golden Gabilan foothill light; calm green pool",
    dreamPct: 30,
    omen: "Water snake glides safely across the pool; dead mouse in Lennie's pocket; 'Hide in the brush'.",
    quote: "\"Guys like us, that work on ranches, are the loneliest guys in the world.\"",
  },
  {
    sec: 2,
    setting: "The Bunkhouse (Friday Morning)",
    lighting: "Rectangular sunbeam 'cut off' by Curley's wife in doorway",
    dreamPct: 25,
    omen: "Boss suspects George ('What stake you got?'); Curley's vaseline glove; red ostrich-feather mules.",
    quote: "\"the rectangle of sunshine in the doorway was cut off.\"",
  },
  {
    sec: 3,
    setting: "The Bunkhouse (Friday Dusk)",
    lighting: "Darkening room lit by tin-shaded table lamp over cards",
    dreamPct: 90,
    omen: "Carlson shoots Candy's dog with his Luger; Candy pledges $350; Lennie crushes Curley's hand ('like a fish').",
    quote: "\"I ought to of shot that dog myself, George.\"",
  },
  {
    sec: 4,
    setting: "Crooks's Harness Shed (Saturday Night)",
    lighting: "Single dim electric bulb inside segregated barn lean-to",
    dreamPct: 55,
    omen: "'All the weak ones' fracture; Curley's wife threatens lynching ('strung up on a tree'), crushing Crooks's 1905 civil code.",
    quote: "\"Nobody never gets to heaven, and nobody gets no land.\"",
  },
  {
    sec: 5,
    setting: "The Sunlit Barn (Sunday Afternoon)",
    lighting: "Slanting dusty sunbeams; clanging horseshoes outside",
    dreamPct: 5,
    omen: "Dead puppy ('ain't so little as mice') escalates to Curley's wife's broken neck; George steals Carlson's Luger.",
    quote: "\"the ache for attention were all gone from her face... sweet and young.\"",
  },
  {
    sec: 6,
    setting: "Salinas River Pool (Sunday Dusk)",
    lighting: "Deepening valley shadows climbing off Gabilan peaks",
    dreamPct: 0,
    omen: "Motionless heron swallows the water snake; George recites the dream one last time; Carlson's baffled final line.",
    quote: "\"Now what the hell ya suppose is eatin' them two guys?\"",
  },
] as const;

function PlayNoveletteArcExplorer() {
  const [secNum, setSecNum] = useState(1);
  const scene = SCENES[secNum - 1];

  return (
    <WidgetFrame
      title="Six-Section Play-Novelette Symmetrical Stage Explorer"
      tryThis={[
        "Step from **Section 1** to **Section 6** and compare how Steinbeck inverts the lighting and the water snake at the Salinas pool.",
        "Notice where Dream Viability spikes to **90%** in **Section 3** (`Candy's $350`) right before Curley attacks Lennie.",
      ]}
      caption={
        <span>
          <strong>Section {scene.sec}: {scene.setting}</strong> — Steinbeck clamps four enclosed ranch interiors inside a closed pastoral loop.
        </span>
      }
    >
      <div className="space-y-4">
        <Stepper label="Play-Novelette Section" value={secNum} min={1} max={6} onChange={setSecNum} format={(v) => `Section ${v}`} />

        <div className="grid grid-cols-2 gap-3">
          <Readout label="Stage Lighting & Sound" value={scene.lighting} tone="ink" />
          <Readout
            label="Dream Viability"
            value={`${scene.dreamPct}%`}
            tone={scene.dreamPct >= 60 ? "good" : scene.dreamPct === 0 ? "bad" : "brand"}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3 text-sm space-y-2">
          <div>
            <span className="font-extrabold text-brand">Foreshadowing & Action: </span>
            <span className="text-ink">{scene.omen}</span>
          </div>
          <div className="border-t border-line pt-2 italic text-ink-2">Key Anchor Quote: {scene.quote}</div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "omm-ranch-power-matrix",
    title: "Ranch Power, Loneliness & AO4 Context Matrix",
    blurb: "Click all 7 characters to inspect power vs isolation, closed-book quotes, 1930s AO4 context and Grade-9 vs Band-2 paragraphs.",
    Component: RanchPowerMatrix,
  },
  {
    id: "omm-play-novelette-arc",
    title: "Play-Novelette 6-Section Stage & Fatalism Explorer",
    blurb: "Scrub Sections 1–6 to track lighting cues, Candy's $350 dream peak, Carlson's Luger and the Salinas pool cyclical frame.",
    Component: PlayNoveletteArcExplorer,
  },
];

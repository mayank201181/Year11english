"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type MotifKey = "blood" | "sleep" | "light" | "robes";

interface ActData {
  act: number;
  title: string;
  macbethRuthlessness: number;
  ladyRuthlessness: number;
  macbethVerse: string;
  ladyVerse: string;
  maritalDynamic: string;
  ao4Link: string;
  motifs: Record<MotifKey, { quote: string; speaker: string; analysis: string }>;
}

const ACTS: readonly ActData[] = [
  {
    act: 1,
    title: "Act 1: Equivocal Catalyst & Gendered Coercion",
    macbethRuthlessness: 32,
    ladyRuthlessness: 92,
    macbethVerse: "Tortured blank verse soliloquies ('Vaulting ambition', 1.7)",
    ladyVerse: "Commanding iambic imperatives ('unsex me here', 1.5)",
    maritalDynamic:
      "Lady Macbeth dominates stage direction and rhetoric, shaming Macbeth's martial pride ('When you durst do it, then you were a man') while Macbeth shrinks from regicide.",
    ao4Link:
      "Post-1605 Gunpowder Plot dread of treasonous duplicity ('innocent flower / serpent under't') and patriarchal shock at a wife subverting domestic obedience.",
    motifs: {
      blood: {
        quote: "\"brandish'd steel, / Which smoked with bloody execution\" (1.2)",
        speaker: "Wounded Captain",
        analysis: "Blood begins as a public badge of loyal chivalric valour defending King Duncan against rebel Macdonwald.",
      },
      sleep: {
        quote: "\"Sleep shall neither night nor day / Hang upon his pent-house lid\" (1.3)",
        speaker: "First Witch",
        analysis: "The Weird Sisters' curse on the sailor's wife foreshadows the supernatural insomnia awaiting Macbeth.",
      },
      light: {
        quote: "\"Stars, hide your fires; / Let not light see my black and deep desires\" (1.4)",
        speaker: "Macbeth (aside)",
        analysis: "Apostrophe begging heaven's light to look away proves Macbeth's Christian conscience knows his ambition is sinful.",
      },
      robes: {
        quote: "\"The Thane of Cawdor lives: why do you dress me / In borrow'd robes?\" (1.3)",
        speaker: "Macbeth",
        analysis: "Launches the sartorial motif: Macbeth inherits not only Cawdor's title, but Cawdor's treasonous role.",
      },
    },
  },
  {
    act: 2,
    title: "Act 2: Regicide & Cosmic Rupture",
    macbethRuthlessness: 50,
    ladyRuthlessness: 78,
    macbethVerse: "Hallucinatory blank verse & breathless shared half-lines (2.1–2.2)",
    ladyVerse: "Brisk, pragmatic blank verse ('A little water clears us', 2.2)",
    maritalDynamic:
      "Both tremble in split half-lines (stichomythia), yet Lady Macbeth takes charge of returning the bloody daggers — though 'Had he not resembled / My father' betrays an early crack.",
    ao4Link:
      "Murdering 'The Lord's anointed temple' (Divine Right of Kings) shatters the Great Chain of Being: darkness chokes the sun and a mousing owl kills a falcon (2.4).",
    motifs: {
      blood: {
        quote: "\"Will all great Neptune's ocean wash this blood / Clean from my hand?\" (2.2)",
        speaker: "Macbeth",
        analysis: "Cosmic Latinate hyperbole ('multitudinous seas incarnadine') collides with Lady Macbeth's hubristic 'A little water'.",
      },
      sleep: {
        quote: "\"Methought I heard a voice cry 'Sleep no more! / Macbeth does murder sleep'\" (2.2)",
        speaker: "Macbeth",
        analysis: "Killing a defenceless sleeping guest destroys 'great nature's second course', condemning both partners to restlessness.",
      },
      light: {
        quote: "\"by th' clock 'tis day, / And yet dark night strangles the travelling lamp\" (2.4)",
        speaker: "Ross",
        analysis: "Violent pathetic fallacy: an unnatural solar eclipse mirrors Macbeth strangling God's anointed monarch.",
      },
      robes: {
        quote: "\"lest our old robes sit easier than our new!\" (2.4)",
        speaker: "Macduff",
        analysis: "Subtle warning as Macduff refuses to attend Macbeth's coronation at Scone, sensing uneasy usurpation.",
      },
    },
  },
  {
    act: 3,
    title: "Act 3: Chiasmic Fulcrum & Banquet Climax",
    macbethRuthlessness: 74,
    ladyRuthlessness: 54,
    macbethVerse: "Venomous blank verse ('full of scorpions is my mind', 3.2)",
    ladyVerse: "Private rhyming lament ('all's spent... without content', 3.2)",
    maritalDynamic:
      "THE CHIASMIC CROSSOVER: Macbeth shuts his wife out of Banquo's murder ('Be innocent of the knowledge, dearest chuck'), seizing solo tyrannical agency while her private despair deepens.",
    ao4Link:
      "Fleance's escape (3.3) preserves King James I's Stuart lineage while Banquo's silent Ghost occupies Macbeth's royal chair at the disrupted ceremonial feast (3.4).",
    motifs: {
      blood: {
        quote: "\"I am in blood / Stepp'd in so far that... Returning were as tedious as go o'er\" (3.4)",
        speaker: "Macbeth",
        analysis: "The weary adjective 'tedious' signals terrifying moral desensitisation — repentance now feels merely tiresome.",
      },
      sleep: {
        quote: "\"After life's fitful fever he sleeps well\" (3.2)",
        speaker: "Macbeth",
        analysis: "Bitter dramatic irony: the restless usurper envies the peaceful eternal sleep of his murdered victim Duncan.",
      },
      light: {
        quote: "\"Who did strike out the light?\" (3.3)",
        speaker: "Third Murderer",
        analysis: "Extinguishing the torch during Banquo's ambush enables Fleance — the light of future legitimate rule — to escape.",
      },
      robes: {
        quote: "\"Upon my head they placed a fruitless crown\" (3.1)",
        speaker: "Macbeth",
        analysis: "Royal regalia feels sterile and hollow because Banquo's descendants will inherit the kingdom.",
      },
    },
  },
  {
    act: 4,
    title: "Act 4: Unchecked Tyranny vs Virtuous Exile",
    macbethRuthlessness: 92,
    ladyRuthlessness: 30,
    macbethVerse: "Impulsive vows ('firstlings of my heart... firstlings of my hand', 4.1)",
    ladyVerse: "Completely absent from the stage across the entire Act",
    maritalDynamic:
      "Total separation: Lady Macbeth vanishes from public politics while Macbeth replaces agonised soliloquy with the unprovoked on-stage slaughter of Macduff's wife and children at Fife (4.2).",
    ao4Link:
      "England (4.3) offers a structural foil: holy King Edward the Confessor heals subjects by divine grace (like James I's royal touch), and Macduff redefines compassionate manhood ('feel it as a man').",
    motifs: {
      blood: {
        quote: "\"Bleed, bleed, poor country!\" (4.3)",
        speaker: "Macduff",
        analysis: "Blood expands from Macbeth's hands to the entire wounded body politic of Scotland groaning under tyranny.",
      },
      sleep: {
        quote: "\"thou shalt awake, / Shall unseam'd terrors haunt\" — \"sleep in spite of thunder\" (4.1)",
        speaker: "Macbeth",
        analysis: "Macbeth murders Banquo's and Macduff's lines precisely so he may 'sleep in spite of thunder' — a peace he never wins.",
      },
      light: {
        quote: "\"Angels are bright still, though the brightest fell\" (4.3)",
        speaker: "Malcolm",
        analysis: "Luciferian allusion contrasting authentic heavenly grace against Macbeth's fallen, deceptive appearance.",
      },
      robes: {
        quote: "\"Wear thou thy wrongs; / The title is affeer'd!\" (4.3)",
        speaker: "Malcolm",
        analysis: "Legalistic clothing metaphor confirming Macbeth wears tyranny like a confirmed garment.",
      },
    },
  },
  {
    act: 5,
    title: "Act 5: Prose Madness, Nihilism & Cyclical Nemesis",
    macbethRuthlessness: 96,
    ladyRuthlessness: 10,
    macbethVerse: "Monotonous nihilistic blank verse ('Tomorrow, and tomorrow', 5.5)",
    ladyVerse: "Disjointed sleepwalking PROSE ('Out, damned spot!', 5.1)",
    maritalDynamic:
      "Chiasmus complete: Lady Macbeth collapses into somnambulism and off-stage suicide; Macbeth greets her death cry with numb futility ('She should have died hereafter') before falling to Macduff.",
    ao4Link:
      "Natural order restored: green Birnam Wood marches on Dunsinane, Caesarean Macduff exposes demonic equivocation, and Malcolm is crowned as 'th' usurper's cursed head' mirrors Macdonwald (1.2).",
    motifs: {
      blood: {
        quote: "\"Out, damned spot!... All the perfumes of Arabia will not sweeten this little hand\" (5.1)",
        speaker: "Lady Macbeth",
        analysis: "Psychosomatic prose hallucination directly inverting her Act 2 hubris ('A little water clears us of this deed').",
      },
      sleep: {
        quote: "\"A great perturbation in nature, to receive at once the benefit of sleep and do the effects of watching!\" (5.1)",
        speaker: "Doctor",
        analysis: "Somnambulism turns sleep itself into a confessional torture chamber requiring 'the divine' rather than a physician.",
      },
      light: {
        quote: "\"Out, out, brief candle! / Life's but a walking shadow, a poor player\" (5.5)",
        speaker: "Macbeth",
        analysis: "Lady Macbeth clings to a lit taper against hell (5.1), while Macbeth snuffs the candle into existential nihilism.",
      },
      robes: {
        quote: "\"Hang loose about him, like a giant's robe / Upon a dwarfish thief\" (5.2)",
        speaker: "Angus",
        analysis: "Completes 'borrow'd robes' (1.3): sacred royal majesty shrinks the illegitimate usurper.",
      },
    },
  },
];

const MOTIF_OPTIONS: { value: MotifKey; label: string }[] = [
  { value: "blood", label: "🩸 Blood" },
  { value: "sleep", label: "🌙 Sleep" },
  { value: "light", label: "🕯️ Light / Dark" },
  { value: "robes", label: "👑 Borrowed Robes" },
];

function ChiasmicArcWidget() {
  const [actNum, setActNum] = useState<number>(3);
  const [motif, setMotif] = useState<MotifKey>("blood");

  const current = ACTS[actNum - 1] ?? ACTS[2];
  const mInfo = current.motifs[motif];

  const xForAct = (a: number) => 60 + (a - 1) * 115;
  const yForScore = (s: number) => 170 - (s / 100) * 125;

  const macPath = ACTS.map((d, i) => `${i === 0 ? "M" : "L"} ${xForAct(d.act)} ${yForScore(d.macbethRuthlessness)}`).join(" ");
  const ladyPath = ACTS.map((d, i) => `${i === 0 ? "M" : "L"} ${xForAct(d.act)} ${yForScore(d.ladyRuthlessness)}`).join(" ");

  return (
    <WidgetFrame
      title="Macbeth vs Lady Macbeth: Chiasmic Arc & Motif Tracker"
      tryThis={[
        "Scrub from **Act 1** to **Act 5** and watch the purple (Lady Macbeth) and crimson (Macbeth) curves cross in **Act 3**.",
        "Switch between **Blood**, **Sleep**, **Light / Dark** and **Borrowed Robes** to harvest a whole-play 3-act motif chain.",
      ]}
      caption={
        <div>
          <span className="font-bold text-brand">AO4 Jacobean Anchor (Act {current.act}): </span>
          {current.ao4Link}
        </div>
      }
    >
      <div className="space-y-4">
        <Slider
          label="Scrub Structural Act (1 to 5)"
          value={actNum}
          min={1}
          max={5}
          step={1}
          onChange={setActNum}
          format={(v) => `Act ${v}`}
        />

        <svg
          viewBox="0 0 580 205"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Interactive chiasmic crossover chart comparing Macbeth and Lady Macbeth across Acts 1 to 5"
        >
          <line x1="60" y1="170" x2="520" y2="170" className="stroke-line" strokeWidth={1.5} />
          <line x1="60" y1="35" x2="60" y2="170" className="stroke-line" strokeWidth={1.5} />
          <text x="14" y="52" fontSize={10} className="fill-ink-2 font-bold">Ruthless</text>
          <text x="14" y="168" fontSize={10} className="fill-ink-2 font-bold">Broken</text>

          <line
            x1={xForAct(actNum)}
            y1="35"
            x2={xForAct(actNum)}
            y2="170"
            stroke="#0284c7"
            strokeWidth={2}
            strokeDasharray="4 3"
          />

          <path d={macPath} fill="none" stroke="#dc2626" strokeWidth={3} strokeLinecap="round" />
          <path d={ladyPath} fill="none" stroke="#9333ea" strokeWidth={3} strokeLinecap="round" />

          {ACTS.map((d) => (
            <g key={d.act}>
              <circle
                cx={xForAct(d.act)}
                cy={yForScore(d.macbethRuthlessness)}
                r={d.act === actNum ? 7 : 4.5}
                fill="#dc2626"
              />
              <circle
                cx={xForAct(d.act)}
                cy={yForScore(d.ladyRuthlessness)}
                r={d.act === actNum ? 7 : 4.5}
                fill="#9333ea"
              />
              <text
                x={xForAct(d.act)}
                y={190}
                textAnchor="middle"
                fontSize={11}
                className={d.act === actNum ? "fill-brand font-extrabold" : "fill-ink-2 font-semibold"}
              >
                Act {d.act}
              </text>
            </g>
          ))}

          <rect x="355" y="14" width="205" height="22" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
          <circle cx="368" cy="25" r="4.5" fill="#dc2626" />
          <text x="377" y="29" fontSize={10} fill="#991b1b" fontWeight={700}>Macbeth</text>
          <circle cx="445" cy="25" r="4.5" fill="#9333ea" />
          <text x="454" y="29" fontSize={10} fill="#6b21a8" fontWeight={700}>Lady Macbeth</text>
        </svg>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <div className="text-sm font-extrabold text-ink">{current.title}</div>
          <p className="mt-1 text-sm text-ink-2">{current.maritalDynamic}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Readout label="Macbeth AO2 Form & Voice" value={<span className="text-sm font-bold">{current.macbethVerse}</span>} tone="bad" />
          <Readout label="Lady Macbeth AO2 Form & Voice" value={<span className="text-sm font-bold">{current.ladyVerse}</span>} tone="brand" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Select Whole-Play Motif Chain</div>
          <Segmented options={MOTIF_OPTIONS} value={motif} onChange={setMotif} label="Motif selector" />
          <div className="rounded-xl border border-line bg-surface p-3.5">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">
              {mInfo.speaker} — Act {current.act}
            </div>
            <blockquote className="mt-1 border-l-4 border-brand pl-3 text-sm font-semibold italic text-ink">
              {mInfo.quote}
            </blockquote>
            <p className="mt-2 text-sm text-ink-2">{mInfo.analysis}</p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "macbeth-chiasmic-motif-tracker",
    title: "Chiasmic Guilt & Four-Motif Tracker",
    blurb: "Scrub Acts 1–5 to inspect how Macbeth and Lady Macbeth cross paths in Act 3 while tracking Blood, Sleep, Light and Robes.",
    Component: ChiasmicArcWidget,
  },
];

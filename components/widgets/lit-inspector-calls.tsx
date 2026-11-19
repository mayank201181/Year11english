"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type CharacterKey = "arthur" | "sybil" | "sheila" | "eric" | "gerald" | "goole";

interface CharBeat {
  conscience: number;
  stance: string;
  quote: string;
  stageCue: string;
}

interface StageBeat {
  step: number;
  act: string;
  title: string;
  lightingLabel: string;
  beamFill: string;
  roomTint: string;
  borderHex: string;
  ringHolder: string;
  doorStatus: string;
  ao2Summary: string;
  chars: Record<CharacterKey, CharBeat>;
}

const CHAR_META: { key: CharacterKey; name: string; role: string; x: number; y: number }[] = [
  { key: "arthur", name: "Arthur Birling", role: "Capitalist Patriarch", x: 110, y: 96 },
  { key: "sybil", name: "Sybil Birling", role: "Cold Social Superior", x: 230, y: 74 },
  { key: "sheila", name: "Sheila Birling", role: "Awakening Daughter", x: 350, y: 74 },
  { key: "gerald", name: "Gerald Croft", role: "Aristocratic Fiancé", x: 455, y: 96 },
  { key: "eric", name: "Eric Birling", role: "Fractured Son", x: 230, y: 152 },
  { key: "goole", name: "Inspector Goole", role: "Socialist Catalyst", x: 520, y: 152 },
];

const BEATS: StageBeat[] = [
  {
    step: 1,
    act: "Act 1 (Pre-Doorbell)",
    title: "Engagement Toast & 'Unsinkable' Hubris",
    lightingLabel: "'pink and intimate'",
    beamFill: "#fbcfe8",
    roomTint: "#fdf2f8",
    borderHex: "#ec4899",
    ringHolder: "Gerald → Sheila ('Now I really feel engaged')",
    doorStatus: "Closed — sealed bourgeois fortress; Edna serving port",
    ao2Summary:
      "Warm rose-tinted lighting visually mirrors self-delusion while 1912/1945 dramatic irony ('unsinkable', 'nobody wants war') demolishes Birling's authority before the doorbell rings.",
    chars: {
      arthur: {
        conscience: 8,
        stance: "Pompous Laissez-Faire Lecturer",
        quote: "'a man has to mind his own business and look after himself'",
        stageCue: "Toasting 'lower costs and higher prices'; cut off mid-clause by sharp doorbell.",
      },
      sybil: {
        conscience: 6,
        stance: "Policing Etiquette & Status",
        quote: "'Really, the things you girls pick up these days!'",
        stageCue: "'A rather cold woman'; reproving Sheila's slang ('squiffy') and Arthur's manners.",
      },
      sheila: {
        conscience: 28,
        stance: "Sheltered, Playful Fiancée",
        quote: "'Oh — it's wonderful! Look — mummy — isn't it a beauty?'",
        stageCue: "Infantile register ('mummy', 'daddy'); delighted by the materialist engagement ring.",
      },
      gerald: {
        conscience: 20,
        stance: "Suave 'Young Man-About-Town'",
        quote: "'I insist upon being one of the family now.'",
        stageCue: "Produces diamond ring box; smoothly conceals last summer's absence.",
      },
      eric: {
        conscience: 32,
        stance: "Uneasy, 'Squiffy' Outsider",
        quote: "'Why shouldn't they try for higher wages?'",
        stageCue: "'Half shy, half assertive'; sudden guffaw hints early at secret drinking and guilt.",
      },
      goole: {
        conscience: 100,
        stance: "Approaching Outside the Door",
        quote: "[Sharp ring of a front door bell]",
        stageCue: "Not yet visible — arrives as an acoustic interruption slicing Birling's speech.",
      },
    },
  },
  {
    step: 2,
    act: "Act 1 (Inquiry)",
    title: "Factory Strike & Milwards Confession",
    lightingLabel: "'brighter and harder'",
    beamFill: "#fef08a",
    roomTint: "#fefce8",
    borderHex: "#eab308",
    ringHolder: "On Sheila's finger (growing heavy with irony)",
    doorStatus: "Edna ushers Goole in; Sheila exits weeping then returns",
    ao2Summary:
      "Harsher clinical lighting turns the dining room into an interrogation dock. Goole isolates Eva's photograph ('one line of inquiry at a time') and splits Sheila from her father.",
    chars: {
      arthur: {
        conscience: 10,
        stance: "Defensive Industrialist",
        quote: "'It's my duty to keep labour costs down.'",
        stageCue: "Name-drops Colonel Roberts; refuses all blame for sacking Eva over 25 shillings.",
      },
      sybil: {
        conscience: 8,
        stance: "Aloof Absentee",
        quote: "'Please don't contradict me like that.'",
        stageCue: "Mostly offstage in drawing room during Act 1, insulated from early graphic details.",
      },
      sheila: {
        conscience: 78,
        stance: "Remorseful Truth-Teller",
        quote: "'But these girls aren't cheap labour — they're people.'",
        stageCue: "Runs out sobbing on seeing the photograph; confesses Milwards jealousy honestly.",
      },
      gerald: {
        conscience: 22,
        stance: "Startled Secret-Keeper",
        quote: "'Daisy Renton?' [Startled]",
        stageCue: "Betrays himself on the alias 'Daisy Renton'; tries to persuade Sheila to stay quiet.",
      },
      eric: {
        conscience: 42,
        stance: "Agitated & Defiant",
        quote: "'Why shouldn't they try for higher wages? We try for the highest possible prices.'",
        stageCue: "Drinks whisky uneasily; challenges Arthur's double standard on wages vs prices.",
      },
      goole: {
        conscience: 100,
        stance: "Immovable Moral Inquisitor",
        quote: "'burnt her inside out, of course.'",
        stageCue: "'Massiveness, solidity and purposefulness'; ends Act 1 in doorway asking 'Well?'",
      },
    },
  },
  {
    step: 3,
    act: "Act 2 (First Half)",
    title: "Frozen 'Well?' Bridge & Gerald's Palace Bar Affair",
    lightingLabel: "'brighter and harder' (unbroken real-time glare)",
    beamFill: "#fde047",
    roomTint: "#fefce8",
    borderHex: "#ca8a04",
    ringHolder: "Sheila hands ring BACK to Gerald",
    doorStatus: "Opens on Goole's 'Well?'; Gerald exits for a walk after confessing",
    ao2Summary:
      "Classical unities hold Gerald frozen across the interval. Returning the engagement ring prop dramatises Sheila's moral and feminist independence from patriarchal romance.",
    chars: {
      arthur: {
        conscience: 10,
        stance: "Anxious Status-Broker",
        quote: "'I must say, Sybil, that when this comes out at the inquest, it isn't going to do us much good.'",
        stageCue: "Tries to shield Sheila from hearing male sexual double standards; panics over press inquest.",
      },
      sybil: {
        conscience: 6,
        stance: "Blinded by 'Wall' of Class",
        quote: "'Girls of that class —'",
        stageCue: "Enters briskly to intimidate Goole; shocked that Alderman Meggarty is a womaniser.",
      },
      sheila: {
        conscience: 86,
        stance: "Goole's Stage Proxy",
        quote: "'You mustn't try to build up a kind of wall between us and that girl.'",
        stageCue: "Refuses to leave room; hands Gerald back the engagement ring calmly.",
      },
      gerald: {
        conscience: 48,
        stance: "Temporarily Moved Paternalist",
        quote: "'She told me she'd been happier than she'd ever been before —'",
        stageCue: "Shows genuine emotion over Daisy's death before walking out to compose himself.",
      },
      eric: {
        conscience: 45,
        stance: "Crucially Offstage",
        quote: "[Absent walking the streets of Brumley]",
        stageCue: "Priestley keeps Eric offstage so Sybil cannot see whom she is about to condemn.",
      },
      goole: {
        conscience: 100,
        stance: "Relentless Dismantler of Pretence",
        quote: "'Public men, Mr Birling, have responsibilities as well as privileges.'",
        stageCue: "[cutting in massively] — refuses Sybil's social intimidation.",
      },
    },
  },
  {
    step: 4,
    act: "Act 2 Curtain",
    title: "Sybil's Charity Trap & Eric's Silent Entrance",
    lightingLabel: "'brighter and harder' (ironic spotlight on Sybil)",
    beamFill: "#facc15",
    roomTint: "#fffbeb",
    borderHex: "#d97706",
    ringHolder: "In Gerald's pocket (engagement suspended)",
    doorStatus: "Front door slams — Eric enters pale and silent on the curtain!",
    ao2Summary:
      "Peak dramatic irony: audience and Sheila deduce Eric fathered Eva's baby while blind Sybil demands the 'drunken young idler' be made a public example.",
    chars: {
      arthur: {
        conscience: 12,
        stance: "Horrified Realisation Dawning",
        quote: "'Why, look here —'",
        stageCue: "Suddenly grasps why Sheila is begging Sybil to stop speaking.",
      },
      sybil: {
        conscience: 4,
        stance: "Self-Righteous Committee Chair",
        quote: "'Go and look for the father of the child. It's his responsibility.'",
        stageCue: "Admits being 'prejudiced' by 'Mrs Birling' alias; springs trap on her own son.",
      },
      sheila: {
        conscience: 90,
        stance: "Agonised Cassandran Witness",
        quote: "'Mother — stop — stop!'",
        stageCue: "Decodes Goole's questions first; tries desperately to save Sybil from self-destruction.",
      },
      gerald: {
        conscience: 40,
        stance: "Walking Outside (Investigating)",
        quote: "[Offstage — soon questioning a local police sergeant]",
        stageCue: "While seemingly grieving, begins testing whether Goole is a real officer.",
      },
      eric: {
        conscience: 72,
        stance: "Silent Curtain Apparition",
        quote: "[Enters, looking pale and distressed, from one to another]",
        stageCue: "Wordless doorway tableau drops the Act 2 curtain at maximum tension.",
      },
      goole: {
        conscience: 100,
        stance: "Architect of Moral Irony",
        quote: "'Wait a minute, Mrs Birling...'",
        stageCue: "Steers Sybil's arrogance until her own words convict Eric.",
      },
    },
  },
  {
    step: 5,
    act: "Act 3 (Climax)",
    title: "Eric's Confession & Goole's Prophetic Sermon",
    lightingLabel: "'brighter and harder' (apocalyptic sermon intensity)",
    beamFill: "#fb923c",
    roomTint: "#fff7ed",
    borderHex: "#ea580c",
    ringHolder: "Still unreturned",
    doorStatus: "Goole delivers final speech and exits solemnly",
    ao2Summary:
      "Family facade implodes over Eric's assault, pregnancy, and £50 theft. Goole addresses 1945 post-Blitz voters across the fourth wall with anaphora ('We') and 'fire and blood and anguish'.",
    chars: {
      arthur: {
        conscience: 12,
        stance: "Obsessed with Cash & Knighthood",
        quote: "'There'll be a public scandal... I've got to cover this up!'",
        stageCue: "Cares more about the missing £50 in company ledgers than his dead grandchild.",
      },
      sybil: {
        conscience: 15,
        stance: "Crushed by Shame, Not Empathy",
        quote: "'I didn't know — I didn't understand —'",
        stageCue: "Staggered only because the culprit was Eric, not out of compassion for Eva.",
      },
      sheila: {
        conscience: 94,
        stance: "Moral Successor in Waiting",
        quote: "'I'm not trying to pile it on, Mother...'",
        stageCue: "Absorbs every word of Goole's final speech as permanent conscience.",
      },
      gerald: {
        conscience: 30,
        stance: "Returning with 'Good News'",
        quote: "[About to re-enter from Brumley streets]",
        stageCue: "Ready to dismantle Goole's legal authority.",
      },
      eric: {
        conscience: 85,
        stance: "Broken & Accountable",
        quote: "'you killed her — and the child she'd have had too — your own grandchild.'",
        stageCue: "Rebukes Arthur ('not the kind of father a chap could go to') and owns his guilt.",
      },
      goole: {
        conscience: 100,
        stance: "Prophetic Socialist Mouthpiece",
        quote: "'We are members of one body... taught it in fire and blood and anguish.'",
        stageCue: "Delivers St Paul + wartime prophecy, bids 'Good night', and walks out.",
      },
    },
  },
  {
    step: 6,
    act: "Act 3 Finale",
    title: "Hoax Litmus Test → Cyclical Telephone Twist",
    lightingLabel: "Stark exposure on 'stare guiltily and dumbfounded'",
    beamFill: "#f87171",
    roomTint: "#fef2f2",
    borderHex: "#dc2626",
    ringHolder: "Gerald offers ring again → Sheila REFUSES ('No, not yet')",
    doorStatus: "THE TELEPHONE RINGS SHARPLY — real inspector on his way!",
    ao2Summary:
      "Priestley's double coup de théâtre: the Colonel Roberts hoax strips away fear of scandal to damn Arthur, Sybil, and Gerald, before the sharp telephone ring locks them in a cyclical reckoning.",
    chars: {
      arthur: {
        conscience: 5,
        stance: "Gloating → Dumbfounded",
        quote: "'the famous younger generation who know it all... A girl has just died —'",
        stageCue: "Imitates Goole mockingly, pours drinks, then freezes pale holding the telephone.",
      },
      sybil: {
        conscience: 5,
        stance: "Smug Amnesia → Dumbfounded",
        quote: "'Look how clever you've been, Gerald!'",
        stageCue: "Praises Gerald's cover-up; congratulates herself for not giving in to Goole.",
      },
      sheila: {
        conscience: 96,
        stance: "Unshakeable Conscience",
        quote: "'Fire and blood and anguish. And it frightens me the way you talk.'",
        stageCue: "Echoes Goole verbatim; refuses Gerald's ring ('It's too soon. I must think').",
      },
      gerald: {
        conscience: 14,
        stance: "Aristocratic Cover-Up Architect",
        quote: "'Everything's all right now, Sheila. What about this ring?'",
        stageCue: "Aligns with the older generation: no police record = 'everything's all right'.",
      },
      eric: {
        conscience: 92,
        stance: "Fierce Moral Solidarity",
        quote: "'the girl's dead and we all helped to kill her — and that's what matters.'",
        stageCue: "Stands shoulder-to-shoulder with Sheila against their parents' laughter.",
      },
      goole: {
        conscience: 100,
        stance: "Spectral Warning Fulfilled",
        quote: "'And a police inspector is on his way here — to ask some — questions —'",
        stageCue: "Absent physically, yet vindicated as a premonitory 'ghoul' of eternal recurrence.",
      },
    },
  },
];

function DiningRoomExplorer() {
  const [beatIdx, setBeatIdx] = useState(1);
  const [selectedChar, setSelectedChar] = useState<CharacterKey>("sheila");

  const beat = BEATS[beatIdx - 1];
  const activeMeta = CHAR_META.find((c) => c.key === selectedChar)!;
  const activeBeat = beat.chars[selectedChar];

  return (
    <WidgetFrame
      title="Birling Dining-Room Lighting, Guilt & Generational Arc Explorer"
      tryThis={[
        "Step from **Beat 1** to **Beat 2** and watch Priestley's lighting shift from *'pink and intimate'* to *'brighter and harder'*.",
        "Click **Gerald Croft** across **Beats 3 → 6** to see why his temporary Act 2 pity collapses during the Act 3 hoax.",
        "Compare **Sheila & Eric** vs **Arthur & Sybil** at **Beat 6** to explain Priestley's Act 3 moral litmus test.",
      ]}
      caption={
        <div>
          <strong>AO2 Stagecraft Insight ({beat.act}):</strong> {beat.ao2Summary}
        </div>
      }
    >
      <div className="space-y-4">
        <Stepper
          label={`Dramatic Beat (${beat.step} of 6): ${beat.title}`}
          value={beatIdx}
          min={1}
          max={6}
          onChange={setBeatIdx}
          format={(v) => `Beat ${v}`}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Stage Lighting Cue" value={beat.lightingLabel} tone="brand" />
          <Readout label="Engagement Ring Prop" value={beat.ringHolder} tone="ink" />
          <Readout
            label={`${activeMeta.name.split(" ")[0]}'s Conscience`}
            value={`${activeBeat.conscience} / 100`}
            tone={activeBeat.conscience >= 70 ? "good" : activeBeat.conscience <= 25 ? "bad" : "brand"}
          />
        </div>

        <svg
          viewBox="0 0 620 215"
          className="w-full rounded-xl border border-line"
          role="img"
          aria-label={`Birling dining room stage diagram at ${beat.title} under ${beat.lightingLabel} lighting`}
        >
          <rect x={0} y={0} width={620} height={215} fill={beat.roomTint} />
          <polygon points="240,0 380,0 595,215 25,215" fill={beat.beamFill} opacity={0.45} />
          <rect x={12} y={12} width={596} height={191} rx={12} fill="none" stroke={beat.borderHex} strokeWidth={2.5} />
          <text x={24} y={32} fontSize={11} fontWeight="bold" fill="#0f172a">
            {beat.act} — {beat.doorStatus}
          </text>

          {/* Dining Table */}
          <rect x={155} y={92} width={250} height={44} rx={10} fill="#78350f" opacity={0.85} />
          <text x={280} y={118} fontSize={10} fontWeight="bold" textAnchor="middle" fill="#fef3c7">
            &apos;Substantial, not cosy and homelike&apos; Table
          </text>

          {/* Character Nodes */}
          {CHAR_META.map((c) => {
            const cb = beat.chars[c.key];
            const isSel = c.key === selectedChar;
            const ringColor = cb.conscience >= 70 ? "#059669" : cb.conscience <= 25 ? "#dc2626" : "#4f46e5";
            return (
              <g
                key={c.key}
                onClick={() => setSelectedChar(c.key)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isSel ? 24 : 20}
                  fill="#ffffff"
                  stroke={ringColor}
                  strokeWidth={isSel ? 4 : 2.5}
                />
                <text x={c.x} y={c.y - 2} fontSize={10} fontWeight="bold" textAnchor="middle" fill="#0f172a">
                  {c.name.split(" ")[0]}
                </text>
                <text x={c.x} y={c.y + 11} fontSize={9} fontWeight="bold" textAnchor="middle" fill={ringColor}>
                  {cb.conscience}%
                </text>
              </g>
            );
          })}
        </svg>

        <div className="flex flex-wrap gap-1.5">
          {CHAR_META.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setSelectedChar(c.key)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                selectedChar === c.key
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-line bg-surface p-3.5 text-sm space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold text-ink">
              {activeMeta.name} — <span className="text-brand">{activeBeat.stance}</span>
            </span>
            <span className="text-xs font-semibold text-ink-2">{activeMeta.role}</span>
          </div>
          <p className="italic font-semibold text-ink">{activeBeat.quote}</p>
          <p className="text-xs text-ink-2">
            <strong>Stagecraft / Action:</strong> {activeBeat.stageCue}
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

type EssayFocus = "birling" | "sheila" | "sybil" | "goole";
type BandMode = "band2" | "grade9";

interface UpgradePack {
  label: string;
  question: string;
  band2Text: string;
  band2Diagnosis: string;
  grade9Thesis: string;
  grade9Quote: string;
  grade9Stagecraft: string;
  grade9Irony: string;
}

const UPGRADES: Record<EssayFocus, UpgradePack> = {
  birling: {
    label: "Arthur Birling",
    question: "Explore how Priestley presents Arthur Birling in An Inspector Calls.",
    band2Text:
      "Mr Birling is a rich factory owner in 1912. In 1912 women could not vote and there was no NHS. The Titanic sank on 15 April 1912 after hitting an iceberg and 1,500 people died. Mr Birling says the Titanic is unsinkable, which makes the audience want to watch on because they know he is wrong.",
    band2Diagnosis:
      "Capped at Level 2: wastes three lines on detached Wikipedia history (0 separate AO4 marks on Paper 2A!) and uses empty cliché 'makes the audience want to watch on'.",
    grade9Thesis:
      "Priestley constructs Arthur Birling as the pompous personification of Edwardian laissez-faire capitalism so that his self-inflicted humiliation discredits individualism.",
    grade9Quote:
      "Evaluating his hubristic epizeuxis — 'unsinkable, absolutely unsinkable' — alongside his maxim that 'a man has to mind his own business — and —', Priestley pairs factual blindness with moral selfishness.",
    grade9Stagecraft:
      "Crucially, Priestley times the 'sharp ring of a front door bell' to sever Birling's clause mid-breath while shifting the lighting from 'pink and intimate' to 'brighter and harder'.",
    grade9Irony:
      "For a 1945 post-Blitz audience who survived two World Wars and built the Welfare State, dramatic irony strips Birling of intellectual authority before Inspector Goole even speaks.",
  },
  sheila: {
    label: "Sheila & Youth",
    question: "How does Priestley use Sheila Birling to explore generational change?",
    band2Text:
      "At the start Sheila is spoilt and gets Eva Smith fired from Milwards because the dress looked prettier on Eva. Then Sheila cries and says sorry. Later she gives Gerald back his ring and in Act 3 she stays angry at her parents when they laugh.",
    band2Diagnosis:
      "Capped at Level 2/3: pure chronological plot retelling ('At the start... Then... Later...') with zero analysis of linguistic shifts or prop symbolism.",
    grade9Thesis:
      "Priestley charts Sheila's rapid anagnorisis from infantilised Edwardian daughter to Inspector Goole's onstage moral successor, investing post-war hope in the 'more impressionable' youth.",
    grade9Quote:
      "Abandoning her early childish register ('mummy', 'squiffy'), Sheila deploys sharp antithesis — 'these girls aren't cheap labour — they're people' — to dismantle her father's economic commodification.",
    grade9Stagecraft:
      "Priestley externalises her autonomy through the engagement ring prop: accepted passively in Act 1, handed back in Act 2, and refused in Act 3 ('No, not yet').",
    grade9Irony:
      "By echoing Goole's apocalyptic triad verbatim after his exit ('Fire and blood and anguish'), Sheila passes the Act 3 hoax litmus test and challenges 1945 voters to reject pre-war amnesia.",
  },
  sybil: {
    label: "Sybil & Class",
    question: "Explore Priestley's presentation of Mrs Birling and social class.",
    band2Text:
      "Mrs Birling is very cold and mean to Eva Smith at her charity. When Eva called herself Mrs Birling she got offended and refused to help her even though Eva was pregnant. At the end of Act 2 she blames the father not knowing it is Eric.",
    band2Diagnosis:
      "Capped at Level 2: treats Sybil like a real-life 'mean' neighbour rather than an ideological construct, missing demonstrative diction and curtain stagecraft.",
    grade9Thesis:
      "Introduced as 'a rather cold woman and her husband's social superior', Sybil embodies performative Edwardian philanthropy used to police rigid class boundaries.",
    grade9Quote:
      "Her contemptuous distancing determiner in 'Girls of that class' treats morality as biologically fixed by wealth — an assumption Priestley inverts when destitute Eva refuses Eric's stolen fifty pounds.",
    grade9Stagecraft:
      "Keeping Eric offstage throughout late Act 2 allows Goole ([cutting in massively]) to steer Sybil's wounded pride until Eric's silent doorway entrance drops the curtain.",
    grade9Irony:
      "Dramatic irony rebounds fatally as Sybil's demand that the 'drunken young idler' face public ruin destroys her own son and unborn grandchild.",
  },
  goole: {
    label: "Inspector Goole",
    question: "How does Priestley make Inspector Goole such a striking dramatic figure?",
    band2Text:
      "Inspector Goole is mysterious because his name sounds like ghoul so he might be a ghost. He asks everyone questions one by one with a photo and gives a big speech at the end about being one body before they find out he isn't a real policeman.",
    band2Diagnosis:
      "Capped at Level 2/3: speculates casually about ghosts and summarises actions without naming authorial mouthpiece, rhetorical syntax, or the cyclical ending.",
    grade9Thesis:
      "Transcending naturalistic detective fiction, Goole functions simultaneously as Priestley's socialist mouthpiece, spectral 'ghoul' of conscience, and structural catalyst.",
    grade9Quote:
      "His climactic sermon fuses collective anaphora ('We don't live alone. We are members of one body') with a polysyndetic wartime tricolon: 'taught it in fire and blood and anguish'.",
    grade9Stagecraft:
      "Endowed on entrance with 'massiveness, solidity and purposefulness', Goole controls pace via the isolated pocket photograph before exiting to trigger the Act 3 hoax test.",
    grade9Irony:
      "Confirming no Goole serves under Colonel Roberts strips away legal fear to expose bourgeois hypocrisy, right before the cyclical telephone ring vindicates his prophetic warning.",
  },
};

function ParagraphUpgrader() {
  const [focus, setFocus] = useState<EssayFocus>("birling");
  const [mode, setMode] = useState<BandMode>("grade9");

  const pack = UPGRADES[focus];

  return (
    <WidgetFrame
      title="Edexcel 4ET1 Paper 2A: Band-2 Trap vs Grade-9 AO1 + AO2 Upgrade Lab"
      tryThis={[
        "Toggle between **Band-2 Trap** and **Grade-9 Upgrade** on **Arthur Birling** to see how bolt-on 1912 history becomes **AO2 dramatic irony**.",
        "Switch across all four essay targets to inspect how every top-band paragraph weaves **Stagecraft + Micro-Quote + Audience Effect**.",
      ]}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Essay Focus"
            value={focus}
            onChange={setFocus}
            options={[
              { value: "birling", label: "Arthur Birling" },
              { value: "sheila", label: "Sheila & Youth" },
              { value: "sybil", label: "Sybil & Class" },
              { value: "goole", label: "Inspector Goole" },
            ]}
          />
          <Segmented
            label="Paragraph Level"
            value={mode}
            onChange={setMode}
            options={[
              { value: "band2", label: "Band-2 Trap" },
              { value: "grade9", label: "Grade-9 Upgrade" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-xs font-bold text-ink-2">
          4ET1 Closed-Book Prompt: <span className="text-ink">&ldquo;{pack.question}&rdquo; [30 marks: 15 AO1 + 15 AO2]</span>
        </div>

        {mode === "band2" ? (
          <div className="space-y-3 rounded-xl border border-bad/40 bg-bad-soft p-4 text-sm text-ink">
            <p className="leading-relaxed">{pack.band2Text}</p>
            <div className="rounded-lg border border-bad/30 bg-surface p-3 text-xs text-bad">
              <strong>Examiner Diagnosis:</strong> {pack.band2Diagnosis}
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 rounded-xl border border-good/40 bg-surface p-4 text-sm text-ink">
            <p className="leading-relaxed">
              <span className="rounded bg-good-soft px-1 font-semibold text-ink">{pack.grade9Thesis}</span>{" "}
              <span>{pack.grade9Quote}</span>{" "}
              <span className="rounded bg-warn-soft px-1 text-ink">{pack.grade9Stagecraft}</span>{" "}
              <span className="rounded bg-info-soft px-1 text-ink">{pack.grade9Irony}</span>
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold">
              <span className="rounded-md bg-good-soft px-2 py-0.5 text-good">AO1 Conceptual Thesis</span>
              <span className="rounded-md bg-warn-soft px-2 py-0.5 text-warn">AO2 Stagecraft &amp; Props</span>
              <span className="rounded-md bg-info-soft px-2 py-0.5 text-info">AO2 1912/1945 Dramatic Irony</span>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "inspector-dining-room-explorer",
    title: "Birling Dining-Room Lighting, Guilt & Generational Arc Explorer",
    blurb: "Step through Acts 1–3 from 'pink and intimate' to the final telephone call, tracking stage cues, props, and moral conscience.",
    Component: DiningRoomExplorer,
  },
  {
    id: "inspector-ao2-paragraph-upgrader",
    title: "Edexcel 4ET1 AO1 + AO2 Stagecraft & Irony Paragraph Lab",
    blurb: "Compare Band-2 bolt-on history/plot paragraphs against woven Grade-9 AO1 + AO2 drama responses.",
    Component: ParagraphUpgrader,
  },
];

"use client";

import { useState } from "react";
import { RichInline } from "@/components/Rich";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type ThemeHub = "power" | "identity" | "memory" | "love" | "suffering";

interface PoemCard {
  id: string;
  title: string;
  poet: string;
  themes: readonly ThemeHub[];
  form: string;
  voltaAndStructure: string;
  quotes: readonly [string, string];
  coreStance: string;
  methodTag: string;
}

const POEMS: readonly PoemCard[] = [
  {
    id: "if",
    title: "If—",
    poet: "Rudyard Kipling",
    themes: ["power", "identity"],
    form: "4 regular octaves (ABABCDCD) in mostly iambic pentameter",
    voltaAndStructure: "One single 32-line conditional periodic sentence ('If you can...') resolving only in the final two-line paternal reward.",
    quotes: [
      "\"meet with Triumph and Disaster / And treat those two impostors just the same\"",
      "\"fill the unforgiving minute / With sixty seconds' worth of distance run\"",
    ],
    coreStance: "constructs mature identity through rational stoicism, emotional equanimity and conscious self-restraint",
    methodTag: "periodic conditional syntax and personified antithesis",
  },
  {
    id: "prayer",
    title: "Prayer Before Birth",
    poet: "Louis MacNeice",
    themes: ["suffering", "power"],
    form: "8 cascading, step-indented free-verse stanzas + dramatic monologue",
    voltaAndStructure: "Liturgical anaphora ('I am not yet born...') swells into claustrophobic panic before snapping shut in a stark 2-line ultimatum.",
    quotes: [
      "\"I am not yet born; O hear me... tall walls wall me\"",
      "\"Let them not make me a stone and let them not spill me. / Otherwise kill me.\"",
    ],
    coreStance: "pleads pre-emptively from inside the womb against authoritarian conditioning and emotional petrification",
    methodTag: "jagged cascading free verse and anaphoric litany",
  },
  {
    id: "blessing",
    title: "Blessing",
    poet: "Imtiaz Dharker",
    themes: ["suffering"],
    form: "4 irregular free-verse stanzas (2, 4, 11, 6 lines)",
    voltaAndStructure: "Expands spatially from parched 2-line scarcity to a rushing 11-line burst pipe, closing in luminous sacred stillness.",
    quotes: [
      "\"The skin cracks like a pod... The municipal pipe bursts, / silver crashes to the ground\"",
      "\"the liquid sun... as the blessing sings / over their small bones.\"",
    ],
    coreStance: "transforms everyday water scarcity into ecstatic communal grace while honouring fragile human vulnerability",
    methodTag: "expanding free-verse stanzas and synaesthetic light imagery",
  },
  {
    id: "tongue",
    title: "Search For My Tongue",
    poet: "Sujata Bhatt",
    themes: ["identity"],
    form: "3-part bilingual free verse with central Gujarati script",
    voltaAndStructure: "Pivots from anxious fear of linguistic decay in English, through nocturnal code-switching in Gujarati, to confident botanical rebirth.",
    quotes: [
      "\"your mother tongue would rot, / rot and die in your mouth\"",
      "\"a stump of a shoot / grows longer, grows moist... it blossoms out of my mouth.\"",
    ],
    coreStance: "reclaims threatened bilingual selfhood as an instinctive, living root that blossoms beneath conscious assimilation",
    methodTag: "structural code-switching and an extended botanical metaphor",
  },
  {
    id: "half-past",
    title: "Half-past Two",
    poet: "U.A. Fanthorpe",
    themes: ["power", "memory"],
    form: "11 free-verse tercets (3-line stanzas)",
    voltaAndStructure: "Fairy-tale opening ('Once upon a schooltime') dissolves institutional clock-time into timeless wonder before 'She' slots him back.",
    quotes: [
      "\"He did Something Very Wrong / (I forget what it was)... Gettinguptime\"",
      "\"Into the silent noise his hangnail made... escaped into the clockless land for ever\"",
    ],
    coreStance: "exposes arbitrary adult authority while celebrating a child's imaginative transcendence beyond institutional clocks",
    methodTag: "compound child-neologisms, ironic parentheses and oxymoronic synaesthesia",
  },
  {
    id: "piano",
    title: "Piano",
    poet: "D.H. Lawrence",
    themes: ["memory", "love"],
    form: "3 quatrains in AABB rhyming couplets with rolling musical cadence",
    voltaAndStructure: "Present-tense resistance ('In spite of myself') surrenders in Stanza 3 as adult stoicism collapses into childhood tears.",
    quotes: [
      "\"A child sitting under the piano, in the boom of the tingling strings\"",
      "\"the insidious mastery of song / Betrays me back... I weep like a child for the past.\"",
    ],
    coreStance: "casts nostalgia as an overwhelming, involuntary ambush that drowns adult masculine composure in grief for lost security",
    methodTag: "surging AABB couplets, multi-register onomatopoeia and reluctant diction",
  },
  {
    id: "hide-seek",
    title: "Hide and Seek",
    poet: "Vernon Scannell",
    themes: ["memory"],
    form: "Single unbroken 27-line stanza block in mostly blank verse",
    voltaAndStructure: "Claustrophobic 2nd-person imperatives inside the dark shed pivot at emergence into an empty, watching garden.",
    quotes: [
      "\"Don't breathe. Don't move. Stay dumb. Hide in your blindness.\"",
      "\"The darkening garden watches. Nothing stirs... But where are they who sought you?\"",
    ],
    coreStance: "curdles childhood triumph into an existential allegory of how stubborn self-concealment ends in abandonment",
    methodTag: "a claustrophobic single-stanza block, pathetic fallacy and an unanswered question",
  },
  {
    id: "sonnet-116",
    title: "Sonnet 116",
    poet: "William Shakespeare",
    themes: ["love"],
    form: "14-line Shakespearean sonnet (ABAB CDCD EFEF GG) in iambic pentameter",
    voltaAndStructure: "Three argumentative quatrains move from negative definition to celestial constants, sealed by an absolute legalistic wager couplet.",
    quotes: [
      "\"O no! it is an ever-fixed mark / That looks on tempests and is never shaken\"",
      "\"Love's not Time's fool, though rosy lips and cheeks / Within his bending sickle's compass come\"",
    ],
    coreStance: "proclaims authentic spiritual devotion an immutable moral lighthouse unshaken by tempests or mortal decay",
    methodTag: "assured Shakespearean quatrains, polyptoton and navigational metaphors",
  },
  {
    id: "belle-dame",
    title: "La Belle Dame sans Merci",
    poet: "John Keats",
    themes: ["love", "power"],
    form: "12 Romantic ballad quatrains (ABCB) with truncated 4th line",
    voltaAndStructure: "Framed dialogue (questioner -> enthralled knight) wakes from warning dream into a closed cyclical loop on the cold hill.",
    quotes: [
      "\"Alone and palely loitering? / The sedge has wither'd from the lake, / And no birds sing.\"",
      "\"La Belle Dame sans Merci / Thee hath in thrall!\"",
    ],
    coreStance: "mourns destructive romantic obsession that drains chivalric vitality into spectral paralysis",
    methodTag: "truncated ballad dimeter lines, autumnal pathetic fallacy and cyclical framing",
  },
  {
    id: "thirty-nine",
    title: "Poem at Thirty-Nine",
    poet: "Alice Walker",
    themes: ["memory", "identity", "love"],
    form: "7 slender enjambed free-verse stanzas",
    voltaAndStructure: "Refrain punctuation shifts from heavy grief ('How I miss my father.') to celebratory gratitude ('!') and serene self-possession.",
    quotes: [
      "\"Writing deposit slips and checks... He cooked like a person / dancing / in a yoga meditation\"",
      "\"seasoning none of my life / the same way twice\"",
    ],
    coreStance: "integrates a late father's practical generosity and creative warmth into joyful, autonomous adult womanhood",
    methodTag: "conversational free verse, punctuation volta (. to !) and domestic metaphors",
  },
  {
    id: "war-photo",
    title: "War Photographer",
    poet: "Carol Ann Duffy",
    themes: ["suffering"],
    form: "4 regular 6-line sestets in unchanging ABBCDD rhyme",
    voltaAndStructure: "Moves from hushed darkroom ritual to haunting flashback ('half-formed ghost') and bitter cyclical departure over apathetic readers.",
    quotes: [
      "\"spools of suffering set out in ordered rows... Belfast. Beirut. Phnom Penh. All flesh is grass.\"",
      "\"tears between the bath and pre-lunch beers... they do not care.\"",
    ],
    coreStance: "strives to contain post-conflict trauma behind darkroom order while indicting fleeting Western consumer apathy",
    methodTag: "rigid ABBCDD sestets, shutter-click caesurae and bathos",
  },
  {
    id: "tyger",
    title: "The Tyger",
    poet: "William Blake",
    themes: ["suffering", "power"],
    form: "6 AABB quatrains in hammering catalectic trochaic tetrameter",
    voltaAndStructure: "Fourteen unanswered rhetorical questions build industrial forge dread, shifting 'Could' (Stanza 1) to 'Dare' (Stanza 6).",
    quotes: [
      "\"What the hammer? what the chain, / In what furnace was thy brain?\"",
      "\"Did he who made the Lamb make thee?... Dare frame thy fearful symmetry?\"",
    ],
    coreStance: "confronts sublime awe and theological dread before a Creator audacious enough to forge both innocence and lethal ferocity",
    methodTag: "percussive trochaic anvil metre, blacksmith lexis and transformed cyclical framing",
  },
  {
    id: "duchess",
    title: "My Last Duchess",
    poet: "Robert Browning",
    themes: ["power", "love"],
    form: "Dramatic monologue in continuous rhyming iambic pentameter couplets",
    voltaAndStructure: "Polished art tour slips via enjambment and parenthetical dashes into a casual confession of murder and warning for the next bride.",
    quotes: [
      "\"none puts by / The curtain I have drawn for you, but I\"",
      "\"This grew; I gave commands; / Then all smiles stopped together.\"",
    ],
    coreStance: "exposes autocratic patriarchal jealousy that silences living female joy into a dead aesthetic possession",
    methodTag: "dramatic monologue irony, enjambed couplets and sibilant euphemism",
  },
  {
    id: "remember",
    title: "Remember",
    poet: "Christina Rossetti",
    themes: ["love", "memory"],
    form: "14-line Petrarchan sonnet (octave ABBAABBA + sestet CDDECE)",
    voltaAndStructure: "Insistent octave anaphora ('Remember me...') pivots at the line-9 volta ('Yet if you should forget') into selfless release.",
    quotes: [
      "\"Remember me when I am gone away, / Gone far away into the silent land\"",
      "\"Better by far you should forget and smile / Than that you should remember and be sad.\"",
    ],
    coreStance: "relinquishes possessive grief so that the surviving beloved's happiness matters more than being mourned",
    methodTag: "a Petrarchan line-9 volta, gentle euphemism and balanced closing antithesis",
  },
  {
    id: "half-caste",
    title: "Half-caste",
    poet: "John Agard",
    themes: ["identity", "power"],
    form: "Performance free verse in phonetic Caribbean Creole (almost zero standard punctuation)",
    voltaAndStructure: "Bookended by mocking physical literalism ('standing on one leg') framing three comic cultural analogies (Picasso, weather, Tchaikovsky) before a closing imperative challenge.",
    quotes: [
      "\"mix a black key / wid a white key / is a half-caste symphony?\"",
      "\"come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind\"",
    ],
    coreStance: "dismantles colonial racial essentialism by turning prejudiced language's literal absurdity back onto the listener",
    methodTag: "phonetic Creole voice, unpunctuated performance flow and reductio ad absurdum analogies",
  },
  {
    id: "do-not-go-gentle",
    title: "Do not go gentle into that good night",
    poet: "Dylan Thomas",
    themes: ["love", "memory", "suffering"],
    form: "19-line villanelle (5 ABA tercets + closing ABAA quatrain in iambic pentameter)",
    voltaAndStructure: "Twin obsessive refrains braid across four archetypes of dying men (wise, good, wild, grave) before pivoting directly to the speaker's dying father in the final quatrain.",
    quotes: [
      "\"Do not go gentle into that good night... Rage, rage against the dying of the light.\"",
      "\"And you, my father, there on the sad height, / Curse, bless, me now with your fierce tears, I pray.\"",
    ],
    coreStance: "demands fierce, defiant resistance against mortality rather than passive resignation at the threshold of death",
    methodTag: "interlocking villanelle refrains, epizeuxis and oxymoronic filial urgency",
  },
];

const THEME_OPTIONS: { value: ThemeHub; label: string }[] = [
  { value: "power", label: "👑 Power & Control" },
  { value: "identity", label: "🌱 Identity & Growth" },
  { value: "memory", label: "🕰️ Memory & Childhood" },
  { value: "love", label: "❤️ Love & Loss" },
  { value: "suffering", label: "🔥 Suffering & Awe" },
];

const DEFAULT_PAIRS: Record<ThemeHub, [string, string]> = {
  power: ["duchess", "half-past"],
  identity: ["tongue", "if"],
  memory: ["piano", "thirty-nine"],
  love: ["sonnet-116", "remember"],
  suffering: ["war-photo", "prayer"],
};

function AnthologyPairingWidget() {
  const [theme, setTheme] = useState<ThemeHub>("memory");
  const [poemAId, setPoemAId] = useState<string>("piano");
  const [poemBId, setPoemBId] = useState<string>("thirty-nine");

  const handleThemeChange = (next: ThemeHub) => {
    setTheme(next);
    const [defA, defB] = DEFAULT_PAIRS[next];
    setPoemAId(defA);
    setPoemBId(defB);
  };

  const filtered = POEMS.filter((p) => p.themes.includes(theme));
  const pool = filtered.length >= 2 ? filtered : POEMS;

  const poemA = POEMS.find((p) => p.id === poemAId) ?? pool[0];
  const poemB = POEMS.find((p) => p.id === poemBId && p.id !== poemA.id) ?? pool.find((p) => p.id !== poemA.id) ?? POEMS[1];

  const themeLabel = THEME_OPTIONS.find((t) => t.value === theme)?.label.replace(/^[^\s]+\s/, "") ?? "this theme";

  const wovenThesis = `While both ${poemA.poet} and ${poemB.poet} explore ${themeLabel.toLowerCase()}, ${poemA.poet} (*${poemA.title}*) uses ${poemA.methodTag} as a lens that ${poemA.coreStance}, whereas ${poemB.poet} (*${poemB.title}*) deploys ${poemB.methodTag} in a vision that ${poemB.coreStance}.`;

  return (
    <WidgetFrame
      title="16-Poem Edexcel Anthology Comparison Pairing Builder"
      tryThis={[
        "Switch across the **five exam themes** to see instant Grade-9 pairings across all 16 Pearson Edexcel Anthology poems.",
        "Pick any **Anchor Poem A** and **Companion Poem B** to compare **Form**, **Volta/Structure**, **Micro-Quotes** and a woven **AO2 + AO3 thesis**.",
      ]}
      caption={
        <div>
          <span className="font-bold text-brand">Woven Grade-9 Thesis (AO2 + AO3, zero AO4 biography): </span>
          <RichInline text={wovenThesis} />
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose Exam Theme Hub</div>
          <Segmented options={THEME_OPTIONS} value={theme} onChange={handleThemeChange} label="Exam theme selector" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="poem-a-select" className="text-xs font-bold uppercase tracking-wide text-brand">
              2. Anchor Poem A (from all 16 Anthology poems)
            </label>
            <select
              id="poem-a-select"
              value={poemA.id}
              onChange={(e) => {
                const nextId = e.target.value;
                setPoemAId(nextId);
                if (nextId === poemB.id) {
                  const alt = pool.find((p) => p.id !== nextId) ?? POEMS.find((p) => p.id !== nextId)!;
                  setPoemBId(alt.id);
                }
              }}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
            >
              {POEMS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.themes.includes(theme) ? "★ " : ""}
                  {p.title} — {p.poet}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="poem-b-select" className="text-xs font-bold uppercase tracking-wide text-good">
              3. Companion Poem B (★ = recommended for theme)
            </label>
            <select
              id="poem-b-select"
              value={poemB.id}
              onChange={(e) => setPoemBId(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
            >
              {POEMS.filter((p) => p.id !== poemA.id).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.themes.includes(theme) ? "★ " : ""}
                  {p.title} — {p.poet}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { poem: poemA, badge: "POEM A", border: "border-brand" },
            { poem: poemB, badge: "POEM B", border: "border-good" },
          ].map(({ poem, badge, border }) => (
            <div key={poem.id} className={`rounded-xl border-2 ${border} bg-surface p-3.5 space-y-2.5`}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-ink-2">{badge}</span>
                  <h4 className="text-base font-extrabold text-ink">
                    <em>{poem.title}</em> — {poem.poet}
                  </h4>
                </div>
              </div>
              <Readout label="AO2 Poetic Form & Metre" value={<span className="text-xs font-bold leading-snug">{poem.form}</span>} tone="ink" />
              <div className="rounded-lg bg-surface-2 p-2.5 text-xs text-ink-2">
                <span className="font-bold text-ink">Structure & Volta: </span>
                {poem.voltaAndStructure}
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Key Micro-Quotes</div>
                {poem.quotes.map((q) => (
                  <blockquote key={q} className="border-l-2 border-brand pl-2.5 text-xs italic text-ink">
                    {q}
                  </blockquote>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "edexcel-anthology-pairing-builder",
    title: "16-Poem Anthology Comparison Pairing Builder",
    blurb: "Select any exam theme and pair two of the 16 Edexcel Anthology poems side by side across Form, Volta, Quotes and AO2+AO3 Thesis.",
    Component: AnthologyPairingWidget,
  },
];

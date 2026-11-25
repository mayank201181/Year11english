// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Source: Tanglin Trust School (I)GCSE Curriculum:
//   - IGCSE English Language: OxfordAQA (9270) — Paper 1 (60%) & Paper 2 (40%)
//   - IGCSE English Literature: Pearson Edexcel (4ET1) — Paper 1 (60%) & Paper 2 (40%)
//     Set Texts: Of Mice and Men, An Inspector Calls, Macbeth, Edexcel Anthology & Unseen Poetry
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** IB / A-Level stretch look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IGCSE year normally teaches this topic (Year 10 vs Year 11). */
  courseYear: 10 | 11;
  /** Teaching order used when ?year=10 is active (1..N). */
  courseOrder: number;
  /** Which OxfordAQA 9270 / Edexcel 4ET1 component this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = ["Language 9270", "Literature 4ET1"];

export const TOPIC_META: TopicMeta[] = [
  // --------------------------- LANGUAGE 9270 -------------------------------
  {
    id: "lang-p1-reading",
    title: "Paper 1A: Literary Non-Fiction Close Reading",
    strand: "Language 9270",
    icon: "🔍",
    courseYear: 10,
    courseOrder: 1,
    curriculum: "OxfordAQA 9270 Paper 1 Section A (40 marks) — Close study of a single literary non-fiction text divided into sections",
    sections: [
      {
        id: "explicit-implicit-inference",
        heading: "Explicit retrieval vs implicit inference",
        covers: "Distinguishing surface facts from layered deduction in memoirs, travelogues and journalism; selecting micro-quotations (2–5 words) and proving subtext without paraphrasing.",
      },
      {
        id: "lexical-imagery-effects",
        heading: "Lexical choice, semantic fields & imagery",
        covers: "Zooming onto dynamic verbs, modifiers, metaphor, simile, personification and semantic fields; replacing vague 'creates a picture' comments with precise connotative effects.",
      },
      {
        id: "sentence-punctuation-craft",
        heading: "Sentence forms, syntax & punctuation craft",
        covers: "Analysing minor fragments, periodic/cumulative syntax, tricolons, syndetic/asyndetic listing, parenthetical dashes, colons and semicolons as deliberate pacing controls.",
      },
      {
        id: "structural-shifts-focus",
        heading: "Tracking structural shifts & narrative focus",
        covers: "Cinematic wide-to-micro zoom, chronological vs flashback shifts, tonal pivots, contrast/juxtaposition and cyclical endings across sectioned extracts.",
      },
      {
        id: "evaluating-writers-viewpoint",
        heading: "Writer's perspective, tone & reader alignment",
        covers: "Evaluating subtle shifts in attitude (irony, ambivalence, self-deprecation, awe, indignation) and building sustained Grade-9 PETAL paragraphs for high-tariff questions.",
      },
    ],
  },
  {
    id: "lang-p1-composition",
    title: "Paper 1B: Descriptive, Narrative & Discursive Craft",
    strand: "Language 9270",
    icon: "✒️",
    courseYear: 10,
    courseOrder: 2,
    curriculum: "OxfordAQA 9270 Paper 1 Section B (40 marks) — Choice of descriptive, narrative or discursive composition",
    sections: [
      {
        id: "sensory-zoom-atmosphere",
        heading: "Sensory zoom, pathetic fallacy & show-don't-tell",
        covers: "5-box camera-lens planning for descriptive tasks; auditory/olfactory/tactile detail, extended metaphor and weather-as-mood without melodramatic plot bloat.",
      },
      {
        id: "cyclical-nonlinear-structure",
        heading: "Cyclical framing, motifs & tight narrative arcs",
        covers: "Avoiding rushed 5-plot-twist stories: in medias res openings, recurring object motifs, flashback/foreshadowing and transformed cyclical endings in a single 45-minute scene.",
      },
      {
        id: "syntax-rhythm-punctuation",
        heading: "Sentence rhythm & high-impact punctuation",
        covers: "Controlling pace via long multi-clause buildup + single-clause drop; accurate colons (reveal), semicolons (poised balance), em-dashes (interruption) and zero comma splices.",
      },
      {
        id: "discursive-argument-architecture",
        heading: "Discursive balance, concession & thesis control",
        covers: "Discursive vs one-sided rant: nuancing an issue from multiple angles, steelmanning the counter-argument ('Admittedly… Yet…') and landing a measured synthesis.",
      },
      {
        id: "ambitious-register-proofreading",
        heading: "Precision vocabulary, register & SPaG accuracy",
        covers: "Replacing overwritten thesaurus stuffing with exact verbs/nouns, sustaining tense/person consistency, paragraphing for effect and the 5-minute examiner audit.",
      },
    ],
  },
  {
    id: "lang-p2-sources",
    title: "Paper 2A: Multi-Source Reading & Synthesis",
    strand: "Language 9270",
    icon: "🗂️",
    courseYear: 11,
    courseOrder: 7,
    curriculum: "OxfordAQA 9270 Paper 2 Section A (40 marks) — Reading & comparing 5–6 linked stimulus texts",
    sections: [
      {
        id: "decoding-multi-source-pack",
        heading: "Decoding the 5–6 text stimulus pack (GAP)",
        covers: "Rapidly mapping Genre, Audience, Purpose and register across articles, letters, reports, infographics/extracts and memoirs before answering.",
      },
      {
        id: "synthesising-evidence-across-texts",
        heading: "Synthesising implicit links across sources",
        covers: "Moving beyond 'Source A says X. Source B says Y' to conceptual synthesis — grouping shared concerns, Causes vs Consequences, and subtle divergences with paired micro-quotes.",
      },
      {
        id: "comparing-writers-perspectives",
        heading: "Comparing writers' viewpoints & tonal shifts",
        covers: "Pinpointing tone (sardonic, celebratory, pragmatic, alarmist, nostalgic) and explaining WHY two writers view the same topic differently (role, era, audience, vested interest).",
      },
      {
        id: "comparing-rhetorical-methods",
        heading: "Comparing methods: irony, statistics, anecdote & imagery",
        covers: "Contrasting HOW two writers persuade or inform — e.g. empirical statistics + authoritative register in Source C vs visceral personal anecdote + hypophora in Source D.",
      },
      {
        id: "high-tariff-comparative-paragraphs",
        heading: "Woven Grade-9 comparative paragraphs",
        covers: "Using hinge connectives ('Whereas Writer A Weaponises…', 'Conversely, Writer B tempers…') to earn top-band cross-reference marks on multi-text questions.",
      },
    ],
  },
  {
    id: "lang-p2-directed",
    title: "Paper 2B: Directed Writing for Audience & Purpose",
    strand: "Language 9270",
    icon: "🎙️",
    courseYear: 11,
    courseOrder: 8,
    curriculum: "OxfordAQA 9270 Paper 2 Section B (40 marks) — Source-linked writing for audience & purpose (choice of two tasks)",
    sections: [
      {
        id: "adapting-form-audience-purpose",
        heading: "Form, Audience & Purpose (Speeches, Articles, Letters, Essays)",
        covers: "Authentic genre conventions — broadsheet straplines & subheadings, formal letter layout & sign-offs ('Yours sincerely' vs 'Yours faithfully'), speech direct address & cadence.",
      },
      {
        id: "transforming-source-material",
        heading: "Transforming Section A sources without lifting",
        covers: "Harvesting facts, case studies and tensions from the 5–6 reading sources and re-forging them in your own voice, angle and register rather than copying sentences.",
      },
      {
        id: "rhetorical-precision-ethos-logos-pathos",
        heading: "Aristotelian triad & DAFOREST without cliché",
        covers: "Balancing Ethos (credibility), Logos (structured evidence) and Pathos (human stakes); elevating rhetorical questions, hypophora, anaphora, antithesis and statistics.",
      },
      {
        id: "cohesive-discourse-counterargument",
        heading: "Cohesive discourse markers & preemptive rebuttal",
        covers: "Structuring a 5-part persuasive arc (Hook → Context → Core Case → Preemptive Rebuttal → Call to Action) with seamless paragraph transitions.",
      },
      {
        id: "stylistic-polish-spag-marks",
        heading: "Tone modulation & top-band technical command",
        covers: "Calibrating register for governors/headteachers vs peers vs national readers; syntactic variety, modal verbs, subjunctive nuance and error-free punctuation.",
      },
    ],
  },

  // -------------------------- LITERATURE 4ET1 ------------------------------
  {
    id: "lit-of-mice-and-men",
    title: "Prose: Of Mice and Men (Steinbeck)",
    strand: "Literature 4ET1",
    icon: "🌾",
    courseYear: 10,
    courseOrder: 3,
    curriculum: "Edexcel 4ET1 Paper 1 Section B — Modern Prose essay (AO1 textual knowledge & interpretation + AO4 integrated context)",
    sections: [
      {
        id: "depression-dust-bowl-context",
        heading: "1930s Great Depression, Dust Bowl & itinerant context (AO4)",
        covers: "Wall Street Crash (1929), Dust Bowl migration to California, bindle-stiffs, 'Soledad' ('loneliness'), Robert Burns's 'To a Mouse' — weaving AO4 into character analysis rather than bolt-on history.",
      },
      {
        id: "george-lennie-american-dream",
        heading: "George, Lennie & the broken American Dream",
        covers: "Animalistic zoomorphism ('paw', 'bear', 'terrier'), symbiotic companionship vs itinerant isolation, the Edenic 'fatta the lan'' chant as liturgy and illusion.",
      },
      {
        id: "curleys-wife-patriarchy",
        heading: "Curley's Wife: namelessness, red symbolism & Hollywood myth",
        covers: "Patriarchal possession (genitive 'Curley's wife'), red mules/feathers/lips as danger and trapped vitality, performative 'tart' judgements vs the poignant post-mortem stillness in Section 5.",
      },
      {
        id: "crooks-candy-marginalisation",
        heading: "Crooks, Candy & the hierarchy of the ranch",
        covers: "Jim Crow segregation in the harness room ('mauled copy of the California civil code'), Candy's parallel with his old sheepdog, and how marginalised characters weaponise cruelty downward.",
      },
      {
        id: "cyclical-novella-fatalism",
        heading: "Play-novelette structure, Salinas framing & fatalism",
        covers: "Six-section theatrical staging (Salinas brush → bunkhouse → bunkhouse → Crooks's room → barn → Salinas brush), heron-and-watersnake shift, Carlson's Luger and tragic inevitability.",
      },
    ],
  },
  {
    id: "lit-inspector-calls",
    title: "Modern Drama: An Inspector Calls (Priestley)",
    strand: "Literature 4ET1",
    icon: "🕵️",
    courseYear: 10,
    courseOrder: 4,
    curriculum: "Edexcel 4ET1 Paper 2 Section A — Modern Drama essay (AO1 critical response + AO2 dramatic form, structure & language)",
    sections: [
      {
        id: "edwardian-1912-vs-1945-irony",
        heading: "1912 vs 1945: Priestley's double time-frame & dramatic irony",
        covers: "Spring 1912 setting vs 1945 post-WWII Welfare State audience; Birling's 'unsinkable, absolutely unsinkable' Titanic & 'war impossible' speeches demolishing his capitalist authority instantly.",
      },
      {
        id: "capitalism-vs-social-responsibility",
        heading: "Capitalism vs socialism: Birling, Sybil & Eva Smith",
        covers: "'A man has to mind his own business' vs 'We are members of one body'; Sybil Birling's class prejudice at the Brumley Women's Charity Organisation; Eva/Daisy Renton as 'millions and millions'.",
      },
      {
        id: "generational-divide-sheila-eric",
        heading: "Generational divide: Sheila & Eric vs Gerald & parents",
        covers: "Sheila's linguistic evolution from 'mummy' to perceptive co-interrogator ('these girls aren't cheap labour — they're people'); Eric's guilt vs Gerald and the elder Birlings retreating into status.",
      },
      {
        id: "stagecraft-lighting-entrances",
        heading: "Stagecraft (AO2): lighting, props, doors & act cliffhangers",
        covers: "Opening 'pink and intimate' lighting shifting to 'brighter and harder' on the Inspector's arrival; the 'substantial and heavily comfortable' dining room; engagement ring, photograph, doorbell and curtain freezes.",
      },
      {
        id: "inspector-goole-mouthpiece-ending",
        heading: "Inspector Goole's omniscience & the cyclical final twist",
        covers: "'Goole'/'ghoul' pun, 'massiveness, solidity and purposefulness', prophetic 'fire and blood and anguish' sermon, the hoax relief trap and the devastating final telephone call.",
      },
    ],
  },
  {
    id: "lit-macbeth",
    title: "Literary Heritage: Macbeth (Shakespeare)",
    strand: "Literature 4ET1",
    icon: "👑",
    courseYear: 11,
    courseOrder: 5,
    curriculum: "Edexcel 4ET1 Paper 2 Section B — Literary Heritage essay (AO1 + AO2 Shakespearean language/form + AO4 Jacobean context)",
    sections: [
      {
        id: "jacobean-divine-right-witchcraft",
        heading: "Jacobean context (AO4): Divine Right, regicide & equivocation",
        covers: "1606 post-Gunpowder Plot tension, King James I's Daemonologie & Banquo lineage, Great Chain of Being, regicide as cosmic sacrilege and the Witches' trochaic equivocation ('Fair is foul').",
      },
      {
        id: "tragic-hamartia-soliloquies",
        heading: "Macbeth's tragic arc: hamartia, soliloquies & tyranny",
        covers: "From 'valour's minion' to 'vaulting ambition' (1.7), the hallucinated dagger (2.1), 'full of scorpions is my mind' (3.2), paranoid slaughter of Macduff's family and nihilistic 'Tomorrow, and tomorrow' (5.5).",
      },
      {
        id: "lady-macbeth-gender-guilt",
        heading: "Lady Macbeth's chiasmic arc: gender subversion to guilt",
        covers: "Imperative dominance & 'unsex me here' (1.5), shaming Macbeth's masculinity, 'A little water clears us of this deed' (2.2) inverted into fragmented prose somnambulism ('Out, damned spot!' 5.1).",
      },
      {
        id: "imagery-blood-sleep-light",
        heading: "Motifs: blood, murdered sleep, darkness & borrowed robes",
        covers: "Tracking recurring imagery across the whole play — blood turning from badge of honour to indelible guilt ('Neptune's ocean'), 'Macbeth does murder sleep', 'Stars, hide your fires' and 'giant's robe'.",
      },
      {
        id: "dramatic-structure-symmetry",
        heading: "Structural symmetry, blank verse vs prose & natural order",
        covers: "Cyclical traitor-beheaded-to-traitor-beheaded framing (Macdonwald → Macbeth), shared/broken iambic pentameter, Porter scene bathos, Birnam Wood/Macduff prophecies and Malcolm restoring order.",
      },
    ],
  },
  {
    id: "lit-poetry",
    title: "Poetry: Edexcel Anthology & Unseen Modern Poetry",
    strand: "Literature 4ET1",
    icon: "📜",
    courseYear: 11,
    courseOrder: 6,
    curriculum: "Edexcel 4ET1 Paper 1 Section A — Part 1 Unseen Modern Poetry (20 marks) & Part 2 Anthology Comparison (30 marks)",
    sections: [
      {
        id: "power-voice-identity-poems",
        heading: "Voice, identity & control: If—, Search For My Tongue, Half-caste, My Last Duchess, Half-past Two",
        covers: "Kipling's conditional stoicism (*If—*), Bhatt's bilingual rot-and-blossom extended metaphor (*Search For My Tongue*), Agard's phonetic Creole satire (*Half-caste*), Browning's chilling dramatic monologue & rhyming couplets (*My Last Duchess*), Fanthorpe's compound-word child timelessness (*Half-past Two*).",
      },
      {
        id: "conflict-suffering-blessing-poems",
        heading: "Suffering, awe & witness: Prayer Before Birth, War Photographer, Blessing, The Tyger",
        covers: "MacNeice's unborn plea & escalating stanza shape (*Prayer Before Birth*), Duffy's darkroom order vs war trauma (*War Photographer*), Dharker's liquid-silver epiphany (*Blessing*), Blake's anvil symmetry & creator dread (*The Tyger*).",
      },
      {
        id: "love-memory-loss-poems",
        heading: "Love, memory & loss: Sonnet 116, La Belle Dame, Piano, Poem at Thirty-Nine, Do not go gentle, Remember, Hide and Seek",
        covers: "Shakespeare's 'ever-fixed mark' (*Sonnet 116*), Keats's ballad entrapment (*La Belle Dame sans Merci*), Lawrence's involuntary nostalgia (*Piano*), Walker's free-verse paternal legacy (*Poem at Thirty-Nine*), Thomas's defiant villanelle (*Do not go gentle into that good night*), Rossetti's Petrarchan volta of release (*Remember*), Scannell's darkening childhood isolation (*Hide and Seek*).",
      },
      {
        id: "anthology-comparative-thesis",
        heading: "Anthology Part 2: integrated thesis, form & method comparison",
        covers: "Avoiding 'Poem A then Poem B' block essays; pairing poems across all 16 Anthology texts (e.g. *Half-caste* vs *Search For My Tongue*, *Do not go gentle* vs *Remember*, *Piano* vs *Poem at Thirty-Nine*, *War Photographer* vs *Prayer Before Birth*) across AO2 form, metre, caesura, enjambment and imagery.",
      },
      {
        id: "unseen-modern-poetry-method",
        heading: "Unseen Modern Poetry Part 1: 4-pass decoding framework",
        covers: "Decoding any unseen modern poem in 35 minutes: (1) Title & literal situation, (2) Structural arc, stanza shape & volta/shift, (3) Sensory/figurative clusters & sound patterns, (4) Ending resonance & SMILE synthesis.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}

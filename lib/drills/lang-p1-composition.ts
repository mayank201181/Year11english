import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

interface CompCase {
  sample: string;
  clue: string;
  answer: string[];
  display: string;
  trapTerm?: string[];
  trapFeedback?: string;
  why: string;
}

const INTROS = [
  "Examine this Paper 1B composition sentence:",
  "Inspect this student draft line:",
  "Read this crafted Section B extract:",
  "Review this exam-writing example:",
] as const;

function generateItem(
  rng: Rng,
  bank: readonly CompCase[],
  asks: readonly ((clue: string) => string)[],
) {
  const intro = rng.pick(INTROS);
  const item = rng.pick(bank);
  const ask = rng.pick(asks)(item.clue);
  const prompt = `${intro}\n\n*"${item.sample}"*\n\n${ask}`;
  const traps: Trap[] | undefined =
    item.trapTerm && item.trapFeedback
      ? [{ spec: { type: "text", accept: item.trapTerm }, feedback: item.trapFeedback }]
      : undefined;
  return {
    prompt,
    answer: { type: "text" as const, accept: item.answer, display: item.display },
    traps,
    hint: `Target clue: ${item.clue}.`,
    solution: [item.why],
  };
}

// ---------------------------------------------------------------------------
// DRILL 1: Sensory Zoom, Atmosphere & Show-Don't-Tell
// ---------------------------------------------------------------------------
const SENSORY_T1: readonly CompCase[] = [
  {
    sample: "Roasted cumin, diesel exhaust, and damp sacking hung heavy beneath the bazaar tarpaulin.",
    clue: "9-letter sensory adjective (starting with 'o') for imagery of smell",
    answer: ["olfactory"],
    display: "olfactory",
    trapTerm: ["auditory", "tactile"],
    trapFeedback: "Auditory = sound, tactile = touch; imagery of smell starts with 'olf-'!",
    why: "**Olfactory** imagery engages the sense of smell, triggering vivid atmospheric immersion.",
  },
  {
    sample: "Rough salt-crystals crusted my knuckles while freezing spray numbed my wrists.",
    clue: "7-letter sensory adjective (starting with 't') for touch, texture, and temperature",
    answer: ["tactile"],
    display: "tactile",
    trapTerm: ["olfactory", "gustatory"],
    trapFeedback: "Texture and temperature belong to touch — 7 letters starting with 'tact-'!",
    why: "**Tactile** imagery grounds description in physical touch, roughness, and chill.",
  },
  {
    sample: "Briny sea-foam left a sharp, metallic tang of rust and kelp across my cracked lips.",
    clue: "9-letter sensory adjective (starting with 'g') for imagery of taste",
    answer: ["gustatory"],
    display: "gustatory",
    why: "**Gustatory** imagery engages taste (*briny, metallic tang*).",
  },
  {
    sample: "Overhead fluorescent tubes buzzed in a low electrical drone while rain ticked on tin.",
    clue: "8-letter sensory adjective (starting with 'a') for imagery of sound",
    answer: ["auditory", "acoustic"],
    display: "auditory",
    why: "**Auditory** imagery layers ambient sound (*buzzed, drone, ticked*) to deepen silence or tension.",
  },
  {
    sample: "Sullen, resentful storm-clouds brooded low over the deserted pier.",
    clue: "two-word literary term for projecting human mood onto weather to establish atmosphere",
    answer: ["pathetic fallacy"],
    display: "pathetic fallacy",
    trapTerm: ["personification"],
    trapFeedback: "Use Ruskin's specific two-word term when human emotion is projected onto *weather*!",
    why: "**Pathetic fallacy** uses weather (*sullen, resentful clouds*) as an emotional mirror in Box 1 of ZOOM-5.",
  },
  {
    sample: "Instead of writing 'I felt nervous', the writer shows a thumb shredding a damp bus ticket.",
    clue: "three-word craft rule ('show-_____-____') replacing emotion labels with physical cues",
    answer: ["show-don't-tell", "show don't tell", "show dont tell"],
    display: "show-don't-tell",
    why: "**Show-don't-tell** lets readers infer anxiety actively from involuntary micro-gestures.",
  },
  {
    sample: "Antiseptic bleach and scorched espresso drifted down the hospital corridor.",
    clue: "9-letter sensory adjective (starting with 'o') for smell imagery",
    answer: ["olfactory"],
    display: "olfactory",
    why: "**Olfactory** detail (*bleach, scorched espresso*) makes hospital atmosphere visceral instantly.",
  },
  {
    sample: "Splintered pine floorboards rasped beneath bare heels in the unheated attic.",
    clue: "7-letter sensory adjective (starting with 't') for surface feel and temperature",
    answer: ["tactile"],
    display: "tactile",
    why: "**Tactile** precision (*splintered, rasped, unheated*) puts the reader inside the narrator's skin.",
  },
];

const SENSORY_T2: readonly CompCase[] = [
  {
    sample: "First monsoon drops hissed onto baked red dust, releasing that warm, earthy scent after drought.",
    clue: "9-letter noun (starting with 'p') for the earthy scent when rain hits dry ground",
    answer: ["petrichor"],
    display: "petrichor",
    why: "**Petrichor** precisely names the earthy aroma released when rain strikes parched soil or stone.",
  },
  {
    sample: "A jagged scarlet scream tore from the ambulance siren across the velvet-cold alley.",
    clue: "12-letter Greek term ('syn_________') for blending two distinct senses (colour + sound)",
    answer: ["synaesthesia", "synesthesia"],
    display: "synaesthesia",
    why: "**Synaesthesia** wires colour to sound (*scarlet scream*) and texture to temperature (*velvet-cold*).",
  },
  {
    sample: "Box 3 narrows from the whole cathedral nave onto one moth-wing trapped in cold candle-tallow.",
    clue: "4-letter cinematic noun (starting with 'z') for narrowing focus onto one tiny object",
    answer: ["zoom", "micro-zoom"],
    display: "zoom",
    why: "Extreme camera **zoom** onto a single overlooked flaw makes descriptive settings feel authentic.",
  },
  {
    sample: "Across all five paragraphs, the railway terminus is sustained as the ribcage of a sleeping whale.",
    clue: "two-word term ('________ metaphor') for sustaining one central comparison across a whole passage",
    answer: ["extended metaphor", "sustained metaphor"],
    display: "extended metaphor",
    why: "An **extended metaphor** creates tonal unity, far stronger than four clashing similes.",
  },
  {
    sample: "Rain-varnished cobbles gleamed beneath neon-bruised shopfronts.",
    clue: "two-word grammatical label ('________ modifier') for hyphenated two-word coined descriptors like 'rain-varnished'",
    answer: ["compound modifier", "compound adjective", "compound modifiers"],
    display: "compound modifier",
    why: "Fresh hyphenated **compound modifiers** (*rain-varnished, neon-bruised*) compress imagery without purple prose.",
  },
  {
    sample: "Box 1 opens under brassy noon glare; Box 5 pulls back to cool violet dusk over the same square.",
    clue: "8-letter structural adjective (starting with 'c', ending '-al') for returning to the opening lens with altered light",
    answer: ["cyclical", "circular"],
    display: "cyclical",
    why: "A transformed **cyclical** sky return gives pure description natural closure without needing plot twists.",
  },
  {
    sample: "Bitter lemon-bright trumpet notes sliced through the smoky basement.",
    clue: "12-letter Greek term ('syn_________') fusing taste/colour with musical sound",
    answer: ["synaesthesia", "synesthesia"],
    display: "synaesthesia",
    why: "**Synaesthesia** (*bitter lemon-bright notes*) creates startling multi-sensory freshness.",
  },
  {
    sample: "Summer thunder split overhead, lifting warm earthy vapour from cracked paving slabs.",
    clue: "9-letter olfactory noun (starting with 'p') for rain scent rising from dry stone",
    answer: ["petrichor"],
    display: "petrichor",
    why: "**Petrichor** replaces vague 'smelled like rain' with exact lexical craft.",
  },
];

const SENSORY_T3: readonly CompCase[] = [
  {
    sample: "An untouched teacup, a stopped hall-clock, and folded spectacles evoke grief without naming sorrow.",
    clue: "two-word craft term coined by T. S. Eliot ('objective ___________') for external objects embodying an inner emotion",
    answer: ["objective correlative"],
    display: "objective correlative",
    why: "An **objective correlative** uses a chain of concrete external objects as the physical formula for emotion.",
  },
  {
    sample: "The lugubrious, cerulean, multitudinous drizzle perambulated across my gargantuan umbrella.",
    clue: "two-word critical label ('______ prose', naming a royal colour) for overwritten, unnatural thesaurus stuffing",
    answer: ["purple prose"],
    display: "purple prose",
    why: "**Purple prose** clogs sentences with unnatural thesaurus adjectives instead of exact verbs.",
  },
  {
    sample: "Calling a towering mountain peak 'a pineapple of majesty' instead of 'a pinnacle of majesty'.",
    clue: "11-letter term (starting with 'm') for accidentally misusing an ambitious-sounding word",
    answer: ["malapropism"],
    display: "malapropism",
    why: "A **malapropism** exposes memorised vocabulary used without knowing its real meaning.",
  },
  {
    sample: "Guttural /g/ and /k/ sounds in 'gravelled gullies gurgled' echo harsh throat-friction.",
    clue: "8-letter phonetic adjective (starting with 'g') for harsh back-of-throat velar/uvular consonant textures",
    answer: ["guttural", "gutturals"],
    display: "guttural",
    why: "**Guttural** consonants reinforce rasping, subterranean, or choking physical textures.",
  },
  {
    sample: "Whispering /f/, /v/, and /th/ air-friction sounds in 'feather-soft sea-fret drifted faintly'.",
    clue: "9-letter phonetic noun (starting with 'f', plural 'fricatives') for breathy airflow consonants (/f/, /v/, /th/)",
    answer: ["fricatives", "fricative"],
    display: "fricatives",
    why: "**Fricatives** create soft, breathy acoustic friction matching mist or wind.",
  },
  {
    sample: "A rusted child's swing creaking empty in November fog externalises bereavement without a single tear.",
    clue: "T. S. Eliot's two-word concept ('objective ___________') for concrete objects embodying emotion",
    answer: ["objective correlative"],
    display: "objective correlative",
    why: "**Objective correlative** anchors unspoken grief inside physical setting details.",
  },
  {
    sample: "Stuffing four obscure multisyllabic adjectives onto every noun until the scene sounds absurd.",
    clue: "two-word critical phrase ('______ prose') for florid, overwritten style",
    answer: ["purple prose"],
    display: "purple prose",
    why: "Pruning **purple prose** down to muscular verbs elevates authenticity instantly.",
  },
  {
    sample: "Describing an ancient library's 'contagious silence' when the writer meant 'contiguous rooms'.",
    clue: "11-letter term (starting with 'm') for confusing similar-sounding multisyllabic words",
    answer: ["malapropism"],
    display: "malapropism",
    why: "Avoiding **malapropism** means deploying only ambitious words whose precision you fully command.",
  },
];

// ---------------------------------------------------------------------------
// DRILL 2: Sentence Rhythm & High-Impact Punctuation Surgery
// ---------------------------------------------------------------------------
const PUNCT_T1: readonly CompCase[] = [
  {
    sample: "FAULTY: The siren wailed down the boulevard, pedestrians froze on the crossing.",
    clue: "two-word grammatical error joining two complete independent clauses with only a comma",
    answer: ["comma splice", "comma splicing"],
    display: "comma splice",
    why: "**Comma splice**: cure by upgrading `,` to `;`, `:`, `.`, or adding a conjunction.",
  },
  {
    sample: "Outside, hail hammered the slate roof; inside, turf embers glowed steady in the grate.",
    clue: "single-word punctuation mark (`;`) balancing two contrasting independent clauses",
    answer: ["semicolon", "semi-colon"],
    display: "semicolon",
    trapTerm: ["colon"],
    trapFeedback: "Look at `;` — a dot above a comma balancing parallel clauses!",
    why: "**Semicolon** cures potential comma splices while balancing exterior storm against interior warmth.",
  },
  {
    sample: "Every clue in the boathouse pointed to one truth: the skiff had been untied deliberately.",
    clue: "single-word punctuation mark (`:`) following a complete clause to spotlight a dramatic reveal",
    answer: ["colon"],
    display: "colon",
    trapTerm: ["semicolon"],
    trapFeedback: "Two vertical dots (`:`) unveiling an explanation or verdict is a colon!",
    why: "**Colon** acts as a spotlight hinge unveiling the stark deduction.",
  },
  {
    sample: "My brother's apology — rehearsed, wooden, five years late — hung awkward in the doorway.",
    clue: "two-word punctuation term ('_____________ dashes') slicing open the sentence for a tricolon aside",
    answer: ["parenthetical dashes", "paired dashes", "em dashes", "dashes"],
    display: "parenthetical dashes",
    why: "**Parenthetical dashes** interrupt between subject and verb to inject sharp psychological judgement.",
  },
  {
    sample: "FAULTY: Midnight struck from the civic tower, nobody emerged from the station arch.",
    clue: "two-word name for this high-penalty IGCSE punctuation error",
    answer: ["comma splice", "comma splicing"],
    display: "comma splice",
    why: "**Comma splice**: two standalone clauses cannot be glued together by a bare comma.",
  },
  {
    sample: "For twenty minutes we called down the shaft. No echo. Not a breath.",
    clue: "two-word grammatical term ('_____ sentence') for deliberate verbless fragments like 'No echo.'",
    answer: ["minor sentence", "minor sentences", "sentence fragment"],
    display: "minor sentence",
    why: "Deliberate **minor sentences** arrest rhythm after longer clauses to enact stark silence.",
  },
  {
    sample: "One object remained on the kitchen table: an unposted airmail envelope.",
    clue: "single-word punctuation mark (`:`) zooming focus onto the motif object",
    answer: ["colon"],
    display: "colon",
    why: "**Colon** narrows cinematic focus from the room onto the single symbolic prop.",
  },
  {
    sample: "Dawn gilded the upper cathedral spire; down in the alley, night still pooled black.",
    clue: "single-word punctuation mark (`;`) holding light and shadow in poised balance",
    answer: ["semicolon", "semi-colon"],
    display: "semicolon",
    why: "**Semicolon** pairs spatial contrast cleanly without needing 'whereas' or 'but'.",
  },
];

const PUNCT_T2: readonly CompCase[] = [
  {
    sample: "FAULTY: Soaked to the skin by sideways sleet, the warm cottage door finally appeared ahead.",
    clue: "two-word grammatical blunder ('dangling ________') making the cottage door sound soaked in sleet",
    answer: ["dangling modifier", "dangling participle", "misplaced modifier"],
    display: "dangling modifier",
    why: "**Dangling modifier**: a fronted participial phrase must modify the subject immediately after the comma (*'..., I finally spotted the cottage door'*).",
  },
  {
    sample: "Shivering beneath the torn awning, Maya counted the remaining coins in her palm.",
    clue: "grammatical word ('___________' — 11 letters, starting with 'p', ending '-al') for an '-ing' opener ('Shivering...')",
    answer: ["participial", "participle", "present participle"],
    display: "participial",
    why: "Fronted **participial** openers break monotonous *'Maya / She / The'* sentence starts.",
  },
  {
    sample: "Beneath the rusted railway viaduct, puddles mirrored flickering amber tail-lights.",
    clue: "grammatical adjective ('_____________ phrase', starting with 'p', built on 'Beneath') for a place-locating opener",
    answer: ["prepositional", "prepositional phrase"],
    display: "prepositional",
    why: "Fronted **prepositional** phrases orient the descriptive camera spatially before the subject appears.",
  },
  {
    sample: "We packed rusted crampons, frayed hemp ropes, and battered tins; spare batteries, damp matches, and wax candles; and one cracked compass.",
    clue: "single-word punctuation mark (`;`) acting as a 'super-comma' inside a complex internal-comma list",
    answer: ["semicolon", "semicolons", "semi-colon"],
    display: "semicolon",
    why: "**Semicolons** keep multi-adjective list groups distinct when internal commas are already present.",
  },
  {
    sample: "FAULTY: Sprinting breathlessly for the final ferry, my shoelace snapped on the gangplank.",
    clue: "two-word grammatical error ('dangling ________') making a shoelace sprint breathlessly",
    answer: ["dangling modifier", "dangling participle"],
    display: "dangling modifier",
    why: "**Dangling modifier**: shoelaces cannot sprint or breathe — put the human runner right after the comma!",
  },
  {
    sample: "With mist curling over the weir, warning flags snapping stiff, and dusk thickening fast, we turned shoreward.",
    clue: "8-letter syntactic adjective ('________ sentence', starting with 'p') delaying 'we turned shoreward' until the close",
    answer: ["periodic", "periodic sentence"],
    display: "periodic",
    why: "**Periodic** sentence craft builds atmospheric pressure right up to the delayed main clause.",
  },
  {
    sample: "He promised absolute candour, transparent accounts, and swift reform — promises forgotten before Tuesday.",
    clue: "two-word punctuation name ('__-____' or 'em dash') for the single trailing mark delivering a satirical sting",
    answer: ["em-dash", "em dash", "dash"],
    display: "em-dash",
    why: "A single trailing **em-dash** pauses briefly before undercutting official rhetoric.",
  },
  {
    sample: "Clutching the brass handrail, she stepped onto the slick iron gangway.",
    clue: "grammatical adjective ('___________' — starting with 'p') naming the '-ing' opener",
    answer: ["participial", "participle"],
    display: "participial",
    why: "A cleanly attached **participial** phrase fuses physical gesture with forward motion.",
  },
];

const PUNCT_T3: readonly CompCase[] = [
  {
    sample: "He packed his wet oilskin, two tins of sardines, and a quiet dread of returning home.",
    clue: "6-letter Greek rhetorical noun (starting with 'z') where one verb ('packed') governs concrete items AND abstract 'dread'",
    answer: ["zeugma", "syllepsis"],
    display: "zeugma",
    why: "**Zeugma** yokes concrete objects and psychological abstraction under one verb for wry literary compression.",
  },
  {
    sample: "Had the harbour master hesitated ten seconds longer, the trawler would have struck granite.",
    clue: "two-word high-register syntactic move ('conditional _________') dropping 'if' and fronting 'Had'",
    answer: ["conditional inversion", "inversion"],
    display: "conditional inversion",
    why: "**Conditional inversion** (*'Had X…'*, *'Were we to…'*) elevates formal discursive and narrative syntax.",
  },
  {
    sample: "Neither fierce applause nor bitter mockery deflected her focus from the score.",
    clue: "grammatical adjective ('___________ conjunctions', starting with 'c') for paired structures like 'Neither... nor...'",
    answer: ["correlative", "correlative conjunctions"],
    display: "correlative",
    why: "**Correlative** conjunctions (*neither… nor*, *not only… but also*) create poised syntactic symmetry.",
  },
  {
    sample: "She lost her silver bracelet and her patience in the same crowded terminal.",
    clue: "6-letter Greek term (starting with 'z') yoking 'bracelet' and 'patience' to 'lost'",
    answer: ["zeugma", "syllepsis"],
    display: "zeugma",
    why: "**Zeugma** pivots deftly from physical object to emotional temper on a single verb.",
  },
  {
    sample: "Were municipalities to pedestrianise historic centres, air quality and street life would flourish.",
    clue: "two-word grammatical name ('conditional _________') fronting 'Were' in place of 'If... were to'",
    answer: ["conditional inversion", "inversion"],
    display: "conditional inversion",
    why: "**Conditional inversion** (*'Were X to…'*) projects effortless broadsheet authority.",
  },
  {
    sample: "Down the flooded lane drifted crates, wheelbarrows, and uprooted laurels.",
    clue: "two-word syntactic move ('locative _________' or 'syntactic inversion' — give the 9-letter noun starting with 'i') placing verb 'drifted' ahead of its subject",
    answer: ["inversion", "syntactic inversion"],
    display: "inversion",
    why: "Locative **inversion** (*'Down the lane drifted…'*) leads with setting before revealing the drifting debris.",
  },
  {
    sample: "Not only did the seawall fracture, but salt tide also inundated the lower orchard.",
    clue: "11-letter grammatical adjective ('___________') for paired conjunctions 'Not only... but also'",
    answer: ["correlative"],
    display: "correlative",
    why: "**Correlative** framing (*Not only… but also*) escalates consequence with formal precision.",
  },
  {
    sample: "On the night train he carried a battered violin case and forty years of homesickness.",
    clue: "6-letter Greek term (starting with 'z') governing literal 'violin case' and abstract 'homesickness' with 'carried'",
    answer: ["zeugma"],
    display: "zeugma",
    why: "**Zeugma** fuses tangible motif and inner ache inside a single clause.",
  },
];

// ---------------------------------------------------------------------------
// DRILL 3: Precision Vocabulary & SPaG Proofreading (PACE)
// ---------------------------------------------------------------------------
const SPAG_T1: readonly CompCase[] = [
  {
    sample: "GAP FILL: The returning fishermen hung _____ salt-stiffened oilskins behind the door. (there / their)",
    clue: "5-letter possessive determiner meaning 'belonging to them'",
    answer: ["their"],
    display: "their",
    trapTerm: ["there"],
    trapFeedback: "'there' indicates place (contains 'here'); ownership requires '-eir'!",
    why: "**their** is the plural possessive determiner; *there* marks location.",
  },
  {
    sample: "GAP FILL: Chronic noise pollution can severely ______ childhood reading memory. (affect / effect)",
    clue: "6-letter transitive verb meaning 'to influence or harm'",
    answer: ["affect"],
    display: "affect",
    trapTerm: ["effect"],
    trapFeedback: "After 'can', use the standard verb starting with 'a' ('effect' is normally the noun)!",
    why: "**affect** is the verb (*to impact*); *effect* is the resulting noun (*a lasting effect*).",
  },
  {
    sample: "SPELL CHECK: Fix the misspelt adverb 'definately' in 'This policy will definately backfire.'",
    clue: "10-letter correct spelling built on root 'finite'",
    answer: ["definitely"],
    display: "definitely",
    why: "**definitely** = `de + finite + ly` (never an *a*).",
  },
  {
    sample: "SPELL CHECK: Fix 'seperate' in 'Stone walls seperate the two orchards.'",
    clue: "8-letter correct spelling ('a rat' inside)",
    answer: ["separate"],
    display: "separate",
    why: "**separate** is spelt `s-e-p-a-r-a-t-e`.",
  },
  {
    sample: "SPELL CHECK: Fix 'neccessary' in 'Clean water is neccessary for survival.'",
    clue: "9-letter correct spelling (1 collar 'c', 2 sleeves 'ss')",
    answer: ["necessary"],
    display: "necessary",
    why: "**necessary** has one *c* and two *s*'s (`n-e-c-e-s-s-a-r-y`).",
  },
  {
    sample: "GAP FILL: Beyond the granite breakwater, _____ stood a solitary rusted beacon. (their / there)",
    clue: "5-letter adverb/existential word containing 'here'",
    answer: ["there"],
    display: "there",
    trapTerm: ["their"],
    trapFeedback: "'their' shows ownership; existential/location 'there' contains 'here'!",
    why: "**there** introduces existence or place (*there stood*); *their* shows possession.",
  },
  {
    sample: "GAP FILL: The new curfew had an immediate calming ______ on street congestion. (affect / effect)",
    clue: "6-letter noun meaning 'result or outcome' after 'calming'",
    answer: ["effect"],
    display: "effect",
    trapTerm: ["affect"],
    trapFeedback: "After 'an immediate calming ___', you need the **noun** starting with 'e'!",
    why: "**effect** is the noun meaning *result*.",
  },
  {
    sample: "SPELL CHECK: Fix 'accomodation' in 'Hostel accomodation was scarce in July.'",
    clue: "13-letter correct spelling with twin double letters (cc + mm)",
    answer: ["accommodation"],
    display: "accommodation",
    why: "**accommodation** takes both double *cc* and double *mm*.",
  },
];

const SPAG_T2: readonly CompCase[] = [
  {
    sample: "HOMOPHONE FIX: Replace 'conscious' in 'A just judge must obey her moral conscious.'",
    clue: "10-letter moral noun ('con' + 'science')",
    answer: ["conscience"],
    display: "conscience",
    why: "**conscience** is the moral noun; *conscious* is the adjective meaning awake.",
  },
  {
    sample: "SPELL CHECK: Fix 'priviledge' in 'Access to libraries should be a right, not a priviledge.'",
    clue: "9-letter correct spelling (ZERO letter 'd')",
    answer: ["privilege"],
    display: "privilege",
    why: "**privilege** has no *d* (`p-r-i-v-i-l-e-g-e`).",
  },
  {
    sample: "SPELL CHECK: Fix 'enviroment' in 'Industrial runoff poisoned the river enviroment.'",
    clue: "11-letter correct spelling keeping the silent 'n' before 'm'",
    answer: ["environment"],
    display: "environment",
    why: "**environment** preserves `n` before `m` (`enviro-n-ment`, from *environ*).",
  },
  {
    sample: "VERB UPGRADE: Replace weak 'shone very unsteadily' in 'The dying candle flame shone very unsteadily.'",
    clue: "8-letter precision past-tense verb (starting with 'g') for a sputtering, nearly extinguished candle",
    answer: ["guttered", "flickered"],
    display: "guttered",
    why: "**guttered** replaces clumsy adverb + 'very' with one exact literary verb.",
  },
  {
    sample: "TENSE AUDIT: 'Elena unlocked the cellar door and steps onto the cold stone.' Fix 'steps'.",
    clue: "7-letter past-simple verb restoring tense consistency with 'unlocked'",
    answer: ["stepped"],
    display: "stepped",
    why: "**stepped** cures accidental tense drift from past into present.",
  },
  {
    sample: "CONFUSABLE FIX: 'Her closing paragraph made a subtle literary ___ to Greek myth.' (illusion / allusion)",
    clue: "8-letter noun starting with 'a' meaning 'indirect literary reference' (NOT optical trick 'illusion')",
    answer: ["allusion"],
    display: "allusion",
    trapTerm: ["illusion"],
    trapFeedback: "'Illusion' with 'i' = optical trick/mirage; an indirect reference starts with 'a' ('allude')!",
    why: "**allusion** (`allude`) means an indirect literary or historical reference; *illusion* is a deceptive appearance.",
  },
  {
    sample: "VERB UPGRADE: Replace weak 'walked very slowly and wearily' in 'The soaked hikers ___ across the peat bog.'",
    clue: "7-letter dynamic past-tense verb (starting with 't', 'tr_____') for heavy, exhausted walking",
    answer: ["trudged", "slogged"],
    display: "trudged",
    why: "**trudged** replaces three weak words (*walked very slowly*) with one muscular verb.",
  },
  {
    sample: "SPELL CHECK: Fix 'occured' in 'A sudden tonal shift occured in Paragraph 3.'",
    clue: "8-letter past-tense spelling doubling the final 'r' ('occurred')",
    answer: ["occurred"],
    display: "occurred",
    why: "**occurred** doubles the stressed final *r* before *-ed* (`o-c-c-u-r-r-e-d`).",
  },
];

const SPAG_T3: readonly CompCase[] = [
  {
    sample: "SUBJUNCTIVE FIX: 'If civic trust ___ to collapse completely, laws alone could not mend it.' (not 'was')",
    clue: "4-letter counterfactual subjunctive verb form",
    answer: ["were"],
    display: "were",
    trapTerm: ["was"],
    trapFeedback: "Formal counterfactual 'If X ___ to...' requires the 4-letter irrealis subjunctive!",
    why: "Counterfactual subjunctive uses **were** (*'If trust were to collapse…'*).",
  },
  {
    sample: "REGISTER FIX: 'Impartial inquiry chairs must remain completely ___ throughout proceedings.' (disinterested / uninterested)",
    clue: "13-letter adjective ('dis__________') meaning 'impartial / free of personal bias' (NOT bored 'uninterested')",
    answer: ["disinterested"],
    display: "disinterested",
    trapTerm: ["uninterested"],
    trapFeedback: "'Uninterested' means bored; 'impartial / unbiased' uses the prefix 'dis-'!",
    why: "**disinterested** means impartial and unbiased (essential for judges/referees), whereas *uninterested* means bored.",
  },
  {
    sample: "LEXICAL FIX: 'The new timetable will ___ against working parents.' (mitigate / militate)",
    clue: "8-letter formal verb ('mili____') followed by 'against', meaning 'weigh heavily / operate against'",
    answer: ["militate"],
    display: "militate",
    trapTerm: ["mitigate"],
    trapFeedback: "'Mitigate' means soften harm (never 'mitigate against'); 'weigh against' is 'militate'!",
    why: "**militate** (*militate against*) means operate powerfully against; *mitigate* means lessen severity.",
  },
  {
    sample: "SPELL CHECK: Fix 'embarass' in 'Public league tables can embarass struggling schools.'",
    clue: "9-letter correct spelling with double 'rr' AND double 'ss'",
    answer: ["embarrass"],
    display: "embarrass",
    why: "**embarrass** takes double *rr* and double *ss* (`e-m-b-a-r-r-a-s-s`).",
  },
  {
    sample: "SPELL CHECK: Fix 'rythm' in 'Varied clause lengths control prose rythm.'",
    clue: "6-letter correct Greek spelling ('r-h-y-t-h-m')",
    answer: ["rhythm"],
    display: "rhythm",
    why: "**rhythm** has `rh` at the start and `th` in the middle (`r-h-y-t-h-m`).",
  },
  {
    sample: "HOMOPHONE FIX: 'The headteacher outlined the foundational ___ of fairness.' (principal / principle)",
    clue: "9-letter noun ending '-le' meaning 'moral rule or fundamental truth'",
    answer: ["principle"],
    display: "principle",
    trapTerm: ["principal"],
    trapFeedback: "PrincipAL = main / head person; a moral ruLE ends in '-LE'!",
    why: "**principle** (`-le`, like *rule*) is a moral truth; *principal* (`-al`) means main or head.",
  },
  {
    sample: "SUBJUNCTIVE FIX: 'The inquiry demanded that every safety valve ___ inspected weekly.' (base verb form, not 'is/was')",
    clue: "2-letter mandative subjunctive base verb after 'demanded that...'",
    answer: ["be"],
    display: "be",
    why: "Mandative subjunctive after *demanded/insisted that* uses bare infinitive **be** (*'that every valve be inspected'*).",
  },
  {
    sample: "SPELL CHECK: Fix 'harass' trap — spell the 11-letter noun 'maintanance' accurately ('regular bridge ___').",
    clue: "11-letter correct spelling ('main-ten-ance', NOT '-tain-')",
    answer: ["maintenance"],
    display: "maintenance",
    why: "**maintenance** shifts from *maintain* to `-ten-` (`m-a-i-n-t-e-n-a-n-c-e`).",
  },
];

// ---------------------------------------------------------------------------
// DRILL 4: Discursive & Narrative Architecture
// ---------------------------------------------------------------------------
const ARCH_T1: readonly CompCase[] = [
  {
    sample: "Admittedly, standardised exams shield applicants from nepotism; nevertheless, they narrow curiosity.",
    clue: "12-letter gerund ('steel_______') for presenting the strongest version of the opposing view before pivoting",
    answer: ["steelmanning", "steelman"],
    display: "steelmanning",
    trapTerm: ["strawmanning"],
    trapFeedback: "Strawmanning mocks a weak caricature; building the *strongest* fair counter-case uses steel!",
    why: "**Steelmanning** builds intellectual credibility by honouring your opponent's best point first.",
  },
  {
    sample: "People who want cycle lanes clearly hate ambulances and want everyone to walk barefoot in snow!",
    clue: "12-letter logical fallacy ('straw_______') distorting an opponent's case into an absurd caricature",
    answer: ["strawmanning", "strawman", "straw man"],
    display: "strawmanning",
    why: "**Strawmanning** attacks a ridiculous distortion instead of the real counter-argument, weakening ethos.",
  },
  {
    sample: "Paragraph 1 plants a tarnished brass compass; Paragraph 5 closes with that compass laid open on the map.",
    clue: "5-letter noun (starting with 'm') for a recurring symbolic object unifying a story",
    answer: ["motif"],
    display: "motif",
    why: "A recurring **motif** binds a 45-minute narrative without needing melodramatic plot twists.",
  },
  {
    sample: "Does constant notifications traffic make us better informed? Hardly: noise drowns reflection.",
    clue: "9-letter Greek rhetorical term (starting with 'h') for asking a question and immediately answering it",
    answer: ["hypophora"],
    display: "hypophora",
    why: "**Hypophora** frames and resolves a discursive point with crisp authority.",
  },
  {
    sample: "Opening right as seawater laps over the cellar step instead of starting with breakfast.",
    clue: "three-word Latin phrase ('in ______ ___') for plunging straight into middle action",
    answer: ["in medias res"],
    display: "in medias res",
    why: "**In medias res** eliminates dead chronological throat-clearing.",
  },
  {
    sample: "New paragraph whenever Time, Place, Topic, or Person changes.",
    clue: "6-letter paragraphing mnemonic ('Ti____')",
    answer: ["tiptop"],
    display: "TiPToP",
    why: "**TiPToP** ensures clean, purposeful paragraph architecture.",
  },
  {
    sample: "Final 5-minute check of Punctuation, Agreement/Tense, Confusables, and Echoes.",
    clue: "4-letter proofreading mnemonic ('P___')",
    answer: ["pace"],
    display: "PACE",
    why: "The **PACE** audit protects top-band SPaG marks in the final five minutes.",
  },
  {
    sample: "Returning in your closing lines to Paragraph 1's rain-swept platform with transformed calm.",
    clue: "8-letter structural adjective (starting with 'c', ending '-al') for looping ending back to opening",
    answer: ["cyclical", "circular"],
    display: "cyclical",
    why: "A transformed **cyclical** frame proves intentional whole-text planning.",
  },
];

const ARCH_T2: readonly CompCase[] = [
  {
    sample: "We have multiplied digital connections; we have rationed unhurried companionship.",
    clue: "10-letter Greek term (starting with 'a') balancing opposing ideas in parallel clauses",
    answer: ["antithesis"],
    display: "antithesis",
    why: "**Antithesis** sharpens discursive synthesis across a semicolon.",
  },
  {
    sample: "Three winters earlier, her father had locked the studio piano and pocketed the key.",
    clue: "two-word verb tense ('____ _______') cleanly signalling entry into a narrative flashback",
    answer: ["past perfect", "pluperfect"],
    display: "past perfect",
    why: "Using **past perfect** (*had locked*) prevents examiners mistaking flashbacks for tense drift.",
  },
  {
    sample: "Using 'tends to', 'risks', and 'seldom' instead of shouting 'every teenager always fails!'.",
    clue: "5-letter grammatical adjective ('_____ verbs/qualifiers', starting with 'm') for calibrated certainty",
    answer: ["modal", "modality", "modal verbs"],
    display: "modal",
    why: "Calibrated **modal** nuance insulates discursive claims against obvious exceptions.",
  },
  {
    sample: "Granted, short-haul flights boost tourism; notwithstanding this, rail investment cuts emissions deeper.",
    clue: "10-letter discursive noun ('con_______', starting with 'c') for acknowledging a valid opposing point",
    answer: ["concession"],
    display: "concession",
    why: "Strategic **concession** (*Granted…, Admittedly…*) precedes a devastating rebuttal pivot.",
  },
  {
    sample: "Turning 'companies privatised water rapidly' into the topic-sentence noun phrase 'Rapid water privatisation...'",
    clue: "14-letter linguistic noun ('nominal_______') for converting verbs/clauses into abstract noun phrases",
    answer: ["nominalisation", "nominalization"],
    display: "nominalisation",
    why: "Selective **nominalisation** builds authoritative topic-sentence bridges in discursive essays.",
  },
  {
    sample: "Ending a discursive essay by transcending 'either X or Y' into a higher conditional truth.",
    clue: "9-letter philosophical/discursive noun (starting with 's', 'syn______') combining thesis + antithesis",
    answer: ["synthesis"],
    display: "synthesis",
    why: "A **synthesis** conclusion resolves complexity instead of mechanically repeating Paragraph 1.",
  },
  {
    sample: "Dad placed the petrol-station flowers by the cold plate. 'Ring-road traffic,' he muttered to the sink.",
    clue: "7-letter literary noun (starting with 's', 'sub____') for unspoken meaning beneath oblique dialogue",
    answer: ["subtext"],
    display: "subtext",
    why: "Rich **subtext** conveys guilt and hurt without wooden soap-opera speeches.",
  },
  {
    sample: "Isolating 'The envelope was empty.' on its own line between two full paragraphs.",
    clue: "7-letter structural noun ('f______', starting with 'f') for a single-line turning-point pivot",
    answer: ["fulcrum", "pivot"],
    display: "fulcrum",
    why: "One standalone single-sentence paragraph acts as a visual and emotional **fulcrum**.",
  },
];

const ARCH_T3: readonly CompCase[] = [
  {
    sample: "Clara stared at the bolted gate. Locked out again — what pathetic excuse would he offer by morning?",
    clue: "three-word narrative technique ('free ________ discourse') slipping inside third-person character idiom without speech marks",
    answer: ["free indirect discourse", "free indirect style", "free indirect speech", "free indirect"],
    display: "free indirect discourse",
    why: "**Free indirect discourse** fuses third-person control with intimate inner voice.",
  },
  {
    sample: "In classical rhetoric, appealing through calm fairness, Restraint, and credible moral character.",
    clue: "5-letter Aristotelian noun (starting with 'e') for speaker credibility and trustworthiness",
    answer: ["ethos"],
    display: "ethos",
    trapTerm: ["pathos", "logos"],
    trapFeedback: "Pathos = emotion, Logos = logic; credibility/character starts with 'e'!",
    why: "Fabricated statistics destroy **ethos**, whereas calm steelmanning strengthens it.",
  },
  {
    sample: "In classical rhetoric, structuring cause-and-effect mechanisms and coherent reasoned proof.",
    clue: "5-letter Aristotelian noun (starting with 'l') for reasoned logical proof",
    answer: ["logos"],
    display: "logos",
    trapTerm: ["ethos", "pathos"],
    trapFeedback: "Reasoned proof and logical structure starts with 'l'!",
    why: "**Logos** persuades sceptical readers through clear causal reasoning rather than shouting.",
  },
  {
    sample: "Preemptively raising and disarming your reader's sharpest objection before they can think of it.",
    clue: "9-letter classical rhetorical term ('pro______', starting with 'p') for anticipating an objection upfront",
    answer: ["prolepsis", "preemption"],
    display: "prolepsis",
    why: "Rhetorical **prolepsis** anticipates and neutralises counter-objections proactively.",
  },
  {
    sample: "Ending three successive discursive clauses with the exact same words: '...costs trust; ...erodes trust; ...betrays trust.'",
    clue: "8-letter Greek rhetorical term ('epi_____', opposite of anaphora) for repeating words at the ENDS of clauses",
    answer: ["epiphora", "epistrophe"],
    display: "epiphora",
    trapTerm: ["anaphora"],
    trapFeedback: "Anaphora repeats at clause *beginnings*; repeating at clause *ends* is epiphora/epistrophe!",
    why: "**Epiphora** (or **epistrophe**) drives home a key thematic noun at the close of successive clauses.",
  },
  {
    sample: "Deliberately qualifying a strong statement immediately afterward ('...a triumph — or at least a reprieve').",
    clue: "11-letter rhetorical term ('meta_______' or 'epanorthosis' — give 'epanorthosis' 12 letters starting 'epan-') for immediate self-correction for nuance",
    answer: ["epanorthosis", "metanoia"],
    display: "epanorthosis",
    why: "**Epanorthosis** (or **metanoia**) refines a claim mid-flight via a dash, signalling scrupulous honesty.",
  },
  {
    sample: "Marcus folded the rejection slip. Fine — who needed conservatoire snobbery anyway?",
    clue: "three-word narrative voice technique ('free ________ discourse') embedding unspoken attitude in third person",
    answer: ["free indirect discourse", "free indirect style", "free indirect"],
    display: "free indirect discourse",
    why: "**Free indirect discourse** lets defensive pride bleed straight through third-person narration.",
  },
  {
    sample: "Aristotelian appeal grounded in concrete human stakes and lived vulnerability without melodrama.",
    clue: "6-letter Greek rhetorical noun (starting with 'p', NOT bathos) for emotional appeal",
    answer: ["pathos"],
    display: "pathos",
    trapTerm: ["bathos"],
    trapFeedback: "Bathos is comic anti-climax; genuine emotional resonance starts with 'p'!",
    why: "Restrained **pathos** moves readers far more deeply than exclamation-mark melodrama.",
  },
];

const ASK_SENSORY = [
  (c: string) => `Name the descriptive craft or sensory term (${c}).`,
  (c: string) => `Identify the Paper 1B atmospheric concept (${c}).`,
  (c: string) => `Which descriptive writing term applies here (${c})?`,
  (c: string) => `Give the exact literary/sensory label (${c}).`,
] as const;

const ASK_PUNCT = [
  (c: string) => `Identify the punctuation or syntactic craft term (${c}).`,
  (c: string) => `Name the grammatical feature or error (${c}).`,
  (c: string) => `State the Paper 1B sentence-craft label (${c}).`,
  (c: string) => `Which syntax/punctuation term fits (${c})?`,
] as const;

const ASK_SPAG = [
  (c: string) => `Supply the exact Grade-9 SPaG correction or word (${c}).`,
  (c: string) => `Write the error-free form for your PACE audit (${c}).`,
  (c: string) => `Give the exact corrected word (${c}).`,
  (c: string) => `Complete the technical-accuracy check (${c}).`,
] as const;

const ASK_ARCH = [
  (c: string) => `Name the discursive or narrative architecture term (${c}).`,
  (c: string) => `Identify the high-band composition technique (${c}).`,
  (c: string) => `State the exact Section B structural/rhetorical term (${c}).`,
  (c: string) => `Which Grade-9 planning or rhetorical concept fits (${c})?`,
] as const;

export const drills: Drill[] = [
  {
    id: "lang-p1-composition.sensory-atmosphere",
    topicId: "lang-p1-composition",
    title: "Sensory Zoom & Atmospheric Precision",
    level: 1,
    guideRef: "sensory-zoom-atmosphere",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? SENSORY_T1 : tier === 2 ? SENSORY_T2 : SENSORY_T3;
      return generateItem(rng, bank, ASK_SENSORY);
    },
  },
  {
    id: "lang-p1-composition.punctuation-syntax",
    topicId: "lang-p1-composition",
    title: "Punctuation Quartet & Syntax Surgery",
    level: 2,
    guideRef: "syntax-rhythm-punctuation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? PUNCT_T1 : tier === 2 ? PUNCT_T2 : PUNCT_T3;
      return generateItem(rng, bank, ASK_PUNCT);
    },
  },
  {
    id: "lang-p1-composition.spag-precision",
    topicId: "lang-p1-composition",
    title: "PACE Audit: Homophones, Spellings & Verbs",
    level: 2,
    guideRef: "ambitious-register-proofreading",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? SPAG_T1 : tier === 2 ? SPAG_T2 : SPAG_T3;
      return generateItem(rng, bank, ASK_SPAG);
    },
  },
  {
    id: "lang-p1-composition.discursive-narrative-craft",
    topicId: "lang-p1-composition",
    title: "Discursive Steelmanning & Cyclical Arcs",
    level: 3,
    guideRef: "discursive-argument-architecture",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? ARCH_T1 : tier === 2 ? ARCH_T2 : ARCH_T3;
      return generateItem(rng, bank, ASK_ARCH);
    },
  },
];

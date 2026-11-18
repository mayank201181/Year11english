import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

interface TermCase {
  extract: string;
  clue: string;
  answer: string[];
  display: string;
  trapTerm?: string[];
  trapFeedback?: string;
  why: string;
}

const STEMS_A = [
  "Read this unseen non-fiction extract:",
  "Examine this travelogue sentence:",
  "Study this memoir line:",
  "Consider this feature-journalism extract:",
] as const;

function buildFromBank(rng: Rng, bank: readonly TermCase[], askFormats: readonly ((clue: string) => string)[]): {
  prompt: string;
  answer: { type: "text"; accept: string[]; display: string };
  traps?: Trap[];
  hint: string;
  solution: string[];
} {
  const opener = rng.pick(STEMS_A);
  const item = rng.pick(bank);
  const ask = rng.pick(askFormats)(item.clue);
  const prompt = `${opener}\n\n*"${item.extract}"*\n\n${ask}`;
  const traps: Trap[] | undefined =
    item.trapTerm && item.trapFeedback
      ? [{ spec: { type: "text", accept: item.trapTerm }, feedback: item.trapFeedback }]
      : undefined;
  return {
    prompt,
    answer: { type: "text", accept: item.answer, display: item.display },
    traps,
    hint: `Focus on the exact craft clue: ${item.clue}.`,
    solution: [item.why],
  };
}

// ---------------------------------------------------------------------------
// DRILL 1: Lexical & Figurative Device Precision
// ---------------------------------------------------------------------------
const LEXICAL_T1: readonly TermCase[] = [
  {
    extract: "The rusted crane towered over the dockyard like a skeletal giraffe against the dusk.",
    clue: "explicit comparison introduced by 'like'",
    answer: ["simile"],
    display: "simile",
    trapTerm: ["metaphor"],
    trapFeedback: "A metaphor equates directly without 'like' or 'as' — spot the explicit word 'like'!",
    why: "**Simile**: *'like a skeletal giraffe'* uses explicit comparison to emphasise gaunt industrial height.",
  },
  {
    extract: "By noon the commuter carriage was a sealed pressure-cooker of damp wool and frayed tempers.",
    clue: "direct figurative equation stating the carriage 'was a sealed pressure-cooker' (without 'like' or 'as')",
    answer: ["metaphor"],
    display: "metaphor",
    trapTerm: ["simile"],
    trapFeedback: "There is no 'like' or 'as' here — the carriage is directly equated to a pressure-cooker.",
    why: "**Metaphor**: directly equating the carriage to a *'sealed pressure-cooker'* conveys stifling heat and imminent eruption.",
  },
  {
    extract: "Sullen, weeping storm-clouds slumped over the estuary as the ferry departed.",
    clue: "two-word term for projecting human grief/mood specifically onto weather",
    answer: ["pathetic fallacy"],
    display: "pathetic fallacy",
    trapTerm: ["personification"],
    trapFeedback: "Give the specialised two-word term used when *weather* mirrors human emotion!",
    why: "**Pathetic fallacy**: attributing human sorrow (*'sullen, weeping'*) specifically to weather mirrors mournful departure.",
  },
  {
    extract: "The parking meter swallowed my final coin and stared back with a blank red zero.",
    clue: "single-word device giving human bodily action ('swallowed', 'stared') to an inanimate machine",
    answer: ["personification"],
    display: "personification",
    trapTerm: ["pathetic fallacy"],
    trapFeedback: "A parking meter is an inanimate machine, not weather — use the broader single-word term!",
    why: "**Personification**: endowing a machine with human agency (*'swallowed'*, *'stared'*) makes bureaucracy feel spiteful.",
  },
  {
    extract: "Brooding, angry thunderheads glared down upon the stranded climbers.",
    clue: "two-word term for attributing human anger ('brooding, angry') specifically to storm clouds",
    answer: ["pathetic fallacy"],
    display: "pathetic fallacy",
    trapTerm: ["personification"],
    trapFeedback: "Because human emotion is projected onto *weather/sky*, use Ruskin's two-word term!",
    why: "**Pathetic fallacy**: projecting human hostility (*'brooding, angry'*) onto storm clouds externalises the climbers' dread.",
  },
  {
    extract: "My battered suitcase groaned on the carousel before spitting its brass latch across the tiles.",
    clue: "single-word device giving deliberate human vocal/mouth actions to an inanimate suitcase",
    answer: ["personification"],
    display: "personification",
    why: "**Personification**: *'groaned'* and *'spitting'* animate the exhausted luggage with comic defiance.",
  },
  {
    extract: "Frost needles stitched the tent zip shut as rigid as welded iron.",
    clue: "explicit comparison introduced by 'as ... as'",
    answer: ["simile"],
    display: "simile",
    trapTerm: ["metaphor"],
    trapFeedback: "'as rigid as welded iron' uses 'as...as' — that marks an explicit simile!",
    why: "**Simile**: *'as rigid as welded iron'* highlights immovable sub-zero freezing.",
  },
  {
    extract: "The desert highway was a black ribbon unspooled across bleached bone-white salt.",
    clue: "direct figurative equation calling the highway 'a black ribbon' without 'like' or 'as'",
    answer: ["metaphor"],
    display: "metaphor",
    why: "**Metaphor**: calling tarmac *'a black ribbon'* emphasises how fragile and narrow the road looks against vast salt-flats.",
  },
];

const LEXICAL_T2: readonly TermCase[] = [
  {
    extract: "Searchlights interrogated the harbour wall while barbed rain strafed the sentry-box roof.",
    clue: "two-word term for the shared thematic cluster of warfare words ('searchlights', 'interrogated', 'barbed', 'strafed', 'sentry-box')",
    answer: ["semantic field", "lexical field"],
    display: "semantic field",
    why: "**Semantic field** (of military siege/interrogation): clustering warfare lexis frames the storm as an armed assault.",
  },
  {
    extract: "Blackened rafters buckled, burst, and battered the flagstones below.",
    clue: "phonetic term (starting with 'p') for harsh percussive /b/ and /t/ stop-consonants",
    answer: ["plosives", "plosive", "plosive consonants"],
    display: "plosives",
    trapTerm: ["sibilance"],
    trapFeedback: "Sibilance is /s/ and /sh/; explosive /b/, /p/, /t/, /k/ sounds start with 'pl-'.",
    why: "**Plosives**: harsh /b/ stop-consonants (*buckled, burst, battered*) amplify explosive structural collapse.",
  },
  {
    extract: "Fine spindrift hissed across the ice-crust, whispering sinister threats into our hoods.",
    clue: "single-word phonetic term (starting with 's') for repeated /s/ and /sh/ sounds",
    answer: ["sibilance"],
    display: "sibilance",
    trapTerm: ["plosives"],
    trapFeedback: "Repeated hissing /s/ and /sh/ sounds have a 9-letter name starting with 's'!",
    why: "**Sibilance**: repeated /s/ sounds (*spindrift, hissed, sinister*) enact the whipping, menacing hiss of wind-blown ice.",
  },
  {
    extract: "A deafening silence settled over the stadium the instant the crossbar rattled.",
    clue: "single-word device (8 letters, starting with 'o') fusing two directly contradictory words ('deafening silence')",
    answer: ["oxymoron"],
    display: "oxymoron",
    why: "**Oxymoron**: yoking contradictory *'deafening'* and *'silence'* captures overwhelming collective shock.",
  },
  {
    extract: "On the operating table of the glacier, wind-scalpels incised blue veins of meltwater.",
    clue: "two-word term for the shared medical/surgical vocabulary cluster ('operating table', 'scalpels', 'incised', 'veins')",
    answer: ["semantic field", "lexical field"],
    display: "semantic field",
    why: "**Semantic field** (of surgery): medical lexis makes glacial erosion feel clinical, cold, and invasive.",
  },
  {
    extract: "I had waited roughly ten thousand lifetimes for the rural replacement bus to round the hedge.",
    clue: "single-word term (9 letters, starting with 'h') for deliberate comic exaggeration ('ten thousand lifetimes')",
    answer: ["hyperbole"],
    display: "hyperbole",
    why: "**Hyperbole**: extravagant exaggeration (*'ten thousand lifetimes'*) conveys comic exasperation.",
  },
  {
    extract: "We enjoyed the gentle cruelty of a four-mile uphill jog before breakfast.",
    clue: "single-word term (8 letters, starting with 'o') pairing contradictory words side-by-side ('gentle cruelty')",
    answer: ["oxymoron"],
    display: "oxymoron",
    why: "**Oxymoron**: compressing *'gentle cruelty'* exposes the trainer's polite tone masking gruelling pain.",
  },
  {
    extract: "Pelting pebbles pummelled the corrugated porch roof.",
    clue: "phonetic term (starting with 'p') for explosive /p/ consonant bursts",
    answer: ["plosives", "plosive"],
    display: "plosives",
    why: "**Plosives**: sharp /p/ bursts (*pelting pebbles pummelled*) mimic hailstone impacts.",
  },
];

const LEXICAL_T3: readonly TermCase[] = [
  {
    extract: "Crossing the frozen crevasse on a cracked aluminium ladder was no small test of nerve.",
    clue: "7-letter Greek term (starting with 'l') for dry understatement via negating the opposite ('no small test')",
    answer: ["litotes"],
    display: "litotes",
    trapTerm: ["hyperbole"],
    trapFeedback: "Hyperbole exaggerates; negating the opposite ('no small test') for dry restraint is a 7-letter term starting with 'l'!",
    why: "**Litotes**: negating *'small'* (*'no small test'*) conveys extreme danger through stoic understatement.",
  },
  {
    extract: "After eighteen hours without water, the lukewarm canteen tasted not unpleasant.",
    clue: "7-letter Greek term (starting with 'l') for ironic double-negative understatement ('not unpleasant')",
    answer: ["litotes"],
    display: "litotes",
    why: "**Litotes**: *'not unpleasant'* dryly understates intense relief through double negation.",
  },
  {
    extract: "Downing Street announced today that fuel levies would rise by six per cent.",
    clue: "8-letter Greek term (starting with 'm', NOT metaphor) substituting a linked place/building ('Downing Street') for the people working inside it",
    answer: ["metonymy"],
    display: "metonymy",
    trapTerm: ["metaphor"],
    trapFeedback: "Downing Street isn't compared by similarity — it substitutes a closely associated building for the Prime Minister's office ('meto-')!",
    why: "**Metonymy**: substituting *'Downing Street'* for government officials makes power sound institutional and impersonal.",
  },
  {
    extract: "The company politely invited forty shipyard welders to 'explore alternative career horizons' by Friday.",
    clue: "9-letter term (starting with 'e') for a polite, evasive expression softening harsh reality (firing workers)",
    answer: ["euphemism"],
    display: "euphemism",
    trapTerm: ["dysphemism"],
    trapFeedback: "Dysphemism makes language harsher; softening redundancy into 'explore horizons' starts with 'eu-'!",
    why: "**Euphemism**: corporate phrasing (*'explore alternative career horizons'*) sanitises brutal job losses.",
  },
  {
    extract: "Twenty weathered hands hauled on the wet hemp hawser as the lifeboat cleared the surf.",
    clue: "10-letter Greek term (starting with 's') where a physical part ('hands') stands for whole people (sailors)",
    answer: ["synecdoche"],
    display: "synecdoche",
    why: "**Synecdoche**: reducing sailors to *'twenty weathered hands'* focuses entirely on collective physical labour.",
  },
  {
    extract: "The glossy brochure called the basement room 'cosy'; estate-agent code for a windowless shoebox.",
    clue: "9-letter term (starting with 'e') for the softened marketing word 'cosy' disguising cramped space",
    answer: ["euphemism"],
    display: "euphemism",
    why: "**Euphemism**: *'cosy'* masks claustrophobic squalor behind estate-agent politeness.",
  },
  {
    extract: "Wall Street panicked before lunchtime as tech shares plunged.",
    clue: "8-letter Greek term (starting with 'm') where a street name stands for the financial industry",
    answer: ["metonymy"],
    display: "metonymy",
    why: "**Metonymy**: *'Wall Street'* personifies an entire financial sector via its street address.",
  },
  {
    extract: "Facing a force-ten North Atlantic gale in an open dinghy is not entirely restful.",
    clue: "7-letter Greek term (starting with 'l') for dry understatement negating 'restful'",
    answer: ["litotes"],
    display: "litotes",
    why: "**Litotes**: *'not entirely restful'* uses deadpan British understatement to heighten perilous absurdity.",
  },
];

// ---------------------------------------------------------------------------
// DRILL 2: Tone & Viewpoint Precision Vocabulary
// ---------------------------------------------------------------------------
const TONE_T1: readonly TermCase[] = [
  {
    extract: "Armed with a compass held upside down and profound confidence, I led our hiking group straight into a cow pasture.",
    clue: "hyphenated adjective ('self-___________') for wryly mocking your own incompetence",
    answer: ["self-deprecating", "self deprecating", "self-mocking"],
    display: "self-deprecating",
    why: "**Self-deprecating** humour pokes gentle fun at the narrator's own hubris, winning reader warmth.",
  },
  {
    extract: "Standing beside the boarded-up chapel where my grandmother once sang, I listened to wind combing empty nettles.",
    clue: "7-letter adjective (starting with 'e', from 'elegy') for mournful, poignant reflection on loss",
    answer: ["elegiac"],
    display: "elegiac",
    why: "**Elegiac** captures quiet, mournful remembrance of a vanished community.",
  },
  {
    extract: "How comforting to know that while rivers choke on sewage, water executives still receive seven-figure bonuses for 'environmental leadership'.",
    clue: "8-letter adjective (starting with 's') for dry, grimly mocking, scornful irony",
    answer: ["sardonic", "scathing", "satirical"],
    display: "sardonic",
    why: "**Sardonic** names biting, grimly ironic disdain exposing corporate hypocrisy.",
  },
  {
    extract: "I loathed the freezing dawn shifts at the fish-market; yet nothing since has matched the fierce camaraderie of those steaming tea-urns.",
    clue: "10-letter adjective (starting with 'a') for holding two simultaneous, conflicting feelings at once",
    answer: ["ambivalent"],
    display: "ambivalent",
    why: "**Ambivalent** pinpoints simultaneous hatred of physical hardship and nostalgia for human solidarity.",
  },
  {
    extract: "No child in a wealthy city should shiver in a damp coat so a landlord can save forty pounds on boiler repairs.",
    clue: "9-letter adjective (starting with 'i') for righteous moral anger at unfairness",
    answer: ["indignant"],
    display: "indignant",
    why: "**Indignant** expresses principled moral outrage provoked by injustice.",
  },
  {
    extract: "We stepped into the redwood grove in hushed silence, tilting our heads toward sunlit vaults older than cathedrals.",
    clue: "8-letter adjective (starting with 'r') for deep, solemn awe and respect",
    answer: ["reverent"],
    display: "reverent",
    why: "**Reverent** captures sacred awe before ancient natural grandeur.",
  },
  {
    extract: "My Spanish pronunciation proved so creative that the polite baker handed me a broom instead of two loaves.",
    clue: "hyphenated adjective ('self-___________') for affectionately mocking one's own blunder",
    answer: ["self-deprecating", "self deprecating"],
    display: "self-deprecating",
    why: "**Self-deprecating** irony turns linguistic embarrassment into charming comedy.",
  },
  {
    extract: "Half of me longed to board the steamer home; the other half dreaded trading desert stars for grey office strip-lights.",
    clue: "10-letter adjective (starting with 'a') for torn, divided attitude",
    answer: ["ambivalent"],
    display: "ambivalent",
    why: "**Ambivalent** captures the narrator pulled equally between homesickness and wanderlust.",
  },
];

const TONE_T2: readonly TermCase[] = [
  {
    extract: "Sometimes at dusk I still catch the faint peppermint scent of my grandfather's waistcoat and wish I had asked him one more question.",
    clue: "7-letter adjective (starting with 'w') for gentle, yearning, bittersweet longing for the past",
    answer: ["wistful"],
    display: "wistful",
    why: "**Wistful** conveys quiet, tender yearning tinged with gentle regret.",
  },
  {
    extract: "The developer's 'eco-meadow' turned out to be three plastic planters chained beside an eight-storey car park.",
    clue: "6-letter noun (starting with 'i', or 5-letter 'irony') — give the 5-letter noun starting with 'i' for sharp incongruity between claim and reality",
    answer: ["irony"],
    display: "irony",
    why: "**Irony** exposes the gulf between greenwashed *'eco-meadow'* marketing and concrete reality.",
  },
  {
    extract: "With blistering precision, the inquiry report dismantled every excuse offered by the negligent safety board.",
    clue: "8-letter adjective (starting with 's', ending '-ing') for fiercely severe, devastating criticism",
    answer: ["scathing"],
    display: "scathing",
    why: "**Scathing** describes witheringly severe, unsparing condemnation.",
  },
  {
    extract: "At nineteen I believed owning a leather notebook automatically made me Ernest Hemingway; forty years on, those purple adjectives make me wince.",
    clue: "two-word phrase ('_____________ distance', starting with 'r') for an older narrator judging their naïve younger self",
    answer: ["retrospective distance", "retrospective irony"],
    display: "retrospective distance",
    why: "**Retrospective distance** separates the pretentious nineteen-year-old from the wry, self-aware adult memoirist.",
  },
  {
    extract: "Once I had worshipped the glossy fashion magazine's promises; after six months fetching unpaid coffees in its basement, the glamour looked threadbare.",
    clue: "13-letter adjective (starting with 'd', ending '-ed') for having lost idealistic faith after seeing harsh truth",
    answer: ["disillusioned"],
    display: "disillusioned",
    why: "**Disillusioned** captures stripped-away idealism after witnessing reality behind the façade.",
  },
  {
    extract: "The ancient tortoise blinked once at our frantic camera crew and resumed chewing its dandelion with monumental unconcern.",
    clue: "3-letter adjective (starting with 'w') for dry, quiet, understated amusement",
    answer: ["wry"],
    display: "wry",
    why: "**Wry** captures dry, observant humour contrasting human bustle with animal calm.",
  },
  {
    extract: "Watching pensioners count coins at the chemist counter while pharmaceutical profits hit record highs should shame any civilised society.",
    clue: "9-letter adjective (starting with 'i') for moral anger at social injustice",
    answer: ["indignant"],
    display: "indignant",
    why: "**Indignant** names principled anger aroused by unfairness toward vulnerable people.",
  },
  {
    extract: "The Timber Mill's closure hollowed out the valley, leaving silent cottages fading slowly into bracken.",
    clue: "7-letter adjective (starting with 'e') for mournful reflection on a fading world",
    answer: ["elegiac"],
    display: "elegiac",
    why: "**Elegiac** captures hushed lamentation over industrial and communal decline.",
  },
];

const TONE_T3: readonly TermCase[] = [
  {
    extract: "The restaurant critic dismissed the soggy soufflé with vinegar-sharp wit that left the pretentious menu in shreds.",
    clue: "7-letter adjective (starting with 'a', from Latin for 'sour/sharp') for cutting, acidic tone",
    answer: ["acerbic", "acidic"],
    display: "acerbic",
    why: "**Acerbic** denotes sharp, forthright, astringently critical commentary.",
  },
  {
    extract: "Rather than weeping over the ruined orchard, the farmer simply noted the frost date in his ledger and ordered hardy saplings.",
    clue: "13-letter adjective (starting with 'u', 'un___________') for refusing melodrama or tearful excess",
    answer: ["unsentimental", "unemotional"],
    display: "unsentimental",
    why: "**Unsentimental** describes clear-eyed, stoic restraint that refuses self-pity.",
  },
  {
    extract: "Every paragraph wagged a stern finger at teenage readers, lecturing them on punctuality like a Victorian headmaster.",
    clue: "8-letter adjective (starting with 'd') for preachy, moralising instruction",
    answer: ["didactic"],
    display: "didactic",
    why: "**Didactic** describes writing driven by heavy-handed moral lecturing.",
  },
  {
    extract: "Even as I marvelled at the dam's monumental concrete engineering, my stomach knotted for the drowned villages beneath its reservoir.",
    clue: "10-letter adjective (starting with 'a') for simultaneous awe and ethical grief",
    answer: ["ambivalent"],
    display: "ambivalent",
    why: "**Ambivalent** captures competing admiration and sorrow held in tension.",
  },
  {
    extract: "Looking back across half a century, my youthful certainty that I could reform the village in a fortnight seems touchingly absurd.",
    clue: "two-word concept ('_____________ distance') distinguishing past self from mature narrator",
    answer: ["retrospective distance"],
    display: "retrospective distance",
    why: "**Retrospective distance** measures mature hindsight against youthful naivety.",
  },
  {
    extract: "With icy politeness, the inquiry chair congratulated the minister on achieving 'unprecedented efficiency in losing public records'.",
    clue: "8-letter adjective (starting with 's') for grimly mocking, sceptical irony",
    answer: ["sardonic"],
    display: "sardonic",
    why: "**Sardonic** captures biting mock-praise that exposes incompetence.",
  },
  {
    extract: "She catalogued the collapsed glacier's measurements without a single adjective of self-pity, letting bare numbers carry the grief.",
    clue: "13-letter adjective ('un___________') for stoic emotional restraint free of mawkishness",
    answer: ["unsentimental"],
    display: "unsentimental",
    why: "**Unsentimental** restraint often makes factual non-fiction far more devastating than overt melodrama.",
  },
  {
    extract: "With tart, surgical sharpness, her column punctured the billionaire's claim to have 'struggled from humble yacht-club beginnings'.",
    clue: "7-letter adjective (starting with 'a') for sharp, bitingly tart critique",
    answer: ["acerbic"],
    display: "acerbic",
    why: "**Acerbic** captures tart, incisive wit stripping away false modesty.",
  },
];

// ---------------------------------------------------------------------------
// DRILL 3: Sentence Forms, Syntax & Punctuation Craft
// ---------------------------------------------------------------------------
const SYNTAX_T1: readonly TermCase[] = [
  {
    extract: "The engine coughed, shuddered, died. Silence. Utter, suffocating silence.",
    clue: "two-word grammatical term ('_____ sentence') for verbless fragments like 'Silence.'",
    answer: ["minor sentence", "sentence fragment"],
    display: "minor sentence",
    why: "**Minor sentence**: omitting a finite verb arrests momentum and isolates sudden stillness.",
  },
  {
    extract: "Every promise in the glossy holiday brochure boiled down to one truth: the hotel was still half-built.",
    clue: "single-word name of the punctuation mark (`:`) unveiling the stark reality",
    answer: ["colon"],
    display: "colon",
    trapTerm: ["semicolon"],
    trapFeedback: "Two vertical dots (`:`) unveiling an explanation or twist is a colon, not a semicolon!",
    why: "**Colon**: acts as a syntactic hinge unveiling the anti-climactic reveal.",
  },
  {
    extract: "Tourists photographed the painted boats; fishermen mended torn nets in the cold shade.",
    clue: "single-word name of the punctuation mark (`;`) balancing two contrasting independent clauses",
    answer: ["semicolon", "semi-colon"],
    display: "semicolon",
    trapTerm: ["colon"],
    trapFeedback: "A dot above a comma (`;`) balancing two equal clauses in antithesis is a semicolon!",
    why: "**Semicolon**: balances leisure and labour in poised syntactic antithesis.",
  },
  {
    extract: "My fearless guide — who had screamed twice at a harmless moth — volunteered me to enter the cave first.",
    clue: "two-word term ('_____________ dashes') for the `— ... —` interruption",
    answer: ["parenthetical dashes", "paired dashes", "em dashes", "dashes"],
    display: "parenthetical dashes",
    why: "**Parenthetical dashes**: slice open the clause to insert an ironic aside undercutting *'fearless'*.",
  },
  {
    extract: "We lugged wet ropes and soaked tarpaulins and rusted pegs and leaking jerrycans up the cliff path.",
    clue: "single-word Greek term (starting with 'p') for repeating 'and' to create heavy accumulation",
    answer: ["polysyndeton", "syndetic listing"],
    display: "polysyndeton",
    trapTerm: ["asyndeton"],
    trapFeedback: "Repeating 'and' uses 'poly-' (many); 'asyndeton' has zero conjunctions!",
    why: "**Polysyndeton**: repeated *'and'* elongates the haul so every burden feels relentless.",
  },
  {
    extract: "Sparks leapt, sirens wailed, shutters slammed, footsteps scattered.",
    clue: "single-word Greek term (starting with 'a') for comma-only listing with zero conjunctions",
    answer: ["asyndeton", "asyndetic listing"],
    display: "asyndeton",
    trapTerm: ["polysyndeton"],
    trapFeedback: "There are zero 'ands' here — use the 'a-' (without conjunctions) term!",
    why: "**Asyndeton**: omitting *'and'* accelerates pace to mimic sudden panic.",
  },
  {
    extract: "Three miles of boggy moorland lay behind us. No path. No cairn. No phone signal.",
    clue: "two-word grammatical term ('_____ sentence') for verbless units like 'No path.'",
    answer: ["minor sentence", "minor sentences"],
    display: "minor sentence",
    why: "**Minor sentence**: clipped verbless fragments strip away comfort one piece at a time.",
  },
  {
    extract: "Only one sound broke the midnight ward: the steady drip of saline.",
    clue: "single-word punctuation mark (`:`) focusing attention onto the solitary sound",
    answer: ["colon"],
    display: "colon",
    why: "**Colon**: narrows anticipation onto the post-colon auditory micro-detail.",
  },
];

const SYNTAX_T2: readonly TermCase[] = [
  {
    extract: "With snow blinding the windscreen, fuel dipping below reserve, and the map torn in half, we turned back.",
    clue: "syntactic adjective ('________ sentence', starting with 'p') for delaying the main clause until the very end",
    answer: ["periodic", "periodic sentence"],
    display: "periodic",
    trapTerm: ["cumulative"],
    trapFeedback: "Cumulative sentences place the main clause *first*; delaying it until the end starts with 'p'!",
    why: "**Periodic** syntax stacks escalating hazards before resolving on *'we turned back'*, building suspense.",
  },
  {
    extract: "The market burst awake at dawn, hawkers banging copper trays, scooters weaving through spice sacks, gulls wheeling after fish-heads.",
    clue: "syntactic adjective ('__________ sentence', starting with 'c') stating the main clause first then piling on trailing details",
    answer: ["cumulative", "cumulative sentence"],
    display: "cumulative",
    trapTerm: ["periodic"],
    trapFeedback: "Here the main clause ('The market burst awake at dawn') comes *first*, followed by cascading participles!",
    why: "**Cumulative** syntax states the core event first and cascades sensory participles to immerse the reader.",
  },
  {
    extract: "We waited through dawn, we waited through blistering noon, we waited through freezing dusk.",
    clue: "8-letter rhetorical term (starting with 'a') for repeating 'we waited through' at the start of successive clauses",
    answer: ["anaphora"],
    display: "anaphora",
    why: "**Anaphora**: repeating *'we waited through'* hammers home monotonous endurance across the whole day.",
  },
  {
    extract: "Cold, soaked, breathless, we hauled ourselves onto the stone jetty.",
    clue: "8-letter rhetorical term (starting with 't') for a tight group of three parallel adjectives ('Cold, soaked, breathless')",
    answer: ["tricolon", "triad", "rule of three"],
    display: "tricolon",
    why: "**Tricolon**: a three-part sensory cluster delivers rhythmic completeness and physical immediacy.",
  },
  {
    extract: "Although the hull groaned, although the compass spun wildly, although salt stung every cut, she held the tiller straight.",
    clue: "syntactic adjective ('________ sentence', starting with 'p') withholding 'she held the tiller straight' until the end",
    answer: ["periodic", "periodic sentence"],
    display: "periodic",
    why: "**Periodic** delay forces the reader through three perils before revealing her steadfast control.",
  },
  {
    extract: "Never had the river risen so fast; never had the flood-gates looked so frail; never had the village felt so small.",
    clue: "8-letter rhetorical term (starting with 'a') for repeating 'never had' at the start of each semicolon clause",
    answer: ["anaphora"],
    display: "anaphora",
    why: "**Anaphora**: opening three clauses with *'never had'* escalates dread toward helpless vulnerability.",
  },
  {
    extract: "He collapsed into the camp-chair, mud caking his knees, rainwater dripping from his cuffs, a grin splitting his face.",
    clue: "syntactic adjective ('__________ sentence', starting with 'c') leading with the main clause then adding trailing phrases",
    answer: ["cumulative", "cumulative sentence"],
    display: "cumulative",
    why: "**Cumulative** structure lands physical relief first, then unspools vivid post-climb details.",
  },
  {
    extract: "The silence was clinical, sterile, absolute.",
    clue: "8-letter rhetorical term (starting with 't') for three escalating adjectives at the end of a clause",
    answer: ["tricolon"],
    display: "tricolon",
    why: "**Tricolon**: escalating from *'clinical'* to *'absolute'* seals the sentence with finality.",
  },
];

const SYNTAX_T3: readonly TermCase[] = [
  {
    extract: "The expedition did not conquer the mountain; the mountain conquered our illusions.",
    clue: "8-letter Greek syntactic term (starting with 'c') for AB -> BA mirror-inversion across two clauses",
    answer: ["chiasmus", "antimetabole"],
    display: "chiasmus",
    why: "**Chiasmus**: reversing *expedition/mountain → mountain/expedition* dramatises nature humbling human hubris.",
  },
  {
    extract: "Why do people queue six hours in sleet for a discounted kettle? Because scarcity manufactures desire.",
    clue: "9-letter Greek rhetorical term (starting with 'h') for posing a question and immediately answering it yourself",
    answer: ["hypophora"],
    display: "hypophora",
    trapTerm: ["rhetorical question"],
    trapFeedback: "An unanswered question is rhetorical; asking AND immediately answering it has a 9-letter Greek name starting with 'hyp-'!",
    why: "**Hypophora**: asking and immediately answering the question lets the writer control the analytical frame.",
  },
  {
    extract: "Technology promises boundless connection; it delivers solitary scrolling.",
    clue: "10-letter Greek term (starting with 'a') for placing sharply contrasting ideas in balanced parallel clauses ('promises connection' vs 'delivers scrolling')",
    answer: ["antithesis"],
    display: "antithesis",
    why: "**Antithesis**: parallel grammatical balance sharpens the contradiction between promise and reality.",
  },
  {
    extract: "Fear breeds silence, and silence breeds complicity.",
    clue: "11-letter Greek term ('ana________') where the final word of one clause ('silence') immediately begins the next clause",
    answer: ["anadiplosis"],
    display: "anadiplosis",
    why: "**Anadiplosis**: chaining *'...silence, and silence...'* locks cause and effect into an inescapable domino link.",
  },
  {
    extract: "We shape our habits in youth; in age, our habits shape us.",
    clue: "8-letter Greek term (starting with 'c') for criss-cross AB -> BA reversal",
    answer: ["chiasmus"],
    display: "chiasmus",
    why: "**Chiasmus**: mirror-inverting subject and object enacts time turning habit into destiny.",
  },
  {
    extract: "Was the abandoned island paradise? Hardly: blackflies outnumbered palm trees ten million to one.",
    clue: "9-letter Greek term (starting with 'h') for raising a question and immediately supplying the blunt answer",
    answer: ["hypophora"],
    display: "hypophora",
    why: "**Hypophora**: sets up romantic expectation in the question only to demolish it instantly.",
  },
  {
    extract: "To err in training is bruising; to err on the North Face is fatal.",
    clue: "10-letter Greek term (starting with 'a') for balanced parallel contrast ('training/bruising' vs 'North Face/fatal')",
    answer: ["antithesis"],
    display: "antithesis",
    why: "**Antithesis**: parallel infinitive clauses dramatise the leap in mortal stakes.",
  },
  {
    extract: "Exhaustion blurred into numbness, and numbness blurred into perilous calm.",
    clue: "11-letter Greek term ('ana________') repeating the end-word 'numbness' at the start of the next clause",
    answer: ["anadiplosis"],
    display: "anadiplosis",
    why: "**Anadiplosis**: lexicalrelay from *'numbness'* to *'numbness'* tracks insidious hypothermia step by step.",
  },
];

// ---------------------------------------------------------------------------
// DRILL 4: Macro-Structure, Chronology & Inference Discipline
// ---------------------------------------------------------------------------
const STRUCT_T1: readonly TermCase[] = [
  {
    extract: "Section 1 opens on a crowded sunlit piazza; Section 2 narrows onto a single cracked teacup in an alley doorway.",
    clue: "4-letter cinematic noun (starting with 'z') for narrowing focus from wide panorama to close-up detail",
    answer: ["zoom", "micro-zoom"],
    display: "zoom",
    why: "Structural **zoom**: funnelling from wide crowd to a tiny broken object concentrates tension.",
  },
  {
    extract: "Section 1 begins with a rusted key in cold ash; Section 4 ends beside warm hearth-embers holding that same key.",
    clue: "8-letter structural adjective (starting with 'c', ending '-al') for an ending that echoes the opening motif",
    answer: ["cyclical", "circular"],
    display: "cyclical",
    why: "**Cyclical** framing revisits the opening motif with transformed emotional resonance.",
  },
  {
    extract: "Explaining 'his hands trembled on the helm' by writing 'his fingers shook on the wheel' earns zero inference marks.",
    clue: "12-letter noun (starting with 'p', ending '-ing') for merely repeating surface meaning in synonyms",
    answer: ["paraphrasing", "paraphrase"],
    display: "paraphrasing",
    why: "**Paraphrasing** swaps synonyms without deducing unstated fear or inexperience.",
  },
  {
    extract: "Line 1 plunges straight into crisis: 'When the starboard engine caught fire, nobody reached for a lifejacket.'",
    clue: "three-word Latin phrase ('in ______ ___') for starting straight inside middle action",
    answer: ["in medias res"],
    display: "in medias res",
    why: "**In medias res** drops the reader directly into jeopardy without preliminary exposition.",
  },
  {
    extract: "Placing a noisy wedding procession directly beside a boarded-up almshouse sharpens social contrast.",
    clue: "13-letter structural noun (starting with 'j') for placing two contrasting scenes side-by-side",
    answer: ["juxtaposition"],
    display: "juxtaposition",
    why: "**Juxtaposition** collides wealth and neglect side-by-side without needing heavy commentary.",
  },
  {
    extract: "In Section 3, the sight of a tin whistle interrupts the 2024 hike to recall winter evenings in 1982.",
    clue: "9-letter technical noun (starting with 'a') for a structural flashback",
    answer: ["analepsis", "flashback"],
    display: "analepsis",
    why: "**Analepsis** breaks linear chronology backward to supply emotional backstory.",
  },
  {
    extract: "Rewriting 'she double-locked the latch' as 'she locked the door twice' instead of inferring fear of intrusion.",
    clue: "single noun (starting with 'p', '-ing') for restating literal text instead of deducing subtext",
    answer: ["paraphrasing", "paraphrase"],
    display: "paraphrasing",
    why: "**Paraphrasing** stays trapped on the literal waterline instead of inferring vigilance.",
  },
  {
    extract: "Opening with dawn mist over the quay and closing with dusk mist returning over the empty moorings.",
    clue: "8-letter structural adjective (starting with 'c', ending '-al') for returning to the opening image",
    answer: ["cyclical", "circular"],
    display: "cyclical",
    why: "**Cyclical** symmetry frames the whole day's departure within atmospheric stillness.",
  },
];

const STRUCT_T2: readonly TermCase[] = [
  {
    extract: "I prepared to utter immortal words upon reaching the summit — then sneezed violently and dropped my mittens.",
    clue: "6-letter Greek noun (starting with 'b') for an abrupt drop from grand solemnity to comic anti-climax",
    answer: ["bathos"],
    display: "bathos",
    trapTerm: ["pathos"],
    trapFeedback: "Pathos means pity/sorrow; comic anti-climax starts with 'b'!",
    why: "**Bathos** punctures lofty heroic pretension with sudden physical comedy.",
  },
  {
    extract: "Little did I guess, folding that map in May, that by October the valley bridge would be swept away.",
    clue: "9-letter technical noun (starting with 'p', opposite of analepsis) for leaping ahead to future events",
    answer: ["prolepsis", "foreshadowing", "flash-forward"],
    display: "prolepsis",
    trapTerm: ["analepsis"],
    trapFeedback: "Analepsis looks *back*; leaping *forward* to October uses the prefix 'pro-'!",
    why: "**Prolepsis** flashes forward to charge an innocent spring moment with ominous hindsight.",
  },
  {
    extract: "Sections 1–2 track external blizzard action; Section 3 pivots into private guilt inside the narrator's mind.",
    clue: "11-letter noun (starting with 'i', 'inter______') for inner psychological thought as opposed to external action",
    answer: ["interiority"],
    display: "interiority",
    why: "Shifting from exterior action to **interiority** deepens survival drama into psychological reflection.",
  },
  {
    extract: "Between two twelve-line paragraphs of market noise sits one isolated line: 'Then the siren sounded.'",
    clue: "7-letter mechanical/structural noun ('f______', starting with 'f') for a pivot point balancing two halves",
    answer: ["fulcrum", "pivot"],
    display: "fulcrum",
    why: "A standalone single-sentence paragraph acts as a structural **fulcrum** (or **pivot**) turning the mood.",
  },
  {
    extract: "My speech on fearless maritime mastery ended abruptly when harbour wake tipped me into a bucket of mackerel.",
    clue: "6-letter Greek noun (starting with 'b') for plunging from lofty boast to slapstick anti-climax",
    answer: ["bathos"],
    display: "bathos",
    why: "**Bathos** undercuts self-importance to keep the travel narrator endearing.",
  },
  {
    extract: "Twenty summers would pass before I learned why my uncle burned that telegram unopened.",
    clue: "9-letter technical noun (starting with 'p') for flashing forward across time",
    answer: ["prolepsis"],
    display: "prolepsis",
    why: "**Prolepsis** plants suspenseful foreknowledge via retrospective narration.",
  },
  {
    extract: "Placing luxury penthouse balconies directly above rain-soaked tent encampments without authorial comment.",
    clue: "13-letter structural noun (starting with 'j') for stark side-by-side contrast",
    answer: ["juxtaposition"],
    display: "juxtaposition",
    why: "**Juxtaposition** lets stark spatial contrast indict inequality silently.",
  },
  {
    extract: "Touching the brass compass in Section 3 transports the narrator forty years backward to Plymouth Docks.",
    clue: "9-letter technical noun (starting with 'a') for structural flashback",
    answer: ["analepsis"],
    display: "analepsis",
    why: "**Analepsis** uses a physical object as a portal into formative memory.",
  },
];

const STRUCT_T3: readonly TermCase[] = [
  {
    extract: "Sections 1–3 follow the hunter stalking tracks in snow; Section 4 reveals eyes watching HIS tracks from above.",
    clue: "9-letter structural noun ('inv______', starting with 'i') for flipping observer and observed upside-down",
    answer: ["inversion", "reversal"],
    display: "inversion",
    why: "Closing **inversion** flips predator/prey roles, forcing a reassessment of human mastery.",
  },
  {
    extract: "Across all four sections, a single chipped porcelain compass reappears whenever the narrator faces moral doubt.",
    clue: "5-letter literary noun (starting with 'm') for a recurring object or image carrying symbolic weight across a text",
    answer: ["motif"],
    display: "motif",
    why: "Tracking a recurring **motif** across numbered sections unifies macro-structure and theme.",
  },
  {
    extract: "For two sections the writer hides what caused the metallic scraping under the floorboards until revealing the stray dog.",
    clue: "11-letter structural gerund ('with_______', starting with 'w') for deliberately delaying key information to build tension",
    answer: ["withholding"],
    display: "withholding",
    why: "**Withholding** crucial information aligns the reader directly with the narrator's uncertainty.",
  },
  {
    extract: "At the exact midpoint of the essay, amused curiosity turns sharply into ethical dread.",
    clue: "5-letter poetic/structural noun (starting with 'v', Italian for 'turn') often borrowed for a decisive tonal turn",
    answer: ["volta", "pivot"],
    display: "volta",
    why: "Pinpointing the **volta** (tonal pivot) anchors high-tariff whole-text evaluation.",
  },
  {
    extract: "Throughout Sections 1–4, the recurring sound of a ticking kitchen clock measures the family's unspoken estrangement.",
    clue: "5-letter literary noun (starting with 'm') for a repeated symbolic image or sound threaded through a text",
    answer: ["motif"],
    display: "motif",
    why: "A recurring auditory **motif** binds separate sections into a cohesive emotional arc.",
  },
  {
    extract: "Delaying the identity of the Midnight caller until Section 3 forces readers to share the household's dread.",
    clue: "11-letter structural noun ('with_______') for keeping a key fact hidden across early sections",
    answer: ["withholding"],
    display: "withholding",
    why: "**Withholding** engineers narrative suspense without needing melodrama.",
  },
  {
    extract: "Section 1 portrays the city as conqueror of the marsh; Section 4 shows marsh reeds splitting city tarmac.",
    clue: "9-letter structural noun ('inv______') for reversing the opening power relationship at the close",
    answer: ["inversion"],
    display: "inversion",
    why: "Structural **inversion** combines cyclical return with flipped dominance.",
  },
  {
    extract: "Paragraph 4 marks the decisive turn where nostalgic warmth curdles into disillusioned clarity.",
    clue: "5-letter noun (starting with 'v' or 'p' — give the 5-letter Italian term starting with 'v' for a sharp tonal turn)",
    answer: ["volta"],
    display: "volta",
    why: "Locating the tonal **volta** prevents flat, one-note readings of viewpoint.",
  },
];

const ASK_LEXICAL = [
  (c: string) => `Identify the exact literary or phonetic craft term (${c}).`,
  (c: string) => `Name the writer's language method here (${c}).`,
  (c: string) => `Which precise analytical term applies to this extract (${c})?`,
  (c: string) => `Give the Grade-9 terminology for this lexical/figurative choice (${c}).`,
] as const;

const ASK_TONE = [
  (c: string) => `Give the precise tonal/viewpoint term (${c}).`,
  (c: string) => `Which high-precision viewpoint word best fits (${c})?`,
  (c: string) => `Identify the exact attitude descriptor needed for Paper 1A evaluation (${c}).`,
  (c: string) => `Replace flat 'positive/negative' waffle with the exact term (${c}).`,
] as const;

const ASK_SYNTAX = [
  (c: string) => `Name the syntactic or punctuation craft feature (${c}).`,
  (c: string) => `Identify the sentence-structure or punctuation term (${c}).`,
  (c: string) => `Which prose-craft term describes the grammar/punctuation here (${c})?`,
  (c: string) => `State the exact syntactic/punctuation label for Paper 1A (${c}).`,
] as const;

const ASK_STRUCT = [
  (c: string) => `State the structural or close-reading concept (${c}).`,
  (c: string) => `Identify the narrative-architecture term (${c}).`,
  (c: string) => `Which Paper 1A structural/inference term fits (${c})?`,
  (c: string) => `Name the exact macro-structural or analytical term (${c}).`,
] as const;

export const drills: Drill[] = [
  {
    id: "lang-p1-reading.lexical-device-id",
    topicId: "lang-p1-reading",
    title: "Lexical & Figurative Micro-Zoom ID",
    level: 1,
    guideRef: "lexical-imagery-effects",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? LEXICAL_T1 : tier === 2 ? LEXICAL_T2 : LEXICAL_T3;
      return buildFromBank(rng, bank, ASK_LEXICAL);
    },
  },
  {
    id: "lang-p1-reading.tone-connotation",
    topicId: "lang-p1-reading",
    title: "Precision Tone & Viewpoint Vocabulary",
    level: 2,
    guideRef: "evaluating-writers-viewpoint",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? TONE_T1 : tier === 2 ? TONE_T2 : TONE_T3;
      return buildFromBank(rng, bank, ASK_TONE);
    },
  },
  {
    id: "lang-p1-reading.syntax-punctuation",
    topicId: "lang-p1-reading",
    title: "Sentence Forms & Punctuation Hinges",
    level: 2,
    guideRef: "sentence-punctuation-craft",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? SYNTAX_T1 : tier === 2 ? SYNTAX_T2 : SYNTAX_T3;
      return buildFromBank(rng, bank, ASK_SYNTAX);
    },
  },
  {
    id: "lang-p1-reading.structural-shifts",
    topicId: "lang-p1-reading",
    title: "Structural Shifts & Inference Discipline",
    level: 3,
    guideRef: "structural-shifts-focus",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const bank = tier === 1 ? STRUCT_T1 : tier === 2 ? STRUCT_T2 : STRUCT_T3;
      return buildFromBank(rng, bank, ASK_STRUCT);
    },
  },
];

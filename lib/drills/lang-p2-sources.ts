import type { Drill } from "./types";

interface ToneEntry {
  term: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  clues: string[];
  quotes: { ctx: string; q: string }[];
}

const TONE_BANK: ToneEntry[] = [
  {
    term: "sardonic",
    accept: ["sardonic", "ironic", "satirical"],
    trap: "celebratory",
    trapMsg: "Look past the surface praise words — dry mockery of bad value or absurdity is **sardonic**, not genuinely celebratory.",
    clues: [
      "dryly mocking or grimly cynical",
      "disdainfully humorous through verbal irony",
      "bitingly dry and mock-enthusiastic",
    ],
    quotes: [
      { ctx: "a commuter rail blog", q: "What a privilege to pay four hundred pounds a month to inhale damp umbrellas beside a broken toilet." },
      { ctx: "a restaurant column", q: "Nothing screams culinary genius quite like three micro-herbs arranged on a roofing slate for forty pounds." },
      { ctx: "an airline review", q: "Delightful news: Priority Boarding now entitles you to stand in a slightly narrower concrete stairwell for forty minutes." },
      { ctx: "a smart-home review", q: "Naturally, my Wi-Fi kettle now requires a firmware update before consenting to boil water." },
    ],
  },
  {
    term: "paternalistic",
    accept: ["paternalistic", "condescending", "patronising"],
    trap: "egalitarian",
    trapMsg: "Managing workers or citizens 'for their own moral good' from above is **paternalistic**, the opposite of egalitarian equality.",
    clues: [
      "top-down, benevolent-sounding control treating adults like unruly children",
      "assuming moral superiority while claiming to guide dependents 'for their own good'",
      "authoritative guardianship instructing lower-status groups in proper conduct",
    ],
    quotes: [
      { ctx: "an 1882 mill owner's circular", q: "Our evening sewing classes shall rescue idle factory girls from street frivolity and school them in thrifty obedience." },
      { ctx: "a Victorian park committee report", q: "Supervised brass-band promenades will tame the coarse appetites of dockside labourers on Sunday afternoons." },
      { ctx: "an 1890 parish temperance leaflet", q: "Without firm guidance from their betters, rural youths inevitably squander harvest wages on foolish pleasures." },
      { ctx: "a nineteenth-century charity handbook", q: "Simple broth recipes must be taught gently to tenement mothers who lack prudent household discipline." },
    ],
  },
  {
    term: "elegiac",
    accept: ["elegiac", "wistful", "nostalgic"],
    trap: "clinical",
    trapMsg: "Mournful sensory longing for a vanished craft or community is **elegiac**, not detached clinical reporting.",
    clues: [
      "mournfully reflective and wistfully lamenting a vanished past",
      "sorrowfully nostalgic for a lost way of life",
      "tenderly memorialising something gone forever",
    ],
    quotes: [
      { ctx: "a retired boatbuilder's memoir", q: "Only gulls walk the slipway now; the cedar-smoke and hammered copper songs of fifty winters have faded into salt wind." },
      { ctx: "a village postmistress's farewell", q: "When the brass latch clicks shut tonight, seventy years of sharedchristenings, telegrams, and winter check-ins fall silent." },
      { ctx: "a former coal-valley diary", q: "Where colliery choirs once echoed down terraced lanes at dusk, shuttered chapels stand listening to rain." },
      { ctx: "a Fleet Street printer's essay", q: "I still reach in my sleep for warm lead type, mourning a craft brotherhood erased overnight by silent glass screens." },
    ],
  },
  {
    term: "ambivalent",
    accept: ["ambivalent", "conflicted", "torn"],
    trap: "indifferent",
    trapMsg: "**Indifferent** means not caring at all; being pulled simultaneously between relief and regret is **ambivalent**.",
    clues: [
      "pulled simultaneously in two conflicting emotional directions",
      "genuinely torn between welcoming progress and mourning its hidden cost",
      "holding competing feelings of admiration and unease at once",
    ],
    quotes: [
      { ctx: "an urban regeneration essay", q: "I applaud the gleaming flood barrier protecting our homes, yet grieving the ancient salt-marsh it buried feels inescapable." },
      { ctx: "a surgeon's reflection on AI", q: "Part of me marvels at diagnostic software that never tires; another part dreads a ward where healing becomes pure code." },
      { ctx: "an islander's tourism column", q: "Summer ferries keep our bakery solvent through January, even as holiday lets hollow out the school roll." },
      { ctx: "a parent's boarding-school letter", q: "Pride swells watching her stride confidently through the quad, shadowed instantly by the ache of an empty kitchen chair." },
    ],
  },
  {
    term: "indignant",
    accept: ["indignant", "outraged", "scathing"],
    trap: "apologetic",
    trapMsg: "Fierce moral anger at unfairness or neglect is **indignant**, never apologetic.",
    clues: [
      "fiercely angered by perceived injustice or institutional betrayal",
      "morally outraged on behalf of mistreated people",
      "prosecutorial and righteous in condemning neglect",
    ],
    quotes: [
      { ctx: "a tenants' union open letter", q: "Collecting record rents while children sleep beside black mould is not an administrative backlog — it is shameful dereliction." },
      { ctx: "a coastal clean-up editorial", q: "Rewarding water executives with bonuses after pumping raw sewage onto public beaches insults every bill-payer." },
      { ctx: "a hospital campaigner's speech", q: "Closing the valley's sole maternity unit to shave half a per cent off spreadsheets gambling mothers' safety on icy roads." },
      { ctx: "a disability advocate's column", q: "Leaving wheelchair commuters stranded on unstaffed platforms in 2024 is an inexcusable breach of basic dignity." },
    ],
  },
  {
    term: "clinical",
    accept: ["clinical", "dispassionate", "detached", "objective"],
    trap: "alarmist",
    trapMsg: "Measured, emotion-free empirical reporting without sensational adjectives is **clinical**, not alarmist.",
    clues: [
      "emotionally detached, forensic, and strictly empirical",
      "dispassionate and analytical without personal sentiment",
      "impersonal, measured, and anchored in neutral metrics",
    ],
    quotes: [
      { ctx: "a hydrological audit", q: "Mean reservoir storage across the catchment declined by 14.2% between April and September relative to the thirty-year baseline." },
      { ctx: "a transport acoustics study", q: "Resurfaced asphalt reduced kerbside decibel readings by 3.8 dB across forty-two monitored commuter junctions." },
      { ctx: "an agronomic trial summary", q: "Plot B exhibited a 9% increase in root-nodule nitrogen fixation under reduced-tillage conditions over two seasons." },
    ],
  },
  {
    term: "self-deprecating",
    accept: ["self-deprecating", "self deprecating", "rueful"],
    trap: "arrogant",
    trapMsg: "Turning the joke inward onto the writer's own clumsiness to disarm the reader is **self-deprecating**, not arrogant.",
    clues: [
      "modestly or wryly mocking the writer's own blunders to build rapport",
      "turning humour inward against the author's own incompetence",
      "disarmingly candid about the speaker's own foolishness",
    ],
    quotes: [
      { ctx: "an amateur Cycling memoir", q: "Clad in aerodynamic Lycra worthy of the Tour de France, I was effortlessly overtaken on the hill by a postman eating a pasty." },
      { ctx: "a sourdough baking column", q: "My artisanal loaf emerged from the oven possessing the exact density, colour, and chewability of a Victorian paving brick." },
      { ctx: "a camping travelogue", q: "Ten minutes after boasting of my wilderness instincts, I pitched our tent backwards in a nettle patch." },
    ],
  },
];

interface DeviceEntry {
  term: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  examples: string[];
}

const DEVICE_BANK: DeviceEntry[] = [
  {
    term: "hypophora",
    accept: ["hypophora"],
    trap: "rhetorical question",
    trapMsg: "A rhetorical question hangs unanswered; posing a question and **immediately answering it yourself** is **hypophora**.",
    examples: [
      "Why do high-street banks vanish from market towns? Because algorithm-driven branches treat elderly cash users as unprofitable friction.",
      "Can tree-planting offsets erase aviation emissions overnight? Saplings need forty summers before capturing a single long-haul flight.",
      "Does lengthening the school day automatically raise attainment? Exhausted teenagers retain far less at four o'clock than at ten.",
      "Who pays when fast-fashion warehouses slash garment prices? Seamstresses working sixteen-hour shifts without sick pay.",
      "Is urban rewilding merely scruffy council laziness? Pollinator counts triple the moment mowers spare roadside verges.",
    ],
  },
  {
    term: "litotes",
    accept: ["litotes", "ironic understatement"],
    trap: "hyperbole",
    trapMsg: "Hyperbole exaggerates wildly; negating the opposite (*'not inconsiderable'*, *'scarcely ideal'*) for dry understatement is **litotes**.",
    examples: [
      "Spending eleven hours stranded on a frozen runway with half a packet of pretzels was scarcely a triumph of modern hospitality.",
      "Discovering a two-billion-pound accounting black hole the week before audit was, the board conceded, not entirely ideal.",
      "Rowing solo across the North Atlantic with a cracked oar proved a not inconsiderable test of patience.",
      "Having one's roof removed by a January squall mid-bath is hardly conducive to tranquil evening relaxation.",
      "A forty-year delay in repairing the harbour seawall suggests the council was not overly hasty.",
    ],
  },
  {
    term: "antithesis",
    accept: ["antithesis"],
    trap: "simile",
    trapMsg: "There is no 'like/as' comparison here — setting two opposite ideas in balanced parallel grammar (*'not X, but Y'*) is **antithesis**.",
    examples: [
      "Public libraries are engines of social mobility, not warehouses of dusty nostalgia.",
      "We need policies forged in long-term courage, not headlines spun from overnight panic.",
      "True journalism comforts the afflicted; corporate PR merely flatters the comfortable.",
      "Technology should expand human leisure, not colonise every waking minute.",
      "A city park is a civic lung for the many, never a manicured lawn for the few.",
    ],
  },
  {
    term: "bathos",
    accept: ["bathos", "anticlimax", "anti-climax"],
    trap: "climax",
    trapMsg: "Instead of building upward to grandeur, dropping suddenly from lofty ideals to trivial detail is **bathos** (anticlimax).",
    examples: [
      "The summit vowed to end planetary hunger, unite fractured nations, and validate delegates' VIP car-park tokens.",
      "He risked reputation, fortune, and timeless honour — chiefly to secure a slightly wider leather armchair in the boardroom.",
      "For centuries explorers braved scurvy, pack-ice, and mutiny so tourists could film fifteen-second penguin dances.",
      "The manifesto promised moral renewal, constitutional rebirth, and complimentary biscuits at parish meetings.",
      "Our ancestors endured glacial winters and Sabre-tooth predators so we could argue furiously with self-checkout scales.",
    ],
  },
  {
    term: "anaphora",
    accept: ["anaphora"],
    trap: "oxymoron",
    trapMsg: "Repeating the exact same opening phrase at the start of successive clauses or sentences is **anaphora**.",
    examples: [
      "Every closed youth club silences a mentor. Every cut bus route traps a pensioner. Every sold playing field shrinks childhood.",
      "We were promised cleaner rivers. We were promised capped fares. We were promised transparent audits.",
      "Not one inspector visited the ward. Not one warning letter was answered. Not one executive resigned.",
      "Still the waiting lists lengthen; still the roof buckets overflow; still ministers praise 'efficiency gains'.",
      "By neglect we lose skills; by haste we lose safety; by silence we lose trust.",
    ],
  },
  {
    term: "euphemism",
    accept: ["euphemism"],
    trap: "personification",
    trapMsg: "Softening harsh reality (like job cuts or pollution) behind bland, sanitised corporate phrasing is **euphemism**.",
    examples: [
      "The logistics giant announced it was 'releasing four hundred warehouse colleagues to pursue external career pathways'.",
      "Discharging untreated chemical sludge into the estuary was logged in the report as 'an unscheduled aquatic nutrient event'.",
      "Demolishing sixty affordable cottages was branded in the developer's brochure as 'curating an aspirational streetscape'.",
      "Doubling hospital car-park charges was presented to visitors as 'optimising sustainable tariff alignment'.",
      "Closing three village GP surgeries was described by commissioners as 'consolidating patient-facing touchpoints'.",
    ],
  },
  {
    term: "hyperbole",
    accept: ["hyperbole"],
    trap: "litotes",
    trapMsg: "Litotes understates; deliberate, dramatic overstatement (*'a million years'*, *'apocalyptic crater'*) for emphasis is **hyperbole**.",
    examples: [
      "One pothole on Station Road has now grown deep enough to swallow a double-decker bus and establish its own microclimate.",
      "Waiting on hold with the broadband helpline ages a customer by roughly three geological epochs.",
      "Every single square millimetre of the seaside promenade was buried beneath ten-foot drifts of abandoned seagull chips.",
      "Opening the electricity bill required surgical resuscitation and three weeks of darkened recovery.",
    ],
  },
];

interface GapEntry {
  voice: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  questionStem: string;
  snippets: string[];
  framing: string[];
}

const GAP_BANK: GapEntry[] = [
  {
    voice: "passive",
    accept: ["passive", "passive voice", "agentless passive"],
    trap: "imperative",
    trapMsg: "An imperative commands ('Open!'); hiding who caused an error ('Mistakes were made') is the **passive** voice.",
    questionStem: "Which grammatical voice does this official extract use to obscure direct human responsibility?",
    snippets: [
      "Safety protocols were regrettably overlooked during nocturnal maintenance.",
      "Three thousand confidential records were inadvertently misallocated across external servers.",
      "Target response times were not achieved during the winter quarter.",
      "Contaminated runoff was discharged prior to sensor calibration.",
      "Redundancy notices were issued following strategic portfolio review.",
    ],
    framing: ["Source B (Official Press Statement)", "Source C (Ministry Briefing)", "Source D (Corporate Incident Note)"],
  },
  {
    voice: "imperative",
    accept: ["imperative", "imperative verb", "direct command"],
    trap: "passive",
    trapMsg: "Opening with a direct command verb ('Walk', 'Count', 'Look') to confront the reader is an **imperative**.",
    questionStem: "What sentence/verb mood opens this extract to thrust the reader directly into the scene?",
    snippets: [
      "Stand at the casualty doors at midnight and count the ambulances queuing in drizzle.",
      "Open your wardrobe tonight and check how many synthetic labels never saw daylight.",
      "Walk half a mile beyond the resort gates and look at the dry riverbeds feeding the hotel pools.",
      "Listen to the silence along the hedgerow where skylarks nested twenty summers ago.",
      "Ask any newly qualified teacher why Sunday evenings now begin with dread.",
    ],
    framing: ["Source A (Campaign Op-Ed)", "Source D (Open Appeal)", "Source E (Investigative Column)"],
  },
  {
    voice: "logos",
    accept: ["logos", "statistical logos", "empirical logos"],
    trap: "pathos",
    trapMsg: "Pathos appeals to emotion; structured empirical ratios, percentages, and causal proof appeal to **logos**.",
    questionStem: "Which Aristotelian persuasive appeal (ethos, logos, or pathos) dominates this extract?",
    snippets: [
      "Insulating loft cavities cuts household gas demand by 24%, recouping installation outlay within 3.6 winters.",
      "Across fourteen trialled boroughs, 20 mph school zones reduced pedestrian casualties by 41% inside twenty-four months.",
      "Per kilowatt-hour generated, offshore wind turbines require 98% less lifecycle water than coal-fired plant.",
      "Replacing diesel refuse lorries lowered particulate readings along depot routes from 38 to 19 micrograms per cubic metre.",
      "Longitudinal cohort tracking of 12,000 apprentices showed an 84% five-year retention rate.",
    ],
    framing: ["Source B (Policy Audit)", "Source E (Statistical Factfile)", "Source C (Select Committee Report)"],
  },
  {
    voice: "pathos",
    accept: ["pathos", "emotional appeal"],
    trap: "logos",
    trapMsg: "There are zero statistics here — poignant human vulnerability and sensory detail appeal to **pathos**.",
    questionStem: "Which Aristotelian persuasive appeal (ethos, logos, or pathos) dominates this extract?",
    snippets: [
      "At eighty-four, Arthur keeps his winter coat buttoned indoors, boiling one cup of water at a time beside a silent radiator.",
      "Clutching a damp cardboard box of family photographs, six-year-old Maya watched floodwater lap over her bedroom threshold.",
      "For three months after the ferry route was axed, nobody knocked on Margaret's cottage door except the wind.",
      "Behind the shuttered bakery window, four generations of hand-carved bread boards lay stacked for the auctioneer.",
      "Every breaktime, Leo sits on the concrete steps watching teammates board the minibus his parents cannot afford.",
    ],
    framing: ["Source A (Charity Case Study)", "Source D (Human-Interest Feature)", "Source C (Witness Memoir)"],
  },
  {
    voice: "ethos",
    accept: ["ethos", "credibility", "insider ethos"],
    trap: "bathos",
    trapMsg: "Establishing twenty-five years of frontline professional authority builds **ethos** (credibility), not comic bathos.",
    questionStem: "Which Aristotelian persuasive appeal (ethos, logos, or pathos) is established first in this opening?",
    snippets: [
      "In twenty-eight winters commanding North Sea lifeboats, I have never witnessed swell patterns shift so unpredictably.",
      "Having audited seventy-four municipal pension funds across three decades, I recognise creative accounting on sight.",
      "As a paediatrician who has treated asthma wards beside the North Circular since 2004, I see exhaust statistics breathe.",
      "Forty years restoring medieval cathedral timber teaches a carpenter humility before oak and gravity.",
      "Having marked twelve thousand examination scripts, I can spot memorised filler within six words.",
    ],
    framing: ["Source A (Specialist Memoir)", "Source B (Expert Witness Letter)", "Source D (Practitioner Column)"],
  },
];

interface HingeEntry {
  relation: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  promptAsk: string;
  pairs: string[];
}

const HINGE_BANK: HingeEntry[] = [
  {
    relation: "concession",
    accept: ["concession", "concession and rebuttal", "counterargument"],
    trap: "hyperbole",
    trapMsg: "Admitting a valid point on the other side (*'Granted…'*, *'Admittedly…'*) before pivoting at *'yet'* is **concession**.",
    promptAsk: "What rhetorical/argumentative move does the opening word perform before the pivot at 'yet'?",
    pairs: [
      "Granted, high-speed rail shaves twenty minutes off inter-city commutes; yet gutting local branch lines strands whole market towns.",
      "Admittedly, automated checkouts cut supermarket queues at lunchtime; yet for many elderly shoppers that brief chat was their sole human contact all day.",
      "Undeniably, solar farms alter familiar hillside views; yet coal smoke altered entire lungs for a century.",
      "Of course, exam league tables create measurable accountability; yet narrowing education to testable drills starves curiosity.",
      "True, drone deliveries reduce van traffic; yet turning suburban skies into buzzing corridors trades road noise for aerial clutter.",
    ],
  },
  {
    relation: "divergent",
    accept: ["divergent", "contrasting", "antithetical", "contrast"],
    trap: "convergent",
    trapMsg: "'Whereas', 'Conversely', and 'Diametrically opposed' signal **divergent** (contrasting) viewpoints, not convergent agreement.",
    promptAsk: "Do these paired extracts & hinge demonstrate **convergent** or **divergent** perspectives? (Type one word: convergent or divergent)",
    pairs: [
      "Source A praises pedestrianised plazas as vibrant community living rooms, **whereas** Source D condemns them as delivery-choking ghost zones.",
      "Source B celebrates deep-sea robotics as humanity's cleanest frontier; **conversely**, Source E warns of irreversible abyssal scarring.",
      "Source C welcomes cashless cafés as frictionless hygiene; **diametrically opposed**, Source A attacks them for excluding unbanked citizens.",
      "Source D frames four-day working weeks as productivity breakthroughs, **whilst** Source B predicts crippling staffing shortfalls in small clinics.",
      "Source A romanticises solo Arctic trekking as spiritual renewal; **by contrast**, Source C castigates unprepared expedition tourism.",
    ],
  },
  {
    relation: "convergent",
    accept: ["convergent", "corroborating", "complementary"],
    trap: "divergent",
    trapMsg: "Both writers diagnose the same problem and support the same reform (one via data, one via lived story) — that is **convergent**.",
    promptAsk: "Do these paired extracts & hinge demonstrate **convergent** or **divergent** core stances? (Type one word: convergent or divergent)",
    pairs: [
      "Source A's headteacher mourns sleepy pupils arriving after midnight gaming; **corroborating this urgency via clinical sleep data**, Source C links late screens to 30% lower memory recall.",
      "Source B's angler laments lifeless chalk streams; **echoing this indictment from a biochemical angle**, Source E documents rising agricultural phosphate levels.",
      "Source D's commuter condemns cancelled rural buses; **reinforcing this critique**, Source B quantifies a 44% isolation spike among non-driving pensioners.",
      "Source A's baker warns of soaring grain costs; **aligning with this concern**, Source E traces global fertiliser bottlenecks across harvest supply chains.",
      "Source C's nurse highlights ward burnout; **substantiating her testimony**, Source D records a 29% surge in unfilled rota shifts.",
    ],
  },
  {
    relation: "cyclical",
    accept: ["cyclical", "circular", "cyclical framing"],
    trap: "chronological",
    trapMsg: "Returning in the final line to the exact image or setting from the opening line (with transformed meaning) is **cyclical** structure.",
    promptAsk: "What single structural term describes a source whose ending deliberately echoes and transforms its opening image?",
    pairs: [
      "Source A opens with a nervous apprentice unlocking a rusty bakery shutter in 1984 and closes with her handing that same brass key to her daughter in 2024.",
      "Source B begins beside a dry concrete canal basin and ends five years after restoration watching kingfishers dive into that exact basin.",
      "Source D opens with a silent, dust-sheeted village piano and closes with sixty schoolchildren singing around the same tuned instrument.",
      "Source E starts at a rain-lashed bus shelter at 5 a.m. and finishes at midnight at the exact shelter — the timetable now covered by a closure notice.",
    ],
  },
];

export const drills: Drill[] = [
  {
    id: "lang-p2-sources.tone-perspective",
    topicId: "lang-p2-sources",
    title: "Tone & Perspective Precision Classifier",
    level: 1,
    guideRef: "comparing-writers-perspectives",
    generate(rng, tier) {
      const item = rng.pick(TONE_BANK);
      const qObj = rng.pick(item.quotes);
      const clue = rng.pick(item.clues);
      const srcTag = rng.pick(["Source A", "Source B", "Source C"]);
      const cleanQuote = qObj.q.replace("sharedchristenings", "shared christenings").replace("gambling mothers'", "gambles mothers'").replace("Cycling", "cycling");
      const wordBank =
        tier === 1
          ? "\n\n*Choose from:* `sardonic` · `paternalistic` · `elegiac` · `ambivalent` · `indignant` · `clinical` · `self-deprecating`"
          : tier === 2
            ? `\n\n*Clue:* The voice sounds ${clue}.`
            : "\n\n*(Give the exact Grade-9 attitude adjective — avoid vague words like 'negative' or 'sad'.)*";
      return {
        prompt: `Read **${srcTag}** (${qObj.ctx}):\n\n> *"${cleanQuote}"*\n\nWhich single Grade-9 adjective most precisely names the writer's **tone / perspective**?${wordBank}`,
        answer: {
          type: "text",
          accept: [...item.accept],
          display: item.term,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.trap], display: item.trap },
            feedback: item.trapMsg,
          },
          {
            spec: { type: "text", accept: ["negative", "positive", "biased"], display: "negative" },
            feedback: "Examiners cap vague umbrella words like 'positive', 'negative', or 'biased' — name the exact tonal shade!",
          },
        ],
        hint: `Look for a voice that is ${clue}.`,
        solution: [
          `Check the contextual header (**${qObj.ctx}**) alongside the diction in the quotation.`,
          `The voice is ${clue}.`,
          `Grade-9 tone label: **${item.term}**.`,
        ],
      };
    },
  },
  {
    id: "lang-p2-sources.rhetorical-methods",
    topicId: "lang-p2-sources",
    title: "Non-Fiction Rhetorical Method Spotter",
    level: 2,
    guideRef: "comparing-rhetorical-methods",
    generate(rng, tier) {
      const item = rng.pick(DEVICE_BANK);
      const rawEx = rng.pick(item.examples).replace("Sabre-tooth", "sabre-tooth");
      const sourceTag = rng.pick(["Source A", "Source B", "Source C", "Source D", "Source E"]);
      const bankHint =
        tier === 1
          ? "\n\n*Options:* `hypophora` · `litotes` · `antithesis` · `bathos` · `anaphora` · `euphemism` · `hyperbole`"
          : tier === 2
            ? "\n\n*(Name the exact rhetorical or figurative method — e.g. hypophora, litotes, antithesis, bathos, anaphora, euphemism, hyperbole.)*"
            : "\n\n*(State the exact technical term for the primary rhetorical mechanism at work.)*";
      return {
        prompt: `In **${sourceTag}**, a writer argues:\n\n> *"${rawEx}"*\n\nIdentify the primary **rhetorical method** used in this extract.${bankHint}`,
        answer: {
          type: "text",
          accept: [...item.accept],
          display: item.term,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.trap], display: item.trap },
            feedback: item.trapMsg,
          },
        ],
        hint: `Contrast how the clauses, scale, or wording operate — beware confusing ${item.term} with ${item.trap}.`,
        solution: [
          `Examine the structural and lexical pattern inside ${sourceTag}'s sentence.`,
          item.trapMsg,
          `Exact method: **${item.term}**.`,
        ],
      };
    },
  },
  {
    id: "lang-p2-sources.gap-triage",
    topicId: "lang-p2-sources",
    title: "GAP-R Appeal & Voice Decoder",
    level: 1,
    guideRef: "decoding-multi-source-pack",
    generate(rng, tier) {
      const item = rng.pick(GAP_BANK);
      const snippet = rng.pick(item.snippets);
      const frame = rng.pick(item.framing);
      const extra =
        tier === 1
          ? "\n\n*Bank:* `passive` · `imperative` · `ethos` · `logos` · `pathos`"
          : tier === 2
            ? "\n\n*(Answer with a single precise term such as passive, imperative, ethos, logos, or pathos.)*"
            : "\n\n*(Give the exact one-word analytical classification demanded by the question.)*";
      return {
        prompt: `Triage **${frame}**:\n\n> *"${snippet}"*\n\n${item.questionStem}${extra}`,
        answer: {
          type: "text",
          accept: [...item.accept],
          display: item.voice,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.trap], display: item.trap },
            feedback: item.trapMsg,
          },
        ],
        hint: `Check the sender header (${frame}) and whether the text commands, hides agency, proves with metrics, claims expertise, or stirs emotion.`,
        solution: [
          `Read the contextual label **${frame}** alongside the grammar and evidence in the quote.`,
          item.trapMsg,
          `Correct classification: **${item.voice}**.`,
        ],
      };
    },
  },
  {
    id: "lang-p2-sources.comparative-hinges",
    topicId: "lang-p2-sources",
    title: "Synthesis & WEAVE Hinge Architect",
    level: 3,
    guideRef: "high-tariff-comparative-paragraphs",
    generate(rng, tier) {
      const item = rng.pick(HINGE_BANK);
      const pair = rng.pick(item.pairs);
      const dossier = rng.pick(["Dossier I", "Dossier II", "Dossier III"]);
      const suffix =
        tier === 1
          ? "\n\n*Bank:* `concession` · `divergent` · `convergent` · `cyclical`"
          : tier === 2
            ? "\n\n*(Use a single analytical term: concession, divergent, convergent, or cyclical.)*"
            : "";
      return {
        prompt: `Examine this Paper 2A note from **${dossier}**:\n\n> ${pair}\n\n${item.promptAsk}${suffix}`,
        answer: {
          type: "text",
          accept: [...item.accept],
          display: item.relation,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.trap], display: item.trap },
            feedback: item.trapMsg,
          },
        ],
        hint: "Focus on the bolded hinge words or how opening and closing images relate.",
        solution: [
          "Trace the logical hinge or structural echo across the extract description.",
          item.trapMsg,
          `Analytical term: **${item.relation}**.`,
        ],
      };
    },
  },
];

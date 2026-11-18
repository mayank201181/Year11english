import type { Drill, Rng } from "./types";

interface GenreCase {
  context: string;
  salutationOrCue: string;
  question: string;
  answer: string;
  accept: string[];
  wrongTrap: string;
  trapFeedback: string;
  why: string;
}

const GENRE_CASES: readonly GenreCase[] = [
  {
    context: "a formal letter to the Chair of Transport whose name you do NOT know",
    salutationOrCue: "Dear Sir or Madam,",
    question: "Write the exact two-word complimentary close required at the end of this letter.",
    answer: "Yours faithfully",
    accept: ["Yours faithfully", "yours faithfully"],
    wrongTrap: "Yours sincerely",
    trapFeedback: "Never put two S's together! 'Dear Sir or Madam' (unnamed) always pairs with 'Yours faithfully', not 'Yours sincerely'.",
    why: "Unnamed salutations ('Dear Sir or Madam') require 'Yours faithfully'.",
  },
  {
    context: "a formal letter to your named headteacher proposing a study-space redesign",
    salutationOrCue: "Dear Mrs Lim,",
    question: "Write the exact two-word complimentary close required at the end of this letter.",
    answer: "Yours sincerely",
    accept: ["Yours sincerely", "yours sincerely"],
    wrongTrap: "Yours faithfully",
    trapFeedback: "Because 'Dear Mrs Lim' names the recipient, you must close with 'Yours sincerely' (save 'Yours faithfully' for 'Dear Sir or Madam').",
    why: "Named salutations ('Dear Mrs Lim') require 'Yours sincerely'.",
  },
  {
    context: "a formal letter to a named local councillor opposing park closures",
    salutationOrCue: "Dear Councillor Menon,",
    question: "Write the exact two-word complimentary close required at the end of this letter.",
    answer: "Yours sincerely",
    accept: ["Yours sincerely", "yours sincerely"],
    wrongTrap: "Yours faithfully",
    trapFeedback: "'Councillor Menon' is a named individual, so close with 'Yours sincerely'.",
    why: "Addressing a named office-holder ('Dear Councillor Menon') takes 'Yours sincerely'.",
  },
  {
    context: "a formal complaint letter to a utility board with an unnamed recipient",
    salutationOrCue: "Dear Sirs,",
    question: "Write the exact two-word complimentary close required at the end of this letter.",
    answer: "Yours faithfully",
    accept: ["Yours faithfully", "yours faithfully"],
    wrongTrap: "Yours sincerely",
    trapFeedback: "'Dear Sirs' does not name a specific person — apply the no-two-S's rule and write 'Yours faithfully'.",
    why: "Unnamed salutations ('Dear Sirs' / 'Dear Sir or Madam') take 'Yours faithfully'.",
  },
  {
    context: "a broadsheet opinion article beneath the main headline 'The High Cost of Cheap Speed'",
    salutationOrCue: "Beneath the headline sits a crisp one-sentence summary: 'Slashing regional bus routes saves pennies today while marooning entire towns tomorrow.'",
    question: "What single journalism term names this one-sentence sub-headline placed directly under the main headline?",
    answer: "strapline",
    accept: ["strapline", "standfirst", "subheadline", "sub-headline"],
    wrongTrap: "byline",
    trapFeedback: "A 'byline' gives the writer's name; the one-sentence summary beneath the headline is a 'strapline' (or 'standfirst').",
    why: "Broadsheet articles pair a punchy headline with a one-sentence strapline (standfirst) framing the argument.",
  },
  {
    context: "a broadsheet feature divided into three major analytical sections",
    salutationOrCue: "Short bolded section titles such as 'The False Economy of Short Cuts' placed above key shifts",
    question: "What single journalism/structural term names these short section headers inside an article?",
    answer: "subheading",
    accept: ["subheading", "subheadings", "sub-heading", "sub-headings", "crosshead"],
    wrongTrap: "caption",
    trapFeedback: "A 'caption' sits beneath a photograph; short section headers dividing an article are 'subheadings'.",
    why: "Subheadings signpost major structural shifts in a broadsheet feature without needing drawn columns.",
  },
  {
    context: "a formal letter to a named hospital director defending volunteer ward libraries",
    salutationOrCue: "Dear Dr Kulkarni,",
    question: "Write the exact two-word complimentary close required at the end of this letter.",
    answer: "Yours sincerely",
    accept: ["Yours sincerely", "yours sincerely"],
    wrongTrap: "Yours faithfully",
    trapFeedback: "'Dear Dr Kulkarni' names a specific recipient, so close with 'Yours sincerely'.",
    why: "Named salutations ('Dear Dr Kulkarni') always close with 'Yours sincerely'.",
  },
  {
    context: "a Paper 2B candidate copying a 14-word sentence word-for-word from Source B into a speech",
    salutationOrCue: "Word-for-word copying of Section A source phrasing instead of re-forging facts in your own voice",
    question: "What single exam term (or two-word phrase) names this penalised habit of copying source wording directly?",
    answer: "lifting",
    accept: ["lifting", "verbatim lifting", "source lifting"],
    wrongTrap: "synthesis",
    trapFeedback: "Synthesis fuses ideas in original prose; copying source phrases directly is 'lifting' (verbatim lifting).",
    why: "OxfordAQA Section B penalises verbatim lifting — facts from Section A must be re-forged in your own register.",
  },
];

const TOPICS_POOL = [
  "abolishing Saturday library hours",
  "banning cars outside school gates",
  "replacing paper exams with tablets",
  "introducing compulsory community service",
  "capping concert ticket resale prices",
  "protecting urban allotment gardens",
  "extending night-bus routes for shift workers",
  "funding free youth music conservatoires",
  "curbing fast-fashion billboard advertising",
  "preserving historic waterfront markets",
] as const;

interface TriadScenario {
  appeal: "ethos" | "logos" | "pathos";
  trap: "ethos" | "logos" | "pathos";
  trapWhy: string;
  templates: readonly ((topic: string, n: number) => string)[];
  explain: string;
}

const TRIAD_SCENARIOS: readonly TriadScenario[] = [
  {
    appeal: "ethos",
    trap: "logos",
    trapWhy: "Although experience sounds factual, foregrounding one's professional credentials and fair-minded integrity primarily builds ethical credibility (ethos).",
    templates: [
      (t, n) => `"Having chaired ${n} municipal consultations on ${t} alongside both residents and treasurers, I recognise the pressures on each side."`,
      (t, n) => `"As a paediatric nurse who has worked ${n} winter shifts on respiratory wards, I do not raise concerns over ${t} lightly."`,
      (t, n) => `"After ${n} years auditing school budgets across three boroughs, I share the governors' commitment to prudence regarding ${t}."`,
      (t, n) => `"Speaking as a former apprentice who trained for ${n} months before qualifying, I owe my career to the very standards debated in ${t}."`,
    ],
    explain: "Establishing lived professional authority, balanced fairness, and moral trustworthiness appeals to **ethos**.",
  },
  {
    appeal: "logos",
    trap: "ethos",
    trapWhy: "Rather than relying on personal status (ethos), this sentence constructs a measurable cause-and-effect financial or empirical proof (logos).",
    templates: [
      (t, n) => `"Independent transport modelling shows that ${t} reduces peak-hour gridlock by ${n}% while returning three pounds in productivity for every pound invested."`,
      (t, n) => `"If preventative funding around ${t} shrinks by £${n},000 today, downstream emergency-repair expenditure triples within four fiscal quarters."`,
      (t, n) => `"Across ${n} comparable pilot municipalities, implementing ${t} cut absentee rates by nearly a quarter without raising local council tax."`,
      (t, n) => `"Because fixed maintenance overheads remain unchanged, cutting service hours on ${t} saves barely ${n}% of operating costs while halving public access."`,
    ],
    explain: "Structured cause-and-effect reasoning supported by proportional metrics appeals to **logos**.",
  },
  {
    appeal: "pathos",
    trap: "ethos",
    trapWhy: "Rather than citing credentials (ethos) or ratios (logos), this concrete human micro-scene evokes empathy and moral urgency (pathos).",
    templates: [
      (t, n) => `"Picture an eleven-year-old Doing homework under a stairwell bulb at ${n} p.m. because ${t} padlocked the only quiet desk on her street."`,
      (t, n) => `"For an elderly widower living ${n} floors up, ${t} is not a line item on a spreadsheet; it is the silence of three unbroken days without a human voice."`,
      (t, n) => `"Watch ${n} soaked night-shift cleaners waiting beneath a dark shelter in November rain, and ask yourself whom ${t} truly leaves behind."`,
      (t, n) => `"When ${n} pairs of scuffed choir shoes sit boxed in a locked storeroom after ${t}, a school loses the heartbeat that made Monday mornings bearable."`,
    ],
    explain: "Crystallising human vulnerability and emotional stakes through a concrete lived scene appeals to **pathos**.",
  },
];

interface DeviceEntry {
  device: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  cue: string;
  lines: readonly ((topic: string) => string)[];
}

const DEVICE_ENTRIES: readonly DeviceEntry[] = [
  {
    device: "hypophora",
    accept: ["hypophora", "anthypophora"],
    trap: "rhetorical question",
    trapMsg: "A pure rhetorical question is left unanswered; when the speaker immediately supplies their own decisive answer, the precise Grade-9 term is 'hypophora'.",
    cue: "Posing a pointed question and immediately answering it yourself",
    lines: [
      (t) => `"What does ${t} genuinely save our borough? Barely a rounding error on paper — at the cost of civic trust."`,
      (t) => `"Can digital screens alone replace real mentorship when debating ${t}? Not for a single afternoon."`,
      (t) => `"Who bears the hidden price of ${t}? Rarely the consultants who drafted it, and always the families with least margin."`,
      (t) => `"Is resistance to ${t} merely nostalgia? Hardly: it rests on twenty years of hard operational evidence."`,
    ],
  },
  {
    device: "antithesis",
    accept: ["antithesis"],
    trap: "oxymoron",
    trapMsg: "An oxymoron fuses two contradictory words side by side ('deafening silence'); balancing two contrasting clauses in parallel grammar is 'antithesis'.",
    cue: "Balancing two opposing ideas in parallel grammatical clauses",
    lines: [
      (t) => `"Our stance on ${t} must be guided not by short-term convenience for the few, but by lasting stewardship for the many."`,
      (t) => `"Cynics view ${t} as an avoidable expense; educators recognise it as an irreplaceable investment."`,
      (t) => `"On ${t}, spreadsheets count the immediate price of action, whereas communities endure the permanent cost of neglect."`,
      (t) => `"True leadership over ${t} demands not louder slogans in public, but quieter rigour in practice."`,
    ],
  },
  {
    device: "anaphora",
    accept: ["anaphora"],
    trap: "epistrophe",
    trapMsg: "Epistrophe repeats words at the END of successive clauses; repeating the exact opening words at the START of successive clauses is 'anaphora'.",
    cue: "Repeating the exact same opening phrase across successive clauses or sentences",
    lines: [
      (t) => `"We owe them honesty on ${t}. We owe them transparency in the budget. We owe them the courage to reverse course."`,
      (t) => `"Every delay on ${t} narrows opportunity; every excuse erodes trust; every cut deepens the divide."`,
      (t) => `"Without bold action on ${t}, without ring-fenced funding, without genuine accountability, promises ring hollow."`,
      (t) => `"Look at the classrooms affected by ${t}; look at the commuters stranded; look at the neighbourhoods silenced."`,
    ],
  },
  {
    device: "chiasmus",
    accept: ["chiasmus", "antimetabole"],
    trap: "anaphora",
    trapMsg: "Anaphora repeats clause openings in the same order; inverting the A–B word pair into B–A mirror symmetry across two halves is 'chiasmus'.",
    cue: "Inverting key words from Clause 1 in reverse AB → BA mirror order in Clause 2",
    lines: [
      (t) => `"In debating ${t}, failing to fund our future is simply funding our future failure."`,
      (t) => `"Budgets should exist to serve communities in ${t} — never communities to serve budgets."`,
      (t) => `"First we shape our civic habits around ${t}; thereafter, those civic habits shape us."`,
      (t) => `"Do not measure the value of ${t} by what fits the timetable; measure the timetable by what values ${t}."`,
    ],
  },
  {
    device: "litotes",
    accept: ["litotes", "understatement", "ironic understatement"],
    trap: "hyperbole",
    trapMsg: "Hyperbole exaggerates dramatically; ironically negating the opposite ('scarcely a triumph', 'not inconsiderable') is 'litotes' (understatement).",
    cue: "Deliberate ironic understatement formed by negating the contrary",
    lines: [
      (t) => `"Leaving three hundred pupils without library desks after ${t} can scarcely be hailed as a triumph of forward planning."`,
      (t) => `"The forty-eight-hour consultation on ${t} left residents not entirely persuaded of the council's candour."`,
      (t) => `"Replacing experienced mentors with an automated FAQ page during ${t} is no small gamble with standards."`,
      (t) => `"A seven-mile detour caused by ${t} represents a not inconsiderable burden for shift workers without cars."`,
    ],
  },
  {
    device: "tricolon",
    accept: ["tricolon", "rule of three", "triadic structure"],
    trap: "polysyndeton",
    trapMsg: "Polysyndeton chains extra conjunctions ('and... and... and...'); three parallel, escalating clauses building to a rhythmic climax form a 'tricolon'.",
    cue: "Three parallel, escalating phrases or clauses building to a rhythmic climax",
    lines: [
      (t) => `"Left unchecked, ${t} stifles individual curiosity, hollows out local institutions, and fractures civic solidarity."`,
      (t) => `"Reforming ${t} demands clear metrics, sustained political nerve, and an unwavering respect for residents."`,
      (t) => `"This proposal on ${t} is hasty in its drafting, inequitable in its impact, and irreversible in its damage."`,
      (t) => `"By championing ${t}, we unlock dormant talent, revitalise high streets, and honour our duty to the next generation."`,
    ],
  },
];

interface PunctMove {
  answer: string;
  accept: string[];
  trap: string;
  trapFeedback: string;
  prompt: (topic: string, n: number) => string;
  explain: string;
}

const PUNCT_MOVES: readonly PunctMove[] = [
  {
    answer: "comma splice",
    accept: ["comma splice", "comma-splice", "comma splicing"],
    trap: "run-on sentence",
    trapFeedback: "More specifically than a fused run-on, joining two standalone clauses with a comma alone is a 'comma splice'.",
    prompt: (t, n) =>
      `Identify the exact two-word punctuation error in this draft sentence (${n} words):\n\n*"Consultations on ${t} closed last Friday, residents were never shown the costings."*`,
    explain: "Two complete independent clauses joined by a comma alone with no conjunction commit a **comma splice**.",
  },
  {
    answer: "colon",
    accept: ["colon", ":"],
    trap: "semicolon",
    trapFeedback: "A semicolon balances two parallel clauses; to spotlight a blunt short verdict or explanation that unpacks the preceding clause, use a 'colon'.",
    prompt: (t, n) =>
      `Which single punctuation mark best replaces **[?]** after this complete clause to spotlight the three-word verdict?\n\n*"After ${n} months of trials on ${t}, the audit reached one inescapable verdict **[?]** austerity cost double."*`,
    explain: "A **colon** follows a complete main clause to spotlight a Dramatic reveal, verdict, or explanation.",
  },
  {
    answer: "semicolon",
    accept: ["semicolon", "semi-colon", ";"],
    trap: "comma",
    trapFeedback: "A comma alone here creates a comma splice! Balancing two parallel antithetical clauses without 'but' calls for a 'semicolon'.",
    prompt: (t, n) =>
      `Which single punctuation mark best replaces **[?]** to balance these two parallel independent clauses without a conjunction?\n\n*"Short-sightedness on ${t} saves £${n},000 this spring **[?]** long-term vision protects civic health for decades."*`,
    explain: "A **semicolon** acts as a poised fulcrum between two closely balanced, independent antithetical clauses.",
  },
  {
    answer: "concession",
    accept: ["concession", "concessive clause", "prolepsis"],
    trap: "hyperbole",
    trapFeedback: "Granting the valid kernel of an opponent's concern ('Admittedly...', 'Granted...') before pivoting to your rebuttal is a 'concession'.",
    prompt: (t, n) =>
      `What single rhetorical/structural term names the opening move in bold before the *'Yet'* pivot?\n\n*"**Admittedly, treasurers overseeing ${t} face a £${n},000 shortfall this year.** Yet raiding preventative youth services multiplies that bill tomorrow."*`,
    explain: "Briefly granting merit to the strongest opposing point to build ethos before overturning it is a **concession**.",
  },
];

export const drills: Drill[] = [
  {
    id: "lang-p2-directed.genre-conventions",
    topicId: "lang-p2-directed",
    title: "Form, Salutation & Genre Conventions",
    level: 1,
    guideRef: "adapting-form-audience-purpose",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool = tier === 1 ? GENRE_CASES.slice(0, 5) : GENRE_CASES;
      const c = rng.pick(pool);
      const topic = rng.pick(TOPICS_POOL);
      const audienceNote =
        tier === 3
          ? ` on the issue of **${topic}** (worth 40 marks in Paper 2 Section B)`
          : ` regarding **${topic}**`;
      return {
        prompt: `You are writing **${c.context}**${audienceNote}.\n\n- Cue: *${c.salutationOrCue}*\n\n${c.question}`,
        answer: { type: "text", accept: c.accept, display: c.answer },
        solution: [
          `Check the genre and recipient status: ${c.context}.`,
          c.why,
          `Correct convention: **${c.answer}**.`,
        ],
        hint: "For letters, remember the 'never two S's' rule (Sir/Madam → faithfully; Named → sincerely); for articles, distinguish headline, strapline, and subheading.",
        traps: [
          {
            spec: { type: "text", accept: [c.wrongTrap] },
            feedback: c.trapFeedback,
          },
        ],
      };
    },
  },
  {
    id: "lang-p2-directed.aristotelian-triad",
    topicId: "lang-p2-directed",
    title: "Classify Ethos, Logos & Pathos",
    level: 1,
    guideRef: "rhetorical-precision-ethos-logos-pathos",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const s = rng.pick(TRIAD_SCENARIOS);
      const topic = rng.pick(TOPICS_POOL);
      const num = tier === 1 ? rng.int(4, 12) : tier === 2 ? rng.int(14, 28) : rng.int(30, 65);
      const tpl = rng.pick(s.templates);
      const quote = tpl(topic, num);
      const extraInstruction =
        tier === 3
          ? "Identify the **dominant** Aristotelian persuasive pillar (**ethos**, **logos**, or **pathos**) driving this sentence."
          : "Which Aristotelian appeal (**ethos**, **logos**, or **pathos**) primarily powers this sentence?";
      return {
        prompt: `Read this Section B directed-writing sentence:\n\n> ${quote}\n\n${extraInstruction}`,
        answer: { type: "text", accept: [s.appeal], display: s.appeal },
        solution: [
          "Separate the three pillars: **ethos** = speaker credibility & fair integrity; **logos** = causal logic & proportional evidence; **pathos** = concrete human vulnerability.",
          s.explain,
          `Dominant appeal: **${s.appeal}**.`,
        ],
        hint: "Ask whether the sentence leans on speaker credibility/fairness (ethos), measurable cause-and-effect evidence (logos), or a concrete lived human scene (pathos).",
        traps: [
          {
            spec: { type: "text", accept: [s.trap] },
            feedback: s.trapWhy,
          },
        ],
      };
    },
  },
  {
    id: "lang-p2-directed.rhetorical-devices",
    topicId: "lang-p2-directed",
    title: "Precision Rhetoric ID (Hypophora to Chiasmus)",
    level: 2,
    guideRef: "rhetorical-precision-ethos-logos-pathos",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const subset =
        tier === 1
          ? DEVICE_ENTRIES.filter((d) => ["hypophora", "antithesis", "anaphora", "tricolon"].includes(d.device))
          : DEVICE_ENTRIES;
      const d = rng.pick(subset);
      const topic = rng.pick(TOPICS_POOL);
      const line = rng.pick(d.lines)(topic);
      const stemSuffix =
        tier === 1
          ? "Name the exact rhetorical device used here (*hypophora*, *antithesis*, *anaphora*, or *tricolon*)."
          : tier === 2
            ? "Name the exact rhetorical device shaping this sentence (*hypophora*, *antithesis*, *anaphora*, *chiasmus*, *litotes*, or *tricolon*)."
            : "Identify the single precise classical rhetorical term exemplified by the structure of this extract.";
      return {
        prompt: `Read this Grade-9 Paper 2B sentence:\n\n> ${line}\n\n${stemSuffix}`,
        answer: { type: "text", accept: d.accept, display: d.device },
        solution: [
          `Observe the syntactic pattern: ${d.cue.toLowerCase()}.`,
          `That exact classical figure of rhetoric is **${d.device}**.`,
        ],
        hint: `Look closely at the clause pattern: ${d.cue.toLowerCase()}.`,
        traps: [
          {
            spec: { type: "text", accept: [d.trap] },
            feedback: d.trapMsg,
          },
        ],
      };
    },
  },
  {
    id: "lang-p2-directed.cohesion-punctuation",
    topicId: "lang-p2-directed",
    title: "Rebuttal Pivots & Punctuation Architecture",
    level: 3,
    guideRef: "stylistic-polish-spag-marks",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const m = rng.pick(PUNCT_MOVES);
      const topic = rng.pick(TOPICS_POOL);
      const n = tier === 1 ? rng.int(12, 24) : tier === 2 ? rng.int(25, 48) : rng.int(50, 95);
      return {
        prompt: m.prompt(topic, n),
        answer: { type: "text", accept: m.accept, display: m.answer },
        solution: [
          "Test whether both halves are complete independent clauses and check their logical relationship.",
          m.explain,
          `Target term: **${m.answer}**.`,
        ],
        hint: "Check clause independence first: comma splices join two full clauses illegally; colons reveal a verdict; semicolons balance parallel clauses; concessions grant a point before pivoting.",
        traps: [
          {
            spec: { type: "text", accept: [m.trap] },
            feedback: m.trapFeedback,
          },
        ],
      };
    },
  },
];

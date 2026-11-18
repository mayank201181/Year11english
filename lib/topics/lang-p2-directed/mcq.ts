import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "lang-p2-directed-m1",
    title: "Paper 1: Genre Conventions, Register & Source Transformation",
    questions: [
      {
        id: "lang-p2-directed-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "adapting-form-audience-purpose",
        question:
          "You are writing a formal Paper 2B letter to the Chair of the Regional Transport Authority whose name is NOT given, opening with *'Dear Sir or Madam,'*. Which complimentary close is strictly required?",
        options: [
          "Yours faithfully,",
          "Yours sincerely,",
          "Kindest regards,",
          "Warm wishes,",
        ],
        answerIndex: 0,
        hints: [
          "Recall the classic formal correspondence rule: never pair two S-words across salutation and sign-off.",
          "Because 'Dear Sir or Madam' does not name an individual surname, select the matching formal valediction.",
        ],
        explanation:
          "An unnamed formal salutation (*Dear Sir or Madam,*) always closes with **Yours faithfully,**; **Yours sincerely,** is reserved exclusively for named recipients such as *Dear Ms Patel,*.",
      },
      {
        id: "lang-p2-directed-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "adapting-form-audience-purpose",
        question:
          "A Paper 2B prompt instructs: *'Write a letter to your headteacher, Mr Henderson, arguing for extended study-hall hours.'* Which pairing of salutation and sign-off is accurate?",
        options: [
          "Dear Headteacher, … Yours sincerely,",
          "Dear Mr Henderson, … Yours sincerely,",
          "Dear Mr Henderson, … Yours faithfully,",
          "To Mr Henderson, … Best regards,",
        ],
        answerIndex: 1,
        hints: [
          "The prompt explicitly supplies the recipient's title and surname ('Mr Henderson').",
          "Addressing a named individual requires matching that personal salutation with 'sincerely'.",
        ],
        explanation:
          "Opening with the named salutation **Dear Mr Henderson,** requires **Yours sincerely,**; pairing a named salutation with *Yours faithfully,* violates formal British letter convention.",
      },
      {
        id: "lang-p2-directed-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "adapting-form-audience-purpose",
        question:
          "In a broadsheet opinion article for Paper 2B, what is the primary function of a **strapline** (standfirst) placed directly beneath the headline?",
        options: [
          "To list bibliographic URLs for the statistics cited in the article",
          "To state the journalist's home address and date of submission",
          "To distil the article's central tension or thesis in one crisp sentence before the opening paragraph",
          "To divide the page visually into two vertical newspaper columns",
        ],
        answerIndex: 2,
        hints: [
          "Think about the single bold or italicised sentence sitting between a broadsheet headline and paragraph one.",
          "It frames the angle of the argument immediately rather than listing metadata or faking page layout.",
        ],
        explanation:
          "A **strapline** (standfirst) sits immediately under the headline and encapsulates the writer's core angle in one incisive sentence; broadsheet articles never include addresses, URLs, or hand-drawn columns.",
      },
      {
        id: "lang-p2-directed-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adapting-form-audience-purpose",
        question:
          "Which feature belongs in a Grade-9 **live assembly speech** to Year 11 peers and teachers, rather than in a broadsheet newspaper article?",
        options: [
          "Bracketed stage directions such as [Audience claps loudly] after key points",
          "Teenage text-message abbreviations to sound relatable to fellow students",
          "Bolded section subheadings separating every two paragraphs",
          "Sustained oral direct address ('Look around this hall…') and collective pronouns anchoring listeners in the shared room",
        ],
        answerIndex: 3,
        hints: [
          "Eliminate fake script directions and non-standard slang, both of which examiners penalise.",
          "Contrast visual print signposts (subheadings) against live spoken audience positioning.",
        ],
        explanation:
          "Authentic speeches establish and sustain a **live oral contract** with the room through spoken cadence and inclusive pronouns, whereas subheadings belong to print articles and stage directions or slang lose marks.",
      },
      {
        id: "lang-p2-directed-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transforming-source-material",
        question:
          "Read this Section A stimulus fact:\n> *Source B (National Sleep Audit): '44% of sixteen-year-olds check notifications after midnight, correlating with a 19% dip in morning recall tests.'*\n\nWhich Section B broadsheet sentence transforms this source material at **Grade-9 level** without verbatim lifting or breaking genre?",
        options: [
          "In Source B on page 3, the National Sleep Audit states that 44% of sixteen-year-olds check notifications after midnight.",
          "44% of sixteen-year-olds check notifications after midnight, correlating with a 19% dip in morning recall tests, which is worrying.",
          "Sleep researchers now warn that nearly half of sixteen-year-olds trade midnight rest for glowing alerts — paying the price before first bell in measurably blunted memory.",
          "99% of teenagers never sleep at all because phones completely destroy every brain cell overnight.",
        ],
        answerIndex: 2,
        hints: [
          "Reject any option that mentions 'Source B' (breaking the real-world newspaper illusion) or copies a 4+ word run verbatim.",
          "Also reject wild, implausible exaggeration that ruins ethos; choose the sentence that re-forges proportions and vocabulary naturally.",
        ],
        explanation:
          "Translating *'44%'* into *'nearly half'* and recasting the correlation in fresh, active broadsheet prose integrates Section A's evidence seamlessly without verbatim lifting or breaking the fourth wall.",
      },
      {
        id: "lang-p2-directed-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transforming-source-material",
        question:
          "Why do examiners penalise writing *'As the writer of Source D argues in the reading insert…'* inside a Paper 2 Section B letter to a local council?",
        options: [
          "Because Paper 2 Section B forbids mentioning any topic connected to Section A",
          "Because formal letters are not allowed to include any factual evidence at all",
          "Because a real council recipient does not possess your exam booklet, shattering authentic audience adaptation",
          "Because Source D is only ever tested on Paper 1 Section A",
        ],
        answerIndex: 2,
        hints: [
          "Section B explicitly encourages drawing on ideas from the reading pack — so the issue is *how* you attribute them.",
          "Ask yourself what a real municipal councillor opening an envelope would think of the phrase 'in the reading insert'.",
        ],
        explanation:
          "Referencing *'Source D'* or *'the reading insert'* shatters the real-world genre contract of a council letter; Grade-9 candidates attribute details naturally (*'veteran youth workers warn…'*, *'municipal figures show…'*).",
      },
      {
        id: "lang-p2-directed-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adapting-form-audience-purpose",
        question:
          "A task asks for a **discursive or persuasive essay** on whether competitive school sport should be optional in Key Stage 4. How does the form of an **essay** differ structurally from a **letter** or **article**?",
        options: [
          "An essay omits salutations, headlines, and subheadings, relying instead on a conceptual thesis opener and dialectical paragraph progression",
          "An essay must be written entirely in bullet-pointed pros and cons without a conclusion",
          "An essay requires opening with 'Dear Examiner' and signing your candidate number at the foot",
          "An essay forbids all rhetorical devices such as antithesis or tricolons",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish external print/correspondence furniture (headlines, Dear Sir) from pure essay form.",
          "Essays still deploy sophisticated rhetoric, driven by continuous analytical paragraphs.",
        ],
        explanation:
          "Unlike letters (salutations/sign-offs) or broadsheet articles (headlines/straplines), a formal **essay** opens directly with a conceptual hook and thesis, advancing through cohesive continuous prose.",
      },
      {
        id: "lang-p2-directed-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transforming-source-material",
        question:
          "Read this hostile Section A extract:\n> *Source C (Retail Park Developer): 'Paving Orchard Common will create 80 part-time checkout roles and 400 free parking bays.'*\n\nYou are writing a speech **opposing** the development. Which approach makes the strongest Grade-9 use of Source C?",
        options: [
          "Pretend Source C's employment claim does not exist so nobody thinks about jobs",
          "Copy Source C's sentence word-for-word and add 'This is a lie!' afterwards",
          "Claim the developer actually plans to fire 8,000 hospital nurses instead",
          "Concede the promised 80 part-time roles fairly, then expose the permanent trade-off of sacrificing irreplaceable green space for tarmac parking",
        ],
        answerIndex: 3,
        hints: [
          "Ignoring or wildly fabricating facts weakens ethos, whereas copying word-for-word is verbatim lifting.",
          "Look for the option that steelmans the opposing figure and reframes its true civic cost.",
        ],
        explanation:
          "Harvesting an opponent's strongest figure (*80 part-time roles*) and reframing it inside a **concession-and-rebuttal antithesis** turns hostile Section A material into persuasive fuel.",
      },
      {
        id: "lang-p2-directed-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "adapting-form-audience-purpose",
        question:
          "When writing a persuasive article aimed at **fellow sixteen-year-old students** for a school magazine, which register calibration earns top-band marks?",
        options: [
          "Phonetic street slang, dropped punctuation, and all-caps shouting",
          "Stiff nineteenth-century legalistic archaisms ('heretofore notwithstanding')",
          "Energetic, inclusive Standard English with shared school-life touchpoints and sharp syntactic control",
          "Detached passive-voice laboratory report notes with numbered equations",
        ],
        answerIndex: 2,
        hints: [
          "Adapting to a peer audience never excuses dropping technical accuracy or Standard English.",
          "Aim for warmth, immediacy, and shared lived perspective while preserving Grade-9 vocabulary and syntax.",
        ],
        explanation:
          "Examiners reward **peer solidarity expressed in ambitious Standard English** — using shared school scenarios and inclusive *we* without sacrificing grammatical precision to slang.",
      },
      {
        id: "lang-p2-directed-m1-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "adapting-form-audience-purpose",
        question:
          "Compare two endings to a live speech urging governors to preserve the school orchestra:\n\n- **Ending 1:** *'Thank you very much for listening to my speech today, I hope you liked my points.'*\n- **Ending 2:** *'Keep the rehearsal room unlocked this September — lest a school famous for finding every pupil's voice chooses silence just to tidy a spreadsheet.'*\n\nWhy does Ending 2 reach Level 4 while Ending 1 stalls?",
        options: [
          "Ending 2 avoids an apologetic meta-commentary cliché and lands an imperative call to action fused with ironic antithesis ('voice' vs 'silence')",
          "Ending 2 is superior solely because it uses an em-dash instead of a full stop",
          "Ending 1 fails because speeches are forbidden from using first-person pronouns anywhere",
          "Ending 2 succeeds because it introduces a brand-new statistic about spreadsheets",
        ],
        answerIndex: 0,
        hints: [
          "Notice how Ending 1 steps outside the speech ('listening to my speech') and apologetically begs approval.",
          "Look at how Ending 2 combines a direct imperative with the sonic contrast between 'voice' and 'silence'.",
        ],
        explanation:
          "*'Thank you for listening to my speech'* is a flat, self-conscious cliché (plus a comma splice!). Ending 2 commands the room with a decisive imperative and resonant antithesis.",
      },
      {
        id: "lang-p2-directed-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transforming-source-material",
        question:
          "Read this Section A memoir snippet:\n> *Source A (Retired Ferry Captain): 'Fog on the estuary taught young deckhands humility faster than any classroom chart ever could.'*\n\nWhich sentence best transforms Source A's insight into a **formal essay** defending outdoor residential expeditions?",
        options: [
          "Fog on the estuary taught young deckhands humility faster than any classroom chart ever could, just like school trips.",
          "Source A's ferry captain proves that boats in fog are better than geography classrooms.",
          "Unscripted natural environments cultivate a quiet humility and practical judgement that even the most meticulous classroom diagram cannot replicate.",
          "Every school should abolish indoor classrooms immediately and purchase an estuary ferry.",
        ],
        answerIndex: 2,
        hints: [
          "Eliminate verbatim lifting, explicit 'Source A' citation, and absurd literalism.",
          "Choose the option that abstracts the underlying educational principle in poised, discursive essay register.",
        ],
        explanation:
          "Distilling the memoir's specific maritime lesson into a broader pedagogical principle (*unscripted environments cultivating humility beyond classroom diagrams*) exemplifies high-level conceptual transformation.",
      },
      {
        id: "lang-p2-directed-m1-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "adapting-form-audience-purpose",
        question:
          "You are writing an **open letter** to the Chief Executive of a water utility, published in a national broadsheet. How does this **dual audience** shape your register?",
        options: [
          "You address the Chief Executive directly in second person ('your board') while framing civic arguments that rally wider public scrutiny",
          "You should write private personal gossip because only the Chief Executive will ever read it",
          "You must switch mid-page from 'Dear Chief Executive' to 'Dear Mum and Dad'",
          "You omit any salutation or sign-off because newspapers refuse to print letters",
        ],
        answerIndex: 0,
        hints: [
          "An open letter has both a nominal addressee (the executive) and an overhearing public readership.",
          "How can second-person accountability work simultaneously on both audiences?",
        ],
        explanation:
          "An open letter holds the named decision-maker directly accountable (*'your board'*) while marshalling public-interest evidence designed to win over the national readership watching.",
      },
      {
        id: "lang-p2-directed-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transforming-source-material",
        question:
          "Which technique best converts a dry Section A percentage (*'79% of surveyed nurses reported unpaid overtime'*) into vivid, authentic **spoken speech cadence** without losing accuracy?",
        options: [
          "Reading out 'seventy-nine point zero zero percent' three times in a row",
          "Translating the figure into human scale ('nearly four in every five nurses on our wards') inside an active clause",
          "Rounding 79% up to '100% of every doctor on Earth' for dramatic punch",
          "Copying the entire statistical table grid onto your speech script",
        ],
        answerIndex: 1,
        hints: [
          "Great speechwriters make statistics immediately picturable to a listening ear without falsifying them.",
          "Compare '79%' on a page against 'nearly four in every five' spoken aloud.",
        ],
        explanation:
          "Converting *79%* into the accurate human proportion **'nearly four in every five'** preserves factual integrity (**ethos/logos**) while giving spoken rhetoric immediate human clarity.",
      },
      {
        id: "lang-p2-directed-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "adapting-form-audience-purpose",
        question:
          "Read this opening to a letter to a Board of School Governors:\n> *'Listen up governors, your uniform policy is honestly ridiculous and you clearly haven't thought it through for two seconds.'*\n\nWhich diagnosis best explains why this opening damages the candidate's mark?",
        options: [
          "Letters to governors are never allowed to disagree with existing school policy",
          "The sentence fails solely because it contains fewer than forty words",
          "School governors only accept letters written entirely in passive voice",
          "Hostile ad hominem insult ('clearly haven't thought') and casual imperative ('Listen up') alienate the target audience and collapse persuasive ethos",
        ],
        answerIndex: 3,
        hints: [
          "Persuading an institutional board requires winning their vote, not insulting their intelligence.",
          "Distinguish firm challenge to a policy from rude dismissal of the audience.",
        ],
        explanation:
          "Attacking decision-makers personally (*ad hominem*) destroys **ethos** and shows poor **audience adaptation**; Grade-9 advocacy challenges the *policy* rigorously while treating the *governors* with diplomatic poise.",
      },
      {
        id: "lang-p2-directed-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "transforming-source-material",
        question:
          "Across a five-source Section A pack on urban cycling, Source A praises Dutch bike lanes, Source B lists accident rates, and Source E quotes angry delivery-van drivers. What defines **synthesised source transformation** in Section B?",
        options: [
          "Summarising Source A in Paragraph 1, Source B in Paragraph 2, and Source E in Paragraph 3",
          "Ignoring Sources B and E completely so you never have to mention safety or traffic",
          "Weaving the safety data, international precedent, and commercial delivery concerns into one coherent, original policy argument",
          "Quoting the longest sentence from each of the five sources inside quotation marks",
        ],
        answerIndex: 2,
        hints: [
          "Avoid turning Section B into a text-by-text reading summary.",
          "Show how multiple facets of the pack inform one unified, realistic proposal in your own voice.",
        ],
        explanation:
          "Top-band Section B responses **integrate multiple perspectives** from the pack — pairing safety realities, proven solutions, and practical stakeholder concerns — inside an original, unified argument.",
      },
    ],
  },
  {
    id: "lang-p2-directed-m2",
    title: "Paper 2: Aristotelian Triad & Precision Rhetorical Craft",
    questions: [
      {
        id: "lang-p2-directed-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "In classical rhetoric, which term names persuasive appeal built on **the writer's credibility, lived authority, and fair-minded ethical character**?",
        options: [
          "Pathos",
          "Ethos",
          "Logos",
          "Bathos",
        ],
        answerIndex: 1,
        hints: [
          "Separate emotional sympathy (pathos) and logical proof (logos) from speaker trustworthiness.",
          "Think of the root shared with 'ethical' character.",
        ],
        explanation:
          "**Ethos** establishes the speaker's authority, integrity, and balanced fairness; **logos** appeals to reasoned proof, **pathos** to emotion, and **bathos** is comic anticlimax.",
      },
      {
        id: "lang-p2-directed-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Identify the rhetorical device in this speech extract:\n> *'What does padlocking youth centres actually save the borough? Barely the cost of two floral roundabouts — at the price of a hundred teenagers' evenings.'*",
        options: [
          "Euphemism",
          "Oxymoron",
          "Hypophora",
          "Simile",
        ],
        answerIndex: 2,
        hints: [
          "Notice that the speaker asks a pointed question and immediately supplies the decisive answer.",
          "Which Greek rhetorical term specifically names question-plus-immediate-self-answer?",
        ],
        explanation:
          "**Hypophora** poses a question and answers it immediately, giving the writer tight control over the logical conclusion rather than leaving an open rhetorical question.",
      },
      {
        id: "lang-p2-directed-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Which sentence exemplifies **antithesis**?",
        options: [
          "We need parks, playgrounds, and pitches across every ward.",
          "Public libraries are not nostalgic monuments to a vanished past; they are launchpads for an equitable future.",
          "The roaring whisper of traffic filled the midnight boulevard.",
          "Perhaps, possibly, someone might consider looking into the bus timetable.",
        ],
        answerIndex: 1,
        hints: [
          "Look for two contrasting concepts placed in balanced, parallel grammatical clauses ('not X; they are Y').",
          "Don't confuse two-word contradiction ('roaring whisper' = oxymoron) with clause-level parallel contrast.",
        ],
        explanation:
          "**Antithesis** sets opposing ideas (*nostalgic monuments to a vanished past* vs *launchpads for an equitable future*) in symmetrical parallel clauses for sharp conceptual clarity.",
      },
      {
        id: "lang-p2-directed-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Read this closing sentence from a broadsheet column:\n> *'When we design cities solely around cars, cars end up redesigning our cities.'*\n\nWhich classical figure of speech structures this sentence?",
        options: [
          "Litotes",
          "Euphemism",
          "Onomatopoeia",
          "Chiasmus",
        ],
        answerIndex: 3,
        hints: [
          "Track the order of key concepts across the comma: [cities → cars] in the first half flips to [cars → cities] in the second half.",
          "Which term names this AB → BA mirror-image inversion?",
        ],
        explanation:
          "**Chiasmus** reverses the grammatical and lexical order of key terms across two balanced halves (*cities… cars* → *cars… cities*), creating memorable aphoristic inevitability.",
      },
      {
        id: "lang-p2-directed-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Compare two triadic ('rule of three') phrases:\n- **Phrase 1:** *'This cut is bad, awful, and really terrible.'*\n- **Phrase 2:** *'This cut starves individual curiosity, hollows out neighbourhood schools, and rations cultural confidence by household income.'*\n\nWhat elevates Phrase 2 into a **Grade-9 escalating tricolon**?",
        options: [
          "It uses three adjectives that mean the exact same thing for emphasis",
          "Each parallel verb phrase widens the conceptual scale — moving from pupil to institution to systemic equity",
          "It avoids using any verbs so the sentence reads faster",
          "It hides the writer's actual opinion behind vague hedging",
        ],
        answerIndex: 1,
        hints: [
          "Phrase 1 stalls on three near-synonymous adjectives ('bad, awful, terrible').",
          "Trace the geographical/social zoom across the three limbs of Phrase 2.",
        ],
        explanation:
          "A Grade-9 **escalating tricolon** builds progressively in scope and rhythmic weight (*individual → school → societal principle*) rather than repeating synonyms.",
      },
      {
        id: "lang-p2-directed-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Identify the rhetorical device in bold:\n> *'Expecting forty teenagers to share four broken microscopes is **scarcely a triumph** of modern STEM investment.'*",
        options: [
          "Hyperbole",
          "Personification",
          "Litotes (ironic understatement)",
          "Alliteration",
        ],
        answerIndex: 2,
        hints: [
          "Instead of shouting 'an utter disaster!', the writer coolly negates the opposite ('scarcely a triumph').",
          "Which rhetorical term describes deliberate understatement via negating the contrary?",
        ],
        explanation:
          "**Litotes** conveys cutting criticism through restrained ironic understatement (*'scarcely a triumph'*), signalling cool intellectual authority.",
      },
      {
        id: "lang-p2-directed-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Read these consecutive speech sentences:\n> *'Every cancelled bus strands a shift worker. Every cancelled bus isolates a pensioner. Every cancelled bus shrinks a town's horizon.'*\n\nRepeating *'Every cancelled bus'* at the start of successive clauses is an example of:",
        options: [
          "Anaphora",
          "Simile",
          "Euphemism",
          "Colloquialism",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the exact repetition positioned at the **beginning** of consecutive clauses.",
          "Which Greek term names deliberate opening-clause repetition?",
        ],
        explanation:
          "**Anaphora** repeats a key phrase at the beginning of successive clauses or sentences to build cumulative rhythmic momentum.",
      },
      {
        id: "lang-p2-directed-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Why does inventing a statistic like *'99.8% of Cambridge brain surgeons say homework ruins childhood'* hurt a Paper 2B essay?",
        options: [
          "Examiners deduct five automatic marks whenever the word 'Cambridge' appears",
          "Percentages are strictly banned from persuasive writing",
          "Statistics appeal exclusively to pathos rather than logos",
          "Transparently implausible fabrication shatters **ethos**, exposing the writer as manipulative rather than credible",
        ],
        answerIndex: 3,
        hints: [
          "Ask whether a sceptical adult reader believes '99.8% of brain surgeons' studied homework.",
          "Once a reader catches one obviously fake claim, what happens to their trust in the rest of your essay?",
        ],
        explanation:
          "Absurdly fabricated statistics collapse **ethos** (trustworthiness) immediately; effective **logos** relies on plausible proportions or re-forged evidence from the Section A pack.",
      },
      {
        id: "lang-p2-directed-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Which method creates dignified, top-band **pathos** when arguing for free school breakfasts, without slipping into cheesy melodrama?",
        options: [
          "Using six exclamation marks and writing 'THINK OF THE POOR STARVING BABIES!!!' in block capitals",
          "Focusing quietly on one concrete sensory detail — a Year 7 pupil trying to memorise algebra at 9 a.m. on an empty stomach — before linking to attainment",
          "Listing forty emotive adjectives in a single breathless run-on sentence",
          "Telling the audience they are evil monsters if they ask how the scheme is funded",
        ],
        answerIndex: 1,
        hints: [
          "In high-grade non-fiction, restraint moves an adult reader far more deeply than shouting or guilt-tripping.",
          "Select the option that grounds human stakes in a specific, believable everyday detail.",
        ],
        explanation:
          "Restrained, **concrete micro-detail** invites genuine reader empathy (**pathos**) while preserving respect for both the subject's dignity and the audience's intelligence.",
      },
      {
        id: "lang-p2-directed-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "In corporate or council documents, calling the closure of three youth clubs *'streamlining community estate footprint'* is an example of **euphemism**. How should a Grade-9 Section B writer respond to such language?",
        options: [
          "Quote the euphemism briefly to expose how sterile phrasing masks concrete human loss",
          "Adopt the exact same vague bureaucratic jargon throughout their own speech",
          "Avoid mentioning youth clubs altogether",
          "Replace every noun in the speech with slang",
        ],
        answerIndex: 0,
        hints: [
          "Spot how sterile jargon ('streamlining footprint') hides padlocked doors.",
          "Unmasking an opponent's euphemism is one of journalism's sharpest critical moves.",
        ],
        explanation:
          "Holding an institutional **euphemism** up to the light and contrasting it with plain reality (*padlocked doors*) dismantles spin with surgical precision.",
      },
      {
        id: "lang-p2-directed-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Read this extract from a student's broadsheet column:\n> *'Having spent three Saturdays volunteering beside retired machinists at our Repair Café — watching seventy-year-old hands teach fourteen-year-olds to rewire a toaster — I have seen throwaway culture lose its grip.'*\n\nHow does this single sentence blend **two** Aristotelian appeals?",
        options: [
          "It combines **ethos** (first-hand volunteer witness) with **pathos** (warm intergenerational human portrait)",
          "It relies purely on statistical **logos** and avoids human detail completely",
          "It uses **bathos** to mock elderly volunteers and teenagers alike",
          "It rejects ethos by admitting the writer only volunteered on Saturdays",
        ],
        answerIndex: 0,
        hints: [
          "Ask what 'Having spent three Saturdays volunteering...' does for the writer's authority.",
          "Then ask what the image of 'seventy-year-old hands' teaching teenagers evokes emotionally.",
        ],
        explanation:
          "First-hand participation establishes authentic **ethos**, while the tactile portrait of intergenerational mentorship evokes warm, unforced **pathos**.",
      },
      {
        id: "lang-p2-directed-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Which revision upgrades a weak, nagging rhetorical question (*'Don't you think littering in parks is really bad?'*) into incisive Grade-9 rhetoric?",
        options: [
          "Isn't littering in parks super bad and annoying?!",
          "Why do people drop litter, do you think litter is nice or horrible?",
          "If a public park reflects how a town values its shared home, what verdict do overflowing bins pass on ours?",
          "Don't you agree with me that littering is bad, yes or no?",
        ],
        answerIndex: 2,
        hints: [
          "Weak rhetorical questions beg 'Don't you agree?'; strong ones frame an inescapable moral premise ('If X, then what verdict...').",
          "Choose the option with conditional logic and metaphorical precision.",
        ],
        explanation:
          "Framing a conditional premise (*'If a public park reflects…'*) before asking what verdict the evidence passes compels reflection without shrill nagging.",
      },
      {
        id: "lang-p2-directed-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "Read this sentence:\n> *'The developer's glossy brochure promises \"vibrant boutique heritage living\" — by bulldozing a Victorian bakery to build windowless studio flats.'*\n\nWhich method drives the satirical sting after the em-dash?",
        options: [
          "Pathetic fallacy about rainy weather",
          "Extended pastoral simile comparing flats to meadows",
          "Sympathetic concession praising the developer's honesty",
          "Ironic juxtaposition / bathos puncturing commercial spin with stark literal reality",
        ],
        answerIndex: 3,
        hints: [
          "Notice the sharp collision between the lofty marketing slogan before the dash and the blunt physical reality ('bulldozing... windowless') after it.",
          "Which satirical technique deflates pretentious spin by dropping abruptly to ugly truth?",
        ],
        explanation:
          "Placing the developer's inflated slogan directly beside the stark reality after an em-dash uses **ironic juxtaposition / bathos** to puncture corporate hypocrisy.",
      },
      {
        id: "lang-p2-directed-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "In persuasive writing, how do **inclusive pronouns** (*we*, *our*, *us*) function differently from **accusatory direct address** (*you*)?",
        options: [
          "Inclusive pronouns position writer and audience inside a shared moral community solving a problem together, reducing defensiveness",
          "Inclusive pronouns are grammatically informal and banned from broadsheet journalism",
          "Accusatory 'you' always builds warmer rapport with reluctant school governors than 'we'",
          "Both pronouns have identical effects in every context",
        ],
        answerIndex: 0,
        hints: [
          "Compare telling governors 'You are failing students' versus 'We share a duty to every pupil in our care'.",
          "Which pronoun aligns writer and reader on the same side of the table?",
        ],
        explanation:
          "Inclusive **we / our** builds coalition solidarity and shared stewardship, whereas relentless accusatory **you** risks making an institutional audience defensive.",
      },
      {
        id: "lang-p2-directed-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "rhetorical-precision-ethos-logos-pathos",
        question:
          "A candidate sustains a **medical semantic field** (*'haemorrhaging talent'*, *'diagnostic blind spot'*, *'sticking-plaster grant'*, *'chronic underfunding'*) throughout an article on regional transport. Why does an **extended semantic field** outperform four random metaphors?",
        options: [
          "Because examiners award marks strictly by counting medical nouns",
          "It proves the writer wants to become a doctor rather than a journalist",
          "It replaces the need for any logical evidence or paragraph structure",
          "It weaves subconscious thematic cohesion across paragraphs, framing infrastructure neglect as a progressive systemic illness requiring cure rather than cosmetic patchwork",
        ],
        answerIndex: 3,
        hints: [
          "Consider what linking 'chronic', 'haemorrhaging', and 'sticking-plaster' across separate paragraphs achieves structurally.",
          "How does framing a transport issue as an untreated illness steer the reader toward systemic reform?",
        ],
        explanation:
          "Sustaining a coherent **semantic field** binds separate paragraphs together conceptually while subtly conditioning the reader to reject superficial *'sticking-plaster'* fixes.",
      },
    ],
  },
  {
    id: "lang-p2-directed-m3",
    title: "Paper 3: Cohesive Architecture, Rebuttal & SPaG Command",
    questions: [
      {
        id: "lang-p2-directed-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cohesive-discourse-counterargument",
        question:
          "What does **steelmanning** an opposing argument mean in Paragraph 4 of a Paper 2B persuasive piece?",
        options: [
          "Mocking opponents with childish nicknames so nobody takes them seriously",
          "Articulating the strongest, most reasonable version of the opposing concern fairly before dismantling its underlying premise",
          "Switching sides permanently halfway through your essay so you end up agreeing with your opponent",
          "Refusing to acknowledge that any sane person could disagree with your thesis",
        ],
        answerIndex: 1,
        hints: [
          "Contrast a 'strawman' (a weak, easily knocked-down caricature) with its opposite: a 'steelman'.",
          "Remember you still overturn the objection — after stating it fairly.",
        ],
        explanation:
          "**Steelmanning** grants the fairest, smartest form of the counter-argument (*concession*) and then exposes why your thesis still prevails (*rebuttal*), strengthening both **ethos** and **logos**.",
      },
      {
        id: "lang-p2-directed-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Identify the grammatical error in this sentence:\n> *'Apprenticeship stipends have stagnated for a decade, talented school-leavers are being priced out of engineering.'*",
        options: [
          "Dangling participle",
          "Split infinitive",
          "Double negative",
          "Comma splice",
        ],
        answerIndex: 3,
        hints: [
          "Test whether the words before the comma and the words after the comma could each stand alone as complete sentences.",
          "What error occurs when two independent clauses are joined by a comma alone with no conjunction?",
        ],
        explanation:
          "Both halves are complete independent clauses joined only by a comma — a classic **comma splice**. Repair it with a colon (causal consequence), semicolon, or conjunction.",
      },
      {
        id: "lang-p2-directed-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Which sentence uses a **colon (`:`)** with 100% grammatical and rhetorical accuracy?",
        options: [
          "The three main problems with night flights are: noise, emissions, and sleep disruption.",
          "After six months of trials, the data pointed to: a sharp drop in absenteeism.",
          "Six months of trials left room for only one conclusion: preventative youth work pays for itself twice over.",
          "Although: budgets are tight, libraries must remain open on Saturdays.",
        ],
        answerIndex: 2,
        hints: [
          "Apply the golden test: cut everything from the colon onwards — does what comes BEFORE the colon stand alone as a grammatically complete sentence?",
          "Never place a colon directly after a linking verb ('are:') or a preposition ('to:').",
        ],
        explanation:
          "A **colon** must follow a **complete main clause** (*'Six months of trials left room for only one conclusion'*), acting as a spotlight reveal for the verdict that follows.",
      },
      {
        id: "lang-p2-directed-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Which sentence uses a **semicolon (`;`)** accurately to reinforce persuasive antithesis?",
        options: [
          "Short-sighted budgets count only this April's maintenance bill; wise stewardship counts the next thirty summers.",
          "Whereas short-sighted councils cut trees; wise councils plant canopies.",
          "Public parks provide; shade, clean air, and free exercise.",
          "Because local pools closed early; teenagers had nowhere to train.",
        ],
        answerIndex: 0,
        hints: [
          "Both sides of a non-list semicolon MUST be independent clauses able to stand as full sentences.",
          "Eliminate any option where 'Whereas' or 'Because' turns the first half into a subordinate fragment!",
        ],
        explanation:
          "A **semicolon** links two balanced **independent** clauses; subordinate starters like *Whereas* or *Because* create a dependent clause that takes a comma, never a semicolon.",
      },
      {
        id: "lang-p2-directed-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cohesive-discourse-counterargument",
        question:
          "Paragraph 2 of an article ends: *'…reducing civic culture to whatever turns an immediate profit.'*\n\nWhich opening to Paragraph 3 demonstrates a seamless **lexical echo transition** rather than a mechanical *'Secondly'*?",
        options: [
          "Secondly, another completely separate point I want to make is about transport.",
          "Immediate profit, however, is a remarkably brittle yardstick by which to measure a town's museums.",
          "In paragraph three, I will now discuss museums and galleries.",
          "Furthermore, additionally, moreover, museums are also nice places to visit.",
        ],
        answerIndex: 1,
        hints: [
          "Look for the sentence that picks up the exact closing phrase ('immediate profit') from Paragraph 2 and pivots on it.",
          "Eliminate clunky meta-signposting ('In paragraph three') and stacked connectives.",
        ],
        explanation:
          "Echoing *'Immediate profit'* from the close of Paragraph 2 directly in the opening subject of Paragraph 3 stitches the argument together organically.",
      },
      {
        id: "lang-p2-directed-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cohesive-discourse-counterargument",
        question:
          "Which pair of discourse markers best structures a **concession-and-rebuttal pivot**?",
        options: [
          "Firstly … Secondly",
          "For example … In conclusion",
          "Admittedly … Yet",
          "Similarly … Likewise",
        ],
        answerIndex: 2,
        hints: [
          "You need one marker to grant a valid opposing point, paired with a sharp adversative fulcrum to overturn it.",
          "Test which pair fits: '[Marker 1], budgets are stretched. [Marker 2] cutting prevention doubles future costs.'",
        ],
        explanation:
          "**Admittedly … Yet** (or *Granted … However*) cleanly signals fair concession followed immediately by a decisive rebuttal pivot.",
      },
      {
        id: "lang-p2-directed-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Why is sentence order crucial inside a complex concessive sentence?\n- **Order 1:** *'Although preserving historic libraries protects social mobility for thousands of pupils, refurbishing Victorian roofs is undeniably expensive.'*\n- **Order 2:** *'Although refurbishing Victorian roofs is undeniably expensive, preserving historic libraries protects social mobility for thousands of pupils.'*",
        options: [
          "Order 1 and Order 2 carry the exact same persuasive punch",
          "Order 1 is stronger because readers only ever remember subordinate clauses",
          "Starting a sentence with 'Although' is grammatically incorrect in formal English",
          "Order 2 places the writer's core argument in the **main clause at the end** (end-focus), leaving social mobility rather than roof costs ringing in the reader's mind",
        ],
        answerIndex: 3,
        hints: [
          "Read both aloud and notice which point feels like the final takeaway in each.",
          "Subordinate clauses ('Although...') subordinate the concession; the main clause carries the emphatic weight!",
        ],
        explanation:
          "Tucking the opposing point inside the opening **subordinate clause** (*'Although X is expensive,'*) and reserving the **closing main clause** for your thesis harnesses syntactic **end-focus**.",
      },
      {
        id: "lang-p2-directed-m3-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Choose the sentence with **100% accurate apostrophe placement** for formal directed writing:",
        options: [
          "The library lost it's weekend funding, hurting local student's exam grades.",
          "The library lost its weekend funding, hurting local students' exam grades.",
          "The library lost its' weekend funding, hurting local students exam grades.",
          "The library lost it's weekend funding, hurting local students' exam grades.",
        ],
        answerIndex: 1,
        hints: [
          "Possessive 'its' NEVER takes an apostrophe ('it's' always means 'it is' or 'it has').",
          "For plural 'students' owning 'exam grades', the apostrophe sits AFTER the plural 's'.",
        ],
        explanation:
          "Possessive **its** has no apostrophe, and plural possessive **students'** places the apostrophe after the plural *-s*.",
      },
      {
        id: "lang-p2-directed-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Which sentence demonstrates the **formal subjunctive** to elevate register in a letter to a government minister?",
        options: [
          "Were the ministry to withdraw maintenance bursaries, first-generation applicants would be priced out of medicine.",
          "If the ministry scraps bursaries tomorrow, loads of kids are gonna drop out.",
          "The ministry scrapped bursaries last week and students was very upset.",
          "Maybe if bursaries get cut then things might get worse.",
        ],
        answerIndex: 0,
        hints: [
          "Look for the inverted hypothetical construction 'Were [subject] to [verb]...' paired with 'would'.",
          "Check subject-verb agreement and formal ministerial vocabulary.",
        ],
        explanation:
          "The inverted subjunctive conditional (**'Were the ministry to withdraw…'**) signals assured, authoritative formal command.",
      },
      {
        id: "lang-p2-directed-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cohesive-discourse-counterargument",
        question:
          "An article opens in Paragraph 1 with the concrete image of *a rusted padlock on a municipal swimming-pool gate*. How should Paragraph 5 execute a **cyclical callback**?",
        options: [
          "Copy Paragraph 1 word-for-word at the bottom of the page",
          "Abandon swimming pools completely and introduce a new argument about university tuition fees",
          "Return to the image of that bolted gate — re-framing unlocking it not merely as leisure spending, but as unlocking preventative public health",
          "Apologise for mentioning padlocks earlier and write 'In conclusion, swimming is healthy'",
        ],
        answerIndex: 2,
        hints: [
          "Cyclical framing revisits the opening motif without repeating it mechanically.",
          "Show how the preceding four paragraphs have deepened the meaning of that padlock.",
        ],
        explanation:
          "A **cyclical callback** revisits the opening concrete motif (*the bolted pool gate*) transformed by the essay's systemic argument, giving the whole piece architectural closure.",
      },
      {
        id: "lang-p2-directed-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "What is the rhetorical effect of placing a **three-word sentence** (*'That promise evaporated.'*) immediately after a forty-word cumulative sentence?",
        options: [
          "It shows the candidate ran out of vocabulary",
          "Syntactic contrast creates an abrupt rhythmic halt, landing the verdict with stark judicial finality",
          "Short sentences are only permitted in Paper 1 narrative stories, never in Paper 2 non-fiction",
          "It turns the preceding sentence into a comma splice",
        ],
        answerIndex: 1,
        hints: [
          "Think about pacing: long multi-clause momentum followed suddenly by a three-word full stop.",
          "Deliberate brevity works through contrast with the surrounding syntax.",
        ],
        explanation:
          "Contrasting a cumulative multi-clause build against a blunt **short impact sentence** arrests the rhythm and underscores disillusionment or finality.",
      },
      {
        id: "lang-p2-directed-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Compare two candidate revisions of *'The council's plan makes traffic worse'*:\n- **Revision 1:** *'The municipal authority's nefarious machination exponentially exacerbates vehicular conglomeration.'*\n- **Revision 2:** *'The council's detour actively gridlocks residential side-streets.'*\n\nWhy does Revision 2 score **higher** for vocabulary precision?",
        options: [
          "Examiners penalise words longer than two syllables",
          "Revision 1 is grammatically incomplete because it lacks a verb",
          "Revision 2 uses passive voice to hide responsibility",
          "Revision 2 selects one exact, muscular dynamic verb ('gridlocks') in natural register, whereas Revision 1 suffers from strained, unnatural thesaurus stuffing",
        ],
        answerIndex: 3,
        hints: [
          "Read Revision 1 aloud: would any serious broadsheet editor publish 'vehicular conglomeration'?",
          "Grade-9 lexis prizes surgical precision over pompous multi-syllable bloat.",
        ],
        explanation:
          "Overwrought **thesaurus stuffing** (*'vehicular conglomeration'*) sounds comical and insecure; top-band style favours crisp, exact verbs (*'gridlocks'*, *'erodes'*, *'marginalises'*).",
      },
      {
        id: "lang-p2-directed-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "Identify the sentence in which **paired parenthetical em-dashes** are punctuated and deployed effectively:",
        options: [
          "The promised consultation — all thirty-six hours of it on an obscure web portal — fooled nobody.",
          "The promised — consultation all thirty-six — hours of it fooled nobody.",
          "The promised consultation — fooled nobody —",
          "— The promised consultation fooled nobody.",
        ],
        answerIndex: 0,
        hints: [
          "Test paired dashes by lifting out the words between them: the outer sentence must still read smoothly on its own!",
          "Notice how the enclosed aside delivers a dry ironic sting.",
        ],
        explanation:
          "Enclosing *'all thirty-six hours of it on an obscure web portal'* between paired dashes inserts a sharp ironic aside while keeping the surrounding main clause (*'The promised consultation fooled nobody'*) intact.",
      },
      {
        id: "lang-p2-directed-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cohesive-discourse-counterargument",
        question:
          "When using a **single-sentence paragraph** for rhetorical impact in a 40-mark directed writing task, how should it be rationed?",
        options: [
          "Write every single sentence of your essay on a new line so you have thirty one-line paragraphs",
          "Deploy it once (or at most twice) at a decisive fulcrum pivot — so contrast against developed paragraphs gives it dramatic weight",
          "Never use paragraphs shorter than twelve sentences under any circumstances",
          "Place it randomly in the middle of your address and salutation",
        ],
        answerIndex: 1,
        hints: [
          "If every sentence is isolated on its own line, none of them stands out and cohesion collapses.",
          "Strategic scarcity is what makes a single-line paragraph hit hard.",
        ],
        explanation:
          "A **single-sentence paragraph** derives its punch from contrast with surrounding fully developed paragraphs; overusing it fragments cohesion.",
      },
      {
        id: "lang-p2-directed-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "stylistic-polish-spag-marks",
        question:
          "With **45 minutes** remaining for Paper 2 Section B (40 marks), which time split protects both **macro-structural cohesion** and **top-band SPaG accuracy**?",
        options: [
          "0 minutes planning, 45 minutes non-stop writing until the invigilator calls time mid-sentence",
          "25 minutes drawing an elaborate mind-map, 20 minutes rushing two paragraphs, 0 minutes checking",
          "15 minutes copying out Section A extracts onto rough paper before choosing a question",
          "5 minutes FAP-R & 5-stage spine planning, 36 minutes crafted drafting, and 4 minutes dedicated comma-splice, apostrophe, and sign-off audit",
        ],
        answerIndex: 3,
        hints: [
          "Unplanned writing wanders in circles, while unproofread writing bleeds avoidable technical marks.",
          "Balance upfront architectural planning with a ring-fenced final technical audit.",
        ],
        explanation:
          "Investing **5 minutes** on your FAP-R 5-stage blueprint and ring-fencing **4 final minutes** to eliminate comma splices, apostrophe slips, and sign-off mismatches maximises all 40 marks.",
      },
    ],
  },
];

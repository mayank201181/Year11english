import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "lang-p2-directed-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "adapting-form-audience-purpose",
      question:
        "A formal letter opens with *'Dear Sir or Madam,'*. Which exact two-word sign-off must close the letter?",
      options: [
        "Yours faithfully",
        "Yours sincerely",
        "Best wishes",
        "Kind regards",
      ],
      answerIndex: 0,
      hints: [
        "Apply the classic formal correspondence rule: never pair two S-words together.",
      ],
      explanation:
        "Unnamed formal salutations (*Dear Sir or Madam*) always close with **Yours faithfully**; named salutations (*Dear Ms Tan*) close with **Yours sincerely**.",
    },
    {
      id: "lang-p2-directed-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "adapting-form-audience-purpose",
      question:
        "If your Paper 2B formal letter opens with the named salutation *'Dear Dr Mensah,'*, write the exact two-word complimentary close required at the end.",
      answer: {
        type: "text",
        accept: ["Yours sincerely", "yours sincerely"],
        display: "Yours sincerely",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Yours faithfully"] },
          feedback: "'Yours faithfully' is only for unnamed salutations ('Dear Sir or Madam'). A named recipient ('Dear Dr Mensah') requires 'Yours sincerely'.",
        },
      ],
      hints: [
        "Dr Mensah is a named individual rather than 'Sir or Madam'.",
      ],
      solution: [
        "Because the salutation names a specific individual (*Dear Dr Mensah*), formal British convention requires **Yours sincerely**.",
      ],
      commonError: "Writing 'Yours faithfully' after a named surname.",
    },
    {
      id: "lang-p2-directed-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "transforming-source-material",
      question:
        "Read this Section A stimulus fact:\n> *Source E: '38% of rural bus services have been withdrawn since 2016.'*\n\nWhich sentence transforms this detail most effectively for a **speech to county councillors**?",
      options: [
        "In Source E of the reading paper, 38% of rural bus services have been withdrawn since 2016.",
        "38% of rural bus services have been withdrawn since 2016, which is really bad for villages.",
        "In less than a decade, nearly two in five village bus routes have vanished from this county — marooning pensioners and apprentices alike.",
        "Every single rural bus in Europe stopped running in 2016.",
      ],
      answerIndex: 2,
      hints: [
        "Eliminate 'In Source E' (breaks genre), verbatim copying, and false exaggeration.",
        "Look for accurate human-ratio translation ('nearly two in five') + active consequences.",
      ],
      explanation:
        "Translating *38%* into *'nearly two in five'* and framing human consequences with dynamic verbs (*'vanished'*, *'marooning'*) achieves Grade-9 transformation without lifting.",
    },
    {
      id: "lang-p2-directed-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Name the single classical rhetorical device used here:\n> *'Does scrapping school drama save a fortune? Barely the price of repainting the staff car park.'*",
      answer: {
        type: "text",
        accept: ["hypophora", "anthypophora"],
        display: "hypophora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["rhetorical question"] },
          feedback: "A pure rhetorical question is left unanswered; asking a question and immediately answering it yourself is 'hypophora'.",
        },
      ],
      hints: [
        "Notice that the speaker asks a pointed question and supplies the immediate answer in the next clause.",
        "It starts with 'hypo-' and ends with '-phora'.",
      ],
      solution: [
        "Asking a question and immediately answering it yourself to steer the audience's conclusion is **hypophora**.",
      ],
    },
    {
      id: "lang-p2-directed-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Which Aristotelian persuasive pillar dominates this sentence?\n> *'Having taught Year 11 engineering apprentices for sixteen winters, I recognise both the workshop's running costs and its transformative value.'*",
      options: [
        "Pathos",
        "Ethos",
        "Logos",
        "Bathos",
      ],
      answerIndex: 1,
      hints: [
        "The speaker foregrounds sixteen years of lived professional experience plus balanced fairness.",
        "Which pillar establishes ethical credibility and trustworthy authority?",
      ],
      explanation:
        "Foregrounding sixteen years of frontline teaching expertise alongside fair-minded balance builds **ethos** (credibility).",
    },
    {
      id: "lang-p2-directed-quiz-q06",
      kind: "short",
      commonError:
        "Calling it a 'run-on sentence' or 'missing conjunction' instead of the exact term; two independent clauses joined only by a comma is a comma splice.",
      traps: [
        {
          spec: { type: "text", accept: ["run-on sentence", "run on sentence", "run-on", "fused sentence"] },
          feedback: "Run-on is the broad family; the exact two-word term for clauses joined by just a comma is comma splice.",
        },
      ],
      difficulty: "core",
      guideRef: "stylistic-polish-spag-marks",
      question:
        "Identify the exact two-word grammatical error in this sentence:\n> *'Youth swimming pools closed across the borough, teenage fitness levels plummeted.'*",
      answer: {
        type: "text",
        accept: ["comma splice", "comma-splice", "comma splicing"],
        display: "comma splice",
      },
      hints: [
        "Both halves on either side of the comma are complete standalone clauses with no conjunction.",
        "What two-word term names joining independent clauses with a bare comma?",
      ],
      solution: [
        "Two independent clauses joined solely by a comma commit a **comma splice**; repair with a colon, semicolon, or conjunction.",
      ],
    },
    {
      id: "lang-p2-directed-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cohesive-discourse-counterargument",
      question:
        "Why should Paragraph 4 of a persuasive speech or article include a **concession-and-rebuttal pivot** (*'Admittedly… Yet…'*)?",
      options: [
        "To pad out word count when you run out of arguments for your own side",
        "To abandon your thesis and end the essay completely undecided",
        "To anticipate and disarm the sceptical reader's strongest objection fairly, strengthening both ethos and logical completeness",
        "Because OxfordAQA deducts ten marks if the word 'Admittedly' is absent",
      ],
      answerIndex: 2,
      hints: [
        "Think about how a sceptical governor or editor reacts when you address their main worry head-on.",
        "Fairly acknowledging and overturning a counter-argument makes your thesis harder to dismiss.",
      ],
      explanation:
        "A **steelman concession-and-rebuttal** disarms the strongest opposing concern before the reader can cling to it, elevating **ethos** and **logos**.",
    },
    {
      id: "lang-p2-directed-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Name the rhetorical device that places two contrasting ideas side by side in balanced parallel clauses:\n> *'Public parks are not an ornamental luxury for sunny afternoons; they are vital lungs for crowded wards.'*",
      answer: {
        type: "text",
        accept: ["antithesis"],
        display: "antithesis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxymoron"] },
          feedback: "An oxymoron compresses two contradictory words together ('bitter sweet'); balanced parallel clauses contrasting two ideas form 'antithesis'.",
        },
      ],
      hints: [
        "Look at the symmetrical 'not X; they are Y' clause contrast.",
        "The term begins with 'anti-'.",
      ],
      solution: [
        "Contrasting two opposing concepts inside parallel grammatical structures (*'not an ornamental luxury…; they are vital lungs…'*) is **antithesis**.",
      ],
    },
    {
      id: "lang-p2-directed-quiz-q09",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "stylistic-polish-spag-marks",
      question:
        "Which sentence uses a **colon** accurately for Grade-9 syntactic impact?",
      options: [
        "The vital benefits of Saturday libraries are: warmth, silence, and free textbooks.",
        "Because: budgets shrank, opening hours were halved.",
        "Councillors promised to: protect every local reading room.",
        "Three years of data converged on one stark truth: cutting youth mentors doubled truancy.",
      ],
      answerIndex: 3,
      hints: [
        "Check what stands to the LEFT of the colon: it must form a complete, grammatically independent sentence.",
        "Never split a verb ('are:' / 'to:') or subordinator ('Because:') from its complement with a colon.",
      ],
      explanation:
        "*'Three years of data converged on one stark truth'* is a complete independent clause, letting the **colon** spotlight the blunt six-word verdict that follows.",
    },
    {
      id: "lang-p2-directed-quiz-q10",
      kind: "short",
      commonError:
        "Confusing chiasmus with antithesis; antithesis contrasts opposite ideas, chiasmus mirrors the same words in AB → BA order.",
      traps: [
        {
          spec: { type: "text", accept: ["antithesis"] },
          feedback: "Antithesis contrasts opposites. Mirroring the same words in reverse order (AB → BA) is chiasmus.",
        },
      ],
      difficulty: "challenge",
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Identify the classical rhetorical device in which key words from the first clause are inverted in **AB → BA mirror order** in the second clause:\n> *'Screens were built to serve human curiosity, not human curiosity to serve screens.'*",
      answer: {
        type: "text",
        accept: ["chiasmus", "antimetabole"],
        display: "chiasmus",
      },
      hints: [
        "Trace the diagonal cross: [Screens → human curiosity] flips into [human curiosity → screens].",
        "Named after the Greek cross-shaped letter Chi (starts with 'chi-').",
      ],
      solution: [
        "Reversing key lexical elements in AB → BA mirror symmetry across two clauses is **chiasmus** (or **antimetabole**).",
      ],
    },
  ],
  papers: [
    {
      id: "lang-p2-directed-p1",
      title: "Practice Paper 1: Genre Adaptation, Source Re-Forging & Rhetoric",
      questions: [
        {
          id: "lang-p2-directed-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "adapting-form-audience-purpose",
          question:
            "In a broadsheet newspaper article, what single journalism term names the **one-sentence sub-headline** placed directly beneath the main headline to frame the writer's core angle?",
          answer: {
            type: "text",
            accept: ["strapline", "standfirst", "subheadline", "sub-headline"],
            display: "strapline",
          },
          traps: [
            {
              spec: { type: "text", accept: ["byline"] },
              feedback: "A 'byline' states the author's name; the one-sentence summary beneath the headline is a 'strapline' (or 'standfirst').",
            },
          ],
          hints: [
            "It sits right between the bold main headline and paragraph 1.",
          ],
          solution: [
            "Broadsheet articles place a crisp one-sentence **strapline** (also called a **standfirst**) under the main headline to distil the central thesis.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "adapting-form-audience-purpose",
          question:
            "You open a formal letter to an unnamed newspaper editor or council board with *'Dear Sir or Madam,'*. Write the exact two-word complimentary close required.",
          answer: {
            type: "text",
            accept: ["Yours faithfully", "yours faithfully"],
            display: "Yours faithfully",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Yours sincerely"] },
              feedback: "Never pair two S's! 'Dear Sir or Madam' requires 'Yours faithfully'.",
            },
          ],
          hints: [
            "Remember: Sir/Madam starts with S, so your sign-off must NOT start with S.",
          ],
          solution: [
            "Unnamed formal salutations (*Dear Sir or Madam*) close with **Yours faithfully**.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q03",
          kind: "short",
          commonError:
            "Calling it 'plagiarism' or 'quoting' — in the exam the penalised fault of copying stimulus phrases word-for-word is lifting.",
          traps: [
            {
              spec: { type: "text", accept: ["plagiarism", "plagiarising", "quoting", "copying"] },
              feedback: "The examiner term for copying stimulus phrases verbatim into your own writing is lifting.",
            },
          ],
          difficulty: "warmup",
          guideRef: "transforming-source-material",
          question:
            "What single exam term (or two-word phrase) describes the penalised fault of **copying whole phrases word-for-word** from Section A stimulus texts into your Section B writing?",
          answer: {
            type: "text",
            accept: ["lifting", "verbatim lifting", "source lifting"],
            display: "lifting",
          },
          hints: [
            "Examiners warn candidates against 'verbatim ___' from the reading insert.",
          ],
          solution: [
            "Copying consecutive phrases directly from the reading insert instead of re-forging ideas in your own register is called **lifting** (**verbatim lifting**).",
          ],
        },
        {
          id: "lang-p2-directed-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Which single Aristotelian term (**ethos**, **logos**, or **pathos**) names persuasion rooted in **structured cause-and-effect reasoning and proportional evidence**?",
          answer: {
            type: "text",
            accept: ["logos"],
            display: "logos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ethos"] },
              feedback: "'Ethos' appeals to speaker credibility and character; structured logical proof and evidence is 'logos'.",
            },
          ],
          hints: [
            "Separate character trust (ethos) and emotion (pathos) from rational logic.",
            "It shares its Greek root with the English word 'logic'.",
          ],
          solution: [
            "**Logos** persuades through coherent cause-and-effect reasoning, comparisons, and grounded evidence.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Identify the exact rhetorical device used at the start of these three clauses:\n> *'**Without** quiet desks, **without** heated rooms, **without** Saturday librarians, revision becomes a postcode lottery.'*",
          answer: {
            type: "text",
            accept: ["anaphora"],
            display: "anaphora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["epistrophe"] },
              feedback: "Epistrophe repeats words at the END of clauses; repeating 'Without' at the START of successive phrases is 'anaphora'.",
            },
          ],
          hints: [
            "Focus on the deliberate repetition of 'Without' at the opening of three consecutive phrases.",
            "Which classical term names opening-clause repetition?",
          ],
          solution: [
            "Repeating the exact opening word or phrase (*'Without…'*) across consecutive clauses is **anaphora**.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Name the rhetorical device in bold that criticises via **ironic understatement** (negating the opposite):\n> *'Charging sixteen-year-olds adult peak rail fares just to sit compulsory exams is **hardly a masterstroke** of educational fairness.'*",
          answer: {
            type: "text",
            accept: ["litotes", "understatement", "ironic understatement"],
            display: "litotes",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hyperbole"] },
              feedback: "Hyperbole exaggerates wildly; ironically negating the opposite ('hardly a masterstroke') is 'litotes'.",
            },
          ],
          hints: [
            "Rather than exaggerating ('a catastrophe'), the writer coolly negates praise ('hardly a masterstroke').",
            "Starts with 'lito-'.",
          ],
          solution: [
            "**Litotes** expresses a cutting judgement by ironically negating its contrary (*'hardly a masterstroke'*).",
          ],
        },
        {
          id: "lang-p2-directed-p1-q07",
          kind: "short",
          commonError:
            "Calling it 'listing' or 'anaphora'; a three-part parallel series building to a climax is a tricolon.",
          traps: [
            {
              spec: { type: "text", accept: ["listing", "list", "anaphora"] },
              feedback: "Not the precise term — a three-part parallel series is a tricolon.",
            },
          ],
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "What exact term names a **three-part parallel series of clauses** that escalates in conceptual scope toward a climax?\n> *'It exhausts young carers, destabilises classroom attendance, and betrays our borough's promise of fairness.'*",
          answer: {
            type: "text",
            accept: ["tricolon", "escalating tricolon", "triadic structure", "rule of three"],
            display: "tricolon",
          },
          hints: [
            "Count the three parallel verb clauses ('exhausts...', 'destabilises...', 'betrays...').",
            "Give the Grade-9 classical Greek term starting with 'tri-'.",
          ],
          solution: [
            "Three parallel, escalating clauses building rhythmic and conceptual momentum form a **tricolon**.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q08",
          kind: "short",
          commonError:
            "Calling 'Granted…' a 'counter-argument' or 'rebuttal'; the rebuttal is the 'yet…' clause, while the opening move that grants merit is the concession.",
          traps: [
            {
              spec: { type: "text", accept: ["rebuttal", "counter-argument", "counterargument", "counter argument"] },
              feedback: "The rebuttal comes after 'yet'. The opening 'Granted…' that admits the other side's point is a concession.",
            },
          ],
          difficulty: "core",
          guideRef: "cohesive-discourse-counterargument",
          question:
            "In a Paragraph 4 counter-argument (*'Granted, refurbishing Victorian swimming baths requires upfront capital; yet closing them shifts far higher bills onto local clinics'*), what single term names the opening move (*'Granted…'*) that briefly grants merit to the opposing side?",
          answer: {
            type: "text",
            accept: ["concession", "concessive clause", "prolepsis"],
            display: "concession",
          },
          hints: [
            "Before rebutting with 'yet', the writer fairly concedes a valid financial reality.",
            "Starts with 'concess-'.",
          ],
          solution: [
            "Acknowledging the strongest point in an opposing case before overturning it is a **concession**.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "stylistic-polish-spag-marks",
          question:
            "Which single punctuation mark (**colon** or **semicolon**) best replaces **[?]** to link these two balanced, independent antithetical clauses without a conjunction?\n> *'Cynics measure a library by its ticket receipts **[?]** citizens measure it by the minds it unlocks.'*",
          answer: {
            type: "text",
            accept: ["semicolon", "semi-colon", ";"],
            display: "semicolon",
          },
          traps: [
            {
              spec: { type: "text", accept: ["comma", ","] },
              feedback: "A bare comma between two independent clauses creates a comma splice! Use a 'semicolon' to balance parallel antithesis.",
            },
          ],
          hints: [
            "Notice the symmetrical parallel contrast between 'Cynics measure...' and 'citizens measure...'.",
            "Which mark acts as an equal fulcrum between twin independent clauses?",
          ],
          solution: [
            "A **semicolon** (`;`) joins two closely balanced, independent antithetical clauses without a coordinating conjunction.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "When an authority disguises closing four community clinics behind bland jargon like *'recalibrating neighbourhood wellness touchpoints'*, what single term names that evasive, softening expression?",
          answer: {
            type: "text",
            accept: ["euphemism", "bureaucratic euphemism"],
            display: "euphemism",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dysphemism"] },
              feedback: "Dysphemism makes wording harsher; substituting mild, sterile jargon to hide unpleasant reality is 'euphemism'.",
            },
          ],
          hints: [
            "Think of sterile corporate phrasing designed to make harsh cuts sound gentle or positive.",
            "Starts with 'euphem-'.",
          ],
          solution: [
            "Substituting mild, abstract jargon to mask an harsh or unpopular action is **euphemism**.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q11",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "transforming-source-material",
          question:
            "Read this Section A stimulus extract:\n> *Source B (Youth Employment Briefing): '58% of entry-level creative internships in capital cities remain unpaid or expenses-only, excluding applicants without family housing support.'*\n\nTransform Source B into a **2–3 sentence opening hook** for a **broadsheet opinion article** arguing against unpaid internships. Include a **headline** and avoid verbatim 4-word copying or citing 'Source B'.",
          modelAnswer:
            "PRICED OUT BEFORE DAY ONE\n\nWhen nearly three in five junior creative placements offer nothing beyond travel fare, talent is quietly filtered by parental wealth rather than merit. What ought to be an open ladder into journalism and design has hardened into a private tollbooth: unless young graduates inherit a spare city bedroom, the studio door stays bolted.",
          markScheme: [
            {
              point: "Provides an authentic broadsheet headline framing the issue",
              keywords: ["priced", "tollbooth", "unpaid", "ambition", "talent", "merit", "locked", "internship", "privilege"],
            },
            {
              point: "Transforms the 58% statistic into natural prose scale (e.g. 'nearly three in five' / 'over half') without lifting 4+ words or citing 'Source B'",
              keywords: ["three in five", "over half", "more than half", "majority", "nearly sixty"],
            },
            {
              point: "Reframes the housing/financial barrier in fresh, active vocabulary (e.g. parental wealth, rent, postcode, privilege)",
              keywords: ["wealth", "affluent", "bedroom", "rent", "background", "bank", "privilege", "afford"],
            },
            {
              point: "Deploys a deliberate rhetorical or syntactic craft choice (metaphor, colon reveal, antithesis, or hypophora)",
              keywords: ["ladder", "tollbooth", "bolted", "rather than", "not by", ":"],
            },
          ],
          hints: [
            "Start with a crisp uppercase or bolded broadsheet headline — never write 'Dear Sir' or 'In Source B'.",
            "Convert '58%' into human scale ('nearly three in five' or 'more than half') and use a fresh metaphor or colon.",
          ],
          commonError: "Copying '58% of entry-level creative internships in capital cities' word-for-word from the prompt.",
        },
        {
          id: "lang-p2-directed-p1-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "adapting-form-audience-purpose",
          question:
            "Task: *Write the opening salutation, introductory paragraph, and closing sign-off of a formal letter to your named headteacher, Mrs Alverez, proposing that the school canteen eliminate single-use plastic cutlery.*",
          modelAnswer:
            "Dear Mrs Alverez,\n\nEvery lunchtime our dining hall discards hundreds of brittle plastic forks after ten minutes of use — a habit out of step with our school's proud environmental ethos. Were we to invest in durable stainless-steel cutlery alongside a simple return tray, our campus would slash daily waste while modelling responsible stewardship for every year group.\n\nYours sincerely,\nVanishree Menon",
          markScheme: [
            {
              point: "Uses accurate named salutation ('Dear Mrs Alverez,')",
              keywords: ["dear mrs alverez"],
            },
            {
              point: "Matches named salutation with the exact sign-off 'Yours sincerely'",
              keywords: ["yours sincerely"],
            },
            {
              point: "Establishes measured, respectful governor/headteacher register (e.g. modal verbs, subjunctive 'Were we to', institutional ethos)",
              keywords: ["were we", "would", "ethos", "stewardship", "campus", "urge", "propose", "sustainable"],
            },
            {
              point: "Presents a concrete problem-to-solution case for reusable alternatives",
              keywords: ["reusable", "stainless", "metal", "durable", "waste", "landfill", "discard"],
            },
          ],
          hints: [
            "Check the recipient's name ('Mrs Alverez') and match your complimentary close using the no-two-S's rule.",
            "Keep your tone courteous and constructive — link the proposal to the school's shared values.",
          ],
          commonError: "Signing off 'Yours faithfully' despite addressing 'Dear Mrs Alverez' by name.",
        },
        {
          id: "lang-p2-directed-p1-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "cohesive-discourse-counterargument",
          question:
            "Write a **4–5 sentence preemptive steelman concession-and-rebuttal paragraph** for a speech arguing that **city museums should remain free of admission charges**, addressing the council's concern over rising heating and staffing bills.",
          modelAnswer:
            "Admittedly, museum directors confront spiralling energy tariffs and conservation salaries that strain municipal ledgers to breaking point. Nobody in this hall pretends historic roofs repair themselves for free. Yet erecting a fifteen-pound turnstile at the entrance is a textbook false economy: ticket barriers deter local school families first, shrinking footfall, civic donations, and the very cultural literacy a public gallery exists to nurture.",
          markScheme: [
            {
              point: "Opens with an explicit concessive discourse marker ('Admittedly', 'Granted', 'Undeniably')",
              keywords: ["admittedly", "granted", "undeniably", "certainly", "of course", "fair to"],
            },
            {
              point: "Steelmans the financial/operational pressure fairly without caricature",
              keywords: ["energy", "salaries", "ledgers", "maintenance", "overheads", "budgets", "upkeep", "fiscal"],
            },
            {
              point: "Executes a sharp adversative pivot ('Yet', 'However', 'Nevertheless')",
              keywords: ["yet", "however", "nevertheless", "nonetheless", "false economy"],
            },
            {
              point: "Dismantles the fee by showing downstream harm to equitable access or long-term public value",
              keywords: ["turnstile", "barriers", "deter", "exclude", "families", "footfall", "equity", "public"],
            },
          ],
          hints: [
            "Grant the council's budget headache honestly first ('Admittedly...'), then pivot sharply ('Yet...').",
            "Explain *why* ticket barriers backfire on the museum's core public mission.",
          ],
          commonError: "Mocking council treasurers as 'greedy villains' instead of steelmanning genuine upkeep costs.",
        },
        {
          id: "lang-p2-directed-p1-q14",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Write a **3–4 sentence speech climax** persuading fellow Year 11 students to volunteer two hours a month tutoring younger primary readers. Deliberately deploy **hypophora**, **antithesis**, and an **escalating tricolon**.",
          modelAnswer:
            "What do two Saturday hours actually cost us? Barely the length of a streamed film — yet to a hesitant seven-year-old, that hour unlocks every page on the shelf. Tutoring is not an obligation stamped onto a school prefect form; it is a gift of confidence passed from one generation to the next. Step forward this term to spark a child's fluency, strengthen our neighbourhood primaries, and build a community where nobody reads alone.",
          markScheme: [
            {
              point: "Deploys clear hypophora (poses a question and immediately answers it)",
              keywords: ["?", "barely", "hardly", "nothing more", "merely"],
            },
            {
              point: "Includes balanced antithesis ('not X; it is Y' or 'not X, but Y')",
              keywords: ["not a", "not an", "not merely", "rather", "; it is", "but a"],
            },
            {
              point: "Builds an escalating three-part tricolon widening from child to school/community",
              keywords: ["fluency", "confidence", "community", "neighbourhood", "generation", "spark", "strengthen"],
            },
            {
              point: "Sustains inclusive live-speech register ('us', 'our', direct imperative call to action)",
              keywords: ["cost us", "our neighbourhood", "our school", "inclusive", "pronoun", "collective", "step forward", "join", "volunteer"],
            },
          ],
          hints: [
            "Open with a question followed immediately by a crisp answer (hypophora).",
            "Follow with a 'not X; it is Y' antithesis, then close on three escalating verb phrases.",
          ],
        },
        {
          id: "lang-p2-directed-p1-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "stylistic-polish-spag-marks",
          question:
            "Rewrite and elevate this flawed draft extract intended for a **ministerial policy essay** so that it achieves **Grade-9 register and punctuation accuracy** (eliminating comma splices, slang, and contractions):\n> *'Cutting rural train lines is a dumb move, people cant get to hospital appointments or college, they just end up stuck at home which wrecks local towns.'*",
          modelAnswer:
            "Severing rural branch lines is a deeply short-sighted policy: residents without private vehicles cannot reach specialist hospital clinics or sixth-form colleges reliably. Far from trimming waste, isolation hollows out market towns — stranding elderly patients, narrowing youth opportunity, and accelerating regional decline.",
          markScheme: [
            {
              point: "Eliminates slang ('dumb move', 'stuck') in favour of authoritative ministerial lexis ('short-sighted', 'severing', 'stranding', 'isolation')",
              keywords: ["short-sighted", "shortsighted", "severing", "curtailing", "isolation", "stranding", "inequitable"],
            },
            {
              point: "Expands informal contraction ('cant' -> 'cannot' / 'are unable to')",
              keywords: ["cannot", "unable to"],
            },
            {
              point: "Replaces comma splices with architectural punctuation (colon, semicolon, or em-dash)",
              keywords: [":", ";", "—", "-"],
            },
            {
              point: "Develops precise socioeconomic consequences for healthcare, education, and regional vitality",
              keywords: ["clinics", "colleges", "opportunity", "decline", "vitality", "regional", "elderly"],
            },
          ],
          hints: [
            "Replace 'dumb move' and 'cant' immediately with formal uncontracted Standard English.",
            "Promote the spliced commas into a colon (spotlight explanation) and an em-dash or semicolon.",
          ],
        },
      ],
    },
    {
      id: "lang-p2-directed-p2",
      title: "Practice Paper 2: Persuasive Architecture, Tone Modulation & Technical Polish",
      questions: [
        {
          id: "lang-p2-directed-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "adapting-form-audience-purpose",
          question:
            "You open a formal letter to a named charity director with *'Dear Ms Okonkwo,'*. Write the exact two-word complimentary close required at the foot of the letter.",
          answer: {
            type: "text",
            accept: ["Yours sincerely", "yours sincerely"],
            display: "Yours sincerely",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Yours faithfully"] },
              feedback: "Because 'Dear Ms Okonkwo' names the recipient, close with 'Yours sincerely'.",
            },
          ],
          hints: [
            "Named recipient ('Ms Okonkwo') → apply the never-two-S's rule.",
          ],
          solution: [
            "Letters addressed to a named person (*Dear Ms Okonkwo*) always close with **Yours sincerely**.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q02",
          kind: "short",
          commonError:
            "Answering 'headline' or 'strapline' — those sit at the top of the article; section titles within the body are subheadings.",
          traps: [
            {
              spec: { type: "text", accept: ["headline", "headlines", "strapline", "standfirst"] },
              feedback: "Headlines and straplines sit at the top. Short section titles within the body are subheadings.",
            },
          ],
          difficulty: "warmup",
          guideRef: "adapting-form-audience-purpose",
          question:
            "What single journalism/structural term names the **short bolded section titles** used every few paragraphs inside a feature article to signpost major topic shifts?",
          answer: {
            type: "text",
            accept: ["subheading", "subheadings", "sub-heading", "sub-headings", "crosshead"],
            display: "subheading",
          },
          hints: [
            "Unlike the single strapline under the main headline, these appear *between* sections down the article.",
          ],
          solution: [
            "**Subheadings** (or **crossheads**) divide a feature or broadsheet article into clear thematic stages.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Which single Aristotelian term (**ethos**, **logos**, or **pathos**) names persuasive appeal rooted in **human empathy, lived vulnerability, and emotional stakes**?",
          answer: {
            type: "text",
            accept: ["pathos"],
            display: "pathos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["bathos"] },
              feedback: "'Bathos' is sudden comic anticlimax; emotional resonance and human empathy is 'pathos'.",
            },
          ],
          hints: [
            "Shares its Greek root with 'empathy' and 'sympathy' (be careful not to type 'bathos'!).",
          ],
          solution: [
            "**Pathos** engages the audience's emotional imagination and moral sympathy through concrete human detail.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q04",
          kind: "short",
          commonError:
            "Calling it a 'rhetorical question' — a rhetorical question expects no answer, but here the writer asks and then answers it, which is hypophora.",
          traps: [
            {
              spec: { type: "text", accept: ["rhetorical question", "rhetorical"] },
              feedback: "A rhetorical question is left unanswered. Asking then immediately answering is hypophora.",
            },
          ],
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Name the classical rhetorical device used here:\n> *'Can a city pave over its floodplains and expect dry basements in November? Experience answers in three feet of muddy water.'*",
          answer: {
            type: "text",
            accept: ["hypophora", "anthypophora"],
            display: "hypophora",
          },
          hints: [
            "Notice that the writer poses a pointed question and does NOT leave it unanswered.",
            "Supplying your own immediate answer in the next clause is a nine-letter Greek term starting with 'hypo-'.",
          ],
          solution: [
            "Asking a question and immediately supplying your own decisive answer is **hypophora**.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "What literary/satirical term names an **abrupt comic drop** from lofty, pretentious grandeur down to trivial everyday detail — as in:\n> *'The committee pledged to defend human civilisation, planetary survival, and executive biscuit budgets.'*",
          answer: {
            type: "text",
            accept: ["bathos", "anticlimax", "anti-climax"],
            display: "bathos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathos"] },
              feedback: "'Pathos' evokes genuine emotion; a sudden satirical drop to triviality ('biscuit budgets') is 'bathos'.",
            },
          ],
          hints: [
            "Notice how the third item ('executive biscuit budgets') punctures the grandiosity of the first two.",
            "Starts with 'bath-' (distinct from 'pathos'!).",
          ],
          solution: [
            "**Bathos** deflates pompous rhetoric by dropping suddenly from the sublime to the ridiculously trivial.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "stylistic-polish-spag-marks",
          question:
            "Which single punctuation mark (**colon** or **semicolon**) best replaces **[?]** after this complete clause to spotlight a stark two-word reveal?\n> *'After spending millions rebranding its customer charter, the airline delivered one unmistakable product **[?]** stranded passengers.'*",
          answer: {
            type: "text",
            accept: ["colon", ":"],
            display: "colon",
          },
          traps: [
            {
              spec: { type: "text", accept: ["semicolon", ";"] },
              feedback: "'stranded passengers' is a two-word noun phrase, not a full independent clause — so use a 'colon' for the reveal, never a semicolon!",
            },
          ],
          hints: [
            "Look at what follows [?]: 'stranded passengers' is a punchy noun phrase, NOT a full independent clause.",
            "Which mark follows a full clause to spotlight a short noun-phrase reveal?",
          ],
          solution: [
            "Because *'stranded passengers'* is a noun-phrase reveal rather than a full clause, a **colon** (`:`) is strictly required.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q07",
          kind: "short",
          commonError:
            "Answering 'conditional' or 'imperative'; the 'Were…' / 'that every tenant be' forms are the subjunctive mood.",
          traps: [
            {
              spec: { type: "text", accept: ["conditional", "imperative", "indicative"] },
              feedback: "The forms 'Were the Board…' and 'be consulted' are the subjunctive mood.",
            },
          ],
          difficulty: "core",
          guideRef: "stylistic-polish-spag-marks",
          question:
            "What grammatical mood is exemplified by the formal inverted opening *'**Were** the Board to abolish music bursaries…'* or *'It is vital that every tenant **be** consulted'*?",
          answer: {
            type: "text",
            accept: ["subjunctive", "subjunctive mood", "the subjunctive"],
            display: "subjunctive",
          },
          hints: [
            "It expresses hypothetical conditions ('Were X to...') or formal necessity ('that every tenant be...').",
            "Starts with 'subjunct-'.",
          ],
          solution: [
            "Hypothetical *'Were X to…'* and mandative *'that Y be…'* employ the formal **subjunctive** mood.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "rhetorical-precision-ethos-logos-pathos",
          question:
            "Whereas *anaphora* repeats words at the START of successive clauses, what classical rhetorical term names repeating the exact same phrase at the **END** of successive clauses?\n> *'They promised transparency **behind closed doors**; they drafted cuts **behind closed doors**; they voted **behind closed doors**.'*",
          answer: {
            type: "text",
            accept: ["epistrophe", "epiphora"],
            display: "epistrophe",
          },
          traps: [
            {
              spec: { type: "text", accept: ["anaphora"] },
              feedback: "Anaphora repeats clause beginnings; repeating the ending phrase ('behind closed doors') is 'epistrophe' (or 'epiphora').",
            },
          ],
          hints: [
            "Look at the hammering repetition landing at the very **end** of all three clauses.",
            "Starts with 'epi-' ('epistrophe' or 'epiphora').",
          ],
          solution: [
            "Repeating a word or phrase at the **end** of successive clauses for cumulative indictment is **epistrophe** (also called **epiphora**).",
          ],
        },
        {
          id: "lang-p2-directed-p2-q09",
          kind: "short",
          commonError:
            "Answering 'chronological' or 'linear'; returning to the opening image at the end is a cyclical structure.",
          traps: [
            {
              spec: { type: "text", accept: ["chronological", "linear"] },
              feedback: "Returning at the end to the opening image creates a cyclical structure.",
            },
          ],
          difficulty: "challenge",
          guideRef: "cohesive-discourse-counterargument",
          question:
            "When a final paragraph returns deliberately to the **exact concrete image or motif** introduced in Paragraph 1 (now deepened by the essay's argument), what structural framing technique is being used? (Give the single key adjective ending in *-al*, e.g. '___ structure').",
          answer: {
            type: "text",
            accept: ["cyclical", "cyclical structure", "cyclical framing", "circular"],
            display: "cyclical",
          },
          hints: [
            "Compare Paragraph 1 and Paragraph 5: the ending loops back to transform the opening hook.",
            "Think of the adjective formed from 'cycle' ending in '-al'.",
            "Examiners praise a '___ structure' or '___ callback'.",
          ],
          solution: [
            "Revisiting and transforming the opening hook image in the conclusion creates a **cyclical** structure.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "cohesive-discourse-counterargument",
          question:
            "Instead of attacking a weak, exaggerated caricature (*strawman*), what single compound word names **presenting the strongest, fairest version of your opponent's case** before rebutting it?",
          answer: {
            type: "text",
            accept: ["steelman", "steelmanning", "steel-man", "steel-manning"],
            display: "steelmanning",
          },
          traps: [
            {
              spec: { type: "text", accept: ["strawman", "strawmanning"] },
              feedback: "A 'strawman' distorts an opponent's point to make it weak; building up their strongest point fairly is 'steelmanning'.",
            },
          ],
          hints: [
            "Contrast a flimsy 'strawman' caricature with its robust opposite.",
            "Replace 'straw' with a tough industrial alloy.",
            "Type 'steelman' or 'steelmanning'.",
          ],
          solution: [
            "Articulating the most robust version of a counter-argument before dismantling it is **steelmanning**.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q11",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "adapting-form-audience-purpose",
          question:
            "Read these two raw facts from a Section A stimulus pack on urban tree canopies:\n- *Fact 1: Tree-lined streets lower summer tarmac temperatures by up to 6°C.*\n- *Fact 2: Mature street trees absorb thousands of litres of storm-water runoff annually.*\n\nTransform both facts into a **3–4 sentence live town-hall speech opening** addressed to residents and councillors, arguing against felling mature plane trees.",
          modelAnswer:
            "Neighbours and councillors — look down Elm Avenue before the chainsaws arrive, and ask what those century-old plane trees quietly do for us free of charge. Every August their canopy cools scorching pavements by nearly six degrees; every autumn downpour their roots drink thousands of litres of floodwater before it reaches our cellars. Felling living flood defences to tidy a kerbsheet is scarcely prudent engineering.",
          markScheme: [
            {
              point: "Opens with direct live-room address appropriate to a town-hall speech",
              keywords: ["neighbours", "councillors", "residents", "friends", "tonight", "hall"],
            },
            {
              point: "Re-forges the cooling benefit in vivid, non-lifted phrasing",
              keywords: ["cools", "cooling", "shade", "scorching", "six degrees", "heat"],
            },
            {
              point: "Re-forges the flood/drainage benefit into active human consequences",
              keywords: ["flood", "roots", "downpour", "cellars", "drains", "drink", "soak"],
            },
            {
              point: "Deploys spoken cadence or rhetorical craft (inclusive 'us/our', semicolon balance, litotes, or imperative)",
              keywords: ["for us", "our cellars", "our streets", "inclusive", ";", "scarcely", "ask", "look"],
            },
          ],
          hints: [
            "Greet the town-hall audience directly in line 1 and use inclusive 'our/us'.",
            "Turn passive 'tarmac temperatures' and 'storm-water runoff' into active verbs protecting homes.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "cohesive-discourse-counterargument",
          question:
            "Paragraph 2 of a persuasive essay ends with the sentence:\n> *'…treating teenager leisure solely as a policing problem rather than a developmental need.'*\n\nWrite a **3–4 sentence Paragraph 3** that opens with a **lexical echo transition** (zero *'Secondly / Furthermore'*) and develops what positive community youth spaces provide.",
          modelAnswer:
            "A genuine developmental need cannot be met by CCTV cameras and dispersal orders alone: sixteen-year-olds require spaces where adult mentorship replaces suspicion. Walk into any thriving evening youth workshop — whether a boxing gym, a rehearsal studio, or a coding lab — and idle energy transforms rapidly into disciplined craft. Investing in open doors builds civic belonging long before anti-social behaviour ever takes root.",
          markScheme: [
            {
              point: "Echoes 'developmental need' / 'suspicion' / 'policing' directly from Paragraph 2's ending without 'Secondly/Furthermore'",
              keywords: ["developmental", "policing", "suspicion", "need"],
            },
            {
              point: "Contrasts punitive surveillance against constructive provision",
              keywords: ["cctv", "mentorship", "trust", "punitive", "barriers", "replaces"],
            },
            {
              point: "Supplies concrete examples of purposeful youth facilities (workshops, studios, sports, labs)",
              keywords: ["gym", "studio", "workshop", "music", "sport", "coding", "club"],
            },
            {
              point: "Uses high-impact punctuation (colon, paired dashes, or semicolon) cleanly",
              keywords: [":", "—", ";"],
            },
          ],
          hints: [
            "Pick up the exact phrase 'developmental need' in your opening clause.",
            "Include paired parenthetical dashes listing three concrete spaces.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "transforming-source-material",
          question:
            "Read this opposing claim from a Section A stimulus text:\n> *Source D (Haulage Lobbyist): 'Restricting heavy lorries during school drop-off windows (8:15–9:00 a.m.) will delay supermarket deliveries by forty minutes.'*\n\nWrite **3–4 sentences** for a **formal letter to the Transport Minister** that **concedes** this logistical concern fairly and **rebuts** it on child-safety grounds.",
          modelAnswer:
            "Granted, freight operators face tight urban schedules, and pausing heavy goods access for forty-five morning minutes requires supermarket depots to adjust unloading slots. Yet weighing a brief warehouse reschedule against the physical safety of primary schoolchildren crossing narrow junctions admits only one ethical answer: supply chains can adapt their clocks, whereas a child struck at a crowded kerb has no second chance.",
          markScheme: [
            {
              point: "Uses a formal concessive marker ('Granted', 'Admittedly', 'Undeniably') to acknowledge freight scheduling fairly",
              keywords: ["granted", "admittedly", "undeniably", "recognise", "freight", "depots", "schedules"],
            },
            {
              point: "Transforms the time window naturally without citing 'Source D' or copying 4+ word runs",
              keywords: ["forty-five", "morning", "unloading", "reschedule", "warehouse"],
            },
            {
              point: "Pivots sharply ('Yet', 'However') to contrast commercial convenience against child safety",
              keywords: ["yet", "however", "weighing", "ethical", "safety"],
            },
            {
              point: "Closes with a colon or antithesis sharpening moral priority",
              keywords: [":", "whereas", "adapt", "second chance", "irreplaceable"],
            },
          ],
          hints: [
            "Never mention 'Source D' — refer to 'freight operators' or 'logistics managers'.",
            "Contrast replaceable timetable minutes against irreplaceable human life.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q14",
          kind: "written",
          difficulty: "challenge",
          marks: 5,
          guideRef: "cohesive-discourse-counterargument",
          question:
            "An article defending local independent bookshops opened in Paragraph 1 with:\n> *'On rainy Thursdays after school, the brass bell above Mr Sato's corner bookshop rang for anyone seeking shelter and a story — even teenagers with only bus fare in their pockets.'*\n\nWrite a **4–5 sentence concluding paragraph** executing a **cyclical callback** to that opening image while landing a wider cultural warning.",
          modelAnswer:
            "Algorithms can recommend what we bought yesterday, yet no warehouse conveyor belt ever welcomed an undecided reader out of the rain or pressed an unexpected novel into curious hands. Once high-street rents silence that brass bell above the corner door, a town loses far more than a retail unit: it surrenders a quiet sanctuary of serendipity, conversation, and shared neighbourhood memory. Whether such thresholds survive the decade depends on where we choose to spend our Saturdays now.",
          markScheme: [
            {
              point: "Executes an explicit cyclical callback to the brass bell, rainy doorway, or corner shop motif",
              keywords: ["brass bell", "bell", "rain", "corner", "threshold", "shelter"],
            },
            {
              point: "Contrasts impersonal algorithmic retail against human curation and serendipity",
              keywords: ["algorithm", "warehouse", "conveyor", "curious", "serendipity", "unexpected", "human"],
            },
            {
              point: "Elevates the shop from mere commerce to civic/cultural sanctuary via antithesis or colon",
              keywords: ["more than", "sanctuary", "memory", "community", ":"],
            },
            {
              point: "Lands a forward-looking call to reader responsibility without saying 'In conclusion'",
              keywords: ["choose", "depends", "decade", "survive", "our"],
            },
            {
              point: "Maintains assured broadsheet register and escalating rhythm",
              keywords: ["conversation", "surrenders", "high-street", "thresholds", "undecided"],
            },
          ],
          hints: [
            "Bring back the 'brass bell' and 'rain' from Paragraph 1, now weighted with cultural meaning.",
            "Ban 'In conclusion' — contrast warehouse algorithms against human serendipity and end on reader agency.",
          ],
        },
        {
          id: "lang-p2-directed-p2-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "stylistic-polish-spag-marks",
          question:
            "Write a **3–4 sentence opening** to a **formal letter to a Hospital Trust Board** (*Dear Sir or Madam,* — opening lines only) arguing against doubling visitor car-park charges. Deploy the **formal subjunctive**, **paired parenthetical dashes**, and a **short impact sentence**.",
          modelAnswer:
            "Dear Sir or Madam,\n\nWere the Trust to double hospital parking tariffs this winter, families keeping bedside vigils alongside critically ill relatives would face an indefensible tax on compassion. An anxious spouse visiting an intensive-care ward — already juggling unpaid leave and sleepless nights — does not park out of convenience. Grief should never be monetised.",
          markScheme: [
            {
              point: "Uses the formal inverted or mandative subjunctive ('Were the Trust to...', 'that the Board reconsider')",
              keywords: ["were the", "be reconsidered", "lest"],
            },
            {
              point: "Embeds paired parenthetical em-dashes enclosing a humanising qualification",
              keywords: ["—", " - "],
            },
            {
              point: "Lands a controlled 3–6 word short sentence for judicial impact",
              keywords: ["monetised", "tax", "compassion", "indefensible", "choice"],
            },
            {
              point: "Calibrates dignified, authoritative register suited to a Hospital Trust Board",
              keywords: ["tariffs", "vigils", "relatives", "intensive", "ward", "bedside"],
            },
          ],
          hints: [
            "Open after 'Dear Sir or Madam,' with 'Were the Trust to double...'.",
            "Insert a humanising aside inside '— ... —' and snap shut with a crisp four- or five-word final sentence.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "lang-p2-directed-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "transforming-source-material",
      question:
        "Read two Section A stimulus snippets on night-shift work:\n- *Source A (1892 Bakery Inspector's Log): 'Apprentices aged fifteen laboured beneath cellar gas-jets from midnight till dawn, emerging chalk-faced into daylight.'*\n- *Source E (2024 Gig-Economy Report): '31% of overnight warehouse pickers log sixty-hour weeks tracked by wrist-scanner quotas.'*\n\nWhich Section B broadsheet sentence achieves **Grade-9 cross-source synthesis and transformation** without lifting or breaking genre?",
      options: [
        "Source A talks about 1892 cellar gas-jets, whereas Source E shows 31% of warehouse pickers use wrist-scanners in 2024.",
        "Apprentices aged fifteen laboured beneath cellar gas-jets from midnight till dawn, and 31% of overnight warehouse pickers log sixty-hour weeks.",
        "Over a century after Victorian reformers condemned midnight cellars that turned teenage bakers pale, nearly a third of modern night-warehouse staff still endure sixty-hour weeks — policed not by gaslight foremen, but by algorithmic wrist-monitors.",
        "Victorian bakeries and modern warehouses are 100% identical in every single legal detail.",
      ],
      answerIndex: 2,
      hints: [
        "Eliminate 'Source A / Source E' meta-references, verbatim 4-word copies, and crude over-generalisation.",
        "Notice how a Grade-9 columnist bridges historical continuity and technological shift inside one sentence.",
        "Look for translated proportions ('nearly a third') + sharp antithesis ('not by X, but by Y').",
      ],
      explanation:
        "Fusing the historical precedent and modern statistic inside one overarching arc — while translating *31%* to *'nearly a third'* and deploying antithesis (*'not by gaslight foremen, but by algorithmic wrist-monitors'*) — exemplifies effortless multi-source transformation.",
    },
    {
      id: "lang-p2-directed-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Read this aphoristic strapline:\n> *'When examination boards value only what is easily measured, schools end up measuring only what is easily valued.'*\n\nName the exact classical figure of rhetoric structuring this **AB → BA** inversion.",
      answer: {
        type: "text",
        accept: ["chiasmus", "antimetabole"],
        display: "chiasmus",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anaphora"] },
          feedback: "Anaphora repeats clause beginnings in identical order; reversing [value → measured] into [measuring → valued] is 'chiasmus'.",
        },
      ],
      hints: [
        "Track the pair of verbs across the comma: [value ... measured] flips into [measuring ... valued].",
        "Plot them vertically and they form a diagonal cross.",
        "Starts with 'chi-' (named after the Greek letter Χ).",
      ],
      solution: [
        "Inverting the grammatical and lexical pairing (*value / measured* → *measuring / valued*) in mirror symmetry is **chiasmus** (or **antimetabole**).",
      ],
    },
    {
      id: "lang-p2-directed-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "stylistic-polish-spag-marks",
      question:
        "Examine four candidate attempts to punctuate a concession-and-rebuttal pivot. Which sentence is **100% grammatically watertight** under strict broadsheet style rules?",
      options: [
        "Admittedly, battery buses cost more upfront, however, diesel fumes cost hospitals millions.",
        "Admittedly; battery buses cost more upfront, yet diesel fumes cost hospitals millions.",
        "Admittedly, battery buses cost more upfront; diesel fumes, however, exact a far steeper toll on paediatric wards.",
        "Although battery buses cost more upfront; diesel fumes exact a steeper toll.",
      ],
      answerIndex: 2,
      hints: [
        "Remember: 'however' is a conjunctive adverb, NOT a coordinating conjunction — placing a comma before 'however' between two main clauses creates a comma splice!",
        "Also check that neither side of a semicolon is a single adverb ('Admittedly;') or a dependent 'Although' clause.",
        "Find the sentence where a semicolon cleanly separates two complete independent clauses and 'however' is tucked parenthetically inside the second clause.",
      ],
      explanation:
        "*', however,'* between two independent clauses is one of the commonest hidden **comma splices** at IGCSE! Placing a **semicolon** between the two complete clauses and tucking *', however,'* after *'diesel fumes'* is 100% textbook broadsheet punctuation.",
    },
    {
      id: "lang-p2-directed-ch-q04",
      kind: "short",
      commonError:
        "Answering 'rebuttal' or 'counter-argument' — these are general; the Greek term for answering an objection before it is raised is prolepsis.",
      traps: [
        {
          spec: { type: "text", accept: ["rebuttal", "counter-argument", "counterargument", "refutation"] },
          feedback: "Too general — the Greek term for pre-empting an objection is prolepsis.",
        },
      ],
      difficulty: "challenge",
      guideRef: "cohesive-discourse-counterargument",
      question:
        "What classical Greek rhetorical term (also taught alongside *concession*) specifically names **anticipating and answering an opponent's objection BEFORE they can raise it**?",
      answer: {
        type: "text",
        accept: ["prolepsis", "preemptive rebuttal", "concession"],
        display: "prolepsis",
      },
      hints: [
        "In narrative it means flash-forward; in rhetoric it means 'striking first' by voicing and refuting a counter-argument preemptively.",
        "Begins with 'prolep-'.",
        "Ends in '-sis' (like antithesis and ellipsis).",
      ],
      solution: [
        "Anticipating an audience's strongest unspoken objection and neutralising it in advance is **prolepsis** (preemptive rebuttal).",
      ],
    },
    {
      id: "lang-p2-directed-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Why does switching from **agentless passive voice** (*'Mistakes were incurred during river-sewage monitoring'*) to **dynamic active voice** (*'Water executives ignored three hundred sewage-spill alarms'*) transform persuasive impact?",
      options: [
        "Passive voice is grammatically illegal in English sentences",
        "Active syntax restores explicit human agency and moral culpability to the grammatical subject, stripping away bureaucratic evasion",
        "Active voice removes all verbs so the sentence sounds calmer",
        "Passive voice always sounds angrier and more populist than active voice",
      ],
      answerIndex: 1,
      hints: [
        "Ask 'WHO did it?' in 'Mistakes were incurred' — the culprit has vanished from the sentence!",
        "Now ask who occupies the grammatical subject slot in 'Water executives ignored...'.",
        "Connect grammatical agency to moral accountability.",
      ],
      explanation:
        "Institutions hide behind **agentless passives** to blur blame; restoring a concrete human subject + transitive active verb (*'executives ignored'*) pins responsibility squarely where it belongs.",
    },
    {
      id: "lang-p2-directed-ch-q06",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "adapting-form-audience-purpose",
      question:
        "Read this Section A stimulus data:\n> *Source C: 'Teenage smartphone screen-time averages 4.8 hours daily; schools piloting phone-free locker pouches reported a 34% drop in corridor bullying incidents and louder lunchtime conversation.'*\n\nWrite a **5–6 sentence persuasive extract** from a **letter to your School Student Council** (*Dear Student Council Representatives,* — body extract only) arguing **IN FAVOUR** of trialling magnetic pouches, calibrating register so you persuade sceptical peers rather than lecturing them like an angry parent.",
      modelAnswer:
        "Nobody sitting Year 11 mocks needs another adult sermon demonising technology; our phones hold our playlists, our group chats, and our bus passes. Yet handing nearly five waking hours every day to algorithmic feeds quietly steals the focus we need most. Schools trialling simple magnetic pouches have seen corridor harassment fall by more than a third while dining halls come alive again with genuine face-to-face laughter. Pouching devices between first bell and three-thirty is not a punishment imposed on us; it is six hours of breathing space reclaimed for ourselves. Let us lead a four-week trial on our own terms before habits harden further.",
      markScheme: [
        {
          point: "Establishes authentic peer-to-peer ethos (rejects patronising adult lecturing, uses inclusive 'we/our/us')",
          keywords: ["sermon", "adult", "our phones", "our own", "let us", "ourselves", "inclusive"],
        },
        {
          point: "Transforms '4.8 hours' naturally (e.g. 'nearly five hours') without verbatim lifting or citing 'Source C'",
          keywords: ["five hours", "five waking", "nearly five", "almost five"],
        },
        {
          point: "Transforms the '34% drop' and social benefit into fresh phrasing ('more than a third', 'a third', 'face-to-face')",
          keywords: ["third", "harassment", "laughter", "face-to-face", "alive"],
        },
        {
          point: "Reframes pouches via antithesis ('not a punishment...; it is breathing space / freedom')",
          keywords: ["not a punishment", "reclaimed", "breathing space", "sanctuary", "rather", "; it is"],
        },
        {
          point: "Ends with collaborative student-led agency (proposing a trial/pilot rather than top-down dictate)",
          keywords: ["trial", "pilot", "lead", "terms", "four-week"],
        },
      ],
      hints: [
        "If you scold fellow teenagers, they switch off! Start by validating why we value our phones ('Nobody needs an adult sermon...').",
        "Translate '4.8 hours' into 'nearly five hours' and '34%' into 'more than a third'.",
        "Use antithesis ('not a punishment; it is breathing space') and propose a student-owned trial.",
      ],
    },
    {
      id: "lang-p2-directed-ch-q07",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "rhetorical-precision-ethos-logos-pathos",
      question:
        "Write the **headline, one-sentence strapline, and opening 4-sentence hook + thesis paragraph** of a **broadsheet newspaper article** arguing that **compulsory financial literacy (taxes, mortgages, compound interest) belongs on every secondary timetable**. Deploy **hypophora**, an **escalating tricolon**, and a **colon or semicolon**.",
      modelAnswer:
        "FLUENT IN QUADRATICS, ILLITERATE IN RENT\nSchools drill sixteen-year-olds in abstract theorems while leaving them defenceless against predatory credit agreements.\n\nWhy can a bright school-leaver factorise a cubic polynomial in ninety seconds, yet freeze before a payslip tax code or an overdraft contract? Simply because our national curriculum still confuses academic prestige with everyday survival. Sending eighteen-year-olds into adulthood blind to compound interest invites preventable debt, widens generational wealth gaps, and hands high-interest lenders a captive market: financial fluency is no longer an optional enrichment module, but a basic civic shield.",
      markScheme: [
        {
          point: "Crafts an incisive broadsheet headline and distinct one-sentence strapline",
          keywords: ["illiterate", "fluent", "credit", "rent", "survival", "debt", "shield", "tax"],
        },
        {
          point: "Deploys clear hypophora (question posed and immediately answered)",
          keywords: ["?", "simply because", "hardly", "precisely because", "answer"],
        },
        {
          point: "Includes an escalating three-part tricolon tracing personal to systemic harm",
          keywords: ["debt", "wealth", "lenders", "gaps", "market"],
        },
        {
          point: "Uses a grammatically accurate colon or semicolon to anchor the thesis",
          keywords: [":", ";"],
        },
        {
          point: "Contrasts abstract classroom content against real-world financial vulnerability",
          keywords: ["polynomial", "theorems", "algebra", "payslip", "overdraft", "compound", "mortgage"],
        },
      ],
      hints: [
        "Open with a bold Headline + 1-line Strapline contrasting school maths/exams against real-life money traps.",
        "Use hypophora ('Why can a school-leaver X, yet Y? Simply because...') in sentences 1–2.",
        "Build a 3-limb tricolon of consequences followed by a colon reveal for your thesis.",
      ],
    },
    {
      id: "lang-p2-directed-ch-q08",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "stylistic-polish-spag-marks",
      question:
        "Write the **final 5-sentence peroration (closing paragraph) and sign-off** of a **formal letter to an unnamed Chief Planning Officer** (*opened earlier with 'Dear Sir or Madam,'*) opposing the demolition of a historic municipal market hall to build luxury flats. Include a **steelman concession**, **chiasmus or antithesis**, a **controlled short sentence**, and the **exact matching formal sign-off**.",
      modelAnswer:
        "Admittedly, every growing borough must expand housing stock, and derelict brownfield sites across our ring road cry out for sensible regeneration. Yet levelling a thriving century-old market hall does not cure a housing shortage; it strips modest family traders of their livelihood to build investment apartments most locals can never afford. Once Victorian ironwork falls beneath the wrecking ball, no developer's plaque brings back its soul. Heritage lost is never regained. I urge your committee to reject this application.\n\nYours faithfully,\nVanishree Menon",
      markScheme: [
        {
          point: "Includes a fair steelman concession acknowledging housing demand ('Admittedly...', 'Granted...')",
          keywords: ["admittedly", "granted", "housing", "brownfield", "regeneration"],
        },
        {
          point: "Deploys sharp antithesis or chiasmus across balanced clauses ('does not...; it strips...')",
          keywords: ["does not", "not cure", "; it", "livelihood", "afford"],
        },
        {
          point: "Lands a controlled 3–6 word short sentence for rhythmic finality",
          keywords: ["never regained", "irreplaceable", "reject this", "once gone"],
        },
        {
          point: "Sustains authoritative civic register appropriate to a Chief Planning Officer",
          keywords: ["committee", "application", "traders", "borough", "heritage", "urge"],
        },
        {
          point: "Matches unnamed 'Dear Sir or Madam' opening with exact 'Yours faithfully' sign-off",
          keywords: ["yours faithfully"],
        },
      ],
      hints: [
        "Acknowledge genuine housing need fairly ('Admittedly... brownfield sites...'), then pivot with 'Yet'.",
        "Include a semicolon antithesis + a crisp 4–5 word sentence ('Heritage lost is never regained.').",
        "Check the opening cue ('Dear Sir or Madam') → sign off strictly with 'Yours faithfully,'.",
      ],
    },
  ],
};

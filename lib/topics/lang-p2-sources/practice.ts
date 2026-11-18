import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "lang-p2-sources-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "decoding-multi-source-pack",
      strategy: "Use GAP-R triage on source headers",
      question:
        "What does the **P** in the **GAP-R** stimulus-pack triage protocol stand for on OxfordAQA Paper 2A?",
      options: [
        "Purpose (and vested interest / agenda)",
        "Paragraph length in words",
        "Phonetic transcription",
        "Past-tense conjugation",
      ],
      answerIndex: 0,
      explanation:
        "**GAP-R** stands for **Genre, Audience, Purpose (agenda/vested interest), and Register** — the four contextual anchors revealed by each extract's header and opening lines.",
      hints: [
        "Recall the four questions you ask every stimulus text before writing: form, reader, agenda, and formality.",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "comparing-rhetorical-methods",
      strategy: "Identify question-plus-immediate-answer",
      question:
        "Read this standalone extract from **Source B** (an editorial on youth apprenticeships):\n\n> *'Are vocational qualifications second-best? Tell that to the master civil engineers whose apprentices earn debt-free salaries at twenty-one.'*\n\nWhat single Greek rhetorical term names asking a question and **immediately answering it yourself**?",
      answer: {
        type: "text",
        accept: ["hypophora"],
        display: "hypophora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["rhetorical question"], display: "rhetorical question" },
          feedback: "A pure rhetorical question is left unanswered; answering your own question immediately is **hypophora**.",
        },
        {
          spec: { type: "text", accept: ["hyperbole"], display: "hyperbole" },
          feedback: "Watch the spelling and meaning: **hyperbole** is exaggeration, whereas **hypophora** is question-and-answer!",
        },
      ],
      commonError: "Labelling every question mark 'a rhetorical question' even when the writer supplies an immediate rebuttal.",
      solution: [
        "Sentence 1 poses a sceptical question (*'Are vocational qualifications second-best?'*).",
        "Sentence 2 immediately answers and dismantles it (*'Tell that to…'*).",
        "Device: **hypophora**.",
      ],
      hints: [
        "Notice that the writer doesn't leave the question hanging — the very next sentence answers it.",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "synthesising-evidence-across-texts",
      strategy: "Pair micro-quotes inside conceptual synthesis",
      question:
        "Read these two extracts on high-street bank closures:\n\n> **Source A (Rural postmaster):** *'Elderly farmers who never owned a smartphone now face a forty-mile bus ride simply to deposit weekly takings.'*\n> **Source D (Consumer watchdog report):** *'Cash-dependent households suffer a measurable \"rural penalty\", losing an average of three hours per fortnight travelling to neighbouring towns.'*\n\nWhich statement synthesises both sources most effectively?",
      options: [
        "Source A is about farmers and buses, whereas Source D is about households and fortnights.",
        "Both texts demonstrate that branch closures disproportionately penalise cash-reliant rural residents with burdensome travel, pairing Source A's human portrait ('forty-mile bus ride') with Source D's systemic time metric ('three hours per fortnight').",
        "Source A supports closing rural banks, whereas Source D argues smartphones are free.",
        "Both writers rely on comic bathos to mock elderly bank customers.",
      ],
      answerIndex: 1,
      explanation:
        "Top-band synthesis fuses both extracts under a **shared conceptual claim** (disproportionate travel burden on cash-reliant country residents) supported by concise paired micro-quotations.",
      hints: [
        "Find the shared human/practical consequence proved by both extracts.",
        "Pick the option that integrates micro-quotes from both A and D under one analytical point.",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-rhetorical-methods",
      strategy: "Spot ironic understatement",
      question:
        "Read this standalone extract from **Source C** (a mountaineer's diary):\n\n> *'Waking at four thousand metres to find a snow leopard inspecting our porridge pan was not altogether conducive to a restful lie-in.'*\n\nWhat single rhetorical term names deliberate **ironic understatement** formed by negating the opposite (*'not altogether conducive'*)?",
      answer: {
        type: "text",
        accept: ["litotes", "understatement", "ironic understatement"],
        display: "litotes",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hyperbole"], display: "hyperbole" },
          feedback: "**Hyperbole** exaggerates; downplaying a lethal predator beside your tent as interrupting a 'lie-in' is **litotes** (understatement).",
        },
      ],
      commonError: "Confusing litotes (cool understatement) with hyperbole (dramatic exaggeration).",
      solution: [
        "Facing an apex predator at altitude is terrifying, yet the writer dryly calls it *'not altogether conducive to a restful lie-in'*.",
        "Negating the contrary for understated poise is **litotes**.",
      ],
      hints: [
        "Compare the real danger (a snow leopard in camp) against the mild phrase 'not altogether conducive to a restful lie-in'.",
        "Which classical figure of speech means ironic understatement?",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "comparing-writers-perspectives",
      strategy: "Distinguish sardonic irony from literal praise",
      question:
        "Read this extract from **Source E** (a columnist reviewing 'luxury' student accommodation):\n\n> *'For a mere three hundred pounds a week, undergraduates receive a windowless \"wellbeing pod\" spacious enough to inhale once — provided they exhale in the corridor.'*\n\nWhat is the writer's attitude toward the developer's marketing?",
      options: [
        "Genuine admiration for compact architectural ingenuity",
        "Sombre, elegiac grief for nineteenth-century university chapels",
        "Scathing, sardonic mockery exposing exploitative cramped housing disguised as 'wellbeing'",
        "Neutral, statistical reporting on national rent averages",
      ],
      answerIndex: 2,
      explanation:
        "Quoting the developer's buzzword *'\"wellbeing pod\"'* in scare quotes and pairing *'a mere three hundred pounds'* with comic claustrophobia (*'exhale in the corridor'*) delivers **scathing, sardonic mockery**.",
      hints: [
        "Notice the scare quotes around 'wellbeing pod' and the absurd image of exhaling in the corridor.",
        "Is 'a mere three hundred pounds' sincere or bitingly ironic?",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-writers-perspectives",
      strategy: "Name mixed, conflicted viewpoints precisely",
      question:
        "Read this standalone extract from **Source A** (a coastal fisherman's interview):\n\n> *'Offshore wind turbines pay my son's engineering wages, so I daren't curse them — yet watching steel towers fence off the horizon my grandfather sailed breaks something quiet inside me.'*\n\nWhich single Grade-9 adjective (starting with **a**) means holding **two conflicting feelings simultaneously** (gratitude mixed with loss), rather than not caring?",
      answer: {
        type: "text",
        accept: ["ambivalent", "ambivalence"],
        display: "ambivalent",
      },
      traps: [
        {
          spec: { type: "text", accept: ["indifferent", "apathetic"], display: "indifferent" },
          feedback: "**Indifferent** means not caring at all; caring deeply on *both* sides of a dilemma is **ambivalent**.",
        },
      ],
      commonError: "Writing 'indifferent' or 'confused' when a writer is thoughtfully torn between competing loyalties.",
      solution: [
        "The speaker values the economic lifeline (*'pay my son's engineering wages'*) yet mourns the altered seascape (*'breaks something quiet'*).",
        "Being pulled in two emotional directions at once is **ambivalent**.",
      ],
      hints: [
        "The prefix *ambi-* means 'both' (as in ambidextrous).",
        "Which word starting with 'amb-' means torn between two competing emotions?",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "high-tariff-comparative-paragraphs",
      strategy: "Sequence the WEAVE comparative blueprint",
      question:
        "In the **WEAVE** structure for high-tariff Paper 2A comparative paragraphs, what does the final **E** (*Evaluative 'Why' Clincher*) achieve?",
      options: [
        "It repeats your first sentence word for word so the examiner remembers your point",
        "It introduces a brand-new third source that wasn't named in the question",
        "It apologises in case the reader disagrees with your opinion",
        "It anchors the two writers' tonal and methodological divergence in their contrasting roles, audiences, eras, or vested interests",
      ],
      answerIndex: 3,
      explanation:
        "Ending a WEAVE paragraph by explaining **why** Writer A and Writer B diverge (e.g. frontline witness vs institutional auditor) converts descriptive comparison into top-band critical evaluation.",
      hints: [
        "Think about what unlocks Level 4 evaluation after you have zoomed into quotes from both texts.",
        "How do Genre, Audience, Role, and Era explain *why* two writers sound so different?",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-rhetorical-methods",
      strategy: "Spot comic/satirical anticlimax",
      question:
        "Read this standalone sentence from **Source D** (a satirical column on corporate away-days):\n\n> *'For forty-eight hours, executives meditated on fearless authenticity, radical planetary stewardship, and who stole Terry's labelled yoghurt from the communal fridge.'*\n\nWhat single literary/rhetorical term names this abrupt drop from lofty grandeur down to trivial everyday pettiness?",
      answer: {
        type: "text",
        accept: ["bathos", "anticlimax", "anti-climax"],
        display: "bathos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pathos"], display: "pathos" },
          feedback: "Careful with the initial consonant! **Pathos** evokes pity/sorrow; **bathos** (with a **b**) is a comic drop into trivial anticlimax.",
        },
      ],
      commonError: "Mixing up pathos (emotional poignancy) and bathos (satirical anticlimax).",
      solution: [
        "Items 1 and 2 soar into grand corporate abstractions (*'fearless authenticity'*, *'planetary stewardship'*).",
        "Item 3 crashes onto *'Terry's labelled yoghurt'*, puncturing their pretension via **bathos**.",
      ],
      hints: [
        "Notice how the three-part list climbs high and then drops suddenly onto a stolen yoghurt.",
        "It rhymes with *pathos* but starts with **b**.",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "decoding-multi-source-pack",
      strategy: "Unpack agentless passive evasion",
      question:
        "An official ferry-company bulletin states: *'Regrettable scheduling irregularities were experienced across island crossings.'* Why is the **agentless passive** used here?",
      options: [
        "To distance management from blame by omitting who cancelled the ferries and framing cancellations as weather-like 'irregularities'",
        "To create fast-paced action-thriller suspense for holidaymakers",
        "To take transparent personal responsibility for mechanical neglect",
        "To address islanders with warm, colloquial intimacy",
      ],
      answerIndex: 0,
      explanation:
        "Removing the grammatical subject (*by the company*) via **agentless passive** (*'were experienced'*) plus abstract euphemism (*'scheduling irregularities'*) makes human mismanagement sound like an unavoidable natural event.",
      hints: [
        "Ask: *Who* cancelled the ferries? Does the sentence ever name them?",
        "Why say 'irregularities were experienced' instead of 'We cancelled six ferries'?",
      ],
    },
    {
      id: "lang-p2-sources-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "high-tariff-comparative-paragraphs",
      strategy: "Select nuanced convergent-divergent hinges",
      question:
        "**Source B** (a nineteenth-century Pit Inspector's report) and **Source E** (a miner's widow's letter) both condemn underground ventilation neglect. Which comparative hinge best captures their relationship?",
      options: [
        "Diametrically opposed in moral conclusion, Source E celebrates mine owners...",
        "Uniting in their condemnation of lethal ventilation neglect — yet shifting from Source B's forensic statutory register to heartbroken domestic pathos — Source E...",
        "Using identical statistical tables and bureaucratic detachment, Source E...",
        "Completely unrelated to coal mining safety, Source E instead...",
      ],
      answerIndex: 1,
      explanation:
        "Top-band hinges honour **both** the shared moral verdict (condemning ventilation neglect) **and** the sharp divergence in voice and method (statutory inspection vs bereaved personal letter).",
      hints: [
        "Do the two texts agree or disagree about ventilation neglect?",
        "How do an official inspector's report and a widow's letter differ in emotional register?",
      ],
    },
  ],
  papers: [
    {
      id: "lang-p2-sources-p1",
      title: "Paper 2A Practice Paper 1: Urban Spaces, Work & Technology Pack",
      questions: [
        {
          id: "lang-p2-sources-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Identify balanced syntactic opposition",
          question:
            "Read **Source A** (an essay on civic architecture):\n\n> *'Public squares should be stages for spontaneous citizenship, not outdoor foyers for luxury malls.'*\n\nWhat single rhetorical term names placing two contrasting ideas in balanced parallel clauses (*'X, not Y'*)?",
          answer: {
            type: "text",
            accept: ["antithesis"],
            display: "antithesis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["anaphora"], display: "anaphora" },
              feedback: "**Anaphora** repeats identical opening words; contrasting two opposite ideas in balanced grammar is **antithesis**.",
            },
          ],
          commonError: "Confusing antithesis (balanced contrast) with oxymoron (two adjacent contradictory words like 'deafening silence').",
          solution: [
            "The sentence balances *'stages for spontaneous citizenship'* directly against *'not outdoor foyers for luxury malls'*.",
            "This parallel grammatical opposition is **antithesis**.",
          ],
          hints: [
            "Look at the balanced 'should be X, not Y' opposition.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Spot repeated clause openings",
          question:
            "Read **Source B** (a speech defending local youth centres):\n\n> *'Every locked gymnasium costs us fitness. Every silenced music room costs us talent. Every dark workshop costs us hope.'*\n\nWhat single rhetorical term names the deliberate repetition of *'Every…'* at the start of successive sentences?",
          answer: {
            type: "text",
            accept: ["anaphora"],
            display: "anaphora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["epiphora", "epistrophe"], display: "epiphora" },
              feedback: "Epiphora repeats endings; repeating the **opening** words of successive clauses is **anaphora**.",
            },
          ],
          commonError: "Writing vague 'repetition' instead of specifying clause-initial **anaphora**.",
          solution: [
            "Three consecutive sentences open with the parallel frame *'Every [noun]…'*.",
            "Clause-initial repetition is **anaphora**.",
          ],
          hints: [
            "Look at the exact position of the repeated word 'Every' — right at the beginning of each sentence.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-multi-source-pack",
          strategy: "Classify Aristotelian empirical appeal",
          question:
            "Read **Source C** (a municipal transport audit):\n\n> *'Bus priority lanes along the A40 corridor cut median journey variance by 34% while raising farebox revenue by £1.8 million over twelve months.'*\n\nWhich single Aristotelian appeal (`ethos`, `logos`, or `pathos`) is foregrounded through these percentages and financial metrics?",
          answer: {
            type: "text",
            accept: ["logos"],
            display: "logos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathos"], display: "pathos" },
              feedback: "**Pathos** stirs emotion; quantitative proof and measurable cause-effect appeal to **logos**.",
            },
            {
              spec: { type: "text", accept: ["ethos"], display: "ethos" },
              feedback: "**Ethos** establishes personal character/authority; statistical and financial evidence appeals to **logos**.",
            },
          ],
          commonError: "Labelling any persuasive evidence 'ethos' instead of separating credibility (ethos) from rational data (logos).",
          solution: [
            "The sentence relies on measurable reduction (*34%*) and fiscal return (*£1.8 million*) with zero emotive adjectives.",
            "Rational, data-driven proof is **logos**.",
          ],
          hints: [
            "Choose between ethos (speaker credibility), logos (data/logic), and pathos (emotion).",
            "Which appeal uses percentages and revenue figures?",
          ],
        },
        {
          id: "lang-p2-sources-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-writers-perspectives",
          strategy: "Recognise corporate euphemism",
          question:
            "Read **Source D** (a supermarket chain's press release on replacing staffed tills):\n\n> *'Transitioning to autonomous self-scan hosts empowers store colleagues to transition toward external lifestyle opportunities.'*\n\nWhat single linguistic/rhetorical term names disguising a harsh reality (making checkout workers redundant) behind sanitised, polite-sounding buzzwords?",
          answer: {
            type: "text",
            accept: ["euphemism", "euphemistic language"],
            display: "euphemism",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dysphemism"], display: "dysphemism" },
              feedback: "**Dysphemism** makes something sound harsher; softening job cuts into 'external lifestyle opportunities' is **euphemism**.",
            },
          ],
          commonError: "Taking corporate buzzwords literally instead of identifying euphemistic spin.",
          solution: [
            "*'Transition toward external lifestyle opportunities'* masks sacking staff behind upbeat corporate phrasing.",
            "Substituting mild/evasive wording for an unpleasant truth is **euphemism**.",
          ],
          hints: [
            "Translate 'transition toward external lifestyle opportunities' into blunt reality: losing your job.",
            "What term starting with **eu-** means softening harsh facts with polite phrasing?",
          ],
        },
        {
          id: "lang-p2-sources-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-writers-perspectives",
          strategy: "Identify Victorian paternalistic attitude",
          question:
            "Read **Source E** (an 1888 mill-town library committee minute):\n\n> *'Carefully censored biographies of industrious engineers shall wean young operatives from idle tavern gossip and cultivate respectful contentment with their station.'*\n\nWhich single Grade-9 attitude adjective (starting with **p**) describes an authority figure managing working-class citizens 'for their own moral improvement' while keeping them in their place?",
          answer: {
            type: "text",
            accept: ["paternalistic", "paternalism", "patronising"],
            display: "paternalistic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["egalitarian", "democratic"], display: "egalitarian" },
              feedback: "Censoring books to keep workers 'content with their station' is top-down hierarchy (**paternalistic**), not egalitarian!",
            },
          ],
          commonError: "Calling nineteenth-century moralising charity 'kind and supportive' while missing its condescending hierarchy.",
          solution: [
            "Verbs like *'censored'* and *'wean'* alongside *'contentment with their station'* treat adult workers like children needing moral policing.",
            "Exact perspective label: **paternalistic**.",
          ],
          hints: [
            "Derived from the Latin *pater* ('father') — acting like a strict father toward adult citizens.",
            "Starts with **pater-**.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Spot deliberate exaggeration",
          question:
            "Read **Source A** (a commuter's column on roadworks):\n\n> *'Temporary traffic lights on the ring road have now stood there longer than the Pyramids of Giza, silently fossilising three generations of hatchback drivers.'*\n\nWhat single rhetorical term names deliberate, extravagant **overstatement** not meant to be taken literally?",
          answer: {
            type: "text",
            accept: ["hyperbole"],
            display: "hyperbole",
          },
          traps: [
            {
              spec: { type: "text", accept: ["litotes"], display: "litotes" },
              feedback: "**Litotes** understates; claiming roadworks outlasted the Pyramids and fossilised drivers is **hyperbole**!",
            },
            {
              spec: { type: "text", accept: ["hypophora"], display: "hypophora" },
              feedback: "Watch the Greek prefix: *hypo-* (hypophora) asks and answers a question; *hyper-* (**hyperbole**) exaggerates!",
            },
          ],
          commonError: "Confusing hyperbole with hypophora under timed pressure.",
          solution: [
            "Outlasting the Pyramids and *'fossilising three generations'* wildly magnifies commuter frustration for comic punch.",
            "Deliberate exaggeration is **hyperbole**.",
          ],
          hints: [
            "No traffic light is actually older than the Pyramids of Giza!",
            "Which Greek term starting with **hyper-** means extravagant exaggeration?",
          ],
        },
        {
          id: "lang-p2-sources-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Identify rule-of-three phrasing",
          question:
            "Read **Source B** (an open letter on river pollution):\n\n> *'Our estuaries have been dredged, poisoned, and forgotten.'*\n\nWhat single technical term names this rhythmic **three-part list** (*'dredged, poisoned, and forgotten'*)?",
          answer: {
            type: "text",
            accept: ["tricolon", "triad", "rule of three", "power of three"],
            display: "tricolon",
          },
          traps: [
            {
              spec: { type: "text", accept: ["oxymoron"], display: "oxymoron" },
              feedback: "An oxymoron pairs two contradictory words; three parallel verbs escalating to emotional neglect form a **tricolon**.",
            },
          ],
          commonError: "Noting 'a list' without naming the tight three-step rhythmic cadence (**tricolon**).",
          solution: [
            "Three past participles (*dredged*, *poisoned*, *forgotten*) build from physical damage to moral abandonment.",
            "A three-part parallel group is a **tricolon** (triad).",
          ],
          hints: [
            "Count the parallel verbs: 1) dredged, 2) poisoned, 3) forgotten.",
            "Starts with **tri-**.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "synthesising-evidence-across-texts",
          strategy: "Calculate exact quantitative difference across paired sources",
          question:
            "Read these two standalone fact extracts carefully:\n\n> **Source C (1994 High Street Survey):** *'Independent greengrocers accounted for 64% of town-centre produce sales.'*\n> **Source E (2024 Retail Audit):** *'Independent greengrocers now capture just 19% of town-centre produce sales.'*\n\nBy how many **percentage points** did independent greengrocers' market share fall between Source C and Source E?",
          answer: {
            type: "number",
            value: 45,
            display: "45",
          },
          traps: [
            {
              spec: { type: "number", value: 83 },
              feedback: "You added 64 and 19 — subtract the 2024 figure (19) from the 1994 figure (64) to find the drop!",
            },
          ],
          commonError: "Misreading retrieval numbers when skimming across two statistical sources.",
          solution: [
            "1994 share in Source C = 64%; 2024 share in Source E = 19%.",
            "Drop in percentage points = {{64 - 19 = 45}}.",
          ],
          hints: [
            "Subtract Source E's percentage (19) from Source C's percentage (64).",
            "Compute {{64 - 19}}.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Identify concession before rebuttal",
          question:
            "Read **Source D** (an opinion column on e-scooters):\n\n> *'Admittedly, lightweight electric scooters cut short-hop car exhausts; nevertheless, dumping them across tactile paving turns pavements into obstacle courses for blind pedestrians.'*\n\nWhat single argumentative term (starting with **c**) names the opening move *'Admittedly…'*, where a writer acknowledges a valid opposing point before pivoting to their rebuttal?",
          answer: {
            type: "text",
            accept: ["concession", "counterargument", "counter-argument"],
            display: "concession",
          },
          traps: [
            {
              spec: { type: "text", accept: ["contradiction"], display: "contradiction" },
              feedback: "The writer isn't contradicting themselves — strategically granting a fair point before outweighing it is a **concession**.",
            },
          ],
          commonError: "Thinking a concession weakens an argument rather than strengthening fair-minded ethos.",
          solution: [
            "Opening with *'Admittedly…'* grants the opponent's strongest environmental point.",
            "Pivoting at *'nevertheless'* outweighs it with disability access. That opening grant is a **concession**.",
          ],
          hints: [
            "When you *concede* a fair point on the other side before rebutting it, what noun names that move?",
            "Starts with **concess-**.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-multi-source-pack",
          strategy: "Identify direct command syntax",
          question:
            "Read **Source A** (a charity appeal on food waste):\n\n> *'Look inside your fridge crisper drawer tonight before blaming supermarkets alone.'*\n\nWhat grammatical verb mood (`imperative`, `passive`, or `interrogative`) is *'Look'* at the start of this sentence?",
          answer: {
            type: "text",
            accept: ["imperative", "imperative mood", "imperative verb"],
            display: "imperative",
          },
          traps: [
            {
              spec: { type: "text", accept: ["interrogative"], display: "interrogative" },
              feedback: "An interrogative asks a question; issuing a direct command (*'Look…'*) is the **imperative** mood.",
            },
          ],
          commonError: "Calling every second-person sentence 'direct address' without spotting the commanding **imperative** verb.",
          solution: [
            "*'Look'* directly instructs the reader to act and inspect their own home.",
            "Direct command verbs use the **imperative** mood.",
          ],
          hints: [
            "Is 'Look inside your fridge...' asking a question, hiding the actor, or giving a direct instruction?",
            "Choose from: imperative, passive, interrogative.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q11",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "synthesising-evidence-across-texts",
          strategy: "Synthesise shared problem + divergent cause",
          question:
            "Using **Source A** and **Source B** below, synthesise what both writers reveal about the decline of evening adult-education classes. [3 marks]\n\n> **Source A (Retired pottery tutor's letter):** *'When council subsidies vanished in 2018, termly fees tripled to £240 overnight; pensioners on fixed incomes simply stopped coming through our kiln-room door.'*\n> **Source B (Workplace sociologist's article):** *'Always-on smartphone emails mean salaried workers now answer spreadsheets at 8 p.m. on the sofa, leaving zero mental bandwidth for Tuesday-night Spanish.'*",
          modelAnswer:
            "Both sources recognise that participation in evening community learning has eroded, yet they trace this decline to contrasting pressures. Source A identifies prohibitive financial barriers after council funding cuts priced out older learners ('tripled to £240'), whereas Source B blames intrusive digital work culture ('8 p.m. on the sofa') for exhausting commuters' cognitive energy.",
          markScheme: [
            {
              point: "Identifies the shared umbrella trend: declining attendance/access to evening adult classes across both texts.",
              keywords: ["both", "declin", "erod", "drop", "fewer", "participation", "barrier"],
            },
            {
              point: "Infers Source A's economic/financial barrier caused by funding cuts and unaffordable fees.",
              keywords: ["financial", "cost", "afford", "economic", "funding", "priced out", "240"],
            },
            {
              point: "Contrasts Source B's time/cognitive exhaustion caused by intrusive after-hours remote work.",
              keywords: ["whereas", "conversely", "contrast", "exhaust", "work culture", "cognitive", "mental", "after-hours", "digital"],
            },
          ],
          commonError: "Paraphrasing Source A and Source B in two isolated sentences without stating what links them and how their causes differ.",
          hints: [
            "Start with what both extracts agree is happening to evening classes.",
            "Compare *why* people stopped attending in Source A (money/subsidy cuts) versus Source B (overwork/digital intrusion).",
          ],
        },
        {
          id: "lang-p2-sources-p1-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "comparing-writers-perspectives",
          strategy: "Contrast exact tonal shades + positionality",
          question:
            "Compare how the writers of **Source C** and **Source D** convey their contrasting attitudes toward open-plan offices. [4 marks]\n\n> **Source C (Commercial interior designer's brochure):** *'Removing cellular partition walls liberates spontaneous cross-team sparks, bathing every desk in egalitarian daylight.'*\n> **Source D (Investigative journalist's column):** *'Stripped of doors, forty-two staff crouch behind noise-cancelling headphones in a fluorescent panopticon where nobody dares chew an apple.'*",
          modelAnswer:
            "Whereas Source C's designer adopts a buoyant, evangelical tone to market open-plan layouts as democratic innovation, Source D's journalist responds with sardonic, claustrophobic disdain. Source C uses liberating verbs and bright imagery ('liberates', 'egalitarian') to pitch commercial harmony to executives; conversely, Source D deploys surveillance metaphor ('panopticon') and bathetic detail ('chew an apple') to expose anxious conformity among workers.",
          markScheme: [
            {
              point: "Pinpoints Source C's celebratory/evangelical/idealistic perspective and links it to commercial marketing agenda.",
              keywords: ["celebrat", "evangelical", "buoyant", "idealis", "optimis", "market", "promot"],
            },
            {
              point: "Analyses Source C's liberating/democratic lexical choices (e.g. 'liberates' or 'egalitarian').",
              keywords: ["liberat", "egalitarian", "freedom", "democratic", "metaphor", "imagery"],
            },
            {
              point: "Contrasts Source D's sardonic/scathing/claustrophobic attitude using a clear comparative hinge.",
              keywords: ["sardonic", "scathing", "claustrophob", "disdain", "mock", "whereas", "conversely", "contrast"],
            },
            {
              point: "Unpacks Source D's prison/surveillance metaphor ('panopticon') or comic bathos ('apple') showing worker anxiety.",
              keywords: ["panopticon", "surveillance", "prison", "bathos", "bathetic", "anxiet", "crouch"],
            },
          ],
          commonError: "Calling Source C 'positive' and Source D 'negative' without naming surveillance imagery, bathos, or commercial vested interest.",
          hints: [
            "Check the blurbs: why does an interior designer sound evangelical while a journalist sounds sardonic?",
            "Zoom into 'liberates' / 'egalitarian' in Source C versus 'panopticon' and 'chew an apple' in Source D.",
          ],
        },
        {
          id: "lang-p2-sources-p1-q13",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "comparing-rhetorical-methods",
          strategy: "Contrast passive institutional evasion against active human testimony",
          question:
            "Compare the methods used in **Source B** and **Source E** to present a hospital catering failure. [3 marks]\n\n> **Source B (Contractor's compliance statement):** *'Sub-optimal thermal parameters were recorded across evening meal trays during supply-chain transition.'*\n> **Source E (Ward nurse's open letter):** *'Outsourcing bosses served stone-cold grey mash to eighty-year-old stroke patients recovering from surgery.'*",
          modelAnswer:
            "Source B deploys agentless passive syntax and sterile technical euphemism ('thermal parameters') to obscure corporate blame and numb emotional reaction. By contrast, Source E uses direct active accusation ('Outsourcing bosses') alongside visceral sensory detail and vulnerable human pathos ('eighty-year-old', 'grey mash') to provoke moral indignation.",
          markScheme: [
            {
              point: "Identifies Source B's passive voice or clinical euphemism/jargon and explains how it deflects culpability.",
              keywords: ["passive", "euphemis", "jargon", "clinical", "deflect", "obscure", "evad", "blame"],
            },
            {
              point: "Contrasts Source E's active syntax naming culprits directly ('Outsourcing bosses').",
              keywords: ["active", "direct", "culpab", "accus", "contrast", "whereas", "conversely"],
            },
            {
              point: "Explains how Source E's sensory imagery or vulnerable patient focus builds pathos and moral outrage.",
              keywords: ["sensory", "pathos", "vulnerable", "indignat", "outrage", "visceral", "emotive"],
            },
          ],
          commonError: "Summarising that 'the food was cold in both' instead of contrasting passive jargon against active sensory pathos.",
          hints: [
            "Compare the grammar: 'parameters were recorded' (passive) vs 'bosses served' (active).",
            "How does 'sub-optimal thermal parameters' feel compared to 'stone-cold grey mash' for elderly stroke patients?",
          ],
        },
        {
          id: "lang-p2-sources-p1-q14",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "comparing-writers-perspectives",
          strategy: "Track internal tonal pivot across an extract",
          question:
            "Explain how the writer's perspective shifts from the beginning to the end of **Source A** below. [3 marks]\n\n> **Source A (Travel writer boarding a slow sleeper train):** *'At Euston I glared at my cramped bunk — a relic from a bygone century when travellers evidently lacked knees or deadlines. Yet waking at five to mist curling off Rannoch Moor while stags grazed ten yards from my pillow, I pitied anyone hurtling overhead in an aluminium tube.'*",
          modelAnswer:
            "Initially, the writer adopts an irritable, sardonic tone, deploying comic hyperbole ('lacked knees') to mock the sleeper carriage as an obsolete inconvenience. However, a sharp morning pivot at 'Yet waking' transforms cynicism into hushed, reverent wonder, culminating in complete conversion as planes are dismissed disdainfully as an 'aluminium tube'.",
          markScheme: [
            {
              point: "Identifies the opening irritable/sardonic/cynical dismissal and unpacks comic exaggeration ('knees' / 'relic').",
              keywords: ["initially", "opening", "sardonic", "cynic", "irritab", "dismiss", "hyperbole", "mock"],
            },
            {
              point: "Pinpoints the structural/tonal pivot ('Yet waking') triggered by intimate natural beauty.",
              keywords: ["pivot", "shift", "turn", "transform", "yet", "contrast"],
            },
            {
              point: "Evaluates the closing reverent/converted stance, contrasting slow wonder against cold 'aluminium tube' aviation.",
              keywords: ["reveren", "wonder", "awe", "conver", "piti", "aluminium", "disdain"],
            },
          ],
          commonError: "Saying the writer 'likes trains' without tracing the deliberate journey from sardonic irritation to converted awe.",
          hints: [
            "Separate sentence 1 (at Euston) from sentence 2 (waking on Rannoch Moor).",
            "Notice how 'aluminium tube' reverses who the writer pities by the end!",
          ],
        },
        {
          id: "lang-p2-sources-p1-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "high-tariff-comparative-paragraphs",
          strategy: "Write a complete WEAVE comparative paragraph",
          question:
            "Compare how the writers of **Source A** and **Source C** use language and structure to persuade readers about marine plastic pollution. [4 marks]\n\n> **Source A (Oceanographer's policy briefing):** *'Microplastic concentrations across Mediterranean surface trawls rose by 42% in a decade; without binding packaging levies, remediation costs will treble by 2035.'*\n> **Source C (Wildlife photographer's diary):** *'Inside the albatross chick's ribcage lay no silver fish — only bottle-caps, a crimson cigarette lighter, and silent starvation.'*",
          modelAnswer:
            "Both writers urgently indict marine plastic pollution, yet whereas Source A constructs a macro-scale empirical case for legislators, Source C deploys intimate visual pathos for general readers. Source A uses stark longitudinal percentages ('42%') and fiscal warning ('treble') to appeal to rational economic logos. Conversely, Source C structures a devastating antithetical reveal ('no silver fish — only...'), closing on a stark tricolon of synthetic debris ('crimson cigarette lighter') to provoke visceral grief.",
          markScheme: [
            {
              point: "Establishes a woven comparative thesis uniting shared anti-plastic urgency with divergent scale/audience.",
              keywords: ["both", "whereas", "conversely", "macro", "intimate", "empirical", "legislat", "policy"],
            },
            {
              point: "Analyses Source A's quantitative statistics and economic warning appealing to logos.",
              keywords: ["statistic", "logos", "quantit", "fiscal", "economic", "42%", "treble"],
            },
            {
              point: "Analyses Source C's dash reveal, antithesis, or tricolon of synthetic objects inside the chick.",
              keywords: ["tricolon", "antithes", "dash", "contrast", "lighter", "visceral", "imagery"],
            },
            {
              point: "Evaluates contrasting reader impact and contextual purpose (policy action vs emotional grief/pathos).",
              keywords: ["pathos", "grief", "guilt", "audience", "rational", "emotive", "purpose"],
            },
          ],
          commonError: "Writing two disconnected mini-paragraphs without comparing macro-logos against micro-pathos.",
          hints: [
            "Open with a WEAVE thesis comparing Source A's policy-briefing scale against Source C's single albatross chick.",
            "Unpack Source A's numbers/fiscal forecast (logos) alongside Source C's dash + tricolon reveal (pathos).",
            "Finish by linking their different methods to their roles (oceanographer vs wildlife photographer).",
          ],
        },
      ],
    },
    {
      id: "lang-p2-sources-p2",
      title: "Paper 2A Practice Paper 2: Heritage, Science & Exploration Pack",
      questions: [
        {
          id: "lang-p2-sources-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "decoding-multi-source-pack",
          strategy: "Distinguish ethos, logos, and pathos",
          question:
            "Read **Source A** (an opening line by an emergency-room consultant):\n\n> *'Across twenty-two winters suturing preventable cycling head injuries in trauma bays, I have learned what a thirty-pound helmet saves.'*\n\nWhich Aristotelian appeal (`ethos`, `logos`, or `pathos`) is established first by foregrounding **twenty-two winters of frontline surgical authority**?",
          answer: {
            type: "text",
            accept: ["ethos", "credibility"],
            display: "ethos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["logos"], display: "logos" },
              feedback: "Before citing any statistics, establishing frontline professional credentials builds **ethos** (speaker credibility).",
            },
          ],
          commonError: "Forgetting that establishing specialist lived credentials is **ethos**.",
          solution: [
            "Highlighting *'twenty-two winters'* as a trauma surgeon commands immediate professional trust.",
            "Credibility and authority = **ethos**.",
          ],
          hints: [
            "Which appeal answers the reader's question: 'Why should I trust this speaker's expertise?'",
          ],
        },
        {
          id: "lang-p2-sources-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "comparing-writers-perspectives",
          strategy: "Identify mournful, nostalgic tone",
          question:
            "Read **Source B** (a memoir of a closed coastal shipyard):\n\n> *'Grass pushes quietly between slipway rails where ten thousand riveters once sang steel hulls into the Clyde; only museum glass remembers their calloused pride.'*\n\nWhich single Grade-9 tone adjective (starting with **e**, related to *elegy*) describes mournful, poetic sorrow for a vanished world?",
          answer: {
            type: "text",
            accept: ["elegiac", "elegiacal"],
            display: "elegiac",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sardonic"], display: "sardonic" },
              feedback: "There is zero cynicism or mockery here — reverent mourning for a lost community is **elegiac**.",
            },
          ],
          commonError: "Writing vague 'sad' instead of the Grade-9 critical adjective **elegiac**.",
          solution: [
            "Images of grass reclaiming silent rails and lost craft pride express tender lamentation.",
            "Adjective from *elegy*: **elegiac**.",
          ],
          hints: [
            "An *elegy* is a poem of mourning; turn that noun into its adjective starting with **eleg-**.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Identify personification in nature non-fiction",
          question:
            "Read **Source C** (an Antarctic explorer's journal):\n\n> *'All night the blizzard clawed furiously at our canvas seams, demanding admission like a bailiff.'*\n\nAttributing deliberate legal intent (*'demanding admission'*) to a snowstorm is an example of what figurative method?",
          answer: {
            type: "text",
            accept: ["personification", "simile", "zoomorphism"],
            display: "personification",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration"], display: "alliteration" },
              feedback: "Focus on the figurative meaning: giving human agency ('demanding admission like a bailiff') to weather is **personification**.",
            },
          ],
          commonError: "Naming sound patterns when the question explicitly points to attributing human agency.",
          solution: [
            "A storm cannot literally demand legal admission like a bailiff.",
            "Endowing weather with human agency and hostility is **personification** (paired with a simile).",
          ],
          hints: [
            "What method gives non-human weather human motives ('demanding admission')?",
            "Think of turning an inanimate storm into a hostile person.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Spot cyclical framing",
          question:
            "In **Source D**, a beekeeper's essay begins in paragraph 1 with *'One frost-numbed queen bee resting in my palm in March'* and ends in the final line with *'Fifty thousand daughters humming above that same scarred palm in August'*. What single structural term describes returning at the end to transform the opening image?",
          answer: {
            type: "text",
            accept: ["cyclical", "cyclical structure", "cyclical framing", "circular"],
            display: "cyclical",
          },
          traps: [
            {
              spec: { type: "text", accept: ["flashback", "analepsis"], display: "flashback" },
              feedback: "Time moves forward from March to August — echoing the opening image (*palm*) at the close is **cyclical** framing.",
            },
          ],
          commonError: "Calling any time reference a 'flashback' instead of spotting opening-to-closing symmetry.",
          solution: [
            "The closing image mirrors *'my palm'* from line 1 while transforming solitary fragility into thriving abundance.",
            "Structural term: **cyclical** framing.",
          ],
          hints: [
            "The structure forms a circle back to the starting image, transformed by growth.",
            "Starts with **cycl-**.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-writers-perspectives",
          strategy: "Identify dry, mocking cynicism",
          question:
            "Read **Source E** (a tech reviewer testing 'AI smart glasses'):\n\n> *'At last, humanity's deepest dream is fulfilled: receiving pop-up calendar reminders directly across your eyeballs while walking into a lamppost.'*\n\nWhich single Grade-9 tone adjective (starting with **s**) means dryly mocking, disdainful, and grimly satirical?",
          answer: {
            type: "text",
            accept: ["sardonic", "satirical", "sarcastic"],
            display: "sardonic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["reverent", "celebratory"], display: "reverent" },
              feedback: "'Humanity's deepest dream' is ironic — crashing into a lamppost punctures the hype with **sardonic** mockery!",
            },
          ],
          commonError: "Reading mock-heroic openings ('At last, humanity's deepest dream...') straight without spotting the bathetic lamppost punchline.",
          solution: [
            "Grandiose ironic praise (*'humanity's deepest dream'*) undercut by *'walking into a lamppost'* creates dry, biting ridicule.",
            "Grade-9 tone word: **sardonic**.",
          ],
          hints: [
            "Compare the grand opening ('humanity's deepest dream') against crashing into a lamppost.",
            "Starts with **sard-** (the classic Grade-9 upgrade for dry, mocking irony).",
          ],
        },
        {
          id: "lang-p2-sources-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-rhetorical-methods",
          strategy: "Recognise grammatical passive voice",
          question:
            "Read **Source B** (a museum trustees' statement on misplaced artefacts):\n\n> *'Catalogue discrepancies were identified within the reserve antiquities vault.'*\n\nIs the verb phrase *'were identified'* written in the **active** or **passive** voice? (Type one word)",
          answer: {
            type: "text",
            accept: ["passive", "passive voice"],
            display: "passive",
          },
          traps: [
            {
              spec: { type: "text", accept: ["active"], display: "active" },
              feedback: "In the active voice, a named subject performs the action ('Auditors found missing coins'); 'were identified' with no named actor is **passive**.",
            },
          ],
          commonError: "Confusing past tense with active voice — 'were + past participle' hiding the actor is passive!",
          solution: [
            "The grammatical subject (*'Catalogue discrepancies'*) receives the action, hiding who lost or found the items.",
            "Voice: **passive**.",
          ],
          hints: [
            "Ask whether the sentence names *who* identified the discrepancies.",
            "Notice 'were + past participle' with no 'by whom' — classic institutional blame-blurring!",
          ],
        },
        {
          id: "lang-p2-sources-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "synthesising-evidence-across-texts",
          strategy: "Verify multi-source ratio retrieval",
          question:
            "Read these two standalone extracts:\n\n> **Source A (1954 Polar Log):** *'Our dog-sled team covered 15 miles per day across sastrugi ridges.'*\n> **Source D (2024 Ice-Core Traverse Report):** *'Tracked research tractors averaged 60 miles per day along the plateau.'*\n\nHow many **times faster** was the daily distance in Source D than in Source A?",
          answer: {
            type: "number",
            value: 4,
            display: "4",
          },
          traps: [
            {
              spec: { type: "number", value: 45 },
              feedback: "45 miles is the subtraction difference ({{60 - 15}}); 'how many times faster' asks for the ratio {{60 / 15}}!",
            },
          ],
          commonError: "Subtracting instead of dividing when asked 'how many times' across two quantitative extracts.",
          solution: [
            "Source D daily distance = 60 miles; Source A daily distance = 15 miles.",
            "Ratio = {{60 / 15 = 4}} times faster.",
          ],
          hints: [
            "Compare 60 miles per day against 15 miles per day as a multiplicative factor.",
            "Divide Source D's speed (60) by Source A's speed (15).",
          ],
        },
        {
          id: "lang-p2-sources-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-writers-perspectives",
          strategy: "Spot rueful self-deprecation",
          question:
            "Read **Source C** (an amateur astronomer's column):\n\n> *'After spending six hundred pounds on a brass telescope, I proudly lectured my neighbours for twenty minutes on a rare red nebula that turned out to be my thumb over the lens.'*\n\nWhat hyphenated attitude term (`self-deprecating` or `self-righteous`) describes poking warm fun at your own blunders?",
          answer: {
            type: "text",
            accept: ["self-deprecating", "self deprecating"],
            display: "self-deprecating",
          },
          traps: [
            {
              spec: { type: "text", accept: ["self-righteous"], display: "self-righteous" },
              feedback: "**Self-righteous** means smugly superior; laughing at mistaking your own thumb for a nebula is **self-deprecating**!",
            },
          ],
          commonError: "Missing how self-deprecating humour builds instant warmth and candid ethos with readers.",
          solution: [
            "The writer deflates their own pompous lecture with the comic reveal (*'my thumb over the lens'*).",
            "Mocking oneself good-naturedly is **self-deprecating**.",
          ],
          hints: [
            "Notice who is the butt of the joke — the writer's own mistake!",
            "Choose between `self-deprecating` (laughing at yourself) and `self-righteous` (preachy superiority).",
          ],
        },
        {
          id: "lang-p2-sources-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-multi-source-pack",
          strategy: "Classify poignant human appeal",
          question:
            "Read **Source E** (a heritage appeal for a flooded village library):\n\n> *'Waterlogged picture books where three generations of toddlers traced their first letters lay pulped in muddy skips outside the hall.'*\n\nWhich Aristotelian appeal (`ethos`, `logos`, or `pathos`) is triggered by *'three generations of toddlers traced their first letters'*?",
          answer: {
            type: "text",
            accept: ["pathos"],
            display: "pathos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["logos"], display: "logos" },
              feedback: "'Three generations' here evokes tender childhood memory and loss (**pathos**), not statistical data.",
            },
          ],
          commonError: "Calling 'three generations' a statistic instead of recognising tender emotional poignancy.",
          solution: [
            "Evoking toddlers' first books ruined in muddy skips stirs protective sorrow and nostalgia.",
            "Emotional appeal = **pathos**.",
          ],
          hints: [
            "Focus on the emotional image of toddlers' treasured picture books ruined in mud.",
            "Does this image target your calculator (logos), credentials check (ethos), or heartstrings (pathos)?",
          ],
        },
        {
          id: "lang-p2-sources-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "high-tariff-comparative-paragraphs",
          strategy: "Classify convergent vs divergent source pairings",
          question:
            "**Source A** celebrates rewilded beaver dams for halting downstream village floods, **whereas** **Source C** condemns those exact dams for waterlogging prime arable wheat fields. Are their core perspectives **convergent** or **divergent**? (Type one word)",
          answer: {
            type: "text",
            accept: ["divergent", "contrasting"],
            display: "divergent",
          },
          traps: [
            {
              spec: { type: "text", accept: ["convergent"], display: "convergent" },
              feedback: "**Convergent** means moving toward the same verdict; celebrating vs condemning the same dams is **divergent**!",
            },
          ],
          commonError: "Mixing up convergent (coming together) and divergent (splitting apart).",
          solution: [
            "Source A views beaver dams as flood salvation; Source C views them as agricultural damage.",
            "Opposing stances hinged by *'whereas'* are **divergent**.",
          ],
          hints: [
            "Notice the contrasting verbs 'celebrates' versus 'condemns' hinged by 'whereas'.",
            "Think of roads *diverging* in opposite directions versus *converging* at one point.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q11",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "synthesising-evidence-across-texts",
          strategy: "Synthesise historical vs modern attitudes to night shift work",
          question:
            "Using **Source A** and **Source D** below, synthesise the effects of night-shift labour on workers. [3 marks]\n\n> **Source A (1896 Bakery Inspector's Note):** *'Journeymen kneading dough in windowless cellars from midnight till dawn grow pale, hollow-chested, and estranged from daylight neighbours.'*\n> **Source D (2024 Occupational Health Study):** *'Rotating nocturnal warehouse rotas disrupt circadian melatonin cycles, elevating cardiovascular risk by 18% and straining family mealtime routines.'*",
          modelAnswer:
            "Across more than a century, both sources agree that nocturnal labour damages both physical health and social connection. While Source A observes visible bodily decline ('hollow-chested') and community isolation ('estranged'), Source D corroborates this harm through clinical physiology ('circadian', '18%') and disrupted domestic family bonds.",
          markScheme: [
            {
              point: "Synthesises the dual conceptual harm present in both texts: physical health damage AND social/domestic isolation.",
              keywords: ["both", "physical", "health", "social", "isolat", "family", "connection"],
            },
            {
              point: "Integrates Source A's observational/sensory evidence of bodily exhaustion and separation from neighbours.",
              keywords: ["pale", "hollow", "estrang", "observ", "bodily", "1896"],
            },
            {
              point: "Bridges to Source D's modern clinical/biochemical metrics ('circadian', '18%') and strained family routines.",
              keywords: ["clinical", "circadian", "cardiovascular", "18%", "physiological", "domestic", "corroborat", "whereas", "while"],
            },
          ],
          commonError: "Only mentioning physical illness and overlooking the shared social/family estrangement thread in both extracts.",
          hints: [
            "Notice TWO shared harms in both extracts: (1) damage to the body, and (2) separation from neighbours/family.",
            "Weave micro-quotes from both 1896 and 2024 into those conceptual buckets.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "comparing-rhetorical-methods",
          strategy: "Contrast litotes/irony against emotive sensory urgency",
          question:
            "Compare the methods the writers of **Source B** and **Source C** use to criticise poorly gritted winter roads. [4 marks]\n\n> **Source B (Broadsheet columnist):** *'Watching a forty-tonne commuter coach perform an unscheduled Swan Lake pirouette down Highfield Hill suggests our council's winter-readiness plan is not wholly watertight.'*\n> **Source C (Paramedic's open letter):** *'How many fractured hips must clog our ambulances before councillors unlock the grit-salt sheds? Tonight, pensioners are prisoners behind sheet-ice pavements.'*",
          modelAnswer:
            "Source B critiques council incompetence through dry, sardonic irony, pairing a comic ballet metaphor ('Swan Lake pirouette') with biting litotes ('not wholly watertight') to mock official planning with cool superiority. Conversely, Source C abandons humour for urgent frontline advocacy, deploying an accusatory rhetorical question ('fractured hips') and captivity metaphor ('prisoners') to stir moral indignation.",
          markScheme: [
            {
              point: "Identifies Source B's sardonic/satirical register and comic dance metaphor ('pirouette').",
              keywords: ["sardonic", "satir", "iron", "comic", "ballet", "pirouette", "mock"],
            },
            {
              point: "Identifies Source B's litotes / ironic understatement ('not wholly watertight').",
              keywords: ["litotes", "understatement", "watertight"],
            },
            {
              point: "Contrasts Source C's urgent/indignant frontline tone via rhetorical questioning ('fractured hips').",
              keywords: ["conversely", "whereas", "contrast", "urgent", "indignant", "rhetorical question", "interrogative", "frontline"],
            },
            {
              point: "Unpacks Source C's imprisonment metaphor ('prisoners') creating protective pathos for elderly residents.",
              keywords: ["metaphor", "prisoner", "captiv", "pathos", "vulnerable", "moral"],
            },
          ],
          commonError: "Missing Source B's litotes ('not wholly watertight') and taking it as mild politeness rather than devastating understatement.",
          hints: [
            "Contrast Source B's comic 'Swan Lake' metaphor + understatement ('not wholly watertight') against Source C's urgent question + 'prisoners' metaphor.",
            "Explain why a broadsheet humorist and an ambulance paramedic adopt such different registers.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q13",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "decoding-multi-source-pack",
          strategy: "Interrogate vested interest & statistical framing",
          question:
            "Read **Source E** below and explain **two ways** its presentation steers the reader's judgement. [3 marks]\n\n> **Source E (Factfile funded by the Bottled Springwater Federation):**\n> **'HYDRATION CRISIS! 78% of surveyed gym-goers worry about aged municipal lead pipes — switch to pure Alpine-filtered mineral packs today!'** *(Survey of 50 shoppers holding bottled water outside a gym.)*",
          modelAnswer:
            "First, the Federation's commercial vested interest drives alarmist framing, pairing a capitalised crisis headline with emotive contamination fears ('lead pipes') while contrasting 'pure Alpine' connotations. Second, the prominent '78%' statistic relies on a biased, tiny sample of fifty existing bottled-water buyers, manufacturing false consensus to boost sales.",
          markScheme: [
            {
              point: "Connects persuasive slant to the publisher's commercial vested interest (selling bottled water).",
              keywords: ["vested", "commercial", "agenda", "profit", "sales", "federation", "bias"],
            },
            {
              point: "Analyses alarmist lexical contrast ('CRISIS' / 'lead pipes' vs 'pure Alpine').",
              keywords: ["alarmis", "fear", "connotat", "contrast", "pure", "crisis", "lexical"],
            },
            {
              point: "Exposes the flawed statistical framing: tiny sample (50) and selection bias (existing bottled-water shoppers).",
              keywords: ["sample", "selection", "50", "fifty", "unrepresentative", "flawed", "statistic"],
            },
          ],
          commonError: "Accepting '78%' as objective scientific proof without reading the funding header and footnote.",
          hints: [
            "Check who paid for the factfile and who was surveyed in the footnote!",
            "Also look at the loaded contrast between 'aged municipal lead pipes' and 'pure Alpine-filtered'.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q14",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "comparing-writers-perspectives",
          strategy: "Separate embedded stakeholder quote from authorial stance",
          question:
            "Read **Source C** below. Explain how the writer's **overall viewpoint** differs from the quoted shopkeeper's view. [3 marks]\n\n> **Source C (Urban transport correspondent):** *'When High Street closed to cars in May, butcher Ken Hargreaves predicted \"total commercial apocalypse by Christmas\". Six months on, café pavement tables are full at noon and retail footfall has climbed 19% — proving pedestrians carry wallets, whereas parked bumpers never bought a loaf.'*",
          modelAnswer:
            "While the embedded shopkeeper predicts catastrophic ruin via hyperbole ('apocalypse'), the correspondent cites this fear only as a foil to refute it. Through subsequent empirical evidence ('climbed 19%') and witty aphoristic antithesis contrasting 'pedestrians' against 'parked bumpers', the writer champions pedestrianisation as an economic triumph.",
          markScheme: [
            {
              point: "Distinguishes the embedded interviewee's hyperbolic doom ('apocalypse') from the journalist's own voice.",
              keywords: ["embedded", "quoted", "foil", "hyperbol", "interviewee", "shopkeeper", "refut"],
            },
            {
              point: "Shows how the writer overturns that prediction using empirical evidence ('19%' footfall rise).",
              keywords: ["empirical", "statistic", "19%", "evidence", "overturn", "disprov"],
            },
            {
              point: "Identifies the writer's confident, pro-pedestrianisation stance reinforced by the witty closing contrast ('bumpers').",
              keywords: ["champion", "endorse", "antithes", "witty", "bumper", "triumph", "favour"],
            },
          ],
          commonError: "Misattributing 'total commercial apocalypse' to the journalist and claiming Source C opposes pedestrianisation.",
          hints: [
            "Why did the journalist quote Ken's May prediction right before giving the six-month '19%' results?",
            "Unpack the witty closing punchline: 'pedestrians carry wallets, whereas parked bumpers never bought a loaf'.",
          ],
        },
        {
          id: "lang-p2-sources-p2-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "high-tariff-comparative-paragraphs",
          strategy: "Construct a full WEAVE comparison of perspectives & methods",
          question:
            "Compare how the writers of **Source A** and **Source D** convey their perspectives on space exploration. [4 marks]\n\n> **Source A (Astrophysicist's keynote):** *'Every telescope launched beyond Earth's veil extends our species' horizon: Apollo's microchips gave us kidney dialysis machines, solar cells, and the audacity to think beyond borders.'*\n> **Source D (Community housing activist's column):** *'Billionaires joyriding into the stratosphere for four minutes of weightless selfies while families below ration winter heating is not progress — it is gilded escapism.'*",
          modelAnswer:
            "Whereas Source A adopts a reverent, inspirational register framing space science as shared human advancement, Source D deploys scathing moral indignation against privatised space tourism. Source A builds inclusive solidarity ('our species') and a climactic tricolon pairing tangible medical spin-offs ('dialysis') with philosophical awe. Diametrically opposed, Source D uses demeaning diction ('joyriding', 'selfies') and sharp antithesis ('gilded escapism') to expose grotesque wealth inequality.",
          markScheme: [
            {
              point: "Opens with a woven comparative thesis contrasting public scientific inspiration against privatised billionaire excess.",
              keywords: ["whereas", "diametrically", "conversely", "reveren", "inspir", "indignat", "scathing"],
            },
            {
              point: "Analyses Source A's inclusive pronouns ('our species') or tricolon linking practical benefits ('dialysis') to wonder.",
              keywords: ["inclusive", "tricolon", "triad", "dialysis", "practical", "solidarity", "horizon"],
            },
            {
              point: "Analyses Source D's belittling diction ('joyriding' / 'selfies') or antithesis ('not progress — it is gilded escapism').",
              keywords: ["antithes", "gilded", "joyrid", "selfie", "belittl", "demean"],
            },
            {
              point: "Evaluates WHY their viewpoints diverge (public research scientist vs frontline housing campaigner exposing inequality).",
              keywords: ["inequality", "activist", "scientist", "public", "privatis", "agenda", "role"],
            },
          ],
          commonError: "Saying 'Source A likes rockets and Source D hates science' — missing that Source A defends public research while Source D targets billionaire tourism.",
          hints: [
            "Notice the crucial nuance: Source A defends public scientific exploration (Apollo, telescopes), whereas Source D attacks private billionaire joyrides!",
            "Zoom into Source A's inclusive 'our species' + tricolon versus Source D's 'joyriding' + antithesis ('not progress — it is gilded escapism').",
            "Anchor your closing sentence in their contrasting roles (astrophysicist vs housing activist).",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "lang-p2-sources-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "comparing-writers-perspectives",
      strategy: "Unpack layered irony + archival positionality",
      question:
        "Compare two extracts on the opening of a Victorian reservoir that flooded a Welsh farming valley:\n\n> **Source A (1892 City Corporation plaque speech):** *'Where barren sheep-tracks once yielded scant subsistence to a handful of isolated cottagers, imperial engineering now bestows pure mountain bounty upon half a million industrious citizens.'*\n> **Source C (Evicted tenant's 1892 chapel letter):** *'They priced our stone hearths by the yard, yet left no column in their ledger for the churchyard where six generations of our mothers sleep beneath forty fathoms.'*\n\nWhich analysis captures the deepest ideological clash between Source A and Source C?",
      options: [
        "Source A deploys utilitarian, paternalistic grandeur — erasing valley culture as 'barren' to legitimise urban extraction — whereas Source C exposes the cold limits of monetary compensation ('no column in their ledger') against sacred ancestral belonging",
        "Both writers agree that city engineers paid generous compensation that satisfied every family",
        "Source A uses informal colloquial slang, whereas Source C uses detached engineering statistics",
        "Source C objects only to the depth of the water rather than cultural displacement",
      ],
      answerIndex: 0,
      explanation:
        "Source A's adjectives (*'barren'*, *'scant'* vs *'imperial'*, *'industrious'*) construct a **utilitarian hierarchy** justifying rural erasure for urban numbers; Source C's accounting metaphor (*'no column in their ledger'*) pierces economic valuation with irreplaceable ancestral sacredness.",
      hints: [
        "Look at how Source A belittles the valley beforehand ('barren', 'scant', 'handful') to glorify the city.",
        "Unpack Source C's quiet, devastating metaphor: 'left no column in their ledger for the churchyard'.",
        "Contrast utilitarian numbers/imperial triumph against immeasurable ancestral loss.",
      ],
    },
    {
      id: "lang-p2-sources-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "comparing-rhetorical-methods",
      strategy: "Identify reversed parallel syntax (chiasmus)",
      question:
        "Read this standalone sentence from **Source E** (an essay on algorithmic newsfeeds):\n\n> *'Once, citizens shaped their newspapers; today, newsfeeds shape their citizens.'*\n\nWhat single Greek rhetorical term (starting with **c**) names this **mirror-image reversal** of grammatical/lexical order (*A–B* inverted into *B–A*)?",
      answer: {
        type: "text",
        accept: ["chiasmus", "antimetabole"],
        display: "chiasmus",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anaphora"], display: "anaphora" },
          feedback: "**Anaphora** repeats identical beginnings without inversion; reversing the order in a criss-cross mirror (*citizens → papers / feeds → citizens*) is **chiasmus**.",
        },
      ],
      commonError: "Calling inverted AB–BA mirror structures 'repetition' instead of naming **chiasmus**.",
      solution: [
        "Clause 1 moves *citizens → shaped → newspapers*; Clause 2 flips the roles into *newsfeeds → shape → citizens*.",
        "This criss-cross (*chi*-shaped) syntactic inversion is **chiasmus**.",
      ],
      hints: [
        "Map the pattern: [Citizens] shaped [media] → [Media] shape [citizens] (AB → BA).",
        "Named after the cross-shaped Greek letter *chi* (X).",
        "Starts with **chiasm-**.",
      ],
    },
    {
      id: "lang-p2-sources-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "comparing-rhetorical-methods",
      strategy: "Evaluate subtle shift from inclusive 'we' to accusatory 'you'",
      question:
        "In **Source B** (an essay on fast-delivery culture), paragraphs 1–3 repeatedly use **'we'** (*'We all relish a parcel arriving before breakfast'*), before the final paragraph abruptly switches to **'you'** (*'Next time you tap Same-Day Rush at midnight, picture the warehouse picker sprinting down Aisle 14'*). Why is this pronoun shift so effective?",
      options: [
        "It represents a careless proofreading slip in person consistency",
        "Opening with inclusive 'we' disarms reader defensiveness through shared confession, so the sudden pivot to singular 'you' lands with inescapable personal accountability at the moment of action",
        "Switching from 'we' to 'you' makes the ending sound detached and bureaucratic",
        "It proves the writer has never ordered a parcel online",
      ],
      answerIndex: 1,
      explanation:
        "Had the writer opened with accusatory *'you'*, readers would have bristled defensively; building rapport via confessional *'we'* first traps the reader inside the habit before narrowing the spotlight onto *'you'*.",
      hints: [
        "Ask how a reader reacts if lectured with 'You are selfish!' in line 1 versus 'We all do this...'.",
        "Once the reader nods along with 'we', what happens when the final sentence switches to 'Next time you tap...'?",
        "Connect confessional rapport first to targeted moral responsibility last.",
      ],
    },
    {
      id: "lang-p2-sources-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "comparing-rhetorical-methods",
      strategy: "Distinguish syndetic vs asyndetic listing pace",
      question:
        "Read **Source D** (a junior doctor's night-shift diary):\n\n> *'Bleepers shrilling, trolleys queuing, printers jamming, relatives waiting, handover overdue.'*\n\nBecause this breathless list deliberately **omits coordinating conjunctions** (*and* / *or*) between clauses to accelerate relentless pressure, what specific syntactic adjective (starting with **a**, opposite of *syndetic*) describes it?",
      answer: {
        type: "text",
        accept: ["asyndetic", "asyndeton", "asyndetic listing"],
        display: "asyndetic",
      },
      traps: [
        {
          spec: { type: "text", accept: ["syndetic", "polysyndetic", "polysyndeton"], display: "syndetic" },
          feedback: "**Polysyndetic** piles up 'and... and... and...'; stripping conjunctions out completely is **asyndetic** (*a-* = without)!",
        },
      ],
      commonError: "Reversing polysyndetic (many conjunctions) and asyndetic (zero conjunctions).",
      solution: [
        "Five participial fragments are separated solely by commas with zero *'and'* to offer syntactic closure.",
        "Listing without conjunctions is **asyndetic** listing (**asyndeton**).",
      ],
      hints: [
        "Notice there is not a single 'and' anywhere in the list, making it feel unending.",
        "In Greek, *syndeton* means 'bound together with conjunctions'; add the privative prefix **a-** ('without').",
        "Starts with **asynd-**.",
      ],
    },
    {
      id: "lang-p2-sources-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "synthesising-evidence-across-texts",
      strategy: "Synthesise across three sources with asymmetrical nuance",
      question:
        "Synthesise the positions of **Sources A, B, and E** on reintroducing lynx to Scottish forests:\n\n> - **Source A (Ecologist):** *'Apex predators restore overgrazed birch regeneration within ten years.'*\n> - **Source B (Eco-lodge owner):** *'Lynx-tracking tourism brought €3 million annually to comparable German valleys.'*\n> - **Source E (Hill-sheep smallholder):** *'Eco-lodges bank the glamour while upland crofters absorb stressed flocks and uninsurable boundary fencing.'*\n\nWhich synthesis statement achieves Level 4 multi-source precision?",
      options: [
        "Sources A and B converge in advocating reintroduction — combining ecological recovery with rural tourism revenue — whereas Source E exposes an unequal distribution of risk, arguing commercial beneficiaries pocket profits while smallholders bear uncompensated livestock costs",
        "All three sources oppose reintroducing lynx because German valleys lost money",
        "Source A focuses on economics, Source B focuses on birch trees, and Source E supports lynx",
        "Sources A, B, and E agree that lynx pose zero financial impact to hill farmers",
      ],
      answerIndex: 0,
      explanation:
        "Level 4 three-text synthesis groups the **pro-reintroduction coalition** (A's ecological case + B's economic case) while showing how **Source E directly interrogates Source B's optimism** (*who gets the revenue vs who carries the risk*).",
      hints: [
        "First pair the two pro-reintroduction extracts (the ecologist and the eco-lodge owner) and distinguish *why* each supports lynx.",
        "Next look at how Source E directly answers Source B's 'tourism revenue' claim.",
        "Frame the clash around unequal distribution of profit versus practical risk.",
      ],
    },
    {
      id: "lang-p2-sources-ch-q06",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      guideRef: "high-tariff-comparative-paragraphs",
      strategy: "Compare subtle tonal pivots across two extracts",
      question:
        "Compare how **both** writers shift their tone to deepen their viewpoints on competitive youth sport. [4 marks]\n\n> **Source A (Former child tennis prodigy):** *'At twelve, hoisting silver trophies beneath floodlights felt like coronation. By nineteen, counting cortisone injections alone in hotel bathrooms, I understood I had been a depreciating asset.'*\n> **Source C (Grassroots Saturday football coach):** *'Watching nine-year-olds trip over oversized laces in sideways sleet hardly resembles Wembley glory — yet when the shyest boy scores off his shin and twenty muddy teammates mob him, elite academies look impoverished.'*",
      modelAnswer:
        "Both writers deploy contrasting two-part tonal arcs that invert conventional sporting prestige. Source A opens in intoxicating glamour ('coronation') before pivoting bleakly to cold, commodified disillusionment via the financial metaphor 'depreciating asset'. Conversely, Source C opens with wry, bathetic understatement ('sideways sleet') before elevating amateur chaos into joyous communal triumph, judging slick academies emotionally 'impoverished'.",
      markScheme: [
        {
          point: "Identifies that BOTH extracts execute inverse/mirror-image tonal shifts challenging conventional sporting success.",
          keywords: ["both", "invert", "shift", "pivot", "arc", "trajectory"],
        },
        {
          point: "Analyses Source A's descent from regal euphoria ('coronation') to commodified disillusionment ('depreciating asset').",
          keywords: ["coronation", "disillusion", "commodif", "depreciat", "bleak", "financial"],
        },
        {
          point: "Contrasts Source C's opposite climb from wry/bathetic modesty ('sleet') to warm communal joy.",
          keywords: ["conversely", "whereas", "bathos", "bathetic", "wry", "joy", "communal"],
        },
        {
          point: "Unpacks Source C's ironic reversal in 'impoverished', redefining wealth as belonging rather than elite trophies.",
          keywords: ["impoverished", "iron", "redefin", "belonging", "prestige"],
        },
      ],
      commonError: "Treating each source as having one static tone and missing that Source A falls (glamour → hollowness) while Source C rises (mud → richness).",
      hints: [
        "Map the two trajectories: Source A starts high ('coronation') and drops low; Source C starts low ('sideways sleet') and rises high!",
        "Zoom onto the economic/wealth metaphors at the end of BOTH extracts: 'depreciating asset' vs 'impoverished'.",
        "Use a sharp WEAVE hinge ('Conversely...') to connect their mirror-image arcs.",
      ],
    },
    {
      id: "lang-p2-sources-ch-q07",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      guideRef: "comparing-rhetorical-methods",
      strategy: "Contrast archival understatement against modern polemic",
      question:
        "Compare the rhetorical methods used in **Source B** and **Source D** to depict factory noise. [4 marks]\n\n> **Source B (1911 Medical Officer's report):** *'Prolonged attendance beside six hundred unmuffled power-looms induces a progressive dullness of hearing which operatives accept with fatalistic stoicism.'*\n> **Source D (Contemporary labour journalist):** *'Step onto the bottling floor without ear-defenders and an iron hammer-drill of decibels colonises your skull — stealing conversation, calm, and eventually silence itself.'*",
      modelAnswer:
        "Whereas Source B's 1911 physician relies on clinical, measured detachment to document chronic industrial harm, Source D thrusts the reader into visceral sensory assault. Source B uses Latinate medical register ('progressive dullness') and poignant observation ('fatalistic stoicism') to persuade officials via authoritative ethos. By contrast, Source D deploys an imperative ('Step'), invasive metaphor ('colonises your skull'), and an escalating tricolon ending in paradox ('stealing... silence') to provoke immediate empathy.",
      markScheme: [
        {
          point: "Contrasts Source B's clinical/detached archival ethos against Source D's immersive visceral immediacy.",
          keywords: ["clinical", "detached", "ethos", "visceral", "immers", "whereas", "contrast"],
        },
        {
          point: "Analyses Source B's measured medical phrasing ('progressive dullness') and quiet sympathy in 'fatalistic stoicism'.",
          keywords: ["medical", "latinate", "stoicism", "fatalistic", "measured"],
        },
        {
          point: "Analyses Source D's imperative ('Step') and violent/invasive metaphor ('colonises' / 'hammer-drill').",
          keywords: ["imperative", "metaphor", "colonis", "assault", "invasive"],
        },
        {
          point: "Unpacks Source D's closing tricolon and poignant paradox of 'stealing... silence' (tinnitus/deafness).",
          keywords: ["tricolon", "paradox", "iron", "silence", "empathy"],
        },
      ],
      commonError: "Calling Source B 'uncaring' just because its 1911 medical register is formal — missing the quiet indictment inside 'fatalistic stoicism'.",
      hints: [
        "Respect the 1911 genre in Source B: how does a Medical Officer build credibility for reform without shouting?",
        "Contrast that formal restraint against Source D's second-person imperative ('Step...') and violent metaphor ('colonises your skull').",
        "Don't miss the brilliant paradox at the end of Source D's tricolon: how can noise steal *silence*?",
      ],
    },
    {
      id: "lang-p2-sources-ch-q08",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      guideRef: "high-tariff-comparative-paragraphs",
      strategy: "Evaluate structural endings & vested interest across two texts",
      question:
        "Compare how the writers of **Source A** and **Source E** use their closing lines to reinforce their agendas on fast-fashion garments. [4 marks]\n\n> **Source A (Fast-fashion brand sustainability page):** *'Drop yesterday's look into our pastel instore bins, claim your 15% loyalty voucher, and step guilt-free into Friday's trend!'*\n> **Source E (Ghanaian textile-market trader interviewed in a documentary):** *'Containers of Europe's \"recycled\" charity bales burst open on Kantamanto beach every tide; we stitch what holds together and bury the synthetic rot.'*",
      modelAnswer:
        "Placed side by side, Source E's ending ruthlessly dismantles the soothing consumer illusion engineered by Source A. Source A strings together breezy imperatives ('Drop', 'claim', 'step') and commercial bribery ('15% loyalty voucher') to commodify absolution ('guilt-free') and drive repeat purchases. Conversely, Source E's ironic scare quotes around '\"recycled\"' and stark sensory antithesis between salvage ('stitch') and pollution ('synthetic rot') expose Western disposal bins as offshore dumping.",
      markScheme: [
        {
          point: "Synthesises the ideological collision: Source E exposes the downstream reality hidden behind Source A's greenwashing.",
          keywords: ["greenwash", "illusion", "downstream", "dismantl", "expos", "agenda"],
        },
        {
          point: "Analyses Source A's upbeat imperative tricolon and transactional 'guilt-free' voucher driving further consumption.",
          keywords: ["imperative", "voucher", "guilt", "transactional", "consum", "commercial"],
        },
        {
          point: "Analyses Source E's ironic scare quotes ('recycled') puncturing corporate claims.",
          keywords: ["scare quote", "inverted comma", "iron", "punctur", "sceptic"],
        },
        {
          point: "Unpacks Source E's visceral closing imagery ('synthetic rot') and frontline lived perspective.",
          keywords: ["visceral", "rot", "sensory", "frontline", "offshore", "dump", "conversely", "whereas"],
        },
      ],
      commonError: "Analysing each ending in isolation without showing how Source E's 'recycled' in quotation marks directly answers Source A's 'guilt-free' bin.",
      hints: [
        "Notice what Source A's '15% loyalty voucher' actually encourages the shopper to do immediately!",
        "Look at why Source E puts quotation marks around '\"recycled\"' when bales wash onto Kantamanto beach.",
        "Frame your WEAVE paragraph around commercial greenwashing versus frontline environmental reality.",
      ],
    },
  ],
};

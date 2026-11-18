import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  "id": "exam-lang2",
  "title": "OxfordAQA 9270 Paper 2 Mock — Multi-Source Synthesis & Directed Writing",
  "calculator": false,
  "minutes": 120,
  "questions": [
    {
      "id": "exam-lang2-q01",
      "kind": "short",
      "topicId": "lang-p2-sources",
      "guideRef": "decoding-multi-source-pack",
      "difficulty": "warmup",
      "question": "In OxfordAQA 9270 Paper 2 Section A, stimulus material consists of a pack of linked texts (typically 5–6 sources). In the pre-reading acronym **GAP**, what does the letter **A** stand for?",
      "answer": {
        "type": "text",
        "accept": [
          "audience",
          "the audience",
          "target audience"
        ],
        "display": "Audience"
      },
      "solution": [
        "In **GAP**, **G** = Genre/Form, **A** = **Audience**, and **P** = Purpose — the three coordinates that govern every writer's tone and method."
      ],
      "commonError": "Forgetting to check WHO a source was written for before judging its register.",
      "hints": [
        "G = Genre, A = who reads or hears the text, P = Purpose."
      ]
    },
    {
      "id": "exam-lang2-q02",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "synthesising-evidence-across-texts",
      "difficulty": "core",
      "question": "Read these two stimulus extracts on fast fashion:\n\n*Source A ( investigative report): \"Every second, the equivalent of one rubbish truck of textiles is landfilled or incinerated; polyester fibres shed in domestic washes now outnumber plankton in coastal samples.\"*\n*Source B (teenage thrift-shopper's blog): \"Digging through charity rails feels like treasure hunting — why pay forty pounds to look like a mannequin clone when a five-pound vintage jacket has a soul?\"*\n\nWhich statement best **synthesises** a shared underlying stance while distinguishing their focus?",
      "options": [
        "Source A strongly supports fast fashion factories, whereas Source B wants charity shops banned.",
        "Both writers reject disposable mass-produced clothing, yet Source A condemns its planetary ecological toll whereas Source B celebrates thrift as affordable individuality.",
        "Both writers rely exclusively on marine biology statistics to persuade policymakers.",
        "Source A is an informal diary entry, whereas Source B is a peer-reviewed scientific journal."
      ],
      "answerIndex": 1,
      "explanation": "Synthesis identifies the conceptual common ground (critique of throwaway mass fashion) AND the divergence in focus/angle (global environmental destruction vs personal budget & self-expression).",
      "hints": [
        "Find what BOTH writers oppose, then contrast Source A's ecological scale with Source B's personal style/cost angle.",
        "Eliminate options that misidentify genre or reverse a writer's stance."
      ]
    },
    {
      "id": "exam-lang2-q03",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "adapting-form-audience-purpose",
      "difficulty": "warmup",
      "question": "In formal British English letter conventions for Paper 2 Section B, if your letter opens with **\"Dear Sir or Madam,\"** (because the recipient's name is unknown), which two-word sign-off must close the letter?",
      "answer": {
        "type": "text",
        "accept": [
          "yours faithfully"
        ],
        "display": "Yours faithfully"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "yours sincerely"
            ]
          },
          "feedback": "'Yours sincerely' pairs with a named recipient (e.g. 'Dear Ms Patel,'); 'Dear Sir or Madam,' pairs with 'Yours faithfully'."
        }
      ],
      "solution": [
        "Mnemonic: never put two **S**s together — *Dear **S**ir/Madam* → **Yours faithfully**; *Dear Ms **P**atel* → **Yours sincerely**."
      ],
      "commonError": "Writing 'Yours sincerely' after 'Dear Sir or Madam' or signing off a formal letter with 'Cheers'.",
      "hints": [
        "Remember the S-rule: 'Sir/Madam' never pairs with 'Sincerely'."
      ]
    },
    {
      "id": "exam-lang2-q04",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "comparing-rhetorical-methods",
      "difficulty": "core",
      "question": "Read these two extracts about school start times:\n\n*Source C (sleep neurologist): \"Adolescent melatonin release shifts roughly two hours later during puberty; forcing 7:30 a.m. lessons truncates REM sleep by up to 28%.\"*\n*Source D (parent columnist): \"Every weekday at 6:45 a.m. I prise a hibernating teenager from beneath a duvet fortress and pour lukewarm porridge into a zombie.\"*\n\nWhich comparison accurately contrasts **how** the two writers convey the same problem?",
      "options": [
        "Source C establishes clinical authority through physiological terminology and quantified data, whereas Source D uses domestic hyperbole and comic metaphor to make sleep deprivation relatable.",
        "Source C uses informal slang and jokes, whereas Source D relies strictly on laboratory percentages.",
        "Source C argues lessons should start at 5:00 a.m., whereas Source D argues school should be abolished.",
        "Both writers use identical neutral, emotionless encyclopaedia prose."
      ],
      "answerIndex": 0,
      "explanation": "Source C builds scientific **logos/ethos** ('melatonin', 'REM sleep', '28%'), while Source D builds warm **humour/relatability** via hyperbolic metaphors ('hibernating', 'duvet fortress', 'zombie').",
      "hints": [
        "Compare the register and devices of 'melatonin / REM / 28%' against 'duvet fortress / zombie'.",
        "Notice both agree mornings are too early, so focus on the contrast in *method*."
      ]
    },
    {
      "id": "exam-lang2-q05",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "rhetorical-precision-ethos-logos-pathos",
      "difficulty": "core",
      "question": "Read this opening from a student's Paper 2B speech:\n\n*\"Do we really lack the budget for a youth library? One glance at the council's forty-thousand-pound floral roundabout answers that question.\"*\n\nName the rhetorical device in which a speaker poses a question and **immediately answers it themselves**.",
      "answer": {
        "type": "text",
        "accept": [
          "hypophora",
          "anthypophora"
        ],
        "display": "hypophora"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "rhetorical question"
            ]
          },
          "feedback": "A pure rhetorical question is left unanswered; asking a question and immediately supplying the answer is **hypophora**."
        }
      ],
      "solution": [
        "Raising a question and immediately answering it to control the audience's reasoning is **hypophora**."
      ],
      "commonError": "Labelling every question-plus-answer pair merely a 'rhetorical question' and missing the Grade-9 term 'hypophora'.",
      "hints": [
        "Unlike a standalone rhetorical question, the speaker immediately supplies the killer answer.",
        "Greek rhetorical term starting with 'hypo-'."
      ]
    },
    {
      "id": "exam-lang2-q06",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "high-tariff-comparative-paragraphs",
      "difficulty": "core",
      "question": "Why does a **block-by-block** answer (*three paragraphs exclusively on Source A, followed by three paragraphs on Source B with 'They are somewhat similar' tacked on the end*) cap marks on an OxfordAQA 9270 comparative question?",
      "options": [
        "Comparative connectives like 'whereas' and 'conversely' are penalised in Paper 2.",
        "Examiners stop marking after paragraph three on every Paper 2 question.",
        "OxfordAQA requires discussing at least twelve texts in every single sentence.",
        "It leaves comparison implicit until the final line instead of weaving sustained point-by-point analytical connections across both texts throughout."
      ],
      "answerIndex": 3,
      "explanation": "Top-band comparison integrates both texts inside each conceptual paragraph ('Whereas Source A weaponises… Source B tempers…'), proving sustained cross-examination of viewpoints and methods.",
      "hints": [
        "Think about integrated point-by-point comparison versus two disconnected mini-essays.",
        "Ask where comparative connectives ('whereas', 'conversely') belong in a top-band response."
      ]
    },
    {
      "id": "exam-lang2-q07",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "rhetorical-precision-ethos-logos-pathos",
      "difficulty": "warmup",
      "question": "In Aristotle's rhetorical triad (**Ethos, Logos, Pathos**), which Greek term refers to establishing the speaker's **credibility, moral authority, and trustworthiness**?",
      "answer": {
        "type": "text",
        "accept": [
          "ethos"
        ],
        "display": "ethos"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "pathos"
            ]
          },
          "feedback": "'Pathos' appeals to emotion; 'Logos' appeals to logic/evidence; 'Ethos' establishes credibility and character."
        },
        {
          "spec": {
            "type": "text",
            "accept": [
              "logos"
            ]
          },
          "feedback": "'Logos' appeals to logic and data; 'Ethos' establishes speaker credibility and moral authority."
        }
      ],
      "solution": [
        "**Ethos** = credibility/character; **Logos** = logic/evidence; **Pathos** = emotional appeal."
      ],
      "commonError": "Confusing Ethos (credibility/ethics) with Pathos (emotion/sympathy).",
      "hints": [
        "Think of the English word 'ethics' — grounded in speaker character and authority."
      ]
    },
    {
      "id": "exam-lang2-q08",
      "kind": "mcq",
      "topicId": "lang-p2-directed",
      "guideRef": "transforming-source-material",
      "difficulty": "core",
      "question": "Section A Source 3 states: *\"City bus ridership among 14–18-year-olds fell by 34% after single fares rose above £2.80 in 2024.\"* \n\nIn Paper 2 Section B (a speech to the Transport Committee arguing for free youth travel), which sentence **transforms** this source fact at a Grade-9 level without lifting?",
      "options": [
        "Did you know that 99% of buses in the city are completely empty because tickets cost £50 each?",
        "City bus ridership among 14–18-year-olds fell by 34% after single fares rose above £2.80 in 2024.",
        "Pricing young people off public transport is false economy: the moment a single bus fare crept past £2.80, a third of teenage passengers vanished from our routes.",
        "Buses have wheels and doors and teenagers sometimes ride them to school."
      ],
      "answerIndex": 2,
      "explanation": "Grade-9 directed writing harvests the accurate anchor from Section A (~34% → 'a third', >£2.80) and recasts it in persuasive speech syntax ('false economy', 'vanished from our routes') rather than copying verbatim or fabricating fake statistics.",
      "hints": [
        "Avoid verbatim copying AND avoid inventing wild fake numbers ('99% / £50').",
        "Look for accurate synthesis recast into forceful rhetorical phrasing."
      ]
    },
    {
      "id": "exam-lang2-q09",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "rhetorical-precision-ethos-logos-pathos",
      "difficulty": "core",
      "question": "Read this speech excerpt:\n\n*\"We owe them clean rivers. We owe them honest science. We owe them a habitable century.\"*\n\nName the rhetorical device created by repeating **\"We owe them\"** at the **beginning** of successive clauses.",
      "answer": {
        "type": "text",
        "accept": [
          "anaphora"
        ],
        "display": "anaphora"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "epiphora",
              "epistrophe"
            ]
          },
          "feedback": "Epiphora/epistrophe repeats words at the END of clauses; repeating words at the BEGINNING of successive clauses is **anaphora**."
        }
      ],
      "solution": [
        "Deliberate repetition of a phrase at the start of successive clauses or sentences is **anaphora** (here combined with a three-part tricolon)."
      ],
      "commonError": "Calling clause-initial repetition 'alliteration' (which is initial consonant sounds, not whole phrases).",
      "hints": [
        "The exact phrase 'We owe them' opens three consecutive sentences.",
        "Greek term starting with 'ana-' for repetition at the start of clauses."
      ]
    },
    {
      "id": "exam-lang2-q10",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "comparing-writers-perspectives",
      "difficulty": "challenge",
      "question": "Read these two extracts on solo ocean rowing:\n\n*Source E (19th-century newspaper editorial): \"To cross the Atlantic in a cockleshell skiff is no heroism, but reckless vanity that taxes coastguards for a headline.\"*\n*Source F (modern solo rower's memoir): \"Mid-ocean strips away every excuse; out there, four metres of fibreglass teaches you the exact size of your own courage.\"*\n\nWhich analysis most perceptively explains the clash of viewpoints?",
      "options": [
        "Both writers agree that solo ocean rowers are selfish attention-seekers who waste rescue budgets.",
        "Source E judges the voyage externally through public duty and dismissal ('cockleshell', 'reckless vanity'), whereas Source F frames it internally as existential self-discovery.",
        "Source E is written from first-person personal experience at sea, whereas Source F is a hostile third-party critique.",
        "Source F mocks fibreglass boats as unsafe compared with 19th-century wooden skiffs."
      ],
      "answerIndex": 1,
      "explanation": "Source E adopts an external, moralising civic lens ('cockleshell' belittles the boat; 'reckless vanity' attacks motive), while Source F uses an inward, reflective lens ('strips away every excuse') to frame danger as moral clarity.",
      "hints": [
        "Contrast Source E's public/civic condemnation ('reckless vanity', 'taxes coastguards') with Source F's inward psychological lens.",
        "Notice how diminutive 'cockleshell' vs 'strips away every excuse' reveal opposing value systems."
      ]
    },
    {
      "id": "exam-lang2-q11",
      "kind": "written",
      "topicId": "lang-p2-sources",
      "guideRef": "high-tariff-comparative-paragraphs",
      "difficulty": "challenge",
      "question": "Compare how the two writers convey their attitudes toward urban wildlife in these extracts:\n\n*Source A (nature essayist): \"At dusk the vixen threads the alleyways like ember-silk, reclaiming a concrete parish that forgot it was once forest.\"*\n*Source B (pest-control letter): \"Bold urban foxes rip open clinical waste sacks nightly; sentimentality will not disinfect our pavements.\"*\n\nWrite one woven comparative paragraph analysing **viewpoints and methods**. [4 marks]",
      "marks": 4,
      "modelAnswer": "Whereas Source A romanticises the fox as a rightful, almost sacred native through lyrical simile ('ember-silk') and religious metaphor ('parish'), Source B condemns the animal as a public-health menace. Source A's verb 'reclaiming' aligns reader sympathy with displaced nature; conversely, Source B deploys blunt plosive verbs ('rip') and dismissive abstract nouns ('sentimentality', 'disinfect') to demand pragmatic sanitation over emotion.",
      "markScheme": [
        {
          "point": "Uses an explicit comparative hinge ('Whereas', 'Conversely', 'By contrast', 'While') to link both attitudes.",
          "keywords": [
            "whereas",
            "conversely",
            "contrast",
            "while",
            "unlike"
          ]
        },
        {
          "point": "Analyses Source A's admiring/reverent perspective and poetic/religious imagery ('simile', 'metaphor', 'sacred', 'lyrical', 'rightful').",
          "keywords": [
            "romanticises",
            "reverent",
            "sacred",
            "simile",
            "metaphor",
            "lyrical",
            "rightful",
            "admiring"
          ]
        },
        {
          "point": "Analyses Source B's pragmatic/hostile perspective and blunt/hygienic diction ('menace', 'plosive', 'pragmatic', 'sanitation', 'hygiene', 'health').",
          "keywords": [
            "menace",
            "pragmatic",
            "hygiene",
            "sanitation",
            "health",
            "hostile",
            "blunt",
            "plosive",
            "dismissive"
          ]
        },
        {
          "point": "Explains how the contrasting methods position the reader (sympathy with nature vs alarm/action).",
          "keywords": [
            "sympathy",
            "aligns",
            "alarm",
            "urgency",
            "reader",
            "emotion"
          ]
        }
      ],
      "commonError": "Summarising what foxes do in each extract instead of comparing poetic/religious elevation against clinical public-health rhetoric.",
      "hints": [
        "Open with a comparative hinge ('Whereas Source A… Source B…').",
        "Unpack 'ember-silk' / 'parish' / 'reclaiming' in Source A.",
        "Contrast with 'rip' / 'sentimentality' / 'disinfect' in Source B."
      ]
    },
    {
      "id": "exam-lang2-q12",
      "kind": "mcq",
      "topicId": "lang-p2-directed",
      "guideRef": "adapting-form-audience-purpose",
      "difficulty": "core",
      "question": "You are asked in Paper 2 Section B to write a **broadsheet newspaper article** evaluating whether smartphones should be locked in pouches during the school day. Which opening best fits the **genre, audience, and register**?",
      "options": [
        "Headline + strapline, followed by a sharp topical hook that frames the tension between classroom focus and parental anxiety in crisp, authoritative prose.",
        "\"Dear Sir or Madam, I am writing to apply for the position of Smartphone Pouch Officer. Yours faithfully.\"",
        "\"Yo guys!! Smash that like button if pouches are totally cringe lol!!\"",
        "\"Once upon a time in a magical kingdom, a wizard cast a spell on every glowing mirror.\""
      ],
      "answerIndex": 0,
      "explanation": "A broadsheet article uses an engaging headline/strapline and controlled, articulate journalistic prose tailored to an informed general readership — never letter salutations, social-media slang, or fairy-tale fiction.",
      "hints": [
        "Match the conventions of serious journalism (headline, topical hook, balanced/authoritative register).",
        "Eliminate letter salutations, teenage chat slang, and fairy-tale openings."
      ]
    },
    {
      "id": "exam-lang2-q13",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "rhetorical-precision-ethos-logos-pathos",
      "difficulty": "core",
      "question": "Read this sentence from a persuasive essay:\n\n*\"We have built wider motorways, yet narrower communities; taller towers, yet smaller lives.\"*\n\nName the rhetorical device that places **contrasting ideas side by side in parallel grammatical structures** (*wider/narrower, taller/smaller*).",
      "answer": {
        "type": "text",
        "accept": [
          "antithesis"
        ],
        "display": "antithesis"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "oxymoron"
            ]
          },
          "feedback": "An oxymoron compresses two contradictory words into one tight phrase ('deafening silence'); balanced parallel clauses contrasting opposite ideas is **antithesis**."
        }
      ],
      "solution": [
        "Balancing opposite ideas in parallel syntax ('wider motorways, yet narrower communities') is **antithesis**."
      ],
      "commonError": "Confusing antithesis (parallel contrasting clauses) with oxymoron (two adjacent contradictory words like 'bitter sweet').",
      "hints": [
        "Notice the balanced parallel grammar pairing opposites: wider vs narrower, taller vs smaller.",
        "Starts with 'anti-' (against) + 'thesis' (placing)."
      ]
    },
    {
      "id": "exam-lang2-q14",
      "kind": "mcq",
      "topicId": "lang-p2-directed",
      "guideRef": "cohesive-discourse-counterargument",
      "difficulty": "core",
      "question": "Why does including a **preemptive rebuttal** paragraph (*\"Critics inevitably object that…; yet that calculation ignores…\"*) elevate a Paper 2B persuasive speech from Band 3 to Grade 9?",
      "options": [
        "It pads out word count when you run out of ideas from Section A.",
        "It shows you have changed your mind halfway through and no longer believe your own thesis.",
        "OxfordAQA marks speeches strictly by counting how many times the word 'critics' appears.",
        "It demonstrates intellectual command by anticipating the audience's strongest doubt and dismantling it with reasoned evidence."
      ],
      "answerIndex": 3,
      "explanation": "Anticipating and refuting a sceptical audience's most plausible objection strengthens **ethos** and **logos**, proving your argument survives scrutiny rather than ignoring inconvenient realities.",
      "hints": [
        "Think about how sceptical governors or readers react when a speaker addresses their exact concern head-on.",
        "Anticipating an objection builds ethos (fair-mindedness) and logos (reasoned refutation)."
      ]
    },
    {
      "id": "exam-lang2-q15",
      "kind": "short",
      "topicId": "lang-p2-sources",
      "guideRef": "decoding-multi-source-pack",
      "difficulty": "warmup",
      "question": "In OxfordAQA 9270, what percentage of the total IGCSE English Language qualification is weighted on **Paper 2** (*Source-based reading and directed writing*, 80 marks total across Section A and Section B)? Give the number without the `%` sign or with `%`.",
      "answer": {
        "type": "number",
        "value": 40
      },
      "solution": [
        "In OxfordAQA 9270, Paper 1 is worth **60%** and Paper 2 (*Source-based reading and directed writing*) is worth **40%**."
      ],
      "commonError": "Assuming Paper 1 and Paper 2 are weighted 50/50 — Paper 1 is 60% and Paper 2 is 40%.",
      "hints": [
        "Paper 1 is 60%; the remaining percentage belongs to Paper 2."
      ]
    },
    {
      "id": "exam-lang2-q16",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "comparing-rhetorical-methods",
      "difficulty": "core",
      "question": "Read this extract from a travel column:\n\n*\"The 'boutique eco-lodge' boasted solar lanterns — powered, naturally, by a diesel generator chugging behind the hibiscus hedge.\"*\n\nHow does the adverb **\"naturally\"** set off by commas function here?",
      "options": [
        "As warm praise for how seamlessly the generator blended into nature.",
        "As literal scientific proof that diesel fuel grows organically on hibiscus bushes.",
        "As a dry, sardonic parenthetical jab exposing the lodge's greenwashing hypocrisy.",
        "As a neutral chronological connective meaning 'later that afternoon'."
      ],
      "answerIndex": 2,
      "explanation": "Placing 'naturally' inside parenthetical punctuation right before 'diesel generator' weaponises double meaning: 'of course' (cynical expectation of hypocrisy) vs 'natural/eco' (ironically contradicted by diesel).",
      "hints": [
        "Notice the double pun on 'naturally' (= 'predictably' vs 'eco-friendly') right before 'diesel generator'.",
        "Does a diesel generator support or undercut the claim of an 'eco-lodge'?"
      ]
    },
    {
      "id": "exam-lang2-q17",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "rhetorical-precision-ethos-logos-pathos",
      "difficulty": "core",
      "question": "Read this persuasive sentence:\n\n*\"Solar rooftops deliver three immediate wins for our school: cleaner air, quieter classrooms, and lower energy bills.\"*\n\nName the classical Greek rhetorical term for a balanced **three-part series** of words, phrases, or clauses (*\"cleaner air, quieter classrooms, and lower energy bills\"*).",
      "answer": {
        "type": "text",
        "accept": [
          "tricolon",
          "triad",
          "rule of three",
          "power of three"
        ],
        "display": "tricolon"
      },
      "solution": [
        "A balanced three-part series of words, phrases, or clauses ('clean air, quieter classrooms, and lower bills') is a **tricolon** (or **triad** / **rule of three**)."
      ],
      "commonError": "Calling a three-part parallel series 'couplet' (which has two lines).",
      "hints": [
        "Greek root 'tri-' (three) + 'colon' (clause/member).",
        "Also widely known in English rhetoric as a triad or the rule of three."
      ]
    },
    {
      "id": "exam-lang2-q18",
      "kind": "mcq",
      "topicId": "lang-p2-directed",
      "guideRef": "stylistic-polish-spag-marks",
      "difficulty": "core",
      "question": "In a Paper 2B formal letter to your Principal proposing a peer-mentoring programme, which sentence achieves the most effective **polite, authoritative register**?",
      "options": [
        "If you don't start a mentoring club immediately then clearly you don't care about younger students at all!",
        "Pairing trained Year 11 mentors with Year 7 tutor groups for twenty minutes each Wednesday would halve transition referrals at virtually zero cost to the timetable.",
        "I reckon maybe we could sort of try hanging out with the Year 7s sometimes if teachers aren't busy.",
        "94.728% of Harvard professors proved yesterday that our school corridor is the worst in Asia."
      ],
      "answerIndex": 1,
      "explanation": "Top-band formal persuasion pairs concrete, practical specificity ('twenty minutes each Wednesday', 'virtually zero cost') with measured modal verbs ('would halve'), avoiding rude hostility, vague hedging ('sort of'), and absurd fake statistics.",
      "hints": [
        "Compare constructive specificity + measured modal confidence against rudeness, vague slang, and fake stats.",
        "Which option gives a concrete, workable proposal respectful of a Principal's priorities?"
      ]
    },
    {
      "id": "exam-lang2-q19",
      "kind": "short",
      "topicId": "lang-p2-sources",
      "guideRef": "comparing-rhetorical-methods",
      "difficulty": "challenge",
      "question": "Read this review line:\n\n*\"Waiting four hours on the tarmac without water was not entirely unhelpful to my blood pressure — if my goal had been cardiac arrest.\"*\n\nName the rhetorical device in **\"not entirely unhelpful\"**, where an idea is expressed via **ironic understatement using a negated opposite**.",
      "answer": {
        "type": "text",
        "accept": [
          "litotes",
          "understatement"
        ],
        "display": "litotes"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "hyperbole"
            ]
          },
          "feedback": "Hyperbole is extreme exaggeration ('cardiac arrest'); expressing an idea via negated opposite understatement ('not entirely unhelpful') is **litotes**."
        }
      ],
      "solution": [
        "**Litotes** uses double negation or negated-opposite understatement ('not uncommon', 'no small feat', 'not entirely unhelpful') for dry ironic emphasis."
      ],
      "commonError": "Confusing litotes (negated understatement) with hyperbole (exaggeration).",
      "hints": [
        "Notice the negated opposite structure: 'not … un-'.",
        "Seven-letter Greek term starting with 'l' for ironic understatement via negation."
      ]
    },
    {
      "id": "exam-lang2-q20",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "synthesising-evidence-across-texts",
      "difficulty": "core",
      "question": "Read these two short extracts on community allotments:\n\n*Source 1 (public-health report): \"Residents tending shared plots recorded a 22% drop in cortisol levels and knew an average of six more neighbours by name within a year.\"*\n*Source 2 (retired postman's interview): \"After my wife died, the flat walls closed in; down at Plot 14, someone always hands you a thermos and asks how your runner beans took the frost.\"*\n\nWhat implicit connection links Source 1 and Source 2?",
      "options": [
        "Source 2 humanises through lived bereavement and companionship the exact physiological and social recovery measured statistically in Source 1.",
        "Source 2 contradicts Source 1 by proving allotments make elderly residents feel more isolated.",
        "Source 1 argues allotments should be paved for car parks, whereas Source 2 defends vegetable growing.",
        "Both sources focus exclusively on commercial agricultural exports."
      ],
      "answerIndex": 0,
      "explanation": "Source 1 quantifies reduced stress ('22% drop in cortisol') and neighbourly connection ('six more neighbours'), while Source 2 embodies that exact relief in human anecdote ('walls closed in' → shared 'thermos' and conversation).",
      "hints": [
        "Match 'drop in cortisol + six more neighbours' in Source 1 to the postman's recovery from grief in Source 2.",
        "Notice how Source 1 gives quantitative evidence while Source 2 gives lived human testimony of the same benefit."
      ]
    },
    {
      "id": "exam-lang2-q21",
      "kind": "short",
      "topicId": "lang-p2-directed",
      "guideRef": "cohesive-discourse-counterargument",
      "difficulty": "core",
      "question": "In the persuasive checklist mnemonic **DAFOREST**, what device does the letter **A** (aside from Alliteration) most commonly stand for when illustrating a point with a brief, real-world personal or human story?",
      "answer": {
        "type": "text",
        "accept": [
          "anecdote",
          "anecdotes"
        ],
        "display": "anecdote"
      },
      "solution": [
        "In **DAFOREST** (Direct address, Alliteration/**Anecdote**, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triples), a short illustrative human story is an **anecdote**."
      ],
      "commonError": "Confusing 'anecdote' (a short illustrative story) with 'antidote' (a cure for poison!).",
      "hints": [
        "Check spelling carefully: 'anec-dote' (a short real-life story), NOT 'anti-dote'.",
        "In DAFOREST: Direct address, Alliteration / ___, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triples."
      ]
    },
    {
      "id": "exam-lang2-q22",
      "kind": "mcq",
      "topicId": "lang-p2-directed",
      "guideRef": "stylistic-polish-spag-marks",
      "difficulty": "core",
      "question": "Why does overusing ALL CAPS, triple exclamation marks (*\"ACT NOW!!!\"*), and rhetorical questions in every single sentence (*\"Don't you care? Aren't you ashamed? Won't someone think?\"*) **lower** your Paper 2B mark?",
      "options": [
        "Speeches are never allowed to address the audience directly.",
        "Exclamation marks are illegal in the English language.",
        "Examiners subtract two marks per question mark used in Section B.",
        "Relentless shouting flattens tonal modulation, turning controlled rhetoric into monotonous melodrama that alienates an intelligent audience."
      ],
      "answerIndex": 3,
      "explanation": "Rhetorical impact depends on **contrast and restraint**: one surgical hypophora or exclamation after calm, evidence-led **logos** lands with ten times the force of non-stop hysteria.",
      "hints": [
        "If everything is shouted at volume 10, nothing stands out — think tonal modulation.",
        "Persuasive power relies on contrast between calm evidence and selective rhetorical emphasis."
      ]
    },
    {
      "id": "exam-lang2-q23",
      "kind": "written",
      "topicId": "lang-p2-directed",
      "guideRef": "transforming-source-material",
      "difficulty": "challenge",
      "question": "Using these two Section A stimulus facts — *(1) 68% of discarded laptops contain working or easily repairable parts; (2) a local youth repair café trained 40 teenagers in electronics while cutting e-waste* — write the **opening paragraph of a speech** to your School Governors proposing a monthly Repair Lab at school. [4 marks]",
      "marks": 4,
      "modelAnswer": "Members of the Governing Body, every term skip-loads of dented laptops leave our campus destined for landfill, even though more than two-thirds of discarded machines need nothing more than a replacement cable or battery. By launching a monthly Saturday Repair Lab — modelled on neighbourhood repair cafés where dozens of sixth-formers already master circuitry alongside local engineers — our school can slash electronic waste while equipping students with tangible engineering competence.",
      "markScheme": [
        {
          "point": "Uses authentic speech direct address appropriate to School Governors.",
          "keywords": [
            "governors",
            "governing body",
            "colleagues",
            "panel",
            "board",
            "our school",
            "our campus"
          ]
        },
        {
          "point": "Transforms Fact 1 (~68% repairable e-waste) into own persuasive wording without verbatim lifting.",
          "keywords": [
            "two-thirds",
            "repairable",
            "landfill",
            "battery",
            "cable",
            "fixable",
            "salvageable",
            "nearly seven in ten"
          ]
        },
        {
          "point": "Transforms Fact 2 (youth repair café training teenagers) as practical proof of feasibility.",
          "keywords": [
            "circuitry",
            "engineers",
            "hands-on",
            "skills",
            "practical",
            "competence",
            "technicians",
            "modelled"
          ]
        },
        {
          "point": "Frames a dual persuasive benefit (cutting waste + practical student learning) in controlled formal register.",
          "keywords": [
            "slash",
            "equipping",
            "sustainable",
            "stewardship",
            "opportunity",
            "investment",
            "monthly"
          ]
        }
      ],
      "commonError": "Copying '68% of discarded laptops contain working or easily repairable parts' word-for-word instead of transforming it into persuasive speech prose.",
      "hints": [
        "Open by addressing the Governors respectfully ('Members of the Governing Body…').",
        "Recast '68%' as 'more than two-thirds' or 'nearly seven in ten' so you don't copy the stem verbatim.",
        "Link cutting e-waste with hands-on engineering skills for students."
      ]
    },
    {
      "id": "exam-lang2-q24",
      "kind": "mcq",
      "topicId": "lang-p2-sources",
      "guideRef": "decoding-multi-source-pack",
      "difficulty": "warmup",
      "question": "When reading a 5–6 text stimulus pack in Paper 2 Section A, why should you always read the **contextual attribution line** printed above or below each text (*e.g. \"Extract from a 1924 mountaineering journal\" vs \"2025 adventure-tourism brochure\"*)?",
      "options": [
        "OxfordAQA requires copying the copyright publisher's address into every paragraph.",
        "The attribution line always contains the hidden answers to Section B spelling tests.",
        "Era, genre, and commercial or personal purpose explain *why* each writer adopts their specific register, assumptions, and bias.",
        "Texts written before 1950 never contain any opinions or imagery."
      ],
      "answerIndex": 2,
      "explanation": "Provenance/context cues (1924 private journal vs 2025 commercial brochure) immediately unlock purpose (recording hardship vs selling tickets) and register.",
      "hints": [
        "Think how a 2025 sales brochure's motive differs from a 1924 explorer's diary."
      ]
    },
    {
      "id": "exam-lang2-q25",
      "kind": "written",
      "topicId": "lang-p2-directed",
      "guideRef": "adapting-form-audience-purpose",
      "difficulty": "core",
      "question": "Write a punchy **closing call-to-action paragraph** (3–4 sentences) for an article in your school magazine urging Year 11 students to protect uninterrupted sleep during mock-exam season. Use at least two distinct rhetorical methods. [3 marks]",
      "marks": 3,
      "modelAnswer": "Put down the highlighter at ten o'clock; no midnight cramming session ever outsmarted an exhausted prefrontal cortex. Memory consolidates in deep sleep, not under bloodshot desk-lamps. Reclaim your eight hours — tonight — so that when you turn over the exam paper tomorrow, your mind arrives sharp, calm, and ready to think.",
      "markScheme": [
        {
          "point": "Addresses peer student audience directly with imperative or inclusive cadence ('Put down', 'Reclaim', 'your', 'we').",
          "keywords": [
            "put down",
            "reclaim",
            "close",
            "switch off",
            "your mind",
            "let us",
            "tonight"
          ]
        },
        {
          "point": "Uses antithesis, metaphor, tricolon, or dash/semicolon craft for memorable closing rhythm.",
          "keywords": [
            "sharp, calm",
            "consolidates",
            "exhausted",
            "midnight",
            "bloodshot",
            "clarity",
            "stamina"
          ]
        },
        {
          "point": "Links rest directly to sharper exam performance rather than laziness.",
          "keywords": [
            "memory",
            "performance",
            "exam",
            "focus",
            "cortex",
            "recall",
            "marks",
            "grade"
          ]
        }
      ],
      "commonError": "Ending weakly with 'Thank you for reading my article about sleep' instead of a resonant, rhythmic call to action.",
      "hints": [
        "Never end an article with 'Thank you for reading my article'!",
        "Use a crisp imperative, antithesis (sleep vs midnight cramming), and a three-part adjective close ('sharp, calm, and ready')."
      ]
    }
  ]
};

import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "lang-p2-sources-m1",
    title: "Paper 2A MCQ Set 1: GAP-R Triage, Inference & Tone Precision",
    questions: [
      {
        id: "lang-p2-sources-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "decoding-multi-source-pack",
        strategy: "Read contextual blurbs for GAP-R before line 1",
        question:
          "Read the contextual blurb below:\n\n> **Source B:** *An open letter published in a national newspaper by the Coalition of Independent Booksellers, addressed to the Minister for Small Business (2024).*\n\nWhich **GAP** profile most accurately anticipates Source B's likely register and agenda?",
        options: [
          "Publicly formal, persuasive advocacy combining sector-wide commercial urgency with direct appeal to ministerial responsibility",
          "Private, colloquial diary reflection written solely for personal emotional catharsis with no persuasive aim",
          "Impartial, peer-reviewed scientific methodology avoiding all evaluative judgement or policy recommendations",
          "Light-hearted fictional entertainment designed to parody nineteenth-century gothic novels",
        ],
        answerIndex: 0,
        explanation:
          "An **open letter** in a national newspaper has a **dual audience** (the named Minister AND the general reading public), dictating a formal, persuasive advocacy register driven by the Coalition's vested economic interest. It is neither private diary writing nor value-free lab science.",
        hints: [
          "Notice the form ('open letter in a national newspaper') and the sender ('Coalition of Independent Booksellers').",
          "Who else reads an open letter besides the named Minister, and what outcome does a trade coalition seek?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "decoding-multi-source-pack",
        strategy: "Spot source-scope boundaries",
        question:
          "An OxfordAQA Paper 2A question states: *'Using **Source B** and **Source D**, synthesise the difficulties faced by night-shift nurses.'* Whilst reading, you notice an extraordinary metaphor about hospital fatigue in **Source E**. What should you do?",
        options: [
          "Insert the Source E quotation anyway because examiners reward extra awareness of the whole pack",
          "Exclude Source E completely from this answer and select paired evidence strictly from Source B and Source D",
          "Paraphrase the Source E detail without naming Source E so it blends into your paragraph",
          "Replace Source D with Source E if Source E has stronger imagery",
        ],
        answerIndex: 1,
        explanation:
          "Examiners apply **strict source boundaries**: any quotation or paraphrase drawn from outside the specified sources (**Source B** and **Source D**) receives **zero credit** and wastes valuable exam minutes. Save Source E for a question that permits it or for transforming in Section B.",
        hints: [
          "Check how OxfordAQA mark schemes treat material taken from unnamed texts in the stimulus pack.",
          "Does unasked source material earn bonus marks or zero marks?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Replace vague attitude labels with exact tonal shades",
        question:
          "Read this extract from a food critic's column on automated 'robot cafés':\n\n> *'How thrilling to pay seven pounds for lukewarm oat foam dispensed by a cheerful hydraulic claw while an iPad invites me to tip the algorithm fifteen per cent.'*\n\nWhich adjective phrase most accurately captures the writer's tone?",
        options: [
          "Earnest, evangelical enthusiasm for technological efficiency",
          "Elegiac, grief-stricken mourning for vanished rural agriculture",
          "Sardonic, ironic disdain mocking overpriced, impersonal automation",
          "Detached, clinical neutrality presenting raw hospitality data",
        ],
        answerIndex: 2,
        explanation:
          "The opening exclamation *'How thrilling'* is **verbal irony**: paired with *'lukewarm oat foam'* and tipping *'the algorithm'*, it conveys **sardonic, ironic disdain** for gimmicky, overpriced automation. Taking *'How thrilling'* literally is the classic face-value reading trap.",
        hints: [
          "Test whether 'How thrilling' matches 'lukewarm oat foam' and tipping 'the algorithm'.",
          "When praise words frame absurdly bad value, is the writer genuinely excited or dryly mocking?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Group paired evidence under an implicit conceptual umbrella",
        question:
          "Read these two extracts on urban cycling lanes:\n\n> **Source A (Delivery courier's blog):** *'Painted white lines vanish the moment a delivery van double-parks; without concrete kerbs, every junction is a gamble with wing-mirrors.'*\n> **Source C (Transport planner's report):** *'Segregated cycle tracks increased commuter uptake by 48%, whereas advisory paint-only lanes yielded no statistically significant reduction in collisions.'*\n\nWhich sentence achieves **conceptual synthesis** rather than sequential summary?",
        options: [
          "Source A is written by a city delivery courier complaining about double-parked vans and wing-mirrors at junctions, and Source C is written by a transport planner reporting a 48% rise in commuter numbers.",
          "Source A reveals an outright hostility toward urban cycling as a recklessly dangerous hobby that ought to be discouraged, whereas Source C contends that cycling across British cities is already completely safe everywhere.",
          "Both writers rely heavily on sustained maritime metaphors of treacherous currents and coastal navigation to dramatise how rush-hour congestion engulfs commuters across every major urban road junction.",
          "Both writers expose the inadequacy of superficial painted lanes and converge on physical segregation as essential for cyclist safety, pairing Source A's lived street hazard ('gamble with wing-mirrors') with Source C's empirical collision data.",
        ],
        answerIndex: 3,
        explanation:
          "Conceptual synthesis unites both sources under a **shared analytical claim** (paint-only lanes fail; physical segregation is vital) while contrasting their evidential angles (street-level hazard vs statistical study). Neither writer hates cycling, and neither uses maritime metaphors.",
        hints: [
          "Eliminate pure side-by-side topic listing and check what underlying conclusion both extracts prove.",
          "Look for the statement that fuses both texts around physical protection versus painted lines.",
        ],
      },
      {
        id: "lang-p2-sources-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Identify litotes (ironic understatement)",
        question:
          "Read this extract from an expedition leader's memoir:\n\n> *'Losing both rudder cables forty miles south of Cape Horn in a force-ten gale was, I confess, a not inconsiderable inconvenience.'*\n\nWhich rhetorical method is the writer deploying in *'a not inconsiderable inconvenience'*?",
        options: [
          "Hyperbole that wildly exaggerates a minor puddle into a catastrophe",
          "Hypophora that poses a question and immediately supplies a statistical answer",
          "Anaphora that repeats an opening clause across three successive sentences",
          "Litotes (ironic understatement) that projects cool composure amid lethal danger",
        ],
        answerIndex: 3,
        explanation:
          "Negating the contrary (*'not inconsiderable'*) and downgrading near-fatal shipwreck to an *'inconvenience'* is **litotes** (ironic understatement). It signals unflappable sangfroid while paradoxically making the peril stand out more starkly.",
        hints: [
          "Compare the real life-threatening situation (force-ten gale off Cape Horn) against the mild word 'inconvenience'.",
          "Notice the double-negative construction 'not inconsiderable' — is this exaggeration or deliberate understatement?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Distinguish ambivalence from indifference",
        question:
          "Read this extract from an architect visiting a newly demolished dockland:\n\n> *'I cannot mourn the damp, rat-infested warehouses where dockers froze every winter, yet watching glass luxury penthouses erase every trace of their labour leaves a cold knot in my stomach.'*\n\nHow is the writer's perspective best described?",
        options: [
          "Ambivalent — relieved that unsafe working conditions are gone, yet uneasy at the erasure of working-class history",
          "Apathetic and indifferent — completely uninterested in urban regeneration or dockland heritage",
          "Unreservedly celebratory — cheering luxury gentrification without hesitation",
          "Nostalgically blind — wishing dockers still worked inside freezing, rat-infested warehouses",
        ],
        answerIndex: 0,
        explanation:
          "The pivot *'I cannot mourn… yet… leaves a cold knot'* captures genuine **ambivalence**: holding two competing, nuanced judgements simultaneously (rejecting squalor while mourning cultural erasure).",
        hints: [
          "Look closely at both halves of the sentence hinged around 'yet'.",
          "Does the writer feel nothing at all, or are they pulled in two thoughtful directions at once?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-multi-source-pack",
        strategy: "Evaluate framing inside statistical/visual sources",
        question:
          "In a Paper 2 pack on youth smartphone habits, **Source E** is an infographic produced by a 'Digital Detox Retreat' company. It displays a giant red banner reading **'SCREEN ADDICTION SURGES 300%!'** above a tiny footnote (*sample: 40 self-selected retreat guests*). What should an astute reader infer?",
        options: [
          "Because Source E uses percentages rather than adjectives, it is completely objective and free from agenda",
          "Source E's commercial vested interest shapes its framing: dramatic percentage inflation and visual prominence mask a tiny, unrepresentative sample",
          "Infographics cannot be analysed in Section A because they contain too few full paragraphs",
          "The 300% figure proves nationwide teenage screen time quadrupled across every school",
        ],
        answerIndex: 1,
        explanation:
          "Quantitative sources still carry **editorial framing and vested interest**: a company selling detox retreats benefits from alarmism, magnifying a 300% headline while burying a tiny self-selected sample of 40 guests.",
        hints: [
          "Who published the infographic, and what service are they selling?",
          "Compare the booming headline percentage against the footnote's sample size and selection bias.",
        ],
      },
      {
        id: "lang-p2-sources-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Contrast passive evasion against active indictment",
        question:
          "Compare the syntax of two statements following a river chemical spill:\n\n> **Source B (Water utility press statement):** *'Elevated effluent thresholds were regrettably exceeded during routine valve recalibration.'*\n> **Source D (Anglers' association letter):** *'Executives dumped raw sewage into trout spawning beds to save maintenance overtime.'*\n\nHow do the writers' grammatical choices reflect their contrasting agendas?",
        options: [
          "Both extracts adopt identical colloquial register and informal street idioms in order to build lively, light-hearted solidarity with younger readers across the community",
          "Source B deploys direct active verbs to accept unequivocal legal responsibility for the spill, whereas Source D relies on detached passive syntax to soften public criticism",
          "Source B uses agentless passive voice and euphemistic jargon to diffuse blame, whereas Source D uses concrete active syntax ('Executives dumped') to assign direct moral culpability",
          "Neither statement exhibits persuasive framing or ideological bias, since both writers report the exact same physical river incident in neutral, interchangeable grammatical structures",
        ],
        answerIndex: 2,
        explanation:
          "Source B's **agentless passive** (*'thresholds were regrettably exceeded'*) hides *who* caused the spill behind sterile jargon (*'effluent thresholds'*); Source D's **active subject + blunt verb** (*'Executives dumped raw sewage'*) names the culprit and maximises outrage.",
        hints: [
          "Ask 'Who performed the action?' in Source B's sentence versus Source D's sentence.",
          "Contrast 'thresholds were exceeded' (passive, abstract) with 'Executives dumped raw sewage' (active, concrete).",
        ],
      },
      {
        id: "lang-p2-sources-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Select calibrated comparative hinges",
        question:
          "**Source A** condemns fast-food billboards near schools using emotive parental anecdotes, while **Source C** condemns the exact same billboards using municipal obesity datasets. Which comparative hinge most accurately links them in a WEAVE paragraph?",
        options: [
          "Corroborating Source A's call for tighter restrictions — albeit pivoting from intimate parental pathos to municipal epidemiological data — Source C...",
          "Diametrically contradicting Source A's campaign against roadside advertising — and defending fast-food billboards as harmless commerce — Source C...",
          "Replicating both Source A's intimate domestic anecdotes and its identical sentimental register without introducing statistical evidence, Source C...",
          "Setting aside the debate over fast-food advertising completely to investigate unrelated public-transport fares near primary schools, Source C...",
        ],
        answerIndex: 0,
        explanation:
          "Both texts **agree on the policy stance** (opposing the billboards) while **diverging in rhetorical method** (parental pathos vs epidemiological data). *'Corroborating… albeit pivoting from…'* captures both the shared stance and the methodological shift.",
        hints: [
          "Check whether the two texts disagree on the conclusion or agree on the conclusion via different evidence.",
          "Choose the hinge that honours their shared goal while contrasting anecdote against dataset.",
        ],
      },
      {
        id: "lang-p2-sources-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Spot nineteenth-century paternalistic register",
        question:
          "Read this extract from an 1878 factory philanthropist's pamphlet:\n\n> *'Left unguided on Sunday afternoons, the mill-girl squanders her sixpence on penny dreadfuls; our Temperance Reading Room shall gently school her appetites toward thrift and domestic meekness.'*\n\nWhich term most precisely characterises the writer's viewpoint toward the mill-girls?",
        options: [
          "Egalitarian solidarity treating mill-girls as co-equals in industrial leadership",
          "Fierce revolutionary rage demanding worker ownership of the mills",
          "Sardonic self-deprecation mocking the philanthropist's own ignorance",
          "Paternalistic condescension framing working-class women as wayward dependents needing moral supervision",
        ],
        answerIndex: 3,
        explanation:
          "Phrases like *'Left unguided'*, *'gently school her appetites'*, and *'domestic meekness'* exemplify **Victorian paternalism**: top-down charity that assumes moral superiority over working-class citizens.",
        hints: [
          "Look at verbs like 'unguided' and 'school her appetites toward thrift and domestic meekness'.",
          "Does the philanthropist treat the worker as an equal partner or as a child needing moral correction?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Unpack bathos as a satirical puncture",
        question:
          "Read this extract from a journalist reviewing a billionaire's 'eco-summit':\n\n> *'Delegates pledged to heal our wounded biosphere, safeguard unborn generations, and — after intense lobbying — switch the private-jet champagne flutes from single-use plastic to artisanal bamboo.'*\n\nHow does the structure of this tricolon construct the writer's critique?",
        options: [
          "It builds smoothly to an inspiring climax proving that small recycling gestures solve planetary crises",
          "It deploys bathos on the third item, collapsing from grand planetary pledges to trivial luxury tokenism on private jets to expose hypocrisy",
          "It uses statistical logos to calculate the exact carbon footprint of bamboo tableware",
          "It adopts an elegiac, grief-stricken register to mourn the decline of aviation catering",
        ],
        answerIndex: 1,
        explanation:
          "The tricolon climbs through lofty moral abstractions (*'heal our wounded biosphere'*, *'safeguard unborn generations'*) before crashing via **bathos** (after the parenthetical dash) onto *'private-jet champagne flutes'*, ruthlessly exposing greenwashing hypocrisy.",
        hints: [
          "Track the scale of items 1 and 2 ('wounded biosphere', 'unborn generations') against item 3 ('private-jet champagne flutes').",
          "What happens to the delegates' moral credibility when that third item lands?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Match analytical depth to question stem",
        question:
          "Compare two Paper 2A stems:\n- **Question X:** *'Using Sources A and B, summarise the reasons why rural post offices have closed.'* [6 marks]\n- **Question Y:** *'Compare how the writers of Sources C and D convey their attitudes toward rural isolation.'* [14 marks]\n\nHow should your approach shift from Question X to Question Y?",
        options: [
          "Question X requires grouped implicit/explicit inferences with brief paired quotes (skipping lengthy imagery analysis), whereas Question Y requires sustained WEAVE comparison of perspectives, tone shifts, and rhetorical methods",
          "Question X requires three extended PETAL paragraphs zooming deeply into metaphor, sibilance, and clause rhythm, whereas Question Y rewards a brisk, unanalysed bullet-point tally of explicit factual dates",
          "Both stems test identical assessment objectives, so candidates should write rapid feature-spotting catalogues of rhetorical terminology across all four sources without embedding textual quotations",
          "Question X encourages candidates to draw freely on outside personal knowledge of rural commerce without grounding points in Sources A and B, whereas Question Y prohibits comparing more than one source per answer",
        ],
        answerIndex: 0,
        explanation:
          "Synthesis/summary (*'summarise the reasons'*) rewards crisp **conceptual grouping + inferred links + micro-quotes**, whereas *'Compare how the writers convey their attitudes'* tests **perspectives, tone, and rhetorical craft**.",
        hints: [
          "Distinguish 'What/reasons' stems from 'How/convey attitudes' stems.",
          "Where should you spend your deep metaphor/syntax/tone ammunition?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Include the Evaluative 'Why' Clincher",
        question:
          "Why does ending a comparative paragraph by linking two writers' tonal divergence back to their **contextual positionality** (e.g. *'frontline paramedic writing mid-winter'* vs *'think-tank economist reviewing five-year budgets'*) unlock top-band marks?",
        options: [
          "Because examiners award extra SPaG marks whenever job titles are capitalised",
          "Because it replaces word-level quotation completely so you never need textual evidence",
          "Because it explains WHY each writer adopts their perspective and methods, elevating mechanical feature-spotting into perceptive critical evaluation",
          "Because OxfordAQA Paper 2A is graded as a History coursework essay on nineteenth-century dates",
        ],
        answerIndex: 2,
        explanation:
          "Top-band evaluation asks not just *what* tone a writer uses, but **why** that voice serves their role, audience, and purpose. Anchoring method contrast in positionality turns descriptive comparison into critical insight.",
        hints: [
          "Think about the 'E' at the end of the WEAVE paragraph structure.",
          "What separates 'Writer A is urgent and Writer B is calm' from explaining *why* each chose that register?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Track internal tonal pivots",
        question:
          "Read this two-sentence mini-extract from a journalist testing a silent monastic retreat:\n\n> *'On Friday evening, surrendering my phone felt like theatrical self-punishment devised for bored urbanites. By Sunday dawn, listening to frost crackle on the orchard grass without reaching for a camera, I realised how noisily I had been living.'*\n\nWhat structural shift in viewpoint occurs across these two sentences?",
        options: [
          "From reverent religious devotion to bitter fury at monastery rules",
          "From clinical statistical detachment to alarmist political campaigning",
          "Zero shift — the writer remains sarcastically hostile from start to finish",
          "From cynical, defensive dismissal to quiet, self-aware wonder",
        ],
        answerIndex: 3,
        explanation:
          "Friday evening opens in **cynical dismissal** (*'theatrical self-punishment devised for bored urbanites'*), whereas Sunday dawn pivots through sensory stillness (*'frost crackle'*) to **chastened, self-aware wonder** (*'how noisily I had been living'*).",
        hints: [
          "Contrast the attitude in 'theatrical self-punishment' (Friday) against 'I realised how noisily I had been living' (Sunday).",
          "Does the writer stay sceptical, or does silence disarm their cynicism?",
        ],
      },
      {
        id: "lang-p2-sources-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Embed micro-quotations syntactically",
        question:
          "Which sentence demonstrates **Grade-9 syntactic embedding of paired micro-quotations**?",
        options: [
          "Source A says, 'The coral reef was bleached white like a graveyard of bone beneath the warming current.' Source B says, 'Ocean temperatures rose by 1.4 degrees.'",
          "In Source A there is a quote 'graveyard of bone' which is a metaphor, and in Source B '1.4 degrees' is a number.",
          "Both writers register marine devastation, yet whereas Source A's diver elegises the reef as a 'graveyard of bone' to evoke funereal grief, Source B's climatologist relies on the stark metric '1.4 degrees' to establish indisputable causal proof.",
          "Both writers use very powerful words that paint a vivid picture in the reader's head and make them want to read on.",
        ],
        answerIndex: 2,
        explanation:
          "Weaving compact 2–4 word phrases (*'graveyard of bone'*, *'1.4 degrees'*) seamlessly inside analytical clauses alongside precise method labels (*elegises*, *stark metric*) and reader effects hits top-band synthesis and method comparison simultaneously.",
        hints: [
          "Reject whole-sentence quote dumps, flat 'is a number' labelling, and empty 'read on' clichés.",
          "Pick the sentence where short quotes sit naturally inside an analytical WEAVE comparison.",
        ],
      },
    ],
  },
  {
    id: "lang-p2-sources-m2",
    title: "Paper 2A MCQ Set 2: Rhetorical Methods & Cross-Textual Inference",
    questions: [
      {
        id: "lang-p2-sources-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Distinguish hypophora from bare rhetorical questions",
        question:
          "Read this extract from an editorial on library closures:\n\n> *'Do councils genuinely save money by shuttering branch libraries? Every longitudinal study shows the exact opposite: literacy support costs double within five years.'*\n\nWhich specific rhetorical device structures these two sentences?",
        options: [
          "Hypophora — posing a strategic question and immediately answering it to dismantle a counter-claim",
          "Litotes — softening harsh criticism via double-negative understatement",
          "Oxymoron — fusing two contradictory words inside a single noun phrase",
          "Pathetic fallacy — projecting human grief onto stormy weather",
        ],
        answerIndex: 0,
        explanation:
          "When a writer asks a question and **immediately supplies the decisive answer** (*'Do councils…? Every longitudinal study shows the exact opposite'*), the device is **hypophora** — locking the reader onto the writer's logical rails.",
        hints: [
          "Notice that the question is not left hanging in silence — sentence 2 answers it directly.",
          "Which Greek rhetorical term specifically names question-plus-immediate-answer?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "decoding-multi-source-pack",
        strategy: "Decode inclusive vs distancing pronouns",
        question:
          "Compare pronoun choices in two extracts on city air quality:\n\n> **Source A (Parent campaigner):** *'Every morning we walk our six-year-olds past idling diesel exhausts at the school gate.'*\n> **Source D (Municipal compliance memo):** *'Pedestrian stakeholders traversing arterial corridors experience transient particulate exposure.'*\n\nWhat contrast in reader positioning do these choices create?",
        options: [
          "Source A hides behind distanced institutional euphemism to shield school leaders from scrutiny, whereas Source D builds warm family intimacy by celebrating shared neighbourhood walks",
          "Source A uses collective pronouns ('we', 'our') to enlist the reader in shared protective urgency, whereas Source D's abstract nouns ('Pedestrian stakeholders') sanitise human harm into administrative detachment",
          "Both extracts deploy confrontational second-person imperatives directly accusing the reader of idling commercial diesel vans outside local primary-school gates during morning drop-off",
          "Source D generates far deeper emotional pathos than Source A because polysyllabic Latinate phrases like 'transient particulate exposure' convey urgent parental grief more vividly than plain diction",
        ],
        answerIndex: 1,
        explanation:
          "Inclusive *'we / our six-year-olds'* creates moral solidarity and concrete vulnerability, whereas relabelling children and parents as *'Pedestrian stakeholders'* and fumes as *'transient particulate exposure'* buffers officials from emotional accountability.",
        hints: [
          "Compare warm human words ('our six-year-olds') against bureaucratic jargon ('Pedestrian stakeholders').",
          "Which text pulls you close, and which holds human health at arm's length?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Infer unstated common ground beneath contrasting surfaces",
        question:
          "Read two extracts on deep-winter wild swimming:\n\n> **Source B (1905 Health Manual):** *'A brisk two-minute plunge into January surf fortifies sluggish nerves, provided the bather towels vigorously beside a brazier immediately thereafter.'*\n> **Source E (2024 Cardiology Advisory):** *'Brief cold-water immersion triggers beneficial dopamine release, yet stays exceeding five minutes risk cold-water incapacitation unless gradual rewarming follows.'*\n\nWhich implicit synthesis accurately connects both texts?",
        options: [
          "Both texts argue that winter swimming should be legally banned at all coastal beaches",
          "Source B promotes reckless hour-long swims, whereas Source E claims cold water has zero mental benefit",
          "Across a century, both texts treat winter immersion as invigorating only within strict duration limits paired with disciplined post-swim rewarming",
          "Both texts dismiss psychological wellbeing as unscientific superstition",
        ],
        answerIndex: 2,
        explanation:
          "Despite shifting from Edwardian vocabulary (*'fortifies sluggish nerves'*) to modern neurochemistry (*'dopamine release'*), both texts share a **conditional endorsement**: short exposure heals, prolonged exposure without careful warming harms.",
        hints: [
          "Look past the era gap (1905 vs 2024) at the structure of both claims: benefit + time limit + warming rule.",
          "Which option captures all three shared conditions?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Unpack cohesive semantic fields",
        question:
          "Read this extract from a consumer rights columnist writing about gym membership contracts:\n\n> *'First comes the honeyed velvet tour; then the twelve-month shackle snaps shut, ransoming your direct debit behind a labyrinth of cancellation penalties.'*\n\nWhich **semantic field** dominates the second clause, and what perspective does it convey?",
        options: [
          "A semantic field of clinical medicine and rehabilitation ('velvet', 'direct debit', 'penalties'), endorsing long-term gym contracts as vital preventive healthcare",
          "A semantic field of tranquil pastoral nature ('honeyed', 'labyrinth'), celebrating outdoor countryside endurance training over indoor commercial fitness studios",
          "A strictly literal contract-law glossary devoid of figurative connotation, presenting consumer cancellation clauses with balanced, objective administrative neutrality",
          "A semantic field of captivity and extortion ('shackle', 'snaps shut', 'ransoming'), framing the gym not as a service provider but as a predatory captor",
        ],
        answerIndex: 3,
        explanation:
          "Clustering *'shackle'*, *'snaps shut'*, and *'ransoming'* constructs a **semantic field of imprisonment and hostage-taking**, casting routine fine-print fees as coercive exploitation after the deceptive allure of *'honeyed velvet'*.",
        hints: [
          "Group the linked nouns and verbs: 'shackle', 'snaps shut', 'ransoming'.",
          "What real-world crime or state do shackles and ransom belong to?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Differentiate rueful self-deprecation from indignant blame",
        question:
          "Compare two writers reflecting on DIY home renovation:\n\n> **Source A:** *'Armed with three YouTube tutorials and unearned hubris, I turned a mildly wonky kitchen shelf into forty square feet of exposed Victorian lath.'*\n> **Source C:** *'Unlicensed rogue traders prey on elderly homeowners, charging thousands for botched rewiring before vanishing behind disconnected mobile numbers.'*\n\nHow do the writers' perspectives and purposes contrast?",
        options: [
          "Source A adopts rueful, self-deprecating humour to entertain readers with personal folly, whereas Source C adopts indignant moral advocacy to expose predatory fraud against vulnerable citizens",
          "Both writers launch an indignant campaign demanding immediate custodial prison sentences for amateur homeowners who consult online repair tutorials instead of hiring certified builders",
          "Source A delivers a cool, step-by-step carpentry instruction manual on repairing Victorian plasterwork, whereas Source C employs light-hearted slapstick satire to amuse domestic readers",
          "Both writers maintain an upbeat, celebratory tone throughout, praising both self-taught home improvisation and unregulated contractors for making kitchen refurbishment quick and affordable",
        ],
        answerIndex: 0,
        explanation:
          "Source A turns the joke inward (*'unearned hubris'*) in **rueful self-deprecation** for wry entertainment; Source C directs **moral indignation** outward (*'prey on elderly homeowners'*) to warn and protect.",
        hints: [
          "Who is the target of criticism in Source A ('I', 'unearned hubris') versus Source C ('rogue traders prey')?",
          "Contrast inward comic humility against outward protective outrage.",
        ],
      },
      {
        id: "lang-p2-sources-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Analyse syntactic rhythm: cumulative listing + blunt minor drop",
        question:
          "Read this extract from a firefighter's testimony on moorland wildfires:\n\n> *'Sixteen hours hauling hoses up blackened heather, choking on peat smoke, watching curlew nests vanish in seconds, praying the wind holds steady. All from one disposable barbecue.'*\n\nHow does the two-sentence syntactic pairing create its impact?",
        options: [
          "Two symmetrically matched compound-complex sentences maintain an unhurried, soothing rhythmic balance that reassures readers the moorland blaze was contained calmly without lasting ecological damage",
          "A breathless cumulative sequence of present participles builds exhausting scale, which the blunt minor sentence ('All from one disposable barbecue.') throws into devastating disproportion against its trivial, preventable cause",
          "Clinical botanical jargon and quantified chemical ignition measurements establish detached scientific authority, stripping personal fatigue out of the firefighter's moorland incident report",
          "Playful comic bathos turns the closing line into light-hearted outdoor banter, inviting weekend picnickers to laugh affectionately at the chaotic mishaps of summer moorland wildlife",
        ],
        answerIndex: 1,
        explanation:
          "Piling dynamic participles (*'hauling… choking… watching… praying'*) immerses the reader in gruelling endurance; snapping shut with the five-word **minor sentence** (*'All from one disposable barbecue.'*) dramatises the infuriating asymmetry between vast destruction and casual negligence.",
        hints: [
          "Compare the length and verb pattern of sentence 1 against the abrupt five-word fragment in sentence 2.",
          "Why does 'one disposable barbecue' hit so hard right after sixteen hours of exhausting chaos?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Identify weak vs strong comparative topic sentences",
        question:
          "Which opening topic sentence best launches a high-tariff Paper 2A paragraph comparing **Source B** (an airline CEO's keynote speech) and **Source E** (a flight attendant's anonymous memoir)?",
        options: [
          "Source B is a keynote speech written by an airline executive and Source E is an anonymous memoir written by a flight attendant, and both writers use lots of punctuation, varied sentences, and adjectives to engage the reader.",
          "In this paragraph I am going to write about Source B first to summarise the airline CEO's views on low-cost flying, and then later on in the next paragraph I will compare those views to Source E's cabin-crew account.",
          "While both texts address budget aviation's rapid expansion, Source B's executive keynote celebrates streamlined turnaround metrics as democratic progress, whereas Source E's cabin-crew memoir exposes the exhausting human toll hidden behind those exact schedules.",
          "Source B deploys a wide array of impressive persuasive devices and ambitious rhetorical features from its very first opening line in order to hook the business conference audience and make them want to keep reading eagerly.",
        ],
        answerIndex: 2,
        explanation:
          "A Grade-9 **WEAVE thesis sentence** names the shared topic (*budget aviation's expansion*), anchors both genres/roles (*executive keynote* vs *cabin-crew memoir*), and establishes the exact ideological tension (*celebrated turnaround efficiency* vs *hidden human toll*).",
        hints: [
          "Eliminate empty meta-signposting ('In this paragraph I am going to...') and bare feature-listing ('both use adjectives').",
          "Choose the thesis that locks both writers' roles and competing angles into one sharp contrast.",
        ],
      },
      {
        id: "lang-p2-sources-m2-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Analyse concession-and-rebuttal mechanics",
        question:
          "Read this extract from a broadsheet essay on artificial intelligence in radiology:\n\n> *'Granted, pattern-recognition algorithms can flag micro-fractures across ten thousand scans before a junior doctor finishes a cup of tea; yet no neural network can sit beside a trembling parent and translate a shadow on a screen into humane counsel.'*\n\nWhy does the writer begin with the concession *'Granted…'* before pivoting at *'yet'*?",
        options: [
          "Because the columnist lost structural control midway through drafting the sentence, inadvertently contradicting their own opening argument before trying to rescue it after the semicolon",
          "Because the writer ultimately advocates replacing human diagnostic radiologists with automated neural networks, using the closing clause only as a nostalgic tribute to retiring clinicians",
          "Because opening with the adverb 'Granted' signals heavy sarcastic mockery, implying that medical imaging software fails completely at spotting micro-fractures across routine hospital scans",
          "Because steelmanning AI's genuine diagnostic speed establishes fair-minded ethos, making the subsequent defence of irreplaceable human empathy ('humane counsel') far harder to dismiss as technophobic nostalgia",
        ],
        answerIndex: 3,
        explanation:
          "**Concession-and-rebuttal** (*'Granted… yet…'*) anticipates the strongest counter-argument (AI's speed), proving the writer is informed and rational (**ethos**) before pivoting to the decisive human boundary (*'humane counsel'*).",
        hints: [
          "Ask what would happen if the writer pretended AI was slow and useless — sceptical readers would tune out!",
          "How does admitting AI's real strength ('Granted...') make the second clause after 'yet' more persuasive?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Separate explicit statement from implicit deduction",
        question:
          "Read these two extracts about village night skies:\n\n> **Source A (Astronomer's letter):** *'Since the logistics depot installed floodlights on Junction 9, children in our parish have grown up able to name thirty courier logos but not Orion's belt.'*\n> **Source D (Ecologist's note):** *'Nocturnal moth pollination along hedgerows within two miles of illuminated roundabouts fell by 62% inside three summers.'*\n\nWhat **implicit synthesis** links Source A and Source D beyond the obvious fact that floodlights are bright?",
        options: [
          "Artificial light pollution inflicts invisible collateral loss across both cultural wonder and ecological survival — severing human generational connection to the cosmos while disrupting nocturnal food webs",
          "Commercial logistics depots installed high-intensity Junction 9 floodlights intentionally to suppress local moth populations and discourage amateur village astronomy clubs from stargazing",
          "Rural primary-school children across the parish now prefer studying nocturnal hedgerow insects and commercial courier branding over learning traditional constellations such as Orion's belt",
          "Both writers campaign for a total daytime and night-time ban on motorway freight haulage across Britain, insisting rural roundabouts should never carry commercial delivery traffic at any hour",
        ],
        answerIndex: 0,
        explanation:
          "Moving past the explicit literal detail (bright lights) reveals the **shared conceptual cost**: unchecked industrial illumination quietly erodes both **intangible human heritage** (*Orion's belt*) and **biological ecosystems** (*62%* drop in pollination).",
        hints: [
          "What does Source A show we lose culturally, and what does Source D show nature loses biologically?",
          "Fuse those two hidden costs under one umbrella insight about industrial light pollution.",
        ],
      },
      {
        id: "lang-p2-sources-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Identify anaphora + tricolon momentum",
        question:
          "Read this extract from a community theatre director's appeal:\n\n> *'Without rehearsal rooms, young voices go unheard. Without ticket subsidies, working families stay locked outside. Without civic courage, culture shrinks into a private club.'*\n\nWhich pairing of syntactic methods drives the persuasive momentum here?",
        options: [
          "Parenthetical dashed asides combined with agentless passive syntax to distance local councillors from theatre closure decisions",
          "Anaphora ('Without...') across a three-sentence tricolon, escalating from creative silence to social exclusion to civic decay",
          "Self-contradictory oxymoron paired with rhyming heroic couplets to give the fundraising leaflet a playful theatrical cadence",
          "Informal regional slang combined with self-deprecating comic bathos to puncture the director's own plea for arts subsidies",
        ],
        answerIndex: 1,
        explanation:
          "Repeating *'Without…'* at the start of three parallel sentences is **anaphora** structured as a **climactic tricolon**, widening the stakes at each step (young performers → working families → all of civic culture).",
        hints: [
          "Spot the repeated opening word across three parallel sentences.",
          "Notice how the stakes widen from one group ('young voices') to society as a whole ('culture').",
        ],
      },
      {
        id: "lang-p2-sources-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "decoding-multi-source-pack",
        strategy: "Account for historical distance in multi-era packs",
        question:
          "An OxfordAQA Paper 2A pack pairs **Source A** (an 1892 railway traveller's letter complaining that 50 mph steam trains *'shatter the contemplative peace of the shires'*) with **Source C** (a 2024 commuter blog complaining that 125 mph Wi-Fi dropouts *'paralyse remote productivity'*). What insight does comparing their **historical eras** unlock?",
        options: [
          "Nineteenth-century letter writers lacked precise technical vocabulary for mechanical acceleration, forcing them to describe modest fifty-mile-per-hour locomotives in clumsy rural phrasing",
          "Across both eras, British rail passengers share an identical reactionary hostility toward mechanised speed and unite in arguing that railways should be dismantled in favour of walking",
          "Source A cannot be treated as authentic historical non-fiction in Paper 2A because Victorian broadsheets refused to print readers' letters complaining about steam-railway expansion in 1892",
          "Technological baselines shift expectations: what 1892 experienced as a violent intrusion on pastoral stillness, 2024 takes for granted as an invisible mobile office whose slightest digital hiccup sparks frustration",
        ],
        answerIndex: 3,
        explanation:
          "Comparing **era baselines** reveals how human expectations recalibrate around technology: speed that once felt terrifyingly unnatural (*50 mph*) becomes background normality, shifting modern anxiety from sensory disruption to constant economic connectivity.",
        hints: [
          "Compare what each traveller expects a train journey to be for: quiet pastoral contemplation vs seamless remote work.",
          "How has a century of technological acceleration changed what counts as a 'problem'?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Pinpoint euphemism in institutional sources",
        question:
          "In **Source C**, a corporate restructuring memo describes sacking 400 factory staff as *'right-sizing legacy headcount to unlock agile synergies'*. Why does the writer choose this phrasing?",
        options: [
          "To make the redundant workers feel deeply mourned through poetic elegy",
          "To simplify complex economics so primary-school pupils can understand factory closures",
          "To deploy corporate euphemism and abstract jargon that anaesthetises the human reality of job losses for shareholders",
          "To create vivid sensory imagery of industrial machinery",
        ],
        answerIndex: 2,
        explanation:
          "Replacing *'sacking 400 people'* with **euphemistic management speak** (*'right-sizing legacy headcount'*) strips away human livelihoods, framing mass redundancy as sleek, painless optimisation for investors.",
        hints: [
          "Translate 'right-sizing legacy headcount' into plain English: 400 people losing their jobs.",
          "Why would management disguise concrete human loss behind buzzwords like 'agile synergies'?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Upgrade word-level zooming inside comparisons",
        question:
          "A student compares **Source A** (*'tourists locust-swarmed the cobbled harbour'*) and **Source B** (*'summer footfall injected £4.2 million into coastal cafés'*). Which analytical comment reaches Grade-9 precision?",
        options: [
          "Source A's compound verb 'locust-swarmed' casts visitors as a biblical, devouring plague that strips the village bare, whereas Source B's medical metaphor 'injected' frames those same crowds as a vital financial transfusion reviving local trade.",
          "Source A chooses the negative descriptive phrase 'locust-swarmed' to make the reader feel negative about summer visitors, whereas Source B chooses the positive word 'injected' to create a positive impression of local cafés.",
          "Source A documents a literal agricultural infestation of migratory insects descending on coastal harbours, whereas Source B investigates emergency clinical hospital injections administered inside seaside cafés during summer.",
          "Both writers deploy colourful descriptive metaphors across their opening sentences in order to paint a vivid picture of the seaside clearly in the reader's mind and persuade the audience to keep reading their articles.",
        ],
        answerIndex: 0,
        explanation:
          "Zooming onto the **contrasting metaphorical verbs** — plague-like consumption (*'locust-swarmed'*) vs life-saving economic vitality (*'injected'*) — explains exactly how lexical craft turns the same tourist crowd into either menace or lifeline.",
        hints: [
          "Unpack the exact connotations of 'locust-swarmed' (pestilence, stripping bare) vs 'injected' (life-saving medicine/vitality).",
          "Avoid literal misreadings and empty 'positive/negative' labels.",
        ],
      },
      {
        id: "lang-p2-sources-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Synthesise across three or more sources cleanly",
        question:
          "On a Paper 2A synthesis question covering **Sources A, C, and E**, what is the cleanest way to structure a high-scoring response?",
        options: [
          "Write three totally unconnected mini-essays — one paragraph on A, one on C, and one on E — with zero cross-reference",
          "Quote only from Source A and assume the examiner knows Sources C and E are similar",
          "Copy out the first sentence of all three texts word for word without commentary",
          "Organise around two or three shared thematic buckets, weaving concise micro-evidence from across A, C, and E to show where their insights converge and diverge",
        ],
        answerIndex: 3,
        explanation:
          "Even across **three sources**, conceptual bucketing beats text-by-text silos: grouping shared themes allows you to pull A, C, and E into genuine dialogue.",
        hints: [
          "Remember the BRIDGE rule: Bucket by Concept, Not Text.",
          "How can you bring all three requested sources into conversation rather than three isolated blocks?",
        ],
      },
      {
        id: "lang-p2-sources-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-writers-perspectives",
        strategy: "Detect subtle self-serving ethos",
        question:
          "Read this opening from **Source D**, an essay by a former social-media executive now selling an anti-addiction consultancy:\n\n> *'I helped engineer the infinite-scroll dopamine slot-machine; nobody knows its traps better than a repentant architect.'*\n\nWhat dual rhetorical purpose does the metaphor *'repentant architect'* serve?",
        options: [
          "It proves the writer trained in structural civil engineering before designing buildings",
          "It absolves technology companies of all responsibility for user screen time",
          "It performs moral contrition while simultaneously claiming unrivalled insider expertise (ethos) to market the writer's new consultancy",
          "It creates comic slapstick showing the writer never understood software design",
        ],
        answerIndex: 2,
        explanation:
          "Calling oneself a *'repentant architect'* cleverly fuses **confessional humility** (*repentant*, disarming moral anger) with **master-builder authority** (*architect*, establishing superior insider ethos over outside critics).",
        hints: [
          "Unpack both words in the phrase: 'repentant' (confessing past guilt) + 'architect' (master designer with insider secrets).",
          "Remember the blurb: the writer is now selling a consultancy!",
        ],
      },
    ],
  },
  {
    id: "lang-p2-sources-m3",
    title: "Paper 2A MCQ Set 3: Exam Timing, Subtle Shifts & Grade-9 Synthesis",
    questions: [
      {
        id: "lang-p2-sources-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "decoding-multi-source-pack",
        strategy: "Manage Paper 2A vs Paper 2B timing",
        question:
          "OxfordAQA 9270 Paper 2 lasts **2 hours** in total, split equally between **Section A Reading (40 marks)** and **Section B Writing (40 marks)**. Roughly how long should you allocate to Section A (including initial pack triage)?",
        options: [
          "Roughly 55–60 minutes on Section A (4–5 minutes GAP-R triage + ~1.1–1.3 minutes per mark), preserving a full 55–60 minutes for Section B's 40 marks",
          "90 minutes on Section A and 30 minutes on Section B, because reading 5–6 texts takes three times longer",
          "25 minutes on Section A so you can write a ten-page essay in Section B",
          "Read only the last source in Section A and guess the rest",
        ],
        answerIndex: 0,
        explanation:
          "Because Section A and Section B carry **identical 40-mark weights**, starving Section B by overrunning on low-tariff Section A questions is fatal. Splitting the 120 minutes roughly **60 / 60** protects both halves.",
        hints: [
          "Compare the mark weighting: 40 marks for Section A vs 40 marks for Section B across 120 minutes.",
          "How should equal mark allocations divide a two-hour exam?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Identify antithesis",
        question:
          "Read this sentence from an essay on public museums:\n\n> *'A national gallery should be a furnace of living curiosity, not a mausoleum of velvet ropes.'*\n\nWhich structural/rhetorical device organises the contrast between *'furnace of living curiosity'* and *'mausoleum of velvet ropes'*?",
        options: [
          "Onomatopoeia mimicking museum footsteps",
          "Antithesis pairing opposing metaphors (vital heat vs dead tomb) in balanced syntax",
          "Colloquial anecdote recounting a childhood school trip",
          "Statistical extrapolation from ticket-office receipts",
        ],
        answerIndex: 1,
        explanation:
          "Setting *'a furnace of living curiosity'* directly against *'not a mausoleum of velvet ropes'* combines **antithesis** (balanced syntactic opposition) with contrasting metaphors of life/energy versus death/exclusivity.",
        hints: [
          "Look at the balanced 'X, not Y' grammatical frame.",
          "Notice how 'furnace of living...' and 'mausoleum of...' are exact conceptual opposites.",
        ],
      },
      {
        id: "lang-p2-sources-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Spot cause-versus-symptom divergence",
        question:
          "Read two extracts on declining teenage reading for pleasure:\n\n> **Source B (Secondary librarian):** *'When school libraries lose ring-fenced staffing budgets, reluctant readers lose the one adult trained to match a teenager with the right book.'*\n> **Source E (Tech columnist):** *'Short-form video feeds rewire adolescent attention spans into twelve-second loops, making a three-hundred-page novel feel like scaling Everest in flip-flops.'*\n\nHow do Sources B and E relate conceptually?",
        options: [
          "Both writers challenge the premise of a literacy crisis altogether, arguing that teenagers read just as widely today via digital platforms as earlier generations read printed novels",
          "Both writers place primary blame on secondary-school librarians for refusing to confiscate pupils' smartphones and failing to police classroom screen-time policies more aggressively",
          "Both diagnose the same crisis (eroding teen reading), yet locate its root cause differently: Source B blames institutional funding cuts to human mentorship, whereas Source E blames algorithmic fracturing of attention",
          "Source B investigates declining library attendance among postgraduate university lecturers, whereas Source E evaluates why nineteenth-century epic poetry no longer appeals to adult commuters",
        ],
        answerIndex: 2,
        explanation:
          "High-band synthesis spots **convergent problem + divergent causal diagnosis**: Source B points to **underfunded institutional mentorship**, whereas Source E points to **digital attention conditioning**.",
        hints: [
          "What shared problem do both extracts acknowledge?",
          "Now compare *what* each extract blames: budget cuts to librarians vs twelve-second video loops.",
        ],
      },
      {
        id: "lang-p2-sources-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Unpack comic simile in Source E",
        question:
          "In the extract *'making a three-hundred-page novel feel like scaling Everest in flip-flops'*, what persuasive effect does the simile achieve?",
        options: [
          "It strikes a solemn, elegiac tone mourning fatal Himalayan mountaineering accidents in order to guilt-trip adolescent readers into taking classic literature seriously",
          "It offers a literal socioeconomic observation about teenage poverty, demonstrating that modern pupils lack adequate thermal footwear during harsh winter school terms",
          "It supplies an objective psychometric benchmark of average reading speed per minute, translating adolescent comprehension scores into clinical neurological terminology",
          "It uses wry, bathetic exaggeration pairing epic endurance ('scaling Everest') with flimsy unpreparedness ('in flip-flops') to dramatise how ill-equipped fragmented attention feels before sustained prose",
        ],
        answerIndex: 3,
        explanation:
          "Pairing monumental altitude (*'Everest'*) with absurdly inadequate gear (*'flip-flops'*) creates a vivid, relatable comic **simile** illustrating not laziness, but cognitive mismatch.",
        hints: [
          "Break the simile into its two halves: the massive challenge ('Everest') + the inadequate equipment ('flip-flops').",
          "What do the 'flip-flops' represent mentally after years of twelve-second clips?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-writers-perspectives",
        strategy: "Read nostalgic elegy accurately",
        question:
          "Read this extract from a retired Fleet Street typesetter's memoir:\n\n> *'I still miss the hot-lead tang of the composing room at midnight — the clatter of linotype keys, the ink-stained camaraderie — before silent cursor blinks turned newspapers into sterile spreadsheets.'*\n\nWhich tone label best fits this writer's perspective?",
        options: [
          "Wistful, elegiac nostalgia romanticising sensory craft and shared labour over clinical modernisation",
          "Forensic, dispassionate detachment welcoming digital efficiency",
          "Furious, prosecutorial outrage demanding the arrest of software engineers",
          "Bored, apathetic indifference toward print journalism",
        ],
        answerIndex: 0,
        explanation:
          "Sensory fondness (*'hot-lead tang'*, *'ink-stained camaraderie'*) contrasted against cold digital sterility (*'sterile spreadsheets'*) conveys **wistful, elegiac nostalgia** for a vanished craft community.",
        hints: [
          "Contrast the warm multisensory memories ('tang', 'clatter', 'camaraderie') against 'sterile spreadsheets'.",
          "Is this cold neutrality, furious rage, or mournful affection for a lost era?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Eliminate empty examiner-hated filler",
        question:
          "Which phrase should be **completely banished** from your Paper 2A method analysis because examiners classify it as empty generic waffle?",
        options: [
          "'connotes predatory industrial encirclement'",
          "'shifts from measured scepticism to reluctant reverence'",
          "'makes the reader want to read on and paints a vivid picture in their head'",
          "'deploys agentless passive syntax to deflect institutional blame'",
        ],
        answerIndex: 2,
        explanation:
          "*'Makes the reader want to read on'* and *'paints a vivid picture in their head'* could be pasted onto literally any text in the English language — proving zero understanding of specific meaning or effect.",
        hints: [
          "Ask which comment could be written by someone who hadn't even read the extract!",
          "Three options name exact analytical effects; one is generic filler.",
        ],
      },
      {
        id: "lang-p2-sources-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Contrast anecdotal micro-focus against macro-abstraction",
        question:
          "Compare how two charity appeals open on clean water access:\n\n> **Source A:** *'Every dawn, nine-year-old Amina walks four kilometres carrying a yellow jerrycan heavier than her schoolbag.'*\n> **Source C:** *'Across sub-Saharan basins, 2.2 billion individuals lack safely managed potable infrastructure.'*\n\nWhy might Source A's opening overcome 'compassion fatigue' more effectively for general donors than Source C's?",
        options: [
          "Because four kilometres represents a more staggering physical scale than 2.2 billion, compelling analytical donors to respond more urgently to linear distance than population totals",
          "Because psychic numbing dulls emotional response to vast abstract billions, whereas naming one child and contrasting a concrete 'yellow jerrycan' against 'her schoolbag' individualises human cost and lost education",
          "Because Source C slips into sloppy conversational slang and ungrammatical fragments that alienate educated charitable donors accustomed to formal humanitarian reportage",
          "Because Source A tactfully avoids referencing water scarcity or rural infrastructure altogether, keeping donors focused exclusively on primary-school curriculum reform",
        ],
        answerIndex: 1,
        explanation:
          "Rhetorical research (and top-band English evaluation) recognises **micro-humanisation**: concrete visual detail (*'yellow jerrycan heavier than her schoolbag'*) bypasses statistical numbness while implicitly signalling stolen schooling.",
        hints: [
          "Why does '2.2 billion individuals' sometimes feel harder to picture emotionally than one named nine-year-old?",
          "Look at the quiet implicit contrast inside 'jerrycan heavier than her schoolbag'.",
        ],
      },
      {
        id: "lang-p2-sources-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-multi-source-pack",
        strategy: "Distinguish editorial headline from embedded quotation",
        question:
          "In **Source C** (a newspaper report on rewilding wolves), a farmer is quoted saying *'They are silent four-legged assassins'*, while the reporter concludes *'Compensation schemes in three Alpine valleys reduced livestock disputes by 70%'*. Whose perspective is *'four-legged assassins'*?",
        options: [
          "The newspaper reporter's own overarching editorial thesis condemning every European wolf-rewilding programme as reckless",
          "The standardised zoological classification adopted by Alpine wildlife biologists to describe apex predatory behaviour",
          "Direct evidence that the journalist endorses lifting legal protections and culling all reintroduced wolves across the region",
          "An embedded stakeholder voice quoted inside the report — which the reporter subsequently tempers with balanced empirical evidence",
        ],
        answerIndex: 3,
        explanation:
          "A classic multi-source trap is confusing an **embedded interviewee quote** with the **writer's own overarching stance**! Here the journalist includes the farmer's fearful voice for balance before closing on constructive policy data (*70%* reduction in disputes).",
        hints: [
          "Separate who spoke the quoted metaphor ('a farmer is quoted') from how the reporter chooses to end the article.",
          "Why must you never attribute an interviewee's quote blindly to the journalist's own final viewpoint?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-writers-perspectives",
        strategy: "Detect defensive self-justification",
        question:
          "Read this extract from a cruise-ship executive responding to port pollution protests:\n\n> *'Critics gazing down from hillside villas forget that our vessels deliver three thousand eager diners every Tuesday to harbour taverna owners who would otherwise shutter by October.'*\n\nHow does the writer strategically reframe the debate?",
        options: [
          "By deploying ad hominem class contrast — painting protesters as privileged outsiders ('gazing down from hillside villas') while positioning the cruise line as the working-class economic saviour of local tavernas",
          "By offering a contrite corporate apology for heavy marine diesel emissions and pledging voluntarily to suspend all Tuesday port calls until local air quality improves",
          "By anchoring the speech in peer-reviewed atmospheric air-quality studies that quantify sulphur particulates along the Mediterranean waterfront with clinical objectivity",
          "By weaving lyrical, elegiac pastoral imagery throughout the statement to celebrate the quiet acoustic beauty of uncrowded coastal harbours during the autumn off-season",
        ],
        answerIndex: 0,
        explanation:
          "Notice the spatial and class framing: *'gazing down from hillside villas'* casts environmental critics as aloof, wealthy hypocrites, deflecting attention from emissions onto local livelihoods (*'harbour taverna owners'*).",
        hints: [
          "Unpack the visual/social implication of 'gazing down from hillside villas'.",
          "Who does the executive claim to champion instead ('harbour taverna owners'), and what topic is cleverly sidestepped?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesising-evidence-across-texts",
        strategy: "Choose micro-quotations over bloated slabs",
        question:
          "Why do Grade-9 Paper 2A scripts favour **2–5 word micro-quotations** over copying whole 25-word sentences?",
        options: [
          "OxfordAQA's Paper 2 Section A mark scheme enforces a strict negative penalty, deducting two AO2 marks for every quotation exceeding six words",
          "Micro-quotations embed seamlessly into your own comparative grammar, save crucial writing minutes, and force you to zoom directly onto high-value lexical/figurative choices",
          "Copying complete twenty-five-word sentences from the unseen Source Booklet breaches examination-hall copyright rules and invalidates the response",
          "Dropping brief two-word snippets into a paragraph speaks for itself, freeing candidates from having to explain word connotations or writers' attitudes",
        ],
        answerIndex: 1,
        explanation:
          "Compact micro-quotes keep **your analytical voice** in control of the syntax, double your writing speed across multi-text comparisons, and spotlight the exact verb or metaphor carrying the weight.",
        hints: [
          "Think about both writing speed and analytical precision when comparing two texts in one sentence.",
          "Which is easier to zoom into: a 3-word metaphor inside your clause, or a 25-word slab?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Analyse cyclical framing inside an individual source",
        question:
          "**Source A** opens with an apprentice violin-maker sweeping cedar shavings at dawn and ends forty years later with him watching his granddaughter sweep the exact same workshop floor. What structural method does the writer use, and to what effect?",
        options: [
          "Chaotic non-linear fragmentation showing that violin-making has completely died out",
          "Alarmist cliffhanger warning readers never to enter carpentry apprenticeships",
          "Cyclical framing that transforms a humble menial task into an enduring emblem of generational stewardship and continuity",
          "Sardonic bathos mocking his granddaughter's sweeping technique",
        ],
        answerIndex: 2,
        explanation:
          "Echoing the opening image (*sweeping cedar shavings*) at the close with a new generation (*his granddaughter*) is **transformed cyclical framing**, conveying quiet continuity and passed-on mastery.",
        hints: [
          "Compare the opening action and the closing action — same floor, same shavings, new generation.",
          "What does returning to the starting image with a successor suggest about craft tradition?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Avoid false grammar-only contrasts",
        question:
          "Which method comparison falls into the **'false symmetry' Band-2 trap** that examiners warn against?",
        options: [
          "'Whereas Source A's eyewitness relies on claustrophobic sensory immediacy, Source D's historian steps back into cool statistical hindsight.'",
          "'While Source B deploys dry litotes to mock official complacency, Source C escalates through anaphoric tricolons to rally public protest.'",
          "'Both writers employ medical metaphors, yet Source A diagnoses curable fatigue whereas Source E warns of terminal collapse.'",
          "'Source A uses nouns and full stops, whereas Source B uses verbs and commas to make it flow.'",
        ],
        answerIndex: 3,
        explanation:
          "Every English prose text uses nouns, verbs, commas, and full stops! Claiming *'Source A uses nouns whereas Source B uses verbs'* is meaningless grammatical padding rather than genuine rhetorical comparison.",
        hints: [
          "Ask which contrast states something trivially true of literally every paragraph ever written.",
          "Three options compare real rhetorical strategies; one compares basic parts of speech vacuously.",
        ],
      },
      {
        id: "lang-p2-sources-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-multi-source-pack",
        strategy: "Bridge Section A reading into Section B preparation",
        question:
          "How does careful reading of the 5–6 stimulus texts in **Paper 2 Section A** directly strengthen your performance on **Paper 2 Section B**?",
        options: [
          "Section B's writing tasks are thematically linked to the Section A pack, allowing you to harvest statistics, case studies, and counter-arguments from Section A and transform them into your own persuasive voice",
          "Section B explicitly rewards copying your favourite Section A source passage word-for-word onto the answer booklet to demonstrate thorough textual recall for forty marks",
          "Section B pivots entirely into an unseen Shakespearean tragedy essay with zero thematic or factual crossover from the non-fiction source dossier examined in Section A",
          "Because Section B carries all eighty marks of Paper 2 on its own, skimming Section A quickly and leaving the reading questions blank still permits a full-mark grade",
        ],
        answerIndex: 0,
        explanation:
          "In OxfordAQA 9270 Paper 2, **Section B links thematically to the Section A reading sources**. Flagging 3–4 crisp facts or tensions during Section A gives you instant raw material to **re-forge** (never copy verbatim!) in Section B.",
        hints: [
          "Recall how OxfordAQA designs Paper 2 as a unified thematic dossier.",
          "What can you harvest from Section A's sources — provided you transform it into your own words?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-rhetorical-methods",
        strategy: "Evaluate direct second-person interrogation",
        question:
          "Compare reader alignment in two extracts on electronic waste:\n\n> **Source B:** *'Open your kitchen drawer tonight and count the tangled graveyard of orphaned chargers you swore you might need.'*\n> **Source E:** *'Global e-waste streams reached 62 million metric tonnes in the preceding reporting cycle.'*\n\nHow does Source B's opening manoeuvre differ in effect from Source E's?",
        options: [
          "Source B absolves everyday household consumers of all environmental responsibility by blaming manufacturers exclusively, whereas Source E confronts individual readers directly with accusatory second-person pronouns",
          "Source B uses an imperative ('Open') and domestic second-person ('your kitchen drawer') to implicate the reader in everyday complicity before they can deflect blame onto distant industry, whereas Source E maintains macro-institutional distance",
          "Source B relies on stiff, agentless passive syntax and clinical waste-management metrics, whereas Source E adopts playful conversational comedy and intimate anecdotes about household clutter to warm up the reader",
          "Both openings depend on elevated nineteenth-century biblical allusions and archaic formal cadence, distancing twenty-first-century readers from ordinary domestic electronics habits",
        ],
        answerIndex: 1,
        explanation:
          "Addressing *'your kitchen drawer'* via a domestic **imperative** disarms moral superiority: the reader cannot tut at global polluters once they recognise their own *'orphaned chargers'*.",
        hints: [
          "Notice the grammar of 'Open your kitchen drawer tonight' — imperative verb + 'your' + familiar household spot.",
          "How does that feel compared to '62 million metric tonnes in the preceding reporting cycle'?",
        ],
      },
      {
        id: "lang-p2-sources-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "high-tariff-comparative-paragraphs",
        strategy: "Synthesise structural endings across two sources",
        question:
          "At the end of **Source A**, a flood survivor finishes with a blunt one-line paragraph: *'The insurance assessor still hasn't rung.'* At the end of **Source D**, a Flood Authority brochure finishes: *'Together, resilient communities build tomorrow's defences!'* Why is comparing these two **closing lines** such a powerful final WEAVE paragraph?",
        options: [
          "Because ending on a crisp six-word sentence proves Source A's survivor ran out of ideas mid-draft, whereas Source D's longer slogan shows careful professional planning",
          "Because Paper 2 Section A examiners judge whole-text comparative bands exclusively on the closing sentence of each source, ignoring opening tone and mid-text shifts",
          "Because both closing lines rely on identical triumphant exclamation marks and celebratory inclusive pronouns, confirming both texts share a cheerful institutional optimism",
          "Because contrasting endings exposes the unresolved gulf between lived abandonment (Source A's clipped, present-tense stasis) and polished institutional PR optimism (Source D's inclusive slogan)",
        ],
        answerIndex: 3,
        explanation:
          "Comparing **structural resolutions** shows whole-text command: Source A's clipped negative statement leaves the reader suspended in ongoing bureaucratic neglect, puncturing the hollow cheeriness of Source D's corporate slogan.",
        hints: [
          "Compare 'still hasn't rung' (unfinished waiting, cold reality) against 'Together... build tomorrow's defences!' (upbeat PR).",
          "What does placing those two endings side by side reveal about official promises vs survivor reality?",
        ],
      },
    ],
  },
];

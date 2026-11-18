import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "lang-p1-reading",
  title: "Paper 1A: Literary Non-Fiction Close Reading",
  strand: "Language 9270",
  icon: "🔍",
  summary:
    "Master OxfordAQA 9270 Paper 1 Section A (40 marks): surgical retrieval, layered inference, lexical and syntactic micro-zoom, structural focus shifts, and sustained Grade-9 evaluation across sectioned literary non-fiction.",
  intro:
    "In **OxfordAQA IGCSE English Language (9270) Paper 1 Section A**, you study a **single unseen literary non-fiction text** (such as a memoir, travelogue, expedition diary, or feature journalism piece) divided into numbered sections. Questions step steadily up the tariff ladder — from crisp explicit retrieval and implicit deduction on Section 1, through focused language and sentence-craft analysis on middle sections, to a high-tariff whole-text evaluation of how the writer shapes viewpoint and reader alignment. Top-band answers never feature-spot or paraphrase: they isolate **2–5 word micro-quotations**, unpack precise connotations and syntactic rhythms, and track how tension or attitude evolves.",
  guide: [
    {
      id: "explicit-implicit-inference",
      heading: "Explicit retrieval vs implicit inference",
      discovery: {
        problem:
          "Read this opening from a mountain travelogue:\n\n*\"At 4:15 a.m. the paraffin stove coughed twice and died. Guide Tenzing said nothing; he simply unclipped the spare flint from his collar — polished bright as a coin by twenty winters — and struck again.\"*\n\nSpot **one explicit fact** about the stove, and **two implicit deductions** about Tenzing's character.",
        idea:
          "The **explicit fact** sits directly on the surface: the paraffin stove failed at 4:15 a.m. (*\"coughed twice and died\"*). The **implicit deductions** come from reading between the lines: Tenzing is **calm under pressure** (*\"said nothing; he simply unclipped\"* — zero panic or complaint) and **deeply experienced and prepared** (a spare flint kept on his collar, *\"polished bright as a coin by twenty winters\"*).",
      },
      body: `Early questions on Paper 1 Section A test whether you can separate **surface retrieval** from **subtextual deduction** — and whether you can prove an inference without merely repeating the writer's words in disguise.

| Skill | What the text gives you | What your answer must do | Classic trap to avoid |
|---|---|---|---|
| **Explicit retrieval** | Directly stated facts, numbers, actions, or objects | Lift or cleanly state the exact detail from the designated lines only | Reading outside the specified line/section boundaries |
| **Implicit inference** | Clues in gesture, silence, contrast, or understatement | Deduce the unstated **feeling, motive, or condition** and anchor it to a **2–5 word micro-quote** | **Paraphrasing** (*"he unclipped his spare flint"* → *"he took a spare flint off his collar"*) |

### Band-2 Paraphrase vs Grade-9 Layered Inference

Suppose a 4-mark question asks: *What do we learn about the narrator's attitude to the ferry crossing in this extract?*

> *"I stood wedged beside a crate of damp cabbages while diesel fumes thickened the stair-well, counting the rust-blisters along the lifeboat davits and calculating how fast woollen boots sink."*

- **Band-2 Trap (Paraphrase + Vague Label):** *"The narrator does not like the ferry crossing because he stands next to damp cabbages and smells diesel fumes. He looks at the rusty lifeboat davits and thinks about his boots sinking, which shows it is a bad journey."* (Repeats the extract almost word-for-word; zero conceptual deduction.)
- **Grade-9 Upgrade (Conceptual Deduction + Micro-Quote):** *"Beneath a veneer of **wry, self-deprecating humour**, the narrator feels **claustrophobic unease and distrust** of the vessel's safety. Being **'wedged'** beside **'damp cabbages'** implies undignified physical confinement, while fixating on **'rust-blisters'** on the lifeboat gear reveals hyper-vigilant anxiety about neglect — wryly undercut by **'calculating'** how fast his boots would sink."*

Notice the **Because / Therefore** test: if your explanation merely swaps words for synonyms (*rust-blisters = rusty metal*), you have paraphrased. Always push one layer deeper into **psychological state, power dynamic, or unspoken motive**.`,
      diagram: `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Iceberg diagram contrasting explicit surface retrieval above the waterline with two deeper layers of implicit inference below">
  <rect width="560" height="210" rx="14" fill="#f8fafc"/>
  <rect x="0" y="86" width="560" height="124" rx="14" fill="#e0f2fe"/>
  <line x1="16" y1="86" x2="544" y2="86" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6 4"/>
  <text x="26" y="78" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0369a1">SURFACE WATERLINE (LITERAL TEXT)</text>
  <polygon points="180,86 245,24 315,38 355,86" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="180,86 145,142 205,192 330,188 385,136 355,86" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
  <line x1="162" y1="138" x2="372" y2="138" stroke="#0369a1" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="268" y="64" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#0f172a">EXPLICIT</text>
  <text x="268" y="116" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#0c4a6e">LAYER 1: IMPLIED FEELING</text>
  <text x="268" y="166" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#082f49">LAYER 2: SUBTEXT / MOTIVE</text>
  <rect x="392" y="22" width="154" height="50" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="402" y="40" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f172a">Stated directly</text>
  <text x="402" y="57" font-family="system-ui,sans-serif" font-size="10" fill="#475569">"polished by twenty winters"</text>
  <rect x="392" y="96" width="154" height="44" rx="8" fill="#ffffff" stroke="#7dd3fc"/>
  <text x="402" y="113" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0369a1">Unstated trait</text>
  <text x="402" y="129" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Seasoned, calm competence</text>
  <rect x="392" y="148" width="154" height="48" rx="8" fill="#ffffff" stroke="#0284c7"/>
  <text x="402" y="165" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0c4a6e">Deeper dynamic</text>
  <text x="402" y="181" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Silent authority over novice</text>
</svg>`,
      diagramCaption:
        "Move below the literal waterline: anchor onto a 2–5 word micro-quote, deduce the unspoken emotion or trait, then connect it to the wider relationship or tension.",
      workedExamples: [
        {
          title: "Turning surface clues into two-layer inference",
          problem:
            "Read this memoir snippet:\n\n*\"Whenever my aunt visited from London, my father hid the chipped mugs behind the flour tins and spoke in a voice half an octave higher than Tuesday's.\"*\n\nIdentify **one explicit action** the father takes, and explain **what the writer implies** about his relationship with the aunt.",
          steps: [
            "**Check section boundaries and command word:** First isolate a direct, surface action (*\"hid the chipped mugs behind the flour tins\"*).",
            "**Select micro-quotations for inference:** Pair *\"hid the chipped mugs\"* with *\"half an octave higher than Tuesday's\"*.",
            "**Apply the non-paraphrase test:** Don't say *\"he put old cups away and talked higher\"*. Ask **why**: hiding everyday wear (*\"chipped\"*) reveals **class/status insecurity**, while the strained vocal shift (*\"half an octave higher\"*) betrays **performative deference and anxious desire for her approval**.",
          ],
          answer:
            "Explicitly, the father hides the family's chipped mugs behind the flour tins. Implicitly, the writer suggests the father feels socially self-conscious and intimidated around the London aunt: concealing everyday domestic imperfections ('chipped mugs') and adopting an unnatural, strained register ('half an octave higher') expose an anxious performance of respectability.",
          yourTurn: {
            question:
              "In close-reading mark schemes, what fault occurs when a candidate simply rewrites a quotation in slightly different words instead of deducing its unstated meaning? Give the single standard term.",
            answer: {
              type: "text",
              accept: ["paraphrasing", "paraphrase"],
              display: "paraphrasing",
            },
            solution:
              "**Paraphrasing** repeats the literal surface meaning in different words without uncovering the implied attitude, emotion, or subtext.",
          },
        },
      ],
      keyPoints: [
        "Draw a physical box around the exact section or line range named in the question before reading a single word — evidence from outside that box scores **0 marks**.",
        "Keep embedded quotations surgical (**2–5 words**), woven grammatically into your own analytical sentence.",
        "Test every inference with **'which betrays / implies / exposes…'** — never translate the quote word-for-word.",
        "Look for **silence, understatement, and physical micro-gestures**: literary non-fiction writers rarely state emotions baldly.",
      ],
      whyItWorks:
        "OxfordAQA examiners separate Band 2 ('some straightforward comment / paraphrase') from Band 4 ('perceptive, detailed inference') by checking whether you decode *why* a detail is included rather than *what* happens.",
      strategies: [
        "**Box the section first** so stray quotes from later paragraphs never contaminate low-tariff retrieval.",
        "**Quote-Cluster-Concept:** pair two tiny quotes that point to the same underlying attitude for instant depth.",
        "**Ban synonym-swapping:** if your point means the exact same thing as the quote, push one psychological step deeper.",
      ],
      thinkDeeper:
        "Why do memoirists often convey fear or grief through mundane domestic objects (a spare flint, a chipped mug, a rust-blister) rather than naming the emotion directly? Consider how **restraint** makes non-fiction feel more authentic than melodrama.",
    },
    {
      id: "lexical-imagery-effects",
      heading: "Lexical choice, semantic fields & imagery",
      discovery: {
        problem:
          "Compare two ways a journalist could describe a commuter crowd boarding a train:\n- **Version 1:** *\"Hundreds of tired commuters walked quickly onto the carriages and stood close together.\"*\n- **Version 2:** *\"The platform funnelled the herd through steel chutes, wedging shoulder to damp woollen shoulder until the doors hissed shut.\"*\n\nWhich **semantic field** dominates Version 2, and how does it transform our view of city commuting?",
        idea:
          "Version 2 builds a **semantic field of industrial livestock / cattle-herding** (*\"funnelled\"*, *\"herd\"*, *\"steel chutes\"*, *\"wedging\"*, *\"damp woollen\"*). Instead of independent human passengers, commuters are **dehumanised into passive livestock** processed by a cold mechanical system.",
      },
      body: `Language-analysis questions ask **how** the writer uses words and imagery to create effects. Feature-spotting (*"the writer uses a dynamic verb and sibilance"*) earns almost nothing unless you unpack the **precise connotations** of individual word choices.

### High-Yield Lexical & Figurative Toolkit

| Layer | What to zoom onto | Analytical question to ask |
|---|---|---|
| **Dynamic verbs & participles** | *gouged, throttled, seeped, anchored, prowled* | Does the verb grant **agency** or strip it away? What physical force or speed is encoded? |
| **Precise modifiers (adjectives/adverbs)** | *anaemic sunlight, clinical silence, feverish* | What unexpected domain does the modifier borrow from (e.g. medicine, pathology, religion)? |
| **Semantic field** | A cluster of 3+ words linked by shared theme | How does the sustained lexical pattern (*siege warfare*, *liturgy*, *surgery*) frame the subject? |
| **Metaphor / Simile / Personification** | Tenor (subject) + Vehicle (image compared to) | Which exact quality transfers from the vehicle to the subject? Is nature **hostile**, **indifferent**, or **conspiring**? |
| **Auditory & tactile texture** | Plosives (*b, p, k, t*), sibilance (*s, sh*), gutturals | **Warning:** never claim sibilance is automatically "calming" — context determines whether *s* hisses with menace or whispers with hush! |

### Band-2 Waffle vs Grade-9 Connotative Micro-Zoom

Extract from a desert expedition account:

> *"By noon the salt-flat was an operating theatre of white glare: heat-scalpels peeled the skin from our knuckles while the horizon flatlined in every direction."*

- **Band-2 Trap:** *"The writer uses a metaphor calling the salt-flat an 'operating theatre' and 'heat-scalpels'. This paints a vivid picture in the reader's mind and shows that the desert is really hot and dangerous."* (Empty cliché *"paints a vivid picture"*; reduces rich imagery to *"really hot"*.)
- **Grade-9 Upgrade:** *"The writer constructs an unsettling **semantic field of clinical surgery and mortality** (**'operating theatre'**, **'heat-scalpels'**, **'flatlined'**). Metaphorically casting the noon glare as an **'operating theatre'** strips the landscape of romantic wilderness, framing the sun's brightness as sterile, pitiless, and invasive. Zooming onto the compound noun **'heat-scalpels'**, connotations of razor-edged precision suggest the heat does not merely warm the explorers but actively **dissects** their exposed flesh, culminating in the medical pun **'flatlined'** — fusing topological emptiness with cardiac arrest."*`,
      diagram: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-ring target diagram showing Grade 9 micro-zoom from whole quotation to single word class to layered connotations">
  <rect width="560" height="205" rx="14" fill="#faf5ff"/>
  <circle cx="135" cy="103" r="80" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
  <circle cx="135" cy="103" r="52" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="135" cy="103" r="24" fill="#6d28d9"/>
  <text x="135" y="39" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#4c1d95">1. MICRO-QUOTE</text>
  <text x="135" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#5b21b6">2. KEY WORD</text>
  <text x="135" y="107" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="800" fill="#ffffff">ZOOM</text>
  <line x1="215" y1="45" x2="258" y2="45" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="258" y="20" width="282" height="48" rx="8" fill="#ffffff" stroke="#c4b5fd"/>
  <text x="270" y="38" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#4c1d95">Ring 1: Embed 2-5 word phrase</text>
  <text x="270" y="55" font-family="system-ui,sans-serif" font-size="10" fill="#475569">"...heat-scalpels peeled the skin..."</text>
  <line x1="186" y1="103" x2="258" y2="103" stroke="#7c3aed" stroke-width="2"/>
  <rect x="258" y="78" width="282" height="48" rx="8" fill="#ffffff" stroke="#a78bfa"/>
  <text x="270" y="96" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#5b21b6">Ring 2: Isolate single word + method</text>
  <text x="270" y="113" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Compound metaphor "scalpels" + verb "peeled"</text>
  <line x1="152" y1="120" x2="258" y2="162" stroke="#6d28d9" stroke-width="2"/>
  <rect x="258" y="136" width="282" height="52" rx="8" fill="#ffffff" stroke="#7c3aed"/>
  <text x="270" y="154" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#3b0764">Bullseye: Unpack 2 connotations</text>
  <text x="270" y="171" font-family="system-ui,sans-serif" font-size="10" fill="#334155">1) Surgical precision  2) Helpless vulnerability</text>
</svg>`,
      diagramCaption:
        "Never stop at Ring 1: pull a single load-bearing word out of your quotation and unpack at least two distinct associations in the Bullseye.",
      workedExamples: [
        {
          title: "Unpacking personification vs pathetic fallacy",
          problem:
            "Read this storm memoir extract:\n\n*\"Gale-force gusts interrogated every loose slate on the roof, prying at the rafters like impatient bailiffs demanding entry.\"*\n\nAnalyse how the writer's imagery makes the storm feel threatening.",
          steps: [
            "**Spot the sustained comparison:** The wind is compared to legal/official enforcers (*\"interrogated\"*, *\"impatient bailiffs demanding entry\"*).",
            "**Zoom onto the dynamic verb:** *\"interrogated\"* personifies the gusts as relentless questioners probing for structural weakness.",
            "**Unpack the simile:** *\"like impatient bailiffs\"* evokes debt collection and forced eviction — making the cottage feel less like a safe refuge and more like a besieged home on the brink of seizure.",
          ],
          answer:
            "Through personification and a legal-enforcement simile, the storm is cast not as blind weather but as a calculated, intrusive authority. The verb 'interrogated' endows the gusts with hostile intelligence probing every vulnerability, while the simile 'like impatient bailiffs' carries connotations of inescapable eviction — stripping the narrator's shelter of security.",
          yourTurn: {
            question:
              "What two-word literary term names a group of words scattered across an extract that all belong to the same conceptual topic or domain (such as 'scalpels', 'operating theatre', and 'flatlined' all belonging to medicine)?",
            answer: {
              type: "text",
              accept: ["semantic field", "lexical field"],
              display: "semantic field",
            },
            solution:
              "A **semantic field** (or **lexical field**) is a cluster of words drawn from a shared conceptual domain to sustain an underlying mood or metaphor.",
          },
        },
      ],
      keyPoints: [
        "Ban empty filler forever: *'paints a vivid picture'*, *'makes it stand out'*, and *'helps the reader imagine'* score zero marks.",
        "Distinguish **personification** (giving human agency/intent to an inanimate force) from **pathetic fallacy** (projecting human emotion onto weather/nature to mirror mood).",
        "Always extract **one word** from inside your quote (*\"Specifically, the verb '...' carries connotations of...\"*) to prove microscopic reading.",
        "Tie sound effects (plosives, sibilance, fricatives) strictly to meaning — sound only amplifies an idea already present in the words.",
      ],
      whyItWorks:
        "Zooming onto single words forces you out of general summary and into **connotative precision** — the exact skill OxfordAQA's top level ('perceptive analysis of writer's choices') rewards.",
      strategies: [
        "**Literal vs Figurative Split:** state what the word literally denotes in everyday life before explaining what it transfers to this scene.",
        "**Semantic Field Trio:** group three short 1–2 word quotes from one shared domain to show whole-paragraph craft in a single sentence.",
        "**Agency Check:** ask *who is the grammatical subject doing the verbs?* When fog, machinery, or crowds do all the verbs and the narrator is passive, helplessness is engineered into the grammar.",
      ],
      thinkDeeper:
        "Notice how replacing a simile (*'the glacier was like a beast'*) with an **implicit verb metaphor** (*'the glacier crouched and gnawed the valley floor'*) often feels subtler and more menacing. Why does compressing the image into verbs accelerate tension?",
    },
    {
      id: "sentence-punctuation-craft",
      heading: "Sentence forms, syntax & punctuation craft",
      discovery: {
        problem:
          "Read these two versions of the exact same moment in a deep-sea diving memoir:\n- **Version A:** *\"I checked my gauge and saw the needle hit zero, even though thirty metres of dark water still lay above me.\"* (1 sentence, 21 words)\n- **Version B:** *\"Thirty metres of black water still pressed down between my mask and the hull, cold, unyielding, indifferent to arithmetic — and on my wrist, behind fogged glass, the needle touched zero. Dead zero.\"* (1 periodic sentence + 1 minor fragment)\n\nHow does **delaying** the main clause and ending on *\"Dead zero.\"* change the physical experience of reading?",
        idea:
          "Version B uses **periodic syntax** (stacking physical obstacles and an **asyndetic tricolon** — *\"cold, unyielding, indifferent\"* — *before* the revelation) so the reader must hold their breath across the clause, mimicking the diver's suffocation. Then the **minor fragment** (*\"Dead zero.\"*) snaps shut with abrupt finality.",
      },
      body: `Many candidates ignore **syntax (word order)** and **punctuation**, leaving easy Grade-9 marks on the table. When you analyse sentence structure alongside lexical choice, you show the examiner you understand the **architecture** of prose.

### Essential Syntactic & Punctuation Moves

| Craft feature | How to recognise it | Typical effect in literary non-fiction (adapt to context!) |
|---|---|---|
| **Minor sentence / fragment** | Lacks a finite main verb (*"Silence."*, *"Not a footprint."*) | Arrests momentum; isolates a stark realisation, shock, or stillness |
| **Periodic (left-branching) sentence** | Dependent phrases pile up **before** the delayed main clause | Builds suspense, claustrophobia, or anticipation before the reveal |
| **Cumulative / multi-clause sentence** | Main clause followed by cascading modifiers/clauses | Mirrors overwhelming sensory overload, chaos, or relentless motion |
| **Syndetic listing (polysyndeton)** | Repeated conjunctions (*"mud **and** sleet **and** blistered heels **and**..."*) | Makes burdens feel endless, wearisome, and inescapable |
| **Asyndetic listing (asyndeton)** | Commas only, zero conjunctions (*"darted, ducked, vanished"*) | Accelerates tempo; creates breathless urgency or clinical detachment |
| **Colon (\`:\`)** | Complete clause followed by \`: reveal / explanation\` | Acts as a dramatic **hinge** unveiling a stark cause, verdict, or surprise |
| **Semicolon (\`;\`)** | Balances two closely linked independent clauses | Poised equilibrium, ironic juxtaposition, or controlled reflection |
| **Parenthetical dashes (\`— … —\`)** | Interrupts syntax with an aside or qualifier | Injects a candid, spontaneous, or sardonic inner voice mid-thought |

### Avoiding Empty Syntax Claims

- **Never write:** *"The writer uses a short sentence for impact / to build tension"* or *"The long sentence shows the journey was long."*
- **Write instead:** *"After a sprawling 38-word cumulative clause cataloguing the bazaar's clamour, the sudden two-word minor sentence **'Nobody looked.'** severs the rhythm — enacting the narrator's abrupt emotional isolation amid the crowd."*

Notice how syntactic contrast (**juxtaposition of length and pace**) is almost always where the real effect lives: a short sentence only hits hard because of the multi-clause wave that preceded it.`,
      diagram: `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Waveform pacing diagram contrasting a sprawling multi-clause buildup sentence with a sudden minor fragment drop">
  <rect width="560" height="195" rx="14" fill="#fffbeb"/>
  <text x="24" y="28" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#92400e">SYNTACTIC PACING: MULTI-CLAUSE BUILDUP TO MINOR-SENTENCE DROP</text>
  <rect x="24" y="44" width="368" height="92" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <path d="M 38 118 Q 85 98, 125 104 T 215 84 T 305 66 T 378 54" fill="none" stroke="#d97706" stroke-width="3"/>
  <text x="38" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#78350f">Cumulative / Periodic Buildup (35+ words)</text>
  <text x="38" y="81" font-family="system-ui,sans-serif" font-size="10" fill="#92400e">Subordinate clauses + syndetic "and... and..."</text>
  <text x="38" y="128" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#b45309">Effect: breathless escalation / sensory overload</text>
  <line x1="402" y1="44" x2="402" y2="146" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <rect x="414" y="88" width="122" height="48" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="475" y="109" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#991b1b">Minor Drop</text>
  <text x="475" y="125" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#7f1d1d">"Dead zero."</text>
  <text x="24" y="168" font-family="system-ui,sans-serif" font-size="11" fill="#451a03">Grade-9 Rule: Name the syntactic form + connect rhythm directly to psychological state.</text>
</svg>`,
      diagramCaption:
        "Syntax controls the reader's breathing rate: pair expansive multi-clause accumulation with abrupt syntactic arrest and tie both to the narrator's state of mind.",
      workedExamples: [
        {
          title: "Analysing polysyndeton and colon reveal",
          problem:
            "Examine this travelogue sentence:\n\n*\"We hauled the sledge over ridges of blue ice and over rubble-fields of shattered shale and through slush that sucked at our gaiters until every tendon burned: ahead lay only another identical ridge.\"*\n\nHow do sentence structure and punctuation convey the writer's exhaustion and demoralisation?",
          steps: [
            "**Identify the listing technique:** Repeated conjunctions (*\"over... **and** over... **and** through...\"*) create **syndetic listing (polysyndeton)**, stretching the clause without a pause.",
            "**Pinpoint the punctuation hinge:** The **colon (`:`)** sets up an expectation of reward or arrival after gruelling labour.",
            "**Explain the ironic anticlimax:** Instead of relief, the clause after the colon delivers crushing futility (*\"only another identical ridge\"*), making the effort feel Sisyphean.",
          ],
          answer:
            "The writer uses breathless syndetic listing ('and over... and through...') to elongate the opening clause, forcing the reader to trudge through each physical obstacle alongside the climbers. Crucially, the colon acts as a cruel structural hinge: where the reader anticipates arrival or respite after 'every tendon burned', the post-colon reveal ('only another identical ridge') delivers bleak anti-climax and futility.",
          yourTurn: {
            question:
              "What single rhetorical/syntactic term describes a list that deliberately omits conjunctions such as 'and' — using commas alone (e.g. 'we slipped, scrambled, gasped, froze') to accelerate pace?",
            answer: {
              type: "text",
              accept: ["asyndeton", "asyndetic listing", "asyndetic list"],
              display: "asyndeton",
            },
            solution:
              "**Asyndeton** (or **asyndetic listing**) strips out coordinating conjunctions to create rapid, clipped momentum.",
          },
        },
      ],
      keyPoints: [
        "**Periodic sentences** withhold the main point until the end (suspense); **cumulative sentences** state the main clause first and pile on detail (immersion/overload).",
        "**Syndetic listing / polysyndeton** (*and… and…*) creates relentless accumulation; **asyndetic listing / asyndeton** (*a, b, c*) creates rapid-fire pace.",
        "A **colon** unveils an explanation, consequence, or ironic reveal; **parenthetical dashes** let the narrator undercut their own statement with a candid aside.",
        "Always link syntactic form to **specific meaning in that moment** — never write generic 'creates dramatic effect'.",
      ],
      whyItWorks:
        "Combining **one lexical point** + **one syntactic/punctuation point** inside the same paragraph proves sophisticated command of **both** micro-vocabulary and prose craft.",
      strategies: [
        "**Look for the Hinge:** scan your chosen extract for colons, semicolons, and em-dashes — writers put their sharpest tonal turns right on those marks.",
        "**Contrast Adjacent Lengths:** measure a very short sentence against the long sentence immediately before it to explain the **jolt in tempo**.",
        "**Count the 'ands':** deliberate repetition of *and/or/nor* is never accidental in published literary non-fiction — name **polysyndeton** and unpack the weight it builds.",
      ],
      thinkDeeper:
        "Notice how parenthetical dashes in memoirs (*'I smiled — or bared my teeth in something resembling gratitude — and took the bowl'*) create a split between the **past self acting** in the scene and the **older narrator judging** from hindsight.",
    },
    {
      id: "structural-shifts-focus",
      heading: "Tracking structural shifts & narrative focus",
      discovery: {
        problem:
          "Because OxfordAQA Paper 1A divides its extract into **numbered sections**, imagine how a four-section memoir about an abandoned coastal lighthouse progresses:\n1. **Section 1:**Panoramic view of sunlit cliffs and tourists photographing gulls.\n2. **Section 2:** Zoom onto a rusted padlock and peeling warning sign on the lighthouse door.\n3. **Section 3:** Flashback (analepsis) to winter 1979 when the narrator's grandfather tended the lamp alone during a hurricane.\n4. **Section 4:** Return to the present afternoon; tourists depart at dusk while the unlit lantern glass catches one last red streak of sunset.\n\nWhy didn't the writer just tell the 1979 storm story first?",
        idea:
          "Opening with bright, oblivious present-day tourism creates **structural contrast (juxtaposition)**: the lighthouse first looks picturesque and harmless. Narrowing onto the rusted padlock triggers curiosity as a **portal into memory**, making the 1979 hurricane flashback feel haunted by loss. Returning to dusk in Section 4 completes a **transformed cyclical frame** — the unlit glass catching sunset echoes the lost lamp with elegiac finality.",
      },
      body: `Structure is **camera work and time management**: *what* the writer forces us to look at first, *when* the focus narrows, *where* a memory or tonal pivot intrudes, and *how* the ending re-frames the opening.

### Core Macro-Structural Moves Across Sections

| Structural device | What shifts? | Analytical verb to use (*avoid "then the writer talks about"*) |
|---|---|---|
| **Panoramic → Micro Zoom** | Wide landscape / crowd narrows onto a single face, hand, or object | *narrows the lens onto…, isolates…, funnels reader attention toward…* |
| **External → Internal Shift** | Physical setting/action pivots into private memory, dread, or reflection | *pivots inward to…, punctures surface action with interiority…* |
| **Analepsis (Flashback) / Prolepsis** | Chronology breaks backward into history or leaps forward to consequences | *ruptures linear time to supply backstory…, foreshadows…* |
| **Juxtaposition / Tonal Pivot** | Calm comedy or beauty collides abruptly with danger, grief, or bathos | *undercuts earlier serenity…, subverts reader expectations at the hinge…* |
| **Cyclical / Transformed Return** | Final section revisits an image/phrase from Section 1 with altered meaning | *completes a cyclical frame, transforming initial optimism into…* |

### Structure vs Language: Do Not Confuse Them!

When examining structure (or integrating structural awareness into whole-text questions), ask **Why THIS detail HERE, at THIS exact moment?** rather than merely analysing adjectives:
- **Language comment:** *"The adjective 'rusted' has connotations of decay."*
- **Structural comment:** *"Positioning the close-up on the **'rusted padlock'** immediately after Section 1's carefree tourist panorama **pivots the atmosphere** from holiday postcard to forbidden neglect, priming the reader for the elegiac 1979 flashback in Section 3."*`,
      diagram: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage storyboard arc showing structural progression across four numbered sections of a Paper 1A non-fiction text">
  <rect width="560" height="205" rx="14" fill="#f0fdf4"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#14532d">TRACKING FOCUS &amp; TENSION ACROSS NUMBERED SECTIONS</text>
  <rect x="20" y="44" width="122" height="108" rx="10" fill="#ffffff" stroke="#22c55e" stroke-width="2"/>
  <text x="30" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#15803d">Sec 1: Establish</text>
  <text x="30" y="82" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Wide panoramic lens</text>
  <text x="30" y="98" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Baseline mood set</text>
  <text x="30" y="136" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#16a34a">Equilibrium</text>
  <rect x="154" y="44" width="122" height="108" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
  <text x="164" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#15803d">Sec 2: Zoom In</text>
  <text x="164" y="82" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Close-up anomaly</text>
  <text x="164" y="98" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Subtle unease enters</text>
  <text x="164" y="136" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#ca8a04">Inciting detail</text>
  <rect x="288" y="44" width="122" height="108" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="298" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#14532d">Sec 3: Pivot / Past</text>
  <text x="298" y="82" font-family="system-ui,sans-serif" font-size="10" fill="#1e293b">Tonal turn or flashback</text>
  <text x="298" y="98" font-family="system-ui,sans-serif" font-size="10" fill="#1e293b">Interior stakes peak</text>
  <text x="298" y="136" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#dc2626">Volta / Climax</text>
  <rect x="422" y="44" width="118" height="108" rx="10" fill="#ffffff" stroke="#166534" stroke-width="2"/>
  <text x="432" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#14532d">Sec 4: Reframe</text>
  <text x="432" y="82" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Cyclical echo</text>
  <text x="432" y="98" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Altered perspective</text>
  <text x="432" y="136" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#166534">Resonance</text>
  <path d="M 142 98 L 154 98 M 276 98 L 288 98 M 410 98 L 422 98" stroke="#15803d" stroke-width="2.5"/>
  <path d="M 480 156 C 420 192, 140 192, 80 156" fill="none" stroke="#166534" stroke-width="1.8" stroke-dasharray="5 3"/>
  <text x="280" y="195" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#14532d">Cyclical echo links ending back to Section 1 with changed emotional weight</text>
</svg>`,
      diagramCaption:
        "Treat each numbered section on Paper 1A as a deliberate camera cut: ask what changed between sections and how the ending re-colours the opening.",
      workedExamples: [
        {
          title: "Explaining a pivot from external chaos to interior stillness",
          problem:
            "In a war-correspondent memoir, Paragraph 1 describes ambulances, shouting medics, and shattered glass along an avenue; Paragraph 2 zooms onto a single unbroken teacup sitting upright on a café windowsill while the narrator remembers her grandmother's kitchen. Explain the effect of this **structural shift**.",
          steps: [
            "**Name the twin shift:** Focus narrows from **panoramic street chaos to a microscopic domestic object** (*unbroken teacup*), triggering an **external-to-internal shift into analepsis (memory)**.",
            "**Explain the juxtaposition:** Placing fragile porcelain directly beside shattered glass heightens the **uncanny arbitrariness of destruction**.",
            "**Connect to reader alignment:** The sudden stillness forces the reader out of adrenaline-fuelled spectacle and into intimate human grief.",
          ],
          answer:
            "Structurally, the writer pivots from a wide-angle panorama of collective street chaos to an intimate micro-zoom on a 'single unbroken teacup', abruptly arresting the pace. Juxtaposing fragile intact porcelain against shattered glass underscores the surreal randomness of conflict, while the subsequent shift into personal flashback humanises the devastation by anchoring public tragedy in private domestic memory.",
          yourTurn: {
            question:
              "What literary/structural term describes an ending that deliberately returns to an image, setting, or phrase from the opening of the text (often with transformed emotional meaning)? Give the single word (ending in -al).",
            answer: {
              type: "text",
              accept: ["cyclical", "circular"],
              display: "cyclical",
            },
            solution:
              "A **cyclical** (or **circular**) structure echoes the opening at the close, highlighting either inescapable entrapment or how the narrator's understanding has changed.",
          },
        },
      ],
      keyPoints: [
        "Ban **'makes the reader want to read on'** — every line of every book tries to do that! Specify *what exact question, dread, or irony* the shift plants.",
        "Track **Beginning → Pivot → Ending**: compare the mood of Section 1 directly against the final lines of the extract.",
        "Use precise structural terminology: **panoramic establishment**, **micro-zoom**, **tonal pivot**, **analepsis (flashback)**, **juxtaposition**, **cyclical return**, and **shift from external action to interior reflection**.",
        "Notice **one-sentence paragraphs**: writers isolate a single line into its own paragraph to act as a structural fulcrum between two contrasting sections.",
      ],
      whyItWorks:
        "Examiners reward candidates who treat the extract as a **engineered journey** rather than a static bucket of metaphors — explaining *sequence and placement* unlocks top-band holistic credit.",
      strategies: [
        "**Margin-Label Every Section in 3 Words:** jot *Wide calm → Strange clue → Past trauma → Quiet awe* in your reading time to see the whole arc instantly.",
        "**Ask 'Why Here?':** test whether your point is truly structural by asking *what would be lost if this paragraph came first?*",
        "**Link First Line to Last Line:** check whether weather, light, time of day, or a recurring motif has shifted between opening and closing.",
      ],
      thinkDeeper:
        "Why is **bathos** (a sudden drop from elevated grandeur to comic or mundane anti-climax) one of travel writing's favourite structural pivots? Think about how travel writers puncture their own heroic pretensions.",
    },
    {
      id: "evaluating-writers-viewpoint",
      heading: "Writer's perspective, tone & reader alignment",
      discovery: {
        problem:
          "A travel writer describes attempting to assemble a luxury expedition tent in Scottish drizzle:\n\n*\"According to the glossy brochure, the ' Alpine Sovereign' practically erected itself in ninety seconds; forty minutes later, kneeling in peat-soup with six surplus aluminium poles and my hood filling steadily like a rain-butt, I admired the copywriter's boundless gift for fiction.\"*\n\nIf a candidate writes *'The writer's viewpoint is angry and depressed about camping'*, what vital nuance have they missed?",
        idea:
          "The writer is **not** genuinely furious or tragic — the tone is **sardonic, wry, and self-deprecating**. Ironising the brochure's *\"boundless gift for fiction\"* while picturing his own hood as a *\"rain-butt\"* turns physical misery into comic entertainment, inviting the reader to laugh *with* his humbling.",
      },
      body: `The highest-tariff question at the end of Paper 1 Section A typically asks you to cover the **whole text** (or several sections) to evaluate **how the writer conveys their thoughts, feelings, experiences, or perspective** — or to respond to a critical statement (*"To what extent do you agree…"*).

### Precision Tone Vocabulary (Never Stop at "Positive / Negative / Sad")

| Broad family | High-precision Grade-9 adjectives |
|---|---|
| **Humorous / Ironic** | *wry, sardonic, self-deprecating, tongue-in-cheek, satirical, dryly understated* |
| **Mixed / Conflicted** | *ambivalent, torn, reluctant admiration, bittersweet, Simultaneous awe and dread* |
| **Critical / Outraged** | *indignant, scathing, acerbic, disillusioned, quietly condemnatory* |
| **Reflective / Moved** | *elegiac, wistful, reverent, humbled, poignant, unsentimental* |

### Building a Sustained Grade-9 PETAL Paragraph

For 12–16 mark extended reading responses, weave **language + syntax + structure + tone** together using **PETAL**:
1. **P — Conceptual Point / Thesis:** Name the exact **attitude or shift in viewpoint** (*"Initially, the writer masks acute vulnerability behind brisk, self-deprecating irony…"*).
2. **E — Embedded Micro-Evidence:** Weave 2–5 word quotes seamlessly into your syntax.
3. **T — Technique (Lexical + Syntactic/Structural):** Name the exact craft choice (*"parenthetical dash"*, *"semantic field of siege"*, *"juxtaposition with Section 3"*).
4. **A — Analytical Zoom:** Unpack connotations of one load-bearing word **and** how sentence/structural placement sharpens it.
5. **L — Link to Viewpoint / Reader Alignment:** Show how this positions the reader or evolves across the extract (*"…However, by Section 4 this defensive humour evaporates into hushed reverence…"*).

> **Top-Band Secret — Track the Shift in Attitude:** Literary non-fiction viewpoints are almost **never flat**. A writer rarely stays 100% terrified or 100% delighted from line 1 to line 65. Spotting **ambivalence** (two competing feelings at once) or an **arc of transformation** (*scepticism → grudging respect → awe*) instantly separates Grade 9 from Band 3!`,
      diagram: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PETAL Grade 9 paragraph blueprint showing integrated point, micro-quote, method, connotative zoom, and tonal shift link">
  <rect width="560" height="200" rx="14" fill="#fef2f2"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#7f1d1d">HIGH-TARIFF WHOLE-TEXT EVALUATION: THE PETAL ENGINE</text>
  <rect x="20" y="42" width="96" height="118" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="68" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#b91c1c">P</text>
  <text x="68" y="85" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#7f1d1d">Nuanced Tone</text>
  <text x="68" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#450a0a">"Ambivalent:</text>
  <text x="68" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#450a0a">awe + dread"</text>
  <rect x="126" y="42" width="96" height="118" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="2"/>
  <text x="174" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#dc2626">E</text>
  <text x="174" y="85" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#7f1d1d">Micro-Quote</text>
  <text x="174" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#334155">2-5 words</text>
  <text x="174" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#334155">woven inline</text>
  <rect x="232" y="42" width="96" height="118" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="2"/>
  <text x="280" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#dc2626">T</text>
  <text x="280" y="85" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#7f1d1d">Dual Craft</text>
  <text x="280" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#334155">Lexical choice</text>
  <text x="280" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#334155">+ Syntax/Shift</text>
  <rect x="338" y="42" width="96" height="118" rx="10" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
  <text x="386" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#b91c1c">A</text>
  <text x="386" y="85" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#7f1d1d">Deep Zoom</text>
  <text x="386" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#334155">2 connotations</text>
  <text x="386" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#334155">of 1 key word</text>
  <rect x="444" y="42" width="96" height="118" rx="10" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
  <text x="492" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#991b1b">L</text>
  <text x="492" y="85" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#7f1d1d">Perspective</text>
  <text x="492" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#450a0a">How attitude</text>
  <text x="492" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#450a0a">evolves overall</text>
  <text x="280" y="182" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#7f1d1d">Cover the WHOLE text: select evidence from Opening, Middle Pivot, and Closing sections.</text>
</svg>`,
      diagramCaption:
        "On high-tariff final reading questions, anchor 3–4 PETAL paragraphs across the beginning, middle pivot, and ending so you prove whole-text structural command.",
      workedExamples: [
        {
          title: "Evaluating ambivalence in a wildlife encounter",
          problem:
            "Read this closing paragraph from a marine biologist's memoir:\n\n*\"As the bull orca glided beneath our inflatable keel — six tonnes of night-gloss muscle capable of flipping our hull with an idle shrug of its dorsal — I felt my knuckles whiten on the gunwale; yet when its eye rolled upward, unhurried and ancient, fear gave way to an almost trespassing humility.\"*\n\nEvaluate how the writer conveys a complex, shifting attitude toward the whale.",
          steps: [
            "**Establish the dual thesis (ambivalence):** Rather than simple terror, the writer moves from **visceral physical vulnerability** to **reverent, self-effacing awe**.",
            "**Zoom on initial power asymmetry:** Appositional noun phrase *\"six tonnes of night-gloss muscle\"* and understated noun *\"idle shrug\"* stress how effortlessly lethal the animal is compared to the fragile *\"inflatable\"* boat.",
            "**Pinpoint the syntactic/tonal fulcrum:** The **semicolon followed by 'yet'** pivots the paragraph on the intimate gaze (*\"unhurried and ancient\"*), culminating in the striking modifier *\"trespassing humility\"* — casting humans, not the predator, as intruders in a sacred realm.",
          ],
          answer:
            "The writer conveys profound ambivalence, pivoting within a single sentence from primal vulnerability to reverent awe. Initially, parenthetical dashes frame the appositional phrase 'six tonnes of night-gloss muscle', juxtaposing monumental mass against the fragile 'inflatable keel', while 'idle shrug' emphasises how effortlessly the whale could destroy them. Crucially, the semicolon hinge '; yet' enacts an emotional epiphany: the adjectives 'unhurried and ancient' dignify the creature with timeless intelligence, and the metaphor 'trespassing humility' reframes the human observers as humbled intruders rather than masters of the sea.",
          yourTurn: {
            question:
              "What single precise adjective (starting with 'a') describes having two Simultaneous, conflicting attitudes or emotions toward the same subject (such as feeling both dread and reverence at once)?",
            answer: {
              type: "text",
              accept: ["ambivalent", "ambivalence"],
              display: "ambivalent",
            },
            solution:
              "**Ambivalent** (noun: **ambivalence**) means experiencing simultaneous mixed or contradictory feelings toward something — a hallmark of Grade-9 viewpoint evaluation.",
          },
        },
      ],
      keyPoints: [
        "Always check whether the writer uses **retrospective distance**: an adult memoirist often mocks or gently critiques their naïve younger self.",
        "For whole-text questions, sample **every major section** (Opening → Middle Pivot → Ending) — clustering all quotes in Section 1 caps your mark.",
        "Use **evaluative adverbs** (* deftly, wryly, unsettlingly, starkly, poignantly*) to show critical judgement without writing clunky *'I think the writer does a great job'*.",
        "Spot **irony, hyperbole, and understatement (litotes)**: taking an ironic travel writer literally is one of the costliest Paper 1A misreadings.",
      ],
      whyItWorks:
        "High-tariff mark schemes assess **holistic reading**: synthesising lexical zoom, syntactic rhythm, and macro-structural progression around a nuanced thesis proves complete mastery of Section A.",
      strategies: [
        "**Thesis with 'Initially… Yet ultimately…':** open your high-tariff answer with one two-clause overview sentence mapping the writer's emotional trajectory across the whole text.",
        "**Pair Lexical + Structural in Every Paragraph:** combine a micro-word zoom with a comment on where that moment sits in the extract.",
        "**Audit for Tone Traps:** ask *is the writer exaggerating for comic self-mockery?* before labelling a tough journey 'tragic'.",
      ],
      thinkDeeper:
        "Consider how **first-person vulnerability** builds **reader alignment**: why do readers trust a memoirist who admits petty irritation, clumsiness, or doubt far more readily than one who portrays themselves as heroic?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Explicit retrieval vs Implicit inference",
        back: "**Explicit** = surface fact stated directly in the text. **Implicit** = unstated meaning, motive, or attitude deduced from clues without paraphrasing.",
      },
      {
        front: "What is the Golden Rule for quotation length in Paper 1A?",
        back: "Embed **2–5 word micro-quotations** grammatically inside your own sentence, then pull **one key word** out to zoom onto its connotations.",
      },
      {
        front: "Semantic field",
        back: "A cluster of words across a passage drawn from the **same conceptual domain** (e.g. *siege*, *barricade*, *shrapnel*, *trench* → warfare) to sustain mood or framing.",
      },
      {
        front: "Personification vs Pathetic fallacy",
        back: "**Personification** attributes human agency/actions to any inanimate thing (*the wind interrogated the roof*). **Pathetic fallacy** specifically projects human emotion onto weather/nature to mirror mood (*sullen, weeping skies*).",
      },
      {
        front: "Periodic sentence vs Cumulative sentence",
        back: "**Periodic** delays the main clause until the end after preliminary clauses (building suspense). **Cumulative** states the main clause first and piles on trailing detail (creating sensory immersion).",
      },
      {
        front: "Syndetic listing (polysyndeton) vs Asyndetic listing (asyndeton)",
        back: "**Syndetic** repeats conjunctions (*and… and…*) to create wearisome accumulation. **Asyndetic** strips conjunctions (*a, b, c*) to accelerate pace or suggest clinical detachment.",
      },
      {
        front: "Minor sentence (fragment)",
        back: "A grammatically incomplete sentence lacking a finite main verb (*'Dead zero.'*, *'Silence.'*), used to jolt rhythm and isolate a stark realisation.",
      },
      {
        front: "Function of a colon (`:`) in literary non-fiction",
        back: "Acts as a **syntactic hinge** after an independent clause to unveil an explanation, stark consequence, or ironic reveal.",
      },
      {
        front: "Function of parenthetical dashes (`— … —`)",
        back: "Interrupts the sentence flow to insert a candid aside, qualification, or sardonic inner commentary.",
      },
      {
        front: "Analepsis vs Prolepsis",
        back: "**Analepsis** = structural flashback to earlier events (supplying backstory or contrast). **Prolepsis** = flash-forward / foreshadowing future outcomes.",
      },
      {
        front: "Cyclical structure",
        back: "When the final section echoes an image, setting, or motif from Section 1 — usually with **transformed emotional resonance**.",
      },
      {
        front: "Ambivalent / Ambivalence",
        back: "Holding **two simultaneous, conflicting attitudes** toward a subject (e.g. awe mixed with dread; nostalgia mixed with resentment).",
      },
      {
        front: "Self-deprecating tone",
        back: "Wryly mocking one's own clumsiness, naivety, or failure — builds warmth, authenticity, and comic reader alignment.",
      },
      {
        front: "Bathos",
        back: "An abrupt drop from elevated, dramatic seriousness to mundane or comic anti-climax (common in travelogues to undercut heroic clichés).",
      },
    ],
    mustKnow: [
      "**Box the exact section/lines** named in every question first; evidence taken from outside the specified section earns **0 marks**.",
      "**Paraphrasing is not inference:** swapping *'polished by twenty winters'* for *'cleaned for twenty years'* scores nothing — deduce *seasoned, calm preparedness*.",
      "**Ban empty examiner-trap phrases:** never write *'makes the reader want to read on'*, *'paints a vivid picture in the reader's head'*, or *'hooks the reader'*. Specify the exact psychological effect.",
      "**Zoom from phrase to word:** embed a 2–5 word micro-quote, then isolate **one verb, modifier, or noun** and unpack at least **two connotations**.",
      "**Sound serves meaning:** never claim sibilance is 'soothing' in a menacing extract — connect plosives, sibilance, or gutturals strictly to the scene's context.",
      "**Syntax = pacing control:** analyse sentence-length contrast (sprawling cumulative buildup vs abrupt minor drop) and hinge punctuation (`:`, `;`, `—`).",
      "**Structure = sequence & focus:** ask *Why THIS detail HERE?* Track panoramic-to-micro zoom, external-to-internal shifts, flashbacks, and transformed cyclical returns.",
      "**Whole-text high-tariff evaluation** requires evidence across **Beginning, Middle Pivot, and Ending**, tracking how the writer's perspective evolves.",
      "**Spot irony and retrospective voice:** distinguish between what the narrator felt *in the moment* and how the older writer wryly judges that moment now.",
      "**Watch mark-to-minute timing:** Paper 1 Section A carries 40 marks (~60 minutes including 10–12 minutes of active section-annotating reading time).",
    ],
    misconceptions: [
      {
        wrong: "Writing 'This makes the reader want to read on' or 'This grabs the reader's attention' to explain structural openings or cliffhangers.",
        right: "Specify the exact tension or cognitive gap engineered: e.g. 'Withholding the source of the scraping sound traps the reader inside the narrator's claustrophobic uncertainty.'",
      },
      {
        wrong: "Feature-spotting ('The writer uses a metaphor, dynamic verbs, and a rhetorical question to make it effective').",
        right: "Naming techniques without unpacking specific connotations caps you in Band 2; one deeply analysed metaphor beats four listed labels.",
      },
      {
        wrong: "Copying 25-word whole-sentence quotations and hoping the quote speaks for itself.",
        right: "Long quotes waste time and hide which word you are actually analysing; slice out 2–5 load-bearing words and zoom onto one.",
      },
      {
        wrong: "Treating sibilance as always 'soft and peaceful' or short sentences as always 'exciting action'.",
        right: "Effects are 100% context-dependent: sibilance in a viper or blizzard scene hisses with sinister menace, and a short sentence can enact numb grief rather than action.",
      },
      {
        wrong: "Describing a writer's attitude with flat binary words like 'positive', 'negative', 'happy', or 'sad'.",
        right: "Use precise tonal adjectives — *sardonic, ambivalent, elegiac, wistful, indignant, self-deprecating, reverent* — and track how tone shifts.",
      },
      {
        wrong: "Answering the final whole-text question using three brilliant quotes all pulled from Section 1.",
        right: "Whole-text mark schemes require coverage across the full arc; sample Opening, Middle Pivot, and Closing sections.",
      },
    ],
    examMistakes: [
      "Pulling a quotation from **Section 3** when the question explicitly asks about **Section 1 or Section 2** — an instant zero for that point.",
      "Paraphrasing surface actions instead of deducing **unspoken feelings or power dynamics** on low/mid-tariff inference questions.",
      "Confusing **language analysis** (connotations of words/imagery) with **structural analysis** (camera focus shifts, chronology, juxtaposition, cyclical framing).",
      "Taking **dry British/literary irony or comic hyperbole** literally and claiming a humorous travel writer is 'traumatised and furious'.",
      "Spending 25 minutes over-writing a 4-mark question and leaving only 8 rushed minutes for the high-tariff final evaluation.",
      "Using vague 'the writer uses words / punctuation' instead of exact grammatical terms (*dynamic verb, compound modifier, syndetic listing, colon reveal*).",
      "Ignoring the **shift/pivot** in the extract and pretending the narrator's attitude stays identical from start to finish.",
    ],
    mnemonics: [
      {
        topic: "High-tariff analytical paragraphs",
        device: "PETAL",
        explanation: "**P**oint (nuanced tone/viewpoint) → **E**vidence (2–5 word micro-quote) → **T**echnique (lexical + syntactic/structural) → **A**nalysis (2 connotations of 1 zoomed word) → **L**ink (reader alignment / whole-text shift).",
      },
      {
        topic: "Connotative word-zoom discipline",
        device: "MICRO-3",
        explanation: "**1)** Embed a **M**icro-quote (≤5 words) → **2)** **I**solate 1 single word + word class → **3)** Unpack **2+** **C**onnotations & **R**eader **O**utcome.",
      },
      {
        topic: "Tracking structure across sections",
        device: "Z-P-C (Zoom · Pivot · Cycle)",
        explanation: "Check how the camera **Z**ooms (wide → micro), where the tone or timeline **P**ivots (juxtaposition / flashback), and whether the ending **C**ycles back to reframe Section 1.",
      },
    ],
    realWorld: [
      {
        title: "Long-form investigative journalism",
        detail: "Writers in *The New Yorker*, *Granta*, and *The Guardian Long Read* open major investigations with a close-up human vignette before zooming out to systemic context — the exact structural move tested in Paper 1A.",
        emoji: "📰",
      },
      {
        title: "Expedition & mountaineering memoirs",
        detail: "Classics like Jon Krakauer's *Into Thin Air* or Joe Simpson's *Touching the Void* pair clinical technical nouns with abrupt minor fragments to put readers inside hypoxia and split-second survival decisions.",
        emoji: "🏔️",
      },
      {
        title: "Legal cross-examination & witness statements",
        detail: "Barristers separate **explicit testimony** (what a witness saw) from **implicit inference** (what hesitation or word choice reveals about motive) — identical to Question 1–2 deduction.",
        emoji: "⚖️",
      },
      {
        title: "Film editing & cinematography",
        detail: "Directors cut from an establishing wide shot to an extreme close-up on trembling hands, then cross-cut to a flashback — prose structure on Paper 1A is cinema edited in sentences.",
        emoji: "🎬",
      },
    ],
    videos: [
      {
        title: "IGCSE / GCSE English Language: Grade 9 Language Analysis Micro-Zoom",
        channel: "Mr Bruff / Mr Salles English",
        url: "https://www.youtube.com/results?search_query=gcse+igcse+english+language+grade+9+language+analysis+micro+quotes",
      },
      {
        title: "How to Analyse Structure in Unseen Non-Fiction & Fiction Extracts",
        channel: "Mr Everything English / First Rate Tutors",
        url: "https://www.youtube.com/results?search_query=igcse+english+language+how+to+analyse+structure+shifts+focus",
      },
      {
        title: "OxfordAQA 9270 IGCSE English Language Paper 1 Reading Walkthrough",
        channel: "IGCSE English Revision",
        url: "https://www.youtube.com/results?search_query=oxfordaqa+9270+igcse+english+language+paper+1+reading",
      },
    ],
    formulas: [
      {
        name: "Inference Proof Formula",
        formula: "Micro-quote (2–5 words) + 'betrays / implies / exposes' + unstated psychological state",
        note: "Eliminates Band-2 paraphrasing instantly.",
      },
      {
        name: "Lexical Bullseye Zoom",
        formula: "Embed phrase → Isolate 1 word + word class → Unpack 2 distinct connotations",
        note: "Turns feature-spotting into Grade-9 close reading.",
      },
      {
        name: "Semantic Field Synthesis",
        formula: "Cluster 3 short quotes ('X', 'Y', 'Z') → Name shared domain → Explain framing effect",
        note: "Proves sustained pattern recognition across a whole paragraph.",
      },
      {
        name: "Periodic vs Cumulative Syntax",
        formula: "Periodic = [clauses...] → MAIN POINT (suspense) | Cumulative = MAIN POINT → [trailing detail] (overload)",
        note: "High-precision terminology for long sentences.",
      },
      {
        name: "Polysyndeton vs Asyndeton",
        formula: "Syndetic ('and... and...') = relentless weight | Asyndetic ('a, b, c') = rapid/clipped pace",
        note: "Always connect list rhythm to physical or emotional state.",
      },
      {
        name: "Colon Hinge Reveal",
        formula: "Setup clause + ':' + stark revelation / ironic anti-climax",
        note: "Check colons first when hunting punctuation craft.",
      },
      {
        name: "Structural Shift Sentence Stem",
        formula: "'Positioning [Close-up B] immediately after [Panorama A] pivots the mood from X to Y...'",
        note: "Guarantees genuine structural analysis rather than disguised language analysis.",
      },
      {
        name: "Transformed Cyclical Frame",
        formula: "Section 1 baseline motif → Middle rupture/flashback → Final section echoes motif with altered meaning",
        note: "Classic architecture of literary memoirs and travelogues.",
      },
      {
        name: "Whole-Text Perspective Thesis",
        formula: "'Initially, the writer projects [Tone A] through...; yet following the pivot in Section [N], this gives way to [Tone B]...'",
        note: "Captures ambivalence and tonal evolution for top-band evaluation.",
      },
      {
        name: "Paper 1A Time-Per-Mark Rule",
        formula: "40 marks ≈ 10 mins active annotation + ~1.25 mins writing per mark",
        note: "Protects full time for the high-tariff whole-text question.",
      },
    ],
  },
};

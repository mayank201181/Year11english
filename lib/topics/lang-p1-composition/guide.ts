import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "lang-p1-composition",
  title: "Paper 1B: Descriptive, Narrative & Discursive Craft",
  strand: "Language 9270",
  icon: "✒️",
  summary:
    "Master OxfordAQA 9270 Paper 1 Section B (40 marks): 5-lens descriptive camera zooming, tight cyclical single-scene narratives, musical sentence pacing, balanced discursive counter-argument, and surgical SPaG polish.",
  intro:
    "In **OxfordAQA IGCSE English Language (9270) Paper 1 Section B**, you have roughly **45–50 minutes** to write **one extended composition (40 marks)** chosen from a set of **descriptive**, **narrative**, and **discursive/argumentative** prompts — assessed heavily for both **content/organisation** and **technical accuracy (vocabulary, sentence variety, spelling, and punctuation)**. Top-band writers do not cram five Hollywood explosions into three pages or swallow a thesaurus blindly: they engineer **camera-lens stillness**, **recurring motifs**, **deliberate syntactic cadence**, or **nuanced discursive steelmanning** with faultless punctuation control.",
  guide: [
    {
      id: "sensory-zoom-atmosphere",
      heading: "Sensory zoom, pathetic fallacy & show-don't-tell",
      discovery: {
        problem:
          "Compare two student openings for a descriptive prompt (*Describe a railway station late at night*):\n- **Draft A:** *\"The railway station was very cold, empty, and scary at midnight. I felt nervous standing alone on the wet platform waiting for my train.\"*\n- **Draft B:** *\"Sodium lamps bled amber slicks across the rain-varnished tarmac; overhead, the departure board clicked through blank black slats to an audience of chained luggage trolleys.\"*\n\nDraft B never uses the words *cold, empty, scary,* or *alone* — how does it make you feel all four?",
        idea:
          "**Show-don't-tell** replaces abstract emotion labels (*scary, empty*) with concrete sensory evidence: cold dampness is felt in *\"rain-varnished tarmac\"*, eerie mechanical restlessness in *\"clicked through blank black slats\"*, and abandonment in personifying *\"chained luggage trolleys\"* as the sole **'audience'**.",
      },
      body: `The #1 mistake in **descriptive writing** is accidentally turning a description into a rushed action story (*"Suddenly a masked stranger grabbed my bag..."*). Pure Grade-9 description behaves like a **slow-moving cinema camera** exploring atmosphere across **five planned lenses (ZOOM-5)**.

### The 5-Box Camera-Lens Plan (ZOOM-5)

| Paragraph Box | Camera Lens | Craft target |
|---|---|---|
| **1. Wide Sky / Weather** | Panoramic overhead | Establish baseline mood via **pathetic fallacy** + light/colour |
| **2. Mid-Ground Architecture** | Sweeping eye-level | Buildings, crowds, or silhouettes animated by **sustained extended metaphor** |
| **3. Micro-Object Close-Up** | Extreme macro lens | Zoom onto one tiny overlooked detail (a cracked tile, rusting hinge, discarded ticket) |
| **4. Non-Visual Sensory Shift** | Auditory / Olfactory / Tactile | Close your eyes: layer **sound, smell, temperature, and texture** |
| **5. Weather Shift & Echo** | Pull back to sky | Alter the light/weather slightly to echo Box 1 with **transformed mood** |

### Band-2 Telling vs Grade-9 Sensory Immersion

- **Band-2 Trap (Abstract Telling + Clichéd Similes):** *"The old market was bustling and noisy. Spices smelled nice in the air and the sun was as hot as fire while people shouted loudly everywhere."*
- **Grade-9 Upgrade (Multi-Sensory Micro-Zoom):** *"Beneath frayed tarpaulins sagging with noon heat, crushed cardamom and diesel exhaust thickened the alley air into a warm, peppery broth. Brass scales chimed against marble slabs; nearby, a fishmonger's thumb — silvered with herring scales — slit ice-blocks that hissed onto warm cobbles."*`,
      diagram: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-box descriptive camera lens plan progressing from Wide Sky to Mid-Ground to Micro Close-Up to Non-Visual Senses to Transformed Sky">
  <rect width="560" height="205" rx="14" fill="#eff6ff"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#1e3a8a">THE ZOOM-5 DESCRIPTIVE CAMERA ARCHITECTURE (ZERO PLOT BLOAT)</text>
  <rect x="18" y="44" width="98" height="114" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="67" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#1e40af">1. Wide Sky</text>
  <text x="67" y="84" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Pathetic fallacy</text>
  <text x="67" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Light &amp; colour</text>
  <rect x="124" y="44" width="98" height="114" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
  <text x="173" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#1e40af">2. Mid-Ground</text>
  <text x="173" y="84" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Structures</text>
  <text x="173" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Extended image</text>
  <rect x="230" y="44" width="98" height="114" rx="10" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="279" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#1e3a8a">3. Micro-Zoom</text>
  <text x="279" y="84" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">1 tiny object</text>
  <text x="279" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Extreme detail</text>
  <rect x="336" y="44" width="98" height="114" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
  <text x="385" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#1e40af">4. Non-Visual</text>
  <text x="385" y="84" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Olfactory/Sound</text>
  <text x="385" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Tactile shift</text>
  <rect x="442" y="44" width="100" height="114" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <text x="492" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#1e40af">5. Sky Return</text>
  <text x="492" y="84" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Altered light</text>
  <text x="492" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">Cyclical close</text>
  <text x="280" y="184" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Spend 5 minutes drawing these 5 boxes on your plan before writing Line 1!</text>
</svg>`,
      diagramCaption:
        "ZOOM-5 keeps pure description richly structured for 450–600 words without ever degenerating into melodramatic car chases.",
      workedExamples: [
        {
          title: "Upgrading flat telling into olfactory, tactile & pathetic-fallacy craft",
          problem:
            "Upgrade this flat Band-2 sentence into a Grade-9 descriptive moment without naming the emotion *'anxious'*:\n\n*\"I sat in the dentist's waiting room feeling very anxious while rain fell outside.\"*",
          steps: [
            "**Project anxiety onto weather (pathetic fallacy):** Turn neutral *'rain fell'* into nervous, insistent tapping (*\"neurotic drizzle drummed against frosted glass\"*).",
            "**Engage olfactory + auditory senses:** Add antiseptic smell and clinical clock-ticking.",
            "**Show bodily tension through a micro-zoom object:** Replace *'feeling very anxious'* with thumbs shredding a dated magazine corner.",
          ],
          answer:
            "Outside the frosted pane, a neurotic drizzle drummed irregular Morse code against the sill; inside, clove-oil antiseptic hung sharp in the radiator heat while my thumb methodically worried the dog-eared corner of a three-year-old travel magazine.",
          yourTurn: {
            question:
              "Which specific sensory adjective (9 letters, starting with 'o') refers to the sense of **smell** (one of the fastest ways to lift descriptive writing out of purely visual clichés)?",
            answer: {
              type: "text",
              accept: ["olfactory"],
              display: "olfactory",
            },
            solution:
              "**Olfactory** imagery appeals to smell (e.g. *ozone, damp wool, scorched coffee, antiseptic*) — strongly wired to memory and atmosphere.",
          },
        },
      ],
      keyPoints: [
        "In a **descriptive** task, resist the urge to invent a complex plot — let **time pass slowly** (e.g. dusk falling, a storm breaking, or a market packing up) while your camera pans.",
        "Anchor every paragraph in at least **two non-visual senses**: **auditory** (sound), **olfactory** (smell), **tactile** (touch/temperature), or **gustatory** (taste).",
        "Build **one sustained extended metaphor** (e.g. a library as a cathedral; a storm as an artillery siege) rather than mixing six clashing similes in one paragraph.",
        "Kill dead clichés on sight: *'cold as ice'*, *'quiet as a mouse'*, *'pitch black'*, *'heart pounding like a drum'*.",
      ],
      whyItWorks:
        "Examiners read hundreds of generic action stories; slowing time down to zoom onto **olfactory, tactile, and micro-visual detail** immediately signals conscious literary artistry.",
      strategies: [
        "**Ban Emotion Adjectives Challenge:** cross out *scary, lonely, peaceful, exciting* in your draft and replace each with a physical object behaving in a way that evokes that mood.",
        "**Weather-Mirror-Shift:** let sky/light shift once between Box 1 and Box 5 (e.g. oppressive brassy glare → sudden cooling downpour) to give your description natural momentum.",
        "**Hyphenated Compound Modifiers:** coin fresh two-word modifiers (*rain-varnished, salt-stiffened, neon-bruised*) for instant lexical originality.",
      ],
      thinkDeeper:
        "Why does zooming onto **one tiny flawed detail** (a missing button, a flickering fluorescent tube, a single ant crossing a marble counter) make an imagined place feel more real than describing an entire skyline?",
    },
    {
      id: "cyclical-nonlinear-structure",
      heading: "Cyclical framing, motifs & tight narrative arcs",
      discovery: {
        problem:
          "Candidate X plans a 45-minute narrative essay: *A teenager discovers a secret map → flies to Cairo → survives a helicopter crash → solves an ancient curse → wakes up in bed realising it was all a dream.* Candidate Y writes **500 words set entirely during a twelve-minute piano recital** where a chipped metronome echoes a quarrel with her estranged brother. Who scores Grade 9, and why?",
        idea:
          "Candidate X's **5-twist blockbuster** collapses into rushed *'and then… and then…'* summary capped off by the **examiner-hated 'it was all a dream' cliché**. Candidate Y restricts **scope** (1 character, 1–2 settings, 12 minutes of real time + 1 short flashback) so every line drips with psychological depth, sensory craft, and **motif resonance**.",
      },
      body: `In 45 minutes you are writing a **literary micro-story (500–650 words)**, **not** a Netflix season! Top-band narratives obey the **Rule of One**: **one core protagonist, one central emotional tension, one 15-minute window of real time**, enriched by one brief **analepsis (flashback)** and a **recurring object motif**.

### The 4-Stage Grade-9 Micro-Narrative Blueprint (ARC-4)

1. **In Medias Res + Motif Introduction:** Open right inside a specific physical action or sensory moment; plant a concrete **motif object** (e.g. a tarnished brass key, an unposted airmail envelope, a cracked porcelain watch).
2. **Rising Friction + Short Analepsis:** Reveal what is emotionally at stake by pivoting briefly into **one focused memory** that explains *why* this moment hurts or matters.
3. **Quiet Epiphany / Micro-Climax:** Deliver a sharp **psychological turning point** (a choice made, a silence broken, a truth recognised) — never zombies, bank heists, or amnesia!
4. **Transformed Cyclical Ending:** Return to the **exact motif object** from Paragraph 1, showing through a small physical gesture how the protagonist's relationship to it has changed.

### Band-2 Plot-Dump vs Grade-9 Cyclical Motif Ending

- **Band-2 Ending Trap:** *"Suddenly the police arrived with sirens blazing and arrested the smugglers, and then I woke up in my bedroom and realised it had all been a crazy dream!"*
- **Grade-9 Cyclical Upgrade:** *"On the hallway table lay the brass latchkey — no longer a cold weight anchoring me to my father's silence, but light enough, at last, to leave behind beside the unlatched door."*`,
      diagram: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular narrative diagram showing Motif Planted in In Medias Res Opening, Brief Flashback Backstory, Quiet Psychological Climax, and Transformed Motif Return">
  <rect width="560" height="200" rx="14" fill="#fdf4ff"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#701a75">TIGHT 45-MINUTE NARRATIVE: THE TRANSFORMED CYCLICAL LOOP</text>
  <circle cx="135" cy="112" r="66" fill="none" stroke="#a21caf" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="135" cy="46" r="14" fill="#86198f"/>
  <text x="135" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#ffffff">1</text>
  <circle cx="201" cy="112" r="14" fill="#a21caf"/>
  <text x="201" y="116" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#ffffff">2</text>
  <circle cx="135" cy="178" r="14" fill="#c026d3"/>
  <text x="135" y="182" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#ffffff">3</text>
  <circle cx="69" cy="112" r="14" fill="#701a75"/>
  <text x="69" y="116" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#ffffff">4</text>
  <rect x="242" y="42" width="296" height="32" rx="7" fill="#ffffff" stroke="#e879f9"/>
  <text x="254" y="62" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#701a75">1. In Medias Res + Plant Object Motif</text>
  <rect x="242" y="80" width="296" height="32" rx="7" fill="#ffffff" stroke="#e879f9"/>
  <text x="254" y="100" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#701a75">2. Brief Analepsis (Why the motif matters)</text>
  <rect x="242" y="118" width="296" height="32" rx="7" fill="#ffffff" stroke="#e879f9"/>
  <text x="254" y="138" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#701a75">3. Quiet Choice / Emotional Fulcrum</text>
  <rect x="242" y="156" width="296" height="32" rx="7" fill="#fae8ff" stroke="#a21caf"/>
  <text x="254" y="176" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#4a044e">4. Cyclical Return (Motif meaning inverted)</text>
</svg>`,
      diagramCaption:
        "Shrink the timeline, deepen the interiority: one concrete object appearing three times with shifting meaning unifies your whole story effortlessly.",
      workedExamples: [
        {
          title: "Designing an in medias res hook + cyclical motif",
          problem:
            "Prompt: *Write a story centred on a difficult apology.* Design a **2-sentence in medias res opening** and a **1-sentence cyclical closing** built around a single domestic object.",
          steps: [
            "**Pick one grounded motif object:** A cracked porcelain teacup glued imperfectly down the handle.",
            "**Open mid-action (in medias res):** Start at the kitchen sink holding that cup — zero slow 'One sunny Saturday morning I woke up' preamble!",
            "**Close by transforming the motif:** Show acceptance of imperfection rather than hiding the crack.",
          ],
          answer:
            "Opening: 'Hot tap-water hissed over my knuckles, steaming the hairline glue-scar along my mother's blue porcelain cup while her footsteps paused on the stairs behind me. For six months neither of us had reached for that shelf.'\nClosing: 'Setting the warm blue cup between us — glue-scar turned outward in the morning light — I poured the tea and waited for her to sit.'",
          yourTurn: {
            question:
              "What 5-letter literary noun (starting with 'm') names a concrete object, image, or sound deliberately threaded two or three times through a composition so its changing context tracks emotional change?",
            answer: {
              type: "text",
              accept: ["motif"],
              display: "motif",
            },
            solution:
              "A recurring **motif** (like the glued teacup or brass latchkey) binds opening, flashback, and ending into an intentional structural whole.",
          },
        },
      ],
      keyPoints: [
        "**Ban forever:** *'It was all a dream'*, *'Suddenly everything went black'*, plane crashes, lottery wins, serial killers, and 5-year time skips.",
        "**Keep dialogue minimal and oblique:** 2–4 lines of crisp, subtext-rich dialogue across the whole story beat two pages of ping-pong *'Hi' / 'How are you?'* chatter.",
        "Use a **standalone one-sentence paragraph** right at your emotional fulcrum to control the reader's pace visually.",
        "Ensure **tense consistency** when entering and exiting flashbacks: signal analepsis cleanly with past perfect (*'Three winters earlier, he had promised…'*) before returning smoothly to past simple.",
      ],
      whyItWorks:
        "OxfordAQA's organisation criteria explicitly reward **cohesive structural shaping** — a transformed cyclical motif proves from your very last sentence that your ending was planned before your first word.",
      strategies: [
        "**15-Minute Clock Rule:** never let the 'present-day' action of your exam story span more than 15 minutes of clock time.",
        "**Rule of 2 Characters Max:** you cannot develop authentic voices for six teenagers in 550 words — stick to the narrator + at most one other figure.",
        "**Write Your Last Line on Scrap Paper First:** knowing your cyclical destination keeps every middle paragraph laser-aligned.",
      ],
      thinkDeeper:
        "Notice how in great short fiction (Katherine Mansfield, Raymond Carver, Jhumpa Lahiri), characters rarely say *'I forgive you'* aloud — instead they pass salt, mend a coat, or pour tea. Why is **action-as-subtext** more moving than explicit speech?",
    },
    {
      id: "syntax-rhythm-punctuation",
      heading: "Sentence rhythm & high-impact punctuation",
      discovery: {
        problem:
          "Spot the hidden grammatical error inside this student sentence — one of the most heavily penalised mistakes in IGCSE Section B:\n\n*\"The ferry horn echoed across the harbour, gulls rose in a white cloud from the pier.\"*",
        idea:
          "That is a **comma splice**! Two complete independent clauses (*'The ferry horn echoed across the harbour'* + *'gulls rose in a white cloud from the pier'*) are joined illegally by a weak comma alone. Fix it with a **semicolon (`;`)**, a **coordinating conjunction (`, and`)**, a **full stop**, or subordination (*'As the ferry horn echoed…'*).",
      },
      body: `To unlock the highest technical-command band on Paper 1 Section B, you must deploy **varied sentence structures** and **ambitious, accurate punctuation** — not sprinkled randomly like confetti, but engineered to control rhythm.

### The High-Impact Punctuation Quartet

| Mark | Exact grammatical rule | Craft effect in Section B |
|---|---|---|
| **Colon (\`:\`)** | Must follow a **grammatically complete clause**; introduces a reveal, list, or stark explanation | Creates dramatic spotlighting (*"One truth remained: nobody was coming."*) |
| **Semicolon (\`;\`)** | Joins **two closely linked independent clauses** without *and/but* (or separates complex list items) | Creates poised balance or sharp contrast (*"Outside, hail lashed the slate; inside, peat embers glowed."*) |
| **Paired / Single Em-Dash (\`—\`)** | Slices into a clause for an interruption, sensory zoom, or abrupt tonal turn | Adds immediacy, voice, or sudden jolt (*"I reached for the handle — and froze."*) |
| **Ellipsis (\`…\`)** | Use **at most once** for trailing uncertainty or unfinished thought (never \`......\`!) | Restraint is everything — overusing ellipses looks melodramatic |

### Musical Sentence Pacing: The 3-Speed Cadence

Monotonous 16-word subject-verb-object sentences (*"The wind blew… I walked… The door creaked…"*) put examiners to sleep. Deliberately alternate three speeds inside each paragraph:
1. **Fronted Adverbial / Participial Opener:** *"Shivering beneath the awning, …"* or *"Beyond the rusted sea-wall, …"* (breaks repetitive *'The / I'* starts).
2. **Expansive Periodic or Cumulative Wave (28–38 words):** Layers clauses, **tricolon**, or **polysyndeton** to build immersion.
3. **Short Simple or Minor Drop (2–6 words):** *"Nobody answered."* — lands with crisp authority right after the long wave.`,
      diagram: `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-panel punctuation surgery guide contrasting illegal comma splice with accurate Colon, Semicolon, and Parenthetical Dash craft">
  <rect width="560" height="195" rx="14" fill="#fff1f2"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#881337">PUNCTUATION SURGERY: KILL COMMA SPLICES &amp; DEPLOY THE GRADE-9 QUARTET</text>
  <rect x="20" y="40" width="520" height="38" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>
  <text x="32" y="63" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#9f1239">BANNED COMMA SPLICE:  "Rain lashed the glass, the candle flickered."</text>
  <rect x="20" y="90" width="166" height="86" rx="9" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
  <text x="32" y="110" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#065f46">1. Semicolon Balance</text>
  <text x="32" y="128" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155"> Clause A ; Clause B.</text>
  <text x="32" y="146" font-family="system-ui,sans-serif" font-size="9.5" fill="#047857">Poised contrast / twin focus</text>
  <rect x="197" y="90" width="166" height="86" rx="9" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
  <text x="209" y="110" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#065f46">2. Colon Spotlight</text>
  <text x="209" y="128" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Complete Clause : Reveal.</text>
  <text x="209" y="146" font-family="system-ui,sans-serif" font-size="9.5" fill="#047857">Unveils cause or verdict</text>
  <rect x="374" y="90" width="166" height="86" rx="9" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
  <text x="386" y="110" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#065f46">3. Em-Dash Aside</text>
  <text x="386" y="128" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Subject — zoom — verb.</text>
  <text x="386" y="146" font-family="system-ui,sans-serif" font-size="9.5" fill="#047857">Interrupts with sharp detail</text>
</svg>`,
      diagramCaption:
        "Audit every comma between two verbs: if both sides could stand alone as separate sentences, upgrade that illegal comma into a semicolon, colon, or dash!",
      workedExamples: [
        {
          title: "Fixing repetitive sentence starts & comma splices",
          problem:
            "Transform this choppy, comma-spliced draft into Grade-9 rhythmic prose:\n\n*\"I walked down the corridor. The floorboards creaked under my boots, a cold draught blew from the cellar door. I stopped suddenly.\"*",
          steps: [
            "**Eliminate consecutive 'I / The' openings** using a participial/prepositional opener (*\"Each step down the Narrow corridor…\"*).",
            "**Cure the comma splice** between *'boots'* and *'a cold draught'* and build a **periodic wave** with **parenthetical dashes**.",
            "**Keep the abrupt ending crisp** by isolating a two-word minor/short arrest.",
          ],
          answer:
            "With every hesitant step down the corridor, warped floorboards groaned beneath my boots — dry, hollow, accusing — while a cellar draught coiled icy fingers around my ankles: I froze.",
          yourTurn: {
            question:
              "What **two-word** grammatical error occurs when a writer joins two complete independent clauses using only a comma (e.g. 'The bell rang, everyone stood up')?",
            answer: {
              type: "text",
              accept: ["comma splice", "comma splicing"],
              display: "comma splice",
            },
            solution:
              "A **comma splice** illegally fuses two independent clauses with a bare comma; replace it with a semicolon, full stop, colon, or conjunction.",
          },
        },
      ],
      keyPoints: [
        "**Zero comma splices:** checking for comma splices in your final 5 minutes is the fastest single SPaG mark-saver in IGCSE English.",
        "**Check the left side of every colon:** in prose, the words *before* `:` should form a **complete standalone clause** (*Never write: 'The things I saw were: trees, cars…'*).",
        "**Vary sentence openings:** rotate **prepositional phrases** (*Beneath the arch…*), **present participles** (*Clenching the rail…*), **adverbials** (*Reluctantly,…*), and **subordinate clauses** (*Although dusk had fallen,…*).",
        "Never use double exclamation marks (`!!`) or question-exclamation combos (`?!`) in literary or discursive exams.",
      ],
      whyItWorks:
        "Technical mark schemes explicitly look for **deliberate control of a full range of punctuation and sentence forms for effect** — one accurate colon, two semicolons, and paired dashes tick the top-band descriptor cleanly.",
      strategies: [
        "**The First-Word Highlight Check:** check the first word of every sentence in Paragraph 1 — if three start with *The* or *I*, rewrite two immediately.",
        "**One Semicolon + One Colon Per Page Quota:** consciously engineer at least one poised semicolon contrast and one colon reveal on every exam page.",
        "**Read Internally for Breath:** if you run out of breath without hitting punctuation, add structure; if five short sentences chop like a telegraph, fuse two.",
      ],
      thinkDeeper:
        "Why does a **single deliberate minor fragment** (*'Still nothing.'*) earn praise as top-band craft when surrounded by complex, grammatically impeccable sentences — yet lose marks if your whole essay is full of accidental fragments?",
    },
    {
      id: "discursive-argument-architecture",
      heading: "Discursive balance, concession & thesis control",
      discovery: {
        problem:
          "Prompt: *'Social media has destroyed genuine human friendship.' Discuss.*\n- **Candidate A:** *\"I completely agree 100%!! Teenagers today are glued to screens 24/7 and nobody ever talks in real life anymore! Everyone who uses apps is fake and lonely!\"*\n- **Candidate B:** *\"To claim digital platforms have wholly eradicated intimacy overlooks how diaspora families and isolated rural teenagers sustain vital lifelines online; nevertheless, when algorithmic 'streaks' replace unhurried face-to-face vulnerability, companionship risks thinning into performance.\"*\n\nWhy does Candidate B sound like a broadsheet columnist while Candidate A sounds like an angry comment section?",
        idea:
          "A **discursive essay** (*'Discuss'*, *'To what extent…'*) explores complexity rather than shouting a one-sided rant. Candidate B **steelmans** the strongest opposing case (*diaspora families, isolated teens*) using a **concessive pivot** (*'overlooks how…; nevertheless…'*), qualifying claims instead of making absurd sweeping generalisations (*'everyone is fake'*).",
      },
      body: `OxfordAQA Paper 1 Section B regularly offers a **discursive or argumentative title** alongside descriptive/narrative options. If your natural strength is analytical reasoning rather than creative fiction, a well-architected discursive essay is a powerhouse route to Grade 9 — provided you master **measured register** and **dialectical structure**.

### Discursive vs One-Sided Persuasive Rant

| Feature | Band-2 Rant | Grade-9 Discursive Essay |
|---|---|---|
| **Stance** | Extreme, binary, shouting (*"totally evil"*, *"100% true"*) | Nuanced, weighed thesis (*"While X undeniably catalyses…, its deeper cost lies in…"*) |
| **Opposing views** | Ignored or mocked as stupid (*"Some idiots think…"*) | **Steelmanned** fairly (*"Proponents persuasively point to…"*), then dismantled on deeper grounds |
| **Evidence** | Fake statistics (*"99.8% of doctors at Oxford proved yesterday…"*) | Concrete real-world mechanisms, historical/cultural examples, and precise logic |
| **Pronouns & Modality** | Repetitive *"I think / In my opinion"* | Authoritative impersonal/inclusive framing + **modal nuance** (*may, tends to, risks, seldom*) |

### The 5-Paragraph Discursive Architecture (THESIS-5)

1. **Provocative Hook + Nuanced Thesis:** Reframe the prompt's binary trap; establish a sophisticated central tension.
2. **Angle 1 (Primary Case):** Unpack the strongest structural/social mechanism with a concrete real-world illustration.
3. **Angle 2 (Deeper Psychological / Cultural Layer):** Zoom from practical effects to deeper human values (autonomy, community, equity).
4. **Concession & Rebuttal Pivot (*'Admittedly… Yet…'*):** Steelman the strongest counter-argument generously, then show its blind spot or unintended consequence.
5. **Measured Synthesis Conclusion:** Refuse simplistic slogans; land on a balanced condition or forward-looking reframing.`,
      diagram: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scale and fulcrum diagram showing Discursive Architecture balancing Steelmanned Concession against Deeper Rebuttal to reach Nuanced Synthesis">
  <rect width="560" height="200" rx="14" fill="#f0fdfa"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#134e4a">DISCURSIVE ARCHITECTURE: STEELMAN, PIVOT &amp; SYNTHESISE</text>
  <polygon points="280,126 254,174 306,174" fill="#0f766e"/>
  <line x1="88" y1="126" x2="472" y2="112" stroke="#0d9488" stroke-width="4"/>
  <rect x="34" y="56" width="196" height="62" rx="9" fill="#ffffff" stroke="#2dd4bf" stroke-width="2"/>
  <text x="132" y="76" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#115e59">1. Steelman Counter-Case</text>
  <text x="132" y="93" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">"Admittedly, proponents note..."</text>
  <text x="132" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#0f766e">Shows mature fairness</text>
  <rect x="330" y="42" width="196" height="62" rx="9" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>
  <text x="428" y="62" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#134e4a">2. Deeper Rebuttal Pivot</text>
  <text x="428" y="79" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e293b">"; nevertheless, this overlooks..."</text>
  <text x="428" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#115e59">Wins on underlying principle</text>
  <text x="280" y="191" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#134e4a">Fulcrum: Concession + Qualification ("While X holds in the short term, ultimately Y...")</text>
</svg>`,
      diagramCaption:
        "Never strawman the opposing side: steelmanning the strongest counter-argument before exposing its deeper limitation makes your thesis unshakeable.",
      workedExamples: [
        {
          title: "Crafting a Grade-9 Concession-and-Rebuttal Hinge",
          problem:
            "Prompt: *'Competitive school examinations do more harm than good.' Discuss.*\nWrite a two-sentence **concession-and-rebuttal pivot** that steelmans exams fairly before critiquing their limitation.",
          steps: [
            "**Concede the strongest genuine merit ('Admittedly…'):** Standardised anonymised exams protect meritocracy against nepotism and give revision clear structure.",
            "**Pivot on a semicolon or discourse marker ('Nevertheless…'):** Distinguish *measuring recall* from *mistaking grades for human curiosity*.",
          ],
          answer:
            "Admittedly, anonymised terminal examinations remain one of education's fairest shields against patronage: an examiner marking a candidate number cares nothing for family connections or postcode. Nevertheless, when schooling narrows three years of inquiry into memorizing mark-scheme formulas for a two-hour sprint, assessment stops measuring curiosity and begins replacing it.",
          yourTurn: {
            question:
              "What rhetorical verb (11 letters, starting with 's' — opposite of 'strawmanning') means presenting the **strongest, fairest possible version** of an opposing argument before refuting or qualifying it?",
            answer: {
              type: "text",
              accept: ["steelmanning", "steelman"],
              display: "steelmanning",
            },
            solution:
              "**Steelmanning** builds the strongest version of your opponent's case (unlike *strawmanning*, which mocks a weak caricature), proving intellectual maturity.",
          },
        },
      ],
      keyPoints: [
        "**Never invent absurd fake statistics** (*'87.4% of scientists at Harvard University said yesterday'*): examiners spot fabricated numbers immediately and find them juvenile.",
        "Cut clunky throat-clearing (*'In this essay I am going to discuss both sides of the argument'*); open directly with a **conceptual hook or paradox**.",
        "Deploy high-band **concessive discourse markers**: *Admittedly, Granted, Ostensibly, Notwithstanding this, Conversely, Crucially, Ultimately*.",
        "Use **hypophora** (posing a sharp question and immediately unpacking the answer) and **antithesis** (*'We have multiplied credentials; we have rationed wisdom.'*) for broadsheet authority.",
      ],
      whyItWorks:
        "Discursive mark schemes reward **perceptive complexity and sustained register**: showing *why* intelligent people disagree before synthesizing a principled verdict earns top marks for both ideas and organisation.",
      strategies: [
        "**Unpack the Prompt's Hidden Assumption:** ask *what does 'success' or 'progress' actually mean here?* Defining terms sharply in Paragraph 1 elevates your entire essay.",
        "**Short-Term Benefit vs Long-Term Cost Split:** concede that X works practically in the short run, then argue it erodes Y culturally in the long run.",
        "**End by Reframing the Question:** conclude *'The real question, then, is not whether to abolish X, but how to stop X becoming our master.'*",
      ],
      thinkDeeper:
        "Why does qualifying a claim with modal precision (*'relentless testing **can** corrode intrinsic curiosity'*) actually make a writer sound **more** authoritative than claiming *'exams ruin every single student's life'*?",
    },
    {
      id: "ambitious-register-proofreading",
      heading: "Precision vocabulary, register & SPaG accuracy",
      discovery: {
        problem:
          "Which sentence sounds like genuine Grade-9 prose, and which suffers from **'thesaurus syndrome' (purple prose)**?\n- **Sentence 1:** *\"The lugubrious, cerulean precipitation cascaded plethora-like upon my multitudinous emerald umbrella while I perambulated lugubriously.\"*\n- **Sentence 2:** *\"Slanted sleet needled the canvas ribs of my umbrella as I ducked into the station arch.\"*\n\nWhy does Sentence 1 lose marks despite using longer words?",
        idea:
          "Sentence 1 misuses words (*'plethora'* is a noun, *'cerulean'* rain makes no visual sense, *'lugubriously'* repeats clumsily) — examiners call this **malapropism / overwritten purple prose**. Sentence 2 uses **exact, muscular verbs** (*needled*, *ducked*) and concrete nouns (*canvas ribs*) that fit context seamlessly.",
      },
      body: `Nearly 40% of your Section B credit hinges on **vocabulary precision, register control, and technical accuracy (SPaG)**. Ambitious vocabulary means choosing the **exact** word for the job — especially **verbs and nouns** — rather than piling four random multisyllabic adjectives onto every noun.

### Precision Upgrades: Verbs Beat Adjectives

| Flat verb + adverb | Single Grade-9 precision verb |
|---|---|
| *walked slowly and tiredly* | *trudged, shuffled, slogged, limped* |
| *looked closely and angrily* | *scrutinised, glared, surveyed, appraised* |
| *shone faintly / unsteadily* | *guttered, smouldered, glimmered, flickered* |
| *made something weaker over time* | *eroded, corroded, hollowed, undermined* |
| *hid / covered up the truth* | *obscured, sanitised, camouflaged, veiled* |

### High-Cost SPaG Traps & The 5-Minute Examiner Audit (PACE)

Reserve the **final 5 minutes** of Section B strictly for the **PACE Audit**:
- **P — Punctuation & Comma Splices:** Check every comma separating two verbs; verify apostrophes (**\`its\`** = possessive *its wings* vs **\`it's\`** = *it is*; singular *the boy's coat* vs plural *the boys' coats*).
- **A — Agreement & Tense:** Check that past-tense narratives haven't drifted accidentally into present tense mid-paragraph (*'she opened the door and **sees**…'* ❌).
- **C — Confusable Homophones & Spellings:** Verify *their / there / they're*, *affect* (verb) vs *effect* (noun), *accommodation*, *necessary*, *separate*, *definitely*, *privilege*, *conscience*, *environment*.
- **E — Echoes & Overwriting:** Cut accidental word repetitions within three lines and prune clumsy multi-adjective stacks down to the two sharpest choices.`,
      diagram: `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step PACE 5-minute proofreading audit checklist covering Punctuation, Agreement and Tense, Confusable Spellings, and Echoes">
  <rect width="560" height="195" rx="14" fill="#fefce8"/>
  <text x="22" y="26" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#713f12">THE FINAL 5-MINUTE EXAMINER AUDIT: P · A · C · E</text>
  <rect x="20" y="42" width="122" height="122" rx="10" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
  <text x="81" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="900" fill="#854d0e">P</text>
  <text x="81" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#713f12">Punctuation</text>
  <text x="81" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#422006">Kill comma splices</text>
  <text x="81" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#422006">its vs it's</text>
  <text x="81" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#422006">Colon / ; check</text>
  <rect x="152" y="42" width="122" height="122" rx="10" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
  <text x="213" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="900" fill="#a16207">A</text>
  <text x="213" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#713f12">Agreement</text>
  <text x="213" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Zero tense drift</text>
  <text x="213" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Past vs Present</text>
  <text x="213" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Subject-verb match</text>
  <rect x="284" y="42" width="122" height="122" rx="10" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
  <text x="345" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="900" fill="#a16207">C</text>
  <text x="345" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#713f12">Confusables</text>
  <text x="345" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">affect / effect</text>
  <text x="345" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">separate / definitely</text>
  <text x="345" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">their / there</text>
  <rect x="416" y="42" width="124" height="122" rx="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <text x="478" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="900" fill="#854d0e">E</text>
  <text x="478" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#713f12">Echoes &amp; Cuts</text>
  <text x="478" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#422006">Cut accidental</text>
  <text x="478" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#422006">word repeats &amp;</text>
  <text x="478" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#422006">'very / really'</text>
  <text x="280" y="183" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#713f12">Fixing 4 SPaG slips in 5 minutes often lifts an entire Technical Accuracy band!</text>
</svg>`,
      diagramCaption:
        "Never write right up to the invigilator's 'pens down' call: 550 polished, error-free words outscore 900 sloppy, comma-spliced words every single time.",
      workedExamples: [
        {
          title: "Running a surgical PACE audit on an exam paragraph",
          problem:
            "Spot and correct **four SPaG / register flaws** in this draft sentence:\n\n*\"The storm severely effected the harbour, waves crashed over it's stone wall and pushes fishing boats onto the shingle.\"*",
          steps: [
            "**C — Confusable homophone:** *'effected'* should be the transitive verb **'affected'** (= influenced/impacted).",
            "**P — Comma splice:** *'...harbour, waves crashed...'* fuses two independent clauses — replace `,` with a **semicolon (`;`)**.",
            "**P — Possessive apostrophe:** *'it's stone wall'* means *'it is stone wall'*! Possessive determiner has **zero apostrophe**: **'its'**.",
            "**A — Tense drift:** *'crashed... and **pushes**'* drifts from past simple into present — restore **'pushed'** (or upgrade to dynamic **'hurled'**).",
          ],
          answer:
            "The storm severely affected the harbour; waves crashed over its stone wall and hurled fishing boats onto the shingle.",
          yourTurn: {
            question:
              "Complete this rule accurately: write the exact possessive determiner form meaning 'belonging to it' (as in 'the gull spread ___ wings'), with NO contraction apostrophe.",
            answer: {
              type: "text",
              accept: ["its"],
              display: "its",
            },
            solution:
              "**its** (zero apostrophe) is possessive (like *his* or *hers*); *it's* always contracts *it is* or *it has*.",
          },
        },
      ],
      keyPoints: [
        "Delete **'very'** and **'really'** everywhere: replace *'very tired'* with *exhausted / spent*, *'very loud'* with *deafening*, *'very small'* with *minute / microscopic*.",
        "**Quality beats word-count bloat:** aim for **450–650 crafted words** (2.5–3.5 handwritten exam pages) with 5 minutes planning + 5 minutes PACE proofreading.",
        "Never use a memorised 'fancy word' unless you are 100% certain of its **word class, spelling, and connotation** — natural precision always beats forced thesaurus stuffing.",
        "**Paragraphing for effect:** indent or leave clean line breaks consistently; start a new paragraph whenever **Time, Place, Topic, Speaker, or Camera Focus (TiPToP)** changes.",
      ],
      whyItWorks:
        "Examiners apply a 'best-fit' grid where persistent comma splices, tense drift, and homophone slips physically block entry into the top SPaG band regardless of how imaginative your ideas are.",
      strategies: [
        "**45-Minute Clock Split:** `5 min` 5-box plan → `35 min` deliberate drafting → `5 min` PACE audit.",
        "**Verb Upgrade Pass:** during proofreading, circle three weak verbs (*went, got, was, walked*) and swap each for a precise dynamic verb.",
        "**Dialogue Punctuation Check:** new speaker = new paragraph; punctuation sits **inside** closing speech marks (*\"Wait here,\" she whispered.*).",
      ],
      thinkDeeper:
        "George Orwell's famous prose rule advises: *'Never use a long word where a short one will do — unless the long word carries a precision the short word lacks.'* Notice how pairing crisp Anglo-Saxon verbs (*slit, gripped, thawed*) with occasional Latinate precision (*imperceptible, austere*) creates electric contrast.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the ZOOM-5 plan for descriptive compositions?",
        back: "1) **Wide Sky** (pathetic fallacy) → 2) **Mid-Ground** (extended metaphor) → 3) **Micro-Object Close-Up** → 4) **Non-Visual Senses** (smell/sound/touch) → 5) **Transformed Sky Return**.",
      },
      {
        front: "Show-don't-tell",
        back: "Evoking emotion or atmosphere through **concrete sensory details, physical gestures, and environment** rather than baldly naming feelings (*'scary, lonely, sad'*).",
      },
      {
        front: "Olfactory vs Tactile vs Gustatory imagery",
        back: "**Olfactory** = smell; **Tactile** = touch, texture, and temperature; **Gustatory** = taste.",
      },
      {
        front: "Why do 5-plot-twist exam stories fail to reach Grade 9?",
        back: "In 45 minutes (~550 words), multi-event plots collapse into rushed *'and then…'* summary with zero room for sensory depth, interiority, or rhythmic craft.",
      },
      {
        front: "What is the Rule of One for Paper 1B narratives?",
        back: "**1 protagonist, 1 core emotional tension, ≤15 minutes of real-time scene**, deepened by 1 short flashback (**analepsis**) and 1 recurring **motif**.",
      },
      {
        front: "Transformed cyclical ending",
        back: "Revisiting the **exact setting, phrase, or object motif** from Paragraph 1 in your final lines, with altered meaning proving internal change.",
      },
      {
        front: "What is a comma splice (and 3 ways to fix it)?",
        back: "Joining two independent clauses with only a comma (*'Rain fell, I ran'*). Fix with a **semicolon (`;`)**, **full stop (`.`)**, **colon (`:`)**, or **conjunction (`, and`)**.",
      },
      {
        front: "Grammatical rule for using a colon (`:`) in prose",
        back: "The words **before** the colon must form a **grammatically complete clause**; what follows unveils an explanation, stark consequence, or dramatic reveal.",
      },
      {
        front: "Steelmanning (in discursive writing)",
        back: "Presenting the **strongest, fairest version** of the opposing viewpoint (*'Admittedly, proponents rightly note…'*) before refuting or qualifying it on deeper grounds.",
      },
      {
        front: "`its` vs `it's`",
        back: "**`its`** (no apostrophe) = possessive determiner (*the storm lost its force*). **`it's`** = contraction of *it is* or *it has*.",
      },
      {
        front: "`affect` vs `effect` (standard exam usage)",
        back: "**`affect`** = verb meaning to influence/impact (*heat affected the runners*). **`effect`** = noun meaning result (*a chilling effect*).",
      },
      {
        front: "Purple prose / Thesaurus syndrome",
        back: "Overstuffed, unnatural strings of obscure adjectives that obscure meaning or misuse register — inferior to clean, exact **verbs and concrete nouns**.",
      },
      {
        front: "What is the PACE 5-minute proofreading audit?",
        back: "**P**unctuation & comma splices → **A**greement & tense consistency → **C**onfusable spellings/homophones → **E**choes & 'very/really' cuts.",
      },
    ],
    mustKnow: [
      "**Plan for 5 full minutes** before writing a single sentence: examiners can tell by Paragraph 3 whether your ending was architected upfront.",
      "**Keep pure description distinct from plot:** in descriptive tasks, move your **camera lens** rather than inventing car chases or kidnappings.",
      "**Never end a narrative with 'it was all a dream'**, amnesia, sudden death, or *'To be continued…'* — use a **transformed cyclical motif** instead.",
      "**Zero comma splices:** audit every comma sitting between two finite verbs; upgrade illegal splices into **semicolons** or **colons**.",
      "**Vary sentence openings and lengths:** pair fronted adverbials/participles and 30-word periodic buildups with crisp 3-word drops.",
      "**In discursive tasks, steelman before rebutting:** avoid angry one-sided rants, fake statistics, and repetitive *'I think'* openers.",
      "**Verbs carry more power than stacked adjectives:** swap *'walked very slowly'* for *trudged*, and delete empty intensifiers (*very, really, totally*).",
      "**Protect 5 minutes at the end for PACE proofreading:** catching tense drift, *its/it's*, and spelling slips often lifts an entire SPaG mark band.",
      "**Target 450–650 high-craft words** rather than 950 rushed, unproofread words.",
    ],
    misconceptions: [
      {
        wrong: "Packing five dramatic plot twists, explosions, or murders into a 45-minute narrative to make it 'exciting'.",
        right: "High drama without interiority reads like a comic strip; a quiet 12-minute human dilemma crafted with sensory precision scores Grade 9.",
      },
      {
        wrong: "Cramming three obscure thesaurus adjectives onto every noun ('the lugubrious, gargantuan, azure ocean').",
        right: "Overwriting sounds artificial and risks malapropism; one fresh metaphor and an exact dynamic verb sound authentically literary.",
      },
      {
        wrong: "Thinking discursive essays require making up fake survey percentages ('94.7% of Cambridge professors agree').",
        right: "Examiners penalise implausible invented statistics; real-world mechanisms, cultural examples, and logical steelmanning persuade maturely.",
      },
      {
        wrong: "Sprinkling semicolons randomly wherever you want a 'posh comma'.",
        right: "An inaccurate semicolon costs SPaG credit: both sides of a clause-linking semicolon must be complete independent clauses.",
      },
      {
        wrong: "Starting a story at 7:00 a.m. eating toast when the real scene happens at 4:00 p.m.",
        right: "Cut dead chronological throat-clearing — enter *in medias res* ten seconds before the emotional tension begins.",
      },
      {
        wrong: "Using three exclamation marks ('!!!') or all-caps ('BOOM!') to create dramatic intensity.",
        right: "Comic-book typography breaks formal/literary register; engineer intensity through periodic syntax, plosive verbs, and stark minor sentences.",
      },
    ],
    examMistakes: [
      "Committing repeated **comma splices** (*'The door slammed, nobody moved'*) across every paragraph, capping technical accuracy.",
      "Accidental **tense drift** mid-story — sliding from past simple (*walked, whispered*) into present (*walks, whispers*) during tense moments.",
      "Choosing a **descriptive** prompt and turning it by Paragraph 2 into a fast-paced **action narrative** that ignores sensory setting.",
      "Writing a one-sided, aggressive rant on a **'Discuss'** prompt without conceding a single valid nuance on the opposing side.",
      "Forgetting **TiPToP paragraph breaks** — writing a two-page solid wall of unparagraphed text or forgetting new lines for new speakers.",
      "Confusing **`its`** and **`it's`**, **`there/their/they're`**, or misspelling high-frequency words (*definitely, separate, necessary, environment*).",
    ],
    mnemonics: [
      {
        topic: "Descriptive 5-paragraph camera plan",
        device: "ZOOM-5",
        explanation: "**1)** Wide Sky (pathetic fallacy) → **2)** Mid-Ground (extended metaphor) → **3)** Micro-Object Close-Up → **4)** Non-Visual Senses (olfactory/auditory/tactile) → **5)** Transformed Sky Return.",
      },
      {
        topic: "Final 5-minute SPaG audit",
        device: "PACE",
        explanation: "**P**unctuation & comma splices → **A**greement & tense drift → **C**onfusable homophones/spellings → **E**choes & 'very/really' cuts.",
      },
      {
        topic: "Paragraph break triggers",
        device: "TiPToP",
        explanation: "Start a new paragraph whenever **Ti**me, **P**lace, **To**pic, or **P**erson (speaker/focus) shifts — plus isolate one 1-line fulcrum paragraph for effect.",
      },
    ],
    realWorld: [
      {
        title: "Broadsheet op-eds & leader columns",
        detail: "Columnists in *The Economist*, *Financial Times*, and *The Times* win sceptical readers over using the exact **Concession → Semicolon Pivot → Deeper Principle** architecture of Paper 1B discursive writing.",
        emoji: "🗞️",
      },
      {
        title: "Screenwriting & atmospheric cinematography",
        detail: "Opening sequences of prestige films (like * Blade Runner 2049* or *Roma*) spend three silent minutes panning across weather, surfaces, and ambient sound before a word is spoken — pure ZOOM-5 craft.",
        emoji: "🎞️",
      },
      {
        title: "Literary short-story prizes",
        detail: "Winners of the BBC National Short Story Award build entire masterpieces around one ten-minute domestic encounter and a single transformed motif.",
        emoji: "🏆",
      },
      {
        title: "University admissions essays & Oxbridge interviews",
        detail: "Admissions tutors test whether applicants can **steelman** a counter-argument calmly rather than asserting dogmatic opinions — the core muscle of discursive composition.",
        emoji: "🎓",
      },
    ],
    videos: [
      {
        title: "Grade 9 Descriptive Writing: Camera Zoom & Show-Don't-Tell",
        channel: "Mr Everything English / Mr Salles",
        url: "https://www.youtube.com/results?search_query=igcse+gcse+english+language+grade+9+descriptive+writing+camera+zoom",
      },
      {
        title: "How to Structure a Grade 9 Narrative in 45 Minutes (Cyclical Motifs)",
        channel: "First Rate Tutors / Mr Bruff",
        url: "https://www.youtube.com/results?search_query=gcse+igcse+narrative+writing+grade+9+cyclical+structure+motif",
      },
      {
        title: "Mastering Semicolons, Colons & Discursive Essays for IGCSE English",
        channel: "IGCSE English Revision",
        url: "https://www.youtube.com/results?search_query=igcse+english+language+discursive+writing+colons+semicolons+grade+9",
      },
    ],
    formulas: [
      {
        name: "ZOOM-5 Descriptive Blueprint",
        formula: "Wide Sky → Mid-Ground → Micro-Object → Olfactory/Auditory Shift → Transformed Sky",
        note: "Guarantees cohesive 5-paragraph descriptive progression without plot bloat.",
      },
      {
        name: "ARC-4 Micro-Narrative Loop",
        formula: "In Medias Res + Motif → Brief Analepsis → Quiet Fulcrum Choice → Transformed Motif Return",
        note: "Fits a literary Grade-9 story comfortably inside 45 minutes.",
      },
      {
        name: "Comma-Splice Cure Trio",
        formula: "[Clause 1] ; [Clause 2]  |  [Clause 1] : [Reveal]  |  [Subordinator + Clause 1], [Clause 2]",
        note: "Eliminates the #1 SPaG band-blocker on Section B.",
      },
      {
        name: "3-Speed Paragraph Cadence",
        formula: "Participial opener → 32-word periodic/cumulative wave → 3-word minor/simple drop",
        note: "Creates deliberate musical rhythm on every page.",
      },
      {
        name: "Discursive Steelman Hinge",
        formula: "'Admittedly, [strongest counter-point]...; nevertheless, this overlooks [deeper principle]...'",
        note: "Signals mature dialectical balance instantly.",
      },
      {
        name: "Hypophora Spotlight",
        formula: "Sharp framing question? + Immediate concise, authoritative answer.",
        note: "Far stronger than stacking three unanswered rhetorical questions.",
      },
      {
        name: "Show-Don't-Tell Equation",
        formula: "Delete emotion adjective ('anxious') → Substitute involuntary micro-gesture + sensory detail",
        note: "Lets the reader deduce emotion actively.",
      },
      {
        name: "45-Minute Section B Clock",
        formula: "5 min 5-Box Plan + 35 min Drafting (500–600w) + 5 min PACE Audit = 45 mins",
        note: "Never sacrifice the final 5-minute SPaG audit.",
      },
    ],
  },
};

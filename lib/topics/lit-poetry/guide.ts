import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "lit-poetry",
  title: "Poetry: Edexcel Anthology & Unseen Modern Poetry",
  strand: "Literature 4ET1",
  icon: "📜",
  summary:
    "Master Pearson Edexcel 4ET1 Paper 1 Section A — Part 1 Unseen Modern Poetry (20 marks, AO2) and Part 2 Comparison across all 16 Edexcel Anthology poems (30 marks, AO2 + AO3).",
  intro:
    "Pearson Edexcel IGCSE English Literature (4ET1) **Paper 1 Section A** carries **50 marks** across two high-precision tasks: **Part 1: Unseen Modern Poetry** (20 marks — pure **AO2** analysis of language, form and structure) and **Part 2: Anthology Poetry Comparison** (30 marks — **AO2** craft + **AO3** sustained comparison between two of the **16 set Edexcel Anthology poems**). Crucially, **AO4 historical/biographical context is NOT assessed** anywhere in Section A: examiners deduct valuable time when candidates write Wikipedia biographies of Browning or Duffy instead of comparing **stanza architecture, metre, caesura, enjambment, volta and figurative clusters**.",
  guide: [
    {
      id: "power-voice-identity-poems",
      heading: "Voice, identity & control: If—, Search For My Tongue, Half-caste, My Last Duchess, Half-past Two",
      discovery: {
        problem:
          "Compare how **poetic form** exposes the speaker's relationship to **control** in two Anthology poems:\n- Rudyard Kipling's *If—*: thirty-two lines built as **one single conditional sentence** (*\"If you can keep your head...\"*) resolving only in line 31–32 (*\"Yours is the Earth...\"*).\n- Robert Browning's *My Last Duchess*: fifty-six lines of **rhyming iambic pentameter couplets** (*AABB*) constantly spilling across line-ends via **enjambment** and interrupted by nervous dashes (*\"— how shall I say? —\"*).\n\nWhat does each poet's syntactic engineering reveal before we even look at metaphors?",
        idea:
          "Form **enacts** psychology! Kipling's 30-line delayed main clause forces the reader to practise the exact stoic patience and self-restraint the father teaches his son. Conversely, Browning's Duke tries to cage his speech inside aristocratic **heroic couplets** just as he caged his late wife behind a curtain, yet his **enjambment** and fractured **caesurae** betray obsessive, uncontrollable jealousy leaking through his polished facade.",
      },
      body: `**Cluster 1: Voice, Identity, Authority & Control (Poems 1–5 of 16)**

| Anthology Poem & Poet | Form, Metre & Structure (AO2) | Signature Micro-Quotes & Craft |
|---|---|---|
| ***If—*** — **Rudyard Kipling** | **4 octaves** (**ABABCDCD**), mostly **iambic pentameter** (alternating 11/10-syllable lines); **one periodic conditional sentence** driven by **anaphora** (*"If you can..."*) | *"meet with Triumph and Disaster / And treat those two impostors just the same"* (**personification** + **antithesis**); *"fill the unforgiving minute"*; paternal climax *"you'll be a Man, my son!"* |
| ***Search For My Tongue*** — **Sujata Bhatt** | **3-part free verse** enacting linguistic conflict -> **code-switching** central stanza in **Gujarati script** & phonetic transliteration -> confident English synthesis | Visceral fear that the mother tongue would *\"rot and die in your mouth\"*; nocturnal **volta** in dreams; **extended botanical metaphor** *\"a stump of a shoot / grows longer, grows moist, grows strong veins... it blossoms out of my mouth\"* |
| ***Half-caste*** — **John Agard** | **Performance free verse** in **phonetic Caribbean Creole**, almost **zero standard punctuation** (solidus slashes only), bookended by short mocking physical frames | Satirical physical literalism *\"Excuse me / standing on one leg / I'm half-caste\"*; **reductio ad absurdum** analogies of **Picasso**, **English weather**, and **Tchaikovsky** (*\"mix a black key / wid a white key\"*); closing imperative *\"come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind\"* |
| ***My Last Duchess*** — **Robert Browning** | **Dramatic monologue** in one continuous block of **rhyming iambic pentameter couplets**; **enjambment** + parenthetical **caesurae** (*\"— how shall I say? —\"*) | Possessive pronoun + curtain prop: *\"none puts by / The curtain I have drawn for you, but I\"*; arrogant *\"nine-hundred-years-old name\"*; chilling **euphemism** + sibilance *\"I gave commands; / Then all smiles stopped together\"*; final bronze *\"Neptune... / Taming a sea-horse\"* |
| ***Half-past Two*** — **U.A. Fanthorpe** | **11 tercets** (3-line stanzas) in free verse; fairy-tale opening (*\"Once upon a schooltime\"*), **parentheses** exposing adult hypocrisy, and **compound neologisms** | Capitalised child dread *\"Something Very Wrong\"* vs adult *\"(I forget what it was)\"*; **compound words** *\"Gettinguptime, timeyouwereofftime\"*; **personified** clock (*\"two long legs for walking\"*); **synaesthesia/oxymoron** *\"the silent noise his hangnail made\"*; *\"escaped into the clockless land for ever\"* |

**High-yield AO3 comparative bridges inside Cluster 1**
- **Authority & power over others**: Pair *My Last Duchess* (tyrannical patriarchal possession ending in murder) with *Half-past Two* (institutional adult authority *\"She\"* intimidating a young child, though the child briefly transcends tyranny through imagination) or *If—* (benevolent, conditional paternal guidance toward self-mastery rather than domination of others).
- **Identity & inner selfhood**: Pair *Search For My Tongue* (reclaiming bilingual cultural identity against assimilation) with *Half-past Two* (preserving intuitive childhood wonder against rigid adult *\"schooltime\"*).`,
      diagram: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of all five Voice and Control Anthology poems showing how poetic form enacts authority, satire or liberation">
  <rect x="8" y="8" width="624" height="214" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">How Poetic Form Enacts Control &amp; Identity (Cluster 1: All 5 Poems)</text>
  <rect x="18" y="46" width="114" height="160" rx="9" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="75" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a">If—</text>
  <text x="75" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Kipling</text>
  <text x="75" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e40af">1 Periodic Sentence</text>
  <text x="75" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">4 regular octaves</text>
  <text x="75" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">"two impostors"</text>
  <text x="75" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">Stoic self-command</text>
  <rect x="140" y="46" width="114" height="160" rx="9" fill="#fdf4ff" stroke="#d8b4fe"/>
  <text x="197" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.2" font-weight="700" fill="#6b21a8">Search For My Tongue</text>
  <text x="197" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Bhatt</text>
  <text x="197" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7e22ce">Code-Switching</text>
  <text x="197" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Gujarati script core</text>
  <text x="197" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">"rot" -&gt; "blossoms"</text>
  <text x="197" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#7e22ce">Bilingual rebirth</text>
  <rect x="262" y="46" width="114" height="160" rx="9" fill="#ecfdf5" stroke="#6ee7b7"/>
  <text x="319" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46">Half-caste</text>
  <text x="319" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">John Agard</text>
  <text x="319" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#047857">Creole Free Verse</text>
  <text x="319" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Unpunctuated flow</text>
  <text x="319" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">"whole of yu mind"</text>
  <text x="319" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#047857">Satirical challenge</text>
  <rect x="384" y="46" width="114" height="160" rx="9" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="441" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.8" font-weight="700" fill="#991b1b">My Last Duchess</text>
  <text x="441" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Browning</text>
  <text x="441" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#b91c1c">Dramatic Monologue</text>
  <text x="441" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Enjambed couplets</text>
  <text x="441" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">"all smiles stopped"</text>
  <text x="441" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#991b1b">Possessive tyranny</text>
  <rect x="506" y="46" width="116" height="160" rx="9" fill="#fef3c7" stroke="#fcd34d"/>
  <text x="564" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e">Half-past Two</text>
  <text x="564" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Fanthorpe</text>
  <text x="564" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#b45309">11 Free Tercets</text>
  <text x="564" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Compound words</text>
  <text x="564" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">"clockless land"</text>
  <text x="564" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Imaginative escape</text>
</svg>`,
      diagramCaption:
        "Never describe form neutrally ('it has couplets'): explain how form mirrors psychological control, liberation or fracture.",
      workedExamples: [
        {
          title: "Analysing euphemism, caesura & objectification in My Last Duchess",
          problem:
            "How does Browning expose the Duke's sinister power in:\n*\"Oh, sir, she smiled, no doubt, / Whene'er I passed her; but who passed without / Much the same smile? This grew; I gave commands; / Then all smiles stopped together.\"*",
          steps: [
            "**Examine rhetorical question & jealousy**: The Duke resents not infidelity, but egalitarian warmth — that his wife valued a sunset or a cherry bough alongside his *\"nine-hundred-years-old name\"*.",
            "**Zoom onto caesura & parataxis**: Two heavy medial **semicolon caesurae** (*\"This grew; I gave commands;\"*) compress a lethal escalation into clipped three-word clauses, enacting absolute autocratic power.",
            "**Unpack euphemism & sibilance**: *\"all smiles stopped together\"* uses chilling **euphemism** and hissing **sibilance** to reduce uxoricide (wife-murder) to an aesthetic adjustment — before turning her into a curio behind a curtain.",
          ],
          answer:
            "Browning exposes the Duke's chilling autocracy through clipped **caesurae** (*\"This grew; I gave commands;\"*), whose abrupt parataxis reduces assassination to a casual administrative order. The sibilant **euphemism** *\"Then all smiles stopped together\"* betrays remorseless **objectification**: unable to monopolise his living Duchess's spontaneous joy, the Duke silences her into a painted possession behind his curtain.",
          yourTurn: {
            question:
              "What two-word poetic form describes *My Last Duchess* — a poem spoken entirely by a single fictional/historical persona to a silent implied listener whose presence reveals the speaker's character?",
            answer: {
              type: "text",
              accept: ["dramatic monologue"],
              display: "dramatic monologue",
            },
            solution:
              "A **dramatic monologue** uses a single persona addressing a silent listener (the Count's envoy), generating dramatic irony as the speaker unwittingly condemns himself.",
          },
        },
      ],
      keyPoints: [
        "In *If—*, **Triumph** and **Disaster** are capitalised and personified as *\"two impostors\"* — teaching equanimity against both arrogance and despair.",
        "In *Search For My Tongue*, inserting untranslated **Gujarati script** in the poem's centre forces a monolingual English reader to experience momentary linguistic exclusion before the blossoming metaphor unites both voices.",
        "In *Half-caste*, John Agard strips away standard punctuation and performs in phonetic **Caribbean Creole** (*\"Explain yuself / wha yu mean\"*), using absurd analogies (Picasso, English weather, Tchaikovsky) to turn racist labelling back onto the listener.",
        "In *Half-past Two*, Fanthorpe's **parentheses** (*\"(I forget what it was)\"*) expose the ironic triviality of adult rules compared with the child's capitalised terror (*\"Something Very Wrong\"*).",
      ],
      whyItWorks:
        "Edexcel 4ET1 marks **AO2 form + structure + language** equally: naming periodic syntax (*If—*), code-switching (*Search For My Tongue*) or dramatic monologue (*My Last Duchess*) unlocks Level 5 immediately.",
      strategies: [
        "Never say *'enjambment makes the poem flow'* — in *My Last Duchess*, enjambment betrays the Duke's **uncontrolled ego spilling past his rhyming couplets**.",
        "Notice closing props: Browning's bronze *\"Neptune... / Taming a sea-horse\"* foreshadows how the Duke plans to 'tame' his next bride.",
      ],
    },
    {
      id: "conflict-suffering-blessing-poems",
      heading: "Suffering, awe & witness: Prayer Before Birth, War Photographer, Blessing, The Tyger",
      discovery: {
        problem:
          "Look at the visual shape and stanza control of two poems confronting **human suffering**:\n- **Louis MacNeice's *Prayer Before Birth***: jagged, step-like free-verse stanzas expanding down the page like an accelerating avalanche until a sudden **two-line final stanza** (*\"Otherwise kill me.\"*).\n- **Carol Ann Duffy's *War Photographer***: **four rigid six-line stanzas** locked into an unchanging **ABBCDD** rhyme scheme.\n\nWhy do two poems horrified by cruelty choose completely opposite stanza architectures?",
        idea:
          "MacNeice's unborn speaker is **pleading from inside an encroaching nightmare**, so the ragged, cascading lines enact claustrophobic panic closing in (*\"tall walls wall me\"*) before snapping shut in stark ultimatum. Duffy's war photographer has **already witnessed chaos** and retreats into darkroom ritual (*\"spools of suffering set out in ordered rows\"*), using rigid **ABBCDD sestets** as a psychological containment wall to stop himself breaking down (*\"hands, which did not tremble then / though seem to now\"*).",
      },
      body: `**Cluster 2: Suffering, Moral Witness, Grace & Sublime Awe (Poems 6–9 of 16)**

| Anthology Poem & Poet | Form, Metre & Structure (AO2) | Signature Micro-Quotes & Craft |
|---|---|---|
| ***Prayer Before Birth*** — **Louis MacNeice** | Dramatic monologue of an **unborn child**; **8 free-verse stanzas** with cascading step-indentation + liturgical **anaphora** (*\"I am not yet born...\"*); stark **2-line coda** | Gothic internal rhyme *\"bloodsucking bat or the rat or the stoat\"*; industrial dehumanisation *\"cog in a machine\"* & *\"tall walls wall me\"*; pastoral yearning (*\"water / to dandle me\"*); final paradox *\"Let them not make me a stone and let them not spill me. / Otherwise kill me.\"* |
| ***War Photographer*** — **Carol Ann Duffy** | **4 regular sestets** (6-line stanzas) in strict **ABBCDD** rhyme; cyclical flight -> darkroom -> Rural England -> flight back to war | Sibilant oxymoronic order *\"spools of suffering set out in ordered rows\"*; sacred simile *\"a priest preparing to intone a Mass\"*; plosive caesura litany *\"Belfast. Beirut. Phnom Penh. All flesh is grass.\"* (Isaiah allusion); *\"a half-formed ghost\"*; bitter internal rhyme *\"tears between the bath and pre-lunch beers\"*; blunt monosyllables *\"they do not care.\"* |
| ***Blessing*** — **Imtiaz Dharker** | **4 irregular free-verse stanzas** (2, 4, 11, 6 lines) expanding from parched scarcity to sudden torrential abundance | Somatic drought simile *"The skin cracks like a pod"*; sacred drip metaphor *"the voice of a kindly god"*; precious-metal metaphor + onomatopoeia *"silver crashes to the ground"*; ecstatic **listing** (*"pots, / brass, copper, aluminium"*); luminous synaesthesia *"liquid sun"*, *"the blessing sings / over their small bones."* |
| ***The Tyger*** — **William Blake** | **6 quatrains** of **AABB rhyming couplets** in hammering **catalectic trochaic tetrameter**; **14 unanswered rhetorical questions**; **cyclical frame** shifting one modal verb (*Could -> Dare*) | Alliterative blaze *\"Tyger Tyger, burning bright, / In the forests of the night\"*; oxymoron *\"fearful symmetry\"*; industrial blacksmith semantic field (*\"hammer\"*, *\"chain\"*, *\"furnace\"*, *\"anvil\"*); Christian paradox *\"Did he who made the Lamb make thee?\"*; closing shift *\"Dare frame thy fearful symmetry?\"* |

**Top-band comparative tensions inside Cluster 2**
- **Human cruelty & moral apathy**: Pair *War Photographer* (post-atrocity trauma + Western reader apathy) with *Prayer Before Birth* (pre-natal dread of totalitarian/social conditioning turning humans into *\"stone\"* or *\"cogs\"*).
- **Sacred awe & fragile vulnerability**: Pair *Blessing* (benevolent epiphany where water becomes *\"the voice of a kindly god\"* over *\"small bones\"*) with *The Tyger* (terrifying sublime awe questioning a Creator who forges both gentle *\"Lamb\"* and ferocious predator).`,
      diagram: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stanza-shape comparison across Prayer Before Birth, War Photographer, Blessing and The Tyger">
  <rect x="8" y="8" width="624" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Visual Stanza Architecture in Suffering &amp; Awe Poems</text>
  <rect x="22" y="46" width="144" height="150" rx="8" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="94" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Prayer Before Birth</text>
  <rect x="38" y="76" width="44" height="8" rx="2" fill="#475569"/>
  <rect x="48" y="89" width="64" height="8" rx="2" fill="#475569"/>
  <rect x="58" y="102" width="88" height="8" rx="2" fill="#475569"/>
  <rect x="38" y="122" width="52" height="8" rx="2" fill="#dc2626"/>
  <text x="94" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Cascading litany -&gt; 2-line</text>
  <text x="94" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#991b1b">"Otherwise kill me."</text>
  <rect x="176" y="46" width="144" height="150" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
  <text x="248" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b">War Photographer</text>
  <rect x="196" y="76" width="104" height="14" rx="2" fill="#ef4444"/>
  <rect x="196" y="95" width="104" height="14" rx="2" fill="#ef4444"/>
  <rect x="196" y="114" width="104" height="14" rx="2" fill="#ef4444"/>
  <rect x="196" y="133" width="104" height="14" rx="2" fill="#ef4444"/>
  <text x="248" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#7f1d1d">4 rigid ABBCDD sestets</text>
  <text x="248" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#991b1b">(containing trauma)</text>
  <rect x="330" y="46" width="144" height="150" rx="8" fill="#ecfeff" stroke="#67e8f9"/>
  <text x="402" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#155e75">Blessing (Dharker)</text>
  <rect x="364" y="76" width="76" height="7" rx="2" fill="#0891b2"/>
  <rect x="356" y="88" width="92" height="12" rx="2" fill="#0891b2"/>
  <rect x="344" y="105" width="116" height="28" rx="2" fill="#06b6d4"/>
  <rect x="354" y="138" width="96" height="14" rx="2" fill="#0891b2"/>
  <text x="402" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#155e75">2 -&gt; 4 -&gt; 11 -&gt; 6 lines</text>
  <text x="402" y="181" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#0e7490">(drought -&gt; burst pipe)</text>
  <rect x="484" y="46" width="134" height="150" rx="8" fill="#fff7ed" stroke="#fdba74"/>
  <text x="551" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412">The Tyger (Blake)</text>
  <rect x="502" y="76" width="98" height="16" rx="2" fill="#ea580c"/>
  <rect x="502" y="98" width="98" height="28" rx="2" fill="#fb923c"/>
  <rect x="502" y="132" width="98" height="16" rx="2" fill="#ea580c"/>
  <text x="551" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#9a3412">Symmetrical anvil</text>
  <text x="551" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c">Could -&gt; Dare frame</text>
</svg>`,
      diagramCaption:
        "Look at the page silhouette first: stanza proportions in Cluster 2 physically enact containment, expansion or symmetry.",
      workedExamples: [
        {
          title: "Zooming onto caesura, allusion & bathos in War Photographer",
          problem:
            "Analyse how Duffy presents the gulf between war zones and comfortable readers in:\n*\"Belfast. Beirut. Phnom Penh. All flesh is grass... The reader's eyeballs prick / with tears between the bath and pre-lunch beers.\"*",
          steps: [
            "**Analyse punctuation & sound**: Three heavy full-stop **caesurae** (*\"Belfast. Beirut. Phnom Penh.\"*), reinforced by bilabial/plosive **alliteration** (*B... B... Ph*), sound like camera-shutter clicks or gunshots memorialising each conflict.",
            "**Unpack biblical metaphor**: *\"All flesh is grass\"* (Isaiah 40:6) universalises human mortality with solemn liturgical gravity.",
            "**Contrast internal rhyme & bathos**: Against that sacred gravity, the brisk internal/end chime of *\"tears... beers\"* and trivial domestic comforts (*\"bath and pre-lunch\"*) expose fleeting, shallow Western sympathy via bitter **bathos**.",
          ],
          answer:
            "Duffy weaponises stark structural contrast between trauma and consumer apathy. Three abrupt full-stop **caesurae** and plosive alliteration in *\"Belfast. Beirut. Phnom Penh.\"* mimic the mechanical click of a camera shutter, elevated to sacred elegy by the biblical metaphor *\"All flesh is grass.\"* Conversely, the glib chime of *\"tears\"* with *\"pre-lunch beers\"* triggers biting **bathos**, exposing how distant readers reduce *\"a hundred agonies\"* to momentary Sunday-supplement sentiment.",
          yourTurn: {
            question:
              "In Stanza 1 vs Stanza 6 of William Blake's *The Tyger*, *\"Could frame thy fearful symmetry?\"* changes by a single modal verb at the end of the poem. What single word replaces *\"Could\"* in the final line?",
            answer: {
              type: "text",
              accept: ["dare"],
              display: "Dare",
            },
            solution:
              "**\"Dare\"** (*\"Dare frame thy fearful symmetry?\"*) — shifting the speaker's wonder from questioning the Creator's *capability* (*Could*) to awe-struck dread at the Creator's *audacity* (*Dare*).",
          },
        },
      ],
      keyPoints: [
        "In *Blessing*, Dharker opens with parched brevity (*\"The skin cracks like a pod\"*) so the 11-line third stanza (*\"The municipal pipe bursts\"*) floods the page visually and aurally.",
        "In *Prayer Before Birth*, MacNeice's internal rhymes (*\"bat or the rat or the stoat\"*) speed up claustrophobically, contrasting soft liquid consonants (*\"water / to dandle me\"*) when begging for nature.",
        "In *The Tyger*, **catalectic trochaic tetrameter** (*\"TY-ger TY-ger, BURN-ing BRIGHT\"*) drops the final unstressed syllable so every line lands like a blacksmith's hammer blow on an anvil.",
      ],
      whyItWorks:
        "Connecting **sound patterns** (plosive shutter clicks, trochaic anvil beats, sibilant spools) directly to **stanza geometry** earns top-band AO2 marks.",
      strategies: [
        "Always note the **single-word shift** in *The Tyger* (*Could* -> *Dare*) as proof of transformed cyclical framing.",
        "In *Blessing*, link preciousness (*\"silver\"*, *\"fortune\"*, *\"liquid sun\"*) to spiritual grace (*\"voice of a kindly god\"*, *\"blessing sings\"*).",
      ],
    },
    {
      id: "love-memory-loss-poems",
      heading: "Love, memory & loss: Sonnet 116, La Belle Dame, Piano, Poem at Thirty-Nine, Do not go gentle, Remember, Hide and Seek",
      discovery: {
        problem:
          "Compare two Anthology poems in which an adult looks back at a parent:\n- **D.H. Lawrence's *Piano***: *\"my manhood is cast / Down in the flood of remembrance, I weep like a child for the past.\"*\n- **Alice Walker's *Poem at Thirty-Nine***: *\"He would have grown / to admire / the woman I've become: / cooking, writing, chopping wood, / staring into the fire.\"*\n\nBoth speakers deeply miss a parent — yet why does one end overwhelmed in tears while the other ends grounded and serene?",
        idea:
          "In *Piano*, nostalgia is **involuntary and regressive**: surging **AABB couplets** and lush musical rhythm (*\"insidious mastery of song\"*) sweep away adult stoicism until the past drowns the present (*\"flood of remembrance\"*). In *Poem at Thirty-Nine*, memory is **integrative and healing**: relaxed **free verse** and shifting punctuation (*\"How I miss my father.\"* -> *\"How I miss my father!\"*) allow the speaker to carry her father's generosity *into* her independent adult self.",
      },
      body: `**Cluster 3: Love, Obsession, Childhood Memory & Loss (Poems 10–16 of 16)**

| Anthology Poem & Poet | Form, Metre & Volta (AO2) | Signature Micro-Quotes & Craft |
|---|---|---|
| ***Sonnet 116*** — **William Shakespeare** | **Shakespearean sonnet**: 14 lines of **iambic pentameter** (**ABAB CDCD EFEF GG**); 3 quatrains + clinching **heroic couplet** | Polyptoton *"love is not love / Which alters when it alteration finds"*; navigational metaphors *"an ever-fixed mark"* & *"star to every wand'ring bark"*; personified reaper *"Love's not Time's fool... bending sickle's compass"*; final wager *"I never writ, nor no man ever loved."* |
| ***La Belle Dame sans Merci*** — **John Keats** | **12 ballad quatrains** (**ABCB**); 3 lines of **iambic tetrameter** + truncated **dimeter/trimeter** 4th line; **frame dialogue** + cyclical ending | Autumnal **pathetic fallacy** *"The sedge has wither'd from the lake, / And no birds sing"*; floral death emblems *"lily on thy brow"* & *"fading rose"*; archaic thralldom *"La Belle Dame sans Merci / Thee hath in thrall!"*; warning dream *"starved lips in the gloam"*; *"Alone and palely loitering"* |
| ***Piano*** — **D.H. Lawrence** | **3 quatrains** in **AABB rhyming couplets**; rolling anapaestic/dactylic cadence mimicking musical swell | Present/past pull *"Taking me back down the vista of years"*; **onomatopoeia** *"boom of the tingling strings"*; treacherous personification *"insidious mastery of song / Betrays me back"*; final surrender *"flood of remembrance, I weep like a child for the past."* |
| ***Poem at Thirty-Nine*** — **Alice Walker** | **7 free-verse stanzas** with short enjambed lines; structural **refrain shift** (*period -> exclamation mark*) | Opening regret *"How I miss my father."* & *"tired / when I was / born"*; practical legacy *"deposit slips and checks"*; honest warmth *"telling the truth / did not always mean / a beating"*; **volta** *"How I miss my father!"*; *"dancing / in a yoga meditation"*; *"seasoning none of my life / the same way twice"* |
| ***Do not go gentle into that good night*** — **Dylan Thomas** | **19-line villanelle**: 5 **ABA** tercets + closing **ABAA** quatrain in **iambic pentameter** locked around **twin refrains** | Imperative refrains *"Do not go gentle into that good night"* & **epizeuxis** *"Rage, rage against the dying of the light"*; four archetypes (*"wise"*, *"good"*, *"wild"*, *"grave"* men); **oxymoron** *"blinding sight"* & *"Curse, bless, me now with your fierce tears, I pray."* |
| ***Remember*** — **Christina Rossetti** | **Petrarchan sonnet**: **octave** (**ABBAABBA**) pleading for memory + **sestet** (**CDDECE**) pivoted by **line-9 volta** of selfless release | Euphemistic death *"gone far away into the silent land"*; liminal hesitation *"Nor I half turn to go yet turning stay"*; **anaphora** of *"Remember"* inverted at **volta**: *"Yet if you should forget me for a while"*; antithesis *"Better by far you should forget and smile / Than that you should remember and be sad."* |
| ***Hide and Seek*** — **Vernon Scannell** | **Single un-stanzaed 27-line block** (claustrophobic toolshed); **2nd-person imperative** (*\"you\"*) turning play into existential isolation | Excited imperatives *\"Call out. Call loud\"*; coastal simile *\"smell like the seaside\"*, *\"salty dark\"*; clipped tension *\"Don't breathe. Don't move. Stay dumb.\"*; eerie **pathetic fallacy** volta *\"The darkening garden watches. Nothing stirs.\"* -> *\"Yes, here you are. But where are they who sought you?\"* |`,
      diagram: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side structural diagram comparing Shakespeare's Sonnet 116 and Christina Rossetti's Petrarchan sonnet Remember">
  <rect x="8" y="8" width="624" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Two Anthology Sonnet Architectures: Steadfast Ideal vs Tender Release</text>
  <rect x="24" y="46" width="286" height="150" rx="10" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="167" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a">Sonnet 116 — Shakespearean (English)</text>
  <rect x="42" y="76" width="250" height="24" rx="4" fill="#dbeafe"/>
  <text x="167" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af">Q1 (ABAB): "marriage of true minds" (negation)</text>
  <rect x="42" y="104" width="250" height="24" rx="4" fill="#dbeafe"/>
  <text x="167" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af">Q2 (CDCD): "ever-fixed mark" / guiding "star"</text>
  <rect x="42" y="132" width="250" height="24" rx="4" fill="#dbeafe"/>
  <text x="167" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af">Q3 (EFEF): "not Time's fool" (defies sickle)</text>
  <rect x="42" y="162" width="250" height="24" rx="4" fill="#bfdbfe" stroke="#2563eb"/>
  <text x="167" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Couplet (GG): Absolute legalistic wager</text>
  <rect x="330" y="46" width="286" height="150" rx="10" fill="#fdf2f8" stroke="#f9a8d4"/>
  <text x="473" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9d174d">Remember — Petrarchan (Italian)</text>
  <rect x="348" y="76" width="250" height="50" rx="4" fill="#fce7f3"/>
  <text x="473" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#9d174d">Octave (Lines 1-8, ABBAABBA):</text>
  <text x="473" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#831843">Anaphora "Remember me..." ("silent land")</text>
  <rect x="348" y="132" width="250" height="54" rx="4" fill="#fbcfe8" stroke="#db2777"/>
  <text x="473" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9d174d">LINE 9 VOLTA -&gt; Sestet (CDDECE):</text>
  <text x="473" y="166" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#831843">"Yet if you should forget me... forget and smile"</text>
</svg>`,
      diagramCaption:
        "Pairing Sonnet 116 and Remember lets you compare two 14-line sonnet structures directly: unchanging public proclamation vs intimate Petrarchan volta.",
      workedExamples: [
        {
          title: "Analysing the Petrarchan volta in Rossetti's Remember",
          problem:
            "How does Christina Rossetti use **sonnet form and repetition** across lines 1–14 of *Remember* (*\"Remember me when I am gone away...\"* -> *\"Yet if you should forget me for a while... Better by far you should forget and smile / Than that you should remember and be sad\"*)?",
          steps: [
            "**Map the Petrarchan division**: Lines 1–8 (**octave**, `ABBAABBA`) repeat the imperative verb *\"Remember\"* anxiously as the speaker faces death (*\"the silent land\"*).",
            "**Pinpoint the line-9 volta**: The conjunction *\"Yet\"* pivots into the **sestet** (`CDDECE`), relinquishing possessive claim over the beloved's grief.",
            "**Unpack the closing antithesis**: Balancing *\"forget and smile\"* against *\"remember and be sad\"* proves that authentic love prioritises the survivor's happiness above the speaker's ego.",
          ],
          answer:
            "Rossetti exploits the two-part **Petrarchan sonnet** to dramatise a journey from anxious attachment to selfless grace. While the enclosed `ABBAABBA` **octave** clings to the beloved through insistent **anaphora** of *\"Remember\"*, the line-9 **volta** (*\"Yet if you should forget me\"*) opens into a gentler `CDDECE` **sestet**; culminating in the poised **antithesis** *\"forget and smile\"* versus *\"remember and be sad\"*, Rossetti redefines love as tender release rather than possession.",
          yourTurn: {
            question:
              "What Italian poetic term names the structural/tonal **turn** in a sonnet — occurring at line 9 (*\"Yet if you should forget me\"*) of Rossetti's *Remember*?",
            answer: {
              type: "text",
              accept: ["volta"],
              display: "volta",
            },
            solution:
              "The **volta** (Italian for 'turn') marks the pivotal shift in argument or emotion — typically at line 9 of a Petrarchan sonnet or line 13 of a Shakespearean sonnet.",
          },
        },
      ],
      keyPoints: [
        "In *La Belle Dame sans Merci*, Keats's **shortened fourth line** (*\"And no birds sing\"*) visually and rhythmically starves each ballad stanza, mirroring the Knight's drained vitality.",
        "In *Do not go gentle into that good night*, Dylan Thomas locks his grief inside a 19-line **villanelle** whose obsessive twin refrains (*\"Do not go gentle\"* / *\"Rage, rage\"*) enact relentless refusal to accept his father's death passively.",
        "In *Hide and Seek*, Scannell refuses stanza breaks: one dense 27-line block traps the reader in the dark shed alongside the child before the chilling closing rhetorical question.",
        "In *Sonnet 116*, Shakespeare defines love first by what it does **not** do (*\"alters\"*, *\"bends\"*) before anchoring it in eternal navigational stars.",
      ],
      whyItWorks:
        "Now you command **all 16 Edexcel Anthology poems** — every single question on Paper 1 Section A Part 2 names one poem (or lets you choose a companion) from this exact 16-poem bank.",
      strategies: [
        "Memorise **2 flexible companion poems per theme** so whichever poem Edexcel prints on the exam paper, an instant top-band partner is ready.",
        "Notice how *Hide and Seek* and *Half-past Two* both adopt a child's perspective on time and isolation — an effortless Grade-9 pairing!",
      ],
    },
    {
      id: "anthology-comparative-thesis",
      heading: "Anthology Part 2: integrated thesis, form & method comparison",
      discovery: {
        problem:
          "Spot why Essay Plan A caps at Level 3 while Essay Plan B reaches Level 5 (30/30 marks):\n- **Plan A**: *Paragraph 1–2: Everything about Piano. Paragraph 3–4: Everything about Poem at Thirty-Nine. Conclusion: Both poems are about childhood memories.*\n- **Plan B**: *Thesis: Both poets explore parental memory, yet Lawrence frames nostalgia as an overwhelming regression whereas Walker transforms memory into adult self-actualisation. Para 1: Compares Form & Rhythm (rolling AABB couplets vs open free verse). Para 2: Compares Sensory Imagery. Para 3: Compares Voltas & Endings.*\n\nWhy does Edexcel's **AO3** mark scheme penalise Plan A so heavily?",
        idea:
          "**AO3** rewards **sustained, conceptual cross-comparison of ideas AND methods**. Writing two separate mini-essays glued together ('Poem A then Poem B') leaves comparison until the final five minutes; weaving both poems inside **every topic sentence** earns AO2 and AO3 simultaneously from sentence one.",
      },
      body: `**The Master 16-Poem Pairing Matrix (Edexcel 4ET1 Part 2 — 30 Marks)**

Remember: **AO2 (15 marks)** + **AO3 (15 marks)** = **30 marks**. Zero AO4 biography!

| Exam Theme | Anchor Poem A | Ideal Companion Poem B | Grade-9 Divergent Thesis ('Both X, yet whereas A..., B...') |
|---|---|---|---|
| **Love & Devotion** | *Sonnet 116* (Shakespeare) | *Remember* (Rossetti) *or* *My Last Duchess* (Browning) | Shakespeare proclaims love an *\"ever-fixed\"* public ideal in confident quatrains, whereas Rossetti's Petrarchan **volta** tenderly permits forgetting — or Browning's monologue perverts devotion into lethal possession |
| **Death & Bereavement** | *Do not go gentle into that good night* (Thomas) | *Remember* (Rossetti) *or* *Poem at Thirty-Nine* (Walker) | Both poets lock grief inside strict formal patterns, yet Thomas's obsessive **villanelle** refrains command fierce resistance (*"Rage, rage"*), whereas Rossetti's Petrarchan volta grants serene release (*"forget and smile"*) |
| **Romantic Entrapment** | *La Belle Dame sans Merci* (Keats) | *My Last Duchess* (Browning) | Both expose destructive obsession, yet Keats's depleted ballad mourns a knight enthralled by an elusive femme fatale, whereas Browning's enjambed couplets indict a patriarchal Duke who silences his bride |
| **Memory & Parents** | *Piano* (Lawrence) | *Poem at Thirty-Nine* (Walker) | Both revisit a beloved parent, yet Lawrence's surging **AABB** cadence *"betrays"* adult composure into helpless tears, whereas Walker's relaxed free verse integrates paternal warmth into independent maturity |
| **Childhood & Time** | *Half-past Two* (Fanthorpe) | *Hide and Seek* (Scannell) | Both inhabit a child's sensory world, yet Fanthorpe's playful tercets grant momentary liberation in a *"clockless land"*, whereas Scannell's claustrophobic single block curdles triumph into existential abandonment |
| **Identity & Prejudice** | *Half-caste* (Agard) | *Search For My Tongue* (Bhatt) *or* *If—* (Kipling) | Both Bhatt and Agard champion marginalised linguistic selfhood, yet Bhatt turns inward through nocturnal Gujarati code-switching, whereas Agard weaponises satirical Creole analogies aloud to dismantle prejudice |
| **Suffering & Cruelty** | *War Photographer* (Duffy) | *Prayer Before Birth* (MacNeice) | Both indict human brutality, yet Duffy contains post-conflict trauma inside rigid **ABBCDD** darkroom sestets against public apathy, whereas MacNeice's cascading free verse pleads pre-emptively against dehumanisation |
| **Awe, Creation & Grace** | *The Tyger* (Blake) | *Blessing* (Dharker) | Both marvel at elemental force, yet Blake's trochaic anvil questions a dread Creator who forged terror, whereas Dharker's expanding free verse celebrates communal ecstasy under a *\"kindly god\"* |

**Anatomy of a Woven Grade-9 Comparative Paragraph (Hinge-Method)**
1. **Conceptual Comparative Topic Sentence (AO3)**: *\"Both poets manipulate **stanza regularity** to reflect psychological pressure, yet whereas Duffy imposes rigid order to contain trauma, MacNeice fractures line length to enact encroaching panic.\"*
2. **Poem A Method + Micro-Quote + Effect (AO2)**: Analyse 2–4 words + formal/sonic craft in Poem A.
3. **Evaluative Hinge Connective (AO3)**: *\"Conversely, while Duffy's persona retreats behind symmetrical walls, MacNeice...\"* / *\"In sharp formal contrast...\"*
4. **Poem B Method + Micro-Quote + Comparative Synthesis (AO2 + AO3)**: Analyse Poem B's method and tie back to why their worldviews diverge.`,
      diagram: `<svg viewBox="0 0 640 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart comparing the weak Block Essay trap against the Grade-9 Woven Hinge Paragraph structure for Edexcel Anthology Comparison">
  <rect x="8" y="8" width="624" height="189" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Edexcel 4ET1 Part 2 (30 Marks): Block Trap vs Woven Hinge</text>
  <rect x="24" y="46" width="272" height="134" rx="10" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="160" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#991b1b">BAND-3 TRAP: Block Essay</text>
  <rect x="44" y="76" width="232" height="24" rx="4" fill="#fecaca"/>
  <text x="160" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">50% on Poem A alone (zero AO3)</text>
  <rect x="44" y="106" width="232" height="24" rx="4" fill="#fecaca"/>
  <text x="160" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">50% on Poem B ("Similarly...")</text>
  <text x="160" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b">Result: Caps AO3 comparison marks!</text>
  <rect x="320" y="46" width="296" height="134" rx="10" fill="#dcfce7" stroke="#86efac"/>
  <text x="468" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#166534">GRADE-9 UPGRADE: 3 Woven Hinge Paras</text>
  <rect x="338" y="76" width="260" height="24" rx="4" fill="#bbf7d0"/>
  <text x="468" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#14532d">1. Shared theme + Divergent angle (A vs B)</text>
  <rect x="338" y="105" width="260" height="24" rx="4" fill="#bbf7d0"/>
  <text x="468" y="121" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#14532d">2. Poem A craft -&gt; HINGE -&gt; Poem B craft</text>
  <rect x="338" y="134" width="260" height="24" rx="4" fill="#bbf7d0"/>
  <text x="468" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#14532d">3. Form/Structure, Imagery, Voltas/Endings</text>
</svg>`,
      diagramCaption:
        "Three woven comparative paragraphs (Form & Voice -> Imagery & Tone -> Structural Volta & Ending) beat six disconnected paragraphs every time.",
      workedExamples: [
        {
          title: "Writing a Grade-9 hinge transition (AO2 + AO3)",
          problem:
            "Upgrade this weak comparison between *Sonnet 116* and *My Last Duchess*:\n*\"Shakespeare uses metaphors about stars to show true love. Browning is different because the Duke is jealous and uses enjambment.\"*",
          steps: [
            "**Establish a shared conceptual axis**: Both poets explore **male speakers defining devotion and permanence**.",
            "**Contrast form + imagery purposefully**: Shakespeare's balanced quatrains elevate love into a guiding celestial constant (*\"star to every wand'ring bark\"*), whereas Browning's enjambed couplets expose a speaker who mistakes permanence for dead aesthetic ownership (*\"painted on the wall\"*).",
          ],
          answer:
            "While both speakers seek **permanence** in relationships, their poetic forms expose diametrically opposed ethics of love: Shakespeare's poised `ABAB` quatrains celebrate a transcendent moral compass — *\"the star to every wand'ring bark\"* — that guides without coercing, **whereas** Browning subverts rhyming couplets through restless **enjambment** (*\"none puts by / The curtain... but I\"*), revealing a tyrant who achieves permanence only by freezing a living woman into a painted commodity.",
          yourTurn: {
            question:
              "How many marks out of 50 on Paper 1 Section A are awarded for **AO4 biographical/historical context** on the Anthology Poetry Comparison?",
            answer: {
              type: "number",
              value: 0,
            },
            solution:
              "**0 marks**! Edexcel 4ET1 Paper 1 Section A tests **AO2** (language, form, structure) and **AO3** (comparative links) only — never waste exam minutes on poet biographies.",
          },
        },
      ],
      keyPoints: [
        "**Similarity + Divergence**: The strongest AO3 thesis always starts with a similarity and immediately sharpens a divergence (*\"Both explore X, yet whereas Poet A..., Poet B...\"*).",
        "**Compare methods, not just topics**: Compare a **sonnet volta** against a **ballad refrain**, or **free-verse enjambment** against **heroic couplets**.",
        "Always analyse **how both poems end** in your third comparative body paragraph — endings crystallise each poet's final worldview.",
      ],
      whyItWorks:
        "Comparing **form + imagery + ending** guarantees balanced coverage of language, form and structure (all three strands of AO2!) alongside continuous AO3.",
      strategies: [
        "Stockpile high-precision hinge phrases: *'Whereas Kipling predicates maturity on...', 'Conversely, Bhatt subverts...', 'While both speakers confront mortality, Rossetti tempers grief where Keats...'*",
        "Spend 5 minutes drawing a quick 3-row comparison grid (Form/Voice | Imagery/Sound | Volta/Ending) before writing a word.",
      ],
    },
    {
      id: "unseen-modern-poetry-method",
      heading: "Unseen Modern Poetry Part 1: 4-pass decoding framework",
      discovery: {
        problem:
          "You turn over Paper 1 and face a 24-line contemporary poem you have never seen in your life, worth **20 marks** (roughly **35 minutes**). Most nervous candidates grab a highlighter, spot one simile in line 3 and one alliteration in line 14, and start writing immediately.\n\nWhy does 'device-spotting' without reading the **ending** first almost always misread a modern poem?",
        idea:
          "Modern lyric poems almost always hinge on a **structural shift (volta)** in the final third — an ordinary domestic object (peeling potatoes, sorting shoes, watching rain) suddenly opens into grief, generational distance or epiphany. Until you read the **title + first stanza + final lines** together, you cannot know what the opening metaphors are actually building toward!",
      },
      body: `**The 35-Minute 4-Pass Unseen Poetry Protocol (20 Marks — Pure AO2)**

Spend **7 minutes annotating** across four rapid passes, then **28 minutes writing** an introduction + three crisp paragraphs covering **Form/Structure**, **Imagery/Lexis**, and **Sound/Ending Shift**:

| Pass | Focus (7 mins reading) | Exact Questions to Ask the Poem |
|---|---|---|
| **Pass 1: Title & Literal Situation** | Who, where, when, to whom? | Does the **title** supply crucial context missing from line 1? Who is the **persona** (*\"I\"*), and is there a silent **addressee** (*\"you\"*) creating intimacy or distance? |
| **Pass 2: Page Silhouette & Volta** | Form & structural trajectory | Are stanzas **regular** (control, ritual, containment) or **irregular / single-block / fragmented** (flux, rupture, spontaneity)? Where is the **volta** (*\"But\"*, *\"Yet\"*, *\"Now\"*, tense shift from past to present, or single-line stanza break)? |
| **Pass 3: Semantic Fields & Figurative Shifts** | Language & imagery clusters | Group words into **two contrasting semantic fields** (e.g. clinical sterile hospital nouns vs warm domestic kitchen verbs). How do metaphors/similes evolve across that contrast? |
| **Pass 4: Prosody, Punctuation & Final Line** | Sound & lingering resonance | Where do **caesurae** halt the reader (grief, hesitation, shock) and where does **enjambment** pull across stanza breaks (yearning, instability, continuity)? Does the final line close in **resolution** (full stop/couplet) or **unresolved ache** (question, dash, ambiguity)? |

**Replacing Band-3 Vague Claims with Grade-9 AO2 Precision**
- *Never write*: *\"The poet uses enjambment to make the poem flow smoothly and keep the reader reading on.\"*
- *Write instead*: *\"By spilling the verb 'reaches' across the stanza break via **inter-stanzaic enjambment**, the poet physically enacts the speaker's longing stretching across years of separation.\"*
- *Never write*: *\"The short sentence creates drama and grabs attention.\"*
- *Write instead*: *\"The blunt **caesura** and monosyllabic finality of 'Nothing remained.' abruptly arrests the lush nostalgic listing, mimicking the shock of bereavement.\"*`,
      diagram: `<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step horizontal workflow for decoding any Unseen Modern Poem in 35 minutes on Edexcel Paper 1 Part 1">
  <rect x="8" y="8" width="624" height="194" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Unseen Modern Poetry: 4-Pass Decoding Engine (20 Marks, AO2)</text>
  <rect x="22" y="50" width="138" height="132" rx="10" fill="#dbeafe" stroke="#60a5fa"/>
  <text x="91" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e3a8a">PASS 1: Framing</text>
  <text x="91" y="94" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af">Title as lens</text>
  <text x="91" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Persona ("I") vs</text>
  <text x="91" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Addressee ("you")</text>
  <text x="91" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">Literal story first!</text>
  <rect x="172" y="50" width="138" height="132" rx="10" fill="#f3e8ff" stroke="#c084fc"/>
  <text x="241" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#6b21a8">PASS 2: Architecture</text>
  <text x="241" y="94" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7e22ce">Stanza silhouette</text>
  <text x="241" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Locate the VOLTA</text>
  <text x="241" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">(tense / tone pivot)</text>
  <text x="241" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#7e22ce">Beginning -&gt; Turn</text>
  <rect x="322" y="50" width="138" height="132" rx="10" fill="#fef3c7" stroke="#fbbf24"/>
  <text x="391" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#92400e">PASS 3: Lexis</text>
  <text x="391" y="94" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#b45309">2 Semantic Fields</text>
  <text x="391" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Extended metaphor</text>
  <text x="391" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Sensory verbs</text>
  <text x="391" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b45309">Zoom 2-4 words</text>
  <rect x="472" y="50" width="146" height="132" rx="10" fill="#dcfce7" stroke="#4ade80"/>
  <text x="545" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#166534">PASS 4: Cadence</text>
  <text x="545" y="94" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#15803d">Caesura vs Enjamb</text>
  <text x="545" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Plosive / Sibilant</text>
  <text x="545" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Final-line resonance</text>
  <text x="545" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d">Closure vs Ache</text>
</svg>`,
      diagramCaption:
        "Structure your 20-mark Unseen response chronologically around the poem's emotional arc while hitting Form, Language and Structure in every paragraph.",
      workedExamples: [
        {
          title: "Practising Unseen Modern Poetry close analysis on an embedded miniature",
          problem:
            "Read these unseen modern lines titled ***Sorting the Shed***:\n\n> *Three rusted trowels, twine knotted by your thumb,*\n> *tin jars of bent nails hoarded against waste.*\n> *I lift your canvas coat from its iron hook —*\n> *woodsmoke and rain still cling inside the cuff.*\n> *Nothing here knows yet that you will not come.*\n\nHow does the poet convey grief without ever using the word 'sad' or 'dead'?",
          steps: [
            "**Pass 1–2 (Title, pronouns & volta)**: Direct second-person address (*\"your thumb\"*, *\"you\"*) turns domestic tidying into an intimate elegy, pivoting at the em-dash in line 3 from hard objects to lingering bodily scent.",
            "**Pass 3 (Lexis & sensory shift)**: Tactile, thrifty nouns (*\"rusted trowels\"*, *\"bent nails hoarded\"*) characterise practical resilience, softened by olfactory memory (*\"woodsmoke and rain still cling\"*).",
            "**Pass 4 (Final-line personification & monosyllables)**: Personifying inanimate tools (*\"Nothing here knows yet\"*) projects the speaker's own disbelief onto the shed, while ten plain **monosyllables** in the closing line land with quiet heartbreak.",
          ],
          answer:
            "Through intimate second-person address (*\"your thumb\"*), the poet transforms mundane objects into an elegy of tactile presence. After an asyndetic inventory of thrifty labour (*\"rusted trowels\"*, *\"bent nails\"*), the line-3 em-dash **caesura** pivots into olfactory tenderness as *\"woodsmoke and rain still cling\"* — the verb *\"cling\"* enacting the speaker's refusal to let go. Finally, **personifying** the shed (*\"Nothing here knows yet that you will not come\"*) in ten stark **monosyllables** displaces raw bereavement onto ordinary tools, capturing the numb disbelief of fresh loss.",
          yourTurn: {
            question:
              "What poetic term names a deliberate **pause or break inside a line of verse**, created by punctuation such as a full stop, semicolon, or dash?",
            answer: {
              type: "text",
              accept: ["caesura", "caesurae"],
              display: "caesura",
            },
            traps: [
              {
                spec: { type: "text", accept: ["enjambment"] },
                feedback: "Enjambment runs a sentence *across* the end of a line without punctuation; an internal pause inside a line is **caesura**.",
              },
            ],
            solution:
              "**Caesura** (plural *caesurae*) is a rhythmic pause within a line of poetry — used to create hesitation, fracture, solemnity or abrupt shock.",
          },
        },
      ],
      keyPoints: [
        "**Check the bullet points!** Edexcel always gives prompt bullets on Unseen Poetry (e.g. *how the poet presents memory*, *use of language, form and structure*) — tick off all three AO2 strands.",
        "**Single-line final stanzas**: Whenever a modern poet isolates the final line on its own (as MacNeice isolates *\"Otherwise kill me.\"*), zoom onto that visual white space as an enactment of isolation, finality or epiphany.",
        "**Pronoun tracking**: Shifts from *\"we\"* to *\"I\"* (estrangement) or *\"he\"* to *\"you\"* (sudden direct intimacy) are gold-dust structural points.",
      ],
      whyItWorks:
        "Examiners report that candidates often ignore **form and structure** on Unseen Poetry; dedicating one full paragraph or weave to **stanza shape, volta, caesura and enjambment** places you straight into the top band.",
      strategies: [
        "Use **SMILE** as your rapid checklist before finishing: **S**tructure/volta, **M**eaning/tone shift, **I**magery/semantic fields, **L**anguage/verbs, **E**ffect on reader.",
        "Budget time ruthlessly on Paper 1 Section A: **35 minutes** for Unseen (20 marks) and **45–50 minutes** for Anthology Comparison (30 marks).",
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Which Assessment Objectives are tested in **Edexcel 4ET1 Paper 1 Section A**?",
        back: "**Part 1 Unseen (20 marks)**: pure **AO2** (language, form, structure). **Part 2 Anthology Comparison (30 marks)**: **AO2 + AO3** (comparative links). **Zero AO4 biography!**",
      },
      {
        front: "How does form enact meaning in Kipling's ***If—***?",
        back: "Thirty-two lines across 4 octaves form **one single conditional periodic sentence** (*\"If you can...\"*), forcing the reader to exercise the exact stoic patience required to become *\"a Man, my son!\"*",
      },
      {
        front: "How does **code-switching** work in Sujata Bhatt's ***Search For My Tongue***?",
        back: "Placing untranslated **Gujarati script** at the poem's core interrupts English assimilation, turning fear that her mother tongue will *\"rot and die\"* into organic triumph (*\"it blossoms out of my mouth\"*).",
      },
      {
        front: "How do **couplets and enjambment** clash in Browning's ***My Last Duchess***?",
        back: "The Duke cages his speech in aristocratic **AABB heroic couplets**, yet constant **enjambment** and nervous dashes (*\"— how shall I say? —\"*) expose obsessive tyranny (*\"Then all smiles stopped together\"*).",
      },
      {
        front: "What techniques capture child consciousness in U.A. Fanthorpe's ***Half-past Two***?",
        back: "Fairy-tale opening (*\"Once upon a schooltime\"*), **compound neologisms** (*\"Gettinguptime\"*), capitalised dread (*\"Something Very Wrong\"*), adult **parentheses**, and **synaesthesia** (*\"silent noise\"*).",
      },
      {
        front: "Contrast stanza shape in ***Prayer Before Birth*** (MacNeice) vs ***War Photographer*** (Duffy).",
        back: "MacNeice uses jagged, cascading free-verse steps ending in a stark 2-line ultimatum (*\"Otherwise kill me\"*) to enact encroaching dread; Duffy uses 4 rigid `ABBCDD` sestets to contain war trauma against reader apathy.",
      },
      {
        front: "How does structure mirror water in Imtiaz Dharker's ***Blessing***?",
        back: "Stanzas expand from a parched 2-line opening (*\"The skin cracks like a pod\"*) to a rushing 11-line burst pipe (*\"silver crashes to the ground\"*, *\"liquid sun\"*), celebrating water as sacred grace.",
      },
      {
        front: "Why does William Blake change *\"Could\"* to *\"Dare\"* in ***The Tyger***?",
        back: "Across 6 hammering **trochaic tetrameter** quatrains of unanswered questions and blacksmith imagery (*\"anvil\"*, *\"furnace\"*), shifting *\"Could\"* (stanza 1) to *\"Dare\"* (stanza 6) deepens wonder into awe at the Creator's audacity.",
      },
      {
        front: "Contrast sonnet forms in ***Sonnet 116*** (Shakespeare) vs ***Remember*** (Rossetti).",
        back: "*Sonnet 116* uses 3 Shakespearean quatrains + wager couplet to proclaim unchanging love (*\"ever-fixed mark\"*); *Remember* uses a **Petrarchan octave + line-9 volta** (*\"Yet if you should forget\"*) to release the beloved from grief.",
      },
      {
        front: "How does ballad metre enact depletion in Keats's ***La Belle Dame sans Merci***?",
        back: "Each `ABCB` ballad quatrain truncates its fourth line from tetrameter to short dimeter/trimeter (*\"And no birds sing\"*), starving the rhythm just as the faery lady enthrals and drains the *\"palely loitering\"* knight.",
      },
      {
        front: "How does John Agard weaponise voice and satire in ***Half-caste***?",
        back: "Unpunctuated phonetic **Caribbean Creole** performance free verse pairs mocking literalism (*\"standing on one leg\"*) with **Picasso / Tchaikovsky** analogies (*\"mix a black key / wid a white key\"*) before demanding the listener return with *\"de whole of yu mind\"*.",
      },
      {
        front: "How does **villanelle** form mirror grief in Dylan Thomas's ***Do not go gentle into that good night***?",
        back: "Across 19 lines (5 `ABA` tercets + `ABAA` quatrain), twin obsessive refrains (*\"Do not go gentle\"* / *\"Rage, rage against the dying of the light\"*) build through four archetypes before pleading directly to his dying father (*\"Curse, bless, me now\"*).",
      },
      {
        front: "Contrast parental memory in ***Piano*** (Lawrence) vs ***Poem at Thirty-Nine*** (Walker).",
        back: "Lawrence's rolling `AABB` couplets (*\"insidious mastery of song\"*) drown adult stoicism in regressive tears (*\"weep like a child\"*), whereas Walker's free verse transforms her father's legacy into joyful adult autonomy.",
      },
      {
        front: "How does Vernon Scannell build claustrophobia and betrayal in ***Hide and Seek***?",
        back: "A **single unbroken 27-line block** traps the reader in the *\"salty dark\"* shed via second-person imperatives (*\"Don't breathe\"*), pivoting at the **volta** into *\"The darkening garden watches... where are they who sought you?\"*",
      },
      {
        front: "What is the **4-Pass Unseen Modern Poetry** method?",
        back: "(1) **Title & literal situation** (*I/you*), (2) **Stanza silhouette & volta**, (3) **Contrasting semantic fields & imagery**, (4) **Caesura, enjambment & final-line resonance**.",
      },
    ],
    mustKnow: [
      "**Paper 1 Section A** = **Part 1 Unseen Modern Poetry** (20 marks, AO2 only) + **Part 2 Anthology Comparison** (30 marks, AO2 + AO3). **Never write AO4 poet biography!**",
      "Know all **16 Pearson Edexcel Anthology poems** by title, poet, poetic form, central tension, and 3 micro-quotations each.",
      "Always weave **both Anthology poems inside every body paragraph** using evaluative hinge connectives (*Whereas*, *Conversely*, *While both*). Never write Poem A in full then Poem B in full.",
      "Cover **all three strands of AO2**: **Language** (metaphor, semantic fields, verbs, sound), **Form** (sonnet, ballad, dramatic monologue, free verse, tercets, sestets), and **Structure** (volta, cyclical frame, enjambment, caesura, ending).",
      "Replace banned filler (*'makes it flow'*, *'grabs attention'*) with **enactment verbs** (*mirrors, fractures, arrests, stretches, contains, subverts*).",
      "Pair poems by **shared theme + divergent attitude**: e.g. *Piano* vs *Poem at Thirty-Nine* (regressive vs integrative memory); *Sonnet 116* vs *Remember* (steadfast permanence vs tender release).",
      "On **Unseen Poetry**, read the **title and final lines** before annotating metaphors so you spot the **volta** accurately.",
      "Watch **punctuation shifts**: Walker's `.` -> `!` (*\"How I miss my father!\"*), Duffy's shutter-click full stops (*\"Belfast. Beirut. Phnom Penh.\"*), Browning's parenthetical dashes.",
    ],
    misconceptions: [
      {
        wrong: "Writing two separate essays in Anthology Part 2 ('First I will analyse War Photographer... Now in the second half I will analyse Prayer Before Birth...').",
        right: "Build **three woven comparative paragraphs** (1. Form & Voice, 2. Imagery & Sound, 3. Structural Volta & Ending), analysing **both** poems side by side in every paragraph.",
      },
      {
        wrong: "Writing a long historical biography ('Robert Browning lived in Victorian England and moved to Italy; Carol Ann Duffy was Poet Laureate...').",
        right: "Edexcel 4ET1 Section A awards **0 marks for AO4 context**! Spend 100% of your words on **AO2 poetic craft** and **AO3 comparative evaluation**.",
      },
      {
        wrong: "Writing 'The poet uses enjambment so the poem flows nicely and makes the reader read on.'",
        right: "Specify the **exact local effect** of enjambment: e.g. in *My Last Duchess*, enjambment betrays the Duke's uncontainable ego spilling across his neat rhyming couplets.",
      },
      {
        wrong: "Assuming Lawrence's speaker in Piano is happily enjoying sweet childhood nostalgia.",
        right: "Highlight the lexicon of **reluctance and defeat** (*\"In spite of myself\"*, *\"insidious\"*, *\"Betrays me back\"*, *\"manhood is cast / Down\"*) — memory ambushes him against his will.",
      },
      {
        wrong: "Saying Rossetti's speaker in Remember does not care whether her beloved remembers her.",
        right: "Trace the **tension across the line-9 volta**: the octave desperately craves remembrance, which makes her sestet choice (*\"forget and smile\"*) an act of costly, sacrificial love.",
      },
      {
        wrong: "Panicking on Unseen Poetry if a single obscure word or line looks unfamiliar.",
        right: "Examiners reward a coherent reading of the **overall emotional journey (beginning -> volta -> ending)** backed by 4–5 zoomed micro-quotes; you never need to translate every single line.",
      },
    ],
    examMistakes: [
      "Spending 55 minutes on the 20-mark Unseen poem and leaving only 20 minutes for the **30-mark** Anthology Comparison (stick strictly to **35 mins / 45–50 mins**!).",
      "Comparing only **ideas/themes** ('Both poems are about death') without comparing **poetic methods** (e.g. Petrarchan sonnet vs ballad quatrains).",
      "Naming fancy terminology ('asyndetic parataxis', 'sibilance') without explaining **how** it shapes emotion or meaning (*technique-spotting* caps at Band 2–3).",
      "Choosing a weak companion poem that shares neither theme nor productive contrast when a classic pairing (*Half-past Two* + *Hide and Seek*, *War Photographer* + *Prayer Before Birth*) was available.",
      "Ignoring **form and structure** entirely on Unseen Poetry and writing three paragraphs solely about word choices.",
      "Misattributing Anthology poets (e.g. confusing Christina Rossetti's *Remember* with Alice Walker or Sujata Bhatt).",
    ],
    mnemonics: [
      {
        topic: "Unseen & Anthology AO2 Coverage",
        device: "S-M-I-L-E",
        explanation:
          "**S**tructure & Stanza Form (volta, cyclical, caesura, enjambment) · **M**eaning & Speaker's Attitude · **I**magery (metaphor, simile, personification) · **L**anguage & Sound (semantic fields, plosives, sibilance) · **E**nding Resonance.",
      },
      {
        topic: "Woven Anthology Comparison Paragraph",
        device: "BOTH -> POEM A -> HINGE -> POEM B",
        explanation:
          "**BOTH** (shared conceptual theme + divergent tension) -> **POEM A** (AO2 craft + micro-quote) -> **HINGE** (*Whereas / Conversely*) -> **POEM B** (contrasting AO2 craft + synthesis).",
      },
      {
        topic: "Unseen 7-Minute Reading Routine",
        device: "T-V-S-E (Title, Volta, Semantic fields, Ending)",
        explanation:
          "Read the **T**itle as a lens, mark the **V**olta/turn, bracket two contrasting **S**emantic fields, and weigh the **E**nding line before writing.",
      },
    ],
    realWorld: [
      {
        title: "Photojournalism & compassion fatigue",
        detail:
          "Carol Ann Duffy inspired *War Photographer* through her friendships with conflict photojournalists Don McCullin and Philip Jones Griffiths, who described developing harrowing prints in silent London darkrooms before watching commuters flip past them over coffee.",
        emoji: "📷",
      },
      {
        title: "Multilingual identity in global cities",
        detail:
          "Sujata Bhatt grew up speaking Gujarati in India before moving to the USA and Germany; *Search For My Tongue* resonates deeply with multilingual students in Singapore who switch daily between mother tongues and academic English.",
        emoji: "🌏",
      },
      {
        title: "Renaissance Ferrara & Browning's dramatic monologues",
        detail:
          "Browning modelled *My Last Duchess* on Alfonso II d'Este, fifth Duke of Ferrara, whose young wife Lucrezia de' Medici died suspiciously at sixteen in 1561 — turning historical true crime into psychological poetry.",
        emoji: "🖼️",
      },
      {
        title: "Water scarcity & Mumbai's municipal pipes",
        detail:
          "Imtiaz Dharker's *Blessing* draws on Dharavi in Mumbai, where a burst municipal water main transforms dusty lanes into jubilant community gatherings — turning everyday infrastructure into sacred lyricism.",
        emoji: "💧",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE English Literature (4ET1) Anthology Poetry Complete Revision",
        channel: "Mr Bruff / First Rate Tutors (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+4et1+anthology+poetry+comparison+grade+9",
      },
      {
        title: "How to Get Full Marks on Edexcel IGCSE Unseen Modern Poetry",
        channel: "IGCSE English Revision (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+english+literature+unseen+poetry+20+marks",
      },
      {
        title: "Comparing Poetic Form, Metre, Volta & Enjambment at Grade 9",
        channel: "Mr Salles / English Lit Lab (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=how+to+analyse+form+and+structure+in+poetry+gcse+grade+9",
      },
    ],
    formulas: [
      {
        name: "1. If— (Rudyard Kipling)",
        formula: "\"meet with Triumph and Disaster / And treat those two impostors just the same\"",
        note: "4 octaves, 1 conditional periodic sentence; stoic equanimity.",
      },
      {
        name: "2. Prayer Before Birth (Louis MacNeice)",
        formula: "\"Let them not make me a stone and let them not spill me. / Otherwise kill me.\"",
        note: "Cascading free-verse unborn monologue + anaphora ending in 2-line ultimatum.",
      },
      {
        name: "3. Blessing (Imtiaz Dharker)",
        formula: "\"The skin cracks like a pod... silver crashes to the ground\"",
        note: "4 irregular stanzas expanding from drought scarcity to sacred \"liquid sun\".",
      },
      {
        name: "4. Search For My Tongue (Sujata Bhatt)",
        formula: "\"rot and die in your mouth... it blossoms out of my mouth\"",
        note: "3-part code-switching free verse with central Gujarati script + botanical rebirth.",
      },
      {
        name: "5. Half-past Two (U.A. Fanthorpe)",
        formula: "\"Gettinguptime... escaped into the clockless land for ever\"",
        note: "11 tercets, compound child-neologisms, parentheses & synaesthesia (\"silent noise\").",
      },
      {
        name: "6. Piano (D.H. Lawrence)",
        formula: "\"insidious mastery of song / Betrays me back... weep like a child\"",
        note: "3 AABB quatrains; involuntary regressive nostalgia overwhelming adult poise.",
      },
      {
        name: "7. Hide and Seek (Vernon Scannell)",
        formula: "\"The darkening garden watches... But where are they who sought you?\"",
        note: "Single 27-line block, 2nd-person imperatives turning childhood triumph into abandonment.",
      },
      {
        name: "8. Sonnet 116 (William Shakespeare)",
        formula: "\"O no! it is an ever-fixed mark / That looks on tempests and is never shaken\"",
        note: "Shakespearean sonnet (ABAB CDCD EFEF GG); love defies \"Time's fool\".",
      },
      {
        name: "9. La Belle Dame sans Merci (John Keats)",
        formula: "\"Alone and palely loitering... And no birds sing.\"",
        note: "12 ABCB ballad quatrains with truncated 4th line; fatal romantic thralldom.",
      },
      {
        name: "10. Poem at Thirty-Nine (Alice Walker)",
        formula: "\"How I miss my father!... seasoning none of my life / the same way twice\"",
        note: "7 free-verse stanzas; punctuation shift (. -> !) marks healing paternal legacy.",
      },
      {
        name: "11. War Photographer (Carol Ann Duffy)",
        formula: "\"spools of suffering set out in ordered rows... Belfast. Beirut. Phnom Penh.\"",
        note: "4 rigid ABBCDD sestets containing trauma against reader apathy (\"they do not care\").",
      },
      {
        name: "12. The Tyger (William Blake)",
        formula: "\"What immortal hand or eye, / Dare frame thy fearful symmetry?\"",
        note: "6 AABB trochaic tetrameter quatrains; anvil imagery + modal shift (Could -> Dare).",
      },
      {
        name: "13. My Last Duchess (Robert Browning)",
        formula: "\"This grew; I gave commands; / Then all smiles stopped together.\"",
        note: "Dramatic monologue in enjambed rhyming couplets; patriarchal objectification.",
      },
      {
        name: "14. Half-caste (John Agard)",
        formula: "\"mix a black key / wid a white key / is a half-caste symphony?\"",
        note: "Phonetic Caribbean Creole performance free verse dismantling racial essentialism through Picasso/Tchaikovsky analogies.",
      },
      {
        name: "15. Do not go gentle into that good night (Dylan Thomas)",
        formula: "\"Rage, rage against the dying of the light.\"",
        note: "19-line villanelle (5 ABA tercets + ABAA quatrain) using twin obsessive refrains and oxymoron ('Curse, bless') to defy death.",
      },
      {
        name: "16. Remember (Christina Rossetti)",
        formula: "\"Better by far you should forget and smile / Than that you should remember and be sad.\"",
        note: "Petrarchan sonnet (octave ABBAABBA + line-9 volta -> sestet) of selfless release.",
      },
    ],
  },
};

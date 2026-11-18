import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "lit-macbeth",
  title: "Literary Heritage: Macbeth (Shakespeare)",
  strand: "Literature 4ET1",
  icon: "👑",
  summary:
    "Master Pearson Edexcel 4ET1 Paper 2 Section B on Shakespeare's Macbeth — weaving AO1 textual argument, AO2 prosody, imagery and stagecraft, and AO4 Jacobean kingship, witchcraft and equivocation.",
  intro:
    "On Pearson Edexcel IGCSE English Literature (4ET1) Paper 2 Section B, your **Macbeth** essay is an **open-book** or memorised whole-text argument (check tier/route, always prepare precision micro-quotes!) assessed across **AO1** (assured critical thesis and apt textual references), **AO2** (analysis of Shakespeare's language, verse/prose form and dramatic structure) and **AO4** (relationship between the play and its 1606 Jacobean context). Top-band essays never bolt on a history paragraph about King James I; instead, they treat Shakespeare's stage as an ideological crucible where **regicide** shatters the **Great Chain of Being**, **equivocation** weaponises half-truths, and Macbeth and Lady Macbeth trace a devastating **chiasmic arc** of ambition and psychological disintegration.",
  guide: [
    {
      id: "jacobean-divine-right-witchcraft",
      heading: "Jacobean context (AO4): Divine Right, regicide & equivocation",
      discovery: {
        problem:
          "Compare two opening lines from Act 1:\n- The Witches (1.1): *\"Fair is foul, and foul is fair\"*\n- Macbeth's very first line on stage (1.3): *\"So foul and fair a day I have not seen.\"*\n\nBefore Macbeth has even met the Weird Sisters, why does Shakespeare make his tragic hero echo their exact paradox and rhythm?",
        idea:
          "The Witches speak in **chiasmus** (*Fair/foul -> foul/fair*) and **trochaic tetrameter** (*DUM-da* x 4), an incantatory rhythm that inverts noble **iambic pentameter** (*da-DUM* x 5). By making Macbeth's first words echo *\"foul and fair\"*, Shakespeare signals that the Sisters do not force evil upon a blameless soldier; rather, their **equivocation** awakens a latent moral ambiguity already germinating inside him.",
      },
      body: `**Weaving 1606 Jacobean anxieties into AO2 analysis**

First performed around **1606** before **King James I** (formerly James VI of Scotland), *Macbeth* responds directly to the trauma of the **November 1605 Gunpowder Plot**, in which Catholic conspirators attempted to blow up Parliament and assassinate the Protestant monarch. Rather than writing a dry political pamphlet, Shakespeare dramatises what happens to a nation, a marriage and a human mind when an anointed king is murdered.

| Jacobean concept (AO4) | Textual anchor in *Macbeth* | Grade-9 conceptual significance |
|---|---|---|
| **Divine Right of Kings** | Macduff calls murdered Duncan *\"The Lord's anointed temple\"* (2.3) | A monarch is God's earthly representative; **regicide** is not merely political treason but **sacrilege** against heaven |
| **Great Chain of Being** | Old Man & Ross (2.4): a *\"mousing owl\"* kills a towering falcon; Duncan's horses eat each other | Elizabethan/Jacobean hierarchy ranked God -> Angels -> King -> Nobles -> Animals; killing the King turns nature upside down |
| **Witchcraft & *Daemonologie*** | Witches' prophecies (1.3, 4.1); Banquo calls them *\"instruments of darkness\"* | James I published *Daemonologie* (1597) and passed the 1604 Witchcraft Act; Shakespeare flatters James via **Banquo's noble Stuart lineage** while keeping Macbeth morally accountable |
| **Jesuit Equivocation** | Porter (2.3): *\"here's an equivocator... could not equivocate to heaven\"*; *\"none of woman born\"* | Alludes to Father Henry Garnet's 1606 trial for defending ambiguous half-truths under oath; the Witches tell literal truths (*Birnam Wood*, *Caesarean birth*) that lure Macbeth to damnation |

**Prosody as moral barometer: Iambic Pentameter vs Trochaic Tetrameter**
- **Iambic pentameter** (*da-DUM da-DUM da-DUM da-DUM da-DUM* — ten syllables, rising heartbeat rhythm) is the noble **blank verse** of royal order, loyalty and rational self-command.
- **Trochaic tetrameter** (*DUM-da DUM-da DUM-da DUM-da* — eight syllables, falling stresses, often **catalectic** with the final unstressed beat dropped: *\"DOU-ble, DOU-ble TOIL and TROU-ble\"*) sets the Witches apart as linguistic outsiders whose chants invert courtly order.`,
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the Jacobean Great Chain of Being ruptured by Macbeth's regicide and the rhythmic inversion from iambic pentameter to trochaic tetrameter">
  <rect x="8" y="8" width="624" height="224" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Cosmic Order vs Linguistic Inversion in 1606 Jacobean Tragedy</text>
  <rect x="28" y="48" width="272" height="168" rx="10" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="164" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a">Great Chain of Being (Ruptured in 2.2-2.4)</text>
  <rect x="74" y="78" width="180" height="24" rx="5" fill="#dbeafe" stroke="#60a5fa"/>
  <text x="164" y="94" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af">GOD &amp; ANGELS ("trumpet-tongued")</text>
  <rect x="74" y="110" width="180" height="24" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="164" y="126" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b">ANOINTED KING — Ruptured!</text>
  <rect x="74" y="142" width="180" height="24" rx="5" fill="#dbeafe" stroke="#60a5fa"/>
  <text x="164" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e3a8a">THANES &amp; SUBJECTS (Tyranny)</text>
  <rect x="74" y="174" width="180" height="28" rx="5" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="164" y="192" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#92400e">NATURE: Owl kills Falcon (2.4)</text>
  <rect x="324" y="48" width="288" height="168" rx="10" fill="#fdf4ff" stroke="#d8b4fe"/>
  <text x="468" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6b21a8">Metrical Barometer (AO2 Form)</text>
  <text x="340" y="94" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f766e">Noble Blank Verse (Iambic Pentameter):</text>
  <text x="340" y="112" font-family="monospace" font-size="11" fill="#334155">da-DUM | da-DUM | da-DUM | da-DUM | da-DUM</text>
  <text x="340" y="128" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">5 rising heartbeat feet — order &amp; reason</text>
  <line x1="340" y1="142" x2="596" y2="142" stroke="#e2e8f0" stroke-width="1"/>
  <text x="340" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9d174d">Witches' Chant (Trochaic Tetrameter):</text>
  <text x="340" y="180" font-family="monospace" font-size="11" fill="#334155">FAIR is | FOUL, and | FOUL is | FAIR</text>
  <text x="340" y="198" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">4 falling stresses — inverted moral compass</text>
</svg>`,
      diagramCaption:
        "AO4 + AO2 fusion: regicide fractures the vertical Jacobean cosmos just as the Witches' trochaic tetrameter inverts courtly iambic pentameter.",
      workedExamples: [
        {
          title: "Integrating AO4 context without 'history-dumping'",
          problem:
            "Upgrade this Band-3 sentence to Grade 9:\n*\"In 1606 people believed in witches and King James I wrote a book called Daemonologie, so the audience was scared of the Witches.\"*",
          steps: [
            "**Diagnose the flaw**: The draft treats context as a detached encyclopaedia fact and assumes the Witches alone control Macbeth.",
            "**Anchor in AO2 method**: Quote Banquo's warning (*\"instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence\"*, 1.3) and examine the paradox of truthful betrayal (**equivocation**).",
            "**Fuse AO4 purposefully**: Link equivocation to post-Gunpowder Plot fears of treasonous duplicity and James I's belief in *Daemonologie* that demonic agents tempt rather than compel human free will.",
          ],
          answer:
            "Through Banquo's warning that *\"the instruments of darkness tell us truths... to betray's / In deepest consequence\"*, Shakespeare dramatises the post-1605 Jacobean dread of **equivocation** — weaponised half-truths that sound honest yet conceal treason. Crucially, while flattering King James I's *Daemonologie* via Banquo's incorruptible discernment, Shakespeare ensures the Sisters only bait the trap, preserving Macbeth's tragic culpability.",
          yourTurn: {
            question:
              "What literary/historical term (used directly by the Porter in Act 2 Scene 3) names the deceptive use of ambiguous half-truths to conceal treason — practised by the Witches' prophecies and linked to the 1606 Father Garnet trial?",
            answer: {
              type: "text",
              accept: ["equivocation", "equivocating"],
              display: "equivocation",
            },
            solution:
              "**Equivocation** — speaking literal half-truths (*\"none of woman born\"*, *Birnam Wood* moving) designed to mislead the listener to spiritual ruin, directly echoed by the Porter's *\"here's an equivocator\"* (2.3).",
          },
        },
      ],
      keyPoints: [
        "**Divine Right of Kings**: Killing Duncan (*\"The Lord's anointed temple\"*) is framed as cosmic sacrilege, triggering unnatural darkness, earthquakes and animal cannibalism (2.4).",
        "**Banquo as moral foil**: Banquo hears the same prophecies in Act 1 Scene 3 yet resists temptation, honouring James I's claimed Stuart ancestor while proving Macbeth possesses free will.",
        "**Equivocation**: From *\"Fair is foul\"* (1.1) to the Apparitions (4.1), evil in *Macbeth* operates by disguising lethal traps behind reassuring surfaces (*\"Look like th' innocent flower, / But be the serpent under't\"*, 1.5).",
      ],
      whyItWorks:
        "Edexcel 4ET1 examiners reward **integrated AO4**: every contextual insight (James I, Gunpowder Plot, Great Chain of Being) earns top marks only when it illuminates *why* Shakespeare chose a specific metaphor, metre or dramatic foil.",
      strategies: [
        "Pair every AO4 reference with a 2–5 word micro-quotation so context never floats free of the text.",
        "Contrast **Macbeth's immediate echo** (*\"foul and fair\"*) with **Banquo's sceptical distance** (*\"instruments of darkness\"*) whenever arguing about fate versus free will.",
      ],
      thinkDeeper:
        "If the Witches know the future accurately, could Macbeth ever have avoided killing Duncan — or does Duncan naming Malcolm Prince of Cumberland (1.4) force Macbeth to choose between passive trust and violent agency?",
    },
    {
      id: "tragic-hamartia-soliloquies",
      heading: "Macbeth's tragic arc: hamartia, soliloquies & tyranny",
      discovery: {
        problem:
          "Read two extracts from Macbeth's soliloquies at opposite ends of the play:\n- **Act 1 Scene 7**: *\"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th' other.\"*\n- **Act 5 Scene 5**: *\"Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more.\"*\n\nWhy does a tyrant who murders a king, his best friend and Macduff's children still command tragic pathos rather than becoming a flat pantomime villain?",
        idea:
          "Shakespeare grants us intimate access to Macbeth's **conscience** via seven major **soliloquies** and asides. Unlike a cold Machiavellian villain, Macbeth *foresees* his own damnation before he strikes (1.7) and *feels* the hollowness of his crown afterwards (5.5). His tragedy lies in watching an eloquent moral imagination systematically deaden itself into nihilism.",
      },
      body: `**Aristotelian tragedy & Macbeth's *hamartia***

In classical Aristotelian tragedy, a noble **tragic hero** starts in high esteem (*\"brave Macbeth\"*, *\"valour's minion\"*, 1.2), possesses a fatal flaw or error of judgement (**hamartia** — his *\"vaulting ambition\"*), experiences a moment of painful recognition (**anagnorisis**), and suffers an inevitable downfall (**peripeteia** / **nemesis**) that purges pity and terror (**catharsis**).

**Tracking Macbeth's psychological descent across four landmark speeches**

1. **Act 1 Scene 7 — Moral lucidity before regicide**:
   - *\"If it were done when 'tis done, then 'twere well / It were done quickly\"*: euphemistic repetition of the pronoun *\"it\"* betrays his inability even to name **regicide** aloud.
   - Equestrian metaphor: *\"Vaulting ambition, which o'erleaps itself\"* casts Macbeth as an over-eager horseman vaulting so violently into the saddle that he crashes on the far side — foreseeing his own ruin before raising the knife.
2. **Act 2 Scene 1 — Hallucinatory threshold**:
   - *\"Is this a dagger which I see before me, / The handle toward my hand?\"*: the interrogative opening and **apostrophe** to an optical illusion (*\"a dagger of the mind, a false creation\"*) dramatise his fractured psyche crossing from loyal Thane to assassin.
3. **Act 3 Scene 2 & 3.4 — Paranoid tyranny**:
   - Crowned King yet tormented by Banquo's prophecy (*\"fruitless crown\"*, *\"barren sceptre\"*, 3.1), Macbeth confesses *\"O, full of scorpions is my mind, dear wife!\"* (3.2) — venomousarachnid imagery signaling self-inflicted psychological poison.
   - After seeing Banquo's ghost at the banquet (3.4), he crosses the point of no return: *\"I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er.\"* Notice the chilling adjective *\"tedious\"* — mass slaughter (including Macduff's innocent family in 4.2) has hardened from moral horror into weary routine.
4. **Act 5 Scene 5 — Existential nihilism**:
   - Hearing of Lady Macbeth's death, *\"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day\"* uses **polysyndeton** (*and... and*) and monosyllabic drag to strip time of meaning, culminating in the **metatheatrical** metaphor of life as *\"a poor player\"* and *\"a tale / Told by an idiot, full of sound and fury, / Signifying nothing.\"*`,
      diagram: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline chart of Macbeth's four soliloquy stages from brave warrior to nihilistic tyrant">
  <rect x="8" y="8" width="624" height="214" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Macbeth's Soliloquy Descent: Conscience to Nihilism</text>
  <line x1="56" y1="68" x2="584" y2="182" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
  <circle cx="72" cy="72" r="7" fill="#16a34a"/>
  <rect x="28" y="86" width="128" height="68" rx="8" fill="#dcfce7" stroke="#86efac"/>
  <text x="92" y="103" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534">1.2 / 1.7 Hesitation</text>
  <text x="92" y="119" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#14532d">"valour's minion"</text>
  <text x="92" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#14532d">"Vaulting ambition"</text>
  <circle cx="232" cy="106" r="7" fill="#d97706"/>
  <rect x="172" y="120" width="132" height="68" rx="8" fill="#fef3c7" stroke="#fcd34d"/>
  <text x="238" y="137" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e">2.1 Hallucination</text>
  <text x="238" y="153" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#78350f">"dagger of the mind"</text>
  <text x="238" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#78350f">Interrogative fracture</text>
  <circle cx="396" cy="142" r="7" fill="#ea580c"/>
  <rect x="324" y="54" width="144" height="68" rx="8" fill="#ffedd5" stroke="#fdba74"/>
  <text x="396" y="71" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412">3.2 / 3.4 Paranoia</text>
  <text x="396" y="87" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7c2d12">"full of scorpions"</text>
  <text x="396" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7c2d12">"in blood stepp'd"</text>
  <circle cx="564" cy="178" r="7" fill="#991b1b"/>
  <rect x="484" y="96" width="132" height="68" rx="8" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="550" y="113" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b">5.5 Nihilism</text>
  <text x="550" y="129" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">"brief candle" / "poor</text>
  <text x="550" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">player" — emptiness</text>
</svg>`,
      diagramCaption:
        "Each soliloquy marks a structural step downward: moral dread (1.7) -> optical delusion (2.1) -> paranoid venom (3.2) -> cosmic futility (5.5).",
      workedExamples: [
        {
          title: "Zooming onto lexical & syntactic craft in 'Tomorrow, and tomorrow' (5.5)",
          problem:
            "Analyse how Shakespeare presents Macbeth's state of mind in:\n*\"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day... Out, out, brief candle!\"*",
          steps: [
            "**Examine syntax & rhythm**: The **polysyndetic** tripling (*\"Tomorrow, and tomorrow, and tomorrow\"*) paired with **caesurae** slows the iambic line to a weary crawl, enacted by the verb *\"Creeps\"* and plosive alliteration *\"petty pace\"*.",
            "**Unpack metaphor**: The imperative *\"Out, out, brief candle!\"* shrinks human existence and Lady Macbeth's life to a flickering tallow flame easily snuffed out.",
            "**Connect to whole-play arc**: Having murdered an anointed king to seize eternal dynastic glory, Macbeth discovers that illegitimate power empties time itself of purpose.",
          ],
          answer:
            "Shakespeare conveys Macbeth's spiritual exhaustion through the **polysyndetic** repetition of *\"Tomorrow, and tomorrow, and tomorrow\"*, whose heavy caesurae and monosyllabic plosives (*\"petty pace\"*) slow the blank verse to an agonising trudge. By commanding *\"Out, out, brief candle!\"*, Macbeth reduces both Lady Macbeth's death and royal ambition to an ephemeral flicker — the bleak punishment for severing himself from God's moral order.",
          yourTurn: {
            question:
              "What Greek Aristotelian term names a tragic hero's fatal flaw or error of judgement — identified by Macbeth himself as *\"vaulting ambition\"* in Act 1 Scene 7?",
            answer: {
              type: "text",
              accept: ["hamartia", "tragic flaw"],
              display: "hamartia",
            },
            solution:
              "**Hamartia** is the Aristotelian term for the tragic hero's fatal flaw or error (*\"vaulting ambition\"*, 1.7) that precipitates his downfall.",
          },
        },
      ],
      keyPoints: [
        "Macbeth begins as *\"brave Macbeth\"* (1.2), proving that state-sanctioned battlefield violence lies perilously close to treasonous regicide.",
        "In **Act 1 Scene 7**, euphemism (*\"If it were done\"*) and angelic imagery (*\"plead like angels, trumpet-tongued\"*) prove Macbeth knows Duncan is a virtuous king.",
        "By **Act 4 Scene 2** (the slaughter of Lady Macduff and her son), Macbeth no longer speaks agonised soliloquies beforehand: he vows *\"The very firstlings of my heart shall be / The firstlings of my hand\"* (4.1), replacing conscience with impulsive brutality.",
      ],
      whyItWorks:
        "Tracking **how Macbeth's language changes** from Act 1 to Act 5 automatically earns AO2 structure marks alongside AO1 character insight.",
      strategies: [
        "Contrast an **early quote** (*\"milk of human kindness\"* / *\"vaulting ambition\"*) with a **late quote** (*\"full of scorpions\"* / *\"Signifying nothing\"*) in every character essay.",
        "Notice **metatheatre** in 5.5 (*\"poor player / That struts and frets his hour upon the stage\"*): Macbeth feels like an actor miscast in a stolen royal role.",
      ],
    },
    {
      id: "lady-macbeth-gender-guilt",
      heading: "Lady Macbeth's chiasmic arc: gender subversion to guilt",
      discovery: {
        problem:
          "Place Lady Macbeth's two most famous scenes side by side:\n- **Act 2 Scene 2**: *\"A little water clears us of this deed: / How easy is it then!\"* (spoken in poised iambic blank verse in darkness)\n- **Act 5 Scene 1**: *\"Out, damned spot! out, I say!... What, will these hands ne'er be clean?\"* (spoken in broken **prose** while clutching a lit candle)\n\nWhat structural pattern links Macbeth and Lady Macbeth across the five acts?",
        idea:
          "Their marriage traces a **chiasmus** (an X-shaped structural crossover). In Act 1, Lady Macbeth dominates through ruthless imperatives while Macbeth hesitates; in Act 3 Scene 2 (*\"Be innocent of the knowledge, dearest chuck\"*), Macbeth shuts her out and escalates into public tyranny while her repressed conscience fractures inward into somnambulism and suicide.",
      },
      body: `**Subverting patriarchal Jacobean femininity (Act 1 Scene 5 & 1.7)**

In a patriarchal Jacobean society where wives were expected to embody pious obedience, maternal nurture and domestic gentleness, Lady Macbeth's **Act 1 Scene 5** soliloquy would have electrified and horrified the 1606 audience:
- **Demonic apostrophe**: *\"Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty!\"* — the imperative verb *\"unsex\"* begs supernatural forces to strip away compassionate femininity (*\"milk of human kindness\"*) and replace breast milk with *\"gall\"* (*\"take my milk for gall\"*).
- **Weaponising masculinity**: In **Act 1 Scene 7**, she manipulates Macbeth by attacking his martial honour (*\"When you durst do it, then you were a man\"*) and deploying grotesque infanticide imagery (*\"plucked my nipple from his boneless gums, / And dash'd the brains out\"*) to shame him into regicide.
- **Contrast with Macduff's redefinition of manhood (4.3)**: When Malcolm urges grieving Macduff to *\"Dispute it like a man\"*, Macduff replies *\"I shall do so; / But I must also feel it as a man\"* — exposing Lady Macbeth's equation of manhood with pitiless violence as morally bankrupt.

**Act 5 Scene 1: Somnambulism, prose collapse & ironic reversal**

| Feature | Act 1–2 (Ascendancy) | Act 5 Scene 1 (Sleepwalking Collapse) |
|---|---|---|
| **Form & Metre (AO2)** | Commanding **iambic pentameter** & sharp imperatives (*\"Give me the daggers!\"*) | Disjointed, repetitive **prose** (*\"Out, damned spot! out, I say! — One: two...\"*) |
| **Light & Darkness** | Summons hellish darkness: *\"Come, thick night, / And pall thee in the dunnest smoke of hell\"* (1.5) | Terrified of the dark: *\"she has light by her continually; 'tis her command\"* |
| **Blood & Cleansing** | Dismissive understatement: *\"A little water clears us of this deed\"* (2.2) | Hyperbolic despair: *\"All the perfumes of Arabia will not sweeten this little hand\"* |
| **Stage Power** | Directs every entrance, facial expression and alibi | Unconscious spectacle observed clinically by the **Doctor** and **Gentlewoman** (*\"More needs she the divine than the physician\"*) |`,
      diagram: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chiasmic X-shaped crossover graph comparing Lady Macbeth's rising guilt and falling agency against Macbeth's hardening tyranny across Acts 1 to 5">
  <rect x="8" y="8" width="624" height="214" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">The Chiasmic Crossover: Macbeth vs Lady Macbeth (Acts 1-5)</text>
  <line x1="70" y1="190" x2="580" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="70" y1="52" x2="70" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="32" y="72" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">HIGH</text>
  <text x="32" y="182" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">LOW</text>
  <text x="32" y="128" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Ruthless</text>
  <text x="32" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Control</text>
  <path d="M 90 68 C 210 75, 310 115, 560 176" fill="none" stroke="#9333ea" stroke-width="3"/>
  <path d="M 90 172 C 210 160, 310 115, 560 66" fill="none" stroke="#dc2626" stroke-width="3"/>
  <circle cx="325" cy="121" r="6" fill="#0f172a"/>
  <rect x="252" y="84" width="146" height="28" rx="6" fill="#f1f5f9" stroke="#64748b"/>
  <text x="325" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">3.2 Pivot: "dearest chuck"</text>
  <text x="150" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#7e22ce">Lady Macbeth: "unsex me here" (1.5)</text>
  <text x="430" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#7e22ce">5.1 Prose: "Out, damned spot!"</text>
  <text x="145" y="182" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Macbeth: "milk of human kindness"</text>
  <text x="425" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Macbeth: Fife slaughter (4.2)</text>
  <text x="95" y="208" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Act 1</text>
  <text x="210" y="208" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Act 2</text>
  <text x="325" y="208" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Act 3</text>
  <text x="440" y="208" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Act 4</text>
  <text x="545" y="208" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Act 5</text>
</svg>`,
      diagramCaption:
        "Act 3 Scene 2 is the marital fulcrum: Lady Macbeth sighs 'Nought's had, all's spent' just as Macbeth acts unilaterally to murder Banquo.",
      workedExamples: [
        {
          title: "Analysing verse-to-prose breakdown in Act 5 Scene 1",
          problem:
            "Why does Shakespeare switch Lady Macbeth from **iambic pentameter** in Act 1 Scene 5 to **prose** in Act 5 Scene 1 (*\"The Thane of Fife had a wife; where is she now? What, will these hands ne'er be clean?\"*)?",
          steps: [
            "**Identify the formal shift (AO2)**: Noble Shakespearean characters lose blank verse only in comedy, letters or **madness**.",
            "**Analyse sound & syntax**: The childish internal nursery-rhyme chime (*\"Fife... wife\"*) and frantic interrogatives replace her once-architectural periodic sentences, showing her conscious filter has collapsed.",
            "**Link to repressed humanity**: Even in madness she mourns Lady Macduff (*\"The Thane of Fife had a wife\"*) and Duncan (*\"so much blood in him\"*), proving her prayer to *\"unsex me here\"* failed to eradicate her conscience.",
          ],
          answer:
            "Shakespeare strips Lady Macbeth of her commanding **iambic pentameter** and reduces her to fractured **prose** in Act 5 Scene 1 to signal total psychological disintegration. Her nursery-like internal rhyme (*\"The Thane of Fife had a wife\"*) and obsessive interrogatives expose the failure of her Act 1 prayer to *\"unsex me here\"*: the maternal pity she tried to amputate returns in sleep to destroy her.",
          yourTurn: {
            question:
              "Does Lady Macbeth speak in **blank verse** or **prose** during her sleepwalking scene in Act 5 Scene 1?",
            answer: {
              type: "text",
              accept: ["prose"],
              display: "prose",
            },
            solution:
              "She speaks in fragmented **prose** — in Shakespearean tragedy, a noble character dropping from blank verse into prose signifies mental breakdown and loss of rational self-command.",
          },
        },
      ],
      keyPoints: [
        "Even in Act 2 Scene 2, Lady Macbeth admits *\"Had he not resembled / My father as he slept, I had done't\"* — an early crack in her armoured facade.",
        "Act 3 Scene 2 shows her private disillusionment (*\"Nought's had, all's spent\"*) seconds before she puts on a mask to soothe Macbeth (*\"What's done is done\"*).",
        "Malcolm's final dismissal of *\"his fiend-like queen\"* (5.9) is dramatically ironic: the audience has witnessed her agonising remorse in 5.1, complicating any simplistic villain label.",
      ],
      whyItWorks:
        "Linking **prosody** (blank verse -> prose) and **stage props** (dagger -> taper candle) turns character commentary into top-band AO2 dramatic analysis.",
      strategies: [
        "Always mention her **2.2 crack** (*\"resembled / My father\"*) to prove Shakespeare plants her conscience in Act 2 rather than inventing it suddenly in Act 5.",
        "Pair *\"A little water clears us of this deed\"* (2.2) with *\"All the perfumes of Arabia\"* (5.1) as your go-to structural foil.",
      ],
    },
    {
      id: "imagery-blood-sleep-light",
      heading: "Motifs: blood, murdered sleep, darkness & borrowed robes",
      discovery: {
        problem:
          "Trace the word **blood** across three moments:\n1. Act 1 Scene 2: Macbeth's sword *\"smoked with bloody execution\"* (praised by King Duncan)\n2. Act 2 Scene 2: *\"Will all great Neptune's ocean wash this blood / Clean from my hand?\"*\n3. Act 5 Scene 1: *\"Out, damned spot!\"*\n\nHow does a single recurring motif transform in meaning across the play?",
        idea:
          "A **motif** is a recurring image cluster whose connotations mutate as the tragedy unfolds. **Blood** shifts from a public badge of loyal martial chivalry (1.2), to a cosmic stain of sacrilegious guilt that reddens oceans (2.2), to a river of tyrannical paranoia (*\"in blood / Stepp'd in so far\"*, 3.4), and finally to an invisible psychosomatic *\"damned spot\"* (5.1).",
      },
      body: `**Four interlocking motif chains for whole-play AO2 marks**

Edexcel 4ET1 essays ask about whole-play themes (guilt, ambition, kingship, supernatural, appearance vs reality). Tracking a **motif** across three acts proves structural mastery effortlessly:

| Motif | Early play (Act 1) | Mid-play turning point (Acts 2–3) | Late play payoff (Acts 4–5) |
|---|---|---|---|
| **Blood** | Honour & loyalty: sword *\"smoked with bloody execution\"* (1.2) | Cosmic stain: *\"Will all great Neptune's ocean wash this blood / Clean from my hand?\"* — *\"Making the green one red\"* (2.2) | Routine tyranny (*\"in blood / Stepp'd in so far\"*, 3.4) & psychosomatic hallucination (*\"Out, damned spot!\"*, 5.1) |
| **Sleep** | Peaceful natural restoration (*\"innocent sleep, / Sleep that knits up the ravell'd sleave of care\"*, 2.2) | Regicide murders peace itself: *\"Macbeth does murder sleep\"*; *\"affliction of these terrible dreams\"* (3.2) | Living torture: Macbeth envies dead Duncan (*\"After life's fitful fever he sleeps well\"*, 3.2); Lady Macbeth's **somnambulism** (5.1) |
| **Light vs Darkness** | Duncan links nobility with starlight (*\"signs of nobleness, like stars, shall shine\"*, 1.4); Macbeth begs *\"Stars, hide your fires\"* | Post-regicide solar eclipse: Ross notes *\"by th' clock 'tis day, / And yet dark night strangles the travelling lamp\"* (2.4) | Lady Macbeth clings to a taper candle against hell; Macbeth snuffs meaning itself: *\"Out, out, brief candle!\"* (5.5) |
| **Clothing / Borrowed Robes** | Macbeth questions Ross: *\"why do you dress me / In borrow'd robes?\"* (1.3); Banquo: *\"New honours come upon him, / Like our strange garments\"* | Macbeth wears royal robes uneasily at the haunted banquet (3.4) | Angus mocks his illegitimate rule: *\"now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief\"* (5.2) |

**Lexical contrast inside *\"multitudinous seas incarnadine\"* (2.2)**
Notice how Shakespeare juxtaposes towering **polysyllabic Latinate** diction (*\"multitudinous seas incarnadine\"*) with blunt **monosyllabic Anglo-Saxon** words (*\"Making the green one red\"*). First we hear the vast cosmic scale of his crime; then the stark monosyllables hammer home the inescapable, childlike simplicity of the stain.`,
      diagram: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-lane motif tracker showing Blood, Sleep, Light-Darkness and Clothing evolving across Acts 1 to 5 of Macbeth">
  <rect x="8" y="8" width="624" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Four Whole-Play Motif Chains (AO2 Language + Structure)</text>
  <rect x="24" y="46" width="142" height="150" rx="8" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="95" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#991b1b">BLOOD</text>
  <text x="95" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">1.2 Valour's sword</text>
  <text x="95" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">2.2 "Neptune's ocean"</text>
  <text x="95" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">3.4 "in blood stepp'd"</text>
  <text x="95" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b">5.1 Invisible "spot"</text>
  <rect x="176" y="46" width="142" height="150" rx="8" fill="#e0e7ff" stroke="#a5b4fc"/>
  <text x="247" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#3730a3">SLEEP</text>
  <text x="247" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#312e81">2.2 "knits up... care"</text>
  <text x="247" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#312e81">2.2 "murder sleep"</text>
  <text x="247" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#312e81">3.2 "terrible dreams"</text>
  <text x="247" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#3730a3">5.1 Sleepwalking</text>
  <rect x="328" y="46" width="142" height="150" rx="8" fill="#fef9c3" stroke="#fde047"/>
  <text x="399" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#854d0e">LIGHT / DARK</text>
  <text x="399" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#713f12">1.4 "Stars, hide fires"</text>
  <text x="399" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#713f12">1.5 "dunnest smoke"</text>
  <text x="399" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#713f12">2.4 Strangled sun</text>
  <text x="399" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e">5.5 "brief candle!"</text>
  <rect x="480" y="46" width="136" height="150" rx="8" fill="#f3e8ff" stroke="#d8b4fe"/>
  <text x="548" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6b21a8">CLOTHING</text>
  <text x="548" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#581c87">1.3 "borrow'd robes"</text>
  <text x="548" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#581c87">1.3 "strange garments"</text>
  <text x="548" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#581c87">1.7 "golden opinions"</text>
  <text x="548" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#6b21a8">5.2 "giant's robe"</text>
</svg>`,
      diagramCaption:
        "Thread any one motif across three acts in a single paragraph to prove whole-text structural command.",
      workedExamples: [
        {
          title: "Unpacking the clothing motif as a critique of usurpation",
          problem:
            "How does Angus's simile in Act 5 Scene 2 — *\"now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief\"* — complete a motif begun in Act 1?",
          steps: [
            "**Connect back to Act 1 Scene 3**: When hailed Thane of Cawdor, Macbeth asked *\"why do you dress me / In borrow'd robes?\"*, foreshadowing his temptation to wear titles that belong to living men.",
            "**Zoom onto lexical contrast**: The antithesis between *\"giant's robe\"* (the sacred majesty of Duncan's divinely anointed office) and *\"dwarfish thief\"* (Macbeth's shrunken moral stature as usurper) exposes tyranny as pathetic rather than grand.",
            "**Tie to AO4 kingship**: Under the Divine Right of Kings, seizing the crown by force cannot confer royal legitimacy; the garment itself rejects the usurper.",
          ],
          answer:
            "Angus's simile completes the play's **sartorial (clothing) motif** initiated by Macbeth's *\"borrow'd robes\"* (1.3). By contrasting the *\"giant's robe\"* of Duncan's divinely ordained kingship with the belittling noun phrase *\"dwarfish thief\"*, Shakespeare dramatises how usurpation diminishes rather than magnifies Macbeth: stolen majesty hangs absurdly loose on a tyrant lacking divine grace.",
          yourTurn: {
            question:
              "Complete Angus's famous sartorial simile from Act 5 Scene 2 describing Macbeth's ill-fitting kingship: *\"like a _____'s robe / Upon a dwarfish thief.\"* (One word)",
            answer: {
              type: "text",
              accept: ["giant", "giant's", "giants"],
              display: "giant",
            },
            solution:
              "*\"like a **giant**'s robe / Upon a dwarfish thief\"* (5.2) — contrasting sacred kingship (*giant*) with Macbeth's diminished moral stature (*dwarfish thief*).",
          },
        },
      ],
      keyPoints: [
        "**Neptune's ocean (2.2)**: Hyperbolic classical allusion shows Macbeth immediately recognises his guilt is cosmic and irreversible, contrasting Lady Macbeth's literal-minded *\"A little water\"*.",
        "**Pathetic fallacy (2.4)**: *\"dark night strangles the travelling lamp\"* personifies night violently choking the sun — mirroring Macbeth strangling God's anointed King.",
        "**Disease & purgation (Act 4–5)**: Scotland becomes a *\"sickly weal\"* bleeding beneath a tyrant, whereas English King Edward the Confessor cures scrofula by prayer (4.3) and Malcolm's army arrives as *\"the med'cine of the sickly weal\"* (5.2).",
      ],
      whyItWorks:
        "Motif-tracking turns isolated quote-spotting into an argument about **Shakespeare's dramatic architecture**.",
      strategies: [
        "Contrast **Latinate polysyllables** (*multitudinous*, *incarnadine*) with **Anglo-Saxon monosyllables** (*green one red*) for instant top-band AO2 precision.",
        "Use Scotland-as-diseased-body (5.2) alongside Malcolm/Macduff as physicians purging the land.",
      ],
    },
    {
      id: "dramatic-structure-symmetry",
      heading: "Structural symmetry, blank verse vs prose & natural order",
      discovery: {
        problem:
          "Compare Act 1 Scene 2 with Act 5 Scene 9:\n- **Act 1 Scene 2**: Loyal Macbeth unseams the rebel traitor **Macdonwald** and fixes his severed head upon the battlements.\n- **Act 5 Scene 9**: Loyal **Macduff** enters carrying the rebel usurper **Macbeth's** severed head (*\"Behold, where stands / Th' usurper's cursed head\"*).\n\nWhy does Shakespeare close the play with the exact visual image that opened it?",
        idea:
          "Shakespeare constructs *Macbeth* with **cyclical tragic symmetry**: the heroic defender of royal order becomes the exact treasonous monster he once executed. Yet this restoration of **natural order** under Malcolm carries lingering dramatic tension — Banquo's son **Fleance** remains at large, and we have just seen how swiftly battlefield heroism can curdle into ambition.",
      },
      body: `**Five structural devices that earn Grade-9 AO2 marks**

Many candidates analyse only metaphors (language) and forget **dramatic form and structure**. Keep these five structural mechanisms ready:

1. **Cyclical framing (1.2 -> 5.9)**:
   - Opens with traitor **Macdonwald** beheaded and Thane of Cawdor executed (*\"Nothing in his life / Became him like the leaving it\"*, 1.4); closes with **Macbeth** beheaded by Macduff and Malcolm crowning his loyal Thanes as Scotland's first **Earls** (historical transition toward English-style governance).
2. **Shared & fractured half-lines (stichomythia in 2.2)**:
   - Immediately after Duncan's murder, Macbeth and Lady Macbeth complete each other's **split iambic pentameter** lines rapid-fire:\n     *MACBETH: I have done the deed. Didst thou not hear a noise?*\n     *LADY MACBETH: I heard the owl scream and the crickets cry.*\n   - Sharing ten-syllable verse lines creates breathless conspiratorial urgency and shared heartbeat panic.
3. **Bathos & threshold comedy — The Porter Scene (2.3)**:
   - Right after the hammering at the south entry (2.2), a drunken **Porter** ambles onstage in **prose**, imagining himself gatekeeper of **Hell** (*\"porter of hell-gate\"*) welcoming an *\"equivocator\"*. Far from mere comic relief, the dramatic irony is razor-sharp: Inverness castle *has* literally become Hell through regicide.
4. **Prophetic peripeteia — Birnam Wood & Caesarean birth (5.4–5.8)**:
   - The Witches' seemingly impossible riddles resolve through natural human agency: Malcolm's troops cut camouflaging boughs from **Birnam Wood** (symbolising living nature marching to purge unnatural tyranny), and **Macduff** reveals he *\"was from his mother's womb / Untimely ripp'd\"* (5.8), shattering Macbeth's false invincibility.
5. **Off-stage violence vs on-stage violence**:
   - **Duncan's murder (2.2)** happens **off-stage** so the audience stays locked inside Macbeth's guilty imagination (and avoids staging the assassination of a Scottish king directly before James I!).
   - **Banquo's murder (3.3)** and **young Macduff's murder (4.2)** happen **on-stage** in brutal view, charting how secret sin escalates into brazen public terror.`,
      diagram: `<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Symmetric structural arch of Macbeth showing cyclical framing from Act 1 traitorous rebellion to Act 3 banquet climax to Act 5 restoration of order">
  <rect x="8" y="8" width="624" height="199" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Five-Act Freytag &amp; Cyclical Architecture of Macbeth</text>
  <path d="M 64 172 L 192 118 L 320 56 L 448 118 L 576 172" fill="none" stroke="#2563eb" stroke-width="3" stroke-linejoin="round"/>
  <line x1="84" y1="172" x2="556" y2="172" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="320" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f766e">Cyclical Mirror: Macdonwald's severed head (1.2) &lt;--&gt; Macbeth's "cursed head" (5.9)</text>
  <circle cx="64" cy="172" r="6" fill="#1d4ed8"/>
  <text x="64" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Act 1</text>
  <text x="64" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Prophecy &amp; temptation</text>
  <circle cx="192" cy="118" r="6" fill="#1d4ed8"/>
  <text x="192" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Act 2</text>
  <text x="192" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Off-stage regicide &amp; Porter</text>
  <circle cx="320" cy="56" r="7" fill="#dc2626"/>
  <text x="320" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#991b1b">Act 3 Climax: Fleance escapes &amp; Ghost (3.4)</text>
  <circle cx="448" cy="118" r="6" fill="#1d4ed8"/>
  <text x="448" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Act 4</text>
  <text x="448" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Apparitions &amp; Fife terror</text>
  <circle cx="576" cy="172" r="6" fill="#16a34a"/>
  <text x="576" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">Act 5</text>
  <text x="576" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Birnam Wood &amp; Malcolm</text>
</svg>`,
      diagramCaption:
        "Act 3 (Fleance's escape + Banquo's Ghost) is the structural peripeteia: from that moment Macbeth loses control of the plot.",
      workedExamples: [
        {
          title: "Explaining the dramatic function of the Porter (Act 2 Scene 3)",
          problem:
            "Why does Shakespeare insert the drunken **Porter** immediately between Duncan's murder (2.2) and Macduff discovering the corpse (2.3)?",
          steps: [
            "**Practical & rhythmic contrast**: Allows actors bloodied in 2.2 (*\"retire we to our chambers\"*) time to wash and change into nightgowns while shifting from breathless blank verse to earthy **prose**.",
            "**Dramatic irony**: The Porter jokes about being *\"porter of hell-gate\"* without knowing Macbeth has genuinely turned Inverness into a Jacobean hell by murdering God's anointed King.",
            "**Thematic echo**: His satire on an *\"equivocator\"* who *\"committed treason enough for God's sake, yet could not equivocate to heaven\"* indicts both Gunpowder Plotters and Macbeth's self-deception.",
          ],
          answer:
            "Far from disposable comic relief, the Porter's prose monologue in Act 2 Scene 3 weaponises **bathos** and **dramatic irony**. By casting himself as *\"porter of hell-gate\"* welcoming a treasonous *\"equivocator\"*, the Porter unknowingly names the exact spiritual reality inside Inverness: Macbeth's regicide has transformed a royal castle into Hell.",
          yourTurn: {
            question:
              "Which loyal Thane fulfils the second apparition's equivocal prophecy because he *\"was from his mother's womb / Untimely ripp'd\"* and slays Macbeth in Act 5 Scene 8?",
            answer: {
              type: "text",
              accept: ["Macduff", "Thane of Fife"],
              display: "Macduff",
            },
            solution:
              "**Macduff** (Thane of Fife), delivered by Caesarean section (*\"Untimely ripp'd\"*), exposes the Witches' equivocation and restores Malcolm to the Scottish throne.",
          },
        },
      ],
      keyPoints: [
        "**Act 3 turning point (*peripeteia*)**: Fleance's escape in 3.3 marks the exact hinge where Macbeth's agency begins to fail.",
        "**Foil kings**: Virtuous **Duncan** (trusting, agrarian growth imagery: *\"I have begun to plant thee\"*, 1.4), holy **Edward the Confessor** (healing touch, 4.3), and prudent **Malcolm** (tests Macduff's loyalty before trusting him, 4.3) all expose Macbeth's sterile tyranny (*\"fruitless crown\"*).",
        "**Refusal to surrender (5.8)**: Even stripped of prophetic protection, Macbeth declares *\"Yet I will try the last\"* — briefly reclaiming the martial courage of Act 1 Scene 2 even in damnation.",
      ],
      whyItWorks:
        "Discussing **cyclical framing, off-stage vs on-stage violence, and foil kings** elevates an essay from character study to full **AO2 dramatic criticism**.",
      strategies: [
        "Open or close your Edexcel essay by pairing **1.2 (Macdonwald's head)** with **5.9 (Macbeth's head)** for a ready-made structural thesis.",
        "Contrast Duncan's naive trust (*\"There's no art / To find the mind's construction in the face\"*, 1.4) with Malcolm's shrewd testing of Macduff in 4.3 — Malcolm learns how to rule safely without becoming tyrannical.",
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is **hamartia** and where does Macbeth name his own?",
        back: "Aristotle's term for a tragic hero's fatal flaw or error of judgement; Macbeth identifies his as *\"Vaulting ambition, which o'erleaps itself\"* (Act 1 Scene 7).",
      },
      {
        front: "Why do the Witches speak in **trochaic tetrameter**?",
        back: "Four falling *DUM-da* feet (*\"FAIR is FOUL, and FOUL is FAIR\"*, 1.1) invert the five rising heartbeats of noble **iambic pentameter**, marking them as supernatural agents of moral disorder.",
      },
      {
        front: "How does Shakespeare link **regicide** to the **Great Chain of Being**?",
        back: "Murdered Duncan is *\"The Lord's anointed temple\"* (2.3); breaking God's cosmic hierarchy unleashes unnatural darkness, tempests, an owl killing a falcon, and Duncan's horses eating each other (2.4).",
      },
      {
        front: "What is **equivocation** and how does it connect to 1606 context?",
        back: "Telling literal half-truths designed to deceive (*\"none of woman born\"*, *Birnam Wood*); alludes to Father Henry Garnet's 1606 trial after the 1605 Gunpowder Plot (*\"here's an equivocator\"*, Porter, 2.3).",
      },
      {
        front: "Explain the **chiasmic arc** between Macbeth and Lady Macbeth.",
        back: "An X-shaped crossover: Lady Macbeth starts ruthless (*\"unsex me here\"*, 1.5) and collapses into guilt-ridden sleepwalking (5.1), while hesitant Macbeth hardens into a paranoid butcher (*\"in blood / Stepp'd in so far\"*, 3.4).",
      },
      {
        front: "Why does Lady Macbeth speak in **prose** in Act 5 Scene 1?",
        back: "In Shakespearean tragedy, a noble character losing iambic blank verse for fragmented prose (*\"Out, damned spot!\"*) signals psychological breakdown and loss of conscious control.",
      },
      {
        front: "Contrast Macbeth's and Lady Macbeth's reactions to **blood** in Act 2 Scene 2.",
        back: "Macbeth speaks cosmic hyperbole (*\"Will all great Neptune's ocean wash this blood\"*), recognising eternal guilt; Lady Macbeth uses hubristic litotes (*\"A little water clears us of this deed\"*), later inverted by *\"perfumes of Arabia\"* (5.1).",
      },
      {
        front: "Trace the **clothing / borrowed robes** motif across the play.",
        back: "1.3 *\"borrow'd robes\"* & *\"strange garments\"* -> 1.7 *\"golden opinions\"* -> 5.2 Angus's simile *\"like a giant's robe / Upon a dwarfish thief\"*, proving stolen kingship never fits an illegitimate usurper.",
      },
      {
        front: "How does **Banquo** function as both dramatic foil and AO4 compliment?",
        back: "Banquo hears the Witches' prophecies (1.3) yet resists evil (*\"instruments of darkness\"*), proving Macbeth has free will while honouring **King James I**, who traced his Stuart lineage to Banquo.",
      },
      {
        front: "How does **Macduff** redefine Jacobean masculinity in Act 4 Scene 3?",
        back: "Told by Malcolm to *\"Dispute it like a man\"* after his family's murder, Macduff replies *\"I shall do so; / But I must also feel it as a man\"* — uniting emotional grief with righteous action, unlike Lady Macbeth's *\"unsex me\"* cruelty.",
      },
      {
        front: "What is the structural significance of **Fleance's escape** in Act 3 Scene 3?",
        back: "The play's central **peripeteia** (turning point): Macbeth's first solo plot fails, triggering Banquo's ghost at the banquet (3.4) and his downward spiral.",
      },
      {
        front: "Explain the **cyclical symmetry** between Act 1 Scene 2 and Act 5 Scene 9.",
        back: "In 1.2 loyal Macbeth unseams the traitor Macdonwald and fixes his head on the battlements; in 5.9 loyal Macduff enters with *\"th' usurper's cursed head\"* (Macbeth's), restoring natural order.",
      },
      {
        front: "What does Macbeth's *\"full of scorpions is my mind\"* (3.2) reveal?",
        back: "Metaphor of venomous, self-stinging creatures trapped inside his skull shows kingship brings paranoid torment rather than peace, just as he shuts Lady Macbeth out (*\"dearest chuck\"*).",
      },
      {
        front: "How does **metatheatre** work in *\"Tomorrow, and tomorrow\"* (5.5)?",
        back: "Calling life *\"a poor player / That struts and frets his hour upon the stage\"* exposes Macbeth's nihilistic realisation that his usurped kingship was a hollow, short-lived performance *\"Signifying nothing.\"*",
      },
    ],
    mustKnow: [
      "**Edexcel 4ET1 Paper 2 Section B** assesses **AO1** (assured argument + apt references), **AO2** (Shakespeare's language, form & dramatic structure) and **AO4** (integrated Jacobean context).",
      "Never write a detached history paragraph: fuse **Divine Right of Kings**, **Great Chain of Being**, **James I's *Daemonologie*** and **1605 Gunpowder Plot equivocation** directly into quote analysis.",
      "**Prosody matters**: Courtly order speaks **iambic pentameter**; the Witches chant **trochaic tetrameter**; Lady Macbeth's madness collapses into **prose** (5.1); 2.2 panic fractures into **shared half-lines**.",
      "Track **whole-play transformation**: brave warrior (*\"valour's minion\"*, 1.2) -> reluctant regicide (*\"vaulting ambition\"*, 1.7) -> paranoid tyrant (*\"in blood / Stepp'd in so far\"*, 3.4) -> nihilist (*\"brief candle\"*, 5.5).",
      "Lady Macbeth's arc is **chiasmic** to Macbeth's: she pivots from *\"unsex me here\"* (1.5) and *\"A little water\"* (2.2) to *\"Nought's had, all's spent\"* (3.2) and *\"Out, damned spot!\"* (5.1).",
      "Thread the **four core motifs** across acts: **blood**, **murdered sleep**, **light vs darkness**, and **ill-fitting robes**.",
      "Use **foil characters** to sharpen your thesis: **Banquo** (moral restraint vs Macbeth), **Duncan & Malcolm** (legitimate nurturing kingship vs sterile tyranny), **Macduff** (compassionate manhood vs toxic cruelty).",
      "Highlight **stagecraft**: off-stage regicide (2.2) vs on-stage slaughter of Lady Macduff's son (4.2), the **Porter's** hell-gate bathos (2.3), Banquo's silent **Ghost** in Macbeth's seat (3.4), and Lady Macbeth's **taper** (5.1).",
    ],
    misconceptions: [
      {
        wrong: "Retelling the plot chronologically ('First Macbeth meets the Witches, then Lady Macbeth reads the letter, then he kills Duncan...').",
        right: "Organise paragraphs conceptually around **three shifts across the play** (e.g. *Act 1 catalytic temptation -> Act 3 paranoid fracture -> Act 5 tragic nemesis*), opening every paragraph with an evaluative thesis.",
      },
      {
        wrong: "Claiming the Witches totally control Macbeth like a puppet so nothing is his fault.",
        right: "Argue that the Witches **equivocate and tempt**, never command: Banquo hears the same prophecies without murdering anyone, and Macbeth acknowledges his own *\"vaulting ambition\"* (1.7).",
      },
      {
        wrong: "Calling Lady Macbeth a pure heartless monster from start to finish.",
        right: "Point out she *has* to beg spirits to *\"unsex me here\"* precisely because she possesses natural human feeling — proven by *\"Had he not resembled / My father as he slept\"* (2.2) and her fatal remorse in 5.1.",
      },
      {
        wrong: "Bolting on a biographical paragraph ('Shakespeare wrote Macbeth in 1606 for King James I who hated witches and survived the Gunpowder Plot. Anyway, in Act 2...').",
        right: "Embed AO4 inside AO2 method sentences: e.g. *'By framing Duncan's corpse as \"The Lord's anointed temple\" (2.3), Shakespeare activates Jacobean belief in the Divine Right of Kings to cast regicide as sacrilege.'*",
      },
      {
        wrong: "Treating characters as real people rather than dramatic constructs ('Macbeth should have gone to therapy with his wife').",
        right: "Keep **Shakespeare as deliberate craftsperson** at the centre of every sentence (*'Shakespeare constructs...', 'Shakespeare juxtaposes...', 'Through the stage direction...'*).",
      },
      {
        wrong: "Ignoring Act 4 Scene 3 (the England scene) as 'boring filler'.",
        right: "Use 4.3 as a crucial **structural counterweight**: Malcolm's prudence, Edward's healing touch and Macduff's *\"feel it as a man\"* define virtuous kingship and true masculinity against Macbeth's diseased Scotland.",
      },
    ],
    examMistakes: [
      "Quoting 4-line chunks without zooming onto a single **verb, adjective, sound pattern or metrical shift**.",
      "Forgetting **AO2 form and stagecraft** — writing about *Macbeth* as if it were a novel rather than a live stage play with props, lighting cues, asides, soliloquies and entrances.",
      "Writing only about Acts 1 and 2 and running out of time before reaching Acts 3–5 (examiners require **whole-text coverage** for Level 5).",
      "Confusing **Macdonwald** (the rebel Macbeth kills in 1.2), **Macduff** (Thane of Fife who kills Macbeth in 5.8) and **Malcolm** (Duncan's eldest son crowned King at the end).",
      "Saying *'alliteration makes it flow'* or *'creates a vivid picture'* instead of naming the exact emotional or ideological effect.",
      "Misattributing quotes — e.g. claiming Macbeth says *\"unsex me here\"* or claiming the Witches tell Macbeth directly to murder Duncan (they never mention murder in 1.3!).",
    ],
    mnemonics: [
      {
        topic: "Whole-play essay planning (3-Act Arc)",
        device: "CAT -> CRACK -> CROWN",
        explanation:
          "**CAT**alyst in Act 1 (prophecy, *hamartia*, gender persuasion) -> **CRACK** in Acts 2–3 (regicide, *\"Neptune's ocean\"*, *\"scorpions\"*, Ghost) -> **CROWN** restored in Acts 4–5 (sleepwalking prose, *\"brief candle\"*, Macduff's justice).",
      },
      {
        topic: "Weaving AO1 + AO2 + AO4 in every paragraph",
        device: "THESIS -> QUOTE -> CRAFT -> KING",
        explanation:
          "**THESIS** (conceptual claim) -> **QUOTE** (2–5 word micro-evidence) -> **CRAFT** (AO2 metre, motif, stagecraft) -> **KING** (AO4 Jacobean kingship, Great Chain, equivocation or patriarchy).",
      },
      {
        topic: "Four whole-play motifs",
        device: "B-S-L-R (Blood, Sleep, Light, Robes)",
        explanation:
          "**B**lood (*Neptune's ocean* -> *damned spot*), **S**leep (*murder sleep* -> somnambulism), **L**ight (*hide your fires* -> *brief candle*), **R**obes (*borrow'd robes* -> *giant's robe*).",
      },
    ],
    realWorld: [
      {
        title: "The 'Scottish Play' theatrical superstition",
        detail:
          "Actors worldwide still say 'The Scottish Play' backstage rather than 'Macbeth' — a 400-year theatrical tradition born from the eerie authenticity of the Weird Sisters' incantations and early production mishaps.",
        emoji: "🎭",
      },
      {
        title: "King James I's 1605 Gunpowder Plot medal",
        detail:
          "To commemorate surviving the Gunpowder Plot, James I struck a medal depicting a snake hiding amongst flowers — directly echoed by Lady Macbeth's *\"Look like th' innocent flower, / But be the serpent under't\"* (1.5).",
        emoji: "🐍",
      },
      {
        title: "Modern political 'vaulting ambition'",
        detail:
          "From Akira Kurosawa's samurai masterpiece *Throne of Blood* (1957) to *Succession* and *House of Cards*, political dramas still borrow Shakespeare's direct-to-audience asides and power-couple chiasmus.",
        emoji: "🎬",
      },
      {
        title: "Cognitive dissonance & moral injury",
        detail:
          "Modern psychology studies 'moral injury' — the trauma suffered when someone violates their own deep moral code — which Shakespeare mapped with uncanny clinical precision in Macbeth's hallucinations and Lady Macbeth's compulsive handwashing.",
        emoji: "🧠",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE English Literature: Macbeth Top-Grade Essay Guide",
        channel: "Mr Bruff (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+english+literature+macbeth+essay+analysis",
      },
      {
        title: "Royal Shakespeare Company — Exploring Macbeth Soliloquies & Stagecraft",
        channel: "RSC Education (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=royal+shakespeare+company+macbeth+soliloquy+analysis",
      },
      {
        title: "Macbeth: Jacobean Context, Equivocation & Great Chain of Being",
        channel: "British Library /Mr Salles Shakespeare (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=macbeth+jacobean+context+equivocation+great+chain+of+being",
      },
    ],
    formulas: [
      {
        name: "1.1 Witches (Chiasmus & Trochaic Tetrameter)",
        formula: "\"Fair is foul, and foul is fair\"",
        note: "Establishes moral inversion and equivocation before Macbeth enters.",
      },
      {
        name: "1.3 Banquo on Equivocation",
        formula: "\"The instruments of darkness tell us truths... to betray's / In deepest consequence\"",
        note: "Proves demonic prophecies bait free will with half-truths.",
      },
      {
        name: "1.4 Macbeth Aside (Light/Dark Motif)",
        formula: "\"Stars, hide your fires; / Let not light see my black and deep desires\"",
        note: "Conscious awareness that regicidal ambition violates heaven.",
      },
      {
        name: "1.5 Lady Macbeth Soliloquy (Gender Subversion)",
        formula: "\"Come, you spirits / That tend on mortal thoughts, unsex me here\"",
        note: "Imperative apostrophe begging to purge compassionate femininity.",
      },
      {
        name: "1.5 Appearance vs Reality (Gunpowder Plot Allusion)",
        formula: "\"Look like th' innocent flower, / But be the serpent under't\"",
        note: "Echoes King James I's 1605 Gunpowder Plot medal.",
      },
      {
        name: "1.7 Macbeth's Hamartia",
        formula: "\"Vaulting ambition, which o'erleaps itself / And falls on th' other\"",
        note: "Equestrian metaphor foreseeing his own overreaching downfall.",
      },
      {
        name: "2.2 Macbeth's Cosmic Guilt",
        formula: "\"Will all great Neptune's ocean wash this blood / Clean from my hand?\"",
        note: "Hyperbolic stain vs Lady Macbeth's \"A little water clears us of this deed\".",
      },
      {
        name: "2.3 Divine Right of Kings (Macduff)",
        formula: "\"Most sacrilegious murder hath broke ope / The Lord's anointed temple\"",
        note: "Frames regicide as desecration of God's sacred vessel.",
      },
      {
        name: "3.2 Paranoid Kingship",
        formula: "\"O, full of scorpions is my mind, dear wife!\"",
        note: "Venomous mental torment at the exact chiasmic crossover of their marriage.",
      },
      {
        name: "3.4 Point of No Return",
        formula: "\"I am in blood / Stepp'd in so far that... Returning were as tedious as go o'er\"",
        note: "Desensitisation to violence after seeing Banquo's Ghost.",
      },
      {
        name: "5.1 Sleepwalking Prose Inversion",
        formula: "\"Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand\"",
        note: "Fragmented prose somnambulism inverting her Act 1–2 hubris.",
      },
      {
        name: "5.2 Sartorial Motif Climax (Angus)",
        formula: "\"Hang loose about him, like a giant's robe / Upon a dwarfish thief\"",
        note: "Completes \"borrow'd robes\" (1.3): usurped majesty shrinks the tyrant.",
      },
      {
        name: "5.5 Existential Nihilism",
        formula: "\"Out, out, brief candle! / Life's but a walking shadow, a poor player\"",
        note: "Metatheatrical emptiness after severing all human and divine bonds.",
      },
    ],
  },
};

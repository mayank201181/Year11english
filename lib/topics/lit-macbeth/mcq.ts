import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "lit-macbeth-m1",
    title: "Macbeth MCQ Paper 1: Jacobean Context, Prophecy & Act 1–2 Craft",
    questions: [
      {
        id: "lit-macbeth-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "In Act 1 Scene 1, the Witches chant: *\"Fair is foul, and foul is fair: / Hover through the fog and filthy air.\"* Which combination of **metre** and **rhetorical structure** does Shakespeare use in the first line?",
        options: [
          "Trochaic tetrameter and chiasmus",
          "Iambic pentameter and oxymoron",
          "Dactylic hexameter and anaphora",
          "Unrhymed prose and polysyndeton",
        ],
        answerIndex: 0,
        hints: [
          "Tap the stresses on 'FAIR is FOUL, and FOUL is FAIR' — does it start with a stressed beat or an unstressed beat?",
          "Notice how the word order flips across the comma (Fair/foul -> foul/fair).",
        ],
        explanation:
          "*\"FAIR is FOUL, and FOUL is FAIR\"* uses **trochaic tetrameter** (four falling stresses, inverting courtly **iambic pentameter**) paired with **chiasmus** (*A-B / B-A*), enacting a moral world turned upside down rather than prose or iambic blank verse.",
      },
      {
        id: "lit-macbeth-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "Why does Macbeth's very first line on stage in Act 1 Scene 3 — *\"So foul and fair a day I have not seen\"* — disturb a Jacobean audience?",
        options: [
          "He reveals that he has already conspired in secret with Lady Macbeth to assassinate King Duncan.",
          "He speaks in prose rather than blank verse, proving he lacks noble Scottish birth.",
          "He insults Banquo's military courage during the battle against Norway.",
          "He unconsciously echoes the Witches' exact paradox before he has even seen them, suggesting an inner susceptibility to moral inversion.",
        ],
        answerIndex: 3,
        hints: [
          "Compare Macbeth's adjectives ('foul and fair') with Act 1 Scene 1.",
          "Has Macbeth met the Weird Sisters yet when he speaks this line?",
        ],
        explanation:
          "Echoing the Witches' *\"Fair is foul\"* before meeting them establishes an uncanny linguistic alignment: Shakespeare implies the Sisters awaken a latent moral ambiguity inside Macbeth rather than forcing evil onto an uncorrupted puppet.",
      },
      {
        id: "lit-macbeth-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "In Act 1 Scene 3, Banquo warns Macbeth:\n\n> *\"And oftentimes, to win us to our harm,*\n> *The instruments of darkness tell us truths,*\n> *Win us with honest trifles, to betray's*\n> *In deepest consequence.\"*\n\nHow does this speech integrate **AO4 Jacobean context** with **dramatic characterisation**?",
        options: [
          "It proves Banquo secretly desires to murder Malcolm so his own son Fleance can seize the crown immediately.",
          "It establishes Banquo as a discerning moral foil — honouring King James I's claimed Stuart ancestor — while defining demonic equivocation.",
          "It mocks King James I's 1597 treatise Daemonologie by arguing that supernatural prophecies are harmless coincidences.",
          "It shows Banquo persuading Macbeth to trust the Witches because Cawdor's title came true.",
        ],
        answerIndex: 1,
        hints: [
          "Think about how Banquo reacts differently from Macbeth to the same heath prophecies.",
          "Which reigning monarch in 1606 traced his royal lineage to Banquo?",
        ],
        explanation:
          "Shakespeare transforms Holinshed's historical Banquo into a principled **foil** who diagnoses **equivocation** (*\"tell us truths... to betray's\"*), simultaneously flattering **King James I** and proving Macbeth retains moral free will.",
      },
      {
        id: "lit-macbeth-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "In Act 1 Scene 4, immediately after King Duncan names Malcolm Prince of Cumberland, Macbeth speaks aside:\n\n> *\"Stars, hide your fires;*\n> *Let not light see my black and deep desires\"*\n\nWhat does the imperative **apostrophe** *\"Stars, hide your fires\"* reveal about Macbeth at this stage?",
        options: [
          "He believes the natural stars have been extinguished by the Witches' fog.",
          "He openly announces to the Scottish court that he will challenge Malcolm to a duel.",
          "He already harbours illicit regicidal ambition yet retains enough moral conscience to feel shame before heaven's light.",
          "He is completely free of guilt and celebrates his loyalty to Duncan.",
        ],
        answerIndex: 2,
        hints: [
          "Seconds earlier, Duncan said 'signs of nobleness, like stars, shall shine / On all deservers'.",
          "Why would Macbeth beg heavenly light not to witness his 'black and deep desires'?",
        ],
        explanation:
          "By begging heaven's *\"Stars\"* (just linked by Duncan to royal grace) to look away from his *\"black and deep desires\"*, Macbeth reveals both nascent regicidal intent and acute Christian conscience — unlike his numb nihilism in Act 5.",
      },
      {
        id: "lit-macbeth-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In Act 1 Scene 5, Lady Macbeth fears Macbeth's nature *\"is too full o' th' milk of human kindness\"* and cries:\n\n> *\"Come, you spirits*\n> *That tend on mortal thoughts, unsex me here,*\n> *And fill me from the crown to the toe top-full*\n> *Of direst cruelty!\"*\n\nWhy is the verb *\"unsex\"* analytically crucial rather than proving she is naturally a monster?",
        options: [
          "It shows she wants to disguise herself in armour so she can fight Macduff on the battlefield.",
          "It proves Jacobean audiences viewed ambition in noblewomen as socially admirable.",
          "It confirms the Weird Sisters physically possess her body without her consent.",
          "Having to beg spirits to strip away her maternal femininity implies compassion is naturally present in her and must be violently suppressed.",
        ],
        answerIndex: 3,
        hints: [
          "If someone were already completely pitiless, would they need supernatural aid to 'make thick my blood'?",
          "Connect this to her later breakdown in Act 5 Scene 1.",
        ],
        explanation:
          "Lady Macbeth equates tenderness with female nurture (*\"milk\"*); her desperate imperative *\"unsex me here\"* proves she must forcibly repress natural empathy — foreshadowing why that repressed conscience erupts fatally in Act 5 Scene 1.",
      },
      {
        id: "lit-macbeth-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "Lady Macbeth advises Macbeth in Act 1 Scene 5: *\"Look like th' innocent flower, / But be the serpent under't.\"* Which **two** 1606 contextual resonances sharpen this image?",
        options: [
          "Roman stoic philosophy and Queen Elizabeth I's Armada portrait.",
          "Genesis's Edenic serpent of temptation and King James I's 1605 Gunpowder Plot commemorative medal showing a snake hidden among flowers.",
          "Medieval chivalric romance and Edward the Confessor's coronation ring.",
          "Scottish clan tartan heraldry and the Magna Carta.",
        ],
        answerIndex: 1,
        hints: [
          "Think both biblical allusion and a specific 1605 treason plot against James I.",
          "What medal was minted after November 1605?",
        ],
        explanation:
          "The antithesis of *\"innocent flower\"* and *\"serpent\"* fuses the **Biblical Fall** in Genesis with **King James I's 1605 Gunpowder Plot medal** (a snake concealed among flowers), aligning regicidal duplicity with Satanic treason.",
      },
      {
        id: "lit-macbeth-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dramatic-structure-symmetry",
        question:
          "In Act 1 Scene 6, King Duncan arrives at Inverness and remarks: *\"This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses.\"* Which dramatic device dominates this entrance?",
        options: [
          "Comic bathos, because the drunken Porter interrupts Duncan at the gate.",
          "Anagnorisis, as Duncan realises Macbeth plans to murder him.",
          "Fierce dramatic irony, since the audience just heard Lady Macbeth summon 'the dunnest smoke of hell' inside this exact castle.",
          "Trochaic tetrameter, matching the rhythm of the Weird Sisters.",
        ],
        answerIndex: 2,
        hints: [
          "What did the audience hear at the end of Act 1 Scene 5 that King Duncan does not know?",
          "Contrast Duncan's 'sweetly' air with Lady Macbeth's 'raven himself is hoarse'.",
        ],
        explanation:
          "Juxtaposing Act 1 Scene 5 (*\"battlements\"* of hellish smoke and croaking ravens) directly against Duncan's serene praise in 1.6 creates excruciating **dramatic irony**, highlighting Duncan's trusting vulnerability.",
      },
      {
        id: "lit-macbeth-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "In Act 1 Scene 7, Macbeth opens his soliloquy: *\"If it were done when 'tis done, then 'twere well / It were done quickly.\"* What does his three-fold repetition of the vague pronoun *\"it\"* betray?",
        options: [
          "Impatient bloodlust — he cannot wait to boast publicly about slaying Duncan.",
          "Confusion about which room King Duncan is sleeping in.",
          "Anger that Banquo has refused to join the conspiracy.",
          "Euphemistic evasion — his conscience shrinks from naming the sacrilegious crime of regicide aloud.",
        ],
        answerIndex: 3,
        hints: [
          "Notice he also calls the murder Duncan's 'taking-off' rather than 'assassination' at first.",
          "What linguistic device replaces a taboo horror with a bland pronoun?",
        ],
        explanation:
          "Macbeth's **euphemistic** reliance on *\"it\"* (and *\"taking-off\"*) exposes profound psychological conflict: he understands the moral horror of killing his kinsman, guest and King too clearly to speak its true name.",
      },
      {
        id: "lit-macbeth-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "At the end of his Act 1 Scene 7 soliloquy, Macbeth concludes:\n\n> *\"I have no spur*\n> *To prick the sides of my intent, but only*\n> *Vaulting ambition, which o'erleaps itself*\n> *And falls on th' other.\"*\n\nHow does Shakespeare's **equestrian (horse-riding) metaphor** shape our view of Macbeth's **hamartia**?",
        options: [
          "It pictures Macbeth as an over-eager rider leaping too violently for the saddle and crashing on the far side — showing he foresees his own ruin.",
          "It celebrates Macbeth's glorious cavalry charge against the Norwegian invaders in Act 1 Scene 2.",
          "It suggests Macbeth lacks political ambition and only wants a quiet retirement at Glamis.",
          "It proves Duncan's horses have already gone wild before the murder.",
        ],
        answerIndex: 0,
        hints: [
          "Think about a rider with 'no spur' (no righteous grievance against virtuous Duncan) trying to vault onto a horse.",
          "What happens when someone 'o'erleaps itself'?",
        ],
        explanation:
          "Casting *\"Vaulting ambition\"* as an over-leaping rider who crashes onto the ground shows Macbeth's lucid **self-awareness**: unlike a blind villain, he diagnoses his own **hamartia** and predicts his downfall before Lady Macbeth enters.",
      },
      {
        id: "lit-macbeth-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "In Act 2 Scene 1, Macbeth gazes into the air and asks: *\"Is this a dagger which I see before me, / The handle toward my hand?... Or art thou but / A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain?\"* What does this soliloquy dramatise?",
        options: [
          "The Witches physically handing Macbeth a cursed blade onstage.",
          "A liminal psychological fracture in which guilt-ridden imagination externalises his own murderous intent as a tempting vision.",
          "Banquo attempting to disarm Macbeth in the courtyard of Inverness.",
          "Macbeth deciding permanently to abandon the murder of Duncan.",
        ],
        answerIndex: 1,
        hints: [
          "Notice the handle points 'toward my hand' and Macbeth himself suspects 'a dagger of the mind'.",
          "Why does Shakespeare start the speech with questions before hardening into 'I have done'?",
        ],
        explanation:
          "Whether staged as invisible or lit, Macbeth's own diagnosis (*\"dagger of the mind... heat-oppressed brain\"*) dramatises acute psychosomatic guilt projecting his ambition outward as if the weapon itself were leading him.",
      },
      {
        id: "lit-macbeth-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "Immediately after Duncan's murder in Act 2 Scene 2, Shakespeare writes:\n\n> *MACBETH: I have done the deed. Didst thou not hear a noise?*\n> *LADY MACBETH: I heard the owl scream and the crickets cry.*\n> *MACBETH: Did not you speak?*\n> *LADY MACBETH: When?*\n> *MACBETH: Now.*\n> *LADY MACBETH: As I descended?*\n\nWhat is the dramatic effect of **splitting single iambic pentameter lines** across rapid-fire half-lines here?",
        options: [
          "It slows the pace into calm, stately court ceremony.",
          "It creates breathless conspiratorial panic and fractured rhythm, showing both partners' nerves trembling in unison.",
          "It proves Lady Macbeth has already fallen into sleepwalking madness.",
          "It imitates the Witches' rhyming trochaic couplets.",
        ],
        answerIndex: 1,
        hints: [
          "Count the syllables across 'When? / Now. / As I descended?' — they share a broken verse line.",
          "How would actors speak these clipped questions in darkness?",
        ],
        explanation:
          "Shared and fractured half-lines (**stichomythia**) accelerate stage tempo into paranoid, whispered urgency while binding husband and wife inside one racing, guilty heartbeat.",
      },
      {
        id: "lit-macbeth-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "In Act 2 Scene 2, Macbeth cries:\n\n> *\"Will all great Neptune's ocean wash this blood*\n> *Clean from my hand? No; this my hand will rather*\n> *The multitudinous seas incarnadine,*\n> *Making the green one red.\"*\n\nWhat is the effect of shifting from **Latinate polysyllables** (*\"multitudinous seas incarnadine\"*) to **Anglo-Saxon monosyllables** (*\"Making the green one red\"*)?",
        options: [
          "It shows Macbeth losing fluency in English because of exhaustion.",
          "It pairs vast cosmic hyperbole with blunt, inescapable finality — first magnifying the crime to oceanic scale, then hammering home the stark reality of blood.",
          "It proves Macbeth finds the murder trivial compared with Lady Macbeth's terror.",
          "It creates humorous bathos ahead of the Porter's entrance.",
        ],
        answerIndex: 1,
        hints: [
          "Hear the grand rolling syllables of 'multitudinous seas incarnadine' alongside five plain one-syllable words.",
          "Contrast this with Lady Macbeth's 'A little water clears us of this deed'.",
        ],
        explanation:
          "Shakespeare first stretches language to cosmic grandeur (*\"multitudinous seas incarnadine\"*) to show regicide polluting creation itself, then lands five stark **monosyllables** (*\"Making the green one red\"*) that refuse any rhetorical escape.",
      },
      {
        id: "lit-macbeth-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "dramatic-structure-symmetry",
        question:
          "Why is the drunken **Porter's** prose monologue in Act 2 Scene 3 (*\"if a man were porter of hell-gate... Faith, here's an equivocator\"*) structurally vital rather than disposable comic filler?",
        options: [
          "It reveals that the Porter witnessed Macbeth murder King Duncan in the guest chamber.",
          "It allows King Duncan's ghost to appear onstage before Macduff enters.",
          "Through bathos and razor-sharp dramatic irony, it unknowingly identifies Inverness as Hell and links Macbeth's deceit to post-Gunpowder Plot equivocation.",
          "It proves working-class characters in Shakespeare always speak in rhyming heroic couplets.",
        ],
        answerIndex: 2,
        hints: [
          "Does the Porter realise his 'hell-gate' joke is literally true after regicide?",
          "Remember Father Henry Garnet's 1606 equivocation trial.",
        ],
        explanation:
          "The Porter's earthy **prose** provides practical time for the Macbeths to wash blood offstage while weaponising **bathos** and **dramatic irony**: Inverness *has* become Hell, and Macbeth is trapped by **equivocation**.",
      },
      {
        id: "lit-macbeth-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "In Act 2 Scene 3, Macduff rushes from Duncan's bedchamber crying: *\"Most sacrilegious murder hath broke ope / The Lord's anointed temple.\"* Which Jacobean doctrine underpins this metaphor?",
        options: [
          "Puritan republicanism, arguing parliament should elect kings.",
          "Classical stoicism, urging men never to grieve aloud.",
          "The Divine Right of Kings, treating the monarch's body as a consecrated vessel ordained by God.",
          "Feudal primogeniture, requiring the youngest son to inherit.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the religious diction: 'sacrilegious' and 'anointed temple'.",
          "How did King James I define royal authority in Basilikon Doron?",
        ],
        explanation:
          "Calling Duncan's body *\"The Lord's anointed temple\"* invokes coronation oil and the **Divine Right of Kings**: regicide is framed not merely as political assassination but as **sacrilege** desecrating God's sanctuary.",
      },
      {
        id: "lit-macbeth-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "In Act 2 Scene 4, an Old Man tells Ross that on the night of Duncan's death, *\"A falcon, towering in her pride of place, / Was by a mousing owl hawk'd at and kill'd.\"* What does this unnatural omen symbolise?",
        options: [
          "Banquo's plan to flee Scotland for the English court.",
          "Lady Macbeth's superior hunting skill over her husband.",
          "Malcolm's imminent defeat at Dunsinane.",
          "The inversion of the Great Chain of Being, as a lowly nocturnal predator ('mousing owl' = Macbeth) slays a royal daytime bird ('falcon' = Duncan).",
        ],
        answerIndex: 3,
        hints: [
          "In falconry, a falcon belongs at the top of the sky ('pride of place'), whereas a mousing owl hunts mice in darkness.",
          "Which cosmic hierarchy has Macbeth shattered?",
        ],
        explanation:
          "Shakespeare mirrors regicide across the **Great Chain of Being**: a nocturnal *\"mousing owl\"* (Macbeth killing in darkness) slaying a royal *\"falcon\"* (Duncan) dramatises all of nature convulsing at the breach of divine hierarchy.",
      },
    ],
  },
  {
    id: "lit-macbeth-m2",
    title: "Macbeth MCQ Paper 2: Chiasmic Marriage, Banquet Climax & Motifs",
    questions: [
      {
        id: "lit-macbeth-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "In Act 3 Scene 1, newly crowned Macbeth laments:\n\n> *\"Upon my head they placed a fruitless crown*\n> *And put a barren sceptre in my gripe\"*\n\nWhy does Macbeth describe his royal insignia with the adjectives *\"fruitless\"* and *\"barren\"*?",
        options: [
          "Scottish harvests have failed due to winter frost.",
          "He has no royal heir, and the Witches prophesied Banquo's descendants — not Macbeth's — will inherit the throne.",
          "Duncan left the royal treasury bankrupt before his death.",
          "Lady Macbeth refuses to attend his coronation at Scone.",
        ],
        answerIndex: 1,
        hints: [
          "Remember the Witches' promise to Banquo in Act 1 Scene 3: 'Thou shalt get kings, though thou be none'.",
          "Contrast Macbeth's 'barren' imagery with Duncan's 'I have begun to plant thee' (1.4).",
        ],
        explanation:
          "The semantic field of sterility (*\"fruitless\"*, *\"barren\"*) shows Macbeth tormented that he damned his soul (*\"mine eternal jewel\"*) merely to clear the throne for **Banquo's dynastic line**.",
      },
      {
        id: "lit-macbeth-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In Act 3 Scene 2, alone onstage before Macbeth enters, Lady Macbeth sighs:\n\n> *\"Nought's had, all's spent,*\n> *Where our desire is got without content\"*\n\nSeconds later, when Macbeth enters, she urges him: *\"what's done is done.\"* What does this structural juxtaposition reveal?",
        options: [
          "She feels zero remorse and delights in plotting Banquo's death.",
          "She plans to confess Duncan's murder publicly at the state banquet.",
          "Privately she is already hollowed out by disillusionment, yet she still performs a reassuring mask for her husband.",
          "She believes Fleance has already been assassinated.",
        ],
        answerIndex: 2,
        hints: [
          "Compare what she says *alone* in rhyming couplet with what she says *to Macbeth*.",
          "Notice how 'What's done is done' is tragically echoed by 'What's done cannot be undone' in 5.1.",
        ],
        explanation:
          "Shakespeare exposes a painful split between Lady Macbeth's **private despair** (*\"Nought's had, all's spent\"*) and her **public performance** of composure — marking the start of her inward collapse.",
      },
      {
        id: "lit-macbeth-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In that same scene (Act 3 Scene 2), Macbeth conceals Banquo's murder plot from Lady Macbeth, saying: *\"Be innocent of the knowledge, dearest chuck, / Till thou applaud the deed.\"* Why is this line the **chiasmic fulcrum** of their marriage?",
        options: [
          "Macbeth apologises and promises never to commit violence again.",
          "Lady Macbeth orders the murderers directly while Macbeth begs for mercy.",
          "Banquo overhears the conversation from behind the arras.",
          "Having been directed by her in Act 1, Macbeth now patronises her with an affectionate diminutive ('chuck') and acts unilaterally in bloodshed, isolating them both.",
        ],
        answerIndex: 3,
        hints: [
          "In Act 1, who planned the murder and gave the orders? Who plans Banquo's murder in Act 3?",
          "Notice the ironic clash between 'innocent' / 'dearest chuck' and contract murder.",
        ],
        explanation:
          "Act 3 Scene 2 marks the **chiasmic crossover**: Macbeth seizes solo tyrannical agency and shuts out his former co-conspirator behind patronising endearment (*\"dearest chuck\"*), leaving both partners profoundly isolated.",
      },
      {
        id: "lit-macbeth-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "What image does Macbeth use in Act 3 Scene 2 — *\"O, full of scorpions is my mind, dear wife!\"* — to convey the psychological reality of usurped kingship?",
        options: [
          "Venomous, self-stinging creatures trapped inside his own skull, turning royal power into mental torture.",
          "Triumphant eagles soaring above Dunsinane Hill.",
          "Loyal hounds guarding the gates of Forres palace.",
          "Peaceful doves symbolising reconciliation with Malcolm.",
        ],
        answerIndex: 0,
        hints: [
          "In folklore, a cornered scorpion stings aggressively — what does it feel like to have a mind 'full of scorpions'?",
          "Why hasn't gaining the crown brought Macbeth peace?",
        ],
        explanation:
          "The visceral metaphor *\"full of scorpions\"* conveys restless, venomous paranoia poisoning Macbeth from within as long as Banquo and **Fleance** remain alive.",
      },
      {
        id: "lit-macbeth-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "Why do critics identify **Act 3 Scene 3** (where Banquo is murdered on-stage, a torch is struck out, and **Fleance escapes**) as the structural **peripeteia** (turning point) of *Macbeth*?",
        options: [
          "Because Malcolm is immediately crowned King in this scene.",
          "Because Macbeth's first solo plot fails at its core dynastic goal — from this moment onward, events slip irreversibly beyond his control.",
          "Because Lady Macbeth dies during the ambush in the park.",
          "Because the Weird Sisters lose their supernatural powers when the torch goes out.",
        ],
        answerIndex: 1,
        hints: [
          "Up to Act 3 Scene 2, Macbeth succeeded in becoming Glamis, Cawdor and King. What goes wrong in 3.3?",
          "Look at the extinguished torch: 'Who did strike out the light?'",
        ],
        explanation:
          "Placed squarely in the middle of Act 3, **Fleance's escape** ensures the Witches' Banquo prophecy survives, shattering Macbeth's control and triggering his public breakdown in the banquet scene (3.4).",
      },
      {
        id: "lit-macbeth-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "In the Banquet Scene (Act 3 Scene 4), **Banquo's blood-boltered Ghost** silently sits in **Macbeth's royal chair** while remaining invisible to the Scottish thanes. What does this stagecraft symbolise?",
        options: [
          "Banquo forgiving Macbeth for ordering the ambush.",
          "Ross secretly disguising himself to frighten the court.",
          "Both Macbeth's private guilty conscience fracturing his public royal ceremonial order and Banquo's lineage rightfully occupying the throne.",
          "Lady Macbeth sharing the exact same visual hallucination at the table.",
        ],
        answerIndex: 2,
        hints: [
          "Think about *which* seat the Ghost takes ('The table's full!').",
          "What does a state banquet normally symbolise in a medieval/Jacobean court?",
        ],
        explanation:
          "A royal banquet symbolises hierarchical harmony; Banquo's silent **Ghost** occupying Macbeth's own seat dramatises both psychosomatic guilt and the political truth that **Banquo's heirs** — not Macbeth — will hold Scotland's throne.",
      },
      {
        id: "lit-macbeth-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "After the ruined banquet at the end of Act 3 Scene 4, Macbeth declares:\n\n> *\"I am in blood*\n> *Stepp'd in so far that, should I wade no more,*\n> *Returning were as tedious as go o'er.\"*\n\nWhich word most chillingly signals Macbeth's moral desensitisation compared with Act 2 Scene 2?",
        options: [
          "\"Stepp'd\"",
          "\"wade\"",
          "\"Returning\"",
          "\"tedious\"",
        ],
        answerIndex: 3,
        hints: [
          "In Act 2 Scene 2 blood filled Macbeth with cosmic terror ('Neptune's ocean').",
          "Which adjective reduces repentance versus further mass murder to a matter of tiresome effort?",
        ],
        explanation:
          "The weary adjective *\"tedious\"* shows terrifying moral deadening: repenting (*\"Returning\"*) is dismissed not on ethical grounds, but as just as tiresome as wading deeper into slaughter.",
      },
      {
        id: "lit-macbeth-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "In Act 4 Scene 1, the Witches conjure **three Apparitions** in order: (1) an **Armed Head**, (2) a **Bloody Child**, and (3) a **Crowned Child with a tree in his hand**. How do their visual forms ironically foreshadow Act 5 even while their words reassure Macbeth?",
        options: [
          "They visually depict Macbeth's own severed head (5.9), Macduff 'untimely ripp'd' at birth (5.8), and young Malcolm's troops camouflaged with Birnam Wood boughs (5.4).",
          "They represent Duncan, Banquo and the traitorous Thane of Cawdor.",
          "They symbolise Faith, Hope and Charity forgiving Macbeth's sins.",
          "They depict the three Norwegian generals defeated in Act 1.",
        ],
        answerIndex: 0,
        hints: [
          "Match each visual emblem to how Macbeth is actually overthrown in Act 5.",
          "This is supreme visual equivocation: Macbeth hears comfort while *seeing* his doom.",
        ],
        explanation:
          "Shakespeare crafts double **equivocation**: Macbeth hears reassuring riddles (*\"none of woman born\"*), yet the visual emblems literally show his **beheading**, Caesarean **Macduff**, and **Malcolm** carrying **Birnam Wood**.",
      },
      {
        id: "lit-macbeth-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "Why does Shakespeare stage the murder of **Lady Macduff's young son** on-stage in Act 4 Scene 2, whereas **King Duncan's murder** in Act 2 Scene 2 happened off-stage?",
        options: [
          "The Globe Theatre lacked stage blood during Act 2.",
          "Moving from off-stage regicide to on-stage infanticide forces the audience to witness Macbeth's escalation into senseless, unprovoked tyranny without him even needing to be present.",
          "Macduff's son was an armed rebel soldier threatening Dunsinane.",
          "Lady Macbeth personally leads the murderers into Fife castle.",
        ],
        answerIndex: 1,
        hints: [
          "Has killing Lady Macduff and her children any strategic gain once Macduff has already fled to England?",
          "How does staging a child's murder in full view shift audience sympathy?",
        ],
        explanation:
          "Duncan's off-stage murder kept focus on Macbeth's agonised conscience; staging the slaughter of a defenceless child in Fife (4.2) strips away tragic glamour and exposes raw, cowardly **tyranny**.",
      },
      {
        id: "lit-macbeth-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In Act 4 Scene 3, when Ross brings word that Macbeth has slaughtered Macduff's entire family, Malcolm urges *\"Dispute it like a man\"*, and Macduff answers:\n\n> *\"I shall do so;*\n> *But I must also feel it as a man.\"*\n\nHow does this exchange function across the whole play?",
        options: [
          "It shows Macduff is too emotionally weak to fight Macbeth.",
          "It proves Malcolm secretly approves of Lady Macbeth's gender ideals.",
          "It directly repudiates Lady Macbeth's toxic equation of manhood with pitiless violence (1.7), modelling an integrated masculinity that unites grief with just action.",
          "It persuades Macduff to forgive Macbeth and remain in England.",
        ],
        answerIndex: 2,
        hints: [
          "Contrast Macduff's 'feel it as a man' with Lady Macbeth's 'When you durst do it, then you were a man' (1.7).",
          "Does Macduff's grief paralyse him or sharpen his righteous resolve?",
        ],
        explanation:
          "Shakespeare uses Macduff as a moral corrective to Act 1 Scene 7: true **manhood** requires emotional humanity (*\"feel it\"*) alongside martial courage, rather than amputating compassion.",
      },
      {
        id: "lit-macbeth-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "In Act 4 Scene 3, why does Shakespeare include a seemingly digressive description of English **King Edward the Confessor** curing sick subjects (*\"the evil\"*) through prayer and holy touch?",
        options: [
          "To suggest Macbeth also possesses miraculous healing gifts.",
          "To pad the running time while Dunsinane's battlements are built.",
          "To mock English medicine as superstitious.",
          "To provide an AO4 foil of divinely anointed, healing kingship (echoing James I's royal touch ceremony) against Macbeth's diseased tyranny over Scotland's 'sickly weal'.",
        ],
        answerIndex: 3,
        hints: [
          "Compare a king who *heals* his people's sickness with a tyrant under whom Scotland 'bleeds'.",
          "King James I himself practised 'touching for the King's Evil'.",
        ],
        explanation:
          "Edward the Confessor embodies sacred **Divine Right** benevolence — healing subjects where Macbeth wounds Scotland — while complimenting **King James I**, who revived the royal healing ceremony.",
      },
      {
        id: "lit-macbeth-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In Act 5 Scene 1, the Gentlewoman reports of sleepwalking Lady Macbeth: *\"she has light by her continually; 'tis her command.\"* Which Act 1 line does this stage detail directly invert?",
        options: [
          "\"Come, thick night, / And pall thee in the dunnest smoke of hell\" (1.5)",
          "\"So foul and fair a day I have not seen\" (1.3)",
          "\"If it were done when 'tis done\" (1.7)",
          "\"Fair is foul, and foul is fair\" (1.1)",
        ],
        answerIndex: 0,
        hints: [
          "In Act 1 Scene 5, what did Lady Macbeth command darkness/night to do?",
          "Now she cannot bear to be in the dark for an instant.",
        ],
        explanation:
          "Having boldly summoned *\"thick night\"* and *\"the dunnest smoke of hell\"* in Act 1 Scene 5, Lady Macbeth ends terrified of the spiritual darkness (*\"Hell is murky\"*) she invited inside.",
      },
      {
        id: "lit-macbeth-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "Why does Shakespeare shift Lady Macbeth from poised **iambic pentameter** in Act 1 to fragmented **prose** in Act 5 Scene 1 (*\"Out, damned spot! out, I say! — One: two...\"*)?",
        options: [
          "Because she is addressing lower-status servants politely.",
          "In Shakespearean tragedy, a noble character losing blank verse for disjointed prose dramatises psychological collapse and the loss of conscious self-governance.",
          "Because prose was considered higher status than verse on the Jacobean stage.",
          "To show she is calmly dictating a royal proclamation to the Doctor.",
        ],
        answerIndex: 1,
        hints: [
          "Think about other noble Shakespearean characters (Ophelia, Lear, Othello) when their minds fracture.",
          "Notice the jagged dashes, nursery rhymes ('Fife had a wife') and obsessive repetitions.",
        ],
        explanation:
          "Stripping away **iambic pentameter** mirrors the collapse of her iron willpower: in sleep, repressed memories of Duncan, Banquo and Lady Macduff spill out in unedited **prose** fragments.",
      },
      {
        id: "lit-macbeth-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "In Act 5 Scene 2, the Scottish thane Angus remarks of Macbeth:\n\n> *\"now does he feel his title*\n> *Hang loose about him, like a giant's robe*\n> *Upon a dwarfish thief.\"*\n\nHow does this simile resolve a whole-play **motif**?",
        options: [
          "It introduces clothing imagery for the very first time in Act 5.",
          "It praises Macbeth's towering physical stature in battle.",
          "It completes the 'borrow'd robes' motif from Act 1 Scene 3, exposing usurped kingship as sacred majesty that morally shrinks its illegitimate wearer.",
          "It refers literally to King Duncan's oversized coronation cloak being stolen by Ross.",
        ],
        answerIndex: 2,
        hints: [
          "Recall Macbeth asking in 1.3: 'why do you dress me / In borrow'd robes?'",
          "Contrast 'giant's robe' (the office of kingship) with 'dwarfish thief' (the usurper).",
        ],
        explanation:
          "Angus brings the **sartorial motif** (*\"borrow'd robes\"*, *\"strange garments\"*, *\"golden opinions\"*) to its moral climax: seizing the crown without divine right reduces the tyrant to a *\"dwarfish thief\"*.",
      },
      {
        id: "lit-macbeth-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "In Act 5 Scene 5, Macbeth calls life *\"a poor player / That struts and frets his hour upon the stage / And then is heard no more.\"* How does this **metatheatrical** metaphor deepen his tragedy?",
        options: [
          "It shows Macbeth wishes he had become a playwright in London.",
          "It celebrates the eternal fame Macbeth has won as King of Scotland.",
          "It proves Macbeth believes in Christian resurrection and divine mercy.",
          "Speaking on an actual stage, Macbeth experiences his stolen kingship as an empty, miscast performance stripped of permanence, meaning or grace.",
        ],
        answerIndex: 3,
        hints: [
          "Connect 'poor player' (an actor wearing a costume for an hour) back to the 'borrow'd robes' motif.",
          "What philosophical mood ends with 'Signifying nothing'?",
        ],
        explanation:
          "Through **metatheatre**, Shakespeare fuses the **borrowed-robes** and **brief-candle** motifs: having severed every human and divine bond, Macbeth perceives existence itself as a hollow theatrical illusion.",
      },
    ],
  },
  {
    id: "lit-macbeth-m3",
    title: "Macbeth MCQ Paper 3: Act 5 Resolution, Structural Symmetry & Grade-9 Synthesis",
    questions: [
      {
        id: "lit-macbeth-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dramatic-structure-symmetry",
        question:
          "How does Malcolm's army in Act 5 Scene 4 fulfil the Third Apparition's seemingly impossible prophecy about **Great Birnam Wood** coming to **Dunsinane Hill**?",
        options: [
          "The Witches uproot the forest with a supernatural whirlwind.",
          "Each soldier hews down a bough from Birnam Wood and carries it before him to camouflage troop numbers — turning living nature symbolically against unnatural tyranny.",
          "Macbeth sets fire to Birnam Wood from Dunsinane's battlements.",
          "Ross builds wooden siege towers carved with royal crests.",
        ],
        answerIndex: 1,
        hints: [
          "What tactical order does Malcolm give at Birnam Wood ('Let every soldier hew him down a bough')?",
          "Think symbolically: greenery marching against a 'barren sceptre'.",
        ],
        explanation:
          "Malcolm's soldiers carry leafy boughs as camouflage: pragmatically it exposes the Witches' **equivocation**, while symbolically **green, living nature** marches to purge Macbeth's sterile usurpation.",
      },
      {
        id: "lit-macbeth-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dramatic-structure-symmetry",
        question:
          "In Act 5 Scene 8, when Macbeth boasts *\"I bear a charmed life, which must not yield / To one of woman born\"*, how does **Macduff** shatter his confidence?",
        options: [
          "Macduff reveals he is secretly King Duncan's twin brother.",
          "Macduff summons Banquo's ghost to disarm Macbeth.",
          "Macduff reveals he 'was from his mother's womb / Untimely ripp'd' (born by Caesarean section), exposing the Witches' literal equivocation.",
          "Macduff explains that Lady Macduff survived the attack at Fife.",
        ],
        answerIndex: 2,
        hints: [
          "What does 'Untimely ripp'd' mean medically?",
          "Macbeth immediately realises 'these juggling fiends... palter with us in a double sense'.",
        ],
        explanation:
          "Macduff's Caesarean birth (*\"Untimely ripp'd\"*) fulfils the letter of *\"none of woman born\"* while destroying its comforting promise — forcing Macbeth's **anagnorisis** that demonic equivocators *\"keep the word of promise to our ear, / And break it to our hope.\"*",
      },
      {
        id: "lit-macbeth-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "Once stripped of both prophecies in Act 5 Scene 8, Macbeth declares: *\"Yet I will try the last. Before my body / I throw my warlike shield.\"* Why does Shakespeare grant Macbeth this final defiance?",
        options: [
          "To prove Macbeth expects the Witches to rescue him at the last second.",
          "To show Macbeth begging Macduff for exile in France.",
          "To turn the final duel into slapstick comedy.",
          "To restore a flash of his Act 1 martial courage ('valour's minion'), preserving Aristotelian tragic stature even as just nemesis destroys him.",
        ],
        answerIndex: 3,
        hints: [
          "If Macbeth cowered on his knees begging for mercy, would the ending feel like high tragedy?",
          "Compare 'warlike shield' (5.8) with 'brave Macbeth' (1.2).",
        ],
        explanation:
          "Refusing to surrender even when certainty of death replaces false invincibility briefly reconnects Macbeth to his Act 1 heroism, ensuring his fall evokes **Aristotelian terror and tragic waste** rather than mere contempt.",
      },
      {
        id: "lit-macbeth-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "How does Macduff's entrance in Act 5 Scene 9 carrying *\"th' usurper's cursed head\"* create **cyclical structural symmetry** with Act 1 Scene 2?",
        options: [
          "In Act 1 Scene 2 loyal Macbeth beheaded the rebel traitor Macdonwald; in Act 5 Scene 9 loyal Macduff beheads the rebel usurper Macbeth, proving Macbeth became what he once destroyed.",
          "In Act 1 Scene 2 Duncan beheaded Banquo on the battlements of Forres.",
          "In Act 1 Scene 2 the Witches carried a severed head onto the heath.",
          "In Act 1 Scene 2 Malcolm executed the King of Norway in single combat.",
        ],
        answerIndex: 0,
        hints: [
          "What happened to 'the merciless Macdonwald' at the hands of 'brave Macbeth' in Act 1 Scene 2?",
          "Who now occupies Macdonwald's exact structural position?",
        ],
        explanation:
          "Bookending the tragedy with a traitor's severed head (*Macdonwald* in 1.2 -> *Macbeth* in 5.9) restores Scotland's **natural order** while underscoring the tragic irony of Macbeth's transformation from saviour to traitor.",
      },
      {
        id: "lit-macbeth-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In the play's closing speech (Act 5 Scene 9), Malcolm dismisses *\"this dead butcher and his fiend-like queen.\"* Why do top-band critics find Malcolm's neat political epitaph **dramatically incomplete**?",
        options: [
          "Because Malcolm secretly admired Macbeth's domestic policies.",
          "Because the audience — unlike Malcolm — has witnessed Macbeth's agonised soliloquies (1.7, 5.5) and Lady Macbeth's tormented remorse (5.1), which exceed flat 'butcher/fiend' caricature.",
          "Because Lady Macbeth was actually innocent of plotting Duncan's death.",
          "Because Banquo's ghost contradicts Malcolm onstage.",
        ],
        answerIndex: 1,
        hints: [
          "Was Malcolm in the room for 'Vaulting ambition' (1.7) or 'Out, damned spot!' (5.1)?",
          "Compare public political history with private tragic interiority.",
        ],
        explanation:
          "While politically just from Scotland's perspective, Malcolm's binary *\"dead butcher and his fiend-like queen\"* flattens the psychological complexity only the theatre audience has witnessed through **soliloquy** and **sleepwalking**.",
      },
      {
        id: "lit-macbeth-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "In Act 2 Scene 2, Macbeth hears an imaginary voice cry:\n\n> *\"Sleep no more!*\n> *Macbeth does murder sleep\" — the innocent sleep,*\n> *Sleep that knits up the ravell'd sleave of care*\n\nWhy is Macbeth's punishment of **chronic insomnia** (*\"terrible dreams\"*) poetically fitting?",
        options: [
          "Because the Witches slipped a sleeping draught into Duncan's wine.",
          "Because Banquo cursed Macbeth's bedchamber in Act 2 Scene 1.",
          "Through contrapasso (poetic justice), violating sacred hospitality by murdering a defenceless sleeping King permanently destroys the murderer's own rest and peace of mind.",
          "Because Dunsinane Castle sits next to a noisy waterfall.",
        ],
        answerIndex: 2,
        hints: [
          "How was King Duncan positioned when Macbeth stabbed him?",
          "Look at the gentle domestic metaphor 'knits up the ravell'd sleave of care'.",
        ],
        explanation:
          "Murdering a trusting guest **in his sleep** severs Macbeth from *\"great nature's second course\"*: by destroying innocent vulnerability, both Macbeths forfeit restorative sleep forever.",
      },
      {
        id: "lit-macbeth-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dramatic-structure-symmetry",
        question:
          "In Act 4 Scene 3, before trusting Macduff in England, **Malcolm** falsely claims that he himself is more lustful, greedy and tyrannical than Macbeth until Macduff despairs (*\"O Scotland, Scotland!\"*). What does this test prove about Malcolm as a future king?",
        options: [
          "Malcolm really is morally worse than Macbeth.",
          "Malcolm dislikes Scotland and prefers living in London.",
          "Malcolm is too cowardly to lead troops northward.",
          "Unlike his over-trusting father Duncan (1.4), Malcolm has learned shrewd political discernment to verify loyalty against Macbeth's spies while remaining virtuous.",
        ],
        answerIndex: 3,
        hints: [
          "Remember Duncan lamenting 'There's no art / To find the mind's construction in the face' (1.4).",
          "Macbeth has repeatedly sent spies to lure Malcolm into traps.",
        ],
        explanation:
          "Malcolm synthesises **Duncan's sacred grace** with **political vigilance**: by testing whether Macduff cares for Scotland's welfare rather than flattering any prince, Malcolm avoids his father's fatal naivety.",
      },
      {
        id: "lit-macbeth-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "In Act 1 Scene 7, to shame Macbeth out of backing down, Lady Macbeth declares:\n\n> *\"I have given suck, and know*\n> *How tender 'tis to love the babe that milks me:*\n> *I would, while it was smiling in my face,*\n> *Have pluck'd my nipple from his boneless gums,*\n> *And dash'd the brains out, had I so sworn as you*\n> *Have done to this.\"*\n\nWhich analytical comment on Shakespeare's **diction and contrast** reaches Grade 9?",
        options: [
          "Juxtaposing tender maternal intimacy ('smiling in my face', 'boneless gums') directly against violent plosive monosyllables ('dash'd the brains out') weaponises taboo infanticide to coerce Macbeth's honour.",
          "The speech proves Lady Macbeth never loved children and feels nothing.",
          "Shakespeare uses gentle pastoral imagery to calm Macbeth's nerves before dinner.",
          "The lines are written in prose to show Lady Macbeth is already sleepwalking.",
        ],
        answerIndex: 0,
        hints: [
          "Notice she starts by admitting 'know / How tender 'tis to love the babe' BEFORE the violent turn!",
          "Hear the harsh plosive consonants in 'pluck'd' and 'dash'd the brains out'.",
        ],
        explanation:
          "The shock relies on **tonal collision**: establishing genuine maternal tenderness (*\"tender\"*, *\"smiling\"*, *\"boneless gums\"*) makes the sudden plosive violence (*\"pluck'd\"*, *\"dash'd\"*) devastatingly coercive.",
      },
      {
        id: "lit-macbeth-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "Compare these paired lines from **Act 2 Scene 2** and **Act 5 Scene 1**:\n- Lady Macbeth (2.2): *\"A little water clears us of this deed\"*\n- Lady Macbeth (5.1): *\"All the perfumes of Arabia will not sweeten this little hand.\"*\n\nWhat structural technique links these two moments?",
        options: [
          "Foreshadowing of Malcolm's coronation.",
          "Ironic reversal from hubristic litotes (understatement) to agonised hyperbole, proving moral guilt cannot be washed away physically.",
          "Comic relief mocking luxury Jacobean cosmetics.",
          "Rhythmic shift from prose in Act 2 to iambic pentameter in Act 5.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the scale of 'A little water' with 'All the perfumes of Arabia'.",
          "Notice how in 5.1 she echoes Macbeth's 'Neptune's ocean' hyperbole from 2.2!",
        ],
        explanation:
          "Shakespeare inverts her Act 2 **understatement** (*\"A little water\"*) into **hyperbolic** despair (*\"All the perfumes of Arabia\"*), forcing Lady Macbeth to inhabit the exact cosmic guilt she once mocked in Macbeth.",
      },
      {
        id: "lit-macbeth-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "imagery-blood-sleep-light",
        question:
          "Across Acts 4 and 5, Caithness calls Malcolm *\"the med'cine of the sickly weal\"* (5.2) while Macbeth asks the Doctor if he can *\"cast / The water of my land, find her disease\"* (5.3). What does this **disease-and-purgation motif** imply?",
        options: [
          "Bubonic plague has broken out in the English camp.",
          "The Scottish Doctor is plotting to poison Macbeth's wine.",
          "Under an illegitimate usurper, the body politic of Scotland itself is pathologically infected and can be healed only by purging the tyrant and restoring the rightful heir.",
          "Macbeth regrets not studying medicine at university.",
        ],
        answerIndex: 2,
        hints: [
          "In Jacobean political thought, the King is the 'head' of the 'body politic' ('weal' = commonwealth).",
          "If the head is corrupt, what happens to the nation's body?",
        ],
        explanation:
          "Shakespeare maps **regicide** onto the **body politic**: Macbeth is the pathogen sickening Scotland (*\"sickly weal\"*), while Malcolm and Macduff arrive as restorative *\"med'cine\"*.",
      },
      {
        id: "lit-macbeth-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "In Act 4 Scene 1, after the three Apparitions vanish, a procession of **eight kings** appears, the eighth holding a **glass (mirror)** showing many more kings, some carrying *\"two-fold balls and treble sceptres\"*. Why did Shakespeare stage this exact detail?",
        options: [
          "To predict the abolition of the British monarchy.",
          "To honour Queen Elizabeth I's eight Tudor ancestors.",
          "To show Macbeth's own eight grandsons ruling Dunsinane.",
          "To flatter King James I directly in the audience — the eighth Stuart monarch descended from Banquo, uniting the crowns of England, Scotland and Ireland ('treble sceptres'), reflected into perpetuity.",
        ],
        answerIndex: 3,
        hints: [
          "Who united the crowns in 1603 ('two-fold balls and treble sceptres')?",
          "In royal court performances, whom might an angled onstage mirror literally reflect?",
        ],
        explanation:
          "The *\"two-fold balls and treble sceptres\"* denote **James I's Union of the Crowns**, and at Hampton Court the eighth king's mirror could angle toward James himself — contrasting Stuart legitimacy with Macbeth's *\"fruitless crown\"*.",
      },
      {
        id: "lit-macbeth-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "In Act 4 Scene 1, immediately after learning Macduff has fled to England, Macbeth vows:\n\n> *\"From this moment*\n> *The very firstlings of my heart shall be*\n> *The firstlings of my hand.\"*\n\nHow does this mark a structural shift from his **Act 1–2 soliloquies**?",
        options: [
          "He eliminates the gap of moral deliberation between impulse ('heart') and violent execution ('hand'), replacing agonised conscience with instant tyranny.",
          "He resolves to consult Lady Macbeth carefully before every future decision.",
          "He decides to write peaceful letters to Macduff's wife.",
          "He returns to the hesitant euphemisms of Act 1 Scene 7.",
        ],
        answerIndex: 0,
        hints: [
          "In Act 1, Macbeth agonised for scenes between thought and action. What happens to that gap now?",
          "What atrocity immediately follows in Act 4 Scene 2?",
        ],
        explanation:
          "Previously, Macbeth's eloquent conscience delayed his hand; fusing *\"firstlings of my heart\"* directly to *\"firstlings of my hand\"* extinguishes reflection and unleashes the slaughter of Macduff's innocent family.",
      },
      {
        id: "lit-macbeth-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lady-macbeth-gender-guilt",
        question:
          "Watching Lady Macbeth sleepwalk in Act 5 Scene 1, the Scottish **Doctor** whispers: *\"More needs she the divine than the physician. / God, God forgive us all!\"* What does this diagnosis emphasise?",
        options: [
          "Sixteenth-century Scottish doctors lacked herbal sedatives.",
          "Her affliction is spiritual sin rather than physical illness — regicidal guilt requires divine absolution, which unrepentant usurpers cannot access.",
          "The Doctor suspects someone poisoned the Queen's supper.",
          "The Doctor plans to report Lady Macbeth to the Witches.",
        ],
        answerIndex: 1,
        hints: [
          "What does the noun 'the divine' mean here (a priest/clergyman vs a medical doctor)?",
          "Remember Macbeth could not pronounce 'Amen' in Act 2 Scene 2.",
        ],
        explanation:
          "Contrasting *\"the divine\"* (spiritual priest) with *\"the physician\"* underscores the play's Christian moral framework: violating divine law inflicts a soul-sickness no earthly medicine can cure.",
      },
      {
        id: "lit-macbeth-m3-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "jacobean-divine-right-witchcraft",
        question:
          "On Pearson Edexcel IGCSE Literature (4ET1) Paper 2 Section B, which **Assessment Objectives** are tested in the *Macbeth* whole-text essay?",
        options: [
          "AO1 and AO3 (comparison with another play) only.",
          "AO2 (language only) and AO5 (SPaG marks).",
          "AO1 (assured textual response), AO2 (language, form & structure), and AO4 (integrated Jacobean context).",
          "AO4 (historical biography) alone.",
        ],
        answerIndex: 2,
        hints: [
          "Check the curriculum line for Literary Heritage on Paper 2 Section B.",
          "Unlike Modern Drama (AO1+AO2) or Modern Prose (AO1+AO4), Literary Heritage combines all three: AO1 + AO2 + AO4!",
        ],
        explanation:
          "Edexcel 4ET1 Paper 2 Section B uniquely assesses **AO1 + AO2 + AO4** together: every paragraph should fuse an evaluative argument, close analysis of Shakespearean craft/stagecraft, and integrated Jacobean context.",
      },
      {
        id: "lit-macbeth-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tragic-hamartia-soliloquies",
        question:
          "Which overarching thesis statement on **ambition** in *Macbeth* demonstrates **Level 5 (Grade 9)** conceptual precision?",
        options: [
          "Macbeth is a very ambitious man who listens to the Witches and his wife, kills King Duncan, becomes a bad king, and gets killed by Macduff.",
          "In Jacobean times everyone hated ambition because King James I wrote a book about witches in 1597.",
          "Lady Macbeth is ambitious at the start and Macbeth is not ambitious at all until Act 4.",
          "Shakespeare presents unchecked 'vaulting ambition' as self-consuming: while sparked by equivocal prophecy and gendered coercion, usurping divinely ordained kingship fractures cosmic order and hollows both conspirators into nihilistic isolation.",
        ],
        answerIndex: 3,
        hints: [
          "Eliminate chronological plot-retelling, detached history-dumping, and oversimplified binaries.",
          "Look for conceptual evaluation weaving AO1 argument + AO2 micro-quote + AO4 Divine Right.",
        ],
        explanation:
          "A Grade-9 thesis establishes an **evaluative argument** (*self-consuming*), embeds micro-evidence (*\"vaulting ambition\"*), accounts for catalytic pressures alongside free will, and integrates **AO4** (*divinely ordained kingship*).",
      },
    ],
  },
];

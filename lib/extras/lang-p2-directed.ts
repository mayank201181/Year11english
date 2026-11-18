import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Why can two speeches cite the exact same three statistics on the exact same crisis — yet one puts a room of five hundred people to sleep while the other brings them to their feet? In Paper 2B, facts are only raw ore; genre, rhythm, and rhetorical architecture forge the blade.",
  didYouKnow: [
    "Aristotle's *Rhetoric* (4th century BCE) identified **Ethos, Logos, and Pathos** over 2,300 years ago — and modern parliamentary speechwriters still draft cabinet speeches on a three-column sheet named after them.",
    "The classic English letter rule (**Yours faithfully** for unnamed *Dear Sir/Madam*, **Yours sincerely** for named *Dear Ms Tan*) solidified in nineteenth-century British civil-service correspondence to signal whether two correspondents already stood in a personal trust relationship.",
    "**Chiasmus** takes its name from the Greek letter *Chi* (`Χ`), because plotting the repeated words across two clauses (*A–B* over *B–A*) draws a literal diagonal cross!",
    "Newspaper sub-editors write the **headline and strapline last**, after reading the finished column — a trick you can borrow in exams by leaving two blank lines at the top of your article and crafting the sharpest headline once your cyclical ending lands.",
  ],
  activities: [
    {
      title: "The Three-Audience Shape-Shifter Challenge",
      emoji: "🎭",
      materials: ["One news statistic", "Timer set to 9 minutes (3 × 3 mins)"],
      steps: [
        "Pick one concrete statistic (e.g. *'Teenage recreational reading has halved in a decade'*).",
        "**Minutes 0–3:** Write a 3-sentence **formal letter opener** to the Minister for Education (*Dear Minister* → subjunctive + institutional ethos).",
        "**Minutes 3–6:** Rewrite the *same* fact as a **broadsheet headline + strapline + opening hook**.",
        "**Minutes 6–9:** Rewrite it as the **opening 3 lines of a live assembly speech** to Year 11 peers (*inclusive 'we' + hypophora*).",
      ],
      maths:
        "Isolates **register modulation and form conventions (FAP-R)**: holding the factual content constant forces every lexical, syntactic, and pronoun choice to do visible audience work.",
    },
    {
      title: "Steelman Sparring: Defeat the Smartest Objection",
      emoji: "🤺",
      materials: ["Scratch pad", "Two different-coloured pens"],
      steps: [
        "Write a bold policy claim in blue pen (e.g. *'Cities should make public buses free for under-19s'*).",
        "Switch to red pen and write the **smartest, fairest economic objection** a city treasurer could raise — no silly caricatures allowed!",
        "Switch back to blue pen and write a single **'Admittedly… Yet…'** pivot that grants the treasurer's premise while proving why inaction costs even more.",
      ],
      maths:
        "Trains **prolepsis (preemptive concession and rebuttal)** — the structural hallmark separating Level-4 nuanced persuasion from one-dimensional rants.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Comma-Splice Repair Decision Tree",
      svg:
        '<svg viewBox="0 0 600 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision tree showing how to test a comma between two clauses and upgrade comma splices into colons, semicolons, or short impact sentences">' +
        '<rect x="6" y="6" width="588" height="193" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="145" y="18" width="310" height="36" rx="8" fill="#0f172a"/>' +
        '<text x="300" y="40" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#f8fafc">Can BOTH sides of your comma stand alone?</text>' +
        '<path d="M230 54 L110 88 M300 54 L300 88 M370 54 L490 88" stroke="#64748b" stroke-width="1.8"/>' +
        '<rect x="24" y="88" width="172" height="92" rx="8" fill="#dbeafe" stroke="#3b82f6"/>' +
        '<text x="110" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e3a8a">2nd explains / reveals 1st?</text>' +
        '<text x="110" y="133" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">Use a COLON ( : )</text>' +
        '<text x="110" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">"Budgets shrank: trust collapsed."</text>' +
        '<rect x="214" y="88" width="172" height="92" rx="8" fill="#dcfce7" stroke="#22c55e"/>' +
        '<text x="300" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#14532d">Balanced contrast / pair?</text>' +
        '<text x="300" y="133" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d">Use SEMICOLON ( ; )</text>' +
        '<text x="300" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">"Some hoard; others invest."</text>' +
        '<rect x="404" y="88" width="172" height="92" rx="8" fill="#fce7f3" stroke="#ec4899"/>' +
        '<text x="490" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#831843">Want blunt finality?</text>' +
        '<text x="490" y="133" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#be185d">Use FULL STOP ( . )</text>' +
        '<text x="490" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">"...for years. Nothing changed."</text>' +
        '</svg>',
      caption:
        "During your final 4-minute check, test every mid-sentence comma: if both halves are complete clauses with no conjunction, promote that comma into deliberate rhetorical punctuation.",
    },
  ],
  history: {
    title: "From Athenian Lawcourts to Modern Op-Ed Pages",
    story:
      "In fifth-century BCE Athens, citizens had to plead their own legal cases aloud before juries of five hundred neighbours — spawning professional speech-drafters (*logographoi*) like Lysias, who mastered the art of stepping into a client's shoes and tailoring tone to the room. Aristotle codified their craft into **Ethos, Logos, and Pathos**, Cicero added the five-part Roman oration (opening hook, context, proof, refutation, and peroration), and eighteenth-century London coffee-house journals translated spoken oratory onto the printed broadsheet page. Every time you plan a 5-stage Paper 2B speech, letter, or article, you are running a 2,400-year-old persuasion engine.",
  },
};

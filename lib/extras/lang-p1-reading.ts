import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why can two readers look at the exact same 500-word travelogue and walk out of the exam hall 25 marks apart? Because average readers read *for plot* ('what happened next?'), whereas Grade-9 readers read like forensic film editors — spotting where a single verb, colon, or camera zoom betrays what the writer refuses to say aloud.",
  didYouKnow: [
    "In eye-tracking studies of senior IGCSE examiners, markers spend less than two seconds skimming long copied quotes — their eyes lock straight onto **analytical verbs** (*implies, undercuts, juxtaposes, exposes*) and **single-word zooms**.",
    "The phrase *'makes the reader want to read on'* appears thousands of times every summer exam series and earns **zero credit** on OxfordAQA mark schemes because it could be pasted onto *any* sentence from *any* text ever written.",
    "Travel writers like Bill Bryson, Dervla Murphy, and Robert Macfarlane deliberately pair **Latinate scientific nouns** with **blunt Anglo-Saxon monosyllables** to shift tone from scholarly authority to physical vulnerability inside a single clause.",
    "OxfordAQA 9270 Paper 1 Section A divides its unseen non-fiction text into **numbered sections** specifically so candidates can navigate low-tariff boundary questions accurately before synthesising the whole arc at the end.",
  ],
  activities: [
    {
      title: "The 5-Word Scissor Challenge",
      emoji: "✂️",
      materials: ["Any newspaper column, memoir page, or past Paper 1A insert", "Highlighter + pen"],
      steps: [
        "Pick one vivid 80-word paragraph and highlight a quotation you would normally copy in an exam.",
        "Count the words: if it is longer than **5 words**, ruthlessly snip away every unstressed function word until only the 2–4 sharpest words remain.",
        "Circle **one single word** inside that micro-quote and write **two completely distinct connotations** radiating out from it.",
        "Draft one sentence embedding the micro-quote seamlessly into your own grammar — read it aloud: if there is a clunky bump before the quote marks, smooth the syntax.",
      ],
      maths:
        "Compressing quotations from 18 words down to 3 words saves ~45 seconds per paragraph while forcing **word-level precision (AO1/AO2)** instead of Band-2 paraphrase.",
    },
    {
      title: "Four-Panel Cinema Storyboard",
      emoji: "🎥",
      materials: ["Scrap paper folded into 4 boxes", "A 4-section non-fiction extract"],
      steps: [
        "Label the four boxes **Section 1, Section 2, Section 3, Section 4** — ban yourself from writing any language devices (no 'metaphor' or 'simile'!).",
        "In each box, sketch only **camera distance** (Wide Panorama / Mid-Shot / Extreme Close-Up) and **timeline** (Present / Flashback / Future).",
        "Draw an arrow between Box 2 and Box 3 and label the **hinge**: what disrupted the opening mood?",
        "Compare Box 1 and Box 4: circle whatever object, weather detail, or emotion returned in transformed shape.",
      ],
      maths:
        "Separating **cinematic sequence (structure)** from **word choice (language)** prevents the #1 structural exam mistake: writing lexical comments when asked about narrative shifts.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Tone Compass: Escaping Flat 'Positive vs Negative' Labels",
      svg: `<svg viewBox="0 0 540 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-quadrant tone compass mapping Warm vs Critical and Restrained vs Intense non-fiction attitudes">
  <rect width="540" height="210" rx="14" fill="#f8fafc"/>
  <line x1="270" y1="22" x2="270" y2="188" stroke="#64748b" stroke-width="2"/>
  <line x1="40" y1="105" x2="500" y2="105" stroke="#64748b" stroke-width="2"/>
  <text x="270" y="15" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#0f172a">HIGH INTENSITY / PASSION</text>
  <text x="270" y="202" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#0f172a">RESTRAINED / UNDERSTATED</text>
  <text x="16" y="109" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#991b1b">CRITICAL</text>
  <text x="486" y="109" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#166534">AFFIRMING</text>
  <rect x="74" y="32" width="176" height="58" rx="8" fill="#fee2e2" stroke="#f87171"/>
  <text x="162" y="52" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#991b1b">Indignant · Scathing</text>
  <text x="162" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#7f1d1d">Acerbic · Outraged</text>
  <rect x="290" y="32" width="176" height="58" rx="8" fill="#dcfce7" stroke="#4ade80"/>
  <text x="378" y="52" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#166534">Reverent · Exuberant</text>
  <text x="378" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#14532d">Awestruck · Celebratory</text>
  <rect x="74" y="120" width="176" height="58" rx="8" fill="#fef3c7" stroke="#fbbf24"/>
  <text x="162" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#92400e">Sardonic · Dryly Ironic</text>
  <text x="162" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">Sceptical · Disillusioned</text>
  <rect x="290" y="120" width="176" height="58" rx="8" fill="#e0f2fe" stroke="#38bdf8"/>
  <text x="378" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#075985">Wistful · Self-Deprecating</text>
  <text x="378" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#0c4a6e">Elegiac · Wryly Humbled</text>
</svg>`,
      caption:
        "Locate where Section 1 starts on the Tone Compass and draw an arrow to where Section 4 finishes — that trajectory is your high-tariff thesis.",
    },
  ],
  history: {
    title: "From Victorian Dispatch to Literary Memoir",
    story:
      "Nineteenth-century expedition reports and newspaper dispatches once aimed for stiff, objective authority — cataloguing distances, altitudes, and supplies in detached prose. In the twentieth century, writers from George Orwell and Martha Gellhorn to Joan Didion and Bruce Chatwin revolutionised non-fiction by bringing the **tools of the literary novel** — subjective interiority, sensory symbolism, ironic self-scrutiny, and nonlinear memory — onto factual events. OxfordAQA Paper 1 Section A sits right in that tradition: every extract is factual writing crafted with literary precision, inviting you to read both the outer world described and the inner consciousness shaping it.",
  },
};

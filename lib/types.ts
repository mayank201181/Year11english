// ---------------------------------------------------------------------------
// Content data model for the Year 11 IGCSE English Language (9270) & Literature (4ET1) Lab.
//
// Audited exam content lives in lib/topics/<id>/{guide,mcq,practice}.ts.
// Engagement extras live in lib/extras/<id>.ts and never touch audited files.
// Procedural skill drills live in lib/drills/<id>.ts.
//
// TEXT FORMAT ("markdown-lite + maths markup") — used by every string field
// that is rendered as text (bodies, questions, options, steps, hints …):
//   **bold**   *italic*   `code`
//   blank line = new paragraph;  "- " bullet lines;  "1. " numbered lines
//   | a | b |  pipe tables (first row = header, second row may be |---|---|)
//   {{ … }}    inline maths, rendered as real maths (MathML)
// ---------------------------------------------------------------------------

export type Strand = "Language 9270" | "Literature 4ET1";

export type Difficulty = "warmup" | "core" | "challenge";

/** AoPS discovery opener: a problem to attempt BEFORE the idea is explained. */
export interface Discovery {
  problem: string;
  /** Revealed after the learner has had a go. */
  idea: string;
}

/** One illuminating method for a worked solution (AoPS: multiple paths). */
export interface SolutionMethod {
  label: string;
  steps: string[];
}

// ---------------------------------------------------------------------------
// Auto-marked answers
// ---------------------------------------------------------------------------

export type AnswerSpec =
  | {
      type: "number";
      value: number;
      tolerance?: number;
      allowFraction?: boolean;
      standardForm?: boolean;
      display?: string;
    }
  | {
      type: "fraction";
      n: number;
      d: number;
      simplest?: boolean;
      form?: "any" | "mixed" | "improper";
      allowDecimal?: boolean;
      display?: string;
    }
  | {
      type: "list";
      values: number[];
      ordered?: boolean;
      tolerance?: number;
      display?: string;
    }
  | {
      type: "ratio";
      parts: number[];
      simplest?: boolean;
      display?: string;
    }
  | {
      type: "expression";
      expr: string;
      form?: "any" | "factorised" | "expanded" | "simplified";
      display?: string;
    }
  | {
      type: "text";
      accept: string[];
      display?: string;
    };

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

interface QuestionBase {
  /** Globally unique, e.g. "lang-p1-reading-m1-q01". */
  id: string;
  question: string;
  /** Optional inline SVG (viewBox, xmlns, role="img", aria-label; no backticks, no "${"). */
  diagram?: string;
  difficulty: Difficulty;
  /** id of the GuideSection this practises (for "back to the guide"). */
  guideRef?: string;
  /** AoPS hint ladder, revealed one at a time: nudge → bigger hint → key step. */
  hints: string[];
  /** Named analytical/writing strategy, e.g. "Zoom onto the single verb". */
  strategy?: string;
  /** Exam questions only: the topic id this question tests. */
  topicId?: string;
}

export interface MCQ extends QuestionBase {
  kind: "mcq";
  /** Exactly 4 options. Never refer to options by letter/position in text. */
  options: string[];
  answerIndex: number;
  /** Why the answer is right AND why a tempting distractor is wrong. */
  explanation: string;
}

export interface Trap {
  spec: AnswerSpec;
  feedback: string;
}

export interface ShortQ extends QuestionBase {
  kind: "short";
  answer: AnswerSpec;
  traps?: Trap[];
  solution: string[];
  solutions?: SolutionMethod[];
  commonError?: string;
}

export interface MarkPoint {
  point: string;
  /** Lower-case words/phrases a learner would write for this point (used to suggest ticks). */
  keywords: string[];
}

export interface WrittenQ extends QuestionBase {
  kind: "written";
  /** = markScheme.length */
  marks: number;
  modelAnswer: string;
  markScheme: MarkPoint[];
  commonError?: string;
  solutions?: SolutionMethod[];
}

export type Question = MCQ | ShortQ | WrittenQ;

export interface Paper {
  id: string;
  title: string;
  questions: Question[];
}

// ---------------------------------------------------------------------------
// Guide & learn-smart
// ---------------------------------------------------------------------------

export interface WorkedExample {
  title?: string;
  problem: string;
  steps: string[];
  answer: string;
  yourTurn?: {
    question: string;
    answer: AnswerSpec;
    traps?: Trap[];
    solution: string;
  };
}

export interface GuideSection {
  id: string;
  heading: string;
  discovery?: Discovery;
  body: string;
  diagram?: string;
  diagramCaption?: string;
  workedExamples?: WorkedExample[];
  keyPoints?: string[];
  whyItWorks?: string;
  strategies?: string[];
  thinkDeeper?: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface Misconception {
  wrong: string;
  right: string;
}

export interface Mnemonic {
  topic: string;
  device: string;
  explanation: string;
}

export interface RealWorld {
  title: string;
  detail: string;
  emoji?: string;
}

export interface VideoLink {
  title: string;
  channel: string;
  url: string;
}

export interface FormulaFact {
  name: string;
  formula: string;
  note?: string;
}

export interface LearnSmart {
  flashcards: Flashcard[];
  mustKnow: string[];
  misconceptions: Misconception[];
  examMistakes: string[];
  mnemonics: Mnemonic[];
  realWorld: RealWorld[];
  videos: VideoLink[];
  /** High-yield literary/rhetorical terms & set-text quotations (feeds /formulas). */
  formulas: FormulaFact[];
}

export interface TopicGuide {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  summary: string;
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
}

export interface TopicPractice {
  quiz: Question[];
  papers: Paper[];
  challenge: Question[];
}

export interface Topic extends TopicGuide {
  quiz: Question[];
  mcqPapers: Paper[];
  practicePapers: Paper[];
  challenge: Question[];
  stretch?: boolean;
}

// ---------------------------------------------------------------------------
// Comprehensive cross-topic exam
// ---------------------------------------------------------------------------

export interface ExamPaper extends Paper {
  calculator: boolean;
  minutes: number;
}

// ---------------------------------------------------------------------------
// Engagement extras (separate from audited content)
// ---------------------------------------------------------------------------

export interface Activity {
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  /** The literary/linguistic craft behind it. */
  maths: string;
}

export interface BonusDiagram {
  title: string;
  svg: string;
  caption?: string;
}

export interface TopicExtras {
  hook?: string;
  didYouKnow?: string[];
  activities?: Activity[];
  bonusDiagrams?: BonusDiagram[];
  history?: { title: string; story: string };
}

export type QuestionSource = "quiz" | "mcq" | "practice" | "challenge" | "exam";

export interface IndexedQuestion {
  qid: string;
  topicId: string;
  source: QuestionSource;
  paperId?: string;
  question: Question;
}

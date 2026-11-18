# Year 11 IGCSE English Lab — Agent Notes

- Zero-login open access: `StoreProvider` (`lib/store.tsx`) boots straight into `loadGuest()` (`"Vanishree"`, `localStorage` keys `y11eng.*`).
- Persistent bottom navigation dock across all screen sizes (`fixed inset-x-0 bottom-0`, `<main className="... pb-28">`).
- Strands: `"Language 9270"` (OxfordAQA `9270`) and `"Literature 4ET1"` (Pearson Edexcel `4ET1`).
- Exam papers (`lib/exam/`): `exam-lang1`, `exam-lang2`, `exam-lit1`, `exam-lit2` (25 questions each).
- Quality gates: `npm run gen && npm run validate && npm test && npm run lint && npm run build` + `npx tsx scripts/blind-export.ts` / `npx tsx scripts/blind-compare.ts`.

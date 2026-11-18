import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Exam Cram & Marks-Savers — Year 11 IGCSE English",
  description: "Select any combination of OxfordAQA 9270 & Edexcel 4ET1 topics for an instant Grade-9 Exam Cram & Marks-Savers Sheet.",
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="Year 11 IGCSE English" />
    </Suspense>
  );
}

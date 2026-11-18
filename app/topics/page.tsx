import type { Metadata } from "next";
import { Suspense } from "react";
import { TopicsBrowser } from "@/components/TopicsBrowser";
import { topicSummaries } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Topics (9270 & 4ET1)",
  description: "Every Year 11 IGCSE English Language (OxfordAQA 9270) and English Literature (Edexcel 4ET1) topic — with your mastery for each.",
};

function TopicsFallback() {
  return (
    <div className="space-y-2" role="status">
      <h1 className="text-2xl font-black tracking-tight sm:text-3xl">All topics</h1>
      <p className="text-ink-2">Loading topics…</p>
    </div>
  );
}

export default function TopicsPage() {
  return (
    <Suspense fallback={<TopicsFallback />}>
      <TopicsBrowser summaries={topicSummaries()} />
    </Suspense>
  );
}

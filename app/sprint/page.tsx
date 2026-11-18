import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "60s Quote & Literary Device Sprint",
  description: "60-second fluency sprint — rapid-fire recall of OxfordAQA 9270 rhetorical/linguistic craft and Edexcel 4ET1 set-text quotes, speakers and poetic methods.",
};

export default function SprintPage() {
  return <SprintRunner />;
}

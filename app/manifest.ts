import type { MetadataRoute } from "next";

// Web app manifest: makes the Year 11 IGCSE English Lab installable ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 11 IGCSE English Language & Literature",
    short_name: "Y11 English",
    description:
      "Interactive study guide & question bank for OxfordAQA 9270 English Language and Edexcel 4ET1 English Literature.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#4338ca",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

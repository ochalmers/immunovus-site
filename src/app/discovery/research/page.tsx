import type { Metadata } from "next";
import { Research } from "@/components/sections/Research";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.discoveryResearch.title,
  description: pages.discoveryResearch.description,
};

export default function ResearchPage() {
  return <Research />;
}

import type { Metadata } from "next";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.discoveryCaseStudies.title,
  description: pages.discoveryCaseStudies.description,
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}

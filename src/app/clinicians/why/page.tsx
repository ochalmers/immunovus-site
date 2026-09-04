import type { Metadata } from "next";
import { WhyImmune } from "@/components/sections/WhyImmune";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.cliniciansWhy.title,
  description: pages.cliniciansWhy.description,
};

export default function WhyImmunePage() {
  return <WhyImmune />;
}

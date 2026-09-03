import type { Metadata } from "next";
import { Approach } from "@/components/sections/Approach";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.approach.title,
  description: pages.approach.description,
};

export default function ApproachPage() {
  return (
    <PageFrame>
      <Approach />
      <HowItWorks />
    </PageFrame>
  );
}

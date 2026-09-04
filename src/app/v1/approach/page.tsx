import type { Metadata } from "next";
import { Approach } from "@/components/v1/sections/Approach";
import { HowItWorks } from "@/components/v1/sections/HowItWorks";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/v1";

export const metadata: Metadata = {
  title: pages.approach.title,
  description: pages.approach.description,
};

export default function V1ApproachPage() {
  return (
    <PageFrame>
      <Approach />
      <HowItWorks />
    </PageFrame>
  );
}

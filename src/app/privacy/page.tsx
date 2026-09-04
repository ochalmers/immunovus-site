import type { Metadata } from "next";
import { Legal } from "@/components/sections/Legal";
import { PageFrame } from "@/components/site/PageFrame";
import { pages, privacy } from "@/content/site";

export const metadata: Metadata = {
  title: pages.privacy.title,
  description: pages.privacy.description,
};

export default function PrivacyPage() {
  return (
    <PageFrame>
      <Legal {...privacy} />
    </PageFrame>
  );
}

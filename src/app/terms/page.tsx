import type { Metadata } from "next";
import { Legal } from "@/components/sections/Legal";
import { PageFrame } from "@/components/site/PageFrame";
import { pages, terms } from "@/content/site";

export const metadata: Metadata = {
  title: pages.terms.title,
  description: pages.terms.description,
};

export default function TermsPage() {
  return (
    <PageFrame>
      <Legal {...terms} />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import { InquiryPage } from "@/components/sections/InquiryPage";
import { PageFrame } from "@/components/site/PageFrame";
import { individuals, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.individuals.title,
  description: pages.individuals.description,
};

export default function IndividualsPage() {
  return (
    <PageFrame>
      <InquiryPage
        eyebrow={individuals.eyebrow}
        headline={individuals.headline}
        lede={individuals.lede}
        note={individuals.accessLede}
        variant="individual"
        submitLabel={individuals.submit}
        consent={individuals.consent}
      />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import { InquiryPage } from "@/components/sections/InquiryPage";
import { discoveryDesign, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.discoveryDesign.title,
  description: pages.discoveryDesign.description,
};

export default function DesignWithUsPage() {
  return (
    <InquiryPage
      eyebrow={discoveryDesign.eyebrow}
      headline={discoveryDesign.headline}
      lede={discoveryDesign.lede}
      note={discoveryDesign.note}
      variant="discovery"
      submitLabel={discoveryDesign.submit}
      showAskList
    />
  );
}

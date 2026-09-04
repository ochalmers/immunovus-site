import type { Metadata } from "next";
import { InquiryPage } from "@/components/sections/InquiryPage";
import { discoveryUse, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.discoveryUse.title,
  description: pages.discoveryUse.description,
};

export default function UseImmunovusPage() {
  return (
    <InquiryPage
      eyebrow={discoveryUse.eyebrow}
      headline={discoveryUse.headline}
      lede={discoveryUse.lede}
      variant="discovery"
      submitLabel={discoveryUse.submit}
      showAskList
    />
  );
}

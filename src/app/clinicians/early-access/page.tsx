import type { Metadata } from "next";
import { InquiryPage } from "@/components/sections/InquiryPage";
import { earlyAccess, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.cliniciansEarlyAccess.title,
  description: pages.cliniciansEarlyAccess.description,
};

export default function EarlyAccessPage() {
  return (
    <InquiryPage
      eyebrow={earlyAccess.eyebrow}
      headline={earlyAccess.headline}
      lede={earlyAccess.lede}
      variant="clinical"
      submitLabel={earlyAccess.submit}
      consent={earlyAccess.consent}
    />
  );
}

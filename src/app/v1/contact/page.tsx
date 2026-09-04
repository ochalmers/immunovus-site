import type { Metadata } from "next";
import { FinalCta } from "@/components/v1/sections/FinalCta";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/v1";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

export default function V1ContactPage() {
  return (
    <PageFrame>
      <FinalCta />
    </PageFrame>
  );
}

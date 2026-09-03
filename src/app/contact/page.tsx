import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

export default function ContactPage() {
  return (
    <PageFrame>
      <FinalCta />
    </PageFrame>
  );
}

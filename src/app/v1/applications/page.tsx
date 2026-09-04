import type { Metadata } from "next";
import { Applications } from "@/components/v1/sections/Applications";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/v1";

export const metadata: Metadata = {
  title: pages.applications.title,
  description: pages.applications.description,
};

export default function V1ApplicationsPage() {
  return (
    <PageFrame>
      <Applications />
    </PageFrame>
  );
}

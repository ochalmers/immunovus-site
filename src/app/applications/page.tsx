import type { Metadata } from "next";
import { Applications } from "@/components/sections/Applications";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.applications.title,
  description: pages.applications.description,
};

export default function ApplicationsPage() {
  return (
    <PageFrame>
      <Applications />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import { Careers } from "@/components/sections/Careers";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.careers.title,
  description: pages.careers.description,
};

export default function CareersPage() {
  return (
    <PageFrame>
      <Careers />
    </PageFrame>
  );
}

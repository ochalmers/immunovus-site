import type { Metadata } from "next";
import { Technology } from "@/components/sections/Technology";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.technology.title,
  description: pages.technology.description,
};

export default function TechnologyPage() {
  return (
    <PageFrame>
      <Technology />
    </PageFrame>
  );
}

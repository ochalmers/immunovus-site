import type { Metadata } from "next";
import { Technology } from "@/components/v1/sections/Technology";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/v1";

export const metadata: Metadata = {
  title: pages.technology.title,
  description: pages.technology.description,
};

export default function V1TechnologyPage() {
  return (
    <PageFrame>
      <Technology />
    </PageFrame>
  );
}

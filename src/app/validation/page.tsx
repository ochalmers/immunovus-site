import type { Metadata } from "next";
import { Validation } from "@/components/sections/Validation";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.validation.title,
  description: pages.validation.description,
};

export default function ValidationPage() {
  return (
    <PageFrame>
      <Validation />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import { Validation } from "@/components/v1/sections/Validation";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/v1";

export const metadata: Metadata = {
  title: pages.validation.title,
  description: pages.validation.description,
};

export default function V1ValidationPage() {
  return (
    <PageFrame>
      <Validation />
    </PageFrame>
  );
}

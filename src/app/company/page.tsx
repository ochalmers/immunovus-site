import type { Metadata } from "next";
import { CompanyDigital, CompanyOrigin, CompanyScience, CompanyToday } from "@/components/sections/Company";
import { Foundation } from "@/components/sections/Foundation";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.company.title,
  description: pages.company.description,
};

export default function CompanyPage() {
  return (
    <PageFrame>
      <CompanyOrigin />
      <CompanyScience />
      <CompanyDigital />
      <Foundation />
      <CompanyToday />
    </PageFrame>
  );
}

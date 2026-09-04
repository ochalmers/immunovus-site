import type { Metadata } from "next";
import { CompanyDigital, CompanyOrigin, CompanyScience, CompanyToday } from "@/components/v1/sections/Company";
import { Foundation } from "@/components/v1/sections/Foundation";
import { PageFrame } from "@/components/site/PageFrame";
import { pages } from "@/content/v1";

export const metadata: Metadata = {
  title: pages.company.title,
  description: pages.company.description,
};

export default function V1CompanyPage() {
  return (
    <PageFrame>
      <div className="company-page">
        <CompanyOrigin />
        <div className="company-story">
          <CompanyScience />
          <CompanyDigital />
          <Foundation />
          <CompanyToday />
        </div>
      </div>
    </PageFrame>
  );
}

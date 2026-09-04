import type { Metadata } from "next";
import { CompanyDigital, CompanyOrigin, CompanyScience, CompanyToday } from "@/components/sections/Company";
import { Foundation } from "@/components/sections/Foundation";
import { Team } from "@/components/sections/Team";
import { PageFrame } from "@/components/site/PageFrame";
import { PageHero } from "@/components/site/PageHero";
import { company, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.company.title,
  description: pages.company.description,
};

export default function CompanyPage() {
  return (
    <PageFrame>
      <div className="company-page">
        <PageHero
          eyebrow={company.intro.eyebrow}
          headline={company.intro.headline}
          lede={company.intro.lede}
        />
        <Team />
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

import { AudienceSubnav } from "@/components/site/AudienceSubnav";
import { PageFrame } from "@/components/site/PageFrame";
import { nav } from "@/content/site";

export default function CliniciansLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageFrame>
      <AudienceSubnav label="Clinicians" items={nav[1].children} />
      {children}
    </PageFrame>
  );
}

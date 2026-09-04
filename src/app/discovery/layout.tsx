import { AudienceSubnav } from "@/components/site/AudienceSubnav";
import { PageFrame } from "@/components/site/PageFrame";
import { nav } from "@/content/site";

export default function DiscoveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageFrame>
      <AudienceSubnav label="Drug developers" items={nav[0].children} />
      {children}
    </PageFrame>
  );
}

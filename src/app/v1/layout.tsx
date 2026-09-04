import { PageCta } from "@/components/v1/site/PageCta";
import { SiteFooter } from "@/components/v1/site/SiteFooter";
import { SiteHeader } from "@/components/v1/site/SiteHeader";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <PageCta />
      <SiteFooter />
    </>
  );
}

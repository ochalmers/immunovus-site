"use client";

import { usePathname } from "next/navigation";
import { PageCta } from "@/components/site/PageCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { VersionSwitch } from "@/components/site/VersionSwitch";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isV1 = pathname === "/v1" || pathname.startsWith("/v1/");

  if (isV1) {
    return (
      <>
        {children}
        <VersionSwitch />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <PageCta />
      <SiteFooter />
      <VersionSwitch />
    </>
  );
}

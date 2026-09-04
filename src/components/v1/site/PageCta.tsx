"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { NetworkField } from "@/components/visuals/NetworkField";
import { pageCta } from "@/content/v1";

export function PageCta() {
  const pathname = usePathname();
  if (pathname === "/v1/contact" || pathname === "/v1/contact/") return null;

  return (
    <section className="relative isolate overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--cyan-10)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-[12%] top-[-40%] h-[180%] w-[70%] opacity-80">
          <NetworkField idPrefix="cta-net-v1" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(3,255,246,0.18),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--cyan-10)_82%,var(--cyan-20))_0%,color-mix(in_srgb,var(--cyan-10)_55%,transparent)_52%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-24">
        <h2 className="display max-w-[16ch]">{pageCta.headline}</h2>
        <Link href={pageCta.cta.href} className="btn btn-primary shrink-0">
          {pageCta.cta.label}
        </Link>
      </Container>
    </section>
  );
}

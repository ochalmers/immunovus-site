import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { careers } from "@/content/site";

export function Careers() {
  return (
    <>
      <PageHero eyebrow={careers.eyebrow} headline={careers.headline} lede={careers.lede} />
      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <ul className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
            {careers.roles.map((role, i) => (
              <li key={role.title} className="py-8">
                <Reveal delay={i * 60}>
                  <h2 className="h3">{role.title}</h2>
                  <p className="mt-3 max-w-[42rem] text-[16px] leading-7 text-[var(--text-secondary)]">{role.copy}</p>
                  <p className="mt-4 text-[13px] uppercase tracking-[0.12em] text-[var(--text-muted)]">{role.closes}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Link href={careers.cta.href} className="btn btn-primary mt-12">
            {careers.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}

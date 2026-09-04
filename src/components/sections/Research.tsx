import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { publications } from "@/content/publications";
import { research } from "@/content/site";

export function Research() {
  return (
    <>
      <PageHero eyebrow={research.eyebrow} headline={research.headline} lede={research.lede} />

      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{research.note}</p>

          <div className="mt-12 space-y-14">
            {publications.map((group) => (
              <Reveal key={group.title}>
                <h2 className="h3">{group.title}</h2>
                <ul className="mt-6 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                  {group.items.map((item) => {
                    const inner = (
                      <>
                        <span className="text-[16px] leading-6 text-[var(--text-primary)]">{item.title}</span>
                        <span className="mt-1 text-[13px] text-[var(--text-muted)]">{item.journal}</span>
                      </>
                    );
                    return (
                      <li key={item.title}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col py-4 transition-colors hover:text-[var(--accent)]"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="flex flex-col py-4">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>

          <Link href={research.cta.href} className="btn btn-primary mt-14">
            {research.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}

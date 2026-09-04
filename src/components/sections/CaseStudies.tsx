"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { caseStudies } from "@/content/site";

export function CaseStudies() {
  const [open, setOpen] = useState<string | null>(caseStudies.items[0]?.title ?? null);

  return (
    <>
      <PageHero eyebrow={caseStudies.eyebrow} headline={caseStudies.headline} lede={caseStudies.lede} />

      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.items.map((item, i) => {
              const expanded = open === item.title;
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <article className={`panel overflow-hidden ${expanded ? "border-[var(--border-strong)]" : ""}`}>
                    <button
                      type="button"
                      className="flex w-full flex-col items-start p-6 text-left md:p-7"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : item.title)}
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">{item.who}</p>
                      <h2 className="h4 mt-3">{item.title}</h2>
                      <p className="mt-4 text-[13px] text-[var(--accent)]">
                        {expanded ? "Hide details" : "Read the case"} →
                      </p>
                    </button>
                    {expanded ? (
                      <div className="border-t border-[var(--border-subtle)] px-6 pb-7 md:px-7">
                        <div className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--text-secondary)]">
                          {item.copy.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        <p className="mt-5 text-[13px] text-[var(--text-muted)]">
                          {item.href ? (
                            <>
                              Source:{" "}
                              <a
                                href={item.href}
                                className="text-[var(--accent)] underline-offset-4 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.cite}
                              </a>
                            </>
                          ) : (
                            item.cite
                          )}
                        </p>
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section scroll-mt-[var(--header-h)]">
        <Container>
          <Reveal>
            <h2 className="h2">{caseStudies.process.headline}</h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[11px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(117,250,245,0.45),transparent)] lg:block"
              aria-hidden="true"
            />
            {caseStudies.process.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80}>
                  <p className="text-[12px] tracking-[0.16em] text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="h4 mt-2">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--text-secondary)]">{step.copy}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Link href={caseStudies.cta.href} className="btn btn-primary mt-12">
            {caseStudies.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}

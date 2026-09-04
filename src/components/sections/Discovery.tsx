import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FigurePlaceholder } from "@/components/ui/FigurePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { StatGrid } from "@/components/site/StatGrid";
import { discovery } from "@/content/site";

export function Discovery() {
  return (
    <>
      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <Reveal>
            <p className="eyebrow">{discovery.eyebrow}</p>
            <h1 className="h1 mt-5 max-w-[22ch]">{discovery.headline}</h1>
          </Reveal>
          <div className="mt-16">
            <StatGrid stats={discovery.stats} />
          </div>
        </Container>
      </section>

      <section className="section scroll-mt-[var(--header-h)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {discovery.principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="border-l border-[var(--accent)] pl-6 md:pl-8">
                  <h2 className="h3">{item.title}</h2>
                  <p className="mt-4 text-[16px] leading-7 text-[var(--text-secondary)]">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16" delay={80}>
            <FigurePlaceholder
              number={discovery.figure.number}
              title={discovery.figure.title}
              caption={discovery.figure.caption}
            />
          </Reveal>
        </Container>
      </section>

      <section className="section scroll-mt-[var(--header-h)]">
        <Container>
          <Reveal>
            <h2 className="h2 max-w-[22ch]">{discovery.grounding.headline}</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {discovery.grounding.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article>
                  <h3 className="h4">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--text-secondary)]">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-3xl text-[14px] leading-6 text-[var(--text-muted)]">
            <p>
              Method details are published: the multi-approach, multi-scale CD4+ T cell platform in{" "}
              <a
                href={discovery.methodLinks[0].href}
                className="text-[var(--accent)] underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wertheim et al., PLoS Computational Biology 17(8), e1009209
              </a>
              , and the multi-omics repurposing pipeline in{" "}
              <a
                href={discovery.methodLinks[1].href}
                className="text-[var(--accent)] underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bessell et al., Briefings in Bioinformatics 24(6), bbad387
              </a>
              .
            </p>
          </Reveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={discovery.secondaryCta.href} className="btn btn-secondary">
              {discovery.secondaryCta.label}
            </Link>
            <Link href={discovery.primaryCta.href} className="btn btn-primary">
              {discovery.primaryCta.label}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

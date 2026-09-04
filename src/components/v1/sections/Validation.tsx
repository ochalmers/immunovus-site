import { Container } from "@/components/ui/Container";
import { FigurePlaceholder } from "@/components/ui/FigurePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { validation } from "@/content/v1";

export function Validation() {
  return (
    <section id="validation" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{validation.eyebrow}</p>
          <h2 className="h1 mt-5">{validation.headline}</h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[11px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(117,250,245,0.45),transparent)] lg:block"
            aria-hidden="true"
          />
          {validation.stages.map((stage, i) => (
            <li key={stage.title}>
              <Reveal delay={i * 80}>
                <p className="text-[12px] tracking-[0.16em] text-[var(--accent)]">{stage.index}</p>
                <h3 className="h4 mt-2">{stage.title}</h3>
                <p className="mt-3 text-[15px] text-[var(--text-secondary)]">{stage.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12 max-w-3xl border-l border-[var(--accent)] pl-6 md:pl-8">
          <p className="text-[18px] leading-7 text-[var(--text-primary)]">{validation.purpose}</p>
        </Reveal>

        <div className="mt-16 overflow-hidden border border-[var(--border-subtle)]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <article className="border-b border-[var(--border-subtle)] p-7 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">Evidence</p>
                <h3 className="h3 mt-3">{validation.primaryCase.title}</h3>
                <p className="mt-4 text-[var(--text-secondary)]">{validation.primaryCase.copy}</p>
                <ol className="mt-6 space-y-2.5">
                  {validation.primaryCase.points.map((point, i) => (
                    <li key={point} className="flex gap-3 text-[15px] text-[var(--text-secondary)]">
                      <span className="w-6 shrink-0 text-[11px] tracking-[0.12em] text-[var(--accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {point}
                    </li>
                  ))}
                </ol>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {validation.primaryCase.figures.map((figure) => (
                    <FigurePlaceholder
                      key={figure.number}
                      number={figure.number}
                      title={figure.title}
                      caption={figure.caption}
                    />
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="flex h-full flex-col p-7 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Also in progress</p>
                <h3 className="h3 mt-3">{validation.secondaryCase.title}</h3>
                <p className="mt-4 text-[var(--text-secondary)]">{validation.secondaryCase.copy}</p>
                <FigurePlaceholder
                  className="mt-8 flex-1"
                  number={validation.secondaryCase.figure.number}
                  title={validation.secondaryCase.figure.title}
                  caption={validation.secondaryCase.figure.caption}
                />
              </article>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { approach } from "@/content/v1";

export function Approach() {
  return (
    <section id="approach" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{approach.eyebrow}</p>
          <h2 className="h1 mt-5">{approach.headline}</h2>
          <p className="lede mt-5">{approach.copy}</p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[18px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(117,250,245,0.45),transparent)] md:block"
            aria-hidden="true"
          />
          {approach.principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article>
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-page)] text-[11px] tracking-[0.12em] text-[var(--accent)]">
                  {item.index}
                </div>
                <h3 className="h3">{item.title}</h3>
                <p className="mt-3 max-w-[28ch] text-[var(--text-secondary)]">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

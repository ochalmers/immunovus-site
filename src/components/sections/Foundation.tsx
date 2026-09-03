import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { foundation } from "@/content/site";

export function Foundation() {
  return (
    <section id="foundation" className="company-beat scroll-mt-[var(--header-h)]">
      <Container>
        <div className="company-rule" aria-hidden="true" />
        <Reveal>
          <p className="eyebrow">{foundation.eyebrow}</p>
          <h2 className="h1 mt-5 max-w-[20ch]">{foundation.headline}</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-14">
          {foundation.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <p className="font-medium tracking-[-0.04em] text-[clamp(1.5rem,2.6vw,2.15rem)]">{stat.value}</p>
              <p className="mt-4 max-w-[28ch] text-[16px] leading-7 text-[var(--text-secondary)]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

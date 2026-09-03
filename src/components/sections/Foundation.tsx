import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { foundation } from "@/content/site";

export function Foundation() {
  return (
    <section id="foundation" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{foundation.eyebrow}</p>
          <h2 className="h1 mt-5 max-w-[16ch]">{foundation.headline}</h2>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-[var(--border-subtle)] pt-16 md:grid-cols-3 md:gap-16">
          {foundation.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <p className="font-medium tracking-[-0.04em] text-[clamp(1.75rem,3vw,2.5rem)]">{stat.value}</p>
              <p className="mt-5 max-w-[28ch] text-[16px] leading-7 text-[var(--text-secondary)]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

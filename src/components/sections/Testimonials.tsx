import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <>
      <PageHero eyebrow={testimonials.eyebrow} headline={testimonials.headline} lede={testimonials.lede} />
      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <Reveal>
            <p className="max-w-[42rem] text-[16px] leading-7 text-[var(--text-secondary)]">{testimonials.empty}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.specialties.map((item, i) => (
              <Reveal key={item.name} delay={i * 70}>
                <article className="panel p-6 md:p-7">
                  <h2 className="h4">{item.name}</h2>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{item.count}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Link href={testimonials.cta.href} className="btn btn-primary mt-12">
            {testimonials.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}

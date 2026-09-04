import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/site/PageHero";

export function Legal({
  eyebrow,
  headline,
  lede,
  items,
  pendingTitle,
  pending,
}: {
  eyebrow: string;
  headline: string;
  lede: string;
  items: readonly { title: string; copy: string }[];
  pendingTitle: string;
  pending: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} headline={headline} lede={lede} />
      <section className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <div className="max-w-[42rem] space-y-10">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <h2 className="h3">{item.title}</h2>
                <p className="mt-3 text-[16px] leading-7 text-[var(--text-secondary)]">{item.copy}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className="text-[16px] font-medium text-[var(--text-primary)]">{pendingTitle}</p>
              <p className="mt-3 text-[15px] leading-7 text-[var(--text-muted)]">{pending}</p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

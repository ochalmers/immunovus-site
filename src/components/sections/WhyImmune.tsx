import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { StatGrid } from "@/components/site/StatGrid";
import { whyImmune } from "@/content/site";

export function WhyImmune() {
  return (
    <>
      <PageHero eyebrow={whyImmune.eyebrow} headline={whyImmune.headline} lede={whyImmune.lede} />
      {whyImmune.groups.map((group) => (
        <section key={group.headline} className="section scroll-mt-[var(--header-h)]">
          <Container>
            <Reveal>
              <h2 className="h2 max-w-[22ch]">{group.headline}</h2>
            </Reveal>
            <div className="mt-14">
              <StatGrid stats={group.stats} />
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FigurePlaceholder } from "@/components/ui/FigurePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { clinicians } from "@/content/site";

export function Clinicians() {
  return (
    <section className="section-tight scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{clinicians.eyebrow}</p>
          <h1 className="h1 mt-5 max-w-[20ch]">{clinicians.headline}</h1>
          <p className="lede mt-5">{clinicians.lede}</p>
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <FigurePlaceholder
            number={clinicians.figure.number}
            title={clinicians.figure.title}
            caption={clinicians.figure.caption}
          />
        </Reveal>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href={clinicians.secondaryCta.href} className="btn btn-secondary">
            {clinicians.secondaryCta.label}
          </Link>
          <Link href={clinicians.primaryCta.href} className="btn btn-primary">
            {clinicians.primaryCta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}

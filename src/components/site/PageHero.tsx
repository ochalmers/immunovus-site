import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  headline,
  lede,
  note,
}: {
  eyebrow?: string;
  headline: string;
  lede?: string;
  note?: string;
}) {
  return (
    <section className="section-tight scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className={`h1 max-w-[22ch] ${eyebrow ? "mt-5" : ""}`}>{headline}</h1>
          {lede ? <p className="lede mt-5">{lede}</p> : null}
          {note ? <p className="mt-4 max-w-[42rem] text-[15px] text-[var(--text-muted)]">{note}</p> : null}
        </Reveal>
      </Container>
    </section>
  );
}

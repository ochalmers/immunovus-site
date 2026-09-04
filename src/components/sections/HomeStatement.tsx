import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { homeStatement } from "@/content/site";

export function HomeStatement() {
  return (
    <section className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <h2 className="h2 max-w-[28ch]">{homeStatement.headline}</h2>
          <p className="lede mt-6">{homeStatement.copy}</p>
        </Reveal>
      </Container>
    </section>
  );
}

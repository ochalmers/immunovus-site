import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { applications, audiences } from "@/content/site";

export function Explore() {
  return (
    <section id="who-its-for" className="section-tight scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{applications.eyebrow}</p>
          <h2 className="h2 mt-5">{applications.headline}</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <Link href={`/applications#${item.id}`} className="panel block h-full p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">{item.audience}</p>
                <h3 className="h4 mt-3">{item.title}</h3>
                {item.badge ? (
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{item.badge}</p>
                ) : null}
                <p className="mt-3 text-[15px] leading-6 text-[var(--text-secondary)]">{item.homeCopy}</p>
                <p className="mt-6 text-[13px] text-[var(--accent)]">Learn more →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

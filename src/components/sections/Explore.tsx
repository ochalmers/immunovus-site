import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const entrances = [
  {
    href: "/discovery",
    audience: "Pharma & biotech",
    title: "Drug developers",
    copy: "See how a target, compound or indication may behave in a connected immune system, before committing the next expensive cycle of work.",
  },
  {
    href: "/clinicians",
    audience: "Healthcare organisations",
    title: "Clinicians",
    copy: "Move beyond average-patient assumptions toward immune models that can inform risk, response and more precise treatment.",
  },
  {
    href: "/individuals",
    audience: "Immune health",
    title: "Individuals",
    copy: "A future consumer-facing approach to understanding immune health over time — catching a trajectory before it has a name.",
    badge: "Early access",
  },
] as const;

export function Explore() {
  return (
    <section id="who-its-for" className="section-tight scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">Who it's for</p>
          <h2 className="h2 mt-5">One view of the immune system. Three ways to put it to work.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {entrances.map((item, i) => (
            <Reveal key={item.href} delay={i * 80}>
              <Link href={item.href} className="panel block h-full p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">{item.audience}</p>
                <h3 className="h4 mt-3">{item.title}</h3>
                {"badge" in item ? (
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{item.badge}</p>
                ) : null}
                <p className="mt-3 text-[15px] leading-6 text-[var(--text-secondary)]">{item.copy}</p>
                <p className="mt-6 text-[13px] text-[var(--accent)]">Learn more →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ApplicationsSubnav } from "@/components/sections/ApplicationsSubnav";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { applications, audiences } from "@/content/site";

function interestHref(interest: string) {
  return `/contact?interest=${encodeURIComponent(interest)}`;
}

export function Applications() {
  return (
    <>
      <section id="applications" className="section-tight scroll-mt-[var(--header-h)]">
        <Container>
          <Reveal>
            <p className="eyebrow">{applications.eyebrow}</p>
            <h2 className="h1 mt-5">{applications.headline}</h2>
            <p className="lede mt-5">{applications.copy}</p>
          </Reveal>
        </Container>
      </section>

      <ApplicationsSubnav />

      {audiences.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className="flex min-h-[calc(100svh-var(--header-h)-var(--apps-subnav-h))] scroll-mt-[calc(var(--header-h)+var(--apps-subnav-h))] items-center border-t border-[var(--border-subtle)]"
        >
          <Container className="w-full py-16 md:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
                <div>
                  <p className="text-[12px] tracking-[0.16em] text-[var(--accent)]">{item.index}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">{item.audience}</p>
                  {item.badge ? (
                    <p className="mt-4 inline-flex border border-[var(--border-strong)] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                      {item.badge}
                    </p>
                  ) : null}
                  <h3 className="h2 mt-3">{item.title}</h3>
                  <p className="mt-5 max-w-[42rem] text-[17px] leading-7 text-[var(--text-secondary)]">{item.copy}</p>
                  <Link
                    href={interestHref(item.interest)}
                    className={`btn mt-8 ${item.featured ? "btn-primary" : "btn-secondary"}`}
                  >
                    {item.cta}
                  </Link>
                </div>
                <CapabilityList items={item.items} />
              </div>
            </Reveal>
          </Container>
        </section>
      ))}
    </>
  );
}

function CapabilityList({ items }: { items: readonly string[] }) {
  return (
    <ul className="border-l border-[var(--accent)] pl-6 md:pl-8">
      {items.map((point) => (
        <li
          key={point}
          className="border-b border-[var(--border-subtle)] py-3 text-[15px] text-[var(--text-primary)] last:border-b-0 md:py-4 md:text-[16px]"
        >
          {point}
        </li>
      ))}
    </ul>
  );
}

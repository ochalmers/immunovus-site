import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/content/site";

function StageColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "input" | "model" | "output";
}) {
  const accent =
    tone === "model" ? "border-[var(--accent)] bg-[rgba(117,250,245,0.08)]" : "border-[var(--border-subtle)]";

  return (
    <article className={`panel relative min-h-full p-6 md:p-7 ${accent}`}>
      <h3 className="h4">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{howItWorks.eyebrow}</p>
          <h2 className="h1 mt-5">{howItWorks.headline}</h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <Reveal>
            <StageColumn title={howItWorks.stages[0].title} items={howItWorks.stages[0].items} tone="input" />
          </Reveal>
          <FlowMark />
          <Reveal delay={100}>
            <StageColumn title={howItWorks.stages[1].title} items={howItWorks.stages[1].items} tone="model" />
          </Reveal>
          <FlowMark />
          <Reveal delay={200}>
            <StageColumn title={howItWorks.stages[2].title} items={howItWorks.stages[2].items} tone="output" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function FlowMark() {
  return (
    <div className="flex items-center justify-center py-2 lg:py-0" aria-hidden="true">
      <svg className="h-8 w-16 rotate-90 lg:h-24 lg:w-10 lg:rotate-0" viewBox="0 0 40 120" fill="none">
        <path d="M20 8v104" stroke="#03FFF6" strokeOpacity="0.45" className="flow-path" />
        <circle cx="20" cy="12" r="3" fill="#03FFF6" className="flow-dot" />
        <circle cx="20" cy="60" r="2.2" fill="#03D0CB" className="flow-dot" />
        <circle cx="20" cy="108" r="3" fill="#469693" className="flow-dot" />
      </svg>
    </div>
  );
}

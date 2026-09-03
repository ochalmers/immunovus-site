import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkField } from "@/components/visuals/NetworkField";
import { technology } from "@/content/site";

export function Technology() {
  return (
    <section id="technology" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{technology.eyebrow}</p>
          <h2 className="h1 mt-5">{technology.headline}</h2>
          <p className="mt-3 text-[18px] text-[var(--accent)]">{technology.subheadline}</p>
          <p className="lede mt-5">{technology.copy}</p>
        </Reveal>

        <Reveal className="mt-16 md:mt-20" delay={80}>
          <div className="grid items-stretch gap-3 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1.45fr)]">
            <Rail title="Biological inputs" items={technology.inputs} align="right" />
            <Connector />
            <Engine />
            <Connector />
            <Rail title="What it can inform" items={technology.outputs} align="left" columns={2} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Engine() {
  return (
    <article className="panel relative flex min-h-[24rem] flex-col overflow-hidden border-[var(--border-strong)] p-8 md:min-h-[30rem] md:p-10 lg:min-h-[34rem]">
      <div className="pointer-events-none absolute inset-0 opacity-55" aria-hidden="true">
        <NetworkField idPrefix="tech-engine" className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(117,250,245,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,26,0.2),rgba(14,26,26,0.72))]" />

      <p className="relative text-[12px] uppercase tracking-[0.18em] text-[var(--accent)]">ImmuneID</p>
      <div className="relative flex flex-1 flex-col items-center justify-center text-center">
        <p className="max-w-[16ch] text-[clamp(1.65rem,2.8vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-[var(--white)]">
          {technology.core}
        </p>
        <p className="mx-auto mt-5 max-w-[28ch] text-[15px] leading-6 text-[var(--text-secondary)] md:text-[16px] md:leading-7">
          {technology.coreNote}
        </p>
      </div>
    </article>
  );
}

function Rail({
  title,
  items,
  align,
  columns = 1,
}: {
  title: string;
  items: string[];
  align: "left" | "right";
  columns?: 1 | 2;
}) {
  return (
    <div
      className={`panel flex h-full flex-col p-5 md:p-6 ${align === "right" ? "lg:text-right" : ""}`}
    >
      <p className="text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{title}</p>
      <ul
        className={
          columns === 2
            ? "mt-6 grid flex-1 content-center gap-2 sm:grid-cols-2"
            : "mt-8 flex flex-1 flex-col justify-center gap-3"
        }
      >
        {items.map((item) => (
          <li
            key={item}
            className="w-full rounded-[var(--br-200)] border border-[var(--border-default)] bg-[var(--surface-panel)] px-3 py-2.5 text-[14px] leading-5 text-[var(--text-secondary)] md:text-[15px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
      <svg
        className="h-8 w-20 rotate-90 lg:h-28 lg:w-10 lg:rotate-0"
        viewBox="0 0 40 140"
        fill="none"
      >
        <path
          d="M20 8v124"
          stroke="var(--accent)"
          strokeOpacity="0.45"
          className="flow-path"
        />
        <circle cx="20" cy="12" r="3.2" fill="var(--accent)" className="flow-dot" />
        <circle cx="20" cy="70" r="2.4" fill="var(--cyan-80)" className="flow-dot" />
        <circle cx="20" cy="128" r="3.2" fill="var(--cyan-60)" className="flow-dot" />
      </svg>
    </div>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkField } from "@/components/visuals/NetworkField";
import { company } from "@/content/v1";

export function CompanyOrigin() {
  const { origin } = company;

  return (
    <>
      <section id="company" className="section scroll-mt-[var(--header-h)]">
        <Container>
          <Reveal>
            <p className="eyebrow">{origin.eyebrow}</p>
            <h1 className="h1 mt-6 max-w-[16ch]">{origin.headline}</h1>
            <div className="mt-10 max-w-[38rem] space-y-6 text-[17px] leading-8 text-[var(--text-secondary)]">
              {origin.copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="the-question" className="company-question section scroll-mt-[var(--header-h)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-[-8%] w-[68%] opacity-[0.22] md:w-[58%]">
            <NetworkField idPrefix="company-question" className="h-full w-full" />
          </div>
        </div>
        <Container className="relative">
          <Reveal>
            <p className="eyebrow">{origin.questionEyebrow}</p>
            <h2 className="company-question-statement display mt-8 max-w-[22ch]">{origin.question}</h2>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export function CompanyScience() {
  const { science } = company;

  return (
    <section id="the-science" className="company-beat scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{science.eyebrow}</p>
          <h2 className="h1 mt-5 max-w-[18ch]">{science.headline}</h2>
          <div className="mt-8 max-w-[42rem] space-y-5 text-[17px] leading-8 text-[var(--text-secondary)]">
            {science.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <ol className="science-path mt-16 grid gap-8 md:grid-cols-6 md:gap-4">
          {science.path.map((step, i) => {
            const last = i === science.path.length - 1;
            return (
              <li key={step} className="relative pl-8 md:pl-0 md:pt-10">
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border md:top-0 ${
                    last
                      ? "border-[var(--accent)] bg-[var(--accent)]"
                      : "border-[var(--accent)] bg-[var(--surface-page)]"
                  }`}
                  aria-hidden="true"
                />
                <Reveal delay={i * 60}>
                  <p className="text-[11px] tracking-[0.16em] text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className={`mt-2 text-[16px] leading-6 ${
                      last ? "font-semibold text-[var(--accent)]" : "font-medium text-[var(--text-primary)]"
                    }`}
                  >
                    {step}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export function CompanyDigital() {
  const { digital } = company;

  return (
    <section id="building-the-system" className="company-beat scroll-mt-[var(--header-h)]">
      <Container>
        <div className="company-rule" aria-hidden="true" />
        <Reveal>
          <p className="eyebrow">{digital.eyebrow}</p>
          <h2 className="h1 mt-5 max-w-[20ch]">{digital.headline}</h2>
          <p className="mt-8 max-w-[42rem] text-[17px] leading-8 text-[var(--text-secondary)]">{digital.copy}</p>
        </Reveal>

        <div className="company-evidence mt-12 max-w-[42rem]">
          {digital.references.map((reference) => (
            <a
              key={reference.title}
              href={reference.href}
              target="_blank"
              rel="noopener noreferrer"
              className="company-evidence-item"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                {reference.source}
              </p>
              <h3 className="mt-2 text-[17px] leading-6 font-medium text-[var(--text-primary)]">
                {reference.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-[var(--text-secondary)]">{reference.copy}</p>
              <p className="company-evidence-cta mt-4">
                {reference.cta} <span aria-hidden="true">↗</span>
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CompanyToday() {
  const { today } = company;

  return (
    <section id="immunovus" className="company-beat scroll-mt-[var(--header-h)]">
      <Container>
        <div className="company-rule" aria-hidden="true" />
        <Reveal>
          <p className="eyebrow">{today.eyebrow}</p>
          <h2 className="h1 mt-5 max-w-[18ch]">{today.headline}</h2>
          <div className="mt-8 max-w-[42rem] space-y-5 text-[17px] leading-8 text-[var(--text-secondary)]">
            {today.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

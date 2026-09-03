"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { challenge } from "@/content/site";

function AnimatedValue({
  display,
  numeric,
  suffix,
  active,
}: {
  display: string;
  numeric: number | null;
  suffix: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active || numeric === null) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const id = requestAnimationFrame(() => setN(numeric));
      return () => cancelAnimationFrame(id);
    }
    const start = performance.now();
    const duration = 1100;
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(numeric * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, numeric]);

  if (numeric === null) return <>{display}</>;
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export function Challenge() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="challenge" className="section scroll-mt-[var(--header-h)]">
      <Container>
        <Reveal>
          <p className="eyebrow">{challenge.eyebrow}</p>
          <h2 className="h1 mt-5">{challenge.headline}</h2>
          <p className="lede mt-5">{challenge.copy}</p>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <svg
            className="pointer-events-none relative z-10 mb-4 hidden h-16 w-full md:block"
            viewBox="0 0 1100 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M80 42 C 220 10, 340 70, 520 28 S 820 14, 1020 46"
              stroke="#03FFF6"
              strokeOpacity="0.22"
              fill="none"
              className="flow-path"
            />
            <circle cx="80" cy="42" r="3" fill="#03FFF6" />
            <circle cx="360" cy="48" r="3" fill="#91FBF7" />
            <circle cx="700" cy="22" r="3" fill="#03D0CB" />
            <circle cx="1020" cy="46" r="3" fill="#469693" />
          </svg>

          <div className="relative z-0 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {challenge.stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 90}>
                <p className="font-medium tracking-[-0.04em] text-[clamp(1.65rem,3.4vw,3.25rem)] text-[var(--text-primary)]">
                  <AnimatedValue
                    display={stat.value}
                    numeric={stat.numeric}
                    suffix={stat.suffix}
                    active={active}
                  />
                </p>
                <p className="mt-3 max-w-[18ch] text-[14px] leading-5 text-[var(--text-muted)]">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 max-w-3xl border-l border-[var(--accent)] pl-6 md:pl-8">
          <h3 className="h3">{challenge.problemHeadline}</h3>
          <p className="mt-4 text-[var(--text-secondary)]">{challenge.problemCopy}</p>
        </Reveal>
      </Container>
    </section>
  );
}

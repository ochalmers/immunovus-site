"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export type StatItem = {
  value: string;
  numeric: number | null;
  suffix: string;
  label: string;
};

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

export function StatGrid({ stats }: { stats: readonly StatItem[] }) {
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
    <div ref={ref} className="relative">
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
        {stats.map((stat, i) => (
          <Reveal key={`${stat.value}-${stat.label}`} delay={i * 90}>
            <p className="font-medium tracking-[-0.04em] text-[clamp(1.65rem,3.4vw,3.25rem)] text-[var(--text-primary)]">
              <AnimatedValue
                display={stat.value}
                numeric={stat.numeric}
                suffix={stat.suffix}
                active={active}
              />
            </p>
            <p className="mt-3 max-w-[20ch] text-[14px] leading-5 text-[var(--text-muted)]">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

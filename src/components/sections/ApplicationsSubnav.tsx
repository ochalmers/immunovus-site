"use client";

import { useEffect, useState } from "react";
import { audiences } from "@/content/site";

const labels: Record<(typeof audiences)[number]["id"], string> = {
  discovery: "Drug discovery",
  medicine: "Personalized medicine",
  health: "Immune health",
};

export function ApplicationsSubnav() {
  const [active, setActive] = useState<(typeof audiences)[number]["id"]>(audiences[0].id);

  useEffect(() => {
    const nodes = audiences
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id as (typeof audiences)[number]["id"]);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.4, 0.7],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Applications on this page"
      className="sticky top-[var(--header-h)] z-40 border-y border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--cyan-10)_92%,transparent)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[var(--apps-subnav-h)] w-full max-w-[1180px] items-center overflow-x-auto px-5 sm:px-6 md:px-8">
        <ul className="flex min-w-full items-center gap-1 sm:gap-2">
          {audiences.map((item) => {
            const current = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--br-200)] px-3 py-2 text-[13px] tracking-[0.04em] transition-colors ${
                    current
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  aria-current={current ? "location" : undefined}
                >
                  <span className="text-[11px] text-[var(--accent)]">{item.index}</span>
                  {labels[item.id]}
                  {current ? (
                    <span className="absolute inset-x-3 bottom-1 h-px bg-[var(--accent)]" aria-hidden="true" />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

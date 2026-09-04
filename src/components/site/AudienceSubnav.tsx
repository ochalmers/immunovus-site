"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AudienceSubnav({
  label,
  items,
}: {
  label: string;
  items: readonly { href: string; label: string }[];
}) {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <nav
      aria-label={label}
      className="sticky top-[var(--header-h)] z-40 border-y border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--cyan-10)_92%,transparent)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[var(--apps-subnav-h)] w-full max-w-[1180px] items-center justify-center overflow-x-auto px-5 sm:px-6 md:px-8">
        <ul className="flex items-center justify-center gap-1 sm:gap-2">
          {items.map((item) => {
            const current = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative inline-flex items-center whitespace-nowrap rounded-[var(--br-200)] px-3 py-2 text-[13px] tracking-[0.04em] transition-colors ${
                    current
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                  {current ? (
                    <span className="absolute inset-x-3 bottom-1 h-px bg-[var(--accent)]" aria-hidden="true" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

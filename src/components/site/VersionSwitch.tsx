"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function VersionSwitch() {
  const pathname = usePathname();
  const current = pathname === "/v1" || pathname.startsWith("/v1/") ? "v1" : "v2";

  return (
    <nav
      aria-label="Site version"
      className="pointer-events-auto fixed bottom-3 left-4 z-[60] flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-[var(--text-faint)]"
    >
      <Link
        href="/v1"
        className={`no-underline transition-colors ${
          current === "v1" ? "text-[var(--text-muted)]" : "hover:text-[var(--text-muted)]"
        }`}
        aria-current={current === "v1" ? "page" : undefined}
      >
        V1
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href="/"
        className={`no-underline transition-colors ${
          current === "v2" ? "text-[var(--text-muted)]" : "hover:text-[var(--text-muted)]"
        }`}
        aria-current={current === "v2" ? "page" : undefined}
      >
        V2
      </Link>
    </nav>
  );
}

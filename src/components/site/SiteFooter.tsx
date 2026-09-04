import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footer, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-deep)]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
        <div>
          <Link href="/" aria-label="Immunovus home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-[var(--text-muted)]">{footer.descriptor}</p>
        </div>

        {nav.slice(0, 2).map((group) => (
          <nav key={group.href} aria-label={group.label}>
            <p className="eyebrow mb-4">{group.label}</p>
            <ul className="flex flex-col gap-3">
              {("children" in group ? group.children : [{ href: group.href, label: group.label }]).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/company" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Team
              </Link>
            </li>
            <li>
              <Link href="/company/careers" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Open Positions
              </Link>
            </li>
            <li>
              <Link href="/individuals" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Individuals
              </Link>
            </li>
            <li>
              <a
                href={footer.linkedin}
                className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)]">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 py-5 text-[12px] text-[var(--text-faint)] sm:px-6 md:px-8">
          <span>{footer.copyright}</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

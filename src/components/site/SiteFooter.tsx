import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footer, footerNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-deep)]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.1fr_1fr_0.8fr] md:px-8">
        <div>
          <Link href="/" aria-label="Immunovus home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-[var(--text-muted)]">{footer.descriptor}</p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {footerNav.map((item) => (
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

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="flex flex-col gap-3">
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
              <Link href="/contact" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                Terms
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

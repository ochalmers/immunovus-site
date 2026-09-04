"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { nav } from "@/content/site";

function pathOf(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

function isActive(pathname: string, href: string, children?: readonly { href: string }[]) {
  const path = pathOf(pathname);
  if (children?.length) {
    return children.some((child) => path === child.href || path.startsWith(`${child.href}/`));
  }
  return path === href || path.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [menu, setMenu] = useState<string | null>(null);
  const menuTimer = useRef<number | null>(null);

  function openMenu(href: string) {
    if (menuTimer.current) window.clearTimeout(menuTimer.current);
    setMenu(href);
  }

  function closeMenuSoon() {
    if (menuTimer.current) window.clearTimeout(menuTimer.current);
    menuTimer.current = window.setTimeout(() => setMenu(null), 80);
  }

  function closeMenu() {
    if (menuTimer.current) window.clearTimeout(menuTimer.current);
    setMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setExpanded(null);
        setMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    setMenu(null);
  }, [pathname]);

  const isHome = pathOf(pathname) === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open || !isHome
          ? "border-b border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--cyan-10)_88%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-[1180px] items-center justify-between px-5 sm:px-6 md:px-8">
        <Link href="/" className="relative z-10" aria-label="Immunovus home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href, "children" in item ? item.children : undefined);
            const children = "children" in item ? item.children : undefined;
            if (!children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link mx-3 text-[13px] font-medium tracking-[0.04em] transition-colors ${
                    active
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div
                key={item.href}
                className={`nav-group relative ${menu === item.href ? "is-open" : ""}`}
                onMouseEnter={() => openMenu(item.href)}
                onMouseLeave={closeMenuSoon}
              >
                <Link
                  href={item.href}
                  className={`nav-link inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium tracking-[0.04em] transition-colors ${
                    active
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menu === item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                  <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true">
                    <path
                      d="M2 4l3 3 3-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="nav-menu">
                  <div className="nav-menu-panel">
                    {children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-[var(--br-100)] px-3 py-2 text-[13px] transition-colors ${
                          pathOf(pathname) === child.href
                            ? "text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                        aria-current={pathOf(pathname) === child.href ? "page" : undefined}
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden lg:inline-flex">
            Talk to us
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--br-200)] border border-[var(--border-default)] text-[var(--text-primary)] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 5h12M3 9h12M3 13h8" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-var(--header-h))] overflow-y-auto border-t border-[var(--border-subtle)] bg-[var(--cyan-10)] px-5 py-6 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => {
              const children = "children" in item ? item.children : undefined;
              if (!children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--br-200)] px-2 py-3 text-lg text-[var(--text-primary)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              const shown = expanded === item.href;
              return (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-[var(--br-200)] px-2 py-3 text-left text-lg text-[var(--text-primary)]"
                    aria-expanded={shown}
                    onClick={() => setExpanded(shown ? null : item.href)}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden="true">
                      <path
                        d="M2 4l3 3 3-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {shown ? (
                    <div className="mb-2 ml-3 flex flex-col border-l border-[var(--border-subtle)] pl-3">
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-[15px] text-[var(--text-secondary)]"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link href="/contact" className="btn btn-primary mt-4" onClick={() => setOpen(false)}>
              Talk to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

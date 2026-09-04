import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-split relative isolate grid min-h-[100svh] overflow-hidden lg:grid-cols-2"
    >
      {/* Left: copy pane */}
      <div className="relative z-10 flex flex-col justify-end bg-[var(--cyan-10)] pl-5 pr-3 pb-14 pt-[calc(var(--header-h)+2.5rem)] sm:pl-8 sm:pr-5 sm:pb-16 md:pl-12 md:pr-8 lg:justify-center lg:pb-20 lg:pt-[var(--header-h)] xl:pl-16 xl:pr-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(117,250,245,0.1),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-[36rem] lg:mx-0 lg:max-w-[38rem] xl:max-w-[42rem]">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1
            className="reveal mt-5 font-medium leading-[1.08] tracking-[-0.04em] text-[clamp(2rem,3.4vw,2.95rem)] text-[var(--white)]"
          >
            {hero.headline}
          </h1>
          <p className="lede mt-6 reveal" style={{ animationDelay: "240ms" }}>
            {hero.copy}
          </p>
          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row reveal"
            style={{ animationDelay: "360ms" }}
          >
            <Link href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Seam: deck-style divider */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(117,250,245,0.45)_18%,rgba(117,250,245,0.45)_82%,transparent)] lg:block"
        aria-hidden="true"
      />

      {/* Right: full-bleed image pane */}
      <div className="relative order-first min-h-[46vh] overflow-hidden bg-[var(--cyan-05)] lg:order-none lg:min-h-full">
        <Image
          src="/brand/hero-network.jpg"
          alt="Translucent human form mapped as a glowing immune network"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="hero-image object-cover object-[center_28%] lg:object-center"
        />
        {/* Soft edge blend into the copy pane on large screens */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-[linear-gradient(90deg,var(--cyan-10),transparent)] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,var(--cyan-10))] lg:hidden"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

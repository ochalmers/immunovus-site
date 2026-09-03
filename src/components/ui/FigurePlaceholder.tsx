export function FigurePlaceholder({
  number,
  title,
  caption,
  className = "",
}: {
  number: string;
  title: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`figure-frame ${className}`}>
      <div className="figure-plot" aria-hidden="true" />
      <figcaption className="border-t border-[var(--border-subtle)] px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          Fig. {number}
          <span className="mx-2 text-[var(--text-muted)]">/</span>
          {title}
        </p>
        {caption ? <p className="mt-2 max-w-md text-[13px] leading-5 text-[var(--text-muted)]">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}

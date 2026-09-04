import { askList } from "@/content/site";

export function AskList() {
  return (
    <aside className="panel h-full p-6 md:p-8">
      <h2 className="h4">{askList.headline}</h2>
      <ul className="mt-6 space-y-3">
        {askList.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

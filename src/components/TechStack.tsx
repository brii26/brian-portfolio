import Image from "next/image";

// logos with black brand color, inverted in dark mode
const INVERT = new Set(["nextjs", "vercel", "rust", "express", "linux"]);

export interface Tech {
  name: string;
  slug: string;
}

export default function TechStack({ items }: { items: Tech[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t.name}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2 py-1 text-[11px] font-medium text-muted-foreground"
        >
          <Image
            src={`/skills/${t.slug}.svg`}
            alt={t.name}
            width={12}
            height={12}
            className={`size-3 object-contain ${INVERT.has(t.slug) ? "dark:invert" : ""}`}
          />
          {t.name}
        </span>
      ))}
    </div>
  );
}

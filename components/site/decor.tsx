import { cn } from "@/lib/utils";

const MASKS: Record<string, string | undefined> = {
  tr: "radial-gradient(115% 105% at 100% 0%, #000 0%, transparent 62%)",
  tl: "radial-gradient(115% 105% at 0% 0%, #000 0%, transparent 62%)",
  br: "radial-gradient(115% 105% at 100% 100%, #000 0%, transparent 62%)",
  none: undefined,
};

/**
 * Decorative dot-field background layer (air-gap safe: pure CSS, no assets).
 * Dots use `currentColor`, so set colour + opacity via a text utility on the
 * element (e.g. `text-fg/[0.06]` or `text-accent-fg/20`). Absolutely positioned;
 * give the parent `relative overflow-hidden`.
 */
export function DotField({
  className,
  mask = "tr",
  size = 22,
}: {
  className?: string;
  mask?: keyof typeof MASKS;
  size?: number;
}) {
  const m = MASKS[mask];
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
        maskImage: m,
        WebkitMaskImage: m,
      }}
    />
  );
}

/**
 * Decorative brand-shape motif (the mark's rounded-square + circle language) as
 * a faint background element. Colours come from tokens; keep opacity low.
 */
export function BrandShapes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 457 458"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none", className)}
    >
      <rect
        y="51.7638"
        width="200"
        height="200"
        rx="35"
        transform="rotate(-15 0 51.7638)"
        className="fill-fg opacity-[0.04]"
      />
      <rect x="32" y="258" width="200" height="200" rx="35" className="fill-fg opacity-[0.04]" />
      <rect x="257" y="38" width="200" height="200" rx="25" className="fill-fg opacity-[0.04]" />
      <rect x="257" y="258" width="200" height="200" rx="100" className="fill-accent opacity-[0.10]" />
    </svg>
  );
}

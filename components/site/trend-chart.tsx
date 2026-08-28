import { cn } from "@/lib/utils";

export type ChartPoint = { label: string; value: number };

/**
 * Minimal responsive trend chart. PRIZM ships no chart primitive, so this is an
 * app-level SVG line chart — air-gap safe (no external lib) and theme-aware
 * (accent line + faint accent area via tokens).
 */
export function TrendChart({
  data,
  className,
  ariaLabel = "Trend over time",
}: {
  data: ChartPoint[];
  className?: string;
  ariaLabel?: string;
}) {
  const W = 320;
  const H = 132;
  const padX = 6;
  const padTop = 12;
  const padBottom = 10;
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = (W - padX * 2) / Math.max(1, data.length - 1);
  const pts = data.map((d, i) => ({
    x: padX + i * stepX,
    y: padTop + (1 - (d.value - min) / range) * (H - padTop - padBottom),
  }));
  const line = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
  const last = pts[pts.length - 1];
  const area = `${line} L${last.x.toFixed(1)},${H - padBottom} L${pts[0].x.toFixed(1)},${
    H - padBottom
  } Z`;

  return (
    <div className={cn("w-full", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full text-accent"
        role="img"
        aria-label={ariaLabel}
      >
        {/* baseline */}
        <line
          x1={padX}
          x2={W - padX}
          y1={H - padBottom}
          y2={H - padBottom}
          className="stroke-border"
          strokeWidth="1"
        />
        <path d={area} className="fill-accent opacity-[0.10]" />
        <path
          d={line}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx={last.x} cy={last.y} r="3.5" className="fill-accent" />
      </svg>
      <div className="mt-1 flex justify-between text-xs text-fg-subtle">
        <span>{data[0]?.label}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>
    </div>
  );
}

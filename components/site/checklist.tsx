import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Static checklist with marker icons (spec §11). Used for criteria and
 * "what's included" lists where the items are informational, not interactive.
 * For an interactive self-check (spec §7), pair PRIZM's Checkbox with labels.
 */
export function Checklist({
  items,
  columns = 1,
  className,
}: {
  items: ReactNode[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        columns === 2 ? "grid gap-3 sm:grid-cols-2 sm:gap-x-8" : "flex flex-col gap-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[oklch(72.3%_0.219_149.58_/_0.15)] text-success"
            aria-hidden
          >
            <Check className="h-3.5 w-3.5" />
          </span>
          <Text size="sm" variant="muted" as="span">
            {item}
          </Text>
        </li>
      ))}
    </ul>
  );
}

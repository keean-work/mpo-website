import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { LineChart } from "lucide-react";

/**
 * Placeholder for a product scorecard trend chart. PRIZM ships no chart
 * primitive, and scorecard data is not yet confirmed (spec §14), so this is a
 * labelled container standing in for the responsive trend chart (spec §8) until
 * real data and a charting approach are wired in. Air-gap safe (no external lib).
 */
export function ChartPlaceholder({
  label = "Trend chart",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder. Data to be confirmed.`}
      className={cn(
        "flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-strong bg-bg-muted/40 p-6 text-center",
        className,
      )}
    >
      <LineChart className="h-6 w-6 text-fg-subtle" aria-hidden />
      <Text size="sm" variant="subtle" as="span">
        {label} placeholder
      </Text>
      <Text size="xs" variant="subtle" as="span">
        Trend data to be confirmed
      </Text>
    </div>
  );
}

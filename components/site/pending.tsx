import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

/**
 * Inline marker for content the spec flags as "[confirm]" / not yet approved
 * (spec §14, §16). Keeps unconfirmed fields visible and honest rather than
 * inventing organisational details, outcomes, or descriptions.
 */
export function Pending({
  children = "To be confirmed",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm bg-bg-muted px-1.5 py-0.5 text-xs font-medium text-fg-subtle",
        className,
      )}
    >
      <Info className="h-3 w-3" aria-hidden />
      {children}
    </span>
  );
}

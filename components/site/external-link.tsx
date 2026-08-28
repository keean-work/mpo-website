import { cn } from "@/lib/utils";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { ComponentProps } from "react";

/**
 * External-link treatment (spec §11, §6 "External link behaviour"):
 * opens in a new tab, carries a consistent external-link icon, and includes
 * accessible text stating the link opens in a new tab. Matches the PRIZM Link
 * accent styling (reused class string) but renders a plain <a> for off-site URLs.
 */
export function ExternalLink({
  className,
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-accent underline-offset-4 transition-colors hover:underline",
        "focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-accent",
        className,
      )}
      {...props}
    >
      {children}
      <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

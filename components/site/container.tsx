import { Frame } from "@/components/ui/frame";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/**
 * Horizontal content-width constraint for the site.
 * Spec §2: max content width between 1200px and 1440px. We target 1200px.
 * Wraps PRIZM's Frame (width constraint only; padding handled here so header /
 * footer / sections don't inherit Frame's coupled vertical padding).
 */
export function Container({
  className,
  ...props
}: ComponentProps<typeof Frame>) {
  return (
    <Frame
      maxWidth="full"
      padding="none"
      className={cn("mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

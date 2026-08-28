import { type ButtonProps, buttonVariants } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/**
 * Internal navigation link styled as a PRIZM button, using the exported
 * buttonVariants (anchor-as-button). Use for calls to action that navigate.
 * `fullWidth` supports the mobile rule (spec §2: full-width primary actions).
 */
export function ActionLink({
  href,
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  fullWidth?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size }),
        // Allow long CTA labels to wrap on narrow screens instead of forcing
        // horizontal overflow (buttonVariants sets whitespace-nowrap by default).
        "h-auto min-h-11 whitespace-normal py-2 text-center no-underline hover:no-underline",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

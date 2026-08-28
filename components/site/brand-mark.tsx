import { cn } from "@/lib/utils";

/**
 * MPO brand mark. Inline SVG (air-gap safe, crisp at any size). Fixed brand
 * colours by design, so it reads consistently across light and dark themes.
 * Decorative — pair with a text label for the accessible name.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 457 458"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect
        y="51.7638"
        width="200"
        height="200"
        rx="35"
        transform="rotate(-15 0 51.7638)"
        fill="#CAD5E2"
      />
      <rect x="32" y="258" width="200" height="200" rx="35" fill="#CAD5E2" />
      <rect x="257" y="38" width="200" height="200" rx="25" fill="#CAD5E2" />
      <rect x="257" y="258" width="200" height="200" rx="100" fill="#1447E6" />
    </svg>
  );
}

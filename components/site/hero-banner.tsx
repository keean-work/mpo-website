import { Container } from "@/components/site/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Full-bleed hero banner (Home). The background spans the full viewport width;
 * copy and actions stay left-aligned within the content container. The background
 * is a vendored SVG (public/images/hero-banner.svg, air-gap safe), anchored right
 * so the decorative shapes sit clear of the copy.
 */
export function HeroBanner({
  eyebrow,
  title,
  body,
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-bg-subtle",
        className,
      )}
    >
      {/* Banner artwork (vendored SVG), desktop only — it's a wide composition,
          so on narrow screens the shapes would crowd the copy. Cover-fills the
          band, anchored right so the shapes stay clear of the left copy. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-banner.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full object-cover object-right lg:block"
      />

      {/* Left-to-right scrim so the left-aligned copy stays legible over the
          artwork; fades to transparent on the right where the shapes sit. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-subtle) 0%, color-mix(in oklch, var(--color-bg-subtle) 82%, transparent) 38%, transparent 66%)",
        }}
      />

      {/* Mobile / tablet: a faint accent glow instead of the wide artwork. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
        style={{
          background:
            "radial-gradient(70% 55% at 100% 0%, color-mix(in oklch, var(--color-accent) 9%, transparent), transparent 70%)",
        }}
      />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="flex max-w-2xl flex-col gap-5">
          {eyebrow ? (
            <Text
              size="sm"
              weight="medium"
              className="uppercase tracking-wide text-accent"
            >
              {eyebrow}
            </Text>
          ) : null}
          <Heading as="h1" size="4xl" className="text-balance text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </Heading>
          {body ? (
            <Text size="lg" variant="muted" className="max-w-prose">
              {body}
            </Text>
          ) : null}
          {actions ? (
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

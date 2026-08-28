import { Container } from "@/components/site/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Page hero (spec §11). Two-column on desktop when a `visual` is provided
 * (copy + actions left, visual right); single column, stacked, on mobile.
 * `top` renders above the heading (used for breadcrumbs on interior pages).
 */
export function Hero({
  eyebrow,
  title,
  body,
  actions,
  visual,
  top,
  banner,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  top?: ReactNode;
  /** Vendored SVG src (public/images/…) rendered full-bleed behind the copy. */
  banner?: string;
  className?: string;
}) {
  const twoCol = Boolean(visual);
  return (
    <section
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        banner &&
          "relative isolate overflow-hidden border-b border-border bg-bg-subtle",
        className,
      )}
    >
      {banner ? (
        <>
          {/* Banner artwork (vendored SVG), desktop only — a wide composition
              anchored right so the shapes stay clear of the left copy. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner}
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
        </>
      ) : null}
      <Container className={cn(banner && "relative")}>
        {top ? <div className="mb-8">{top}</div> : null}
        <div
          className={cn(
            "grid items-center gap-10",
            twoCol && "lg:grid-cols-2 lg:gap-16",
          )}
        >
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
            <Heading
              as="h1"
              size="4xl"
              className="text-balance text-3xl sm:text-4xl"
            >
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
          {twoCol ? <div className="w-full">{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}

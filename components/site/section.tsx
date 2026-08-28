import { Container } from "@/components/site/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Vertical page section with the standard content-width container.
 * `tone="muted"` gives an alternating subtle background band.
 */
export function Section({
  children,
  className,
  tone = "default",
  as: Tag = "section",
  ...props
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted";
  as?: "section" | "div";
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      className={cn(
        "py-12 sm:py-16",
        tone === "muted" && "bg-bg-subtle",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </Tag>
  );
}

/**
 * Section heading block: optional eyebrow, a heading, and optional description.
 * Sentence case is a content rule (spec §3) — enforced by the copy, not styling.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-3", className)}>
      {eyebrow ? (
        <Text
          size="sm"
          weight="medium"
          className="uppercase tracking-wide text-accent"
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading as={as} size="3xl">
        {title}
      </Heading>
      {description ? (
        <Text size="lg" variant="muted">
          {description}
        </Text>
      ) : null}
    </div>
  );
}

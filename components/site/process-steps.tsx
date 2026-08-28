import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ProcessStep = {
  title: string;
  description: ReactNode;
};

/**
 * Numbered process steps (spec §11). Horizontal when space allows (desktop),
 * vertical numbered sequence on mobile (spec §2 shared component behaviour).
 * Each step is numbered so the sequence is clear without relying on layout.
 */
export function ProcessSteps({
  steps,
  className,
}: {
  steps: ProcessStep[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "grid gap-6",
        "md:grid-flow-col md:auto-cols-fr",
        className,
      )}
    >
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 md:flex-col md:gap-3">
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg"
              aria-hidden
            >
              {i + 1}
            </span>
            <span
              className="mt-2 w-px flex-1 bg-border md:mt-0 md:h-px md:w-full"
              aria-hidden
            />
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <Heading as="h3" size="md">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </Heading>
            <Text size="sm" variant="muted">
              {step.description}
            </Text>
          </div>
        </li>
      ))}
    </ol>
  );
}

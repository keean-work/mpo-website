import { Container } from "@/components/site/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Call-to-action banner (spec §11). Used for a page's closing action —
 * "each page should end with one clear next step" (spec §11).
 */
export function CtaBanner({
  title,
  body,
  action,
  className,
}: {
  title: string;
  body?: ReactNode;
  action: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-12 sm:py-16", className)}>
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-bg-subtle p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <Heading as="h2" size="2xl">
              {title}
            </Heading>
            {body ? (
              <Text size="md" variant="muted">
                {body}
              </Text>
            ) : null}
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {action}
          </div>
        </div>
      </Container>
    </section>
  );
}

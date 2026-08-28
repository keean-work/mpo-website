import { ExternalLink } from "@/components/site/external-link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ToolPanelData = {
  id: string;
  name: string;
  /** Practice phase the tool serves, shown as an eyebrow (e.g. "Research"). */
  phase: string;
  description: ReactNode;
  /** Optional availability or status note (e.g. "not released yet"). */
  note?: ReactNode;
  /** External link to the tool. Opens in a new tab. */
  href: string;
};

/**
 * Platform / tool panel (spec §9). Shows the tool's practice phase, name,
 * description and a link to visit it. Content is sourced from Spectrum
 * (spectrum-dsta.vercel.app), the platform these tools belong to.
 */
export function ToolPanel({ tool, className }: { tool: ToolPanelData; className?: string }) {
  return (
    <Card id={tool.id} className={cn("flex h-full flex-col scroll-mt-24", className)}>
      <CardHeader className="gap-2">
        <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
          {tool.phase}
        </Text>
        <CardTitle className="text-xl">{tool.name}</CardTitle>
        <Text variant="muted">{tool.description}</Text>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        {tool.note ? (
          <Text size="sm" variant="subtle">
            {tool.note}
          </Text>
        ) : null}
        <ExternalLink
          href={tool.href}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-fit no-underline hover:no-underline",
          )}
        >
          Visit {tool.name}
        </ExternalLink>
      </CardContent>
    </Card>
  );
}

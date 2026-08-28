import { ActionLink } from "@/components/site/action-link";
import { Pending } from "@/components/site/pending";
import { StatusBadge, type StatusLabel } from "@/components/site/status-badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type Tool = {
  name: string;
  category?: string;
  /** Approved one/two-sentence purpose. Omit when not yet confirmed. */
  purpose?: ReactNode;
  status?: StatusLabel;
  actionLabel?: string;
  href: string;
};

/**
 * Platform / tool card (spec §9, §11). Only renders an approved purpose;
 * unconfirmed descriptions show a "To be confirmed" marker (spec §9:
 * "Do not infer the platform's purpose from its name").
 */
export function ToolCard({ tool, className }: { tool: Tool; className?: string }) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle>{tool.name}</CardTitle>
          {tool.status ? <StatusBadge status={tool.status} /> : null}
        </div>
        {tool.category ? (
          <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
            {tool.category}
          </Text>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <Text size="sm" variant="muted">
          {tool.purpose ?? <Pending>Description to be confirmed</Pending>}
        </Text>
      </CardContent>
      <CardFooter className="pt-0">
        <ActionLink href={tool.href} variant="outline" size="sm">
          {tool.actionLabel ?? `Explore ${tool.name}`}
        </ActionLink>
      </CardFooter>
    </Card>
  );
}

import { ActionLink } from "@/components/site/action-link";
import { Pending } from "@/components/site/pending";
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

export type ToolField = { label: string; value?: ReactNode };

export type ToolPanelData = {
  id: string;
  name: string;
  category: string;
  /** Approved description. Omit when not yet confirmed (spec §9). */
  description?: ReactNode;
  fields: ToolField[];
};

/**
 * Detailed platform / tool panel (spec §9). Shows an approved description and
 * the required-content fields. Unconfirmed descriptions and fields render as
 * "To be confirmed" (spec §9: "Do not infer the platform's purpose from its
 * name"). Access links and support contacts are not yet confirmed (spec §14),
 * so the action routes to Contact for access rather than an invented URL.
 */
export function ToolPanel({ tool, className }: { tool: ToolPanelData; className?: string }) {
  return (
    <Card id={tool.id} className={cn("scroll-mt-24", className)}>
      <CardHeader className="gap-2">
        <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
          {tool.category}
        </Text>
        <CardTitle className="text-xl">{tool.name}</CardTitle>
        <Text variant="muted">
          {tool.description ?? <Pending>Description to be confirmed</Pending>}
        </Text>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-4 sm:grid-cols-2">
          {tool.fields.map((field) => (
            <div key={field.label} className="flex flex-col gap-0.5">
              <dt>
                <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
                  {field.label}
                </Text>
              </dt>
              <dd>
                <Text size="sm" variant="muted" as="span">
                  {field.value ?? <Pending />}
                </Text>
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter>
        <ActionLink href="/contact" variant="outline" size="sm">
          Contact MPO for access
        </ActionLink>
      </CardFooter>
    </Card>
  );
}

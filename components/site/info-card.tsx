import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CardAction = { label: string; href: string };

/**
 * Audience / task / quality card (spec §11). A PRIZM Card with a title,
 * description, and one or more action links. Deliberately typographic — no
 * decorative icon tiles.
 */
export function InfoCard({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description: ReactNode;
  action?: CardAction | CardAction[];
  className?: string;
}) {
  const actions = action ? (Array.isArray(action) ? action : [action]) : [];
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <Text size="sm" variant="muted">
          {description}
        </Text>
        {actions.length ? (
          <div className="mt-auto flex flex-col gap-2">
            {actions.map((a) => (
              <Link
                key={a.href + a.label}
                href={a.href}
                className="inline-flex items-center gap-1 text-sm font-medium no-underline hover:underline"
              >
                {a.label}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

import { ActionLink } from "@/components/site/action-link";
import { Pending } from "@/components/site/pending";
import { ProductStatusBadge, type ProductStatus } from "@/components/site/status-badge";
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

export type Product = {
  name: string;
  status?: ProductStatus;
  /** Optional fields — omit any not yet sourced from an approved scorecard. */
  description?: ReactNode;
  problem?: ReactNode;
  userGroup?: ReactNode;
  onePagerHref: string;
  scorecardHref?: string;
};

function MetaField({ label, value }: { label: string; value?: ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <Text
        size="xs"
        weight="semibold"
        as="span"
        className="uppercase tracking-wide text-accent"
      >
        {label}
      </Text>
      <Text size="sm" as="span" className="text-fg-muted">
        {value ?? <Pending />}
      </Text>
    </div>
  );
}

/**
 * Product card (spec §4, §8). Leads with what the product does, then the problem
 * and user group as meta. Fields not yet sourced render as a "To be confirmed"
 * marker rather than invented copy (spec §4).
 */
export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        {product.status ? <ProductStatusBadge status={product.status} /> : null}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {/* What the product does — the lead */}
        <Text size="sm" as="p" className="leading-relaxed text-fg">
          {product.description ?? <Pending />}
        </Text>
        <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
          <MetaField label="Problem" value={product.problem} />
          <MetaField label="User group" value={product.userGroup} />
        </div>
      </CardContent>
      <CardFooter className="gap-3 pt-0">
        <ActionLink href={product.onePagerHref} variant="outline" size="sm">
          View one-pager
        </ActionLink>
        {product.scorecardHref ? (
          <ActionLink href={product.scorecardHref} variant="ghost" size="sm">
            View scorecard
          </ActionLink>
        ) : null}
      </CardFooter>
    </Card>
  );
}

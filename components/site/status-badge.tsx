import { Badge, type BadgeProps } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  FlaskConical,
  Lock,
} from "lucide-react";
import type { ComponentType } from "react";

/**
 * Status labels (spec §12). Each maps to a PRIZM Badge variant AND a distinct
 * icon so status is never communicated by colour alone (spec §12 requirement).
 */
export type StatusLabel =
  | "Available"
  | "Pilot"
  | "Coming soon"
  | "External resource"
  | "Internal access required"
  | "Template";

const STATUS_MAP: Record<
  StatusLabel,
  { variant: BadgeProps["variant"]; icon: ComponentType<{ className?: string }> }
> = {
  Available: { variant: "success", icon: CheckCircle2 },
  Pilot: { variant: "info", icon: FlaskConical },
  "Coming soon": { variant: "subtle", icon: Clock },
  "External resource": { variant: "outline", icon: ExternalLink },
  "Internal access required": { variant: "warning", icon: Lock },
  Template: { variant: "subtle", icon: FileText },
};

export function StatusBadge({ status }: { status: StatusLabel }) {
  const { variant, icon: Icon } = STATUS_MAP[status];
  return (
    <Badge variant={variant}>
      <Icon className="h-3 w-3" aria-hidden />
      {status}
    </Badge>
  );
}

/**
 * Product lifecycle status (spec §12). The text label carries the meaning, so
 * status is never communicated by colour alone — no icon needed.
 */
export type ProductStatus = "Active" | "Maintenance" | "Coming soon";

const PRODUCT_STATUS_MAP: Record<ProductStatus, BadgeProps["variant"]> = {
  Active: "success",
  Maintenance: "warning",
  "Coming soon": "subtle",
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  return <Badge variant={PRODUCT_STATUS_MAP[status]}>{status}</Badge>;
}

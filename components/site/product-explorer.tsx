"use client";

import { Pending } from "@/components/site/pending";
import { ProductThumbCard, type ProductThumb } from "@/components/site/product-thumb-card";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import {
  IdCard,
  LayoutGrid,
  Stethoscope,
  TowerControl,
  Truck,
  Users,
} from "lucide-react";
import { type ComponentType, useState } from "react";

type Category = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

// Categories mirror the PULSE report-card portal (pulse-reportcards.vercel.app).
const CATEGORIES: Category[] = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "command-and-control", label: "Command and Control", icon: TowerControl },
  { id: "national-service", label: "National Service", icon: IdCard },
  { id: "human-resource", label: "Human Resource", icon: Users },
  { id: "medical", label: "Medical", icon: Stethoscope },
  { id: "logistics", label: "Logistics", icon: Truck },
];

/**
 * Products index with a category filter matching PULSE. "All" shows every
 * product; each other tab filters to products in that category.
 */
export function ProductExplorer({ products }: { products: ProductThumb[] }) {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="overflow-x-auto border-b border-border">
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="flex gap-1 lg:justify-center"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const selected = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "flex min-w-28 shrink-0 flex-col items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                  "focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  selected
                    ? "border-accent text-accent"
                    : "border-transparent text-fg-muted hover:text-fg",
                )}
              >
                <Icon className="h-6 w-6" aria-hidden />
                <span className="text-center leading-tight">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProductThumbCard key={p.name} product={p} />
        ))}
        {active === "all" ? (
          <Card className="flex h-full items-center justify-center border-dashed">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Text weight="medium">Additional products</Text>
              <Pending>More products to be added</Pending>
            </CardContent>
          </Card>
        ) : visible.length === 0 ? (
          <div className="col-span-full py-12 text-center">
            <Text variant="muted">No products in this category yet.</Text>
          </div>
        ) : null}
      </div>
    </div>
  );
}

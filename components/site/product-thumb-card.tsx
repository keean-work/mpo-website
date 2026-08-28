import { BrandMark } from "@/components/site/brand-mark";
import { asset } from "@/lib/asset";
import { ProductStatusBadge, type ProductStatus } from "@/components/site/status-badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import type { ReactNode } from "react";

export type ProductThumb = {
  name: string;
  status?: ProductStatus;
  description?: ReactNode;
  href: string;
  image?: { src: string; alt: string };
};

/**
 * Product card used on the Products index (spec §8). A visual thumbnail on top,
 * then the product name and a short description. The whole card links to the
 * product one-pager. Products without an image show a branded placeholder.
 */
export function ProductThumbCard({ product }: { product: ProductThumb }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0 transition-shadow hover:shadow-md">
      <a href={product.href} className="flex h-full flex-col no-underline">
        <div className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg-muted">
          {product.image ? (
            <img
              src={asset(product.image.src)}
              alt={product.image.alt}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-muted to-bg-subtle">
              <BrandMark className="h-16 w-16 opacity-40" />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-6">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="text-xl">{product.name}</CardTitle>
            {product.status ? <ProductStatusBadge status={product.status} /> : null}
          </div>
          <Text size="sm" as="p" className="leading-relaxed text-fg-muted">
            {product.description ?? "Details to be confirmed."}
          </Text>
        </div>
      </a>
    </Card>
  );
}

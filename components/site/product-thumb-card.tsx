import { BrandMark } from "@/components/site/brand-mark";
import { asset } from "@/lib/asset";
import { ProductStatusBadge, type ProductStatus } from "@/components/site/status-badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import NextLink from "next/link";
import type { ReactNode } from "react";

export type ProductThumb = {
  name: string;
  status?: ProductStatus;
  description?: ReactNode;
  href: string;
  image?: { src: string; alt: string };
  /** When true, the card opens its href in a new tab (external report card). */
  external?: boolean;
};

/**
 * Product card used on the Products index (spec §8). A visual thumbnail on top,
 * then the product name and a short description. The whole card links to the
 * product's report card (external products open in a new tab). Products without
 * an image show a branded placeholder.
 */
export function ProductThumbCard({ product }: { product: ProductThumb }) {
  const linkClass = "flex h-full flex-col no-underline";
  const inner = (
    <>
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
    </>
  );

  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0 transition-shadow hover:shadow-md">
      {product.external ? (
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {inner}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <NextLink href={product.href} className={linkClass}>
          {inner}
        </NextLink>
      )}
    </Card>
  );
}

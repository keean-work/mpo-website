import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Pending } from "@/components/site/pending";
import { ProductReport } from "@/components/site/product-report";
import { Section } from "@/components/site/section";
import { ProductStatusBadge } from "@/components/site/status-badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { ProductInfo } from "@/lib/products";
import { Info } from "lucide-react";

/**
 * Product detail page (spec §8) — Overview / Scorecard / Updates, modelled on an
 * open.gov.sg report. The header stays honest (name, status, summary as a
 * confirm-item); the report figures and updates are illustrative sample data,
 * flagged by the notice below (spec §14).
 */
export function ProductOnePager({ product }: { product: ProductInfo }) {
  return (
    <Section as="div">
      <Breadcrumbs
        items={[{ label: "Products", href: "/products" }, { label: product.name }]}
      />
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Product name and status */}
          <Heading as="h1" size="4xl" className="text-3xl sm:text-4xl">
            {product.name}
          </Heading>
          {product.status ? <ProductStatusBadge status={product.status} /> : null}
        </div>
        {/* One-sentence summary */}
        <Text size="lg" variant="muted" className="max-w-2xl">
          {product.profile?.summary ?? (
            <Pending>One-sentence summary to be confirmed</Pending>
          )}
        </Text>
      </div>

      {/* Illustrative-report notice — only where the report is purely sample data */}
      {product.profile?.provisional ? null : (
        <Alert className="mt-8">
          <Info aria-hidden />
          <AlertTitle>Illustrative report</AlertTitle>
          <AlertDescription>
            The figures, charts and updates below are illustrative sample data to
            demonstrate the report layout. Approved {product.name} metrics and
            content are a confirm-item and still to be finalised.
          </AlertDescription>
        </Alert>
      )}

      <div id="scorecard" className="mt-8 scroll-mt-24">
        <ProductReport product={product} />
      </div>
    </Section>
  );
}

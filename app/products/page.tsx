import { ActionLink } from "@/components/site/action-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { CtaBanner } from "@/components/site/cta-banner";
import { Hero } from "@/components/site/hero";
import { Pending } from "@/components/site/pending";
import { ProductThumbCard, type ProductThumb } from "@/components/site/product-thumb-card";
import { Section, SectionHeading } from "@/components/site/section";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PRODUCTS } from "@/lib/products";
import { Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "MPO's product portfolio, presented through product scorecards and concise one-pagers.",
};

const SCORECARD_FIELDS = [
  "Product name",
  "Problem statement",
  "Primary user group",
  "Value metric",
  "Outcome metric",
  "Baseline",
  "Current result",
  "Target",
  "Trend",
  "Reporting period",
  "Annual product cost, if appropriate",
  "Value-Cost Ratio, if appropriate",
  "Key learning or decision",
];

const ONE_PAGER_FIELDS = [
  "Product name and status",
  "One-sentence summary",
  "User problem",
  "Primary users",
  "How the product helps",
  "Value and outcome metrics",
  "Evidence or progress",
  "Current focus",
  "Product owner or contact",
  "Related tools or playbook guidance",
];

const PRODUCT_CARDS: ProductThumb[] = PRODUCTS.map((p) => ({
  name: p.name,
  status: p.status,
  description: p.profile?.cardDescription,
  href: `/products/${p.slug}`,
  image: p.profile?.image,
}));

export default function ProductsPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "Products" }]} />}
        title="Products supported by MPO"
        body="Explore the user problems these products address, who they serve and how their outcomes are tracked."
        banner="/images/products-banner.svg"
      />

      {/* Portfolio introduction */}
      <Section tone="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CARDS.map((p) => (
            <ProductThumbCard key={p.name} product={p} />
          ))}
          {/* Additional products (spec §8 placeholder) */}
          <Card className="flex h-full items-center justify-center border-dashed">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Text weight="medium">Additional products</Text>
              <Pending>More products to be added</Pending>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Product scorecards */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            title="Product scorecards"
            description="Product scorecards track whether a product is improving the outcome it was created to address. They should show the baseline, current result, target and reporting period."
          />
          <div className="flex flex-col gap-4">
            <Text size="sm" weight="medium">
              A scorecard shows
            </Text>
            <Checklist columns={2} items={SCORECARD_FIELDS} />
            <Alert>
              <Info aria-hidden />
              <AlertDescription>
                Scorecards do not use a single overall score without showing what
                it is based on.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Section>

      {/* Product one-pagers */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            title="Product one-pagers"
            description="Each product one-pager follows the same structure so teams can compare products quickly."
          />
          <div className="flex flex-col gap-4">
            <Checklist items={ONE_PAGER_FIELDS} />
            <Card>
              <CardContent className="p-5">
                <Heading as="h3" size="md" className="mb-2">
                  Copy pattern
                </Heading>
                <Text size="sm" variant="muted">
                  [Product] helps [specific user group] complete [important task]
                  with less [delay, uncertainty or manual work]. The team tracks
                  [value metric] to determine whether the problem is improving.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Have a product problem to raise?"
        body="Tell MPO about the users affected and the outcome you want to improve."
        action={
          <ActionLink href="/contact" size="lg" fullWidth>
            Contact MPO
          </ActionLink>
        }
      />
    </>
  );
}

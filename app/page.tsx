import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { BrandShapes, DotField } from "@/components/site/decor";
import { ExternalLink } from "@/components/site/external-link";
import { GravityShapes } from "@/components/site/gravity-shapes";
import { HeroBanner } from "@/components/site/hero-banner";
import { InfoCard } from "@/components/site/info-card";
import { ProcessSteps } from "@/components/site/process-steps";
import { ProductCard, type Product } from "@/components/site/product-card";
import { Section, SectionHeading } from "@/components/site/section";
import { ToolCard, type Tool } from "@/components/site/tool-card";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PLAYBOOK_URL } from "@/lib/nav";
import { PRODUCTS } from "@/lib/products";

// The five areas the Defence Product Playbook covers (labels match the Product
// Development page). Used as a compact visual preview of the playbook.
const PLAYBOOK_AREAS = [
  "Define the users, problem and value",
  "Structure the product team and delivery model",
  "Plan, test and deliver",
  "Modernise existing products",
  "Govern and review products",
];

const SUPPORT_AREAS = [
  {
    title: "Define the problem",
    description:
      "Identify who is affected, what is getting in their way and why it matters.",
  },
  {
    title: "Test the approach",
    description:
      "Check key assumptions with users before committing to a full build.",
  },
  {
    title: "Measure the outcome",
    description:
      "Track whether the product is improving the user or operational outcome.",
  },
];

const AUDIENCES = [
  {
    title: "Organisation leaders",
    description:
      "Understand how product teams are set up, supported and reviewed.",
    action: { label: "Learn about MPO", href: "/about" },
  },
  {
    title: "Ops Managers",
    description:
      "Learn how to frame a problem, define success and guide product decisions.",
    action: { label: "Learn about product practice", href: "/product-development" },
  },
  {
    title: "Product, design and engineering teams",
    description: "Find guidance, platforms and tools for product work.",
    action: [
      { label: "Browse platforms and tools", href: "/platform-tools" },
      { label: "Explore product development", href: "/product-development" },
    ],
  },
];

// Featured products. Card fields come from each product's profile where known
// (URMS has a provisional public-information profile); otherwise they render as
// "To be confirmed" (spec §14).
const FEATURED_PRODUCTS: Product[] = PRODUCTS.map((p) => ({
  name: p.name,
  status: p.status,
  description: p.profile?.cardDescription,
  problem: p.profile?.cardProblem,
  userGroup: p.profile?.cardUserGroup,
  onePagerHref: `/products/${p.slug}`,
  scorecardHref: `/products/${p.slug}#scorecard`,
}));

// Featured platforms and tools, sourced from Spectrum (the product-practice
// platform these tools belong to). See /platform-tools for the full set.
const FEATURED_TOOLS: Tool[] = [
  {
    name: "CLARA",
    category: "All phases",
    purpose:
      "Reads your programme's knowledge base and drafts research, design and test artefacts, with every claim cited back to its source.",
    href: "/platform-tools#clara",
  },
  {
    name: "PRIZM",
    category: "Design",
    purpose:
      "A design system of 44 components for command-and-control and enterprise web interfaces, written so an AI assistant can build screens from existing parts.",
    href: "/platform-tools#prizm",
  },
  {
    name: "DASH",
    category: "Measure",
    purpose:
      "Records your product's metrics against a baseline, and its AI explains what the data points to and where to improve.",
    href: "/platform-tools#dash",
  },
  {
    name: "BEACON",
    category: "Portal",
    purpose:
      "Explains how research, design and measurement fit together, lists every tool and how to access it, and answers questions about the practice.",
    href: "/platform-tools#beacon",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner
        title="Build digital products around real user needs."
        body="MPO helps MINDEF teams define software problems, test possible solutions and develop products with clear outcomes."
        actions={
          <>
            <ActionLink href="/products" size="lg">
              Our products
            </ActionLink>
            <ActionLink href="/product-development" variant="outline" size="lg">
              How we build
            </ActionLink>
          </>
        }
      />

      {/* What MPO does */}
      <Section tone="muted">
        <SectionHeading
          title="What MPO does"
          description="MPO works with teams on software problems that need user research, product direction or a different delivery approach. We help teams clarify the problem, identify how success will be measured and decide what to test or build next."
        />
        <div className="mt-10">
          <ProcessSteps steps={SUPPORT_AREAS} />
        </div>
      </Section>

      {/* Who this website is for — cards in a row */}
      <Section className="relative overflow-hidden">
        <DotField className="text-fg/[0.05]" mask="tr" />
        <div className="relative">
          <SectionHeading
            title="Who this website is for"
            description="Find the starting point that matches your role."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <InfoCard
                key={a.title}
                title={a.title}
                description={a.description}
                action={a.action}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Explore the Product Playbook — feature band with a "what it covers" visual */}
      <Section tone="muted" className="relative overflow-hidden">
        <BrandShapes className="absolute -right-16 -top-20 hidden h-80 w-80 lg:block" />
        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Product development"
              title="A practical guide to product development"
              description="The Defence Product Playbook explains how to define the right problem, structure a product team, test assumptions and review whether a product is delivering value."
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink href="/product-development" size="lg">
                View the playbook overview
              </ActionLink>
              <ExternalLink
                href={PLAYBOOK_URL}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-bg px-6 text-base font-medium text-fg no-underline hover:bg-bg-muted hover:no-underline"
              >
                Open the full playbook
              </ExternalLink>
            </div>
          </div>
          <Card className="bg-surface">
            <CardContent className="flex flex-col gap-1 p-6 sm:p-8">
              <Text
                size="xs"
                variant="subtle"
                weight="medium"
                className="mb-3 uppercase tracking-wide"
              >
                What the playbook covers
              </Text>
              <ol className="flex flex-col">
                {PLAYBOOK_AREAS.map((area, i) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 border-b border-border py-3 last:border-0"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg-muted text-xs font-semibold text-accent"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <Text size="sm" as="span">
                      {area}
                    </Text>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Featured products — brand-shape accent */}
      <Section className="relative overflow-hidden">
        <BrandShapes className="absolute -bottom-16 -left-20 hidden h-72 w-72 lg:block" />
        <div className="relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Featured products"
              description="Explore the user problems these products address, who they serve and how their outcomes are tracked."
            />
            <ActionLink
              href="/products"
              variant="outline"
              className="shrink-0 whitespace-nowrap"
            >
              View all products
            </ActionLink>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* Featured platforms and tools */}
      <Section tone="muted" className="relative overflow-hidden">
        <DotField className="text-fg/[0.05]" mask="tl" />
        <div className="relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Featured platforms and tools"
              description="Find the systems, design resources and product tools that support research, design, delivery and measurement."
            />
            <ActionLink
              href="/platform-tools"
              variant="outline"
              className="shrink-0 whitespace-nowrap"
            >
              View all platforms and tools
            </ActionLink>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_TOOLS.map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </div>
        </div>
      </Section>

      {/* Closing action — Get in touch, over a gravity playground of logo shapes */}
      <section className="relative overflow-hidden">
        <GravityShapes />
        <Container className="pointer-events-none relative flex min-h-[460px] items-center justify-center py-16">
          <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
            <Text
              size="sm"
              weight="medium"
              className="uppercase tracking-wide text-accent"
            >
              Get in touch
            </Text>
            <Heading as="h2" size="3xl">
              Not sure where to start?
            </Heading>
            <Text size="lg" variant="muted">
              Tell us about the problem and the people affected. MPO can help
              identify an appropriate next step.
            </Text>
            <div className="pointer-events-auto">
              <ActionLink href="/contact" size="lg">
                Contact MPO
              </ActionLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

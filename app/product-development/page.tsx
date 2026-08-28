import { ActionLink } from "@/components/site/action-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { Container } from "@/components/site/container";
import { ExternalLink } from "@/components/site/external-link";
import { GravityShapes } from "@/components/site/gravity-shapes";
import { Hero } from "@/components/site/hero";
import { InfoCard } from "@/components/site/info-card";
import { Section, SectionHeading } from "@/components/site/section";
import { StartingPoint, type StartingPointRow } from "@/components/site/starting-point";
import { StatusBadge } from "@/components/site/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PLAYBOOK_CHAPTERS, PLAYBOOK_URL } from "@/lib/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product development",
  description:
    "An overview of product development that routes you to the relevant section of the Defence Product Playbook.",
};

type Topic = string | { label: string; comingSoon: true };

type Cover = {
  id: string;
  title: string;
  overview: string;
  topics: Topic[];
  action: { label: string; href: string };
};

const AUDIENCES = [
  {
    title: "Organisation leaders",
    description: "Learn how to sponsor, support and review product teams.",
  },
  {
    title: "Ops Managers",
    description:
      "Learn how to own the problem, define success and make decisions with the product team.",
  },
  {
    title: "Product, design and engineering teams",
    description:
      "Learn how to research user needs, test assumptions and deliver improvements in small steps.",
  },
];

const USE_GUIDANCE = [
  "Start with the foundations if you are new to product ways of working",
  "Use the problem and value section before committing to a solution",
  "Use the team section when setting up ownership and delivery roles",
  "Use the delivery section when planning and testing a product change",
  "Use the modernisation section for an existing product that may no longer be fit for purpose",
  "Use the governance section when reviewing product performance or investment",
];

const PRINCIPLES = [
  {
    title: "Define a real problem",
    description:
      "Be clear about who experiences the problem, why it happens and how you will know it has improved.",
  },
  {
    title: "Establish clear accountability",
    description:
      "Give one owner responsibility for the outcome and provide the team with the authority needed to act.",
  },
  {
    title: "Test before scaling",
    description:
      "Test the riskiest assumptions with real users before committing to a full build.",
  },
];

const COVERS: Cover[] = [
  {
    id: "define-problem-value",
    title: "Define the users, problem and value",
    overview:
      "Understand who is affected, frame the problem clearly and define the outcome that matters.",
    topics: [
      "User research and user journeys",
      "Qualitative and quantitative discovery",
      "Problem statements using 6W",
      "Problem validation using the 4C check",
      "Problem prioritisation using Severity, Frequency and Reach",
      "Value metrics, outcome metrics and Value-Cost Ratio",
    ],
    action: { label: "Define the problem and value", href: PLAYBOOK_CHAPTERS.problems },
  },
  {
    id: "structure-team",
    title: "Structure the product team and delivery model",
    overview:
      "Set clear ownership, bring together the skills needed and agree how internal and vendor teams will work together.",
    topics: [
      "Product squad composition",
      "Ops Manager and Product Lead partnership",
      "Product, design and engineering responsibilities",
      "Decision-making and accountability",
      "RACI across the product lifecycle",
      { label: "Vendor operating model", comingSoon: true },
    ],
    action: { label: "Structure the product team", href: PLAYBOOK_CHAPTERS.team },
  },
  {
    id: "plan-test-deliver",
    title: "Plan, test and deliver",
    overview:
      "Set a product direction, test possible solutions and deliver improvements that users can try.",
    topics: [
      { label: "Outcome-led product roadmapping", comingSoon: true },
      "Solution prioritisation using impact and effort",
      "Concept testing and prototyping",
      { label: "User stories and acceptance criteria", comingSoon: true },
      { label: "Sprint delivery, UAT and release", comingSoon: true },
      "Qualitative and quantitative solution validation",
      "Iteration based on evidence",
    ],
    action: { label: "Plan, test and deliver", href: PLAYBOOK_CHAPTERS.test },
  },
  {
    id: "modernise",
    title: "Modernise existing products",
    overview:
      "Assess whether an existing product remains fit for purpose, then modernise it in stages so operations can continue.",
    topics: [
      "Business, user, data, resilience and cost fitness",
      "Mission criticality",
      "IMPACT modernisation framework",
      "Modernisation roadmap",
      "Progressive replacement",
      "Change management and adoption",
    ],
    action: { label: "Modernise an existing product", href: PLAYBOOK_CHAPTERS.modernise },
  },
  {
    id: "govern",
    title: "Govern and review products",
    overview:
      "Review evidence, clear blockers and decide whether to continue, change, scale, maintain or stop a product.",
    topics: [
      "Value and outcome metric tracking",
      "Review cadence based on criticality",
      "Product review questions",
      "User research and validation findings",
      "Portfolio signals",
      "Investment and lifecycle decisions",
    ],
    action: { label: "Govern and review products", href: PLAYBOOK_CHAPTERS.govern },
  },
];

const STARTING_POINTS: StartingPointRow[] = [
  {
    need: "I am new to product work",
    destination: "Why product ways of working",
    href: PLAYBOOK_URL,
    external: true,
  },
  {
    need: "I need to define a software problem",
    destination: "Define the users, problem and value",
    href: "#define-problem-value",
  },
  {
    need: "I am setting up a team",
    destination: "Structure the product team and delivery model",
    href: "#structure-team",
  },
  {
    need: "I am testing a possible solution",
    destination: "Plan, test and deliver",
    href: "#plan-test-deliver",
  },
  {
    need: "I am modernising an existing product",
    destination: "Modernise existing products",
    href: "#modernise",
  },
  {
    need: "I review or oversee products",
    destination: "Govern and review products",
    href: "#govern",
  },
];

function CoverSection({ cover, index }: { cover: Cover; index: number }) {
  return (
    <Card id={cover.id} className="scroll-mt-24">
      <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="flex flex-col gap-1">
            <Heading as="h3" size="xl">
              {cover.title}
            </Heading>
            <Text variant="muted">{cover.overview}</Text>
          </div>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2 sm:pl-13">
          {cover.topics.map((topic) => {
            const label = typeof topic === "string" ? topic : topic.label;
            const comingSoon = typeof topic !== "string";
            return (
              <li key={label} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" aria-hidden />
                <Text size="sm" variant="muted" as="span">
                  {label}
                </Text>
                {comingSoon ? <StatusBadge status="Coming soon" /> : null}
              </li>
            );
          })}
        </ul>

        <div className="sm:pl-13">
          <ExternalLink
            href={cover.action.href}
            className="inline-flex items-center gap-1 text-sm font-medium"
          >
            {cover.action.label}
          </ExternalLink>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProductDevelopmentPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "Product development" }]} />}
        banner="/images/product-development-banner.svg"
        title="Develop products around users, problems and outcomes."
        body="The Defence Product Playbook helps teams define the problem worth solving, set up the right delivery model, test assumptions and review whether the product is creating value."
        actions={
          <>
            <ExternalLink
              href={PLAYBOOK_URL}
              className="inline-flex min-h-11 items-center justify-center gap-1 rounded-md bg-accent px-6 text-base font-medium text-accent-fg no-underline hover:bg-accent-hover hover:no-underline"
            >
              Access full playbook
            </ExternalLink>
            <ActionLink href="#find-your-starting-point" variant="outline" size="lg">
              Find your starting point
            </ActionLink>
          </>
        }
      />

      {/* What the Playbook Is */}
      <Section tone="muted">
        <SectionHeading
          title="What the playbook is"
          description="Jointly developed by MPO and DSTA, the playbook is a practical guide to product ways of working in defence. It brings together principles, frameworks and examples for teams developing or improving software products."
        />
      </Section>

      {/* Who It Is For */}
      <Section>
        <SectionHeading title="Who it is for" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <InfoCard key={a.title} title={a.title} description={a.description} />
          ))}
        </div>
      </Section>

      {/* How to Use the Playbook */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            title="How to use the playbook"
            description="Read the playbook from the start if product work is new to you. If you have a specific need, use the section summaries below to go directly to the relevant chapter."
          />
          <Checklist items={USE_GUIDANCE} />
        </div>
      </Section>

      {/* Product Principles */}
      <Section>
        <SectionHeading title="Product principles" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <InfoCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </Section>

      {/* What It Covers */}
      <Section tone="muted">
        <SectionHeading
          title="What it covers"
          description="Five sections take a product from a defined problem through to governance. Each links to the relevant chapter of the Defence Product Playbook."
        />
        <ol className="mt-8 flex flex-col gap-6">
          {COVERS.map((cover, i) => (
            <li key={cover.id}>
              <CoverSection cover={cover} index={i} />
            </li>
          ))}
        </ol>
      </Section>

      {/* Find Your Starting Point */}
      <Section id="find-your-starting-point" className="scroll-mt-20">
        <SectionHeading
          title="Find your starting point"
          description="Choose the row that matches your need to jump to the relevant section."
        />
        <div className="mt-8">
          <StartingPoint rows={STARTING_POINTS} />
        </div>
      </Section>

      {/* Closing action — over a gravity playground of logo shapes */}
      <section className="relative overflow-hidden">
        <GravityShapes />
        <Container className="pointer-events-none relative flex min-h-[380px] flex-col items-center justify-start py-12">
          <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
            <Text
              size="sm"
              weight="medium"
              className="uppercase tracking-wide text-accent"
            >
              Read the full guidance
            </Text>
            <Heading as="h2" size="3xl">
              Explore the Defence Product Playbook
            </Heading>
            <Text size="lg" variant="muted">
              Open the playbook for the full frameworks, examples and interactive
              exercises.
            </Text>
            <div className="pointer-events-auto">
              <ExternalLink
                href={PLAYBOOK_URL}
                className="inline-flex min-h-12 items-center justify-center gap-1 rounded-md bg-accent px-6 text-base font-medium text-accent-fg no-underline hover:bg-accent-hover hover:no-underline"
              >
                Access full playbook
              </ExternalLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

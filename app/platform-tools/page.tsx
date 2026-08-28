import { ActionLink } from "@/components/site/action-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBanner } from "@/components/site/cta-banner";
import { Hero } from "@/components/site/hero";
import { Pending } from "@/components/site/pending";
import { Section, SectionHeading } from "@/components/site/section";
import { ToolPanel, type ToolPanelData } from "@/components/site/tool-panel";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Info, Layers } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform & tools",
  description:
    "Platforms and tools available to product teams, and when each one is useful.",
};

const NEEDS = [
  { label: "Research and synthesis", href: "#research" },
  { label: "Design and prototyping", href: "#design" },
  { label: "Build and delivery", href: "#build" },
  { label: "Measurement and insight", href: "#measure" },
];

const CLARA: ToolPanelData = {
  id: "clara",
  name: "CLARA",
  category: "Research and synthesis",
  description:
    "CLARA helps product teams work with programme knowledge and create structured research outputs with supporting references.",
  fields: [
    { label: "Intended users" },
    { label: "Supported research tasks" },
    { label: "Required inputs" },
    { label: "Output types" },
    { label: "Access link" },
    { label: "Support contact" },
  ],
};

const PRIZM: ToolPanelData = {
  id: "prizm",
  name: "PRIZM",
  category: "Design and prototyping",
  description:
    "PRIZM is a design system for building consistent digital interfaces. It provides approved components, patterns and design guidance for product teams.",
  fields: [
    { label: "Intended users" },
    { label: "Available components and guidance" },
    { label: "When teams should use PRIZM" },
    { label: "Access link" },
    { label: "Support contact" },
  ],
};

const ACE_FOUNDRY: ToolPanelData = {
  id: "ace-foundry",
  name: "ACE / Foundry",
  category: "Build and delivery",
  // Description not yet approved (spec §9: do not infer purpose from the name).
  fields: [
    { label: "What it is" },
    { label: "Who it is for" },
    { label: "What it helps users do" },
    { label: "When to use it" },
    { label: "Access requirements" },
    { label: "Support contact" },
  ],
};

const INSIGHT: ToolPanelData = {
  id: "insight",
  name: "INSIGHT",
  category: "Measurement and insight",
  fields: [
    { label: "What it is" },
    { label: "Who it is for" },
    { label: "What it helps users do" },
    { label: "When to use it" },
    { label: "Access link" },
    { label: "Support contact" },
  ],
};

const BEACON: ToolPanelData = {
  id: "beacon",
  name: "BEACON",
  category: "Measurement and insight",
  fields: [
    { label: "What it is" },
    { label: "Who it is for" },
    { label: "What it helps users do" },
    { label: "When to use it" },
    { label: "Access link" },
    { label: "Support contact" },
  ],
};

export default function PlatformToolsPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "Platform & tools" }]} />}
        banner="/images/platform-tools-banner.svg"
        title="Platforms and tools for product teams"
        body="Find the systems, design resources and product tools that support research, design, delivery and measurement."
      />

      {/* Browse by need */}
      <Section tone="muted">
        <SectionHeading
          title="Browse by need"
          description="Jump to the tools that support each stage of product work."
        />
        <nav aria-label="Browse by need" className="mt-6 flex flex-wrap gap-3">
          {NEEDS.map((need) => (
            <Link
              key={need.href}
              href={need.href}
              className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 text-sm font-medium text-fg no-underline transition-colors hover:bg-bg-muted focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {need.label}
            </Link>
          ))}
        </nav>
      </Section>

      {/* Spectrum callout */}
      <Section>
        <Card>
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-5">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-bg-muted text-accent"
              aria-hidden
            >
              <Layers className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-2">
              <Text weight="semibold">Spectrum</Text>
              <Text size="sm" variant="muted">
                Spectrum brings together product tools used across research,
                design and measurement. Choose a tool based on the task you need
                to complete. PRIZM, CLARA, INSIGHT and BEACON are part of
                Spectrum.
              </Text>
              <Text size="xs" variant="subtle">
                <Pending>
                  Confirm this description and whether Spectrum is the approved
                  name for the tool group
                </Pending>
              </Text>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Research and synthesis */}
      <Section id="research" tone="muted" className="scroll-mt-20">
        <SectionHeading title="Research and synthesis" as="h2" />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ToolPanel tool={CLARA} />
        </div>
      </Section>

      {/* Design and prototyping */}
      <Section id="design" className="scroll-mt-20">
        <SectionHeading title="Design and prototyping" as="h2" />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ToolPanel tool={PRIZM} />
        </div>
      </Section>

      {/* Build and delivery */}
      <Section id="build" tone="muted" className="scroll-mt-20">
        <SectionHeading title="Build and delivery" as="h2" />
        <Alert className="mt-6">
          <Info aria-hidden />
          <AlertTitle>Description to be confirmed</AlertTitle>
          <AlertDescription>
            An approved description for ACE / Foundry is not yet available. Its
            purpose is not inferred from its name.
          </AlertDescription>
        </Alert>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ToolPanel tool={ACE_FOUNDRY} />
        </div>
      </Section>

      {/* Measurement and insight */}
      <Section id="measure" className="scroll-mt-20">
        <SectionHeading title="Measurement and insight" as="h2" />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ToolPanel tool={INSIGHT} />
          <ToolPanel tool={BEACON} />
        </div>
      </Section>

      <CtaBanner
        title="Need access to a platform or tool?"
        body="Check the relevant tool for its access instructions, or contact MPO to be pointed to the right place."
        action={
          <ActionLink href="/contact" size="lg" fullWidth>
            Contact MPO
          </ActionLink>
        }
      />
    </>
  );
}

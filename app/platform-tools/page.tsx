import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaBanner } from "@/components/site/cta-banner";
import { ExternalLink } from "@/components/site/external-link";
import { Hero } from "@/components/site/hero";
import { Pending } from "@/components/site/pending";
import { Section, SectionHeading } from "@/components/site/section";
import { SpectrumBar } from "@/components/site/spectrum-bar";
import { ToolPanel, type ToolPanelData } from "@/components/site/tool-panel";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Boxes } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform & tools",
  description:
    "The platforms and tools MPO uses in its own product work and recommends to other teams, spanning research, design and measurement.",
};

const SPECTRUM_URL = "https://spectrum-dsta.vercel.app/#products";

// Tools sourced from Spectrum (spectrum-dsta.vercel.app), ordered the way the
// practice runs. Descriptions are Spectrum's own copy; links open each tool.
const TOOLS: ToolPanelData[] = [
  {
    id: "clara",
    name: "CLARA",
    phase: "All phases",
    href: "https://dsta-productops.github.io/clara/",
    description:
      "CLARA reads your programme's knowledge base and drafts artefacts from it across research, design and test: synthesis, personas, journeys, requirements documents, storyboards, test plans. Every claim carries a citation back to the source it came from. Work that takes a research lead one to two weeks drafts in minutes.",
  },
  {
    id: "insight",
    name: "INSIGHT",
    phase: "Research",
    href: "https://insight.vercel.app/",
    description:
      "INSIGHT listens while you run a user interview or a focus group. It suggests the next question, explains jargon as it comes up, and pulls the relevant part of your brief. It runs on your own machine, offline, and hands you a speaker-labelled transcript at the end, so nobody has to take notes.",
    note: "The macOS and Windows applications are not released yet.",
  },
  {
    id: "prizm",
    name: "PRIZM",
    phase: "Design",
    href: "https://prizm-design.github.io/prizm/",
    description:
      "PRIZM is a design system of 44 components, covering both command-and-control interfaces and enterprise web applications, in light and dark. It is written so an AI assistant can read it and build screens from components that already exist instead of inventing new ones.",
  },
  {
    id: "dash",
    name: "DASH",
    phase: "Measure",
    href: "https://diux-dash.com/",
    description:
      "DASH records your product's metrics. You take a baseline, then measure each later round against it. DASH AI reads the data you have collected, explains what it points to, and suggests where to improve. It covers a single product or a whole portfolio.",
  },
  {
    id: "beacon",
    name: "BEACON",
    phase: "Portal",
    href: "https://productops-copilot.vercel.app/",
    description:
      "BEACON explains how research, design and measurement fit together, lists every tool with how to get access to it, and holds a library of prompts you can paste straight into your work. Its AI assistant answers questions about the practice: which tool fits the phase you are in, and how to use it. Start here if you are not sure where to begin.",
  },
];

export default function PlatformToolsPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "Platform & tools" }]} />}
        banner="/images/platform-tools-banner.svg"
        title="Platforms and tools for product teams"
        body="The platform and tools MPO uses to build its own products, and recommends to other teams. They span every phase of product practice, from research through design to measurement."
      />

      {/* The platform */}
      <Section tone="muted">
        <SectionHeading
          title="The platform"
          description="ACE / Foundry is the platform MPO uses to build and run its products."
        />
        <Card className="mt-8">
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-5">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-bg-muted text-accent"
              aria-hidden
            >
              <Boxes className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-2">
              <Text weight="semibold">ACE / Foundry</Text>
              <Text size="sm" variant="muted">
                <Pending>
                  An approved description for ACE / Foundry is not yet available.
                  Its purpose is not inferred from its name.
                </Pending>
              </Text>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* The tools — Spectrum introduced first, then the individual tools */}
      <Section>
        <SectionHeading title="The tools" as="h2" />
        {/* Spectrum introduced first via its spectrum bar (not in a card). */}
        <div className="mt-8 flex flex-col gap-6">
          <SpectrumBar />
          <div className="flex max-w-3xl flex-col items-start gap-3">
            <Text variant="muted">
              Spectrum is a platform for product practice, with AI at every step:
              working out the real problem, designing for it, and proving it
              worked. It is developed by DSTA and co-created with MPO. The tools
              below are ordered the way the practice runs.
            </Text>
            <ExternalLink
              href={SPECTRUM_URL}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "no-underline hover:no-underline",
              )}
            >
              Visit Spectrum
            </ExternalLink>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {TOOLS.map((tool) => (
            <ToolPanel key={tool.id} tool={tool} />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want to use these tools, or build the next one?"
        body="Spectrum gets more useful the more of the product community builds on it. Explore the platform to see how the tools fit together."
        action={
          <ExternalLink
            href={SPECTRUM_URL}
            className={cn(
              buttonVariants({ variant: "solid", size: "lg" }),
              "w-full no-underline hover:no-underline sm:w-auto",
            )}
          >
            Explore Spectrum
          </ExternalLink>
        }
      />
    </>
  );
}

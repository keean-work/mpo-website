import { ActionLink } from "@/components/site/action-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { CtaBanner } from "@/components/site/cta-banner";
import { Hero } from "@/components/site/hero";
import { InfoCard } from "@/components/site/info-card";
import { ProcessSteps } from "@/components/site/process-steps";
import { Section, SectionHeading } from "@/components/site/section";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funding & support",
  description:
    "How MPO assesses software problems, how to prepare a software brief, and what happens next.",
};

const ASSESSMENT_AREAS = [
  "User need",
  "Severity, frequency and reach",
  "Operational or organisational consequence",
  "Evidence supporting the problem",
  "Potential for a software intervention",
  "Access to users",
  "Accountable ownership",
  "Dependencies, security and delivery constraints",
];

// 6W problem framing (informational). Each entry: the W and its guiding question.
const SIX_W = [
  { label: "What", prompt: "What is going wrong?" },
  { label: "Where", prompt: "Where does it happen?" },
  { label: "When", prompt: "When and how often does it happen?" },
  { label: "Who", prompt: "Who is affected?" },
  { label: "Why it happens", prompt: "What may be causing it?" },
  { label: "Why it matters", prompt: "What is the consequence if it continues?" },
];

const BRIEF_SUPPORTING = [
  "Available evidence",
  "Existing systems",
  "Previous attempts",
  "Known constraints",
  "Accountable owner",
];

const FOUR_C = [
  {
    title: "Clarity",
    description:
      "The problem identifies a specific user group, task and source of friction.",
  },
  {
    title: "Consequence",
    description:
      "The brief explains the cost or operational effect of leaving the problem unresolved.",
  },
  {
    title: "Cause",
    description: "The team has a reasonable view of what may be causing the problem.",
  },
  {
    title: "Confirmation",
    description:
      "Research, data or observed behaviour supports the problem and its likely cause.",
  },
];

const FUNDING_STEPS = [
  { title: "Share a software brief", description: "Share the problem, users and evidence with MPO." },
  { title: "Initial review by MPO", description: "MPO reviews the brief." },
  {
    title: "Clarification with the requesting team",
    description: "MPO follows up on any gaps.",
  },
  {
    title: "Problem and evidence assessment",
    description: "The need is assessed before any solution.",
  },
  {
    title: "Funding or support recommendation",
    description: "A recommendation is prepared.",
  },
  { title: "Decision and next steps", description: "The outcome and next steps are agreed." },
];

const OUTCOMES = [
  "More information required",
  "Discovery support",
  "Product consultation",
  "Referred to another team",
  "Proceed to funding assessment",
  "Not suitable for MPO support",
];

export default function FundingSupportPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "Funding & support" }]} />}
        banner="/images/funding-support-banner.svg"
        title="Start with the software problem."
        body="Tell us who is affected, what happens today and why it matters. You do not need a completed solution before approaching MPO."
        actions={
          <ActionLink href="/contact" size="lg">
            Contact MPO
          </ActionLink>
        }
      />

      {/* How MPO Assesses Software Problems */}
      <Section tone="muted">
        <SectionHeading
          title="How MPO assesses software problems"
          description="MPO reviews the problem, available evidence, expected value and the team's ability to act. The assessment focuses on the need before considering a specific solution."
        />
        <Checklist className="mt-8" columns={2} items={ASSESSMENT_AREAS} />
      </Section>

      {/* Prepare a Software Brief using 6W */}
      <Section>
        <SectionHeading
          title="Prepare a software brief using 6W"
          description="The software brief gives MPO enough context to understand the problem and decide what to explore next. Keep it focused on the current situation rather than a preferred solution."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {SIX_W.map((field) => (
              <Card key={field.label}>
                <CardContent className="flex flex-col gap-1 p-5">
                  <Text weight="semibold" as="span">
                    {field.label}
                  </Text>
                  <Text size="sm" variant="muted" as="span">
                    {field.prompt}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-bg-subtle">
            <CardContent className="flex flex-col gap-3 p-6">
              <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
                Also include
              </Text>
              <Checklist items={BRIEF_SUPPORTING} />
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Assessment Criteria using the 4C Check */}
      <Section tone="muted">
        <SectionHeading
          title="Assessment criteria using the 4C check"
          description="MPO looks for four qualities in a well-framed problem."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_C.map((c) => (
            <InfoCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
      </Section>

      {/* Funding and Approval Process */}
      <Section>
        <SectionHeading
          title="Funding and approval process"
          description="An indicative sequence for the prototype. The process must be confirmed before publication."
        />
        <div className="mt-8 flex flex-col gap-6">
          <ProcessSteps steps={FUNDING_STEPS} />
          <Alert>
            <Info aria-hidden />
            <AlertDescription>
              This sequence is a placeholder. Owners, required information,
              decision points, expected times and outcomes are still to be
              confirmed. No response times or approval commitments are implied.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      {/* What Happens Next */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            title="What happens next"
            description="After reviewing the brief, MPO will contact the team to clarify the problem and available evidence. The next step may be further discovery, a short test, product advice, referral to another office or a funding assessment."
          />
          <div className="flex flex-col gap-3">
            <Text size="sm" weight="medium">
              Possible outcomes
            </Text>
            <Checklist items={OUTCOMES} />
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Have a software problem to discuss?"
        body="Share the users affected, the problem they face and the evidence you have. MPO can help identify an appropriate next step."
        action={
          <ActionLink href="/contact" size="lg" fullWidth>
            Contact MPO
          </ActionLink>
        }
      />
    </>
  );
}

import { ActionLink } from "@/components/site/action-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { CtaBanner } from "@/components/site/cta-banner";
import { Hero } from "@/components/site/hero";
import { InfoCard } from "@/components/site/info-card";
import { Pending } from "@/components/site/pending";
import { ProcessSteps } from "@/components/site/process-steps";
import { Section, SectionHeading } from "@/components/site/section";
import { TeamCard, type TeamMember } from "@/components/site/team-card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "MPO's role, scope, team, values and working relationship with MINDEF teams.",
};

const RESPONSIBILITIES = [
  "Frame and validate software problems",
  "Plan and conduct user research",
  "Advise on product strategy and team structure",
  "Support concept testing and early product development",
  "Provide product platforms, standards and tools",
  "Help teams define and review product outcomes",
];

const SCOPE_FIELDS = [
  { title: "Supported domains", description: <Pending>List to be confirmed</Pending> },
  {
    title: "Types of software problems supported",
    description: <Pending>List to be confirmed</Pending>,
  },
  { title: "Work outside MPO's scope", description: <Pending>List to be confirmed</Pending> },
  { title: "Partner organisations", description: <Pending>List to be confirmed</Pending> },
];

const VALUES = [
  {
    title: "Speed and agility",
    description:
      "Work in small steps, learn early and change direction when the evidence supports it.",
  },
  {
    title: "Value for money",
    description:
      "Compare the outcome a product delivers with the cost of building and running it.",
  },
  {
    title: "Control and resilience",
    description:
      "Move quickly within clear security, reliability and operational guardrails.",
  },
];

const WORK_STEPS = [
  {
    title: "Share the problem",
    description: "Tell us who is affected, what happens today and why it matters.",
  },
  {
    title: "Review the evidence",
    description: "We look at available research, data and previous attempts.",
  },
  {
    title: "Agree on the next step",
    description:
      "This may be further discovery, a short test or product advice.",
  },
  {
    title: "Work with users",
    description:
      "The team tests assumptions with the people who experience the problem.",
  },
  {
    title: "Review the outcome",
    description:
      "The team tracks whether the problem is improving and adjusts the approach.",
  },
];

// Team details are not yet confirmed (spec §14). Placeholder slots show the
// card structure without inventing people.
const TEAM: TeamMember[] = [{}, {}, {}];

export default function AboutPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "About us" }]} />}
        banner="/images/about-banner.svg"
        title="About the MINDEF Product Office"
        body="MPO helps MINDEF teams work on software problems with a clear focus on users, evidence and measurable outcomes."
      />

      {/* What We Do */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            title="What we do"
            description="We support teams from problem framing through product review. The level of support depends on the problem, the team's needs and the stage of the product."
          />
          <div className="flex flex-col gap-4">
            <Checklist items={RESPONSIBILITIES} />
            <Alert>
              <Info aria-hidden />
              <AlertDescription>
                Services shown are indicative for this prototype. Only confirmed
                MPO services will be published.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Section>

      {/* Our Scope and Domains */}
      <Section>
        <SectionHeading
          title="Our scope and domains"
          description="MPO works across selected MINDEF software problems and product domains. This page helps teams understand where MPO can contribute and where another office may be better placed to help."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {SCOPE_FIELDS.map((field) => (
            <InfoCard
              key={field.title}
              title={field.title}
              description={field.description}
            />
          ))}
        </div>
      </Section>

      {/* Our Team */}
      <Section tone="muted">
        <SectionHeading
          title="Our team"
          description="MPO brings together product, design, engineering and operational experience. Contact the office through the shared channel so your request can be directed to the right person."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <SectionHeading title="Our values" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <InfoCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      {/* How We Work with MINDEF Teams */}
      <Section tone="muted">
        <SectionHeading
          title="How we work with MINDEF teams"
          description="A typical way of working, from sharing a problem through to reviewing the outcome."
        />
        <div className="mt-8 flex flex-col gap-6">
          <ProcessSteps steps={WORK_STEPS} />
          <Alert>
            <Info aria-hidden />
            <AlertDescription>
              This describes a typical approach for the prototype. It is not a
              guaranteed service process until MPO confirms it.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      <CtaBanner
        title="Get in touch with MPO"
        body="Contact the office through the shared channel so your request can reach the right person."
        action={
          <ActionLink href="/contact" size="lg" fullWidth>
            Contact MPO
          </ActionLink>
        }
      />
    </>
  );
}

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ContactForm } from "@/components/site/contact-form";
import { Hero } from "@/components/site/hero";
import { Section, SectionHeading } from "@/components/site/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach MPO about an MPO product, product development or access to a platform or tool.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ label: "Contact us" }]} />}
        banner="/images/contact-banner.svg"
        title="Contact MPO"
        body="Contact us about an MPO product, product development or access to a platform or tool."
      />

      {/* Contact form */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <SectionHeading
            title="Send us a message"
            description="Send a short message about your product, problem or access request and MPO will direct it to the right person."
          />
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

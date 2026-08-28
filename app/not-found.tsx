import { ActionLink } from "@/components/site/action-link";
import { Section } from "@/components/site/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section className="py-24">
      <div className="flex max-w-xl flex-col gap-4">
        <Text size="sm" weight="medium" className="uppercase tracking-wide text-accent">
          404
        </Text>
        <Heading as="h1" size="3xl">
          We could not find that page
        </Heading>
        <Text variant="muted">
          The page may have moved or the address may be incorrect. Use the
          navigation, or head back to the home page.
        </Text>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/">Back to home</ActionLink>
          <ActionLink href="/contact" variant="outline">
            Contact MPO
          </ActionLink>
        </div>
      </div>
    </Section>
  );
}

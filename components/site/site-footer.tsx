import { BrandMark } from "@/components/site/brand-mark";
import { Container } from "@/components/site/container";
import { ExternalLink } from "@/components/site/external-link";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { PLAYBOOK_URL, PRIMARY_NAV } from "@/lib/nav";
import NextLink from "next/link";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NextLink
      href={href}
      className="inline-flex min-h-9 items-center text-sm text-fg-muted transition-colors hover:text-fg focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </NextLink>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Heading as="h2" size="md" className="text-sm text-fg">
        {title}
      </Heading>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-bg-subtle">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BrandMark className="h-8 w-8" />
              <span className="text-sm font-semibold text-fg">
                MINDEF Product Office
              </span>
            </div>
            <Text size="sm" variant="muted" className="max-w-xs">
              MPO helps MINDEF teams define software problems, test possible
              solutions and develop products with clear outcomes.
            </Text>
          </div>

          {/* Explore */}
          <FooterGroup title="Explore">
            {PRIMARY_NAV.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterGroup>

          {/* Resources */}
          <FooterGroup title="Resources">
            <ExternalLink
              href={PLAYBOOK_URL}
              className="min-h-9 items-center text-sm text-fg-muted no-underline hover:text-fg"
            >
              Defence Product Playbook
            </ExternalLink>
            <FooterLink href="/platform-tools">Platform & tools</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
          </FooterGroup>

          {/* Get support */}
          <FooterGroup title="Get support">
            <FooterLink href="/funding-support">Funding & support</FooterLink>
            <FooterLink href="/contact">Contact MPO</FooterLink>
          </FooterGroup>
        </div>

        <Separator className="my-8" />

        <div className="flex">
          <Text size="xs" variant="subtle">
            Built with PRIZM 4.0 Enterprise.
          </Text>
        </div>
      </Container>
    </footer>
  );
}

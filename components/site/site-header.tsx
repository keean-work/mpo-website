"use client";

import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/site/container";
import { PRIMARY_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { ExternalLink as ExternalLinkIcon, Menu } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Wordmark that returns to Home (spec §1: "The logo returns users to Home"). */
function Wordmark() {
  return (
    <NextLink
      href="/"
      className="flex items-center gap-2 rounded-sm focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label="MINDEF Product Office, back to home"
    >
      <BrandMark className="h-8 w-8" />
      <span className="flex h-8 flex-col justify-center font-brand text-[10px] font-semibold uppercase leading-[1.12] tracking-[0.16em] text-fg">
        <span>MINDEF</span>
        <span>Product</span>
        <span>Office</span>
      </span>
    </NextLink>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Wordmark />

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 xl:flex"
          >
            {PRIMARY_NAV.map((item) => {
              const active = !item.external && isActive(pathname, item.href);
              const className = cn(
                "inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-accent",
                active
                  ? "bg-bg-muted text-fg"
                  : "text-fg-muted hover:bg-bg-muted hover:text-fg",
              );
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                    <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                );
              }
              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={className}
                >
                  {item.label}
                </NextLink>
              );
            })}
          </nav>

          {/* Mobile menu */}
          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-4/5 max-w-sm">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <SheetBody>
                  <nav aria-label="Primary" className="flex flex-col gap-1">
                    {PRIMARY_NAV.map((item) => {
                      const active = !item.external && isActive(pathname, item.href);
                      const className = cn(
                        "flex min-h-11 items-center gap-1.5 rounded-md px-3 text-base font-medium transition-colors",
                        active
                          ? "bg-bg-muted text-fg"
                          : "text-fg-muted hover:bg-bg-muted hover:text-fg",
                      );
                      return (
                        <SheetClose
                          key={item.href}
                          nativeButton={false}
                          render={
                            item.external ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={className}
                              >
                                {item.label}
                                <ExternalLinkIcon
                                  className="h-4 w-4 shrink-0"
                                  aria-hidden
                                />
                                <span className="sr-only"> (opens in a new tab)</span>
                              </a>
                            ) : (
                              <NextLink
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className={className}
                              >
                                {item.label}
                              </NextLink>
                            )
                          }
                        />
                      );
                    })}
                  </nav>
                </SheetBody>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

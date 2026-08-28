import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/**
 * Breadcrumbs (spec §2: on all pages except Home). Composes PRIZM's breadcrumb
 * primitives with the Link component so crumbs use client-side navigation.
 * The last crumb (current page) renders as BreadcrumbPage with aria-current.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const withHome: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {withHome.map((crumb, i) => {
          const isLast = i === withHome.length - 1;
          return (
            <BreadcrumbItem key={`${crumb.label}-${i}`}>
              {isLast || !crumb.href ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className={cn("text-fg-muted no-underline hover:text-fg hover:underline")}
                  >
                    {crumb.label}
                  </Link>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

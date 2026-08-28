import { ExternalLink } from "@/components/site/external-link";
import { Card } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { ArrowRight, ExternalLink as ExternalLinkIcon } from "lucide-react";

export type StartingPointRow = {
  need: string;
  destination: string;
  href: string;
  external?: boolean;
};

function DestinationLink({
  row,
  className,
}: {
  row: StartingPointRow;
  className?: string;
}) {
  if (row.external) {
    return (
      <ExternalLink href={row.href} className={className}>
        {row.destination}
      </ExternalLink>
    );
  }
  return (
    <Link href={row.href} className={className}>
      {row.destination}
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
    </Link>
  );
}

/**
 * "Find your starting point" (spec §6). A two-column table on desktop; on mobile
 * each row renders as a selectable card (spec: "render each row as a selectable
 * card rather than a table").
 */
export function StartingPoint({ rows }: { rows: StartingPointRow[] }) {
  return (
    <>
      {/* Desktop / tablet: table */}
      <div className="hidden md:block">
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 px-4 py-3">User need</TableHead>
                <TableHead className="px-4 py-3">Recommended destination</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.need}>
                  <TableCell className="px-4 py-3 text-fg-muted">{row.need}</TableCell>
                  <TableCell className="px-4 py-3">
                    <DestinationLink
                      row={row}
                      className="inline-flex items-center gap-1 font-medium no-underline hover:underline"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Mobile: selectable cards */}
      <ul className="flex flex-col gap-3 md:hidden">
        {rows.map((row) => (
          <li key={row.need}>
            <Link
              href={row.href}
              {...(row.external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${row.destination} (opens in a new tab)`,
                  }
                : {})}
              className="block no-underline hover:no-underline"
            >
              <Card className="flex flex-col gap-1 p-4 transition-colors hover:bg-bg-muted">
                <Text size="sm" variant="muted" as="span">
                  {row.need}
                </Text>
                <span className="inline-flex items-center gap-1 font-medium text-fg">
                  {row.destination}
                  {row.external ? (
                    <ExternalLinkIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  ) : (
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  )}
                </span>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

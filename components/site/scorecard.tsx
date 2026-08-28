import { ChartPlaceholder } from "@/components/site/chart-placeholder";
import { Pending } from "@/components/site/pending";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import type { ReactNode } from "react";

export type ScorecardData = Partial<{
  valueMetric: ReactNode;
  outcomeMetric: ReactNode;
  baseline: ReactNode;
  currentResult: ReactNode;
  target: ReactNode;
  trend: ReactNode;
  reportingPeriod: ReactNode;
  annualCost: ReactNode;
  valueCostRatio: ReactNode;
  keyLearning: ReactNode;
}>;

/**
 * Product scorecard (spec §8). Shows baseline, current result, target and
 * reporting period as a metric table on desktop and stacked labelled rows on
 * mobile, with a trend chart placeholder. No single overall score is shown
 * (spec §8). Fields not yet sourced from an approved scorecard render as
 * "To be confirmed".
 */
export function Scorecard({
  productName,
  data = {},
}: {
  productName: string;
  data?: ScorecardData;
}) {
  const rows: { label: string; value: ReactNode }[] = [
    { label: "Value metric", value: data.valueMetric },
    { label: "Outcome metric", value: data.outcomeMetric },
    { label: "Baseline", value: data.baseline },
    { label: "Current result", value: data.currentResult },
    { label: "Target", value: data.target },
    { label: "Trend", value: data.trend },
    { label: "Reporting period", value: data.reportingPeriod },
    { label: "Annual product cost", value: data.annualCost },
    { label: "Value-Cost Ratio", value: data.valueCostRatio },
    { label: "Key learning or decision", value: data.keyLearning },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{productName} scorecard</CardTitle>
        <Text size="sm" variant="muted">
          Whether the product is improving the outcome it was created to address.
        </Text>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <ChartPlaceholder label={`${productName} trend`} />
        <dl className="divide-y divide-border border-t border-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-0.5 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4"
            >
              <dt>
                <Text size="sm" variant="subtle" weight="medium" as="span">
                  {row.label}
                </Text>
              </dt>
              <dd>
                <Text size="sm" as="span">
                  {row.value ?? <Pending />}
                </Text>
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}

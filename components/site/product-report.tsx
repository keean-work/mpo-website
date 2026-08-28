"use client";

import { Pending } from "@/components/site/pending";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import type { ProductInfo } from "@/lib/products";
import { getReport } from "@/lib/products";
import { ArrowRight, ChevronDown, ChevronUp, User } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

const TABS = ["overview", "scorecard", "updates"];

const fmtInt = (n: number) => Math.round(n).toLocaleString("en-US");
const fmtCompact = (n: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 0 }).format(n);
const fmtMoney = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const pct = (cur: number, prev?: number) =>
  prev === undefined ? null : Math.round(((cur - prev) / prev) * 100);

function Delta({ value, goodWhenNegative }: { value: number | null; goodWhenNegative?: boolean }) {
  if (value === null) return null;
  const improving = goodWhenNegative ? value < 0 : value > 0;
  return (
    <Text
      size="xs"
      weight="medium"
      as="span"
      className={improving ? "text-success" : "text-fg-muted"}
    >
      {value > 0 ? "+" : ""}
      {value}%
    </Text>
  );
}

function BigStat({ value, unit }: { value: string; unit?: string }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <Text as="span" className="text-3xl font-semibold tracking-tight text-fg">
        {value}
      </Text>
      {unit ? (
        <Text size="sm" variant="muted" as="span">
          {unit}
        </Text>
      ) : null}
    </span>
  );
}

function SubStat({
  value,
  label,
  delta,
  goodWhenNegative,
}: {
  value: string;
  label: string;
  delta?: number | null;
  goodWhenNegative?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <Text as="span" className="text-2xl font-semibold tracking-tight text-fg">
        {value}
      </Text>
      <Text size="sm" variant="muted" as="span" className="max-w-[12rem]">
        {label}
      </Text>
      {delta !== undefined ? <Delta value={delta ?? null} goodWhenNegative={goodWhenNegative} /> : null}
    </div>
  );
}

function MetricRow({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="grid gap-3 border-b border-border py-6 first:pt-0 last:border-0 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6">
      <div className="self-start">
        <Text weight="semibold" as="span" className="text-accent">
          {name}
        </Text>
      </div>
      <div>{children}</div>
    </div>
  );
}

/** Product screenshot that hides itself if the image is missing (no broken-icon). */
function ProductImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);
  if (!ok) return null;
  return (
    <figure className={cn("overflow-hidden rounded-lg border border-border", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={asset(src)} alt={alt} onError={() => setOk(false)} className="block w-full" />
    </figure>
  );
}

function OverviewField({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 pt-6 first:pt-0">
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text size="md" variant="muted" as="div" className="leading-relaxed">
        {children}
      </Text>
    </div>
  );
}

function SidebarField({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <Text size="xs" weight="semibold" as="span" className="uppercase tracking-wide text-accent">
        {title}
      </Text>
      <Text size="sm" as="div" className="leading-relaxed text-fg-muted">
        {children}
      </Text>
    </div>
  );
}

/**
 * Product report (Overview / Scorecard / Updates), modelled on an open.gov.sg
 * report. Built from PRIZM elements (Tabs, Card, Avatar, Select). The scorecard
 * is a row-per-metric layout with a period filter, cost breakdown, grouped
 * sub-stats and deltas. Figures are illustrative sample data (spec §14).
 */
export function ProductReport({ product }: { product: ProductInfo }) {
  const report = getReport(product);
  const { periods, series, team, costBreakdown } = report;
  const last = periods.length - 1;

  const profile = product.profile;
  const [tab, setTab] = useState("overview");
  const [quarter, setQuarter] = useState(last);
  const [showBreakdown, setShowBreakdown] = useState(true);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (TABS.includes(hash)) setTab(hash);
  }, []);

  const q = quarter;
  const prev = q > 0 ? q - 1 : undefined;
  const p = (arr: number[]) => (prev === undefined ? undefined : arr[prev]);

  const cost = series.cost[q];
  const costEff = cost / series.interactions[q];
  const prevCostEff =
    prev === undefined ? undefined : series.cost[prev] / series.interactions[prev];

  return (
    <Tabs value={tab} onValueChange={(v) => setTab(String(v))}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
        <TabsTrigger value="updates">Updates</TabsTrigger>
      </TabsList>

      {/* Overview */}
      <TabsContent value="overview" className="mt-8 flex flex-col gap-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="flex flex-col">
            <OverviewField title="User problem">{profile?.userProblem ?? <Pending />}</OverviewField>
            <OverviewField title="How the product helps">
              {profile?.howItHelps ?? <Pending />}
            </OverviewField>
            {profile?.image ? (
              <ProductImage src={profile.image.src} alt={profile.image.alt} className="mt-6" />
            ) : null}
            <OverviewField title="Primary users">
              {profile?.primaryUsers ?? <Pending />}
            </OverviewField>
            <OverviewField title="Evidence or progress">
              {profile?.evidence ?? <Pending>No unsupported outcome claims are published</Pending>}
            </OverviewField>
            <OverviewField title="Current focus">{profile?.currentFocus ?? <Pending />}</OverviewField>
          </div>

          {/* At a glance */}
          <Card className="h-fit bg-bg-subtle">
            <CardContent className="flex flex-col gap-5 p-6">
              <SidebarField title="What we envision">
                {profile?.vision ?? <Pending />}
              </SidebarField>

              <div className="flex flex-col gap-1">
                <Text
                  size="xs"
                  weight="semibold"
                  as="span"
                  className="uppercase tracking-wide text-accent"
                >
                  Where we're at
                </Text>
                <div className="mt-1 flex flex-col gap-3">
                  {[
                    { label: "Monthly active users", value: fmtInt(series.users[last]) },
                    { label: "Interactions this quarter", value: fmtCompact(series.interactions[last]) },
                  ].map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <Text as="span" className="text-3xl font-semibold tracking-tight text-fg">
                        {m.value}
                      </Text>
                      <Text size="sm" variant="muted" as="span">
                        {m.label}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              {profile?.outcome ? (
                <Text as="p" className="text-lg font-semibold leading-snug text-fg">
                  {profile.outcome}
                </Text>
              ) : null}

              <button
                type="button"
                onClick={() => setTab("scorecard")}
                className="inline-flex w-fit items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent-hover focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Go to metrics
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Scorecard */}
      <TabsContent value="scorecard" className="mt-8">
        <div className="mb-6 w-36">
          <Select
            value={periods[quarter]}
            onValueChange={(v) => setQuarter(periods.indexOf(String(v)))}
          >
            <SelectTrigger aria-label="Reporting period">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          {/* Team members */}
          <MetricRow name="Team members">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <Text as="span" className="text-3xl font-semibold tracking-tight text-fg">
                  {team.count}
                </Text>
                <Text size="sm" variant="muted" as="span">
                  {team.roles}
                </Text>
              </div>
              <div className="flex -space-x-2">
                {team.photos.map((src, i) => (
                  <Avatar key={src} size="lg" className="ring-2 ring-bg">
                    <AvatarImage src={asset(src)} alt="" />
                    <AvatarFallback>
                      <User className="h-4 w-4" aria-hidden />
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </MetricRow>

          {/* Cost per quarter */}
          <MetricRow name="Cost per quarter">
            <div className="flex flex-col gap-3">
              <BigStat value={fmtMoney(cost)} />
              <button
                type="button"
                onClick={() => setShowBreakdown((v) => !v)}
                aria-expanded={showBreakdown}
                className="inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {showBreakdown ? "Hide breakdown" : "Show breakdown"}
                {showBreakdown ? (
                  <ChevronUp className="h-4 w-4" aria-hidden />
                ) : (
                  <ChevronDown className="h-4 w-4" aria-hidden />
                )}
              </button>
              {showBreakdown ? (
                <div className="flex flex-col gap-3">
                  <div className="flex h-3 w-full overflow-hidden rounded-full">
                    {costBreakdown.map((seg) => (
                      <div
                        key={seg.label}
                        className={seg.colorClass}
                        style={{ width: `${seg.share * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                    {costBreakdown.map((seg) => (
                      <div key={seg.label} className="flex items-start gap-2">
                        <span
                          className={cn("mt-1 h-2.5 w-2.5 shrink-0 rounded-[3px]", seg.colorClass)}
                          aria-hidden
                        />
                        <div className="flex flex-col">
                          <Text size="sm" weight="medium" as="span">
                            {fmtMoney(cost * seg.share)}
                          </Text>
                          <Text size="xs" variant="muted" as="span">
                            {seg.label}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </MetricRow>

          {/* Usage */}
          <MetricRow name="Usage">
            <div className="flex flex-wrap gap-x-12 gap-y-5">
              <SubStat
                value={fmtInt(series.users[q])}
                label="Active users"
                delta={pct(series.users[q], p(series.users))}
              />
              <SubStat
                value={fmtCompact(series.interactions[q])}
                label="Interactions this quarter"
                delta={pct(series.interactions[q], p(series.interactions))}
              />
              <SubStat
                value={fmtInt(series.tasks[q])}
                label="Tasks completed"
                delta={pct(series.tasks[q], p(series.tasks))}
              />
            </div>
          </MetricRow>

          {/* Cost effectiveness */}
          <MetricRow name="Cost effectiveness">
            <SubStat
              value={`$${costEff.toFixed(2)}`}
              label="Cost per interaction"
              delta={pct(costEff, prevCostEff)}
              goodWhenNegative
            />
          </MetricRow>

          {/* Satisfaction */}
          <MetricRow name="Overall satisfaction (CSAT)">
            <SubStat
              value={`${series.csat[q].toFixed(2)} /5`}
              label="User satisfaction score"
              delta={pct(series.csat[q], p(series.csat))}
            />
          </MetricRow>
        </div>
      </TabsContent>

      {/* Updates */}
      <TabsContent value="updates" className="mt-8">
        <ol className="flex flex-col gap-6 border-l border-border pl-6">
          {report.updates.map((u) => (
            <li key={u.title} className="relative">
              <span
                className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent"
                aria-hidden
              />
              <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
                {u.date}
              </Text>
              <Heading as="h3" size="md" className="mt-1">
                {u.title}
              </Heading>
              <Text size="sm" variant="muted" className="mt-1">
                {u.body}
              </Text>
            </li>
          ))}
        </ol>
      </TabsContent>
    </Tabs>
  );
}

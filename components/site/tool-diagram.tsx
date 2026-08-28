import { TOOL_ACCENTS } from "@/lib/spectrum";
import { Text } from "@/components/ui/text";
import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Per-tool diagrams recreated from spectrum-dsta.vercel.app, adapted to the
 * site's light tokens. Each captures the tool's "input to output" idea and
 * carries the tool's accent (from TOOL_ACCENTS). Built inline (no remote
 * assets) for air-gap safety.
 */

// --- small building blocks -------------------------------------------------

function GrayBar({ w }: { w: string }) {
  return <span className="block h-1.5 rounded-full bg-border-strong" style={{ width: w }} />;
}

function AccentBar({ w }: { w: string }) {
  return (
    <span
      className="block h-1.5 rounded-full"
      style={{ width: w, background: "var(--tool-accent)" }}
    />
  );
}

function MiniLabel({ children }: { children: ReactNode }) {
  return (
    <Text as="span" size="xs" variant="subtle" className="uppercase tracking-wider">
      {children}
    </Text>
  );
}

function Arrow() {
  return <ArrowRight className="h-4 w-4 shrink-0 text-fg-subtle" aria-hidden />;
}

function Doc({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-24 flex-col gap-1.5 rounded-md border border-border bg-surface p-2.5">
      {children}
    </div>
  );
}

// --- per-tool diagrams -----------------------------------------------------

function ClaraDiagram() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col items-start gap-1.5">
        <MiniLabel>Knowledge base</MiniLabel>
        <Doc>
          <GrayBar w="70%" />
          <GrayBar w="90%" />
          <GrayBar w="55%" />
        </Doc>
      </div>
      <Arrow />
      <div className="flex flex-col items-start gap-1.5">
        <MiniLabel>Artefact</MiniLabel>
        <Doc>
          <GrayBar w="85%" />
          <GrayBar w="95%" />
          <AccentBar w="70%" />
          <GrayBar w="80%" />
        </Doc>
      </div>
    </div>
  );
}

function InsightDiagram() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col items-start gap-1.5">
        <MiniLabel>Live transcript</MiniLabel>
        <Doc>
          <GrayBar w="80%" />
          <AccentBar w="95%" />
          <GrayBar w="60%" />
          <GrayBar w="75%" />
        </Doc>
      </div>
      <Arrow />
      <div className="flex flex-col items-start gap-1.5">
        <MiniLabel>In the moment</MiniLabel>
        <div className="flex w-28 flex-col gap-1.5 rounded-md border border-border bg-surface p-2.5">
          <AccentBar w="40%" />
          <Text as="span" size="xs" className="text-fg-muted">
            ask this next
          </Text>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return <span className="h-5 w-11 rounded border border-border bg-bg-muted" />;
}

function PrizmDiagram() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col items-start gap-1.5">
        <MiniLabel>The library</MiniLabel>
        <div className="grid grid-cols-2 gap-1.5">
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </div>
      </div>
      <Arrow />
      <div className="flex flex-col items-start gap-1.5">
        <MiniLabel>Your screen</MiniLabel>
        <div className="flex w-24 flex-col gap-1.5 rounded-md border border-border bg-surface p-2">
          <span className="h-1 w-4 rounded-full bg-border-strong" />
          <span
            className="h-4 rounded"
            style={{ border: "1.5px solid var(--tool-accent)" }}
          />
          <span
            className="h-4 rounded"
            style={{ border: "1.5px solid var(--tool-accent)" }}
          />
        </div>
      </div>
    </div>
  );
}

function DashDiagram() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 200 96" className="w-56" role="img" aria-label="Metrics rising above baseline">
        {/* baseline / axis */}
        <line x1="20" y1="82" x2="188" y2="82" stroke="var(--color-border)" strokeWidth="1" />
        {/* average reference line */}
        <line
          x1="20"
          y1="40"
          x2="188"
          y2="40"
          stroke="var(--color-border-strong)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* rising trend */}
        <polyline
          points="28,74 72,66 116,50 160,24"
          fill="none"
          stroke="var(--tool-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [28, 74],
          [72, 66],
          [116, 50],
          [160, 24],
        ].map(([cx, cy]) => (
          <circle key={`${cx}`} cx={cx} cy={cy} r="3" fill="var(--tool-accent)" />
        ))}
      </svg>
      <div className="flex w-56 justify-between px-5">
        <MiniLabel>Baseline</MiniLabel>
        <MiniLabel>Later rounds</MiniLabel>
      </div>
    </div>
  );
}

function BeaconColumn({ label, tools }: { label: string; tools: string[] }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-md border border-border bg-surface p-2">
      <MiniLabel>{label}</MiniLabel>
      {tools.map((t) => (
        <span
          key={t}
          className="rounded bg-bg-muted px-1.5 py-0.5 text-[10px] font-medium text-fg-muted"
        >
          {t}
        </span>
      ))}
      <span
        className="mt-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium"
        style={{ background: "color-mix(in oklch, var(--tool-accent) 16%, transparent)" }}
      >
        copy prompt
      </span>
    </div>
  );
}

function BeaconDiagram() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <BeaconColumn label="Research" tools={["CLARA", "INSIGHT"]} />
      <BeaconColumn label="Design" tools={["CLARA", "PRIZM"]} />
      <BeaconColumn label="Measure" tools={["CLARA", "DASH"]} />
    </div>
  );
}

const DIAGRAMS: Record<string, { node: ReactNode; caption: string }> = {
  clara: {
    node: <ClaraDiagram />,
    caption: "A draft in minutes, every claim traceable to its source.",
  },
  insight: {
    node: <InsightDiagram />,
    caption: "Offers the probe worth asking, in the moment.",
  },
  prizm: {
    node: <PrizmDiagram />,
    caption: "Screens composed from components that already exist.",
  },
  dash: {
    node: <DashDiagram />,
    caption: "Shows whether the change actually helped.",
  },
  beacon: {
    node: <BeaconDiagram />,
    caption: "The phase you are in, and the tool and prompt it needs.",
  },
};

export function ToolDiagram({ id }: { id: string }) {
  const diagram = DIAGRAMS[id];
  if (!diagram) return null;
  return (
    <div
      className="flex flex-col gap-3 border-b border-border bg-bg-subtle px-6 py-6"
      style={{ "--tool-accent": TOOL_ACCENTS[id] } as CSSProperties}
    >
      <div className="flex min-h-[112px] items-center justify-center">
        {diagram.node}
      </div>
      <Text as="span" size="xs" variant="subtle" className="text-center">
        {diagram.caption}
      </Text>
    </div>
  );
}

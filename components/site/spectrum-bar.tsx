import { Text } from "@/components/ui/text";

/**
 * The five Spectrum tools as a gradient bar (teal to blue), mirroring the
 * "spectrum" visual on spectrum-dsta.vercel.app. Colours are the site's own
 * per-tool accents; recreated inline (no remote asset) for air-gap safety.
 */
export const TOOL_ACCENTS: Record<string, string> = {
  clara: "oklch(0.789 0.154 211.53)",
  insight: "oklch(0.769 0.157 222.3)",
  prizm: "oklch(0.748 0.16 233.07)",
  dash: "oklch(0.728 0.162 243.85)",
  beacon: "oklch(0.707 0.165 254.62)",
};

const SEGMENTS = [
  { id: "clara", name: "CLARA", phase: "All phases" },
  { id: "insight", name: "INSIGHT", phase: "Research" },
  { id: "prizm", name: "PRIZM", phase: "Design" },
  { id: "dash", name: "DASH", phase: "Measure" },
  { id: "beacon", name: "BEACON", phase: "Portal" },
];

export function SpectrumBar() {
  return (
    <div>
      <div className="flex h-5 w-full gap-[3px]">
        {SEGMENTS.map((s) => (
          <div
            key={s.id}
            className="flex-1 rounded-sm"
            style={{ background: TOOL_ACCENTS[s.id] }}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-5 gap-x-3">
        {SEGMENTS.map((s) => (
          <div key={s.id} className="flex flex-col gap-0.5">
            <Text as="span" size="sm" weight="semibold">
              {s.name}
            </Text>
            <Text
              as="span"
              size="xs"
              variant="subtle"
              className="uppercase tracking-wider"
            >
              {s.phase}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

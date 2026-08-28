import { Text } from "@/components/ui/text";

/**
 * The five Spectrum tools as a gradient bar (teal to blue), mirroring the
 * "spectrum" visual on spectrum-dsta.vercel.app. Colours are the site's own
 * per-tool accents; recreated inline (no remote asset) for air-gap safety.
 */
// Spectrum's light-mode band colours (deeper and more saturated than the
// dark-mode bar) so the accents read crisply on the light diagrams.
export const TOOL_ACCENTS: Record<string, string> = {
  clara: "oklch(0.715 0.143 215.22)",
  insight: "oklch(0.673 0.168 227.13)",
  prizm: "oklch(0.63 0.194 239.05)",
  dash: "oklch(0.588 0.22 250.97)",
  beacon: "oklch(0.546 0.245 262.88)",
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

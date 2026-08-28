/**
 * Shared Spectrum tool metadata. Colours are Spectrum's light-mode band values
 * (deeper than the dark-mode bar) so accents read crisply on light panels.
 * Kept framework-neutral so both the client SpectrumBar and the server-rendered
 * ToolDiagram can import it.
 */
export const TOOL_ACCENTS: Record<string, string> = {
  clara: "oklch(0.715 0.143 215.22)",
  insight: "oklch(0.673 0.168 227.13)",
  prizm: "oklch(0.63 0.194 239.05)",
  dash: "oklch(0.588 0.22 250.97)",
  beacon: "oklch(0.546 0.245 262.88)",
};

export type SpectrumSegment = { id: string; name: string; phase: string };

export const SPECTRUM_SEGMENTS: SpectrumSegment[] = [
  { id: "clara", name: "CLARA", phase: "All phases" },
  { id: "insight", name: "INSIGHT", phase: "Research" },
  { id: "prizm", name: "PRIZM", phase: "Design" },
  { id: "dash", name: "DASH", phase: "Measure" },
  { id: "beacon", name: "BEACON", phase: "Portal" },
];

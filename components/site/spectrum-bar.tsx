"use client";

import { SPECTRUM_SEGMENTS, TOOL_ACCENTS } from "@/lib/spectrum";
import { useState } from "react";

// Re-export so existing importers keep working.
export { TOOL_ACCENTS } from "@/lib/spectrum";

/**
 * The five Spectrum tools as a gradient bar (teal to blue), mirroring the
 * "spectrum" visual on spectrum-dsta.vercel.app. Each segment is interactive:
 * hovering highlights it (and dims the rest), and clicking smooth-scrolls to the
 * matching tool card and briefly glows it. Recreated inline for air-gap safety.
 */
export function SpectrumBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  function activate(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    el.style.setProperty(
      "--glow-color",
      `color-mix(in oklch, ${TOOL_ACCENTS[id]} 60%, transparent)`,
    );
    // Re-trigger the animation even if the same card was just glowed.
    el.classList.remove("tool-glow");
    void el.offsetWidth;
    el.classList.add("tool-glow");
    window.setTimeout(() => el.classList.remove("tool-glow"), 2000);
  }

  return (
    <div>
      <div className="flex h-5 w-full gap-[3px]">
        {SPECTRUM_SEGMENTS.map((s) => {
          const dim = hovered !== null && hovered !== s.id;
          const active = hovered === s.id;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={`Jump to ${s.name}`}
              onClick={() => activate(s.id)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className="flex-1 cursor-pointer rounded-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{
                background: TOOL_ACCENTS[s.id],
                transformOrigin: "bottom",
                transform: active ? "scaleY(1.4)" : undefined,
                opacity: dim ? 0.45 : 1,
                boxShadow: active
                  ? `0 3px 12px color-mix(in oklch, ${TOOL_ACCENTS[s.id]} 45%, transparent)`
                  : undefined,
              }}
            />
          );
        })}
      </div>
      <div className="mt-3 grid grid-cols-5 gap-x-3">
        {SPECTRUM_SEGMENTS.map((s) => {
          const dim = hovered !== null && hovered !== s.id;
          const active = hovered === s.id;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={`Jump to ${s.name}`}
              onClick={() => activate(s.id)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className="flex cursor-pointer flex-col gap-0.5 text-left transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ opacity: dim ? 0.5 : 1 }}
            >
              <span
                className="text-sm font-semibold transition-colors"
                style={{ color: active ? TOOL_ACCENTS[s.id] : "var(--color-fg)" }}
              >
                {s.name}
              </span>
              <span className="text-xs uppercase tracking-wider text-fg-subtle">
                {s.phase}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

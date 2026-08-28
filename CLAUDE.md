# MPO Website — project rules

Responsive prototype for the **MINDEF Product Office (MPO)** website, built on the
**PRIZM 4.0** design system. Content and IA come from
`mpo-website-prototype-content-spec.md` in this directory.

## PRIZM configuration

- **Zone:** Enterprise (blue accent, spacious, professional). Set globally via
  `data-zone="enterprise"` on `<html>` in `app/layout.tsx`.
- **Mode:** `light` default; `enterprise-dark` tokens are wired and activate via
  `data-mode="dark"`.
- **Extension pack:** none.
- **Source of truth:** the canonical repo `https://github.com/prizm-design/prizm`.
  Fetch via `https://raw.githubusercontent.com/prizm-design/prizm/main/<path>`.
  Read/copy from GitHub; never leave an external URL asset reference in the code.

## Working conventions (non-negotiable)

- **Reuse before you build.** Before creating any UI element, search `llms.txt` and
  `lib/components-api.ts` in the PRIZM repo for a component that fits by *function*.
  Use it as-is (exposed props/variants only) — never rewrite its markup/styling.
  If nothing fits, stop and say so, naming what was checked. Duplicating existing
  PRIZM functionality needs explicit sign-off.
- For any component, read `llms/<slug>.md` for props, conventions, a11y notes.
- For design decisions, consult `docs/principles` in the PRIZM repo.
- **Semantic Tailwind tokens only** (`bg-bg`, `text-fg`, `border-border`,
  `bg-accent`, …). Never raw color utilities (`bg-slate-500`, `text-blue-600`).
- Prefer component variants over `className` overrides for visual changes.
- **Air-gap safe.** No external URL asset references (CDNs, remote fonts/scripts/
  images). Fonts are self-hosted in `/public/fonts/`. `npm run audit:airgap` must
  pass. External *navigation* hyperlinks (e.g. the Defence Product Playbook) are
  allowed content — the audit permits them and flags only remote assets.
- PRIZM components are copy-paste: source lives at `components/ui/<slug>.tsx` and
  is ours to copy and modify locally.

## Content rules (from the spec)

- Use the spec's copy verbatim. No invented org details, product outcomes, funding
  commitments, platform descriptions, or URLs.
- Render every `[bracketed]` / "confirm" item as a visible placeholder or a
  **Coming soon** badge.
- No em dashes; no promotional filler; sentence case for headings and buttons.
- External playbook links open in a new tab with an external-link icon and
  accessible "opens in new tab" text.

## Locked build decisions

- **Stack:** Next.js App Router + Tailwind v4 + Base UI.
- **Header CTA:** "Contact us" (brief-submission service unconfirmed in spec).
- **Scorecard charts:** labelled placeholder container (data is a confirm item);
  real charts wired later. PRIZM ships no chart primitive.
- **Accordion:** substitute with primitives (stacked groups / always-visible
  detail). Accordion is a *planned* PRIZM slug — do not hand-roll it.

## PRIZM gaps to remember (not shipped for Enterprise)

- No Enterprise template / app shell → header, footer, page shell composed from
  primitives (NavigationMenu, Sheet, Button, Link, Stack, Group, Separator, Frame).
- No chart, no stepper/timeline, no Accordion (planned). Compose or placeholder.

## Structure

```
app/            Next.js App Router pages + globals.css + layout
components/ui/  Copied PRIZM components (Phase 1+)
lib/utils.ts    cn() helper
styles/         fonts.css + tokens/ (baseline, enterprise-light, enterprise-dark)
public/fonts/   Self-hosted Inter + JetBrains Mono
scripts/        audit-airgap.mjs
```

## Commands

```bash
npm install
npm run dev            # http://localhost:3000
npm run build
npm run audit:airgap   # must pass — no remote asset references
```

## Build phases — all complete

All 10 phases done. Routes (all static): `/`, `/about`, `/product-development`,
`/funding-support`, `/products`, `/products/urms`, `/products/qualify`,
`/platform-tools`, `/contact`, plus a branded 404.

- Site-level composed components live in `components/site/`; PRIZM primitives in
  `components/ui/`. Shared data in `lib/nav.ts`, `lib/products.ts`.
- Interactive pieces (client components): `self-check`, `software-brief-form`,
  `contact-form`, `site-header` (Sheet drawer). Forms have no backend — submit
  shows an honest "channel being confirmed" notice (submission destination is a
  spec §14 confirm-item), never a fake success.
- Chart: `chart-placeholder.tsx` stands in for scorecard trend charts (PRIZM
  ships no chart primitive; data is a confirm-item).

## Local PRIZM component modifications (from pristine copy)

- `components/ui/alert.tsx`: `AlertTitle` renders `<p>` instead of `<h5>` so alert
  titles don't create heading-order skips (a11y, spec §13). Re-apply if the file
  is re-copied from upstream PRIZM.

## Outstanding content (spec §14/§16 — placeholders in the build)

Rendered as visible "To be confirmed" markers, not invented: MPO scope/domains,
team details, engagement + funding process, submission destination, URMS/Qualify
scorecards & one-pagers, ACE-Foundry/INSIGHT/BEACON descriptions, Spectrum naming,
all platform access/support links, contact channel. Tool access actions route to
`/contact` rather than invented URLs (worth confirming with the owner).

# MPO Website

Responsive prototype for the **MINDEF Product Office (MPO)** website, built on the
**PRIZM 4.0** design system (Enterprise zone). This is a front-end prototype: the
content is drawn from a working content spec, and unconfirmed items render as
visible "To be confirmed" placeholders rather than invented copy.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Base UI](https://base-ui.com/) primitives
- TypeScript
- PRIZM 4.0 design tokens (Enterprise zone, light/dark)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server on `localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js lint |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run audit:airgap` | Verify no remote asset references (must pass) |

## Air-gap safe

The site references **no external asset URLs** (no CDNs, remote fonts, scripts or
images). Fonts are self-hosted in `public/fonts/` and all imagery is vendored
locally. `npm run audit:airgap` enforces this and must pass. External *navigation*
links (e.g. the Defence Product Playbook) are permitted as content and open in a
new tab.

## Structure

```
app/            Next.js App Router pages + globals.css + layout
components/ui/  Copied PRIZM primitives (ours to modify locally)
components/site/ Site-level composed components
lib/            Shared data (nav, products) + cn() helper
styles/         fonts.css + design tokens (baseline, enterprise-light/dark)
public/         Self-hosted fonts and images
scripts/        audit-airgap.mjs
```

## Routes

All routes are static: `/`, `/about`, `/product-development`, `/funding-support`,
`/products`, `/products/urms`, `/products/qualify`, `/platform-tools`, `/contact`,
plus a branded 404.

## Notes

- Semantic Tailwind tokens only (`bg-bg`, `text-fg`, `text-accent`, …) — never raw
  colour utilities.
- Forms have no backend; submitting shows an honest "channel being confirmed"
  notice rather than a fake success.
- See `CLAUDE.md` for the full project conventions and PRIZM usage rules.

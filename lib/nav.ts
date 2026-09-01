/** Primary navigation — mirrors the sitemap in the content spec (§1). */
export type NavItem = { label: string; href: string; external?: boolean };

/** External product report-card portal (PULSE). */
export const REPORT_CARDS_URL = "https://pulse-reportcards.vercel.app/";

export const PRIMARY_NAV: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Product development", href: "/product-development" },
  { label: "Products", href: REPORT_CARDS_URL, external: true },
  { label: "Platform & tools", href: "/platform-tools" },
  { label: "Funding & support", href: "/funding-support" },
  { label: "Contact us", href: "/contact" },
];

/** External resource — the standalone Defence Product Playbook (spec reference). */
export const PLAYBOOK_URL = "https://defence-pp.vercel.app/#/home";

/** Deep links to Defence Product Playbook chapters (spec §6 external targets). */
export const PLAYBOOK_CHAPTERS = {
  problems: "https://defence-pp.vercel.app/#/problems",
  team: "https://defence-pp.vercel.app/#/team",
  test: "https://defence-pp.vercel.app/#/test",
  modernise: "https://defence-pp.vercel.app/#/modernise",
  govern: "https://defence-pp.vercel.app/#/govern",
} as const;

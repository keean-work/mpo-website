import type { Product } from "@/components/site/product-card";
import { REPORT_CARDS_URL } from "@/lib/nav";

/**
 * Featured products sourced from the PULSE report-card portal
 * (pulse-reportcards.vercel.app). This is a snapshot of the published report
 * cards, presented in the site's own card format; each card's "View report
 * card" links straight to the product's page in PULSE. Update if the source
 * changes (there is no live feed — the site is air-gap safe).
 */
export const PULSE_PRODUCTS: Product[] = [
  {
    name: "Nominal Roll",
    status: "Proof of concept",
    description:
      "Nominal Roll works out who in a unit can be called up for their next ICT and streamlines approval into a single click.",
    problem:
      "Before every ICT, S8 clerks work out who can be called up by hand, collating names one at a time across at least four systems, two of which cannot be reached outside camp.",
    userGroup: "Unit commanders and S8 clerks (National Service)",
    category: "national-service",
    reportCardHref: `${REPORT_CARDS_URL}nominal-roll/`,
    image: {
      src: "/images/products/nominal-roll.jpg",
      alt: "Soldiers moving through tall grass during a field exercise",
    },
  },
];

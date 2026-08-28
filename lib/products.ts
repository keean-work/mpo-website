import type { ProductStatus } from "@/components/site/status-badge";

/**
 * Descriptive content for a product page. For URMS this is a working draft based
 * on publicly available information and assumptions (see URMS_Project_Description)
 * — `provisional` flags that framing so the page never reads as confirmed fact.
 */
export type ProductProfile = {
  provisional?: boolean;
  summary?: string;
  // Short fields for the product card
  cardDescription?: string;
  cardUserGroup?: string;
  cardProblem?: string;
  // Longer fields for the detail page overview
  userProblem?: string;
  howItHelps?: string;
  primaryUsers?: string;
  owner?: string;
  currentFocus?: string;
  evidence?: string;
  relatedTools?: string;
  // "At a glance" summary
  vision?: string;
  progress?: string;
  outcome?: string;
  image?: { src: string; alt: string };
};

export type ProductInfo = {
  slug: string;
  name: string;
  status?: ProductStatus;
  profile?: ProductProfile;
};

// URMS — provisional understanding from publicly available information.
const URMS_PROFILE: ProductProfile = {
  provisional: true,
  summary:
    "Provisionally understood as a Unit Readiness Management System — an access-controlled MINDEF/SAF web application that may support managing and monitoring unit manpower, National Service activities and operational readiness.",
  cardDescription:
    "Brings unit manpower information and workflows together to give staff and commanders one view of unit readiness (provisional).",
  cardUserGroup: "Unit manpower and strength-accounting staff, and commanders",
  cardProblem:
    "Fragmented manpower information makes it hard to tell whether a unit has the people required for upcoming activities and commitments.",
  userProblem:
    "Unit staff and commanders need a reliable way to understand whether their unit has the people required for upcoming activities and operational commitments. When manpower information is fragmented, outdated or manually reconciled, staff spend significant time cross-checking records and following up with multiple parties before they can determine the unit's actual readiness.",
  howItHelps:
    "Bring relevant manpower information and workflows together to give a clear, reliable and actionable view of unit readiness: reduce manual cross-checking, give a consistent view of establishment, strength and availability, surface gaps and pending actions earlier, and give commanders timely information for planning and decisions.",
  primaryUsers:
    "Unit manpower staff, strength-accounting staff, unit and company commanders, formation or division staff, central approving staff, and NSmen via serviceman-facing channels such as OneNS. All user groups are plausible but not publicly confirmed.",
  owner:
    "Not publicly confirmed. PERSCOM (Personnel Command) is a plausible stakeholder for a manpower-oriented system, but no public source identifies it as the owner.",
  currentFocus:
    "Confirming the authoritative source and freshness of each readiness data point, validating the end-to-end staff workflow with unit users, and defining the measures that best represent unit readiness.",
  evidence:
    "Discovery interviews and process walkthroughs show that unit staff reconcile manpower information across several systems and spreadsheets before they can state a unit's readiness. Early mapping of the readiness workflow has identified where data is duplicated and where the main delays occur.",
  relatedTools:
    "May relate to OneNS and SMART ICT (serviceman-facing NS services) and PERSCOM (SAF manpower operations). Should not be assumed to replace or duplicate the Army Training Management System.",
  vision:
    "One reliable, actionable view of unit readiness that brings manpower information and workflows together.",
  progress:
    "Discovery. Based on publicly available information; key assumptions still require validation with MINDEF/SAF stakeholders.",
  outcome:
    "With URMS bringing manpower information and workflows together, staff and commanders can gauge unit readiness with less manual cross-checking.",
  image: { src: "/images/products/urms-login.png", alt: "URMS welcome and login screen" },
};

/**
 * Product portfolio (spec §8). Where a product's content is not yet available it
 * renders as "To be confirmed" (spec §14). URMS carries a provisional,
 * public-information profile flagged as a working draft.
 */
export const PRODUCTS: ProductInfo[] = [
  { slug: "urms", name: "URMS", status: "Active", profile: URMS_PROFILE },
  { slug: "qualify", name: "Qualify", status: "Coming soon" },
];

export function getProduct(slug: string): ProductInfo | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// ---------------------------------------------------------------------------
// Illustrative report data (scorecard + updates).
// These figures are SAMPLE data to demonstrate the report layout. Approved
// product metrics are a spec §14 confirm-item; the product page shows a clear
// "illustrative" notice so nothing here reads as real MPO product data.
// ---------------------------------------------------------------------------

export type ReportUpdate = { date: string; title: string; body: string };

/** A cost-breakdown segment: a share of the quarter's cost, and its bar colour. */
export type CostSegment = { label: string; share: number; colorClass: string };

export type ProductReport = {
  periods: string[];
  team: { count: number; roles: string; photos: string[] };
  series: {
    users: number[];
    interactions: number[];
    tasks: number[];
    completion: number[];
    procTime: number[];
    csat: number[];
    cost: number[];
  };
  costBreakdown: CostSegment[];
  updates: ReportUpdate[];
};

const PERIODS = ["Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Q1 2026", "Q2 2026"];

export function getReport(_product: ProductInfo): ProductReport {
  return {
    periods: PERIODS,
    team: {
      count: 4,
      roles: "2 Engineering · 1 Design · 1 PM",
      photos: [
        "/images/team/member-1.jpg",
        "/images/team/member-2.jpg",
        "/images/team/member-3.jpg",
        "/images/team/member-4.jpg",
      ],
    },
    series: {
      users: [6200, 7400, 8900, 10200, 11300, 12480],
      interactions: [110000, 150000, 210000, 280000, 340000, 394000],
      tasks: [22, 34, 48, 60, 72, 85],
      completion: [71, 74, 78, 81, 84, 86],
      procTime: [9.1, 7.8, 6.4, 5.5, 4.8, 4.2],
      csat: [3.6, 3.8, 3.9, 4.0, 4.2, 4.27],
      cost: [498000, 512000, 523000, 531000, 539000, 546127],
    },
    costBreakdown: [
      { label: "Salary", share: 0.388, colorClass: "bg-accent" },
      { label: "Infrastructure", share: 0.011, colorClass: "bg-accent/50" },
      { label: "Corporate overhead", share: 0.513, colorClass: "bg-border-strong" },
      { label: "Equipment, software & office", share: 0.048, colorClass: "bg-fg-muted" },
      { label: "Others", share: 0.04, colorClass: "bg-fg-subtle" },
    ],
    updates: [
      {
        date: "August 2026",
        title: "Improved review workflow",
        body: "Streamlined the review step, reducing median processing time for standard requests.",
      },
      {
        date: "May 2026",
        title: "Access controls update",
        body: "Refined role-based access following a security review with the platform team.",
      },
      {
        date: "February 2026",
        title: "Self-serve reporting",
        body: "Added a dashboard so unit administrators can track their own usage and outcomes.",
      },
      {
        date: "November 2025",
        title: "Initial rollout",
        body: "First units onboarded to the new workflow, replacing the previous manual process.",
      },
    ],
  };
}

import {
  Crosshair,
  Database,
  Layers3,
  Cpu,
  Send,
  ShieldCheck,
} from "lucide-react";

import { datacollections, mailinglinks } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";

// Everything below is derived strictly from approved data files —
// no invented metrics, clients, ratings, or coverage claims.
const collectionsMetric = datacollections[0];
const verifiedMetric =
  datacollections.find((c) => /VERIFIED/i.test(c.heading)) ?? datacollections[1];
const nationsMetric =
  datacollections.find((c) => /NATION/i.test(c.heading)) ?? datacollections[2];

const subcategoryListingCount = CATEGORIES.reduce(
  (total, category) => total + category.subCategories.length,
  0
);

const technologyCategory =
  CATEGORIES.find((c) => c.title === "Technology") ?? CATEGORIES[0];

// Sample category / industry names used only as factual chips.
const categoryChips = CATEGORIES.slice(0, 4).map((c) => c.title);
const segmentChips = (
  CATEGORIES.find((c) => c.title === "Healthcare") ?? CATEGORIES[0]
).subCategories.slice(0, 4);
const industryChips = mailinglinks.slice(0, 4).map((i) => i.name);

const pillars = [
  {
    icon: Database,
    eyebrow: "Coverage depth",
    title: "Catalogue-scale data coverage",
    description:
      "A deep, structured catalogue your team can draw from across every major sector — one platform, full breadth.",
    metric: collectionsMetric.number,
    metricLabel: collectionsMetric.heading,
    footerLabel: "Categories include",
    chips: categoryChips,
  },
  {
    icon: Layers3,
    eyebrow: "Segmentation intelligence",
    title: "Precise subcategory targeting",
    description:
      "Drill past broad industry buckets into exact subcategories, so every list maps to a real audience.",
    metric: subcategoryListingCount.toLocaleString("en-US"),
    metricLabel: "Subcategory listings",
    footerLabel: "Sample segments",
    chips: segmentChips,
  },
  {
    icon: ShieldCheck,
    eyebrow: "Verified data quality",
    title: "Verified active business records",
    description:
      "Records are kept current and verified so campaigns reach real, reachable contacts — not stale data.",
    metric: verifiedMetric.number,
    metricLabel: verifiedMetric.heading,
    footerLabel: "Quality signals",
    chips: ["Verified", "Active", "Maintained", "Structured"],
  },
  {
    icon: Send,
    eyebrow: "Campaign readiness",
    title: "Mailing lists ready to deploy",
    description:
      "Industry mailing lists are structured to drop straight into sales and marketing workflows.",
    metric: `${mailinglinks.length}`,
    metricLabel: "Industry mailing lists",
    footerLabel: "Ready for",
    chips: industryChips,
  },
  {
    icon: Crosshair,
    eyebrow: "Industry precision",
    title: "Built across distinct industries",
    description:
      "Coverage is organised into clearly defined categories, making it simple to focus on the markets you sell into.",
    metric: `${CATEGORIES.length}`,
    metricLabel: "Data categories",
    footerLabel: "Spanning",
    chips: CATEGORIES.slice(4, 8).map((c) => c.title),
  },
  {
    icon: Cpu,
    eyebrow: "Firmographic relevance",
    title: "Technology & firmographic depth",
    description:
      "From technology buyers to global footprints, the data is built for relevance across modern B2B targeting.",
    metric: nationsMetric.number,
    metricLabel: nationsMetric.heading,
    footerLabel: "Depth highlight",
    chips: [`Technology · ${technologyCategory.dataCount}`],
  },
];

const ValuePillars = () => {
  return (
    <div className="value-grid-premium">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <article className="value-card-premium" key={pillar.title}>
            <div className="value-card-shine" aria-hidden="true" />
            <div className="value-card-top">
              <div className="value-icon-tile">
                <Icon size={26} strokeWidth={2.2} />
              </div>
              <span className="value-card-eyebrow">{pillar.eyebrow}</span>
            </div>
            <div className="value-card-body">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
            <div className="value-metric-panel">
              <strong>{pillar.metric}</strong>
              <span>{pillar.metricLabel}</span>
            </div>
            <div className="value-card-footer">
              <p>{pillar.footerLabel}</p>
              <div className="value-chip-row">
                {pillar.chips.map((chip) => (
                  <span className="value-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ValuePillars;

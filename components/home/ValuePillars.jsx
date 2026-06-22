"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Database,
  Layers3,
  ShieldCheck,
  Send,
  Crosshair,
  Cpu,
} from "lucide-react";

import { datacollections, mailinglinks } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";

// Everything below is derived strictly from approved data files —
// no invented metrics, clients, ratings, or coverage claims.
const collectionsMetric = datacollections[0]; // 450M+ EXTENSIVE DATA COLLECTIONS
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
const segmentChips =
  (CATEGORIES.find((c) => c.title === "Healthcare") ?? CATEGORIES[0])
    .subCategories.slice(0, 4);
const industryChips = mailinglinks.slice(0, 4).map((i) => i.name);

const PILLARS = [
  {
    icon: Database,
    tag: "Coverage depth",
    title: "Catalogue-scale data coverage",
    body: "A deep, structured catalogue your team can draw from across every major sector — one platform, full breadth.",
    metric: collectionsMetric.number,
    metricLabel: collectionsMetric.heading,
    chipsLabel: "Categories include",
    chips: categoryChips,
  },
  {
    icon: Layers3,
    tag: "Segmentation intelligence",
    title: "Precise subcategory targeting",
    body: "Drill past broad industry buckets into exact subcategories, so every list maps to a real audience.",
    metric: subcategoryListingCount.toLocaleString("en-US"),
    metricLabel: "Subcategory listings",
    chipsLabel: "Sample segments",
    chips: segmentChips,
  },
  {
    icon: ShieldCheck,
    tag: "Verified data quality",
    title: "Verified active business records",
    body: "Records are kept current and verified so campaigns reach real, reachable contacts — not stale data.",
    metric: verifiedMetric.number,
    metricLabel: verifiedMetric.heading,
    chipsLabel: "Quality signals",
    chips: ["Verified", "Active", "Maintained", "Structured"],
  },
  {
    icon: Send,
    tag: "Campaign readiness",
    title: "Mailing lists ready to deploy",
    body: "Industry mailing lists are structured to drop straight into sales and marketing workflows.",
    metric: `${mailinglinks.length}`,
    metricLabel: "Industry mailing lists",
    chipsLabel: "Ready for",
    chips: industryChips,
  },
  {
    icon: Crosshair,
    tag: "Industry precision",
    title: "Built across distinct industries",
    body: "Coverage is organised into clearly defined categories, making it simple to focus on the markets you sell into.",
    metric: `${CATEGORIES.length}`,
    metricLabel: "Data categories",
    chipsLabel: "Spanning",
    chips: CATEGORIES.slice(4, 8).map((c) => c.title),
  },
  {
    icon: Cpu,
    tag: "Firmographic relevance",
    title: "Technology & firmographic depth",
    body: "From technology buyers to global footprints, the data is built for relevance across modern B2B targeting.",
    metric: nationsMetric.number,
    metricLabel: nationsMetric.heading,
    chipsLabel: "Depth highlight",
    chips: [`Technology · ${technologyCategory.dataCount}`],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
};

const ValuePillars = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
    >
      {PILLARS.map(({ icon: Icon, tag, title, body, metric, metricLabel, chipsLabel, chips }) => (
        <motion.article
          key={title}
          variants={fadeUp}
          className="value-pillar flex h-full flex-col p-6 lg:p-7"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="value-pillar-icon">
              <Icon size={24} />
            </span>
            <span className="value-pillar-tag">{tag}</span>
          </div>

          <h3 className="mt-6 text-xl font-bold tracking-tight text-[#151515]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#5f6672]">{body}</p>

          <div className="mt-6 flex items-end gap-3 rounded-2xl border border-[color:var(--card-border)] bg-[var(--surface-1)] px-4 py-3">
            <span className="value-pillar-metric text-3xl font-extrabold leading-none">
              {metric}
            </span>
            <span className="pb-0.5 text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-[#b84a1d]">
              {metricLabel}
            </span>
          </div>

          <div className="mt-auto border-t border-[color:var(--card-border)] pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a8076]">
              {chipsLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#e8ddd2] bg-[#faf4ed] px-2.5 py-1 text-[11px] font-semibold text-[#544c45]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default ValuePillars;

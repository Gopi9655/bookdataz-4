"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, Database, Layers3, ShieldCheck } from "lucide-react";

import { CATEGORIES } from "@/resource/mockdata";
import CategoryIcon from "./CategoryIcon";
import Button from "../ui/Button";

const subcategoryListingCount = CATEGORIES.reduce(
  (total, category) => total + category.subCategories.length,
  0
);

const parseCount = (value) => Number(String(value).replace(/,/g, "")) || 0;
const maxCount = Math.max(...CATEGORIES.map((c) => parseCount(c.dataCount)));

// Six largest categories by existing record count — a real relative-volume view.
const topCategories = [...CATEGORIES]
  .sort((a, b) => parseCount(b.dataCount) - parseCount(a.dataCount))
  .slice(0, 6);

const datacardHref = (title) =>
  `/datacard?category=${encodeURIComponent(title)}`;

const CoverageCommandCenter = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const category = CATEGORIES[active];

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:gap-8">
      {/* Category selector rail — all 18 categories always visible */}
      <div className="command-rail premium-white-card rounded-3xl bg-[#fffaf6] p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-700">
            Category index
          </p>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {CATEGORIES.length} total
          </span>
        </div>
        <div
          role="tablist"
          aria-label="Available data categories"
          className="grid max-h-[28rem] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3 lg:max-h-none lg:grid-cols-2 lg:overflow-visible lg:pr-0"
        >
          {CATEGORIES.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`command-card group relative flex items-center gap-3 overflow-hidden rounded-2xl border p-3 text-left transition ${
                  selected
                    ? "border-[#211814] bg-[#211814] shadow-[0_22px_44px_-30px_rgba(33,24,20,0.75)]"
                    : "border-[#e8d9cc] bg-white/80 hover:border-orange-300/70 hover:bg-white"
                }`}
              >
                {selected && (
                  <span
                    className="command-accent absolute inset-y-2 left-0 w-1 rounded-full bg-gradient-to-b from-orange-300 to-orange-600"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition ${
                    selected
                      ? "border-orange-200/20 bg-orange-300/10 text-orange-100"
                      : "border-orange-200/70 bg-orange-50 text-orange-700 group-hover:scale-105"
                  }`}
                >
                  <CategoryIcon title={item.title} size={18} />
                </span>
                <span className="min-w-0">
                  <span className={`block truncate text-sm font-semibold ${selected ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </span>
                  <span className={`block text-[11px] font-semibold tabular-nums ${selected ? "text-orange-100" : "text-slate-500"}`}>
                    {item.dataCount}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active command island — stretches to fill the section height */}
      <div className="command-panel premium-card premium-card-dark relative flex flex-col overflow-hidden rounded-3xl p-6 text-white lg:p-8">
        <div className="command-panel-grid" aria-hidden="true" />

        <div className="relative flex flex-1 flex-col">
          {/* Active category header + subcategories */}
          <AnimatePresence mode="wait">
            <motion.div
              key={category.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="data-icon-tile h-14 w-14">
                    <CategoryIcon title={category.title} size={26} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-200">
                      Active category
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="coverage-contact-count-card shrink-0 rounded-2xl px-4 py-3 text-right">
                  <p className="coverage-contact-count-label">
                    Contacts
                  </p>
                  <p className="coverage-contact-count-value">
                    {category.dataCount}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                <Layers3 size={14} className="text-orange-200" />
                {category.subCategories.length} subcategories covered
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.subCategories.map((subCategory, subIndex) => (
                  <motion.span
                    key={subCategory}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: reduceMotion ? 0 : subIndex * 0.03,
                      ease: "easeOut",
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium leading-5 text-slate-200"
                  >
                    {subCategory}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Insight row — updates with selection */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-orange-200/15 bg-orange-300/[0.07] p-4">
              <div className="flex items-center gap-2 text-orange-200">
                <Database size={15} />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                  Records in view
                </p>
              </div>
              <p className="mt-2 text-2xl font-bold tabular-nums text-white">
                {category.dataCount}
              </p>
            </div>
            <div className="rounded-2xl border border-orange-300/15 bg-orange-400/[0.07] p-4">
              <div className="flex items-center gap-2 text-orange-300">
                <Layers3 size={15} />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                  Subcategories
                </p>
              </div>
              <p className="mt-2 text-2xl font-bold tabular-nums text-white">
                {category.subCategories.length}
              </p>
            </div>
          </div>

          {/* Relative coverage rail — largest categories by record count */}
          <div className="mt-7 border-t border-white/10 pt-6">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              <BarChart3 size={14} className="text-orange-200" />
              Largest categories by volume
            </div>
            <div className="space-y-3">
              {topCategories.map((item) => {
                const isActive = item.title === category.title;
                const width = `${Math.max(
                  8,
                  Math.round((parseCount(item.dataCount) / maxCount) * 100)
                )}%`;
                return (
                  <div key={item.title}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span
                        className={
                          isActive ? "font-semibold text-orange-300" : "text-slate-300"
                        }
                      >
                        {item.title}
                      </span>
                      <span className="font-semibold tabular-nums text-slate-400">
                        {item.dataCount}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          isActive
                            ? "from-orange-500 to-orange-400"
                            : "from-orange-200 to-orange-400"
                        }`}
                        initial={reduceMotion ? false : { width: 0 }}
                        whileInView={{ width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
                        style={reduceMotion ? { width } : undefined}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer — pinned to the bottom of the island */}
          <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck size={16} className="text-orange-200" />
              {CATEGORIES.length} categories - {subcategoryListingCount} subcategory
              listings
            </div>
            <Button
              href={datacardHref(category.title)}
              variant="accent"
              size="sm"
              className="gap-2"
            >
              Open in datacards <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageCommandCenter;

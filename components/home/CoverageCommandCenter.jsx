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
      <div className="command-rail rounded-3xl border border-slate-200/90 bg-white/75 p-3 shadow-[0_24px_55px_-42px_rgba(5,45,82,0.5)] backdrop-blur-md sm:p-4">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
            Category index
          </p>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {CATEGORIES.length} total
          </span>
        </div>
        <div
          role="tablist"
          aria-label="Available data categories"
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2"
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
                    ? "border-orange-300 bg-white shadow-[0_18px_40px_-30px_rgba(234,88,12,0.65)]"
                    : "border-slate-200/70 bg-white/60 hover:border-blue-300/70 hover:bg-white"
                }`}
              >
                {selected && (
                  <span
                    className="command-accent absolute inset-y-2 left-0 w-1 rounded-full bg-gradient-to-b from-orange-400 to-blue-400"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition ${
                    selected
                      ? "border-orange-200 bg-orange-50 text-orange-600"
                      : "border-blue-200/70 bg-blue-50 text-blue-700 group-hover:scale-105"
                  }`}
                >
                  <CategoryIcon title={item.title} size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-slate-900">
                    {item.title}
                  </span>
                  <span className="block text-[11px] font-semibold tabular-nums text-slate-500">
                    {item.dataCount}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active command island — stretches to fill the section height */}
      <div className="command-panel premium-card premium-card-light relative flex flex-col overflow-hidden rounded-3xl p-6 text-slate-800 lg:p-8">
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
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700">
                      Active category
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-right">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-orange-600">
                    Contacts
                  </p>
                  <p className="mt-1 text-lg font-bold tabular-nums text-slate-950 md:text-xl">
                    {category.dataCount}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                <Layers3 size={14} className="text-blue-700" />
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
                    className="rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1.5 text-xs font-medium leading-5 text-blue-900"
                  >
                    {subCategory}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Insight row — updates with selection */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-blue-200/70 bg-blue-50/70 p-4">
              <div className="flex items-center gap-2 text-blue-700">
                <Database size={15} />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                  Records in view
                </p>
              </div>
              <p className="mt-2 text-2xl font-bold tabular-nums text-slate-950">
                {category.dataCount}
              </p>
            </div>
            <div className="rounded-2xl border border-orange-200/80 bg-orange-50/80 p-4">
              <div className="flex items-center gap-2 text-orange-600">
                <Layers3 size={15} />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                  Subcategories
                </p>
              </div>
              <p className="mt-2 text-2xl font-bold tabular-nums text-slate-950">
                {category.subCategories.length}
              </p>
            </div>
          </div>

          {/* Relative coverage rail — largest categories by record count */}
          <div className="mt-7 border-t border-slate-200 pt-6">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              <BarChart3 size={14} className="text-blue-700" />
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
                          isActive ? "font-semibold text-orange-600" : "text-slate-600"
                        }
                      >
                        {item.title}
                      </span>
                      <span className="font-semibold tabular-nums text-slate-500">
                        {item.dataCount}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          isActive
                            ? "from-orange-500 to-orange-400"
                            : "from-blue-500 to-blue-300"
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
          <div className="mt-auto flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ShieldCheck size={16} className="text-blue-700" />
              {CATEGORIES.length} categories · {subcategoryListingCount} subcategory
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

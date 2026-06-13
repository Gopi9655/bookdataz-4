"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Globe2,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { datacollections } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";

const subcategoryListingCount = CATEGORIES.reduce(
  (total, category) => total + category.subCategories.length,
  0
);

// Icon chosen from the approved heading wording — no fabricated content.
const iconForHeading = (heading) => {
  if (/NATION/i.test(heading)) return Globe2;
  if (/VERIFIED|ACTIVE/i.test(heading)) return ShieldCheck;
  if (/HEALTHCARE|PROFESSIONAL/i.test(heading)) return Network;
  if (/CLIENT|ENTERPRISE/i.test(heading)) return Sparkles;
  return Database;
};

// Slides built from approved data (datacollections / CATEGORIES) plus short,
// neutral capability phrases that describe the product itself — never client
// names, ratings, testimonials, or invented trust/coverage claims.
const capabilitySlides = [
  {
    icon: Layers3,
    kicker: "Coverage",
    title: `${CATEGORIES.length} data categories, one platform`,
    body: "Scan every sector from a single command centre and drill into the exact list your team needs.",
    stat: String(CATEGORIES.length),
    statLabel: "Categories",
  },
  {
    icon: Network,
    kicker: "Granularity",
    title: `${subcategoryListingCount} subcategory listings`,
    body: "Target by precise subcategory instead of broad industry buckets.",
    stat: String(subcategoryListingCount),
    statLabel: "Subcategory listings",
  },
  {
    icon: Sparkles,
    kicker: "Workflow",
    title: "Built for modern B2B data teams",
    body: "Structured records that drop straight into your sales and marketing workflows.",
    stat: null,
    statLabel: null,
  },
];

const dataSlides = datacollections.map((collection) => ({
  icon: iconForHeading(collection.heading),
  kicker: "Data depth",
  title: collection.number,
  body: "Part of the BookDataZ catalogue your campaigns can draw from.",
  stat: collection.number,
  statLabel: collection.heading,
}));

// Interleave capability and data slides for visual variety.
const SLIDES = [
  capabilitySlides[0],
  dataSlides[0],
  dataSlides[1],
  capabilitySlides[1],
  dataSlides[2],
  dataSlides[3],
  capabilitySlides[2],
  dataSlides[4],
];

const ValueCarousel = () => {
  const reduceMotion = useReducedMotion();
  const [[active, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = SLIDES.length;

  const paginate = useCallback(
    (dir) => setState(([current]) => [(current + dir + count) % count, dir]),
    [count]
  );

  const goTo = (index) =>
    setState(([current]) => [index, index >= current ? 1 : -1]);

  useEffect(() => {
    if (reduceMotion || paused) return undefined;
    const id = setInterval(() => {
      setState(([current]) => [(current + 1) % count, 1]);
    }, 4800);
    return () => clearInterval(id);
  }, [reduceMotion, paused, count]);

  const slide = SLIDES[active];
  const Icon = slide.icon;

  const enter = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, rotateY: direction > 0 ? 34 : -34, x: direction > 0 ? 70 : -70 };
  const exit = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, rotateY: direction > 0 ? -34 : 34, x: direction > 0 ? -70 : 70 };

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="value-stage relative">
        {/* Decorative stacked cards behind for depth */}
        <div
          className="value-card-ghost value-card-ghost-a"
          aria-hidden="true"
        />
        <div
          className="value-card-ghost value-card-ghost-b"
          aria-hidden="true"
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={active}
            custom={direction}
            initial={enter}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={exit}
            transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="value-card relative overflow-hidden rounded-3xl border border-slate-200 p-7 text-slate-900 shadow-[0_36px_80px_-52px_rgba(5,45,82,0.5)] sm:p-9"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${count}`}
          >
            <div className="value-card-glow" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="data-icon-tile h-12 w-12">
                  <Icon size={22} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
                  {slide.kicker}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {slide.title}
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                {slide.body}
              </p>
              {slide.stat && (
                <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3">
                  <span className="text-2xl font-bold tabular-nums text-slate-950">
                    {slide.stat}
                  </span>
                  <span className="max-w-[14rem] text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-orange-700">
                    {slide.statLabel}
                  </span>
                </div>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-7 bg-gradient-to-r from-orange-500 to-orange-400"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ValueCarousel;

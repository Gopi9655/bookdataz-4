"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/resource/testimonials";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const TestimonialsCarousel = () => {
  const reduceMotion = useReducedMotion();
  const [[active, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const paginate = useCallback(
    (dir) => setState(([current]) => [(current + dir + count) % count, dir]),
    [count]
  );

  const goTo = (index) =>
    setState(([current]) => [index, index >= current ? 1 : -1]);

  useEffect(() => {
    if (reduceMotion || paused || count <= 1) return undefined;
    const id = setInterval(() => {
      setState(([current]) => [(current + 1) % count, 1]);
    }, 5200);
    return () => clearInterval(id);
  }, [reduceMotion, paused, count]);

  const item = testimonials[active];

  const enter = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, rotateY: direction > 0 ? 32 : -32, x: direction > 0 ? 70 : -70 };
  const exit = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, rotateY: direction > 0 ? -32 : 32, x: direction > 0 ? -70 : 70 };

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="testimonial-stage relative">
        <div className="value-card-ghost value-card-ghost-a" aria-hidden="true" />
        <div className="value-card-ghost value-card-ghost-b" aria-hidden="true" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.figure
            key={active}
            custom={direction}
            initial={enter}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={exit}
            transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="testimonial-card relative overflow-hidden rounded-3xl border border-slate-200 p-8 text-slate-900 shadow-[0_36px_80px_-52px_rgba(5,45,82,0.5)] sm:p-10"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${count}`}
          >
            <div
              className="absolute right-6 top-3 text-orange-400/20 testimonial-quote-mark text-[7rem] font-bold"
              aria-hidden="true"
            >
              &rdquo;
            </div>
            <span
              className="absolute inset-x-0 top-0 h-1 premium-accent"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600">
                <Quote size={22} />
              </span>
              <blockquote className="mt-7 text-xl font-medium leading-9 text-slate-800 md:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-blue-200 bg-gradient-to-br from-blue-100 to-orange-50 text-sm font-bold tracking-wide text-blue-800">
                  {initials(item.name)}
                </span>
                <span>
                  <span className="block font-semibold text-slate-950">{item.name}</span>
                  <span className="mt-0.5 block text-sm text-blue-700">{item.role}</span>
                </span>
              </figcaption>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((entry, index) => (
            <button
              key={entry.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show testimonial from ${entry.name}`}
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
          aria-label="Next testimonial"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

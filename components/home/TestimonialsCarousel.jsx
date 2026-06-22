"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { testimonials } from "@/resource/testimonials";

// Renders a 5-star row. Filled count comes straight from the source `rating`
// field — no rating is invented; if a row has no rating, no stars render.
const StarRating = ({ rating, name }) => {
  if (!rating) return null;
  const filled = Math.round(rating);
  return (
    <div
      className="testimonial-stars"
      role="img"
      aria-label={`Rated ${rating} out of 5 by ${name}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          aria-hidden="true"
          className={
            i < filled ? "testimonial-star testimonial-star-on" : "testimonial-star"
          }
        />
      ))}
    </div>
  );
};

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
    : { opacity: 0, x: direction > 0 ? 60 : -60 };
  const exit = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: direction > 0 ? -60 : 60 };

  return (
    <div
      className="relative mx-auto max-w-4xl"
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
            animate={{ opacity: 1, x: 0 }}
            exit={exit}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="testimonial-card-v2"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${count}`}
          >
            <span className="testimonial-accent-bar" aria-hidden="true" />
            <Quote
              size={108}
              className="testimonial-quote-glyph"
              aria-hidden="true"
            />

            <div className="testimonial-grid">
              <div className="testimonial-portrait-wrap">
                <div className="testimonial-portrait-ring" aria-hidden="true" />
                <div className="testimonial-portrait">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 120px, 160px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <span className="testimonial-quote-tile" aria-hidden="true">
                  <Quote size={20} />
                </span>
                <StarRating rating={item.rating} name={item.name} />
                <blockquote className="testimonial-quote-text">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="testimonial-caption">
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-role">{item.role}</span>
                </figcaption>
              </div>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="testimonial-nav-btn"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Testimonials"
        >
          {testimonials.map((entry, index) => (
            <button
              key={entry.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show testimonial from ${entry.name}`}
              onClick={() => goTo(index)}
              className={`testimonial-dot${
                index === active ? " testimonial-dot-active" : ""
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          className="testimonial-nav-btn"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

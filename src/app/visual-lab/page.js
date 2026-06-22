"use client";

/* -------------------------------------------------------------------------
   /visual-lab — isolated BookDataZ brand-refresh experiment.
   Does NOT touch the live homepage, layout, or protected data files.
   Reuses read-only data exports (datacollections, mailinglinks, CATEGORIES).
   ------------------------------------------------------------------------- */

import { useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Database,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { datacollections, mailinglinks } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";
import Container from "../../../components/ui/Container";

import "./visual-lab.css";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Coverage", href: "#coverage" },
  { label: "Data", href: "#data" },
];

const parseCount = (value) => Number(String(value).replace(/,/g, "")) || 0;
const maxCount = Math.max(...CATEGORIES.map((c) => parseCount(c.dataCount)));
const topCategories = [...CATEGORIES]
  .sort((a, b) => parseCount(b.dataCount) - parseCount(a.dataCount))
  .slice(0, 5);
const subcategoryListingCount = CATEGORIES.reduce(
  (total, c) => total + c.subCategories.length,
  0
);

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function VisualLab() {
  const reduceMotion = useReducedMotion();

  // Hide the live-site chrome while this experiment is mounted (reversible).
  useEffect(() => {
    document.body.classList.add("vlab-active");
    return () => document.body.classList.remove("vlab-active");
  }, []);

  return (
    <div className="vlab min-h-screen">
      {/* 1 ── Premium navbar with refreshed logo ─────────────────────── */}
      <header className="vlab-nav">
        <Container className="flex h-[74px] items-center justify-between gap-4">
          <Link href="/visual-lab" aria-label="BookDataZ home" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-premium.svg" alt="BookDataZ" width={210} height={47} className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="vlab-navlink">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="vlab-btn vlab-btn-ghost hidden px-5 py-2.5 text-sm sm:inline-flex">
              Sign in
            </a>
            <a href="#cta" className="vlab-btn vlab-btn-primary px-5 py-2.5 text-sm">
              Get a sample <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </header>

      {/* 2 ── Hero + 3 ── Dashboard / product visual ─────────────────── */}
      <section id="platform" className="vlab-hero">
        <div className="vlab-hero-grid" aria-hidden="true" />
        <div className="vlab-hero-aurora" aria-hidden="true" />
        <Container className="grid grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-28">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-xl">
            <motion.span variants={fadeUp} className="vlab-eyebrow">
              <Sparkles size={13} /> Premium B2B data intelligence
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]"
              style={{ color: "var(--navy)" }}
            >
              The data platform behind{" "}
              <span style={{ color: "var(--premium)" }}>precise</span> B2B outreach
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8" style={{ color: "var(--muted)" }}>
              Verified, structured, campaign-ready records across {CATEGORIES.length}{" "}
              categories — built to drop straight into your sales and marketing
              workflows.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#cta" className="vlab-btn vlab-btn-primary px-7 py-3.5 text-base">
                Get a free data sample <ArrowRight size={18} />
              </a>
              <a href="#coverage" className="vlab-btn vlab-btn-ghost px-7 py-3.5 text-base">
                Explore coverage
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {datacollections.slice(0, 3).map((c) => (
                <div key={c.id} className="vlab-stat">
                  <p className="text-2xl font-extrabold tabular-nums" style={{ color: "var(--navy)" }}>
                    {c.number}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase leading-4 tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                    {c.heading}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product card — modern dashboard preview lives only here */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="vlab-dash"
          >
            <div className="vlab-panel-navy p-5 sm:p-6">
              <div className="vlab-panel-grid" aria-hidden="true" />
              <div className="relative">
                {/* window bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#bfe6fb" }}>
                    <span className="vlab-live inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
                    Coverage overview
                  </div>
                </div>

                {/* metric tiles from approved data */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {datacollections.slice(0, 3).map((c) => (
                    <div key={c.id} className="vlab-dash-tile p-3">
                      <p className="text-lg font-extrabold tabular-nums text-white sm:text-xl">{c.number}</p>
                      <p className="mt-1 text-[8.5px] font-bold uppercase leading-3 tracking-[0.1em]" style={{ color: "#9fc6e8" }}>
                        {c.heading}
                      </p>
                    </div>
                  ))}
                </div>

                {/* category volume bars */}
                <div className="vlab-dash-tile mt-3 p-4">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#bfe6fb" }}>
                    <BarChart3 size={13} /> Largest categories by volume
                  </div>
                  <div className="space-y-2.5">
                    {topCategories.map((item, i) => {
                      const width = `${Math.max(14, Math.round((parseCount(item.dataCount) / maxCount) * 100))}%`;
                      return (
                        <div key={item.title}>
                          <div className="mb-1 flex items-center justify-between text-[11px]">
                            <span className="text-slate-200">{item.title}</span>
                            <span className="font-semibold tabular-nums" style={{ color: "#9fc6e8" }}>{item.dataCount}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                            <motion.div
                              className={i === 0 ? "vlab-dash-bar h-full" : "vlab-dash-bar vlab-dash-bar-soft h-full"}
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

                <div className="mt-3 flex items-center justify-between text-[11px] font-semibold" style={{ color: "#9fc6e8" }}>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={14} /> {CATEGORIES.length} categories
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Layers3 size={14} /> {subcategoryListingCount} subcategory listings
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 4 ── Data stats strip ───────────────────────────────────────── */}
      <section id="data" className="border-y" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.6)" }}>
        <Container className="py-12 lg:py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5"
          >
            {datacollections.map((c) => (
              <motion.div key={c.id} variants={fadeUp} className="vlab-stat">
                <p className="text-3xl font-extrabold tracking-tight tabular-nums" style={{ color: "var(--navy)" }}>
                  {c.number}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                  {c.heading}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 5 ── Coverage section ───────────────────────────────────────── */}
      <section id="coverage">
        <Container className="py-20 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="vlab-eyebrow"><Globe2 size={13} /> Available coverage</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl" style={{ color: "var(--navy)" }}>
              Depth across every category you sell into
            </h2>
            <p className="mt-5 text-lg leading-8" style={{ color: "var(--muted)" }}>
              Drill into precise subcategories instead of broad industry buckets —
              all sourced from the BookDataZ catalogue.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {CATEGORIES.slice(0, 6).map((cat) => (
              <motion.article key={cat.title} variants={fadeUp} className="vlab-card vlab-card-hover p-6 lg:p-7">
                <div className="flex items-center justify-between">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                    style={{ background: "linear-gradient(135deg, var(--premium), var(--blue))" }}
                  >
                    <Database size={22} />
                  </span>
                  <span className="text-right">
                    <span className="block text-xl font-extrabold tabular-nums" style={{ color: "var(--navy)" }}>
                      {cat.dataCount}
                    </span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                      Records
                    </span>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold" style={{ color: "var(--navy)" }}>{cat.title}</h3>
                <p className="mt-1.5 text-sm font-semibold" style={{ color: "var(--premium)" }}>
                  {cat.subCategories.length} subcategories
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.subCategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{ background: "rgba(21,94,239,0.07)", color: "var(--blue)" }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Industries we cover — real mailing-list names as chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-2.5"
          >
            {mailinglinks.map((m) => (
              <span key={m.id} className="vlab-chip">{m.name}</span>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 6 ── CTA section ────────────────────────────────────────────── */}
      <section id="cta">
        <Container className="pb-24 lg:pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="vlab-panel-navy p-8 sm:p-12 lg:p-16"
          >
            <div className="vlab-panel-grid" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="vlab-eyebrow vlab-eyebrow-light"><Sparkles size={13} /> Ready when you are</span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Build your next campaign on data you can trust
                </h2>
                <p className="mt-5 text-lg leading-8" style={{ color: "#bcd4ec" }}>
                  Request a free sample and see the BookDataZ catalogue depth for
                  your target categories.
                </p>
              </div>
              <a href="#platform" className="vlab-btn vlab-btn-primary shrink-0 px-8 py-4 text-lg">
                Get a free data sample <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Database,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { datacollections } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";

// Outreach coverage examples — market markers only, not customer claims.
const MARKETS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "Netherlands",
  "UAE",
  "Singapore",
  "India",
  "Australia",
];

// Selling-point cues drawn from existing, supportable product messaging.
// "verify" tone = green trust cue; "accent" tone = orange action cue.
const SELLING_POINTS = [
  { label: "Verified email data", tone: "verify" },
  { label: "Up-to-date records", tone: "verify" },
  { label: "Global B2B coverage", tone: "accent" },
  { label: "Targeted mailing lists", tone: "accent" },
  { label: "Datacards available", tone: "accent" },
  { label: "Technology lists available", tone: "accent" },
];

const HeroDashboard = () => {
  return (
    <motion.div
      className="hero-dashboard-stage relative mx-auto min-w-0 w-full max-w-xl lg:max-w-none"
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="hero-dashboard">
        <div className="hero-dashboard-panel min-w-0">
          <div className="hero-dashboard-shimmer" aria-hidden="true" />

          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[color:var(--card-border)] pb-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="data-icon-tile">
                <BarChart3 size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#151515]">
                  Data Intelligence
                </p>
                <p className="text-xs text-slate-500">
                  Premium BookDataZ coverage view
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
              <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified coverage
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {datacollections.slice(0, 4).map((collection, index) => (
              <div
                key={collection.id}
                className={`dashboard-metric ${index === 0 ? "col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-2xl font-bold tracking-tight text-[#151515] md:text-3xl">
                      {collection.number}
                    </p>
                    <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.16em] text-[#a34f27]">
                      {collection.heading}
                    </p>
                  </div>
                  <Database className="shrink-0 text-orange-500" size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
            {/* A. Global market coverage — outreach examples, not claims */}
            <div className="dashboard-category-panel">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#a34f27]">
                  Global market coverage
                </p>
                <Globe2 className="text-orange-500" size={16} />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {MARKETS.map((market) => (
                  <span
                    key={market}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--card-border)] bg-[var(--card-bg-2)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--text-main)]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
                      aria-hidden="true"
                    />
                    {market}
                  </span>
                ))}
              </div>
              <p className="mt-2.5 text-[10px] font-medium leading-4 text-slate-500">
                Key B2B regions · outreach coverage examples
              </p>
            </div>

            {/* B. Reliability / selling-point cues */}
            <div className="dashboard-category-panel">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#a34f27]">
                  Built for outreach
                </p>
                <ShieldCheck className="text-orange-500" size={16} />
              </div>
              <ul className="space-y-2">
                {SELLING_POINTS.map(({ label, tone }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-[12px] font-medium text-[color:var(--text-main)]"
                  >
                    <CheckCircle2
                      size={15}
                      className={
                        tone === "verify"
                          ? "shrink-0 text-emerald-600"
                          : "shrink-0 text-orange-500"
                      }
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-float-chip hero-float-chip-left">
        <CheckCircle2 size={15} />
        {datacollections[2].number} {datacollections[2].heading}
      </div>
      <div className="hero-float-chip hero-float-chip-right">
        <Layers3 size={15} />
        {CATEGORIES.length} categories indexed
      </div>
    </motion.div>
  );
};

export default HeroDashboard;

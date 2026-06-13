"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Database,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { datacollections } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";

const HeroDashboard = () => (
  <motion.div
    className="hero-dashboard-stage relative mx-auto w-full max-w-xl lg:max-w-none"
    initial={{ opacity: 1, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
  >
    <div className="hero-orbit hero-orbit-outer" aria-hidden="true">
      <span />
    </div>
    <div className="hero-orbit hero-orbit-inner" aria-hidden="true">
      <span />
    </div>

    <div className="hero-dashboard">
      <div className="hero-dashboard-panel">
        <div className="hero-dashboard-shimmer" aria-hidden="true" />
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="data-icon-tile">
              <BarChart3 size={19} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Data Intelligence</p>
              <p className="text-xs text-slate-400">BookDataZ global coverage</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-300">
            <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Verified
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {datacollections.slice(0, 4).map((collection, index) => (
            <div
              key={collection.id}
              className={`dashboard-metric ${index === 0 ? "col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {collection.number}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.16em] text-slate-400">
                    {collection.heading}
                  </p>
                </div>
                <Database className="shrink-0 text-blue-300" size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-category-panel">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-300">
              Category coverage
            </p>
            <Layers3 className="text-orange-400" size={17} />
          </div>
          <div className="space-y-3">
            {CATEGORIES.slice(0, 3).map((category) => (
              <div
                key={category.title}
                className="flex items-center justify-between gap-4 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="data-node h-2 w-2 rounded-full bg-blue-400" />
                  {category.title}
                </div>
                <span className="font-semibold tabular-nums text-white">
                  {category.dataCount}
                </span>
              </div>
            ))}
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
      {CATEGORIES.length} Categories
    </div>

    <div className="hero-float-card" aria-hidden="false">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-orange-400/15 text-orange-300">
          <ShieldCheck size={15} />
        </span>
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700">
          Live coverage
        </p>
      </div>
      <div className="mt-3 space-y-2.5">
        {CATEGORIES.slice(3, 5).map((category) => (
          <div key={category.title}>
            <div className="flex items-center justify-between text-[11px] text-slate-600">
              <span>{category.title}</span>
              <span className="font-semibold tabular-nums text-slate-900">
                {category.dataCount}
              </span>
            </div>
            <span className="hero-float-bar" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default HeroDashboard;

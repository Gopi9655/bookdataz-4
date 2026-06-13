"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Radar, Share2 } from "lucide-react";

import { datacollections } from "@/resource/data";

// Approved figure from data.js — no country or city names are ever rendered.
const reachMetric =
  datacollections.find((collection) => /NATION/i.test(collection.heading)) ??
  datacollections[2];

// Deterministic dot-grid globe (computed once at module load so SSR and client
// markup match). Abstract only — not a real map, no place names.
const COLUMNS = 21;
const ROWS = 21;
const RADIUS = 10.2;
const GLOBE_DOTS = [];
for (let row = 0; row < ROWS; row += 1) {
  for (let col = 0; col < COLUMNS; col += 1) {
    const dx = col - (COLUMNS - 1) / 2;
    const dy = row - (ROWS - 1) / 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= RADIUS) {
      GLOBE_DOTS.push({
        cx: 12 + (col / (COLUMNS - 1)) * 76,
        cy: 12 + (row / (ROWS - 1)) * 76,
        edge: dist / RADIUS,
      });
    }
  }
}

// Fixed abstract pulse nodes + the routes that connect them to the hub.
const HUB = { x: 50, y: 50 };
const NODES = [
  { x: 28, y: 33, tone: "orange" },
  { x: 70, y: 28, tone: "blue" },
  { x: 75, y: 62, tone: "orange" },
  { x: 33, y: 68, tone: "blue" },
  { x: 58, y: 47, tone: "orange" },
];

const routePath = (node) => {
  const midX = (HUB.x + node.x) / 2;
  const midY = (HUB.y + node.y) / 2 - 14;
  return `M ${HUB.x} ${HUB.y} Q ${midX} ${midY} ${node.x} ${node.y}`;
};

const GlobalReach = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
          Global Reach
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          Data built for worldwide outreach
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
          Connect your campaigns to audiences across the globe. BookDataZ
          coverage spans markets far beyond a single region, mapped here as an
          abstract network of live data routes.
        </p>

        <div className="mt-8 inline-flex items-center gap-5 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-[0_24px_55px_-42px_rgba(5,45,82,0.5)] backdrop-blur-md">
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600">
            <Globe2 size={26} />
          </span>
          <div>
            <p className="text-3xl font-bold tabular-nums text-slate-950 md:text-4xl">
              {reachMetric.number}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              {reachMetric.heading}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
          <span className="inline-flex items-center gap-2">
            <Radar size={16} className="text-blue-600" /> Live data routes
          </span>
          <span className="inline-flex items-center gap-2">
            <Share2 size={16} className="text-orange-600" /> Connected markets
          </span>
        </div>
      </motion.div>

      {/* Abstract orbit + dot-globe — navy contrast island on the pearl field */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="reach-island relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-slate-200 p-6"
      >
        <div className="reach-orbit reach-orbit-outer" aria-hidden="true">
          <span />
        </div>
        <div className="reach-orbit reach-orbit-inner" aria-hidden="true">
          <span />
        </div>

        <svg
          viewBox="0 0 100 100"
          className="relative h-full w-full"
          role="img"
          aria-label="Abstract globe of connected data points"
        >
          <defs>
            <radialGradient id="reachGlow" cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="rgba(79,154,232,0.35)" />
              <stop offset="100%" stopColor="rgba(6,17,31,0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#reachGlow)" />

          {GLOBE_DOTS.map((dot, index) => (
            <circle
              key={index}
              cx={dot.cx}
              cy={dot.cy}
              r={0.62}
              fill="#2e7dd1"
              opacity={0.18 + (1 - dot.edge) * 0.5}
            />
          ))}

          {NODES.map((node, index) => (
            <path
              key={`route-${index}`}
              className="reach-route"
              d={routePath(node)}
              fill="none"
              stroke={node.tone === "orange" ? "rgba(238,90,42,0.55)" : "rgba(79,154,232,0.55)"}
              strokeWidth="0.7"
              strokeLinecap="round"
              style={{ animationDelay: `${index * -1.6}s` }}
            />
          ))}
        </svg>

        {/* Pulse nodes overlaid in matching coordinates */}
        <span
          className="reach-node reach-node-hub"
          style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
          aria-hidden="true"
        />
        {NODES.map((node, index) => (
          <span
            key={`node-${index}`}
            className={`reach-node ${
              node.tone === "orange" ? "reach-node-orange" : "reach-node-blue"
            }`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${index * -0.7}s`,
            }}
            aria-hidden="true"
          />
        ))}

        {/* One frosted status panel */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-blue-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
            <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Network active
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
            {reachMetric.number} {reachMetric.heading}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalReach;

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Radar, Route, ShieldCheck } from "lucide-react";

import { datacollections } from "@/resource/data";

const nationsMetric =
  datacollections.find((collection) => /NATION/i.test(collection.heading)) ??
  datacollections[2];

const verifiedMetric =
  datacollections.find((collection) => /VERIFIED/i.test(collection.heading)) ??
  datacollections[1];

const collectionsMetric = datacollections[0];

// Globe geometry (SVG viewBox 0 0 100 100) — stage is kept square so the
// HTML node overlays stay aligned with the SVG and never overflow the card.
const CENTER = { x: 50, y: 50 };
const RADIUS = 33;

// Outreach / business-market markers only — never customer or office claims.
const MARKETS = [
  { name: "United States", short: "US", x: 32, y: 45, tone: "orange" },
  { name: "Canada", short: "CA", x: 35, y: 33, tone: "soft" },
  { name: "United Kingdom", short: "UK", x: 47, y: 30, tone: "soft" },
  { name: "Netherlands", short: "NL", x: 52, y: 32, tone: "orange" },
  { name: "Germany", short: "DE", x: 57, y: 36, tone: "soft" },
  { name: "UAE", short: "UAE", x: 63, y: 50, tone: "orange" },
  { name: "India", short: "IN", x: 67, y: 57, tone: "soft" },
  { name: "Singapore", short: "SG", x: 63, y: 65, tone: "orange" },
  { name: "Australia", short: "AU", x: 59, y: 71, tone: "soft" },
];

const REGIONS = ["North America", "Europe", "Middle East", "APAC"];

const METRICS = [
  { icon: Globe2, value: nationsMetric.number, label: nationsMetric.heading },
  { icon: ShieldCheck, value: verifiedMetric.number, label: verifiedMetric.heading },
  { icon: Radar, value: collectionsMetric.number, label: collectionsMetric.heading },
];

// Gentle bowed arc from the hub out to each market node.
const arcPath = (market) => {
  const mx = (CENTER.x + market.x) / 2;
  const my = (CENTER.y + market.y) / 2;
  const dx = market.x - CENTER.x;
  const dy = market.y - CENTER.y;
  const len = Math.hypot(dx, dy) || 1;
  const offset = 6;
  const cx = mx - (dy / len) * offset;
  const cy = my + (dx / len) * offset;
  return `M ${CENTER.x} ${CENTER.y} Q ${cx} ${cy} ${market.x} ${market.y}`;
};

const GlobalReach = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      data-home-section="global-reach"
      className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
    >
      {/* LEFT — dense, purposeful copy + stacked proof metrics */}
      <motion.div
        data-global-reach-left
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex flex-col justify-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
          Global Reach
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--heading)] md:text-4xl">
          Data built for worldwide outreach
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-[color:var(--text-muted)]">
          A market-facing view of cross-border B2B coverage — strong depth across
          major business regions, ready for global outreach campaigns.
        </p>

        <div className="mt-6 space-y-3">
          {METRICS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bdz-card flex items-center gap-4 rounded-2xl p-3.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[color:var(--accent-border)] bg-[color:var(--accent-tint)] text-[color:var(--accent)]">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xl font-bold leading-none text-[color:var(--heading)]">
                  {value}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { icon: Route, label: "Cross-border outreach" },
            { icon: Radar, label: "Region-led targeting" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--card-border)] bg-[color:var(--card-bg)] px-3 py-1.5 text-xs font-semibold text-[color:var(--text-main)]"
            >
              <Icon size={14} className="text-[color:var(--accent)]" />
              {label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — one polished, contained Global Market Network card */}
      <motion.div
        data-global-reach-visual
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="reach-island relative flex w-full flex-col overflow-hidden rounded-[1.8rem] p-5 lg:p-6"
      >
        <div className="premium-dark-grid opacity-20" aria-hidden="true" />

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-200">
              Global Market Network
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              Key B2B outreach markets
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-100">
            <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Network active · illustrative
          </div>
        </div>

        {/* Globe — square + capped width so it stays compact and contained */}
        <div className="reach-globe-stage relative mx-auto mt-5 aspect-square w-[min(100%,320px)] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_46%)]" />

          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Network globe highlighting key global B2B outreach markets"
          >
            <defs>
              <radialGradient id="globeSphere" cx="42%" cy="36%" r="72%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.03)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.28)" />
              </radialGradient>
              <radialGradient id="globeGlow" cx="50%" cy="46%" r="60%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="70%" stopColor="var(--accent)" stopOpacity="0.04" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--accent-soft)" stopOpacity="0.4" />
              </linearGradient>
              <clipPath id="globeClip">
                <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} />
              </clipPath>
            </defs>

            <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS + 9} fill="url(#globeGlow)" />

            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r={RADIUS}
              fill="url(#globeSphere)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.5"
            />

            {/* Wireframe — meridians + parallels, clipped to the sphere */}
            <g
              clipPath="url(#globeClip)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.4"
              fill="none"
            >
              {[9, 19, 28].map((rx) => (
                <ellipse key={`mer-${rx}`} cx={CENTER.x} cy={CENTER.y} rx={rx} ry={RADIUS} />
              ))}
              <line x1={CENTER.x} y1={CENTER.y - RADIUS} x2={CENTER.x} y2={CENTER.y + RADIUS} />
              {[-22, -11, 0, 11, 22].map((dy) => {
                const ry = Math.sqrt(Math.max(RADIUS * RADIUS - dy * dy, 0));
                return (
                  <ellipse
                    key={`par-${dy}`}
                    cx={CENTER.x}
                    cy={CENTER.y + dy}
                    rx={RADIUS}
                    ry={ry * 0.32}
                  />
                );
              })}
            </g>

            {/* Connection arcs — fewer, cleaner, with a travelling pulse */}
            {MARKETS.map((market, index) => (
              <g key={market.name}>
                <path
                  d={arcPath(market)}
                  fill="none"
                  stroke={market.tone === "orange" ? "url(#arcOrange)" : "rgba(255,255,255,0.22)"}
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                {!reduceMotion && (
                  <path
                    className="reach-arc-pulse"
                    d={arcPath(market)}
                    fill="none"
                    stroke="var(--accent-soft)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeDasharray="4 60"
                    style={{ animationDelay: `${index * -0.5}s` }}
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Hub */}
          <span
            className="reach-node reach-node-hub"
            style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
            aria-hidden="true"
          />

          {/* Market pulse points (labels live in the contained strip below) */}
          {MARKETS.map((market) => (
            <span
              key={market.name}
              className={`reach-node ${
                market.tone === "orange" ? "reach-node-orange" : "reach-node-soft"
              }`}
              style={{ left: `${market.x}%`, top: `${market.y}%` }}
              title={market.name}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Contained status strip — market chips, regions, nations metric */}
        <div className="relative mt-5 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {MARKETS.map((market) => (
              <span
                key={market.name}
                title={market.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold text-[#f0e2d6]"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    market.tone === "orange"
                      ? "bg-[color:var(--accent)]"
                      : "bg-[color:var(--accent-soft)]"
                  }`}
                  aria-hidden="true"
                />
                {market.short}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
            <div className="flex flex-wrap gap-1.5">
              {REGIONS.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-[#f6e7dc]"
                >
                  {region}
                </span>
              ))}
            </div>
            <p className="text-sm font-bold text-white">
              {nationsMetric.number}{" "}
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#d8bba7]">
                nations represented
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalReach;

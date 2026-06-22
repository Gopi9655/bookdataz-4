import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import HeroDashboard from "./HeroDashboard";
export default function HeroCarousel() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-12">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-200 shadow-sm backdrop-blur">
          <Sparkles size={14} />
          Global B2B Data Solutions
        </div>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.045em] text-white md:text-6xl lg:text-[4.2rem]">
          Unlock Global Reach with{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
            Premium Email B2B Databases
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Access verified, up-to-date email lists from over 160 countries. Boost
          your marketing campaigns with accurate data tailored to your target
          audience. Leverage the power of global outreach and stay ahead in the
          competitive market.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Get Free Data Sample
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/datacard"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-extrabold text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            Browse Datacards
          </Link>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-300">
          <ShieldCheck size={14} />
          Verified and up-to-date records
        </div>
      </div>
      <HeroDashboard />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Network,
  Search,
  ShieldCheck,
} from "lucide-react";

import { datacollections, mailinglinks, whatweoffer } from "@/resource/data";
import Button from "../../components/ui/Button";
import GlassCard from "../../components/ui/GlassCard";
import Section from "../../components/ui/Section";
import CoverageCommandCenter from "../../components/home/CoverageCommandCenter";
import ValuePillars from "../../components/home/ValuePillars";
import GlobalReach from "../../components/home/GlobalReach";
import TestimonialsCarousel from "../../components/home/TestimonialsCarousel";
import DataStreams from "../../components/home/DataStreams";
import HeroCarousel from "../../components/home/HeroCarousel";

const fadeUp = {
  hidden: { opacity: 1, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const industryHref = (name) => `/${name.toLowerCase().replace(/ /g, "-")}`;

const companyPillars = [
  {
    title: "Global Reach",
    description:
      "Connect with businesses worldwide with our expansive geographical database coverage.",
    icon: Globe2,
  },
  {
    title: "High-Quality Data",
    description:
      "Ensure accuracy and reliability with our regularly verified data resources.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Solutions",
    description: "Tailored data services to meet your unique business needs.",
    icon: Building2,
  },
];

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}) => (
  <motion.div
    className={`mb-12 lg:mb-16 ${
      align === "center"
        ? "mx-auto max-w-3xl text-center"
        : "max-w-3xl text-left"
    }`}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${
        light ? "text-orange-200" : "text-orange-700"
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
        light ? "text-white" : "text-[#151515]"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${
          light ? "text-[#e7d7cc]" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </motion.div>
);

export default function Home() {
  return (
    <div className="overflow-hidden text-[color:var(--text-main)]">
      <section
        data-home-section="hero"
        className="premium-hero-warm relative isolate overflow-hidden border-b border-[color:var(--card-border)] text-[color:var(--hero-text)]"
      >
        <div className="premium-warm-aurora" aria-hidden="true" />
        <div className="premium-warm-grid" aria-hidden="true" />
        <DataStreams />
        <div className="absolute left-[4%] top-24 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute right-[5%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-500/14 blur-3xl" />

        <HeroCarousel />

        <a
          href="#coverage"
          aria-label="Scroll to data coverage"
          className="scroll-cue absolute bottom-3 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--hero-muted)] lg:flex"
        >
          Explore coverage
          <ChevronDown size={16} className="text-[color:var(--hero-eyebrow)]" />
        </a>
      </section>

      <Section
        id="coverage"
        data-home-section="available-data-coverage"
        className="premium-section-after-hero relative border-y border-[color:var(--section-after-hero-border)] text-[color:var(--section-after-hero-text)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,106,42,0.08),transparent_34%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="Available Data Coverage"
            title="Your data command centre"
            description="Select any category to inspect its exact record count and every subcategory it covers from one structured control surface."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <CoverageCommandCenter />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="premium-white-card mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl p-6 sm:flex-row sm:items-center lg:p-8"
          >
            <div>
              <p className="text-lg font-semibold text-slate-950">
                Need a closer look at the available data?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Browse the full datacard collection or request a data sample.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/datacard" variant="outline" className="gap-2">
                Browse Datacards <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="accent">
                Get Free Data Sample
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        id="value"
        className="premium-surface-alt relative overflow-hidden border-t border-[#eadccf] text-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,225,207,0.6),transparent_38%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="Why teams choose BookDataZ"
            title="Built for modern B2B data teams"
            description="A focused view of what the BookDataZ catalogue delivers, using real product structure rather than generic claims."
          />
          <ValuePillars />
        </div>
      </Section>

      <Section
        id="reach"
        className="premium-surface-rich relative overflow-hidden border-t border-white/10 text-white"
      >
        <GlobalReach />
      </Section>

      <Section
        id="platform"
        className="premium-about-band relative overflow-hidden border-y border-[#e8ddd2]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,106,42,0.07),transparent_34%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-700"
            >
              Platform value
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-[#151515] md:text-4xl lg:text-5xl"
            >
              A trusted foundation for B2B outreach
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-8 text-[#5f6672] md:text-lg"
            >
              BookDataZ pairs a deep, structured catalogue with verified,
              regularly maintained records and broad global coverage — so sales
              and marketing teams can target with confidence instead of guesswork.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3"
            >
              {datacollections.slice(0, 3).map((collection) => (
                <div
                  key={collection.id}
                  className="rounded-3xl border border-[#e8ddd2] bg-white p-4 shadow-[0_24px_52px_-44px_rgba(26,22,19,0.24)]"
                >
                  <p className="text-2xl font-bold text-[#151515]">
                    {collection.number}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-orange-700">
                    {collection.heading}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/18 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-700"
            >
              <ShieldCheck size={14} className="text-emerald-600" />
              Verified and regularly maintained
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {companyPillars.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={`premium-card premium-card-light premium-card-hover rounded-[1.6rem] p-6 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="value-pillar-icon">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#151515]">
                  {title}
                </h3>
                <p className="mt-2.5 leading-7 text-[#5f6672]">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="industries" className="bg-[#fffdfa] border-t border-[#eadccf]">
        <SectionHeading
          eyebrow="Our Industry Database"
          title="Premium Email Lists Across Industries"
          description="Explore targeted mailing lists built for the industries your sales and marketing teams need to reach."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {mailinglinks.map((industry) => (
            <motion.div key={industry.id} variants={fadeUp}>
              <Link
                href={industryHref(industry.name)}
                className="premium-white-card coverage-card group relative flex h-full items-center gap-4 overflow-hidden rounded-3xl p-6 lg:p-8"
              >
                <span
                  className="absolute inset-y-0 left-0 w-1 -translate-x-full bg-gradient-to-b from-orange-300 to-orange-600 transition-transform duration-300 group-hover:translate-x-0"
                  aria-hidden="true"
                />
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-[#efe1d3] bg-[#faf4ee]">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-950">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Mailing list</p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-orange-600 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        id="services"
        className="premium-surface-panel relative border-t border-[#eadccf] text-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,106,42,0.08),transparent_38%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="What We Offer"
            title="Data solutions built around your business"
            description="Transform raw data into strategic insights with services tailored to your growth goals."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {whatweoffer.map((offer) => (
              <GlassCard
                as={motion.article}
                key={offer.id}
                variants={fadeUp}
                className="premium-card premium-card-light h-full rounded-[1.8rem] bg-white/95"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-orange-200 bg-orange-50">
                  <Image src={offer.icon} alt="" width={32} height={32} />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-slate-950">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{offer.content}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section
        id="technology-intelligence"
        className="premium-tech-espresso relative border-t border-white/10 text-white"
      >
        <div className="premium-dark-grid opacity-20" aria-hidden="true" />
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
              Technology and Data Intelligence
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Transform Your Future with BookDataZ&apos;s Futuristic Solutions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              As pioneers in AI-powered DaaS and SaaS solutions, we deliver
              expertise in Contextual Intelligence, Ad hoc Sales, Marketing, and
              Growth Strategies.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              BookDataZ stands at the forefront of data innovation, offering an
              unrivaled blend of cutting-edge AI-powered solutions and deep
              industry expertise that transforms raw data into strategic
              insights.
            </p>
            <Button
              href="/technology"
              variant="accent"
              className="mt-8 gap-2"
            >
              Technology List <ArrowRight size={17} />
            </Button>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Network, label: "Contextual Intelligence" },
              { icon: Search, label: "Ad hoc Sales" },
              { icon: Globe2, label: "Marketing" },
              { icon: ShieldCheck, label: "Growth Strategies" },
            ].map(({ icon: Icon, label }) => (
              <GlassCard
                as={motion.div}
                key={label}
                variants={fadeUp}
                className="min-h-40 rounded-[1.6rem] border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_60px_-42px_rgba(0,0,0,0.8)] lg:p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-orange-200/20 bg-orange-300/10 text-orange-200">
                  <Icon size={20} />
                </div>
                <p className="mt-8 text-sm font-semibold leading-6 text-white md:text-base">
                  {label}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section
        id="testimonials"
        className="premium-surface-alt relative overflow-hidden border-t border-[#eadccf] text-slate-950 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,106,42,0.07),transparent_36%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Client experiences with BookDataZ"
            description="A few words from teams who put our data to work."
          />
          <TestimonialsCarousel />
        </div>
      </Section>

      <Section className="premium-surface border-t border-[#eadccf]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="premium-cta-espresso relative overflow-hidden rounded-[2rem] border border-white/10 p-8 text-white shadow-2xl shadow-slate-950/40 lg:p-12"
        >
          <div className="premium-warm-aurora" aria-hidden="true" />
          <div className="premium-warm-grid" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-orange-100">
                <CheckCircle2 size={18} />
                Premium databases for business growth
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Elevate Your Business?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Partner with BookDataZ to access premium databases and unlock
                growth opportunities in your target markets.
              </p>
            </div>
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              className="shrink-0 gap-2"
            >
              Get Started Today <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

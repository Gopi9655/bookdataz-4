"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { datacollections, mailinglinks, whatweoffer } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import GlassCard from "../../components/ui/GlassCard";
import Section from "../../components/ui/Section";
import CategoryIcon from "../../components/home/CategoryIcon";
import DataStreams from "../../components/home/DataStreams";
import HeroDashboard from "../../components/home/HeroDashboard";

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

const visibleSubcategoryCount = 4;
const subcategoryListingCount = CATEGORIES.reduce(
  (total, category) => total + category.subCategories.length,
  0
);

const SectionHeading = ({ eyebrow, title, description, light = false }) => (
  <motion.div
    className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${
        light ? "text-blue-300" : "text-blue-700"
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
        light ? "text-white" : "text-slate-950"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mx-auto mt-5 max-w-2xl text-base leading-7 md:text-lg ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </motion.div>
);

export default function Home() {
  return (
    <div className="overflow-hidden bg-slate-950">
      <section
        data-home-section="hero"
        className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-brandNavy-950 py-20 text-white lg:py-28"
      >
        <div
          className="absolute inset-0 -z-20 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(140,193,244,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(140,193,244,0.1) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, black 15%, transparent 92%)",
          }}
        />
        <DataStreams />
        <div className="absolute left-[5%] top-20 -z-10 h-72 w-72 rounded-full bg-blue-700/15 blur-3xl" />
        <div className="absolute right-[4%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />

        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-md"
            >
              <Sparkles className="text-orange-400" size={14} />
              Global B2B data solutions
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]"
            >
              Unlock Global Reach with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Premium Email B2B Databases
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg"
            >
              Access verified, up-to-date email lists from over 160 countries.
              Boost your marketing campaigns with accurate data tailored to your
              target audience. Leverage the power of global outreach and stay
              ahead in the competitive market.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                className="gap-2"
              >
                Get Free Data Sample <ArrowRight size={18} />
              </Button>
              <Button
                href="/datacard"
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/[0.035] text-white backdrop-blur-md hover:border-blue-300 hover:bg-white/10"
              >
                Browse Datacards
              </Button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6"
            >
              {datacollections.slice(0, 3).map((collection) => (
                <div key={collection.id}>
                  <p className="text-xl font-bold text-white md:text-2xl">
                    {collection.number}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.13em] text-slate-400 md:text-[10px]">
                    {collection.heading}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <HeroDashboard />
        </Container>
      </section>

      <Section
        data-home-section="available-data-coverage"
        className="relative border-y border-slate-200 bg-brandWarm-50 text-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,125,209,0.09),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(238,90,42,0.08),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,43,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,43,74,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 72%)",
          }}
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Available Data Coverage"
            title="See the breadth of the BookDataZ database"
            description="Review every available data category, its exact record count, and the subcategories covered within it."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-200/90 bg-white/80 p-5 shadow-[0_20px_45px_-34px_rgba(5,45,82,0.42)] backdrop-blur-md lg:p-6"
            >
              <p className="text-3xl font-bold tabular-nums text-slate-950">
                {CATEGORIES.length}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Categories Shown
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-200/90 bg-white/80 p-5 shadow-[0_20px_45px_-34px_rgba(5,45,82,0.42)] backdrop-blur-md lg:p-6"
            >
              <p className="text-3xl font-bold tabular-nums text-slate-950">
                {subcategoryListingCount}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Subcategory Listings
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-between gap-4 rounded-3xl border border-orange-200/80 bg-orange-50/80 p-5 shadow-[0_20px_45px_-34px_rgba(234,88,12,0.42)] backdrop-blur-md lg:p-6"
            >
              <div>
                <p className="font-semibold text-slate-950">
                  Explore complete coverage
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Open any category to view every available subcategory.
                </p>
              </div>
              <Layers3 className="shrink-0 text-orange-600" size={28} />
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6"
          >
            {CATEGORIES.map((category, index) => {
              const visibleSubcategories = category.subCategories.slice(
                0,
                visibleSubcategoryCount
              );
              const additionalSubcategories = category.subCategories.slice(
                visibleSubcategoryCount
              );

              return (
                <motion.article
                  key={category.title}
                  variants={fadeUp}
                  className="coverage-card group/card relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/85 shadow-[0_20px_50px_-38px_rgba(5,45,82,0.45)] backdrop-blur-md hover:border-blue-300/70 hover:bg-white"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-orange-400"
                    aria-hidden="true"
                  />
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold tabular-nums tracking-[0.18em] text-blue-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-8 bg-blue-700/20" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                            Available category
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <span className="coverage-icon grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-blue-200/80 bg-blue-50 text-blue-700">
                            <CategoryIcon title={category.title} />
                          </span>
                          <h3 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <div className="shrink-0 rounded-2xl border border-blue-200/80 bg-blue-50/80 px-3 py-3 text-right sm:px-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-[10px]">
                          Contacts
                        </p>
                        <p className="mt-1 text-base font-bold tabular-nums text-slate-950 sm:text-lg md:text-xl">
                          {category.dataCount}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {visibleSubcategories.map((subCategory) => (
                        <span
                          key={subCategory}
                          className="rounded-full border border-slate-200 bg-brandWarm-50 px-3 py-1.5 text-xs font-medium leading-5 text-slate-700"
                        >
                          {subCategory}
                        </span>
                      ))}
                    </div>

                    {additionalSubcategories.length > 0 && (
                      <details className="group/details mt-5 border-t border-slate-200 pt-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl text-sm font-semibold text-blue-700 outline-none transition-colors hover:text-orange-600 focus-visible:ring-2 focus-visible:ring-blue-400">
                          <span>
                            + {additionalSubcategories.length} more subcategories
                          </span>
                          <ChevronDown
                            size={18}
                            className="shrink-0 transition-transform duration-200 group-open/details:rotate-180"
                          />
                        </summary>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {additionalSubcategories.map((subCategory) => (
                            <span
                              key={subCategory}
                              className="rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1.5 text-xs font-medium leading-5 text-blue-950"
                            >
                              {subCategory}
                            </span>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_24px_55px_-40px_rgba(5,45,82,0.5)] backdrop-blur-md sm:flex-row sm:items-center lg:p-8"
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
              <Button
                href="/datacard"
                variant="outline"
                className="gap-2"
              >
                Browse Datacards <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="accent">
                Get Free Data Sample
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-slate-900 py-12 lg:py-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8"
        >
          {datacollections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={fadeUp}
              className="border-l border-blue-400/30 pl-4"
            >
              <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {collection.number}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.15em] text-slate-400">
                {collection.heading}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="border-t border-white/10 bg-gradient-to-b from-slate-100 to-slate-50">
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
                className="group flex h-full items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50/50 lg:p-8"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
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
                  className="shrink-0 text-blue-700 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="relative bg-[#071a2d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_38%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="What We Offer"
            title="Data solutions built around your business"
            description="Transform raw data into strategic insights with services tailored to your growth goals."
            light
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
                className="h-full border-blue-300/15 bg-white/[0.06]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-400/10">
                  <Image src={offer.icon} alt="" width={32} height={32} />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{offer.content}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="relative bg-slate-950 text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.14) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Technology & Data Intelligence
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Transform Your Future with BookDataz&apos;s Futuristic Solutions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              As pioneers in AI-powered DaaS and SaaS solutions, we deliver
              expertise in Contextual Intelligence, Ad hoc Sales, Marketing, and
              Growth Strategies.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              BookDataz stands at the forefront of data innovation, offering an
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
                className="min-h-40 border-blue-300/15 bg-white/[0.06] p-5 lg:p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
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

      <Section className="border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-[#082d52] p-6 text-white shadow-2xl shadow-blue-950/20 lg:p-8"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-200">
                <CheckCircle2 size={18} />
                Premium databases for business growth
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Elevate Your Business?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Partner with BookDataz to access premium databases and unlock
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

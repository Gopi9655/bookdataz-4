"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { datacollections, mailinglinks, whatweoffer } from "@/resource/data";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import GlassCard from "../../components/ui/GlassCard";
import Section from "../../components/ui/Section";
import CoverageCommandCenter from "../../components/home/CoverageCommandCenter";
import ValueCarousel from "../../components/home/ValueCarousel";
import GlobalReach from "../../components/home/GlobalReach";
import TestimonialsCarousel from "../../components/home/TestimonialsCarousel";
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
    <div className="overflow-hidden bg-brandWarm-50">
      <section
        data-home-section="hero"
        className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#fffdf9] via-[#f8fbff] to-[#fff4ea] pb-20 pt-12 text-slate-950 lg:pb-28 lg:pt-16"
      >
        <div
          className="absolute inset-0 -z-20 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,125,209,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,209,0.07) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, black 15%, transparent 92%)",
          }}
        />
        <DataStreams />
        <div className="absolute left-[5%] top-20 -z-10 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute right-[4%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />

        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur-md"
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
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg"
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
                className="border-blue-200 bg-white/80 text-blue-800 backdrop-blur-md hover:border-blue-400 hover:bg-blue-50"
              >
                Browse Datacards
              </Button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-orange-200/70 pt-6"
            >
              {datacollections.slice(0, 3).map((collection) => (
                <div key={collection.id}>
                  <p className="text-xl font-bold text-slate-950 md:text-2xl">
                    {collection.number}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.13em] text-blue-700 md:text-[10px]">
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
            title="Your data command centre"
            description="Select any category to inspect its exact record count and every subcategory it covers — all from one premium control surface."
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

      <Section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-brandWarm-100 to-brandWarm-50 text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,125,209,0.08),transparent_38%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="Why teams choose BookDataZ"
            title="Built for modern B2B data teams"
            description="A running view of what the platform delivers — drawn straight from the BookDataZ catalogue, never invented claims."
          />
          <ValueCarousel />
        </div>
      </Section>

      <Section className="relative overflow-hidden border-t border-slate-200 bg-brandWarm-50 text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(238,90,42,0.07),transparent_34%)]" />
        <div className="relative">
          <GlobalReach />
        </div>
      </Section>

      <Section className="border-y border-orange-100 bg-gradient-to-r from-orange-50 via-white to-blue-50 py-12 lg:py-14">
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
              className="border-l border-orange-300 pl-4"
            >
              <p className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                {collection.number}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.15em] text-blue-700">
                {collection.heading}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50">
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
                className="coverage-card group relative flex h-full items-center gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300 hover:bg-blue-50/40 lg:p-8"
              >
                <span
                  className="absolute inset-y-0 left-0 w-1 -translate-x-full bg-gradient-to-b from-blue-400 to-orange-400 transition-transform duration-300 group-hover:translate-x-0"
                  aria-hidden="true"
                />
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

      <Section className="relative border-t border-orange-100 bg-gradient-to-br from-[#fff9f3] via-white to-blue-50 text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,90,42,0.12),transparent_38%)]" />
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
                className="h-full border-slate-200 bg-white/85 shadow-[0_24px_55px_-40px_rgba(5,45,82,0.45)]"
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

      <Section className="relative border-t border-slate-200 bg-gradient-to-b from-blue-50 to-[#fffdf9] text-slate-950">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,125,209,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,209,0.08) 1px, transparent 1px)",
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
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
              Technology & Data Intelligence
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Transform Your Future with BookDataz&apos;s Futuristic Solutions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              As pioneers in AI-powered DaaS and SaaS solutions, we deliver
              expertise in Contextual Intelligence, Ad hoc Sales, Marketing, and
              Growth Strategies.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-500">
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
                className="min-h-40 border-slate-200 bg-white/90 p-5 shadow-[0_22px_50px_-38px_rgba(5,45,82,0.45)] lg:p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700">
                  <Icon size={20} />
                </div>
                <p className="mt-8 text-sm font-semibold leading-6 text-slate-900 md:text-base">
                  {label}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section
        id="testimonials"
        className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-brandWarm-100 to-brandWarm-50 text-slate-950 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(238,90,42,0.07),transparent_36%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Client experiences with BookDataZ"
            description="A few words from teams who put our data to work."
          />
          <TestimonialsCarousel />
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white shadow-2xl shadow-orange-950/20 lg:p-8"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-orange-50">
                <CheckCircle2 size={18} />
                Premium databases for business growth
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Elevate Your Business?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-orange-50">
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

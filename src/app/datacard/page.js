"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Database,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CATEGORIES } from "@/resource/mockdata";
import CategoryCard from "../../../components/ui/CategoryCard";
import Container from "../../../components/ui/Container";
import GlassCard from "../../../components/ui/GlassCard";
import Section from "../../../components/ui/Section";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const guarantees = [
  "100% Data Ownership Guarantee",
  "Privacy Compliant: CAN-SPAM & GDPR",
  "1-to-1 Campaign Assistance: Phone, Email",
  "Custom Build List Delivery: 24-72 Hours",
];

const complianceItems = [
  { image: "/datacards/gdpr.png", label: "GDPR Ready" },
  { image: "/datacards/ccpa.jpg", label: "CCPA Ready" },
  {
    image: "/datacards/vector-shield-icon.jpg",
    label: "Privacy Shield",
    alt: "Privacy Shield Certified",
  },
];

export default function BrowseDatacardPage() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return CATEGORIES;
    }

    return CATEGORIES.filter(
      (category) =>
        category.title.toLowerCase().includes(normalizedQuery) ||
        category.subCategories.some((subCategory) =>
          subCategory.toLowerCase().includes(normalizedQuery)
        )
    );
  }, [query]);

  return (
    <main className="overflow-hidden bg-slate-950">
      <section className="relative isolate overflow-hidden py-20 text-white lg:py-28">
        <div
          className="absolute inset-0 -z-20 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.12) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage: "linear-gradient(to bottom, black 10%, transparent 95%)",
          }}
        />
        <div className="absolute left-[8%] top-12 -z-10 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute right-[5%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <motion.div
            variants={stagger}
            initial={false}
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200"
            >
              <Sparkles size={14} />
              Data category directory
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Browse Our <span className="text-orange-400">Data Cards</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
            >
              BookDataz is one of the prominent B2B marketing solution providers
              that specializes in offering data-driven marketing and account
              profiling services. We provide B2B Database of key decision-makers,
              professionals &amp; executives which can be customized as per your
              requirement. With over 170M data repository of business records, our
              company has successfully served many clients globally since
              inception.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-base leading-8 text-slate-400"
            >
              Our commitment to delivering high-quality, verified data ensures
              that businesses can target the right audience with precision,
              enhancing their marketing strategies and sales efforts. By leveraging
              our vast database and advanced data analytics, we empower
              organizations to streamline their outreach, improve lead generation,
              and drive significant business growth.
            </motion.p>
            <motion.ul
              variants={stagger}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {guarantees.map((guarantee) => (
                <motion.li
                  key={guarantee}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold leading-6 text-slate-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-blue-300"
                  />
                  {guarantee}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={stagger}
            initial={false}
            animate="visible"
            className="grid gap-6"
          >
            <GlassCard
              as={motion.div}
              variants={fadeUp}
              className="relative overflow-hidden border-blue-300/20 bg-[#082d52]/80 shadow-2xl shadow-blue-950/40"
            >
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                    Available contacts
                  </p>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                    170+ Million
                  </h2>
                  <p className="mt-3 text-base text-slate-300">
                    Email Contacts
                  </p>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-400/15 text-blue-200">
                  <Database size={26} />
                </div>
              </div>
              <p className="relative mt-8 border-t border-white/10 pt-6 leading-7 text-slate-300">
                Available for targeted campaigns and lead generation.
              </p>
            </GlassCard>

            <GlassCard
              as={motion.div}
              variants={fadeUp}
              className="border-blue-300/15 bg-white/[0.07]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
                  <ShieldCheck size={21} />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Privacy &amp; Compliance
                </h2>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {complianceItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-w-0 flex-col items-center rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt ?? item.label}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-lg bg-white object-contain p-1"
                    />
                    <p className="mt-2 text-[11px] font-semibold leading-4 text-slate-200 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                BookDataz is committed to data privacy and security, ensuring
                compliance with global regulations such as GDPR and CCPA. Our
                databases are GDPR Ready, guaranteeing that all data is collected,
                processed, and stored following strict European privacy laws. We
                are also CCPA Ready, offering transparency and control over
                personal data for California residents. Additionally, our Privacy
                Shield Certification ensures secure data transfers, aligning with
                international standards to protect customer information with the
                highest level of integrity.
              </p>
            </GlassCard>
          </motion.div>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <motion.div
          variants={fadeUp}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Category coverage
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Find the data category you need
          </h2>
        </motion.div>

        <div className="sticky top-4 z-20 mx-auto mb-10 max-w-3xl">
          <label className="relative block">
            <span className="sr-only">Search categories and subcategories</span>
            <Search
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-blue-700"
            />
            <input
              type="search"
              placeholder="Search categories and subcategories..."
              className="w-full rounded-full border border-slate-200 bg-white py-4 pl-14 pr-28 text-base text-slate-950 shadow-lg shadow-slate-950/5 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              {filteredCategories.length} results
            </span>
          </label>
        </div>

        {filteredCategories.length > 0 ? (
          <motion.div
            variants={stagger}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {filteredCategories.map((category) => (
              <motion.div key={category.title} variants={fadeUp}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="font-semibold text-slate-950">No categories found.</p>
            <p className="mt-2 text-sm text-slate-500">
              Try a different category or subcategory name.
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}

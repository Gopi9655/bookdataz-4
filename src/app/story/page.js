import {
  BarChart3,
  CheckCircle2,
  Globe2,
  Microscope,
  Network,
} from "lucide-react";

import GlassCard from "../../../components/ui/GlassCard";
import Section from "../../../components/ui/Section";

const facts = [
  <>
    In our first year, BookDataZ manually verified over{" "}
    <strong>1 million contacts</strong>, ensuring 98% deliverability.
  </>,
  <>
    We operate with <strong>zero tolerance for outdated data</strong> — every
    record is cleaned every 90 days.
  </>,
  <>
    BookDataZ offers <strong>industry-specific segmentation</strong> to ensure
    your outreach always reaches the right decision-makers.
  </>,
  <>
    We were among the first U.S.-based B2B data companies to align completely
    with <strong>GDPR, CCPA, and CAN-SPAM</strong> policies.
  </>,
];

const highlights = [
  {
    Icon: Globe2,
    content: (
      <>
        <strong>Clients in 160+ countries</strong>, including the U.S., U.K.,
        Germany, Australia, and the Middle East.
      </>
    ),
  },
  {
    Icon: BarChart3,
    content: (
      <>
        Coverage of <strong>over 75 industries</strong> — from SaaS startups to
        Fortune 500 enterprises.
      </>
    ),
  },
  {
    Icon: Network,
    content: (
      <>
        Real-time integration with CRMs like{" "}
        <strong>Salesforce, HubSpot, and Zoho</strong>.
      </>
    ),
  },
  {
    Icon: Microscope,
    content: (
      <>
        Global team of <strong>100+ data scientists and compliance experts</strong>{" "}
        ensuring 24/7 quality control.
      </>
    ),
  },
  {
    Icon: BarChart3,
    content: (
      <>
        Daily processing of over <strong>150,000 data records</strong> across
        healthcare, fintech, manufacturing, and tech sectors.
      </>
    ),
  },
];

export default function Story() {
  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <Section className="relative border-b border-white/10 bg-[#071a2d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_40%)]" />
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Our Story
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Birth of <span className="text-orange-400">BookDataZ</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              In a market overwhelmed by low-quality data providers,{" "}
              <strong className="text-white">BookDataZ</strong> was born in the
              United States to stand out as a brand of trust. We envisioned a
              world where sales and marketing teams could access compliant,
              clean, and precisely targeted B2B email databases — and we built
              exactly that.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              What began as a small data aggregation and validation operation
              soon became a global platform trusted by thousands of businesses.
              Our early focus on accuracy and compliance paved the path for
              rapid, responsible growth.
            </p>
          </div>

          <GlassCard className="border-blue-300/20 bg-white/[0.065] shadow-2xl shadow-blue-950/40">
            <h2 className="text-2xl font-bold">Did You Know?</h2>
            <ul className="mt-6 space-y-4">
              {facts.map((fact, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 leading-7 text-slate-300"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-orange-400"
                    size={18}
                  />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>

      <Section className="border-b border-white/10 bg-slate-900">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <GlassCard className="border-blue-300/20 bg-[#082d52]/75 shadow-2xl shadow-blue-950/35">
            <h2 className="text-2xl font-bold">Global Highlights</h2>
            <ul className="mt-6 space-y-4">
              {highlights.map(({ Icon, content }, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/25 p-4 leading-7 text-slate-300"
                >
                  <Icon className="mt-1 shrink-0 text-blue-300" size={18} />
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Global Reach
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Scaling <span className="text-orange-400">Beyond Borders</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              After establishing our reputation in the U.S., we expanded rapidly
              across international markets — tailoring data to meet local
              regulations and business practices. Our reach now spans industries
              like healthcare, education, finance, manufacturing, and technology.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              With every expansion, we uphold our core principle: quality over
              quantity. Every database is curated with accuracy, privacy, and
              conversion efficiency in mind.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-100 to-white text-slate-950">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Looking Ahead
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Ongoing{" "}
            <span className="text-blue-700">Mission &amp; Commitment</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            BookDataZ is more than a product — it&apos;s a partnership. Our
            clients rely on us to help them find the right decision-makers, at
            the right time, in the right industries. That responsibility drives
            our innovation and integrity.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <GlassCard className="border-slate-200 bg-white shadow-md">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              To become the world&apos;s most trusted B2B database brand —
              empowering ethical marketing through high-quality, relevant data.
            </p>
          </GlassCard>
          <GlassCard className="border-slate-200 bg-white shadow-md">
            <h3 className="text-2xl font-bold">Promise</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              BookDataZ ensures unmatched data accuracy, human-verified
              integrity, and total legal compliance with every record delivered.
            </p>
          </GlassCard>
        </div>

      </Section>
    </div>
  );
}

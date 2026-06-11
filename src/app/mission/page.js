import {
  ArrowRight,
  Compass,
  Eye,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Zap,
} from "lucide-react";

import GlassCard from "../../../components/ui/GlassCard";
import Section from "../../../components/ui/Section";

const missionSteps = [
  "Pioneering advanced data verification techniques that set industry benchmarks",
  "Maintaining strict compliance with global data protection regulations",
  "Continuously expanding and updating our database with precision",
  "Developing intuitive tools that transform raw data into business opportunities",
];

const visionSteps = [
  "Global expansion with localized data solutions for key markets",
  "AI-driven predictive analytics for smarter business connections",
  "Strategic partnerships with leading CRM and marketing platforms",
  "Continuous investment in data privacy and security infrastructure",
];

const values = [
  {
    Icon: Compass,
    title: "Integrity",
    description:
      "We maintain uncompromising honesty in our data and business practices",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries to deliver cutting-edge data solutions",
  },
  {
    Icon: Handshake,
    title: "Partnership",
    description: "We view every client relationship as a long-term collaboration",
  },
  {
    Icon: ShieldCheck,
    title: "Responsibility",
    description:
      "We handle data with ethical consideration and respect for privacy",
  },
];

const StepList = ({ items, icon: Icon, accentClass }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-slate-300"
      >
        <Icon className={`mt-0.5 shrink-0 ${accentClass}`} size={18} />
        <span className="leading-7">{item}</span>
      </li>
    ))}
  </ul>
);

export default function MissionVision() {
  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <Section className="relative border-b border-white/10 bg-[#071a2d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            Mission &amp; Vision
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="text-orange-400">Purpose</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Driving innovation in B2B data solutions while empowering businesses
            and professionals worldwide
          </p>
        </div>
      </Section>

      <Section className="border-b border-white/10 bg-slate-900">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <GlassCard className="border-blue-300/20 bg-[#082d52]/75 shadow-2xl shadow-blue-950/35">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-400/15 text-blue-300">
              <Zap size={27} />
            </div>
            <h2 className="mt-6 text-3xl font-bold">Mission</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              To revolutionize B2B data intelligence by delivering the most
              accurate, compliant, and actionable contact databases, enabling
              businesses to forge meaningful connections and drive growth. We
              commit to maintaining the highest standards of data integrity while
              fostering innovation in data collection and verification
              technologies.
            </p>
          </GlassCard>
          <div>
            <h3 className="mb-6 text-2xl font-bold">
              How We Fulfill Our Mission
            </h3>
            <StepList
              items={missionSteps}
              icon={ShieldCheck}
              accentClass="text-orange-400"
            />
          </div>
        </div>
      </Section>

      <Section className="border-b border-white/10 bg-[#071a2d]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="lg:order-2">
            <GlassCard className="border-orange-300/20 bg-white/[0.065] shadow-2xl shadow-blue-950/35">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-400/10 text-orange-400">
                <Eye size={27} />
              </div>
              <h2 className="mt-6 text-3xl font-bold">Vision</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                To become the globally recognized gold standard in B2B data
                intelligence, where businesses instinctively turn to BookDataZ
                when they need reliable, ethical data solutions. We envision a
                business ecosystem where every connection made through our data
                creates mutual value, fostering sustainable growth and innovation
                across industries worldwide.
              </p>
            </GlassCard>
          </div>
          <div className="lg:order-1">
            <h3 className="mb-6 text-2xl font-bold">Our Path Forward</h3>
            <StepList
              items={visionSteps}
              icon={ArrowRight}
              accentClass="text-blue-300"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-100 to-white text-slate-950">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Guiding Principles
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Core <span className="text-blue-700">Values</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-600">
            The principles that guide every decision we make and every
            interaction we have
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map(({ Icon, title, description }) => (
            <GlassCard
              key={title}
              className="border-slate-200 bg-white shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon size={23} />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </GlassCard>
          ))}
        </div>

      </Section>
    </div>
  );
}

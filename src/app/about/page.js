import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Globe2,
  Layers3,
  MapPin,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";

import Button from "../../../components/ui/Button";
import CTASection from "../../../components/ui/CTASection";
import GlassCard from "../../../components/ui/GlassCard";
import Section from "../../../components/ui/Section";
import { testimonials } from "@/resource/testimonials";
import { datacollections, whatweoffer } from "@/resource/data";

const profilePillars = [
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

const approach = [
  {
    icon: Layers3,
    title: "Structured by design",
    description:
      "Data is organised into clear categories and subcategories, so teams can move from a broad market to a precise audience quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Verified and maintained",
    description:
      "Records are regularly verified and kept current, reducing wasted outreach and protecting sender reputation.",
  },
  {
    icon: Target,
    title: "Built for outreach",
    description:
      "Every dataset is shaped to drop into real sales and marketing workflows — not just sit in a spreadsheet.",
  },
];

const industries = [
  { name: "Healthcare", img: "/aboutImages/about-healthcare.jpg" },
  { name: "Retail", img: "/aboutImages/about-retail.jpg" },
  { name: "Technology", img: "/aboutImages/about-tech.jpg" },
  { name: "Finance", img: "/aboutImages/about-finance.jpg" },
  { name: "Manufacturing", img: "/aboutImages/about-manufacturing.jpg" },
  { name: "Education", img: "/aboutImages/about-education.jpg" },
];

const offices = [
  {
    title: "US Office",
    lines: ["6150 Poplar Ave, Suite 200", "Memphis, TN 38119", "United States"],
  },
  {
    title: "UK Office",
    lines: ["Gateway East, White City", "London W12 7TU", "United Kingdom"],
  },
];

const AboutPage = () => (
  <div className="about-page-premium overflow-hidden text-[color:var(--text-main)]">
    {/* Hero — theme-token background only (no photo/asset overlay) */}
    <section className="about-hero-dark relative isolate overflow-hidden border-b border-white/10">
      <div className="about-hero-overlay absolute inset-0 -z-10" />
      <div className="premium-warm-aurora" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--accent-soft)]">
            About BookDataZ
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The team behind your{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-white bg-clip-text text-transparent">
              B2B data
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 md:text-lg">
            BookDataZ provides premium B2B email data, datacards, industry lists,
            and databases. Our contact database is developed specifically for
            organizations in the USA, UK, and Europe, helping sales and marketing
            teams drive pipelines effectively.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="accent" size="lg" className="gap-2">
              Find Out More <ArrowRight size={18} />
            </Button>
            <Button
              href="/datacard"
              variant="outline"
              size="lg"
              className="border-[#dacdbf] bg-white/75 text-[#211814] backdrop-blur-md"
            >
              Browse Datacards
            </Button>
          </div>
        </div>

        <div className="about-bright-card overflow-hidden rounded-[2rem] p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <span className="value-pillar-icon">
              <MapPin size={22} />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-700">
                Company overview
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#151515]">
                Premium B2B data, structured for outreach
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {datacollections.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-[#e8ddd2] bg-[#fbf7f2] p-4"
              >
                <p className="text-2xl font-bold text-[#151515]">{item.number}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-orange-700">
                  {item.heading}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {offices.map((office) => (
              <div
                key={office.title}
                className="rounded-3xl border border-[#e8ddd2] bg-white p-5"
              >
                <p className="text-sm font-semibold text-[#151515]">
                  {office.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f6672]">
                  {office.lines[0]}
                  <br />
                  {office.lines[1]}
                  <br />
                  {office.lines[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Approach / story */}
    <Section className="about-section-light border-b border-[color:var(--card-border)]">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
            Our Approach
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#151515] md:text-4xl lg:text-5xl">
            Data you can build a pipeline on
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#5f6672] md:text-lg">
            We focus on the parts of B2B data that actually move revenue:
            structure, accuracy, and relevance. The result is a catalogue that
            sales and marketing teams can trust and act on with confidence.
          </p>
        </div>

        <div className="grid gap-4">
          {approach.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="premium-card premium-card-light premium-card-hover flex items-start gap-4 rounded-[1.6rem] p-6"
            >
              <span className="value-pillar-icon shrink-0">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#151515]">{title}</h3>
                <p className="mt-2 leading-7 text-[#5f6672]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Why teams choose us */}
    <Section className="about-section-dark-cards border-b border-white/10">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
          Company Profile
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#151515] md:text-4xl lg:text-5xl">
          A more mature view of why teams choose BookDataZ
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5f6672]">
          BookDataZ combines global database coverage, verified business records,
          and tailored support for sales and marketing workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {profilePillars.map(({ title, description, icon: Icon }) => (
          <GlassCard
            key={title}
            className="premium-card premium-card-light premium-card-hover text-left"
          >
            <div className="value-pillar-icon">
              <Icon size={24} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#151515]">{title}</h3>
            <p className="mt-3 leading-7 text-[#5f6672]">{description}</p>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* What we provide */}
    <Section className="about-section-light border-b border-[color:var(--card-border)]">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
          What BookDataZ Provides
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#151515] md:text-4xl lg:text-5xl">
          Services built around business data needs
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {whatweoffer.map((offer) => (
          <GlassCard
            key={offer.id}
            className="premium-card premium-card-light premium-card-hover h-full"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-orange-200 bg-orange-50">
              <Image src={offer.icon} alt="" width={32} height={32} />
            </div>
            <h3 className="mt-7 text-xl font-semibold text-[#151515]">
              {offer.title}
            </h3>
            <p className="mt-4 leading-7 text-[#5f6672]">{offer.content}</p>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Industries */}
    <Section className="about-section-muted border-b border-[color:var(--card-border)]">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
          Market Coverage
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#151515] md:text-4xl lg:text-5xl">
          Industries We Serve
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#5f6672]">
          From healthcare to retail, our databases empower businesses across
          various industries to achieve their goals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {industries.map((industry) => (
          <article
            key={industry.name}
            className="group relative min-h-72 overflow-hidden rounded-[1.8rem] border border-[#e8ddd2] bg-[#161311] shadow-[0_30px_70px_-48px_rgba(26,22,19,0.4)]"
          >
            <Image
              src={industry.img}
              alt={industry.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-orange-100 backdrop-blur-sm">
                Industry coverage
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {industry.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </Section>

    {/* Testimonials */}
    <Section className="premium-tech-espresso border-y border-white/10 text-white">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
          Client Perspective
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {testimonials.map((testimonial) => (
          <GlassCard
            key={testimonial.name}
            className="rounded-[1.8rem] border-white/10 bg-white/[0.05]"
          >
            {testimonial.rating ? (
              <div
                className="mb-4 flex items-center gap-1"
                role="img"
                aria-label={`Rated ${testimonial.rating} out of 5 by ${testimonial.name}`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    aria-hidden="true"
                    className={
                      i < Math.round(testimonial.rating)
                        ? "text-[color:var(--accent-soft)]"
                        : "text-white/25"
                    }
                    style={
                      i < Math.round(testimonial.rating)
                        ? { fill: "var(--accent-soft)" }
                        : undefined
                    }
                  />
                ))}
              </div>
            ) : null}
            <p className="text-lg leading-8 text-slate-200">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="font-semibold text-white">{testimonial.name}</h3>
              <p className="mt-1 text-sm text-orange-200">{testimonial.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>

    <Section className="about-final-cta-section">
      <CTASection
        title="Ready to Elevate Your Business?"
        description="Partner with BookDataZ to access premium databases and unlock growth opportunities in your target markets."
        href="/contact"
        actionLabel="Get Started Today"
        buttonVariant="accent"
        className="about-final-cta text-center"
      />
    </Section>
  </div>
);

export default AboutPage;

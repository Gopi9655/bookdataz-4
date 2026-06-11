import Image from "next/image";

import Button from "../../../components/ui/Button";
import CTASection from "../../../components/ui/CTASection";
import GlassCard from "../../../components/ui/GlassCard";
import Section from "../../../components/ui/Section";

const features = [
  {
    title: "Global Reach",
    description:
      "Connect with businesses worldwide with our expansive geographical database coverage.",
    icon: "/aboutImages/global-svgrepo-com.svg",
  },
  {
    title: "High-Quality Data",
    description:
      "Ensure accuracy and reliability with our regularly verified data resources.",
    icon: "/aboutImages/data-svgrepo-com.svg",
  },
  {
    title: "Custom Solutions",
    description: "Tailored data services to meet your unique business needs.",
    icon: "/aboutImages/solution-key-connect-svgrepo-com.svg",
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

const testimonials = [
  {
    name: "Lars Petersen",
    role: "Marketing Manager, NovaLink Denmark",
    quote:
      "BookDataz helped us scale our campaigns with accurate and reliable data. Highly recommended!",
  },
  {
    name: "Darren Mitchell",
    role: "Email List Strategist, Datastream Berlin",
    quote:
      "The quality of data provided by BookDataz has been instrumental in closing deals efficiently.",
  },
  {
    name: "Isabelle Fournier",
    role: "CMO, BlueMetric France",
    quote:
      "Their customizable solutions are exactly what our business needed to expand into new markets.",
  },
];

const AboutPage = () => (
  <div className="overflow-hidden bg-slate-950">
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#071a2d] py-20 text-white lg:py-28">
      <Image
        src="/aboutImages/i4b_EMEA_data_specialists_banner_2.jpg"
        alt=""
        fill
        priority
        className="-z-20 object-cover object-center opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#071a2d]/60" />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            About BookDataZ
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We are BookDataz, the leading{" "}
            <span className="text-orange-400">Database Provider</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Our B2B contact database is developed specifically for organizations
            in the USA, UK, and Europe, helping sales and marketing teams drive
            pipelines effectively.
          </p>
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            className="mt-8 shadow-lg shadow-orange-950/30"
          >
            Find Out More
          </Button>
        </div>
      </div>
    </section>

    <Section className="border-b border-white/10 bg-[#071a2d] text-white">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
          Our Difference
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Why Choose BookDataz?
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <GlassCard
            key={feature.title}
            className="border-blue-300/15 bg-white/[0.06] text-center"
          >
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-blue-300/20 bg-blue-400/10">
              <Image
                src={feature.icon}
                alt=""
                width={38}
                height={38}
                className="h-10 w-10"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/contact" variant="light" size="lg">
          Learn More About Our Services
        </Button>
      </div>
    </Section>

    <Section className="bg-gradient-to-b from-slate-100 to-white">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
          Market Coverage
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          Industries We Serve
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
          From healthcare to retail, our databases empower businesses across
          various industries to achieve their goals.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {industries.map((industry) => (
          <article
            key={industry.name}
            className="group relative min-h-64 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-lg"
          >
            <Image
              src={industry.img}
              alt={industry.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-semibold text-white lg:p-8">
              {industry.name}
            </h3>
          </article>
        ))}
      </div>
    </Section>

    <Section className="border-y border-white/10 bg-slate-900 text-white">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
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
            className="border-blue-300/15 bg-white/[0.055]"
          >
            <p className="text-lg leading-8 text-slate-200">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="font-semibold text-white">{testimonial.name}</h3>
              <p className="mt-1 text-sm text-blue-300">{testimonial.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>

    <Section className="bg-slate-950">
      <CTASection
        title="Ready to Elevate Your Business?"
        description="Partner with BookDataz to access premium databases and unlock growth opportunities in your target markets."
        href="/contact"
        actionLabel="Get Started Today"
        buttonVariant="accent"
        className="border-blue-300/20 bg-[#082d52]/75 text-center shadow-2xl shadow-blue-950/40"
      />
    </Section>
  </div>
);

export default AboutPage;

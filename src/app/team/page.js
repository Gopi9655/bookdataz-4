import Image from "next/image";
import { Lightbulb, LockKeyhole, Sprout, Target, Users } from "lucide-react";

import GlassCard from "../../../components/ui/GlassCard";
import Section from "../../../components/ui/Section";

const leaders = [
  {
    name: "Brad Allen",
    role: "CEO & Founder",
    image: "/team/teammale1.jpg",
    description:
      "Brad Allen is the strategic mind behind BookDataZ, passionate about data integrity and ethical business practices. She ensures our vision translates into tangible client success.",
  },
  {
    name: "David Lee",
    role: "CTO & Co-Founder",
    image: "/team/team male 2.jpg",
    description:
      "David leads our technological advancements, ensuring BookDataZ utilizes cutting-edge solutions for data aggregation and security. His expertise keeps us ahead of the curve.",
  },
  {
    name: "Rohan Mehta",
    role: "Chief Operations Officer",
    description:
      "Rohan Mehta optimizes our operational efficiency and scalability. Her focus on seamless processes ensures BookDataZ delivers data reliably and consistently to our global clientele.",
  },
];

const team = [
  {
    name: "Roger Depay",
    role: "VP of sales",
    description: "Results-Oriented Sales Strategist",
    image: "/team/team leader 3.jpg",
  },
  {
    name: "David Johnson",
    role: "Director of sales",
    description: "Sales Operations Leader",
    image: "/team/team leader 1.jpeg",
  },
  {
    name: "Robert Haynes",
    role: "Business Development Manager",
    description: "Business Growth Architect",
    image: "/team/team male 3.jpg",
  },
  {
    name: "Kevin Hughes",
    role: "Business Development Manager",
    description: "Sales-Driven Marketer",
    image: "/team/team male 4.jpg",
  },
  {
    name: "Peter Stenberg",
    role: "Business Development Manager",
    description: "Revenue Development Strategist",
    image: "/team/team male 5.jpg",
  },
  {
    name: "Michael Brand",
    role: "Business Development Manager",
    description: "Data-Led Sales Planner",
    image: "/team/team male 6.jpeg",
  },
  {
    name: "Sophia Larson",
    role: "Senior Business Development Manager",
    description: "Senior Business Development Manager",
  },
  {
    name: "Michael Brand",
    role: "Business Development Manager",
    description: "Business Development Manager",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We foster a culture of continuous learning and adaptation, always seeking new ways to enhance our data solutions and client experience.",
    Icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "Our strength lies in teamwork. We encourage open communication and mutual support across all departments to achieve collective success.",
    Icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we do, from data accuracy to customer service, setting industry benchmarks.",
    Icon: Target,
  },
  {
    title: "Integrity",
    description:
      "Trust is our currency. We operate with unwavering honesty, transparency, and adherence to ethical standards in all our interactions.",
    Icon: LockKeyhole,
  },
  {
    title: "Growth",
    description:
      "We believe in nurturing growth—for our employees, our clients, and our company. Continuous improvement is at the heart of our journey.",
    Icon: Sprout,
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const Portrait = ({ person, size = "large" }) => {
  const sizeClasses =
    size === "large" ? "h-40 w-40 text-4xl" : "h-28 w-28 text-2xl";

  return (
    <div
      className={`${sizeClasses} relative overflow-hidden rounded-full border-4 border-blue-300/25 bg-blue-400/10`}
    >
      {person.image ? (
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes={size === "large" ? "160px" : "112px"}
          className="object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center font-bold text-blue-200">
          {initials(person.name)}
        </div>
      )}
    </div>
  );
};

export default function TeamLayout() {
  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <Section className="relative border-b border-white/10 bg-[#071a2d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_42%)]" />
        <div className="relative mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            Leadership
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Meet Our <span className="text-orange-400">Visionary Leaders</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Our leadership team brings decades of experience, innovation, and
            passion to guide BookDataZ forward, ensuring we stay true to our
            mission of delivering exceptional B2B data.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {leaders.map((leader) => (
            <GlassCard
              key={leader.name}
              className="flex h-full flex-col items-center border-blue-300/15 bg-white/[0.06] text-center"
            >
              <Portrait person={leader} />
              <h2 className="mt-6 text-2xl font-bold">{leader.name}</h2>
              <p className="mt-2 font-semibold text-orange-400">
                {leader.role}
              </p>
              <p className="mt-5 leading-7 text-slate-300">
                {leader.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-100 to-white text-slate-950">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Our People
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Meet Our <span className="text-blue-700">Dedicated Team</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 md:text-lg">
            Our global team of experts is the backbone of BookDataZ. From data
            scientists to compliance specialists, each member is committed to
            excellence and client success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {team.map((member, index) => (
            <GlassCard
              key={`${member.name}-${index}`}
              className="flex h-full flex-col items-center border-slate-200 bg-white text-center shadow-md"
            >
              <Portrait person={member} size="small" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {member.name}
              </h3>
              <p className="mt-2 font-semibold text-blue-700">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {member.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
            How We Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Core Values &amp; Culture
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300 md:text-lg">
            At BookDataZ, our team thrives on a foundation of shared values that
            drive our innovation, collaboration, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {values.map(({ title, description, Icon }) => (
            <GlassCard
              key={title}
              className="border-blue-300/15 bg-white/[0.055]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
                <Icon size={23} />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </GlassCard>
          ))}
        </div>

      </Section>
    </div>
  );
}

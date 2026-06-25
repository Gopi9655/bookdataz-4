import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "./ui/Container";

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About BookDataZ" },
      { href: "/story", label: "Our Story" },
      { href: "/team", label: "Team" },
      { href: "/mission", label: "Mission & Vision" },
      { href: "/#testimonials", label: "Customer Reviews" },
    ],
  },
  {
    title: "Industries We Serve",
    links: [
      { href: "/automotive-industry", label: "Automotive" },
      { href: "/banking-and-finance", label: "Banking and Finance" },
      { href: "/construction-companies", label: "Construction" },
      { href: "/educational-industries", label: "Education" },
      { href: "/healthcare-industries", label: "Healthcare Technology" },
      { href: "/manufacturing-industries", label: "Manufacturing" },
      { href: "/real-estate", label: "Real Estate" },
      { href: "/retail-industries", label: "Retail" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { href: "/contact", label: "Request a Demo" },
      { href: "/contact", label: "Contact Us" },
      { href: "/contact", label: "Support" },
    ],
  },
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

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--footer-bg)] text-[color:var(--footer-text)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(var(--shadow-rgb),0.0),transparent_30%)]" />
    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--logo-orange),var(--accent-soft),transparent)] opacity-60" />

    <Container className="relative py-16 lg:py-20">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_34px_80px_-52px_rgba(0,0,0,0.75)] backdrop-blur-sm lg:grid-cols-[1.05fr_1.95fr] lg:gap-14 lg:p-10">
        <div>
          <Link
            href="/"
            aria-label="BookDataZ home"
            className="bdz-logo bdz-logo--on-dark"
          >
            <svg
              className="bdz-logo__mark"
              width="34"
              height="34"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="bdz-footer-logo-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3B78EC" />
                  <stop offset="1" stopColor="#205FD6" />
                </linearGradient>
              </defs>
              <rect x="3" y="8.5" width="26" height="17.5" rx="3.5" fill="url(#bdz-footer-logo-gradient)" />
              <path
                d="M5.5 11.5 L16 19 L26.5 11.5"
                fill="none"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.92"
              />
              <circle cx="25" cy="9" r="6.4" fill="#22B24C" stroke="#fff" strokeWidth="2" />
              <path
                d="M22 9.1 L24.2 11.3 L28 7.3"
                stroke="#fff"
                strokeWidth="1.9"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="bdz-logo__word" aria-hidden="true">
              <span className="bdz-logo__book">Book</span>
              <span className="bdz-logo__data">Dataz</span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-orange-50/62">
            Premium B2B email data, datacards, industry lists, and databases
            for sales and marketing teams.
          </p>

          <div className="mt-7 space-y-3 text-sm">
            <a
              href="tel:9017800114"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-[color:var(--accent-soft)]">
                <Phone size={16} />
              </span>
              9017800114
            </a>
            <a
              href="mailto:sales@bookdataz.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-[color:var(--accent-soft)]">
                <Mail size={16} />
              </span>
              sales@bookdataz.com
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {offices.map((office) => (
              <div
                key={office.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex gap-3">
                  <MapPin size={17} className="mt-1 shrink-0 text-orange-300" />
                  <p className="text-sm leading-6 text-orange-50/62">
                    <span className="font-semibold text-white">
                      {office.title}
                    </span>
                    <br />
                    {office.lines[0]}
                    <br />
                    {office.lines[1]}
                    <br />
                    {office.lines[2]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-10">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                {group.title}
              </h2>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-orange-400 to-orange-300/20" />
              <ul className="mt-5 space-y-3 text-sm leading-6">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="transition hover:text-orange-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs leading-6 text-orange-50/42 sm:text-left">
        Designed and developed by{" "}
        <span className="font-semibold text-slate-300">BookDataZ</span>. Copyright{" "}
        {new Date().getFullYear()}{" "}
        <span className="font-semibold text-slate-300">BookDataZ</span>. All
        rights reserved.
      </div>
    </Container>
  </footer>
);

export default Footer;

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "./ui/Container";

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Bookdataz" },
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

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.10),transparent_30%)]" />
    <Container className="relative py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1.95fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
            BookDataZ
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <a
              href="tel:+19013005501"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
                <Phone size={16} />
              </span>
              +1 (901)-300-5501
            </a>
            <a
              href="mailto:sales@bookdataz.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
                <Mail size={16} />
              </span>
              sales@bookdataz.com
            </a>
          </div>

          <div className="mt-8 grid gap-5 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex gap-3">
              <MapPin size={17} className="mt-1 shrink-0 text-orange-400" />
              <p>
                <span className="font-semibold text-white">US Office</span>
                <br />
                6150 Poplar Ave, Suite 200
                <br />
                Memphis, TN 38119
                <br />
                United States
              </p>
            </div>
            <div className="flex gap-3">
              <MapPin size={17} className="mt-1 shrink-0 text-orange-400" />
              <p>
                <span className="font-semibold text-white">UK Office</span>
                <br />
                Gateway East, White City
                <br />
                London W12 7TU
                <br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-10">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                {group.title}
              </h2>
              <div className="mt-4 h-px w-10 bg-orange-400" />
              <ul className="mt-5 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="transition hover:text-blue-300"
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

      <div className="mt-14 border-t border-white/10 pt-7 text-center text-xs leading-6 text-slate-500 sm:text-left">
        Designed &amp; Developed by{" "}
        <span className="font-semibold text-slate-300">Bookdataz</span>. ©{" "}
        {new Date().getFullYear()}{" "}
        <span className="font-semibold text-slate-300">Bookdataz</span>. All
        rights reserved.
      </div>
    </Container>
  </footer>
);

export default Footer;

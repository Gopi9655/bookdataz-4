"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Car,
  ChevronDown,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Layers3,
  Menu,
  Pill,
  Plane,
  ShoppingBag,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { mailinglinks } from "@/resource/data";
import Container from "./ui/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/technology", label: "Technology List" },
  { href: "/datacard", label: "Browse Datacards" },
  { href: "/contact", label: "Contact Us" },
];

// Consistent, premium B2B line icons per industry (keyed by the data file's
// stable ids) — replaces the mismatched raster clipart with one icon family.
// Presentation only; sectors/names still come from data.js.
const INDUSTRY_ICONS = {
  31: Car, // Automotive Industry
  32: Landmark, // Banking and Finance
  33: HardHat, // Construction Companies
  34: GraduationCap, // Educational Industries
  35: UtensilsCrossed, // Food and Beverages
  36: HeartPulse, // Healthcare Industries
  37: Factory, // Manufacturing Industries
  38: Fuel, // Oil and Gas
  39: Pill, // Pharmaceuticals
  40: Building2, // Real Estate
  41: ShoppingBag, // Retail Industries
  42: Plane, // Travel and Transport Industries
};

const industryIcon = (id) => INDUSTRY_ICONS[id] || Briefcase;

const industryHref = (name) => `/${name.toLowerCase().replace(/ /g, "-")}`;

const baseNavLink =
  "rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition";

const Navbar = () => {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [isMailingOpen, setIsMailingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMailingOpen, setIsMobileMailingOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === href : pathname.startsWith(href);
  const isIndustryActive = mailinglinks.some(
    (item) => pathname === industryHref(item.name)
  );

  useEffect(() => {
    setIsMailingOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileMailingOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMailingOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--nav-border)] bg-[var(--nav-bg)] text-[color:var(--nav-text)] shadow-[0_18px_46px_-34px_rgba(var(--shadow-rgb),0.32)] backdrop-blur-xl">
      <Container className="flex h-[80px] items-center justify-between gap-4 lg:h-[92px]">
        <Link href="/" aria-label="BookDataZ home" className="bdz-logo">
          <svg
            className="bdz-logo__mark"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="bdz-logo-envelope-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3B78EC" />
                <stop offset="1" stopColor="#205FD6" />
              </linearGradient>
            </defs>
            <rect x="3" y="8.5" width="26" height="17.5" rx="3.5" fill="url(#bdz-logo-envelope-gradient)" />
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

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`${baseNavLink} ${
                isActive(link.href)
                  ? "bg-[var(--nav-active-bg)] text-[color:var(--nav-active-text)]"
                  : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsMailingOpen(true)}
            onMouseLeave={() => setIsMailingOpen(false)}
            onFocus={() => setIsMailingOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsMailingOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsMailingOpen(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isMailingOpen}
              aria-controls="mailing-mega"
              onClick={() => setIsMailingOpen((open) => !open)}
              className={`${baseNavLink} flex items-center gap-1.5 ${
                isIndustryActive || isMailingOpen
                  ? "bg-[var(--nav-active-bg)] text-[color:var(--nav-active-text)]"
                  : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
              }`}
            >
              Mailing Lists
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  isMailingOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isMailingOpen && (
                <motion.div
                  id="mailing-mega"
                  role="region"
                  aria-label="Industry mailing lists"
                  className="mailing-mega"
                  initial={{ opacity: 0, y: 6, scale: 0.985, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                  exit={{ opacity: 0, y: 6, scale: 0.985, x: "-50%" }}
                  transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <span className="mailing-mega-caret" aria-hidden="true" />
                  <div className="mailing-mega-panel">
                    <div className="mailing-mega-head">
                      <div className="min-w-0">
                        <p className="mailing-mega-eyebrow">Industry coverage</p>
                        <p className="mailing-mega-subtitle">
                          Browse the BookDataZ mailing list catalogue by sector.
                        </p>
                      </div>
                      <span className="mailing-mega-head-ico" aria-hidden="true">
                        <Layers3 size={18} />
                      </span>
                    </div>

                    <div className="mailing-mega-grid">
                      {mailinglinks.map((item) => {
                        const href = industryHref(item.name);
                        const Icon = industryIcon(item.id);
                        const active = pathname === href;
                        return (
                          <Link
                            key={item.id}
                            href={href}
                            aria-current={active ? "page" : undefined}
                            className={`mailing-mega-item${
                              active ? " mailing-mega-item-active" : ""
                            }`}
                          >
                            <span className="mailing-mega-ico" aria-hidden="true">
                              <Icon size={18} />
                            </span>
                            <span className="mailing-mega-name">{item.name}</span>
                            <ArrowUpRight
                              size={15}
                              className="mailing-mega-arrow"
                              aria-hidden="true"
                            />
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mailing-mega-foot">
                      <span className="mailing-mega-foot-note">
                        {mailinglinks.length} industry sectors
                      </span>
                      <Link href="/datacard" className="mailing-mega-foot-link">
                        Browse all datacards
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`${
                link.href === "/contact"
                  ? "ml-1 rounded-full border border-[color:var(--accent)] bg-[image:var(--accent-grad)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--nav-cta-text)] shadow-[0_16px_34px_-18px_rgba(var(--shadow-rgb),0.6)] transition hover:brightness-110"
                  : `${baseNavLink} ${
                      isActive(link.href)
                        ? "bg-[var(--nav-active-bg)] text-[color:var(--nav-active-text)]"
                        : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
                    }`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--nav-logo-border)] bg-[var(--nav-logo-bg)] text-[color:var(--nav-text)] shadow-sm transition hover:border-[color:var(--accent-border)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--accent)] xl:hidden"
        >
          {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-[color:var(--nav-border)] bg-[var(--nav-bg)] xl:hidden"
          >
            <Container className="max-h-[calc(100vh-76px)] overflow-y-auto py-4">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive(link.href)
                        ? "bg-[image:var(--accent-grad)] text-[color:var(--accent-contrast)]"
                        : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  type="button"
                  aria-expanded={isMobileMailingOpen}
                  onClick={() => setIsMobileMailingOpen((open) => !open)}
                  className={`mt-1 flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    isIndustryActive
                      ? "bg-[var(--nav-active-bg)] text-[color:var(--nav-active-text)]"
                      : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
                  }`}
                >
                  Mailing Lists
                  <ChevronDown
                    size={17}
                    className={`transition-transform ${isMobileMailingOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isMobileMailingOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-1.5 rounded-2xl border border-[color:var(--card-border)] bg-[var(--surface-1)] p-2 sm:grid-cols-2">
                        {mailinglinks.map((item) => {
                          const href = industryHref(item.name);
                          const Icon = industryIcon(item.id);
                          const active = pathname === href;
                          return (
                            <Link
                              key={item.id}
                              href={href}
                              aria-current={active ? "page" : undefined}
                              className={`flex min-h-[48px] items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                                active
                                  ? "bg-[image:var(--accent-grad)] text-[color:var(--accent-contrast)]"
                                  : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--accent-strong)]"
                              }`}
                            >
                              <span
                                className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border ${
                                  active
                                    ? "border-white/40 bg-white/15 text-[color:var(--accent-contrast)]"
                                    : "border-[color:var(--accent-border)] bg-[var(--accent-tint)] text-[color:var(--accent)]"
                                }`}
                                aria-hidden="true"
                              >
                                <Icon size={17} />
                              </span>
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

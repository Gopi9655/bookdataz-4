"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="BookDataZ home"
          className="group flex shrink-0 items-center rounded-[1.15rem] border border-[color:var(--nav-logo-border)] bg-[var(--nav-logo-bg)] px-3 py-2 shadow-[0_16px_36px_-24px_rgba(var(--shadow-rgb),0.28)] transition hover:border-[color:var(--accent-border)]"
        >
          <Image
            src="/logo-bookdataz.svg"
            alt="BookDataZ"
            width={210}
            height={45}
            priority
            className="h-8 w-auto sm:h-9"
          />
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
          >
            <button
              type="button"
              aria-expanded={isMailingOpen}
              onClick={() => setIsMailingOpen((open) => !open)}
              className={`${baseNavLink} flex items-center gap-1.5 ${
                isIndustryActive
                  ? "bg-[var(--nav-active-bg)] text-[color:var(--nav-active-text)]"
                  : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
              }`}
            >
              Mailing Lists
              <ChevronDown
                size={15}
                className={`transition-transform ${isMailingOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isMailingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full w-[min(860px,calc(100vw-2.5rem))] pt-4"
                >
                  <div className="overflow-hidden rounded-[1.8rem] border border-[color:var(--nav-border)] bg-[var(--card-bg)] shadow-[0_32px_70px_-42px_rgba(var(--shadow-rgb),0.4)] backdrop-blur-xl">
                    <div className="border-b border-[color:var(--card-border)] px-5 py-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-700">
                        Industry coverage
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Browse the BookDataZ mailing list catalogue by sector.
                      </p>
                    </div>
                    <div className="max-h-[min(64vh,520px)] overflow-y-auto p-4">
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                        {mailinglinks.map((item) => {
                          const href = industryHref(item.name);
                          return (
                            <Link
                              key={item.id}
                              href={href}
                              className={`flex min-w-0 items-center gap-3 rounded-2xl border px-3 py-3 text-sm font-medium transition ${
                                pathname === href
                                  ? "border-[color:var(--accent)] bg-[image:var(--accent-grad)] text-[color:var(--accent-contrast)] shadow-[0_18px_34px_-24px_rgba(var(--shadow-rgb),0.5)]"
                                  : "border-transparent text-[color:var(--nav-muted)] hover:border-[color:var(--card-border)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--nav-text)]"
                              }`}
                            >
                              <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-[color:var(--card-border)] bg-[var(--card-bg)]">
                                <Image
                                  src={item.icon}
                                  alt=""
                                  width={28}
                                  height={28}
                                  className="h-7 w-7 object-cover"
                                />
                              </span>
                              <span className="truncate">{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
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
                      <div className="grid gap-1 rounded-2xl border border-[color:var(--card-border)] bg-[var(--surface-1)] p-2 sm:grid-cols-2">
                        {mailinglinks.map((item) => {
                          const href = industryHref(item.name);
                          return (
                            <Link
                              key={item.id}
                              href={href}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                pathname === href
                                  ? "bg-[image:var(--accent-grad)] text-[color:var(--accent-contrast)]"
                                  : "text-[color:var(--nav-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[color:var(--accent-strong)]"
                              }`}
                            >
                              <Image
                                src={item.icon}
                                alt=""
                                width={24}
                                height={24}
                                className="h-6 w-6 rounded-lg bg-white object-cover"
                              />
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

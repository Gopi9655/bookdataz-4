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
    <nav className="sticky top-0 z-50 border-b border-orange-100/80 bg-[#fffdf9]/95 text-slate-900 shadow-[0_12px_32px_-24px_rgba(5,45,82,0.45)] backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="BookDataZ home"
          className="group rounded-2xl border border-slate-200/80 bg-white px-2.5 py-2 shadow-sm transition hover:border-orange-300 hover:shadow-orange-100"
        >
          <Image
            src="/logo-b.jpg"
            alt="BookDataZ"
            width={200}
            height={49}
            priority
            className="h-8 w-auto mix-blend-multiply sm:h-9"
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition ${
                isActive(link.href)
                  ? "bg-orange-50 text-orange-600"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-800"
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
              className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition ${
                isIndustryActive
                  ? "bg-orange-50 text-orange-600"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-800"
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
                  className="absolute right-0 top-full w-[min(820px,calc(100vw-2.5rem))] pt-4"
                >
                  <div className="max-h-[min(68vh,560px)] overflow-y-auto rounded-3xl border border-slate-200 bg-[#fffdf9]/[0.98] p-4 shadow-2xl shadow-blue-950/15 backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-1 lg:grid-cols-3">
                      {mailinglinks.map((item) => {
                        const href = industryHref(item.name);
                        return (
                          <Link
                            key={item.id}
                            href={href}
                            className={`flex min-w-0 items-center gap-3 rounded-2xl p-3 text-sm font-medium transition ${
                              pathname === href
                                ? "bg-orange-500 text-white"
                                : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                            }`}
                          >
                            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition ${
                isActive(link.href)
                  ? "bg-orange-50 text-orange-600"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-800"
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
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 xl:hidden"
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
            className="overflow-hidden border-t border-slate-200 bg-[#fffdf9] xl:hidden"
          >
            <Container className="max-h-[calc(100vh-72px)] overflow-y-auto py-4">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive(link.href)
                        ? "bg-orange-500 text-white"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  type="button"
                  aria-expanded={isMobileMailingOpen}
                  onClick={() => setIsMobileMailingOpen((open) => !open)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    isIndustryActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"
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
                      <div className="grid gap-1 rounded-2xl border border-slate-200 bg-blue-50/60 p-2 sm:grid-cols-2">
                        {mailinglinks.map((item) => {
                          const href = industryHref(item.name);
                          return (
                            <Link
                              key={item.id}
                              href={href}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                pathname === href
                                  ? "bg-orange-500 text-white"
                                  : "text-slate-700 hover:bg-white hover:text-blue-800"
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

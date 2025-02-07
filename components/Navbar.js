
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { datacollections, mailinglinks } from "@/resource/data";

const Navbar = () => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMailingOpen, setIsMobileMailingOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology List" },
    { href: "/datacard", label: "Browse Datacard" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Framer Motion variants
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, type: "tween", duration: 0.3 },
    }),
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Set active link on route change
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          !event.target.closest('.mobile-menu') && 
          !event.target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav className="sticky top-0 z-50 bg-gradient-to-r px-32 from-white to-gray-100 py-0">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <motion.div className="flex-shrink-0">
          <Image src="/logo-b.jpg" alt="logo" width={200} height={150} />
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div className="hidden sm:flex space-x-9 text-l font-semibold relative">
          {/* First two nav links */}
          {navLinks.slice(0, 2).map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`${
                  activeLink === link.href ? "text-customBlue" : "text-black"
                } hover:text-customBlue transition duration-200`}
              >
                {link.label}
              </Link>

              {/* Hover Underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-customBlue"
                initial="hidden"
                animate={
                  hoveredLink === link.href || activeLink === link.href
                    ? "visible"
                    : "hidden"
                }
                variants={underlineVariants}
              />
            </div>
          ))}

          {/* Mailing List with Dropdown (3rd item) */}
          <div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button className="relative flex items-center gap-2 text-black hover:text-customBlue transition duration-200 focus:outline-none">
              Mailing List
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black hover:text-customBlue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <motion.div
              className="absolute left-0 hidden group-hover:flex bg-white rounded-xl shadow-lg p-6 z-50 w-[600px] transform transition duration-300"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)",
              }}
              initial="hidden"
              animate={isHovering ? "visible" : "hidden"}
              variants={dropdownVariants}
            >
              <div className="grid grid-cols-3 gap-8">
                {mailinglinks.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate={isHovering ? "visible" : "hidden"}
                    variants={itemVariants}
                  >
                    <Link
                      href={`/${item.name.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center text-gray-700 hover:text-white hover:bg-customBlue hover:rounded-md p-2 transition duration-200"
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="mr-3"
                      />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Remaining nav links */}
          {navLinks.slice(2).map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`${
                  activeLink === link.href ? "text-customBlue" : "text-black"
                } hover:text-customBlue transition duration-200`}
              >
                {link.label}
              </Link>

              {/* Hover Underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-customBlue"
                initial="hidden"
                animate={
                  hoveredLink === link.href || activeLink === link.href
                    ? "visible"
                    : "hidden"
                }
                variants={underlineVariants}
              />
            </div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden hamburger-button p-2 hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="sm:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block py-3 px-4 text-lg rounded-lg mb-2 ${
                        activeLink === link.href
                          ? "bg-customBlue text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Mailing List Accordion */}
                  <div className="mb-2">
                    <button
                      onClick={() => setIsMobileMailingOpen(!isMobileMailingOpen)}
                      className="w-full flex justify-between items-center py-3 px-4 text-lg text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      Mailing List
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isMobileMailingOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isMobileMailingOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50 rounded-lg mt-1"
                        >
                          <div className="p-2">
                            {mailinglinks.map((item) => (
                              <Link
                                key={item.id}
                                href={`/${item.name.toLowerCase().replace(/ /g, "-")}`}
                                className="flex items-center py-2 px-4 text-gray-700 hover:bg-white hover:text-customBlue rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <Image
                                  src={item.icon}
                                  alt={item.name}
                                  width={24}
                                  height={24}
                                  className="mr-3"
                                />
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

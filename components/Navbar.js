"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRouter } from "next/navigation";
import { mailinglinks } from "@/resource/mailinglinks";

// testimonials
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'InfoGlobalData has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Manager, XYZ Corp',
    testimonial:
      "We've tried several data providers, but InfoGlobalData stands out. The quality of their data and their customer service is exceptional. They truly understand our needs.",
    image: '/testimonial2.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Peter Jones',
    position: 'Sales Director, Example Inc.',
    testimonial:
      'The physician email list we purchased from InfoGlobalData was a game-changer for our outreach. We were able to connect with key decision-makers quickly and efficiently.',
    image: '/testimonial3.jpg',
    rating: 5,
  },
  // Add more testimonials as needed
];

const Navbar = () => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false); // New state for scroll

  // Scroll-based animations
  const { scrollYProgress } = useScroll();

  // Remove or comment out these lines:
  // const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  // const navLinksY = useTransform(scrollYProgress, [0, 0.2], [0, -10]);

  // Update scrolled state on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology List" },
    { href: "/datacard", label: "Browse Datacard" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  // Framer Motion variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.2 },
    }),
  };

  // Underline animation variants
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  // Set active link on route change
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <motion.nav
      className={`sticky top-0 z-50 ${
        scrolled ? "bg-white" : "bg-black"
      }`} // Apply background based on scrolled
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <motion.div className="flex-shrink-0" 
        // Remove or comment out this line:
        // style={{ scale: logoScale }}
        >
          <Image src="/bokdataz-logo-1.png" alt="logo" width={200} height={150} />
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="hidden sm:flex space-x-9 text-l font-semibold relative"
          // Remove or comment out this line:
          // style={{ y: navLinksY }}
        >
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
                className={`hover:text-customBlue ${
                  activeLink === link.href
                    ? "text-customBlue"
                    : scrolled &&
                      activeLink !== link.href &&
                      hoveredLink !== link.href
                    ? "text-black"
                    : "text-white"
                }`}
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

          {/* Mailing List with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              className={`relative hover:text-customBlue focus:outline-none ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Mailing List
            </button>

            {/* Dropdown with Animation */}
            <motion.div
              className="absolute left-0 h-[500px] hidden group-hover:flex bg-white shadow-lg rounded-lg p-6 z-50 w-[600px]"
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
                      className="flex items-center text-gray-700 hover:text-white hover:bg-customBlue hover:rounded-md p-2"
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
                className={`hover:text-customBlue ${
                  activeLink === link.href
                    ? "text-customBlue"
                    : scrolled &&
                      activeLink !== link.href &&
                      hoveredLink !== link.href
                    ? "text-black"
                    : "text-white"
                }`}
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
      </div>
      
    </motion.nav>
  );
};

export default Navbar;
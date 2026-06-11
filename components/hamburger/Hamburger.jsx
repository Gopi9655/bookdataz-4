"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variants for button lines
  const lineVariants = {
    closed: { rotate: 0, y: 0, transition: { duration: 0.3 } },
    openTop: { rotate: 45, y: 13.9, transition: { duration: 0.3 } },
    openMiddle: { opacity: 0, transition: { duration: 0.3 } },
    openBottom: { rotate: -45, y: -13.9, transition: { duration: 0.3 } },
  };

  // Variants for dropdown menu
  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  // Conditional color class
  const lineColorClass = isOpen ? "bg-red-500" : "bg-black";

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-8 h-8 bg-none border-none cursor-pointer focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.div
          className={`w-full h-1 ${lineColorClass} rounded`}
          animate={isOpen ? "openTop" : "closed"}
          variants={lineVariants}
        />
        <motion.div
          className={`w-full h-1 ${lineColorClass} rounded`}
          animate={isOpen ? "openMiddle" : "closed"}
          variants={lineVariants}
        />
        <motion.div
          className={`w-full h-1 ${lineColorClass} rounded`}
          animate={isOpen ? "openBottom" : "closed"}
          variants={lineVariants}
        />
      </button>

      {/* Dropdown Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`absolute right-0 top-12 w-48 bg-white shadow-md rounded-md overflow-hidden z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link href="/" className="block text-black hover:text-gray-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block text-black hover:text-gray-500">About</Link>
          </li>
          <li>
            <Link href="/contact" className="block text-black hover:text-gray-500">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Hamburger;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { CATEGORIES } from "@/resource/mockdata";




export default function BrowseDatacardPage() {
 


  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredCategories(
      CATEGORIES.filter(
        (category) =>
          category.title.toLowerCase().includes(value) ||
          category.subCategories.some((sub) =>
            sub.toLowerCase().includes(value)
          )
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-10">
      {/* WRAPPER for Left & Right sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8 md:mb-10">
        {/* LEFT SECTION: Browse Our Data Cards */}
        <div className="flex flex-col bg-gray-50 h-full p-4 md:p-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-customBlue mb-6 md:mb-12">
            Browse Our Data Cards
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed tracking-wide mb-4 md:mb-0 md:flex-grow leading-[1.8]">
            BookDataz is one of the prominent B2B marketing solution providers
            that specializes in offering data-driven marketing and account
            profiling services. We provide B2B Database of key decision-makers,
            professionals & executives which can be customized as per your
            requirement. With over 170M data repository of business records, our
            company has successfully served many clients globally since
            inception.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6 md:flex-grow tracking-wide leading-[1.8]">
            Our commitment to delivering high-quality, verified data ensures
            that businesses can target the right audience with precision,
            enhancing their marketing strategies and sales efforts. By leveraging
            our vast database and advanced data analytics, we empower
            organizations to streamline their outreach, improve lead generation,
            and drive significant business growth.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="text-blue-500 font-semibold text-base md:text-lg">
              100% Data Ownership Guarantee
            </li>
            <li className="text-blue-500 font-semibold text-base md:text-lg">
              Privacy Compliant: CAN-SPAM & GDPR
            </li>
            <li className="text-blue-500 font-semibold text-base md:text-lg">
              1-to-1 Campaign Assistance: Phone, Email
            </li>
            <li className="text-blue-500 font-semibold text-base md:text-lg">
              Custom Build List Delivery: 24-72 Hours
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top Right Box */}
          <div className="bg-customBlue border border-gray-300 rounded-lg shadow-lg p-4 md:p-6 md:h-full flex flex-col md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white p-10 rounded-xl  text-center">
                170+ Million Email Contacts
              </h2>
             
              <p className="mt-4 text-base md:text-lg text-gray-300 text-center">
                Available for targeted campaigns and lead generation.
              </p>
            </div>
          </div>

          {/* Bottom Right Box */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 md:p-6 h-full flex flex-col justify-center">
            <div className="flex flex-wrap justify-around px-4 mb-4 gap-4">
              <div className="flex flex-col items-center">
                <img
                  src="/datacards/gdpr.png"
                  alt="GDPR Ready"
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-gray-600 mt-2 font-medium text-sm md:text-base">
                  GDPR Ready
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/datacards/ccpa.jpg"
                  alt="CCPA Ready"
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-gray-800 font-medium mt-2 text-sm md:text-base">
                  CCPA Ready
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/datacards/vector-shield-icon.jpg"
                  alt="Privacy Shield Certified"
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-gray-600 font-medium mt-2 text-sm md:text-base">
                  Privacy Shield
                </p>
              </div>
            </div>
            <p className="mt-4 text-black px-4 tracking-wide leading-[1.8] text-sm md:text-base">
              BookDataz is committed to data privacy and security, ensuring
              compliance with global regulations such as GDPR and CCPA. Our
              databases are GDPR Ready, guaranteeing that all data is collected,
              processed, and stored following strict European privacy laws. We
              are also CCPA Ready, offering transparency and control over
              personal data for California residents. Additionally, our Privacy
              Shield Certification ensures secure data transfers, aligning with
              international standards to protect customer information with the
              highest level of integrity.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="mb-8 md:mb-10">
        <div className="relative max-w-4xl mx-auto">
          <FiSearch className="absolute top-4 left-4 text-gray-500 text-lg md:text-xl" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 border rounded-lg text-base md:text-lg focus:ring-2 focus:ring-customBlue"
            value={query}
            onChange={handleSearchChange}
          />
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-2">
  {filteredCategories.map((category, index) => (
    <div
      key={index}
      className="relative group border border-slate-400 rounded-2xl p-8 bg-white shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background block */}
      <div
        className="absolute top-0 left-0 w-full h-2 bg-red-400 rounded-t-2xl transform-gpu group-hover:scale-x-110 transition-transform duration-500 origin-left"
        aria-hidden="true"
      />
      <h2 className="relative z-10 text-3xl font-extrabold mb-5 text-custom-blue tracking-tight drop-shadow-sm">
        {category.title}
      </h2>
      <p className="relative z-10 mb-8 font-semibold text-gray-700">
        Total Records:{' '}
        <span className="text-red-400 text-2xl font-extrabold tabular-nums">
          {category.dataCount.toLocaleString()}
        </span>
      </p>
      <ul className="relative z-10 max-h-48 overflow-y-auto space-y-4 pr-3 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-100">
        {category.subCategories.map((subCategory, subIndex) => (
          <li
            key={subIndex}
            className="flex items-center gap-4 text-lg text-gray-700 cursor-pointer hover:text-red-500 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSubCategory(subCategory);
            }}
          >
            <FiChevronRight className="text-red-400 flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" />
            {subCategory}
          </li>
        ))}
      </ul>
      {/* Micro-interaction: subtle 3D tilt on hover */}
      <style jsx>{`
        div[group-hover] {
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
        }
        div[group-hover]:hover {
          transform: rotateX(3deg) rotateY(5deg);
        }
      `}</style>
    </div>
  ))}
</section>

     
        {/* RIGHT SECTION: Sticky Info Box */}
        
      {/* SECOND SECTION: Categories Grid */}
     
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CATEGORIES } from "@/resource/mockdata";
import CategoryCard from "../../../components/ui/CategoryCard";
import Container from "../../../components/ui/Container";
import GlassCard from "../../../components/ui/GlassCard";


export default function BrowseDatacardPage() {
 


  const [, setSelectedSubCategory] = useState(null);
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
    <main className="min-h-screen bg-gray-50">
      <Container className="py-20 lg:py-28">
      {/* WRAPPER for Left & Right sections */}
      <section className="mb-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
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
          <GlassCard className="flex flex-col border-gray-300 bg-customBlue text-white md:h-full md:justify-between">
            <div>
              <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                170+ Million Email Contacts
              </h2>
             
              <p className="mt-4 text-base md:text-lg text-gray-300 text-center">
                Available for targeted campaigns and lead generation.
              </p>
            </div>
          </GlassCard>

          {/* Bottom Right Box */}
          <GlassCard className="flex h-full flex-col justify-center border-gray-300 bg-white">
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
          </GlassCard>
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
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredCategories.map((category) => (
          <CategoryCard
            key={category.title}
            category={category}
            onSubCategorySelect={setSelectedSubCategory}
          />
        ))}
      </section>

     
        {/* RIGHT SECTION: Sticky Info Box */}
        
      {/* SECOND SECTION: Categories Grid */}
     
      </Container>
    </main>
  );
}

import React, { useMemo } from "react";
import {
  FaGlobeAmericas,
  FaShieldAlt,
  FaDatabase,
  FaUserCheck,
  FaLock,
} from "react-icons/fa";

const countriesList = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "India",
  "Brazil",
  "Japan",
  "South Korea",
  "South Africa",
  "Mexico",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Singapore",
  "UAE",
  "MORE +"
  // Add more countries as needed
];

const capabilitiesList = [
  {
    icon: <FaDatabase className="text-customBlue w-8 h-8" aria-hidden="true" />,
    title: "Extensive Email Databases",
    description:
      "Access millions of verified, segmented, and up-to-date email contacts worldwide.",
  },
  {
    icon: <FaGlobeAmericas className="text-customBlue w-8 h-8" aria-hidden="true" />,
    title: "Global Coverage",
    description:
      "Data spanning 160+ countries, covering multiple industries and demographics.",
  },
  {
    icon: <FaShieldAlt className="text-customBlue w-8 h-8" aria-hidden="true" />,
    title: "GDPR & CCPA Compliant",
    description:
      "Strict adherence to data privacy laws ensuring ethical and legal data handling.",
  },
  {
    icon: <FaUserCheck className="text-customBlue w-8 h-8" aria-hidden="true" />,
    title: "Verified & Accurate",
    description:
      "Regularly cleansed and validated data to maximize campaign effectiveness.",
  },
  {
    icon: <FaLock className="text-customBlue w-8 h-8" aria-hidden="true" />,
    title: "Secure Data Handling",
    description:
      "Robust security protocols to protect your data and ours.",
  },
];

export default function WhatWeOfferSection() {
  // Memoize static data to avoid unnecessary re-renders
  const countries = useMemo(() => countriesList, []);
  const capabilities = useMemo(() => capabilitiesList, []);

  return (
    <section className="bg-gradient-to-tr from-white via-customBlue/20 to-customBlue/40 text-gray-900 py-20 px-6 md:px-36">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-customBlue whitespace-nowrap truncate">
           Our B2B Data Coverage 
          </h2>
          <p className="text-lg md:text-xl text-customBlue/70 whitespace-nowrap truncate">
            Empower your marketing campaigns with comprehensive, compliant, and accurate data from across the globe.
          </p>
        </header>

        {/* Countries List */}
        <div
          className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-md"
          role="region"
          aria-labelledby="countries-heading"
        >
          <h3
            id="countries-heading"
            className="text-2xl font-semibold mb-6 text-customBlue whitespace-nowrap truncate"
          >
            Countries We Cover
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-gray-800">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2"
                tabIndex={0}
                aria-label={`Country: ${country}`}
              >
                <span className="block w-4 h-4 bg-customBlue rounded-full" aria-hidden="true"></span>
                <span>{country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" role="list">
          {capabilities.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-6"
              role="listitem"
              tabIndex={0}
            >
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h4 className="text-xl font-semibold text-customBlue whitespace-nowrap truncate">
                  {title}
                </h4>
                <p className="text-gray-700 mt-1 leading-relaxed max-w-md">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Trust */}
        <div
          className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-md max-w-4xl mx-auto text-center"
          role="region"
          aria-labelledby="compliance-heading"
        >
          <h3
            id="compliance-heading"
            className="text-3xl font-bold mb-4 text-customBlue whitespace-nowrap truncate"
          >
            Data Privacy & Compliance
          </h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            We strictly adhere to international data privacy laws including{" "}
            <strong>GDPR</strong> (General Data Protection Regulation) and{" "}
            <strong>CCPA</strong> (California Consumer Privacy Act). Our data
            acquisition, processing, and delivery methods ensure you receive only
            ethically sourced and legally compliant data. This commitment protects
            your brand reputation and builds trust with your customers.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
        <a href="/contact"> 
          <button
           
            className="bg-customBlue hover:bg-blue-800 transition-colors text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg whitespace-nowrap"
            aria-label="Request a Custom Data Solution"
          >
            Request a Custom Data Solution
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}

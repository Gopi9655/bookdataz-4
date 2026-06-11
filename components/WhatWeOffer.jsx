import Image from "next/image";
import React, { useMemo } from "react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";

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

export default function WhatWeOfferSection({ offers }) {
  // Memoize static data to avoid unnecessary re-renders
  const countries = useMemo(() => countriesList, []);
  const capabilities = useMemo(() => offers, [offers]);

  return (
    <section className="bg-gradient-to-tr from-white via-customBlue/20 to-customBlue/40 py-20 text-gray-900 lg:py-28">
      <Container className="space-y-12">
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
        <GlassCard
          className="border-white/50 bg-white/60"
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
        </GlassCard>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" role="list">
          {capabilities.map(({ id, icon, title, content }) => (
            <div
              key={id}
              className="flex items-start space-x-6"
              role="listitem"
              tabIndex={0}
            >
              <div className="flex-shrink-0">
                <Image src={icon} alt="" width={32} height={32} aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-customBlue whitespace-nowrap truncate">
                  {title}
                </h4>
                <p className="text-gray-700 mt-1 leading-relaxed max-w-md">{content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Trust */}
        <GlassCard
          className="mx-auto max-w-4xl border-white/50 bg-white/60 text-center"
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
        </GlassCard>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            href="/contact"
            size="lg"
            className="whitespace-nowrap shadow-lg"
            aria-label="Request a Custom Data Solution"
          >
            Request a Custom Data Solution
          </Button>
        </div>
      </Container>
    </section>
  );
}

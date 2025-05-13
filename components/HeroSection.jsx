import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [counts, setCounts] = useState({
    datasets: 0,
    companies: 0,
    countries: 0,
    contacts: 0,
    firms: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Animate counters once the section comes into view
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const increments = {
      datasets: 170,
      companies: 10000000,
      countries: 160,
      contacts: 5000,
      firms: 7000,
    };

    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounts({
        datasets: Math.floor(progress * increments.datasets),
        companies: Math.floor(progress * increments.companies),
        countries: Math.floor(progress * increments.countries),
        contacts: Math.floor(progress * increments.contacts),
        firms: Math.floor(progress * increments.firms),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column - Hero Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Transform Your Future with BookDataz&apos;s Futuristic Solutions
          </h1>
          <p className="text-lg text-gray-300">
            At BookDataz, we take pride in being the trusted choice for over
            7,000 top-ranking companies around the globe.
          </p>
          <p className="text-lg text-gray-300">
            Renowned as a reliable partner, we support industry leaders in the
            Healthcare and Technology sectors.
          </p>
          <p className="text-lg text-gray-300">
            As pioneers in AI-powered DaaS and SaaS solutions, we deliver
            expertise in Contextual Intelligence, Ad hoc Sales, Marketing, and
            Growth Strategies.
          </p>
          <p className="text-lg text-gray-300">
            Fueled by innovation and dedication, we continue to scale rapidly,
            welcoming 1,800+ new clients annually.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 px-6 rounded-md text-lg font-semibold">
            GET TO KNOW US
          </button>
        </div>

        {/* Right Column - Stats and Additional Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Grid for Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Row: Million Datasets spans two columns */}
            <div className="md:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
              <h2 className="text-3xl font-bold">{counts.datasets}M+</h2>
              <p className="uppercase text-xs mt-2">Datasets</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
              <h2 className="text-3xl font-bold">
                {Math.floor(counts.companies / 1000000)}M+
              </h2>
              <p className="uppercase text-xs mt-2">Active Companies</p>
            </div>

            {/* Second Row */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
              <h2 className="text-3xl font-bold">{counts.countries}+</h2>
              <p className="uppercase text-xs mt-2">Countries Covered</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
              <h2 className="text-3xl font-bold">
                {Math.floor(counts.contacts / 1000)}M+
              </h2>
              <p className="uppercase text-xs mt-2">
                Global Healthcare Contacts
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
              <h2 className="text-3xl font-bold">{counts.firms}+</h2>
              <p className="uppercase text-xs mt-2">Top Ranking Firms</p>
            </div>
          </div>

          {/* Additional Content Block to Fill the Empty Space */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Why Choose BookDataz?</h3>
            <p className="mt-2 text-gray-300">
            BookDataz stands at the forefront of data innovation, offering an unrivaled blend of cutting-edge AI-powered solutions and deep industry expertise that transforms raw data into strategic insights. Our comprehensive suite of services is designed to streamline operations, drive sustainable growth, and empower businesses across diverse sectors—from healthcare to technology—to navigate the complexities of the modern digital landscape.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition duration-300 py-2 px-4 rounded-md text-lg font-semibold">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

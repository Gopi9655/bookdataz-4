import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [counts, setCounts] = useState({
    datasets: 0,
    companies: 0,
    countries: 0,
    contacts: 0,
    firms: 0,
  });
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // Animation duration in ms
    const increments = {
      datasets: 450,
      companies: 11000000,
      countries: 160,
      contacts: 412000,
      firms: 7000,
    };

    const startAnimation = () => {
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
    };

    startAnimation();
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-10 sm:py-16 md:py-24 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Transform Your Future with Book Dataza's Futuristic Solutions
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 md:mb-4">
            At Book Dataza, we take pride in being the trusted choice for over
            7,000 top-ranking companies around the globe.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 md:mb-4">
            Renowned as a reliable partner, Book Dataza supports 7,000+
            industry leaders, particularly excelling in the Healthcare and
            Technology sectors.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 md:mb-4">
            As pioneers in AI-powered DaaS and SaaS solutions, we deliver
            expertise in Contextual Intelligence, Ad hoc Sales, Marketing, and
            Growth Strategies.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 md:mb-8">
            Fueled by our passion for innovation and dedication to excellence,
            we continue to scale rapidly, welcoming 1,800+ new clients annually.
          </p>
          <button className="bg-customBlue text-white font-bold py-2 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
            GET TO KNOW US
          </button>
        </div>

        {/* Right Data Points */}
        <div className="w-full md:w-1/2">
          <div className="space-y-8 sm:space-y-10">
            {/* Row 1 */}
            <div className="flex items-center justify-between border-b border-gray-600 pb-2 sm:pb-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100">
                {counts.datasets}+
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 uppercase">
                Million Datasets
              </p>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between border-b border-gray-600 pb-2 sm:pb-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100">
                {Math.floor(counts.companies / 1000000)}M+
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 uppercase">
                Active Companies
              </p>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between border-b border-gray-600 pb-2 sm:pb-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100">
                {counts.countries}+
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 uppercase">
                Countries Covered
              </p>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between border-b border-gray-600 pb-2 sm:pb-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100">
                {Math.floor(counts.contacts / 1000)}K+
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 uppercase">
                Global Healthcare Contacts
              </p>
            </div>

            {/* Row 5 */}
            <div className="flex items-center justify-between">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100">
                {counts.firms}+
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 uppercase">
                Top Ranking Firms as Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState, useEffect, useRef } from "react";
import { datacollections } from "@/resource/data";
import Button from "./ui/Button";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import StatCard from "./ui/StatCard";

const getNumericValue = (value) => Number.parseInt(value.replace(/\D/g, ""), 10);
const getSuffix = (value) => value.replace(/[\d,]/g, "");

const HeroSection = () => {
  const [counts, setCounts] = useState(datacollections.map(() => 0));
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
    const targets = datacollections.map(({ number }) => getNumericValue(number));

    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounts(targets.map((target) => Math.floor(progress * target)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-purple-800 to-indigo-900 py-20 text-white lg:py-28"
    >
      <Container className="flex flex-col gap-6 md:flex-row lg:gap-8">
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
          <Button href="/contact" className="bg-blue-600 hover:bg-blue-700" size="lg">
            GET TO KNOW US
          </Button>
         
        </div>

        {/* Right Column - Stats and Additional Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Grid for Animated Stats */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {datacollections.slice(0, 5).map((collection, index) => (
              <StatCard
                key={collection.heading}
                value={`${counts[index]}${getSuffix(collection.number)}`}
                label={collection.heading}
                className={index === 0 ? "md:col-span-2" : undefined}
              />
            ))}
          </div>

          {/* Additional Content Block to Fill the Empty Space */}
          <GlassCard className="mt-6">
            <h3 className="text-2xl font-semibold">Why Choose BookDataz?</h3>
            <p className="mt-2 text-gray-300">
            BookDataz stands at the forefront of data innovation, offering an unrivaled blend of cutting-edge AI-powered solutions and deep industry expertise that transforms raw data into strategic insights. Our comprehensive suite of services is designed to streamline operations, drive sustainable growth, and empower businesses across diverse sectors—from healthcare to technology—to navigate the complexities of the modern digital landscape.
            </p>
            <Button href="/contact" className="mt-4 bg-blue-600 hover:bg-blue-700">
              Discover More
            </Button>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

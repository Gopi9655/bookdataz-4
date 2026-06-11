// app/page.js
"use client";
import Link from "next/link";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import { datacollections, whatweoffer } from "@/resource/data";
import { CATEGORIES } from "@/resource/mockdata";


const trustedby = [
  { id: 1, logo: "/images/bookdataz-logo-1.jpg" },
  { id: 2, logo: "/images/bookdataz-logo-2.jpg" },
  { id: 3, logo: "/images/bookdataz-logo-3.jpg" },
  // { id: 4, logo: "/images/bookdataz-logo-4.jpg" },
  { id: 5, logo: "/images/bookdataz-logo-5.jpg" },
  { id: 6, logo: "/images/bookdataz-logo-6.jpg" },
  // { id: 7, logo: "/images/bookdataz-logo-7.jpg" },
  { id: 8, logo: "/images/bookdataz-logo-8.jpg" },
  // { id: 9, logo: "/images/bookdataz-logo-9.jpg" },
  { id: 10, logo: "/images/bookdataz-logo-10.jpg" },
  { id: 11, logo: "/images/bookdataz-logo-11.jpg" },
  { id: 12, logo: "/images/bookdataz-logo-12.jpg" },
  { id: 13, logo: "/images/bookdataz-logo-13.jpg" },
  { id: 14, logo: "/images/bookdataz-logo-14.jpg" },
  { id: 15, logo: "/images/bookdataz-logo-15.jpg" },
  { id: 16, logo: "/images/bookdataz-logo-16.jpg" },
  { id: 17, logo: "/images/bookdataz-logo-17.jpg" },
  { id: 18, logo: "/images/bookdataz-logo-18.jpg" },
];

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import WhatWeOfferSection from "../../components/WhatWeOffer";
import Container from "../../components/ui/Container";
import GlassCard from "../../components/ui/GlassCard";


/* -----------------------------
   TESTIMONIALS & SLIDES
------------------------------ */
const testimonials = [
  // Keeping your original repeated IDs & text exactly as posted
    {
    id: 1,
    name: "Rachel Summers",
    position: "VP of Sales Enablement, LeadHive UK",
    testimonial:
      "BookDataz provided us with highly segmented B2B email lists that dramatically boosted our lead conversion. Their precision is unmatched in the data industry.",
    image: "/testimonials/testimonial3 (1).jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jonathan Lee",
    position: "Chief Revenue Officer, USA California",
    testimonial:
      "The data quality from BookDataz helped streamline our outbound efforts across multiple EU markets. We noticed an immediate uplift in campaign engagement.",
    image: "/testimonials/testimonial3 (1).png",
    rating: 5,
  },
  {
    id: 3,
    name: "Eric Donovan",
    position: "Head of Demand Generation, PipelineX Canada",
    testimonial:
      "Our SDR team loves BookDataz. Their accurate targeting and verified contacts helped us reduce bounce rates and close more enterprise deals.",
    image: "/testimonials/testimonial3 (1).webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Laura Cheng",
    position: "Director of Business Intelligence, ZenithData Australia",
    testimonial:
      "BookDataz is a game-changer. Their B2B datasets helped us unlock new sectors we hadn't tapped into before. Support team is top-notch too!",
    image: "/testimonials/testimonial3 (2).jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Darren Mitchell",
    position: "Email List Strategist, USA Texas",
    testimonial:
      "We've worked with multiple data providers in the DACH region—BookDataz outperformed them all. Their lists are clean, compliant, and deliver real ROI.",
    image: "/testimonials/testimonial3 (2).webp",
    rating: 5,
  },
  {
    id: 6,
    name: "Isabelle Fournier",
    position: "USA new york",
    testimonial:
      "What impressed us most was the speed and relevance of the data. BookDataz helped us hit aggressive Q2 targets with tailored industry contact lists.",
    image: "/testimonials/testimonial3 (7).jpg",
    rating: 5,
  },

  {
    id: 8,
    name: "Anastasia Volkov",
    position: "VP of Strategy, Ireland Dublin",
    testimonial:
      "We expanded our outreach into Western markets thanks to BookDataz. Their GDPR-compliant data allowed us to scale safely and quickly.",
    image: "/testimonials/testimonial3 (3).webp",
    rating: 5,
  },
];

const slides = [
  {
    title: "Use Smart Data from BookDataz to Improve Your Business",
    description:
      "Access comprehensive B2B data across all sectors and countries. Drive performance with insights to find opportunities and mitigate risks.",
    image: "/banner1 (1).webp",
  },
  {
    title: "Grow Your Business with Targeted Data Solutions",
    description:
      "BookDataz delivers high-quality B2B data tailored to your needs, spanning every sector and global market, for informed decision-making.",
    image: "/banner1 (2).png",
  },
  {
    title: "Global B2B Data Solutions for All Sectors",
    description:
      "Get complete and accurate B2B data from every country and sector. BookDataz empowers your business with worldwide market insights.",
    image: "/banner1 (3).webp",
  },
];

/* -----------------------------
   DATA SOLUTION ITEMS
------------------------------ */
const items = [
  {
    title: "Sales",
    description:
      "Less searching, more time selling. For sales to prospect, prioritise, and connect to ideal customers.",
    icon: "/Icon-svg.svg",
    link: "#",
  },
  {
    title: "Marketing",
    description:
      "Qualified leads, happier sales teams. For marketing to identify, segment, and reach more customers.",
    icon: "/Icon-svg-6.svg",
    link: "#",
  },
  {
    title: "Recruitment",
    description:
      "Place the right talent, faster. For recruiters to identify ideal candidates in new and better ways.",
    icon: "/Icon-svg-6.svg",
    link: "#",
  },
  {
    title: "Market Intelligence",
    description:
      "Make better decisions. For analysts and investors to effectively monitor markets and companies.",
    icon: "/Icon-svg-8 (1).svg",
    link: "#",
  },
];

/* -----------------------------
   SHARED ANIMATION VARIANTS
------------------------------ */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  /* 
   * 1) Keep track of the data-collection counts, all starting at 0.
   *    We'll increment them with an animation once in view.
   */
  const [counts, setCounts] = useState(datacollections.map(() => 0));

  /* 
   * 2) Create a ref specifically for the "Data Collections" section 
   *    so we know when it appears on screen.
   */
  const dataCollectionRef = useRef(null);
  const dataSectionInView = useInView(dataCollectionRef, { once: true });

  // Count-up animation effect
  useEffect(() => {
    if (dataSectionInView) {
      // Start incrementing from 0 to the final number
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((currentValue, index) => {
            // Extract numeric part from e.g. "30K"
            const targetValue = parseInt(
              datacollections[index].number.replace(/\D/g, "")
            );
            if (currentValue >= targetValue) {
              return targetValue;
            }
            // Increment ~1/40th of the target each tick
            const increment = Math.ceil(targetValue / 40);
            return currentValue + increment;
          })
        );
      }, 50);

      // Cleanup when done
      return () => clearInterval(interval);
    }
  }, [dataSectionInView]);

  // Repeated logos for marquee
  const repeatedLogos = [...trustedby, ...trustedby];

  // If you still want to track "Elevate" section with inView, keep or remove:
  const elevateRef = useRef(null);

  return (
    <div className="relative w-full">
      {/* ======================================
          HERO (VIDEO BACKGROUND + SWIPER)
      =======================================*/}
      <section className="relative flex min-h-screen w-full items-center bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 py-20 lg:py-28">
  <Container className="flex items-center">
  {/* Left Content */}
  <div className="max-w-2xl text-white leading-8 space-y-8 md:space-y-12">
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Unlock Global Reach with <span className="text-orange-500">Premium Email B2B Databases</span>
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-gray-200 max-w-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Access verified, up-to-date email lists from over 160 countries. Boost your marketing campaigns with accurate data tailored to your target audience. Leverage the power of global outreach and stay ahead in the competitive market.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Button href="/contact" variant="accent" size="lg" className="shadow-xl">
        Get Free Data Sample
      </Button>
    </motion.div>
  </div>

  {/* Right Image */}
  <motion.div
    className="hidden md:flex flex-1 justify-center items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.8 }}
  >
    <img
      src="/generated-image.png"
      alt="Email Marketing Illustration"
      width={500}
      height={500}
      className="rounded-3xl shadow-2xl object-cover"
      loading="lazy"
    />
  </motion.div>
  </Container>
</section>

  
      {/* ======================================
          A DATA SOLUTION FOR EVERY TEAM
      =======================================*/}
      
      {/* ======================================
          WHAT WE OFFER SECTION
      =======================================*/}
    
 <motion.div
  className="bg-gradient-to-br from-white via-blue-50 to-red-50 py-20 lg:py-28"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <Container>
    <motion.h2
      className="text-lg md:text-xl font-bold text-center mb-4 uppercase text-red-500 tracking-widest"
      variants={fadeUpVariants}
    >
      Our Industry Database
    </motion.h2>
    <motion.h3
      className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
      variants={fadeUpVariants}
      transition={{ delay: 0.2 }}
    >
      <span className="bg-gradient-to-r from-customBlue via-blue-600 to-red-500 bg-clip-text text-transparent">
        Premium Email Lists Across Industries
      </span>
    </motion.h3>

    <motion.div
      className="overflow-x-auto"
      variants={fadeUpVariants}
      transition={{ delay: 0.3 }}
    >
      <table className="min-w-full bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
        <thead>
          <tr className="bg-blue-50">
            <th className="py-4 px-6 text-customBlue font-bold text-base text-left uppercase tracking-wide">
              Industry
            </th>
            <th className="py-4 px-6 text-customBlue font-bold text-base text-left uppercase tracking-wide">
              Subcategories
            </th>
            <th className="py-4 px-6 text-customBlue font-bold text-base text-left uppercase tracking-wide">
              Verified Contacts
            </th>
          </tr>
        </thead>
        <tbody>
          {CATEGORIES.map((row, idx) => (
            <tr
              key={row.title}
              className={`${
                idx % 2 === 0 ? "bg-blue-50/60" : "bg-white"
              } hover:bg-red-50/70 transition-colors`}
            >
              {/* Industry */}
              <td className="py-4 px-6 font-extrabold text-lg md:text-xl">
                <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-customBlue via-blue-400 to-blue-300 text-white shadow-md">
                  {row.title}
                </span>
              </td>
              {/* Subcategories */}
              <td className="py-4 px-6">
                <div className="flex flex-wrap gap-2 max-w-[350px]">
                  {Array.isArray(row.subCategories) &&
                    row.subCategories.slice(0, 3).map((sub, i) => (
                      <span
                        key={i}
                        className="text-customBlue bg-blue-100/80 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                 {Array.isArray(row.subCategories) &&
  row.subCategories.length > 3 && (
    <span className="text-red-500 text-xs font-bold">
      +more
    </span>
)}
                </div>
              </td>
              {/* Data Count */}
              <td className="py-4 px-6 font-extrabold text-xl text-right">
                <span className="px-4 py-1 rounded-lg bg-gradient-to-r from-red-500 via-red-400 to-orange-300 text-white shadow">
                  {row.dataCount}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </motion.div>
    <motion.p
      className="text-center text-gray-700 mt-8 max-w-2xl mx-auto text-base md:text-lg"
      variants={fadeUpVariants}
      transition={{ delay: 0.4 }}
    >
      <span className="text-customBlue font-bold">Our database is constantly updated and verified for accuracy.</span>
      <br />
      <span className="text-red-500 font-bold">Reach decision-makers in any industry, anywhere in the world.</span>
      <br />
      <span className="text-customBlue">Grow your business with confidence!</span>
    </motion.p>
  </Container>
</motion.div>


    {/* Transfotm section*/}
     
          <HeroSection />


      {/* ======================================
          ELEVATE SECTION
      =======================================*/}
      <section
        ref={elevateRef}
        className="bg-white py-20 lg:py-28"
      >
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row lg:gap-8">
        {/* Left */}
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl leading-tight mb-5 font-semibold tracking-tight">
            Elevate Your Marketing Strategy with Precision-Targeted Email Lists
            and Services
          </h1>
          <p className="mb-4 text-base md:text-lg text-slate-700 leading-relaxed border-b-2 tracking-wide pb-4">
            Unlock the potential of data-driven marketing with our premium
            contact lists and insights...
          </p>
          <p className="text-base md:text-lg text-slate-700 tracking-wide leading-relaxed border-b-2 pb-4">
            The file serves as a versatile resource...
          </p>
        </motion.div>

        {/* Right: Floating Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ y: 0 }}
          animate={{
            y: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/main_pageIMG.jpg"
            width={500}
            height={500}
            alt="main page image"
            className="rounded-xl"
          />
        </motion.div>
        </Container>
      </section>
{/*  */}

<section className="w-full bg-gradient-to-br from-customBlue via-indigo-900 to-blue-900 py-20 lg:py-28">
  <Container>
    <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-8">
      {/* Left Section */}
      <GlassCard
        as={motion.div}
        className="mt-8 flex w-full flex-col items-center shadow-2xl transition md:mt-14 md:w-[34%]"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="md:text-3xl text-lg md:text-4xl font-bold mb-6 text-white leading-tight text-center drop-shadow-lg">
          A data solution for every team, all in one platform
        </h2>
        <Image
          src="/Database-Solution-2.webp"
          alt="Person with laptop"
          width={500}
          height={500}
          className="object-contain rounded-xl"
        />
      </GlassCard>

      {/* Right Section (Items Grid) */}
      <motion.div
        className="grid w-full grid-cols-1 gap-6 md:w-[65%] md:grid-cols-2 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, index) => (
          <GlassCard
            as={motion.div}
            key={index}
            className="group relative overflow-hidden text-blue-100 shadow-xl transition duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.03 }}
            variants={fadeUpVariants}
          >
            {/* Subtle glass effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-blue-100 mb-4 text-sm md:text-base">{item.description}</p>
              <Link href="/contact"
                className="text-pink-300 font-medium hover:underline flex items-center text-sm md:text-base">
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  </Container>
</section>



{/* whatweoffer */}

<WhatWeOfferSection offers={whatweoffer} />

      {/* ======================================
          TESTIMONIAL SECTION
      =======================================*/}
      <section id="testimonials" className="bg-slate-800 py-20 lg:py-28">
      <Container>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-slate-100 mb-6 md:mb-10 lg:mb-20">
        What Our Clients Say
      </h1>
      <div className="max-w-screen-lg mx-auto">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={1000}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={`${testimonial.id}-${index}`}
              className="!h-auto flex items-center justify-center"
            >
              <div className="relative p-4 sm:p-8 md:p-10 bg-white rounded-xl shadow-2xl text-black w-full flex flex-col transform transition-all duration-500 hover:scale-105">
                {/* Image Container - Removed absolute positioning and centering */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="px-2 sm:px-4 text-center">
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm sm:text-base md:text-xl ${
                          i < Math.floor(testimonial.rating)
                            ? "text-blue-400"
                            : "text-gray-300"
                        } mx-0.5`}
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base italic text-gray-700 mb-4 leading-relaxed">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <span className="text-gray-600 text-xs sm:text-sm block mt-1">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="mt-6 sm:mt-8 md:mt-10 text-center text-slate-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          At BookDataz, we pride ourselves on delivering accurate, targeted, and
          high-quality data solutions that empower businesses to achieve their
          marketing goals. These testimonials are a testament to the trust and
          satisfaction of our clients. Join our growing community of successful
          businesses and take your campaigns to the next level with our reliable
          services.
        </p>
      </div>
      </Container>
    </section>
      {/* ======================================
          TRUSTED BY SECTION
      =======================================*/}
      <div className="trustedby-wrapper">
        <h2 className="trustedby-title">Trusted By</h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {repeatedLogos.map((item, index) => (
              <img
                key={`${item.id}-${index}`}
                src={item.logo}
                alt={`Logo ${item.id}`}
                className="marquee-image"
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .trustedby-wrapper {
            width: 100%;
            background: #fff;
            padding: 2rem 0;
          }
          .trustedby-title {
            text-align: center;
            font-size: 2.3rem;
            font-weight: bold;
            color: #333;
          }
          .marquee-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 120px;
            background: #ffffff;
          }
          .marquee-track {
            white-space: nowrap;
            display: inline-block;
            animation: scroll-marquee 15s linear infinite;
          }
          .marquee-image {
            height: 100%;
            width: 150px;
            display: inline-block;
            margin: 30px 1rem;
            vertical-align: middle;
          }
          @keyframes scroll-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
      {/* Footer would go here if needed */}
    </div>
  );
}

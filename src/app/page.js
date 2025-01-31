// app/page.js
"use client";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import { datacollections, whatweoffer } from "@/resource/data";

const trustedby = [
  { id: 1, logo: "/images/bookdataz-logo-1.jpg" },
  { id: 2, logo: "/images/bookdataz-logo-2.jpg" },
  { id: 3, logo: "/images/bookdataz-logo-3.jpg" },
  { id: 4, logo: "/images/bookdataz-logo-4.jpg" },
  { id: 5, logo: "/images/bookdataz-logo-5.jpg" },
  { id: 6, logo: "/images/bookdataz-logo-6.jpg" },
  { id: 7, logo: "/images/bookdataz-logo-7.jpg" },
  { id: 8, logo: "/images/bookdataz-logo-8.jpg" },
  { id: 9, logo: "/images/bookdataz-logo-9.jpg" },
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

/* -----------------------------
   TESTIMONIALS & SLIDES
------------------------------ */
const testimonials = [
  // Keeping your original repeated IDs & text exactly as posted
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    testimonial:
      "BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!",
    image: "/testimonials/testimonial3 (1).jpg",
    rating: 5,
  },
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    testimonial:
      "BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!",
    image: "/testimonials/testimonial3 (1).png",
    rating: 5,
  },
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    testimonial:
      "BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!",
    image: "/testimonials/testimonial3 (1).webp",
    rating: 5,
  },
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    testimonial:
      "BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!",
    image: "/testimonials/testimonial3 (2).jpg",
    rating: 5,
  },
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    testimonial:
      "BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!",
    image: "/testimonials/testimonial3 (2).webp",
    rating: 5,
  },
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    testimonial:
      "BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!",
    image: "/testimonials/testimonial3 (7).jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager, XYZ Corp",
    testimonial:
      "We've tried several data providers, but Bookdataz stands out. The quality of their data and their customer service is exceptional. They truly understand our needs.",
    image: "/testimonials/testimonial3 (6).jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Peter Jones",
    position: "Sales Director, Example Inc.",
    testimonial:
      "The physician email list we purchased from Bookdataz was a game-changer for our outreach. We were able to connect with key decision-makers quickly and efficiently.",
    image: "/testimonials/testimonial3 (3).webp",
    rating: 5,
  },
];

const slides = [
  {
    title: "Intelligent Data to Drive Business Performance with BookDataz",
    description:
      "Leverage the world's most comprehensive business data and insights to find new opportunities, navigate evolving risk, and know who to trust to reach your organizational goals.",
    image: "/DALL·E 2025-01-31 10.31.39 - A simple and modern business concept illustration representing growth and targeted data solutions. The image features a minimalistic design with a sol.webp",
  },
  {
    title: "Empower Business Growth with Targeted Data Solutions",
    description:
      "At BookDataz, we specialize in providing businesses with high-quality, targeted datasets designed to drive growth and optimize decision-making.",
    image: "/DALL·E 2025-01-31 10.32.37 - A simple and modern business concept illustration representing growth and targeted data solutions. The image features a minimalistic design with a sol.webp",
  },
  {
    title: "Global Data Solutions Tailored for Every Country",
    description:
      "At BookDataz, we specialize in delivering comprehensive and accurate data solutions that transcend borders. Our global reach ensures access to critical insights and datasets across all countries.",
    image: "/DALL·E 2025-01-31 10.36.43 - A simple and modern business concept illustration with a red-400 (tailwind) and navy blue color theme. The image represents database selling, email ma.webp",
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
      <div className="relative w-full min-h-screen">
        {/* Video background */}
        <div className="absolute inset-0 -z-10">
          <video
            className="w-full h-full object-cover opacity-100 blur-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/bgv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            style={{ mixBlendMode: "overlay" }}
          ></div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative h-screen">
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation
            modules={[Autoplay, Navigation]}
            className="h-full"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col md:flex-row text-white px-8 md:px-36 py-10 md:py-16 gap-8 md:gap-20">
                  {/* Left Section */}
                  <div className="flex flex-col w-full md:w-1/2 items-start gap-8">
                    <motion.h1
                      className="text-5xl font-bold mb-4 leading-normal"
                      variants={fadeUpVariants}
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-xl text-gray-300 tracking-wide max-w-2xl mb-8 leading-[1.5]"
                      variants={fadeUpVariants}
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      variants={fadeUpVariants}
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      transition={{ delay: 0.4 }}
                    >
                      <button
                        className="px-6 py-3 text-lg font-bold text-white bg-customBlue rounded-md hover:bg-blue-600"
                        onClick={() => console.log("Clicked")}
                      >
                        Free Data Sample
                      </button>
                    </motion.div>
                  </div>

                  {/* Right Section (Image) */}
                  <motion.div
                    className="flex justify-center items-center p-0 w-full md:w-1/2"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={activeSlide === index ? "visible" : "hidden"}
                    transition={{ delay: 0.2 }}
                  >
                    <Image
                      src={slide.image}
                      width={500}
                      height={200}
                      alt="Banner"
                      priority
                      className="object-contain rounded-2xl"
                    />
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Transfotm section*/}
     

      {/* ======================================
          A DATA SOLUTION FOR EVERY TEAM
      =======================================*/}
      <div className="container mx-auto px-8 flex flex-col md:flex-row gap-8 items-center bg-white">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-[34%] bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition mt-14"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-7 text-customBlue leading-[1.3]">
            A data solution for every team, all in one platform
          </h2>
          <Image
            src="/Database-Solution-2.webp"
            alt="Person with laptop"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>

        {/* Right Section (Items Grid) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-[65%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-50 rounded-lg p-10 shadow hover:shadow-lg transition group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              variants={fadeUpVariants}
            >
              <div className="absolute inset-0 bg-customBlue/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out rounded-lg"></div>

              <div className="relative z-10">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-red-400 font-medium hover:underline flex items-center"
                >
                  Learn more <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ======================================
          WHAT WE OFFER SECTION
      =======================================*/}
      <motion.div
        className="bg-[url('/h3_services_bg.jpg')] text-white py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-1xl font-bold text-center mb-4 uppercase text-customBlue"
            variants={fadeUpVariants}
          >
            What We Offer
          </motion.h2>
          <motion.h3
            className="text-4xl font-bold text-center mb-16"
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            LET'S DISCOVER OUR SERVICES
          </motion.h3>

          <motion.div
            className="flex flex-row gap-5"
            variants={containerVariants}
          >
            {whatweoffer.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl p-8 flex flex-col gap-4"
                variants={fadeUpVariants}
              >
                <div className="flex flex-row gap-5 ">
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h4 className="text-xl text-black font-bold text-center border-l-2 border-gray-300 p-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <p className="text-slate-500 mb-6 font-medium flex-grow">
                  {item.content}
                </p>
                <div className="mt-auto overflow-hidden rounded-xl">
                  <motion.a
                    href="#"
                    className="relative text-black font-medium hover:text-white bg-[#fef6e6] px-6 py-2 inline-flex items-center rounded-xl"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.div
                      className="absolute inset-0 bg-customBlue z-0"
                      variants={{
                        rest: { translateX: "-100%" },
                        hover: { translateX: "0%" },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>
                    <span className="relative z-10 text-red-400">
                      Read More <span className="ml-1 text-red-400">→</span>
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ======================================
          ELEVATE SECTION
      =======================================*/}
      <div
        ref={elevateRef}
        className="flex flex-row bg-white justify-between gap-16 items-center w-full px-36 py-20"
      >
        {/* Left */}
        <motion.div
          className="w-1/2"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-4xl leading-[1.3] mb-5 font-semibold tracking-tight">
            Elevate Your Marketing Strategy with Precision-Targeted Email Lists
            and Services
          </h1>
          <p className="mb-4 text-l text-slate-700 leading-[1.5] border-b-2 tracking-wide pb-4">
            Unlock the potential of data-driven marketing with our premium
            contact lists and insights...
          </p>
          <p className="text-l text-slate-700 tracking-wide leading-[1.5] border-b-2 pb-4">
            The file serves as a versatile resource...
          </p>
        </motion.div>

        {/* Right: Floating Image */}
        <motion.div
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
            width={600}
            height={600}
            alt="main page image"
            className="rounded-xl"
          />
        </motion.div>
      </div>

      {/* ======================================
          TESTIMONIAL SECTION
      =======================================*/}
      <div className="bg-slate-800 p-10 md:p-20">
  <h1 className="text-5xl text-center font-bold text-slate-100 mb-10 md:mb-20">
    What Our Client Says
  </h1>
  <div className="max-w-screen-lg mx-auto">
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      spaceBetween={30}
      loop={true}
      loopFillGroupWithBlank={true}
      loopAdditionalSlides={testimonials.length > 3 ? 3 : testimonials.length}
      speed={1000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      className="mySwiper !overflow-visible"
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide
          key={`${testimonial.id}-${index}`}
          className="max-w-[300px] md:max-w-[400px] !h-auto flex items-center transition-transform duration-500"
        >
          <div className="relative mx-4 py-10 mb-10 bg-white rounded-xl shadow-2xl text-black w-full flex flex-col transform transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="pt-20 px-6 pb-6 text-center">
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xl ${
                      i < Math.floor(testimonial.rating)
                        ? "text-blue-400"
                        : "text-gray-300"
                    } mx-0.5`}
                  />
                ))}
              </div>
              <p className="text-sm italic text-gray-700 mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <span className="text-gray-600 text-sm block mt-1">
                {testimonial.position}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <p className="mt-10 text-center text-slate-100 text-lg leading-relaxed">
  At BookDataz, we pride ourselves on delivering accurate, targeted, and high-quality data solutions that empower businesses to achieve their marketing goals. These testimonials are a testament to the trust and satisfaction of our clients. Join our growing community of successful businesses and take your campaigns to the next level with our reliable services.
</p>
  </div>
</div>


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

// app/page.js
"use client";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import {  Pagination,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { datacollections } from "@/resource/datacollections";
import { whatweoffer } from "@/resource/whatweoffer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from 'swiper/modules';



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required Swiper modules
import { Autoplay, Navigation } from "swiper/modules";
import Button from "../../components/Button";

// testimonials
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  },
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  }, {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  }, {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  }, {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  }, {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company ABC',
    testimonial:
      'BookDataz has been instrumental in our marketing success. Their email lists are accurate and highly targeted, resulting in a significant increase in our ROI. Highly recommend!',
    image: '/testimonial1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Manager, XYZ Corp',
    testimonial:
      "We've tried several data providers, but Bookdataz stands out. The quality of their data and their customer service is exceptional. They truly understand our needs.",
    image: '/testimonial2.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Peter Jones',
    position: 'Sales Director, Example Inc.',
    testimonial:
      'The physician email list we purchased from Bookdataz was a game-changer for our outreach. We were able to connect with key decision-makers quickly and efficiently.',
    image: '/testimonial3.jpg',
    rating: 5,
  }, ]


export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide
  const [counts, setCounts] = useState(
    datacollections.map(() => 0) // Initialize counts for each data item
  );

  // useref 
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Number counting animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const targetNum = parseInt(
            datacollections[index].number.replace(/\D/g, "")
          );
          if (count < targetNum) {
            return count + Math.ceil(targetNum / 100);
          }
          return targetNum;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Intelligent Data to Drive Business Performance with BookDataz",
      description:
        "Leverage the world's most comprehensive business data and insights to find new opportunities, navigate evolving risk, and know who to trust to reach your organizational goals.",
      image: "/banner1 (1).webp",
    },
    {
      title: "Empower Business Growth with Targeted Data Solutions",
      description:
        "At BookDataz, we specialize in providing businesses with high-quality, targeted datasets designed to drive growth and optimize decision-making.",
      image: "/banner1 (2).png",
    },
    {
      title: "Global Data Solutions Tailored for Every Country",
      description:
        "At BookDataz, we specialize in delivering comprehensive and accurate data solutions that transcend borders. Our global reach ensures access to critical insights and datasets across all countries.",
      image: "/banner1 (3).webp",
    },
  ];

  // Framer Motion variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

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

  return (
    <div className="relative w-full">
      {/* 
        VIDEO BACKGROUND + CAROUSEL SECTION
        Navbar is sticky and transparent above this. 
      */}
      <div className="relative w-full min-h-screen">
        {/* Video background behind carousel */}
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
            {/* Fallback text for older browsers */}
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay + gradient at bottom */}
          <div className="absolute inset-0 bg-black/80" style={{ mixBlendMode: "overlay" }}></div>
        </div>

        {/* Carousel (Swiper) */}
        <div className="relative h-screen">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="h-full"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col md:flex-row  text-white px-8 md:px-36 py-10 md:py-16 gap-8 md:gap-20   ">
                  {/* Left Section: Animated Title + Desc */}
                  <div className="flex flex-col w-full md:w-1/2 items-start gap-8">
                    <motion.h1
                      className="text-5xl font-bold mb-4 leading-normal"
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      variants={textVariants}
                      key={`title-${index}`}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-xl text-gray-300 tracking-wide max-w-2xl mb-8 leading-[1.5]"
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      variants={descriptionVariants}
                      key={`description-${index}`}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      variants={buttonVariants}
                      key={`button-${index}`}
                    >
                      <button
                        className="px-6 py-3 text-lg font-bold text-white bg-customBlue rounded-md hover:bg-blue-600"
                        onClick={() => console.log("Clicked")}
                      >
                        Free Data Sample
                      </button>
                    </motion.div>
                  </div>

                  {/* Right Section: Image */}
                  <div className="flex justify-center items-center p-0 w-full md:w-1/2">
                    <Image
                      src={slide.image}
                      width={500}
                      height={200}
                      alt="Banner"
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/*
        REST OF THE HOME PAGE (no video background)
      */}
      <motion.div
        className="relative  flex px-28 flex-row bg-custom-gradient py-0 text-white justify-between gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
      >
        {/* Additional Content */}
        <motion.div
          className="mb-10 px-8 w-1/2"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Transform Your Future with BookDataz’s Cutting-Edge Solutions
          </h1>
          <p className="max-w-2xl text-xl text-slate-300 leading-9">
            Join the ranks of over 7,000 top-ranking companies worldwide that
            trust BookDataz for transformative results.
          </p>
          <p className="max-w-3xl text-slate-300 mt-4">
            BookDataz is a globally recognized partner, specializing in the
            Healthcare and Technology sectors. Our expertise empowers businesses
            to thrive through AI-driven DaaS and SaaS solutions, offering a
            comprehensive suite of capabilities, including Contextual
            Intelligence, Ad hoc Sales, Marketing, and Growth strategies.
          </p>
          <p className="max-w-3xl text-slate-300 mt-4">
            With a relentless focus on innovation and excellence, BookDataz
            continues to grow at an impressive pace, welcoming over 1,800 new
            clients annually.
          </p>
          <p className="max-w-3xl text-slate-300 mt-4">
            Discover how we can help transform your business. Get to know us
            today!
          </p>
          <div className="mt-8">
            <Button label="Get to know us" />
          </div>
        </motion.div>

        {/* Data Mapping */}
        <motion.div
          className="flex flex-col w-1/2"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          {datacollections.map((data, index) => (
            <motion.div
              key={data.id}
              className="flex flex-col justify-between gap-9"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="flex flex-row gap-7 justify-between items-center text-6xl">
                <motion.h3
                  className="text-l font-bold text-white"
                  animate={{ opacity: [0, 1], scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {counts[index]}
                  {data.number.replace(/[0-9]/g, "").trim()}
                  {/* e.g. 'M+', 'K+', etc. */}
                </motion.h3>
                <p className="text-xl font-semibold text-slate-400 mt-2 ">
                  {data.heading}
                </p>
              </div>
              <div className="w-full border-b-2 border-customBlue mb-3"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* A data solution for every team section */}
      {/* A data solution for every team section */}
<div className="container mx-auto px-8 flex flex-col md:flex-row gap-8 items-center bg-white">
  {/* Left Section */}
  <motion.div
    className="w-full md:w-[34%] bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition mt-14"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
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

  {/* Right Section */}
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-[65%]"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {items.map((item, index) => (
      <motion.div
        key={index}
        className="relative bg-gray-50 rounded-lg p-10 shadow hover:shadow-lg transition group overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {/* Background hover effect */}
        <div className="absolute inset-0 bg-customBlue/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out rounded-lg"></div>

        {/* Content */}
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
            className="text-customBlue font-medium hover:underline flex items-center"
          >
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>

{/* what we offer */}
<div className="relative w-full">
      {/* ... (Your existing code for video background, carousel, and other sections) */}

      {/* What We Offer Section */}
      <motion.div
        className="bg-[url('/h3_services_bg.jpg')] text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Adjust amount as needed
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, // Stagger children's animation
        }}
      >
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-1xl font-bold text-center mb-4 uppercase text-customBlue"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            What We Offer
          </motion.h2>
          <motion.h3
            className="text-4xl font-bold text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }, // Delay after h2 animation
            }}
          >
            LET'S DISCOVER OUR SERVICES
          </motion.h3>

          <div className="flex flex-row gap-5">
            {whatweoffer.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl p-8 flex flex-col gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="flex flex-row gap-5 ">
                  <div className="flex justify-center   ">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h4
                      className="text-xl text-black font-bold text-center border-l-2 border-gray-300 p-1"
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-500  mb-6 font-medium flex-grow">
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
                    {/* Background animation */}
                    <motion.div
                      className="absolute inset-0 bg-customBlue z-0"
                      variants={{
                        rest: { translateX: "-100%" },
                        hover: { translateX: "0%" },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>

                    {/* Button Content */}
                    <span className="relative z-10">
                      Read More <span className="ml-1">→</span>
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
    {/* elevate section */}
    <div
      ref={ref}
      className="flex flex-row bg-white   justify-between gap-16 items-center w-full px-36 py-20"
    >
      {/* left section */}
      <motion.div
        className="w-1/2"
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className="text-4xl leading-[1.3] mb-5 font-semibold tracking-tight">
          Elevate Your Marketing Strategy with Precision-Targeted Email Lists
          and Services
        </h1>
        <p className="mb-4 text-l text-slate-700 leading-[1.3] tracking-wide">
          Unlock the potential of data-driven marketing with our premium contact
          lists and insights. Whether you're targeting business professionals,
          executives, or physicians, we've got the precise email lists you need
          to connect with the right audience. Take your direct marketing
          campaigns to the next level with our human-verified, high-quality
          contact lists, available for instant download.
        </p>
        <p className="text-l text-slate-700 tracking-wide leading-[1.3]">
          The file serves as a versatile resource, functioning either as a
          mailing list or a comprehensive directory of highly skilled
          professionals across various industries. By purchasing mailing lists
          from BookDataz, you gain access to a range of exclusive benefits,
          including a written list replacement guarantee, assurance that
          custom-built lists will not be resold, 100% privacy compliance, and
          CASS-certified contacts.
        </p>
      </motion.div>

      {/* right section */}
      <motion.div
      className=""
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

       {/* Testimonials Section */}
       
       <div className="testimonial-carousel-container bg-gray-900 py-20 overflow-visible">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        loop
        loopedSlides={testimonials.length}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper overflow-visible"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex justify-center">
            {/* Framer Motion Wrap for smooth transitions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-slate-300 rounded-xl shadow-lg overflow-hidden text-black w-full max-w-[24rem]"
            >
              {/* Image Section (smaller height) */}
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content (slightly reduced padding) */}
              <div className="p-4">
                <div className="flex mb-3">
                  {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                    <FaStar key={i} className="text-blue-400 mr-1" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <FaStarHalfAlt className="text-blue-400 mr-1" />
                  )}
                </div>
                <p className="text-sm italic text-black mb-4">
                  "{testimonial.testimonial}"
                </p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <span className="text-black text-sm">
                  {testimonial.position}
                </span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   


    </div>
  );
}

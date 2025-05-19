"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";



const INDUSTRIES = Array.from({ length: 10 }, (_, i) => ({
  title: `Industry ${i + 1}`,
  dataCount: 5000 + (i * 50), // Example dataCount values, adjust as needed
  subCategories: Array.from(
    { length: 10 },
    (_, j) => `Sub-Industry ${i + 1}.${j + 1}`
  ),
}));

const CATEGORIES = [
  {
    title: "Healthcare",
    dataCount: "5,026,500",
    subCategories: [
      "Hospitals",
      "Clinics",
      "Pharmacies",
      "Medical Equipment Suppliers",
      "Health Insurance",
      "Physicians",
      "Nurses",
      "Therapists",
      "Diagnostics Labs",
      "Public Health Agencies",
    ],
  },
  {
    title: "Technology",
    dataCount:"2,566,372",
    subCategories: [
      "IT Services",
      "Software Development",
      "Hardware Suppliers",
      "Cloud Computing",
      "Cybersecurity",
      "Data Analytics",
      "Mobile App Development",
      "IoT Solutions",
      "Network Infrastructure",
      "SaaS Providers",
    ],
  },
  {
    title: "Finance",
    dataCount: "4,539,826",
    subCategories: [
      "Banks",
      "Investment Firms",
      "Credit Unions",
      "Insurance Companies",
      "Accounting Services",
      "Tax Consultants",
      "Wealth Management",
      "Mortgage Providers",
      "Payment Gateways",
      "Cryptocurrency Platforms",
    ],
  },
  {
    title: "Education",
    dataCount:"7,067,704" ,
    subCategories: [
      "Schools (K-12)",
      "Colleges",
      "Universities",
      "Online Learning Platforms",
      "Libraries",
      "Educational Consultants",
      "Tutoring Centers",
      "Training Institutes",
      "Student Organizations",
      "Research Centers",
    ],
  },
  {
    title: "Retail",
    dataCount: "1,850,923",
    subCategories: [
      "E-commerce Platforms",
      "Grocery Stores",
      "Fashion Retailers",
      "Electronics Stores",
      "Furniture Stores",
      "Automotive Retailers",
      "Department Stores",
      "Specialty Shops",
      "Wholesale Suppliers",
      "Shopping Malls",
    ],
  },
  {
    title: "Manufacturing",
    dataCount: "9,088,010",
    subCategories: [
      "Automotive Manufacturing",
      "Electronics Manufacturing",
      "Pharmaceutical Manufacturing",
      "Consumer Goods Manufacturing",
      "Heavy Machinery",
      "Textiles and Apparel",
      "Chemical Manufacturing",
      "Construction Materials",
      "Food and Beverage",
      "Packaging Industries",
    ],
  },
  {
    title: "Energy",
    dataCount: "5,062,600",
    subCategories: [
      "Oil and Gas",
      "Renewable Energy",
      "Power Plants",
      "Energy Consultants",
      "Utility Providers",
      "Energy Equipment Suppliers",
      "Green Energy Solutions",
      "Nuclear Energy",
      "Wind Energy",
      "Solar Energy",
    ],
  },
  {
    title: "Hospitality",
    dataCount: "10,050,900",
    subCategories: [
      "Hotels",
      "Restaurants",
      "Event Planners",
      "Travel Agencies",
      "Airlines",
      "Cruises",
      "Car Rentals",
      "Tour Operators",
      "Resorts",
      "Catering Services",
    ],
  },
  {
    title: "Real Estate",
    dataCount: "2,262,600",
    subCategories: [
      "Commercial Real Estate",
      "Residential Real Estate",
      "Real Estate Agents",
      "Property Management",
      "Real Estate Developers",
      "Mortgage Brokers",
      "Landlords",
      "Construction Companies",
      "Real Estate Investment Trusts (REITs)",
      "Appraisal Services",
    ],
  },
  {
    title: "Government",
    dataCount: "1,480,900",
    subCategories: [
      "Local Governments",
      "State Governments",
      "Federal Agencies",
      "Public Works",
      "Defense Departments",
      "Public Health Departments",
      "Environmental Agencies",
      "Transportation Departments",
      "Regulatory Bodies",
      "Law Enforcement",
    ],
  },
  {
    title: "Automotive",
    dataCount: "1,562,600",
    subCategories: [
      "Car Manufacturers",
      "Car Dealerships",
      "Auto Repair Services",
      "Tire Suppliers",
      "Spare Parts Suppliers",
      "Electric Vehicle Companies",
      "Fleet Management",
      "Automotive Research",
      "Auto Insurance Companies",
      "Logistics and Transport",
    ],
  },
  {
    title: "Telecommunications",
    dataCount: "2,010,550",
    subCategories: [
      "Mobile Network Providers",
      "Internet Service Providers",
      "Cable TV Operators",
      "Satellite Companies",
      "5G Solutions Providers",
      "Telecom Hardware Suppliers",
      "Call Centers",
      "VoIP Providers",
      "Broadband Providers",
      "Fiber Optics Companies",
    ],
  },
  {
    title: "Logistics",
    dataCount: "1,310,087",
    subCategories: [
      "Shipping Companies",
      "Freight Forwarders",
      "Courier Services",
      "Logistics Software Providers",
      "Warehousing Companies",
      "Supply Chain Management",
      "Port Authorities",
      "Customs Brokers",
      "3PL Companies",
      "Transportation Services",
    ],
  },
  {
    title: "Legal Services",
    dataCount: "1,690,180",
    subCategories: [
      "Law Firms",
      "Corporate Lawyers",
      "Family Lawyers",
      "Intellectual Property Lawyers",
      "Legal Tech Companies",
      "Notaries",
      "Compliance Officers",
      "Legal Consultancies",
      "Court Reporting Services",
      "Legal Translation Services",
    ],
  },
  {
    title: "Media and Entertainment",
    dataCount: "1,025,350",
    subCategories: [
      "Television Networks",
      "Radio Stations",
      "Streaming Platforms",
      "Film Production Companies",
      "Event Organizers",
      "Advertising Agencies",
      "Public Relations Agencies",
      "Graphic Designers",
      "Content Creators",
      "Media Distribution Companies",
    ],
  },
  {
    title: "Non-Profit",
    dataCount: "1,025,350",
    subCategories: [
      "Charities",
      "Foundations",
      "Community Organizations",
      "Environmental NGOs",
      "Religious Organizations",
      "Health-related NGOs",
      "Educational NGOs",
      "Human Rights Organizations",
      "Animal Welfare Groups",
      "International Aid Organizations",
    ],
  },
  {
    title: "Construction",
    dataCount: "2,095,180",
    subCategories: [
      "General Contractors",
      "Subcontractors",
      "Architectural Firms",
      "Civil Engineers",
      "Building Materials Suppliers",
      "Real Estate Developers",
      "Construction Equipment Suppliers",
      "Renovation Specialists",
      "Project Managers",
      "Interior Designers",
    ],
  },
  {
    title: "Food and Beverage",
    dataCount: "2,045,670",
    subCategories: [
      "Restaurants",
      "Fast Food Chains",
      "Cafes",
      "Food Distributors",
      "Beverage Companies",
      "Food Manufacturing",
      "Catering Services",
      "Vineyards and Breweries",
      "Food Delivery Services",
      "Specialty Food Stores",
    ],
  },]



export default function BrowseDatacardPage() {
 


  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedSubIndustry, setSelectedSubIndustry] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);
  const [filteredIndustries, setFilteredIndustries] = useState(INDUSTRIES);
  const [dataCount, setDataCount] = useState(1200000);
  const categoriesRef = useRef(null);
  const [categoriesSectionTop, setCategoriesSectionTop] = useState(0);

  useEffect(() => {
    if (selectedCategory) {
      setDataCount(selectedCategory.subCategories.length * 1000);
    } else if (selectedIndustry) {
      setDataCount(selectedIndustry.subCategories.length * 500);
    }
  }, [selectedCategory, selectedIndustry]);

  useEffect(() => {
    const handleScroll = () => {
      if (categoriesRef.current) {
        setCategoriesSectionTop(categoriesRef.current.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setFilteredIndustries(
      INDUSTRIES.filter(
        (industry) =>
          industry.title.toLowerCase().includes(value) ||
          industry.subCategories.some((sub) =>
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
            requirement. With over 50M data repository of business records, our
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
      onClick={() => setSelectedCategory(category)}
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

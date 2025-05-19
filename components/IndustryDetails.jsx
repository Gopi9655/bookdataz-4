// src/components/IndustryDetails.jsx
"use client";
import { mockData } from '@/resource/mockdata';

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

import { useRouter } from 'next/navigation';
import DataDisplay from './DataDisplay';

const IndustryDetails = ({ industryData }) => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100">
           

            <main className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            About {industryData.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{industryData.description}</p>
                    </section>

                    {/* Subcategories Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Segments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industryData.subcategories.map((subcategory) => (
                                <div key={subcategory} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-200">
                                    <h3 className="font-medium text-gray-700">{subcategory}</h3>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Job Titles Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Job Titles in {industryData.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industryData.jobTitles.map((jobTitle) => (
                                <div key={jobTitle} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-200">
                                    <h3 className="font-medium text-gray-700">{jobTitle}</h3>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Insights Section */}
                    <section className="mb-8">
                        <DataDisplay industryData={industryData} />
                    </section>

                    {/* Additional Sections */}
                    {industryData.sections.map((section) => (
                        <section key={section.title} className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                        </section>
                    ))}

                    {/* Call to Action */}
                    <section className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            Interested in {industryData.name} Data?
                        </h2>
                        <p className="mb-6">
                            Contact us today to learn more about how our data can help your business grow.
                        </p>
                        <a href='/contact'><button
                            className="bg-white text-blue-500 py-2 px-6 rounded-md hover:bg-gray-100 transition duration-200"
                        >
                            Contact Us
                        </button></a>
                        
                    </section>
                </div>
            </main>
        </div>
    );
};

export default IndustryDetails;
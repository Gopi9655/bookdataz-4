import DataDisplay from '../../../components/DataDisplay';
import IndustryDetails from '../../../components/IndustryDetails';
import { mailinglinks } from '@/resource/data';
import { notFound } from 'next/navigation';

// Utility to create slugs from industry names
const slugify = (name) => name.toLowerCase().replace(/ /g, '-');

// Static generation of all industry paths
export async function generateStaticParams() {
  return mailinglinks.map((link) => ({
    industry: slugify(link.name),
  }));
}

// Main page component
const IndustryPage = async ({ params }) => {
  const industrySlug = params.industry;
  const selectedIndustry = mailinglinks.find(
    (link) => slugify(link.name) === industrySlug
  );

  // If not found, show Next.js 404 page
  if (!selectedIndustry) return notFound();

  const industryData = generateIndustryData(selectedIndustry);

  return (
    <>
      <IndustryDetails industryData={industryData} />
      {/* Optionally add more components, e.g.: */}
      {/* <DataDisplay data={industryData} /> */}
    </>
  );
};

export default IndustryPage;

// ---- Data generation helpers ----
// Deterministic pseudo-random for consistent chart data per industry
function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
function getSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}
function getSeededArray(length, min, max, seedStr) {
    const seed = getSeed(seedStr);
    return Array.from({ length }, (_, i) => {
        const value = seededRandom(seed + i);
        return Math.floor(Math.abs(value) * (max - min + 1)) + min;
    });
}

const generateIndustryData = (industry) => {
    const subcategories = generateSubcategories(industry.name);
    const sections = generateSections(industry.name);
    const jobTitles = generateJobTitles(industry.name);

    // Generate unique, consistent data for each industry
    const lineData = getSeededArray(5, 10, 100, industry.name + 'line');
    const radarData = getSeededArray(5, 60, 100, industry.name + 'radar');

    return {
        name: industry.name,
        description: `Detailed information and data insights about the ${industry.name} industry.`,
        subcategories,
        lineData,
        radarData,
        sections,
        jobTitles,
    };
};

const generateSubcategories = (industryName) => {
  const subcategoryLists = {
    "Automotive Industry": [
      "Electric Vehicles (EVs)",
      "Autonomous Vehicles",
      "Connected Car Technology",
      "Automotive Manufacturing",
      "Auto Parts and Accessories",
      "Car Dealerships and Sales",
      "Automotive Aftermarket",
      "Car Rental Services",
      "Automotive Safety Systems",
      "Commercial Vehicles",
      "Motorcycles and Scooters",
      "Automotive Electronics",
      "Automotive Software",
      "Alternative Fuel Vehicles",
      "Automotive R&D",
      "Supply Chain and Logistics",
      "Automotive Financing",
      "Insurance for Vehicles",
      "Automotive Marketing",
      "Used Car Market",
    ],
    "Banking and Finance": [
      "Retail Banking",
      "Investment Banking",
      "Corporate Finance",
      "Wealth Management",
      "Financial Technology (FinTech)",
      "Cryptocurrency and Blockchain",
      "Insurance Services",
      "Mortgage and Lending",
      "Financial Advisory Services",
      "Payment Processing",
      "Asset Management",
      "Regulatory Compliance (RegTech)",
      "Risk Management",
      "Financial Data Analytics",
      "Microfinance",
      "Private Equity",
      "Venture Capital",
      "Hedge Funds",
      "Financial Planning",
      "Digital Banking",
    ],
    "Construction Companies": [
      "Residential Construction",
      "Commercial Construction",
      "Industrial Construction",
      "Infrastructure Development",
      "Heavy Civil Construction",
      "Specialty Trade Contractors",
      "Construction Management",
      "Green Building and Sustainable Construction",
      "Architectural and Engineering Services",
      "Building Materials and Supplies",
      "Construction Equipment and Machinery",
      "Renovation and Remodeling",
      "Demolition and Excavation",
      "Construction Technology (ConTech)",
      "Project Financing and Investment",
      "Real Estate Development",
      "Public Works and Government Contracts",
      "Construction Safety and Compliance",
      "Construction Labor and Workforce",
      "Modular and Prefabricated Construction",
    ],
    "Educational Industries": [
      "K-12 Education",
      "Higher Education (Colleges and Universities)",
      "Vocational and Technical Training",
      "Special Education",
      "Early Childhood Education",
      "Online Learning and EdTech",
      "Corporate Training and Development",
      "Language Schools",
      "Educational Publishing and Content",
      "Test Preparation Services",
      "Educational Consulting",
      "School Administration and Management",
      "Educational Software and Platforms",
      "Curriculum Development",
      "Student Services and Support",
      "Accreditation and Quality Assurance",
      "Educational Research",
      "Funding and Grants for Education",
      "International Education and Study Abroad",
      "Lifelong Learning and Continuing Education",
    ],
    "Food and Beverages": [
      "Restaurant and Food Service",
      "Food Manufacturing and Processing",
      "Beverage Production",
      "Grocery and Supermarkets",
      "Specialty Foods and Gourmet Products",
      "Organic and Natural Foods",
      "Food Packaging",
      "Food Safety and Quality Assurance",
      "Supply Chain and Distribution",
      "Culinary and Gastronomy",
      "Bakery and Confectionery",
      "Dairy Products",
      "Meat and Poultry Processing",
      "Seafood Industry",
      "Snack Foods",
      "Food Ingredients and Additives",
      "Agricultural Products and Farming",
      "Food Retail and E-commerce",
      "Wine and Spirits",
      "Foodservice Equipment and Supplies",
    ],
    "Healthcare Industries": [
      "Hospitals and Clinics",
      "Medical Devices and Equipment",
      "Pharmaceuticals and Biotechnology",
      "Health Insurance",
      "Healthcare IT and Digital Health",
      "Nursing and Residential Care",
      "Outpatient Care Centers",
      "Mental Health Services",
      "Dental Care",
      "Home Health Care Services",
      "Rehabilitation Services",
      "Diagnostics and Imaging Centers",
      "Medical Research and Development",
      "Healthcare Administration and Management",
      "Public Health and Epidemiology",
      "Alternative Medicine",
      "Healthcare Consulting",
      "Health and Wellness Programs",
      "Medical Tourism",
      "Veterinary Services",
    ],
    "Manufacturing Industries": [
      "Automotive Manufacturing",
      "Aerospace and Defense Manufacturing",
      "Chemical Manufacturing",
      "Electronics and Semiconductor Manufacturing",
      "Industrial Machinery and Equipment",
      "Metal Fabrication and Products",
      "Plastics and Rubber Products",
      "Textiles and Apparel Manufacturing",
      "Consumer Goods Manufacturing",
      "Pharmaceutical Manufacturing",
      "Food and Beverage Processing",
      "Wood Products and Furniture Manufacturing",
      "Paper and Pulp Manufacturing",
      "Printing and Related Support Activities",
      "Heavy Equipment Manufacturing",
      "Renewable Energy Equipment Manufacturing",
      "Advanced Manufacturing and Industry 4.0",
      "Supply Chain and Logistics in Manufacturing",
      "Quality Control and Assurance",
      "Manufacturing Safety and Compliance",
    ],
    "Oil and Gas": [
      "Upstream Exploration and Production",
      "Midstream Processing and Transportation",
      "Downstream Refining and Marketing",
      "Oilfield Services and Equipment",
      "Natural Gas Extraction and Processing",
      "Pipeline Construction and Operation",
      "Petrochemical Manufacturing",
      "Offshore Drilling and Production",
      "Onshore Oil and Gas Fields",
      "Energy Trading and Marketing",
      "Renewable Energy Integration",
      "Environmental Compliance and Sustainability",
      "Geological and Geophysical Services",
      "Oil and Gas Field Development",
      "Reservoir Engineering and Management",
      "LNG (Liquefied Natural Gas)",
      "Fuel Distribution and Retail",
      "Oil and Gas Technology and Innovation",
      "Energy Policy and Regulation",
      "Investment and Financing in Oil and Gas",
    ],
    "Pharmaceuticals": [
      "Drug Discovery and Development",
      "Clinical Trials and Research",
      "Generic Drug Manufacturing",
      "Biotechnology and Biopharmaceuticals",
      "Over-the-Counter (OTC) Medications",
      "Vaccine Development and Production",
      "Pharmaceutical Manufacturing and Packaging",
      "Regulatory Affairs and Compliance",
      "Pharmacovigilance and Drug Safety",
      "Pharmaceutical Marketing and Sales",
      "Pharmacy Benefit Management (PBM)",
      "Specialty Pharmaceuticals",
      "Personalized Medicine and Genomics",
      "Pharmaceutical Supply Chain and Distribution",
      "Medical and Pharmaceutical Research Organizations",
      "Health Economics and Outcomes Research (HEOR)",
      "Pharmaceutical Consulting",
      "Digital Health and Pharma Tech",
      "International Pharmaceuticals and Global Markets",
      "Animal Health and Veterinary Pharmaceuticals",
    ],
    "Real Estate": [
      "Residential Real Estate",
      "Commercial Real Estate",
      "Real Estate Development",
      "Property Management",
      "Real Estate Investment Trusts (REITs)",
      "Real Estate Brokerage and Agents",
      "Real Estate Appraisal and Valuation",
      "Mortgage and Real Estate Financing",
      "Real Estate Marketing and Sales",
      "Construction and Building",
      "Real Estate Law and Regulations",
      "Urban Planning and Development",
      "Real Estate Technology (PropTech)",
      "Real Estate Investment and Analysis",
      "Green Building and Sustainable Real Estate",
      "Leasing and Tenant Representation",
      "Real Estate Auctions",
      "Relocation Services",
      "Real Estate Consulting",
      "International Real Estate",
    ],
    "Retail Industries": [
      "E-commerce and Online Retail",
      "Department Stores and General Merchandise",
      "Specialty Retail",
      "Grocery and Supermarkets",
      "Apparel and Fashion Retail",
      "Electronics and Appliance Stores",
      "Home Furnishings and Decor",
      "Health and Personal Care Stores",
      "Automotive Parts and Accessories Retail",
      "Convenience Stores and Gas Stations",
      "Luxury Goods Retail",
      "Discount Retail and Outlet Stores",
      "Retail Technology and Innovation",
      "Supply Chain and Logistics in Retail",
      "Retail Marketing and Advertising",
      "Customer Relationship Management (CRM)",
      "Retail Analytics and Data",
      "Visual Merchandising and Store Design",
      "Retail Security and Loss Prevention",
      "Omnichannel Retail Strategies",
    ],
    "Travel and Transport Industries": [
      "Airlines and Aviation",
      "Hotels and Hospitality",
      "Travel Agencies and Tour Operators",
      "Cruise Lines",
      "Car Rental Services",
      "Public Transportation",
      "Logistics and Freight",
      "Travel Technology and Platforms",
      "Tourism and Destination Marketing",
      "Corporate Travel Management",
      "Passenger Rail Services",
      "Road Transport and Trucking",
      "Maritime and Shipping",
      "Travel Insurance",
      "Sustainable and Eco-Tourism",
      "Adventure and Outdoor Travel",
      "Cultural and Heritage Tourism",
      "Travel Planning and Itinerary Services",
      "Airport Services and Management",
      "Transportation Infrastructure",
    ],
  };

  return subcategoryLists[industryName] || [];
};

const generateSections = (industryName) => {
  const sectionContent = {
    "Automotive Industry": [
      {
        title: "Market Trends in the Automotive Sector",
        content:
          "Explore the latest trends shaping the automotive industry, including the rise of electric vehicles, advancements in autonomous driving, and the impact of connectivity on modern vehicles.",
      },
      {
        title: "The Future of Mobility",
        content:
          "Discover how the concept of mobility is evolving with technological advancements. This section covers ride-sharing services, micro-mobility solutions, and the integration of urban planning with transportation.",
      },
      {
        title: "Sustainability in Automotive Manufacturing",
        content:
          "Learn about the increasing focus on sustainability in automotive manufacturing. Topics include reducing carbon footprints, recycling materials, and the development of eco-friendly vehicles.",
      },
      {
        title: "Automotive Safety Innovations",
        content:
          "Delve into the latest safety innovations in the automotive industry. This includes advancements in driver-assistance systems, improvements in vehicle crashworthiness, and pedestrian safety measures.",
      },
      {
        title: "Global Automotive Market Analysis",
        content:
          "Gain insights into the global automotive market, including key players, regional market trends, and factors influencing industry growth and challenges.",
      },
    ],
    "Banking and Finance": [
      {
        title: "Digital Transformation in Banking",
        content:
          "Explore how digital technologies are transforming the banking sector, including the rise of online banking, mobile payments, and the use of AI and machine learning for personalized customer experiences.",
      },
      {
        title: "FinTech Innovations and Their Impact",
        content:
          "Discover the latest FinTech innovations and their impact on traditional financial services. Topics include blockchain technology, cryptocurrency, and the disruption of conventional banking models.",
      },
      {
        title: "Regulatory Landscape and Compliance",
        content:
          "Understand the evolving regulatory landscape in the banking and finance industry. This section covers compliance requirements, risk management strategies, and the impact of global financial regulations.",
      },
      {
        title: "Investment Strategies and Wealth Management",
        content:
          "Learn about effective investment strategies and the role of wealth management services in helping individuals and organizations achieve their financial goals.",
      },
      {
        title: "The Future of Banking",
        content:
          "Explore predictions and trends shaping the future of banking, including open banking, digital currencies, and the integration of advanced analytics.",
      },
    ],
    // ... Add more industries and their sections as needed
  };
  return sectionContent[industryName] || [];
};

const generateJobTitles = (industryName) => {
  const jobTitlesList = {
    "Automotive Industry": [
      "Automotive Engineer",
      "Vehicle Designer",
      "Quality Assurance Specialist",
      "Production Manager",
      "Supply Chain Analyst",
      "Sales Manager",
      "Service Technician",
      "R&D Engineer",
      "Marketing Specialist",
      "Safety Inspector",
    ],
    "Banking and Finance": [
      "Financial Analyst",
      "Investment Banker",
      "Loan Officer",
      "Risk Manager",
      "Compliance Officer",
      "Wealth Manager",
      "Branch Manager",
      "Credit Analyst",
      "Portfolio Manager",
      "FinTech Product Manager",
    ],
    // ... Add more industries and their job titles as needed
  };
  return jobTitlesList[industryName] || [];
};

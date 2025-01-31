import DataDisplay from '../../../components/DataDisplay';
import IndustryDetails from '../../../components/IndustryDetails';
import { mailinglinks } from '@/resource/data';


// Static Generation (Optional but recommended)
export async function generateStaticParams() {
    return mailinglinks.map((link) => ({
        industry: link.name.toLowerCase().replace(/ /g, '-'),
    }));
}

const IndustryPage = async ({ params }) => {
    const industrySlug = params.industry;

    // Find the industry data based on the slug
    const selectedIndustry = mailinglinks.find(
        (link) => link.name.toLowerCase().replace(/ /g, '-') === industrySlug
    );

    // Fallback if industry not found
    const industryData = selectedIndustry
        ? generateIndustryData(selectedIndustry)
        : {
            name: 'Unknown Industry',
            description: 'No data available for this industry.',
            subcategories: [],
            lineData: [],
            radarData: [],
            statistics: {},
            sections: [],
            jobTitles: [], // Add jobTitles to the default object
        };

    return (
        <>
            <IndustryDetails industryData={industryData} />
        </>
    );
};

// Placeholder function to generate data (server-side)
const generateIndustryData = (industry) => {
    // Example data structure - replace with your actual data fetching/generation
    const subcategories = generateSubcategories(industry.name);
    const sections = generateSections(industry.name);
    const jobTitles = generateJobTitles(industry.name); // Generate job titles
    return {
        name: industry.name,
        description: `Detailed information and data insights about the ${industry.name} industry.`,
        subcategories: subcategories,
        lineData: [10, 25, 45, 60, 80], // Example growth data
        radarData: [90, 75, 85, 80, 95], // Example performance metrics
        sections: sections,
        jobTitles: jobTitles, // Add jobTitles to the returned object
        // ... other data you need for this industry
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

        // Add more industries and their subcategories as needed
    };

    return subcategoryLists[industryName] || [];
};

const generateSections = (industryName) => {
    const sectionContent = {
        "Automotive Industry": [
            {
                title: "Market Trends in the Automotive Sector",
                content: "Explore the latest trends shaping the automotive industry, including the rise of electric vehicles, advancements in autonomous driving, and the impact of connectivity on modern vehicles."
            },
            {
                title: "The Future of Mobility",
                content: "Discover how the concept of mobility is evolving with technological advancements. This section covers ride-sharing services, micro-mobility solutions, and the integration of urban planning with transportation."
            },
            {
                title: "Sustainability in Automotive Manufacturing",
                content: "Learn about the increasing focus on sustainability in automotive manufacturing. Topics include reducing carbon footprints, recycling materials, and the development of eco-friendly vehicles."
            },
            {
                title: "Automotive Safety Innovations",
                content: "Delve into the latest safety innovations in the automotive industry. This includes advancements in driver-assistance systems, improvements in vehicle crashworthiness, and pedestrian safety measures."
            },
            {
                title: "Global Automotive Market Analysis",
                content: "Gain insights into the global automotive market, including key players, regional market trends, and factors influencing industry growth and challenges."
            }
        ],
        "Banking and Finance": [
            {
                title: "Digital Transformation in Banking",
                content: "Explore how digital technologies are transforming the banking sector, including the rise of online banking, mobile payments, and the use of AI and machine learning for personalized customer experiences."
            },
            {
                title: "FinTech Innovations and Their Impact",
                content: "Discover the latest FinTech innovations and their impact on traditional financial services. Topics include blockchain technology, cryptocurrency, and the disruption of conventional banking models."
            },
            {
                title: "Regulatory Landscape in Finance",
                content: "Understand the evolving regulatory landscape in the financial industry, including compliance challenges, the role of regulatory bodies, and the impact of regulations on financial institutions."
            },
            {
                title: "Investment Trends and Market Analysis",
                content: "Gain insights into current investment trends, market analysis, and strategies for wealth management. This section covers portfolio diversification, risk management, and emerging investment opportunities."
            },
            {
                title: "Sustainable Finance and ESG Investing",
                content: "Learn about the growing importance of sustainable finance and Environmental, Social, and Governance (ESG) factors in investment decisions, and how they are shaping the future of finance."
            }
        ],
        "Construction Companies": [
            {
                title: "Emerging Technologies in Construction",
                content: "Explore the adoption of new technologies in the construction industry, such as Building Information Modeling (BIM), 3D printing, drone technology, and their impact on efficiency and project management."
            },
            {
                title: "Sustainable Construction Practices",
                content: "Learn about the growing trend of sustainability in construction, including green building materials, energy-efficient designs, and practices that minimize environmental impact."
            },
            {
                title: "Infrastructure Development Trends",
                content: "Discover insights into current trends in infrastructure development, focusing on public-private partnerships, smart city projects, and the role of infrastructure in economic growth."
            },
            {
                title: "Safety and Risk Management in Construction",
                content: "Understand the critical aspects of safety and risk management in construction projects, including regulatory compliance, safety training, and strategies to mitigate project risks."
            },
            {
                title: "Global Construction Market Outlook",
                content: "Gain an overview of the global construction market, including key growth regions, challenges faced by the industry, and factors influencing market dynamics."
            }
        ],
        "Educational Industries": [
            {
              title: "Digital Transformation in Education",
              content: "Explore the impact of digital technologies on education, including online learning platforms, virtual classrooms, and the use of educational software to enhance learning experiences."
            },
            {
              title: "Trends in Higher Education",
              content: "Discover current trends in higher education, such as the rise of online degrees, changes in student demographics, and the increasing focus on interdisciplinary studies."
            },
            {
              title: "Early Childhood Education Practices",
              content: "Learn about effective practices in early childhood education, focusing on developmental psychology, play-based learning, and the importance of early intervention."
            },
            {
              title: "Special Education: Challenges and Innovations",
              content: "Understand the challenges and innovations in special education, including inclusive education models, assistive technologies, and personalized learning plans."
            },
            {
              title: "Global Perspectives on Education",
              content: "Gain insights into global perspectives on education, comparing different educational systems, policies, and practices around the world."
            }
          ],
          "Food and Beverages": [
            {
              title: "Trends in Food Consumption and Preferences",
              content: "Explore the latest trends in food consumption, including the rise of plant-based diets, organic foods, and changing consumer preferences towards health and sustainability."
            },
            {
              title: "Innovations in Food Processing and Packaging",
              content: "Discover innovations in food processing and packaging that enhance food safety, extend shelf life, and reduce environmental impact."
            },
            {
              title: "The Rise of Food Delivery and E-commerce",
              content: "Understand the growing trend of food delivery services and e-commerce in the food industry, and its impact on traditional grocery shopping and dining."
            },
            {
              title: "Sustainability in the Food Supply Chain",
              content: "Learn about sustainability practices in the food supply chain, from farm to table, including reducing food waste, sustainable agriculture, and ethical sourcing."
            },
            {
              title: "Global Food and Beverage Market Analysis",
              content: "Gain insights into the global food and beverage market, including key players, regional trends, and factors influencing industry growth and challenges."
            },
          ],
          "Healthcare Industries": [
            {
              title: "Advancements in Medical Technology",
              content: "Explore the latest advancements in medical technology, including innovations in medical devices, diagnostic tools, and their impact on patient care and treatment outcomes."
            },
            {
              title: "The Rise of Telehealth and Digital Health",
              content: "Discover the growing trend of telehealth and digital health solutions, transforming healthcare delivery, improving access to care, and empowering patients."
            },
            {
              title: "Pharmaceutical Industry Trends",
              content: "Understand current trends in the pharmaceutical industry, including drug development, personalized medicine, and the challenges of drug pricing and accessibility."
            },
            {
              title: "Healthcare Policy and Reform",
              content: "Gain insights into healthcare policy and reform, including discussions on universal healthcare, insurance models, and their implications for patients and providers."
            },
            {
              title: "Global Healthcare Challenges and Solutions",
              content: "Learn about global healthcare challenges, such as aging populations, chronic diseases, and healthcare disparities, along with innovative solutions being developed."
            }
          ],
          "Manufacturing Industries": [
            {
              title: "Industry 4.0 and Smart Manufacturing",
              content: "Explore the concepts of Industry 4.0 and smart manufacturing, including the integration of IoT, AI, and big data analytics to create more efficient and automated production systems."
            },
            {
              title: "Sustainable Manufacturing Practices",
              content: "Learn about the shift towards sustainable manufacturing, focusing on reducing environmental impact, conserving resources, and adopting circular economy principles."
            },
            {
              title: "Supply Chain Resilience in Manufacturing",
              content: "Understand the importance of building resilient supply chains in manufacturing, including strategies for risk management, diversification, and localization."
            },
            {
              title: "Advanced Materials and Their Applications",
              content: "Discover the development and applications of advanced materials in manufacturing, such as composites, nanomaterials, and their impact on product innovation."
            },
            {
              title: "Global Manufacturing Trends and Outlook",
              content: "Gain insights into global manufacturing trends, including regional shifts, technological advancements, and factors influencing the competitiveness of the manufacturing sector."
            }
          ],
          "Oil and Gas": [
            {
              title: "Renewable Energy and the Future of Oil and Gas",
              content: "Explore the growing impact of renewable energy on the oil and gas industry, including the transition to cleaner energy sources and the changing energy landscape."
            },
            {
              title: "Innovations in Oil and Gas Extraction",
              content: "Discover the latest technological advancements in oil and gas extraction, such as enhanced oil recovery techniques, digitalization, and automation in drilling."
            },
            {
              title: "Environmental Sustainability in Oil and Gas",
              content: "Understand the increasing focus on environmental sustainability in the oil and gas sector, including efforts to reduce carbon emissions, manage waste, and protect ecosystems."
            },
            {
              title: "Geopolitical Factors Affecting the Oil and Gas Market",
              content: "Gain insights into how geopolitical events, international relations, and energy policies influence the global oil and gas market."
            },
            {
              title: "Market Trends and Price Volatility",
              content: "Learn about the factors driving market trends and price volatility in the oil and gas industry, including supply and demand dynamics, economic conditions, and market speculation."
            }
          ],
          "Pharmaceuticals": [
            {
              title: "Drug Development and Innovation Pipeline",
              content: "Explore the current state of the pharmaceutical drug development pipeline, including breakthroughs in research, emerging therapies, and the focus on precision medicine."
            },
            {
              title: "Challenges in Pharmaceutical Manufacturing",
              content: "Understand the complexities and challenges in pharmaceutical manufacturing, including quality control, regulatory compliance, and supply chain management."
            },
            {
              title: "The Role of Biotechnology in Pharmaceuticals",
              content: "Discover how biotechnology is revolutionizing the pharmaceutical industry, with a focus on biopharmaceuticals, gene therapies, and personalized medicine approaches."
            },
            {
              title: "Global Access to Medicines and Healthcare Equity",
              content: "Gain insights into the issues surrounding global access to medicines, including drug pricing, patent laws, and efforts to improve healthcare equity worldwide."
            },
            {
              title: "Market Trends and Future Outlook for Pharmaceuticals",
              content: "Learn about the market trends shaping the pharmaceutical industry, including the impact of digital health, changing patient demographics, and the evolving healthcare landscape."
            }
          ],
          "Real Estate": [
            {
              title: "Trends in Residential Real Estate",
              content: "Explore current trends in the residential real estate market, including changes in homebuyer preferences, the impact of remote work on housing, and emerging popular locations."
            },
            {
              title: "Commercial Real Estate Dynamics",
              content: "Understand the dynamics of the commercial real estate market, including office space trends, retail real estate challenges, and the growth of industrial and logistics properties."
            },
            {
              title: "Real Estate Investment and Financing",
              content: "Gain insights into real estate investment strategies, financing options, and the role of REITs and other investment vehicles in the real estate market."
            },
            {
              title: "Sustainability and Green Building Practices",
              content: "Learn about the increasing focus on sustainability in real estate, including green building certifications, energy-efficient designs, and environmentally friendly construction practices."
            },
            {
              title: "Technology's Impact on Real Estate (PropTech)",
              content: "Discover how technology is transforming the real estate industry, from virtual property tours and online listings to smart home technology and data analytics for market insights."
            }
          ],
          "Retail Industries": [
            {
              title: "E-commerce Growth and Trends",
              content: "Explore the rapid growth of e-commerce and its impact on traditional retail, including trends in online shopping, mobile commerce, and the role of digital marketplaces."
            },
            {
              title: "Changing Consumer Behaviors and Preferences",
              content: "Understand how consumer behaviors and preferences are evolving, with a focus on personalization, experience-driven retail, and the importance of brand values."
            },
            {
              title: "Omnichannel Retail Strategies",
              content: "Learn about omnichannel retail strategies that integrate online and offline channels to provide a seamless shopping experience for customers."
            },
            {
              title: "Sustainability in Retail",
              content: "Discover the increasing importance of sustainability in the retail industry, including ethical sourcing, reducing environmental impact, and promoting social responsibility."
            },
            {
              title: "Technology Innovations in Retail",
              content: "Gain insights into how technology is revolutionizing retail, from AI-driven personalization and virtual reality experiences to automated checkout systems and data analytics."
            }
          ],
          "Travel and Transport Industries": [
            {
              title: "The Future of Air Travel",
              content: "Explore emerging trends in air travel, including advancements in aircraft technology, the rise of low-cost carriers, and efforts to reduce the environmental impact of aviation."
            },
            {
              title: "Sustainable Tourism Practices",
              content: "Learn about sustainable tourism practices that aim to minimize the negative impacts of travel on the environment and local communities, while promoting responsible travel experiences."
            },
            {
              title: "Technological Innovations in Travel",
              content: "Discover how technology is transforming the travel industry, from online booking platforms and mobile travel apps to virtual reality tours and personalized travel planning."
            },
            {
              title: "Changes in Consumer Travel Preferences",
              content: "Understand how consumer travel preferences are evolving, with a focus on experiential travel, adventure tourism, and the growing demand for unique and authentic travel experiences."
            },
            {
              title: "Global Travel Market Trends and Outlook",
              content: "Gain insights into global travel market trends, including popular destinations, emerging markets, and factors influencing the growth and resilience of the travel industry."
            }
          ],
    };

    return sectionContent[industryName] || [];
};

// Function to generate job titles based on industry
const generateJobTitles = (industryName) => {
    const jobTitleLists = {
        "Automotive Industry": [
            "Automotive Engineer",
            "EV Battery Engineer",
            "Autonomous Vehicle Specialist",
            "Automotive Designer",
            "Automotive Technician",
            "Car Sales Consultant",
            "Automotive Marketing Manager",
            "Supply Chain Analyst (Automotive)",
            "Quality Control Inspector (Automotive)",
            "Automotive Service Advisor",
            "R&D Engineer (Automotive)",
            "Automotive Parts Specialist",
            "Fleet Manager",
            "Automotive Safety Engineer",
            "Emissions Testing Technician",
            "Automotive Software Developer",
            "Car Leasing Specialist",
            "Automotive Electrician",
            "Hybrid Vehicle Technician",
            "Race Car Engineer",
            "Automotive Journalist",
            "Automotive Detailer",
            "Automotive Appraiser",
            "ADAS Calibration Technician",
            "Automotive Manufacturing Engineer"
        ],
        "Banking and Finance": [
            "Financial Analyst",
            "Investment Banker",
            "Retail Banker",
            "Loan Officer",
            "Financial Advisor",
            "Risk Analyst",
            "Compliance Officer",
            "Hedge Fund Manager",
            "Private Equity Associate",
            "Venture Capitalist",
            "Quantitative Analyst (Quant)",
            "Financial Planner",
            "Credit Analyst",
            "Asset Manager",
            "Financial Auditor",
            "Cryptocurrency Trader",
            "Blockchain Developer",
            "FinTech Product Manager",
            "Insurance Underwriter",
            "Actuary",
            "Mortgage Broker",
            "Financial Consultant",
            "Portfolio Manager",
            "Wealth Management Advisor",
            "Financial Data Analyst"
        ],
        "Construction Companies": [
            "Construction Manager",
            "Civil Engineer",
            "Project Manager (Construction)",
            "Architect",
            "Construction Worker",
            "Electrician",
            "Plumber",
            "Carpenter",
            "Construction Inspector",
            "Quantity Surveyor",
            "Site Supervisor",
            "Estimator",
            "Heavy Equipment Operator",
            "Construction Safety Officer",
            "Structural Engineer",
            "Building Surveyor",
            "Construction Planner",
            "Contractor",
            "Foreman",
            "Drafter",
            "Scaffolder",
            "Welder",
            "Construction Consultant",
            "HVAC Technician",
            "Interior Designer"
          ],
          "Educational Industries": [
            "Teacher (K-12)",
            "Professor",
            "Lecturer",
            "School Principal",
            "School Counselor",
            "Special Education Teacher",
            "Curriculum Developer",
            "Educational Consultant",
            "Admissions Officer",
            "Academic Advisor",
            "Librarian",
            "Education Administrator",
            "Online Learning Specialist",
            "EdTech Developer",
            "Corporate Trainer",
            "ESL Teacher",
            "Tutor",
            "Research Scientist (Education)",
            "Instructional Designer",
            "School Psychologist",
            "Education Policy Analyst",
            "Test Prep Instructor",
            "Early Childhood Educator",
            "Guidance Counselor",
            "Superintendent"
          ],
          "Food and Beverages": [
            "Chef",
            "Sous Chef",
            "Restaurant Manager",
            "Food Scientist",
            "Food Technologist",
            "Quality Assurance Manager (Food)",
            "Supply Chain Manager (Food)",
            "Food and Beverage Director",
            "Nutritionist",
            "Dietitian",
            "Bartender",
            "Barista",
            "Food Safety Inspector",
            "Culinary Instructor",
            "Pastry Chef",
            "Baker",
            "Food Service Worker",
            "Sommelier",
            "Brewmaster",
            "Food Critic",
            "Food Stylist",
            "Food Packaging Designer",
            "Agricultural Inspector",
            "Food Broker",
            "Caterer"
          ],
          "Healthcare Industries": [
            "Physician",
            "Nurse Practitioner",
            "Registered Nurse",
            "Surgeon",
            "Pharmacist",
            "Physical Therapist",
            "Occupational Therapist",
            "Radiologist",
            "Medical Technologist",
            "Hospital Administrator",
            "Healthcare Consultant",
            "Medical Assistant",
            "Dentist",
            "Dental Hygienist",
            "Psychiatrist",
            "Psychologist",
            "Clinical Researcher",
            "Biomedical Engineer",
            "Health Informatics Specialist",
            "Paramedic",
            "EMT",
            "Home Health Aide",
            "Medical Coder",
            "Medical Biller",
            "Speech-Language Pathologist"
          ],
          "Manufacturing Industries": [
            "Manufacturing Engineer",
            "Process Engineer",
            "Mechanical Engineer",
            "Industrial Engineer",
            "Quality Control Manager",
            "Production Manager",
            "Supply Chain Manager",
            "Operations Manager",
            "Maintenance Technician",
            "Machinist",
            "Welder",
            "Assembler",
            "Manufacturing Technician",
            "CNC Operator",
            "Automation Engineer",
            "Robotics Engineer",
            "Safety Manager",
            "Plant Manager",
            "Materials Manager",
            "Logistics Coordinator",
            "Procurement Specialist",
            "Lean Manufacturing Specialist",
            "Six Sigma Black Belt",
            "Industrial Designer",
            "CAD Technician"
          ],
          "Oil and Gas": [
            "Petroleum Engineer",
            "Drilling Engineer",
            "Reservoir Engineer",
            "Geologist",
            "Geophysicist",
            "Pipeline Engineer",
            "Process Engineer (Oil & Gas)",
            "HSE Manager",
            "Oilfield Operator",
            "Offshore Installation Manager",
            "Refinery Operator",
            "Chemical Engineer (Oil & Gas)",
            "Oil & Gas Analyst",
            "Energy Consultant",
            "Environmental Engineer (Oil & Gas)",
            "Subsea Engineer",
            "Wellsite Supervisor",
            "Completion Engineer",
            "Production Engineer",
            "Mudlogger",
            "Roustabout",
            "Derrickhand",
            "Instrumentation Technician",
            "NDT Inspector",
            "Oil & Gas Lawyer"
          ],
          "Pharmaceuticals": [
            "Pharmaceutical Scientist",
            "Research Scientist (Pharma)",
            "Clinical Research Associate",
            "Pharmacologist",
            "Medicinal Chemist",
            "Biostatistician",
            "Regulatory Affairs Specialist",
            "Quality Assurance Manager (Pharma)",
            "Pharmaceutical Sales Representative",
            "Pharmacist",
            "Clinical Data Manager",
            "Drug Safety Associate",
            "Formulation Scientist",
            "Analytical Chemist",
            "Process Development Scientist",
            "Pharmaceutical Manufacturing Technician",
            "Medical Science Liaison",
            "Clinical Trial Manager",
            "Pharmacokineticist",
            "Toxicologist",
            "Pharmaceutical Consultant",
            "Biotechnology Analyst",
            "Validation Engineer",
            "Pharmaceutical Project Manager",
            "Pharmacovigilance Specialist"
          ],
          "Real Estate": [
            "Real Estate Agent",
            "Real Estate Broker",
            "Property Manager",
            "Real Estate Appraiser",
            "Real Estate Analyst",
            "Real Estate Developer",
            "Real Estate Investor",
            "Leasing Agent",
            "Commercial Real Estate Agent",
            "Residential Real Estate Agent",
            "Real Estate Attorney",
            "Mortgage Loan Officer",
            "Real Estate Consultant",
            "Real Estate Marketing Specialist",
            "Property Inspector",
            "Real Estate Auctioneer",
            "Escrow Officer",
            "Title Officer",
            "Real Estate Office Manager",
            "Relocation Specialist",
            "Land Developer",
            "Real Estate Photographer",
            "Real Estate Stager",
            "Construction Manager (Real Estate)",
            "Asset Manager (Real Estate)"
          ],
          "Retail Industries": [
            "Retail Sales Associate",
            "Store Manager",
            "Retail Buyer",
            "Merchandiser",
            "Visual Merchandiser",
            "Retail Analyst",
            "E-commerce Manager",
            "Digital Marketer (Retail)",
            "Customer Service Representative",
            "Loss Prevention Officer",
            "Inventory Manager",
            "Supply Chain Coordinator (Retail)",
            "Retail Operations Manager",
            "District Manager",
            "Regional Manager",
            "Retail Planner",
            "Allocation Analyst",
            "Category Manager",
            "Brand Manager",
            "Marketing Manager (Retail)",
            "Retail Consultant",
            "Retail Pharmacist",
            "Retail Optician",
            "Fashion Stylist",
            "Personal Shopper"
          ],
          "Travel and Transport Industries": [
            "Travel Agent",
            "Pilot",
            "Flight Attendant",
            "Airline Manager",
            "Hotel Manager",
            "Concierge",
            "Tour Guide",
            "Travel Consultant",
            "Event Planner (Travel)",
            "Logistics Coordinator",
            "Transportation Manager",
            "Cruise Director",
            "Reservation Agent",
            "Customer Service Representative (Travel)",
            "Travel Writer",
            "Travel Blogger",
            "Travel Photographer",
            "Destination Manager",
            "Resort Manager",
            "Travel Operations Manager",
            "Fleet Manager",
            "Dispatcher",
            "Truck Driver",
            "Train Conductor",
            "Port Manager"
          ],
    };

    return jobTitleLists[industryName] || [];
};

export default IndustryPage;
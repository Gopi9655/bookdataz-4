"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

// 1) Expanded FAQ list based on the sectors provided by BookDataz
const faqs = [
  {
    question: "What sectors does BookDataz provide database services for?",
    answer:
      "BookDataz provides comprehensive database services across a wide range of sectors including Healthcare, Technology, Finance, Education, Retail, Manufacturing, Energy, Hospitality, Real Estate, Government, Automotive, Telecommunications, Logistics, Legal Services, Media and Entertainment, Non-Profit, Construction, and Food and Beverage.",
  },
  {
    question: "What kind of healthcare data does BookDataz offer?",
    answer:
      "For Healthcare, BookDataz offers data on hospitals, clinics, pharmacies, medical equipment suppliers, health insurance, physicians, nurses, therapists, diagnostics labs, and public health agencies—totaling approximately 15,000 records.",
  },
  {
    question: "What subcategories are covered in the Healthcare sector?",
    answer:
      "The Healthcare sector includes subcategories such as Hospitals, Clinics, Pharmacies, Medical Equipment Suppliers, Health Insurance, Physicians, Nurses, Therapists, Diagnostics Labs, and Public Health Agencies.",
  },
  {
    question: "How comprehensive is the Technology database?",
    answer:
      "The Technology database comprises around 20,000 records, covering a broad range of subcategories from IT services to SaaS providers, ensuring you have access to detailed and up-to-date tech data.",
  },
  {
    question: "What Technology subcategories are available?",
    answer:
      "In Technology, available subcategories include IT Services, Software Development, Hardware Suppliers, Cloud Computing, Cybersecurity, Data Analytics, Mobile App Development, IoT Solutions, Network Infrastructure, and SaaS Providers.",
  },
  {
    question: "What finance-related data can I expect?",
    answer:
      "BookDataz offers an extensive Finance database with approximately 18,000 records, including data on banks, investment firms, credit unions, insurance companies, accounting services, tax consultants, wealth management, mortgage providers, payment gateways, and cryptocurrency platforms.",
  },
  {
    question: "What subcategories does the Finance sector include?",
    answer:
      "The Finance sector includes Banks, Investment Firms, Credit Unions, Insurance Companies, Accounting Services, Tax Consultants, Wealth Management, Mortgage Providers, Payment Gateways, and Cryptocurrency Platforms.",
  },
  {
    question: "How does BookDataz support the Education sector?",
    answer:
      "The Education sector features around 12,000 records covering various educational institutions and organizations, ensuring access to data on schools, colleges, universities, and more.",
  },
  {
    question: "What Education subcategories are available?",
    answer:
      "In Education, subcategories include Schools (K-12), Colleges, Universities, Online Learning Platforms, Libraries, Educational Consultants, Tutoring Centers, Training Institutes, Student Organizations, and Research Centers.",
  },
  {
    question: "What retail data is provided by BookDataz?",
    answer:
      "The Retail database contains approximately 25,000 records and includes data from e-commerce platforms, grocery stores, fashion retailers, electronics stores, furniture stores, automotive retailers, department stores, specialty shops, wholesale suppliers, and shopping malls.",
  },
  {
    question: "What are the subcategories in the Retail sector?",
    answer:
      "Retail subcategories include E-commerce Platforms, Grocery Stores, Fashion Retailers, Electronics Stores, Furniture Stores, Automotive Retailers, Department Stores, Specialty Shops, Wholesale Suppliers, and Shopping Malls.",
  },
  {
    question: "How extensive is the Manufacturing database?",
    answer:
      "The Manufacturing sector features roughly 16,000 records, covering various aspects of production across industries, ensuring you have access to detailed manufacturing data.",
  },
  {
    question: "What subcategories are covered in Manufacturing?",
    answer:
      "Manufacturing subcategories include Automotive Manufacturing, Electronics Manufacturing, Pharmaceutical Manufacturing, Consumer Goods Manufacturing, Heavy Machinery, Textiles and Apparel, Chemical Manufacturing, Construction Materials, Food and Beverage, and Packaging Industries.",
  },
  {
    question: "What data is available in the Energy sector?",
    answer:
      "The Energy database offers about 14,000 records, providing information on oil and gas, renewable energy, power plants, energy consultants, utility providers, energy equipment suppliers, green energy solutions, nuclear energy, wind energy, and solar energy.",
  },
  {
    question: "Can you tell me about the Hospitality database?",
    answer:
      "The Hospitality sector has approximately 13,000 records, covering a range of businesses from hotels and restaurants to event planners, travel agencies, airlines, cruises, car rentals, tour operators, resorts, and catering services.",
  },
  {
    question: "What information is available in the Real Estate sector?",
    answer:
      "The Real Estate sector includes about 11,000 records with data on commercial and residential real estate, real estate agents, property management, developers, mortgage brokers, landlords, construction companies, REITs, and appraisal services.",
  },
  {
    question: "How does BookDataz cater to government agencies?",
    answer:
      "The Government database features around 9,000 records, including data on local, state, and federal agencies, public works, defense, public health, environmental and transportation departments, regulatory bodies, and law enforcement.",
  },
  {
    question: "What automotive data does BookDataz offer?",
    answer:
      "The Automotive sector contains approximately 13,000 records, covering car manufacturers, dealerships, repair services, tire and spare parts suppliers, electric vehicle companies, fleet management, automotive research, auto insurance, and related logistics.",
  },
  {
    question: "What does the Telecommunications database include?",
    answer:
      "With around 15,000 records, the Telecommunications database offers information on mobile network providers, internet service providers, cable TV operators, satellite companies, 5G solutions, telecom hardware suppliers, call centers, VoIP providers, broadband, and fiber optics companies.",
  },
  {
    question: "How does BookDataz support the Logistics industry?",
    answer:
      "The Logistics sector comprises roughly 14,000 records, offering data on shipping companies, freight forwarders, courier services, logistics software providers, warehousing companies, supply chain management, port authorities, customs brokers, 3PL companies, and transportation services.",
  },
  {
    question: "What legal services data is available?",
    answer:
      "The Legal Services database includes about 11,000 records covering law firms, corporate, family, and intellectual property lawyers, legal tech companies, notaries, compliance officers, legal consultancies, court reporting services, and translation services.",
  },
  {
    question: "What Media and Entertainment data can I access?",
    answer:
      "The Media and Entertainment sector offers around 14,000 records, providing data on television networks, radio stations, streaming platforms, film production companies, event organizers, advertising agencies, public relations agencies, graphic designers, content creators, and media distribution companies.",
  },
  {
    question: "How does BookDataz support Non-Profit organizations?",
    answer:
      "The Non-Profit sector features approximately 8,000 records, offering comprehensive data on charities, foundations, community organizations, environmental and health-related NGOs, religious organizations, educational NGOs, human rights groups, animal welfare organizations, and international aid agencies.",
  },
  {
    question: "What data is available in the Construction sector?",
    answer:
      "The Construction database comprises roughly 17,000 records, covering general contractors, subcontractors, architectural firms, civil engineers, building materials suppliers, developers, equipment suppliers, renovation specialists, project managers, and interior designers.",
  },
  {
    question: "What information is available in the Food and Beverage sector?",
    answer:
      "The Food and Beverage sector offers about 19,000 records, providing data on restaurants, fast food chains, cafes, food distributors, beverage companies, food manufacturing, catering services, vineyards, breweries, food delivery services, and specialty food stores.",
  },
  {
    question: "How is the data quality maintained?",
    answer:
      "BookDataz ensures high data quality through rigorous data collection methods, regular updates, and thorough validation processes, leveraging advanced AI-powered techniques and expert oversight.",
  },
  {
    question: "How frequently is the data updated?",
    answer:
      "Our databases are updated regularly to ensure accuracy and relevance, with continuous verification and refresh cycles that adhere to industry best practices.",
  },
];

// 2) Function to match user's message to FAQ
function getMatchingResponse(message) {
  const lowerMessage = message.toLowerCase();

  for (let faq of faqs) {
    // Simple keyword check: remove "?" from question and compare
    const keyword = faq.question.replace("?", "").toLowerCase();
    if (lowerMessage.includes(keyword)) {
      // Found a match!
      return { response: faq.answer, suggestions: [] };
    }
  }

  // If no match found, show the user all questions as suggestions
  return { response: null, suggestions: faqs.map((faq) => faq.question) };
}

// 3) SVG for the Mail Icon
function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 md:w-7 md:h-7 text-white
      "
    >
      <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5zm3-1a1 1 0 0 0-1 1v1.5l8 5 8-5V5a1 1 0 0 0-1-1H5zm16 3.236-7.6 4.75a2 2 0 0 1-2.8 0L3 7.236V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.236z" />
    </svg>
  );
}

// 4) Main Chatbot Component
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! How can I help you with our database services?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  // Optional: auto-open after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsOpen(true), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle user sending a message
  const handleSend = (messageText) => {
    if (!messageText.trim()) return;
    setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);
    setInput("");

    // Check FAQ logic
    const { response, suggestions } = getMatchingResponse(messageText);

    if (response) {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: "I didn't understand. Please select a question:",
          sender: "bot",
          suggestions,
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
      {/* --- Mail Icon Button (opens email client) --- */}
      <motion.a
        href="mailto:sales@bookdataz.com"
        className="bg-customBlue p-3 md:p-3.5 rounded-full shadow-md  flex items-center justify-center hover:shadow-lg transition-all"
        whileTap={{ scale: 0.9 }}
        title="Email Us"
      >
        <MailIcon />
      </motion.a>

      {/* --- Chatbot Toggle Button --- */}
      <motion.button
        className="bg-customBlue text-white p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        title="Open Chatbot"
      >
        {isOpen ? (
          <FiX className="text-xl md:text-2xl" />
        ) : (
          <FiMessageSquare className="text-xl md:text-2xl" />
        )}
      </motion.button>

      {/* --- Chat Window --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-[90vw] max-w-sm md:max-w-md bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-customBlue text-white p-3 flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">BookDataz Chat</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-80">
                <FiX className="text-lg md:text-xl" />
              </button>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="h-64 md:h-72 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[90%] ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-gray-700 self-start"
                      : "bg-customBlue text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                  {/* Render suggested questions as clickable buttons */}
                  {msg.suggestions && (
                    <div className="mt-2">
                      {msg.suggestions.map((question, qIndex) => (
                        <button
                          key={qIndex}
                          onClick={() => handleSend(question)}
                          className="block text-customBlue hover:underline mt-1 text-sm md:text-base"
                        >
                          ➜ {question}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Field */}
            <div className="flex items-center border-t p-2 md:p-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 md:p-3 border rounded-l-lg focus:outline-none text-sm md:text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              />
              <button
                onClick={() => handleSend(input)}
                className="bg-customBlue text-white p-2 md:p-3 rounded-r-lg hover:bg-blue-700 transition"
              >
                <FiSend className="text-lg md:text-xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

// Predefined Responses with Keywords
const predefinedResponses = {
  "what is bookdataz": {
    response: "BookDataz provides high-quality, targeted business and consumer data for marketing and sales growth.",
    keywords: ["bookdataz", "what is"],
  },
  "how much does your database cost": {
    response: "Pricing depends on industry, volume, and customization. Contact us for a quote.",
    keywords: ["price", "cost", "how much"],
  },
  "what industries do you cover": {
    response: "We cover Automotive, Banking, Construction, Education, Healthcare, Manufacturing, Oil & Gas, Pharmaceuticals, Retail, Real Estate, and Travel.",
    keywords: ["industry", "industries", "sector", "specific industry"],
  },
  "how accurate is your data": {
    response: "We ensure 95%+ accuracy with AI validation, human verification, and frequent updates.",
    keywords: ["accuracy", "how accurate"],
  },
  "do you offer free trials": {
    response: "Yes, we provide free samples so you can test the data before purchasing.",
    keywords: ["free trial", "sample"],
  },
  "is your data gdpr compliant": {
    response: "Yes, we strictly follow GDPR, CCPA, and CAN-SPAM regulations.",
    keywords: ["gdpr", "compliant", "data laws"],
  },
};

// Suggested questions for unknown queries
const suggestedQuestions = [
  "How much does your database cost?",
  "What industries do you cover?",
  "How accurate is your data?",
  "Can I get a custom database?",
  "Do you offer free trials?",
];

// Function to find the best matching response or suggest questions
const getMatchingResponse = (userInput) => {
  const lowerCaseInput = userInput.toLowerCase();

  // Check for exact match
  if (predefinedResponses[lowerCaseInput]) {
    return { response: predefinedResponses[lowerCaseInput].response, suggestions: [] };
  }

  // Check for keyword matches
  for (const key in predefinedResponses) {
    const { response, keywords } = predefinedResponses[key];
    if (keywords.some((keyword) => lowerCaseInput.includes(keyword))) {
      return { response, suggestions: [] };
    }
  }

  // Return suggested questions if no match is found
  return { response: null, suggestions: suggestedQuestions };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you with our database services?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  // Auto-open chatbot after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle user input & get best-matching response
  const handleSend = (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = messageText.toLowerCase();
    setMessages([...messages, { text: messageText, sender: "user" }]);
    setInput("");

    const { response, suggestions } = getMatchingResponse(userMessage);

    if (response) {
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: "bot" }]);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I didn't understand. Please select a question:", sender: "bot", suggestions },
      ]);
    }
  };

  return (
    <div className="fixed bottom-16 right-6 md:bottom-20 md:right-4 z-50">
      {/* Chat Button */}
      <motion.button
        className="bg-customBlue text-white p-4 md:p-5 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FiX className="text-xl md:text-2xl" /> : <FiMessageSquare className="text-xl md:text-2xl" />}
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-28 right-4 md:right-6 w-[90%] max-w-sm md:max-w-md bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Chat Header */}
            <div className="bg-customBlue text-white p-3 flex justify-between items-center">
              <h3 className="text-lg font-semibold">BookDataz Chat</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-80">
                <FiX />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={chatRef} className="h-64 md:h-72 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 max-w-[80%] rounded-lg ${msg.sender === "bot" ? "bg-gray-100 text-gray-700 self-start" : "bg-customBlue text-white self-end ml-auto"}`}>
                  {msg.text}
                  {/* Show Suggested Questions as Clickable Buttons */}
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

            {/* Chat Input */}
            <div className="flex items-center border-t p-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 md:p-3 border rounded-l-lg focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              />
              <button onClick={() => handleSend(input)} className="bg-customBlue text-white p-2 md:p-3 rounded-r-lg hover:bg-blue-700 transition">
                <FiSend className="text-lg md:text-xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;

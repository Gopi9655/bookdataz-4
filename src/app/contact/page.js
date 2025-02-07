"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Updated to POST to our API route
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Make a POST request to /api/contact
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        alert("Form submitted successfully!");
        // Reset the form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error submitting form: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen md:p-32 bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center py-12">
      {/* Main container with 2 columns: Contact Info + Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 flex flex-col md:flex-row gap-10 pb-10"
      >
        {/* Left Column: Contact Information */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-7">
            Whether you’re looking for more information on our data solutions or
            have specific queries, we’re here to help.
          </p>

          <div className="flex flex-col gap-4 text-gray-700">
            <div>
              <p className="font-semibold">Address:</p>
              <p>
                6150, Poplar Ave, Suite 200
                <br />
                Memphis, TN - 38119
              </p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <a
                href="mailto:sales@bookdataz.com"
                className="text-customBlue hover:underline"
              >
                sales@bookdataz.com
              </a>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+1 - 901-942-8334</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-4 w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.364697435597!2d-89.86694644919073!3d35.104037163999906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f85c41080d93d%3A0x81a576bd3f798564!2s6150%20Poplar%20Ave%20%23200%2C%20Memphis%2C%20TN%2038119%2C%20USA!5e0!3m2!1sen!2sin!4v1695660212345!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block font-semibold text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-customBlue"
                  placeholder={`Your ${field.label}`}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
                {errors[field.id] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
                )}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block font-semibold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-customBlue text-white font-semibold rounded-lg py-3 px-6 mt-3 hover:bg-customBlue/90 transition-all flex items-center justify-center"
            >
              {isSubmitting ? (
                <FiLoader className="animate-spin mr-2" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I request a custom data list?",
              answer:
                "You can fill out our contact form above or email us with your specific requirements. We’ll get back to you within 24 hours.",
            },
            {
              question: "What is the response time?",
              answer:
                "Typically, we respond within 1-2 business days, depending on the volume of inquiries.",
            },
            {
              question: "Do you offer discounts for bulk data?",
              answer:
                "Yes, we do! Please reach out with your volume requirements, and we’ll customize a plan for you.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Social Media Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full bg-white py-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Connect With Us
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/bookdataz-global/posts/?feedView=all" },
            { icon: <FaFacebook />, url: "https://www.facebook.com/" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/" },
            { icon: <FaTwitter />, url: "https://twitter.com/" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customBlue text-white p-4 rounded-full hover:bg-customBlue/90 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Contactpage;

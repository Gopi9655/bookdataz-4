"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLoader, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ReCAPTCHA from "react-google-recaptcha";

import Button from "../../../components/ui/Button";
import Section from "../../../components/ui/Section";

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "subject", label: "Subject", type: "text" },
];

const faqs = [
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
];

const inputClasses =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdf9] px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100";

// Public reCAPTCHA site key. Prefer env (per-environment); fall back to the
// existing production key so deployed behaviour is unchanged. Only the public
// site key is referenced here — never the secret (that lives server-side).
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Ldf0T8rAAAAAHJlDKnYoqYfgj4i8tlINfa3zIbA";
const RECAPTCHA_FROM_ENV = Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  // Dev-only hint: the bundled production key won't validate on localhost
  // unless that domain is allowed in the reCAPTCHA admin console.
  const [showDevCaptchaHint, setShowDevCaptchaHint] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    const isLocal = host === "localhost" || host === "127.0.0.1";
    if (isLocal && !RECAPTCHA_FROM_ENV) {
      setShowDevCaptchaHint(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      console.log("Submitting form with data:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response received", response);

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Form submitted successfully!");
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
    <div className="contact-page-premium overflow-hidden text-[color:var(--text-main)]">
      <Section className="contact-hero-compact relative border-b border-[color:var(--card-border)]">
        <div className="contact-hero-aurora" />
        <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-[color:var(--accent-tint)] blur-3xl" />
        <div className="relative mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--heading)] sm:text-5xl lg:text-6xl">
            Let&apos;s build your next{" "}
            <span className="bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] bg-clip-text text-transparent">
              data solution
            </span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contact-grid-premium relative grid grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8"
        >
          <div className="contact-card-premium relative overflow-hidden rounded-3xl p-6 lg:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Talk with our team
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <div className="flex items-center gap-3 text-orange-600">
                  <FiMapPin size={18} />
                  <p className="font-semibold text-slate-950">US Office:</p>
                </div>
                <p className="mt-3 pl-8 leading-7 text-slate-600">
                  6150 Poplar Ave, Suite 200
                  <br />
                  Memphis, TN 38119
                  <br />
                  United States
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <div className="flex items-center gap-3 text-orange-600">
                  <FiMapPin size={18} />
                  <p className="font-semibold text-slate-950">UK Office:</p>
                </div>
                <p className="mt-3 pl-8 leading-7 text-slate-600">
                  Gateway East, White City
                  <br />
                  London W12 7TU
                  <br />
                  United Kingdom
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
                  <div className="flex items-center gap-3 text-orange-600">
                    <FiMail size={18} />
                    <p className="font-semibold text-slate-950">Email:</p>
                  </div>
                  <a
                    href="mailto:sales@bookdataz.com"
                    className="mt-3 block break-all text-sm text-slate-600 transition hover:text-orange-600"
                  >
                    sales@bookdataz.com
                  </a>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
                  <div className="flex items-center gap-3 text-orange-600">
                    <FiPhone size={18} />
                    <p className="font-semibold text-slate-950">Phone:</p>
                  </div>
                  <a
                    href="tel:9017800114"
                    className="mt-3 block text-sm text-slate-600 transition hover:text-orange-600"
                  >
                    9017800114
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.364697435597!2d-89.86694644919073!3d35.104037163999906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f85c41080d93d%3A0x81a576bd3f798564!2s6150%20Poplar%20Ave%20%23200%2C%20Memphis%2C%20TN%2038119%2C%20USA!5e0!3m2!1sen!2sin!4v1695660212345!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="US Office Location"
              />
            </div>
          </div>

          <div className="contact-card-premium relative overflow-hidden rounded-3xl p-6 lg:p-8">
            <span className="absolute inset-x-0 top-0 h-1 premium-accent" aria-hidden="true" />
            <div className="border-b border-[color:var(--card-border)] pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Send a Message
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Tell us what you need
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={field.id === "subject" ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-semibold text-slate-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      aria-invalid={Boolean(errors[field.id])}
                      aria-describedby={
                        errors[field.id] ? `${field.id}-error` : undefined
                      }
                      className={inputClasses}
                      placeholder={`Your ${field.label}`}
                      value={formData[field.id]}
                      onChange={handleChange}
                    />
                    {errors[field.id] && (
                      <p
                        id={`${field.id}-error`}
                        className="mt-2 text-sm font-medium text-orange-600"
                      >
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={inputClasses}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-sm font-medium text-orange-600"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="overflow-x-auto rounded-2xl border border-orange-100 bg-orange-50/50 p-3">
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setRecaptchaToken(token)}
                />
                {showDevCaptchaHint && (
                  <p className="mt-3 rounded-xl border border-amber-300/60 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
                    <strong>Dev note:</strong> reCAPTCHA may not load or validate
                    on <code>localhost</code> with the default key. Set{" "}
                    <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> in{" "}
                    <code>.env.local</code> and allow <code>localhost</code> in
                    the reCAPTCHA admin console (or use a test key). Production is
                    unaffected.
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={isSubmitting || !recaptchaToken}
                className="w-full gap-2 shadow-lg shadow-orange-500/25"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Submit
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </Section>

      <Section className="contact-faq-section border-b border-[color:var(--card-border)]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
            Quick Answers
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="premium-card premium-card-light premium-card-hover relative overflow-hidden rounded-3xl p-6 lg:p-8"
            >
              <span
                className="absolute inset-y-0 left-0 w-1 premium-accent-vertical"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-slate-950">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full border border-blue-200 bg-blue-50 text-2xl text-blue-700 transition hover:bg-blue-100"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sales@bookdataz.com"
            className="grid h-12 w-12 place-items-center rounded-full border border-orange-200 bg-orange-50 text-2xl text-orange-600 transition hover:bg-orange-100"
            aria-label="Email"
          >
            <SiGmail />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Contactpage;

// components/ReCaptcha.js
"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptchaComponent({ onVerify }) {
  const siteKey = "6LdXvz8rAAAAAFUwOq795n-xp1c09z8aEZkp72WG"; // Replace with your actual key

  return (
    <div className="py-2">
      <ReCAPTCHA sitekey={siteKey} onChange={onVerify} />
    </div>
  );
}

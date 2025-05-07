"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "none");
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-10 md:right-10 z-50 bg-customBlue text-white px-6 py-5 rounded-lg shadow-lg">
      {!showSettings ? (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <p className="text-sm md:text-base md:max-w-[60%] leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized ads, and analyze site traffic.
          </p>
          <div className="flex flex-wrap gap-3 justify-end">
            <button
              className="bg-white text-customBlue px-4 py-2 rounded font-semibold hover:bg-gray-100"
              onClick={handleRejectAll}
            >
              Reject All
            </button>
            <button
              className="bg-white text-customBlue px-4 py-2 rounded font-semibold hover:bg-gray-100"
              onClick={() => setShowSettings(true)}
            >
              Manage Preferences
            </button>
            <button
              className="bg-white text-customBlue px-4 py-2 rounded font-semibold hover:bg-gray-100"
              onClick={handleAcceptAll}
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="font-semibold">Choose your cookie preferences:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    analytics: !prev.analytics,
                  }))
                }
              />
              Analytics Cookies
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    marketing: !prev.marketing,
                  }))
                }
              />
              Marketing Cookies
            </label>
          </div>
          <div className="flex flex-wrap gap-3 justify-end pt-2">
            <button
              className="bg-white text-customBlue px-4 py-2 rounded font-semibold hover:bg-gray-100"
              onClick={() => setShowSettings(false)}
            >
              Back
            </button>
            <button
              className="bg-white text-customBlue px-4 py-2 rounded font-semibold hover:bg-gray-100"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

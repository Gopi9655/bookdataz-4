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
    <div className="fixed bottom-4 left-4 right-20 z-50 rounded-3xl border border-blue-300/20 bg-[#071a2d]/[0.98] px-5 py-5 text-white shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:left-8 md:right-8 md:px-6">
      {!showSettings ? (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <p className="text-sm leading-relaxed text-slate-200 md:max-w-[55%] md:text-base">
            We use cookies to enhance your browsing experience, serve personalized ads, and analyze site traffic.
          </p>
          <div className="flex flex-wrap gap-3 justify-end">
            <button
              className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              onClick={handleRejectAll}
            >
              Reject All
            </button>
            <button
              className="rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-blue-400/20"
              onClick={() => setShowSettings(true)}
            >
              Manage Preferences
            </button>
            <button
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
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
              className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              onClick={() => setShowSettings(false)}
            >
              Back
            </button>
            <button
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
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

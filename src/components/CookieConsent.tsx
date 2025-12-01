'use client';

import React, { useEffect, useState } from "react";
import "./CookieConsent.css";

const STORAGE_KEY = "beatbox-cookie-consent";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div>
        <p className="font-semibold text-white">Cookies & analytics</p>
        <p className="text-sm text-slate-200">
          We use minimal cookies to improve experience and optional analytics when enabled.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="btn ghost" onClick={() => setVisible(false)}>
          Dismiss
        </button>
        <button className="btn primary" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

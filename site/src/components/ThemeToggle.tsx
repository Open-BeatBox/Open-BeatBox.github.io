"use client";

import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

type Theme = "dark" | "light";

const STORAGE_KEY = "beatbox-theme";

function preferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = preferredTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span aria-hidden>{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
};

export default ThemeToggle;

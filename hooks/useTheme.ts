"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * The `.dark` class itself is already set pre-hydration by the inline script
 * in app/layout.tsx (avoids a flash of the wrong theme) — this hook just
 * syncs React state to that existing class rather than re-deciding it, then
 * lets the toggle button flip both the class and the persisted choice.
 */
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return { theme, toggleTheme };
}

"use client";

import useTheme from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "dark"}
      className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full text-ink transition-colors duration-300 hover:bg-ink/8"
    >
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="currentColor"
        aria-hidden
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        <path d="M19.3 2.6l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z" />
        <path d="M16.2 8.4l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" />
      </svg>
    </button>
  );
}

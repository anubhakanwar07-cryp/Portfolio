"use client";

import useTheme from "@/hooks/useTheme";

const EASE_PREMIUM = "cubic-bezier(0.22, 1, 0.36, 1)";
const ICON_TRANSITION = `opacity 350ms ${EASE_PREMIUM}, transform 350ms ${EASE_PREMIUM}`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="relative flex items-center justify-center w-9 h-9 shrink-0 rounded-full text-ink transition-colors duration-300 hover:bg-ink/8"
    >
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="currentColor"
        aria-hidden
        className="absolute"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(90deg) scale(0.4)" : "rotate(0deg) scale(1)",
          transition: ICON_TRANSITION,
        }}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        <path d="M19.3 2.6l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z" />
        <path d="M16.2 8.4l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden
        className="absolute"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.4)",
          transition: ICON_TRANSITION,
        }}
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4" y1="12" x2="2" y2="12" />
        <line x1="22" y1="12" x2="20" y2="12" />
        <line x1="5.6" y1="5.6" x2="4.2" y2="4.2" />
        <line x1="19.8" y1="19.8" x2="18.4" y2="18.4" />
        <line x1="5.6" y1="18.4" x2="4.2" y2="19.8" />
        <line x1="19.8" y1="4.2" x2="18.4" y2="5.6" />
      </svg>
    </button>
  );
}

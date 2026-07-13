"use client";

import { useEffect, useState } from "react";

/**
 * The site's global CSS already neutralizes CSS transitions/keyframes under
 * prefers-reduced-motion. This hook is for JS-driven motion (Lenis, ambient
 * loops, magnetic buttons, cursor) that the CSS override can't reach.
 */
export default function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

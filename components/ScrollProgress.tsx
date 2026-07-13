"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setPct(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[3px] w-full origin-left transition-transform duration-100 ease-linear"
      style={{
        transform: `scaleX(${pct})`,
        background:
          "linear-gradient(90deg, var(--color-terracotta), var(--color-terracotta-dark))",
      }}
    />
  );
}

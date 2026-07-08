"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: "section" | "div";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/** Fades/slides `children` in the first time this element crosses 12% into the viewport. */
export default function Reveal({
  as = "div",
  id,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      id={id}
      data-inview={inView}
      className={className}
    >
      {children}
    </Tag>
  );
}

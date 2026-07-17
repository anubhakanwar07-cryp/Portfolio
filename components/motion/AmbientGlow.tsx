"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { LOOP_AMBIENT_S } from "@/lib/motion";

type AmbientGlowProps = {
  /** hero/footer: two large drifting corner blobs sized for a full section.
   *  card: a single, smaller bloom meant to sit behind a project frame,
   *  its visibility controlled by the parent (e.g. group-hover:opacity-100). */
  variant?: "hero" | "card" | "footer";
  className?: string;
};

/** A felt-not-seen radial-light layer. Always pointer-events-none/aria-hidden
 * and absolutely positioned, so it can never shift layout or intercept input. */
export default function AmbientGlow({
  variant = "hero",
  className = "",
}: AmbientGlowProps) {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Each instance's `repeat: Infinity` loop would otherwise keep running via
  // Motion's own scheduler for the life of the page, regardless of scroll
  // position — with up to 6 concurrent instances across the homepage, most
  // of that is wasted work off-screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animating = !reducedMotion && inView;
  const loop = animating
    ? { duration: LOOP_AMBIENT_S, repeat: Infinity, ease: "easeInOut" as const }
    : undefined;

  if (variant === "card") {
    return (
      <motion.div
        ref={containerRef}
        aria-hidden
        className={`pointer-events-none absolute rounded-[32px] ${className}`}
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,83,0.16), transparent 70%)",
        }}
        animate={animating ? { scale: [1, 1.06, 1] } : undefined}
        transition={loop}
      />
    );
  }

  const inkAlpha = variant === "footer" ? 0 : 0.03;
  const terracottaAlpha = variant === "footer" ? 0.09 : 0.07;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute w-[560px] h-[560px] rounded-full -top-24 left-[8%]"
        style={{
          background: `radial-gradient(circle, rgba(247,111,83,${terracottaAlpha}), transparent 70%)`,
        }}
        animate={animating ? { x: [0, 24, -12, 0], y: [0, -18, 10, 0] } : undefined}
        transition={loop}
      />
      {inkAlpha > 0 && (
        <motion.div
          className="absolute w-[480px] h-[480px] rounded-full -bottom-32 right-[6%]"
          style={{
            background: `radial-gradient(circle, rgba(32,32,32,${inkAlpha}), transparent 70%)`,
          }}
          animate={animating ? { x: [0, -20, 12, 0], y: [0, 16, -10, 0] } : undefined}
          transition={loop}
        />
      )}
    </div>
  );
}

"use client";

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
  const loop = reducedMotion
    ? undefined
    : { duration: LOOP_AMBIENT_S, repeat: Infinity, ease: "easeInOut" as const };

  if (variant === "card") {
    return (
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute rounded-[32px] ${className}`}
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,83,0.16), transparent 70%)",
        }}
        animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={loop}
      />
    );
  }

  const inkAlpha = variant === "footer" ? 0 : 0.03;
  const terracottaAlpha = variant === "footer" ? 0.09 : 0.07;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute w-[560px] h-[560px] rounded-full -top-24 left-[8%]"
        style={{
          background: `radial-gradient(circle, rgba(247,111,83,${terracottaAlpha}), transparent 70%)`,
        }}
        animate={reducedMotion ? undefined : { x: [0, 24, -12, 0], y: [0, -18, 10, 0] }}
        transition={loop}
      />
      {inkAlpha > 0 && (
        <motion.div
          className="absolute w-[480px] h-[480px] rounded-full -bottom-32 right-[6%]"
          style={{
            background: `radial-gradient(circle, rgba(32,32,32,${inkAlpha}), transparent 70%)`,
          }}
          animate={reducedMotion ? undefined : { x: [0, -20, 12, 0], y: [0, 16, -10, 0] }}
          transition={loop}
        />
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

/** Flip to false to remove the cursor follower instantly, with no other changes. */
const CURSOR_FOLLOWER_ENABLED = true;

/**
 * A small trailing dot, mounted once globally. Deliberately the simplest,
 * most conservative version — no per-element hover-scale heuristics — since
 * this is the item most likely to read as a gimmick if overdone.
 */
export default function CursorFollower() {
  const reducedMotion = usePrefersReducedMotion();
  const [canShow, setCanShow] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 50, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 50, mass: 0.5 });

  useEffect(() => {
    if (!CURSOR_FOLLOWER_ENABLED || reducedMotion) {
      setCanShow(false);
      return;
    }
    setCanShow(window.matchMedia("(pointer: fine)").matches);
  }, [reducedMotion]);

  useEffect(() => {
    if (!canShow) return;
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 4);
      y.set(e.clientY - 4);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [canShow, x, y]);

  if (!canShow) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[200] w-2 h-2 rounded-full bg-ink"
      style={{ x: springX, y: springY }}
    />
  );
}

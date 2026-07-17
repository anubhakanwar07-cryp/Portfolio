"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { EASE_PREMIUM, DUR_HOVER_MS } from "@/lib/motion";

type MagneticButtonProps = Omit<
  React.ComponentPropsWithoutRef<"a">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> & {
  /** Max pixel offset the button can be pulled toward the pointer. */
  strength?: number;
};

/**
 * Wraps an existing <a> with a subtle pointer-follow drift, released with a
 * tween (not a spring — no bounce/overshoot, per the site's calm-motion rule).
 * Renders as a plain anchor (identical markup to before) under reduced motion
 * or on touch/coarse pointers, where "magnetic" hover has no meaning — and
 * defaults to that plain render on first paint everywhere to avoid an
 * SSR/client hydration mismatch, upgrading only after mount.
 */
export default function MagneticButton({
  strength = 10,
  className,
  children,
  ...anchorProps
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [canTrack, setCanTrack] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setCanTrack(false);
      return;
    }
    setCanTrack(window.matchMedia("(pointer: fine)").matches);
  }, [reducedMotion]);

  if (!canTrack) {
    return (
      <a ref={ref} className={className} {...anchorProps}>
        {children}
      </a>
    );
  }

  // The rect is cached once on hover-enter rather than re-read on every
  // mousemove — the button's position doesn't change mid-hover, so repeating
  // that layout read on every pixel of pointer travel is pure waste. The
  // resulting setState is also batched to at most once per animation frame
  // (mousemove can fire well above 60Hz) rather than on every raw event.
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const scheduleOffset = () => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      setOffset(pendingRef.current);
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = rectRef.current ?? e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    pendingRef.current = {
      x: Math.max(-strength, Math.min(strength, relX * 0.3)),
      y: Math.max(-strength, Math.min(strength, relY * 0.3)),
    };
    scheduleOffset();
  };

  const handleMouseLeave = () => {
    pendingRef.current = { x: 0, y: 0 };
    scheduleOffset();
  };

  return (
    <motion.a
      ref={ref}
      className={className}
      animate={{ x: offset.x, y: offset.y }}
      transition={{
        type: "tween",
        duration: DUR_HOVER_MS / 1000,
        ease: EASE_PREMIUM,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...anchorProps}
    >
      {children}
    </motion.a>
  );
}

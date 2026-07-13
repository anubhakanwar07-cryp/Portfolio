"use client";

import { ReactLenis } from "lenis/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

/**
 * Wraps the whole app in a global Lenis instance for weighted smooth scroll.
 * Skipped entirely under prefers-reduced-motion — Lenis's own rAF loop isn't
 * reached by the site's CSS transition-duration override.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

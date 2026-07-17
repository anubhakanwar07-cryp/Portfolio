"use client";

import { useEffect, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type TypewriterLineProps = {
  text: string;
  className?: string;
  /** ms before the line starts rising into place and typing begins */
  delayMs?: number;
  /** ms per character while typing */
  charMs?: number;
};

/** Rises into place like the other hero lines, then types itself out character
 * by character with a blinking caret — instead of just fading in as static text. */
export default function TypewriterLine({
  text,
  className = "",
  delayMs = 200,
  charMs = 45,
}: TypewriterLineProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      setCount(text.length);
      return;
    }
    const t = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(t);
  }, [reducedMotion, delayMs, text.length]);

  useEffect(() => {
    if (reducedMotion || !visible || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), charMs);
    return () => clearTimeout(t);
  }, [reducedMotion, visible, count, text.length, charMs]);

  const done = count >= text.length;

  return (
    <span
      aria-label={text}
      className={`block transition-all duration-[700ms] ease-[var(--ease-premium)] ${
        visible || reducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      <span aria-hidden="true">
        {reducedMotion ? text : text.slice(0, count)}
        {!reducedMotion && (
          <span
            className={`inline-block w-[2px] ml-[3px] align-middle bg-current ${
              done ? "animate-[caret-blink_1s_steps(1)_infinite]" : ""
            }`}
            style={{ height: "0.85em" }}
          />
        )}
      </span>
    </span>
  );
}

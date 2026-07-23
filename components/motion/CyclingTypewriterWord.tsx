"use client";

import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type CyclingTypewriterWordProps = {
  words: string[];
  className?: string;
  /** ms per character while typing */
  charMs?: number;
  /** ms per character while deleting */
  deleteMs?: number;
  /** ms the fully-typed word holds before deleting */
  holdMs?: number;
  /** ms before the first word starts typing */
  startDelayMs?: number;
};

/** Types a word out, holds it, backspaces it, then cycles to the next word in
 * the list — looping forever. Trailing text after this component sits at a
 * natural width — it nudges slightly as shorter/longer words cycle through,
 * rather than reserving dead space for the widest word in the list. */
export default function CyclingTypewriterWord({
  words,
  className = "",
  charMs = 45,
  deleteMs = 30,
  holdMs = 1700,
  startDelayMs = 0,
}: CyclingTypewriterWordProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [count, setCount] = useState(reducedMotion ? words[0].length : 0);
  const [holding, setHolding] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reducedMotion) return;

    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };

    const typeWord = (wi: number, delay: number) => {
      const word = words[wi];
      let c = 0;
      const step = () => {
        c += 1;
        setCount(c);
        if (c < word.length) {
          schedule(step, charMs);
        } else {
          setHolding(true);
          schedule(() => {
            setHolding(false);
            deleteWord(wi);
          }, holdMs);
        }
      };
      schedule(step, delay);
    };

    const deleteWord = (wi: number) => {
      const word = words[wi];
      let c = word.length;
      const step = () => {
        c -= 1;
        setCount(c);
        if (c > 0) {
          schedule(step, deleteMs);
        } else {
          const next = (wi + 1) % words.length;
          setWordIndex(next);
          schedule(() => typeWord(next, 0), 150);
        }
      };
      schedule(step, deleteMs);
    };

    typeWord(0, startDelayMs);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  const display = reducedMotion ? words[0] : words[wordIndex].slice(0, count);

  return (
    <span className={`inline-block whitespace-nowrap align-baseline ${className}`}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{words.join(", ")}</span>
      {!reducedMotion && (
        <span
          aria-hidden="true"
          className={`inline-block w-[2px] ml-[2px] align-middle bg-current ${
            holding ? "animate-[caret-blink_1s_steps(1)_infinite]" : ""
          }`}
          style={{ height: "0.85em" }}
        />
      )}
    </span>
  );
}

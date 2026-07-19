"use client";

import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

// Same copy, colors (from rca_casestudy.html's own --ink/--alert/--gain vars),
// and bar proportions as the original 2.webm export — recreated as live
// elements instead of baked video pixels so the title can type itself out
// and the whole sequence can be paced to feel as unhurried as EmStudio's.
const TITLE_SEGMENTS = [
  { text: "More ", red: false },
  { text: "leads.", red: true },
  { text: " Fewer ", red: false },
  { text: "students.", red: true },
];
const TITLE_CHARS = TITLE_SEGMENTS.flatMap((seg) =>
  [...seg.text].map((char) => ({ char, red: seg.red })),
);
const SUBHEAD =
  "The year the funnel filled up — and the business slowed down. A root cause investigation.";
const BARS = [
  { ratio: 1.0, color: "#1c7d4a" },
  { ratio: 0.657, color: "#201d18" },
  { ratio: 0.393, color: "#201d18" },
  { ratio: 0.314, color: "#c73a2c" },
  { ratio: 0.393, color: "#201d18" },
  { ratio: 0.862, color: "#201d18" },
];

const CHAR_MS = 42;

// Bars/subhead/stats are deliberately timed to start *during* typing, not
// after — so these are fixed offsets from cycle-start (`active` becoming
// true), which fires at a precise instant. That's safe here because none of
// these three depend on knowing when typing finishes; only the post-typing
// hold below still anchors to the real `doneTyping` event, since typing's
// own duration is variable (the char-by-char loop runs slower than its
// nominal interval under real render overhead).
const BARS_START = 300;
const SUBHEAD_DELAY = 600;
const STATS_DELAY = 900;
const BAR_STAGGER = 90;
const BAR_DURATION = 550;
const POST_TYPE_HOLD_MS = 1200;
const FADE_MS = 550;
const GAP_MS = 250;

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Visibility gate: mounts/unmounts the actual animated cycle exactly when
 * it enters/leaves the viewport, so it always starts fresh from the first
 * frame right as the section comes into view — rather than pre-starting
 * early and being caught mid-cycle (or already fully played out) by the
 * time it's actually visible. Unmounting also cancels every pending timer
 * below for free, via each effect's own existing cleanup function — no
 * separate pause/resume bookkeeping needed. */
export default function RcaPreview({ className }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {isVisible && <RcaPreviewCycle className="w-full h-full" />}
    </div>
  );
}

function RcaPreviewCycle({ className }: { className?: string }) {
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  // Mounting is itself the visibility signal (see RcaPreview above), so the
  // very first cycle can just start immediately rather than waiting on its
  // own intersection check.
  useEffect(() => {
    if (reducedMotion) return;
    setActive(true);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setTypedCount(TITLE_CHARS.length);
      return;
    }
    if (!active || typedCount >= TITLE_CHARS.length) return;
    const t = setTimeout(() => setTypedCount((c) => c + 1), CHAR_MS);
    return () => clearTimeout(t);
  }, [active, typedCount, reducedMotion]);

  const doneTyping = typedCount >= TITLE_CHARS.length;

  // Hold -> fade -> reset -> retype, all timed from the real typing-complete
  // moment, so this always lands correctly regardless of how long typing
  // itself actually took. The container fade-back-in is deliberately held
  // off until well after `active` flips false — otherwise it reveals the
  // old subhead/stats/bars mid-shrink instead of already-hidden, briefly
  // overlapping with the new title typing over top of them.
  useEffect(() => {
    if (!doneTyping || reducedMotion) return;
    const fadeTimer = setTimeout(() => setFading(true), POST_TYPE_HOLD_MS);
    const hideTimer = setTimeout(
      () => setActive(false),
      POST_TYPE_HOLD_MS + FADE_MS,
    );
    const restartTimer = setTimeout(
      () => {
        setTypedCount(0);
        setActive(true);
        setFading(false);
      },
      POST_TYPE_HOLD_MS + FADE_MS + BAR_DURATION + GAP_MS,
    );
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(restartTimer);
    };
  }, [doneTyping, reducedMotion]);

  const shown = reducedMotion || active;
  const typed = TITLE_CHARS.slice(0, reducedMotion ? TITLE_CHARS.length : typedCount);
  const delayFor = (ms: number) => (active && !reducedMotion ? `${ms}ms` : "0ms");

  return (
    <div
      className={`relative flex flex-col justify-center px-[6%] pb-[5%] pt-[5%] transition-opacity ${className ?? ""}`}
      style={{
        background: "#fdf3f2",
        opacity: reducedMotion || !fading ? 1 : 0,
        transitionDuration: `${FADE_MS}ms`,
        transitionTimingFunction: EASE,
      }}
    >
      <h3
        className="font-display font-bold leading-[1.05] text-center"
        style={{ fontSize: "clamp(1.1rem, 3.2vw, 2.4rem)", color: "#201d18" }}
      >
        {typed.map((c, i) => (
          <span key={i} style={{ color: c.red ? "#c73a2c" : "#201d18" }}>
            {c.char}
          </span>
        ))}
        {!reducedMotion && active && !doneTyping && (
          <span
            aria-hidden
            className="inline-block w-[2px] ml-[2px] align-middle"
            style={{ height: "0.85em", background: "#201d18" }}
          />
        )}
      </h3>

      <p
        className="mt-2 text-center transition-all"
        style={{
          fontSize: "clamp(0.65rem, 1.3vw, 0.95rem)",
          color: "#55504a",
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(8px)",
          transitionDuration: "550ms",
          transitionTimingFunction: EASE,
          transitionDelay: delayFor(SUBHEAD_DELAY),
        }}
      >
        {SUBHEAD}
      </p>

      <div
        className="mt-4 flex items-center justify-center gap-4 font-display font-bold transition-all"
        style={{
          fontSize: "clamp(1rem, 2.6vw, 1.9rem)",
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(8px)",
          transitionDuration: "500ms",
          transitionTimingFunction: EASE,
          transitionDelay: delayFor(STATS_DELAY),
        }}
      >
        <span style={{ color: "#201d18" }}>▲85.7%</span>
        <span style={{ width: 1, height: "1.6em", background: "#d8d2c6" }} />
        <span style={{ color: "#c73a2c" }}>▼23.7%</span>
      </div>

      <div className="mt-6 flex items-end gap-[3%]" style={{ height: "46%" }}>
        {BARS.map((bar, i) => (
          <div key={i} className="flex-1 h-full flex items-end">
            <div
              className="w-full transition-transform"
              style={{
                height: "100%",
                background: bar.color,
                transformOrigin: "bottom",
                transform: `scaleY(${shown ? bar.ratio : 0})`,
                transitionDuration: `${BAR_DURATION}ms`,
                transitionTimingFunction: EASE,
                transitionDelay: delayFor(BARS_START + i * BAR_STAGGER),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

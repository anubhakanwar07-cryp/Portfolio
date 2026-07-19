"use client";

import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type VideoPreviewProps = {
  src: string;
  className?: string;
};

/** Loads a preview video only once it scrolls into view, and pauses it
 * whenever it's scrolled back out so it isn't decoding in the background.
 * Restarts from the first frame on every entry (rather than resuming wherever
 * it was paused) and triggers at the actual viewport edge rather than a
 * pre-emptive margin, so the clip is always seen building from the start as
 * the section comes into view, never caught already mid-way or looped. */
export default function VideoPreview({ src, className }: VideoPreviewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
          }
          const video = videoRef.current;
          if (!video || reducedMotion) return;
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef} className={className}>
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay={!reducedMotion}
        />
      )}
    </div>
  );
}

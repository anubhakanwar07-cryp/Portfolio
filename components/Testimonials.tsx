"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  accent: string;
  context: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Add a short quote here about what it was like working with you —",
    accent: "the specific line they'd actually say, highlighted like this.",
    context: "Optional: one line on the project or context this quote is from.",
    name: "[Name]",
    role: "[Role · Company]",
  },
  {
    quote:
      "A second placeholder slide, so the carousel has something to cycle through —",
    accent: "swap this out the moment you have a real one.",
    context: "Optional supporting context for this quote.",
    name: "[Name]",
    role: "[Role · Company]",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const go = (i: number) =>
    setActive((i + testimonials.length) % testimonials.length);

  return (
    <Reveal
      as="section"
      id="testimonials"
      className="reveal bg-ink text-cream py-[100px]"
    >
      <div className="max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-[#9A9384]">
          WHAT PEOPLE SAY
        </div>
        <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] max-w-[900px] mb-16">
          Words from{" "}
          <span className="font-accent italic font-bold text-terracotta">
            the people
          </span>{" "}
          I&apos;ve shipped with.
        </h2>

        <div className="max-w-[900px] min-h-[180px]">
          <p className="text-[clamp(1.4rem,3vw,2rem)] leading-[1.35] font-medium mb-6">
            &quot;{t.quote}{" "}
            <span className="font-serif-accent italic font-medium text-terracotta">
              {t.accent}
            </span>
            &quot;
          </p>
          <p className="text-[#A9A294] text-base max-w-[640px] mb-9">
            {t.context}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full border-[1.5px] border-dashed border-[#5C5646] text-[0.85rem] text-[#8B857A] shrink-0">
              ?
            </div>
            <div>
              <div className="font-bold text-base">{t.name}</div>
              <div className="text-[#A9A294] text-[0.9rem]">{t.role}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7 mt-14 flex-wrap">
          <div className="text-[0.85rem] text-[#8B857A] tracking-[0.04em]">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-[22px] bg-cream" : "w-2 bg-[#4A4638]"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2.5 ml-auto max-[640px]:ml-0">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(active - 1)}
              className="w-10 h-10 rounded-full border-[1.5px] border-[#4A4638] text-cream text-lg transition-colors hover:bg-white/8 hover:border-[#8B857A]"
            >
              ‹
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(active + 1)}
              className="w-10 h-10 rounded-full border-[1.5px] border-[#4A4638] text-cream text-lg transition-colors hover:bg-white/8 hover:border-[#8B857A]"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

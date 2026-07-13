"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Category = "all" | "ai" | "analytics" | "0to1";

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI Products" },
  { key: "analytics", label: "Analytics" },
  { key: "0to1", label: "0→1 Strategy" },
];

const cards: {
  cat: Exclude<Category, "all">;
  bar: string;
  eyebrow: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}[] = [
  {
    cat: "ai",
    bar: "bg-[#1c9350]",
    eyebrow: "AI Product · PM-led",
    title: "EVA",
    desc: "An AI screening & interview platform — MCQ test plus a live voice interview — that screens applicants before admission.",
    tags: ["Voice AI", "Admissions"],
    href: "/work/eva",
  },
  {
    cat: "ai",
    bar: "bg-[#6d3ae8]",
    eyebrow: "AI Product · Solo Build",
    title: "PitchMate",
    desc: "An AI sales-training platform that role-plays real objections so reps rehearse before the real call.",
    tags: ["AI Roleplay", "Sales Enablement"],
    href: "/work/pitchmate",
  },
  {
    cat: "ai",
    bar: "bg-[#2140c9]",
    eyebrow: "Platform Product · PM-led",
    title: "EVA 2.0",
    desc: "The placement operating system that runs after EVA admits a student — an ops console for admin, a self-serve hub for students.",
    tags: ["Placements", "Two-sided platform"],
    href: "/work/eva2",
  },
  {
    cat: "analytics",
    bar: "bg-[#3d8bf2]",
    eyebrow: "Analytics · AI data product",
    title: "Socrates",
    desc: "Two internal AI products in one — natural-language querying over the database, and behavioural clustering on sales calls.",
    tags: ["NL-to-SQL", "Clustering"],
    href: "/work/socrates",
  },
  {
    cat: "0to1",
    bar: "bg-[#0e6e7e]",
    eyebrow: "0→1 Strategy",
    title: "VR Anatomy Sim",
    desc: "Scoping, BRD, cost analysis, and delivery timeline for Emverse's VR anatomy simulation — Meta headset and web access paths.",
    tags: ["VR", "Rollout"],
    href: "/work/vr-anatomy",
  },
];

export default function MoreWork() {
  const [active, setActive] = useState<Category>("all");

  return (
    <Reveal
      as="section"
      id="more-work"
      className="reveal py-[100px] bg-cream-alt border-t border-b border-line"
    >
      <div className="max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-muted">
          THE REST
        </div>
        <h2 className="text-[clamp(2.1rem,4.6vw,3.4rem)] mb-[34px]">
          More work, by type.
        </h2>

        <div className="flex gap-2.5 flex-wrap mb-11" role="tablist">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2.5 rounded-full border text-[0.88rem] font-semibold transition-all hover:-translate-y-0.5 ${
                active === f.key
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent border-black/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {cards.map((card) => {
            const visible = active === "all" || active === card.cat;
            return (
              <div
                key={card.title}
                className={`group relative rounded-[18px] bg-white border border-line overflow-hidden flex flex-col transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:border-terracotta/25 hover:shadow-[0_18px_36px_-20px_rgba(24,21,15,0.35)] ${
                  visible ? "" : "hidden"
                }`}
              >
                <div
                  className={`h-2 w-full transition-all group-hover:h-3 ${card.bar}`}
                />
                <div className="pt-[26px] px-6 pb-7 flex flex-col grow">
                  <div className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-muted mb-2.5">
                    {card.eyebrow}
                  </div>
                  <h3 className="font-display font-bold text-[1.3rem] mb-3 leading-[1.15]">
                    {card.title}
                  </h3>
                  <p className="text-ink-soft text-[0.95rem] grow mb-[18px]">
                    {card.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.7rem] font-semibold tracking-[0.04em] px-3 py-1.5 rounded-full bg-cream-alt text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={card.href}
                    className="font-bold text-[0.88rem] text-terracotta-dark inline-flex items-center gap-1.5 hover:underline transition-colors duration-300 hover:text-terracotta"
                  >
                    Read case study{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

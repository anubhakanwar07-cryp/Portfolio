"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Selected Work" },
  { href: "#about", label: "About Me" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[rgba(242,240,227,0.92)] backdrop-blur-[8px] border-b border-line transition-shadow duration-[250ms] ${
        scrolled ? "shadow-[0_8px_24px_-18px_rgba(24,21,15,0.45)]" : ""
      }`}
    >
      <div className="relative flex items-center max-w-[1240px] mx-auto px-10 py-5 max-[480px]:px-5 max-[480px]:py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full border border-ink font-display text-[0.82rem] transition-all duration-300 group-hover:bg-ink group-hover:text-cream group-hover:-rotate-[14deg]">
            AK
          </span>
          <span className="font-sans font-medium text-[1.05rem] tracking-[0.04em]">
            ANUBHA KANWAR
          </span>
        </a>

        <nav
          className={`font-medium text-[0.95rem] ml-auto mr-10 max-[860px]:absolute max-[860px]:top-full max-[860px]:left-0 max-[860px]:right-0 max-[860px]:mr-0 max-[860px]:flex-col max-[860px]:bg-cream max-[860px]:border-b max-[860px]:border-line max-[860px]:overflow-hidden flex gap-9 max-[860px]:gap-0 ${
            open ? "max-[860px]:max-h-[280px]" : "max-[860px]:max-h-0"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link opacity-[0.85] hover:opacity-100 hover:text-terracotta transition-opacity max-[860px]:opacity-100 max-[860px]:px-10 max-[860px]:py-4 max-[860px]:border-t max-[860px]:border-line max-[860px]:after:hidden"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={() => setOpen(false)}
            className="hidden max-[860px]:block max-[860px]:px-10 max-[860px]:py-4 max-[860px]:border-t max-[860px]:border-line font-semibold text-terracotta-dark"
          >
            Contact ↗
          </a>
        </nav>

        <div className="flex items-center gap-[18px] max-[860px]:ml-auto">
          <a
            href="#footer"
            className="max-[860px]:hidden inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-semibold text-[0.95rem] whitespace-nowrap bg-ink text-cream transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark"
          >
            Contact ↗
          </a>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="hidden max-[860px]:block relative w-[34px] h-[34px] shrink-0"
          >
            <span
              className={`absolute left-[5px] right-[5px] h-0.5 bg-ink rounded-sm transition-all duration-[250ms] ${
                open ? "top-[17px] rotate-45" : "top-[11px]"
              }`}
            />
            <span
              className={`absolute left-[5px] right-[5px] top-[17px] h-0.5 bg-ink rounded-sm transition-opacity duration-[250ms] ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-[5px] right-[5px] h-0.5 bg-ink rounded-sm transition-all duration-[250ms] ${
                open ? "top-[17px] -rotate-45" : "top-[23px]"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

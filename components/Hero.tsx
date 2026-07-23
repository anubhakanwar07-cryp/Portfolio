import AmbientGlow from "./motion/AmbientGlow";
import MagneticButton from "./motion/MagneticButton";
import CyclingTypewriterWord from "./motion/CyclingTypewriterWord";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center min-h-[100svh] py-16 bg-hero border-b border-line"
    >
      <AmbientGlow variant="hero" className="-z-10" />
      <div
        aria-hidden
        className="dot-grid-accent pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, color-mix(in srgb, var(--color-ink) 4%, transparent) 100%)",
        }}
      />
      <div className="w-full max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="relative z-[1] max-w-[1140px]">
          <h1 className="text-[clamp(2.4rem,6.9vw,5.1rem)] leading-[1.15] text-ink">
            <span className="block opacity-0 animate-line-up [animation-delay:50ms]">
              I prototype fast.
            </span>
            <span className="block italic text-terracotta opacity-0 animate-line-up [animation-delay:450ms]">
              AI does the heavy lifting.
            </span>
            <span className="block opacity-0 animate-line-up [animation-delay:850ms]">
              I&apos;m more interested in the{" "}
              <CyclingTypewriterWord
                words={["problem", "friction", "churn", "drop-off", "habit", "gap"]}
                className="text-terracotta"
                startDelayMs={1200}
              />
              .
            </span>
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-[1.5fr_1fr] gap-[60px] items-start max-[860px]:grid-cols-1 max-[860px]:gap-8">
          <div>
            <p className="text-[1.15rem] text-ink-soft max-w-[620px] opacity-0 animate-line-up [animation-delay:500ms]">
              APM at Emversity, trained in biosciences at IIT Roorkee — an
              unusual route into product, but one that taught me to sit with
              ambiguity before reaching for a solution. I&apos;ve{" "}
              <em className="font-serif-accent italic font-medium text-terracotta-dark">
                shipped tools myself, end to end
              </em>
              , and that&apos;s changed what I look for in a problem before I
              commit to it.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <span className="inline-block opacity-0 animate-line-up [animation-delay:600ms]">
                <MagneticButton
                  href="#footer"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-semibold text-[0.95rem] whitespace-nowrap bg-[#1e1c17] text-white border border-white/15 transition-colors hover:bg-terracotta-dark"
                >
                  Contact me ↗︎
                </MagneticButton>
              </span>
              <span className="inline-block opacity-0 animate-line-up [animation-delay:680ms]">
                <MagneticButton
                  href="https://www.linkedin.com/in/anubha-kanwar-98631b227/?skipRedirect=true"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-semibold text-[0.95rem] whitespace-nowrap border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  View LinkedIn ↗︎
                </MagneticButton>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[22px] pl-8 border-l border-line max-[860px]:pl-0 max-[860px]:pt-6 max-[860px]:border-l-0 max-[860px]:border-t opacity-0 animate-line-up [animation-delay:500ms]">
            <div>
              <span className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-muted mb-1.5">
                Based in
              </span>
              <span className="block text-base">Bengaluru, India</span>
            </div>
            <div>
              <span className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-muted mb-1.5">
                Available for
              </span>
              <span className="block text-base">
                AI-native PM roles · Series A+ · Founder-led teams · Remote or
                Bengaluru
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

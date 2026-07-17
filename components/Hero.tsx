import AmbientGlow from "./motion/AmbientGlow";
import MagneticButton from "./motion/MagneticButton";
import TypewriterLine from "./motion/TypewriterLine";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center min-h-[100svh] py-16 bg-cream"
    >
      <AmbientGlow variant="hero" className="-z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(32,32,32,0.04) 100%)",
        }}
      />
      <div className="w-full max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="relative z-[1] max-w-[900px]">
          <h1 className="text-[clamp(2.9rem,7vw,5.6rem)]">
            <span className="block opacity-0 animate-line-up [animation-delay:50ms]">
              I write PRDs.
            </span>
            <TypewriterLine
              text="Then I go build the thing."
              delayMs={200}
              charMs={45}
              className="italic text-terracotta"
            />
            <span className="block opacity-0 animate-line-up [animation-delay:1450ms] text-[0.5em] mt-1.5">
              Because specs don&apos;t ship — products do.
            </span>
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-[1.5fr_1fr] gap-[60px] items-start max-[860px]:grid-cols-1 max-[860px]:gap-8">
          <div>
            <p className="text-[1.15rem] text-ink-soft max-w-[620px] opacity-0 animate-line-up [animation-delay:500ms]">
              APM at Emversity, trained in biosciences at IIT Roorkee, now
              building AI-native products end to end. I&apos;ve personally{" "}
              <em className="font-serif-accent italic font-medium text-terracotta-dark">
                coded and shipped two live tools
              </em>{" "}
              with no formal engineering background — just Claude, GPT, and
              Cursor.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <span className="inline-block opacity-0 animate-line-up [animation-delay:600ms]">
                <MagneticButton
                  href="#footer"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-semibold text-[0.95rem] whitespace-nowrap bg-ink text-cream transition-colors hover:bg-terracotta-dark"
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

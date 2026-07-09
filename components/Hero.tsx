export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center min-h-[100svh] py-16 bg-cream"
    >
      <div className="w-full max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="relative z-[1] max-w-[900px]">
          <h1 className="text-[clamp(2.9rem,7vw,5.6rem)]">
            <span className="block opacity-0 animate-line-up [animation-delay:50ms]">
              I write PRDs.
            </span>
            <span className="block opacity-0 animate-line-up [animation-delay:200ms] italic text-terracotta">
              Then I go build the thing.
            </span>
            <span className="block opacity-0 animate-line-up [animation-delay:350ms] text-[0.5em] mt-1.5">
              Because specs don&apos;t ship — products do.
            </span>
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-[1.5fr_1fr] gap-[60px] items-start opacity-0 animate-line-up [animation-delay:500ms] max-[860px]:grid-cols-1 max-[860px]:gap-8">
          <div>
            <p className="text-[1.15rem] text-ink-soft max-w-[620px]">
              APM at Emversity, trained in biosciences at IIT Roorkee, now
              building AI-native products end to end. I&apos;ve personally{" "}
              <em className="font-serif-accent italic font-medium text-terracotta-dark">
                coded and shipped two live tools
              </em>{" "}
              with no formal engineering background — just Claude, GPT, and
              Cursor.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <a
                href="#footer"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-semibold text-[0.95rem] whitespace-nowrap bg-ink text-cream transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark"
              >
                Contact me ↗
              </a>
              <a
                href="https://www.linkedin.com/in/anubha-kanwar-98631b227/?skipRedirect=true"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-semibold text-[0.95rem] whitespace-nowrap border-[1.5px] border-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-cream"
              >
                View LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[22px] pl-8 border-l border-line max-[860px]:pl-0 max-[860px]:pt-6 max-[860px]:border-l-0 max-[860px]:border-t">
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

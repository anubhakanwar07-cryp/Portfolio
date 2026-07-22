import Reveal from "./Reveal";

const cards = [
  {
    num: "01",
    title: "I find what's worth building.",
    body: "I stress-test scope with data before committing engineering time — the kind of digging that once turned a sales funnel RCA across 300K+ leads into four concrete, actionable hypotheses.",
    tag: "Discover",
    dark: true,
  },
  {
    num: "02",
    title: "I don't wait for engineering.",
    body: "When a v1 needs to exist, I build it myself. EmStudio, PitchMate, and JSP were all coded solo using Claude, GPT, and Cursor — no hand-off required to prove the idea. The same discipline extends to what the AI is allowed to do: Socrates is restricted to 7 approved views and always shows its generated SQL, so nothing ships as a black box.",
    tag: "Build",
    dark: false,
  },
  {
    num: "03",
    title: "I close the loop with data.",
    body: "Every ship gets a metric attached before it goes out — then I go find out if it moved. That's how a 24-hour contact window and a 7-minute re-escalation threshold got discovered, not assumed.",
    tag: "Measure",
    dark: false,
  },
];

export default function HowIWork() {
  return (
    <Reveal
      as="section"
      id="process"
      className="reveal py-[100px] bg-cream-alt"
    >
      <div className="w-full max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-muted">
          ACROSS THE PRODUCT LIFECYCLE
        </div>
        <h2 className="text-[clamp(2.1rem,4.6vw,3.4rem)] mb-14">
          How I work.
        </h2>
        <Reveal
          as="div"
          className="reveal-stagger grid grid-cols-3 gap-6 max-[860px]:grid-cols-1"
        >
          {cards.map((c) => (
            <div
              key={c.num}
              className={`rounded-[18px] py-9 px-[30px] border border-line flex flex-col min-h-[340px] transition-[transform,box-shadow] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-24px_rgba(24,21,15,0.35)] ${
                c.dark
                  ? "bg-[#1e1c17] text-white border-white/15"
                  : "bg-cream hover:border-2 hover:border-black/30"
              }`}
            >
              <div className="font-display text-[1.6rem] text-terracotta mb-[26px]">
                {c.num}
              </div>
              <h3 className="text-2xl mb-4 leading-[1.15]">
                {c.title}
              </h3>
              <p
                className={`text-base grow ${c.dark ? "text-[#D9D3C6]" : "text-ink-soft"}`}
              >
                {c.body}
              </p>
              <span
                className={`mt-[22px] inline-block self-start text-[0.72rem] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-full ${
                  c.dark
                    ? "bg-white/12 text-white"
                    : "bg-cream-alt text-ink"
                }`}
              >
                {c.tag}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}

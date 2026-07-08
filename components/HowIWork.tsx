import Reveal from "./Reveal";

const cards = [
  {
    num: "01",
    title: "I FIND WHAT'S WORTH BUILDING.",
    body: "I stress-test scope with data before committing engineering time — the kind of digging that once turned a sales funnel RCA across 300K+ leads into four concrete, actionable hypotheses.",
    tag: "Discover",
    dark: true,
  },
  {
    num: "02",
    title: "I DON'T WAIT FOR ENGINEERING.",
    body: "When a v1 needs to exist, I build it myself. EmStudio, PitchMate, and JSP were all coded solo using Claude, GPT, and Cursor — no hand-off required to prove the idea.",
    tag: "Build",
    dark: false,
  },
  {
    num: "03",
    title: "I CLOSE THE LOOP WITH DATA.",
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
      className="reveal flex items-center min-h-[100svh] pt-[60px] pb-[70px] bg-cream-alt"
    >
      <div className="w-full max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-muted">
          ACROSS THE PRODUCT LIFECYCLE
        </div>
        <h2 className="uppercase text-[clamp(2.1rem,4.6vw,3.4rem)] mb-14">
          HOW I WORK.
        </h2>
        <Reveal
          as="div"
          className="reveal-stagger grid grid-cols-3 gap-6 max-[860px]:grid-cols-1"
        >
          {cards.map((c) => (
            <div
              key={c.num}
              className={`rounded-[18px] py-9 px-[30px] border border-line flex flex-col min-h-[340px] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-24px_rgba(24,21,15,0.35)] ${
                c.dark
                  ? "bg-ink text-cream border-ink"
                  : "bg-white"
              }`}
            >
              <div className="font-display text-[1.6rem] text-terracotta mb-[26px]">
                {c.num}
              </div>
              <h3 className="text-2xl uppercase mb-4 leading-[1.15]">
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
                    ? "bg-white/12 text-cream"
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

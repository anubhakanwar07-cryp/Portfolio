import Reveal from "./Reveal";

const items = [
  {
    icon: "🗂️",
    title: "Job Search OS",
    body: "A Notion system for tracking outreach, targets, and templates — built for my own founder-first search, now reused for every new role.",
  },
  {
    icon: "📈",
    title: "SIP Portfolio Modeling",
    body: "Structured mutual fund allocations for myself and my father — equity-heavy long horizon for me, balanced-advantage-led for him.",
  },
  {
    icon: "🥽",
    title: "VR User Guide",
    body: "A guide for Emverse's Anatomy VR sim covering both the Meta headset and web access pathways.",
  },
  {
    icon: "🇩🇪",
    title: "German A1 Question Bank",
    body: "75 exam questions across Reading, Writing, and Grammar, converted into structured SQL inserts for EVA.",
  },
];

export default function Explorations() {
  return (
    <Reveal as="section" id="explorations" className="reveal py-[100px]">
      <div className="max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-muted">
          SIDE QUESTS
        </div>
        <h2 className="uppercase text-[clamp(2.1rem,4.6vw,3.4rem)] mb-11">
          EXPLORATIONS &amp; EXPERIMENTS.
        </h2>
        <div className="explore-scroll flex gap-5 overflow-x-auto pb-2.5">
          {items.map((item) => (
            <div
              key={item.title}
              className="shrink-0 w-[280px] rounded-[18px] border border-line bg-white p-[26px] flex flex-col gap-3.5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-20px_rgba(24,21,15,0.3)]"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cream-alt text-xl">
                {item.icon}
              </div>
              <h4 className="font-display text-[1.05rem] uppercase">
                {item.title}
              </h4>
              <p className="text-ink-soft text-[0.9rem]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

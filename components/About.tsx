import Reveal from "./Reveal";

const facts = [
  { label: "Education", value: "IIT Roorkee · Biosciences & Bioengineering" },
  { label: "Current role", value: "Associate Product Manager, Emversity" },
  { label: "Recognition", value: "Hult Prize 2023 · Global Semi-Finalist" },
];

export default function About() {
  return (
    <Reveal
      as="section"
      id="about"
      className="reveal py-[100px] bg-cream-alt border-t border-line"
    >
      <div className="max-w-[1240px] mx-auto px-10 max-[480px]:px-5 grid grid-cols-[1.4fr_1fr] gap-[60px] items-start max-[860px]:grid-cols-1">
        <div>
          <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-muted">
            ABOUT ME
          </div>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] mb-5">
            Biosciences by degree. Product by choice.
          </h2>
          <p className="text-ink-soft text-[1.05rem] max-w-[560px]">
            I studied Biosciences and Bioengineering at IIT Roorkee, then
            moved into product because I liked the version of
            problem-solving where you actually ship the fix. I&apos;m now
            looking for AI-native PM roles at Series A+, founder-led
            companies — the kind where being able to build the first version
            myself is a feature, not a workaround.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`py-[18px] ${i === 0 ? "" : "border-t border-line"}`}
            >
              <div className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-muted mb-1.5">
                {f.label}
              </div>
              <div>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

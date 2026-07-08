import Image from "next/image";
import Reveal from "./Reveal";

type FeaturedProjectProps = {
  id?: string;
  eyebrow: string;
  titleLines: string[];
  role: string;
  year: string;
  stack: string;
  caseHref: string;
  frameColor: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  tags: string[];
  desc: string;
  alt?: boolean;
};

export default function FeaturedProject({
  id,
  eyebrow,
  titleLines,
  role,
  year,
  stack,
  caseHref,
  frameColor,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  tags,
  desc,
  alt = false,
}: FeaturedProjectProps) {
  return (
    <Reveal
      as="section"
      id={id}
      className={`reveal py-[72px] border-b border-line ${alt ? "bg-cream-alt" : "bg-white"}`}
    >
      <div className="max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <div className="flex justify-between items-start gap-10 flex-wrap mb-9">
          <div>
            <div className="eyebrow flex items-center gap-2.5 mb-[18px] font-semibold text-[0.78rem] tracking-[0.14em] uppercase text-muted">
              {eyebrow}
            </div>
            <h3 className="uppercase text-[clamp(2.2rem,4.6vw,3.6rem)] max-w-[620px] whitespace-nowrap">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>
          <div className="flex flex-col gap-2.5 items-start shrink-0 pl-6 border-l border-line max-[700px]:gap-3.5 max-[700px]:pl-0 max-[700px]:pt-5 max-[700px]:border-l-0 max-[700px]:border-t">
            <div className="flex flex-col gap-1">
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-muted">
                Role
              </span>
              <span className="text-base">{role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-muted">
                Year
              </span>
              <span className="text-base">{year}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-muted">
                Stack
              </span>
              <span className="text-base">{stack}</span>
            </div>
            <a
              href={caseHref}
              className="font-bold text-[0.88rem] text-terracotta-dark inline-flex items-center gap-1.5 hover:underline"
            >
              Read case study <span>→</span>
            </a>
          </div>
        </div>

        <div
          className="group rounded-[28px] py-16 px-[72px] mb-7 overflow-hidden flex items-center justify-center max-[700px]:py-7 max-[700px]:px-5"
          style={{ background: frameColor }}
        >
          <Reveal
            as="div"
            className="fp-window w-[86%] max-w-[880px] rounded-[14px] overflow-hidden bg-white shadow-[0_40px_70px_-30px_rgba(24,21,15,0.45)] max-[700px]:w-full"
          >
            <div className="flex items-center gap-1.5 px-4 py-[11px] bg-[#EEECE6] border-b border-black/[0.06]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#E28C7B]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[#E3C878]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[#8FBF8A]" />
            </div>
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              className="w-full h-auto block transition-transform duration-[600ms] ease-out group-hover:scale-[1.025]"
            />
          </Reveal>
        </div>

        <div className="flex justify-between gap-6 flex-wrap items-start">
          <div className="flex gap-2 flex-wrap mb-4">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={
                  i === 0
                    ? "text-[0.7rem] font-semibold tracking-[0.04em] px-3 py-1.5 rounded-full bg-ink text-cream border border-ink"
                    : "text-[0.7rem] font-semibold tracking-[0.04em] px-3 py-1.5 rounded-full bg-transparent text-ink border border-black/30"
                }
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-ink-soft max-w-[520px] text-base">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

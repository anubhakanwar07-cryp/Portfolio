import AmbientGlow from "./motion/AmbientGlow";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden scroll-mt-[100px] bg-[#1e1c17] text-white border-t border-white/10 pt-[100px] pb-10"
    >
      <AmbientGlow variant="footer" className="-z-10" />
      <div className="max-w-[1240px] mx-auto px-10 max-[480px]:px-5">
        <h2 className="text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] mb-[70px] max-w-[900px]">
          Now. Bring me
          <span className="font-accent italic font-bold text-terracotta block">
            the ambiguous problem.
          </span>
        </h2>

        <div className="grid grid-cols-[0.8fr_1fr_1fr_1fr] gap-10 pb-[60px] max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#8B857A] mb-3.5">
              Say hello
            </div>
          </div>
          <div>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#8B857A] mb-3.5">
              Contact me for
            </div>
            <p className="text-[#C9C3B6] text-[0.98rem]">
              AI-native PM roles at Series A+ companies, founder
              conversations, or collaborations on something worth building.
            </p>
          </div>
          <div>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#8B857A] mb-3.5">
              Zero unread mails
            </div>
            <p className="text-[#C9C3B6] text-[0.98rem]">
              I&apos;ll see your message and reply with at least one real
              thought. Most replies inside 48 hours.
            </p>
          </div>
          <div>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#8B857A] mb-3.5">
              Where
            </div>
            <p className="text-[#C9C3B6] text-[0.98rem]">
              Bengaluru, India · IST
              <br />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anubhakanwar2002@gmail.com"
                target="_blank"
                rel="noopener"
                className="underline decoration-[#54503F]"
              >
                anubhakanwar2002@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/12 pt-7 flex justify-between flex-wrap gap-4 text-[0.85rem] text-[#8B857A]">
          <div>© Anubha, 2026.</div>
          <div className="flex gap-7 uppercase tracking-[0.08em] font-semibold text-[0.8rem]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anubhakanwar2002@gmail.com"
              target="_blank"
              rel="noopener"
              className="text-white transition-colors duration-300 hover:text-terracotta"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anubha-kanwar-98631b227/?skipRedirect=true"
              target="_blank"
              rel="noopener"
              className="text-white transition-colors duration-300 hover:text-terracotta"
            >
              LinkedIn
            </a>
            <a
              href="/Anubha_Kanwar_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="text-white transition-colors duration-300 hover:text-terracotta"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

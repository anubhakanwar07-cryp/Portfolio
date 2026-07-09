import ScrollProgress from "@/components/ScrollProgress";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import FeaturedProject from "@/components/FeaturedProject";
import MoreWork from "@/components/MoreWork";
import Testimonials from "@/components/Testimonials";
import Explorations from "@/components/Explorations";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <Hero />
      <HowIWork />

      <FeaturedProject
        id="work"
        eyebrow="EMVERSITY · AI PRODUCTION PLATFORM"
        titleLines={["AI does the content.", "I built the check."]}
        role="PM + builder, end to end"
        year="2024–25"
        stack="Cursor · OpenAI API · Next.js"
        caseHref="/work/emstudio"
        frameColor="#D9E1DA"
        imgSrc="/preview-emstudio.jpg"
        imgAlt="EmStudio dashboard showing project progress, quality score, and team velocity"
        imgWidth={1400}
        imgHeight={787}
        tags={["AI Production", "Built solo", "QC Engine"]}
        desc="A QC engine for AI content production, built and shipped by me — workflow, frontend, and QC logic, end to end."
      />

      <FeaturedProject
        eyebrow="PERSONAL PROJECT · AI SALES TRAINING"
        titleLines={["Train to close.", "Before the real call."]}
        role="Founder, PM & sole builder"
        year="2024"
        stack="AI APIs · Cursor"
        caseHref="/work/pitchmate"
        frameColor="#E1DEE8"
        imgSrc="/preview-pitchmate.jpg"
        imgAlt="PitchMate AI roleplay simulator with Rhea, an AI persona that raises live sales objections"
        imgWidth={1400}
        imgHeight={787}
        tags={["AI Roleplay", "Sales Enablement", "Personal Project"]}
        desc="An AI sales-training platform that role-plays real objections so reps rehearse before the real call."
        alt
      />

      <FeaturedProject
        eyebrow="PERSONAL PROJECT · JOB SEARCH OS"
        titleLines={["Run your job search", "like a pipeline."]}
        role="Sole builder — product, architecture, code"
        year="2026"
        stack="Next.js 14 · Supabase · GPT-4o"
        caseHref="/work/jsp"
        frameColor="#EAE1D0"
        imgSrc="/preview-jsp.jpg"
        imgAlt="JSP opportunities dashboard showing matched job listings with match scores"
        imgWidth={1600}
        imgHeight={900}
        tags={["Next.js", "Live product", "Built solo"]}
        desc="A job-search tracker and outreach OS — shipped in 20 days with zero prior Next.js experience."
      />

      <MoreWork />
      <Testimonials />
      <Explorations />
      <About />
      <Footer />
    </>
  );
}

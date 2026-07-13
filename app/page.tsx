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
        desc="A QC engine for AI content production, built and shipped by me — workflow, frontend, and QC logic, end to end. It flags spelling, factual, and image errors, each with a suggested fix for a human to accept or reject."
      />

      <FeaturedProject
        eyebrow="EMVERSITY · ROOT CAUSE ANALYSIS"
        titleLines={["More leads.", "Fewer students."]}
        role="Full analysis, end to end"
        year="2025–26"
        stack="BigQuery · SQL"
        caseHref="/work/sales-decline-rca"
        frameColor="#E8D6D2"
        imgSrc="/preview-rca.jpg"
        imgAlt="Sales Decline RCA case study showing lead volume up 85.7% while enrollments fell 23.7%"
        imgWidth={1060}
        imgHeight={732}
        tags={["BigQuery", "Root Cause Analysis", "Exec Reporting"]}
        desc="A root-cause investigation across 1.4M+ leads — leads were up 85.7% while enrollments fell 23.7%. Found the collapse point."
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

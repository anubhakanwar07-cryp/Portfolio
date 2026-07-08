import type { NextConfig } from "next";

const CASE_STUDIES: Record<string, string> = {
  emstudio: "emstudio",
  pitchmate: "pitchmate",
  jsp: "jsp",
  eva: "eva",
  eva2: "eva2",
  "sales-decline-rca": "rca_casestudy",
  socrates: "socrates_casestudy",
  "vr-anatomy": "vr_anatomy_casestudy",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(CASE_STUDIES).map(([slug, file]) => ({
      source: `/work/${slug}`,
      destination: `/case-studies/${file}.html`,
      permanent: false,
    }));
  },
};

export default nextConfig;

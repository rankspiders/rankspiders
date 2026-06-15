import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SEO Agency India | AI-Powered SEO Services | Rank Spiders",
  description: "Rank Spiders is a leading AI SEO agency India offering AI-powered SEO services, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) to help brands rank on Google SGE and ChatGPT.",
  keywords: "ai seo agency india, ai powered seo services, artificial intelligence seo india, aeo optimization agency, answer engine optimization india, generative seo, ai seo company chandigarh, ai seo services delhi",
  openGraph: {
    title: "AI SEO Agency India | Rank Spiders",
    description: "AI-Powered SEO — Smarter SEO, Better Rankings. We combine AI intelligence with proven strategies to grow your organic traffic.",
    url: "https://www.rankspiders.com/services/seo/ai",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/services/seo/ai",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

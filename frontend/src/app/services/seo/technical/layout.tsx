import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical SEO Agency India | Core Web Vitals & Site Audit | Rank Spiders",
  description: "Rank Spiders is a specialist technical SEO agency India. We fix crawl errors, optimize Core Web Vitals, implement structured data, and improve site speed to build a strong SEO foundation that ranks.",
  keywords: "technical seo agency india, technical seo services india, technical seo company, website technical audit india, core web vitals optimization, site speed seo, technical seo chandigarh, technical seo delhi",
  openGraph: {
    title: "Technical SEO Agency India | Rank Spiders",
    description: "Build a Strong Foundation. Rank Higher. Expert technical SEO services covering site speed, crawlability, indexing, and structured data.",
    url: "https://www.rankspiders.com/services/seo/technical",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/services/seo/technical",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

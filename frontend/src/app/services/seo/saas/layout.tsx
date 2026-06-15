import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS SEO Agency India | SEO for SaaS Companies | Rank Spiders",
  description: "Rank Spiders is a specialist SaaS SEO agency India helping software companies grow organic traffic, generate qualified leads, and increase MRR through product-led SEO, content strategy, and feature page optimization.",
  keywords: "saas seo agency india, seo for saas companies, saas seo services india, saas marketing agency, b2b saas seo, saas content strategy, saas seo company india, product-led growth seo",
  openGraph: {
    title: "SaaS SEO Agency India | Rank Spiders",
    description: "Discover. Optimize. Grow. Expert SaaS SEO services to help software companies rank higher and convert organic visitors into paying customers.",
    url: "https://www.rankspiders.com/services/seo/saas",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/services/seo/saas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

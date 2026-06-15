import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free SEO Audit India | Free Website SEO Analysis | Rank Spiders",
  description: "Get a free SEO audit from Rank Spiders. We identify technical errors, keyword gaps, content weaknesses, page speed issues, and competitor advantages — at zero cost.",
  keywords: "free seo audit india, free website seo analysis india, free seo report india, get free seo audit, free seo check india, free seo audit chandigarh, free seo audit mohali",
  openGraph: {
    title: "Free SEO Audit India | Rank Spiders",
    description: "Discover hidden growth opportunities with a free SEO audit from Rank Spiders. Find. Fix. Grow.",
    url: "https://www.rankspiders.com/free/seo-audit",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/free/seo-audit",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

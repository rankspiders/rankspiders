import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services India | Full-Service Agency | Rank Spiders",
  description: "Explore Rank Spiders' full suite of digital marketing services — SEO, web development, social media, paid ads, content marketing, and consultancy. Data-driven strategies that drive real growth.",
  keywords: "digital marketing services india, full service digital marketing agency india, all digital marketing services, seo web social email services india, digital marketing services chandigarh, digital marketing services delhi, digital marketing services uk",
  openGraph: {
    title: "Digital Marketing Services India | Rank Spiders",
    description: "Full-service digital marketing agency India — SEO, web development, paid ads, social media, content, and consultancy under one roof.",
    url: "https://www.rankspiders.com/services",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

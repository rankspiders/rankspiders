import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organic Growth Consultancy | Rank Spiders",
  description: "Grow your business naturally and sustainably with our Organic Growth Consultancy — SEO, content strategy, social media growth, audience building, and brand authority development.",
  alternates: {
    canonical: "https://www.rankspiders.com/services/social-media/consultancy",
  },
  openGraph: {
    title: "Organic Growth Consultancy | Rank Spiders",
    description: "Grow your business naturally and sustainably with our Organic Growth Consultancy — SEO, content strategy, social media growth, audience building, and brand authority development.",
    url: "https://www.rankspiders.com/services/social-media/consultancy",
    siteName: "Rank Spiders",
    type: "website",
    images: [
      {
        url: "https://www.rankspiders.com/images/services/consultancy/organic-growth-consultancy.png",
        width: 1200,
        height: 630,
        alt: "Rank Spiders Organic Growth Consultancy Services",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

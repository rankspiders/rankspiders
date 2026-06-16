import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinterest Marketing Services | Rank Spiders",
  description: "Grow your brand with expert Pinterest marketing — profile optimization, pin creation, targeted growth, keyword strategy, analytics, and campaigns that drive high-intent traffic and sales.",
  alternates: {
    canonical: "https://www.rankspiders.com/services/social-media/pinterest",
  },
  openGraph: {
    title: "Pinterest Marketing Services | Rank Spiders",
    description: "Grow your brand with expert Pinterest marketing — profile optimization, pin creation, targeted growth, keyword strategy, analytics, and campaigns that drive high-intent traffic and sales.",
    url: "https://www.rankspiders.com/services/social-media/pinterest",
    siteName: "Rank Spiders",
    type: "website",
    images: [
      {
        url: "https://www.rankspiders.com/images/services/pinterest/pinterest-marketing.png",
        width: 1200,
        height: 630,
        alt: "Rank Spiders Pinterest Marketing Services",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

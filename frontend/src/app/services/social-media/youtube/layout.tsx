import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Marketing Services | Rank Spiders",
  description: "Grow your brand on YouTube with expert marketing services — channel setup, video SEO, content strategy, audience growth, video promotion, and performance analytics.",
  alternates: {
    canonical: "https://www.rankspiders.com/services/social-media/youtube",
  },
  openGraph: {
    title: "YouTube Marketing Services | Rank Spiders",
    description: "Grow your brand on YouTube with expert marketing services — channel setup, video SEO, content strategy, audience growth, video promotion, and performance analytics.",
    url: "https://www.rankspiders.com/services/social-media/youtube",
    siteName: "Rank Spiders",
    type: "website",
    images: [
      {
        url: "https://www.rankspiders.com/images/services/youtube/youtube-marketing.png",
        width: 1200,
        height: 630,
        alt: "Rank Spiders YouTube Marketing Services",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

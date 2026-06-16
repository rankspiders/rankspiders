import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Marketing Services | Rank Spiders",
  description: "Grow your brand on YouTube with expert marketing services — channel setup, video SEO, content strategy, audience growth, video promotion, and performance analytics.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

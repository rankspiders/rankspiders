import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brooklyn Simmons | Rank Spiders",
  description: "Learn more about Brooklyn Simmons, our SEO Strategist at Rank Spiders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

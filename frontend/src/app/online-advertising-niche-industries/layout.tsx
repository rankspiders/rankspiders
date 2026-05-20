import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Advertising Niche Industries | Rank Spiders",
  description: "Specialized online advertising solutions for niche industries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

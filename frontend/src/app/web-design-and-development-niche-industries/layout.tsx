import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Niche Industries | Rank Spiders",
  description: "Custom web design and development solutions tailored for niche industries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

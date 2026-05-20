import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Email Strategy Agency | Rank Spiders",
  description: "Get a free email strategy for your business from Rank Spiders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design & YouTube Marketing | Rank Spiders",
  description: "Elevate your brand with our professional graphic design and YouTube marketing services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

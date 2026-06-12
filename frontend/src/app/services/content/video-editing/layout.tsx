import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Editing Services | Rank Spiders",
  description: "Professional video editing services to boost your brand's digital presence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

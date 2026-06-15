import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress SEO Agency India | WordPress Website Optimization | Rank Spiders",
  description: "Rank Spiders is a trusted WordPress SEO agency India. We optimize WordPress websites for higher Google rankings with technical SEO, Yoast SEO setup, RankMath configuration, content strategy, and Core Web Vitals improvements.",
  keywords: "wordpress seo agency india, wordpress seo services india, wordpress website optimization, wordpress seo expert india, wordpress seo company, wordpress seo chandigarh, wordpress seo delhi, yoast seo setup, rankmath configuration",
  openGraph: {
    title: "WordPress SEO Agency India | Rank Spiders",
    description: "WordPress Flexibility is Your SEO Superpower. Expert WordPress SEO services for higher rankings, faster sites, and more organic traffic.",
    url: "https://www.rankspiders.com/services/seo/wordpress",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/services/seo/wordpress",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

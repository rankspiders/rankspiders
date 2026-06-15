import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce SEO Agency India | Online Store SEO Services | Rank Spiders",
  description: "Rank Spiders is a leading ecommerce SEO agency India. We optimize product pages, category architecture, product schema, and faceted navigation to rank your online store higher and drive more sales.",
  keywords: "ecommerce seo agency india, ecommerce seo services india, online store seo india, product page seo, category page seo, ecommerce search optimization, ecommerce seo chandigarh, ecommerce seo delhi, ecommerce seo uk, product schema seo",
  openGraph: {
    title: "E-Commerce SEO Agency India | Rank Spiders",
    description: "Rank Higher. Drive Traffic. Increase Sales. Expert ecommerce SEO services — product schema, faceted navigation SEO, and category optimization.",
    url: "https://www.rankspiders.com/services/seo/ecommerce",
  },
  alternates: {
    canonical: "https://www.rankspiders.com/services/seo/ecommerce",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

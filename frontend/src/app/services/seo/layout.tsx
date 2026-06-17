import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services India | Search Engine Optimization Agency | Rank Spiders',
  description: 'Rank Spiders is India\'s top SEO agency offering technical SEO, local SEO, e-commerce SEO, and link building. Data-driven strategies that grow organic traffic and revenue.',
  alternates: { canonical: 'https://www.rankspiders.com/services/seo' },
  openGraph: {
    title: 'SEO Services India | Search Engine Optimization Agency | Rank Spiders',
    description: 'Rank Spiders is India\'s top SEO agency offering technical SEO, local SEO, e-commerce SEO, and link building. Data-driven strategies that grow organic traffic and revenue.',
    url: 'https://www.rankspiders.com/services/seo',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Development Services India | Rank Spiders',
  description: 'Rank Spiders builds fast, SEO-optimised websites — custom designs, WordPress, Shopify, landing pages, and ongoing maintenance. Turn your website into your best salesperson.',
  alternates: { canonical: 'https://www.rankspiders.com/services/web-development' },
  openGraph: {
    title: 'Web Design & Development Services India | Rank Spiders',
    description: 'Rank Spiders builds fast, SEO-optimised websites — custom designs, WordPress, Shopify, landing pages, and ongoing maintenance. Turn your website into your best salesperson.',
    url: 'https://www.rankspiders.com/services/web-development',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

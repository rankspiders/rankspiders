import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help & Support | FAQs & Resources | Rank Spiders',
  description: 'Find answers to common questions about Rank Spiders\' digital marketing services, pricing, timelines, and how we work. Get the support you need.',
  alternates: { canonical: 'https://www.rankspiders.com/help' },
  openGraph: {
    title: 'Help & Support | FAQs & Resources | Rank Spiders',
    description: 'Find answers to common questions about Rank Spiders\' digital marketing services, pricing, timelines, and how we work. Get the support you need.',
    url: 'https://www.rankspiders.com/help',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

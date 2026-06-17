import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Consultancy India | Strategy & Growth | Rank Spiders',
  description: 'Get expert digital marketing consultancy from Rank Spiders. We audit your current strategy, identify growth opportunities, and build a custom roadmap to scale your business online.',
  alternates: { canonical: 'https://www.rankspiders.com/services/consultancy' },
  openGraph: {
    title: 'Digital Marketing Consultancy India | Strategy & Growth | Rank Spiders',
    description: 'Get expert digital marketing consultancy from Rank Spiders. We audit your current strategy, identify growth opportunities, and build a custom roadmap to scale your business online.',
    url: 'https://www.rankspiders.com/services/consultancy',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

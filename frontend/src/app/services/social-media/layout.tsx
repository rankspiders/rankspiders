import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services India | SMM Agency | Rank Spiders',
  description: 'Grow your brand on Instagram, Facebook, LinkedIn, YouTube, and Pinterest with Rank Spiders\' social media marketing services. Data-driven campaigns that drive engagement and sales.',
  alternates: { canonical: 'https://www.rankspiders.com/services/social-media' },
  openGraph: {
    title: 'Social Media Marketing Services India | SMM Agency | Rank Spiders',
    description: 'Grow your brand on Instagram, Facebook, LinkedIn, YouTube, and Pinterest with Rank Spiders\' social media marketing services. Data-driven campaigns that drive engagement and sales.',
    url: 'https://www.rankspiders.com/services/social-media',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Image Gallery | Digital Marketing Work | Rank Spiders India',
  description: 'Browse Rank Spiders\' portfolio gallery — creative designs, brand campaigns, social media visuals, and web projects delivered for clients across India.',
  alternates: { canonical: 'https://www.rankspiders.com/image-gallery' },
  openGraph: {
    title: 'Portfolio Image Gallery | Digital Marketing Work | Rank Spiders India',
    description: 'Browse Rank Spiders\' portfolio gallery — creative designs, brand campaigns, social media visuals, and web projects delivered for clients across India.',
    url: 'https://www.rankspiders.com/image-gallery',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

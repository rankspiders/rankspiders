import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Development Strategy | Rank Spiders',
  description: 'Get a free custom website development strategy from Rank Spiders. We review your current site and map out what to build, fix, or optimise to drive more traffic and leads.',
  alternates: { canonical: 'https://www.rankspiders.com/free/development-strategy' },
  openGraph: {
    title: 'Free Website Development Strategy | Rank Spiders',
    description: 'Get a free custom website development strategy from Rank Spiders. We review your current site and map out what to build, fix, or optimise to drive more traffic and leads.',
    url: 'https://www.rankspiders.com/free/development-strategy',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

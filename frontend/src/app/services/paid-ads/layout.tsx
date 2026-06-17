import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paid Ads & PPC Services India | Google, Meta & LinkedIn Ads | Rank Spiders',
  description: 'Run high-ROI paid ad campaigns with Rank Spiders. We manage Google Ads, Meta Ads, LinkedIn Ads, and Pinterest Ads — targeted, measurable, and optimised for maximum conversions.',
  alternates: { canonical: 'https://www.rankspiders.com/services/paid-ads' },
  openGraph: {
    title: 'Paid Ads & PPC Services India | Google, Meta & LinkedIn Ads | Rank Spiders',
    description: 'Run high-ROI paid ad campaigns with Rank Spiders. We manage Google Ads, Meta Ads, LinkedIn Ads, and Pinterest Ads — targeted, measurable, and optimised for maximum conversions.',
    url: 'https://www.rankspiders.com/services/paid-ads',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

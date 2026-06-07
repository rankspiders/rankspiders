import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import RankTrackerClient from './RankTrackerClient';

export const metadata: Metadata = {
  title: 'Keyword Rank Tracker — Track Google Rankings Free | Rank Spiders',
  description:
    "Track your website's keyword rankings on Google in real time. Enter your URL, add keywords, and watch positions update live — free, no sign-up required.",
  keywords: 'keyword rank tracker, google rank checker, serp position tracker, keyword position checker, free rank tracker',
  openGraph: {
    title: 'Keyword Rank Tracker | Rank Spiders',
    description: 'Track your Google keyword rankings in real time. Free rank checker with competitor analysis and CSV export.',
    type: 'website',
    siteName: 'Rank Spiders',
  },
  alternates: { canonical: 'https://rankspiders.com/tools/rank-tracker' },
};

export default function RankTrackerPage() {
  return (
    <>
      <PageHeader
        title="Keyword Rank"
        subtitle="Tracker"
        breadcrumbs={[
          { label: 'Tools', href: '/tools' },
          { label: 'Rank Tracker', active: true },
        ]}
      />
      <ScrollingTicker />
      <RankTrackerClient />
    </>
  );
}

import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import RobotsTesterClient from './RobotsTesterClient';

export const metadata: Metadata = {
  title: 'Free Robots.txt Tester — Check Crawler Access | Rank Spiders',
  description: 'Instantly fetch and parse any website\'s robots.txt. Check if Googlebot, Bingbot and other crawlers are allowed, view all rules, and test specific URL paths.',
  openGraph: { title: 'Free Robots.txt Tester | Rank Spiders', type: 'website', siteName: 'Rank Spiders' },
  alternates: { canonical: 'https://rankspiders.com/tools/robots-tester' },
};

export default function RobotsTesterPage() {
  return (
    <>
      <PageHeader title="Robots.txt" subtitle="Tester" breadcrumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Robots.txt Tester', active: true }]} />
      <ScrollingTicker />
      <RobotsTesterClient />
    </>
  );
}

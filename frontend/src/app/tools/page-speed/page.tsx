import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import PageSpeedClient from './PageSpeedClient';

export const metadata: Metadata = {
  title: 'Free Page Speed Checker — Website Performance Test | Rank Spiders',
  description: 'Test your website load time, compression, caching, and server response instantly. Get actionable recommendations to improve page speed and Core Web Vitals.',
  openGraph: { title: 'Free Page Speed Checker | Rank Spiders', type: 'website', siteName: 'Rank Spiders' },
  alternates: { canonical: 'https://rankspiders.com/tools/page-speed' },
};

export default function PageSpeedPage() {
  return (
    <>
      <PageHeader title="Page Speed" subtitle="Checker" breadcrumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Page Speed', active: true }]} />
      <ScrollingTicker />
      <PageSpeedClient />
    </>
  );
}

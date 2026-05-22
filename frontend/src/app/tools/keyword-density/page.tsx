import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import KeywordDensityClient from './KeywordDensityClient';

export const metadata: Metadata = {
  title: 'Free Keyword Density Checker — Analyse Any Webpage | Rank Spiders',
  description: 'Find the most used keywords, 2-word and 3-word phrases on any webpage. Check keyword density %, placement in title/H1/H2, and avoid over-optimisation.',
  openGraph: { title: 'Free Keyword Density Checker | Rank Spiders', type: 'website', siteName: 'Rank Spiders' },
  alternates: { canonical: 'https://rankspiders.com/tools/keyword-density' },
};

export default function KeywordDensityPage() {
  return (
    <>
      <PageHeader title="Keyword Density" subtitle="Analyser" breadcrumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Keyword Density', active: true }]} />
      <ScrollingTicker />
      <KeywordDensityClient />
    </>
  );
}

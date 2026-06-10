import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SitemapValidatorClient from './SitemapValidatorClient';

export const metadata: Metadata = {
  title: 'Free Sitemap Validator — XML Sitemap Checker | Rank Spiders',
  description: 'Validate any XML sitemap instantly. Check URL count, lastmod freshness, missing priority/changefreq tags, and detect sitemap index files.',
  openGraph: { title: 'Free Sitemap Validator | Rank Spiders', type: 'website', siteName: 'Rank Spiders' },
  alternates: { canonical: 'https://rankspiders.com/tools/sitemap-validator' },
};

export default function SitemapValidatorPage() {
  return (
    <>
      <PageHeader title="Sitemap" subtitle="Validator" breadcrumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Sitemap Validator', active: true }]} />
      <SitemapValidatorClient />
    </>
  );
}

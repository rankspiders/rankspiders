import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import MetaTagsClient from './MetaTagsClient';

export const metadata: Metadata = {
  title: 'Free Meta Tag Extractor — View All Meta Tags | Rank Spiders',
  description: 'Extract every meta tag from any webpage — title, description, Open Graph, Twitter Card, JSON-LD schema, hreflang, canonical and more. Get an issues report instantly.',
  openGraph: { title: 'Free Meta Tag Extractor | Rank Spiders', type: 'website', siteName: 'Rank Spiders' },
  alternates: { canonical: 'https://rankspiders.com/tools/meta-tags' },
};

export default function MetaTagsPage() {
  return (
    <>
      <PageHeader title="Meta Tag" subtitle="Extractor" breadcrumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Meta Tags', active: true }]} />
      <MetaTagsClient />
    </>
  );
}

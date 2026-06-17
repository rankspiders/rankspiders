import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SeoAuditClient from './SeoAuditClient';

export const metadata: Metadata = {
  title: 'Free SEO Audit Tool — Instant Website Analysis | Rank Spiders',
  description:
    'Run a free SEO audit on any website in seconds. Check title tags, meta descriptions, heading structure, canonical URLs, Open Graph tags, image alt text, and page speed — no sign-up required.',
  keywords:
    'free seo audit tool, website seo checker, seo analysis tool, meta description checker, title tag checker, on-page seo audit',
  openGraph: {
    title: 'Free SEO Audit Tool | Rank Spiders',
    description:
      'Instant on-page SEO analysis — check 10+ ranking factors for any URL in seconds.', 
    type: 'website',
    siteName: 'Rank Spiders',
  },
  alternates: {
    canonical: 'https://www.rankspiders.com/tools/seo-audit',
  },
};

export default function SeoAuditPage() {
  return (
    <>
      <PageHeader
        title="Free SEO"
        subtitle="Audit Tool"
        breadcrumbs={[
          { label: 'Tools', href: '/tools' },
          { label: 'SEO Audit', active: true },
        ]}
      />
      <SeoAuditClient />
    </>
  );
}

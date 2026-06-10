import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'Blog — Digital Marketing & SEO Insights | Rank Spiders',
  description:
    'Expert articles on SEO, digital marketing, content strategy, and organic growth from the Rank Spiders team. Stay ahead with actionable tips and industry insights.',
  keywords:
    'seo blog, digital marketing blog, content marketing tips, seo tips, organic growth, rank spiders blog',
  alternates: { canonical: 'https://rankspiders.com/blog' },
  openGraph: {
    title: 'Blog — Digital Marketing & SEO Insights | Rank Spiders',
    description:
      'Expert articles on SEO, digital marketing, content strategy, and organic growth from the Rank Spiders team.',
    url: 'https://rankspiders.com/blog',
    type: 'website',
    siteName: 'Rank Spiders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Digital Marketing & SEO Insights | Rank Spiders',
    description: 'Expert articles on SEO, digital marketing, content strategy, and organic growth.',
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Our"
        subtitle="Blog"
        breadcrumbs={[{ label: 'Blog', active: true }]}
      />
      <BlogListClient />
    </>
  );
}

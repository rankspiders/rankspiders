import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Rank Spiders | SEO & Digital Marketing Agency India',
  description: 'Data-driven SEO and digital marketing agency in India. We help local businesses, startups, and enterprise brands rank higher, build authority, and convert traffic into revenue — with transparent strategies that deliver measurable results.',
  alternates: {
    canonical: 'https://www.rankspiders.com/',
  },
  openGraph: {
    title: 'Rank Spiders | SEO & Digital Marketing Agency India',
    description: 'Data-driven SEO and digital marketing agency in India. Rank higher, build authority, and grow revenue with strategies that actually work.',
    url: 'https://www.rankspiders.com/',
    siteName: 'Rank Spiders',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rank Spiders | SEO & Digital Marketing Agency India',
    description: 'Data-driven SEO and digital marketing agency in India. Rank higher, build authority, and grow revenue.',
  },
};

export default function Home() {
  return <HomeClient />;
}

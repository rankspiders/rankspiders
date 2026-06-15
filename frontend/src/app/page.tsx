import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Rank Spiders | SEO & Digital Marketing Agency India',
  description: 'Data-driven SEO and digital marketing agency in India. Rank higher, attract qualified traffic, and grow revenue with transparent, measurable strategies.',
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
    images: [
      {
        url: 'https://www.rankspiders.com/images/sections/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Rank Spiders – SEO & Digital Marketing Agency India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rank Spiders | SEO & Digital Marketing Agency India',
    description: 'Data-driven SEO and digital marketing agency in India. Rank higher, build authority, and grow revenue.',
    images: ['https://www.rankspiders.com/images/sections/hero-image.png'],
  },
};

export default function Home() {
  return <HomeClient />;
}

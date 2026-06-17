import type { Metadata } from 'next';
import WebDevClient from './WebDevClient';

export const metadata: Metadata = {
  title: 'Website Development in Chandigarh | Rank Spiders',
  description: 'Top website development agency in Chandigarh Tricity. WordPress, WooCommerce, Shopify & AI-powered websites that rank on Google and convert visitors into clients.',
  alternates: { canonical: 'https://www.rankspiders.com/web-development' },
  openGraph: {
    title: 'Website Development in Chandigarh | Rank Spiders',
    description: 'Fast, beautiful, Google-ready websites for Chandigarh businesses. WordPress · WooCommerce · Shopify · AI-powered platforms.',
    url: 'https://www.rankspiders.com/web-development',
    type: 'website',
    images: [{ url: '/images/og/web-development.jpg', width: 1200, height: 630 }],
  },
};

export default function WebDevelopmentPage() {
  return <WebDevClient />;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials | Rank Spiders Digital Marketing Reviews India',
  description: 'Read verified client reviews and success stories from businesses who grew with Rank Spiders. Real results in SEO, social media, and web development across India.',
  alternates: { canonical: 'https://www.rankspiders.com/testimonials' },
  openGraph: {
    title: 'Client Testimonials | Rank Spiders Digital Marketing Reviews India',
    description: 'Read verified client reviews and success stories from businesses who grew with Rank Spiders. Real results in SEO, social media, and web development across India.',
    url: 'https://www.rankspiders.com/testimonials',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

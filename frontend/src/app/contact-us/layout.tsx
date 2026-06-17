import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Rank Spiders | Digital Marketing Agency India',
  description: 'Get in touch with Rank Spiders — India\'s trusted digital marketing agency. Book a free consultation for SEO, social media, web development, or paid ads services.',
  alternates: { canonical: 'https://www.rankspiders.com/contact-us' },
  openGraph: {
    title: 'Contact Rank Spiders | Digital Marketing Agency India',
    description: 'Get in touch with Rank Spiders — India\'s trusted digital marketing agency. Book a free consultation for SEO, social media, web development, or paid ads services.',
    url: 'https://www.rankspiders.com/contact-us',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

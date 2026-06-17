import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Gallery | Client Case Studies & Results | Rank Spiders',
  description: 'Watch Rank Spiders\' video portfolio — client success stories, campaign highlights, and digital marketing results across SEO, social media, and web development.',
  alternates: { canonical: 'https://www.rankspiders.com/video-gallery' },
  openGraph: {
    title: 'Video Gallery | Client Case Studies & Results | Rank Spiders',
    description: 'Watch Rank Spiders\' video portfolio — client success stories, campaign highlights, and digital marketing results across SEO, social media, and web development.',
    url: 'https://www.rankspiders.com/video-gallery',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

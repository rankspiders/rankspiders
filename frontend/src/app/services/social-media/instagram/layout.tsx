import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Marketing Services India | Grow Your Brand | Rank Spiders',
  description: 'Rank Spiders delivers expert Instagram marketing — content strategy, Reels, paid ads, and follower growth campaigns that turn your profile into a lead-generating machine.',
  alternates: { canonical: 'https://www.rankspiders.com/services/social-media/instagram' },
  openGraph: {
    title: 'Instagram Marketing Services India | Grow Your Brand | Rank Spiders',
    description: 'Rank Spiders delivers expert Instagram marketing — content strategy, Reels, paid ads, and follower growth campaigns that turn your profile into a lead-generating machine.',
    url: 'https://www.rankspiders.com/services/social-media/instagram',
    type: 'website',
    siteName: 'Rank Spiders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import MotionWrapper, { MotionCard } from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: 'Free SEO Tools — Website Analysis & Optimization | Rank Spiders',
  description:
    'Access our suite of free SEO tools: on-page audit, speed checker, keyword analyzer, and more. Built by SEO experts to help you rank higher — no sign-up required.',
  keywords:
    'free seo tools, website seo checker, seo audit tool, keyword analyzer, page speed checker, on-page seo',
  openGraph: {
    title: 'Free SEO Tools | Rank Spiders',
    description: 'Free tools for SEO audits, speed testing, keyword analysis and more.',
    type: 'website',
    siteName: 'Rank Spiders',
  },
  alternates: {
    canonical: 'https://rankspiders.com/tools',
  },
};

interface Tool {
  name: string;
  slug: string;
  icon: string;
  description: string;
  checks: string[];
  live: boolean;
  accent: string;
}

const TOOLS: Tool[] = [
  {
    name: 'SEO Audit',
    slug: '/tools/seo-audit',
    icon: 'fa-magnifying-glass-chart',
    description:
      'Instant on-page analysis of any URL. Check 10 critical ranking factors in seconds.',
    checks: ['Title & meta tags', 'Heading structure', 'Open Graph', 'Image alt text', 'Load time'],
    live: true,
    accent: 'var(--accent-color)',
  },
  {
    name: 'Page Speed Checker',
    slug: '/tools/page-speed',
    icon: 'fa-gauge-high',
    description:
      'Measure load time, compression, caching, and server configuration — with a score and actionable fix recommendations.',
    checks: ['Load time score', 'Gzip / Brotli', 'Cache-Control', 'Response size', 'Redirect chain'],
    live: true,
    accent: '#10B981',
  },
  {
    name: 'Keyword Density',
    slug: '/tools/keyword-density',
    icon: 'fa-percent',
    description:
      'Find top keywords and phrases with density %, placement in title/H1/H2, and over-optimisation warnings.',
    checks: ['Single keywords', '2-word phrases', '3-word phrases', 'Density %', 'Title/H1/H2 check'],
    live: true,
    accent: 'var(--accent-secondary-color)',
  },
  {
    name: 'Robots.txt Tester',
    slug: '/tools/robots-tester',
    icon: 'fa-robot',
    description:
      'Fetch and parse any robots.txt — check Googlebot access, view all rules, test specific URL paths.',
    checks: ['Googlebot access', 'Bingbot / others', 'Sitemap discovery', 'Path tester', 'Crawl-delay'],
    live: true,
    accent: '#F59E0B',
  },
  {
    name: 'Sitemap Validator',
    slug: '/tools/sitemap-validator',
    icon: 'fa-sitemap',
    description:
      'Validate any XML sitemap — URL count, lastmod freshness stats, missing metadata, and sitemap index support.',
    checks: ['URL count', 'lastmod age', 'Priority / changefreq', 'Sitemap index', 'Freshness stats'],
    live: true,
    accent: '#8B5CF6',
  },
  {
    name: 'Meta Tag Extractor',
    slug: '/tools/meta-tags',
    icon: 'fa-code',
    description:
      'Extract every meta tag — title, description, Open Graph, Twitter Card, JSON-LD schema, hreflang — plus an issues report.',
    checks: ['All meta tags', 'Open Graph', 'Twitter Card', 'JSON-LD schema', 'SEO issues report'],
    live: true,
    accent: '#EC4899',
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  const card = (
    <div
      style={{
        padding: '28px',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-sm)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        opacity: tool.live ? 1 : 0.72,
        transition: 'box-shadow 0.2s',
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: tool.live
            ? `linear-gradient(90deg, ${tool.accent}, var(--accent-secondary-color))`
            : 'var(--card-border)',
          borderRadius: '16px 16px 0 0',
        }}
      />

      {/* Status badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${tool.accent}18, ${tool.accent}08)`,
            border: `1px solid ${tool.accent}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className={`fa ${tool.icon}`} style={{ color: tool.accent, fontSize: '1.2rem' }} />
        </div>
        <span
          style={{
            padding: '4px 12px',
            borderRadius: 999,
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            background: tool.live ? 'rgba(16,185,129,0.1)' : 'var(--bg-secondary)',
            color: tool.live ? 'var(--success-color)' : 'var(--text-muted)',
            border: tool.live ? '1px solid rgba(16,185,129,0.25)' : '1px solid var(--card-border)',
          }}
        >
          {tool.live ? 'Live' : 'Coming Soon'}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--heading-font)',
          fontWeight: 700,
          fontSize: '1.15rem',
          color: 'var(--primary-color)',
          marginBottom: 10,
        }}
      >
        {tool.name}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
        {tool.description}
      </p>

      {/* Feature list */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {tool.checks.map((check) => (
          <span
            key={check}
            style={{
              padding: '3px 10px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--card-border)',
              borderRadius: 999,
              fontSize: '0.73rem',
              color: 'var(--text-muted)',
            }}
          >
            {check}
          </span>
        ))}
      </div>

      {/* CTA */}
      {tool.live ? (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            background: `linear-gradient(135deg, ${tool.accent}, var(--accent-secondary-color))`,
            color: '#fff',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '0.88rem',
            alignSelf: 'flex-start',
          }}
        >
          <i className="fa fa-arrow-right" style={{ fontSize: '0.8rem' }} />
          Run Free Audit
        </div>
      ) : (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '0.88rem',
            border: '1px solid var(--card-border)',
            alignSelf: 'flex-start',
          }}
        >
          <i className="fa fa-clock" style={{ fontSize: '0.8rem' }} />
          Notify Me
        </div>
      )}
    </div>
  );

  if (tool.live) {
    return (
      <MotionCard>
        <Link href={tool.slug} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
          {card}
        </Link>
      </MotionCard>
    );
  }

  return <div style={{ cursor: 'default' }}>{card}</div>;
}

export default function ToolsPage() {
  const liveCount = TOOLS.filter((t) => t.live).length;

  return (
    <>
      <PageHeader
        title="Free SEO"
        subtitle="Tools"
        breadcrumbs={[{ label: 'Tools', active: true }]}
      />
      <ScrollingTicker />

      {/* Hero */}
      <section style={{ padding: '72px 0 56px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7">
              <MotionWrapper variant="up">
                <p
                  style={{
                    display: 'inline-block',
                    background: 'var(--secondary-color)',
                    color: 'var(--accent-color)',
                    border: '1px solid rgba(79,70,229,0.2)',
                    borderRadius: 999,
                    padding: '6px 18px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: 20,
                  }}
                >
                  {liveCount} free tools — all live
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--heading-font)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
                    color: 'var(--primary-color)',
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  Built by SEO experts. Free, forever.
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Professional-grade tools that give you the same data our team uses — no account,
                  no credit card, no limits.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {TOOLS.map((tool, i) => (
              <MotionWrapper key={tool.name} variant="up" delay={i * 0.07}>
                <ToolCard tool={tool} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div
              style={{
                padding: '56px 48px',
                background:
                  'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(6,182,212,0.06) 100%)',
                border: '1px solid rgba(79,70,229,0.15)',
                borderRadius: 20,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  color: 'var(--primary-color)',
                  marginBottom: 14,
                }}
              >
                Need more than a tool can show?
              </h3>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1rem',
                  maxWidth: 520,
                  margin: '0 auto 28px',
                  lineHeight: 1.7,
                }}
              >
                Our team does deep technical SEO audits, competitive analysis, and builds
                strategies that actually move rankings.
              </p>
              <Link
                href="/contact-us"
                style={{
                  display: 'inline-block',
                  padding: '14px 40px',
                  background:
                    'linear-gradient(135deg, var(--accent-color), var(--accent-secondary-color))',
                  color: '#fff',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                Talk to an SEO Expert
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}

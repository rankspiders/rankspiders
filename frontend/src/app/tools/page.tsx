import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: 'Free SEO Tools — Website Analysis & Optimization | Rank Spiders',
  description:
    'Access our suite of free SEO tools: on-page audit, speed checker, keyword analyzer, and more. Built by SEO experts to help you rank higher — no sign-up required.',
  keywords: 'free seo tools, website seo checker, seo audit tool, keyword analyzer, page speed checker, on-page seo',
  openGraph: {
    title: 'Free SEO Tools | Rank Spiders',
    description: 'Free tools for SEO audits, speed testing, keyword analysis and more.',
    type: 'website',
    siteName: 'Rank Spiders',
  },
  alternates: { canonical: 'https://rankspiders.com/tools' },
};

const TOOLS = [
  {
    name: 'SEO Audit',
    slug: '/tools/seo-audit',
    icon: 'fa-magnifying-glass-chart',
    description: 'Instant on-page analysis of any URL. Check 10 critical ranking factors in seconds.',
    checks: ['Title & meta tags', 'Heading structure', 'Open Graph', 'Image alt text', 'Load time'],
    accent: '#4F46E5',
    tag: 'Most Used',
  },
  {
    name: 'Page Speed Checker',
    slug: '/tools/page-speed',
    icon: 'fa-gauge-high',
    description: 'Measure load time, compression, caching, and server config — with a score and actionable fix list.',
    checks: ['Load time score', 'Gzip / Brotli', 'Cache-Control', 'Response size', 'Redirect chain'],
    accent: '#10B981',
    tag: null,
  },
  {
    name: 'Keyword Density',
    slug: '/tools/keyword-density',
    icon: 'fa-percent',
    description: 'Find top keywords and phrases with density %, placement in title/H1/H2, and over-optimisation warnings.',
    checks: ['Single keywords', '2-word phrases', '3-word phrases', 'Density %', 'Title/H1/H2 check'],
    accent: '#06B6D4',
    tag: null,
  },
  {
    name: 'Robots.txt Tester',
    slug: '/tools/robots-tester',
    icon: 'fa-robot',
    description: 'Fetch and parse any robots.txt — check Googlebot access, view all rules, test specific URL paths.',
    checks: ['Googlebot access', 'Bingbot / others', 'Sitemap discovery', 'Path tester', 'Crawl-delay'],
    accent: '#F59E0B',
    tag: null,
  },
  {
    name: 'Sitemap Validator',
    slug: '/tools/sitemap-validator',
    icon: 'fa-sitemap',
    description: 'Validate any XML sitemap — URL count, lastmod freshness stats, missing metadata, and sitemap index support.',
    checks: ['URL count', 'lastmod age', 'Priority / changefreq', 'Sitemap index', 'Freshness stats'],
    accent: '#8B5CF6',
    tag: null,
  },
  {
    name: 'Meta Tag Extractor',
    slug: '/tools/meta-tags',
    icon: 'fa-code',
    description: 'Extract every meta tag — title, description, Open Graph, Twitter Card, JSON-LD schema, hreflang — plus an issues report.',
    checks: ['All meta tags', 'Open Graph', 'Twitter Card', 'JSON-LD schema', 'SEO issues report'],
    accent: '#EC4899',
    tag: null,
  },
];

const STATS = [
  { value: '6', label: 'Free Tools', icon: 'fa-wrench' },
  { value: '100%', label: 'No Sign-Up', icon: 'fa-lock-open' },
  { value: '10+', label: 'SEO Checks', icon: 'fa-list-check' },
  { value: 'Free', label: 'Always Free', icon: 'fa-circle-check' },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        title="Free SEO"
        subtitle="Tools"
        breadcrumbs={[{ label: 'Tools', active: true }]}
      />
      <ScrollingTicker />

      {/* ── Hero band ───────────────────────────────────────────────── */}
      <section className="tools-hero-section">
        {/* Grid dots background */}
        <div className="tools-hero-grid" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center g-5">

            {/* Left: headline */}
            <div className="col-lg-6">
              <MotionWrapper variant="up">
                <span className="tools-hero-badge">
                  <i className="fa-solid fa-bolt"></i>
                  {TOOLS.length} tools live — no account needed
                </span>
                <h2 className="tools-hero-heading">
                  Professional SEO tools.<br />
                  <span>Built for real results.</span>
                </h2>
                <p className="tools-hero-sub">
                  The same diagnostic tools our team uses every day — now free for every website owner. No limits, no paywalls, no sign-up.
                </p>
                <Link href="/tools/seo-audit" className="btn-default">
                  <i className="fa-solid fa-magnifying-glass-chart" style={{ marginRight: 8 }}></i>
                  Run Free SEO Audit
                </Link>
              </MotionWrapper>
            </div>

            {/* Right: terminal window mockup */}
            <div className="col-lg-6 d-none d-lg-block">
              <MotionWrapper variant="right" delay={0.15}>
                <div className="tools-terminal">
                  <div className="tools-terminal__bar">
                    <span className="tbar-dot tbar-red" />
                    <span className="tbar-dot tbar-yellow" />
                    <span className="tbar-dot tbar-green" />
                    <span className="tbar-title">seo-audit — rank-spiders</span>
                  </div>
                  <div className="tools-terminal__body">
                    <p className="tline"><span className="tprompt">$</span> <span className="tcmd">audit</span> <span className="targ">https://yoursite.com</span></p>
                    <p className="tline tline--dim">Fetching page…</p>
                    <p className="tline"><span className="tok">✓</span> Title tag found (54 chars)</p>
                    <p className="tline"><span className="tok">✓</span> Meta description (158 chars)</p>
                    <p className="tline"><span className="tok">✓</span> H1 tag — 1 found</p>
                    <p className="tline"><span className="twarn">!</span> Canonical URL — not set</p>
                    <p className="tline"><span className="tok">✓</span> Viewport meta — present</p>
                    <p className="tline"><span className="terr">✗</span> 3 images missing alt text</p>
                    <p className="tline"><span className="tok">✓</span> Load time — 840 ms</p>
                    <p className="tline tline--dim">────────────────────────</p>
                    <p className="tline"><span className="tscore">Score: 78/100</span> <span className="tgood">GOOD</span></p>
                    <p className="tline tline--blink">█</p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>

          {/* Stats strip */}
          <div className="tools-stats-strip">
            {STATS.map((s, i) => (
              <MotionWrapper key={i} delay={i * 0.08}>
                <div className="tools-stat">
                  <i className={`fa-solid ${s.icon}`}></i>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools grid ──────────────────────────────────────────────── */}
      <section className="tools-grid-section">
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center section-title-center" style={{ marginBottom: '3rem' }}>
              <h3>All Tools</h3>
              <h2>Pick a Tool, Get <span>Instant Answers</span></h2>
              <p>Every tool runs in real time against any live URL — no sample data, no demos.</p>
            </div>
          </MotionWrapper>

          <div className="tools-card-grid">
            {TOOLS.map((tool, i) => (
              <MotionWrapper key={tool.name} variant="up" delay={i * 0.07}>
                <Link
                  href={tool.slug}
                  className="tool-card"
                  style={{ '--tool-accent': tool.accent } as React.CSSProperties}
                >
                  {/* Top accent line */}
                  <div className="tool-card__line" />

                  {/* Header row */}
                  <div className="tool-card__header">
                    <div className="tool-card__icon-wrap">
                      <i className={`fa-solid ${tool.icon}`}></i>
                    </div>
                    {tool.tag && (
                      <span className="tool-card__tag">{tool.tag}</span>
                    )}
                    <span className="tool-card__live">
                      <span className="tool-live-dot" />
                      Live
                    </span>
                  </div>

                  <h3 className="tool-card__name">{tool.name}</h3>
                  <p className="tool-card__desc">{tool.description}</p>

                  {/* Check chips */}
                  <div className="tool-card__checks">
                    {tool.checks.map((c) => (
                      <span key={c} className="tool-chip">{c}</span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="tool-card__cta">
                    <span>Run Tool</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>

                  {/* Hover glow overlay */}
                  <div className="tool-card__glow" aria-hidden="true" />
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="tools-cta-section">
        <div className="container">
          <MotionWrapper variant="up">
            <div className="tools-cta-box">
              <div className="tools-cta-orb tools-cta-orb--1" aria-hidden="true" />
              <div className="tools-cta-orb tools-cta-orb--2" aria-hidden="true" />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="tools-hero-badge" style={{ marginBottom: '1rem' }}>
                  <i className="fa-solid fa-headset"></i>
                  Expert help available
                </span>
                <h3 className="tools-cta-heading">
                  Tools show you the problem.<br />
                  <span>We fix it.</span>
                </h3>
                <p className="tools-cta-sub">
                  Our team does deep technical SEO audits, competitive analysis, and builds strategies that actually move rankings — not just flag issues.
                </p>
                <Link href="/contact-us" className="btn-default">
                  Talk to an SEO Expert
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import MotionWrapper, { MotionCard } from '@/components/MotionWrapper';

/* ─── Types ───────────────────────────────────────────────────────────── */

interface OpenGraph {
  og_title: string;
  og_description: string;
  og_image: string;
  og_type: string;
}

interface AuditResult {
  url: string;
  status_code: number;
  load_time_ms: number;
  robots_allowed: boolean;
  title: string;
  title_length: number;
  meta_description: string;
  meta_description_length: number;
  h1_tags: string[];
  h2_count: number;
  h3_count: number;
  canonical: string;
  image_count: number;
  images_missing_alt_count: number;
  internal_links: number;
  external_links: number;
  open_graph: OpenGraph;
  has_viewport_meta: boolean;
  error?: string;
  message?: string;
}

type Status = 'pass' | 'warn' | 'fail';

interface Check {
  label: string;
  status: Status;
  detail: string;
  tip: string;
}

/* ─── Scoring logic ───────────────────────────────────────────────────── */

function buildChecks(d: AuditResult): Check[] {
  return [
    {
      label: 'Page Title',
      status: !d.title ? 'fail' : d.title_length >= 50 && d.title_length <= 60 ? 'pass' : 'warn',
      detail: d.title ? `"${d.title}" (${d.title_length} chars)` : 'Missing',
      tip: 'Optimal title length is 50–60 characters.',
    },
    {
      label: 'Meta Description',
      status: !d.meta_description
        ? 'fail'
        : d.meta_description_length >= 150 && d.meta_description_length <= 160
        ? 'pass'
        : 'warn',
      detail: d.meta_description ? `${d.meta_description_length} chars` : 'Missing',
      tip: 'Optimal meta description length is 150–160 characters.',
    },
    {
      label: 'H1 Tag',
      status: d.h1_tags.length === 1 ? 'pass' : d.h1_tags.length === 0 ? 'fail' : 'warn',
      detail:
        d.h1_tags.length === 0
          ? 'No H1 found'
          : d.h1_tags.length > 1
          ? `${d.h1_tags.length} H1 tags — use exactly one`
          : `"${d.h1_tags[0]}"`,
      tip: 'Each page should have exactly one H1 tag.',
    },
    {
      label: 'Heading Structure',
      status: d.h2_count > 0 ? 'pass' : 'warn',
      detail: `H1: ${d.h1_tags.length} · H2: ${d.h2_count} · H3: ${d.h3_count}`,
      tip: 'Use a logical heading hierarchy (H1 → H2 → H3) for content structure.',
    },
    {
      label: 'Canonical URL',
      status: d.canonical ? 'pass' : 'warn',
      detail: d.canonical || 'Not set',
      tip: 'A canonical tag prevents duplicate content issues.',
    },
    {
      label: 'Image Alt Text',
      status:
        d.image_count === 0 || d.images_missing_alt_count === 0
          ? 'pass'
          : d.images_missing_alt_count <= 2
          ? 'warn'
          : 'fail',
      detail:
        d.image_count === 0
          ? 'No images found'
          : `${d.images_missing_alt_count} of ${d.image_count} images missing alt`,
      tip: 'All images should have descriptive alt attributes for accessibility and SEO.',
    },
    {
      label: 'Viewport Meta',
      status: d.has_viewport_meta ? 'pass' : 'fail',
      detail: d.has_viewport_meta ? 'Present' : 'Missing',
      tip: 'Required for mobile-friendly pages (Core Web Vitals).',
    },
    {
      label: 'Open Graph Tags',
      status:
        d.open_graph.og_title && d.open_graph.og_description
          ? 'pass'
          : d.open_graph.og_title || d.open_graph.og_description
          ? 'warn'
          : 'fail',
      detail: d.open_graph.og_title
        ? `og:title — "${d.open_graph.og_title}"`
        : 'og:title and og:description missing',
      tip: 'Open Graph tags control how your page appears when shared on social media.',
    },
    {
      label: 'Page Load Time',
      status: d.load_time_ms < 1000 ? 'pass' : d.load_time_ms < 3000 ? 'warn' : 'fail',
      detail: `${d.load_time_ms} ms`,
      tip: 'Pages should respond in under 1 second. Slow servers hurt rankings.',
    },
    {
      label: 'Robots.txt Access',
      status: d.robots_allowed ? 'pass' : 'warn',
      detail: d.robots_allowed ? 'Crawling allowed' : 'Blocked by robots.txt',
      tip: 'Search engines must be able to crawl your page to rank it.',
    },
  ];
}

function computeScore(checks: Check[]): number {
  const points = checks.reduce(
    (sum, c) => sum + (c.status === 'pass' ? 2 : c.status === 'warn' ? 1 : 0),
    0
  );
  return Math.round((points / (checks.length * 2)) * 100);
}

/* ─── Sub-components ─────────────────────────────────────────────────── */

const STATUS_STYLE: Record<Status, { border: string; icon: string; color: string; bg: string }> = {
  pass: { border: 'rgba(16,185,129,0.35)', icon: '✓', color: 'var(--success-color)', bg: 'rgba(16,185,129,0.07)' },
  warn: { border: 'rgba(245,158,11,0.35)', icon: '!', color: '#F59E0B', bg: 'rgba(245,158,11,0.07)' },
  fail: { border: 'rgba(239,68,68,0.35)', icon: '✗', color: 'var(--error-color)', bg: 'rgba(239,68,68,0.07)' },
};

function CheckCard({ check }: { check: Check }) {
  const s = STATUS_STYLE[check.status];
  return (
    <MotionCard>
      <div
        style={{
          padding: '20px 24px',
          background: 'var(--card-bg)',
          border: `1px solid ${s.border}`,
          borderLeft: `4px solid ${s.color}`,
          borderRadius: 12,
          boxShadow: 'var(--shadow-sm)',
          height: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              background: s.bg,
              color: s.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.8rem',
              flexShrink: 0,
            }}
          >
            {s.icon}
          </span>
          <span
            style={{
              fontWeight: 600,
              fontFamily: 'var(--heading-font)',
              color: 'var(--text-color)',
              fontSize: '0.95rem',
            }}
          >
            {check.label}
          </span>
        </div>
        <p
          style={{
            fontSize: '0.84rem',
            color: 'var(--text-muted)',
            marginLeft: 36,
            marginBottom: 6,
            wordBreak: 'break-word',
            lineHeight: 1.5,
          }}
        >
          {check.detail}
        </p>
        <p
          style={{
            fontSize: '0.76rem',
            color: 'var(--text-muted)',
            marginLeft: 36,
            marginBottom: 0,
            fontStyle: 'italic',
            lineHeight: 1.4,
            opacity: 0.8,
          }}
        >
          {check.tip}
        </p>
      </div>
    </MotionCard>
  );
}

const WHAT_WE_CHECK = [
  { icon: 'fa-heading', label: 'Title Tags' },
  { icon: 'fa-align-left', label: 'Meta Description' },
  { icon: 'fa-sitemap', label: 'Heading Structure' },
  { icon: 'fa-link', label: 'Canonical URL' },
  { icon: 'fa-image', label: 'Image Alt Text' },
  { icon: 'fa-mobile-screen', label: 'Viewport Meta' },
  { icon: 'fa-share-nodes', label: 'Open Graph' },
  { icon: 'fa-gauge-high', label: 'Load Time' },
  { icon: 'fa-robot', label: 'Robots.txt' },
  { icon: 'fa-arrow-up-right-dots', label: 'Link Analysis' },
];

/* ─── Main component ─────────────────────────────────────────────────── */

export default function SeoAuditClient() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');

  async function runAudit() {
    const target = url.trim();
    if (!target) return;
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const res = await fetch(
        `http://localhost:8000/api/tools/audit?url=${encodeURIComponent(target)}`
      );
      const data: AuditResult = await res.json();
      if (data.error) {
        setError(data.message || 'Audit failed. Check the URL and try again.');
      } else {
        setResult(data);
      }
    } catch {
      setError('Could not reach the audit server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }

  const checks = result ? buildChecks(result) : [];
  const score = result ? computeScore(checks) : 0;
  const scoreColor =
    score >= 80 ? 'var(--success-color)' : score >= 50 ? '#F59E0B' : 'var(--error-color)';
  const scoreLabel = score >= 80 ? 'Good' : score >= 50 ? 'Needs Work' : 'Poor';

  return (
    <>
      {/* ── Hero / intro ────────────────────────────────────────────── */}
      <section style={{ padding: '72px 0 48px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
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
                  Free Tool — No Sign-Up Required
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
                  Instant On-Page SEO Analysis
                </h2>
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.05rem',
                    maxWidth: 600,
                    margin: '0 auto 40px',
                    lineHeight: 1.7,
                  }}
                >
                  Enter any URL and get a detailed audit of{' '}
                  <strong style={{ color: 'var(--text-color)' }}>10 critical SEO factors</strong>{' '}
                  in seconds — title tags, meta data, headings, Open Graph, speed, and more.
                </p>
              </MotionWrapper>

              {/* ── Audit form ─────────────────────────────────────── */}
              <MotionWrapper variant="up" delay={0.1}>
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !loading && runAudit()}
                    placeholder="https://yourwebsite.com"
                    disabled={loading}
                    style={{
                      flex: '1 1 300px',
                      maxWidth: 480,
                      padding: '15px 20px',
                      border: '1.5px solid var(--card-border)',
                      borderRadius: 10,
                      background: 'var(--card-bg)',
                      color: 'var(--text-color)',
                      font: '1rem var(--default-font)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = 'var(--accent-color)')
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = 'var(--card-border)')
                    }
                  />
                  <button
                    onClick={runAudit}
                    disabled={loading || !url.trim()}
                    style={{
                      padding: '15px 36px',
                      background: loading
                        ? 'var(--card-border)'
                        : 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-secondary-color) 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 10,
                      font: '600 1rem var(--default-font)',
                      cursor: loading ? 'wait' : 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'opacity 0.2s',
                      opacity: loading || !url.trim() ? 0.7 : 1,
                    }}
                  >
                    {loading ? (
                      <>
                        <i className="fa fa-circle-notch fa-spin" style={{ marginRight: 8 }} />
                        Analyzing…
                      </>
                    ) : (
                      <>
                        <i className="fa fa-magnifying-glass" style={{ marginRight: 8 }} />
                        Run Audit
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <div
                    style={{
                      marginTop: 16,
                      padding: '12px 18px',
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.25)',
                      borderRadius: 8,
                      color: 'var(--error-color)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <i className="fa fa-triangle-exclamation" style={{ marginRight: 8 }} />
                    {error}
                  </div>
                )}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      {result && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            {/* Score overview card */}
            <MotionWrapper variant="up">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 40,
                  padding: '32px 40px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 16,
                  marginBottom: 32,
                  boxShadow: 'var(--shadow-md)',
                  flexWrap: 'wrap',
                }}
              >
                {/* Score ring */}
                <div style={{ textAlign: 'center', minWidth: 110 }}>
                  <div
                    style={{
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      fontFamily: 'var(--heading-font)',
                      color: scoreColor,
                      lineHeight: 1,
                    }}
                  >
                    {score}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: scoreColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginTop: 4,
                    }}
                  >
                    {scoreLabel}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    SEO Score / 100
                  </div>
                </div>

                {/* Meta info */}
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      color: 'var(--text-color)',
                      marginBottom: 8,
                      wordBreak: 'break-all',
                      fontSize: '0.95rem',
                    }}
                  >
                    {result.url}
                  </div>
                  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    {[
                      { icon: 'fa-server', label: `HTTP ${result.status_code}`, color: result.status_code === 200 ? 'var(--success-color)' : 'var(--error-color)' },
                      { icon: 'fa-gauge', label: `${result.load_time_ms} ms`, color: 'var(--text-muted)' },
                      { icon: 'fa-arrow-right', label: `${result.internal_links} internal links`, color: 'var(--text-muted)' },
                      { icon: 'fa-arrow-up-right-from-square', label: `${result.external_links} external links`, color: 'var(--text-muted)' },
                    ].map(({ icon, label, color }) => (
                      <span key={label} style={{ fontSize: '0.83rem', color }}>
                        <i className={`fa ${icon}`} style={{ marginRight: 5 }} />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pass / Warn / Fail counts */}
                <div style={{ display: 'flex', gap: 24 }}>
                  {(
                    [
                      { label: 'Passed', s: 'pass' as Status, color: 'var(--success-color)' },
                      { label: 'Warnings', s: 'warn' as Status, color: '#F59E0B' },
                      { label: 'Failed', s: 'fail' as Status, color: 'var(--error-color)' },
                    ] as const
                  ).map(({ label, s, color }) => (
                    <div key={s} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: '1.8rem',
                          fontWeight: 800,
                          color,
                          fontFamily: 'var(--heading-font)',
                          lineHeight: 1,
                        }}
                      >
                        {checks.filter((c) => c.status === s).length}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Check cards grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                gap: 20,
              }}
            >
              {checks.map((check, i) => (
                <MotionWrapper key={check.label} variant="up" delay={i * 0.04}>
                  <CheckCard check={check} />
                </MotionWrapper>
              ))}
            </div>

            {/* CTA after results */}
            <MotionWrapper variant="up" delay={0.3}>
              <div
                style={{
                  marginTop: 48,
                  padding: '40px',
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(6,182,212,0.06) 100%)',
                  border: '1px solid rgba(79,70,229,0.15)',
                  borderRadius: 16,
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--heading-font)',
                    fontWeight: 700,
                    color: 'var(--primary-color)',
                    marginBottom: 12,
                  }}
                >
                  Want us to fix these issues for you?
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>
                  Our SEO team can implement every recommendation from this report — and build a
                  strategy that gets you ranking.
                </p>
                <a
                  href="/contact-us"
                  style={{
                    display: 'inline-block',
                    padding: '14px 36px',
                    background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary-color))',
                    color: '#fff',
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                  }}
                >
                  Get a Free Consultation
                </a>
              </div>
            </MotionWrapper>
          </div>
        </section>
      )}

      {/* ── What we check (shown before results) ─────────────────────── */}
      {!result && !loading && (
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <MotionWrapper variant="up">
              <h3
                style={{
                  textAlign: 'center',
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 700,
                  color: 'var(--primary-color)',
                  marginBottom: 40,
                  fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                }}
              >
                10 SEO factors checked instantly
              </h3>
            </MotionWrapper>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                gap: 16,
              }}
            >
              {WHAT_WE_CHECK.map((item, i) => (
                <MotionWrapper key={item.label} variant="up" delay={i * 0.05}>
                  <div
                    style={{
                      padding: '20px 16px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: 12,
                      textAlign: 'center',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(6,182,212,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                      }}
                    >
                      <i
                        className={`fa ${item.icon}`}
                        style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-color)',
                        fontFamily: 'var(--heading-font)',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

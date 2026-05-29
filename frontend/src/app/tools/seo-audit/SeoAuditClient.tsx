'use client';

import { useState } from 'react';
import MotionWrapper, { MotionCard } from '@/components/MotionWrapper';

interface OpenGraph {
  og_title: string; og_description: string; og_image: string; og_type: string;
}
interface AuditResult {
  url: string; status_code: number; load_time_ms: number; robots_allowed: boolean;
  title: string; title_length: number; meta_description: string; meta_description_length: number;
  h1_tags: string[]; h2_count: number; h3_count: number; canonical: string;
  image_count: number; images_missing_alt_count: number;
  internal_links: number; external_links: number;
  open_graph: OpenGraph; has_viewport_meta: boolean;
  error?: string; message?: string;
}
type Status = 'pass' | 'warn' | 'fail';
interface Check { label: string; status: Status; detail: string; tip: string; }

function buildChecks(d: AuditResult): Check[] {
  return [
    { label: 'Page Title', status: !d.title ? 'fail' : d.title_length >= 50 && d.title_length <= 60 ? 'pass' : 'warn', detail: d.title ? `"${d.title}" (${d.title_length} chars)` : 'Missing', tip: 'Optimal title length is 50–60 characters.' },
    { label: 'Meta Description', status: !d.meta_description ? 'fail' : d.meta_description_length >= 150 && d.meta_description_length <= 160 ? 'pass' : 'warn', detail: d.meta_description ? `${d.meta_description_length} chars` : 'Missing', tip: 'Optimal meta description length is 150–160 characters.' },
    { label: 'H1 Tag', status: d.h1_tags.length === 1 ? 'pass' : d.h1_tags.length === 0 ? 'fail' : 'warn', detail: d.h1_tags.length === 0 ? 'No H1 found' : d.h1_tags.length > 1 ? `${d.h1_tags.length} H1 tags — use exactly one` : `"${d.h1_tags[0]}"`, tip: 'Each page should have exactly one H1 tag.' },
    { label: 'Heading Structure', status: d.h2_count > 0 ? 'pass' : 'warn', detail: `H1: ${d.h1_tags.length} · H2: ${d.h2_count} · H3: ${d.h3_count}`, tip: 'Use a logical heading hierarchy (H1 → H2 → H3).' },
    { label: 'Canonical URL', status: d.canonical ? 'pass' : 'warn', detail: d.canonical || 'Not set', tip: 'A canonical tag prevents duplicate content issues.' },
    { label: 'Image Alt Text', status: d.image_count === 0 || d.images_missing_alt_count === 0 ? 'pass' : d.images_missing_alt_count <= 2 ? 'warn' : 'fail', detail: d.image_count === 0 ? 'No images found' : `${d.images_missing_alt_count} of ${d.image_count} missing alt`, tip: 'All images should have descriptive alt attributes.' },
    { label: 'Viewport Meta', status: d.has_viewport_meta ? 'pass' : 'fail', detail: d.has_viewport_meta ? 'Present' : 'Missing', tip: 'Required for mobile-friendly pages (Core Web Vitals).' },
    { label: 'Open Graph Tags', status: d.open_graph.og_title && d.open_graph.og_description ? 'pass' : d.open_graph.og_title || d.open_graph.og_description ? 'warn' : 'fail', detail: d.open_graph.og_title ? `og:title — "${d.open_graph.og_title}"` : 'og:title and og:description missing', tip: 'Open Graph controls how your page appears when shared.' },
    { label: 'Page Load Time', status: d.load_time_ms < 1000 ? 'pass' : d.load_time_ms < 3000 ? 'warn' : 'fail', detail: `${d.load_time_ms} ms`, tip: 'Pages should respond in under 1 second.' },
    { label: 'Robots.txt Access', status: d.robots_allowed ? 'pass' : 'warn', detail: d.robots_allowed ? 'Crawling allowed' : 'Blocked by robots.txt', tip: 'Search engines must be able to crawl your page to rank it.' },
  ];
}

function computeScore(checks: Check[]) {
  const pts = checks.reduce((s, c) => s + (c.status === 'pass' ? 2 : c.status === 'warn' ? 1 : 0), 0);
  return Math.round((pts / (checks.length * 2)) * 100);
}

const S: Record<Status, { border: string; icon: string; color: string; bg: string; label: string }> = {
  pass: { border: 'rgba(16,185,129,0.3)', icon: '✓', color: '#10B981', bg: 'rgba(16,185,129,0.08)', label: 'Pass' },
  warn: { border: 'rgba(245,158,11,0.3)', icon: '!', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', label: 'Warn' },
  fail: { border: 'rgba(239,68,68,0.3)',  icon: '✗', color: '#EF4444', bg: 'rgba(239,68,68,0.08)',  label: 'Fail' },
};

const WHAT = [
  { icon: 'fa-heading',            label: 'Title Tags' },
  { icon: 'fa-align-left',         label: 'Meta Description' },
  { icon: 'fa-sitemap',            label: 'Heading Structure' },
  { icon: 'fa-link',               label: 'Canonical URL' },
  { icon: 'fa-image',              label: 'Image Alt Text' },
  { icon: 'fa-mobile-screen',      label: 'Viewport Meta' },
  { icon: 'fa-share-nodes',        label: 'Open Graph' },
  { icon: 'fa-gauge-high',         label: 'Load Time' },
  { icon: 'fa-robot',              label: 'Robots.txt' },
  { icon: 'fa-arrow-up-right-dots',label: 'Link Analysis' },
];

/* SVG animated score ring */
function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  const label = score >= 80 ? 'Good' : score >= 50 ? 'Needs Work' : 'Poor';
  return (
    <div className="audit-score-ring">
      <svg width="136" height="136" viewBox="0 0 136 136">
        <circle cx="68" cy="68" r={r} className="score-ring-track" />
        <circle
          cx="68" cy="68" r={r}
          className="score-ring-fill"
          style={{
            stroke: color,
            strokeDasharray: circ,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="audit-score-inner">
        <span className="audit-score-num" style={{ color }}>{score}</span>
        <span className="audit-score-label" style={{ color }}>{label}</span>
        <span className="audit-score-sub">/ 100</span>
      </div>
    </div>
  );
}

export default function SeoAuditClient() {
  const [url, setUrl]     = useState('');
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState<AuditResult | null>(null);
  const [error,   setError]   = useState('');

  async function runAudit() {
    const target = url.trim();
    if (!target) return;
    setLoading(true); setResult(null); setError('');
    try {
      const res  = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/tools/audit?url=${encodeURIComponent(target)}`);
      const data: AuditResult = await res.json();
      data.error ? setError(data.message || 'Audit failed. Check the URL and try again.') : setResult(data);
    } catch {
      setError('Could not reach the audit server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }

  const checks     = result ? buildChecks(result) : [];
  const score      = result ? computeScore(checks) : 0;
  const scoreColor = score >= 80 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';

  return (
    <>
      {/* ── Scanner section ─────────────────────────────────────────── */}
      <section className="tool-scanner-section">
        <div className="tool-scanner-bg" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <MotionWrapper variant="up">
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <span className="tools-hero-badge">
                <i className="fa-solid fa-bolt"></i>
                Free Tool — No Sign-Up Required
              </span>
              <h2 className="tool-page-heading">Instant On-Page <span>SEO Analysis</span></h2>
              <p className="tool-page-sub">
                Enter any URL and get a detailed audit of <strong>10 critical SEO factors</strong> in seconds.
              </p>
            </div>
          </MotionWrapper>

          {/* URL input */}
          <MotionWrapper variant="up" delay={0.1}>
            <div className="tool-input-wrap">
              <div className={`tool-input-box${loading ? ' tool-input-box--scanning' : ''}`}>
                <div className="tool-input-bar">
                  <span className="tbar-dot tbar-red" />
                  <span className="tbar-dot tbar-yellow" />
                  <span className="tbar-dot tbar-green" />
                  <span className="tbar-url-label">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    SEO Audit
                  </span>
                </div>
                <div className="tool-input-body">
                  <i className="fa-solid fa-link tool-input-icon"></i>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !loading && runAudit()}
                    placeholder="https://yourwebsite.com"
                    disabled={loading}
                    className="tool-input-field"
                  />
                  <button
                    onClick={runAudit}
                    disabled={loading || !url.trim()}
                    className="tool-input-btn"
                  >
                    {loading ? (
                      <><i className="fa fa-circle-notch fa-spin"></i> Scanning…</>
                    ) : (
                      <><i className="fa-solid fa-magnifying-glass"></i> Run Audit</>
                    )}
                  </button>
                </div>
                {loading && <div className="tool-scan-line" />}
              </div>

              {error && (
                <div className="tool-error-bar">
                  <i className="fa fa-triangle-exclamation"></i> {error}
                </div>
              )}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ── Results ─────────────────────────────────────────────────── */}
      {result && (
        <section className="tool-results-section">
          <div className="container">

            {/* Score overview */}
            <MotionWrapper variant="up">
              <div className="audit-overview-card">
                <ScoreRing score={score} color={scoreColor} />

                <div className="audit-overview-meta">
                  <p className="audit-overview-url">{result.url}</p>
                  <div className="audit-overview-stats">
                    {[
                      { icon: 'fa-server',  val: `HTTP ${result.status_code}`, color: result.status_code === 200 ? '#10B981' : '#EF4444' },
                      { icon: 'fa-gauge',   val: `${result.load_time_ms} ms`,  color: 'var(--text-muted)' },
                      { icon: 'fa-link',    val: `${result.internal_links} internal`, color: 'var(--text-muted)' },
                      { icon: 'fa-arrow-up-right-from-square', val: `${result.external_links} external`, color: 'var(--text-muted)' },
                    ].map(({ icon, val, color }) => (
                      <span key={val} className="audit-stat-chip" style={{ color }}>
                        <i className={`fa ${icon}`}></i> {val}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="audit-overview-counts">
                  {(['pass', 'warn', 'fail'] as Status[]).map((s) => (
                    <div key={s} className="audit-count-item">
                      <span className="audit-count-num" style={{ color: S[s].color }}>
                        {checks.filter((c) => c.status === s).length}
                      </span>
                      <span className="audit-count-label">{S[s].label}ed</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Check cards */}
            <div className="audit-checks-grid">
              {checks.map((check, i) => (
                <MotionWrapper key={check.label} variant="up" delay={i * 0.04}>
                  <MotionCard>
                    <div className="audit-check-card" style={{ borderLeftColor: S[check.status].color }}>
                      <div className="audit-check-header">
                        <span className="audit-check-badge" style={{ background: S[check.status].bg, color: S[check.status].color }}>
                          {S[check.status].icon}
                        </span>
                        <span className="audit-check-label">{check.label}</span>
                        <span className="audit-check-status" style={{ color: S[check.status].color }}>
                          {S[check.status].label}
                        </span>
                      </div>
                      <p className="audit-check-detail">{check.detail}</p>
                      <p className="audit-check-tip">{check.tip}</p>
                    </div>
                  </MotionCard>
                </MotionWrapper>
              ))}
            </div>

            {/* After-results CTA */}
            <MotionWrapper variant="up" delay={0.3}>
              <div className="tool-after-cta">
                <div className="tools-cta-orb tools-cta-orb--1" aria-hidden="true" />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3>Want us to fix these issues for you?</h3>
                  <p>Our SEO team implements every recommendation from this report — and builds a strategy that gets you ranking.</p>
                  <a href="/contact-us" className="btn-default">Get a Free Consultation</a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>
      )}

      {/* ── What we check (pre-results) ─────────────────────────────── */}
      {!result && !loading && (
        <section className="tool-what-section">
          <div className="container">
            <MotionWrapper variant="up">
              <h3 className="tool-what-heading">10 SEO factors checked instantly</h3>
            </MotionWrapper>
            <div className="tool-what-grid">
              {WHAT.map((item, i) => (
                <MotionWrapper key={item.label} variant="up" delay={i * 0.05}>
                  <div className="tool-what-card">
                    <div className="tool-what-icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span>{item.label}</span>
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

'use client';

import { useState } from 'react';
import MotionWrapper, { MotionCard } from '@/components/MotionWrapper';

/* ── Types ──────────────────────────────────────────────────────────────── */
interface OG      { og_title: string; og_description: string; og_image: string; og_type: string; og_site_name: string }
interface Twitter { card: string; title: string; description: string; image: string }

export interface AuditResult {
  url: string; status_code: number; load_time_ms: number; robots_allowed: boolean; sitemap_exists?: boolean;
  is_https?: boolean;
  title: string; title_length: number;
  meta_description: string; meta_description_length: number;
  meta_robots?: string; is_noindex?: boolean;
  h1_tags: string[]; h2_count: number; h3_count: number;
  canonical: string;
  image_count: number; images_missing_alt_count: number; images_missing_dimensions?: number;
  internal_links: number; external_links: number; nofollow_links?: number;
  open_graph: OG; twitter?: Twitter;
  has_schema?: boolean; schema_types?: string[];
  has_viewport_meta: boolean; has_favicon?: boolean;
  lang?: string; sitemap_in_head?: boolean;
  word_count?: number; html_size_kb?: number; text_html_ratio?: number;
  url_length?: number; url_has_underscores?: boolean; url_has_uppercase?: boolean; url_has_params?: boolean;
  warning?: string; error?: string; message?: string;
}

export type Status = 'pass' | 'warn' | 'fail';
export type Group  = 'On-Page SEO' | 'Technical' | 'Content' | 'Social & Schema' | 'Links & Media';

export interface Check {
  label: string; group: Group; status: Status;
  detail: string; tip: string; fix: string;
}

/* ── Check builder ──────────────────────────────────────────────────────── */
export function buildChecks(d: AuditResult): Check[] {
  const og  = d.open_graph ?? { og_title: '', og_description: '', og_image: '', og_type: '', og_site_name: '' };
  const tw  = d.twitter    ?? { card: '', title: '', description: '', image: '' };
  const h1  = d.h1_tags    ?? [];

  return [
    /* ── ON-PAGE SEO ─────────────────────────────────────────── */
    {
      label: 'Page Title', group: 'On-Page SEO',
      status: !d.title ? 'fail' : (d.title_length >= 50 && d.title_length <= 60) ? 'pass' : 'warn',
      detail: d.title ? `"${d.title}" (${d.title_length} chars)` : 'Missing — no <title> tag found',
      tip: 'Optimal title length is 50–60 characters.',
      fix: !d.title
        ? 'Add a unique <title> tag inside <head>. Format: Primary Keyword | Brand Name'
        : d.title_length < 50
          ? `Title is too short (${d.title_length} chars). Expand it to 50–60 characters by adding your primary keyword and brand name.`
          : `Title is too long (${d.title_length} chars). Trim to under 60 characters — Google truncates longer titles in search results.`,
    },
    {
      label: 'Meta Description', group: 'On-Page SEO',
      status: !d.meta_description ? 'fail' : (d.meta_description_length >= 150 && d.meta_description_length <= 160) ? 'pass' : 'warn',
      detail: d.meta_description ? `"${d.meta_description.slice(0, 80)}…" (${d.meta_description_length} chars)` : 'Missing',
      tip: 'Optimal meta description length is 150–160 characters.',
      fix: !d.meta_description
        ? 'Add a <meta name="description" content="..."> tag. Write 150–160 characters describing the page, include your target keyword, and add a call-to-action.'
        : d.meta_description_length < 150
          ? 'Description is too short. Expand to 150–160 chars — include your keyword and a compelling reason to click.'
          : 'Description is too long — Google will truncate it. Cut to under 160 characters while keeping the keyword and CTA.',
    },
    {
      label: 'H1 Tag', group: 'On-Page SEO',
      status: h1.length === 1 ? 'pass' : h1.length === 0 ? 'fail' : 'warn',
      detail: h1.length === 0 ? 'No H1 found' : h1.length > 1 ? `${h1.length} H1 tags found — use exactly one` : `"${h1[0]}"`,
      tip: 'Each page should have exactly one H1 tag.',
      fix: h1.length === 0
        ? 'Add a single <h1> tag containing your primary keyword. It should clearly describe the main topic of the page.'
        : `You have ${h1.length} H1 tags. Keep only one — convert the others to <h2> or <h3> tags. Multiple H1s dilute keyword relevance.`,
    },
    {
      label: 'Heading Hierarchy', group: 'On-Page SEO',
      status: h1.length === 1 && d.h2_count > 0 ? 'pass' : d.h2_count === 0 ? 'warn' : 'warn',
      detail: `H1: ${h1.length} · H2: ${d.h2_count} · H3: ${d.h3_count}`,
      tip: 'Use a logical heading hierarchy (H1 → H2 → H3).',
      fix: 'Structure your headings in order: one H1 (page title), multiple H2s (main sections), H3s (subsections). Never skip levels (e.g. H1 → H3). Include secondary keywords in H2 tags.',
    },
    {
      label: 'Robots / Noindex', group: 'On-Page SEO',
      status: d.is_noindex ? 'fail' : 'pass',
      detail: d.is_noindex ? `⚠ noindex — page may be excluded from search (meta robots: "${d.meta_robots}")` : d.meta_robots ? `meta robots: "${d.meta_robots}"` : 'No noindex directive',
      tip: 'Make sure your page is not accidentally marked noindex.',
      fix: 'Remove or change the <meta name="robots" content="noindex"> tag. If this page should be indexed, use content="index, follow" or remove the tag entirely.',
    },
    {
      label: 'Canonical URL', group: 'On-Page SEO',
      status: d.canonical ? 'pass' : 'warn',
      detail: d.canonical || 'Not set — no canonical tag found',
      tip: 'A canonical tag prevents duplicate content issues.',
      fix: `Add <link rel="canonical" href="${d.url}"> inside <head>. This tells Google which URL is the preferred version of this page and prevents duplicate content penalties.`,
    },

    /* ── TECHNICAL ───────────────────────────────────────────── */
    {
      label: 'HTTPS / SSL', group: 'Technical',
      status: d.is_https ? 'pass' : 'fail',
      detail: d.is_https ? 'Site is served over HTTPS' : 'Page is served over HTTP (not secure)',
      tip: 'HTTPS is a confirmed Google ranking factor and a trust signal for visitors.',
      fix: 'Install an SSL certificate and redirect all HTTP traffic to HTTPS. Use Let\'s Encrypt for a free certificate. Update all internal links to use https://. Set up 301 redirects from http:// to https://.',
    },
    {
      label: 'Viewport Meta', group: 'Technical',
      status: d.has_viewport_meta ? 'pass' : 'fail',
      detail: d.has_viewport_meta ? 'Present (width=device-width)' : 'Missing or malformed viewport tag',
      tip: 'Required for mobile-friendly pages.',
      fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> inside <head>. Without this, Google may classify your page as not mobile-friendly.',
    },
    {
      label: 'Language Attribute', group: 'Technical',
      status: d.lang ? 'pass' : 'warn',
      detail: d.lang ? `lang="${d.lang}"` : 'Missing lang attribute on <html>',
      tip: 'Helps search engines understand the page language.',
      fix: 'Add a lang attribute to your <html> tag. Example: <html lang="en"> for English, <html lang="en-IN"> for Indian English. This helps Google serve your page to the right audience.',
    },
    {
      label: 'Favicon', group: 'Technical',
      status: d.has_favicon ? 'pass' : 'warn',
      detail: d.has_favicon ? 'Favicon detected' : 'No favicon found',
      tip: 'Favicons improve brand recognition in browser tabs and bookmarks.',
      fix: 'Add a favicon.ico to your root directory and reference it: <link rel="icon" href="/favicon.ico">. Also add a 192×192 PNG for Android and a 180×180 PNG for Apple Touch icon.',
    },
    {
      label: 'XML Sitemap', group: 'Technical',
      status: d.sitemap_exists ? 'pass' : 'warn',
      detail: d.sitemap_exists ? '/sitemap.xml found and accessible' : 'No sitemap.xml found at /sitemap.xml',
      tip: 'A sitemap helps search engines discover and index all your pages.',
      fix: 'Create an XML sitemap listing all important URLs on your site. Submit it to Google Search Console and add "Sitemap: https://yourdomain.com/sitemap.xml" to your robots.txt file.',
    },
    {
      label: 'Robots.txt', group: 'Technical',
      status: d.robots_allowed ? 'pass' : 'warn',
      detail: d.robots_allowed ? 'Crawling allowed' : 'Page is blocked by robots.txt',
      tip: 'Search engines must be able to crawl your page to rank it.',
      fix: 'Check your robots.txt file. If this page should be indexed, remove the Disallow rule that is blocking it. Confirm by testing in Google Search Console → URL Inspection.',
    },
    {
      label: 'Page Load Time', group: 'Technical',
      status: d.load_time_ms < 1000 ? 'pass' : d.load_time_ms < 3000 ? 'warn' : 'fail',
      detail: `${d.load_time_ms} ms (server response time)`,
      tip: 'Faster pages rank better and convert more visitors.',
      fix: 'Optimise server response time: enable GZIP compression, use a CDN, optimise images (convert to WebP), minify CSS/JS, enable browser caching, and consider upgrading hosting. Target under 1000ms.',
    },
    {
      label: 'Page Size', group: 'Technical',
      status: !d.html_size_kb ? 'pass' : d.html_size_kb < 100 ? 'pass' : d.html_size_kb < 200 ? 'warn' : 'fail',
      detail: d.html_size_kb ? `${d.html_size_kb} KB (HTML document)` : 'N/A',
      tip: 'Large HTML files slow down parsing and hurt Core Web Vitals.',
      fix: 'Reduce HTML size by: minifying HTML/CSS/JS, removing inline styles/scripts, cleaning up unused code, and server-side rendering only what\'s needed. Target under 100 KB.',
    },
    {
      label: 'URL Structure', group: 'Technical',
      status: (d.url_has_underscores || d.url_has_uppercase || (d.url_has_params && (d.url_length ?? 0) > 100)) ? 'warn' : 'pass',
      detail: d.url_has_underscores ? 'URL contains underscores (use hyphens)' : d.url_has_uppercase ? 'URL contains uppercase characters' : `${d.url_length ?? 0} chars — clean URL`,
      tip: 'URLs should use hyphens, be lowercase, and avoid unnecessary parameters.',
      fix: 'Fix URL issues: (1) Replace underscores with hyphens — Google treats hyphens as word separators. (2) Use lowercase-only URLs. (3) Keep URLs short and descriptive. (4) Avoid unnecessary query parameters for SEO-critical pages.',
    },

    /* ── CONTENT ──────────────────────────────────────────────── */
    {
      label: 'Word Count', group: 'Content',
      status: !d.word_count ? 'warn' : d.word_count >= 500 ? 'pass' : d.word_count >= 300 ? 'warn' : 'fail',
      detail: d.word_count ? `${d.word_count.toLocaleString()} words` : 'Could not measure',
      tip: 'Pages with 500+ words tend to rank better for competitive keywords.',
      fix: d.word_count && d.word_count < 300
        ? 'Page has thin content. Add at least 500 words of high-quality, relevant content. For competitive keywords, aim for 1,000–2,000+ words. Cover the topic comprehensively.'
        : 'Expand content to at least 500 words. Include your target keywords naturally, cover related topics, add FAQs, and answer common user questions.',
    },
    {
      label: 'Text-to-HTML Ratio', group: 'Content',
      status: !d.text_html_ratio ? 'warn' : d.text_html_ratio >= 15 ? 'pass' : d.text_html_ratio >= 8 ? 'warn' : 'fail',
      detail: d.text_html_ratio ? `${d.text_html_ratio}% (text vs total HTML)` : 'N/A',
      tip: 'A higher text-to-HTML ratio indicates content-rich pages.',
      fix: 'Improve content density: remove unnecessary HTML markup, reduce inline styles, clean up commented-out code, and add more visible text content. A ratio below 10% often indicates thin or code-heavy pages.',
    },

    /* ── SOCIAL & SCHEMA ──────────────────────────────────────── */
    {
      label: 'Open Graph Tags', group: 'Social & Schema',
      status: og.og_title && og.og_description && og.og_image ? 'pass' : og.og_title && og.og_description ? 'warn' : og.og_title || og.og_description ? 'warn' : 'fail',
      detail: og.og_title ? `og:title ✓  og:description ${og.og_description ? '✓' : '✗'}  og:image ${og.og_image ? '✓' : '✗'}` : 'No Open Graph tags found',
      tip: 'Open Graph controls how pages appear when shared on social media.',
      fix: 'Add complete Open Graph tags inside <head>:\n<meta property="og:title" content="Your Title">\n<meta property="og:description" content="150–160 char description">\n<meta property="og:image" content="https://yourdomain.com/image.jpg"> (min 1200×630px)\n<meta property="og:url" content="https://yourdomain.com/page">\n<meta property="og:type" content="website">',
    },
    {
      label: 'OG Image', group: 'Social & Schema',
      status: og.og_image ? 'pass' : 'warn',
      detail: og.og_image ? og.og_image.slice(0, 60) + (og.og_image.length > 60 ? '…' : '') : 'og:image not set',
      tip: 'OG image is shown when your page is shared on Facebook, LinkedIn, and WhatsApp.',
      fix: 'Add <meta property="og:image" content="URL"> with an image of at least 1200×630 pixels. Use a branded image that represents the page content. Recommended: PNG or JPG under 1 MB.',
    },
    {
      label: 'Twitter Card', group: 'Social & Schema',
      status: tw.card && tw.title && tw.description ? 'pass' : tw.card ? 'warn' : 'warn',
      detail: tw.card ? `twitter:card="${tw.card}" ${tw.title ? '· title ✓' : '· title ✗'} ${tw.image ? '· image ✓' : '· image ✗'}` : 'No Twitter Card tags found',
      tip: 'Twitter Cards control how your page appears when shared on X (Twitter).',
      fix: 'Add Twitter Card meta tags:\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="Your Title">\n<meta name="twitter:description" content="Your description">\n<meta name="twitter:image" content="https://yourdomain.com/image.jpg">',
    },
    {
      label: 'Structured Data', group: 'Social & Schema',
      status: d.has_schema ? 'pass' : 'warn',
      detail: d.has_schema ? `JSON-LD found: ${(d.schema_types ?? []).join(', ') || 'Schema detected'}` : 'No structured data (JSON-LD) found',
      tip: 'Structured data enables rich results (star ratings, FAQs, breadcrumbs) in Google.',
      fix: 'Add JSON-LD structured data inside <script type="application/ld+json">. Start with Organization schema for your homepage. Add Article schema for blog posts, Product schema for e-commerce, FAQ schema for FAQ pages, and LocalBusiness schema for local SEO. Use Google\'s Rich Results Test to validate.',
    },

    /* ── LINKS & MEDIA ────────────────────────────────────────── */
    {
      label: 'Image Alt Text', group: 'Links & Media',
      status: d.image_count === 0 || d.images_missing_alt_count === 0 ? 'pass' : d.images_missing_alt_count <= 2 ? 'warn' : 'fail',
      detail: d.image_count === 0 ? 'No images found' : `${d.images_missing_alt_count} of ${d.image_count} images missing alt text`,
      tip: 'Alt text helps search engines understand images and improves accessibility.',
      fix: `${d.images_missing_alt_count} image(s) are missing alt text. Add descriptive alt attributes: <img src="..." alt="Descriptive text about the image">. Include target keywords where relevant. Use alt="" only for purely decorative images (icons, spacers).`,
    },
    {
      label: 'Internal Links', group: 'Links & Media',
      status: d.internal_links >= 3 ? 'pass' : d.internal_links >= 1 ? 'warn' : 'fail',
      detail: `${d.internal_links} internal links · ${d.external_links} external links${d.nofollow_links ? ` · ${d.nofollow_links} nofollow` : ''}`,
      tip: 'Internal links distribute PageRank and help users navigate your site.',
      fix: 'Add more internal links to related pages on your site. Each page should have at least 3–5 internal links. Use descriptive anchor text containing keywords (avoid "click here"). Link from high-authority pages to important target pages.',
    },
    {
      label: 'Image Dimensions', group: 'Links & Media',
      status: !d.images_missing_dimensions || d.images_missing_dimensions === 0 ? 'pass' : d.images_missing_dimensions <= 3 ? 'warn' : 'warn',
      detail: d.images_missing_dimensions ? `${d.images_missing_dimensions} of ${d.image_count} images missing width/height attributes` : 'All images have dimensions specified',
      tip: 'Specifying image dimensions prevents layout shifts (CLS) and improves Core Web Vitals.',
      fix: 'Add width and height attributes to all <img> tags: <img src="..." width="800" height="600" alt="...">. This allows the browser to reserve space before the image loads, preventing Cumulative Layout Shift (CLS) — a Core Web Vitals metric.',
    },
  ];
}

/* ── Score ──────────────────────────────────────────────────────────────── */
export function computeScore(checks: Check[]) {
  const pts = checks.reduce((s, c) => s + (c.status === 'pass' ? 2 : c.status === 'warn' ? 1 : 0), 0);
  return Math.round((pts / (checks.length * 2)) * 100);
}

/* ── Constants ───────────────────────────────────────────────────────────── */
export const GROUPS: Group[] = ['On-Page SEO', 'Technical', 'Content', 'Social & Schema', 'Links & Media'];

export const GROUP_ICONS: Record<Group, string> = {
  'On-Page SEO':    'fa-magnifying-glass',
  'Technical':      'fa-gear',
  'Content':        'fa-file-lines',
  'Social & Schema':'fa-share-nodes',
  'Links & Media':  'fa-link',
};

export const S: Record<Status, { border: string; icon: string; color: string; bg: string; label: string }> = {
  pass: { border: 'rgba(16,185,129,0.3)', icon: '✓', color: '#10B981', bg: 'rgba(16,185,129,0.08)', label: 'Pass' },
  warn: { border: 'rgba(245,158,11,0.3)', icon: '!', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', label: 'Warn' },
  fail: { border: 'rgba(239,68,68,0.3)',  icon: '✗', color: '#EF4444', bg: 'rgba(239,68,68,0.08)',  label: 'Fail' },
};

/* ── Sub-components ─────────────────────────────────────────────────────── */
function ScoreRing({ score, color }: { score: number; color: string }) {
  const r      = 54;
  const circ   = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  const label  = score >= 80 ? 'Good' : score >= 50 ? 'Needs Work' : 'Poor';
  return (
    <div className="audit-score-ring">
      <svg width="136" height="136" viewBox="0 0 136 136">
        <circle cx="68" cy="68" r={r} className="score-ring-track" />
        <circle cx="68" cy="68" r={r} className="score-ring-fill"
          style={{ stroke: color, strokeDasharray: circ, strokeDashoffset: offset, transition: 'stroke-dashoffset 0.8s ease' }} />
      </svg>
      <div className="audit-score-inner">
        <span className="audit-score-num" style={{ color }}>{score}</span>
        <span className="audit-score-label" style={{ color }}>{label}</span>
        <span className="audit-score-sub">/ 100</span>
      </div>
    </div>
  );
}

function CheckCard({ check }: { check: Check }) {
  const [open, setOpen] = useState(false);
  const s = S[check.status];
  return (
    <div className="audit-check-card" style={{ borderLeftColor: s.color }}>
      <div className="audit-check-header">
        <span className="audit-check-badge" style={{ background: s.bg, color: s.color }}>{s.icon}</span>
        <span className="audit-check-label">{check.label}</span>
        <span className="audit-check-status" style={{ color: s.color }}>{s.label}</span>
      </div>
      <p className="audit-check-detail">{check.detail}</p>
      <p className="audit-check-tip">{check.tip}</p>
      {check.status !== 'pass' && (
        <div className="audit-check-fix-wrap">
          <button className="audit-fix-toggle" onClick={() => setOpen(o => !o)} style={{ color: s.color }}>
            <i className={`fa-solid fa-${open ? 'chevron-up' : 'wrench'}`}></i>
            {open ? 'Hide fix' : 'How to fix'}
          </button>
          <div className="audit-fix-body" style={{ display: open ? undefined : 'none' }}>
            <i className="fa-solid fa-circle-info" style={{ color: s.color, marginRight: 8 }}></i>
            {check.fix}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── CategoryBreakdown ──────────────────────────────────────────────────── */
function CategoryBreakdown({ checks }: { checks: Check[] }) {
  return (
    <div className="audit-category-panel">
      <h3 className="audit-category-heading">
        <i className="fa-solid fa-chart-bar" /> Score by Category
      </h3>
      <div className="audit-cat-grid">
        {GROUPS.map(group => {
          const gc      = checks.filter(c => c.group === group);
          const pass    = gc.filter(c => c.status === 'pass').length;
          const warn    = gc.filter(c => c.status === 'warn').length;
          const fail    = gc.filter(c => c.status === 'fail').length;
          const total   = gc.length;
          const passPct = total ? Math.round((pass / total) * 100) : 0;
          const warnPct = total ? Math.round((warn / total) * 100) : 0;
          const color   = passPct >= 80 ? '#10B981' : passPct >= 50 ? '#F59E0B' : '#EF4444';
          return (
            <div key={group} className="audit-cat-row">
              <div className="audit-cat-label">
                <i className={`fa-solid ${GROUP_ICONS[group]}`} style={{ color, width: 16 }} />
                <span className="audit-cat-name">{group}</span>
              </div>
              <div className="audit-cat-bar-track">
                <div className="audit-cat-bar-pass" style={{ width: `${passPct}%` }} />
                <div className="audit-cat-bar-warn" style={{ width: `${warnPct}%` }} />
              </div>
              <div className="audit-cat-counts">
                <span style={{ color: '#10B981' }}>{pass}<small>P</small></span>
                <span style={{ color: '#F59E0B' }}>{warn}<small>W</small></span>
                <span style={{ color: '#EF4444' }}>{fail}<small>F</small></span>
              </div>
              <span className="audit-cat-pct" style={{ color }}>{passPct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── PrintReport ─────────────────────────────────────────────────────────── */
function PrintReport({ result, checks, score }: { result: AuditResult; checks: Check[]; score: number }) {
  const fails      = checks.filter(c => c.status === 'fail');
  const warns      = checks.filter(c => c.status === 'warn');
  const passes     = checks.filter(c => c.status === 'pass');
  const issues     = [...fails, ...warns];
  const failCnt    = fails.length;
  const warnCnt    = warns.length;
  const passCnt    = passes.length;
  const scoreColor = score >= 80 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
  const scoreLabel = score >= 80 ? 'Good' : score >= 50 ? 'Needs Work' : 'Poor';
  const dateStr    = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const loadSt   = result.load_time_ms < 1000 ? 'pass' : result.load_time_ms < 3000 ? 'warn' : 'fail';
  const wordSt   = !result.word_count ? 'warn' : result.word_count >= 500 ? 'pass' : result.word_count >= 300 ? 'warn' : 'fail';
  const sizeSt   = !result.html_size_kb ? 'pass' : result.html_size_kb < 100 ? 'pass' : result.html_size_kb < 200 ? 'warn' : 'fail';
  const titleSt  = !result.title ? 'fail' : (result.title_length >= 50 && result.title_length <= 60) ? 'pass' : 'warn';
  const metaSt   = !result.meta_description ? 'fail' : (result.meta_description_length >= 150 && result.meta_description_length <= 160) ? 'pass' : 'warn';
  const h1St     = (result.h1_tags?.length ?? 0) === 1 ? 'pass' : (result.h1_tags?.length ?? 0) === 0 ? 'fail' : 'warn';
  const ratioSt  = !result.text_html_ratio ? 'warn' : result.text_html_ratio >= 15 ? 'pass' : result.text_html_ratio >= 8 ? 'warn' : 'fail';
  const imgAltSt = result.image_count === 0 || result.images_missing_alt_count === 0 ? 'pass' : result.images_missing_alt_count <= 2 ? 'warn' : 'fail';

  const keySignals = [
    { label: 'HTTPS Active',    ok: !!result.is_https },
    { label: 'Mobile Ready',    ok: result.has_viewport_meta },
    { label: 'Canonical Set',   ok: !!result.canonical },
    { label: 'Robots OK',       ok: result.robots_allowed },
    { label: 'Sitemap Found',   ok: !!result.sitemap_exists },
    { label: 'Structured Data', ok: !!result.has_schema },
    { label: 'OG Tags Set',     ok: !!(result.open_graph?.og_title && result.open_graph?.og_image) },
    { label: 'Favicon',         ok: !!result.has_favicon },
  ];

  return (
    <div className="print-only pr-root">

      {/* Watermark — fixed = faint logo on every page */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pr-watermark" src="/images/logo/rankspiders.png" alt="" aria-hidden="true" />

      {/* Fixed footer — repeats on every page */}
      <div className="pr-page-footer">
        <span>Rank Spiders · rankspiders.com</span>
        <span>Confidential SEO Audit · {dateStr}</span>
      </div>

      {/* ════════════ PAGE 1 — Overview & Analysis ════════════ */}

      {/* Header */}
      <header className="pr-header">
        <div className="pr-header-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo/rankspiders.png" alt="Rank Spiders" className="pr-logo" />
          <div className="pr-header-info">
            <div className="pr-report-title">SEO Audit Report</div>
            <div className="pr-report-url">{result.url}</div>
            <div className="pr-report-date">Generated {dateStr}</div>
          </div>
        </div>
        <div className="pr-score-badge" style={{ borderColor: scoreColor }}>
          <span className="pr-score-num" style={{ color: scoreColor }}>{score}</span>
          <span className="pr-score-label" style={{ color: scoreColor }}>{scoreLabel}</span>
          <span className="pr-score-sub">/ 100</span>
        </div>
      </header>
      <div className="pr-divider" style={{ borderColor: scoreColor }} />

      {/* Metrics strip */}
      <div className="pr-metrics-strip">
        {[
          { label: 'SEO Score',  val: `${score}/100`,                                                    color: scoreColor },
          { label: 'Passed',     val: String(passCnt),                                                   color: '#10B981' },
          { label: 'Warnings',   val: String(warnCnt),                                                   color: '#F59E0B' },
          { label: 'Failed',     val: String(failCnt),                                                   color: '#EF4444' },
          { label: 'Load Time',  val: `${result.load_time_ms} ms`,                                      color: S[loadSt].color },
          { label: 'Page Size',  val: result.html_size_kb ? `${result.html_size_kb} KB` : 'N/A',        color: S[sizeSt].color },
          { label: 'Words',      val: result.word_count ? result.word_count.toLocaleString() : 'N/A',   color: S[wordSt].color },
          { label: 'HTTPS',      val: result.is_https ? 'Yes ✓' : 'No ✗',                               color: result.is_https ? '#10B981' : '#EF4444' },
        ].map(({ label, val, color }) => (
          <div key={label} className="pr-metric-cell">
            <span className="pr-metric-val" style={{ color }}>{val}</span>
            <span className="pr-metric-label">{label}</span>
          </div>
        ))}
      </div>

      {/* ── 3×2 main info grid ──────────────────────────────────── */}
      <div className="pr-main-grid">

        {/* Row 1, Col 1 — Category Breakdown */}
        <div className="pr-panel">
          <div className="pr-panel-heading"><i className="fa-solid fa-chart-bar" /> Category Breakdown</div>
          <div className="pr-cat-list">
            {GROUPS.map(group => {
              const gc      = checks.filter(c => c.group === group);
              const pass    = gc.filter(c => c.status === 'pass').length;
              const warn    = gc.filter(c => c.status === 'warn').length;
              const fail    = gc.filter(c => c.status === 'fail').length;
              const passPct = gc.length ? Math.round((pass / gc.length) * 100) : 0;
              const warnPct = gc.length ? Math.round((warn / gc.length) * 100) : 0;
              const color   = passPct >= 80 ? '#10B981' : passPct >= 50 ? '#F59E0B' : '#EF4444';
              return (
                <div key={group} className="pr-cat-row">
                  <div className="pr-cat-label">
                    <i className={`fa-solid ${GROUP_ICONS[group]}`} style={{ color, width: 10, marginRight: 5 }} />
                    <span className="pr-cat-name">{group}</span>
                  </div>
                  <div className="pr-cat-bar-track">
                    <div className="pr-cat-bar-pass" style={{ width: `${passPct}%` }} />
                    <div className="pr-cat-bar-warn" style={{ width: `${warnPct}%` }} />
                  </div>
                  <span className="pr-cat-pct" style={{ color }}>{passPct}%</span>
                  <span className="pr-cat-counts">
                    <span style={{ color: '#10B981' }}>{pass}P</span>{' · '}
                    <span style={{ color: '#F59E0B' }}>{warn}W</span>{' · '}
                    <span style={{ color: '#EF4444' }}>{fail}F</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 1, Col 2 — Key Signals */}
        <div className="pr-panel">
          <div className="pr-panel-heading"><i className="fa-solid fa-signal" /> Key Signals</div>
          <div className="pr-signals-grid">
            {keySignals.map(({ label, ok }) => (
              <div key={label} className={`pr-signal pr-signal--${ok ? 'pass' : 'fail'}`}>
                <span className="pr-signal-icon">{ok ? '✓' : '✗'}</span>
                <span className="pr-signal-label">{label}</span>
              </div>
            ))}
          </div>
          {failCnt > 0 && (
            <>
              <div className="pr-panel-subheading">
                <i className="fa-solid fa-fire" style={{ color: '#EF4444' }} /> Top Critical Issues
              </div>
              {fails.slice(0, 3).map(f => (
                <div key={f.label} className="pr-top-issue">
                  <span className="pr-top-issue-dot" />
                  <span>{f.label}</span>
                </div>
              ))}
              {failCnt > 3 && <div className="pr-top-more">+{failCnt - 3} more — see page 2</div>}
            </>
          )}
        </div>

        {/* Row 2, Col 1 — On-Page SEO */}
        <div className="pr-panel">
          <div className="pr-panel-heading"><i className="fa-solid fa-file-lines" /> On-Page SEO</div>
          {[
            { key: 'Title Length',   val: result.title ? `${result.title_length} chars` : 'Missing',                        st: titleSt },
            { key: 'Meta Desc',      val: result.meta_description ? `${result.meta_description_length} chars` : 'Missing',  st: metaSt  },
            { key: 'H1 / H2 / H3',  val: `${result.h1_tags?.length ?? 0} / ${result.h2_count} / ${result.h3_count}`,       st: h1St    },
            { key: 'Canonical URL',  val: result.canonical ? 'Set ✓' : 'Missing',                                           st: result.canonical ? 'pass' : 'warn' },
            { key: 'Noindex Risk',   val: result.is_noindex ? 'BLOCKED ✗' : 'Safe ✓',                                       st: result.is_noindex ? 'fail' : 'pass' },
            { key: 'Lang Attribute', val: result.lang ?? 'Missing',                                                          st: result.lang ? 'pass' : 'warn' },
          ].map(({ key, val, st }) => (
            <div key={key} className="pr-irow">
              <span className="pr-ikey">{key}</span>
              <span className={`pr-ival pr-iv--${st}`}>{val}</span>
            </div>
          ))}
        </div>

        {/* Row 2, Col 2 — Technical Health */}
        <div className="pr-panel">
          <div className="pr-panel-heading"><i className="fa-solid fa-gear" /> Technical Health</div>
          {[
            { key: 'HTTP Status',  val: String(result.status_code),                                       st: result.status_code === 200 ? 'pass' : 'fail' },
            { key: 'Load Time',    val: `${result.load_time_ms} ms`,                                     st: loadSt  },
            { key: 'Page Size',    val: result.html_size_kb ? `${result.html_size_kb} KB` : 'N/A',      st: sizeSt  },
            { key: 'URL Length',   val: result.url_length ? `${result.url_length} chars` : 'N/A',       st: (result.url_length ?? 0) < 80 ? 'pass' : 'warn' },
            { key: 'Sitemap',      val: result.sitemap_exists ? 'Found ✓' : 'Missing',                  st: result.sitemap_exists ? 'pass' : 'warn' },
            { key: 'Robots.txt',   val: result.robots_allowed ? 'Crawl OK ✓' : 'Blocked ✗',            st: result.robots_allowed ? 'pass' : 'warn' },
          ].map(({ key, val, st }) => (
            <div key={key} className="pr-irow">
              <span className="pr-ikey">{key}</span>
              <span className={`pr-ival pr-iv--${st}`}>{val}</span>
            </div>
          ))}
        </div>

        {/* Row 3, Col 1 — Content & Links */}
        <div className="pr-panel">
          <div className="pr-panel-heading"><i className="fa-solid fa-link" /> Content &amp; Links</div>
          {[
            { key: 'Word Count',      val: result.word_count ? result.word_count.toLocaleString() : 'N/A',   st: wordSt  },
            { key: 'Text/HTML Ratio', val: result.text_html_ratio ? `${result.text_html_ratio}%` : 'N/A',    st: ratioSt },
            { key: 'Internal Links',  val: String(result.internal_links),                                     st: result.internal_links >= 3 ? 'pass' : result.internal_links >= 1 ? 'warn' : 'fail' },
            { key: 'External Links',  val: String(result.external_links),                                     st: 'pass' as const },
            { key: 'Total Images',    val: String(result.image_count),                                        st: 'pass' as const },
            { key: 'Images No Alt',   val: `${result.images_missing_alt_count} of ${result.image_count}`,    st: imgAltSt },
          ].map(({ key, val, st }) => (
            <div key={key} className="pr-irow">
              <span className="pr-ikey">{key}</span>
              <span className={`pr-ival pr-iv--${st}`}>{val}</span>
            </div>
          ))}
        </div>

        {/* Row 3, Col 2 — Social & Schema */}
        <div className="pr-panel">
          <div className="pr-panel-heading"><i className="fa-solid fa-share-nodes" /> Social &amp; Schema</div>
          {(() => {
            const og = result.open_graph ?? { og_title: '', og_description: '', og_image: '', og_type: '', og_site_name: '' };
            const tw = result.twitter   ?? { card: '', title: '', description: '', image: '' };
            return [
              { key: 'OG Title',       val: og.og_title       ? 'Set ✓' : 'Missing',                                  st: og.og_title       ? 'pass' : 'fail' },
              { key: 'OG Description', val: og.og_description ? 'Set ✓' : 'Missing',                                  st: og.og_description ? 'pass' : 'fail' },
              { key: 'OG Image',       val: og.og_image       ? 'Set ✓' : 'Missing',                                  st: og.og_image       ? 'pass' : 'warn' },
              { key: 'Twitter Card',   val: tw.card           ? tw.card : 'Missing',                                   st: tw.card           ? 'pass' : 'warn' },
              { key: 'Schema (JSON-LD)', val: result.has_schema ? (result.schema_types?.join(', ') || 'Detected ✓') : 'None found', st: result.has_schema ? 'pass' : 'warn' },
              { key: 'Nofollow Links', val: result.nofollow_links != null ? String(result.nofollow_links) : 'N/A',    st: 'pass' as const },
            ].map(({ key, val, st }) => (
              <div key={key} className="pr-irow">
                <span className="pr-ikey">{key}</span>
                <span className={`pr-ival pr-iv--${st}`}>{val}</span>
              </div>
            ));
          })()}
        </div>

      </div>

      {/* Checks Overview — compact 3-column grid */}
      <div className="pr-checks-heading">
        <i className="fa-solid fa-list-check" /> Checks Overview &mdash; {checks.length} Points Analysed
      </div>
      <div className="pr-checks-cols">
        {[checks.slice(0, 8), checks.slice(8, 16), checks.slice(16)].map((col, ci) => (
          <div key={ci} className="pr-checks-col">
            {col.map(check => (
              <div key={check.label} className="pr-check-row">
                <span className="pr-check-dot" style={{ background: S[check.status].color }} />
                <span className="pr-check-name">{check.label}</span>
                <span className="pr-check-status" style={{ color: S[check.status].color }}>
                  {S[check.status].icon} {S[check.status].label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ════════════ PAGE 2 — Recommendations ═══════════════ */}

      <div className="pr-p2-header pr-break-before">
        <div className="pr-p2-title">
          <i className="fa-solid fa-clipboard-list" /> Recommendations &amp; Action Plan
        </div>
        <div className="pr-p2-meta">
          <span>{result.url}</span>
          <span style={{ color: failCnt > 0 ? '#EF4444' : '#F59E0B' }}>
            {failCnt > 0 ? `${failCnt} Critical · ` : ''}{warnCnt} Warning{warnCnt !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
      <div className="pr-divider" style={{ borderColor: scoreColor }} />

      {issues.length === 0 ? (
        <div className="pr-all-pass">
          <i className="fa-solid fa-circle-check" style={{ color: '#10B981', marginRight: 8 }} />
          All {checks.length} checks passed — outstanding SEO health!
        </div>
      ) : (
        <>
          <p className="pr-recs-intro">
            {failCnt > 0 && warnCnt > 0
              ? `${failCnt} critical issue${failCnt > 1 ? 's' : ''} and ${warnCnt} warning${warnCnt !== 1 ? 's' : ''} require attention. Resolve critical items first for maximum ranking impact.`
              : failCnt > 0
              ? `${failCnt} critical issue${failCnt > 1 ? 's' : ''} found — resolve ${failCnt > 1 ? 'these' : 'this'} immediately to unlock significant ranking improvements.`
              : `${warnCnt} warning${warnCnt !== 1 ? 's' : ''} to address. Fixing ${warnCnt > 1 ? 'these' : 'this'} will lift your SEO score and improve search visibility.`}
          </p>

          {failCnt > 0 && (
            <div className="pr-recs-block">
              <div className="pr-recs-group pr-recs-group--fail">
                <i className="fa-solid fa-circle-xmark" /> Critical — Fix Immediately ({failCnt})
              </div>
              {fails.map((issue, idx) => (
                <div key={issue.label} className="pr-rec pr-rec--fail">
                  <div className="pr-rec-num">{idx + 1}</div>
                  <div className="pr-rec-body">
                    <div className="pr-rec-row">
                      <span className="pr-rec-title">{issue.label}</span>
                      <span className="pr-rec-cat">{issue.group}</span>
                    </div>
                    <p className="pr-rec-finding">{issue.detail}</p>
                    <div className="pr-rec-fix">
                      <span className="pr-rec-fix-label">Action: </span>{issue.fix}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {warnCnt > 0 && (
            <div className="pr-recs-block" style={{ marginTop: failCnt > 0 ? '10pt' : 0 }}>
              <div className="pr-recs-group pr-recs-group--warn">
                <i className="fa-solid fa-circle-exclamation" /> Warnings — Address Next ({warnCnt})
              </div>
              {warns.map((issue, idx) => (
                <div key={issue.label} className="pr-rec pr-rec--warn">
                  <div className="pr-rec-num">{failCnt + idx + 1}</div>
                  <div className="pr-rec-body">
                    <div className="pr-rec-row">
                      <span className="pr-rec-title">{issue.label}</span>
                      <span className="pr-rec-cat">{issue.group}</span>
                    </div>
                    <p className="pr-rec-finding">{issue.detail}</p>
                    <div className="pr-rec-fix">
                      <span className="pr-rec-fix-label">Recommendation: </span>{issue.fix}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* CTA closer */}
      <div className="pr-cta-closer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo/rankspiders.png" alt="Rank Spiders" className="pr-cta-logo" />
        <h3 className="pr-cta-heading">Want us to implement every fix in this report?</h3>
        <p className="pr-cta-body">
          Our SEO specialists resolve every issue above, build a full content &amp; backlink strategy, and get your site ranking — fast.
        </p>
        <div className="pr-cta-contacts">
          <span><i className="fa-solid fa-globe" /> rankspiders.com</span>
          <span><i className="fa-solid fa-envelope" /> hello@rankspiders.com</span>
        </div>
      </div>
    </div>
  );
}

/* ── AuditResults ───────────────────────────────────────────────────────── */
interface AuditResultsProps {
  result:          AuditResult;
  checks:          Check[];
  score:           number;
  showPdfButton?:  boolean;
}

export default function AuditResults({
  result,
  checks,
  score,
  showPdfButton = false,
}: AuditResultsProps) {
  const [activeGroup,  setActiveGroup]  = useState<Group | 'All'>('All');
  const [printLoading, setPrintLoading] = useState(false);

  const scoreColor = score >= 80 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
  const issues     = checks.filter(c => c.status !== 'pass');
  const filtered   = activeGroup === 'All' ? checks : checks.filter(c => c.group === activeGroup);

  async function printReport() {
    if (printLoading) return;
    setPrintLoading(true);
    const prevTitle = document.title;
    try {
      const domain = (() => { try { return new URL(result.url).hostname; } catch { return result.url; } })();
      document.title = `SEO Audit — ${domain}`;
      window.print();
    } finally {
      document.title = prevTitle;
      setPrintLoading(false);
    }
  }

  return (
    <>
    <section className="tool-results-section screen-only">
      <div className="container">

        {/* Non-200 warning */}
        {(result.warning || result.status_code !== 200) && (
          <MotionWrapper variant="up">
            <div style={{ padding: '14px 20px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)', borderLeft: '4px solid #F59E0B', borderRadius: 10, marginBottom: 20, fontSize: '0.9rem', color: 'var(--text-color)' }}>
              <i className="fa fa-triangle-exclamation" style={{ color: '#F59E0B', marginRight: 8 }} />
              {result.warning || `Server returned HTTP ${result.status_code}.`}
            </div>
          </MotionWrapper>
        )}

        {/* Overview card */}
        <MotionWrapper variant="up">
          <div className="audit-overview-card">
            <ScoreRing score={score} color={scoreColor} />
            <div className="audit-overview-meta">
              <p className="audit-overview-url">{result.url}</p>
              <div className="audit-overview-stats">
                {[
                  { icon: 'fa-server',   val: `HTTP ${result.status_code}`, color: result.status_code === 200 ? '#10B981' : '#EF4444' },
                  { icon: 'fa-gauge',    val: `${result.load_time_ms} ms`,  color: 'var(--text-muted)' },
                  { icon: 'fa-file',     val: result.html_size_kb ? `${result.html_size_kb} KB` : 'N/A', color: 'var(--text-muted)' },
                  { icon: 'fa-link',     val: `${result.internal_links} internal`, color: 'var(--text-muted)' },
                  { icon: 'fa-arrow-up-right-from-square', val: `${result.external_links} external`, color: 'var(--text-muted)' },
                  { icon: 'fa-pen-nib',  val: result.word_count ? `${result.word_count.toLocaleString()} words` : 'N/A', color: 'var(--text-muted)' },
                ].map(({ icon, val, color }) => (
                  <span key={val} className="audit-stat-chip" style={{ color }}>
                    <i className={`fa-solid ${icon}`}></i> {val}
                  </span>
                ))}
              </div>
            </div>
            <div className="audit-overview-counts">
              {(['pass', 'warn', 'fail'] as Status[]).map(s => (
                <div key={s} className="audit-count-item">
                  <span className="audit-count-num" style={{ color: S[s].color }}>{checks.filter(c => c.status === s).length}</span>
                  <span className="audit-count-label">{S[s].label}ed</span>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Category breakdown */}
        <MotionWrapper variant="up" delay={0.04}>
          <CategoryBreakdown checks={checks} />
        </MotionWrapper>

        {/* Issues summary panel */}
        {issues.length > 0 && (
          <MotionWrapper variant="up" delay={0.05}>
            <div className="audit-issues-panel">
              <h3 className="audit-issues-heading">
                <i className="fa-solid fa-triangle-exclamation" style={{ color: '#F59E0B' }}></i>
                {issues.filter(c => c.status === 'fail').length > 0
                  ? `${issues.filter(c => c.status === 'fail').length} Critical Issue${issues.filter(c => c.status === 'fail').length > 1 ? 's' : ''} + ${issues.filter(c => c.status === 'warn').length} Warning${issues.filter(c => c.status === 'warn').length !== 1 ? 's' : ''} to fix`
                  : `${issues.filter(c => c.status === 'warn').length} Warning${issues.filter(c => c.status === 'warn').length !== 1 ? 's' : ''} to address`
                }
              </h3>
              <div className="audit-issues-list">
                {issues.map(issue => (
                  <div key={issue.label} className="audit-issue-row" style={{ borderLeftColor: S[issue.status].color }}>
                    <span className="audit-issue-badge" style={{ background: S[issue.status].bg, color: S[issue.status].color }}>
                      {S[issue.status].icon}
                    </span>
                    <div className="audit-issue-content">
                      <strong>{issue.label}</strong>
                      <span className="audit-issue-group">{issue.group}</span>
                      <p>{issue.detail}</p>
                    </div>
                    <span className="audit-issue-status" style={{ color: S[issue.status].color }}>{S[issue.status].label}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* Group filter tabs */}
        <MotionWrapper variant="up" delay={0.1}>
          <div className="audit-group-tabs">
            {(['All', ...GROUPS] as (Group | 'All')[]).map(g => (
              <button
                key={g}
                className={`audit-group-tab${activeGroup === g ? ' active' : ''}`}
                onClick={() => setActiveGroup(g)}
              >
                {g !== 'All' && <i className={`fa-solid ${GROUP_ICONS[g as Group]}`}></i>}
                {g}
                <span className="audit-tab-count">
                  {g === 'All' ? checks.length : checks.filter(c => c.group === g).length}
                </span>
              </button>
            ))}
          </div>
        </MotionWrapper>

        {/* Checks grid */}
        {activeGroup === 'All' ? (
          GROUPS.map(group => {
            const groupChecks = checks.filter(c => c.group === group);
            return (
              <div key={group} className="audit-group-section">
                <h3 className="audit-group-heading">
                  <i className={`fa-solid ${GROUP_ICONS[group]}`}></i> {group}
                </h3>
                <div className="audit-checks-grid">
                  {groupChecks.map((check, i) => (
                    <MotionWrapper key={check.label} variant="up" delay={i * 0.04}>
                      <MotionCard><CheckCard check={check} /></MotionCard>
                    </MotionWrapper>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="audit-checks-grid">
            {filtered.map((check, i) => (
              <MotionWrapper key={check.label} variant="up" delay={i * 0.04}>
                <MotionCard><CheckCard check={check} /></MotionCard>
              </MotionWrapper>
            ))}
          </div>
        )}

        {/* CTA */}
        <MotionWrapper variant="up" delay={0.3}>
          <div className="tool-after-cta">
            <div className="tools-cta-orb tools-cta-orb--1" aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3>Want us to fix every issue on this report?</h3>
              <p>Our SEO team implements all recommendations and builds a full strategy to get you ranking — fast.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="/contact-us" className="btn-default">Get a Free SEO Consultation</a>
                {showPdfButton && (
                  <button
                    onClick={printReport}
                    disabled={printLoading}
                    className="btn-default"
                    style={{ background: 'transparent', border: '2px solid var(--accent-color)', color: 'var(--accent-color)', cursor: printLoading ? 'wait' : 'pointer' }}
                  >
                    {printLoading
                      ? <><i className="fa fa-circle-notch fa-spin"></i> Preparing…</>
                      : <><i className="fa-solid fa-print"></i> Print / Save as PDF</>}
                  </button>
                )}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
    <PrintReport result={result} checks={checks} score={score} />
    </>
  );
}

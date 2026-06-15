'use client';

import { useState, useRef } from 'react';
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
          {open && (
            <div className="audit-fix-body">
              <i className="fa-solid fa-circle-info" style={{ color: s.color, marginRight: 8 }}></i>
              {check.fix}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── AuditResults ───────────────────────────────────────────────────────── */
interface AuditResultsProps {
  result:         AuditResult;
  checks:         Check[];
  score:          number;
  showPdfButton?: boolean;
  pdfFilename?:   string;
}

export default function AuditResults({
  result,
  checks,
  score,
  showPdfButton = false,
  pdfFilename   = 'seo-audit-report.pdf',
}: AuditResultsProps) {
  const [activeGroup, setActiveGroup] = useState<Group | 'All'>('All');
  const [pdfLoading,  setPdfLoading]  = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const scoreColor = score >= 80 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
  const issues     = checks.filter(c => c.status !== 'pass');
  const filtered   = activeGroup === 'All' ? checks : checks.filter(c => c.group === activeGroup);

  async function downloadPdf() {
    if (!reportRef.current || pdfLoading) return;
    setPdfLoading(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const { jsPDF }                = await import('jspdf');
      const canvas     = await html2canvas(reportRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
      const imgData    = canvas.toDataURL('image/png');
      const pdf        = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth  = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight  = (canvas.height * pageWidth) / canvas.width;
      let yOffset = 0;
      while (yOffset < imgHeight) {
        if (yOffset > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -yOffset, pageWidth, imgHeight);
        yOffset += pageHeight;
      }
      pdf.save(pdfFilename);
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <section className="tool-results-section" ref={reportRef}>
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
                    onClick={downloadPdf}
                    disabled={pdfLoading}
                    className="btn-default"
                    style={{ background: 'transparent', border: '2px solid var(--accent-color)', color: 'var(--accent-color)', cursor: pdfLoading ? 'wait' : 'pointer' }}
                  >
                    {pdfLoading
                      ? <><i className="fa fa-circle-notch fa-spin"></i> Generating…</>
                      : <><i className="fa-solid fa-file-pdf"></i> Download PDF Report</>}
                  </button>
                )}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

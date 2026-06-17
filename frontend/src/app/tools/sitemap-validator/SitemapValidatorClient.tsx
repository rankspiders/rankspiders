'use client';
import { useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface SitemapURL { loc: string; lastmod: string; changefreq: string; priority: string; age_days: number | null; }
interface SitemapStats { total_urls: number; with_lastmod: number; with_priority: number; with_changefreq: number; newest_url_age_days: number | null; oldest_url_age_days: number | null; avg_age_days: number | null; }
interface SitemapResult {
  sitemap_url: string; found: boolean; is_index?: boolean;
  url_count?: number; urls?: SitemapURL[]; urls_truncated?: boolean;
  sitemap_count?: number; child_sitemaps?: { loc: string; lastmod: string }[];
  child_sitemaps_truncated?: boolean;
  stats?: SitemapStats | null;
  issues?: string[]; error?: string | null; message?: string;
}

function ageBadge(days: number | null) {
  if (days === null) return <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>No date</span>;
  const color = days < 30 ? '#10B981' : days < 180 ? '#F59E0B' : '#EF4444';
  const label = days < 1 ? 'Today' : days < 7 ? `${days}d ago` : days < 60 ? `${Math.round(days / 7)}w ago` : `${Math.round(days / 30)}mo ago`;
  return <span style={{ fontSize: '0.78rem', fontWeight: 600, color }}>{label}</span>;
}

export default function SitemapValidatorClient() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SitemapResult | null>(null);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 20;

  async function run() {
    if (!url.trim()) return;
    setLoading(true); setResult(null); setError(''); setPage(0);
    try {
      const res = await fetch(`${API}/api/tools/sitemap?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      if (!res.ok || data.error) {
        // Always show an error when the sitemap wasn't found
        setError(data.error || data.message || data.detail || 'Could not validate sitemap.');
      } else {
        setResult(data);
      }
    } catch { setError('Could not reach the server.'); }
    finally { setLoading(false); }
  }

  const urls = result?.urls || [];
  const pageUrls = urls.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.ceil(urls.length / PAGE_SIZE);
  const stats = result?.stats ?? null;

  return (
    <>
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <MotionWrapper variant="up">
                <p style={{ display: 'inline-block', background: 'rgba(139,92,246,0.08)', color: '#8B5CF6', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 999, padding: '6px 18px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>Free Tool — No Sign-Up</p>
                <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.6rem)', color: 'var(--primary-color)', marginBottom: 16 }}>XML Sitemap Validator</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 40px' }}>Enter a domain or direct sitemap URL. Get URL count, lastmod freshness stats, missing metadata warnings, and full URL table.</p>
              </MotionWrapper>
              <MotionWrapper variant="up" delay={0.1}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <input type="text" value={url} onChange={e => setUrl(e.target.value)} onKeyDown={e => e.key === 'Enter' && !loading && run()} aria-label="Sitemap URL" placeholder="https://yourwebsite.com or .../sitemap.xml" disabled={loading}
                    style={{ flex: '1 1 300px', maxWidth: 500, padding: '15px 20px', border: '1.5px solid var(--card-border)', borderRadius: 10, background: 'var(--card-bg)', color: 'var(--text-color)', font: '1rem var(--default-font)', outline: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B5CF6')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--card-border)')} />
                  <button onClick={run} disabled={loading || !url.trim()} style={{ padding: '15px 32px', background: loading ? 'var(--card-border)' : 'linear-gradient(135deg, #8B5CF6, #EC4899)', color: '#fff', border: 'none', borderRadius: 10, font: '600 1rem var(--default-font)', cursor: loading ? 'wait' : 'pointer', opacity: loading || !url.trim() ? 0.7 : 1, whiteSpace: 'nowrap' }}>
                    {loading ? <><i className="fa fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Validating…</> : <><i className="fa fa-sitemap" style={{ marginRight: 8 }} />Validate</>}
                  </button>
                </div>
                {error && <div style={{ marginTop: 16, padding: '12px 18px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, color: '#EF4444', fontSize: '0.9rem' }}>{error}</div>}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {result && result.found && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <MotionWrapper variant="up">
              <div style={{ padding: '20px 28px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 12, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                <i className="fa fa-circle-check" style={{ color: '#10B981', fontSize: '1.1rem' }} />
                <span style={{ fontWeight: 600, color: 'var(--text-color)' }}>{result.is_index ? 'Sitemap Index' : 'XML Sitemap'} found</span>
                <a href={result.sitemap_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: 'var(--accent-color)', wordBreak: 'break-all' }}>{result.sitemap_url}</a>
              </div>

              {/* Stats — only render when stats has data (null for index sitemaps) */}
              {stats && stats.total_urls !== undefined && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 16, marginBottom: 28 }}>
                  {[
                    { label: 'Total URLs', value: stats.total_urls.toLocaleString() },
                    { label: 'With lastmod', value: `${stats.with_lastmod} / ${stats.total_urls}` },
                    { label: 'With priority', value: `${stats.with_priority} / ${stats.total_urls}` },
                    { label: 'Avg content age', value: stats.avg_age_days !== null ? `${stats.avg_age_days}d` : 'N/A' },
                    { label: 'Newest update', value: stats.newest_url_age_days !== null ? `${stats.newest_url_age_days}d ago` : 'N/A' },
                    { label: 'Oldest URL', value: stats.oldest_url_age_days !== null ? `${stats.oldest_url_age_days}d ago` : 'N/A' },
                  ].map(s => (
                    <div key={s.label} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '18px 20px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--heading-font)', color: '#8B5CF6' }}>{s.value}</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Issues */}
              {(result.issues ?? []).map((issue, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 18px', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderLeft: '4px solid #F59E0B', borderRadius: 10, marginBottom: 10 }}>
                  <i className="fa fa-triangle-exclamation" style={{ color: '#F59E0B', marginTop: 2 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{issue}</span>
                </div>
              ))}

              {/* Sitemap index children */}
              {result.is_index && result.child_sitemaps && (
                <>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', margin: '24px 0 12px' }}>
                    Child Sitemaps ({result.sitemap_count ?? result.child_sitemaps.length})
                    {result.child_sitemaps_truncated && <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-muted)', marginLeft: 8 }}>— showing first 50</span>}
                  </h3>
                  {result.child_sitemaps.map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--bg-secondary)', borderRadius: 8, marginBottom: 6, fontSize: '0.84rem' }}>
                      <a href={s.loc} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', wordBreak: 'break-all' }}>{s.loc}</a>
                      {s.lastmod && <span style={{ color: 'var(--text-muted)', whiteSpace: 'nowrap', marginLeft: 16 }}>{s.lastmod}</span>}
                    </div>
                  ))}
                </>
              )}

              {/* URL table */}
              {pageUrls.length > 0 && (
                <>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', margin: '24px 0 12px' }}>
                    URLs{' '}
                    {result.url_count !== undefined && result.url_count >= 100
                      ? <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)' }}>(showing first 100 of {result.url_count.toLocaleString()})</span>
                      : <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)' }}>({urls.length})</span>}
                  </h3>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px 80px', padding: '12px 20px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--card-border)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      <span>URL</span><span style={{ textAlign: 'center' }}>Last Modified</span><span style={{ textAlign: 'center' }}>Priority</span><span style={{ textAlign: 'center' }}>Freq</span>
                    </div>
                    {pageUrls.map((u, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px 80px', padding: '11px 20px', borderBottom: i < pageUrls.length - 1 ? '1px solid var(--card-border)' : 'none', alignItems: 'center' }}>
                        <a href={u.loc} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontSize: '0.82rem', wordBreak: 'break-all' }}>{u.loc}</a>
                        <div style={{ textAlign: 'center' }}>{ageBadge(u.age_days)}</div>
                        <span style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{u.priority || '–'}</span>
                        <span style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{u.changefreq || '–'}</span>
                      </div>
                    ))}
                  </div>
                  {totalPages > 1 && (
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
                      <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)', cursor: page === 0 ? 'default' : 'pointer', opacity: page === 0 ? 0.4 : 1 }}>← Prev</button>
                      <span style={{ padding: '8px 16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{page + 1} / {totalPages}</span>
                      <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)', cursor: page === totalPages - 1 ? 'default' : 'pointer', opacity: page === totalPages - 1 ? 0.4 : 1 }}>Next →</button>
                    </div>
                  )}
                </>
              )}
            </MotionWrapper>
          </div>
        </section>
      )}
    </>
  );
}

'use client';
import { useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface MetaResult {
  url: string; status_code: number; score: number;
  basic: { title: string; title_length: number; description: string; description_length: number; keywords: string; robots: string; author: string; viewport: string; charset: string; theme_color: string; canonical: string; };
  open_graph: Record<string, string>;
  twitter_card: Record<string, string>;
  json_ld: object[];
  hreflang: { hreflang: string; href: string }[];
  link_tags: { rel: string; href: string }[];
  issues: { severity: 'fail' | 'warn' | 'info'; msg: string }[];
  has_og: boolean; has_twitter: boolean; has_schema: boolean; has_hreflang: boolean;
  error?: string; message?: string;
}

const SEV = {
  fail: { color: 'var(--error-color)', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.2)', icon: 'fa-circle-xmark' },
  warn: { color: '#F59E0B', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)', icon: 'fa-triangle-exclamation' },
  info: { color: 'var(--accent-color)', bg: 'rgba(79,70,229,0.06)', border: 'rgba(79,70,229,0.2)', icon: 'fa-circle-info' },
};

function Section({ title, children, badge }: { title: string; children: React.ReactNode; badge?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1rem', color: 'var(--primary-color)', margin: 0 }}>{title}</h3>
        {badge && <span style={{ padding: '2px 10px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700, background: 'rgba(79,70,229,0.1)', color: 'var(--accent-color)' }}>{badge}</span>}
      </div>
      {children}
    </div>
  );
}

function Row({ label, value, good }: { label: string; value: string; good?: boolean | null }) {
  return (
    <div style={{ display: 'flex', gap: 16, padding: '10px 16px', borderBottom: '1px solid var(--card-border)', alignItems: 'flex-start' }}>
      <span style={{ minWidth: 140, fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', paddingTop: 2 }}>{label}</span>
      <span style={{ flex: 1, fontSize: '0.88rem', color: good === false ? 'var(--error-color)' : good === true ? 'var(--success-color)' : 'var(--text-color)', wordBreak: 'break-word' }}>{value || <em style={{ color: 'var(--text-muted)' }}>Not set</em>}</span>
    </div>
  );
}

export default function MetaTagsClient() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MetaResult | null>(null);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'basic' | 'og' | 'twitter' | 'schema' | 'links'>('basic');

  async function run() {
    if (!url.trim()) return;
    setLoading(true); setResult(null); setError('');
    try {
      const res = await fetch(`${API}/api/tools/meta?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      if (data.error) setError(data.message || 'Extraction failed.');
      else setResult(data);
    } catch { setError('Could not reach the server.'); }
    finally { setLoading(false); }
  }

  const tabStyle = (active: boolean) => ({
    padding: '8px 18px', borderRadius: 8, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', border: 'none', whiteSpace: 'nowrap' as const,
    background: active ? 'var(--accent-color)' : 'var(--bg-secondary)',
    color: active ? '#fff' : 'var(--text-muted)',
  });

  const scoreColor = (s: number) => s >= 80 ? 'var(--success-color)' : s >= 50 ? '#F59E0B' : 'var(--error-color)';

  return (
    <>
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <MotionWrapper variant="up">
                <p style={{ display: 'inline-block', background: 'rgba(236,72,153,0.08)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.2)', borderRadius: 999, padding: '6px 18px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>Free Tool — No Sign-Up</p>
                <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.6rem)', color: 'var(--primary-color)', marginBottom: 16 }}>Meta Tag Extractor</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 40px' }}>Extract every meta tag — title, description, Open Graph, Twitter Card, JSON-LD schema, hreflang, canonical — plus an SEO issues report.</p>
              </MotionWrapper>
              <MotionWrapper variant="up" delay={0.1}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <input type="url" value={url} onChange={e => setUrl(e.target.value)} onKeyDown={e => e.key === 'Enter' && !loading && run()} placeholder="https://yourwebsite.com" disabled={loading}
                    style={{ flex: '1 1 300px', maxWidth: 500, padding: '15px 20px', border: '1.5px solid var(--card-border)', borderRadius: 10, background: 'var(--card-bg)', color: 'var(--text-color)', font: '1rem var(--default-font)', outline: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#EC4899')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--card-border)')} />
                  <button onClick={run} disabled={loading || !url.trim()} style={{ padding: '15px 32px', background: loading ? 'var(--card-border)' : 'linear-gradient(135deg, #EC4899, #8B5CF6)', color: '#fff', border: 'none', borderRadius: 10, font: '600 1rem var(--default-font)', cursor: loading ? 'wait' : 'pointer', opacity: loading || !url.trim() ? 0.7 : 1, whiteSpace: 'nowrap' }}>
                    {loading ? <><i className="fa fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Extracting…</> : <><i className="fa fa-code" style={{ marginRight: 8 }} />Extract</>}
                  </button>
                </div>
                {error && <div style={{ marginTop: 16, padding: '12px 18px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, color: 'var(--error-color)', fontSize: '0.9rem' }}>{error}</div>}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {result && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <MotionWrapper variant="up">
              {/* Score + badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '28px 36px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, marginBottom: 28, boxShadow: 'var(--shadow-md)', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center', minWidth: 90 }}>
                  <div style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--heading-font)', color: scoreColor(result.score), lineHeight: 1 }}>{result.score}</div>
                  <div style={{ fontSize: '0.72rem', color: scoreColor(result.score), fontWeight: 600, textTransform: 'uppercase', marginTop: 4 }}>Meta Score</div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {[
                    { label: 'Open Graph', ok: result.has_og },
                    { label: 'Twitter Card', ok: result.has_twitter },
                    { label: 'JSON-LD Schema', ok: result.has_schema },
                    { label: 'Hreflang', ok: result.has_hreflang },
                  ].map(b => (
                    <span key={b.label} style={{ padding: '5px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600, background: b.ok ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: b.ok ? 'var(--success-color)' : 'var(--error-color)', border: `1px solid ${b.ok ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}` }}>
                      {b.label}: {b.ok ? '✓' : '✗'}
                    </span>
                  ))}
                </div>
              </div>

              {/* Issues */}
              {result.issues.length > 0 && (
                <Section title="Issues & Recommendations">
                  {result.issues.map((issue, i) => {
                    const s = SEV[issue.severity];
                    return (
                      <div key={i} style={{ display: 'flex', gap: 12, padding: '13px 18px', background: s.bg, border: `1px solid ${s.border}`, borderLeft: `4px solid ${s.color}`, borderRadius: 10, marginBottom: 8 }}>
                        <i className={`fa ${s.icon}`} style={{ color: s.color, marginTop: 2 }} />
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-color)' }}>{issue.msg}</span>
                      </div>
                    );
                  })}
                </Section>
              )}

              {/* Tabs */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {([
                  ['basic', 'Basic Tags'],
                  ['og', `Open Graph${result.has_og ? ' ✓' : ''}`],
                  ['twitter', `Twitter Card${result.has_twitter ? ' ✓' : ''}`],
                  ['schema', `JSON-LD${result.has_schema ? ` (${result.json_ld.length})` : ''}`],
                  ['links', 'Link Tags'],
                ] as [typeof tab, string][]).map(([key, label]) => (
                  <button key={key} style={tabStyle(tab === key)} onClick={() => setTab(key)}>{label}</button>
                ))}
              </div>

              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                {tab === 'basic' && (
                  <>
                    <Row label="Title" value={result.basic.title} good={result.basic.title_length >= 30 && result.basic.title_length <= 60} />
                    <Row label="Title Length" value={result.basic.title_length ? `${result.basic.title_length} characters` : ''} good={result.basic.title_length >= 30 && result.basic.title_length <= 60} />
                    <Row label="Description" value={result.basic.description} good={result.basic.description_length >= 120 && result.basic.description_length <= 160} />
                    <Row label="Desc. Length" value={result.basic.description_length ? `${result.basic.description_length} characters` : ''} good={result.basic.description_length >= 120 && result.basic.description_length <= 160} />
                    <Row label="Keywords" value={result.basic.keywords} />
                    <Row label="Robots" value={result.basic.robots} good={!result.basic.robots || (!result.basic.robots.includes('noindex') && !result.basic.robots.includes('nofollow'))} />
                    <Row label="Canonical" value={result.basic.canonical} good={!!result.basic.canonical} />
                    <Row label="Viewport" value={result.basic.viewport} good={!!result.basic.viewport} />
                    <Row label="Charset" value={result.basic.charset} />
                    <Row label="Author" value={result.basic.author} />
                    <Row label="Theme Color" value={result.basic.theme_color} />
                  </>
                )}

                {tab === 'og' && (
                  Object.keys(result.open_graph).length > 0
                    ? Object.entries(result.open_graph).map(([k, v]) => <Row key={k} label={`og:${k}`} value={v} />)
                    : <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>No Open Graph tags found on this page.</div>
                )}

                {tab === 'twitter' && (
                  Object.keys(result.twitter_card).length > 0
                    ? Object.entries(result.twitter_card).map(([k, v]) => <Row key={k} label={`twitter:${k}`} value={v} />)
                    : <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>No Twitter Card tags found on this page.</div>
                )}

                {tab === 'schema' && (
                  result.json_ld.length > 0
                    ? result.json_ld.map((schema, i) => (
                      <div key={i} style={{ padding: '16px 20px', borderBottom: '1px solid var(--card-border)' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: 8, textTransform: 'uppercase' }}>Schema {i + 1}: {(schema as any)['@type'] || 'Unknown'}</div>
                        <pre style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)', overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{JSON.stringify(schema, null, 2)}</pre>
                      </div>
                    ))
                    : <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>No JSON-LD schema markup found on this page.</div>
                )}

                {tab === 'links' && (
                  result.link_tags.length > 0
                    ? result.link_tags.map((l, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', padding: '10px 16px', borderBottom: '1px solid var(--card-border)', alignItems: 'start', gap: 12 }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', paddingTop: 2 }}>{l.rel}</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--accent-color)', wordBreak: 'break-all' }}>{l.href}</span>
                      </div>
                    ))
                    : <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>No link tags found.</div>
                )}
              </div>
            </MotionWrapper>
          </div>
        </section>
      )}
    </>
  );
}

'use client';
import { useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface Keyword { keyword: string; count: number; density: number; in_title: boolean; in_h1: boolean; in_h2: boolean; }
interface Phrase { phrase: string; count: number; density: number; }
interface KDResult {
  url: string; total_words: number; filtered_words: number; unique_keywords: number;
  title: string; h1: string;
  top_keywords: Keyword[]; top_bigrams: Phrase[]; top_trigrams: Phrase[];
  warnings: string[]; error?: string; message?: string;
}

function Badge({ text, color }: { text: string; color: string }) {
  return <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 999, fontSize: '0.7rem', fontWeight: 700, background: `${color}18`, color, border: `1px solid ${color}40`, marginLeft: 6 }}>{text}</span>;
}

function DensityBar({ density }: { density: number }) {
  const w = Math.min(density * 10, 100);
  const color = density > 3 ? '#EF4444' : density > 1.5 ? '#F59E0B' : '#10B981';
  return (
    <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 999, overflow: 'hidden', marginTop: 4 }}>
      <div style={{ height: '100%', width: `${w}%`, background: color, borderRadius: 999, transition: 'width 0.5s ease' }} />
    </div>
  );
}

export default function KeywordDensityClient() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<KDResult | null>(null);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'single' | 'bigrams' | 'trigrams'>('single');

  async function run() {
    if (!url.trim()) return;
    setLoading(true); setResult(null); setError('');
    try {
      const res = await fetch(`${API}/api/tools/keywords?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      if (!res.ok || data.error) {
        // Show the backend error string directly (it's already human-readable)
        setError(data.error || data.message || data.detail || 'Analysis failed.');
      } else {
        setResult(data);
      }
    } catch { setError('Could not reach the server.'); }
    finally { setLoading(false); }
  }

  const tabStyle = (active: boolean) => ({
    padding: '8px 20px', borderRadius: 8, fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', border: 'none',
    background: active ? 'var(--accent-color)' : 'var(--bg-secondary)',
    color: active ? '#fff' : 'var(--text-muted)',
  });

  const phrases = result ? (tab === 'bigrams' ? result.top_bigrams : result.top_trigrams) : [];

  return (
    <>
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <MotionWrapper variant="up">
                <p style={{ display: 'inline-block', background: 'rgba(245,158,11,0.08)', color: 'var(--accent-secondary-color)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 999, padding: '6px 18px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>Free Tool — No Sign-Up</p>
                <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.6rem)', color: 'var(--primary-color)', marginBottom: 16 }}>Keyword Density Analyser</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 40px' }}>See every keyword and phrase on a page — with density %, placement in title/H1/H2, and over-optimisation warnings.</p>
              </MotionWrapper>
              <MotionWrapper variant="up" delay={0.1}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <input type="text" value={url} onChange={e => setUrl(e.target.value)} onKeyDown={e => e.key === 'Enter' && !loading && run()} placeholder="https://yourwebsite.com" disabled={loading}
                    style={{ flex: '1 1 300px', maxWidth: 480, padding: '15px 20px', border: '1.5px solid var(--card-border)', borderRadius: 10, background: 'var(--card-bg)', color: 'var(--text-color)', font: '1rem var(--default-font)', outline: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-secondary-color)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--card-border)')} />
                  <button onClick={run} disabled={loading || !url.trim()} style={{ padding: '15px 36px', background: loading ? 'var(--card-border)' : 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary-color))', color: '#fff', border: 'none', borderRadius: 10, font: '600 1rem var(--default-font)', cursor: loading ? 'wait' : 'pointer', opacity: loading || !url.trim() ? 0.7 : 1 }}>
                    {loading ? <><i className="fa fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Analysing…</> : <><i className="fa fa-percent" style={{ marginRight: 8 }} />Analyse</>}
                  </button>
                </div>
                {error && <div style={{ marginTop: 16, padding: '12px 18px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, color: '#EF4444', fontSize: '0.9rem' }}>{error}</div>}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {result && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <MotionWrapper variant="up">
              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 16, marginBottom: 32 }}>
                {[
                  { label: 'Total Words', value: result.total_words.toLocaleString() },
                  { label: 'Filtered Words', value: result.filtered_words.toLocaleString(), sub: '(stop words removed)' },
                  { label: 'Unique Keywords', value: result.unique_keywords.toLocaleString() },
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '20px 24px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--heading-font)', color: 'var(--accent-color)' }}>{s.value}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-color)', marginTop: 4 }}>{s.label}</div>
                    {s.sub && <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>{s.sub}</div>}
                  </div>
                ))}
              </div>

              {/* Page context */}
              {(result.title || result.h1) && (
                <div style={{ padding: '20px 24px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, marginBottom: 24 }}>
                  {result.title && <div style={{ marginBottom: 8 }}><span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Title: </span><span style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{result.title}</span></div>}
                  {result.h1 && <div><span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>H1: </span><span style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{result.h1}</span></div>}
                </div>
              )}

              {/* Warnings */}
              {(result.warnings ?? []).map((w, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 18px', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderLeft: '4px solid #F59E0B', borderRadius: 10, marginBottom: 10 }}>
                  <i className="fa fa-triangle-exclamation" style={{ color: '#F59E0B', marginTop: 2 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{w}</span>
                </div>
              ))}

              {/* Tabs */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 20, marginTop: 24 }}>
                <button style={tabStyle(tab === 'single')} onClick={() => setTab('single')}>Single Keywords</button>
                <button style={tabStyle(tab === 'bigrams')} onClick={() => setTab('bigrams')}>2-Word Phrases</button>
                <button style={tabStyle(tab === 'trigrams')} onClick={() => setTab('trigrams')}>3-Word Phrases</button>
              </div>

              {tab === 'single' && (
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 100px 80px 80px 80px', padding: '12px 20px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--card-border)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    <span>Keyword</span><span style={{ textAlign: 'center' }}>Count</span><span style={{ textAlign: 'center' }}>Density</span><span style={{ textAlign: 'center' }}>Bar</span><span style={{ textAlign: 'center' }}>Title</span><span style={{ textAlign: 'center' }}>H1</span><span style={{ textAlign: 'center' }}>H2</span>
                  </div>
                  {result.top_keywords.length === 0 ? (
                    <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>No keywords found on this page.</div>
                  ) : result.top_keywords.map((kw, i) => (
                    <div key={`kw-${i}`} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 100px 80px 80px 80px', padding: '12px 20px', borderBottom: i < result.top_keywords.length - 1 ? '1px solid var(--card-border)' : 'none', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-color)', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{kw.keyword}</span>
                      <span style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{kw.count}</span>
                      <span style={{ textAlign: 'center', color: kw.density > 3 ? '#EF4444' : kw.density > 1.5 ? '#F59E0B' : '#10B981', fontWeight: 700, fontSize: '0.85rem' }}>{kw.density}%</span>
                      <div style={{ padding: '0 8px' }}><DensityBar density={kw.density} /></div>
                      <span style={{ textAlign: 'center', fontSize: '0.85rem' }}>{kw.in_title ? '✓' : '–'}</span>
                      <span style={{ textAlign: 'center', fontSize: '0.85rem' }}>{kw.in_h1 ? '✓' : '–'}</span>
                      <span style={{ textAlign: 'center', fontSize: '0.85rem' }}>{kw.in_h2 ? '✓' : '–'}</span>
                    </div>
                  ))}
                </div>
              )}

              {(tab === 'bigrams' || tab === 'trigrams') && (
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 120px', padding: '12px 20px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--card-border)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    <span>Phrase</span><span style={{ textAlign: 'center' }}>Count</span><span style={{ textAlign: 'center' }}>Density</span><span>Bar</span>
                  </div>
                  {phrases.length === 0 ? (
                    <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>No phrases found. Page may not have enough content.</div>
                  ) : phrases.map((p, i) => (
                    <div key={`ph-${i}`} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 120px', padding: '12px 20px', borderBottom: i < phrases.length - 1 ? '1px solid var(--card-border)' : 'none', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-color)', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.phrase}</span>
                      <span style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{p.count}</span>
                      <span style={{ textAlign: 'center', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.85rem' }}>{p.density}%</span>
                      <div style={{ padding: '0 8px' }}><DensityBar density={p.density} /></div>
                    </div>
                  ))}
                </div>
              )}
            </MotionWrapper>
          </div>
        </section>
      )}
    </>
  );
}

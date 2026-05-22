'use client';
import { useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface SpeedResult {
  url: string; status_code: number; load_time_ms: number;
  response_size_kb: number; compression: string; is_compressed: boolean;
  cache_control: string; server: string; http_version: string;
  content_type: string; redirect_count: number;
  redirect_chain: { from: string; status: number }[];
  score: number; issues: string[]; tips: string[];
  error?: string; message?: string;
}

function scoreColor(s: number) {
  return s >= 80 ? 'var(--success-color)' : s >= 50 ? '#F59E0B' : 'var(--error-color)';
}

function UrlInput({ value, onChange, onRun, loading }: { value: string; onChange: (v: string) => void; onRun: () => void; loading: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
      <input type="url" value={value} onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && !loading && onRun()}
        placeholder="https://yourwebsite.com" disabled={loading}
        style={{ flex: '1 1 300px', maxWidth: 480, padding: '15px 20px', border: '1.5px solid var(--card-border)', borderRadius: 10, background: 'var(--card-bg)', color: 'var(--text-color)', font: '1rem var(--default-font)', outline: 'none' }}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-color)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--card-border)')} />
      <button onClick={onRun} disabled={loading || !value.trim()}
        style={{ padding: '15px 36px', background: loading ? 'var(--card-border)' : 'linear-gradient(135deg, #10B981, #06B6D4)', color: '#fff', border: 'none', borderRadius: 10, font: '600 1rem var(--default-font)', cursor: loading ? 'wait' : 'pointer', opacity: loading || !value.trim() ? 0.7 : 1 }}>
        {loading ? <><i className="fa fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Testing…</> : <><i className="fa fa-gauge-high" style={{ marginRight: 8 }} />Test Speed</>}
      </button>
    </div>
  );
}

function StatBox({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '20px 24px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--heading-font)', color: 'var(--accent-color)' }}>{value}</div>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-color)', marginTop: 4 }}>{label}</div>
      {sub && <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

export default function PageSpeedClient() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SpeedResult | null>(null);
  const [error, setError] = useState('');

  async function run() {
    if (!url.trim()) return;
    setLoading(true); setResult(null); setError('');
    try {
      const res = await fetch(`${API}/api/tools/speed?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      if (data.error) setError(data.message || 'Test failed.');
      else setResult(data);
    } catch { setError('Could not reach the server. Make sure the backend is running.'); }
    finally { setLoading(false); }
  }

  return (
    <>
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <MotionWrapper variant="up">
                <p style={{ display: 'inline-block', background: 'var(--secondary-color)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 999, padding: '6px 18px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>Free Tool — No Sign-Up</p>
                <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.6rem)', color: 'var(--primary-color)', marginBottom: 16 }}>Page Speed & Performance Test</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 40px' }}>Measure load time, compression, caching, and server configuration — with actionable recommendations for each issue.</p>
              </MotionWrapper>
              <MotionWrapper variant="up" delay={0.1}>
                <UrlInput value={url} onChange={setUrl} onRun={run} loading={loading} />
                {error && <div style={{ marginTop: 16, padding: '12px 18px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, color: 'var(--error-color)', fontSize: '0.9rem' }}><i className="fa fa-triangle-exclamation" style={{ marginRight: 8 }} />{error}</div>}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {result && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <MotionWrapper variant="up">
              {/* Score + URL */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '32px 40px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, marginBottom: 32, boxShadow: 'var(--shadow-md)', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center', minWidth: 100 }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--heading-font)', color: scoreColor(result.score), lineHeight: 1 }}>{result.score}</div>
                  <div style={{ fontSize: '0.75rem', color: scoreColor(result.score), fontWeight: 600, textTransform: 'uppercase', marginTop: 4 }}>{result.score >= 80 ? 'Fast' : result.score >= 50 ? 'Needs Work' : 'Slow'}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>Speed Score</div>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-color)', wordBreak: 'break-all', marginBottom: 8 }}>{result.url}</div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {[
                      { label: `HTTP ${result.status_code}`, color: result.status_code === 200 ? 'var(--success-color)' : 'var(--error-color)' },
                      { label: result.http_version, color: 'var(--text-muted)' },
                      { label: result.server, color: 'var(--text-muted)' },
                    ].map(i => <span key={i.label} style={{ fontSize: '0.83rem', color: i.color }}>{i.label}</span>)}
                  </div>
                </div>
              </div>

              {/* Stat boxes */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 16, marginBottom: 32 }}>
                <StatBox label="Load Time" value={`${result.load_time_ms} ms`} sub={result.load_time_ms < 1000 ? 'Excellent' : result.load_time_ms < 3000 ? 'Acceptable' : 'Slow'} />
                <StatBox label="Response Size" value={`${result.response_size_kb} KB`} sub={result.response_size_kb < 100 ? 'Lean' : 'Consider minifying'} />
                <StatBox label="Compression" value={result.is_compressed ? result.compression.toUpperCase() : 'None'} sub={result.is_compressed ? 'Active ✓' : 'Not enabled'} />
                <StatBox label="Cache-Control" value={result.cache_control === 'not set' ? 'Not set' : 'Set'} sub={result.cache_control !== 'not set' ? result.cache_control.slice(0, 20) : 'Missing header'} />
                <StatBox label="Redirects" value={String(result.redirect_count)} sub={result.redirect_count === 0 ? 'None ✓' : 'Each costs ~100 ms'} />
              </div>

              {/* Issues */}
              {result.issues.length > 0 && (
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: 16 }}>Issues Found</h3>
                  {result.issues.map((issue, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 18px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderLeft: '4px solid var(--error-color)', borderRadius: 10, marginBottom: 10 }}>
                      <i className="fa fa-circle-xmark" style={{ color: 'var(--error-color)', marginTop: 2 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{issue}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tips */}
              <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: 16 }}>Recommendations</h3>
              {result.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 18px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderLeft: '4px solid var(--success-color)', borderRadius: 10, marginBottom: 10 }}>
                  <i className="fa fa-lightbulb" style={{ color: 'var(--success-color)', marginTop: 2 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{tip}</span>
                </div>
              ))}

              {/* Redirect chain */}
              {result.redirect_chain.length > 0 && (
                <>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', margin: '24px 0 12px' }}>Redirect Chain</h3>
                  {result.redirect_chain.map((r, i) => (
                    <div key={i} style={{ padding: '10px 16px', background: 'var(--bg-secondary)', borderRadius: 8, marginBottom: 6, fontSize: '0.85rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                      <span style={{ color: '#F59E0B', fontWeight: 600, marginRight: 8 }}>{r.status}</span>{r.from}
                    </div>
                  ))}
                </>
              )}
            </MotionWrapper>
          </div>
        </section>
      )}
    </>
  );
}

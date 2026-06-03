'use client';
import { useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface BotAccess { bot: string; name: string; allowed: boolean; }
interface TestResult { path: string; url_tested?: string; allowed_for_googlebot: boolean; allowed_for_bingbot?: boolean; allowed_for_all: boolean; }
interface RobotsResult {
  url: string; robots_url: string; found: boolean; raw: string;
  raw_truncated?: boolean;
  rules: { user_agent: string; disallows: string[]; allows: string[] }[];
  rules_truncated?: boolean;
  sitemaps: string[]; crawl_delay: number | null;
  bot_access: BotAccess[]; test_path_result: TestResult | null;
  recommendation: string; status_note?: string; error?: string; message?: string;
}

const SUCCESS = '#10B981';
const ERROR   = '#EF4444';
const WARN    = '#F59E0B';

export default function RobotsTesterClient() {
  const [url, setUrl] = useState('');
  const [testPath, setTestPath] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RobotsResult | null>(null);
  const [error, setError] = useState('');
  const [showRaw, setShowRaw] = useState(false);

  async function run() {
    if (!url.trim()) return;
    setLoading(true); setResult(null); setError('');
    const params = new URLSearchParams({ url: url.trim() });
    if (testPath.trim()) params.append('test_path', testPath.trim());
    try {
      const res = await fetch(`${API}/api/tools/robots?${params}`);
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.message || data.detail || 'Test failed.');
      } else {
        setResult(data);
      }
    } catch { setError('Could not reach the server.'); }
    finally { setLoading(false); }
  }

  const displayedRules = result?.rules.slice(0, 10) ?? [];
  const hiddenRuleCount = result ? Math.max(0, result.rules.length - 10) : 0;

  return (
    <>
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <MotionWrapper variant="up">
                <p style={{ display: 'inline-block', background: 'rgba(245,158,11,0.08)', color: WARN, border: '1px solid rgba(245,158,11,0.2)', borderRadius: 999, padding: '6px 18px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>Free Tool — No Sign-Up</p>
                <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.6rem)', color: 'var(--primary-color)', marginBottom: 16 }}>Robots.txt Tester</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 40px' }}>Fetch and parse any robots.txt — check Googlebot access, view all rules, discover sitemaps, and test specific URL paths.</p>
              </MotionWrapper>
              <MotionWrapper variant="up" delay={0.1}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 12 }}>
                  <input type="text" value={url} onChange={e => setUrl(e.target.value)} onKeyDown={e => e.key === 'Enter' && !loading && run()} placeholder="https://yourwebsite.com" disabled={loading}
                    style={{ flex: '1 1 300px', maxWidth: 400, padding: '15px 20px', border: '1.5px solid var(--card-border)', borderRadius: 10, background: 'var(--card-bg)', color: 'var(--text-color)', font: '1rem var(--default-font)', outline: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = WARN)} onBlur={e => (e.currentTarget.style.borderColor = 'var(--card-border)')} />
                  <input type="text" value={testPath} onChange={e => setTestPath(e.target.value)} placeholder="/optional-path-to-test" disabled={loading}
                    style={{ flex: '1 1 200px', maxWidth: 240, padding: '15px 20px', border: '1.5px solid var(--card-border)', borderRadius: 10, background: 'var(--card-bg)', color: 'var(--text-color)', font: '1rem var(--default-font)', outline: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = WARN)} onBlur={e => (e.currentTarget.style.borderColor = 'var(--card-border)')} />
                  <button onClick={run} disabled={loading || !url.trim()} style={{ padding: '15px 32px', background: loading ? 'var(--card-border)' : `linear-gradient(135deg, ${WARN}, ${ERROR})`, color: '#fff', border: 'none', borderRadius: 10, font: '600 1rem var(--default-font)', cursor: loading ? 'wait' : 'pointer', opacity: loading || !url.trim() ? 0.7 : 1, whiteSpace: 'nowrap' }}>
                    {loading ? <><i className="fa fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Testing…</> : <><i className="fa fa-robot" style={{ marginRight: 8 }} />Test</>}
                  </button>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Optionally enter a path (e.g. <code>/admin</code>) to check if it&apos;s blocked by any rule.</p>
                {error && <div style={{ marginTop: 16, padding: '12px 18px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, color: ERROR, fontSize: '0.9rem' }}>{error}</div>}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {result && (
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <MotionWrapper variant="up">
              {/* Status */}
              <div style={{ padding: '24px 32px', background: result.found ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)', border: `1px solid ${result.found ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, borderRadius: 16, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <i className={`fa ${result.found ? 'fa-circle-check' : 'fa-circle-xmark'}`} style={{ fontSize: '1.2rem', color: result.found ? SUCCESS : ERROR }} />
                  <span style={{ fontWeight: 700, color: 'var(--text-color)' }}>{result.found ? 'robots.txt found' : 'No robots.txt found'}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{result.robots_url}</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-color)' }}>{result.recommendation}</p>
                {result.status_note && (
                  <p style={{ margin: '8px 0 0', fontSize: '0.82rem', color: WARN }}>
                    <i className="fa fa-triangle-exclamation" style={{ marginRight: 6 }} />{result.status_note}
                  </p>
                )}
              </div>

              {/* Search Engine Access — shown even when no robots.txt (all allowed) */}
              {result.bot_access.length > 0 && (
                <>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: 16 }}>
                    Search Engine Access {!result.found && <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-muted)' }}>(no robots.txt — all crawlers unrestricted)</span>}
                  </h3>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, overflow: 'hidden', marginBottom: 28, boxShadow: 'var(--shadow-sm)' }}>
                    {result.bot_access.map((b, i) => (
                      <div key={b.bot} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', borderBottom: i < result.bot_access.length - 1 ? '1px solid var(--card-border)' : 'none' }}>
                        <div>
                          <span style={{ fontWeight: 600, color: 'var(--text-color)', fontSize: '0.9rem' }}>{b.name}</span>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: 8 }}>({b.bot})</span>
                        </div>
                        <span style={{ padding: '4px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, background: b.allowed ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: b.allowed ? SUCCESS : ERROR }}>
                          {b.allowed ? 'Allowed' : 'Blocked'}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Path test result */}
              {result.test_path_result && (
                <div style={{ padding: '20px 24px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, marginBottom: 24 }}>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-color)', marginBottom: 12 }}>
                    Path Test: <code style={{ fontWeight: 400 }}>{result.test_path_result.path}</code>
                  </h3>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {[
                      { label: 'Googlebot', allowed: result.test_path_result.allowed_for_googlebot },
                      { label: 'Bingbot', allowed: result.test_path_result.allowed_for_bingbot ?? true },
                      { label: 'All Bots (*)', allowed: result.test_path_result.allowed_for_all },
                    ].map(b => (
                      <span key={b.label} style={{ padding: '6px 16px', borderRadius: 8, fontSize: '0.88rem', fontWeight: 600, background: b.allowed ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: b.allowed ? SUCCESS : ERROR, border: `1px solid ${b.allowed ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
                        {b.label}: {b.allowed ? 'Allowed ✓' : 'Blocked ✗'}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="row g-4">
                {/* Rules */}
                {result.rules.length > 0 && (
                  <div className="col-lg-6">
                    <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1rem', color: 'var(--primary-color)', marginBottom: 12 }}>
                      Parsed Rules {result.rules_truncated && <span style={{ fontSize: '0.78rem', fontWeight: 400, color: 'var(--text-muted)' }}>(showing 10 of {result.rules.length})</span>}
                    </h3>
                    {displayedRules.map((r, i) => (
                      <div key={i} style={{ padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: 10, marginBottom: 8 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-color)', marginBottom: 6 }}>User-agent: {r.user_agent}</div>
                        {r.disallows.map((d, di) => <div key={`d-${di}`} style={{ fontSize: '0.82rem', color: ERROR }}>Disallow: {d || '(empty — fully allowed)'}</div>)}
                        {r.allows.map((a, ai) => <div key={`a-${ai}`} style={{ fontSize: '0.82rem', color: SUCCESS }}>Allow: {a}</div>)}
                        {r.disallows.length === 0 && r.allows.length === 0 && <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>No restrictions</div>}
                      </div>
                    ))}
                    {hiddenRuleCount > 0 && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', padding: '8px 16px' }}>
                        … and {hiddenRuleCount} more rule group{hiddenRuleCount > 1 ? 's' : ''} (view raw file below)
                      </div>
                    )}
                  </div>
                )}

                {/* Sitemaps + Crawl Delay */}
                <div className={result.rules.length > 0 ? 'col-lg-6' : 'col-lg-12'}>
                  {result.sitemaps.length > 0 && (
                    <>
                      <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1rem', color: 'var(--primary-color)', marginBottom: 12 }}>Sitemaps Declared</h3>
                      {result.sitemaps.map(s => (
                        <div key={s} style={{ padding: '10px 16px', background: 'var(--bg-secondary)', borderRadius: 8, marginBottom: 8, fontSize: '0.84rem', wordBreak: 'break-all' }}>
                          <i className="fa fa-sitemap" style={{ color: 'var(--accent-color)', marginRight: 8 }} />
                          <a href={s} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>{s}</a>
                        </div>
                      ))}
                    </>
                  )}
                  {result.crawl_delay !== null && (
                    <div style={{ marginTop: 16, padding: '14px 18px', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, fontSize: '0.9rem', color: 'var(--text-color)' }}>
                      <i className="fa fa-clock" style={{ color: WARN, marginRight: 8 }} />
                      Crawl-delay (wildcard): <strong>{result.crawl_delay}s</strong> — crawlers will wait this long between requests.
                    </div>
                  )}
                </div>
              </div>

              {/* Raw robots.txt */}
              {result.found && result.raw && (
                <div style={{ marginTop: 24 }}>
                  <button onClick={() => setShowRaw(!showRaw)} style={{ background: 'none', border: '1px solid var(--card-border)', borderRadius: 8, padding: '8px 16px', fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <i className={`fa fa-chevron-${showRaw ? 'up' : 'down'}`} style={{ marginRight: 6 }} />
                    {showRaw ? 'Hide' : 'Show'} raw robots.txt
                  </button>
                  {showRaw && (
                    <>
                      {result.raw_truncated && (
                        <div style={{ marginTop: 8, padding: '8px 14px', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, fontSize: '0.82rem', color: WARN }}>
                          <i className="fa fa-triangle-exclamation" style={{ marginRight: 6 }} />
                          File is large — showing first 3,000 characters only.
                        </div>
                      )}
                      <pre style={{ marginTop: 8, padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: '0.82rem', overflowX: 'auto', color: 'var(--text-muted)', lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{result.raw}</pre>
                    </>
                  )}
                </div>
              )}
            </MotionWrapper>
          </div>
        </section>
      )}
    </>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import MotionWrapper, { MotionCard } from '@/components/MotionWrapper';
import AuditResults, { buildChecks, computeScore, GROUPS, GROUP_ICONS, type AuditResult } from '@/components/AuditResults';

/* ── Main component ─────────────────────────────────────────────────────── */
export default function SeoAuditClient() {
  const [url,      setUrl]      = useState('');
  const [loading,  setLoading]  = useState(false);
  const [result,   setResult]   = useState<AuditResult | null>(null);
  const [error,    setError]    = useState('');
  const [progress, setProgress] = useState(0);
  const [stage,    setStage]    = useState('');
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const STAGES = [
    'Connecting to server…',
    'Fetching page content…',
    'Checking title & meta tags…',
    'Analysing headings & structure…',
    'Scanning images & links…',
    'Checking Open Graph & Schema…',
    'Finalising report…',
  ];

  function startProgress() {
    let p = 0;
    setProgress(0);
    setStage(STAGES[0]);
    progressRef.current = setInterval(() => {
      const increment = p < 70 ? Math.random() * 4 + 2
                      : p < 90 ? Math.random() * 1 + 0.3
                      :          Math.random() * 0.2 + 0.05;
      p = Math.min(p + increment, 97);
      setProgress(Math.round(p));
      setStage(STAGES[Math.min(Math.floor((p / 97) * STAGES.length), STAGES.length - 1)]);
    }, 500);
  }

  function stopProgress() {
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(100);
    setStage('Report ready!');
  }

  useEffect(() => () => { if (progressRef.current) clearInterval(progressRef.current); }, []);

  function isValidUrl(input: string): boolean {
    try {
      const u = new URL(input.startsWith('http') ? input : `https://${input}`);
      return /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(u.hostname);
    } catch { return false; }
  }

  async function runAudit() {
    const raw = url.trim();
    if (!raw) return;
    if (!isValidUrl(raw)) {
      setError('Please enter a valid URL — e.g. https://example.com');
      return;
    }
    const target = raw.startsWith('http') ? raw : `https://${raw}`;
    setLoading(true); setResult(null); setError('');
    startProgress();
    try {
      const res  = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/tools/audit?url=${encodeURIComponent(target)}`);
      const data = await res.json();
      if (!res.ok || data.error) {
        stopProgress();
        setError(data.message || data.detail || 'Audit failed. Check the URL and try again.');
      } else {
        stopProgress();
        setResult(data);
      }
    } catch {
      stopProgress();
      setError('Could not reach the audit server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }

  const checks = result ? buildChecks(result) : [];
  const score  = result ? computeScore(checks) : 0;

  return (
    <>
      {/* ── Input ───────────────────────────────────────────────────────── */}
      <section className="tool-scanner-section">
        <div className="tool-scanner-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <MotionWrapper variant="up">
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <span className="tools-hero-badge">
                <i className="fa-solid fa-bolt"></i>
                Free Tool — No Sign-Up Required
              </span>
              <h2 className="tool-page-heading">Professional On-Page <span>SEO Audit</span></h2>
              <p className="tool-page-sub">
                Enter any URL and get a <strong>25-point industry-level audit</strong> with actionable fix recommendations — in seconds.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="up" delay={0.1}>
            <div className="tool-input-wrap">
              <div className={`tool-input-box${loading ? ' tool-input-box--scanning' : ''}`}>
                <div className="tool-input-body">
                  <span className="tool-input-prefix"><i className="fa-solid fa-globe"></i></span>
                  <input
                    type="text" value={url}
                    onChange={e => setUrl(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !loading && runAudit()}
                    aria-label="Website URL" placeholder="https://yourwebsite.com"
                    disabled={loading} className="tool-input-field" autoComplete="url"
                  />
                  <button onClick={runAudit} disabled={loading || !url.trim()} className="tool-input-btn">
                    {loading
                      ? <><i className="fa fa-circle-notch fa-spin"></i><span>Scanning…</span></>
                      : <><i className="fa-solid fa-magnifying-glass"></i><span>Audit Now</span></>}
                  </button>
                </div>
                {loading && (
                  <div className="audit-progress-inline">
                    <div className="audit-progress-track">
                      <div className="audit-progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="audit-progress-meta">
                      <span className="audit-progress-stage">{stage}</span>
                      <span className="audit-progress-pct">{progress}%</span>
                    </div>
                  </div>
                )}
              </div>
              <p className="tool-input-hint">
                <i className="fa-solid fa-lock"></i>
                Works on any public URL · 24 checks · Fix recommendations included
              </p>
              {error && <div className="tool-error-bar"><i className="fa fa-triangle-exclamation"></i> {error}</div>}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ── Results ─────────────────────────────────────────────────────── */}
      {result && (
        <AuditResults
          result={result}
          checks={checks}
          score={score}
          showPdfButton={true}
        />
      )}

      {/* ── What we check (pre-audit) ────────────────────────────────────── */}
      {!result && !loading && (
        <section className="tool-what-section">
          <div className="container">
            <MotionWrapper variant="up">
              <h3 className="tool-what-heading">24 SEO factors · 5 categories · Fix recommendations included</h3>
            </MotionWrapper>
            <div className="tool-what-grid">
              {GROUPS.map((g, i) => {
                const groupChecks = [
                  { 'On-Page SEO':   ['Title Tag', 'Meta Description', 'H1 Tag', 'Heading Hierarchy', 'Robots/Noindex', 'Canonical URL'] },
                  { 'Technical':     ['HTTPS/SSL', 'Viewport Meta', 'Language Attr', 'Favicon', 'XML Sitemap', 'Robots.txt', 'Load Time', 'Page Size', 'URL Structure'] },
                  { 'Content':       ['Word Count', 'Text-to-HTML Ratio'] },
                  { 'Social & Schema': ['Open Graph', 'OG Image', 'Twitter Cards', 'Structured Data'] },
                  { 'Links & Media': ['Image Alt Text', 'Internal Links', 'Image Dimensions'] },
                ][i][g] ?? [];
                return (
                  <MotionWrapper key={g} variant="up" delay={i * 0.06}>
                    <div className="tool-what-group-card">
                      <div className="tool-what-icon"><i className={`fa-solid ${GROUP_ICONS[g]}`}></i></div>
                      <h4>{g}</h4>
                      <ul>
                        {groupChecks.map(c => <li key={c}><i className="fa-solid fa-check" style={{ color: 'var(--accent-color)', marginRight: 6, fontSize: '0.75rem' }}></i>{c}</li>)}
                      </ul>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

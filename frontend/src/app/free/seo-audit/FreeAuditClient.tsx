'use client';

import { useState, useRef, useEffect } from 'react';
import MotionWrapper from '@/components/MotionWrapper';
import AuditResults, { buildChecks, computeScore, type AuditResult } from '@/components/AuditResults';

type Step = 'form' | 'scanning' | 'result' | 'error';

export default function FreeAuditClient() {
  const [email,      setEmail]      = useState('');
  const [phone,      setPhone]      = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [step,       setStep]       = useState<Step>('form');
  const [result,     setResult]     = useState<AuditResult | null>(null);
  const [error,      setError]      = useState('');
  const [leadId,     setLeadId]     = useState<string | null>(null);
  const [progress,   setProgress]   = useState(0);
  const [stage,      setStage]      = useState('');
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
      // Fast up to 70%, then slow to 90%, then crawl to 97% — never freezes
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedUrl   = websiteUrl.trim();
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedUrl) return;
    setStep('scanning');
    setError('');
    startProgress();

    const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    const leadPayload = new URLSearchParams({
      fname:       trimmedEmail.split('@')[0],
      lname:       '',
      email:       trimmedEmail,
      phone:       phone.trim(),
      service:     'Free SEO Audit',
      message:     `Free audit request for ${trimmedUrl}`,
      source:      'free_seo_audit',
      website_url: trimmedUrl,
    });

    // Fire lead save and audit in parallel — don't let lead save block the audit
    const leadPromise = fetch(`${API}/api/submit`, { method: 'POST', body: leadPayload })
      .then(r => r.json())
      .catch(() => null);

    const auditPromise = fetch(`${API}/api/tools/audit?url=${encodeURIComponent(trimmedUrl)}`)
      .then(r => r.json().then(data => ({ ok: r.ok, data })))
      .catch(() => null);

    const [leadData, auditResult] = await Promise.all([leadPromise, auditPromise]);

    const savedLeadId = leadData?.lead_id ?? null;
    setLeadId(savedLeadId);

    if (!auditResult || !auditResult.ok || auditResult.data.error) {
      stopProgress();
      setError(auditResult?.data?.message || auditResult?.data?.detail || 'Audit failed. Please check the URL and try again.');
      setStep('error');
      return;
    }

    stopProgress();
    setResult(auditResult.data);
    setStep('result');

    // Patch audit score back to lead (fire-and-forget)
    if (savedLeadId) {
      const auditScore = computeScore(buildChecks(auditResult.data));
      fetch(`${API}/api/leads/${savedLeadId}/score`, {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ audit_score: auditScore }),
      }).catch(() => {});
    }
  }

  function resetForm() {
    setStep('form');
    setError('');
    setResult(null);
    setLeadId(null);
  }

  const pdfName = `seo-audit-${websiteUrl.replace(/https?:\/\//, '').replace(/[^a-z0-9.-]/gi, '-')}.pdf`;

  return (
    <>
      {/* ── Audit form / scanning state ─────────────────────────────────── */}
      {step !== 'result' && (
        <section className="free-audit-form-section tool-scanner-section" style={{ paddingBottom: step === 'scanning' ? '60px' : undefined }}>
          <div className="tool-scanner-bg" aria-hidden="true" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <MotionWrapper variant="up">
              <div className="text-center" style={{ marginBottom: '2rem' }}>
                <span className="tools-hero-badge">
                  <i className="fa-solid fa-bolt"></i>
                  Instant Report — No Waiting
                </span>
                <h2 className="tool-page-heading">
                  Get Your Free <span>25-Point SEO Audit</span>
                </h2>
                <p className="tool-page-sub">
                  Enter your details below and we&apos;ll run a comprehensive audit of your website — instantly.
                  We&apos;ll also email you a copy of the report.
                </p>
              </div>
            </MotionWrapper>

            {step === 'scanning' ? (
              <MotionWrapper variant="up" delay={0.1}>
                <div className="audit-progress-wrap">
                  <p className="audit-progress-url">
                    Scanning <strong>{websiteUrl}</strong> across 25 SEO factors
                  </p>
                  <div className="audit-progress-track">
                    <div className="audit-progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="audit-progress-meta">
                    <span className="audit-progress-stage">{stage}</span>
                    <span className="audit-progress-pct">{progress}%</span>
                  </div>
                </div>
              </MotionWrapper>
            ) : (
              <MotionWrapper variant="up" delay={0.1}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Email */}
                    <div className="cf-field" style={{ marginBottom: 16 }}>
                      <input
                        type="email"
                        className="cf-input"
                        placeholder=" "
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                      />
                      <label className="cf-label">Email address *</label>
                    </div>

                    {/* Phone */}
                    <div className="cf-field" style={{ marginBottom: 16 }}>
                      <input
                        type="tel"
                        className="cf-input"
                        placeholder=" "
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        autoComplete="tel"
                      />
                      <label className="cf-label">Phone number (optional)</label>
                    </div>

                    {/* Website URL */}
                    <div className="cf-field" style={{ marginBottom: 22 }}>
                      <input
                        type="url"
                        className="cf-input"
                        placeholder=" "
                        value={websiteUrl}
                        onChange={e => setWebsiteUrl(e.target.value)}
                        required
                        autoComplete="url"
                      />
                      <label className="cf-label">Website URL *</label>
                    </div>

                    {error && (
                      <div className="tool-error-bar" style={{ marginBottom: 16 }}>
                        <i className="fa fa-triangle-exclamation"></i> {error}{' '}
                        <button type="button" onClick={resetForm} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textDecoration: 'underline', fontSize: 'inherit', padding: 0 }}>
                          Try again
                        </button>
                      </div>
                    )}

                    <button type="submit" className="btn-default cf-submit">
                      <i className="fa-solid fa-magnifying-glass"></i> Run Free SEO Audit
                    </button>

                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 12 }}>
                      <i className="fa-solid fa-lock" style={{ fontSize: '0.7rem' }}></i>
                      {' '}No spam. Your data is safe with us.
                    </p>
                  </form>
                </div>
              </MotionWrapper>
            )}
          </div>
        </section>
      )}

      {/* ── Audit results ────────────────────────────────────────────────── */}
      {step === 'result' && result && (
        <>
          {/* Compact re-audit bar */}
          <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--card-border)', padding: '12px 0' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#10B981', marginRight: 6 }}></i>
                Audit complete for <strong style={{ color: 'var(--text-color)' }}>{websiteUrl}</strong>
              </span>
              <button
                onClick={resetForm}
                style={{ marginLeft: 'auto', background: 'none', border: '1px solid var(--card-border)', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.8rem' }}
              >
                <i className="fa-solid fa-rotate-left" style={{ marginRight: 6 }}></i>Audit another site
              </button>
            </div>
          </div>

          <AuditResults
            result={result}
            checks={buildChecks(result)}
            score={computeScore(buildChecks(result))}
            showPdfButton={true}
            pdfFilename={pdfName}
          />
        </>
      )}
    </>
  );
}

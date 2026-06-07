'use client';

import { useCallback, useRef, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Keyword {
  id: string;
  keyword: string;
  position: number | null;
  ranked_url: string | null;
  serp_features: string[];
  check_date: string | null;
  status: 'pending' | 'checking' | 'done' | 'error';
  organic_count: number;
  errorMsg: string | null;
}

interface ChartPoint {
  date: string;
  avg_position: number;
}

type Mode = 'wizard' | 'tracking' | 'dashboard';
type Step = 1 | 2 | 3;

// ── Country list ──────────────────────────────────────────────────────────────

const COUNTRIES = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'India', value: 'in' },
  { label: 'Australia', value: 'au' },
  { label: 'Canada', value: 'ca' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Netherlands', value: 'nl' },
  { label: 'Singapore', value: 'sg' },
  { label: 'South Africa', value: 'za' },
  { label: 'UAE', value: 'ae' },
  { label: 'Pakistan', value: 'pk' },
  { label: 'Philippines', value: 'ph' },
  { label: 'Malaysia', value: 'my' },
  { label: 'Brazil', value: 'br' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Italy', value: 'it' },
  { label: 'Spain', value: 'es' },
  { label: 'Japan', value: 'jp' },
  { label: 'South Korea', value: 'kr' },
];

// ── Position badge ─────────────────────────────────────────────────────────────

function PositionBadge({ position, organicCount, errorMsg }: { position: number | null; organicCount?: number; errorMsg?: string | null }) {
  if (errorMsg)
    return (
      <span title={errorMsg} style={{ ...badgeStyle, background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', cursor: 'help' }}>
        API Error
      </span>
    );
  if (position === null) {
    const label = organicCount ? `Not in Top ${organicCount}` : 'Not Ranked';
    return <span style={{ ...badgeStyle, background: '#F3F4F6', color: '#9CA3AF', border: '1px solid #E5E7EB' }}>{label}</span>;
  }
  if (position <= 3)
    return <span style={{ ...badgeStyle, background: '#ECFDF5', color: '#059669', border: '1px solid #6EE7B7' }}>#{position}</span>;
  if (position <= 10)
    return <span style={{ ...badgeStyle, background: '#EFF6FF', color: '#2563EB', border: '1px solid #93C5FD' }}>#{position}</span>;
  if (position <= 30)
    return <span style={{ ...badgeStyle, background: '#FFFBEB', color: '#D97706', border: '1px solid #FCD34D' }}>#{position}</span>;
  return <span style={{ ...badgeStyle, background: '#FFF7ED', color: '#EA580C', border: '1px solid #FDB98A' }}>#{position}</span>;
}

const badgeStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '3px 10px',
  borderRadius: 20,
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 0.2,
};

// ── Main component ─────────────────────────────────────────────────────────────

export default function RankTrackerClient() {
  // Wizard state
  const [mode, setMode] = useState<Mode>('wizard');
  const [step, setStep] = useState<Step>(1);

  // Step 1
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [browser, setBrowser] = useState<'desktop' | 'mobile'>('desktop');
  const [country, setCountry] = useState('us');

  // Step 2
  const [projectId, setProjectId] = useState('');
  const [suggestedCompetitors, setSuggestedCompetitors] = useState<string[]>([]);
  const [selectedCompetitors, setSelectedCompetitors] = useState<Set<string>>(new Set());
  const [manualCompUrl, setManualCompUrl] = useState('');
  const [showManualComp, setShowManualComp] = useState(false);
  const [loadingCompetitors, setLoadingCompetitors] = useState(false);

  // Step 3
  const [keywordsText, setKeywordsText] = useState('');
  const [excludeBrand, setExcludeBrand] = useState(false);
  const [brandName, setBrandName] = useState('');

  // Tracking / dashboard
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [competitors, setCompetitors] = useState<string[]>([]);
  const [projectUrl, setProjectUrl] = useState('');

  // Filters & sort for dashboard table
  const [posFilter, setPosFilter] = useState<'all' | 'top3' | 'top10' | 'top30' | 'top100' | 'unranked'>('all');
  const [sortKey, setSortKey] = useState<'keyword' | 'position'>('position');
  const [sortAsc, setSortAsc] = useState(true);

  const [error, setError] = useState('');
  const [wizardLoading, setWizardLoading] = useState(false);

  const esRef = useRef<EventSource | null>(null);

  // ── Step 1 → Step 2 ──────────────────────────────────────────────────────────

  const handleStep1Continue = async () => {
    const url = websiteUrl.trim();
    if (!url) { setError('Please enter a website URL.'); return; }
    setError('');
    setWizardLoading(true);
    try {
      const res = await fetch(`${API}/api/tools/rank/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_url: url,
          browser,
          country,
          country_name: COUNTRIES.find(c => c.value === country)?.label || 'United States',
          language: 'en',
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.detail || 'Failed to create project.'); return; }
      setProjectId(data.project_id);
      setProjectUrl(url);
      await fetchCompetitors(url, data.project_id);
      setStep(2);
    } catch {
      setError('Could not reach the server. Make sure the backend is running.');
    } finally {
      setWizardLoading(false);
    }
  };

  const fetchCompetitors = async (url: string, pid: string) => {
    setLoadingCompetitors(true);
    try {
      const res = await fetch(`${API}/api/tools/rank/competitors/suggest?url=${encodeURIComponent(url)}&country=${country}`);
      const data = await res.json();
      const list: string[] = data.competitors || [];
      setSuggestedCompetitors(list);
      setSelectedCompetitors(new Set(list));
    } catch {
      setSuggestedCompetitors([]);
    } finally {
      setLoadingCompetitors(false);
    }
  };

  const toggleCompetitor = (domain: string) => {
    setSelectedCompetitors(prev => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain); else next.add(domain);
      return next;
    });
  };

  const addManualCompetitor = () => {
    const url = manualCompUrl.trim().replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
    if (!url) return;
    setSuggestedCompetitors(prev => prev.includes(url) ? prev : [...prev, url]);
    setSelectedCompetitors(prev => new Set([...prev, url]));
    setManualCompUrl('');
    setShowManualComp(false);
  };

  // ── Step 2 → Step 3 ──────────────────────────────────────────────────────────

  const handleStep2Continue = async () => {
    setError('');
    setWizardLoading(true);
    try {
      await fetch(`${API}/api/tools/rank/projects/${projectId}/competitors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ competitors: [...selectedCompetitors] }),
      });
      setCompetitors([...selectedCompetitors]);
      setStep(3);
    } catch {
      setError('Could not save competitors. Try again.');
    } finally {
      setWizardLoading(false);
    }
  };

  // ── CSV import ────────────────────────────────────────────────────────────────

  const handleCsvImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const lines = text.split(/[\r\n,]+/).map(l => l.trim()).filter(Boolean);
      const hasHeader = lines[0]?.toLowerCase() === 'keyword' || lines[0]?.toLowerCase() === 'keywords';
      const kws = hasHeader ? lines.slice(1) : lines;
      setKeywordsText(prev => {
        const existing = prev.trim() ? prev.trim().split('\n') : [];
        const merged = [...new Set([...existing, ...kws])];
        return merged.join('\n');
      });
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // ── Launch tracking ───────────────────────────────────────────────────────────

  const handleLaunchTracking = async () => {
    const rawKws = keywordsText.split('\n').map(k => k.trim()).filter(Boolean);
    if (rawKws.length === 0) { setError('Please add at least one keyword.'); return; }
    setError('');
    setWizardLoading(true);
    try {
      const res = await fetch(`${API}/api/tools/rank/projects/${projectId}/keywords`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords: rawKws, brand_name: excludeBrand ? brandName : '' }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.detail || 'Failed to save keywords.'); return; }
      const kwCount = data.saved as number;
      setTotal(kwCount);
      setChecked(0);
      setKeywords([]);
      setMode('tracking');
      startSSE(kwCount);
    } catch {
      setError('Could not reach the server.');
    } finally {
      setWizardLoading(false);
    }
  };

  // ── SSE stream ────────────────────────────────────────────────────────────────

  const startSSE = useCallback((kwCount: number) => {
    if (esRef.current) esRef.current.close();
    const es = new EventSource(`${API}/api/tools/rank/projects/${projectId}/stream`);
    esRef.current = es;

    es.addEventListener('rank_result', (e) => {
      const d = JSON.parse(e.data);
      setKeywords(prev => {
        const idx = prev.findIndex(k => k.id === d.keyword_id);
        const updated: Keyword = {
          id: d.keyword_id,
          keyword: d.keyword,
          position: d.position ?? null,
          ranked_url: d.ranked_url ?? null,
          serp_features: d.serp_features || [],
          check_date: new Date().toISOString().split('T')[0],
          status: d.error ? 'error' : 'done',
          organic_count: d.organic_count ?? 0,
          errorMsg: d.error ?? null,
        };
        if (idx >= 0) {
          const copy = [...prev];
          copy[idx] = updated;
          return copy;
        }
        return [...prev, updated];
      });
    });

    es.addEventListener('progress', (e) => {
      const d = JSON.parse(e.data);
      setChecked(d.checked);
      setTotal(d.total);
    });

    es.addEventListener('done', () => {
      es.close();
      esRef.current = null;
      loadDashboard();
    });

    es.onerror = () => {
      es.close();
      esRef.current = null;
      setMode('dashboard');
    };
  }, [projectId]);

  const loadDashboard = async () => {
    try {
      const res = await fetch(`${API}/api/tools/rank/projects/${projectId}`);
      const data = await res.json();
      if (res.ok) {
        setChartData(data.chart_data || []);
        setCompetitors((data.competitors || []).map((c: { url: string }) => c.url));
      }
    } finally {
      setMode('dashboard');
    }
  };

  // ── Derived stats ─────────────────────────────────────────────────────────────

  const ranked = keywords.filter(k => k.position !== null);
  const avgPos = ranked.length ? Math.round(ranked.reduce((a, b) => a + (b.position ?? 0), 0) / ranked.length) : null;
  const top3 = keywords.filter(k => k.position !== null && k.position <= 3).length;
  const top10 = keywords.filter(k => k.position !== null && k.position <= 10).length;
  const top30 = keywords.filter(k => k.position !== null && k.position <= 30).length;
  const notRanked = keywords.filter(k => k.position === null).length;

  const filteredKeywords = keywords
    .filter(k => {
      if (posFilter === 'top3') return k.position !== null && k.position <= 3;
      if (posFilter === 'top10') return k.position !== null && k.position <= 10;
      if (posFilter === 'top30') return k.position !== null && k.position <= 30;
      if (posFilter === 'top100') return k.position !== null && k.position <= 100;
      if (posFilter === 'unranked') return k.position === null;
      return true;
    })
    .sort((a, b) => {
      if (sortKey === 'position') {
        const ap = a.position ?? 9999;
        const bp = b.position ?? 9999;
        return sortAsc ? ap - bp : bp - ap;
      }
      return sortAsc
        ? a.keyword.localeCompare(b.keyword)
        : b.keyword.localeCompare(a.keyword);
    });

  const handleSort = (key: 'keyword' | 'position') => {
    if (sortKey === key) setSortAsc(a => !a);
    else { setSortKey(key); setSortAsc(true); }
  };

  const handleTrackAgain = () => {
    setChecked(0);
    setTotal(keywords.length);
    setKeywords(prev => prev.map(k => ({ ...k, status: 'pending' as const, position: null, ranked_url: null, organic_count: 0, errorMsg: null })));
    setMode('tracking');
    startSSE(keywords.length);
  };

  const handleNewProject = () => {
    if (esRef.current) esRef.current.close();
    setMode('wizard');
    setStep(1);
    setWebsiteUrl('');
    setBrowser('desktop');
    setCountry('us');
    setProjectId('');
    setProjectUrl('');
    setSuggestedCompetitors([]);
    setSelectedCompetitors(new Set());
    setKeywordsText('');
    setExcludeBrand(false);
    setBrandName('');
    setKeywords([]);
    setChartData([]);
    setCompetitors([]);
    setError('');
  };

  // ── Render ────────────────────────────────────────────────────────────────────

  return (
    <section style={{ background: 'var(--bg-color)', minHeight: '60vh', padding: '3rem 0 5rem' }}>
      <div className="container">

        {/* ── WIZARD ──────────────────────────────────────────────────────────── */}
        {mode === 'wizard' && (
          <div style={{ maxWidth: 600, margin: '0 auto' }}>

            {/* Intro badge */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(82,27,137,0.08)', border: '1px solid rgba(82,27,137,0.18)',
                color: 'var(--accent-color)', borderRadius: 20, padding: '5px 14px',
                fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                <i className="fa-solid fa-chart-line"></i> Real-time SERP Tracking
              </span>
              <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-color)', margin: '0 0 6px' }}>
                Set up your rank tracking project
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>
                3 quick steps — results appear live as we check Google for you.
              </p>
            </div>

            {/* Step indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              {([1, 2, 3] as Step[]).map((s, i) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 14,
                      background: step > s ? '#10B981' : step === s ? 'linear-gradient(135deg, var(--accent-color), #7C3AED)' : 'var(--bg-secondary)',
                      color: step >= s ? '#fff' : 'var(--text-muted)',
                      border: step < s ? '2px solid var(--card-border)' : 'none',
                      boxShadow: step === s ? '0 4px 14px rgba(82,27,137,0.35)' : 'none',
                      transition: 'all 0.25s',
                    }}>
                      {step > s ? <i className="fa-solid fa-check" style={{ fontSize: 12 }}></i> : s}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: step === s ? 700 : 400, color: step === s ? 'var(--accent-color)' : 'var(--text-muted)', letterSpacing: 0.2 }}>
                      {s === 1 ? 'Website' : s === 2 ? 'Competitors' : 'Keywords'}
                    </span>
                  </div>
                  {i < 2 && (
                    <div style={{ width: 60, height: 2, margin: '0 6px', marginBottom: 18, borderRadius: 2, background: step > s ? 'linear-gradient(90deg,#10B981,#059669)' : 'var(--card-border)', transition: 'all 0.3s' }} />
                  )}
                </div>
              ))}
            </div>

            {error && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', padding: '10px 14px', borderRadius: 8, marginBottom: 20, fontSize: 14 }}>
                <i className="fa-solid fa-circle-exclamation" style={{ marginRight: 8 }}></i>{error}
              </div>
            )}

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <div style={wizardCardStyle}>
                <div style={wizardCardAccent} />
                <h2 style={stepHeadingStyle}>
                  <span style={stepIconStyle}><i className="fa-solid fa-globe"></i></span>
                  Website Setup
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Enter the website you want to track keyword rankings for.</p>

                <label style={labelStyle}>Website URL</label>
                <div style={{ position: 'relative', marginBottom: 20 }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 14 }}>https://</span>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={e => setWebsiteUrl(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleStep1Continue()}
                    placeholder="yourwebsite.com"
                    style={{ ...inputStyle, paddingLeft: 70 }}
                  />
                </div>

                <label style={labelStyle}>Search Device</label>
                <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                  {(['desktop', 'mobile'] as const).map(b => (
                    <button key={b} onClick={() => setBrowser(b)} style={{
                      ...toggleBtnStyle,
                      background: browser === b ? 'var(--accent-color)' : 'var(--bg-secondary)',
                      color: browser === b ? '#fff' : 'var(--text-muted)',
                      border: `1px solid ${browser === b ? 'var(--accent-color)' : 'var(--card-border)'}`,
                    }}>
                      <i className={`fa-solid fa-${b === 'desktop' ? 'desktop' : 'mobile-screen-button'}`} style={{ marginRight: 6 }}></i>
                      {b.charAt(0).toUpperCase() + b.slice(1)}
                    </button>
                  ))}
                </div>

                <label style={labelStyle}>Target Country</label>
                <select value={country} onChange={e => setCountry(e.target.value)} style={{ ...inputStyle, marginBottom: 28 }}>
                  {COUNTRIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>

                <button onClick={handleStep1Continue} disabled={wizardLoading} style={primaryBtnStyle}>
                  {wizardLoading ? <><span style={spinnerStyle}></span> Setting up...</> : <>Continue <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }}></i></>}
                </button>
              </div>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <div style={wizardCardStyle}>
                <div style={wizardCardAccent} />
                <h2 style={stepHeadingStyle}>
                  <span style={stepIconStyle}><i className="fa-solid fa-users"></i></span>
                  Competitors
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>
                  Select competitors to benchmark against. We found these based on your domain.
                </p>

                {loadingCompetitors ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
                    <span style={{ ...spinnerStyle, marginRight: 8 }}></span>Finding competitors...
                  </div>
                ) : (
                  <>
                    {suggestedCompetitors.length === 0 && (
                      <div style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 16, padding: '12px 14px', background: 'var(--bg-secondary)', borderRadius: 8 }}>
                        No competitors auto-detected. Add them manually below.
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                      {suggestedCompetitors.map(domain => (
                        <label key={domain} style={{
                          display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
                          background: selectedCompetitors.has(domain) ? 'rgba(82,27,137,0.06)' : 'var(--bg-secondary)',
                          border: `1.5px solid ${selectedCompetitors.has(domain) ? 'var(--accent-color)' : 'var(--card-border)'}`,
                          borderRadius: 10, cursor: 'pointer', transition: 'all 0.15s',
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedCompetitors.has(domain)}
                            onChange={() => toggleCompetitor(domain)}
                            style={{ accentColor: 'var(--accent-color)', width: 16, height: 16, flexShrink: 0 }}
                          />
                          {/* Google favicon */}
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=20`}
                            alt=""
                            width={18} height={18}
                            style={{ borderRadius: 4, flexShrink: 0 }}
                            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-color)', flex: 1 }}>{domain}</span>
                          {selectedCompetitors.has(domain) && <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-color)', fontSize: 15 }}></i>}
                        </label>
                      ))}
                    </div>

                    {showManualComp ? (
                      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                        <input
                          type="text"
                          value={manualCompUrl}
                          onChange={e => setManualCompUrl(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && addManualCompetitor()}
                          placeholder="competitor.com"
                          style={{ ...inputStyle, flex: 1, marginBottom: 0 }}
                        />
                        <button onClick={addManualCompetitor} style={{ ...primaryBtnStyle, padding: '10px 18px' }}>Add</button>
                        <button onClick={() => setShowManualComp(false)} style={{ ...ghostBtnStyle, padding: '10px 14px' }}>✕</button>
                      </div>
                    ) : (
                      <button onClick={() => setShowManualComp(true)} style={{ ...ghostBtnStyle, marginBottom: 12, width: '100%' }}>
                        <i className="fa-solid fa-plus" style={{ marginRight: 6 }}></i>Add Manually
                      </button>
                    )}
                  </>
                )}

                <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                  <button onClick={() => setStep(1)} style={{ ...ghostBtnStyle, flex: 1 }}>← Back</button>
                  <button onClick={handleStep2Continue} disabled={wizardLoading} style={{ ...primaryBtnStyle, flex: 2 }}>
                    {wizardLoading ? <><span style={spinnerStyle}></span> Saving...</> : <>Continue <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }}></i></>}
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3 ── */}
            {step === 3 && (
              <div style={wizardCardStyle}>
                <div style={wizardCardAccent} />
                <h2 style={stepHeadingStyle}>
                  <span style={stepIconStyle}><i className="fa-solid fa-key"></i></span>
                  Keywords
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20 }}>
                  Type one keyword per line, or import from a CSV file.
                </p>

                <div style={{ position: 'relative', marginBottom: 8 }}>
                  <textarea
                    value={keywordsText}
                    onChange={e => setKeywordsText(e.target.value)}
                    placeholder="seo agency&#10;digital marketing services&#10;rank tracker tool"
                    rows={8}
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--default-font)', lineHeight: 1.7 }}
                  />
                  {keywordsText.trim() && (
                    <span style={{
                      position: 'absolute', bottom: 10, right: 12,
                      background: 'var(--accent-color)', color: '#fff',
                      fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 12,
                    }}>
                      {keywordsText.split('\n').filter(k => k.trim()).length} keywords
                    </span>
                  )}
                </div>

                {/* CSV import */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <label style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '8px 14px', borderRadius: 8, cursor: 'pointer',
                    background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
                    color: 'var(--text-muted)', fontSize: 13, fontWeight: 500,
                  }}>
                    <i className="fa-solid fa-file-csv"></i>
                    Import CSV
                    <input type="file" accept=".csv,.txt" onChange={handleCsvImport} style={{ display: 'none' }} />
                  </label>
                  <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>One keyword per row. First row as header is auto-skipped.</span>
                </div>

                {/* Brand exclusion */}
                <div style={{ padding: '14px', background: 'var(--bg-secondary)', borderRadius: 10, marginBottom: 24, border: '1px solid var(--card-border)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={excludeBrand}
                      onChange={e => setExcludeBrand(e.target.checked)}
                      style={{ accentColor: 'var(--accent-color)', width: 16, height: 16 }}
                    />
                    <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-color)' }}>Exclude brand keywords</span>
                  </label>
                  {excludeBrand && (
                    <input
                      type="text"
                      value={brandName}
                      onChange={e => setBrandName(e.target.value)}
                      placeholder="e.g. Rank Spiders"
                      style={{ ...inputStyle, marginTop: 10, marginBottom: 0 }}
                    />
                  )}
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => setStep(2)} style={{ ...ghostBtnStyle, flex: 1 }}>← Back</button>
                  <button onClick={handleLaunchTracking} disabled={wizardLoading} style={{ ...primaryBtnStyle, flex: 2 }}>
                    {wizardLoading
                      ? <><span style={spinnerStyle}></span> Saving keywords...</>
                      : <><i className="fa-solid fa-rocket" style={{ marginRight: 6 }}></i>Launch Tracking</>}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TRACKING ────────────────────────────────────────────────────────── */}
        {mode === 'tracking' && (
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {/* Progress hero */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(82,27,137,0.07) 0%, rgba(124,58,237,0.04) 100%)',
              border: '1px solid rgba(82,27,137,0.15)', borderRadius: 16,
              padding: '20px 24px', marginBottom: 24,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ ...spinnerStyle, border: '2.5px solid var(--accent-color)', borderTopColor: 'transparent', width: 18, height: 18 }}></span>
                  <span style={{ fontWeight: 700, color: 'var(--text-color)', fontSize: 16, fontFamily: 'var(--heading-font)' }}>
                    Checking Google rankings...
                  </span>
                </div>
                <span style={{ color: 'var(--accent-color)', fontSize: 14, fontWeight: 700 }}>
                  {checked} / {total}
                </span>
              </div>
              <div style={{ height: 8, background: 'rgba(82,27,137,0.12)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--accent-color), #7C3AED)',
                  width: total > 0 ? `${(checked / total) * 100}%` : '2%',
                  transition: 'width 0.4s ease', borderRadius: 4,
                  boxShadow: '0 0 10px rgba(82,27,137,0.4)',
                }} />
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-muted)' }}>
                Querying Serper.dev for live Google positions — results appear as each keyword is checked
              </div>
            </div>

            {/* Live keyword table */}
            <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--card-border)', background: 'var(--bg-secondary)' }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-color)' }}>
                  <i className="fa-solid fa-list-check" style={{ marginRight: 8, color: 'var(--accent-color)' }}></i>
                  Live Results — {projectUrl}
                </span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--card-border)' }}>
                      <th style={thStyle}>#</th>
                      <th style={thStyle}>Keyword</th>
                      <th style={{ ...thStyle, textAlign: 'center' }}>Position</th>
                      <th style={thStyle}>Ranking URL</th>
                      <th style={thStyle}>SERP Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywords.map((kw, i) => (
                      <tr key={kw.id} style={{ borderBottom: '1px solid var(--card-border)', animation: 'fadeIn 0.3s ease' }}>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', width: 48 }}>{i + 1}</td>
                        <td style={{ ...tdStyle, fontWeight: 600 }}>{kw.keyword}</td>
                        <td style={{ ...tdStyle, textAlign: 'center' }}>
                          <PositionBadge position={kw.position} organicCount={kw.organic_count} errorMsg={kw.errorMsg} />
                        </td>
                        <td style={tdStyle}>
                          {kw.ranked_url
                            ? <a href={kw.ranked_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontSize: 12, textDecoration: 'none', maxWidth: 220, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {kw.ranked_url.replace(/^https?:\/\/(www\.)?/, '')}
                              </a>
                            : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>—</span>}
                        </td>
                        <td style={tdStyle}>
                          {kw.serp_features.length > 0
                            ? <span style={{ fontSize: 11, color: '#2563EB', background: '#EFF6FF', padding: '2px 7px', borderRadius: 10, border: '1px solid #BFDBFE' }}>{kw.serp_features[0]}</span>
                            : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>—</span>}
                        </td>
                      </tr>
                    ))}
                    {/* Pending rows */}
                    {Array.from({ length: Math.max(0, total - keywords.length) }).map((_, i) => (
                      <tr key={`pending-${i}`} style={{ borderBottom: '1px solid var(--card-border)', opacity: 0.4 }}>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{keywords.length + i + 1}</td>
                        <td style={tdStyle}><div style={{ height: 14, width: 140, background: 'var(--card-border)', borderRadius: 4 }} /></td>
                        <td style={{ ...tdStyle, textAlign: 'center' }}>
                          <div style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid var(--accent-color)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                        </td>
                        <td style={tdStyle}><div style={{ height: 14, width: 200, background: 'var(--card-border)', borderRadius: 4 }} /></td>
                        <td style={tdStyle}></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── DASHBOARD ───────────────────────────────────────────────────────── */}
        {mode === 'dashboard' && (
          <div style={{ maxWidth: 960, margin: '0 auto' }}>

            {/* Top action bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 12, marginBottom: 28,
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 14, padding: '14px 20px', boxShadow: 'var(--shadow-sm)',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                  <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--text-color)', fontFamily: 'var(--heading-font)' }}>
                    Rankings — <span style={{ color: 'var(--accent-color)' }}>{projectUrl}</span>
                  </span>
                </div>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', paddingLeft: 16 }}>
                  <i className="fa-solid fa-earth-americas" style={{ marginRight: 4 }}></i>
                  {COUNTRIES.find(c => c.value === country)?.label}
                  <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>
                  <i className={`fa-solid fa-${browser === 'desktop' ? 'desktop' : 'mobile-screen-button'}`} style={{ marginRight: 4 }}></i>
                  {browser.charAt(0).toUpperCase() + browser.slice(1)}
                  <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>
                  <i className="fa-solid fa-calendar-day" style={{ marginRight: 4 }}></i>
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button onClick={handleTrackAgain} style={ghostBtnStyle}>
                  <i className="fa-solid fa-rotate" style={{ marginRight: 6 }}></i>Track Again
                </button>
                <a
                  href={`${API}/api/tools/rank/projects/${projectId}/export`}
                  download
                  style={{ ...ghostBtnStyle, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                >
                  <i className="fa-solid fa-file-csv" style={{ marginRight: 6 }}></i>Export CSV
                </a>
                <button onClick={handleNewProject} style={primaryBtnStyle}>
                  <i className="fa-solid fa-plus" style={{ marginRight: 6 }}></i>New Project
                </button>
              </div>
            </div>

            {/* API error banner */}
            {keywords.some(k => k.errorMsg) && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', padding: '12px 16px', borderRadius: 10, marginBottom: 20, fontSize: 14 }}>
                <strong><i className="fa-solid fa-triangle-exclamation" style={{ marginRight: 6 }}></i>API errors detected</strong>
                {' — '}{keywords.filter(k => k.errorMsg).length} keyword(s) failed.
                {' '}<strong>{keywords.find(k => k.errorMsg)?.errorMsg}</strong>
                <br />
                <span style={{ fontSize: 12, opacity: 0.85 }}>
                  Debug at <a href={`${API}/api/tools/rank/debug?keyword=seo+tools&url=ahrefs.com`} target="_blank" rel="noopener noreferrer" style={{ color: '#DC2626' }}>/api/tools/rank/debug</a>
                  {' '}· Verify your SERPER_API_KEY in <code>backend/.env</code>
                </span>
              </div>
            )}

            {/* All not-ranked hint */}
            {keywords.length > 0 && keywords.every(k => k.position === null && !k.errorMsg) && (
              <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', color: '#92400E', padding: '12px 16px', borderRadius: 10, marginBottom: 20, fontSize: 14 }}>
                <i className="fa-solid fa-lightbulb" style={{ marginRight: 6 }}></i>
                <strong>0 rankings found.</strong> This is normal if your site isn't indexed yet, or if these keywords are very competitive.
                {' '}To verify the tracker works, try: <strong>ahrefs.com</strong> with keyword <strong>seo tools</strong> — it should rank #1.
                {' '}Use the{' '}
                <a href={`${API}/api/tools/rank/debug?keyword=seo+tools&url=ahrefs.com`} target="_blank" rel="noopener noreferrer" style={{ color: '#92400E', fontWeight: 600 }}>
                  debug endpoint
                </a>{' '}to inspect raw Serper results.
              </div>
            )}

            {/* Summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))', gap: 14, marginBottom: 28 }}>
              {[
                { label: 'Avg Position', value: avgPos ?? '—', icon: 'fa-chart-line', color: '#521B89', grad: 'linear-gradient(135deg,#521B89,#7C3AED)' },
                { label: 'Top 3', value: top3, icon: 'fa-trophy', color: '#059669', grad: 'linear-gradient(135deg,#059669,#10B981)' },
                { label: 'Top 10', value: top10, icon: 'fa-medal', color: '#2563EB', grad: 'linear-gradient(135deg,#1D4ED8,#3B82F6)' },
                { label: 'Top 30', value: top30, icon: 'fa-star', color: '#D97706', grad: 'linear-gradient(135deg,#B45309,#F59E0B)' },
                { label: 'Not Ranked', value: notRanked, icon: 'fa-circle-xmark', color: '#9CA3AF', grad: 'linear-gradient(135deg,#6B7280,#9CA3AF)' },
                { label: 'Total Keywords', value: keywords.length, icon: 'fa-key', color: '#EC4899', grad: 'linear-gradient(135deg,#BE185D,#EC4899)' },
              ].map(card => (
                <div key={card.label} style={{ ...cardStyle, padding: '0', textAlign: 'center', overflow: 'hidden' }}>
                  <div style={{ height: 4, background: card.grad }} />
                  <div style={{ padding: '16px 12px' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: card.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                      <i className={`fa-solid ${card.icon}`} style={{ color: card.color, fontSize: 16 }}></i>
                    </div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-color)', fontFamily: 'var(--heading-font)', lineHeight: 1.1 }}>{card.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 5, fontWeight: 500 }}>{card.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Position history chart */}
            {chartData.length > 1 ? (
              <div style={{ ...cardStyle, marginBottom: 24 }}>
                <h3 style={sectionHeadingStyle}><i className="fa-solid fa-chart-area" style={{ marginRight: 8, color: 'var(--accent-color)' }}></i>Position History</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>Average position over time. Lower = better.</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData} margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
                    <YAxis reversed domain={[1, 100]} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
                    <Tooltip
                      contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 8, fontSize: 13 }}
                      formatter={(v) => [`#${v}`, 'Avg Position']}
                    />
                    <Line type="monotone" dataKey="avg_position" stroke="var(--accent-color)" strokeWidth={2.5} dot={{ r: 4, fill: 'var(--accent-color)' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div style={{ ...cardStyle, marginBottom: 24, textAlign: 'center', padding: '1.5rem' }}>
                <i className="fa-solid fa-chart-area" style={{ fontSize: 28, color: 'var(--card-border)', marginBottom: 8, display: 'block' }}></i>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>Track again tomorrow to see position trends over time.</p>
              </div>
            )}

            {/* Position filter bar */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
              {([
                ['all', 'All', keywords.length],
                ['top3', 'Top 3', top3],
                ['top10', 'Top 10', top10],
                ['top30', 'Top 30', top30],
                ['top100', 'Top 100', keywords.filter(k => k.position !== null).length],
                ['unranked', 'Not Ranked', notRanked],
              ] as const).map(([key, label, count]) => (
                <button key={key} onClick={() => setPosFilter(key)} style={{
                  padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                  background: posFilter === key ? 'var(--accent-color)' : 'var(--bg-secondary)',
                  color: posFilter === key ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.15s',
                }}>
                  {label} <span style={{ opacity: 0.75, fontWeight: 400 }}>({count})</span>
                </button>
              ))}
            </div>

            {/* Keywords table */}
            <div style={{ ...cardStyle, padding: 0, overflow: 'hidden', marginBottom: 24 }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--card-border)' }}>
                      <th style={thStyle}>#</th>
                      <th style={{ ...thStyle, cursor: 'pointer', userSelect: 'none' }} onClick={() => handleSort('keyword')}>
                        Keyword {sortKey === 'keyword' ? (sortAsc ? '↑' : '↓') : ''}
                      </th>
                      <th style={{ ...thStyle, cursor: 'pointer', userSelect: 'none', textAlign: 'center' }} onClick={() => handleSort('position')}>
                        Position {sortKey === 'position' ? (sortAsc ? '↑' : '↓') : ''}
                      </th>
                      <th style={thStyle}>Ranking URL</th>
                      <th style={thStyle}>SERP Features</th>
                      <th style={thStyle}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredKeywords.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: 14 }}>
                          No keywords match the current filter.
                        </td>
                      </tr>
                    )}
                    {filteredKeywords.map((kw, i) => (
                      <tr key={kw.id} style={{ borderBottom: '1px solid var(--card-border)', transition: 'background 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
                        onMouseLeave={e => (e.currentTarget.style.background = '')}>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', width: 48 }}>{i + 1}</td>
                        <td style={{ ...tdStyle, fontWeight: 600 }}>{kw.keyword}</td>
                        <td style={{ ...tdStyle, textAlign: 'center' }}><PositionBadge position={kw.position} /></td>
                        <td style={tdStyle}>
                          {kw.ranked_url
                            ? <a href={kw.ranked_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontSize: 12, textDecoration: 'none', maxWidth: 260, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {kw.ranked_url.replace(/^https?:\/\/(www\.)?/, '')}
                              </a>
                            : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>—</span>}
                        </td>
                        <td style={tdStyle}>
                          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {kw.serp_features.length > 0
                              ? kw.serp_features.map(f => (
                                  <span key={f} style={{ fontSize: 11, color: '#2563EB', background: '#EFF6FF', padding: '2px 7px', borderRadius: 10, border: '1px solid #BFDBFE', whiteSpace: 'nowrap' }}>{f}</span>
                                ))
                              : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>—</span>}
                          </div>
                        </td>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 12, whiteSpace: 'nowrap' }}>{kw.check_date || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competitors */}
            {competitors.length > 0 && (
              <div style={{ ...cardStyle, marginBottom: 24 }}>
                <h3 style={sectionHeadingStyle}>
                  <i className="fa-solid fa-users" style={{ marginRight: 8, color: 'var(--accent-color)' }}></i>
                  Tracked Competitors
                </h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
                  {competitors.map(domain => (
                    <a key={domain} href={`https://${domain}`} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '8px 14px', borderRadius: 10, background: 'var(--bg-secondary)',
                      border: '1px solid var(--card-border)', color: 'var(--text-color)',
                      fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'all 0.15s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-color)'; e.currentTarget.style.background = 'rgba(82,27,137,0.05)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.background = 'var(--bg-secondary)'; }}>
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=20`}
                        alt="" width={16} height={16}
                        style={{ borderRadius: 3 }}
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      {domain}
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: 'var(--text-muted)', fontSize: 10 }}></i>
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}

// ── Shared style objects ──────────────────────────────────────────────────────

const cardStyle: React.CSSProperties = {
  background: 'var(--card-bg)',
  border: '1px solid var(--card-border)',
  borderRadius: 14,
  padding: '28px 28px',
  boxShadow: 'var(--shadow-sm)',
};

const wizardCardStyle: React.CSSProperties = {
  background: 'var(--card-bg)',
  border: '1px solid var(--card-border)',
  borderRadius: 16,
  padding: '32px 32px 28px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  position: 'relative',
  overflow: 'hidden',
};

const wizardCardAccent: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0,
  height: 4,
  background: 'linear-gradient(90deg, var(--accent-color), #7C3AED, var(--accent-secondary-color))',
};

const stepIconStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32, height: 32,
  borderRadius: 8,
  background: 'rgba(82,27,137,0.1)',
  color: 'var(--accent-color)',
  marginRight: 10,
  fontSize: 14,
};

const stepHeadingStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 800,
  fontFamily: 'var(--heading-font)',
  color: 'var(--text-color)',
  marginBottom: 8,
  marginTop: 0,
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--text-color)',
  marginTop: 0,
  marginBottom: 4,
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--text-color)',
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: 10,
  border: '1px solid var(--card-border)',
  background: 'var(--bg-secondary)',
  color: 'var(--text-color)',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'var(--default-font)',
  marginBottom: 4,
};

const primaryBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '11px 22px',
  borderRadius: 10,
  background: 'var(--accent-color)',
  color: '#fff',
  fontWeight: 700,
  fontSize: 14,
  border: 'none',
  cursor: 'pointer',
  gap: 6,
};

const ghostBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 18px',
  borderRadius: 10,
  background: 'transparent',
  color: 'var(--text-muted)',
  fontWeight: 600,
  fontSize: 14,
  border: '1px solid var(--card-border)',
  cursor: 'pointer',
  gap: 4,
};

const toggleBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '9px 20px',
  borderRadius: 10,
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
  transition: 'all 0.15s',
};

const thStyle: React.CSSProperties = {
  padding: '11px 14px',
  textAlign: 'left',
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--text-muted)',
  letterSpacing: 0.4,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
};

const tdStyle: React.CSSProperties = {
  padding: '12px 14px',
  fontSize: 14,
  color: 'var(--text-color)',
  verticalAlign: 'middle',
};

const spinnerStyle: React.CSSProperties = {
  display: 'inline-block',
  width: 14,
  height: 14,
  border: '2px solid #fff',
  borderTopColor: 'transparent',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
  verticalAlign: 'middle',
};

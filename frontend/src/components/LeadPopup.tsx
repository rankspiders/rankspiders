'use client';

import { useState, useEffect } from 'react';

const I  = '#8832d8';
const IL = '#6D64F5';
const G5 = '#6B7280';
const G9 = '#111827';
const GR = '#10B981';

const inp: React.CSSProperties = {
  padding: '12px 16px',
  border: '1.5px solid #E5E7EB',
  borderRadius: 8,
  fontSize: '0.92rem',
  fontFamily: 'var(--default-font)',
  color: G9,
  outline: 'none',
  background: '#fff',
  width: '100%',
  boxSizing: 'border-box',
};

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 6000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
  }

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    const [fname = '', ...rest] = form.name.trim().split(' ');
    const lname = rest.join(' ');

    const body = new FormData();
    body.append('fname', fname);
    body.append('lname', lname);
    body.append('email', form.email);
    body.append('phone', form.phone);
    body.append('service', form.service || 'General Inquiry');
    body.append('message', `Lead from popup — Service: ${form.service || 'Not specified'}`);
    body.append('source', 'popup');

    try {
      const res = await fetch('http://localhost:8000/api/submit', {
        method: 'POST',
        body,
      });
      if (res.ok) {
        setStatus('done');
        setTimeout(dismiss, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 9998, backdropFilter: 'blur(4px)' }}
      />

      {/* Card */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 9999, width: '92%', maxWidth: 460,
        background: '#fff', borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 28px 80px rgba(0,0,0,0.35)',
        animation: 'rsPopIn 0.38s cubic-bezier(0.175,0.885,0.32,1.275) both',
      }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e1254 0%, #8832d8 100%)', padding: '26px 28px 22px', position: 'relative' }}>
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              position: 'absolute', top: 14, right: 14,
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', fontSize: '1.1rem', lineHeight: 1,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          >
            ×
          </button>

          {/* Pulse dot + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: GR, display: 'inline-block', animation: 'rsPulse 1.5s infinite' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Free Consultation</span>
          </div>

          <h3 style={{ color: '#fff', fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: '1.3rem', margin: '0 0 8px' }}>
            Let&apos;s Grow Your Business Online
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.85rem', margin: 0, lineHeight: 1.55 }}>
            Get a free strategy call with our experts — no obligations, no spam.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px 28px' }}>
          {status === 'done' ? (
            <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: GR, fontSize: '2rem' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--heading-font)', color: G9, marginBottom: 8, fontWeight: 800 }}>We&apos;ll be in touch soon!</h4>
              <p style={{ color: G5, fontSize: '0.88rem', margin: 0 }}>Our team will call you within 2 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input
                type="text" value={form.name} onChange={set('name')}
                placeholder="Your Full Name *" required style={inp}
              />
              <input
                type="email" value={form.email} onChange={set('email')}
                placeholder="Email Address *" required style={inp}
              />
              <input
                type="tel" value={form.phone} onChange={set('phone')}
                placeholder="Phone / WhatsApp Number *" required style={inp}
              />
              <select value={form.service} onChange={set('service')} style={inp}>
                <option value="">What do you need help with?</option>
                <option>SEO &amp; Search Rankings</option>
                <option>Website Development</option>
                <option>Social Media Marketing</option>
                <option>Google / Meta Ads</option>
                <option>Content Marketing</option>
                <option>Full Digital Marketing Package</option>
              </select>

              {status === 'error' && (
                <p style={{ color: '#EF4444', fontSize: '0.82rem', margin: 0 }}>
                  <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: 6 }} />
                  Something went wrong. Call us at +91 99883 57092.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  padding: '14px', marginTop: 2,
                  background: `linear-gradient(135deg, ${I}, ${IL})`,
                  color: '#fff', border: 'none', borderRadius: 10,
                  fontSize: '0.95rem', fontWeight: 800, cursor: status === 'submitting' ? 'wait' : 'pointer',
                  fontFamily: 'var(--default-font)',
                  boxShadow: '0 4px 20px rgba(136,50,216,0.3)',
                }}
              >
                {status === 'submitting'
                  ? <><i className="fa-solid fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Sending…</>
                  : <>Get My Free Consultation <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} /></>
                }
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.74rem', color: G5, margin: 0 }}>
                <i className="fa-solid fa-lock" style={{ marginRight: 4 }} />
                100% private. No spam. We&apos;ll call you once.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes rsPopIn {
          from { opacity: 0; transform: translate(-50%, -46%) scale(0.9); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes rsPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.35); }
        }
      `}</style>
    </>
  );
}

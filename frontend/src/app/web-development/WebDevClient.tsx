'use client';

import { useState } from 'react';
import Image from 'next/image';

// ── Brand tokens ─────────────────────────────────────────────────────────────
const I   = '#8832d8';
const ID  = '#3730A3';
const IL  = '#6D64F5';
const IP  = '#EEF2FF';
const CY  = '#06B6D4';
const GR  = '#10B981';
const GO  = '#F59E0B';
const G1  = '#F9FAFB';
const G2  = '#E5E7EB';
const G5  = '#6B7280';
const G7  = '#374151';
const G9  = '#111827';

const BOOK_MEETING = 'https://koalendar.com/e/meet-with-rank-spiders';

// ── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: 'fa-solid fa-globe',         title: 'Business & Corporate Websites', desc: 'Clean, professional websites that build trust and generate leads — fully responsive, lightning-fast, and SEO-optimised from day one.',      tag: 'WordPress / Custom' },
  { icon: 'fa-brands fa-wordpress',    title: 'WooCommerce Stores',            desc: 'Full-featured e-commerce stores built on WooCommerce — scalable product catalogs, secure checkout, and payment gateway integration.',        tag: 'WooCommerce' },
  { icon: 'fa-brands fa-shopify',      title: 'Shopify Stores',                desc: 'Lightning-fast Shopify stores built to sell. Custom themes, app integrations, and conversion-optimised product pages for maximum revenue.',   tag: 'Shopify' },
  { icon: 'fa-solid fa-bolt',          title: 'AI-Powered Websites',           desc: 'We build AI-enhanced websites that are blazing fast, smart, and give your business an unfair competitive advantage over slower competitors.', tag: 'AI / Next-Gen' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Landing Pages',                 desc: 'High-converting landing pages for Google Ads, Meta Ads, or organic traffic — designed to turn clicks into calls, quotes, and bookings.',    tag: 'Conversion-Focused' },
  { icon: 'fa-solid fa-rotate',        title: 'Redesign & Migration',          desc: 'Old, slow, or outdated site? We migrate, redesign, and future-proof your digital presence without losing your hard-earned SEO rankings.',    tag: 'Redesign / Migration' },
];

const PORTFOLIO = [
  { url: 'https://www.rankspiders.com/',         title: 'Rank Spiders – SEO & Marketing',   desc: 'Full-stack agency site built with Next.js — ultra-fast, SEO-first, global audience' },
  { url: 'https://navkirannursingclasses.com/',  title: 'Navkiran Nursing Classes',          desc: 'Education institute website with lead generation forms and course listings' },
  { url: 'https://constanceandbelle.com.au/',    title: 'Constance & Belle – Australia',     desc: 'Premium e-commerce fashion brand — conversion-optimised Shopify store', image: '/images/portfolio/constance-belle.jpg' },
  { url: 'https://evolvedhair.com.au/',          title: 'Evolved Hair – Australia',          desc: 'Hair restoration clinic with booking system and SEO integration' },
  { url: 'https://oshospace.com/',               title: 'Osho Space',                        desc: 'Wellness & lifestyle brand — immersive website with strong visual identity' },
];

const PROCESS = [
  { num: '01', icon: 'fa-solid fa-phone',         title: 'Free Discovery Call',  desc: "We understand your business, goals, and competitors. You get a clear picture of what your site needs and what it'll cost — before committing anything." },
  { num: '02', icon: 'fa-solid fa-pen-ruler',     title: 'Design & Approval',    desc: 'Our designers create a custom mockup tailored to your brand. You review, tweak, and approve before a single line of code is written.' },
  { num: '03', icon: 'fa-solid fa-code',          title: 'Build & Optimise',     desc: 'We develop your site with speed, security, and SEO built in from day one — not bolted on as an afterthought.' },
  { num: '04', icon: 'fa-solid fa-rocket',        title: 'Launch & Support',     desc: 'We go live, submit to Google, and stay on hand for post-launch support. Your site grows with you — not against you.' },
];

const WHY = [
  { icon: 'fa-solid fa-location-dot',    title: 'Local Experts, Global Standards', desc: "We're based in Mohali, Sector 74 — just around the corner. Local availability with international-quality execution." },
  { icon: 'fa-solid fa-magnifying-glass',title: 'SEO-First Development',           desc: 'Every website we build is optimised for Google from the ground up — site speed, structured data, on-page SEO, all included by default.' },
  { icon: 'fa-solid fa-hand-holding-dollar', title: 'No Hidden Charges',          desc: "Fixed-price projects with transparent scope. What we quote is what you pay — no surprise bills, no scope creep without your approval." },
  { icon: 'fa-solid fa-gauge-high',      title: 'Fast Delivery',                  desc: "Most business websites are delivered in 2–3 weeks. We don't keep you waiting while your competitors get ahead." },
  { icon: 'fa-solid fa-headset',         title: 'Ongoing Support',                desc: "We don't disappear after launch. Monthly maintenance, updates, and emergency support so your site always runs smoothly." },
  { icon: 'fa-solid fa-chart-line',      title: 'Results You Can Measure',        desc: 'Analytics setup, conversion tracking, and monthly reports. You always know how your site is performing and what to improve.' },
];

const TESTIMONIALS = [
  { initials: 'PA', name: 'Pardeep A.',  role: 'Managing Director, Chandigarh', text: '"Rank Spiders built our website from scratch and it\'s absolutely stunning. Within 3 months of launch we were ranking on page one for our key services. Leads have tripled."' },
  { initials: 'CM', name: 'Chandan M.', role: 'Business Founder, Mohali',       text: '"We had an outdated site that was embarrassing to share. Rank Spiders redesigned it completely and it now drives over 60% of our new business organically."' },
  { initials: 'NK', name: 'N. Kumar',   role: 'Director, Education Institute',  text: '"Best web development agency in Chandigarh Tricity — no question. Delivered on time, on budget, and the quality is outstanding. Our admissions are up 200%."' },
  { initials: 'SB', name: 'Sarah B.',   role: 'E-commerce Founder, Australia',  text: '"We\'re based in Australia and needed a team we could trust remotely. Rank Spiders delivered a world-class Shopify store — communication and results exceeded expectations."' },
  { initials: 'RK', name: 'Rajesh K.', role: 'Retail Business Owner, Panchkula', text: '"From a basic inquiry to a fully live WooCommerce store in under 3 weeks. The team was incredibly professional and responsive. Highly recommended."' },
  { initials: 'AS', name: 'Amrit S.',  role: 'Marketing Manager, Mohali',       text: '"They don\'t just build websites — they build business tools. Our site loads in under 2 seconds and our Google Ads cost dropped because our Quality Score improved."' },
];

const TECH = ['WordPress', 'WooCommerce', 'Shopify', 'React / Next.js', 'HTML5 / CSS3', 'PHP / Laravel', 'Node.js', 'AI Integrations', 'Payment Gateways', 'Google Analytics', 'SEO Tools'];

// ── Style helpers ─────────────────────────────────────────────────────────────
const btn = (bg: string, color: string, border?: string): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', gap: 8,
  padding: '14px 30px', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem',
  fontFamily: 'var(--default-font)', cursor: 'pointer', textDecoration: 'none',
  border: border ?? 'none', background: bg, color, transition: 'transform 0.2s, box-shadow 0.2s',
});

// ── Component ─────────────────────────────────────────────────────────────────
export default function WebDevClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', business: '', websiteType: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    const [fname = '', ...rest] = form.name.trim().split(' ');
    const lname = rest.join(' ');
    const msgBody = [
      form.business && `Business: ${form.business}`,
      form.websiteType && `Website Type: ${form.websiteType}`,
      form.budget && `Budget: ${form.budget}`,
      form.message && `\n${form.message}`,
    ].filter(Boolean).join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fname, lname, email: form.email, phone: form.phone, service: form.websiteType || 'Website Development – Chandigarh', message: msgBody }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section style={{
        minHeight: '100vh',
        backgroundImage: 'url(/images/Web-LandingPage/web-landing-page.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        display: 'flex', alignItems: 'center',
        padding: '110px 6% 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle left-side fade — image is already dark so keep it light */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(4,2,18,0.72) 0%, rgba(4,2,18,0.40) 35%, rgba(4,2,18,0.08) 60%, transparent 100%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

          {/* Text block — left half only so the image's right side shows freely */}
          <div style={{ maxWidth: 560, animation: 'wdSlideUp 0.7s ease both' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', color: '#fff', padding: '8px 18px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: 28, backdropFilter: 'blur(6px)' }}>
              <span style={{ width: 8, height: 8, background: GR, borderRadius: '50%', animation: 'ldPulse 1.5s infinite' }} />
              Chandigarh&apos;s #1 Web Development Agency
            </span>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 22, fontFamily: 'var(--heading-font)' }}>
              Your Business Deserves a Website That Actually{' '}
              <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg, #C4B5FD, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Wins Clients</em>
            </h1>

            <p style={{ fontSize: 'clamp(0.96rem, 1.6vw, 1.08rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 38 }}>
              We build fast, beautiful, Google-ready websites for businesses across Chandigarh, Mohali &amp; Panchkula — from WordPress to Shopify to AI-powered platforms.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
              <a href="#contact" style={{ ...btn('#fff', I), fontWeight: 800, boxShadow: '0 4px 28px rgba(0,0,0,0.3)' }}>
                <i className="fa-solid fa-file-lines" /> Get Free Website Quote
              </a>
              <a href={BOOK_MEETING} target="_blank" rel="noopener noreferrer" style={{ ...btn('rgba(255,255,255,0.1)', '#fff', '1.5px solid rgba(255,255,255,0.35)'), backdropFilter: 'blur(8px)' }}>
                <i className="fa-solid fa-calendar-check" /> Book a Free Call
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['200+', 'Websites Built'], ['10+', 'Years Active'], ['4.9★', 'Client Rating'], ['95%', 'Retention Rate']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--heading-font)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.52)', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)', animation: 'wdScrollPulse 1.8s ease-in-out infinite' }} />
        </div>
      </section>

      <style>{`
        @keyframes ldPulse       { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
        @keyframes ldFloat       { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes wdSlideUp     { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes wdScrollPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
      `}</style>

      {/* ══════════════════ URGENCY STRIP ══════════════════ */}
      <div style={{ background: G9, color: '#fff', padding: '16px 5%', textAlign: 'center', fontSize: '0.88rem' }}>
        <i className="fa-solid fa-bolt" style={{ color: GO, marginRight: 8 }} />
        <strong style={{ color: '#C4B5FD' }}>Limited slots for this month:</strong> We take on only 4 new web projects per month to ensure quality.{' '}
        <strong style={{ color: '#C4B5FD' }}>2 slots remaining.</strong>{' '}
        <a href="#contact" style={{ color: CY, fontWeight: 700, textDecoration: 'none' }}>Book yours now <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }} /></a>
      </div>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section style={{ padding: '90px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: `linear-gradient(135deg, ${ID}, ${IL})`, borderRadius: 20, padding: '50px 40px', textAlign: 'center', color: '#fff' }}>
            <Image src="/images/logo/rankspiders.png" alt="Rank Spiders" width={180} height={60} style={{ height: 60, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 20 }} />
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
              A full-service digital agency rooted in Chandigarh — building websites and digital brands that compete on a global scale.
            </p>
            <div style={{ display: 'flex', gap: 28, marginTop: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[['200+', 'Clients Served'], ['1K+', 'Projects Done'], ['10+', 'Years Active']].map(([n, l]) => (
                <div key={l}>
                  <strong style={{ display: 'block', fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--heading-font)' }}>{n}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.62)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: I, background: IP, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>About Rank Spiders</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 900, color: G9, lineHeight: 1.2, marginBottom: 18, fontFamily: 'var(--heading-font)' }}>
              We Build Websites That <em style={{ fontStyle: 'normal', color: I }}>Rank, Convert &amp; Scale</em>
            </h2>
            <p style={{ color: G5, lineHeight: 1.75, marginBottom: 14 }}>
              Rank Spiders is a Chandigarh-based digital agency with a decade of experience helping local businesses, startups, and global brands grow through high-performance websites and data-driven digital marketing.
            </p>
            <p style={{ color: G5, lineHeight: 1.75, marginBottom: 20 }}>
              We don&apos;t just hand you a pretty site — we build a revenue machine: fast-loading, mobile-first, SEO-optimised, and designed to turn visitors into paying customers.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Certified Google & Meta Marketing Experts', '100% transparent process — no hidden charges', 'Clients across India, Australia & the US', 'Post-launch support & maintenance included', 'SEO-first approach baked into every build'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.93rem', color: G7 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: GR, fontSize: '1rem', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section style={{ padding: '90px 5%', background: G1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: I, background: IP, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>What We Build</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 900, color: G9, lineHeight: 1.2, fontFamily: 'var(--heading-font)', marginBottom: 14 }}>
              Every Type of Website — <em style={{ fontStyle: 'normal', color: I }}>Done Right</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: G5, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>From a simple business site to a full e-commerce powerhouse, we cover every platform and every need.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: 16, padding: 32, border: `1px solid ${G2}`, position: 'relative', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px rgba(79,70,229,0.12)`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}>
                <div style={{ width: 52, height: 52, background: IP, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={s.icon} style={{ color: I, fontSize: '1.3rem' }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: G9, marginBottom: 10, fontFamily: 'var(--heading-font)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.91rem', color: G5, lineHeight: 1.65 }}>{s.desc}</p>
                <span style={{ display: 'inline-block', marginTop: 14, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: I, background: IP, padding: '4px 10px', borderRadius: 999 }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ TECH STACK ══════════════════ */}
      <div style={{ padding: '48px 5%', textAlign: 'center', background: '#fff', borderTop: `1px solid ${G2}`, borderBottom: `1px solid ${G2}` }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: G5, marginBottom: 20 }}>Technologies We Work With</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {TECH.map(t => (
            <span key={t} style={{ background: G1, border: `1.5px solid ${G2}`, padding: '8px 18px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600, color: G7 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══════════════════ PORTFOLIO ══════════════════ */}
      <section id="portfolio" style={{ padding: '90px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: I, background: IP, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>Our Work</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 900, color: G9, lineHeight: 1.2, fontFamily: 'var(--heading-font)', marginBottom: 14 }}>
              Websites We&apos;ve <em style={{ fontStyle: 'normal', color: I }}>Built &amp; Launched</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: G5, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Real projects, real results. Each site is designed for performance, search visibility, and conversion.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {PORTFOLIO.map(p => (
              <div key={p.url} style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${G2}`, background: '#fff', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px rgba(79,70,229,0.14)`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}>
                <div style={{ width: '100%', height: 210, overflow: 'hidden', background: G1, position: 'relative' }}>
                  {'image' in p && p.image
                    ? <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
                    : <iframe src={p.url} title={p.title} loading="lazy" scrolling="no" style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left', border: 'none', pointerEvents: 'none' }} />
                  }
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: G9, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: G5 }}>{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: '0.86rem', fontWeight: 700, color: I, textDecoration: 'none' }}>
                    Visit Site <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem' }} />
                  </a>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ borderRadius: 16, overflow: 'hidden', background: `linear-gradient(135deg, ${ID}, ${IL})`, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320, cursor: 'pointer' }}>
              <div style={{ textAlign: 'center', color: '#fff', padding: 32 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <i className="fa-solid fa-plus" style={{ fontSize: '1.6rem' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: 10, fontFamily: 'var(--heading-font)' }}>Your Website Could Be Here</h3>
                <p style={{ fontSize: '0.88rem', opacity: 0.8, marginBottom: 20 }}>Join 200+ businesses we&apos;ve helped grow online</p>
                <span style={{ background: '#fff', color: I, padding: '10px 24px', borderRadius: 8, fontWeight: 800, fontSize: '0.88rem' }}>Start Your Project →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PROCESS ══════════════════ */}
      <section style={{ padding: '90px 5%', background: G9, color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C4B5FD', background: 'rgba(196,181,253,0.12)', border: '1px solid rgba(196,181,253,0.2)', padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>How It Works</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, fontFamily: 'var(--heading-font)', marginBottom: 14 }}>
              From First Call to Live Website <em style={{ fontStyle: 'normal', color: '#C4B5FD' }}>in Weeks</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>A clear, no-surprise process that gets your site live fast — and built to last.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 36 }}>
            {PROCESS.map((s, i) => (
              <div key={s.num}>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: 12, fontFamily: 'var(--heading-font)' }}>{s.num}</div>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(79,70,229,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <i className={s.icon} style={{ color: '#C4B5FD', fontSize: '1.2rem' }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', marginBottom: 10, fontFamily: 'var(--heading-font)' }}>
                  {i === 0
                    ? <a href={BOOK_MEETING} target="_blank" rel="noopener noreferrer" style={{ color: '#C4B5FD', textDecoration: 'none' }}>{s.title} →</a>
                    : s.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY US ══════════════════ */}
      <section style={{ padding: '90px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: I, background: IP, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>Why Rank Spiders</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 900, color: G9, lineHeight: 1.2, fontFamily: 'var(--heading-font)', marginBottom: 14 }}>
              Why Chandigarh Businesses <em style={{ fontStyle: 'normal', color: I }}>Choose Us</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: G5, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>We&apos;ve earned trust across 200+ businesses in India and abroad. Here&apos;s what sets us apart.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {WHY.map(w => (
              <div key={w.title} style={{ padding: 30, borderRadius: 14, border: `1px solid ${G2}`, background: G1 }}>
                <div style={{ width: 48, height: 48, background: IP, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={w.icon} style={{ color: I, fontSize: '1.1rem' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: G9, marginBottom: 8, fontFamily: 'var(--heading-font)' }}>{w.title}</h3>
                <p style={{ fontSize: '0.88rem', color: G5, lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section style={{ padding: '90px 5%', background: IP }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: I, background: `rgba(79,70,229,0.1)`, border: `1px solid rgba(79,70,229,0.15)`, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>Client Reviews</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 900, color: G9, lineHeight: 1.2, fontFamily: 'var(--heading-font)', marginBottom: 14 }}>
              What Our <em style={{ fontStyle: 'normal', color: I }}>Clients Say</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: G5, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Don&apos;t take our word for it — here&apos;s what real clients across India and abroad have experienced.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{ background: '#fff', borderRadius: 16, padding: 30, border: `1px solid rgba(79,70,229,0.1)`, boxShadow: '0 4px 24px rgba(79,70,229,0.06)' }}>
                <div style={{ color: GO, fontSize: '0.95rem', marginBottom: 14, letterSpacing: '2px' }}>★★★★★</div>
                <blockquote style={{ fontSize: '0.93rem', color: G7, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>{t.text}</blockquote>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${I}, ${IL})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.95rem', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: G9 }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: G5 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA STRIP ══════════════════ */}
      <section style={{ background: `linear-gradient(135deg, ${ID}, ${I})`, color: '#fff', textAlign: 'center', padding: '80px 5%' }}>
        <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 900, marginBottom: 14, fontFamily: 'var(--heading-font)' }}>Ready to Get a Website That Actually Works?</h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.6 }}>Free consultation. No obligations. Just a clear plan for how your website can start winning you more business in Chandigarh and beyond.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{ ...btn('#fff', I), fontWeight: 800, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>Get Free Quote Now</a>
          <a href={BOOK_MEETING} target="_blank" rel="noopener noreferrer" style={{ ...btn('transparent', '#fff', '2px solid rgba(255,255,255,0.5)') }}>
            <i className="fa-solid fa-calendar-check" /> Book a Discovery Call
          </a>
          <a href="tel:+919988357092" style={{ ...btn('rgba(255,255,255,0.12)', '#fff', '2px solid rgba(255,255,255,0.25)') }}>
            <i className="fa-solid fa-phone" /> Call: +91 99883 57092
          </a>
        </div>
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" style={{ padding: '90px 5%', background: G1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>

          {/* Left: info */}
          <div>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: I, background: IP, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>Contact Us</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 900, color: G9, marginBottom: 16, fontFamily: 'var(--heading-font)' }}>Let&apos;s Build Your Website</h2>
            <p style={{ color: G5, lineHeight: 1.7, marginBottom: 32 }}>Fill in the form and our team will get back to you within 2 hours on business days. Or reach us directly — we love talking to local businesses.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { icon: 'fa-solid fa-phone', label: 'Phone / WhatsApp', val: '+91 99883 57092', href: 'tel:+919988357092' },
                { icon: 'fa-solid fa-envelope', label: 'Email', val: 'info.rankspiders@gmail.com', href: 'mailto:info.rankspiders@gmail.com' },
                { icon: 'fa-solid fa-location-dot', label: 'Office Address', val: 'Office No. 22, D-152, Phase-8, Industrial Area, Sector 74, SAS Nagar, Punjab 160071' },
                { icon: 'fa-solid fa-clock', label: 'Business Hours', val: 'Monday – Saturday, 9 AM – 7 PM IST' },
                { icon: 'fa-solid fa-calendar-check', label: 'Book a Call', val: 'Schedule a free 30-min discovery call', href: BOOK_MEETING },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: IP, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={item.icon} style={{ color: I, fontSize: '1rem' }} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: G9 }}>{item.label}</strong>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ fontSize: '0.85rem', color: G5, textDecoration: 'none' }}>{item.val}</a>
                      : <span style={{ fontSize: '0.85rem', color: G5 }}>{item.val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, borderRadius: 14, overflow: 'hidden', border: `2px solid ${G2}` }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.551612311209!2d76.69078777544946!3d30.707954374602444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef33c7cf9df7%3A0x9d6b5e6e713ec28!2sD-151%2C%20Ground%20Floor%2C%20Phase%208%2C%20Industrial%20Area%2C%20Sector%2071%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                width="100%" height="220" style={{ border: 'none', display: 'block' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Rank Spiders Office"
              />
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 40, border: `1px solid ${G2}`, boxShadow: '0 8px 40px rgba(79,70,229,0.08)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: G9, marginBottom: 24, fontFamily: 'var(--heading-font)' }}>
              <i className="fa-solid fa-file-lines" style={{ color: I, marginRight: 10 }} />
              Get a Free Website Quote
            </h3>

            {status === 'done' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: GR, fontSize: '2rem' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, color: G9, marginBottom: 8 }}>Request Sent!</h4>
                <p style={{ color: G5, fontSize: '0.93rem' }}>We&apos;ll call you back within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <Field label="Your Name *"><input type="text" value={form.name} onChange={set('name')} placeholder="Gurpreet Singh" required style={inp} /></Field>
                  <Field label="Phone Number *"><input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" required style={inp} /></Field>
                </div>
                <Field label="Email Address *"><input type="email" value={form.email} onChange={set('email')} placeholder="you@yourbusiness.com" required style={inp} /></Field>
                <Field label="Business Name"><input type="text" value={form.business} onChange={set('business')} placeholder="Your Business Name" style={inp} /></Field>
                <Field label="Type of Website Needed *">
                  <select value={form.websiteType} onChange={set('websiteType')} required style={inp}>
                    <option value="">— Select website type —</option>
                    <option>Business / Corporate Website</option>
                    <option>E-commerce (WooCommerce)</option>
                    <option>E-commerce (Shopify)</option>
                    <option>Landing Page</option>
                    <option>WordPress Website</option>
                    <option>AI-Powered Website</option>
                    <option>Website Redesign</option>
                    <option>Not Sure — Need Advice</option>
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select value={form.budget} onChange={set('budget')} style={inp}>
                    <option value="">— Select budget range —</option>
                    <option>₹15,000 – ₹30,000</option>
                    <option>₹30,000 – ₹60,000</option>
                    <option>₹60,000 – ₹1,00,000</option>
                    <option>₹1,00,000+</option>
                    <option>Not Sure Yet</option>
                  </select>
                </Field>
                <Field label="Tell Us About Your Project">
                  <textarea value={form.message} onChange={set('message')} placeholder="Briefly describe your business, what you need, and any specific features you want on your website..." style={{ ...inp, minHeight: 110, resize: 'vertical' }} />
                </Field>

                {status === 'error' && (
                  <p style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: 12 }}>
                    <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: 6 }} />
                    Something went wrong. Please call us directly at +91 99883 57092.
                  </p>
                )}

                <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', padding: '16px', background: status === 'submitting' ? G5 : `linear-gradient(135deg, ${I}, ${IL})`, color: '#fff', border: 'none', borderRadius: 10, fontSize: '1rem', fontWeight: 800, cursor: status === 'submitting' ? 'wait' : 'pointer', fontFamily: 'var(--default-font)', transition: 'opacity 0.2s' }}>
                  {status === 'submitting'
                    ? <><i className="fa-solid fa-circle-notch fa-spin" style={{ marginRight: 8 }} />Sending…</>
                    : <>Send My Free Quote Request <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} /></>
                  }
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.78rem', color: G5, marginTop: 12 }}>
                  <i className="fa-solid fa-lock" style={{ marginRight: 4 }} />
                  Your information is safe. We&apos;ll respond within 2 business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151' }}>{label}</label>
      {children}
    </div>
  );
}

const inp: React.CSSProperties = {
  padding: '12px 16px', border: '1.5px solid #E5E7EB', borderRadius: 8,
  fontSize: '0.92rem', fontFamily: 'var(--default-font)', color: '#111827',
  outline: 'none', background: '#fff', width: '100%',
};

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollingTicker from '@/components/ScrollingTicker';
import MotionWrapper, { MotionStagger, MotionItem } from '@/components/MotionWrapper';

const stats = [
  { number: '10+', label: 'Years of Experience' },
  { number: '200+', label: 'Clients Served' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '1K+', label: 'Projects Completed' },
];

const auditTrustBadges = [
  { icon: 'fa-solid fa-credit-card', text: 'No credit card' },
  { icon: 'fa-solid fa-bolt',        text: 'Results in 60 sec' },
  { icon: 'fa-solid fa-lock-open',   text: '100% free' },
];

const services = [
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO Optimization',
    description: 'Rank higher, convert better. Data-driven SEO strategies that build long-term organic authority and drive qualified traffic to your business.',
    href: '/seo-agency-india',
    linkLabel: 'Explore SEO Services India',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI-Powered SEO',
    description: 'Future-proof your search presence with AI-assisted keyword intelligence, content optimization, and predictive ranking strategies.',
    href: '/ai-seo-agency',
    linkLabel: 'See AI SEO Strategy',
  },
  {
    icon: 'fa-brands fa-meta',
    title: 'Social Media Marketing',
    description: 'Build an engaged audience across every platform. From content creation to paid ads — we grow your brand where your customers spend time.',
    href: '/social-media-marketing',
    linkLabel: 'View Social Media Packages',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Web Design & Development',
    description: 'Fast, beautiful, conversion-optimized websites built on modern stacks. Designed to impress, built to rank.',
    href: '/web-design-and-development-niche-industries',
    linkLabel: 'See Web Design Services',
  },
  {
    icon: 'fa-solid fa-envelope-open-text',
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with automated, personalized email sequences that deliver real ROI.',
    href: '/email-marketing-agency',
    linkLabel: 'View Email Marketing Plans',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'PPC & Paid Ads',
    description: 'Maximize every rupee of ad spend. Google Ads, Meta Ads and LinkedIn campaigns managed for performance, not vanity metrics.',
    href: '/meta-ads-agency',
    linkLabel: 'Explore Google & Meta Ads',
  },
];

const reasons = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Certified Marketing Experts',
    description: 'Our team holds certifications in Google Ads, SEO, and social media marketing — backed by years of real-world results.',
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Data-Driven Every Step',
    description: 'Every strategy is built on analytics, A/B testing, and performance data — not guesswork. We optimize continuously.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Transparent & Accountable',
    description: 'Monthly reports, open dashboards, and direct access to your team. No smoke and mirrors — just clear results.',
  },
];

const comparisonRows = [
  {
    feature: 'Dedicated SEO Focus',
    rankspiders: { status: 'yes',   note: 'SEO-only specialists' },
    freelancer:  { status: 'maybe', note: 'Varies by individual' },
    bigAgency:   { status: 'no',    note: 'One service of many' },
  },
  {
    feature: 'Custom Strategy Per Client',
    rankspiders: { status: 'yes',   note: 'Tailored 90-day roadmap' },
    freelancer:  { status: 'maybe', note: 'Sometimes templated' },
    bigAgency:   { status: 'no',    note: 'Package-based approach' },
  },
  {
    feature: 'Transparent Monthly Reporting',
    rankspiders: { status: 'yes',   note: 'Open dashboards included' },
    freelancer:  { status: 'maybe', note: 'Inconsistent' },
    bigAgency:   { status: 'maybe', note: 'PDFs, not live data' },
  },
  {
    feature: 'AI & AEO Expertise',
    rankspiders: { status: 'yes', note: 'Built into every campaign' },
    freelancer:  { status: 'no',  note: 'Rarely up to date' },
    bigAgency:   { status: 'no',  note: 'Extra cost add-on' },
  },
  {
    feature: 'Scalable Campaigns',
    rankspiders: { status: 'yes', note: 'Grows with your business' },
    freelancer:  { status: 'no',  note: 'Capacity limits growth' },
    bigAgency:   { status: 'yes', note: 'But at premium prices' },
  },
  {
    feature: 'Fast Communication',
    rankspiders: { status: 'yes',   note: 'Direct team access, <4hr' },
    freelancer:  { status: 'maybe', note: 'Depends on workload' },
    bigAgency:   { status: 'no',    note: 'Account manager layers' },
  },
  {
    feature: 'Pricing Clarity',
    rankspiders: { status: 'yes',   note: 'Fixed retainers, no hidden fees' },
    freelancer:  { status: 'maybe', note: 'Scope-creep risk' },
    bigAgency:   { status: 'no',    note: 'Complex billing structures' },
  },
];

const clients = [
  { name: 'BrandShapers', industry: 'Performance Marketing', logo: '/images/client/brandshapers.png' },
  { name: 'VisionWorld Immigration', industry: 'Immigration Consulting', logo: '/images/client/visionworld.png' },
  { name: 'Bellevue Receptions', industry: 'Hospitality & Events', logo: '/images/client/bellevue.png' },
  { name: 'Dr. Ruchi Psychologist', industry: 'Healthcare', logo: '/images/client/drruchi.png' },
  { name: 'Evolved Hair', industry: 'Hair Restoration', logo: '/images/client/evolvedhair.svg', darkBg: true },
  { name: 'IndeedVisa', industry: 'Migration Agency', logo: '/images/client/indeedvisa.png' },
  { name: 'Navkiran Nursing', industry: 'Education & Coaching', logo: '/images/client/navkiran.png' },
  { name: 'Arrow Roofing', industry: 'Roofing Services', logo: '/images/client/arrowroofing.png' },
  { name: 'Study Master', industry: 'Visa Consulting', logo: '/images/client/studymaster.png' },
  { name: 'LevelUp PR', industry: 'Public Relations', logo: '/images/client/leveluppr.svg' },
  { name: 'Rana Infracon', industry: 'Real Estate', logo: '/images/client/ranainfracon.png' },
  { name: 'Gadott', industry: 'Luxury Bathware', logo: '/images/client/gadott.png', darkBg: true },
  { name: 'Vivacite', industry: 'Architecture & Windows', logo: '/images/client/vivacite.jpg' },
];

const steps = [
  {
    number: '01',
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Discovery & Audit',
    description: 'We dig into your site, your competitors, and your market. You get a clear picture of where you stand — and exactly what it takes to outrank.',
  },
  {
    number: '02',
    icon: 'fa-solid fa-map',
    title: 'Strategy Blueprint',
    description: 'Every campaign gets a custom roadmap. Keywords, content gaps, technical fixes, link targets — a clear 90-day plan with measurable milestones.',
  },
  {
    number: '03',
    icon: 'fa-solid fa-rocket',
    title: 'Execute & Optimise',
    description: 'Our team moves fast. On-page SEO, content, technical fixes, and link outreach — all running together for compounding results.',
  },
  {
    number: '04',
    icon: 'fa-solid fa-chart-line',
    title: 'Report & Scale',
    description: 'Monthly reports in plain English. Traffic, rankings, conversions — tracked openly. We double down on what works, every single month.',
  },
];

const toolsStack = [
  { icon: 'fa-solid fa-magnifying-glass-chart', name: 'Ahrefs',              category: 'SEO Intelligence' },
  { icon: 'fa-solid fa-chart-simple',           name: 'SEMrush',             category: 'Competitive Analysis' },
  { icon: 'fa-brands fa-google',                name: 'Google Analytics',    category: 'Traffic Analytics' },
  { icon: 'fa-solid fa-binoculars',             name: 'Search Console',      category: 'Search Performance' },
  { icon: 'fa-solid fa-frog',                   name: 'Screaming Frog',      category: 'Technical Audit' },
  { icon: 'fa-solid fa-eye',                    name: 'Hotjar',              category: 'UX & Behaviour' },
  { icon: 'fa-solid fa-tower-broadcast',        name: 'Moz Pro',             category: 'Link Intelligence' },
  { icon: 'fa-solid fa-envelope-open-text',     name: 'Mailchimp',           category: 'Email Automation' },
  { icon: 'fa-brands fa-meta',                  name: 'Meta Business Suite', category: 'Social Advertising' },
  { icon: 'fa-brands fa-google',                name: 'Google Ads',          category: 'Paid Search' },
];

const testimonials = [
  {
    initials: 'PA',
    name: 'Pardeep A.',
    role: 'Managing Director',
    text: 'Rank Spiders took us from page three to top three for our most competitive keywords in four months. Our inquiry volume tripled. They actually understand our industry — not just SEO in general.',
    rating: 5,
  },
  {
    initials: 'CM',
    name: 'Chandan M.',
    role: 'Business Founder',
    text: "Competing in a tough market, Rank Spiders built a content strategy that now drives over 60% of our leads organically. The ROI has been far better than any paid campaign we've run.",
    rating: 5,
  },
  {
    initials: 'NK',
    name: 'N. Kumar',
    role: 'Director, Education Institute',
    text: 'In under six months, we rank page one for our key coaching keywords across India. Organic student inquiries are up 200%. The team is thorough, honest, and delivers on every promise.',
    rating: 5,
  },
];

const toolsHighlight = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'SEO Audit', description: 'Full on-page analysis in seconds', href: '/tools/seo-audit' },
  { icon: 'fa-solid fa-gauge-high', title: 'Page Speed', description: 'Score your site performance', href: '/tools/page-speed' },
  { icon: 'fa-solid fa-key', title: 'Keyword Density', description: 'Analyse content keyword usage', href: '/tools/keyword-density' },
  { icon: 'fa-solid fa-robot', title: 'Robots.txt Tester', description: 'Check crawler access rules', href: '/tools/robots-tester' },
  { icon: 'fa-solid fa-sitemap', title: 'Sitemap Validator', description: 'Validate your XML sitemap', href: '/tools/sitemap-validator' },
  { icon: 'fa-solid fa-tags', title: 'Meta Tag Extractor', description: 'Extract all meta & OG tags', href: '/tools/meta-tags' },
];

const metrics = [
  {
    value: '247%',
    label: 'Organic Traffic Growth',
    desc: 'Average increase across SEO clients tracked over 12 months of active engagement.',
    bar: 100,
  },
  {
    value: '3×',
    label: 'Lead Volume Increase',
    desc: 'Typical result for clients within the first six months of their campaign.',
    bar: 75,
  },
  {
    value: '#1–3',
    label: 'Google Rankings',
    desc: '68% of targeted keywords reach the first page within 12 months.',
    bar: 68,
  },
  {
    value: '95%',
    label: 'Client Retention',
    desc: 'Nine out of ten clients renew — because the results keep compounding.',
    bar: 95,
  },
];

const industries = [
  { icon: 'fa-solid fa-cart-shopping', name: 'E-Commerce', href: '/ecommerce-seo-agency' },
  { icon: 'fa-solid fa-hospital-user', name: 'Healthcare', href: '/local-seo-agency' },
  { icon: 'fa-solid fa-building', name: 'Real Estate', href: '/local-seo-agency' },
  { icon: 'fa-solid fa-graduation-cap', name: 'Education', href: '/content-marketing-agency' },
  { icon: 'fa-solid fa-plane-departure', name: 'Immigration & Visa', href: '/seo-agency-india' },
  { icon: 'fa-solid fa-concierge-bell', name: 'Hospitality', href: '/local-seo-agency' },
  { icon: 'fa-solid fa-landmark', name: 'Finance', href: '/b2b-seo-agency' },
  { icon: 'fa-solid fa-scale-balanced', name: 'Legal Services', href: '/local-seo-agency' },
  { icon: 'fa-solid fa-spa', name: 'Beauty & Wellness', href: '/local-seo-agency' },
  { icon: 'fa-solid fa-helmet-safety', name: 'Construction', href: '/local-seo-agency' },
  { icon: 'fa-solid fa-microchip', name: 'SaaS & Tech', href: '/saas-seo-agency' },
  { icon: 'fa-solid fa-film', name: 'Media & Entertainment', href: '/content-marketing-agency' },
];

type FAQ = { q: string; a: React.ReactNode };

const faqs: FAQ[] = [
  {
    q: 'How long does SEO take to show results?',
    a: <>Most clients see measurable movement — keyword rankings improving, traffic climbing — within 60 to 90 days. Significant, compounding growth typically builds from month four onwards. SEO is a long-term investment: the results compound over time and continue working even when ad budgets stop. Get a <strong><Link href="/free-seo-audit-agency">free SEO audit</Link></strong> to see exactly where your site stands today.</>,
  },
  {
    q: 'What is the difference between SEO and paid ads (PPC)?',
    a: <>Paid ads put you at the top instantly — but the moment you stop paying, the traffic stops. SEO builds organic authority that keeps driving traffic for months or years with no per-click cost. We typically recommend a mix: <strong><Link href="/google-ads-agency">Google Ads</Link></strong> and <strong><Link href="/meta-ads-agency">Meta Ads</Link></strong> for quick wins and lead flow while SEO builds your long-term competitive moat.</>,
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: <>Yes — and we enjoy it. Small businesses and startups are our sweet spot. We&apos;ve helped solopreneurs, local service businesses, and early-stage SaaS companies outrank much larger competitors. We don&apos;t sell cookie-cutter packages — we build strategies around your actual goals and budget.</>,
  },
  {
    q: 'How much does SEO cost in India?',
    a: <>Our retainers start at ₹15,000/month for <strong><Link href="/local-seo-agency">local SEO</Link></strong> and scale up based on scope — number of target keywords, content production, link building, and reporting depth. Every engagement starts with a <strong><Link href="/free-seo-audit-agency">free SEO audit</Link></strong> so you know exactly what you&apos;re getting before committing.</>,
  },
  {
    q: 'What is Answer Engine Optimization (AEO)?',
    a: <>AEO is the practice of optimizing your content to appear in AI-generated answer boxes, featured snippets, People Also Ask sections, and voice search results. As users shift to asking questions directly in Google, ChatGPT, and Gemini, <strong><Link href="/ai-seo-agency">AI-powered SEO and AEO</Link></strong> ensures your brand is the one cited in those answers.</>,
  },
  {
    q: 'Will you need to make changes to my website?',
    a: <>Usually yes — <strong><Link href="/technical-seo-agency">technical SEO</Link></strong> improvements (site speed, structured data, crawlability fixes) require changes to your site. We provide a detailed technical audit first, and all changes are either implemented by our team or handed to your developer as a prioritized checklist with exact specifications.</>,
  },
];

type Project = { id: number; title: string; slug: string; category: string; location: string; image_url: string };
type Blog = { id: number; title: string; slug: string; excerpt: string; author: string; image_url: string; created_at: string };

export default function HomeClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const heroSceneRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMetricsVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = heroSceneRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
      const y = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
      el.style.transition = 'transform 0.1s ease-out';
      el.style.transform  = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 7}deg) scale3d(1.03,1.03,1.03)`;
    };
    const onLeave = () => {
      el.style.transition = 'transform 0.6s ease-out';
      el.style.transform  = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);


  /* Particle constellation canvas */
  useEffect(() => {
    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let mx = -9999, my = -9999;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; da: number };
    const pts: P[] = Array.from({ length: 65 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      r:  Math.random() * 1.6 + 0.4,
      a:  Math.random() * 0.45 + 0.15,
      da: (Math.random() - 0.5) * 0.006,
    }));

    const onMM = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onML = () => { mx = -9999; my = -9999; };
    const parent = canvas.parentElement!;
    parent.addEventListener('mousemove', onMM);
    parent.addEventListener('mouseleave', onML);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        const dx = p.x - mx, dy = p.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 110 && d > 0) {
          const f = (110 - d) / 110;
          p.x += (dx / d) * f * 1.9;
          p.y += (dy / d) * f * 1.9;
        }
        p.x  += p.vx;
        p.y  += p.vy;
        p.a  += p.da;
        if (p.a <= 0.1 || p.a >= 0.7) p.da *= -1;
        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.a})`;
        ctx.fill();
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 128) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${(1 - dist / 128) * 0.18})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', onMM);
      parent.removeEventListener('mouseleave', onML);
    };
  }, []);

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    fetch(`${api}/api/projects`)
      .then(r => r.json())
      .then(data => setProjects(Array.isArray(data) ? data.slice(0, 3) : []))
      .catch(() => setProjects([]))
      .finally(() => setProjectsLoading(false));

    fetch(`${api}/api/blogs`)
      .then(r => r.json())
      .then(data => setBlogs(Array.isArray(data) ? data.slice(0, 3) : []))
      .catch(() => setBlogs([]))
      .finally(() => setBlogsLoading(false));
  }, []);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="home-hero" ref={heroSectionRef}>
        {/* Animated background orbs */}
        <div className="hero-bg-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-bg-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-bg-orb hero-orb-3" aria-hidden="true" />
        {/* Particle canvas + cursor spotlight */}
        <canvas className="hero-particle-canvas" ref={heroCanvasRef} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center g-4">

            {/* Left: text */}
            <div className="col-lg-6">
              <MotionWrapper delay={0}>
                <div className="home-hero-badge">
                  <i className="fa-solid fa-circle-check"></i>
                  Premium SEO &amp; Digital Marketing Agency
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.1}>
                <h1 className="home-hero-heading">
                  Grow Your Business With <span>Data-Driven SEO</span>
                </h1>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <p className="home-hero-sub">
                  Rank Spiders is a leading{' '}
                  <strong><Link href="/seo-agency-india" className="hero-inline-link">SEO agency in India</Link></strong>
                  {' '}helping local businesses, startups, and enterprise brands dominate search
                  rankings, build authority through{' '}
                  <strong><Link href="/technical-seo-agency" className="hero-inline-link">technical SEO</Link></strong>
                  {' '}and{' '}
                  <strong><Link href="/link-building-seo-agency" className="hero-inline-link">link building</Link></strong>
                  , and convert traffic into revenue — with transparent strategies that deliver measurable growth.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.3}>
                <div className="home-hero-actions">
                  <Link href="/free-seo-audit-agency" className="btn-default">
                    Get Free SEO Audit
                  </Link>
                  <Link href="/projects" className="btn-outline-hero">
                    View Our Work <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.4}>
                <div className="home-hero-trust">
                  <div className="trust-item">
                    <i className="fa-solid fa-star"></i>
                    <span>4.9/5 Client Rating</span>
                  </div>
                  <div className="trust-divider"></div>
                  <div className="trust-item">
                    <i className="fa-solid fa-users"></i>
                    <span>200+ Brands Served</span>
                  </div>
                  <div className="trust-divider"></div>
                  <div className="trust-item">
                    <i className="fa-solid fa-award"></i>
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* Right: 3D graphic */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <MotionWrapper delay={0.15} variant="right">
                <div className="home-hero-graphic" ref={heroSceneRef}>
                  {/* Glow behind illustration */}
                  <div className="hero-img-glow" aria-hidden="true" />

                  {/* Float card 1 — top left */}
                  <div className="hero-float-card hero-card-1">
                    <div className="hero-float-icon-bg">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div>
                      <strong>+247%</strong>
                      <span>Organic Traffic</span>
                    </div>
                  </div>

                  {/* Rotating ring around image */}
                  <div className="hero-img-ring" aria-hidden="true" />

                  {/* Main illustration — full, uncropped */}
                  <div className="hero-img-stage">
                    <img src="/images/sections/hero-image.png" alt="Rank Spiders – Digital Marketing Agency" />
                  </div>

                  {/* Float card 2 — bottom right */}
                  <div className="hero-float-card hero-card-2">
                    <div className="hero-float-icon-bg">
                      <i className="fa-solid fa-ranking-star"></i>
                    </div>
                    <div>
                      <strong>#1 Rankings</strong>
                      <span>On Google</span>
                    </div>
                  </div>

                  {/* Float card 3 — bottom left */}
                  <div className="hero-float-card hero-card-3">
                    <div className="hero-float-icon-bg">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div>
                      <strong>200+</strong>
                      <span>Happy Clients</span>
                    </div>
                  </div>

                  {/* Float card 4 — top right */}
                  <div className="hero-float-card hero-card-4">
                    <div className="hero-float-icon-bg hero-float-icon-cyan">
                      <i className="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                      <strong>340% ROI</strong>
                      <span>Avg. Return</span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      <ScrollingTicker />

      {/* ==================== CLIENTS LOGOS ==================== */}
      <section className="home-clients">
        <div className="container">
          <MotionWrapper>
            <p className="home-clients-label">
              <i className="fa-solid fa-circle-check"></i>
              Trusted by 200+ businesses across India, Australia &amp; the US
            </p>
          </MotionWrapper>
        </div>
        <div className="home-clients-marquee">
          <div className="home-clients-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className={`home-client-card${c.darkBg ? ' client-dark-bg' : ''}`}>
                {c.logo ? (
                  <img src={c.logo} alt={`${c.name} — Rank Spiders client`} className="client-logo-img" />
                ) : (
                  <span className="client-logo-text">{c.name}</span>
                )}
                <span className="client-industry">{c.industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats-grid">
            {stats.map((stat, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <div className="home-stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FREE AUDIT CTA STRIP ==================== */}
      <section className="home-audit-strip">
        <div className="container">
          <MotionWrapper variant="up">
            <div className="home-audit-strip-box">
              <div className="home-audit-strip-orb home-audit-strip-orb-1" aria-hidden="true" />
              <div className="home-audit-strip-orb home-audit-strip-orb-2" aria-hidden="true" />
              <div className="home-audit-strip-content">
                <p className="home-audit-strip-eyebrow">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  Free Website Analysis
                </p>
                <h2 className="home-audit-strip-heading">
                  Is Your Website <span>Invisible to Google?</span>
                </h2>
                <p className="home-audit-strip-sub">
                  Most websites have 10–30 technical SEO issues silently killing their rankings.
                  Get a full audit in 60 seconds — no forms, no calls, no obligation.
                </p>
                <div className="home-audit-strip-badges">
                  {auditTrustBadges.map((b, i) => (
                    <span key={i} className="home-audit-strip-badge">
                      <i className={b.icon}></i>
                      {b.text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="home-audit-strip-action">
                <Link href="/tools/seo-audit" className="home-audit-strip-btn">
                  Get My Free SEO Audit
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <p className="home-audit-strip-disclaimer">
                  Instant results &nbsp;·&nbsp; No sign-up required
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="home-services">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>What We Do</h3>
              <h2>Services Built to <span>Drive Real Growth</span></h2>
              <p>From search to social — every service we offer is engineered to grow your brand and your bottom line.</p>
            </div>
          </MotionWrapper>

          <div className="home-services-grid">
            {services.map((svc, i) => (
              <MotionWrapper key={i} delay={Math.floor(i / 3) * 0.1 + (i % 3) * 0.08}>
                <Link href={svc.href} className="home-service-card">
                  <div className="home-service-icon">
                    <i className={svc.icon}></i>
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                  <span className="home-service-link">
                    {svc.linkLabel} <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW WE WORK ==================== */}
      <section className="home-process">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>How We Work</h3>
              <h2>From First Call to <span>Page One Rankings</span></h2>
              <p>A proven four-step process that has delivered first-page results for 200+ businesses. No black-box tactics — just clear strategy, executed well.</p>
            </div>
          </MotionWrapper>

          <div className="home-process-grid">
            {steps.map((step, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <div className="home-process-card">
                  <div className="process-step-number">{step.number}</div>
                  <div className="process-step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TOOLS & TECHNOLOGY STACK ==================== */}
      <section className="home-tools-stack">
        <div className="home-tools-stack-orb home-tools-stack-orb-1" aria-hidden="true" />
        <div className="home-tools-stack-orb home-tools-stack-orb-2" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <MotionWrapper variant="up">
            <div className="section-title text-center section-title-center home-tools-stack-title">
              <h3>Our Tech Stack</h3>
              <h2>Backed by <span>Industry-Leading Tools</span></h2>
              <p>Every decision is backed by data from the platforms professional SEO teams worldwide trust. No guesswork — just actionable intelligence.</p>
            </div>
          </MotionWrapper>
          <MotionStagger className="home-tools-stack-grid" delayStart={0.05} stagger={0.07}>
            {toolsStack.map((tool, i) => (
              <MotionItem key={i} className="home-tools-stack-pill">
                <div className="home-tools-stack-pill-icon">
                  <i className={tool.icon}></i>
                </div>
                <div className="home-tools-stack-pill-info">
                  <span className="home-tools-stack-pill-name">{tool.name}</span>
                  <span className="home-tools-stack-pill-cat">{tool.category}</span>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
          <MotionWrapper delay={0.2}>
            <p className="home-tools-stack-footnote">
              <i className="fa-solid fa-circle-info"></i>
              Combined with our own{' '}
              <Link href="/tools" className="home-tools-stack-footnote-link">free SEO tools</Link>
              {' '}— built in-house for rapid diagnostics.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="home-why">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <MotionWrapper variant="left">
                <div className="section-title">
                  <h3>Why Rank Spiders</h3>
                  <h2>An Agency Built on <span>Performance &amp; Trust</span></h2>
                  <p>We don&apos;t just deliver reports — we deliver results. Here&apos;s what makes us the preferred digital partner for 200+ businesses.</p>
                </div>
                <div className="home-why-cta">
                  <Link href="/about" className="btn-default">Meet Our Team</Link>
                </div>
              </MotionWrapper>
            </div>

            <div className="col-lg-7">
              <div className="home-why-list">
                {reasons.map((r, i) => (
                  <MotionWrapper key={i} delay={i * 0.12}>
                    <div className="home-why-item">
                      <div className="home-why-icon">
                        <i className={r.icon}></i>
                      </div>
                      <div>
                        <h3>{r.title}</h3>
                        <p>{r.description}</p>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPECIALIST COMPARISON ==================== */}
      <section className="home-compare">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>Why a Specialist?</h3>
              <h2>Why We Beat <span>the Alternatives</span></h2>
              <p>Generic agencies spread thin. Freelancers hit capacity ceilings. Rank Spiders does one thing — and does it at a level most agencies never reach.</p>
            </div>
          </MotionWrapper>
          <MotionWrapper variant="up" delay={0.1}>
            <div className="home-compare-wrapper">
              <div className="home-compare-table" role="table" aria-label="Agency comparison">
                <div className="home-compare-head" role="row">
                  <div className="home-compare-cell home-compare-cell--feature" role="columnheader">Feature</div>
                  <div className="home-compare-cell home-compare-cell--us" role="columnheader">
                    <div className="home-compare-col-label">
                      <i className="fa-solid fa-spider"></i> Rank Spiders
                    </div>
                  </div>
                  <div className="home-compare-cell home-compare-cell--alt" role="columnheader">
                    <i className="fa-solid fa-user-tie"></i> Freelancer
                  </div>
                  <div className="home-compare-cell home-compare-cell--alt" role="columnheader">
                    <i className="fa-solid fa-building-columns"></i> Big Agency
                  </div>
                </div>
                {comparisonRows.map((row, i) => (
                  <div key={i} className="home-compare-row" role="row">
                    <div className="home-compare-cell home-compare-cell--feature" role="cell">{row.feature}</div>
                    <div className="home-compare-cell home-compare-cell--us" role="cell">
                      <span className="home-compare-check home-compare-check--yes">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                      <span className="home-compare-note">{row.rankspiders.note}</span>
                    </div>
                    <div className="home-compare-cell home-compare-cell--alt" role="cell">
                      <span className={`home-compare-check home-compare-check--${row.freelancer.status}`}>
                        <i className={row.freelancer.status === 'yes' ? 'fa-solid fa-circle-check' : row.freelancer.status === 'maybe' ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-circle-xmark'}></i>
                      </span>
                      <span className="home-compare-note">{row.freelancer.note}</span>
                    </div>
                    <div className="home-compare-cell home-compare-cell--alt" role="cell">
                      <span className={`home-compare-check home-compare-check--${row.bigAgency.status}`}>
                        <i className={row.bigAgency.status === 'yes' ? 'fa-solid fa-circle-check' : row.bigAgency.status === 'maybe' ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-circle-xmark'}></i>
                      </span>
                      <span className="home-compare-note">{row.bigAgency.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div className="home-section-cta">
              <Link href="/free-seo-audit-agency" className="btn-default">
                See What a Specialist Delivers <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== METRICS / RESULTS ==================== */}
      <section className="home-metrics">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>Proven Results</h3>
              <h2>Numbers That Show <span>What We Actually Deliver</span></h2>
              <p>Not projections. Not promises. These are real averages pulled from active client campaigns.</p>
            </div>
          </MotionWrapper>

          <div
            ref={metricsRef}
            className={`home-metrics-grid${metricsVisible ? ' metrics-active' : ''}`}
          >
            {metrics.map((m, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <div className="home-metric-card">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                  <p className="metric-desc">{m.desc}</p>
                  <div className="metric-bar-track">
                    <div
                      className="metric-bar-inner"
                      style={{ '--bar-width': `${m.bar}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper>
            <div className="home-section-cta">
              <Link href="/projects" className="btn-outline-hero">
                View Our Case Studies <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== FEATURED PROJECTS ==================== */}
      <section className="home-projects">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>Case Studies</h3>
              <h2>Results We Have <span>Delivered for Clients</span></h2>
              <p>Real businesses. Real rankings. Real revenue. A sample of what our SEO and digital marketing strategies have achieved.</p>
            </div>
          </MotionWrapper>

          {projectsLoading ? (
            <div className="home-projects-grid">
              {[1, 2, 3].map(i => <div key={i} className="home-skeleton-card" />)}
            </div>
          ) : projects.length > 0 ? (
            <div className="home-projects-grid">
              {projects.map((p, i) => {
                const slugIdx = (p.slug?.split('').reduce((a: number, c: string) => a + c.charCodeAt(0), 0) % 6) + 1;
                const fallbackImg = `/images/projects/project-${slugIdx}.jpg`;
                return (
                <MotionWrapper key={p.id} delay={i * 0.1}>
                  <Link href={`/projects/${p.slug}`} className="home-project-card">
                    <div className="home-project-img">
                      <img
                        src={p.image_url || fallbackImg}
                        onError={(e) => { e.currentTarget.src = fallbackImg; }}
                        alt={p.title}
                      />
                    </div>
                    <div className="home-project-body">
                      {p.category && <span className="home-project-tag">{p.category}</span>}
                      <h3>{p.title}</h3>
                      {p.location && (
                        <p className="home-project-meta">
                          <i className="fa-solid fa-location-dot"></i> {p.location}
                        </p>
                      )}
                      <span className="home-service-link">
                        View Case Study <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </MotionWrapper>
                );
              })}
            </div>
          ) : (
            <div className="home-projects-grid">
              {[
                {
                  tag: 'SEO + Content Strategy',
                  icon: 'fa-solid fa-magnifying-glass-chart',
                  industry: 'Immigration & Visa Consultancy',
                  result: '3× organic enquiry growth',
                  period: 'in 4 months',
                  desc: 'Ranked top 3 for high-competition immigration keywords. Enquiry volume tripled through targeted content and technical SEO.',
                },
                {
                  tag: 'Local SEO + Google Business',
                  icon: 'fa-solid fa-location-dot',
                  industry: 'Healthcare & Dental Practice',
                  result: 'Top 3 across all key searches',
                  period: 'in target city',
                  desc: 'Local SEO overhaul boosted Google Business visibility city-wide. New patient inquiries increased significantly within 90 days.',
                },
                {
                  tag: 'Social Media + Paid Ads',
                  icon: 'fa-brands fa-instagram',
                  industry: 'Hair Restoration Clinic',
                  result: '40% increase in bookings',
                  period: 'from month one',
                  desc: 'Instagram and Facebook campaigns drove direct appointment bookings, with full ROI tracking from the very first month.',
                },
                {
                  tag: 'SEO + Google Ads',
                  icon: 'fa-solid fa-chart-line',
                  industry: 'Home Services & Roofing',
                  result: '2× monthly enquiries',
                  period: 'in 90 days',
                  desc: 'Combined organic and paid strategy made digital their number-one lead source — ahead of referrals and offline channels.',
                },
                {
                  tag: 'SEO + Content Writing',
                  icon: 'fa-solid fa-pen-nib',
                  industry: 'Education & Coaching Centre',
                  result: '200% more organic student leads',
                  period: 'in 6 months',
                  desc: 'Built a content library targeting competitive coaching keywords across India. Page 1 rankings now drive consistent inbound inquiries.',
                },
                {
                  tag: 'WordPress + Web Design',
                  icon: 'fa-solid fa-code',
                  industry: 'Travel & Tourism Agency',
                  result: '60% leads now come organically',
                  period: 'post-launch',
                  desc: 'Designed and launched a fast, SEO-optimised WordPress website that outperformed their previous paid-traffic-dependent presence.',
                },
              ].map((cs, i) => (
                <MotionWrapper key={i} delay={i * 0.08}>
                  <div className="home-project-card home-casestudy-card">
                    <div className="home-casestudy-icon">
                      <i className={cs.icon}></i>
                    </div>
                    <div className="home-project-body">
                      <span className="home-project-tag">{cs.tag}</span>
                      <h3>{cs.industry}</h3>
                      <div className="home-casestudy-result">
                        <strong>{cs.result}</strong>
                        <span>{cs.period}</span>
                      </div>
                      <p className="home-casestudy-desc">{cs.desc}</p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          )}

          <MotionWrapper>
            <div className="home-section-cta">
              <Link href="/projects" className="btn-outline-hero">
                View All Case Studies <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="home-testimonials">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>Client Reviews</h3>
              <h2>What Our Clients Say <span>About Working With Us</span></h2>
              <p>We let the results speak first — then the people behind them.</p>
            </div>
          </MotionWrapper>

          <div className="home-testimonials-grid">
            {testimonials.map((t, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <div className="home-testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <i key={s} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <blockquote>&#8220;{t.text}&#8221;</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div className="testimonial-author-info">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper>
            <div className="home-section-cta">
              <Link href="/testimonials" className="btn-outline-hero">
                Read More Client Reviews <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="home-industries">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>Industries We Serve</h3>
              <h2>We Rank Businesses Across <span>Every Major Sector</span></h2>
              <p>From local clinics to SaaS startups to immigration consultancies — if your customers search for it, we can rank you for it.</p>
            </div>
          </MotionWrapper>

          <div className="home-industries-grid">
            {industries.map((ind, i) => (
              <MotionWrapper key={i} delay={Math.floor(i / 4) * 0.08 + (i % 4) * 0.05}>
                <Link href={ind.href} className="home-industry-chip">
                  <i className={ind.icon}></i>
                  <span>{ind.name}</span>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RECENT BLOGS ==================== */}
      <section className="home-blogs">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>SEO Insights</h3>
              <h2>From Our Blog — <span>No-Fluff Marketing Guides</span></h2>
              <p>Practical SEO and digital marketing guides written by people who actually run campaigns, not just write about them.</p>
            </div>
          </MotionWrapper>

          {blogsLoading ? (
            <div className="home-blogs-grid">
              {[1, 2, 3].map(i => <div key={i} className="home-skeleton-card" />)}
            </div>
          ) : blogs.length > 0 ? (
            <div className="home-blogs-grid">
              {blogs.map((b, i) => (
                <MotionWrapper key={b.id} delay={i * 0.1}>
                  <Link href={`/blog/${b.slug}`} className="home-blog-card">
                    {b.image_url && (
                      <div className="home-blog-img" style={{ backgroundImage: `url(${b.image_url})` }} />
                    )}
                    <div className="home-blog-body">
                      {b.author && (
                        <span className="home-blog-author">
                          <i className="fa-solid fa-user"></i> {b.author}
                        </span>
                      )}
                      <h3>{b.title}</h3>
                      {b.excerpt && (
                        <p>{b.excerpt.length > 120 ? b.excerpt.slice(0, 120) + '…' : b.excerpt}</p>
                      )}
                      <span className="home-service-link">
                        Read Article <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </MotionWrapper>
              ))}
            </div>
          ) : (
            <MotionWrapper>
              <div className="home-empty-state">
                <i className="fa-solid fa-newspaper"></i>
                <p>Blog articles coming soon.</p>
                <Link href="/blog" className="btn-outline-hero">
                  Visit Our Blog <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </MotionWrapper>
          )}

          {blogs.length > 0 && (
            <MotionWrapper>
              <div className="home-section-cta">
                <Link href="/blog" className="btn-outline-hero">
                  Read All Articles <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </MotionWrapper>
          )}
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="home-faq">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>FAQ</h3>
              <h2>Common Questions About <span>Our SEO Services</span></h2>
              <p>Straight answers — no sales spin. If you have a question not covered here, just reach out.</p>
            </div>
          </MotionWrapper>

          <div className="home-faq-list">
            {faqs.map((f, i) => (
              <MotionWrapper key={i} delay={i * 0.07}>
                <details className="home-faq-item">
                  <summary className="home-faq-question">
                    <span>{f.q}</span>
                    <i className="fa-solid fa-chevron-down home-faq-chevron"></i>
                  </summary>
                  <div className="home-faq-answer">
                    <p>{f.a}</p>
                  </div>
                </details>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper>
            <div className="home-section-cta">
              <Link href="/contact-us" className="btn-default">
                Got More Questions? Talk to Us <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== FREE TOOLS STRIP ==================== */}
      <section className="home-tools">
        <div className="container">
          <MotionWrapper>
            <div className="section-title text-center section-title-center">
              <h3>Free SEO Tools</h3>
              <h2>Diagnose Your Website — <span>No Cost, No Sign-Up</span></h2>
              <p>Six professional-grade SEO tools. Run a full audit, check page speed, analyse keyword density — right in your browser, completely free.</p>
            </div>
          </MotionWrapper>

          <div className="home-tools-grid">
            {toolsHighlight.map((tool, i) => (
              <MotionWrapper key={i} delay={i * 0.08}>
                <Link href={tool.href} className="home-service-card">
                  <div className="home-service-icon">
                    <i className={tool.icon}></i>
                  </div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <span className="home-service-link">
                    Try Free <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper>
            <div className="home-section-cta">
              <Link href="/tools" className="btn-default">
                <i className="fa-solid fa-toolbox"></i> Explore All Free Tools
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="home-cta">
        <div className="container">
          <MotionWrapper>
            <div className="home-cta-box">
              <div className="home-cta-content">
                <h2>Ready to Rank Higher and Grow Faster?</h2>
                <p>Get a free, no-obligation SEO audit and discover exactly what&apos;s holding your website back.</p>
              </div>
              <div className="home-cta-actions">
                <Link href="/contact-us" className="btn-default">Book a Free Consultation</Link>
                <a href="tel:+919988357092" className="home-cta-phone">
                  <i className="fa-solid fa-phone"></i>
                  +91 99883-57092
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}

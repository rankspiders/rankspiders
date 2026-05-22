'use client';

import Link from 'next/link';
import ScrollingTicker from '@/components/ScrollingTicker';
import MotionWrapper from '@/components/MotionWrapper';

export default function Home() {
  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '500+', label: 'Clients Served' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '1K+', label: 'Projects Completed' },
  ];

  const services = [
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'SEO Optimization',
      description: 'Rank higher, convert better. Data-driven SEO strategies that build long-term organic authority and drive qualified traffic to your business.',
      href: '/seo-agency-india',
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'AI-Powered SEO',
      description: 'Future-proof your search presence with AI-assisted keyword intelligence, content optimization, and predictive ranking strategies.',
      href: '/ai-seo-agency',
    },
    {
      icon: 'fa-brands fa-meta',
      title: 'Social Media Marketing',
      description: 'Build an engaged audience across every platform. From content creation to paid ads — we grow your brand where your customers spend time.',
      href: '/social-media-marketing',
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Web Design & Development',
      description: 'Fast, beautiful, conversion-optimized websites built on modern stacks. Designed to impress, built to rank.',
      href: '/web-design-and-development-niche-industries',
    },
    {
      icon: 'fa-solid fa-envelope-open-text',
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with automated, personalized email sequences that deliver real ROI.',
      href: '/email-marketing-agency',
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'PPC & Paid Ads',
      description: 'Maximize every rupee of ad spend. Google Ads, Meta Ads and LinkedIn campaigns managed for performance, not vanity metrics.',
      href: '/meta-ads-agency',
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

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-7">
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
                  Rank Spiders helps local businesses, startups, and enterprise brands dominate search rankings, build authority, and convert traffic into revenue — with transparent strategies that deliver measurable growth.
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
                    <span>500+ Brands Served</span>
                  </div>
                  <div className="trust-divider"></div>
                  <div className="trust-item">
                    <i className="fa-solid fa-award"></i>
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            <div className="col-lg-4 col-xl-5 d-none d-lg-block">
              <MotionWrapper delay={0.2} variant="right">
                <div className="home-hero-graphic">
                  <div className="hero-float-card hero-card-1">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <div>
                      <strong>+247%</strong>
                      <span>Organic Traffic</span>
                    </div>
                  </div>
                  <div className="hero-image">
                    <figure>
                      <img src="/images/hero-image.png" alt="Rank Spiders – Digital Marketing Agency" />
                    </figure>
                  </div>
                  <div className="hero-float-card hero-card-2">
                    <i className="fa-solid fa-ranking-star"></i>
                    <div>
                      <strong>#1 Rankings</strong>
                      <span>On Google</span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      <ScrollingTicker />

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
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </MotionWrapper>
            ))}
          </div>
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
                  <p>We don't just deliver reports — we deliver results. Here's what makes us the preferred digital partner for 500+ businesses.</p>
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

      {/* ==================== CTA BANNER ==================== */}
      <section className="home-cta">
        <div className="container">
          <MotionWrapper>
            <div className="home-cta-box">
              <div className="home-cta-content">
                <h2>Ready to Rank Higher and Grow Faster?</h2>
                <p>Get a free, no-obligation SEO audit and discover exactly what's holding your website back.</p>
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

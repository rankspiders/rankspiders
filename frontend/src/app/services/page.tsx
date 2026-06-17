'use client';

import { useState } from 'react';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';

function ServicesAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${open ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setOpen(!open)}
        >
          {question}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${open ? 'show' : ''}`}>
        <div className="accordion-body"><p>{answer}</p></div>
      </div>
    </div>
  );
}

const servicesList = [
  {
    title: "SEO Optimisation",
    description: "Position your brand as a credible, high-trust authority across search ecosystems. Technical, on-page, and off-page SEO that compounds over time.",
    link: "/services/seo",
    image: "/images/sections/service-circle-img-1.png",
    icon: "fa-solid fa-magnifying-glass-chart",
  },
  {
    title: "Web Design & Development",
    description: "Build fast, scalable, and conversion-focused websites tailored to your brand. WordPress, Shopify, and custom builds.",
    link: "/services/web-development",
    image: "/images/sections/service-circle-img-2.png",
    icon: "fa-solid fa-code",
  },
  {
    title: "Social Media Marketing",
    description: "Amplify your brand voice, grow an engaged audience, and turn social followers into paying customers across every platform.",
    link: "/services/social-media",
    image: "/images/sections/service-circle-img-3.png",
    icon: "fa-brands fa-instagram",
  },
  {
    title: "Paid Advertising",
    description: "Drive targeted traffic and accelerate conversions with precision Google Ads, Meta Ads, and LinkedIn ad campaigns.",
    link: "/services/paid-ads",
    image: "/images/sections/service-circle-img-4.png",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Content Marketing",
    description: "Build brand authority with strategic content — blog posts, landing pages, and articles engineered to rank and convert.",
    link: "/services/content",
    image: "/images/sections/service-circle-img-5.png",
    icon: "fa-solid fa-pen-nib",
  },
  {
    title: "Consultancy",
    description: "Get expert guidance on your digital strategy. We audit, advise, and roadmap your growth — whether you need SEO, ads, or full-funnel consulting.",
    link: "/services/consultancy",
    image: "/images/sections/service-circle-img-6.png",
    icon: "fa-solid fa-handshake",
  },
];

const allServices = [
  { category: "SEO", items: [
    { label: "SEO Optimisation", href: "/services/seo" },
    { label: "Technical SEO", href: "/services/seo/technical" },
    { label: "Local SEO", href: "/services/seo/local" },
    { label: "E-Commerce SEO", href: "/services/seo/ecommerce" },
    { label: "Shopify SEO", href: "/services/seo/shopify" },
    { label: "WordPress SEO", href: "/services/seo/wordpress" },
    { label: "Link Building SEO", href: "/services/seo/link-building" },
    { label: "B2B SEO", href: "/services/seo/b2b" },
    { label: "SaaS SEO", href: "/services/seo/saas" },
    { label: "AI SEO", href: "/services/seo/ai" },
  ]},
  { category: "Web Design & Dev", items: [
    { label: "Web Design & Development", href: "/services/web-development" },
    { label: "WordPress Development", href: "/services/web-development/wordpress" },
    { label: "Shopify Development", href: "/services/web-development/shopify" },
    { label: "Custom Landing Pages", href: "/services/web-development/landing-page" },
    { label: "Website Maintenance", href: "/services/web-development/maintenance" },
    { label: "SEO Website Migration", href: "/services/seo/website-migration" },
  ]},
  { category: "Social Media", items: [
    { label: "Social Media Marketing", href: "/services/social-media" },
    { label: "Instagram Marketing", href: "/services/social-media/instagram" },
    { label: "Facebook Marketing", href: "/services/social-media/facebook" },
    { label: "LinkedIn Marketing", href: "/services/social-media/linkedin" },
    { label: "YouTube Marketing", href: "/services/social-media/youtube" },
    { label: "Pinterest Marketing", href: "/services/social-media/pinterest" },
    { label: "Graphic Design", href: "/services/content/graphic-design" },
  ]},
  { category: "Content & Email", items: [
    { label: "Content Marketing", href: "/services/content" },
    { label: "Content Writing", href: "/services/content/writing" },
    { label: "Email Marketing", href: "/services/content/email-marketing" },
  ]},
  { category: "Paid Advertising", items: [
    { label: "Online Advertising", href: "/services/paid-ads" },
    { label: "Google Ads", href: "/services/paid-ads/google-ads" },
    { label: "Meta Ads", href: "/services/paid-ads/meta-ads" },
    { label: "LinkedIn Ads", href: "/services/paid-ads/linkedin-ads" },
    { label: "Pinterest Ads", href: "/services/paid-ads/pinterest-ads" },
  ]},
  { category: "Consultancy", items: [
    { label: "Digital Consultancy", href: "/services/consultancy" },
    { label: "SEO Consultancy", href: "/services/seo/consultancy" },
    { label: "Business Growth Consultancy", href: "/services/consultancy/business-growth" },
    { label: "Organic Growth Consultancy", href: "/services/consultancy/organic-growth" },
    { label: "Social Media Consultancy", href: "/services/social-media/consultancy" },
  ]},
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our"
        subtitle="Services"
        breadcrumbs={[{ label: 'Services', active: true }]}
      />

      {/* ── Hero content ── */}
      <div className="services-hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="section-title">
                <h3>Digital Marketing Services India</h3>
                <h2 data--delay="0.2s">
                  Services Built to <span>Drive Real Growth</span>
                </h2>
                <p data--delay="0.3s">
                  Where SEO meets performance — we drive rankings, traffic, leads, and revenue through data-driven digital marketing strategies tailored to your business goals.
                </p>
                <div className="services-hero-points " data--delay="0.4s">
                  <div className="services-hero-point">
                    <i className="fa-solid fa-chart-line"></i>
                    <div>
                      <strong>Results you can measure.</strong>
                      <p>Every campaign is tracked, every metric reported — full transparency from day one.</p>
                    </div>
                  </div>
                  <div className="services-hero-point">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <div>
                      <strong>From rankings to revenue.</strong>
                      <p>We connect organic visibility directly to your bottom line — not just vanity metrics.</p>
                    </div>
                  </div>
                  <div className="services-hero-point">
                    <i className="fa-solid fa-bullseye"></i>
                    <div>
                      <strong>Strategy before execution.</strong>
                      <p>Every campaign begins with deep audience research, competitor analysis, and a growth roadmap.</p>
                    </div>
                  </div>
                  <div className="services-hero-point">
                    <i className="fa-solid fa-shield-halved"></i>
                    <div>
                      <strong>No lock-in. No fluff.</strong>
                      <p>Flexible engagement models with honest reporting and real deliverables every month.</p>
                    </div>
                  </div>
                </div>
                <div data--delay="0.6s" style={{marginTop: '1.5rem'}}>
                  <Link href="/contact-us" className="btn-default">Get a Free Strategy Session</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="services-hero-image " data--delay="0.2s">
                <img
                  src="/images/services/seo-growth-infographic.png"
                  alt="Rank Spiders 4-pillar SEO optimization framework — AI-powered SEO, content-led optimization, performance-first technical SEO, and data-backed growth measurement for digital marketing services India"
                  title="Rank Spiders Digital Marketing Growth Framework"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why us stats strip ── */}
      <div className="services-stats-section">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { value: "500+", label: "Campaigns Delivered", icon: "fa-solid fa-rocket" },
              { value: "95%", label: "Client Retention Rate", icon: "fa-solid fa-handshake" },
              { value: "120K+", label: "Keywords Ranked", icon: "fa-solid fa-magnifying-glass-chart" },
              { value: "3X", label: "Average Traffic Growth", icon: "fa-solid fa-arrow-trend-up" },
            ].map((stat, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="services-stat-card " data--delay={`${i * 0.1}s`}>
                  <i className={stat.icon}></i>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Growth framework ── */}
      <div className="services-framework-section">
        <div className="container">
          <div className="section-title text-center section-title-center ">
            <h3>How We Grow Your Business</h3>
            <h2>Our <span>4-Pillar Growth Framework</span></h2>
            <p>Every service we deliver is grounded in a proven methodology that connects your SEO investment to tangible business outcomes.</p>
          </div>
          <div className="row g-4 mt-2">
            {[
              {
                icon: "fa-solid fa-pen-nib",
                title: "Content-Led Optimization",
                desc: "Create valuable, user-focused content first. We build content strategies that attract qualified visitors, satisfy search intent, and convert your target audience — blog posts, landing pages, and pillar content that ranks and earns trust.",
                points: ["Intent-matched keyword strategy", "Pillar & cluster content architecture", "E-E-A-T signal building"],
              },
              {
                icon: "fa-solid fa-gauge-high",
                title: "Performance-First Technical SEO",
                desc: "Improve website speed and user experience at every level. Fast, crawlable, and technically sound websites rank higher, retain more visitors, and convert better — we fix the foundation so your content can perform.",
                points: ["Core Web Vitals optimization", "Crawl budget & indexation control", "Schema & structured data markup"],
              },
              {
                icon: "fa-solid fa-trophy",
                title: "Authority-Driven Content Structuring",
                desc: "Organize content to demonstrate expertise, authoritativeness, and trustworthiness. We build topical authority through internal linking, subject-matter depth, and content clustering that search engines and users both reward.",
                points: ["Topical authority mapping", "Internal link architecture", "Thought leadership content"],
              },
              {
                icon: "fa-solid fa-chart-bar",
                title: "Data-Backed Growth Measurement",
                desc: "Track SEO performance using analytics, rank tracking, and ROI metrics. Every decision is informed by real data — not guesswork — so you always know what's working, what's not, and what comes next.",
                points: ["Monthly ranking & traffic reports", "Conversion attribution tracking", "Competitor gap analysis"],
              },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="services-framework-card " data--delay={`${i * 0.1}s`}>
                  <div className="framework-icon"><i className={item.icon}></i></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <ul className="framework-card-points">
                    {item.points.map((pt, pi) => (
                      <li key={pi}><i className="fa-solid fa-check"></i>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured service cards ── */}
      <div className="services-featured-section">
        <div className="container">
          <div className="section-title text-center section-title-center ">
            <h3>What We Do</h3>
            <h2>Full-Service Digital Marketing <span>Under One Roof</span></h2>
            <p>From organic search to paid ads, from website builds to content strategy — we handle every channel your brand needs to grow online.</p>
          </div>

          <div className="row g-4 mt-2">
            {servicesList.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={service.link} className="services-feature-card " data--delay={`${index * 0.1}s`}>
                  <div className="services-feature-img">
                    <img src={service.image} alt={service.title} />
                    <div className="services-feature-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <div className="services-feature-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="services-feature-link">
                      Explore service <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Full service directory ── */}
      <div className="services-directory-section">
        <div className="container">
          <div className="section-title text-center section-title-center ">
            <h3>Complete Service List</h3>
            <h2>Every Service We <span>Offer</span></h2>
          </div>

          <div className="row g-4 mt-2">
            {allServices.map((group, gi) => (
              <div key={gi} className="col-lg-4 col-md-6">
                <div className="services-dir-group " data--delay={`${gi * 0.1}s`}>
                  <h4 className="services-dir-category">{group.category}</h4>
                  <ul className="services-dir-list">
                    {group.items.map((item, ii) => (
                      <li key={ii}>
                        <Link href={item.href}>
                          <i className="fa-solid fa-chevron-right"></i>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services FAQ ── */}
      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title text-center section-title-center ">
            <h3>Common Questions</h3>
            <h2>Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="faq-accordion" id="services-accordion">
            {[
              {
                q: "1. What digital marketing services does Rank Spiders offer?",
                a: "Rank Spiders offers a complete suite of digital marketing services including SEO (technical, local, ecommerce, AI, SaaS, WordPress, B2B), web design and development, social media marketing, paid advertising (Google Ads, Meta Ads, LinkedIn Ads), content marketing, email marketing, graphic design, and digital marketing consultancy — all under one roof in India."
              },
              {
                q: "2. How long does it take to see results from digital marketing?",
                a: "Results vary by channel. SEO typically shows measurable improvements in organic traffic and rankings within 3–6 months, with compounding growth thereafter. Paid advertising (Google Ads, Meta Ads) can drive traffic and leads within days of launch. Social media and content marketing build audience trust over 2–4 months. We set realistic timelines upfront and share monthly progress reports so you always know where things stand."
              },
              {
                q: "3. Do you work with small businesses and startups?",
                a: "Yes. We work with businesses of all sizes — from local small businesses and early-stage startups to mid-market companies and established enterprises. Our affordable SEO and digital marketing packages are designed to deliver maximum ROI at every budget level, with strategies tailored to your growth stage and industry."
              },
              {
                q: "4. How does Rank Spiders measure campaign success?",
                a: "We measure success through metrics that matter to your business — organic traffic growth, keyword rankings, lead volume, conversion rates, cost-per-lead, and revenue attributed to digital channels. We use Google Analytics, Search Console, rank tracking tools, and custom dashboards to deliver transparent monthly reports with clear insights and next steps."
              },
              {
                q: "5. Can I choose only one service, or do I need to buy a package?",
                a: "You can engage us for a single service (e.g., SEO only, or Google Ads only) or a multi-channel bundle. Most clients start with one primary service and expand as results build confidence. We don't push unnecessary services — we recommend only what aligns with your specific business goals and budget."
              },
              {
                q: "6. What makes Rank Spiders different from other digital marketing agencies in India?",
                a: "Rank Spiders combines deep technical SEO expertise with AI-driven insights, content strategy, and paid media — all in one agency. Unlike generalist agencies, we specialize in data-backed growth with full transparency: you get dedicated account managers, no vanity reporting, and strategies built around your revenue goals, not just traffic numbers."
              },
              {
                q: "7. Do you offer services for international clients (UK, Australia, USA)?",
                a: "Yes. We serve clients across India (Chandigarh, Mohali, Delhi, Punjab) and internationally in the UK, Australia, USA, and Canada. Our SEO strategies are adapted to each target market's search behavior, competition, and local intent — ensuring you rank where your customers actually search."
              },
              {
                q: "8. How do I get started with Rank Spiders?",
                a: "Getting started is simple. Book a free consultation or strategy session — our experts will review your current digital presence, identify gaps, and recommend the right services for your goals. There's no obligation and no sales pressure. Just honest advice from people who genuinely care about your growth."
              },
            ].map((faq, i) => (
              <ServicesAccordion key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="services-cta-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 ">
              <div className="section-title">
                <h3>Not sure where to start?</h3>
                <h2>Get a Free <span>Strategy Session</span></h2>
                <p>Tell us about your business and goals. We&apos;ll recommend the right channels, set realistic expectations, and show you what growth looks like for your industry.</p>
              </div>
              <div className="services-cta-btn " data--delay="0.2s">
                <Link href="/contact-us" className="btn-default">Book Free Consultation</Link>
                <Link href="/free/seo-audit" className="services-cta-secondary">Get Free SEO Audit <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-6 " data--delay="0.2s">
              <div className="services-cta-trust">
                {[
                  { icon: "fa-solid fa-clock", title: "Response within 24 hours", desc: "Submit your enquiry and we'll get back with a tailored plan — no automated replies." },
                  { icon: "fa-solid fa-shield-halved", title: "Zero commitment required", desc: "The strategy session is completely free. No hard sell, no lock-in, no credit card." },
                  { icon: "fa-solid fa-comments", title: "Honest, jargon-free advice", desc: "We tell you what will actually work for your business — not what earns us the highest fee." },
                  { icon: "fa-solid fa-ranking-star", title: "Proven track record", desc: "500+ campaigns delivered with a 95% client retention rate — results you can verify." },
                ].map((t, i) => (
                  <div key={i} className="services-cta-trust-item">
                    <div className="services-cta-trust-icon">
                      <i className={t.icon}></i>
                    </div>
                    <div>
                      <h4>{t.title}</h4>
                      <p>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function WordpressSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why is WordPress a strong platform for SEO?",
      answer: "WordPress gives you complete control over every SEO-critical element: URL structures, metadata, heading hierarchy, schema markup, XML sitemaps, robots.txt, redirects, and page speed configurations. Unlike proprietary website builders that restrict what you can change, WordPress lets SEO specialists optimize everything at the code level. Combined with plugins like Yoast SEO and RankMath, a properly configured WordPress site can match the technical SEO quality of enterprise-level custom builds — at a fraction of the cost."
    },
    {
      id: 2,
      question: "2. Which SEO plugins do you work with?",
      answer: "We work with all major WordPress SEO plugins — Yoast SEO, RankMath, and All in One SEO Pack. Each has different strengths: Yoast is the most established with excellent redirect management; RankMath provides more granular keyword tracking and schema options; All in One SEO Pack suits simpler sites. We configure whichever plugin is already installed (or recommend the best fit for your setup), write optimized metadata for every key page, and ensure the plugin configuration doesn't conflict with your theme, CDN, or caching stack."
    },
    {
      id: 3,
      question: "3. How do you handle WordPress speed optimization for SEO?",
      answer: "Page speed is a confirmed Google ranking factor and a critical user experience signal. Our WordPress speed optimization process covers: hosting and server configuration review, caching setup (WP Rocket, W3 Total Cache, or LiteSpeed), image compression and WebP conversion, database cleanup and optimization, CSS and JavaScript minification, render-blocking resource elimination, CDN configuration (Cloudflare, BunnyCDN), and lazy loading implementation. We measure and target green Core Web Vitals scores — particularly Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP)."
    },
    {
      id: 4,
      question: "4. Can you optimize WooCommerce products as part of WordPress SEO?",
      answer: "Yes, and it&apos;s one of our strongest capabilities. WooCommerce SEO requires a different approach from standard WordPress SEO — product pages need keyword-optimized titles and descriptions, product schema markup for rich snippets (price, availability, ratings), category page optimization, faceted navigation management to avoid crawl traps, and shopping feed optimization for Google Merchant Center. We also handle duplicate content issues common in WooCommerce stores from variation pages and filtered URLs. If you run a WooCommerce store, we treat it as a specialized e-commerce SEO engagement within the WordPress context."
    },
    {
      id: 5,
      question: "5. How long does WordPress SEO take to show results?",
      answer: "Most WordPress sites see measurable ranking improvements within 60–90 days for targeted keywords, with significant organic traffic growth visible at the 4–6 month mark. The timeline depends on your domain age, current technical health, content depth, and competitive landscape. Sites with significant technical SEO debt (crawl errors, slow page speed, missing metadata) often see quick wins within the first month after we implement fixes. New or low-authority domains take longer as link building and content authority accumulate — typically 6–12 months for competitive keywords."
    },
    {
      id: 6,
      question: "6. Do you handle WordPress security as part of SEO?",
      answer: "Yes, because security directly impacts SEO. Google immediately flags and deindexes hacked websites — often showing a 'This site may be hacked' warning in search results that devastates click-through rates. Our WordPress security review covers: malware scanning, login protection hardening, file permission audits, plugin vulnerability assessment, SSL certificate verification, and security header configuration. We also ensure your security setup doesn't interfere with Googlebot crawling, which some aggressive security plugins can accidentally block."
    },
    {
      id: 7,
      question: "7. Do you create content as part of WordPress SEO services?",
      answer: "Yes. Content is the engine of organic growth, and a technical SEO foundation alone won&apos;t rank a site without strong, relevant content. Our content services include: keyword research and content gap analysis, pillar page creation, topic cluster planning and execution, blog content calendar management, existing content optimization and refreshing, and internal linking structure development. All content is written by specialist SEO copywriters — not AI-generated — and reviewed for search intent alignment, entity coverage, and readability before publication."
    },
    {
      id: 8,
      question: "8. How much do your WordPress SEO services cost?",
      answer: "WordPress SEO pricing varies based on website size, competitive landscape, content volume required, and engagement scope. We offer flexible monthly retainer plans for ongoing SEO management, as well as one-time project engagements for technical audits, plugin configuration, and content sprints. The best way to get accurate pricing is to request a Free SEO Audit — it shows us exactly what your site needs, which allows us to quote a scope that matches your goals and budget without unnecessary extras."
    },
  ];

  return (
    <>
      <PageHeader
        title="WordPress"
        subtitle="SEO Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'WordPress SEO', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/services/seo/wordpress-seo-banner.png"
                      alt="WordPress SEO Agency India — WordPress Flexibility is Your SEO Superpower — Yoast SEO, RankMath, Core Web Vitals, technical SEO, WooCommerce SEO — Rank Spiders"
                      title="WordPress SEO Agency India — Rank Spiders Expert WordPress Optimization"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">
                    WordPress powers over 43% of the internet — and when configured by experts, it&apos;s the most SEO-capable CMS available. Your WordPress website has the architecture to generate significant organic traffic, leads, and revenue. But SEO potential only converts to rankings when every layer — technical health, on-page optimization, content depth, and authority — is actively managed.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    At Rank Spiders, our WordPress SEO agency India services cover the full spectrum: expert Yoast SEO and RankMath configuration, Core Web Vitals optimization, pillar content strategy, WooCommerce product page SEO, schema markup implementation, and white-hat link building. We don&apos;t just improve your rankings — we build an organic growth engine that compounds month over month.
                  </p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">WordPress Flexibility is <span>Your SEO Superpower</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Full-stack WordPress SEO — technical, content, and authority — built for long-term dominance in search rankings.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li><strong>Higher Google Rankings</strong> — expert WordPress on-page and technical SEO that closes ranking gaps fast</li>
                      <li><strong>Increased Organic Traffic</strong> — strategic keyword research targeting high-intent queries in your niche</li>
                      <li><strong>Faster Website Performance</strong> — Core Web Vitals optimization: LCP, CLS, and INP improvements for both rankings and UX</li>
                      <li><strong>Expert Plugin Configuration</strong> — Yoast SEO and RankMath set up correctly to maximize metadata, sitemaps, and breadcrumbs</li>
                      <li><strong>Better User Experience</strong> — mobile-first design principles and page speed improvements that reduce bounce rate</li>
                      <li><strong>WooCommerce SEO</strong> — product page, category page, and shopping feed optimization for e-commerce stores</li>
                      <li><strong>Schema & Structured Data</strong> — FAQ schema, product schema, review schema, and breadcrumb schema for rich snippets</li>
                      <li><strong>Sustainable Business Growth</strong> — compound organic traffic gains that reduce your cost-per-acquisition over time</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Technical WordPress SEO</h3>
                        <p>Speed optimization, security hardening, crawlability improvements, Yoast/RankMath configuration, XML sitemaps, robots.txt, and structured data for maximum search engine performance</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Content & Authority Strategy</h3>
                        <p>Pillar pages, topic clusters, internal linking architecture, and targeted link building that establishes topical authority and drives compounding organic traffic growth</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-3.jpg" alt="Advanced technical WordPress SEO and web development expertise — Rank Spiders India" title="Technical WordPress SEO Execution — Rank Spiders" loading="lazy" />
                      </figure>
                    </div>
                  </div>

                  {/* What We Optimize */}
                  <div className="service-growth-box wow fadeInUp" data-wow-delay="0.2s">
                    <h2>What We Optimize in Your <span>WordPress Website</span></h2>
                    <div className="service-growth-body">
                      <div className="service-growth-item-list">
                        {[
                          { icon: "fa-solid fa-gear", title: "Technical SEO Foundation", desc: "We audit and fix crawl errors, broken redirects, XML sitemap issues, robots.txt configuration, HTTPS security, and canonical tag implementation — the structural foundations that must be correct before any other SEO work compounds." },
                          { icon: "fa-solid fa-gauge-high", title: "Page Speed & Core Web Vitals", desc: "We optimize hosting configuration, caching (WP Rocket, W3 Total Cache), image compression, database cleanup, CDN setup, and eliminate render-blocking resources — targeting green Core Web Vitals scores across mobile and desktop." },
                          { icon: "fa-solid fa-pen-to-square", title: "On-Page SEO & Metadata", desc: "Every page receives optimized title tags, meta descriptions, H1/H2 hierarchy, keyword density, internal links, and image alt text — configured through Yoast SEO or RankMath with full schema markup for rich snippet eligibility." },
                          { icon: "fa-solid fa-link", title: "Authority & Link Building", desc: "We build high-quality backlinks through digital PR, niche-relevant guest posts, and resource link acquisition — steadily increasing your domain authority and competitive ranking power in your industry." },
                        ].map((item, i) => (
                          <div key={i} className="service-growth-item">
                            <h3><i className={item.icon} style={{marginRight: '8px', color: 'var(--accent-color)'}}></i>{item.title}</h3>
                            <p>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-belief">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-belief-content">
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">Our Belief</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">WordPress Flexibility is <span>Your SEO Superpower</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">The world's most popular CMS is also the most SEO-powerful—when configured correctly by experts who know how.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values — WordPress SEO agency India, Yoast SEO, RankMath, technical WordPress optimization, sustainable organic growth" title="Rank Spiders WordPress SEO Core Values" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>
          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item wow fadeInUp">
                <h2 className="accordion-header">
                  <button className={`accordion-button ${openFaq === faq.id ? '' : 'collapsed'}`} type="button" onClick={() => toggleFaq(faq.id)}>
                    {faq.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openFaq === faq.id ? 'show' : ''}`}>
                  <div className="accordion-body"><p>{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

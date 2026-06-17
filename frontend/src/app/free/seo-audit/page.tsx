'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';
import FreeAuditClient from './FreeAuditClient';

export default function FreeSeoAudit() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is included in Rank Spiders' Free SEO Audit?",
      answer: "Our Free SEO Audit covers 10+ critical areas of your website's performance: technical SEO health (crawlability, indexation, site speed, Core Web Vitals), on-page optimization (title tags, meta descriptions, H1/H2 structure, keyword usage), content quality and keyword gap analysis, backlink profile overview, mobile usability, image optimization, schema markup presence, internal linking structure, competitor visibility comparison, and actionable prioritized recommendations. You receive a clear report — not a raw data dump — with specific fixes ordered by impact."
    },
    {
      id: 2,
      question: "2. How can a Free SEO Audit help my business grow online?",
      answer: "Most websites have 15–30 fixable issues directly limiting their organic rankings and traffic. A Free SEO Audit from Rank Spiders surfaces those issues with clarity — whether it's slow page speed killing your bounce rate, missing keywords leaving money on the table, or technical crawl errors preventing Google from indexing your pages. By uncovering these hidden blockers, the audit gives your business a roadmap to higher rankings, more qualified traffic, and ultimately more leads and revenue — without guessing where to invest."
    },
    {
      id: 3,
      question: "3. Is the Free SEO Audit suitable for small and local businesses?",
      answer: "Absolutely. The Free SEO Audit is especially valuable for small businesses and local brands because these businesses often have the most to gain from basic fixes. We pay particular attention to local SEO signals — Google Business Profile optimization, local keyword presence, NAP (Name, Address, Phone) consistency, and local citation health — which directly impact how you appear in 'near me' searches and Google Maps results in your city."
    },
    {
      id: 4,
      question: "4. How is Rank Spiders' SEO Audit different from free automated tools?",
      answer: "Free automated tools like Screaming Frog, Ahrefs Site Audit, or SEMrush generate raw data lists — but they can't interpret what matters for your specific business, industry, or competitors. Rank Spiders delivers a human-reviewed, insight-driven audit: our SEO experts analyze the data, filter out noise, prioritize what will actually move the needle, and explain findings in plain language. You get actionable recommendations tailored to your goals — not a 200-page report full of technical jargon."
    },
    {
      id: 5,
      question: "5. How long does a Free SEO Audit take to complete?",
      answer: "Most Free SEO Audits are completed and delivered within 24–48 business hours after you submit your website URL. For larger websites (500+ pages) or sites with complex technical architectures, it may take up to 72 hours to ensure thoroughness. We prioritize quality over speed — every audit is reviewed by a human SEO specialist before delivery."
    },
    {
      id: 6,
      question: "6. Do I need to share login credentials or website access for the audit?",
      answer: "No. The Free SEO Audit requires only your website URL. We conduct the analysis externally using professional SEO tools and crawlers. No login, no admin access, and no sensitive data is ever required at this stage. If you later engage us for a full SEO campaign, we may request read-only Google Analytics and Search Console access to deepen our analysis — but that's entirely optional and separate."
    },
    {
      id: 7,
      question: "7. What happens after I receive my Free SEO Audit report?",
      answer: "After you receive your Free SEO Audit, one of our SEO experts will walk you through the findings in a short consultation call (optional but recommended). We explain the impact of each issue in plain language, answer your questions, and outline what a full SEO campaign would look like for your site. There's no obligation to hire us — the audit is genuinely free. If you choose to work with us, we'll build a custom SEO strategy based directly on what the audit revealed."
    },
    {
      id: 8,
      question: "8. Is the Free SEO Audit really free — are there any hidden charges?",
      answer: "Yes, it is completely free with no hidden charges, no credit card required, and no automatic enrolment into any paid plan. Rank Spiders offers the Free SEO Audit as a genuine service to help businesses understand their SEO health. We believe in earning your trust with value before asking for your business. The only 'cost' is 2 minutes of your time to fill out a short form with your website URL and business goals."
    },
  ];

  return (
    <>
      <div className="screen-only">
        <PageHeader
          title="Free"
          subtitle="Seo Audit"
          breadcrumbs={[
            { label: 'Seo Optimization', href: '/services/seo' },
            { label: 'Free Seo Audit', active: true }
          ]}
        />
      </div>

      <FreeAuditClient />

      <div className="screen-only page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-entry">
                  {/* Banner */}
                  <div className="service-banner-image ">
                    <figure className="image-anime reveal">
                      <img
                        src="/images/free/seo-audit-banner.png"
                        alt="Free SEO Audit India — Find. Fix. Grow. — Keyword insights, technical SEO, on-page SEO, backlink analysis, site speed — Rank Spiders free website SEO analysis"
                        title="Free SEO Audit by Rank Spiders — Find Hidden Growth Opportunities"
                        loading="lazy"
                      />
                    </figure>
                  </div>

                  <h2 data--delay="0.1s">
                    Discover Hidden Growth Opportunities with a <span>Free SEO Audit</span>
                  </h2>
                  <p data--delay="0.2s">
                    Your website could be missing valuable traffic, leads, and revenue without you even realizing it. Most websites have 15–30 fixable issues directly limiting their organic rankings. Our Free SEO Audit uncovers those hidden blockers and untapped opportunities — so you know exactly what&apos;s holding your business back from higher search rankings and sustainable growth.
                  </p>
                  <p data--delay="0.3s">
                    At Rank Spiders, our SEO specialists perform a comprehensive, human-reviewed analysis of your website — not just an automated data dump. We identify technical errors, keyword gaps, content weaknesses, page speed issues, mobile usability concerns, and competitor advantages. You receive a clear, prioritized report with specific actions that actually move the needle.
                  </p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">What Your Free SEO Audit <span>Will Cover</span></h2>
                    <ul data--delay="0.6s">
                      <li><strong>Technical SEO Health</strong> — crawlability, indexation errors, broken links, redirect chains, HTTPS security</li>
                      <li><strong>Page Speed & Core Web Vitals</strong> — LCP, CLS, INP scores and what&apos;s causing slowdowns</li>
                      <li><strong>On-Page Optimization</strong> — title tags, meta descriptions, H1/H2 structure, keyword density and placement</li>
                      <li><strong>Keyword Gap Analysis</strong> — high-value search terms your competitors rank for that you&apos;re missing</li>
                      <li><strong>Content Quality Review</strong> — thin pages, duplicate content, intent mismatches, and content opportunities</li>
                      <li><strong>Backlink Profile Overview</strong> — domain authority, toxic links, and quick link-building wins</li>
                      <li><strong>Mobile Usability</strong> — tap targets, viewport configuration, and mobile-first indexing readiness</li>
                      <li><strong>Schema & Structured Data</strong> — whether you&apos;re eligible for rich snippets (FAQ, review, product)</li>
                      <li><strong>Internal Linking Structure</strong> — page authority distribution and crawl depth issues</li>
                      <li><strong>Competitor Visibility Snapshot</strong> — where your top 3 competitors outrank you and why</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="0.8s">
                      <div className="strategy-body-item">
                        <h3>Technical SEO Audit Specialists</h3>
                        <p>Certified experts analyzing site speed, crawl errors, indexation, Core Web Vitals, and structured data issues that silently block your rankings</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Content & Keyword Audit Experts</h3>
                        <p>Evaluating keyword gaps, search intent alignment, on-page optimization quality, and content depth — the factors Google actually rewards</p>
                      </div>
                    </div>
                  </div>

                  {/* Process section */}
                  <div className="service-growth-box " data--delay="0.2s">
                    <h2>How Our Free SEO Audit <span>Process Works</span></h2>
                    <p data--delay="0.2s">
                      Getting your Free SEO Audit is simple, fast, and completely commitment-free. Here&apos;s what happens when you submit your URL:
                    </p>
                    <div className="service-growth-body">
                      <div className="service-growth-item-list">
                        {[
                          { step: "Step 1", title: "Submit Your URL", desc: "Fill out a short form with your website URL, target location, and primary business goal. Takes under 2 minutes." },
                          { step: "Step 2", title: "We Crawl & Analyze", desc: "Our SEO tools crawl your site and our specialists review the data across 10+ performance categories within 24–48 hours." },
                          { step: "Step 3", title: "You Receive Your Report", desc: "We deliver a clear, prioritized audit report with findings explained in plain English and actions ranked by impact." },
                          { step: "Step 4", title: "Free Consultation Call", desc: "Optionally, our SEO expert walks you through the findings, answers questions, and outlines your growth roadmap — no obligation." },
                        ].map((s, i) => (
                          <div key={i} className="service-growth-item">
                            <h3><span style={{color: 'var(--accent-color)', marginRight: '6px'}}>{s.step}:</span>{s.title}</h3>
                            <p>{s.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Benefits section */}
                  <div className="service-growth-box " data--delay="0.2s">
                    <h2>6 Business Benefits of a <span>Free SEO Audit</span></h2>
                    <div className="service-growth-body">
                      <div className="service-growth-item-list">
                        {[
                          { icon: "fa-solid fa-ranking-star", label: "Improve Search Rankings", desc: "Identify and fix the specific technical and on-page issues preventing your pages from reaching top positions in Google — with a clear fix list ordered by ranking impact." },
                          { icon: "fa-solid fa-users", label: "Increase Organic Traffic", desc: "Uncover high-value keyword opportunities your competitors are capturing that you&apos;re missing — free website SEO analysis reveals where qualified visitors are going instead of your site." },
                          { icon: "fa-solid fa-magnet", label: "Generate More Qualified Leads", desc: "Better rankings for the right keywords bring visitors who are already looking to buy. Turn search visibility into a consistent, predictable pipeline of leads and enquiries." },
                          { icon: "fa-solid fa-gauge-high", label: "Enhance Website Performance", desc: "Fix page speed issues, Core Web Vitals failures, and mobile usability gaps — improvements that directly impact both your rankings and how many visitors stay long enough to convert." },
                          { icon: "fa-solid fa-trophy", label: "Gain Competitive Advantage", desc: "See exactly where your top competitors outrank you, which keywords they&apos;re dominating, and what backlinks they have that you don&apos;t — then build a strategy to close the gap." },
                          { icon: "fa-solid fa-chart-line", label: "Maximize Marketing ROI", desc: "Stop spending on ads to compensate for poor organic visibility. The audit identifies your highest-ROI SEO opportunities so every marketing rupee goes where it will have the most impact." },
                        ].map((b, i) => (
                          <div key={i} className="service-growth-item">
                            <h3><i className={b.icon} style={{marginRight: '8px', color: 'var(--accent-color)'}}></i>{b.label}</h3>
                            <p>{b.desc}</p>
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

      <div className="screen-only container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 data-cursor="-opaque">Frequently asked <span>question</span></h2>
          </div>

          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item ">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${openFaq === faq.id ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openFaq === faq.id ? 'show' : ''}`}>
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

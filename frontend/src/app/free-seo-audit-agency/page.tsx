'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function FreeSeoAudit() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is included in Rank Spiders' Free SEO Audit?",
      answer: "Rank Spiders' Free SEO Audit Services provide a detailed review of your website's technical health, content quality, keyword alignment and overall search visibility."
    },
    {
      id: 2,
      question: "2. How can a Free SEO Audit help my business grow online?",
      answer: "A Free SEO Audit from Rank Spiders helps identify hidden issues that block rankings and traffic growth. By uncovering technical errors and content gaps, our audit enables smarter SEO decisions."
    },
    {
      id: 3,
      question: "3. Is the Free SEO Audit suitable for small and local businesses?",
      answer: "Yes. Rank Spiders' Free SEO Audit Services are ideal for small, local and growing businesses. We focus heavily on local SEO audit services to help brands improve visibility."
    },
    {
      id: 4,
      question: "4. How is Rank Spiders' SEO Audit different from automated audit tools?",
      answer: "Unlike automated tools that generate generic reports, Rank Spiders provides a human-led, insight-driven SEO audit."
    },
    {
      id: 5,
      question: "5. What happens after I receive my Free SEO Audit report?",
      answer: "After delivering your Free SEO Audit, Rank Spiders walks you through the findings and explains the impact of each issue in simple terms."
    }
  ];

  return (
    <>
      <PageHeader
        title="Free"
        subtitle="Seo Audit"
        breadcrumbs={[
          { label: 'Seo Optimization', href: '/seo-agency-india' },
          { label: 'Free Seo Audit', active: true }
        ]}
      />
      <ScrollingTicker />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-entry">
                  <h3 className="wow fadeInUp">Discover Hidden Growth Opportunities with a Free SEO Audit</h3>
                  <p className="wow fadeInUp">Get a clear view of how your website performs in search with a comprehensive Free SEO Audit.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Identify SEO Issues Limiting Rankings<span> and Organic Growth</span></h2>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Website performance and technical SEO health</li>
                      <li>Search visibility and keyword gap analysis</li>
                      <li>On-page and content optimization insights</li>
                      <li>Actionable recommendations for measurable growth</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Technical SEO Audit Specialists</h3>
                        <p>Experts analyzing site speed, structure, indexing, and crawlability issues</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Content & Keyword Audit Experts</h3>
                        <p>Evaluating relevance, intent alignment, and content gaps impacting rankings</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-2.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>question</span></h2>
          </div>

          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item wow fadeInUp">
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

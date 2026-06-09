'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function OnlineAdvertisingAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What online advertising channels do you manage?",
      answer: "We manage paid advertising across Google Search & Display, Meta (Facebook & Instagram), LinkedIn, Pinterest, YouTube, and programmatic display. We recommend the right channel mix based on your audience, objectives, and budget."
    },
    {
      id: 2,
      question: "2. How do you ensure our ad budget isn't wasted?",
      answer: "Waste in paid advertising comes from poor targeting, weak creative, and inadequate conversion tracking. We address all three—building precise audience segments, creating compelling ad creative, and implementing robust conversion tracking before spending a rupee."
    },
    {
      id: 3,
      question: "3. What ROI can we expect from online advertising?",
      answer: "ROI varies by industry, competition, and campaign maturity. We benchmark your industry's typical CAC and ROAS, set realistic targets, and optimise relentlessly toward them. Most clients see significant ROAS improvements within 60–90 days of us taking over management."
    },
    {
      id: 4,
      question: "4. Do you manage the creative (ads, copy, visuals) as well?",
      answer: "Yes. Our full-service advertising management includes ad copy, creative briefs, and coordination with our design team for visual assets. We manage everything from strategy to execution so you don't have to juggle multiple vendors."
    },
    {
      id: 5,
      question: "5. How do you report on advertising performance?",
      answer: "We provide monthly performance reports covering spend, impressions, clicks, conversions, CPA, ROAS, and key optimisation actions taken. We also provide real-time dashboard access so you can check performance at any time."
    }
  ];

  return (
    <>
      <PageHeader
        title="Online"
        subtitle="Advertising Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Online Advertising', active: true }]}
      />
      <ScrollingTicker />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/project-marketing-image.jpg" alt="Online Advertising Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Online advertising is the fastest way to put your brand in front of your ideal customers—when done right. We manage multi-channel paid advertising campaigns that maximise every rupee of your budget, driving qualified traffic, leads, and revenue with measurable precision.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Advertising That <span>Delivers Measurable ROI</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Data-driven paid advertising management across every major digital channel.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Google & Meta Ads Management</li>
                      <li>Audience Targeting & Segmentation</li>
                      <li>Ad Creative Development</li>
                      <li>Conversion Tracking & Attribution</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Campaign Strategy & Setup</h3>
                        <p>Audience research, campaign architecture, and conversion tracking before any budget is spent.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Ongoing Optimisation</h3>
                        <p>Daily bid management, A/B testing, and creative refreshes that continuously improve ROAS.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-highlight-image.jpg" alt="" />
                      </figure>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Every Ad Should <span>Pay for Itself</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We don't spend your budget to generate impressions. Every campaign we run is optimised toward revenue and measurable business outcomes.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start advertising</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/sections/our-belief-image.png" alt="" />
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function GoogleAdsAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why is Google Ads the most powerful paid channel for most businesses?",
      answer: "Google Ads puts your brand in front of people actively searching for what you offer—capturing high-intent demand at the moment of decision. This search intent makes Google Ads consistently the highest-converting paid channel for lead generation and direct sales."
    },
    {
      id: 2,
      question: "2. What Google Ads campaign types do you manage?",
      answer: "We manage Search, Display, Shopping, Performance Max, Video (YouTube), and Demand Gen campaigns—selecting and combining the right types for your specific objectives, whether that's lead generation, e-commerce sales, brand awareness, or app installs."
    },
    {
      id: 3,
      question: "3. How do you reduce wasted spend in Google Ads?",
      answer: "Wasted spend comes from broad match keywords, poor negative keyword management, weak quality scores, and misaligned landing pages. We audit all four, implementing granular keyword targeting, comprehensive negative keyword lists, and landing page optimisation."
    },
    {
      id: 4,
      question: "4. What Quality Score improvements can we expect?",
      answer: "We focus on improving Quality Scores through tightly themed ad groups, highly relevant ad copy, and landing page alignment. Higher Quality Scores mean lower CPCs and better ad positions—more visibility for less spend."
    },
    {
      id: 5,
      question: "5. Do you manage Google Shopping for e-commerce?",
      answer: "Yes. We manage Google Shopping and Performance Max campaigns for e-commerce—including product feed optimisation, bidding strategy management, and Shopping campaign segmentation to maximise ROAS across your catalogue."
    }
  ];

  return (
    <>
      <PageHeader
        title="Google Ads"
        subtitle="Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Google Ads', active: true }]}
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
                    <img src="/images/project-marketing-image.jpg" alt="Google Ads Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Google Ads is the world's most powerful intent-based advertising platform. We manage Google Ads campaigns that capture high-intent search demand, maximise quality scores, and turn clicks into customers—with every rupee tracked and optimised for maximum return.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Google Ads That <span>Capture Ready Buyers</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Search, Shopping, Display, and YouTube—managed with precision to maximise your ROAS.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Search Campaign Management</li>
                      <li>Google Shopping & Performance Max</li>
                      <li>Quality Score Optimisation</li>
                      <li>Conversion Tracking & Attribution</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Campaign Architecture</h3>
                        <p>Tightly themed ad groups, granular keyword targeting, and comprehensive negative keyword strategy.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Bid & Budget Optimisation</h3>
                        <p>Smart bidding strategies aligned to your goals, continuously refined using conversion data.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/project-highlight-image.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Intent + Precision = <span>Profitable Growth</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Google Ads rewards precision. We build campaigns that are specific enough to be profitable from the first month and scalable enough to grow with your ambition.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">launch your campaign</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/our-belief-image.png" alt="" />
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

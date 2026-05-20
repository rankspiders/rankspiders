'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    { id: 1, question: "1. What is digital marketing, & help my business?", answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness." },
    { id: 2, question: "2. How do you measure success in a campaign?", answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness." },
    { id: 3, question: "3. Can you help with both SEO and paid ads?", answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness." },
    { id: 4, question: "4. Is there a contract or long-term commitment?", answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness." }
  ];

  return (
    <>
      <PageHeader
        title="Social media"
        subtitle="marketing"
        breadcrumbs={[{ label: 'services', href: '/services' }, { label: 'Social media marketing', active: true }]}
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
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/service-single-image.jpg" alt="" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Our social media marketing strategies are designed to amplify your brand's voice, connect with your audience on a deeper level, and spark meaningful engagement.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp">Boost your brand <span>with strategy</span></h2>
                    <ul className="wow fadeInUp">
                      <li>Customized Campaigns for Maximum Impact</li>
                      <li>Cross-Platform Presence with Consistency</li>
                      <li>Target Audience Engagement that Converts</li>
                      <li>Measurable Growth Through Data Insights</li>
                    </ul>
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
            <h2 className="wow fadeInUp">Frequently asked <span>question</span></h2>
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

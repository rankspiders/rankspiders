'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function OrganicGrowthConsultancyAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What is organic growth consultancy?",
      answer: "Organic growth consultancy focuses on growing your business through non-paid channels—SEO, content marketing, social media, email, and word-of-mouth. We build strategies that compound over time, reducing your dependency on paid advertising and creating sustainable, lower-cost acquisition."
    },
    {
      id: 2,
      question: "2. How long does organic growth take?",
      answer: "Organic growth is a compounding investment—most businesses see meaningful results within 3–6 months and significant growth within 12 months. The advantage is that organic assets continue to deliver value indefinitely, unlike paid campaigns that stop when budgets stop."
    },
    {
      id: 3,
      question: "3. Which organic channels do you cover?",
      answer: "We build integrated organic growth strategies covering SEO (search), content marketing (educational and thought leadership content), organic social media, email marketing, and referral/partnership programmes—all aligned to compound each other's effect."
    },
    {
      id: 4,
      question: "4. How do you measure organic growth progress?",
      answer: "We track organic traffic growth, keyword ranking progression, domain authority, email list growth, social following and engagement, and most importantly—organic revenue and lead contribution. We focus on business outcomes, not vanity metrics."
    },
    {
      id: 5,
      question: "5. Can organic growth replace paid advertising entirely?",
      answer: "For many businesses, yes—especially in B2B and service sectors. Organic channels typically deliver 3–5× the ROI of paid advertising at scale. We help you build the organic foundation so you can choose how much you invest in paid ads rather than depending on them."
    }
  ];

  return (
    <>
      <PageHeader
        title="Organic Growth"
        subtitle="Consultancy Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Organic Growth Consultancy', active: true }]}
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
                    <img src="/images/sections/digital-advantage-img-1.jpg" alt="Organic Growth Consultancy Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Paid advertising rents your audience. Organic growth owns it. We specialise in building organic growth engines—combining SEO, content, social, and email into a compounding system that delivers more value with every month that passes.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Organic Growth That <span>Compounds Forever</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Non-paid channels, integrated strategy, compounding results—built for the long game.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>SEO & Content Strategy</li>
                      <li>Organic Social Media Growth</li>
                      <li>Email List Building & Nurture</li>
                      <li>Referral & Partnership Programmes</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Organic Channel Integration</h3>
                        <p>SEO, content, social, and email working together to amplify each channel's individual impact.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Compounding Growth System</h3>
                        <p>A framework where every asset you create and every relationship you build keeps working harder over time.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/approach-image.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">The Best Growth Channel <span>is the One You Own</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Organic channels—SEO, content, email, community—are the only marketing assets that belong to you. We help you build them intentionally.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start growing organically</Link>
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

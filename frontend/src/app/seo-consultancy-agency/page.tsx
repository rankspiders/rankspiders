'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function SeoConsultancyAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What does an SEO consultant actually do?",
      answer: "An SEO consultant audits your current organic performance, identifies why you're not ranking where you should be, and builds a clear prioritised strategy to close those gaps. We guide your team or agency on exactly what to fix and in what order."
    },
    {
      id: 2,
      question: "2. When should I hire an SEO consultant vs. a full SEO agency?",
      answer: "Consultancy is ideal when you have an internal team or existing agency that needs direction, when you want a second opinion on your current strategy, or when you need a specific SEO problem diagnosed without a full managed service commitment."
    },
    {
      id: 3,
      question: "3. What does an SEO audit from a consultant include?",
      answer: "Our SEO consultancy audit covers technical SEO health, crawlability, Core Web Vitals, content quality and gaps, backlink profile, keyword ranking analysis, competitor benchmarking, and a prioritised action plan with effort/impact scores."
    },
    {
      id: 4,
      question: "4. Can you work alongside our current SEO agency?",
      answer: "Yes. We often work as an independent SEO advisor alongside existing agencies—reviewing their work, identifying missed opportunities, and providing an objective performance assessment. This accountability layer often dramatically improves results."
    },
    {
      id: 5,
      question: "5. Do you provide training as part of SEO consultancy?",
      answer: "Yes. We offer SEO training workshops for marketing teams covering technical SEO fundamentals, content optimisation, keyword research, and performance measurement—building internal capability that reduces long-term agency dependency."
    }
  ];

  return (
    <>
      <PageHeader
        title="SEO"
        subtitle="Consultancy Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'SEO Consultancy', active: true }]}
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
                    <img src="/images/sections/digital-advantage-img-1.jpg" alt="SEO Consultancy Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Sometimes you don't need an agency to run your SEO—you need an expert to tell you exactly what's wrong and what to fix. Our SEO consultancy service provides deep diagnostic expertise and clear strategic direction, empowering your team to execute with confidence.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">SEO Expertise <span>On Demand</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Expert SEO diagnosis, strategy, and guidance—without the overhead of full managed services.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Comprehensive SEO Audits</li>
                      <li>Keyword & Content Strategy</li>
                      <li>Technical SEO Roadmaps</li>
                      <li>Agency & Team Advisory</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Diagnostic & Strategy</h3>
                        <p>Deep audits that identify exactly why you're not ranking—and a clear plan to change it.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Training & Capability</h3>
                        <p>SEO workshops and ongoing advisory that build internal expertise and reduce external dependency.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">The Right Diagnosis Beats <span>The Wrong Treatment</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Most SEO failures are execution failures born from strategic confusion. Clarity first—then confident execution—always wins.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get expert guidance</Link>
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

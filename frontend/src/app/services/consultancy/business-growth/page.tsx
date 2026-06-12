'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function BusinessGrowthConsultancyAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What is business growth consultancy?",
      answer: "Business growth consultancy combines digital marketing strategy with broader commercial thinking—helping you identify your highest-leverage growth opportunities, build systems that scale, and allocate resources to the channels and activities that will move the needle most."
    },
    {
      id: 2,
      question: "2. Who is business growth consultancy for?",
      answer: "It's ideal for founders and business owners who want to scale but feel unclear on the right marketing and growth strategy, for businesses that have plateaued and need fresh strategic thinking, and for companies entering new markets or launching new products."
    },
    {
      id: 3,
      question: "3. How do you approach growth strategy development?",
      answer: "We start with a deep business and market analysis—understanding your current performance, competitive position, target customers, and growth constraints. We then build a prioritised growth roadmap with clear metrics, timelines, and resource requirements."
    },
    {
      id: 4,
      question: "4. Do you help with both acquisition and retention growth?",
      answer: "Yes. Sustainable growth requires both. We build strategies that cover new customer acquisition through digital channels as well as retention, lifetime value optimisation, and referral mechanics—creating compounding growth rather than linear acquisition."
    },
    {
      id: 5,
      question: "5. How long does a typical business growth engagement last?",
      answer: "Initial strategy engagements typically run 4–8 weeks and deliver a comprehensive growth roadmap. Ongoing advisory retainers run monthly and provide continuous strategic support as you execute and iterate."
    }
  ];

  return (
    <>
      <PageHeader
        title="Business Growth"
        subtitle="Consultancy Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Business Growth Consultancy', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-1.jpg" alt="Business Growth Consultancy Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Business growth doesn't happen by accident. It's the result of clear strategy, disciplined execution, and the ability to identify your highest-leverage opportunities before your competitors do. We provide the strategic clarity and expert guidance to make that growth intentional and sustainable.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Growth Strategy Built for <span>Your Business Reality</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Practical growth strategies grounded in your market, your constraints, and your goals.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Business & Market Analysis</li>
                      <li>Growth Roadmap Development</li>
                      <li>Channel & Budget Strategy</li>
                      <li>Performance Framework Design</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Strategic Growth Planning</h3>
                        <p>A prioritised roadmap identifying your highest-ROI growth levers across acquisition and retention.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Ongoing Growth Advisory</h3>
                        <p>Monthly strategic sessions to review performance, solve problems, and keep momentum building.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/approach-image.jpg" alt="Rank Spiders strategic approach to digital marketing and business growth" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Intentional Growth Beats <span>Accidental Success</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">The businesses that scale consistently aren't the luckiest—they're the most strategically clear. We provide that clarity.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">plan your growth</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven digital marketing agency India" />
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

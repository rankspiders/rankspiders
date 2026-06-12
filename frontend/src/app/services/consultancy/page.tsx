'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function ConsultancyAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What does a digital marketing consultancy do?",
      answer: "A digital marketing consultancy provides expert strategic guidance on how to grow your business online. We audit your current digital presence, identify growth opportunities, and provide a clear, prioritised roadmap to achieve your marketing objectives."
    },
    {
      id: 2,
      question: "2. How is consultancy different from your managed services?",
      answer: "With consultancy, we provide strategy and guidance—you or your internal team execute. With managed services, we handle execution too. Many clients start with consultancy to build their team's capability, then retain us for ongoing execution."
    },
    {
      id: 3,
      question: "3. What does a digital marketing audit involve?",
      answer: "Our digital marketing audit covers SEO health, website performance, content quality, social media presence, paid advertising performance, email marketing, competitor positioning, and conversion rate analysis—delivered as a prioritised action report."
    },
    {
      id: 4,
      question: "4. How do you work with in-house marketing teams?",
      answer: "We act as an embedded strategic partner—providing direction, reviewing work, solving complex problems, and upskilling your team. We adapt to your team's structure and work at the level of involvement you need."
    },
    {
      id: 5,
      question: "5. Do you offer one-off strategy sessions or only ongoing retainers?",
      answer: "Both. We offer single strategy sessions for specific challenges, project-based consultancy for defined initiatives, and ongoing monthly retainers for businesses wanting continuous strategic support."
    }
  ];

  return (
    <>
      <PageHeader
        title="Digital Marketing"
        subtitle="Consultancy"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Consultancy', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-1.jpg" alt="Digital Marketing Consultancy" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Strategic clarity is the difference between marketing that compounds and marketing that wastes budget. Our digital marketing consultancy provides senior expertise to help you make smarter decisions, allocate resources more effectively, and achieve growth with confidence.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Strategy That <span>Turns Complexity Into Clarity</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Senior digital marketing expertise applied to your specific business challenges.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Comprehensive Digital Marketing Audits</li>
                      <li>Growth Strategy Development</li>
                      <li>Team Training & Capability Building</li>
                      <li>Channel Strategy & Budget Allocation</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Strategic Audit & Roadmap</h3>
                        <p>A clear picture of where you are, where you should go, and exactly how to get there.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Ongoing Strategic Support</h3>
                        <p>Monthly retainer access to senior digital expertise—available when you need expert guidance.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Strategy Without Execution <span>is Just Theory</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We provide strategies that are practical, prioritised, and built for real-world implementation—not just impressive-looking decks.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">book a consultation</Link>
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

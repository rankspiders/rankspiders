'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function GraphicDesignAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What graphic design services do you offer?",
      answer: "We offer a full range of graphic design services including brand identity design (logos, brand guidelines), social media graphics, digital ad creatives, infographics, email templates, and marketing collateral for both digital and print."
    },
    {
      id: 2,
      question: "2. Do you create brand identity packages from scratch?",
      answer: "Yes. Our brand identity service covers logo design, colour palette, typography selection, brand guidelines documentation, and all core brand assetsâ€”delivered as a complete, production-ready brand system."
    },
    {
      id: 3,
      question: "3. How do you ensure designs align with our marketing goals?",
      answer: "Every design brief starts with understanding your target audience, competitive landscape, and conversion goals. We design with purposeâ€”not just aestheticsâ€”ensuring every visual element supports your marketing objectives."
    },
    {
      id: 4,
      question: "4. What file formats do you deliver?",
      answer: "We deliver all final assets in the formats you needâ€”SVG, PNG, PDF, AI, EPS for logos and brand assets; optimised WebP/JPG/PNG for digital use; and print-ready PDFs for offline materials."
    },
    {
      id: 5,
      question: "5. Can you create social media graphics at scale?",
      answer: "Yes. We design template-based social media systems that your team can adapt and use consistently at scaleâ€”maintaining brand consistency while allowing content flexibility across platforms."
    }
  ];

  return (
    <>
      <PageHeader
        title="Graphic"
        subtitle="Design Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Graphic Design', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-2.jpg" alt="Graphic Design Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>Great design is silent persuasion. We create visual identities and marketing materials that communicate your brand's value at a glanceâ€”building recognition, trust, and desire across every touchpoint your audience encounters.</p>
                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Design That <span>Drives Recognition</span></h2>
                    <p data--delay="0.6s">Strategic visual design that builds brand equity and supports business growth.</p>
                    <ul data--delay="0.8s">
                      <li>Brand Identity & Logo Design</li>
                      <li>Social Media Graphics & Templates</li>
                      <li>Digital Ad Creatives</li>
                      <li>Marketing Collateral & Infographics</li>
                    </ul>
                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Brand Identity Design</h3>
                        <p>Logos, colour systems, and brand guidelines that create instant recognition across every channel.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Digital Marketing Creatives</h3>
                        <p>Ad creatives, social graphics, and email templates designed to stop the scroll and drive clicks.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Digital marketing team working on client SEO and social media campaigns" />
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
                  <h3>Our Belief</h3>
                  <h2 data--delay="0.2s" data-cursor="-opaque">Design is Not Decoration â€” <span>It is Communication</span></h2>
                  <p data--delay="0.4s">Every design decision should serve a purpose. We design with intentâ€”making every visual element work harder for your brand.</p>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start designing</Link>
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
            <h2 data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>
          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item ">
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

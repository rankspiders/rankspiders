'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function WordpressDevelopmentAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why choose WordPress for your business website?",
      answer: "WordPress powers 40%+ of the web for good reason—it's scalable, SEO-friendly, and gives you full content control without needing a developer for every change. We build WordPress sites that grow with your business."
    },
    {
      id: 2,
      question: "2. Do you build custom WordPress themes or use pre-built ones?",
      answer: "We build bespoke WordPress themes tailored to your brand. We avoid bloated page builders and over-engineered templates—every site we deliver is clean, fast, and purpose-built for your business goals."
    },
    {
      id: 3,
      question: "3. Can you migrate my existing website to WordPress?",
      answer: "Yes. We handle full WordPress migrations including content transfer, URL redirect mapping, and SEO preservation. We ensure your rankings and organic traffic are protected throughout the migration process."
    },
    {
      id: 4,
      question: "4. Do you provide WordPress training after launch?",
      answer: "Absolutely. We provide documentation and live training sessions so your team can manage content confidently. We want you to own your website—not depend on us for every update."
    },
    {
      id: 5,
      question: "5. Do you integrate WooCommerce for e-commerce?",
      answer: "Yes. We develop WooCommerce-powered stores as part of our WordPress development service—from product catalogue setup to payment gateway integration, with full SEO optimisation included."
    }
  ];

  return (
    <>
      <PageHeader
        title="WordPress"
        subtitle="Development Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'WordPress Development', active: true }]}
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
                    <img src="/images/digital-advantage-img-3.jpg" alt="WordPress Development Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">We build WordPress websites that are fast, secure, and built to rank. From bespoke theme development to complex plugin integrations, our WordPress development process is engineered for performance and long-term maintainability.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">WordPress Development <span>Done Right</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Custom builds, clean code, and zero bloat—WordPress the way it should be built.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Custom Theme Development</li>
                      <li>Plugin Development & Integration</li>
                      <li>WordPress Speed Optimisation</li>
                      <li>Security Hardening</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Custom Theme Development</h3>
                        <p>Brand-specific, performance-optimised themes with no unnecessary code or dependencies.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Plugin & Integration Work</h3>
                        <p>CRM integrations, custom post types, and WooCommerce configurations built to your spec.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/work-image-2.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Your Website Should Work <span>For You, Not Against You</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We build WordPress sites that your team can manage confidently and that search engines reward consistently.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get started</Link>
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

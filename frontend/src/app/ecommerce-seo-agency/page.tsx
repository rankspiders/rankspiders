'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function EcommerceSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What is e-commerce SEO and why does it matter?",
      answer: "E-commerce SEO optimises product pages, category pages, and site architecture so shoppers find your store organically. It reduces dependency on paid ads and compounds traffic over time—every ranking you earn keeps driving sales without additional spend."
    },
    {
      id: 2,
      question: "2. Which e-commerce platforms do you work with?",
      answer: "We work with all major platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores. Our technical approach is adapted to each platform's unique structure and limitations."
    },
    {
      id: 3,
      question: "3. How do you handle large product catalogues?",
      answer: "We implement scalable SEO architecture—canonical tags, crawl budget management, auto-generated meta templates, and structured data—to ensure even stores with thousands of SKUs rank efficiently without manual page-by-page work."
    },
    {
      id: 4,
      question: "4. How long before we see results from e-commerce SEO?",
      answer: "Most stores see measurable organic traffic improvements within 3–6 months, with compounding growth over 12 months. Quick wins from technical fixes and high-intent long-tail keywords often appear within the first 60–90 days."
    },
    {
      id: 5,
      question: "5. Do you also help with conversion rate optimisation alongside SEO?",
      answer: "Yes. We combine SEO with CRO insights—improving page speed, mobile UX, product descriptions, and trust signals—so more of the traffic we drive actually converts into sales."
    }
  ];

  return (
    <>
      <PageHeader
        title="E-Commerce"
        subtitle="SEO Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'E-Commerce SEO', active: true }]}
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
                    <img src="/images/projects/project-1.jpg" alt="E-Commerce SEO Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">E-commerce SEO is the discipline of turning organic search into your highest-ROI acquisition channel. We optimise every layer of your store—product listings, category architecture, technical health, and backlink authority—so your products appear when buyers are actively searching.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">E-Commerce SEO That <span>Drives Revenue</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We engineer e-commerce SEO with one focus—qualified traffic that converts.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Product & Category Page Optimisation</li>
                      <li>Scalable Technical Architecture</li>
                      <li>Structured Data & Rich Snippets</li>
                      <li>Competitor Gap Analysis</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>On-Page Product SEO</h3>
                        <p>Keyword-rich titles, compelling descriptions, and schema markup that help products rank and convert.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Technical Store Optimisation</h3>
                        <p>Crawl budget management, site speed improvements, and canonical strategy for large catalogues.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-marketing-image.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Organic Traffic is Your <span>Most Valuable Asset</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Paid traffic stops when budgets stop. Organic SEO compounds—every ranking you earn keeps working for you.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
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

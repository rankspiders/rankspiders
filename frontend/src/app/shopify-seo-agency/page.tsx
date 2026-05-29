'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function ShopifySeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why does Shopify need specialist SEO work?",
      answer: "Shopify has unique SEO challenges—duplicate URLs from collection/product paths, thin pagination pages, and limited control over URL structures. A Shopify SEO specialist understands these constraints and works within them to maximise ranking potential."
    },
    {
      id: 2,
      question: "2. Can you fix Shopify's duplicate content issues?",
      answer: "Yes. We implement canonical tag strategies, manage Shopify's auto-generated URL variants, and consolidate duplicate product pages so search engines index only the most authoritative version of each page."
    },
    {
      id: 3,
      question: "3. Do you optimise Shopify app-generated content?",
      answer: "We audit all third-party app content including reviews, size guides, and FAQs—ensuring they contribute positively to SEO rather than creating bloat or duplicate signals."
    },
    {
      id: 4,
      question: "4. How do you improve Shopify site speed for SEO?",
      answer: "We optimise Liquid theme code, implement image compression, reduce render-blocking scripts, and leverage Shopify's CDN effectively. Core Web Vitals improvements directly impact both rankings and conversion rates."
    },
    {
      id: 5,
      question: "5. Do you provide ongoing Shopify SEO support?",
      answer: "Yes. We offer monthly Shopify SEO retainers covering technical monitoring, content optimisation, link building, and performance reporting—keeping your store competitive as algorithms evolve."
    }
  ];

  return (
    <>
      <PageHeader
        title="Shopify"
        subtitle="SEO Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Shopify SEO', active: true }]}
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
                    <img src="/images/project-1.jpg" alt="Shopify SEO Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Shopify powers millions of stores but its default SEO settings leave significant ranking potential on the table. We specialise in unlocking that potential—fixing Shopify-specific technical issues and building a content strategy that drives sustained organic growth.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Shopify SEO That <span>Compounds Growth</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Platform-specific expertise that turns Shopify limitations into competitive advantages.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Shopify Duplicate URL Resolution</li>
                      <li>Collection & Product Page Optimisation</li>
                      <li>Core Web Vitals & Speed Optimisation</li>
                      <li>Shopify Blog & Content Strategy</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Technical Shopify SEO</h3>
                        <p>Canonical tags, crawl budget, structured data, and theme-level speed improvements.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Content & Authority Building</h3>
                        <p>Blog content strategy and high-authority link acquisition to strengthen domain trust.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/project-2.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Platform Knowledge is <span>Ranking Power</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Generic SEO advice fails Shopify stores. Platform-specific expertise is what separates growth from stagnation.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function ShopifyDevelopmentAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why choose Shopify for your online store?",
      answer: "Shopify offers the best balance of ease of use, scalability, and e-commerce features for most businesses. Its hosted infrastructure, secure payments, and extensive app ecosystem make it the platform of choice for brands serious about e-commerce growth."
    },
    {
      id: 2,
      question: "2. Do you build custom Shopify themes?",
      answer: "Yes. We build bespoke Shopify themes using Liquid that reflect your brand identity perfectly. Custom themes outperform generic templates in conversion rates, load speed, and brand differentiation."
    },
    {
      id: 3,
      question: "3. Can you migrate our existing store to Shopify?",
      answer: "We handle full Shopify migrations from WooCommerce, Magento, BigCommerce, and custom platformsâ€”including product data, customer records, order history, and SEO redirect mapping to protect your search rankings."
    },
    {
      id: 4,
      question: "4. Do you develop custom Shopify apps?",
      answer: "Yes. When the Shopify App Store doesn't have exactly what you need, we build custom apps and integrationsâ€”from custom checkout flows to ERP integrations and bespoke loyalty systems."
    },
    {
      id: 5,
      question: "5. How do you ensure our Shopify store is SEO-ready at launch?",
      answer: "Every Shopify store we build includes SEO foundations: clean URL structures, proper canonical tags, schema markup, image optimisation, and Core Web Vitals targets. SEO is built in, not bolted on."
    }
  ];

  return (
    <>
      <PageHeader
        title="Shopify"
        subtitle="Development Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Shopify Development', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-3.jpg" alt="Shopify Development Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>We build Shopify stores that sell. From custom theme development to complex integrations, every decision we make in your Shopify build is guided by one goalâ€”maximising your revenue and making your store a pleasure to manage.</p>
                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Shopify Stores Built <span>to Sell</span></h2>
                    <p data--delay="0.6s">Custom Shopify development that combines brand identity with conversion science.</p>
                    <ul data--delay="0.8s">
                      <li>Custom Liquid Theme Development</li>
                      <li>Shopify Plus & Enterprise Builds</li>
                      <li>App Development & Integration</li>
                      <li>Store Migration & SEO Preservation</li>
                    </ul>
                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Design & Conversion</h3>
                        <p>Brand-true themes optimised for mobile checkout flows and AOV-boosting UX patterns.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Integration & Automation</h3>
                        <p>ERP, CRM, fulfilment, and loyalty integrations that make your operations seamless.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-2.jpg" alt="Web development and digital marketing strategy implementation at Rank Spiders" />
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Your Store Should Be <span>Your Best Salesperson</span></h2>
                  <p data--delay="0.4s">A Shopify store that converts and scales is the single best investment a product business can make.</p>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start your project</Link>
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

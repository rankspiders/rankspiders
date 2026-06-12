'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function WordpressSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why is WordPress a strong platform for SEO?",
      answer: "WordPress offers unparalleled SEO flexibility—full control over URL structures, metadata, schema, and code. With the right configuration and plugins, WordPress sites can be technically optimised to an elite standard."
    },
    {
      id: 2,
      question: "2. Which SEO plugins do you work with?",
      answer: "We work with all major SEO plugins including Yoast SEO, Rank Math, and All in One SEO. We configure them correctly, write optimised metadata, and ensure they complement rather than conflict with your theme and other plugins."
    },
    {
      id: 3,
      question: "3. How do you handle WordPress speed optimisation for SEO?",
      answer: "We implement caching, image optimisation, database cleanup, CDN configuration, and Core Web Vitals improvements. Page speed is a direct ranking factor and we treat it as a priority in every WordPress SEO engagement."
    },
    {
      id: 4,
      question: "4. Can you optimise WooCommerce products within a WordPress SEO project?",
      answer: "Yes. WooCommerce SEO is part of our WordPress SEO capability. We optimise product pages, categories, and shopping feeds as part of a holistic e-commerce SEO strategy on WordPress."
    },
    {
      id: 5,
      question: "5. Do you handle WordPress security as part of SEO?",
      answer: "Security affects SEO—hacked sites get deindexed. We review security configurations, recommend hardening measures, and ensure your site maintains a clean, trustworthy presence in search engines."
    }
  ];

  return (
    <>
      <PageHeader
        title="WordPress"
        subtitle="SEO Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'WordPress SEO', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/work-image-2.jpg" alt="WordPress SEO Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">WordPress powers over 40% of the web—and for good reason. It's the most SEO-flexible CMS available. We harness that flexibility to build technically sound, content-rich WordPress sites that dominate search results in competitive niches.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">WordPress SEO That <span>Dominates Search</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Full-stack WordPress SEO—technical, content, and authority—built for long-term dominance.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Plugin Configuration & Audit</li>
                      <li>Core Web Vitals Optimisation</li>
                      <li>Content Architecture & Interlinking</li>
                      <li>Schema & Structured Data Implementation</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Technical WordPress SEO</h3>
                        <p>Speed, security, crawlability, and structured data for maximum search engine performance.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Content & Authority Strategy</h3>
                        <p>Pillar pages, topic clusters, and link building that establish topical authority in your niche.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-3.jpg" alt="Advanced technical SEO and web development expertise at Rank Spiders" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">WordPress Flexibility is <span>Your SEO Superpower</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">The world's most popular CMS is also the most SEO-powerful—when configured correctly by experts who know how.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function WebDesignAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What makes a great business website in 2025?",
      answer: "A great business website combines fast load times, mobile-first design, clear conversion pathways, and technical SEO foundations. We design every site with performance, accessibility, and search visibility built in from the first wireframe."
    },
    {
      id: 2,
      question: "2. Do your websites include SEO optimisation?",
      answer: "Yes. Every website we build includes on-page SEO foundations—clean URL structures, metadata, schema markup, compressed images, and Core Web Vitals optimisation. We deliver sites that are ready to rank from day one."
    },
    {
      id: 3,
      question: "3. Which technologies do you use for web development?",
      answer: "We build with Next.js, React, WordPress, and Shopify depending on your needs. For performance-critical sites we favour headless architectures. We always recommend the technology that best serves your business goals and budget."
    },
    {
      id: 4,
      question: "4. How long does a web design and development project take?",
      answer: "A standard business website takes 4–8 weeks from brief to launch. Complex builds with custom functionality, e-commerce, or large content migrations may take 8–16 weeks. We provide a clear timeline before any engagement begins."
    },
    {
      id: 5,
      question: "5. Do you provide post-launch support and maintenance?",
      answer: "Yes. We offer ongoing maintenance packages covering security updates, content changes, performance monitoring, and feature additions. We treat every website as a long-term digital asset, not a one-time project."
    }
  ];

  return (
    <>
      <PageHeader
        title="Web Design &"
        subtitle="Development Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Web Design & Development', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-3.jpg" alt="Web Design and Development Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Your website is your most important digital asset. We design and build websites that don't just look great—they load fast, rank in search, and convert visitors into customers. Every pixel and every line of code serves your business goals.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Websites Built to <span>Perform & Convert</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Design-led, performance-first, SEO-ready—built for the modern web.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Mobile-First Responsive Design</li>
                      <li>Core Web Vitals Optimised</li>
                      <li>SEO Foundations Built In</li>
                      <li>Conversion-Focused User Experience</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Design & UX</h3>
                        <p>Brand-aligned design systems that guide visitors effortlessly toward your conversion goals.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Development & Performance</h3>
                        <p>Clean code, fast hosting architecture, and technical SEO baked in from the ground up.</p>
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
                  <h3 className="wow fadeInUp">Our Belief</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Design Without Performance <span>is Just Art</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Beautiful websites that don't rank or convert waste your investment. We build both—and make them work together.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get a quote</Link>
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

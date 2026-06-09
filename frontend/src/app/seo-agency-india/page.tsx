'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function SeoAgencyIndia() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is SEO optimization and why is it important for business growth?",
      answer: "SEO optimization improves your website’s visibility in search engines by aligning content, technical performance, and user intent. It helps businesses attract qualified organic traffic, build trust, and generate consistent leads without relying only on paid ads."
    },
    {
      id: 2,
      question: "2. How do your SEO services help small and growing businesses?",
      answer: "Our SEO services for small businesses focus on high-intent keywords, local visibility, and conversion-driven optimization. We create scalable strategies that deliver long-term growth while remaining practical and cost-effective."
    },
    {
      id: 3,
      question: "3. Do you offer local SEO services for Mohali and nearby areas?",
      answer: "Yes. We provide local SEO services in Mohali and India, helping businesses rank for location-based searches, improve Google Business visibility, and attract nearby customers actively searching for their services."
    },
    {
      id: 4,
      question: "4. What makes your SEO approach different from other SEO agencies?",
      answer: "As experienced organic SEO consultants, we focus on performance, not just rankings. Our strategy combines technical SEO audits, intent-led content optimization, authority building, and user experience improvements to deliver measurable results."
    },
    {
      id: 5,
      question: "5. Are your SEO packages affordable and suitable for long-term growth?",
      answer: "Yes. We offer affordable SEO packages in India designed for sustainable growth. Our plans are transparent, scalable, and aligned with business goals—making us a trusted choice among businesses looking for the best SEO services in Mohali."
    }
  ];

  return (
    <>
      <PageHeader
        title="Seo"
        subtitle="Optimization"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Seo Optimization', active: true }]}
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
                    <img src="/images/sections/service-single-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Modern SEO is no longer just about visibility—it’s about being chosen. Our SEO optimization framework is designed to position your brand as a credible, high-trust authority across today’s search ecosystems, not merely to chase rankings.</p>
                  
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Where SEO <span> Meets Performance </span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We engineer SEO optimization with one clear objective—real business outcomes.</p>
                    
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Intent-Led Optimization Framework</li>
                      <li>Performance-First Technical SEO</li>
                      <li>Authority-Driven Content Structuring</li>
                      <li>Data-Backed Growth Measurement</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>On-Page SEO Intelligence</h3>
                        <p>Our On-Page SEO framework is engineered to deliver precision, clarity and measurable ranking gains.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Off-Page SEO Authority Building</h3>
                        <p>Our Off-Page SEO strategies are designed to build trust, authority and long-term visibility.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-highlight-image.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Powering Sustainable Growth <span> Through SEO Optimization</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Sustainable SEO growth is built on strategy, not shortcuts.</p>
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
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>question</span></h2>
          </div>

          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item wow fadeInUp">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openFaq === faq.id ? '' : 'collapsed'}`} 
                    type="button" 
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openFaq === faq.id ? 'show' : ''}`}>
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

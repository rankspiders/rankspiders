'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function OnlineAdvertisingNicheIndustries() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const industries = [
    "Carpet Cleaning", "Enterprises", "Healthcare", "NGO",
    "Salon", "Auto Repair", "Car Dealers", "Electrician",
    "Astrology", "Law Firm", "Baby Products", "SInterior Designers",
    "Real Estate", "Dental", "Roofing", "House Cleaning"
  ];

  const faqs = [
    {
      id: 1,
      question: "1. What is digital marketing, & help my business?",
      answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness."
    },
    {
      id: 2,
      question: "2. How do you measure success in a campaign?",
      answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness."
    },
    {
      id: 3,
      question: "3. Can you help with both SEO and paid ads?",
      answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness."
    },
    {
      id: 4,
      question: "4. Is there a contract or long-term commitment?",
      answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness."
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Online Advertising <span>Niche Industries</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="/online-advertising-agency">/ Online Advertising</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link href="/online-advertising-niche-industries"> / Online Advertising Niche Industries</Link></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="page-cta-box sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="page-cta-header">
                    <div className="review-images">
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/author-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/author-3.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="review-rating-content">
                      <p><span>2.5k</span> Positive Review in our solutions</p>
                    </div>
                  </div>

                  <div className="page-cta-box-body">
                    <div className="page-cta-counters">
                      <div className="page-cta-counter-item">
                        <h2><span className="counter">95</span></h2>
                        <p>Client satisfaction</p>
                      </div>
                      <div className="page-cta-counter-item">
                        <h2><span className="counter">120</span>+</h2>
                        <p>Project complete</p>
                      </div>
                    </div>
                    <div className="page-cta-btn">
                      <a href="tel:+919988357092"><img src="/images/icon-phone-white.svg" alt="" /> +91 99883-57092</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="service-single-content">
                  <div className="service-entry">
                    <div className="service-growth-box">
                      <h2 className="wow fadeInUp">Measurable growth <span>through insights</span></h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">We harness the power of data to track performance, understand user behavior, and refine strategies in real time. Our insight-driven approach ensures every decision is backed by analytics, leading to consistent scalable growth for your brand.</p>

                      <ul className="wow fadeInUp" data-wow-delay="0.4s">
                        <li>Customized Campaigns for Maximum Impact</li>
                        <li>Cross-Platform Presence with Consistency</li>
                      </ul>

                      <div className="service-growth-body">
                        <div className="growth-counter-box">
                          <div className="icon-box">
                            <img src="/images/icon-growth-counter.svg" alt="" />
                          </div>
                          <div className="growth-counter-content">
                            <h3><span className="counter">120</span>K+</h3>
                            <p>Customer engaged that's campaign reach depend</p>
                          </div>
                        </div>

                        <div className="service-growth-item-list wow fadeInUp" data-wow-delay="0.6s">
                          <div className="service-growth-item">
                            <h3>Campaign Planning</h3>
                            <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Tactical Planning</h3>
                            <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="container">
          <div className="row" style={{ gap: '30px 0px' }}>
            <div className="col-lg-12">
              <div className="why-choose-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp text-center" data-wow-delay="0.2s" data-cursor="-opaque">Industries We Serve <span>with Social Media Services</span></h2>
                </div>
              </div>
            </div>

            {industries.map((industry, index) => (
              <div key={index} className="col-lg-3 col-md-3 col-6">
                <div className="service-box-link" style={{ textDecoration: 'none' }}>
                  <div className="testimonial-item wow fadeInUp" data-wow-delay="0.8s" style={{ cursor: 'pointer' }}>
                    <div className="service-growth-item">
                      <h3 className="text-center" style={{ lineHeight: '30px', margin: '0px' }}>{industry}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

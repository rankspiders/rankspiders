'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WebDesignNicheIndustries() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const industries = [
    "Carpet Cleaning SEO Service", "SEO For Enterprises", "SEO For Healthcare", "SEO For NGO",
    "SEO For Salon", "SEO For Auto Repair", "SEO For Car Dealers", "SEO For Electrician",
    "SEO For Astrology", "SEO For Law Firm", "SEO For Baby Products", "SEO For Interior Designers",
    "SEO For Real Estate", "SEO For Dental", "SEO For Roofing", "SEO For House Cleaning"
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
                <h1 className="wow fadeInUp" data-cursor="-opaque">Web Design & Development <span>Niche Industries</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="#">/ Web Design & Development</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link href="/web-design-and-development-niche-industries"> / Web Design & Development Niche Industries</Link></li>
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
                      <div className="review-image"><img src="/images/author-1.jpg" alt="" /></div>
                      <div className="review-image"><img src="/images/author-2.jpg" alt="" /></div>
                      <div className="review-image"><img src="/images/author-3.jpg" alt="" /></div>
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
                        <h2><span className="counter">1</span>+</h2>
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
                      <h2 className="wow fadeInUp">How We Deliver Web Design & Development for Niche Industries</h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">Each industry has unique users, goals, and digital challenges. Our web design and development approach begins with understanding your niche—its audience behavior, competitors, and business objectives.</p>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">We design industry-specific layouts, user journeys, and site structures that align with how your customers search, browse, and convert. From custom UI/UX design and responsive development to performance optimization and secure architecture, every element is built to support scalability and long-term growth.</p>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">Our process ensures your website not only reflects your brand identity but also functions as a strategic business tool—driving engagement, conversions, and measurable results within your specific industry.</p>

                      <ul className="wow fadeInUp" data-wow-delay="0.4s">
                        <li>Industry-Specific Design and Development</li>
                        <li>Conversion-Focused, Scalable Web Architecture</li>
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
                            <h3>Strategic Planning</h3>
                            <p>Our process begins with an in-depth understanding of your industry, business objectives, and user expectations. We analyze audience behavior, competitor websites, and market standards to define a clear web strategy aligned with your niche requirements and growth goals.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Tactical Execution</h3>
                            <p>Based on the strategy, we design and develop industry-specific website structures, UI/UX flows, and technical frameworks. Each element—from responsive layouts and performance optimization to secure architecture—is executed with precision to deliver scalable, conversion-focused web solutions.</p>
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
                  <h2 className="wow fadeInUp text-center" data-wow-delay="0.2s" data-cursor="-opaque">Industries We Serve <span>with Web Design & Development Services</span></h2>
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

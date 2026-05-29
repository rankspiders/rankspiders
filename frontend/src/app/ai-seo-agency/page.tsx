'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AiSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. How is AI SEO different from traditional SEO?",
      answer: "AI SEO uses machine learning, real-time data analysis, and automation to optimize content, keywords, and rankings faster and more accurately than manual, traditional SEO methods."
    },
    {
      id: 2,
      question: "2. Can AI improve my website’s rankings faster?",
      answer: "Yes. AI identifies opportunities, predicts search trends, and automates optimization—helping your website rank quicker by targeting the right keywords and user intent with precision."
    },
    {
      id: 3,
      question: "3. Does AI SEO work for all types of businesses?",
      answer: "Absolutely. Whether you're a startup, agency, or enterprise, AI adapts to your audience, industry, and goals—delivering scalable, data-backed SEO growth."
    },
    {
      id: 4,
      question: "4. Will AI-generated insights replace human SEO experts?",
      answer: "Not at all. AI enhances the strategy, while human expertise ensures creativity, relevance, and brand alignment. Together, they deliver the most powerful SEO results."
    }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">AI <span>Seo</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="#">/ Seo Optimization</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">/ AI Seo</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>

      {/* Page Service Single Start */}
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <h3>Discover Our More Services</h3>
                  <ul>
                    <li><Link href="/free-seo-audit-agency">Free Seo Audit</Link></li>
                    <li><Link href="/technical-seo-agency">Technical Seo</Link></li>
                    <li><Link href="/local-seo-agency">Local Seo</Link></li>
                    <li><Link href="/link-building-seo-agency">Link Building Seo</Link></li>
                    <li><Link href="/saas-seo-agency">Saas Seo</Link></li>
                    <li><Link href="/b2b-seo-agency">B2B Seo</Link></li>
                    <li><Link href="/wordpress-seo-agency">Wordpress Seo</Link></li>
                    <li><Link href="/ecommerce-seo-agency">E-Commerce Seo</Link></li>
                    <li><Link href="/niche-seo-industries-agency">Niche Seo Industries</Link></li>
                  </ul>
                </div>

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
                        <h2><span className="counter">1</span>K+</h2>
                        <p>Project complete</p>
                      </div>
                    </div>
                    <div className="page-cta-btn">
                      <a href="tel:+919988357092"><img src="/images/icon-phone-white.svg" alt="" /> +91 99883-57092</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/digital-advantage-img-1.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Unlock the future of search with AI-driven SEO strategies engineered for precision, performance, and scalable growth. Our advanced AI systems analyze search patterns, competitor activity, and audience behavior to deliver hyper-targeted optimizations that put your brand ahead of the curve.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We don’t do generic SEO. Every campaign is intelligently crafted, combining predictive analytics, automated content insights, and strategic on-page enhancements to drive higher visibility, smarter traffic, and measurable conversions.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Boost Your Brand with<span>AI-Powered SEO</span></h2>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Customized AI Campaigns for Maximum Impact</li>
                      <li>Consistent Cross-Platform Visibility</li>
                      <li>Audience Engagement That Converts</li>
                      <li>Measurable Growth Through Smart Analytics</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Marketing Experts</h3>
                        <p>Professionally Certified Experts in SEO Strategies</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Intelligent, Data-Driven Strategies</h3>
                        <p>AI-Driven Analytics Ensures Precise, Scalable Campaigns.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/project-marketing-image.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Data-Driven Growth with<span>AI Insights</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Harness the power of AI-powered analytics to track search performance, understand user intent, and optimize SEO strategies in real time.</p>

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
                          <h3>AI SEO Strategy</h3>
                          <p>We start by analyzing your brand, audience behavior, and digital footprint using advanced AI insights.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Smart Analytics</h3>
                          <p>Leveraging AI analytics and market intelligence, we design tactical plans that optimize content.</p>
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

      <div className="our-belief">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-belief-content">
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">Our Belief</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Powering Growth Through<span>Intelligent AI SEO</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We blend AI-driven insights, predictive analytics, and advanced SEO innovation to elevate your brand’s visibility.</p>
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

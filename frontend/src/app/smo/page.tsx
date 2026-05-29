'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function Smo() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is digital marketing, & help my business?",
      answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness.."
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
      <PageHeader 
        title="SMO" 
        subtitle="" 
        breadcrumbs={[
          { label: 'portfolio', href: '#' },
          { label: 'SMO', active: true }
        ]} 
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
                    <img src="/images/digital-advantage-img-2.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Our social media marketing strategies are designed to amplify your brand's voice, connect with your audience on a deeper level, and spark meaningful engagement. From crafting compelling content to managing campaigns across platforms like Instagram, Facebook, LinkedIn, and X (formerly Twitter), we ensure your brand stays visible, relevant, and trusted.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We don't believe in one-size-fits-all solutions. Our team studies your industry, competitors, and audience behavior to build customized strategies that drive growth and conversions. With performance analytics</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Boost your brand <span>with strategy</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We combine data-driven strategies, creative innovation, and proven expertise to help your brand grow online from SEO to social media.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Customized Campaigns for Maximum Impact</li>
                      <li>Cross-Platform Presence with Consistency</li>
                      <li>Target Audience Engagement that Converts</li>
                      <li>Measurable Growth Through Data Insights</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Marketing Experts</h3>
                        <p>Our team is professionally certified in SEO.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Strategies</h3>
                        <p>Our team is professionally certified in SEO.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/work-image-1.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Measurable growth <span>through insights</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We harness the power of data to track performance, understand user behavior, and refine strategies in real time. Our insight-driven approach ensures every decision is backed by analytics, leading to consistent  scalable growth for your brand.</p>

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

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Creating impact <span>digital innovation</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We harness the power of data to track performance, understand user behavior, and refine strategies in real time. Our insight-driven approach ensures every decision is backed by analytics, leading to consistent  scalable growth for your brand.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery2.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Campaign Planning</h3>
                      <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
                      <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
                      <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
                      <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
                    </div>
                    <div className="service-growth-item">
                      <h3>Campaign Planning</h3>
                      <p>We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns. We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns. We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.We begin by deeply understanding your business goals, target audience & current digital footprint. This foundation allows us to craft a personalized strategy that aligns.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Building brands purpose <span>with passion</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We combine data-driven strategies, creative innovation, and proven expertise to help your brand grow online from SEO to social media.</p>
                </div>

                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We craft brand experiences that connect emotionally, inspire action.</li>
                    <li>Our strategies are root in purpose ensuring every digital move support.</li>
                  </ul>
                </div>

                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-belief-image">
                <div className="our-belief-img">
                  <figure>
                    <img src="/images/our-belief-image.png" alt="" />
                  </figure>
                </div>
                <div className="belief-fund-box">
                  <div className="icon-box">
                    <img src="/images/icon-belief-fund.svg" alt="" />
                  </div>
                  <div className="belief-fund-content">
                    <p>Total fund</p>
                    <h3>$2412.00</h3>
                  </div>
                </div>
                <div className="belief-graph-image">
                  <img src="/images/belief-graph-imge.png" alt="" />
                </div>
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

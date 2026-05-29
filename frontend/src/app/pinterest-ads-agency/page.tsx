'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function PinterestAdsAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1.What is Google Ads?",
      answer: "Google Ads is an online advertising platform that allows businesses to display ads on Google Search, YouTube, and partner sites to drive clicks and conversions."
    },
    {
      id: 2,
      question: "2.Why should I use Google Ads?",
      answer: "It helps reach highly targeted audiences, increase website traffic, generate leads, and maximize ROI through measurable and scalable ad campaigns."
    },
    {
      id: 3,
      question: "3. What types of ads can I run?",
      answer: "Google Ads offers Search, Display, Shopping, YouTube, Discovery, and App campaigns, each optimized for different business goals and audience engagement."
    },
    {
      id: 4,
      question: "4.How much does Google Ads cost?",
      answer: "Costs depend on bidding strategies, competition, keywords, and campaign objectives. Ads work on a pay-per-click (PPC) or cost-per-thousand-impressions (CPM) model."
    },
    {
      id: 5,
      question: "5.Can small businesses benefit from Google Ads?",
      answer: "Yes. Google Ads allows precise targeting, making it highly effective for businesses of any size looking to reach the right audience."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Pinterest" 
        subtitle="Ads" 
        breadcrumbs={[
          { label: 'Online Advertising', href: '#' },
          { label: 'Pinterest Ads', active: true }
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
                    <img src="/images/project-marketing-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Your brand deserves ads that don’t just appear they perform. Our Google Ads strategies combine real-time data, AI-driven bidding, and audience insights to deliver campaigns that reach the right people at the right time.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">From search ads to display, shopping, and YouTube campaigns, we craft hyper-targeted creatives designed to drive clicks, conversions, and measurable growth. Continuous optimization, trend analysis, and competitor benchmarking ensure your ad spend is fully leveraged, reducing waste and maximizing ROI.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">Stay ahead in a competitive digital landscape with Google Ads campaigns that are precise, profitable, and performance-focused.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Drive Conversions with <span>Targeted Google Ads</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Harness the power of precision advertising. Our Google Ads campaigns use audience insights, AI-driven bidding, and creative ad strategies to maximize clicks, leads, and ROI.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Hyper-Targeted Campaigns for Maximum ROI</li>
                      <li>Search, Display, Shopping & YouTube Ads Optimization</li>
                      <li>Audience Segmentation & Intent-Based Targeting</li>
                      <li>AI-Driven Bidding & Performance Tracking</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Google Ads Experts</h3>
                        <p>Professionals delivering high-performing, data-driven ad campaigns.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Performance-Focused Ad Strategies</h3>
                        <p>Optimize targeting, bidding, and creatives for conversions.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/project-highlight-image.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Track, Analyze, and Grow Your Campaigns</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Optimize your Google Ads performance with actionable insights, audience segmentation, and trend-driven strategies that drive clicks, leads, and consistent, measurable business growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Real-Time Bid & Budget Optimization</li>
                      <li>Multi-Platform Ad Campaign Management</li>
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
                          <h3>Certified Google Ads Experts</h3>
                          <p>Professionals delivering high-performing, data-driven ad campaigns.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Performance-Focused Ad Strategies</h3>
                          <p>Optimize targeting, bidding, and creatives for conversions.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Transform Clicks Into Business Growth</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Track performance, optimize campaigns, and implement data-backed strategies to increase conversions, reduce wasted spend, and grow your brand online.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/project-5.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/project-6.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Hyper-Targeted Audience Segmentation</h3>
                      <p>Segment audiences based on behavior, demographics, interests, and intent to ensure your Google Ads reach the right users, maximizing engagement, clicks, and conversions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>AI-Powered Bid Optimization</h3>
                      <p>Leverage machine learning algorithms to adjust bids in real time, reducing wasted ad spend while improving ROI and campaign performance across all platforms.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Multi-Platform Campaign Management</h3>
                      <p>Run coordinated campaigns across Search, Display, Shopping, and YouTube to expand reach, maintain consistent messaging, and optimize overall ad performance.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Ad Creative Optimization</h3>
                      <p>Continuously test and refine ad copy, images, and video creatives to increase click-through rates, engagement, and overall campaign effectiveness.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Real-Time Performance Analytics</h3>
                      <p>Track impressions, clicks, conversions, and other KPIs in real time to make data-driven adjustments that enhance ROI and campaign outcomes.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion Rate Optimization</h3>
                      <p>Analyze landing pages, ad funnels, and user behavior to improve conversion rates and maximize the value of each visitor.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience Intent Analysis</h3>
                      <p>Identify and target high-intent users based on search queries, interaction patterns, and demographic insights to increase the likelihood of conversions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Competitor Benchmarking</h3>
                      <p>Monitor competitor ad strategies, keywords, and performance metrics to identify opportunities, gaps, and improvements for your campaigns.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Retargeting & Remarketing Campaigns</h3>
                      <p>Engage users who previously interacted with your brand to drive conversions and increase ROI through highly targeted remarketing strategies.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Budget & Spend Efficiency</h3>
                      <p>Continuously monitor and adjust budget allocations across campaigns to optimize spend, ensuring maximum return on investment without overspending.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Your Growth, Our Google Ads Expertise</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We leverage data-driven insights, AI-powered targeting, and innovative ad strategies to drive clicks, conversions, and measurable ROI across Search, Display, Shopping, and YouTube campaigns.</p>
                </div>

                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We design ad campaigns that engage audiences, drive clicks, and convert prospects into loyal customers.</li>
                    <li>Every strategy is purpose-driven, ensuring your ad spend delivers maximum ROI and measurable growth.</li>
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

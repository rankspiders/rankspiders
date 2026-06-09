'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function MetaAdsAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What are Meta Ads?",
      answer: "Meta Ads are paid campaigns on Facebook, Instagram, and Messenger that help businesses reach targeted audiences to drive traffic, leads, and conversions."
    },
    {
      id: 2,
      question: "2. Why should I invest in Meta Ads?",
      answer: "Meta Ads allow precise targeting, measurable ROI, and engagement with audiences on platforms where they spend most of their time."
    },
    {
      id: 3,
      question: "3. What types of Meta Ads are available?",
      answer: "Options include image ads, video ads, carousel ads, story ads, and dynamic product ads tailored to different campaign objectives."
    },
    {
      id: 4,
      question: "4. How much does it cost to run Meta Ads?",
      answer: "Costs vary based on bidding strategy, audience targeting, ad format, and campaign goals. Ads operate on CPC or CPM models."
    },
    {
      id: 5,
      question: "5. Can small businesses benefit from Meta Ads?",
      answer: "Yes. Meta Ads are highly scalable and allow small businesses to target the right audience efficiently without overspending."
    },
    {
      id: 6,
      question: "6. How do you optimize Meta Ads campaigns?",
      answer: "By continuously monitoring performance, adjusting targeting, testing creatives, and refining budgets to maximize clicks, engagement, and conversions."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Meta" 
        subtitle="Ads" 
        breadcrumbs={[
          { label: 'Ads', href: '#' },
          { label: 'Meta Ads', active: true }
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
                    <img src="/images/sections/project-marketing-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Reach your audience where they spend most of their time. Our Meta Ads strategies combine AI-driven targeting, behavior insights, and creative ad formats across Facebook, Instagram, and Messenger to drive clicks, leads, and measurable ROI.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">From carousel and video ads to story placements and dynamic product ads, we craft campaigns that engage users, boost conversions, and scale your business. Continuous monitoring, real-time optimization, and competitor benchmarking ensure your ad spend is efficient and effective.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">Stay ahead in a competitive social landscape with Meta Ads that deliver performance, precision, and growth.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Drive Conversions with <span>Targeted Meta Ads</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Reach the right audience with precision. Our Meta Ads campaigns use AI-driven targeting, creative ad formats, and data insights to boost engagement, clicks, and measurable ROI.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Hyper-Targeted Campaigns for Maximum Conversions</li>
                      <li>Facebook, Instagram & Messenger Ads Management</li>
                      <li>Audience Behavior & Interest-Based Targeting</li>
                      <li>Real-Time Analytics & Performance Optimization</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Meta Ads Experts</h3>
                        <p>Professionals creating high-performing campaigns across Facebook platforms.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Ad Strategies</h3>
                        <p>Optimize targeting, creatives, and budgets for maximum conversions.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-highlight-image.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Maximize Impact with Every Meta Ad</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Track impressions, clicks, and conversions while optimizing budgets and ad placements to deliver high-performing Meta Ads campaigns with measurable results and maximum ROI.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Facebook, Instagram & Messenger Ad Optimization</li>
                      <li>Behavior and Interest-Based Audience Targeting</li>
                    </ul>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">120</span>K+</h3>
                          <p>Customer engaged that's campaign reach depend</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Strategic Campaign Planning</h3>
                          <p>We analyze your business goals, audience behavior, and current digital presence to craft Meta Ads strategies that maximize reach, engagement, and conversions.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Tactical Ad Execution</h3>
                          <p>Implementing precise targeting, dynamic creatives, and real-time optimization ensures every Meta Ads campaign delivers measurable results and scalable ROI across Facebook, Instagram, and Messenger</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Optimize Campaigns with Data-Driven Insights</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Use real-time analytics and audience behavior to refine Meta Ads targeting, creatives, and budget allocation, maximizing clicks, engagement, and ROI.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/projects/project-5.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/projects/project-6.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Hyper-Targeted Audience Segmentation</h3>
                      <p>Segment audiences based on interests, behaviors, demographics, and purchase intent to ensure Meta Ads reach the right users, driving higher engagement, clicks, and conversions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>AI-Powered Budget & Bid Optimization</h3>
                      <p>Leverage machine learning to adjust bids and allocate budgets in real time, improving ad efficiency, ROI, and overall campaign performance across all Meta platforms.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Multi-Platform Campaign Management</h3>
                      <p>Run coordinated campaigns on Facebook, Instagram, and Messenger to maintain consistent messaging, expand reach, and optimize overall ad performance for maximum conversions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Dynamic Creative Optimization</h3>
                      <p>Continuously test and refine ad copy, images, videos, and carousel creatives to increase click-through rates, engagement, and campaign effectiveness.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Real-Time Analytics & Reporting</h3>
                      <p>Track impressions, clicks, conversions, and other KPIs in real time to make data-driven adjustments that enhance campaign performance and ROI.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion Rate Optimization</h3>
                      <p>Analyze landing pages, funnels, and user behavior to improve conversions and maximize the value generated from every ad interaction.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience Intent Targeting</h3>
                      <p>Identify high-intent users based on engagement patterns, interaction history, and behavioral data to target Meta Ads that are more likely to convert.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Competitor Benchmarking & Insights</h3>
                      <p>Monitor competitor campaigns, creatives, and performance to identify gaps and opportunities, ensuring your Meta Ads outperform industry benchmarks.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Retargeting & Remarketing Campaigns</h3>
                      <p>Re-engage users who previously interacted with your brand using highly targeted Meta Ads to increase conversions and maximize ROI.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance-Driven Creative Strategies</h3>
                      <p>Leverage analytics and audience insights to craft visually appealing, engaging ads that capture attention, drive clicks, and generate measurable business results.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Elevate Your Brand with Smart Meta Ads</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Utilize data-driven strategies and dynamic creatives to engage your audience, boost conversions, and maximize ROI on Facebook, Instagram, and Messenger.</p>
                </div>

                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>Create campaigns that engage audiences, spark clicks, and drive conversions.</li>
                    <li>Our strategies are purpose-driven, ensuring every Meta Ads campaign maximizes ROI and measurable growth.</li>
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
                    <img src="/images/sections/our-belief-image.png" alt="" />
                  </figure>
                </div>
                <div className="belief-fund-box">
                  <div className="icon-box">
                    <img src="/images/icons/icon-belief-fund.svg" alt="" />
                  </div>
                  <div className="belief-fund-content">
                    <p>Total fund</p>
                    <h3>$2412.00</h3>
                  </div>
                </div>
                <div className="belief-graph-image">
                  <img src="/images/sections/belief-graph-imge.png" alt="" />
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

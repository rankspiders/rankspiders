'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function SmallBusinessSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. How do customer reviews affect Small Business SEO?",
      answer: "Positive reviews enhance credibility, boost local search rankings, and increase customer trust, helping your small business attract more nearby customers and improve conversion rates."
    },
    {
      id: 2,
      question: "2. What are local citations and why are they important?",
      answer: "Local citations—consistent mentions of your business name, address, and phone across directories—improve search engine trust, boost rankings, and ensure customers find accurate business information."
    },
    {
      id: 3,
      question: "3. Can Small Business SEO help me compete with bigger brands?",
      answer: "Yes. Targeted local SEO strategies allow small businesses to dominate niche searches, attract local audiences, and compete effectively with larger competitors without huge marketing budgets."
    },
    {
      id: 4,
      question: "4. How do I measure the success of Small Business SEO?",
      answer: "We track key metrics like local rankings, website traffic, click-through rates, and conversions, providing data-driven insights to optimize strategies and ensure measurable growth for your business."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Small" 
        subtitle="Business Seo" 
        breadcrumbs={[
          { label: 'seo Optimization', href: '#' },
          { label: 'Small Business Seo', active: true }
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
                    <img src="/images/service-single-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Our Small Business SEO strategies are designed to boost your online visibility, connect with your target audience, and drive meaningful engagement. From optimizing your website to managing local listings and content, we ensure your business ranks higher, attracts relevant traffic, and builds trust.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We don’t believe in one-size-fits-all solutions. Our team analyzes your industry, competitors, and audience behavior to craft custom SEO strategies that generate measurable growth and increase conversions. With real-time performance analytics, every optimization is data-driven, precise, and designed for sustainable results.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Grow Your <span> Small Business Digitally </span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We combine data-driven SEO strategies, creative optimization, and proven expertise to help your small business improve search rankings, attract the right audience, and drive measurable growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Custom SEO Plans That Drive Local Success</li>
                      <li>Optimized Listings Across Search & Maps</li>
                      <li>Connecting Your Business With Nearby Customers</li>
                      <li>Insights That Turn Data Into Growth</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified SEO Experts</h3>
                        <p>Our team is certified in small business SEO.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Strategies</h3>
                        <p>Strategies powered by analytics for measurable business growth.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/service-strategy-img.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Measurable Growth Through SEO Insights</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We leverage real-time analytics and small business data to track website performance, understand customer behavior, and refine SEO strategies. Our insight-driven approach ensures every decision improves rankings, traffic, and measurable local growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Custom SEO strategies designed for your business growth</li>
                      <li>Ensure your brand dominates local search results consistently</li>
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
                          <h3>Strategic SEO Planning</h3>
                          <p>We conduct a thorough analysis of your business objectives, target audience, and current digital presence to develop customized SEO strategies that drive local visibility, qualified traffic, and measurable growth.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Tactical SEO Execution</h3>
                          <p>Leveraging competitor research, keyword analysis, and technical audits, we implement precision-driven SEO tactics, optimizing your website, content, and local listings for sustained performance, improved rankings, and increased customer engagement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Accelerating Small Business <span>Growth Online </span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We harness data-driven insights and real-time analytics to monitor your website’s performance, understand customer behavior, and fine-tune SEO strategies. Every decision is precision-targeted, driving sustainable local visibility, traffic, and growth.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/service-impact-img-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/service-impact-img-2.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Local Keyword Optimization</h3>
                      <p>We identify and target high-intent, location-specific keywords that attract nearby customers, improve search visibility, and drive qualified traffic, ensuring your small business appears in front of the right audience.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Google Business Profile Optimization</h3>
                      <p>We optimize your Google Business Profile with accurate details, engaging visuals, and regular updates to boost local rankings, attract clicks, and build trust with nearby customers.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>On-Page SEO for Small Businesses</h3>
                      <p>We optimize meta tags, headings, content structure, and internal linking to enhance search engine understanding, improve user experience, and increase the likelihood of higher local search rankings.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Technical SEO & Site Health</h3>
                      <p>We perform site audits, fix crawl errors, improve load speed, and implement structured data to ensure search engines index your website efficiently and users enjoy a seamless browsing experience.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Local Link Building & Citations</h3>
                      <p>We acquire high-quality local backlinks and maintain consistent business listings across directories, boosting domain authority, enhancing search engine credibility, and driving geographically relevant traffic to your business.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Reputation & Review Management</h3>
                      <p>We monitor and manage online reviews, respond strategically, and leverage positive feedback to build credibility, improve search rankings, and increase conversions from local audiences.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Analytics & Continuous Optimization</h3>
                      <p>Using advanced analytics, we track rankings, traffic, and conversions to continuously refine SEO strategies, ensuring small businesses achieve sustainable growth, measurable results, and long-term online success.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Growing Small Businesses with Purpose</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We combine data-driven SEO strategies, creative optimization, and proven expertise to help your small business increase local visibility, attract nearby customers, and achieve measurable online growth.</p>
                </div>

                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We craft local SEO strategies that attract, engage, and convert nearby customers, helping your small business grow in its community.</li>
                    <li>Our approach is purpose-driven, ensuring every SEO effort boosts visibility, drives traffic, and delivers measurable local business results.</li>
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

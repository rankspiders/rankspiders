'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function PinterestMarketingAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What Pinterest marketing services does Rank Spiders offer?",
      answer: "We provide full Pinterest marketing solutions including profile setup and optimization, Pinterest strategy development, pin creation and design, targeted growth campaigns, community engagement, and detailed analytics and reporting."
    },
    {
      id: 2,
      question: "2. How does Pinterest marketing help my business grow?",
      answer: "Pinterest drives high-intent traffic to your website. Users on Pinterest are actively searching for ideas and products, making it one of the highest-converting platforms for eCommerce, lifestyle, home decor, fashion, food, and service businesses."
    },
    {
      id: 3,
      question: "3. How long does it take to see results on Pinterest?",
      answer: "Pinterest is a long-term platform. Most brands begin to see meaningful traffic and follower growth within 3–4 months of consistent, optimized pinning. Paid Pinterest Ads can deliver faster results within the first few weeks."
    },
    {
      id: 4,
      question: "4. Do you create pin designs as part of your service?",
      answer: "Yes. Our creative team designs visually compelling, on-brand pins optimized for Pinterest's vertical format, engagement algorithms, and your audience's preferences — ensuring every pin drives clicks, saves, and traffic."
    },
    {
      id: 5,
      question: "5. Can Pinterest marketing work for service-based businesses?",
      answer: "Absolutely. While product brands thrive on Pinterest, service businesses in niches like marketing, education, health, travel, and finance also generate significant traffic and leads through well-crafted infographic pins and educational content."
    }
  ];

  return (
    <>
      <PageHeader
        title="Pinterest"
        subtitle="Marketing"
        breadcrumbs={[
          { label: 'Social Media', href: '/services/social-media' },
          { label: 'Pinterest Marketing', active: true }
        ]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image img-natural">
                  <figure className="image-anime reveal">
                    <img src="/images/services/pinterest/pinterest-marketing.png" alt="Rank Spiders Pinterest Marketing Services — Turn Inspiration into Action, Grow Your Brand" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p>Our Pinterest marketing services help your brand tap into one of the world's most powerful visual discovery platforms. With over 450 million active monthly users actively searching for ideas, products, and inspiration, Pinterest offers unmatched potential to drive high-intent traffic, increase brand visibility, and generate consistent sales.</p>
                  <p data--delay="0.4s">We combine strategic profile optimization, creative pin design, keyword-rich descriptions, and targeted growth campaigns to build a Pinterest presence that works around the clock for your business. Every pin we create is designed to attract the right audience, increase saves and clicks, and convert browsers into buyers.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Turn Inspiration into Action — <span>Grow Your Brand with Pinterest</span></h2>
                    <p data--delay="0.6s">Pinterest is not just a social platform — it is a visual search engine. Our Pinterest marketing strategies are designed to position your brand where your ideal customers are already looking, delivering traffic and engagement that compounds over time.</p>

                    <ul data--delay="0.8s">
                      <li>Professional Pinterest Profile Optimization</li>
                      <li>Custom Pinterest Growth Strategy</li>
                      <li>Eye-Catching Pin Creation & Design</li>
                      <li>Keyword Research & SEO-Optimized Descriptions</li>
                      <li>Targeted Audience Growth Campaigns</li>
                      <li>Analytics, Reporting & Continuous Optimization</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Creative Pinterest Specialists</h3>
                        <p>Our Pinterest experts combine platform knowledge, visual creativity, and SEO strategy to build boards and pins that rank, get discovered, and consistently drive traffic to your website.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Growth Strategy</h3>
                        <p>We analyze your audience behavior, trending topics, and competitor performance to craft a Pinterest strategy that builds a loyal following and drives measurable business results.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Rank Spiders team crafting Pinterest marketing campaigns for brand growth" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Our Pinterest Marketing Services</h2>
                    <p data--delay="0.2s">From profile setup to ongoing campaign management, we cover every element of Pinterest marketing to ensure your brand gets discovered, followed, and clicked by the right audience every single day.</p>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">120</span>K+</h3>
                          <p>Customers reached through our Pinterest campaigns</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list " data--delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Profile Optimization</h3>
                          <p>We create and optimize a professional Pinterest business profile that builds trust, attracts followers, and signals relevance to Pinterest's algorithm — giving your brand the best possible foundation for organic growth.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Pinterest Strategy Development</h3>
                          <p>Our team develops a tailored Pinterest strategy aligned with your brand, audience, and business goals — including board structures, pinning schedules, keyword targeting, and content themes that maximize your reach and engagement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Pin Creation, Targeted Growth & Analytics</h2>
                    <p data--delay="0.2s">Compelling visuals, strategic targeting, and data-backed optimization work together to grow your Pinterest presence and drive consistent, high-quality traffic to your website month after month.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery1.jpg" alt="Rank Spiders Pinterest pin design and content strategy" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery2.jpg" alt="Rank Spiders Pinterest growth campaign results and analytics" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Pin Creation & Design</h3>
                      <p>We design eye-catching, on-brand pins in Pinterest's preferred vertical format — using compelling imagery, clear messaging, and strategic CTAs — that grab attention in busy feeds and drive more clicks to your website.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Targeted Audience Growth</h3>
                      <p>We reach your ideal audience through keyword targeting, interest-based distribution, and Pinterest Ads — attracting followers and website visitors who are genuinely interested in what your business offers and ready to take action.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Analytics & Reporting</h3>
                      <p>We track key Pinterest metrics — impressions, saves, link clicks, audience growth, and revenue attribution — to continuously refine your strategy, identify what's working, and optimize for better results every month.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Increase Brand Visibility</h3>
                      <p>Strategic board creation, keyword-optimized pin descriptions, and consistent publishing schedules ensure your brand appears in Pinterest search results and recommended feeds — maximizing organic discovery and long-term visibility.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Drive More Website Traffic</h3>
                      <p>Every pin links back to your website, creating a steady stream of high-intent referral traffic. Pinterest's evergreen nature means pins continue driving clicks for months and even years after they are first published.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Boost Leads & Sales</h3>
                      <p>Pinterest users have strong purchase intent — they are actively planning and looking for products and services. Our targeted campaigns and optimized pins convert that intent into real leads, inquiries, and sales for your business.</p>
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
                  <h3>Our Belief</h3>
                  <h2 data--delay="0.2s" data-cursor="-opaque">Pin Today. Grow Tomorrow.</h2>
                  <p data--delay="0.4s">Pinterest rewards consistency, creativity, and strategy. At Rank Spiders, we treat every pin as an opportunity to attract your ideal customer, tell your brand story, and drive traffic that converts. Our Pinterest marketing approach is built for sustainable, compounding growth that delivers results long after each pin is published.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>Increase brand visibility and reach audiences who are actively searching for what you offer.</li>
                    <li>Drive consistent, high-quality website traffic that converts into leads and sales.</li>
                    <li>Build a strong Pinterest presence that compounds and grows in value over time.</li>
                  </ul>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">Get Started Today</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-belief-image">
                <div className="our-belief-img">
                  <figure>
                    <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven digital marketing agency India" />
                  </figure>
                </div>
                <div className="belief-graph-image">
                  <img src="/images/sections/belief-graph-imge.png" alt="Client business growth graph showing Pinterest marketing ROI by Rank Spiders" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>

          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item ">
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

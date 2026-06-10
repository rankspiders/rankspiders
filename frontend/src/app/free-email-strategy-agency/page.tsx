'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FreeEmailStrategyAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What types of content do you create?",
      answer: "We develop blogs, website content, landing pages, social media copy, video scripts, articles, and long-form resources tailored to your brand and audience."
    },
    {
      id: 2,
      question: "2. How do you ensure content aligns with our brand voice?",
      answer: "Brand guidelines, audience insights, and industry research are reviewed to maintain consistent tone, messaging, and positioning across all content assets."
    },
    {
      id: 3,
      question: "3. Is your content optimized for search engines?",
      answer: "Yes. Content is structured with SEO best practices to improve discoverability, readability, and organic visibility without compromising quality."
    },
    {
      id: 4,
      question: "4. How do you measure content performance?",
      answer: "Engagement metrics, traffic behavior, and conversion indicators are monitored to evaluate effectiveness and guide ongoing content improvements."
    },
    {
      id: 5,
      question: "5. Can content be tailored for specific industries?",
      answer: "Absolutely. Content strategies and messaging are customized to reflect industry-specific audiences, trends, and communication needs."
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Free <span> Email Strategy</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="#">/ Content Writing</Link></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <h3>Discover Our More Services</h3>
                  <ul>
                    <li><Link href="/free-demo-content-agency">Free Demo Content</Link></li>
                    <li><Link href="/niche-industries-agency">Niche Industries</Link></li>
                  </ul>
                </div>

                <div className="page-cta-box sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="page-cta-header">
                    <div className="review-images">
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/authors/author-1.jpg" alt="Client testimonial - Rank Spiders digital marketing agency India" />
                        </figure>
                      </div>
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/authors/author-2.jpg" alt="Happy client review - Rank Spiders digital marketing results" />
                        </figure>
                      </div>
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/authors/author-3.jpg" alt="Verified client success story - Rank Spiders India" />
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
                        <h2><span className="counter">1</span>K+</h2>
                        <p>Project complete</p>
                      </div>
                    </div>
                    <div className="page-cta-btn">
                      <a href="tel:+919988357092"><img src="/images/icons/icon-phone-white.svg" alt="Call Rank Spiders" /> +91 99883-57092</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/promise-image.jpg" alt="Rank Spiders commitment to transparent and measurable digital marketing results" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Effective content is more than words—it’s a bridge between your brand and your audience. Our Content Writing services craft compelling narratives across blogs, websites, social media, newsletters, and video scripts that educate, engage, and inspire action.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">By analyzing audience behavior, market trends, and competitive landscapes, we develop data-informed content strategies tailored to your brand voice. Every article, guide, or post is designed to attract the right audience, enhance credibility, and convert readers into loyal customers. From SEO optimization to storytelling techniques, we ensure your content delivers measurable engagement, amplifies visibility, and drives sustainable digital growth.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Premium Content <span>Designed for Engagement</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Our content strategies combine storytelling, audience research, and SEO optimization. From articles to social posts and video scripts, every piece educates, engages, and inspires action, delivering consistent brand visibility and long-term audience loyalty.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Brand-Consistent Voice & Tone</li>
                      <li>Conversion-Focused Content Creation</li>
                      <li>Trend-Aligned Topic Development</li>
                      <li>Cross-Platform Content Optimization</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Professional Content Writers Delivering Measurable Results</h3>
                        <p>Expertly crafted content tailored for audience engagement.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Led Strategies Maximizing Content Performance</h3>
                        <p>Data-backed plans driving visibility, traffic, and conversions.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-2.jpg" alt="SEO and social media marketing performance metrics dashboard" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Results-Oriented Content Performance</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Content impact is measured through engagement signals, reader behavior, and conversion patterns. These insights guide continuous refinement, ensuring every article, page, or script strengthens reach, sharpens messaging, and supports consistent brand growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Content Performance Monitoring</li>
                      <li>Conversion-Focused Content Optimization</li>
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
                          <h3>Strategic Messaging Framework</h3>
                          <p>Clear, structured messaging is developed by aligning brand objectives with audience intent and market demand. This approach ensures content remains consistent, purposeful, and positioned to support long-term visibility and credibility.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Content Development & Impact Optimization</h3>
                          <p>Written assets are produced with precision and adapted across platforms to maximize reach and engagement. Continuous evaluation of performance signals allows content to evolve, improve effectiveness, and consistently support business growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Precision Content That Fuels Brand Momentum</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Modern content demands clarity, relevance, and purpose. Our content writing approach focuses on crafting high-impact narratives that align with audience intent and platform behavior. From long-form articles to short-form digital copy, each piece is thoughtfully structured to enhance visibility, deepen engagement, and support sustainable brand growth through consistent, measurable performance.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery5.jpg" alt="Rank Spiders email marketing campaign design and results" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery6.jpg" alt="Rank Spiders email strategy and newsletter design work" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience-First Content Development</h3>
                      <p>Content is crafted around audience intent, preferences, and behavior, ensuring relevance, stronger engagement, and meaningful connections across every digital touchpoint and platform.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Strategic Topic & Keyword Planning</h3>
                      <p>Topics are selected through research-driven planning to align search demand, industry trends, and brand objectives, supporting consistent visibility and long-term content performance.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Brand-Aligned Messaging Frameworks</h3>
                      <p>Every piece maintains a consistent voice, tone, and narrative structure, reinforcing brand identity while communicating value clearly and effectively to target audiences.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>SEO-Optimized Content Structuring</h3>
                      <p>Content is strategically structured with optimized headings, internal links, and formatting to improve discoverability, readability, and organic search performance.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion-Focused Writing Approach</h3>
                      <p>Clear messaging, persuasive language, and strategic CTAs guide readers toward desired actions, supporting lead generation, engagement, and measurable business outcomes.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Multi-Format Content Creation</h3>
                      <p>Content is developed across blogs, landing pages, social copy, and scripts to ensure consistent messaging and adaptability across platforms and audience touchpoints.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Editorial Quality & Accuracy Control</h3>
                      <p>Each asset undergoes quality checks for clarity, accuracy, and consistency, ensuring professional standards and credibility across all published content.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance Monitoring & Refinement</h3>
                      <p>Engagement metrics and behavioral insights are reviewed regularly to refine content strategies, improve effectiveness, and maintain relevance over time.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Trend-Aware Content Positioning</h3>
                      <p>Content aligns with emerging topics, audience interests, and platform trends to keep brands current, competitive, and visible in evolving digital environments.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Scalable Content Growth Strategy</h3>
                      <p>A structured content roadmap supports consistent publishing, long-term authority building, and sustainable growth without compromising quality or strategic direction.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Building Content with Purpose and Precision</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Effective content is built on clarity, relevance, and intent. Our approach focuses on shaping meaningful narratives that align with audience expectations and business objectives. From long-form editorial pieces to short-form digital content, every asset is developed to engage attention, communicate value, and support consistent brand growth through measurable outcomes.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>Content is crafted to align with audience intent, encourage interaction, and guide readers toward meaningful engagement across every digital touchpoint.</li>
                    <li>Each content initiative is strategically structured to support brand objectives, strengthen credibility, and generate consistent, measurable outcomes.</li>
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
                    <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven digital marketing agency India" />
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
                  <img src="/images/sections/belief-graph-imge.png" alt="Client business growth graph showing digital marketing ROI by Rank Spiders" />
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

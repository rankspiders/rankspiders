'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function YoutubeMarketingAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What types of graphic design services do you offer?",
      answer: "We provide branding, digital graphics, social media creatives, UI/UX design, infographics, packaging, print materials, and custom visual content tailored to your business needs."
    },
    {
      id: 2,
      question: "2. How does your design process work?",
      answer: "Our process includes brand analysis, concept creation, design execution, feedback iterations, and final delivery, ensuring each visual aligns with your brand identity and goals."
    },
    {
      id: 3,
      question: "3. Can you design for both digital and print media?",
      answer: "Yes, all designs are optimized for web, social media, and print formats, ensuring consistent brand presentation across every platform."
    },
    {
      id: 4,
      question: "4. How do you ensure the designs match our brand identity?",
      answer: "We study your brand guidelines, audience, and market trends, creating visuals that reflect your brand’s personality and resonate with your target audience."
    },
    {
      id: 5,
      question: "5. Do you offer revisions if we need changes?",
      answer: "Absolutely. We include multiple feedback rounds in our process to ensure the final design meets your expectations perfectly."
    },
    {
      id: 6,
      question: "6. Will you fix bugs and technical issues?",
      answer: "Yes. Our team identifies and resolves errors, broken links, and functionality problems to ensure a smooth user experience."
    },
    {
      id: 7,
      question: "7. Do you update website content?",
      answer: "Yes. We can update content, images, and layout elements to keep your website fresh, relevant, and engaging."
    },
    {
      id: 8,
      question: "8. How do you monitor website performance?",
      answer: "We use analytics, real-time monitoring tools, and performance audits to track speed, traffic, uptime, and user behavior."
    },
    {
      id: 9,
      question: "9. Can you maintain e-commerce websites?",
      answer: "Yes. We ensure online stores stay secure, fast, and fully functional, handling updates, product management, and payment system checks."
    },
    {
      id: 10,
      question: "10. Do you offer ongoing support after maintenance?",
      answer: "Yes. We provide continuous support, troubleshooting, and optimization to keep your website performing at its best consistently."
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Graphic <span>Design</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="#">/ social media</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">/ Graphic Design</li>
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
                    <li><Link href="/free-social-media-audit-agency">Free Social Media Audit</Link></li>
                    <li><Link href="/services/social-media/instagram">Instagram Marketing</Link></li>
                    <li><Link href="/linkdin-marketing-agency">Linkdin Marketing</Link></li>
                    <li><Link href="/services/social-media/facebook">Facebook Marketing</Link></li>
                    <li><Link href="/services/social-media/pinterest">Pinterest Marketing</Link></li>
                    <li><Link href="/services/content/graphic-design">Graphic Deisgn</Link></li>
                    <li><Link href="/video-editing-agency">Video Editing</Link></li>
                    <li><Link href="/niche-industries-agency">Niche Industries</Link></li>
                  </ul>
                </div>

                <div className="page-cta-box sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="page-cta-header">
                    <div className="review-images">
                      <div className="review-image"><img src="/images/authors/author-1.jpg" alt="Client testimonial - Rank Spiders digital marketing agency India" /></div>
                      <div className="review-image"><img src="/images/authors/author-2.jpg" alt="Happy client review - Rank Spiders digital marketing results" /></div>
                      <div className="review-image"><img src="/images/authors/author-3.jpg" alt="Verified client success story - Rank Spiders India" /></div>
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
                    <img src="/images/sections/digital-advantage-img-2.jpg" alt="SEO and social media marketing performance metrics dashboard" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Our graphic design services transform ideas into visually compelling experiences that capture attention, communicate your brand’s story, and drive engagement. From digital banners, social media creatives, and infographics to branding, packaging, and UI/UX elements, every design is strategically crafted to resonate with your audience.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We don’t settle for generic visuals. Our team studies your brand personality, audience preferences, and market trends to deliver designs that are not only aesthetically stunning but also optimized for impact, memorability, and conversions. By blending creativity with strategic thinking, we ensure every pixel serves a purpose.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Creative Designs That <span>Elevate Your Brand</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Visually compelling designs that capture attention, convey your brand’s story, and inspire meaningful engagement. Each creation blends creativity, strategic insight, and market trends to elevate brand identity, engage audiences, and deliver measurable impact across digital and print platforms.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Impactful Visual Storytelling</li>
                      <li>Seamless Brand Cohesion</li>
                      <li>Engagement-Driven Creativity</li>
                      <li>Measurable Design Effectiveness</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Design Experts</h3>
                        <p>Certified designers delivering visually compelling, strategic branding solutions.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Driven Creativity</h3>
                        <p>Data-driven designs enhancing engagement, recognition, and impact.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Digital marketing team working on client SEO and social media campaigns" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Maximizing Impact Through Strategic Design</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Design decisions leverage audience insights, market trends, and creative analytics to optimize visuals, enhance engagement, and ensure every design delivers measurable impact, brand recognition, and long-term results.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Creative Storytelling Through Design</li>
                      <li>Multi-Platform Visual Consistency</li>
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
                          <h3>Creative Strategy Planning</h3>
                          <p>Every project starts by analyzing your brand identity, target audience, and market trends, laying the foundation for visually compelling designs that align with your goals.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Design Execution & Optimization</h3>
                          <p>Concepts are brought to life with precision, continuously refined using audience insights and performance data to ensure each design maximizes engagement and brand impact.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Strategic Creativity That Elevates Your Brand</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Designs are guided by audience insights, market trends, and creative analytics, ensuring every visual element maximizes engagement, strengthens brand identity, and delivers measurable impact across all platforms.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery1.jpg" alt="Rank Spiders social media marketing campaign work sample" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery2.jpg" alt="Rank Spiders Facebook and Instagram marketing project results" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Strategic Visual Storytelling</h3>
                      <p>Every design is crafted to convey your brand narrative compellingly, combining creativity, strategy, and audience insights to leave a lasting, memorable impact across all platforms.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Consistent Brand Identity</h3>
                      <p>Maintain cohesive visual aesthetics across digital and print media, ensuring your brand is instantly recognizable, professional, and trusted by audiences, enhancing long-term brand equity.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Engagement-Oriented Creativity</h3>
                      <p>Designs are developed to capture attention, encourage meaningful interaction, and inspire audience participation, turning every visual into an effective tool for engagement and conversion.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Data-Informed Design Decisions</h3>
                      <p>Analytics and audience behavior insights guide creative choices, optimizing visuals for higher engagement, better recall, and measurable results aligned with your business objectives.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Trend-Driven Innovation</h3>
                      <p>Incorporating modern design trends, techniques, and technologies ensures visuals remain fresh, relevant, and competitive in a fast-evolving digital and creative landscape.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Multi-Platform Adaptability</h3>
                      <p>Graphics are designed for seamless use across social media, websites, print, and digital campaigns, providing a consistent, professional, and effective brand presence everywhere.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion-Focused Visuals</h3>
                      <p>Every design element is strategically placed to guide audiences toward desired actions, enhancing lead generation, product interest, and measurable business outcomes.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>User-Centric Design Approach</h3>
                      <p>Visuals are tailored based on audience preferences, behaviors, and interactions to ensure designs are intuitive, engaging, and memorable for maximum impact.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>High-Quality Production Standards</h3>
                      <p>Every creative asset is executed with attention to detail, precision, and professional quality, reflecting brand excellence and credibility in every visual.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Scalable Creative Solutions</h3>
                      <p>Designs and strategies are built to evolve with your brand, supporting future campaigns, new products, and expanding digital presence efficiently.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Transforming Ideas into Iconic Visuals</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Creative expertise and strategic insights combine to craft visually stunning designs that elevate brand identity, engage audiences, and deliver measurable impact across digital and print platforms.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>Designs that captivate, engage audiences, and create lasting brand impressions.</li>
                    <li>Creative strategies grounded in insight, ensuring every visual drives meaningful impact.</li>
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
                  <div className="icon-box"><img src="/images/icons/icon-belief-fund.svg" alt="" /></div>
                  <div className="belief-fund-content">
                    <p>Total fund</p>
                    <h3>$2412.00</h3>
                  </div>
                </div>
                <div className="belief-graph-image"><img src="/images/sections/belief-graph-imge.png" alt="Client business growth graph showing digital marketing ROI by Rank Spiders" /></div>
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

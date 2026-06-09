'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VideoEditing() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What types of videos can you edit?",
      answer: "We edit social media reels, promotional videos, brand storytelling clips, corporate presentations, YouTube content, TikTok videos, advertisements, and long-form cinematic productions."
    },
    {
      id: 2,
      question: "2. How long does it take to edit a video?",
      answer: "Editing time varies by project complexity, length, and style. Typically, short-form videos take 1–3 days, while long-form or VFX-heavy projects may take 1–2 weeks."
    },
    {
      id: 3,
      question: "3. Do you provide revisions?",
      answer: "Yes, we offer multiple rounds of revisions to ensure every edit aligns with your vision, brand identity, and audience engagement goals."
    },
    {
      id: 4,
      question: "4. Can you edit videos for different social media platforms?",
      answer: "Absolutely. We optimize aspect ratios, pacing, captions, and styles specifically for Instagram, TikTok, YouTube, LinkedIn, and other digital platforms."
    },
    {
      id: 5,
      question: "5. What formats do you deliver videos in?",
      answer: "We provide all standard formats, including MP4, MOV, and high-resolution options suitable for social media, websites, and broadcast purposes."
    },
    {
      id: 6,
      question: "6. Do you offer motion graphics and effects?",
      answer: "Yes, our team can incorporate motion graphics, animated titles, visual effects, and color grading to make your videos more engaging and professional."
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Video <span>Editing</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="#">/ social media</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">/ Video Editing</li>
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
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
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
                    <li><Link href="/instagram-marketing-agency">Instagram Marketing</Link></li>
                    <li><Link href="/linkdin-marketing-agency">Linkdin Marketing</Link></li>
                    <li><Link href="/facebook-marketing-agency">Facebook Marketing</Link></li>
                    <li><Link href="/pinterest-marketing-agency">Pinterest Marketing</Link></li>
                    <li><Link href="/graphic-design-agency">Graphic Deisgn</Link></li>
                    <li><Link href="/youtube-marketing-agency">Youtube Marketing</Link></li>
                    <li><Link href="/niche-industries-agency">Niche Industries</Link></li>
                  </ul>
                </div>

                <div className="page-cta-box sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="page-cta-header">
                    <div className="review-images">
                      <div className="review-image"><img src="/images/authors/author-1.jpg" alt="" /></div>
                      <div className="review-image"><img src="/images/authors/author-2.jpg" alt="" /></div>
                      <div className="review-image"><img src="/images/authors/author-3.jpg" alt="" /></div>
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
                      <a href="tel:+919988357092"><img src="/images/icons/icon-phone-white.svg" alt="" /> +91 99883-57092</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/project-marketing-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Our video editing services transform raw clips into high-impact, trend-ready visuals that capture attention instantly. We blend storytelling with the latest industry trends—fast-paced cuts, aesthetic transitions, AI-enhanced effects, dynamic captions, and platform-optimized formats for Reels, TikTok, YouTube Shorts, and long-form content. Every edit is crafted to elevate your brand’s personality while aligning with what today’s audiences engage with most. No generic templates—only customized, performance-driven edits designed to boost reach, retention, and conversions. With real-time trend analysis and creative precision, we turn every video into a powerful asset that strengthens your digital presence and grows your brand.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Boost Your Brand With Strategic <span>Video Editing</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We blend trend-driven editing techniques, creative storytelling, and platform-focused expertise to turn your raw footage into powerful visual content. From short-form reels to high-quality brand videos, our editing approach enhances engagement, boosts viewer retention, and strengthens your brand’s digital presence.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Precision Edits Crafted for Maximum Impact</li>
                      <li>Platform-Optimized Videos for Every Format</li>
                      <li>Engaging Visual Stories That Hold Attention</li>
                      <li>Performance-Driven Editing Backed by Insights</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Skilled Video Editing Professionals</h3>
                        <p>Our team is trained in advanced editing techniques, motion graphics, and modern visual styles.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Creative & Trend-Focused Editing Approach</h3>
                        <p>We use real-time trends, audience insights, and performance data to craft videos that engage and convert.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-highlight-image.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Editing Decisions Powered by Data & Trends</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We analyze viewer behavior and engagement patterns to refine each edit in real time. Our insight-driven approach ensures every frame performs better, increases retention, and delivers consistent, impactful results that strengthen your brand’s visual presence.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Precision Edits Tailored for Maximum Impact</li>
                      <li>Seamless Video Delivery Across All Platforms</li>
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
                          <h3>Creative Direction & Footage Breakdown</h3>
                          <p>We start by understanding your brand style, goals, and audience expectations. Then we analyze your raw footage to identify the strongest moments, narratives, and visual opportunities—building a clear creative direction for your video.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Editing Flow & Visual Planning</h3>
                          <p>We map out the pacing, transitions, effects, and storytelling structure to match current trends and platform requirements. This strategic planning ensures every edit feels intentional, engaging, and aligned with your brand’s visual identity.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Crafting Powerful Visual Stories Through Smart Editing</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We analyze viewer behavior, engagement patterns, and real-time performance to refine every edit with precision. Our insight-led editing approach ensures each cut, transition, and visual element is backed by data—resulting in videos that captivate audiences, boost retention, and deliver consistent, scalable growth for your brand.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery3.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery4.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Insight-Led Editing Precision</h3>
                      <p>We analyze viewer behavior, retention patterns, and engagement peaks to refine every cut. This ensures each video performs stronger, keeps audiences watching, and delivers measurable brand growth.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Platform-Optimized Visuals</h3>
                      <p>Every edit is tailored for Reels, TikTok, YouTube, and ads. We adapt pacing, aspect ratios, captions, and style to match each platform’s unique audience expectations.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Storytelling That Connects</h3>
                      <p>We craft compelling narratives by selecting impactful moments, enhancing emotions, and structuring scenes creatively. This storytelling-driven approach boosts viewer connection and increases overall engagement significantly.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Trends Blended With Strategy</h3>
                      <p>We combine the latest editing trends with strategic brand goals, ensuring every video feels modern, relevant, and aligned with your identity while maximizing audience appeal.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Dynamic Motion & Effects</h3>
                      <p>We use motion graphics, transitions, and visual effects to elevate your footage. Strategic effects enhance storytelling, retain attention, and make every video feel polished and professional.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Color Grading & Visual Tone</h3>
                      <p>Our expert color grading sets the mood, reinforces branding, and enhances visuals. Every frame is optimized to create immersive, consistent, and visually striking content for audiences.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience-Centric Editing</h3>
                      <p>We study viewer behavior and preferences to guide editing decisions. Each video is crafted to resonate with your target audience, maximize engagement, and drive measurable results.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Real-Time Performance Optimization</h3>
                      <p>We monitor engagement metrics, drop-offs, and watch times, using insights to adjust edits. Continuous optimization ensures your videos remain effective, captivating, and aligned with audience expectations.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Creativity Meets Precision in Every Edit</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We combine creative storytelling, trend-focused editing, and technical expertise to transform raw footage into engaging, high-performing videos that elevate your brand, captivate audiences, and maximize digital impact.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We create videos that captivate audiences, evoke emotions, and drive engagement</li>
                    <li>Every edit is purpose-driven, ensuring your content not only looks stunning but also delivers measurable impact.</li>
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function YoutubeMarketingAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What YouTube marketing services does Rank Spiders offer?",
      answer: "We provide end-to-end YouTube marketing including channel setup and optimization, video SEO (titles, descriptions, tags, thumbnails), content strategy, audience growth, video promotion, YouTube Ads management, and detailed performance analytics."
    },
    {
      id: 2,
      question: "2. How does YouTube marketing help grow my business?",
      answer: "YouTube is the world's second-largest search engine with over 2 billion logged-in users monthly. A well-optimized YouTube presence builds brand authority, drives organic traffic, improves SEO, and creates a direct relationship with your audience through long-form video content."
    },
    {
      id: 3,
      question: "3. How long does it take to grow a YouTube channel?",
      answer: "Organic YouTube growth typically requires 6–12 months of consistent, optimized content publishing. Paid YouTube Ads (pre-roll, discovery, bumper ads) can deliver faster brand awareness and channel growth within weeks. We focus on strategies that build compounding, long-term results."
    },
    {
      id: 4,
      question: "4. Do you help with video SEO and optimization?",
      answer: "Absolutely. We optimize every video with keyword-rich titles, detailed descriptions, strategic tags, custom thumbnails, end screens, cards, and chapter markers — ensuring your videos rank in YouTube search and get recommended to the right audience."
    },
    {
      id: 5,
      question: "5. Can you run YouTube Ads for my business?",
      answer: "Yes. We manage full YouTube Ads campaigns including in-stream ads, discovery ads, and bumper ads — targeting specific audiences by demographics, interests, keywords, and placements to maximize reach, views, and conversions for your business."
    },
    {
      id: 6,
      question: "6. Do you create video content or just manage the channel?",
      answer: "We offer both. Our service includes channel management, strategy, and optimization. We can also work with your existing video content or collaborate on scriptwriting and production direction to ensure your videos are compelling, on-brand, and optimized for performance."
    }
  ];

  return (
    <>
      <PageHeader
        title="YouTube"
        subtitle="Marketing"
        breadcrumbs={[
          { label: 'Social Media', href: '/services/social-media' },
          { label: 'YouTube Marketing', active: true }
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
                    <img src="/images/services/youtube/youtube-marketing.png" alt="Rank Spiders YouTube Marketing Services — Grow Your Brand, Reach Millions, Get Results" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p>YouTube is the world's second-largest search engine and one of the most powerful platforms for building brand authority, driving organic traffic, and connecting with your audience at scale. Our YouTube marketing services help businesses grow their channel, reach the right viewers, and turn video content into a consistent source of leads and revenue.</p>
                  <p data--delay="0.4s">We don't just upload videos — we build a complete YouTube growth strategy. From channel setup and video SEO to content planning, audience growth campaigns, and performance analytics, our team handles every element of YouTube marketing so your brand can grow faster with less effort on your part.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Grow Your Brand. <span>Reach Millions. Get Results.</span></h2>
                    <p data--delay="0.6s">YouTube's 2 billion monthly users are watching, searching, and discovering new brands every day. Our data-driven YouTube marketing strategies ensure your business appears in front of the right viewers at the right time — building subscribers, driving traffic, and generating qualified leads.</p>

                    <ul data--delay="0.8s">
                      <li>Professional YouTube Channel Setup & Optimization</li>
                      <li>Video SEO — Titles, Descriptions, Tags & Thumbnails</li>
                      <li>Strategic Content Planning & Publishing Schedule</li>
                      <li>Audience Growth & Subscriber Campaigns</li>
                      <li>Video Promotion & YouTube Ads Management</li>
                      <li>Performance Analytics & Monthly Reporting</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified YouTube Marketing Experts</h3>
                        <p>Our certified YouTube specialists combine platform expertise, SEO knowledge, and creative strategy to grow your channel organically and through paid promotion — delivering views, subscribers, and real business results.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Video Strategy</h3>
                        <p>We analyze your audience demographics, competitor channels, trending topics, and performance data to develop a YouTube content strategy that consistently grows your reach, engagement, and revenue over time.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Rank Spiders team developing YouTube content strategy for brand growth" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Our YouTube Marketing Services</h2>
                    <p data--delay="0.2s">From channel optimization and video SEO to paid promotion and analytics, we cover every aspect of YouTube marketing to help your business grow its audience, build authority, and drive consistent results.</p>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">1</span>M+</h3>
                          <p>Total views generated through our YouTube campaigns</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list " data--delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Channel Setup & Optimization</h3>
                          <p>We create and optimize your YouTube channel with a professional banner, keyword-rich channel description, playlists, and branding elements — establishing a strong, trustworthy presence that attracts subscribers from day one.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Video SEO</h3>
                          <p>Every video is optimized with keyword-researched titles, detailed descriptions, strategic tags, chapter timestamps, and custom thumbnails — ensuring maximum discoverability in YouTube search and the suggested video feed.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Content Strategy, Promotion & Analytics</h2>
                    <p data--delay="0.2s">A strong content strategy, consistent promotion, and data-driven optimization are the three pillars of YouTube success. We manage all three to ensure your channel grows faster, reaches more viewers, and delivers measurable business results.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery1.jpg" alt="Rank Spiders YouTube content strategy and video SEO campaign" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery2.jpg" alt="Rank Spiders YouTube channel growth and performance analytics" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Content Strategy</h3>
                      <p>We develop an engaging, audience-first content strategy that maps topics to your viewers' interests, business goals, and seasonal trends — creating a consistent publishing schedule that builds subscriber loyalty and watch time.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience Growth</h3>
                      <p>We grow your subscriber base organically and through targeted campaigns — attracting viewers who are genuinely interested in your niche, increasing watch time, improving engagement rates, and building a loyal community around your brand.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Video Promotion</h3>
                      <p>We promote your videos through YouTube Ads (in-stream, discovery, bumper formats), social media cross-posting, email campaigns, and collaboration strategies — maximizing views, reach, and the impact of every piece of content you publish.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance Analytics</h3>
                      <p>We track all key YouTube metrics — views, watch time, subscriber growth, click-through rate, audience retention, and conversion data — to analyze what's working, identify opportunities, and continuously optimize your content strategy for better results.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Increase Brand Awareness</h3>
                      <p>YouTube's massive reach and the viral potential of video content make it the most effective platform for rapid brand awareness. We position your brand in front of millions of potential customers through strategic content and targeted advertising.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Drive Targeted Traffic & Sales</h3>
                      <p>Beyond views and subscribers, our YouTube marketing drives real business outcomes — website traffic, product inquiries, service leads, and sales — by combining compelling content with strategic CTAs and conversion-focused campaigns.</p>
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Let's Grow Your Business with YouTube Marketing</h2>
                  <p data--delay="0.4s">Video is the most engaging content format on the internet, and YouTube is its largest stage. At Rank Spiders, we believe every business has a story worth sharing — and YouTube is the best place to tell it. Our YouTube marketing strategies are designed to build lasting audiences, drive consistent traffic, and turn viewers into customers.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>Build trust and authority through valuable, high-quality video content your audience loves.</li>
                    <li>Drive targeted website traffic and qualified leads from YouTube's massive, engaged user base.</li>
                    <li>Grow a loyal subscriber community that supports your brand's long-term success.</li>
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
                    <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven YouTube marketing agency India" />
                  </figure>
                </div>
                <div className="belief-graph-image">
                  <img src="/images/sections/belief-graph-imge.png" alt="Client business growth graph showing YouTube marketing ROI by Rank Spiders" />
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function SocialMediaConsultancyAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is Organic Growth Consultancy?",
      answer: "Organic Growth Consultancy is a strategic service focused on growing your business online without relying on paid advertising. We help you increase organic traffic, build brand authority, grow social media followings, and generate leads through content, SEO, and audience engagement strategies."
    },
    {
      id: 2,
      question: "2. How is organic growth different from paid advertising?",
      answer: "Paid advertising delivers immediate but temporary results that stop when you stop spending. Organic growth builds lasting assets — SEO rankings, social media authority, content libraries, and brand trust — that continue generating traffic, leads, and sales long after the initial investment."
    },
    {
      id: 3,
      question: "3. How long does it take to see organic growth results?",
      answer: "Organic growth is a long-term strategy. Most businesses begin seeing meaningful improvements in traffic and engagement within 3–6 months, with significant results compounding over 6–12 months of consistent strategy execution and content publishing."
    },
    {
      id: 4,
      question: "4. What does your organic growth consultancy include?",
      answer: "Our consultancy covers SEO and content strategy, social media organic growth, audience building, brand authority development, competitor analysis, data-driven strategy refinement, and sustainable growth planning tailored to your specific business and industry."
    },
    {
      id: 5,
      question: "5. Is organic growth suitable for all types of businesses?",
      answer: "Yes. Whether you're a startup, local business, B2B company, or eCommerce brand, organic growth strategies can be tailored to your goals and budget. In fact, organic growth often delivers the best long-term ROI because the results compound over time without ongoing ad spend."
    }
  ];

  const services = [
    {
      title: "SEO & Content Strategy",
      description: "We develop comprehensive SEO and content strategies that improve your search rankings, drive organic traffic, and establish your brand as an authority in your industry — creating a sustainable pipeline of website visitors and qualified leads."
    },
    {
      title: "Social Media Organic Growth",
      description: "We build and execute organic social media strategies that grow your following, increase engagement, and strengthen your brand presence across platforms — without relying on paid ads to reach your audience."
    },
    {
      title: "Audience Building",
      description: "We identify and attract your ideal customers through targeted content, community engagement, and platform-specific strategies — building an engaged audience that trusts your brand and actively follows your business journey."
    },
    {
      title: "Brand Authority & Trust",
      description: "We establish your brand as a credible, trusted authority in your niche through thought leadership content, consistent messaging, and strategic positioning — making your business the go-to choice when customers are ready to buy."
    },
    {
      title: "Data-Driven Strategy",
      description: "Every decision is backed by data. We analyze your current performance, competitor strategies, audience behavior, and industry trends to make informed recommendations that maximize organic growth and eliminate guesswork."
    },
    {
      title: "Sustainable Growth Planning",
      description: "We create long-term organic growth roadmaps that compound in value over time — ensuring your business builds lasting digital assets that continue delivering traffic, leads, and revenue for years into the future."
    }
  ];

  return (
    <>
      <PageHeader
        title="Organic Growth"
        subtitle="Consultancy"
        breadcrumbs={[
          { label: 'Social Media', href: '/services/social-media' },
          { label: 'Organic Growth Consultancy', active: true }
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
                    <img src="/images/services/consultancy/organic-growth-consultancy.png" alt="Rank Spiders Organic Growth Consultancy — Real Growth, Sustainable Results" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p>Our Organic Growth Consultancy helps businesses grow naturally and sustainably by enhancing their online presence, building a strong brand, and attracting the right audience — without relying on paid ads. Through SEO, content strategy, social media, and audience building, we create lasting digital assets that drive consistent, compounding results.</p>
                  <p data--delay="0.4s">We believe real, lasting business growth comes from building genuine connections with your audience. Our consultancy combines data-driven strategy with creative execution to help your business rank higher in search, grow its social following, build brand authority, and generate a steady stream of qualified leads — all organically.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Real Growth. <span>Sustainable Results.</span></h2>
                    <p data--delay="0.6s">Organic growth is the most cost-effective and sustainable form of business growth. It builds brand authority, attracts loyal customers, and creates compounding returns that paid advertising simply cannot match over the long term. Our consultancy helps you unlock this potential systematically and strategically.</p>

                    <ul data--delay="0.8s">
                      <li>Increased Organic Traffic Without Paid Ads</li>
                      <li>Higher Engagement & Audience Conversions</li>
                      <li>Stronger Brand Visibility & Authority</li>
                      <li>Cost-Effective, Long-Term Business Growth</li>
                      <li>Long-Term & Sustainable Revenue Results</li>
                      <li>Better ROI Without Dependence on Paid Ads</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Growth Consultants</h3>
                        <p>Our experienced consultants bring expertise in SEO, content marketing, social media strategy, and audience psychology — helping you identify the fastest path to organic growth and execute it with precision.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Naturally & Sustainably</h3>
                        <p>We focus on building genuine brand authority and audience trust through value-driven content, ethical SEO practices, and community-first social strategies that deliver results that last.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/approach-image.jpg" alt="Rank Spiders strategic approach to organic business growth" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Our Organic Growth Consultancy Services</h2>
                    <p data--delay="0.2s">We provide a comprehensive range of organic growth services — from strategy development and SEO to social media and brand authority building — giving your business everything it needs to grow naturally and sustainably online.</p>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">120</span>K+</h3>
                          <p>Organic sessions generated for our clients per month</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list " data--delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Growth Strategy Development</h3>
                          <p>We analyze your current online presence, identify growth opportunities, and develop a clear, actionable organic growth roadmap — tailored to your business goals, industry, and target audience for maximum impact.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Strategy Execution & Optimization</h3>
                          <p>We implement your growth strategy with precision, continuously monitoring performance and refining our approach based on data — ensuring consistent improvement in traffic, engagement, and leads month over month.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Grow Organically. Succeed Naturally.</h2>
                    <p data--delay="0.2s">Our six core consultancy services work together to build a powerful, self-sustaining organic growth engine for your business — one that generates traffic, builds authority, and creates customers without ongoing ad spend.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery7.jpg" alt="Rank Spiders organic growth strategy and SEO consultancy results" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery8.jpg" alt="Rank Spiders audience building and brand authority development" />
                        </figure>
                      </div>
                    </div>

                    {services.map((service, index) => (
                      <div key={index} className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    ))}
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Powering Sustainable Growth Naturally and Sustainably</h2>
                  <p data--delay="0.4s">We believe that the most valuable business growth is the kind that doesn't stop when you stop spending. At Rank Spiders, our Organic Growth Consultancy is built on the principle that consistent strategy, quality content, and genuine audience engagement create compounding results that paid advertising never can.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>We analyze your business and identify the most effective organic growth opportunities specific to your industry and audience.</li>
                    <li>Every strategy we develop is rooted in data, ensuring measurable improvements in traffic, engagement, leads, and long-term revenue.</li>
                    <li>Our consultancy builds lasting digital assets — not short-term wins — that continue delivering value for your business for years to come.</li>
                  </ul>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">Get Your Free Consultation</Link>
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
                  <img src="/images/sections/belief-graph-imge.png" alt="Client business growth graph showing organic growth ROI by Rank Spiders" />
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

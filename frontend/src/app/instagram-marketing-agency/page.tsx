'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function InstagramMarketingAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What does your Instagram marketing service include?",
      answer: "Our service covers the full stack — profile optimisation, content strategy, creative production (reels, carousels, stories), hashtag strategy, community management, and monthly performance reporting. You can choose organic only, paid only, or a combined package."
    },
    {
      id: 2,
      question: "2. How many posts will you create per month?",
      answer: "Our standard plans include 12–20 posts per month depending on your package. This includes a mix of feed posts, reels, and stories. Every post is planned in advance and approved by you before publishing."
    },
    {
      id: 3,
      question: "3. Do you run Instagram Ads as part of this service?",
      answer: "Yes. We run Meta (Instagram + Facebook) ad campaigns targeting your ideal audience by location, interest, age, and behaviour. Ad spend is managed separately but we handle strategy, creatives, copy, and optimisation."
    },
    {
      id: 4,
      question: "4. How long does it take to grow followers organically?",
      answer: "Organic follower growth depends on your niche, current account size, and content quality. Most clients see consistent, targeted growth within 60–90 days. We focus on quality followers — people who are genuinely interested in your service."
    },
    {
      id: 5,
      question: "5. Can you manage Instagram for a local business?",
      answer: "Absolutely. Instagram is one of the most powerful platforms for local businesses in sectors like healthcare, beauty, food, retail, and hospitality. We have strong experience building local audiences that turn into walk-in customers."
    }
  ];

  return (
    <>
      <PageHeader
        title="Instagram"
        subtitle="Marketing Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Instagram Marketing', active: true }]}
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
                  <figure className="image-anime">
                    <img src="/images/digital-advantage-img-2.jpg" alt="Instagram Marketing Agency" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Instagram is the highest-engagement social platform for most consumer and B2C brands. Our Instagram marketing service turns your profile from a passive page into an active lead-generation engine — through content that stops the scroll and ads that convert.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Instagram Growth That <span>Translates Into Revenue</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We build Instagram strategies designed around one goal — turning followers into enquiries and enquiries into customers.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Profile Audit & Optimisation</li>
                      <li>Reels, Carousels & Story Production</li>
                      <li>Hashtag & SEO Strategy for Instagram Search</li>
                      <li>Instagram Ads with Precise Audience Targeting</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Content That Earns Attention</h3>
                        <p>Every reel, post, and story is designed for your specific audience — with hooks, captions, and visuals built to maximise reach and saves.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Audience Targeting & Ad Performance</h3>
                        <p>Our Meta ads experts run precise Instagram ad campaigns that bring your ideal customer to your profile and push them towards enquiring.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime">
                        <img src="/images/work-image-1.jpg" alt="Instagram Marketing Strategy" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">What We Do Month-to-Month</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Consistency wins on Instagram. We handle every aspect of your monthly content operation so your profile stays active, professional, and on-brand without requiring hours of your time.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Monthly Content Calendar with Pre-Approval</li>
                      <li>Reel Scripting, Production Direction & Editing</li>
                      <li>Daily Story Management & Highlights Curation</li>
                      <li>Competitor Monitoring & Trend Response</li>
                    </ul>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">150</span>+</h3>
                          <p>Instagram accounts grown across beauty, healthcare, travel, and retail</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Onboarding & Strategy</h3>
                          <p>We audit your current account, analyse competitors, define your ideal audience, and build a 90-day content strategy that aligns with your business goals before we post a single thing.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Ongoing Management & Reporting</h3>
                          <p>Every month we deliver content, engage with your community, and send you a report showing reach, engagement, follower growth, and — most importantly — how many enquiries came through Instagram.</p>
                        </div>
                      </div>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Instagram Should <span>Bring You Clients, Not Just Followers</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Follower counts mean nothing if they don't translate into enquiries. Every decision we make — from the hook on a reel to the call-to-action in a story — is designed to move the right people closer to contacting your business.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get a free audit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/our-belief-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
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
                  <div className="accordion-body"><p>{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

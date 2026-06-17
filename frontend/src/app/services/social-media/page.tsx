'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Which social media platforms do you manage?",
      answer: "We manage Instagram, Facebook, LinkedIn, YouTube, Pinterest, and Twitter/X. Our strategy is platform-specific â€” we don't copy-paste the same content across channels. Each platform gets a tailored content plan based on its algorithm, audience behaviour, and your business goals."
    },
    {
      id: 2,
      question: "2. How do you measure success in social media campaigns?",
      answer: "We track engagement rate, reach, follower growth, click-through rate, and most importantly â€” enquiries and conversions attributed to social. Every monthly report ties social activity back to real business outcomes, not vanity metrics."
    },
    {
      id: 3,
      question: "3. Do you create the content or do we have to supply it?",
      answer: "We handle everything â€” strategy, copywriting, graphic design, and scheduling. You approve before anything goes live. If you have brand photos or videos, we incorporate them. If not, we create scroll-stopping visuals using your brand guidelines."
    },
    {
      id: 4,
      question: "4. Can you run paid social ads alongside organic posts?",
      answer: "Yes. Our social media management and paid social advertising work hand-in-hand. Organic builds brand trust; paid ads amplify reach and drive direct conversions. We offer both as a combined package or separately."
    },
    {
      id: 5,
      question: "5. How quickly can we expect results?",
      answer: "Engagement and follower growth typically start improving within 30â€“60 days. Lead generation results from social depend on your industry and budget, but most clients see measurable enquiry growth within 90 days of a structured strategy."
    }
  ];

  return (
    <>
      <PageHeader
        title="Social Media"
        subtitle="Marketing"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Social Media Marketing', active: true }]}
      />

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
                    <img src="/images/sections/digital-advantage-img-2.jpg" alt="Social Media Marketing Agency" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p>Social media is where brands win or lose attention. Our social media marketing strategies are built to amplify your brand's voice, connect with your audience at every touchpoint, and turn engagement into real business enquiries.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Build Your Brand <span>Where Customers Live</span></h2>
                    <p data--delay="0.6s">We engineer platform-specific strategies that grow your following, build trust, and drive direct action â€” not just likes.</p>

                    <ul data--delay="0.8s">
                      <li>Platform-Specific Content Strategy</li>
                      <li>Community Management & Engagement</li>
                      <li>Paid Social + Organic Growth Combined</li>
                      <li>Data-Backed Monthly Performance Reports</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Creative Content That Converts</h3>
                        <p>From reels to carousels to stories â€” we create content designed to stop the scroll and start conversations that lead to enquiries.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Community-Led Brand Growth</h3>
                        <p>We manage comments, DMs, and brand mentions to build an engaged audience that trusts your brand and refers it to others.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime">
                        <img src="/images/sections/work-image-1.jpg" alt="Social Media Strategy" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Platforms We Grow Your Brand On</h2>
                    <p data--delay="0.2s">Each platform needs a different voice, cadence, and content type. We build tailored strategies for every channel you need â€” so your brand shows up consistently and professionally wherever your audience is.</p>

                    <ul data--delay="0.4s">
                      <li>Instagram â€” Reels, Stories, and Profile Optimisation</li>
                      <li>Facebook â€” Page Management, Groups, and Ads</li>
                      <li>LinkedIn â€” Thought Leadership and B2B Outreach</li>
                      <li>YouTube â€” Video Strategy and Channel Growth</li>
                    </ul>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">200</span>+</h3>
                          <p>Social campaigns delivered across industries and platforms</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list " data--delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Strategy & Content Planning</h3>
                          <p>We start with a deep audit of your current presence, your competitors, and your target audience â€” then build a content calendar aligned to your business goals and seasonal opportunities.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Execution & Optimisation</h3>
                          <p>We create, schedule, and post all content. Every week we analyse what's performing and adjust. Every month you get a clear report showing growth, reach, and enquiries generated.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Social That Drives Real Business Results</h2>
                    <p data--delay="0.2s">Great social media management isn't about posting every day. It's about posting the right thing to the right audience at the right time â€” and making sure every piece of content moves people closer to enquiring.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime">
                          <img src="/images/gallery/gallery1.jpg" alt="Rank Spiders social media marketing campaign work sample" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime">
                          <img src="/images/gallery/gallery2.jpg" alt="Rank Spiders Facebook and Instagram marketing project results" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Brand Voice & Visual Identity</h3>
                      <p>We build a consistent look and tone across every post â€” so your brand is instantly recognisable whether someone sees you on Instagram, Facebook, or LinkedIn.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Engagement That Builds Trust</h3>
                      <p>We respond to comments and DMs promptly, turning social interactions into relationships that lead to referrals and repeat business.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Paid Social Amplification</h3>
                      <p>When organic reach isn't enough, our targeted paid social campaigns put your content in front of exactly the right audience â€” by interest, location, age, and behaviour.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Competitor Benchmarking</h3>
                      <p>We track your competitors every month. When they post something that outperforms, we analyse it, adapt the strategy, and ensure you stay ahead in your market.</p>
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Social Media Should <span>Generate Leads, Not Just Likes</span></h2>
                  <p data--delay="0.4s">Followers and likes are not a business metric. Every social strategy we build is reverse-engineered from the enquiries and sales your business needs â€” not the vanity numbers most agencies obsess over.</p>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get a free audit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven digital marketing agency India" />
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

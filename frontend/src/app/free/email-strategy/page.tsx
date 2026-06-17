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
      question: "1. What is included in the free email strategy?",
      answer: "You receive a tailored email marketing roadmap covering audience segmentation, campaign types, send frequency, subject line frameworks, and automation sequences designed for your business goals."
    },
    {
      id: 2,
      question: "2. How do you personalise the strategy for my business?",
      answer: "We review your current email list, business model, competitors, and target audience before crafting a strategy that fits your specific industry and conversion goals."
    },
    {
      id: 3,
      question: "3. Which email platforms do you support?",
      answer: "Our strategies work with all major platforms including Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and Brevo — we adapt recommendations to the platform you already use."
    },
    {
      id: 4,
      question: "4. How quickly will I receive my email strategy?",
      answer: "Most free email strategies are delivered within 2–3 business days after our initial discovery call or questionnaire is completed."
    },
    {
      id: 5,
      question: "5. Is there any commitment required after the free strategy?",
      answer: "None at all. The strategy is yours to keep and implement independently. We simply hope the quality speaks for itself and you choose to work with us."
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 data-cursor="-opaque">Free <span> Email Strategy</span></h1>
                <nav data--delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="/services/content/email-marketing">/ Email Marketing</Link></li>
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
                <div className="page-category-list ">
                  <h3>Discover Our More Services</h3>
                  <ul>
                    <li><Link href="/free/demo-content">Free Demo Content</Link></li>
                    <li><Link href="/services/web-development/niche-industries">Niche Industries</Link></li>
                  </ul>
                </div>

                <div className="page-cta-box sidebar-cta-box " data--delay="0.2s">
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
                  <p>Email remains the highest-ROI digital marketing channel — and a well-executed strategy is the difference between a list that grows revenue and one that collects dust. Our Free Email Strategy gives you a clear, actionable blueprint built around your audience, goals, and the platforms you already use.</p>
                  <p data--delay="0.4s">We review your current email activity, subscriber behaviour, and competitive landscape to produce a personalised roadmap covering segmentation, automation, campaign cadence, and copywriting frameworks. You walk away with a strategy you can implement immediately — no lock-in, no generic templates.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">A Complete Email Roadmap — <span>Built For Your Business</span></h2>
                    <p data--delay="0.6s">Your free strategy covers every stage of the email funnel: list growth tactics, welcome sequences, nurture flows, promotional campaigns, and re-engagement series. Each recommendation is tied to measurable outcomes so you know exactly what success looks like.</p>

                    <ul data--delay="0.8s">
                      <li>Audience Segmentation & Personalisation Framework</li>
                      <li>Automation Sequences That Convert on Autopilot</li>
                      <li>Subject Line & Preview Text Formulas</li>
                      <li>Send-Time & Frequency Recommendations</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Email Marketing Specialists</h3>
                        <p>Experts in deliverability, automation, and revenue-focused campaigns.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Audience Intelligence</h3>
                        <p>Segmentation and behavioural insights that drive opens, clicks, and sales.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-2.jpg" alt="SEO and social media marketing performance metrics dashboard" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Email Metrics That Drive Strategy</h2>
                    <p data--delay="0.2s">Your strategy is built on real data — open rates, click-through rates, list churn, and revenue-per-subscriber benchmarks for your industry. This gives every recommendation a measurable baseline and a clear improvement target.</p>

                    <ul data--delay="0.4s">
                      <li>Industry Benchmarking & Gap Analysis</li>
                      <li>Revenue Attribution & Conversion Mapping</li>
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

                      <div className="service-growth-item-list " data--delay="0.6s">
                        <div className="service-growth-item">
                          <h3>List Segmentation Blueprint</h3>
                          <p>Your subscriber list is divided into behavioural and demographic segments so every email reaches the right person with the right message at the right time, improving both engagement and deliverability.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Automation Flow Design</h3>
                          <p>We map out welcome sequences, abandoned-cart flows, post-purchase nurture, and win-back campaigns that run 24/7 — turning your list into a revenue engine without ongoing manual effort.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>What Your Free Email Strategy Covers</h2>
                    <p data--delay="0.2s">Our strategy document is a practical, ready-to-implement guide — not a generic slide deck. It maps out exactly how to grow your list, improve open rates, automate revenue, and keep subscribers engaged through every stage of the customer lifecycle.</p>

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
                      <h3>Audience Segmentation Plan</h3>
                      <p>A structured breakdown of your subscriber list into meaningful segments based on behaviour, purchase history, and engagement level so every send feels personal and relevant.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Welcome & Onboarding Sequence</h3>
                      <p>A multi-step welcome series designed to build trust, set expectations, and guide new subscribers toward their first conversion within days of joining your list.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Campaign Calendar Framework</h3>
                      <p>A 90-day send calendar covering promotional campaigns, newsletters, seasonal moments, and nurture emails — with recommended frequency to maximise engagement without burning out subscribers.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Subject Line Formula Bank</h3>
                      <p>Proven subject line structures and preview text formulas tailored to your audience and campaign type, tested to improve open rates across industries.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Automation Flow Map</h3>
                      <p>Visual mapping of your core automation sequences — welcome, abandoned cart, post-purchase, re-engagement — with trigger logic, timing, and copy direction for each step.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>List Growth Tactics</h3>
                      <p>Practical lead magnet ideas, pop-up timing strategies, and landing page recommendations to grow your subscriber base with qualified, high-intent contacts.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Deliverability Health Check</h3>
                      <p>Review of sending domain reputation, list hygiene practices, and authentication setup (SPF, DKIM, DMARC) to ensure emails land in inboxes, not spam folders.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>A/B Testing Roadmap</h3>
                      <p>A structured plan for testing subject lines, send times, CTA copy, and email layouts so your campaigns improve continuously with every send.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>KPI & Success Metrics</h3>
                      <p>Clear benchmarks for open rate, click-through rate, unsubscribe rate, and revenue-per-email so you always know whether your campaigns are performing or need adjustment.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Platform-Specific Recommendations</h3>
                      <p>Tailored guidance for your chosen email platform — from automation builder tips to template design best practices — so you can execute the strategy confidently from day one.</p>
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Email That Earns Trust and Drives Revenue</h2>
                  <p data--delay="0.4s">We believe email should be your most reliable revenue channel — not an afterthought. Great email strategy is built on understanding your audience deeply, sending the right message at the right moment, and measuring every outcome. That is exactly what your free strategy delivers.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>Every recommendation is grounded in data — subscriber behaviour, industry benchmarks, and conversion psychology — not guesswork.</li>
                    <li>The strategy is designed to be implemented immediately, giving you a clear action plan that generates results from the very first campaign.</li>
                  </ul>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
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
            <h2 data-cursor="-opaque">Frequently asked <span>question</span></h2>
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

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
      question: "1. What is a Technical SEO Audit?",
      answer: "A technical SEO audit evaluates your website’s structure, crawlability, indexing, speed, Core Web Vitals, and other technical elements to identify issues affecting search performance."
    },
    {
      id: 2,
      question: "2. Why is Technical SEO important?",
      answer: "It ensures search engines can crawl, index, and rank your website effectively, improving visibility, user experience, and organic traffic."
    },
    {
      id: 3,
      question: "3. How often should I perform a Technical SEO Audit?",
      answer: "Ideally, every 3–6 months or after major website updates to maintain optimal performance and stay ahead of search algorithm changes."
    },
    {
      id: 4,
      question: "4. What issues does a Technical SEO Audit uncover?",
      answer: "Audits detect crawl errors, broken links, slow pages, duplicate content, indexing problems, schema issues, and Core Web Vitals deficiencies."
    },
    {
      id: 5,
      question: "5. Will a Technical SEO Audit improve rankings immediately?",
      answer: "Improvements depend on implementation. While some fixes can have immediate effects, most results appear gradually as search engines re-index your optimized pages."
    }
  ];

  const features = [
    { title: "Crawlability & Indexing Optimization", description: "Ensure all important pages are crawlable and indexable. Fix robots.txt issues, XML sitemaps, and navigation structure to improve search engine accessibility and visibility." },
    { title: "Mobile & Core Web Vitals Optimization", description: "Optimize mobile usability, page speed, and Core Web Vitals metrics to improve rankings, reduce bounce rates, and deliver a superior user experience across devices." },
    { title: "Internal Linking Structure Review", description: "Analyze and optimize internal linking to distribute authority effectively, enhance user navigation, and help search engines understand page hierarchy and content relevance." },
    { title: "Backlink & Authority Assessment", description: "Audit existing backlinks, identify toxic links, and build a strategy for authoritative link acquisition to improve domain authority and overall search ranking" },
    { title: "Duplicate Content & Canonicalization Check", description: "Identify duplicate or thin content and implement canonical tags to consolidate link equity, avoid penalties, and improve SEO performance." },
    { title: "HTTPS & Security Audit", description: "Ensure website uses secure HTTPS protocols, fix mixed content issues, and maintain trust signals to protect users and boost search engine confidence." },
    { title: "URL Structure & Optimization", description: "Analyze URL formats for SEO-friendliness, consistency, and readability to enhance indexing, ranking potential, and user experience." },
    { title: "Technical SEO Reporting & Monitoring", description: "Set up automated tracking of crawl errors, indexing status, and site performance to monitor improvements and identify emerging issues proactively." },
    { title: "Page Depth & Navigation Analysis", description: "Evaluate site structure depth, optimize menus, and ensure important pages are easily reachable for users and search engine crawlers." },
    { title: "SEO Audit Roadmap & Implementation", description: "Create a structured action plan prioritizing critical technical fixes, performance improvements, and strategic optimizations to achieve measurable, sustainable SEO growth." }
  ];

  return (
    <>
      <PageHeader 
        title="Organic Growth" 
        subtitle="Consultancy" 
        breadcrumbs={[
          { label: 'consultancy', href: '#' },
          { label: 'Social Media Consultancy', active: true }
        ]} 
      />

      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>
      {/* Scrolling Ticker Section End */}

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <h3>Discover Our More Services</h3>
                  <ul>
                    <li><Link href="/seo-consultancy-agency">Seo Consultancy</Link></li>
                    <li><Link href="/business-growth-consultancy-agency">Business Growth Consultancy</Link></li>
                    <li><Link href="/organic-growth-consultancy-agency">organic Growth Consultancy</Link></li>
                  </ul>
                </div>
                <Sidebar />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/digital-advantage-img-1.jpg" alt="" />
                  </figure>
                </div>
                
                <div className="service-entry">
                  <p className="wow fadeInUp">A robust website structure is the foundation of search success. Our technical SEO audits dive deep into your site’s architecture, page speed, crawlability, indexing, and Core Web Vitals to uncover hidden issues that may affect rankings. By analyzing server response, site errors, mobile usability, and structured data, we provide actionable insights to optimize performance.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We combine advanced tools with human expertise to identify and fix bottlenecks, ensuring search engines can easily navigate, understand, and index your website. Our audits are not just about problem-solving—they’re about future-proofing your website for algorithm updates, improved user experience, and measurable growth in organic traffic.</p>
                
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Strengthen Your Website<span>with Technical SEO</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Advanced technical SEO audits and optimizations ensure your website is fast, crawlable, and fully indexable. By fixing errors, improving site architecture, and enhancing performance, we boost rankings, visibility, and organic growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Comprehensive Site Audits for Maximum Performance</li>
                      <li>Optimize Crawlability, Indexing & Site Structure</li>
                      <li>Fix Errors to Improve Search Engine Visibility</li>
                      <li>Data-Driven Insights for Measurable SEO Growth</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified SEO Audit Experts</h3>
                        <p>Trained professionals delivering advanced technical SEO insights.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Driven Technical Strategies</h3>
                        <p>Data-driven SEO improvements for higher search visibility.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/approach-image.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Maximize Organic Potential with Technical Audits</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Technical SEO audits uncover hidden errors, monitor site health, and improve architecture. Real-time performance tracking and data-driven strategies boost search engine visibility and sustainable organic growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Fix Errors to Boost Search Engine Rankings</li>
                      <li>Insight-Driven Recommendations for Measurable Growth</li>
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
                          <h3>Audit Blueprint Development</h3>
                          <p>We start by analyzing your website’s structure, crawlability, indexing, site speed, and technical errors. This audit identifies critical issues and opportunities to improve search engine performance.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Optimization Roadmap</h3>
                          <p>Based on audit findings, we create a detailed action plan addressing technical fixes, site enhancements, and performance improvements to boost rankings, visibility, and organic traffic sustainably.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Optimize, Analyze, and Rank Higher</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Audits assess website performance across structure, speed, indexing, and mobile usability. Data-driven findings enable strategic fixes, resulting in improved rankings, visibility, and measurable SEO success.</p>
                    
                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery7.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery8.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    {features.map((feature, index) => (
                      <div key={index} className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
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
                  <h3 className="wow fadeInUp">Our Belief</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Performance-Focused SEO Audits</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Technical SEO audits leverage analytics and crawl data to refine site architecture, resolve errors, and implement best practices, ensuring higher rankings and long-term, measurable search performance.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We analyze your website’s technical foundation to identify issues, optimize performance, and improve search engine visibility.</li>
                    <li>Every recommendation is rooted in data, ensuring measurable SEO improvements, higher rankings, and sustainable organic growth.</li>
                  </ul>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
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

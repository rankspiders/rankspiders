'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function LocalSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is Local SEO, and why is it important for my business?",
      answer: "Local SEO helps your business appear in nearby searches and on Google Maps, making it easier for local customers to find you. It’s essential for driving more calls, visits and leads from your area. Leading agencies like Rank Spiders and WebPulse specialize in Local SEO Services in India to improve visibility and conversions for small and local businesses."
    },
    {
      id: 2,
      question: "2. How long does Local SEO take to show results?",
      answer: "The results from Local SEO Services typically start showing within 2 to 3 months, depending on competition and your current online presence. Brands like Rank Spiders focus on steady, long-term ranking improvements through Google My Business Optimization Services, keyword targeting, and citation management."
    },
    {
      id: 3,
      question: "3. What is included in professional Local SEO Services?",
      answer: "Comprehensive Local SEO packages include Google Business Profile optimization, local citation building, keyword research, on-page SEO and link-building strategies. Agencies such as Rank Spiders and WebPulse provide complete Local SEO Marketing Services that enhance visibility on both search engines and Google Maps."
    },
    {
      id: 4,
      question: "4. How does Google My Business optimization help local businesses?",
      answer: "Optimizing your Google My Business profile improves your ranking in “near me” searches and enhances your visibility on Maps. Through Google My Business Profile Creation and ongoing updates, agencies like Rank Spiders ensure your business attracts more local traffic and builds trust with customers."
    },
    {
      id: 5,
      question: "5. How do I choose the right Local SEO company for my business?",
      answer: "Look for an agency with proven results, transparent reporting and customized strategies. Trusted companies like Rank Spiders and WebPulse stand out as leading Local SEO companies in Mohali and India, offering data-driven solutions that deliver measurable growth for local and multi-location businesses."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Local" 
        subtitle="Seo" 
        breadcrumbs={[
          { label: 'seo optimization', href: '#' },
          { label: 'Local Seo', active: true }
        ]} 
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
                  <figure className="image-anime reveal">
                    <img src="/images/promise-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <div className="service-strategy-box">
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Local SEO Services in India to Grow Your Local Business</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Our best local SEO services for small businesses are designed to boost your visibility in local searches, connect with nearby customers and drive meaningful engagement. From local SEO marketing services like Google Business Profile optimization to managing local SEO services near me listings, we ensure your brand is discoverable, trusted and relevant in your area.</p>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">At Rank Spiders, we don’t do one-size-fits-all solutions. Our team analyzes your local market in India, competitors and audience behavior to craft customized strategies that increase foot traffic, generate qualified leads and deliver measurable growth. With real-time performance analytics, every optimization is backed by data for maximum impact making us your reliable local SEO company India for lasting results.</p>

                    <div className="service-strategy-box">
                      <h2 className="wow fadeInUp" data-wow-delay="0.4s">Why Your Business <span> Needs Local SEO </span></h2>
                      <p className="wow fadeInUp" data-wow-delay="0.6s">We combine data-driven Local SEO Services in Mohali, creative optimization and proven expertise to help your business attract nearby customers, rank higher in local searches and drive measurable growth. Our tailored approach ensures that your business stands out in competitive markets while leveraging Local SEO Services India for broader regional reach.</p>

                      <ul className="wow fadeInUp" data-wow-delay="0.8s">
                        <li>Tailored Local SEO Campaigns for Maximum Reach</li>
                        <li>Consistent Visibility Across Maps and Listings</li>
                        <li>Engaging Nearby Audiences That Convert</li>
                        <li>Data-Driven Insights for Measurable Local Growth</li>
                      </ul>

                      <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                        <div className="strategy-body-item">
                          <h3>Certified Local SEO</h3>
                          <p>Our team is certified in local SEO expertise.</p>
                        </div>
                        <div className="strategy-body-item">
                          <h3>Data-Driven Strategies</h3>
                          <p>Strategies powered by analytics for measurable SEO growth</p>
                        </div>
                      </div>

                      <div className="service-strategy-image">
                        <figure className="image-anime reveal">
                          <img src="/images/approach-image.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-box">
                      <h2 className="wow fadeInUp">Our Local SEO Services</h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">At Rank Spiders, a trusted local SEO agency in Mohali, we specialize in delivering powerful local search engine optimization solutions that help your business appear where your customers are looking — on Google Maps, local listings and organic search results. Our tailored strategies are built to strengthen your online presence, increase local visibility and attract qualified leads from your area.</p>
                      <p className="wow fadeInUp" data-wow-delay="0.4s">Here’s what our comprehensive Local SEO Services include:</p>

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
                            <h3>Google Business Profile (GMB) Optimization</h3>
                            <p>Enhance your Google listing with accurate details, engaging posts and visuals to improve visibility on Maps and local searches.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Local Citation Building</h3>
                            <p>Strengthen your online credibility by creating consistent citations across major directories and business platforms.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Local Keyword Research</h3>
                            <p>Identify high-performing local search terms your customers use, ensuring your business ranks for relevant local queries.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>On-Page SEO for Local Pages</h3>
                            <p>Optimize your website content, meta tags and internal links to target local keywords effectively.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Google Maps Optimization</h3>
                            <p>Improve your placement on Google Maps and drive nearby traffic to your business location.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Review Management</h3>
                            <p>Build trust and engagement through positive customer reviews and timely responses to feedback.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>NAP Consistency Audit (Name, Address, Phone)</h3>
                            <p>Ensure your business information is accurate and consistent across all platforms for better search credibility.</p>
                          </div>
                          <div className="service-growth-item">
                            <h3>Local Backlink Building</h3>
                            <p>Earn high-quality backlinks from local directories, blogs and partners to boost your domain authority and rankings.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="service-impact-box">
                      <h2 className="wow fadeInUp">How Our Local <span> SEO Process Works</span></h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">At Rank Spiders, we follow a strategic and data-driven approach to deliver effective results through our Local SEO Services in India. Our proven process ensures your business gets maximum visibility across Google Search, Google Maps and local directories — helping you attract real customers nearby.</p>

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
                      
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Local SEO Audit</h3>
                        <p>Our team starts with a complete local SEO audit to evaluate your current online presence, Google visibility and local rankings. We analyze your website structure, Google Business listing, citations and backlinks to identify opportunities for improvement. This helps us design a personalized roadmap for success using the best Local SEO Marketing Services.</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Keyword and Competitor Research</h3>
                        <p>We perform in-depth keyword and competitor research to find what your potential customers are searching for. By focusing on localized terms, we uncover profitable opportunities that align with your niche. This ensures your content and listings rank higher for targeted phrases like “GMB services near me” and “local SEO company in India.”</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Google My Business Optimization</h3>
                        <p>We optimize and enhance your Google My Business profile to make it fully compliant and conversion-ready. From accurate business information to compelling visuals, posts and categories, our Google My Business Optimization Services improve your visibility in Google Maps and “near me” searches.</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Google My Business Profile Creation & Management</h3>
                        <p>If you don’t yet have a verified listing, our experts handle Google My Business Profile Creation from start to finish. We also offer ongoing Google Business Profile Management Services to keep your listing up to date, respond to reviews, and ensure your business stays ahead of competitors.</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>On-Page SEO for Local Pages</h3>
                        <p>We optimize your website’s local landing pages using targeted keywords and schema markup for better relevance. This step ensures your business appears for both location-specific and service-based searches, supporting your Google Business Profile Creation Services and overall website SEO strategy.</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Link Building & Citations</h3>
                        <p>Our link-building and citation strategies strengthen your brand authority across trusted platforms. We create high-quality citations in directories and acquire local backlinks that reinforce your local SEO services in India and build lasting search credibility.</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Reporting & Results Tracking</h3>
                        <p>Transparency is key. We provide detailed monthly reports with insights into rankings, calls, traffic and engagement. With our data-driven approach, you can see exactly how our Local SEO Marketing Services are growing your online visibility and ROI.</p>
                      </div>
                      <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                        <h3>Want to rank your business on Google Maps?</h3>
                        <p>Get your Free Local SEO Audit Today and let Rank Spiders help you dominate local search results with proven strategies.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Why Choose Us for Local SEO</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">At Rank Spiders, we are a trusted local SEO agency offering data-driven strategies to help your business rank higher on Google Maps and local search results. Our experienced Local SEO experts specialize in Google Business Profile optimization, local keyword targeting and citation building to increase your visibility and leads. We follow a proven Google Maps ranking strategy that ensures consistent results and measurable growth. With transparent monthly reports, you always know how your campaign is performing. Plus, our affordable Local SEO packages are tailored to fit small and medium businesses, delivering maximum ROI. Choose Rank Spiders for reliable, result-oriented local search engine optimization that connects your brand with the right local audience</p>
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
                    <img src="/images/our-belief-image.png" alt="" />
                  </figure>
                </div>
                <div className="belief-fund-box">
                  <div className="icon-box">
                    <img src="/images/icon-belief-fund.svg" alt="" />
                  </div>
                  <div className="belief-fund-content">
                    <p>Total fund</p>
                    <h3>$2412.00</h3>
                  </div>
                </div>
                <div className="belief-graph-image">
                  <img src="/images/belief-graph-imge.png" alt="" />
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

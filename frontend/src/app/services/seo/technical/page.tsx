'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function TechnicalSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is Technical SEO and why is it important for my website?",
      answer: "Technical SEO is the process of optimizing your website’s structure, performance and coding so search engines can easily crawl and index it. It involves improving site speed, fixing crawl errors, enhancing mobile usability and implementing structured data. Partnering with a reliable Technical SEO company in India like Rank Spiders ensures your website runs smoothly, loads faster and ranks higher on Google, ultimately improving visibility and user experience."
    },
    {
      id: 2,
      question: "2. How do Technical SEO Services in Mohali, Punjab help my business grow?",
      answer: "Professional Technical SEO Services in Mohali, Punjab enhance your website’s technical foundation, ensuring it meets Google’s best practices. This includes site audits, Core Web Vitals optimization and security improvements. Agencies like Rank Spiders focus on removing SEO barriers, improving indexing and boosting site health so your business gains more organic traffic, leads and conversions in competitive markets."
    },
    {
      id: 3,
      question: "3. What is included in Professional Technical SEO Services?",
      answer: "Professional Technical SEO Services include a wide range of optimizations such as website audits, schema markup, page speed improvements, XML sitemap setup and mobile-first optimization. Leading technical SEO experts from agencies like WebPulse ensure every aspect of your website — from code to structure — is aligned with search engine algorithms. These services strengthen your site’s visibility and ensure sustainable ranking growth."
    },
    {
      id: 4,
      question: "4. How long does it take to see results from Technical SEO Optimization?",
      answer: "The results from Technical SEO optimization depend on your website’s current state and the complexity of issues. Typically, noticeable improvements in speed, crawlability and rankings appear within 6 to 12 weeks. A skilled Technical SEO specialist can accelerate this process by fixing major issues early and continuously optimizing your site to meet evolving algorithm requirements."
    },
    {
      id: 5,
      question: "5. Why should I choose Rank Spiders for Technical SEO Services in India?",
      answer: "Rank Spiders is one of the best Technical SEO agencies known for its data-driven approach, transparency and measurable results. With a team of experienced Technical SEO consultants, we offer customized solutions that enhance site performance, fix technical errors and improve overall search visibility. Our focus on long-term growth, detailed reporting and continuous support makes us a trusted choice for businesses seeking reliable Technical SEO Services in India."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Technical" 
        subtitle="Seo" 
        breadcrumbs={[
          { label: 'seo optimization', href: '#' },
          { label: 'Technical Seo', active: true }
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
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/services/seo/technical-seo-banner.png"
                      alt="Technical SEO Agency India — Build a Strong Foundation, Rank Higher — site speed, crawlability, indexing, Core Web Vitals"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <h4 className="wow fadeInUp" data-wow-delay="0.2s">Technical SEO Agency in India | Advanced Website Optimization by Rank Spiders</h4>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">As a leading Technical SEO Agency in India, Rank Spiders specializes in building websites that perform flawlessly and rank higher across search engines. Our technical SEO experts focus on optimizing your site’s infrastructure, improving crawlability, enhancing page speed, and strengthening search visibility to help you dominate organic results. From fixing critical technical issues to implementing structured data and mobile-first optimization, we ensure your website is fully optimized for both users and search engines.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Unlike generic SEO providers, Rank Spiders takes a strategic and data-driven approach. Our technical SEO specialists conduct in-depth website audits, analyze competitors, and evaluate user behavior to design customized optimization strategies. Whether you need technical SEO services in Mohali Punjab or nationwide support, we deliver measurable results that improve rankings, performance, and overall website health.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">With continuous monitoring, detailed analytics, and proactive issue detection, we ensure your website remains fast, secure, and search-engine-friendly. Partner with Rank Spiders, your trusted technical SEO agency, to experience advanced optimization that drives sustainable growth in today’s competitive digital landscape.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Boost Your Website <span>Performance with Strategy </span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We combine data-driven technical SEO, innovative solutions, and proven expertise to enhance your site’s structure, speed, and visibility—ensuring sustainable organic growth and higher search rankings.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Tailored Technical SEO for Maximum Performance</li>
                      <li>Optimized Site Structure Across All Platforms</li>
                      <li>Enhanced User Experience That Boosts Conversions</li>
                      <li>Data-Driven Insights for Measurable SEO Growth</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>SEO Experts Certified</h3>
                        <p>Our team is certified in advanced technical SEO.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Optimization</h3>
                        <p>All strategies are powered by analytics and insights.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-2.jpg" alt="Web development and digital marketing strategy implementation at Rank Spiders" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Our Core Technical SEO Services</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">At Rank Spiders, our comprehensive Professional Technical SEO Services cover every aspect of your website’s technical health and performance. As a trusted technical SEO company in India, we specialize in improving site structure, crawlability and speed to help your business achieve higher rankings and better user experience. Whether you’re a local business or a B2B tech brand, our tailored solutions ensure your website is search-engine-ready and technically flawless.</p>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Here’s what our Technical SEO consultants focus on:</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Personalized SEO Strategies That Deliver Results</li>
                      <li>Consistent Website Performance Across All Devices</li>
                    </ul>

                    <div className="service-growth-body">
                      <div className="service-growth-item-list wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Website Technical Audit</h3>
                          <p>Our team performs a deep technical audit to identify and fix issues related to indexing, crawl errors, duplicate content and slow page speed. As one of the best technical SEO agencies, we ensure your website’s backend aligns with Google’s latest standards for optimal visibility.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Core Web Vitals Optimization</h3>
                          <p>We enhance your website’s performance by improving load time, interactivity and stability. This technical SEO optimization ensures a smooth user experience while boosting your Google ranking signals for speed and usability.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Site Structure & Crawl Optimization</h3>
                          <p>Our experts refine your site architecture to make it easily crawlable for search engines. A well-organized structure helps improve internal linking, reduces crawl waste and ensures important pages are indexed effectively.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Mobile-Friendly Optimization</h3>
                          <p>With Google’s mobile-first indexing, we make sure your website performs seamlessly across all devices. Our technical SEO consultants optimize mobile layouts, responsive design and usability metrics to improve engagement and rankings.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>HTTPS & Security Enhancements</h3>
                          <p>Security and trust are key ranking factors. We implement HTTPS protocols, fix mixed-content issues and ensure your website meets the highest security standards to protect user data and improve credibility.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Schema & Structured Data Implementation</h3>
                          <p>As part of our Professional Technical SEO Services, we integrate structured data markup to help search engines better understand your content. This increases your visibility in rich results and enhances click-through rates.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>XML Sitemap & Robots.txt Setup</h3>
                          <p>We configure and optimize your XML sitemap and robots.txt files to ensure efficient crawling and indexing. Our technical SEO specialists guide search engines to focus on high-value pages, improving crawl efficiency.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Website Migration SEO</h3>
                          <p>Planning to redesign or migrate your website? Our B2B tech SEO agency manages your transition safely to preserve rankings and organic visibility. We handle redirects, site audits and post-launch optimization to maintain performance.</p>
                        </div>
                        <p>As one of the most reliable technical SEO companies offering technical SEO services in Mohali, Punjab, Rank Spiders combines expertise, innovation and proven strategies to deliver measurable improvements in search visibility and website performance.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Our Process</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">At Rank Spiders, we follow a proven, data-driven workflow designed to deliver measurable results through precision and expertise. As a trusted Technical SEO company in India, we combine advanced tools, analytics, and best practices to ensure your website is technically sound, fully optimized, and search-engine friendly. Here’s how our Professional Technical SEO Services work step by step:</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/projects/project-1.jpg" alt="Rank Spiders case study - ecommerce SEO traffic growth" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/projects/project-2.jpg" alt="Rank Spiders case study - local SEO domination for multi-location brand" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Technical SEO Audit</h3>
                      <p>The process begins with a comprehensive Technical SEO audit that identifies crawl errors, indexing issues, broken links, and performance bottlenecks. Every element — from Core Web Vitals to site architecture — is analyzed to ensure your website’s foundation is optimized for both users and search engines.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Fix & Optimize</h3>
                      <p>After identifying technical gaps, targeted technical SEO optimization is implemented to enhance site speed, strengthen security, and improve navigation. This phase ensures your website meets Google’s performance and usability standards, resulting in better rankings and smoother user experience.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Schema & Meta Enhancements</h3>
                      <p>Structured data and metadata are optimized to make your website more understandable for search engines. Adding schema markup and refining meta titles, descriptions, and tags improves visibility in SERPs and increases click-through rates — a key element of Professional Technical SEO Services.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance Monitoring</h3>
                      <p>Continuous performance monitoring is essential to maintain SEO health. Tools like Google Search Console and Analytics are used to track site speed, crawl activity, and indexing. This step ensures that your technical SEO services in Mohali, Punjab continue to perform effectively and adapt to changing algorithms.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Reporting & Support</h3>
                      <p>Regular reporting and support provide complete transparency on your website’s technical performance. Detailed monthly reports include key metrics, issue tracking, and actionable recommendations to keep your site secure, fast, and optimized for long-term search visibility.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Why Choose Rank Spiders for Technical SEO</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Choosing Rank Spiders means partnering with a team of certified Technical SEO experts who blend experience, data, and innovation to deliver measurable results. We don’t believe in one-size-fits-all solutions — every project begins with a detailed technical audit and a custom optimization plan tailored to your website’s unique needs. As a leading Technical SEO company in India, we focus on enhancing website performance, fixing technical issues and ensuring search engines can easily crawl and index your site. Our transparent reporting, continuous performance tracking and long-term support make us a trusted choice for startups, SMBs and enterprises across industries.</p>
                </div>

                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>Proven Expertise in Technical SEO Optimization</li>
                    <p>With years of experience, our specialists have mastered the art of technical SEO optimization, delivering improved site speed, better crawlability and higher organic rankings that drive consistent growth.</p>
                    <li>Transparent Reporting & Ongoing Support</li>
                    <p>We provide clear, data-backed monthly reports and continuous guidance to ensure your website remains technically sound, secure and fully optimized for long-term success.</p>
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

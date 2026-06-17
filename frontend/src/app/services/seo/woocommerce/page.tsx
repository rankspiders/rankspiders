'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function WoocommerceSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is WordPress development?",
      answer: "WordPress development involves creating, customizing, and optimizing websites using the WordPress platform to deliver functional, responsive, and high-performing digital experiences."
    },
    {
      id: 2,
      question: "2. Why should I choose WordPress for my website?",
      answer: "WordPress is highly flexible, SEO-friendly, scalable, and easy to manage, making it ideal for businesses of all sizes and industries."
    },
    {
      id: 3,
      question: "3. Do you provide custom WordPress theme development?",
      answer: "Yes, we design fully custom themes that reflect your brand identity, ensuring a unique, professional, and conversion-focused website."
    },
    {
      id: 4,
      question: "4. Can you integrate plugins and third-party tools?",
      answer: "Absolutely. We integrate plugins, APIs, and third-party tools to enhance functionality, automate workflows, and improve user experience."
    },
    {
      id: 5,
      question: "5. Will my WordPress website be mobile-friendly?",
      answer: "Yes. Every site is fully responsive, providing seamless navigation and optimal performance across smartphones, tablets, and desktop devices."
    }
  ];

  const features = [
    { title: "Custom Design & Themes", description: "Tailored WordPress layouts and custom themes that perfectly reflect your brand identity while engaging visitors effectively, providing a visually stunning and conversion-focused website experience." },
    { title: "Mobile-First & Responsive", description: "Optimized for seamless performance across smartphones, tablets, and desktops, ensuring your WordPress website delivers an intuitive user experience and maintains engagement on all screen sizes." },
    { title: "High-Speed Performance", description: "Lightning-fast page load times designed to reduce bounce rates, enhance user experience, and improve search rankings, keeping your WordPress site competitive and conversion-focused." },
    { title: "SEO-Optimized Architecture", description: "Built-in SEO best practices across all pages, content, and structure to improve online visibility, attract organic traffic, and strengthen the overall digital presence of your brand." },
    { title: "Scalable & Secure", description: "Robust, scalable WordPress architecture combined with advanced security protocols, ensuring your website grows safely alongside your business while maintaining top-level protection against digital threats." },
    { title: "Plugin Integration", description: "Smart plugin selection and integration enhance functionality, automate key processes, and provide seamless additional features without compromising performance or user experience on your WordPress site." },
    { title: "Analytics & Insights", description: "Real-time visitor tracking, performance monitoring, and behavior analysis enable data-driven optimization, ensuring continuous improvement of engagement, conversions, and measurable website growth over time." },
    { title: "Conversion-Focused UX", description: "User journeys, navigation, and interactions strategically designed to guide visitors naturally toward actions that drive conversions, lead generation, and long-term business growth." },
    { title: "Continuous Optimization", description: "Regular updates, performance audits, and refinements keep your WordPress site fast, secure, and aligned with industry trends, ensuring maximum efficiency and visitor satisfaction consistently." },
    { title: "E-commerce Ready", description: "Fully optimized for WooCommerce and other WordPress e-commerce integrations, delivering a smooth shopping experience, higher conversions, and scalable online store functionality for growing businesses." }
  ];

  return (
    <>
      <PageHeader 
        title="Woocommerce" 
        subtitle="Seo" 
        breadcrumbs={[
          { label: 'SEO', href: '/services/seo' },
          { label: 'woocommerce seo', active: true }
        ]} 
      />

      {/* Scrolling Ticker Section Start */}
      {/* Scrolling Ticker Section End */}

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
                    <img src="/images/projects/project-3.jpg" alt="Rank Spiders web development and custom landing page project" />
                  </figure>
                </div>
                
                <div className="service-entry">
                  <p>We build WordPress websites that are fast, scalable, and fully customizable to match your brand’s vision. Leveraging the latest themes, plugins, and performance optimizations, we create websites that are not only visually stunning but also conversion-focused. From intuitive UX/UI design to secure backend architecture, every site is optimized for search engines, mobile devices, and user engagement. Our approach integrates analytics, A/B testing, and automation tools, ensuring your WordPress site evolves with your audience and drives measurable business growth</p>
                  
                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Next-Gen WordPress <span>Websites Designed to Perform</span></h2>
                    <p data--delay="0.6s">We design fast, responsive, and SEO-optimized WordPress sites that reflect your brand identity while driving measurable growth and higher conversions.</p>

                    <ul data--delay="0.8s">
                      <li>Custom WordPress Sites Built for Maximum Performance</li>
                      <li>Seamless User Experience Across All Devices and Platforms</li>
                      <li>Engaging Designs That Drive Visitor Interaction and Conversions</li>
                      <li>Data-Driven Optimization for Continuous Growth and Results</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Expert WordPress Developers</h3>
                        <p>High-performing, scalable WordPress websites with custom integrations.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Website Solutions</h3>
                        <p>Optimize WordPress sites using analytics for growth.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/projects/project-4.jpg" alt="Rank Spiders landing page design and conversion rate optimisation" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Analytics-Powered WordPress Success</h2>
                    <p data--delay="0.2s">Analytics and user behavior insights drive the optimization of every WordPress site element. From site speed and UX to SEO and plugin performance, this data-driven approach ensures continuous improvement, higher engagement, stronger conversions, and measurable business growth.</p>

                    <ul data--delay="0.4s">
                      <li>Custom WordPress Solutions Designed for Peak Performance</li>
                      <li>Seamless User Experience Across Devices and Platforms</li>
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
                          <h3>Digital Blueprint Creation</h3>
                          <p>Mapping your brand vision, audience behavior, and site objectives to craft a WordPress website strategy that drives conversions and seamless user experiences.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Performance-Driven Architecture</h3>
                          <p>Designing robust, scalable, and optimized WordPress structures with custom themes, plugin integrations, and speed-focused layouts for maximum engagement and measurable growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Innovative WordPress Experiences That Convert</h2>
                    <p data--delay="0.2s">Data-driven insights optimize every aspect of your WordPress site, from site speed and UX to SEO and plugin performance. Real-time analysis and continuous refinement ensure higher engagement, improved conversions, and sustainable growth for your digital presence.</p>
                    
                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/projects/project-3.jpg" alt="Rank Spiders web development and custom landing page project" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/projects/project-4.jpg" alt="Rank Spiders landing page design and conversion rate optimisation" />
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
                  <h3>Our Belief</h3>
                  <h2 data--delay="0.2s" data-cursor="-opaque">Our Commitment to Powerful WordPress Experiences</h2>
                  <p data--delay="0.4s">Crafting WordPress websites with purpose and precision, we merge cutting-edge design, responsive functionality, and performance optimization to help your brand engage audiences, drive conversions, and grow online effectively.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>Strategies rooted in purpose, ensuring every WordPress element supports business growth.</li>
                    <li>Crafting WordPress websites that engage users emotionally and inspire meaningful action.</li>
                  </ul>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
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

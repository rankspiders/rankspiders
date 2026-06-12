import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Custom Landing Page | Rank Spiders",
  description: "This is the custom landing page page description.",
};

export default function CustomLandingPageAgency() {
  return (
    <>
      <PageHeader 
        title="Custom" 
        subtitle="Landing Page" 
        breadcrumbs={[
          { label: 'Web Design & Development', href: '#' },
          { label: 'Custom Landing Page', active: true }
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
                    <img src="/images/sections/digital-advantage-img-3.jpg" alt="Advanced technical SEO and web development expertise at Rank Spiders" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Your landing page is more than just a URL—it’s the first impression, conversion driver, and growth engine. Our SEO strategies are crafted to optimize every element, from headlines and meta descriptions to page speed, mobile responsiveness, and user experience.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We conduct in-depth keyword research, competitor analysis, and user intent mapping to ensure your landing pages rank higher on search engines and attract qualified traffic. By integrating persuasive copy, structured data, and conversion-focused design, we turn visitors into leads, increasing engagement, trust, and ROI.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Landing Pages <span>Engineered for Maximum Impact</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Our custom landing pages combine sleek design, strategic messaging, and performance-focused structure to deliver an experience that turns every click into a meaningful action.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Precision-Built Pages for Higher Conversions</li>
                      <li>Seamless User Journey Designed for Every Device</li>
                      <li>Audience-Focused Messaging That Inspires Action</li>
                      <li>Performance Tracking That Turns Insights Into Results</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Conversion-Focused Specialists</h3>
                        <p>User-focused landing pages designed to increase revenue.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Driven Optimization</h3>
                        <p>Continuous conversions through behavior-driven landing optimization.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-2.jpg" alt="Web development and digital marketing strategy implementation at Rank Spiders" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Metrics That Shape Winning Landing Pages</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We analyze how users interact with your landing page, identify what drives action, and optimize every element in real time. Our data-backed approach ensures your page evolves with user behavior—delivering stronger engagement, higher conversions, and sustainable growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Hyper-targeted designs tailored to your conversion goals</li>
                      <li>Consistent flow and clarity across all user touchpoints</li>
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
                          <h3>Strategy Mapping</h3>
                          <p>We start by analyzing your audience, business goals, and current online behavior to create a landing page strategy that’s laser-focused on conversions and engagement.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Conversion Architecture</h3>
                          <p>Every section, button, and visual element is designed with intent. We craft layouts and flows that guide users naturally toward taking action, maximizing results at every step.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Data-Driven Design for Maximum Conversions</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We analyze user behavior, track interactions, and optimize every element of your landing page in real time. By combining actionable insights with strategic design, we ensure each page engages visitors, drives meaningful actions, and delivers scalable growth for your brand.</p>

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
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Real-Time Optimization</h3>
                      <p>We continuously monitor, track, and refine every landing page element, adapting dynamically to user behavior for maximum engagement and conversions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>User-Centric Design</h3>
                      <p>Layouts, visuals, and interactive elements are crafted intentionally to guide visitors naturally toward desired actions and meaningful conversions efficiently.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion-Focused Content</h3>
                      <p>Every headline, call-to-action, paragraph, and section is strategically written to engage users while maximizing conversions across your landing pages consistently.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Behavior Analytics</h3>
                      <p>We analyze clicks, scroll patterns, and user interactions to uncover opportunities for improvement, ensuring every section performs optimally for conversions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>A/B Testing</h3>
                      <p>Different versions of your landing page are tested systematically to identify highest-performing variations that drive measurable engagement and conversion results.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance-Driven Layouts</h3>
                      <p>Page sections are structured strategically to reduce bounce rates, increase leads, and maintain seamless navigation across all visitor interactions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Personalization</h3>
                      <p>Content is dynamically tailored for different audience segments, ensuring relevance, engagement, and higher conversion rates based on user intent and behavior.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Scalable Growth</h3>
                      <p>Insights gained from analytics and user behavior are applied to ensure landing pages evolve consistently alongside your business growth strategy.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Cross-Device Optimization</h3>
                      <p>Landing pages are fully responsive and optimized, delivering seamless, consistent, and visually appealing experiences across desktop, tablet, and mobile devices.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Insight-Backed Decisions</h3>
                      <p>Every landing page change and optimization is guided by data-driven analytics to ensure measurable ROI and continuous business growth.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Transforming Ideas Into High-Impact Landing Pages</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We create landing pages that blend strategy, creativity, and analytics to engage visitors, drive conversions, and amplify your brand’s digital impact across all platforms.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We design landing pages that engage users, spark action, and guide visitors seamlessly toward meaningful conversions for your business.</li>
                    <li>Our approach is data-driven and purpose-led, ensuring every element, layout, and CTA supports measurable growth and maximum impact.</li>
                  </ul>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <a href="/contact-us" className="btn-default">learn more</a>
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
            <div className="accordion-item wow fadeInUp">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  1. Why should I invest in a custom landing page?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Unlike generic templates, custom landing pages are tailored for your audience, ensuring higher engagement, better user experience, and increased conversion rates.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How do you ensure my landing page converts?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We combine UX design, persuasive copy, strategic layouts, and data-driven insights to create pages that guide users naturally toward action.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. Can custom landing pages integrate with my existing website?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes. Our landing pages are fully compatible and can be seamlessly integrated into your website, CMS, or marketing funnel.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  4. Do you optimize landing pages for mobile devices?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Absolutely. Every landing page is fully responsive, providing a seamless, high-performing experience on smartphones, tablets, and desktops.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  5. How long does it take to create a custom landing page?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Typically, 1–3 weeks depending on complexity, design requirements, content, and integrations, with continuous updates during the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

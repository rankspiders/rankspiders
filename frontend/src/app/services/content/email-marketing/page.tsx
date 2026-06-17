import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Email Marketing Services India | Campaigns That Convert | Rank Spiders",
  description: "Rank Spiders crafts high-converting email campaigns — newsletters, drip sequences, and promotions that drive opens, clicks, and revenue for your business.",
};

export default function EmailMarketingAgency() {
  return (
    <>
      <PageHeader 
        title="Email" 
        subtitle="Marketing" 
        breadcrumbs={[
          { label: 'Social Media', href: '/services/social-media' },
          { label: 'Email Marketing', active: true }
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
                    <img src="/images/sections/promise-image.jpg" alt="Rank Spiders commitment to transparent and measurable digital marketing results" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>Our email marketing strategies turn every message into a personalized experience that engages and converts. Using AI-driven segmentation, behavioral insights, and dynamic content, we deliver emails that resonate with your audience. From automated drip campaigns to hyper-targeted newsletters, each email is crafted to nurture leads, recover abandoned carts, and drive sales while maintaining brand consistency.</p>
                  
                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Boost Your Brand With Smart <span>Email Campaigns</span></h2>
                    <p data--delay="0.6s">We combine data-driven insights, creative messaging, and advanced automation to craft emails that engage, nurture, and convert. From personalized newsletters to targeted drip campaigns, our strategies help your brand grow, build loyalty, and drive measurable results.</p>

                    <ul data--delay="0.8s">
                      <li>Performance Tracking & Real-Time Optimization</li>
                      <li>Re-Engagement Strategies to Retain Customers</li>
                      <li>Dynamic Content for Maximum Relevance</li>
                      <li>Brand-Consistent Design Across All Emails</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Email Marketing Professionals</h3>
                        <p>Certified experts in advanced email marketing strategies.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Email Strategies</h3>
                        <p>Data-driven strategies to boost email engagement.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-2.jpg" alt="SEO and social media marketing performance metrics dashboard" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Optimize Campaigns with Actionable Insights</h2>
                    <p data--delay="0.2s">We use real-time data to monitor email performance, analyze subscriber behavior, and optimize campaigns for maximum impact. Our insight-driven approach ensures every email is personalized, engaging, and designed to drive measurable growth for your brand.</p>

                    <ul data--delay="0.4s">
                      <li>Personalized Campaigns for Maximum Engagement</li>
                      <li>Responsive Emails Across All Devices</li>
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
                          <h3>Email Campaign Strategy</h3>
                          <p>We start by analyzing your brand goals, audience segments, and past email performance. This helps us design personalized campaigns that engage subscribers and drive meaningful results.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Execution & Optimization</h3>
                          <p>We plan, schedule, and deliver emails with precision while continuously monitoring performance. Real-time insights and A/B testing allow us to optimize each campaign for maximum engagement and conversions.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Emails That Connect, Engage, and Convert</h2>
                    <p data--delay="0.2s">Real-time analytics track open rates, clicks, and subscriber behavior to optimize every email for maximum engagement. Insight-driven strategies ensure each campaign is personalized, data-backed, and drives measurable, scalable growth for your brand.</p>

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
                      <h3>Personalized Campaigns</h3>
                      <p>Segment audiences and craft emails tailored to subscriber preferences, behaviors, and interests, ensuring higher engagement, stronger connections, and increased conversions across every campaign.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Responsive Design Across Devices</h3>
                      <p>Optimize emails for mobile, desktop, and tablet, ensuring seamless display, user-friendly layouts, and consistent brand experience across all devices for maximum impact and reach.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Data-Driven Optimization</h3>
                      <p>Analyze open rates, click-throughs, and engagement patterns to continuously refine campaigns, improve performance, and achieve measurable results through actionable insights.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Automated Workflows</h3>
                      <p>Leverage triggers, drip campaigns, and scheduling to deliver timely, relevant emails, nurture leads, and maintain consistent communication without manual effort.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Engaging Content & Visuals</h3>
                      <p>Create compelling copy, eye-catching visuals, and interactive elements that capture attention, drive clicks, and encourage subscribers to take action in every email.</p>
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Driving Engagement Through Strategy</h2>
                  <p data--delay="0.4s">We blend data-driven insights, creative messaging, and advanced automation to craft email campaigns that engage subscribers, nurture leads, and drive measurable growth for your brand.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>Create email experiences that resonate with your audience, spark engagement, and inspire action.</li>
                    <li>Our campaigns are purpose-driven, ensuring every message supports your brand goals and drives measurable results.</li>
                  </ul>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
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
            <div className="accordion-item ">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  1. What types of emails can you create?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We design newsletters, promotional campaigns, drip sequences, automated follow-ups, abandoned cart emails, and transactional emails tailored to your brand and audience.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How do you personalize email campaigns?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Through segmentation, behavioral data, and AI-driven personalization, each subscriber receives content relevant to their preferences, increasing engagement and conversions.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. What email platforms do you work with?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We work with major platforms including Mailchimp, HubSpot, Klaviyo, ActiveCampaign, and others, ensuring optimized delivery and automation.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.6s">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  4. Can you optimize emails for mobile devices?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes, all emails are responsive and tested across devices to ensure consistent design and usability on mobile, tablet, and desktop.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.8s">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  5. Do you provide performance tracking?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Absolutely. We monitor open rates, click-through rates, engagement, conversions, and other key metrics to continuously optimize campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

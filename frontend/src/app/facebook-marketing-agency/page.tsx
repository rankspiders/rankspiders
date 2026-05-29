import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Facebook Marketing | Rank Spiders",
  description: "This is the facebook marketing page description.",
};

export default function FacebookMarketingAgency() {
  return (
    <>
      <PageHeader 
        title="Facebook" 
        subtitle="Marketing" 
        breadcrumbs={[
          { label: 'social media', href: '#' },
          { label: 'Facebook Marketing', active: true }
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
                    <img src="/images/digital-advantage-img-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Our Facebook marketing services transform your brand presence into a visually compelling experience that captures attention, communicates your story, and drives engagement. From high-impact ad creatives and community management to strategic targeting and conversion optimization, every campaign is crafted to resonate with your audience.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We don’t settle for generic strategies. Our team studies your brand personality, audience preferences, and market trends to deliver campaigns that are not only aesthetically stunning but also optimized for impact, memorability, and conversions. By blending creativity with strategic thinking, we ensure every interaction serves a purpose.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Creative Strategies That<span>Elevate Your Brand</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Visually compelling Facebook campaigns that capture attention, convey your brand’s story, and inspire meaningful engagement. Each creation blends creativity, strategic insight, and market trends to elevate brand identity and deliver measurable impact.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Impactful Visual Storytelling</li>
                      <li>Seamless Brand Cohesion</li>
                      <li>Engagement-Driven Creativity</li>
                      <li>Measurable Campaign Effectiveness</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Marketing Experts</h3>
                        <p>Certified specialists delivering visually compelling, strategic marketing solutions.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Driven Creativity</h3>
                        <p>Data-driven campaigns enhancing engagement, recognition, and impact.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/work-image-1.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Maximizing Impact Through Strategic Marketing</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Marketing decisions leverage audience insights, market trends, and creative analytics to optimize visuals, enhance engagement, and ensure every campaign delivers measurable impact and brand recognition.</p>

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
                          <h3>Creative Strategy Planning</h3>
                          <p>Every project starts by analyzing your brand identity, target audience, and market trends, laying the foundation for visually compelling campaigns that align with your goals.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Campaign Execution & Optimization</h3>
                          <p>Concepts are brought to life with precision, continuously refined using audience insights and performance data to ensure each campaign maximizes engagement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Strategic Creativity That Elevates Your Brand</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Campaigns are guided by audience insights, market trends, and creative analytics, ensuring every visual element maximizes engagement and strengthens brand identity.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery2.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Strategic Visual Storytelling</h3>
                      <p>Every campaign is crafted to convey your brand narrative compellingly, combining creativity and strategy for lasting impact.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Consistent Brand Identity</h3>
                      <p>Maintain cohesive aesthetics across all platforms, ensuring your brand is instantly recognizable and trusted.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Engagement-Oriented Creativity</h3>
                      <p>Designs are developed to capture attention and inspire audience participation, turning visuals into effective engagement tools.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Data-Informed Decisions</h3>
                      <p>Analytics and audience behavior insights guide creative choices, optimizing for higher engagement and better recall.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Trend-Driven Innovation</h3>
                      <p>Incorporating modern trends ensures visuals remain fresh and competitive in a fast-evolving digital landscape.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Transforming Ideas into Iconic Visuals</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Creative expertise and strategic insights combine to craft visually stunning campaigns that elevate brand identity and deliver measurable impact.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>Campaigns that captivate, engage audiences, and create lasting brand impressions.</li>
                    <li>Creative strategies grounded in insight, ensuring every visual drives meaningful impact.</li>
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
            <div className="accordion-item wow fadeInUp">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  1. What types of Facebook marketing services do you offer?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We provide brand strategy, digital graphics, social media creatives, ad management, and custom visual content tailored to your business needs.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How does your process work?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Our process includes brand analysis, concept creation, execution, feedback iterations, and final delivery, ensuring alignment with your identity.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. Can you design for both digital and print media?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes, all designs are optimized for web, social media, and print formats, ensuring consistent brand presentation across every platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

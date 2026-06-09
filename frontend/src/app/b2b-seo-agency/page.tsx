import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "B2B Seo | Rank Spiders",
  description: "This is the b2b seo page description.",
};

export default function B2BSeoAgency() {
  return (
    <>
      <PageHeader 
        title="B2B" 
        subtitle="Seo" 
        breadcrumbs={[
          { label: 'Seo Optimization', href: '#' },
          { label: 'B2B Seo', active: true }
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
                    <img src="/images/sections/digital-advantage-img-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Our B2B SEO strategies are crafted to amplify your brand’s authority, attract high-intent decision-makers, and generate qualified leads. From optimizing technical SEO to creating industry-specific content, we ensure your business stays visible, trusted, and competitive in search results.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">We don’t believe in generic solutions. Our team analyzes your market, competitors, and target accounts to build personalized SEO campaigns that drive meaningful engagement, accelerate the sales pipeline, and deliver measurable ROI.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Accelerate B2B Growth with<span>Precision SEO</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We develop customized SEO strategies for B2B companies, integrating industry insights, technical optimization, and authoritative content to increase search visibility, attract key decision-makers, and convert organic traffic into qualified business leads.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Precision SEO Campaigns Driving Qualified Leads</li>
                      <li>Strategic Visibility Across Key Digital Channels</li>
                      <li>Targeting Executives with High-Impact Engagement</li>
                      <li>Analytics-Driven Growth for Measurable ROI</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified SEO Specialists</h3>
                        <p>Certified experts optimizing B2B brands for visibility.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Driven Strategies</h3>
                        <p>Data-driven SEO strategies delivering measurable B2B growth.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Actionable Analytics for Scalable<span>B2B SEO</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">We transform B2B search data into actionable strategies that improve visibility, attract decision-makers, and drive qualified leads. Our continuous performance monitoring ensures your SEO campaigns deliver measurable growth and long-term business impact.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Precision SEO Strategies Targeting High-Value Clients</li>
                      <li>End-to-End Visibility Across Critical B2B Touchpoints</li>
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
                          <h3>Strategic SEO Blueprint</h3>
                          <p>We start by analyzing your B2B market, competitors, and buyer personas to develop a precise SEO roadmap. This ensures every optimization targets high-value accounts and drives meaningful search visibility.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Tactical Execution & Optimization</h3>
                          <p>Our team implements data-driven SEO tactics, from technical audits to content alignment, continuously refining strategies based on performance metrics. This approach maximizes lead generation and strengthens your digital authority.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Optimizing B2B Visibility for Maximum Conversions</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Our team leverages advanced analytics and market intelligence to refine SEO strategies in real-time. Every optimization is designed to attract decision-makers, generate qualified leads, and strengthen your B2B brand presence.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery7.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery8.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Precision Keyword Targeting</h3>
                      <p>Identify high-intent B2B search terms to attract decision-makers actively seeking your solutions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Competitor Gap Analysis</h3>
                      <p>Analyze competitors’ SEO strategies to uncover opportunities for differentiation and higher visibility.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Technical SEO Excellence</h3>
                      <p>Optimize site architecture, page speed, and crawlability to ensure search engines index your site efficiently.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Content Authority Building</h3>
                      <p> Create thought-leadership content that positions your brand as an industry expert and drives engagement.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion-Driven SEO</h3>
                      <p>Align keywords and content with buyer journey stages to generate qualified leads and accelerate sales.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance Analytics & Insights</h3>
                      <p>Track rankings, traffic, and user behavior to continuously refine SEO strategy for measurable growth.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>B2B Link Acquisition Strategy</h3>
                      <p>Earn high-quality, relevant backlinks from authoritative sources to boost domain authority and search rankings.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Fueling Business Success with SEO Precision</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Our SEO strategies focus on ranking your brand where decision-makers search, using actionable insights and content authority to grow pipeline and generate measurable ROI.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We create SEO strategies that engage decision-makers and drive results.</li>
                    <li>Every optimization is purpose-driven, strengthening visibility and generating qualified leads.</li>
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
                    <img src="/images/sections/our-belief-image.png" alt="" />
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
                  <img src="/images/sections/belief-graph-imge.png" alt="" />
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
                  1. What is B2B SEO and why is it essential?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>B2B SEO optimizes your website to attract decision-makers, increase visibility, and generate high-quality leads that drive revenue growth.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How long does it take to see results?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>SEO results vary by industry and competition, but measurable improvements typically appear within 3–6 months with consistent strategy execution.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. Can B2B SEO generate qualified leads?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes. Targeted keywords, authoritative content, and technical optimization ensure your website attracts decision-makers ready to engage with your services.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  4. What makes B2B SEO different from B2C SEO?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>B2B SEO focuses on longer buying cycles, high-value clients, and decision-maker targeting, whereas B2C SEO targets broader audiences with quicker conversions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

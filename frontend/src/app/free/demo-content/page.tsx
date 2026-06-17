import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Free Demo Content | See Our Writing Quality | Rank Spiders",
  description: "Request a free content sample from Rank Spiders. See the quality of our blog writing, SEO articles, and social media copy before committing to a package.",
};

export default function FreeDemoContentAgency() {
  return (
    <>
      <PageHeader 
        title="Free Demo" 
        subtitle="Content" 
        breadcrumbs={[
          { label: 'Social Media', href: '/services/social-media' },
          { label: 'Free Demo Content', active: true }
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
                    <img src="/images/sections/approach-image.jpg" alt="Rank Spiders strategic approach to digital marketing and business growth" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>Get a firsthand look at how strategic content can elevate your brand. Our Free Demo Content is designed to showcase our writing style, strategic thinking, and audience-focused approach before you commit. Whether it’s a sample blog section, social media copy, or website content, each demo is tailored to your industry, goals, and target audience.</p>
                  <p data--delay="0.4s">This preview highlights how we structure narratives, align tone with brand identity, and craft content that engages, informs, and drives action. By offering a real example—not a generic template—you gain clarity on our process, quality, and value, helping you make a confident, informed decision while setting the foundation for long-term content success.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Experience Content Excellence Before You Commit — Free Demo</h2>
                    <p data--delay="0.6s">Our Free Demo Content provides a strategic preview of our writing quality and approach. Each sample reflects your industry, audience intent, and business goals. This experience demonstrates clarity, structure, and persuasive messaging, helping you evaluate credibility, engagement potential, and long-term value before committing to a full content partnership with confidence.</p>

                    <ul data--delay="0.8s">
                      <li>Industry-Aligned Sample Content</li>
                      <li>Brand-Tone & Messaging Preview</li>
                      <li>Strategy-Driven Writing Approach</li>
                      <li>Quality & Performance Benchmark</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Professional Content Experts</h3>
                        <p>Skilled specialists delivering high-quality, results-driven content solutions.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Insight-Led Content Planning</h3>
                        <p>Data-informed strategies to maximize content effectiveness and engagement.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/digital-advantage-img-1.jpg" alt="Rank Spiders digital marketing strategy and campaign execution" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>See Real Results Before You Commit</h2>
                    <p data--delay="0.2s">Our Free Demo Content uses real-world insights to showcase performance potential. By tracking engagement, readability, and audience response, you can evaluate effectiveness firsthand, ensuring every sample demonstrates value, clarity, and measurable impact before investing in a full content partnership.</p>

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
                          <h3>Demo Content Planning</h3>
                          <p>We analyze your brand, audience, and goals to create a focused content sample that reflects your strategy, tone, and messaging, giving a clear preview of potential performance.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Sample Creation & Review</h3>
                          <p>Our team develops high-quality, tailored demo content while tracking readability, engagement, and clarity, ensuring every sample demonstrates value, audience resonance, and measurable impact before full-scale content development.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Preview Your Brand’s Next-Level Content</h2>
                    <p data--delay="0.2s">Receive a custom content sample crafted to reflect your brand’s tone, messaging, and strategy. Assess engagement, clarity, and impact firsthand, providing confidence in quality and measurable results before full-scale content creation.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery3.jpg" alt="Rank Spiders content marketing and SEO project sample" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery4.jpg" alt="Rank Spiders video and content production work" />
                        </figure>
                      </div>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Tailored Brand Messaging</h3>
                      <p>Receive a sample crafted specifically for your brand, reflecting its voice, tone, and identity while demonstrating how content can effectively engage your target audience.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience-Centric Approach</h3>
                      <p>Demo content focuses on your audience’s preferences, behaviors, and expectations, ensuring every word resonates and delivers meaningful engagement even before full content production begins.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Strategic Storytelling</h3>
                      <p>Experience content that tells your brand story clearly and persuasively, showcasing our ability to craft narratives that educate, inspire, and drive audience action.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Platform-Optimized Samples</h3>
                      <p>Every free demo is formatted for the platforms most relevant to your brand, including blogs, social media, or web content, ensuring practical and actionable insights.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Industry-Relevant Demonstrations</h3>
                      <p>Samples are customized to your niche, reflecting industry trends, competitive insights, and audience expectations to highlight our ability to deliver targeted, relevant content solutions.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Quality Assurance</h3>
                      <p>Free demo content showcases precision, clarity, and professional editing, demonstrating the level of quality you can expect across all future content projects.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Conversion-Focused Writing</h3>
                      <p>Experience how well-crafted content can guide readers through the customer journey, prompting meaningful interactions and increasing brand influence and trustworthiness.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Insight-Driven Approach</h3>
                      <p>Each sample is created using research and insights into audience behavior, ensuring strategic alignment and demonstrating our ability to craft results-oriented content.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Risk-Free Evaluation</h3>
                      <p>Gain a clear understanding of content style, structure, and impact without commitment, enabling informed decisions for a long-term partnership built on quality and performance.</p>
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Creating Content That Connects</h2>
                  <p data--delay="0.4s">Our content strategies combine creativity and performance metrics. From interactive articles to shareable videos, we craft experiences that educate, inspire, and deliver measurable results for your brand.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>We create content experiences that resonate with your audience, spark engagement, and inspire action.</li>
                    <li>Our strategies are purpose-driven, ensuring every article, post, or video supports your brand goals and delivers measurable impact.</li>
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
                  1. What types of content do you create?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We produce blogs, articles, social media posts, videos, infographics, eBooks, guides, and interactive content tailored to your brand and audience.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How do you optimize content for SEO?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Through keyword research, on-page optimization, meta tags, strategic linking, and regular performance analysis to boost organic traffic and search visibility.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. Can you create content for multiple platforms?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes, we craft content optimized for websites, blogs, social media, email newsletters, and other digital channels while maintaining brand consistency.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.6s">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  4. How do you ensure content engages the audience?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We combine storytelling, visuals, interactivity, and trend insights to create content that resonates and encourages audience interaction.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.8s">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  5. Do you provide content calendars?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Absolutely. We plan content strategically, scheduling posts and campaigns to maintain consistency and maximize engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

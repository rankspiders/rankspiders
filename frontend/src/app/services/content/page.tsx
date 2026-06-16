import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Content Marketing Services | Rank Spiders",
  description: "Grow your brand with data-driven content marketing — SEO blogs, social media content, video scripts, email campaigns, and strategic content distribution that drives traffic, engagement, and conversions.",
};

export default function ContentMarketingAgency() {
  return (
    <>
      <PageHeader 
        title="Content" 
        subtitle="Marketing" 
        breadcrumbs={[
          { label: 'Content Marketing', href: '#' }
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
                <div className="page-single-image img-natural">
                  <figure className="image-anime reveal">
                    <img src="/images/services/content/content-writing.png" alt="Rank Spiders Content Marketing Services — Words that Attract, Content that Converts" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Our content marketing strategies go beyond just creating blog posts or social updates—they build meaningful connections between your brand and your audience. From SEO-optimized articles to engaging video scripts, interactive guides, and social-first content, we craft narratives that resonate, educate, and inspire action.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We combine data-driven insights, audience behavior analysis, and trend research to deliver content that captures attention, drives engagement, and enhances brand authority. Every piece is strategically designed to attract the right audience, foster trust, and convert readers into loyal customers, ensuring measurable growth across digital channels.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Boost Your Brand With <span>Powerful Content </span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We combine audience insights, creative storytelling, and data-driven strategies to craft content that educates, engages, and converts. From blogs and articles to videos and interactive guides, every piece is designed to strengthen your brand presence, drive traffic, and foster long-term customer relationships.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Audience-Centric Content That Drives Engagement</li>
                      <li>Data-Driven Insights to Measure Success</li>
                      <li>SEO-Optimized Content for Higher Visibility</li>
                      <li>Interactive & Trend-Driven Content Formats</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Content Marketing Experts</h3>
                        <p>Certified experts in content marketing and SEO.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Content Strategies</h3>
                        <p>Data-driven strategies to boost content performance.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Rank Spiders content marketing team creating brand content strategy" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Measurable Results Through Analytics</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Real-time analytics track content performance, audience behavior, and engagement trends to refine strategies continuously. Insight-driven decisions ensure every article, post, or video delivers measurable results, stronger reach, and scalable brand growth.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Optimized Content Across All Digital Platforms</li>
                      <li>Strategic Storytelling for Maximum Engagement</li>
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
                          <h3>Content Strategy Planning</h3>
                          <p>We start by analyzing your brand goals, target audience, and existing digital presence. This insight allows us to develop a tailored content roadmap aligned with your objectives.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Content Execution & Optimization</h3>
                          <p>We create, schedule, and distribute high-quality content while continuously monitoring performance. Data-driven adjustments ensure maximum engagement, traffic growth, and measurable results for your brand.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2 className="wow fadeInUp">Content Strategies That Deliver Measurable Results</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Data-driven insights track content performance, audience engagement, and trends to optimize strategies in real time. Every piece of content is crafted and refined to maximize reach, engagement, and measurable brand growth.</p>

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
                      <h3>Tailored Content Strategies</h3>
                      <p>Develop personalized content plans based on audience behavior, industry trends, and brand objectives, ensuring every piece drives engagement, builds authority, and supports measurable growth for your business.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Multi-Channel Content Distribution</h3>
                      <p>Distribute content across blogs, social media, email, and websites while maintaining consistency, optimizing formats, and maximizing visibility to reach the right audience effectively.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>SEO-Optimized Content</h3>
                      <p>Create search-engine-friendly content using keyword research, on-page SEO, and strategic linking, increasing organic traffic, improving rankings, and driving long-term discoverability for your brand.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Engaging Storytelling</h3>
                      <p> Craft compelling narratives with visuals, copy, and interactive elements that resonate emotionally, inspire action, and strengthen brand authority across all digital touchpoints.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Data-Driven Optimization</h3>
                      <p> Analyze performance metrics, audience interactions, and engagement patterns to continuously refine content, improve reach, boost engagement, and deliver measurable, scalable results for your brand.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Creating Content That Connects</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Our content strategies combine creativity and performance metrics. From interactive articles to shareable videos, we craft experiences that educate, inspire, and deliver measurable results for your brand.</p>
                </div>
                <div className="our-belief-body wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>We create content experiences that resonate with your audience, spark engagement, and inspire action.</li>
                    <li>Our strategies are purpose-driven, ensuring every article, post, or video supports your brand goals and delivers measurable impact.</li>
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
                  1. What types of content do you create?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We produce blogs, articles, social media posts, videos, infographics, eBooks, guides, and interactive content tailored to your brand and audience.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How do you optimize content for SEO?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p> Through keyword research, on-page optimization, meta tags, strategic linking, and regular performance analysis to boost organic traffic and search visibility.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
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
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
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
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  5. Do you provide content calendars?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p> Absolutely. We plan content strategically, scheduling posts and campaigns to maintain consistency and maximize engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

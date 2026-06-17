import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Facebook Marketing Services | Rank Spiders",
  description: "Grow your business with expert Facebook marketing services — page management, content creation, Facebook Ads, audience targeting, lead generation, and performance tracking.",
  alternates: {
    canonical: "https://www.rankspiders.com/services/social-media/facebook",
  },
  openGraph: {
    title: "Facebook Marketing Services | Rank Spiders",
    description: "Grow your business with expert Facebook marketing services — page management, content creation, Facebook Ads, audience targeting, lead generation, and performance tracking.",
    url: "https://www.rankspiders.com/services/social-media/facebook",
    siteName: "Rank Spiders",
    type: "website",
    images: [
      {
        url: "https://www.rankspiders.com/images/services/facebook/facebook-marketing.png",
        width: 1200,
        height: 630,
        alt: "Rank Spiders Facebook Marketing Services",
      },
    ],
  },
};

export default function FacebookMarketingAgency() {
  return (
    <>
      <PageHeader
        title="Facebook"
        subtitle="Marketing"
        breadcrumbs={[
          { label: 'Social Media', href: '/services/social-media' },
          { label: 'Facebook Marketing', active: true }
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
                    <img src="/images/services/facebook/facebook-marketing.png" alt="Rank Spiders Facebook Marketing Services — Page Management, Ads, Lead Generation" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>Our Facebook marketing services help your business grow by building a powerful brand presence, reaching the right audience, and turning engagement into real, measurable results. From Facebook page management and creative content production to targeted ad campaigns and lead generation, every strategy is built around your unique goals.</p>
                  <p data--delay="0.4s">We don't rely on guesswork. Our team analyzes your audience behavior, competitor activity, and market trends to craft campaigns that are visually compelling, strategically targeted, and optimized for ROI. Whether you want more website traffic, qualified leads, or stronger brand awareness — we deliver outcomes that matter to your bottom line.</p>

                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">Complete Facebook Marketing <span>Solutions for Your Business</span></h2>
                    <p data--delay="0.6s">From setting up and managing your Facebook page to running high-converting ad campaigns, we cover every aspect of Facebook marketing so you can focus on running your business while we grow your online presence and customer base.</p>

                    <ul data--delay="0.8s">
                      <li>Facebook Page Setup & Management</li>
                      <li>Engaging Content Creation & Scheduling</li>
                      <li>Targeted Facebook & Instagram Advertising</li>
                      <li>Precision Audience Research & Segmentation</li>
                      <li>Lead Generation Campaigns</li>
                      <li>Transparent Performance Tracking & Reporting</li>
                    </ul>

                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Certified Facebook Marketing Experts</h3>
                        <p>Our certified specialists bring deep platform expertise and creative thinking to every campaign — ensuring your brand stands out in a crowded feed and consistently reaches the right people.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Data-Driven Campaign Management</h3>
                        <p>We continuously monitor performance, refine targeting, and optimize ad spend so every rupee of your budget works harder and delivers better returns with every passing week.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Rank Spiders team managing Facebook marketing campaigns for clients" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2>Our Core Facebook Marketing Services</h2>
                    <p data--delay="0.2s">We offer a complete suite of Facebook marketing services designed to grow your brand, attract qualified customers, and generate measurable business results at every stage of the funnel.</p>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">120</span>K+</h3>
                          <p>Customers reached through our Facebook campaigns</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list " data--delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Facebook Page Management</h3>
                          <p>We create, optimize, and manage your Facebook business page — crafting engaging posts, responding to audiences, and building a consistent brand presence that grows your following and earns trust over time.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Content Creation</h3>
                          <p>Our creative team designs eye-catching graphics, writes compelling captions, and produces content that connects with your audience, keeps them engaged, and reinforces your brand identity across every post.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-impact-box">
                    <h2>Advertising, Targeting & Lead Generation</h2>
                    <p data--delay="0.2s">Strategic Facebook Ads backed by deep audience research and continuous optimization — designed to reach the right people, generate quality leads, and maximize your return on every rupee of ad spend.</p>

                    <div className="service-impact-images">
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery1.jpg" alt="Rank Spiders Facebook Ads campaign management and audience targeting" />
                        </figure>
                      </div>
                      <div className="service-impact-img">
                        <figure className="image-anime reveal">
                          <img src="/images/gallery/gallery2.jpg" alt="Rank Spiders Facebook lead generation and performance tracking results" />
                        </figure>
                      </div>
                    </div>

                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Facebook Advertising</h3>
                      <p>We run targeted ad campaigns across Facebook's full ad format library — image ads, video ads, carousel ads, collection ads, and lead forms — to reach your ideal customers and drive conversions at every stage of the funnel.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Audience Targeting</h3>
                      <p>Using Facebook's advanced targeting tools, we build precise audience segments based on demographics, interests, behavior, and lookalike audiences — ensuring your ads consistently reach people most likely to become paying customers.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Lead Generation</h3>
                      <p>Our lead generation campaigns use Facebook Lead Ads and custom landing pages to capture inquiries, sign-ups, and sales opportunities — delivering high-quality leads directly into your CRM or inbox.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Performance Tracking & Reporting</h3>
                      <p>We provide clear, transparent reporting on all key metrics — reach, impressions, engagement, click-through rates, conversions, and cost per lead — so you always know exactly how your investment is performing and where it's going.</p>
                    </div>
                    <div className="service-growth-item" style={{ paddingTop: '30px' }}>
                      <h3>Benefits for Your Business</h3>
                      <p>Increased brand awareness, better customer engagement, more website traffic, higher-quality leads, improved customer retention, and a stronger return on your advertising spend — all through one expertly managed Facebook marketing strategy.</p>
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">Let's Grow Your Business Together with Facebook</h2>
                  <p data--delay="0.4s">Facebook is more than a social platform — it is one of the most powerful business growth tools available today. At Rank Spiders, we help you unlock its full potential through strategic content, targeted advertising, and consistent community engagement that turns followers into loyal, paying customers.</p>
                </div>
                <div className="our-belief-body " data--delay="0.6s">
                  <ul>
                    <li>Increased brand awareness and a stronger, more recognizable online presence across every audience segment.</li>
                    <li>Higher-quality leads and improved conversions through precision audience targeting and compelling ad creatives.</li>
                    <li>Improved return on advertising spend with data-driven campaign optimization and continuous performance refinement.</li>
                  </ul>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <a href="/contact-us" className="btn-default">Get Started Today</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <div className="our-belief-img">
                  <figure>
                    <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven Facebook marketing agency India" />
                  </figure>
                </div>
                <div className="belief-graph-image">
                  <img src="/images/sections/belief-graph-imge.png" alt="Client business growth graph showing Facebook marketing ROI by Rank Spiders" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>
          <div className="faq-accordion" id="accordion">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  1. What Facebook marketing services does Rank Spiders offer?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We offer end-to-end Facebook marketing including page setup and management, content creation, Facebook Ads (image, video, carousel, lead ads), precision audience targeting, lead generation campaigns, community management, and detailed monthly performance reports.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. How much does Facebook advertising cost?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Facebook ad costs vary based on your industry, target audience, ad format, and campaign objective. We work with budgets of all sizes and focus on maximizing your ROI — so every rupee you spend is directed toward a meaningful business outcome.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. How long does it take to see results from Facebook marketing?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Paid Facebook Ads can begin delivering results within the first few days. Organic growth through page management and consistent content typically shows noticeable improvement in 4–8 weeks. Long-term brand building and lead generation compound significantly over 3–6 months of sustained effort.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.6s">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  4. Do you handle both content creation and ad management?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes. Our team handles everything — from designing graphics and writing captions to setting up ad campaigns, managing budgets, A/B testing creatives, and delivering monthly performance reports. You get a fully managed Facebook marketing service under one roof.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item " data--delay="0.8s">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  5. Can Facebook marketing work for my type of business?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Absolutely. Facebook marketing is effective across virtually every industry — eCommerce, local services, B2B, real estate, healthcare, education, and more. We tailor our strategy to your specific business type, target audience, and goals so the approach always fits your context and delivers real results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

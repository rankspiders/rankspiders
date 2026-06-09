'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

export default function Testimonials() {
  const testimonials = [
    {
      company: 'BrandShapers',
      content: 'Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before — highly recommend!',
      rating: 5
    },
    {
      company: 'IndeedVisa',
      content: 'Rank Spiders completely transformed our online presence. Our organic traffic grew by 230% in six months and we are now ranking on the first page for our most competitive keywords.',
      rating: 5
    },
    {
      company: 'Evolvedhair',
      content: 'The social media campaigns they ran for us were exceptional. Engagement went through the roof and we saw a direct increase in bookings within the first month. Professional, creative, and results-driven.',
      rating: 5
    },
    {
      company: 'Navkiran Travels',
      content: 'We had tried two other agencies before Rank Spiders and nothing worked. Within 90 days of working with them we were getting enquiries from Google organically. Brilliant work and transparent reporting.',
      rating: 5
    },
    {
      company: 'Dr. Ruchi Dental Clinic',
      content: 'Our local SEO rankings improved dramatically. We now rank in the top 3 for all our key treatment searches in the area. The team is responsive, knowledgeable, and genuinely cares about our growth.',
      rating: 5
    },
    {
      company: 'Bellevue Roofing',
      content: 'I was sceptical about digital marketing but the results speak for themselves. We have more than doubled our monthly enquiries since partnering with Rank Spiders. Best investment we have made in the business.',
      rating: 5
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our" 
        subtitle="Testimonials" 
        breadcrumbs={[{ label: 'Our Testimonials', active: true }]} 
      />

      <ScrollingTicker />

      {/* Page Testimonials Start */}
      <div className="page-testimonials">
        <div className="container">
          <div className="row">
            {testimonials.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="testimonial-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="testimonials-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <div className="testimonial-content">
                    <p>{item.content}</p>
                  </div>                                        
                  <div className="testimonial-author">
                    <div className="author-content">
                      <h3>{item.company}</h3>
                    </div>
                    <div className="testimonial-quate">
                      <img src="/images/icons/testimonial-quate.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Page Testimonials End */}

      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Why choose us</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Reasons to choose us for <span>digital success</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We combine data-driven strategies, creative innovation, and proven expertise to help your brand grow online from SEO to social media.</p>
                </div>
                
                <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.6s">
                  <div className="why-choose-item">
                    <h3>Certified Marketing Experts</h3>
                    <p>Our team is professionally certified in SEO, Google Ads, social media.</p>
                  </div>
                  <div className="why-choose-item">
                    <h3>Data-Driven Strategies</h3>
                    <p>Our team is professionally certified in SEO, Google Ads, social media.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="why-choose-img wow fadeInUp" data-wow-delay="0.2s">
                <figure>
                  <img src="/images/sections/why-choose-image.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Video Testimonials — add back when YouTube videos are ready.
           YouTube Shorts embed fine with the same iframe format (use portrait aspect ratio: height ~500px).
           Pattern: <iframe src="https://www.youtube.com/embed/VIDEO_ID?rel=0" height="500" width="100%" ... />
           Add videoTestimonials array above and map it here. */}

      {/* Our Offers Section Start */}
      <div className="our-offers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-offers-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">what we offer</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Solution design for your <span>digital success</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We craft tailored digital marketing solutions that align with your business goals, combining creativity, strategy.</p>
                </div>

                <div className="offer-body wow fadeInUp" data-wow-delay="0.6s">
                  <div className="offer-body-item">
                    <div className="icon-box">
                      <img src="/images/icons/icon-offer-body-1.svg" alt="" />
                    </div>
                    <div className="offer-body-item-content">
                      <h3>Google & Social Media Ads</h3>
                    </div>
                  </div>

                  <div className="offer-body-item">
                    <div className="icon-box">
                      <img src="/images/icons/icon-offer-body-2.svg" alt="" />
                    </div>
                    <div className="offer-body-item-content">
                      <h3>Website Design & Development</h3>
                    </div>
                  </div>

                  <div className="offer-body-item">
                    <div className="icon-box">
                      <img src="/images/icons/icon-offer-body-3.svg" alt="" />
                    </div>
                    <div className="offer-body-item-content">
                      <h3>Conversion Rate Optimization</h3>
                    </div>
                  </div>
                </div>

                <div className="offer-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">contact us</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="offer-image-box wow fadeInUp" data-wow-delay="0.2s">
                <figure>
                  <img src="/images/sections/offer-image.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Offers Section End */}
    </>
  );
}

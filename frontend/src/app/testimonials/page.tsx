'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Brooklyn Simmons",
      role: "co.Founder",
      content: "“ Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before highly recommend!”",
      rating: 5
    },
    {
      name: "isabella clarke",
      role: "chief technology officer",
      content: "“ Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before highly recommend!”",
      rating: 5
    },
    {
      name: "isabella clarke",
      role: "chief technology officer",
      content: "“ Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before highly recommend!”",
      rating: 5
    },
    {
      name: "isabella clarke",
      role: "chief technology officer",
      content: "“ Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before highly recommend!”",
      rating: 5
    },
    {
      name: "isabella clarke",
      role: "chief technology officer",
      content: "“ Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before highly recommend!”",
      rating: 5
    },
    {
      name: "isabella clarke",
      role: "chief technology officer",
      content: "“ Outstanding team! We saw a 4x increase in leads within three months. Their SEO and paid ads strategy brought in qualified traffic like never before highly recommend!”",
      rating: 5
    }
  ];

  const videoTestimonials = [
    { id: "VIDEO_ID_1" },
    { id: "VIDEO_ID_2" },
    { id: "VIDEO_ID_3" },
    { id: "VIDEO_ID_4" },
    { id: "VIDEO_ID_5" },
    { id: "VIDEO_ID_6" }
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
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>
                    <div className="testimonial-quate">
                      <img src="/images/testimonial-quate.svg" alt="" />
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
                  <img src="/images/why-choose-image.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Video Testimonials Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row" style={{ gap: '30px 0px' }}>
            <div className="col-lg-12">
              <div className="why-choose-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Video <span>Testimonials</span></h2>
                </div>
              </div>
            </div>

            {videoTestimonials.map((video, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="testimonial-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="testimonial-content">
                    <iframe 
                      width="100%" 
                      style={{ borderRadius: '10px', overflow: 'hidden' }} 
                      height="250" 
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&showinfo=0`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Video Testimonials Section End */}

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
                      <img src="/images/icon-offer-body-1.svg" alt="" />
                    </div>
                    <div className="offer-body-item-content">
                      <h3>Google & Social Media Ads</h3>
                    </div>
                  </div>

                  <div className="offer-body-item">
                    <div className="icon-box">
                      <img src="/images/icon-offer-body-2.svg" alt="" />
                    </div>
                    <div className="offer-body-item-content">
                      <h3>Website Design & Development</h3>
                    </div>
                  </div>

                  <div className="offer-body-item">
                    <div className="icon-box">
                      <img src="/images/icon-offer-body-3.svg" alt="" />
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
                  <img src="/images/offer-image.png" alt="" />
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

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader 
        title="About" 
        subtitle="Us" 
        breadcrumbs={[{ label: 'About Us', active: true }]} 
      />

      {/* About Section Start */}
      <div className="about-us-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <figure className="image-anime reveal">
                  <Image src="/images/about-us-image-1.png" alt="About Rank Spiders" width={560} height={620} style={{ width: '100%', height: 'auto' }} />
                </figure>
                <div className="about-experience">
                  <h3>10+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">About Rank Spiders</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Your Partner in <span>Digital Growth</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Rank Spiders is a premier digital marketing agency dedicated to helping businesses navigate the complexities of the online world. We combine creative innovation with data-driven strategies to deliver measurable results that propel your brand forward.
                  </p>
                </div>
                
                <div className="about-details wow fadeInUp" data-wow-delay="0.6s">
                  <div className="about-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-counter-1.svg" alt="" />
                    </div>
                    <div className="about-text">
                      <h3>Our Mission</h3>
                      <p>To empower businesses with cutting-edge SEO and digital marketing solutions that drive sustainable organic growth.</p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-counter-2.svg" alt="" />
                    </div>
                    <div className="about-text">
                      <h3>Our Vision</h3>
                      <p>To be the world's most trusted partner for brands seeking to establish a dominant and authentic digital presence.</p>
                    </div>
                  </div>
                </div>

                <div className="about-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">Work With Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}

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
                    <p>Our team is professionally certified in SEO, Google Ads, and social media marketing.</p>
                  </div>
                  <div className="why-choose-item">
                    <h3>Data-Driven Strategies</h3>
                    <p>We leverage analytics and market insights to ensure every campaign delivers ROI.</p>
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
    </>
  );
}

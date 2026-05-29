'use client';

import React from 'react';
import Link from 'next/link';

export default function TeamSingle() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Brooklyn <span>Simmons</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="#">/ team</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">/ Brooklyn simmons</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>

      <div className="page-team-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="team-single-image wow fadeInUp">
                  <figure>
                    <img src="/images/team-2.png" alt="" />
                  </figure>
                </div>

                <div className="page-cta-box sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="page-cta-header">
                    <div className="review-images">
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/author-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="review-image">
                        <figure className="image-anime">
                          <img src="/images/author-3.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="review-rating-content">
                      <p><span>2.5k</span> Positive Review in our solutions</p>
                    </div>
                  </div>

                  <div className="page-cta-box-body">
                    <div className="page-cta-counters">
                      <div className="page-cta-counter-item">
                        <h2><span className="counter">95</span></h2>
                        <p>Client satisfaction</p>
                      </div>
                      <div className="page-cta-counter-item">
                        <h2><span className="counter">1</span>K+</h2>
                        <p>Project complete</p>
                      </div>
                    </div>
                    <div className="page-cta-btn">
                      <a href="tel:+919988357092"><img src="/images/icon-phone-white.svg" alt="" /> +91 99883-57092</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="team-single-content">
                <div className="team-member-about">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">About <span>me</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">With a passion for digital innovation and a results-driven mindset, I specialize in creating impactful marketing strategies that help brands grow online. My expertise spans across SEO, social media, and performance marketing</p>
                  </div>

                  <div className="team-contact-list wow fadeInUp" data-wow-delay="0.4s">
                    <div className="team-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-mail.svg" alt="" />
                      </div>
                      <div className="team-contact-content">
                        <h3>Email Address</h3>
                        <p>info@rankspiders.com</p>
                      </div>
                    </div>

                    <div className="team-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-phone.svg" alt="" />
                      </div>
                      <div className="team-contact-content">
                        <h3>Phone Number</h3>
                        <p>+91 99883-57092</p>
                      </div>
                    </div>

                    <div className="team-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-position.svg" alt="" />
                      </div>
                      <div className="team-contact-content">
                        <h3>Position</h3>
                        <p>Lead Technician</p>
                      </div>
                    </div>

                    <div className="team-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-location.svg" alt="" />
                      </div>
                      <div className="team-contact-content">
                        <h3>Location</h3>
                        <p>Office No. 22, Ground Floor, D-152, Phase 8, Sector 74, SAS Nagar, Punjab 160071</p>
                      </div>
                    </div>
                  </div>

                  <div className="member-social-list wow fadeInUp" data-wow-delay="0.6s">
                    <h3>Follow on social :</h3>
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>

                <div className="member-professional-info">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">Personal <span>info</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Every professional journey is built on unique experiences, values, and personal insights — and mine is no different. With a strong foundation in digital marketing and a passion for helping brands grow online, I bring both creativity and strategy to every project I take on. My background, skills, and cultural understanding allow me to connect with diverse clients and audiences.</p>
                  </div>

                  <div className="member-professional-list wow fadeInUp" data-wow-delay="0.4s">
                    <ul>
                      <li>blending local insights with a global digital perspective to create campaigns that resonate.</li>
                      <li>experience in SEO, social media strategy, and performance marketing across various industries.</li>
                      <li>A strong believer in continuous learning, with certifications in Google Ads, Analytics, and Social</li>
                      <li>Known for a collaborative mindset, creative problem-solving, and a passion for delivering</li>
                    </ul>
                  </div>
                </div>

                <div className="team-skills-box">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">My <span>skill</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Over the years, I've had the honor of supporting countless seniors and their families through some of the most important stages of life. Each experience has taught me the value of patience, active listening, and the small gestures that bring comfort and trust.</p>
                  </div>

                  <div className="team-skills-list">
                    {[
                      { title: "Search Engine Optimization", percent: "92%" },
                      { title: "Social Media Marketing", percent: "89%" },
                      { title: "Email Marketing Strategy", percent: "85%" },
                      { title: "Google & Meta Ads", percent: "88%" },
                      { title: "Content Strategy", percent: "95%" },
                      { title: "Online Reputation Management", percent: "90%" }
                    ].map((skill, index) => (
                      <div key={index} className="skills-progress-bar">
                        <div className="skillbar">
                          <div className="skill-data">
                            <div className="skill-title">{skill.title}</div>
                            <div className="skill-no">{skill.percent}</div>
                          </div>
                          <div className="skill-progress">
                            <div className="count-bar" style={{ width: skill.percent }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="contact-us-form team-contact-form">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">Send us a message</h2>
                  </div>

                  <div className="contact-form">
                    <form id="contactForm" className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="row">
                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="fname" className="form-control" id="fname" placeholder="First name" required />
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="lname" className="form-control" id="lname" placeholder="Last name" required />
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <input type="email" name="email" className="form-control" id="email" placeholder="E-mail" required />
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone" required />
                        </div>
                        <div className="form-group col-md-12 mb-5">
                          <textarea name="message" className="form-control" id="message" rows={3} placeholder="Write message..."></textarea>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn-default btn-highlighted">submit message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

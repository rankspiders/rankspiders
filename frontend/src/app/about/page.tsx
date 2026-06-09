'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import MotionWrapper from '@/components/MotionWrapper';

const missionItems = [
  {
    img: '/images/sections/mission.png',
    title: 'Our Mission',
    text: 'To empower businesses with cutting-edge SEO and digital marketing strategies that drive measurable, sustainable growth in an ever-evolving online landscape.',
  },
  {
    img: '/images/sections/vision.png',
    title: 'Our Vision',
    text: 'To become the world\'s most trusted digital marketing partner — recognized for transforming brands through innovation, integrity, and results that actually matter.',
  },
  {
    img: '/images/sections/values.png',
    title: 'Our Values',
    text: 'Transparency, accountability, continuous learning, and a client-first mindset. These aren\'t just words — they define how we work every single day.',
  },
];

const teamMembers = [
  { img: '/images/team/team-1.png', name: 'Harpreet Singh', role: 'Founder & CEO' },
  { img: '/images/team/team-2.png', name: 'Brooklyn Simmons', role: 'SEO Strategist' },
  { img: '/images/team/team-3.png', name: 'Rahul Sharma', role: 'Content Head' },
  { img: '/images/team/team-4.png', name: 'Priya Mehra', role: 'PPC Manager' },
  { img: '/images/team/team-5.png', name: 'Arjun Nair', role: 'Social Media Lead' },
  { img: '/images/team/team-6.png', name: 'Sneha Kapoor', role: 'Web Designer' },
  { img: '/images/team/team-7.png', name: 'Vikram Joshi', role: 'Link Building Expert' },
  { img: '/images/team/team-8.png', name: 'Anjali Verma', role: 'Analytics Manager' },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="Us"
        breadcrumbs={[{ label: 'About Us', active: true }]}
      />

      {/* ── About intro ──────────────────────────────────────────────── */}
      <div className="about-us-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <figure className="image-anime reveal">
                  <Image
                    src="/images/sections/about-us-image-1.png"
                    alt="About Rank Spiders"
                    width={560}
                    height={620}
                    style={{ width: '100%', height: 'auto' }}
                  />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Your Partner in <span>Digital Growth</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Rank Spiders is a premier digital marketing agency dedicated to helping
                    businesses navigate the complexities of the online world. We combine creative
                    innovation with data-driven strategies to deliver measurable results that
                    propel your brand forward.
                  </p>
                </div>
                <div className="about-details wow fadeInUp" data-wow-delay="0.6s">
                  <div className="about-item">
                    <div className="icon-box">
                      <img src="/images/icons/icon-about-counter-1.svg" alt="" />
                    </div>
                    <div className="about-text">
                      <h3>Our Mission</h3>
                      <p>To empower businesses with cutting-edge SEO and digital marketing solutions that drive sustainable organic growth.</p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="icon-box">
                      <img src="/images/icons/icon-about-counter-2.svg" alt="" />
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

      {/* ── Mission / Vision / Values ─────────────────────────────────── */}
      <div style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center" style={{ marginBottom: 50 }}>
              <h3>Who We Are</h3>
              <h2>Driven by Purpose, <span>Guided by Values</span></h2>
              <p style={{ maxWidth: 560, margin: '0 auto' }}>
                Everything we do is rooted in three pillars — a clear mission, an ambitious
                vision, and values we never compromise.
              </p>
            </div>
          </MotionWrapper>

          <div className="mission-vision-list" style={{ justifyContent: 'center' }}>
            {missionItems.map((item, i) => (
              <MotionWrapper key={item.title} variant="up" delay={i * 0.1}>
                <div className="mission-vision-item" style={{ width: '100%' }}>
                  <div className="mission-vision-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <figure style={{ textAlign: 'center', margin: 0 }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: '100%', maxHeight: 160, objectFit: 'contain' }}
                    />
                  </figure>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Why choose us</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Reasons to choose us for <span>digital success</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    We combine data-driven strategies, creative innovation, and proven expertise
                    to help your brand grow online — from SEO to social media.
                  </p>
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
                  <img src="/images/sections/why-choose-image.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Team ──────────────────────────────────────────────────────── */}
      <div style={{ padding: '80px 0' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center" style={{ marginBottom: 50 }}>
              <h3>Meet the Team</h3>
              <h2>The Experts Behind <span>Your Growth</span></h2>
              <p style={{ maxWidth: 520, margin: '0 auto' }}>
                A hand-picked team of SEO specialists, content strategists, designers, and
                data analysts — all working toward one goal: your results.
              </p>
            </div>
          </MotionWrapper>

          <div className="row g-4">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="col-lg-3 col-md-4 col-sm-6">
                <MotionWrapper variant="up" delay={i * 0.06}>
                  <div
                    className="team-item"
                    style={{
                      textAlign: 'center',
                      padding: '24px 16px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: 16,
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <figure style={{ marginBottom: 16 }}>
                      <img
                        src={member.img}
                        alt={member.name}
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '3px solid var(--accent-color)',
                        }}
                      />
                    </figure>
                    <h4
                      style={{
                        fontFamily: 'var(--heading-font)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--text-color)',
                        marginBottom: 4,
                      }}
                    >
                      {member.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        marginBottom: 0,
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </MotionWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 0 80px' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div
              style={{
                padding: '56px 48px',
                background:
                  'linear-gradient(135deg, rgba(82,27,137,0.06) 0%, rgba(245,158,11,0.06) 100%)',
                border: '1px solid rgba(82,27,137,0.15)',
                borderRadius: 20,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  color: 'var(--primary-color)',
                  marginBottom: 14,
                }}
              >
                Ready to work with us?
              </h3>
              <p
                style={{
                  color: 'var(--text-muted)',
                  maxWidth: 480,
                  margin: '0 auto 28px',
                }}
              >
                Let's talk about your goals and build a digital strategy that delivers
                real, measurable results.
              </p>
              <Link
                href="/contact-us"
                className="btn-default"
              >
                Start a Conversation
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}

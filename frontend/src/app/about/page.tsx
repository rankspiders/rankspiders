import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: 'About Rank Spiders | Premier SEO & Digital Marketing Agency India',
  description:
    'Learn about Rank Spiders — a results-driven SEO and digital marketing agency in India. Our mission, vision, values, and the expert team behind your growth.',
  openGraph: {
    title: 'About Rank Spiders | Premier SEO & Digital Marketing Agency India',
    description:
      'Learn about Rank Spiders — a results-driven SEO and digital marketing agency in India. Our mission, vision, values, and the expert team behind your growth.',
    url: 'https://www.rankspiders.com/about',
    type: 'website',
  },
  alternates: { canonical: 'https://www.rankspiders.com/about' },
};

const values = [
  {
    icon: 'fa-eye',
    title: 'Transparency',
    desc: 'Clear communication and honest reporting at every stage of your campaign.',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Innovation',
    desc: 'Embracing cutting-edge technology, AI tools, and fresh ideas to stay ahead.',
  },
  {
    icon: 'fa-star',
    title: 'Excellence',
    desc: 'Delivering the highest quality in strategy, execution, and client service.',
  },
  {
    icon: 'fa-trophy',
    title: 'Client Success',
    desc: "Putting our clients' growth and business outcomes first — always.",
  },
  {
    icon: 'fa-chart-bar',
    title: 'Data-Driven',
    desc: 'Every decision backed by real analytics, performance metrics, and actionable insights.',
  },
  {
    icon: 'fa-handshake',
    title: 'Integrity',
    desc: 'Building long-term trust through ethical practices and consistent delivery.',
  },
];

const whyReasons = [
  {
    icon: 'fa-rocket',
    title: 'Proven Growth Strategies',
    desc: 'We create customised SEO and digital marketing solutions tailored to your business goals and industry — not one-size-fits-all templates.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Data-Driven Decision Making',
    desc: 'Every strategy is backed by analytics, performance metrics, and actionable insights to maximise results and eliminate guesswork.',
  },
  {
    icon: 'fa-robot',
    title: 'AI-Powered Innovation',
    desc: 'We leverage cutting-edge AI tools and modern technologies to identify opportunities and stay ahead of market trends.',
  },
  {
    icon: 'fa-bolt',
    title: 'Performance-Focused Execution',
    desc: 'From technical SEO to content optimisation, every action we take is designed to improve visibility, traffic, and conversions.',
  },
  {
    icon: 'fa-magnifying-glass',
    title: 'Complete Transparency',
    desc: 'Clear communication, detailed reporting, and measurable KPIs keep you fully informed and in control at every stage.',
  },
  {
    icon: 'fa-people-group',
    title: 'Dedicated Partnership',
    desc: 'We work as an extension of your team, focused on long-term relationships, sustainable growth, and shared success.',
  },
];

const teamMembers = [
  { img: '/images/team/team-1.png', name: 'Harpreet Singh', role: 'Founder & CEO' },
  { img: '/images/team/team-2.png', name: 'Brooklyn Simmons', role: 'SEO Strategist', href: '/team/brooklyn-simmons' },
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

      {/* ── SECTION 1: Your Partner in Digital Growth ─────────────────── */}
      <section className="about-us-page">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">
              <MotionWrapper variant="left">
                <div className="about-image">
                  <figure className="image-anime reveal">
                    <Image
                      src="/images/about-us/about-1.png"
                      alt="Rank Spiders digital marketing team delivering SEO growth for clients"
                      width={700}
                      height={467}
                      style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                      priority
                    />
                  </figure>
                  <div className="about-experience">
                    <h3>10+</h3>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3>About Rank Spiders</h3>
                  <h2 data--delay="0.2s">
                    Your Partner in <span>Digital Growth</span>
                  </h2>
                  <p data--delay="0.3s">
                    Rank Spiders is a premier{' '}
                    <strong><Link href="/services/seo">SEO and digital marketing agency in India</Link></strong>{' '}
                    dedicated to helping businesses grow online. We deliver{' '}
                    <strong><Link href="/services/seo/technical">technical SEO</Link></strong>,{' '}
                    <strong><Link href="/services/content">content marketing</Link></strong>,{' '}
                    <strong><Link href="/services/social-media">social media management</Link></strong>, and{' '}
                    <strong><Link href="/services/paid-ads/google-ads">Google Ads campaigns</Link></strong>{' '}
                    — combining data-driven strategy with creative execution to build sustainable organic growth for brands across India, Australia, and the US.
                  </p>
                  <p data--delay="0.4s">
                    We help businesses achieve sustainable digital growth through a strategic combination of SEO, content marketing, technical optimisation, and data-driven insights. By increasing search visibility, attracting qualified traffic, and improving conversion opportunities, we turn digital challenges into measurable business success.
                  </p>
                </div>

                <ul className="about-bullet-list " data--delay="0.5s">
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span><strong>We go beyond rankings and traffic</strong> — we focus on real business outcomes that matter to your bottom line.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span><strong>We create authoritative content</strong> that builds brand trust, domain authority, and organic search dominance.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span><strong>Performance-driven marketing</strong> — every campaign is measured, optimised, and aligned to your growth targets.</span>
                  </li>
                </ul>

                <div className="about-btn " data--delay="0.6s">
                  <Link href="/contact-us" className="btn-default">Work With Us</Link>
                  <Link href="/services" className="btn-outline-hero ms-3">
                    Our Services <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: Mission & Vision ───────────────────────────────── */}
      <section className="about-mission-vision" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center section-title-center" style={{ marginBottom: 60 }}>
              <h3>Our Purpose</h3>
              <h2>Mission &amp; <span>Vision</span></h2>
            </div>
          </MotionWrapper>

          <div className="row g-5 align-items-center">

            {/* Mission */}
            <div className="col-lg-6">
              <MotionWrapper variant="left">
                <div className="about-mv-card" style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 20,
                  padding: '40px',
                  boxShadow: 'var(--shadow-md)',
                  height: '100%',
                }}>
                  <div className="about-mv-icon" style={{ marginBottom: 20 }}>
                    <i className="fa-solid fa-bullseye" style={{ fontSize: 36, color: 'var(--accent-color)' }}></i>
                  </div>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.5rem', marginBottom: 16, color: 'var(--primary-color)' }}>
                    Our Mission
                  </h3>
                  <p style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--accent-color)', marginBottom: 16 }}>
                    "To empower businesses with innovative SEO solutions and digital marketing strategies that drive sustainable growth and measurable business outcomes."
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    At Rank Spiders, our mission is to empower businesses with innovative SEO solutions and data-driven digital marketing strategies that create sustainable growth. We help brands improve their online visibility, attract qualified customers, and achieve measurable business results through a combination of technical expertise, strategic content, and AI-powered insights.
                  </p>
                  <figure style={{ marginTop: 28, borderRadius: 12, overflow: 'hidden' }}>
                    <Image
                      src="/images/about-us/about-4.png"
                      alt="Rank Spiders mission - empowering businesses with SEO and digital marketing"
                      width={612}
                      height={612}
                      style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                    />
                  </figure>
                </div>
              </MotionWrapper>
            </div>

            {/* Vision */}
            <div className="col-lg-6">
              <MotionWrapper variant="right">
                <div className="about-mv-card" style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 20,
                  padding: '40px',
                  boxShadow: 'var(--shadow-md)',
                  height: '100%',
                }}>
                  <div className="about-mv-icon" style={{ marginBottom: 20 }}>
                    <i className="fa-solid fa-eye" style={{ fontSize: 36, color: 'var(--accent-secondary-color)' }}></i>
                  </div>
                  <h3 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.5rem', marginBottom: 16, color: 'var(--primary-color)' }}>
                    Our Vision
                  </h3>
                  <p style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--accent-secondary-color)', marginBottom: 16 }}>
                    "To become the most trusted growth partner for brands seeking long-term digital success through innovation, transparency, and results."
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    Our vision is to become the most trusted digital growth partner for businesses worldwide by delivering transparent, performance-focused, and future-ready SEO solutions. We strive to help brands build a strong online presence, establish industry authority, and achieve long-term success in an ever-evolving digital landscape.
                  </p>
                  <figure style={{ marginTop: 28, borderRadius: 12, overflow: 'hidden' }}>
                    <Image
                      src="/images/about-us/about-3.png"
                      alt="Rank Spiders vision - becoming the most trusted digital growth partner worldwide"
                      width={700}
                      height={467}
                      style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                    />
                  </figure>
                </div>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: Who We Are ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <MotionWrapper variant="up">
                <div className="section-title">
                  <h3>Who We Are</h3>
                  <h2>Driven by Purpose, <span>Guided by Values</span></h2>
                  <p>
                    We are a results-driven digital marketing and SEO agency committed to helping businesses achieve sustainable online growth. Combining strategic expertise, innovative technology, and data-driven insights, we create customised solutions that increase visibility, attract qualified audiences, and deliver measurable business outcomes.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    Our purpose is to empower brands to thrive in the digital landscape, while our values of transparency, excellence, and continuous innovation guide everything we do.
                  </p>
                </div>
                <div className="row g-3 mt-2">
                  {[
                    { num: '500+', label: 'Campaigns Delivered' },
                    { num: '10+', label: 'Years of Expertise' },
                    { num: '98%', label: 'Client Retention Rate' },
                    { num: '3x', label: 'Average Traffic Growth' },
                  ].map((stat) => (
                    <div key={stat.label} className="col-6">
                      <div style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--card-border)',
                        borderRadius: 12,
                        padding: '20px 16px',
                        textAlign: 'center',
                      }}>
                        <h4 style={{ fontFamily: 'var(--heading-font)', fontWeight: 800, fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: 4 }}>
                          {stat.num}
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 0 }}>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            <div className="col-lg-6">
              <MotionWrapper variant="right">
                <figure className="image-anime reveal">
                  <Image
                    src="/images/about-us/about-13.png"
                    alt="Rank Spiders team - dedicated digital marketing and SEO specialists"
                    width={700}
                    height={467}
                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                  />
                </figure>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: Our Values ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center section-title-center" style={{ marginBottom: 56 }}>
              <h3>What Drives Us</h3>
              <h2>Our <span>Core Values</span></h2>
              <p style={{ maxWidth: 560, margin: '0 auto' }}>
                At Rank Spiders, our values define how we work, collaborate, and deliver results. They shape every strategy we create and every partnership we build.
              </p>
            </div>
          </MotionWrapper>

          <div className="row g-4">
            {values.map((val, i) => (
              <div key={val.title} className="col-lg-4 col-md-6">
                <MotionWrapper variant="up" delay={i * 0.08}>
                  <div style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: 16,
                    padding: '32px 28px',
                    boxShadow: 'var(--shadow-sm)',
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                    className="about-value-card"
                  >
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary-color))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                    }}>
                      <i className={`fa-solid ${val.icon}`} style={{ fontSize: 22, color: '#fff' }}></i>
                    </div>
                    <h4 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: 10 }}>
                      {val.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 0, fontSize: '0.95rem' }}>
                      {val.desc}
                    </p>
                  </div>
                </MotionWrapper>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Why Choose Us ──────────────────────────────────── */}
      <section className="why-choose-us" style={{ padding: '80px 0' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center section-title-center" style={{ marginBottom: 56 }}>
              <h3>Why Choose Us</h3>
              <h2>Reasons to Choose Us for <span>Digital Success</span></h2>
              <p style={{ maxWidth: 600, margin: '0 auto' }}>
                At Rank Spiders, we don&apos;t just focus on rankings — we focus on delivering real business growth. Our approach combines strategic thinking, technical expertise, and data-driven insights to help brands build a strong digital presence and achieve long-term success.
              </p>
            </div>
          </MotionWrapper>

          <div className="row align-items-center g-5">

            {/* Reasons grid */}
            <div className="col-lg-7">
              <div className="row g-4">
                {whyReasons.map((reason, i) => (
                  <div key={reason.title} className="col-md-6">
                    <MotionWrapper variant="up" delay={i * 0.07}>
                      <div style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: 14,
                        padding: '24px 20px',
                        boxShadow: 'var(--shadow-sm)',
                        height: '100%',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <div style={{
                            flexShrink: 0,
                            width: 44,
                            height: 44,
                            borderRadius: 10,
                            background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.12))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                            <i className={`fa-solid ${reason.icon}`} style={{ fontSize: 18, color: 'var(--accent-color)' }}></i>
                          </div>
                          <div>
                            <h5 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-color)', marginBottom: 6 }}>
                              {reason.title}
                            </h5>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 0 }}>
                              {reason.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </MotionWrapper>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose image */}
            <div className="col-lg-5">
              <MotionWrapper variant="right">
                <div style={{ position: 'relative' }}>
                  <figure className="image-anime reveal">
                    <Image
                      src="/images/about-us/about-10.png"
                      alt="Why choose Rank Spiders - proven digital marketing growth results"
                      width={740}
                      height={740}
                      style={{ width: '100%', height: 'auto', borderRadius: 20 }}
                    />
                  </figure>
                  {/* Growth metric overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: -20,
                    left: -20,
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: 14,
                    padding: '16px 20px',
                    boxShadow: 'var(--shadow-md)',
                    minWidth: 160,
                  }}>
                    <figure style={{ margin: 0 }}>
                      <Image
                        src="/images/about-us/about-12.png"
                        alt="Client revenue and digital marketing growth metrics chart"
                        width={463}
                        height={280}
                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                      />
                    </figure>
                  </div>
                </div>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: Team ───────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div className="section-title text-center section-title-center" style={{ marginBottom: 50 }}>
              <h3>Meet the Team</h3>
              <h2>The Experts Behind <span>Your Growth</span></h2>
              <p style={{ maxWidth: 520, margin: '0 auto' }}>
                A hand-picked team of SEO specialists, content strategists, designers, and data analysts — all working toward one goal: your results.
              </p>
            </div>
          </MotionWrapper>

          <div className="row g-4">
            {teamMembers.map((member, i) => {
              const card = (
                <div style={{
                  textAlign: 'center',
                  padding: '32px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 16,
                  boxShadow: 'var(--shadow-sm)',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}>
                  <figure style={{ marginBottom: 16 }}>
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.role} at Rank Spiders`}
                      style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-color)' }}
                    />
                  </figure>
                  <h4 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-color)', marginBottom: 4 }}>
                    {member.name}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                    {member.role}
                  </p>
                </div>
              );
              return (
                <div key={member.name} className="col-lg-3 col-md-4 col-sm-6">
                  <MotionWrapper variant="up" delay={i * 0.06}>
                    {member.href ? (
                      <Link href={member.href} style={{ textDecoration: 'none' }}>{card}</Link>
                    ) : card}
                  </MotionWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <MotionWrapper variant="up">
            <div style={{
              padding: '60px 48px',
              background: 'linear-gradient(135deg, rgba(79,70,229,0.07) 0%, rgba(6,182,212,0.07) 100%)',
              border: '1px solid rgba(79,70,229,0.15)',
              borderRadius: 24,
              textAlign: 'center',
            }}>
              <h2 style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--primary-color)', marginBottom: 16 }}>
                Ready to Grow Your Business Online?
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Let&apos;s talk about your goals and build a digital strategy that delivers real, measurable results — from SEO to paid ads.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/contact-us" className="btn-default">Start a Conversation</Link>
                <Link href="/services" className="btn-outline-hero">
                  View Our Services <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}

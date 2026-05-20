'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function ImageGallery() {
  const images = [
    { src: '/images/gallery1.jpg', delay: '0s' },
    { src: '/images/gallery2.jpg', delay: '0.2s' },
    { src: '/images/gallery3.jpg', delay: '0.4s' },
    { src: '/images/gallery4.jpg', delay: '0.6s' },
    { src: '/images/gallery5.jpg', delay: '0.8s' },
    { src: '/images/gallery6.jpg', delay: '1s' },
    { src: '/images/gallery7.jpg', delay: '1.2s' },
    { src: '/images/gallery8.jpg', delay: '1.4s' },
    { src: '/images/gallery9.jpg', delay: '1.6s' }
  ];

  return (
    <>
      <PageHeader 
        title="Image" 
        subtitle="Gallery" 
        breadcrumbs={[
          { label: 'Gallery', href: '#' },
          { label: 'image gallery', active: true }
        ]} 
      />

      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>

      <div className="page-gallery py-5">
        <div className="container">
          <div className="row gallery-items">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="photo-gallery wow fadeInUp" data-wow-delay={image.delay}>
                  <a href={image.src} data-cursor-text="View" target="_blank" rel="noopener noreferrer">
                    <figure className="image-anime reveal">
                      <img src={image.src} alt={`Gallery Image ${index + 1}`} className="img-fluid rounded" />
                    </figure>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function ImageGallery() {
  const images = [
    { src: '/images/gallery/gallery1.jpg', delay: '0s', alt: 'Rank Spiders digital marketing team strategy session' },
    { src: '/images/gallery/gallery2.jpg', delay: '0.2s', alt: 'Rank Spiders SEO campaign results and analytics dashboard' },
    { src: '/images/gallery/gallery3.jpg', delay: '0.4s', alt: 'Rank Spiders content marketing and brand storytelling project' },
    { src: '/images/gallery/gallery4.jpg', delay: '0.6s', alt: 'Rank Spiders video production and social media content creation' },
    { src: '/images/gallery/gallery5.jpg', delay: '0.8s', alt: 'Rank Spiders email marketing campaign design' },
    { src: '/images/gallery/gallery6.jpg', delay: '1s', alt: 'Rank Spiders email strategy and newsletter layout work' },
    { src: '/images/gallery/gallery7.jpg', delay: '1.2s', alt: 'Rank Spiders link building and off-page SEO project' },
    { src: '/images/gallery/gallery8.jpg', delay: '1.4s', alt: 'Rank Spiders backlink acquisition and domain authority building' },
    { src: '/images/gallery/gallery9.jpg', delay: '1.6s', alt: 'Rank Spiders paid ads and PPC campaign management' }
  ];

  return (
    <>
      <PageHeader 
        title="Image" 
        subtitle="Gallery" 
        breadcrumbs={[
          { label: 'Gallery', href: '/image-gallery' },
          { label: 'image gallery', active: true }
        ]} 
      />

      <div className="page-gallery py-5">
        <div className="container">
          <div className="row gallery-items">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="photo-gallery " data--delay={image.delay}>
                  <a href={image.src} data-cursor-text="View" target="_blank" rel="noopener noreferrer">
                    <figure className="image-anime reveal">
                      <img src={image.src} alt={image.alt} className="img-fluid rounded" />
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

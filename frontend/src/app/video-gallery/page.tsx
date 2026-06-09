'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function VideoGallery() {
  const videos = [
    { src: 'https://rankspiders.com/images/videos/video1.mp4', poster: '/images/gallery/gallery1.jpg', delay: '0.2s' },
    { src: 'https://rankspiders.com/images/videos/video2.mp4', poster: '/images/gallery/gallery2.jpg', delay: '0.4s' },
    { src: 'https://rankspiders.com/images/videos/video3.mp4', poster: '/images/gallery/gallery3.jpg', delay: '0.6s' },
    { src: 'https://rankspiders.com/images/videos/video4.mp4', poster: '/images/gallery/gallery4.jpg', delay: '0.8s' },
    { src: 'https://rankspiders.com/images/videos/video5.mp4', poster: '/images/gallery/gallery5.jpg', delay: '1s' },
    { src: 'https://rankspiders.com/images/videos/video6.mp4', poster: '/images/gallery/gallery6.jpg', delay: '1.2s' },
    { src: 'https://rankspiders.com/images/videos/video7.mp4', poster: '/images/gallery/gallery7.jpg', delay: '1.4s' },
    { src: 'https://rankspiders.com/images/videos/video8.mp4', poster: '/images/gallery/gallery8.jpg', delay: '1.6s' },
    { src: 'https://rankspiders.com/images/videos/video9.mp4', poster: '/images/gallery/gallery9.jpg', delay: '1.8s' }
  ];

  return (
    <>
      <PageHeader 
        title="Video" 
        subtitle="Gallery" 
        breadcrumbs={[
          { label: 'gallery', href: '#' },
          { label: 'Video Gallery', active: true }
        ]} 
      />

      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icons/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>

      <div className="page-video-gallery py-5">
        <div className="container">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="video-gallery-image wow fadeInUp" data-wow-delay={video.delay}>
                  <div className="video-container rounded overflow-hidden shadow">
                    <video 
                      controls 
                      className="w-100" 
                      poster={video.poster}
                      style={{ maxHeight: '250px', backgroundColor: '#000' }}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

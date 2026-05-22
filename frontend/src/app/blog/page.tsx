'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image_url: string;
  slug: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHeader 
        title="Our" 
        subtitle="Blog" 
        breadcrumbs={[{ label: 'Blog', active: true }]} 
      />

      <ScrollingTicker />

      <div className="page-blog py-5">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <div className="post-item wow fadeInUp shadow-sm rounded overflow-hidden">
                  <div className="post-image">
                    <Link href={`/blog/${post.slug}`}>
                      <figure className="image-anime">
                        <img src={post.image_url} alt={post.title} className="img-fluid" />
                      </figure>
                    </Link>
                  </div>
                  <div className="post-content p-4">
                    <div className="post-meta mb-2 text-muted small">
                      <span className="me-3"><i className="fa-regular fa-user"></i> {post.author}</span>
                      <span><i className="fa-regular fa-clock"></i> {post.date}</span>
                    </div>
                    <h3><Link href={`/blog/${post.slug}`} className="text-dark">{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="btn-default btn-sm mt-2">Read More</Link>
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

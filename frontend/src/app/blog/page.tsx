'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  created_at: string;
  author: string;
  image_url: string;
  slug: string;
}

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/blogs`)
      .then(res => { if (!res.ok) throw new Error(); return res.json(); })
      .then(data => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
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

          {/* Loading */}
          {loading && (
            <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fa fa-circle-notch fa-spin" style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
            </div>
          )}

          {/* Backend offline or error */}
          {!loading && error && (
            <div style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
              <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }} />
              <h3 style={{ color: 'var(--primary-color)' }}>Could not load posts</h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: 400 }}>
                The API server is not reachable. Make sure the FastAPI backend is running on <code>localhost:8000</code>, then refresh the page.
              </p>
            </div>
          )}

          {/* Empty table */}
          {!loading && !error && posts.length === 0 && (
            <div style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
              <i className="fa-regular fa-newspaper" style={{ fontSize: '2.5rem', color: 'var(--text-muted)' }} />
              <h3 style={{ color: 'var(--primary-color)' }}>No posts yet</h3>
              <p style={{ color: 'var(--text-muted)' }}>Blog posts you add to Supabase will appear here.</p>
            </div>
          )}

          {/* Posts grid */}
          {!loading && !error && posts.length > 0 && (
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
                      <div className="post-meta mb-2 small" style={{ color: 'var(--text-muted)' }}>
                        <span className="me-3"><i className="fa-regular fa-user"></i> {post.author}</span>
                        <span><i className="fa-regular fa-clock"></i> {formatDate(post.created_at)}</span>
                      </div>
                      <h3><Link href={`/blog/${post.slug}`} style={{ color: 'var(--text-color)' }}>{post.title}</Link></h3>
                      <p>{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="btn-default btn-sm mt-2">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}

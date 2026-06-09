'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  created_at: string;
  author: string;
  image_url: string;
  alt_text?: string;
  slug: string;
  category?: string;
  read_time?: number;
}

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogListClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/blogs`)
      .then(res => { if (!res.ok) throw new Error(); return res.json(); })
      .then(data => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fa fa-circle-notch fa-spin" style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
        <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }} />
        <h3 style={{ color: 'var(--primary-color)' }}>Could not load posts</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: 400 }}>
          The API server is not reachable. Make sure the FastAPI backend is running, then refresh the page.
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
        <i className="fa-regular fa-newspaper" style={{ fontSize: '2.5rem', color: 'var(--text-muted)' }} />
        <h3 style={{ color: 'var(--primary-color)' }}>No posts yet</h3>
        <p style={{ color: 'var(--text-muted)' }}>Blog posts you add to Supabase will appear here.</p>
      </div>
    );
  }

  return (
    <div className="page-blog py-5">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <article className="post-item shadow-sm rounded overflow-hidden h-100" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', flexDirection: 'column' }}>

                {/* Thumbnail */}
                <div className="post-image" style={{ position: 'relative', overflow: 'hidden' }}>
                  <Link href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>
                    <img
                      src={post.image_url}
                      alt={post.alt_text || post.title}
                      width={600}
                      height={340}
                      loading="lazy"
                      style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </Link>
                  {post.category && (
                    <span style={{
                      position: 'absolute', top: 12, left: 12,
                      background: 'var(--accent-color)', color: '#fff',
                      padding: '3px 10px', borderRadius: 999,
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="post-content p-4" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="post-meta mb-2 small" style={{ color: 'var(--text-muted)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <span><i className="fa-regular fa-user" style={{ marginRight: 4 }} />{post.author}</span>
                    <span><i className="fa-regular fa-calendar" style={{ marginRight: 4 }} />{formatDate(post.created_at)}</span>
                    {post.read_time && (
                      <span><i className="fa-regular fa-clock" style={{ marginRight: 4 }} />{post.read_time} min</span>
                    )}
                  </div>
                  <h3 className="h6 fw-bold mb-2" style={{ lineHeight: 1.5 }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flex: 1, marginBottom: 16 }}>
                    {post.excerpt?.slice(0, 120)}{post.excerpt?.length > 120 ? '…' : ''}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="btn-default btn-sm" style={{ alignSelf: 'flex-start' }}>
                    Read More
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

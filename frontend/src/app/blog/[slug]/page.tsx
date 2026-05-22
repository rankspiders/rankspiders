'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import { useParams } from 'next/navigation';

interface Post {
  title: string;
  author: string;
  created_at: string;
  image_url: string;
  content: string;
  excerpt: string;
}

function formatContent(raw: string): string {
  if (!raw) return '';
  // If it already contains HTML tags, return as-is
  if (/<[a-z][\s\S]*>/i.test(raw)) return raw;
  // Otherwise wrap each paragraph in <p> tags
  return raw
    .split(/\n{2,}/)
    .map(para => `<p>${para.trim()}</p>`)
    .join('');
}

export default function BlogSingle() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/blogs/${slug}`)
        .then(res => res.json())
        .then(data => { setPost(data); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fa fa-circle-notch fa-spin" style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <h2 style={{ color: 'var(--text-color)' }}>Post not found</h2>
        <Link href="/blog" className="btn-default">Back to Blog</Link>
      </div>
    );
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle=""
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title.length > 40 ? post.title.slice(0, 40) + '…' : post.title, active: true },
        ]}
      />

      <ScrollingTicker />

      <div style={{ padding: '64px 0 96px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              {/* Meta */}
              <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <i className="fa-regular fa-user" style={{ marginRight: 6, color: 'var(--accent-color)' }} />
                  {post.author}
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <i className="fa-regular fa-calendar" style={{ marginRight: 6, color: 'var(--accent-color)' }} />
                  {formattedDate}
                </span>
              </div>

              {/* Hero image */}
              {post.image_url && (
                <div style={{ marginBottom: 48, borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <img
                    src={post.image_url}
                    alt={post.title}
                    style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 480, objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* Content */}
              <div
                className="post-entry"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.85',
                  color: 'var(--text-color)',
                }}
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags + Share */}
              <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--divider-color)' }}>
                <div className="row align-items-center">
                  <div className="col-lg-6" style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>Tags: </span>
                    {['SEO', 'Digital Marketing', 'Growth'].map(tag => (
                      <span key={tag} style={{
                        display: 'inline-block', marginLeft: 6, padding: '3px 12px',
                        background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
                        borderRadius: 999, fontSize: '0.78rem', color: 'var(--text-muted)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="col-lg-6 text-lg-end">
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: 12 }}>Share: </span>
                    {[
                      { icon: 'fa-brands fa-facebook-f', href: '#' },
                      { icon: 'fa-brands fa-linkedin-in', href: '#' },
                      { icon: 'fa-brands fa-x-twitter', href: '#' },
                    ].map(s => (
                      <a key={s.icon} href={s.href} style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 36, height: 36, borderRadius: '50%', marginLeft: 8,
                        background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
                        color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem',
                      }}>
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back link */}
              <div style={{ marginTop: 40 }}>
                <Link href="/blog" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                }}>
                  <i className="fa fa-arrow-left" style={{ fontSize: '0.8rem' }} />
                  Back to Blog
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

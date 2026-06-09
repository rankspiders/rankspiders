import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

const SITE_URL = 'https://rankspiders.com';
const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface Post {
  id: number;
  title: string;
  slug: string;
  author: string;
  created_at: string;
  image_url: string;
  content: string;
  excerpt: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  tags?: string[];
  category?: string;
  og_image?: string;
  alt_text?: string;
  read_time?: number;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${API}/api/blogs/${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function resolveImageUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith('/') ? `${SITE_URL}${url}` : url;
}

function formatContent(raw: string): string {
  if (!raw) return '';
  if (/<[a-z][\s\S]*>/i.test(raw)) return raw;
  return raw
    .split(/\n{2,}/)
    .map(para => `<p>${para.trim()}</p>`)
    .join('');
}

function calcReadTime(content: string): number {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found | Rank Spiders' };

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt;
  const ogImageFull = resolveImageUrl(post.og_image || post.image_url);
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${title} | Rank Spiders`,
    description,
    keywords: post.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.created_at,
      authors: [post.author],
      siteName: 'Rank Spiders',
      images: ogImageFull
        ? [{ url: ogImageFull, width: 1200, height: 630, alt: post.alt_text || post.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImageFull ? [ogImageFull] : [],
    },
  };
}

export default async function BlogSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <h2 style={{ color: 'var(--text-color)' }}>Post not found</h2>
        <Link href="/blog" className="btn-default">Back to Blog</Link>
      </div>
    );
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const ogImageFull = resolveImageUrl(post.og_image || post.image_url);
  const readTime = post.read_time ?? calcReadTime(post.content);
  const tags: string[] = Array.isArray(post.tags) ? post.tags : [];
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: ogImageFull,
    datePublished: post.created_at,
    dateModified: post.created_at,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Rank Spiders',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo/rankspiders.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    keywords: post.keywords,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };

  const encodedUrl = encodeURIComponent(canonical);
  const encodedTitle = encodeURIComponent(post.title);

  const shareLinks = [
    {
      icon: 'fa-brands fa-facebook-f',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: 'Share on Facebook',
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      label: 'Share on LinkedIn',
    },
    {
      icon: 'fa-brands fa-x-twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      label: 'Share on X',
    },
  ];

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
            <div className="col-lg-8" style={{ maxWidth: 780 }}>

              {/* Category badge */}
              {post.category && (
                <div style={{ marginBottom: 16 }}>
                  <span style={{
                    display: 'inline-block', padding: '4px 14px',
                    background: 'var(--accent-color)', color: '#fff',
                    borderRadius: 999, fontSize: '0.72rem', fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {post.category}
                  </span>
                </div>
              )}

              {/* Meta row */}
              <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <i className="fa-regular fa-user" style={{ marginRight: 6, color: 'var(--accent-color)' }} />
                  {post.author}
                </span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <i className="fa-regular fa-calendar" style={{ marginRight: 6, color: 'var(--accent-color)' }} />
                  {formattedDate}
                </span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <i className="fa-regular fa-clock" style={{ marginRight: 6, color: 'var(--accent-color)' }} />
                  {readTime} min read
                </span>
              </div>

              {/* Hero image */}
              {post.image_url && (
                <div style={{ marginBottom: 48, borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <img
                    src={post.image_url}
                    alt={post.alt_text || post.title}
                    width={780}
                    height={440}
                    style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 480, objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* Article content */}
              <div
                className="post-entry"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags + Share */}
              <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--card-border)' }}>
                <div className="row align-items-center">
                  <div className="col-lg-6" style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>Tags: </span>
                    {tags.length > 0 ? (
                      tags.map(tag => (
                        <span key={tag} style={{
                          display: 'inline-block', marginLeft: 6, padding: '3px 12px',
                          background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
                          borderRadius: 999, fontSize: '0.78rem', color: 'var(--text-muted)',
                        }}>
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: 6 }}>—</span>
                    )}
                  </div>
                  <div className="col-lg-6 text-lg-end">
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: 12 }}>Share: </span>
                    {shareLinks.map(s => (
                      <a
                        key={s.icon}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: 36, height: 36, borderRadius: '50%', marginLeft: 8,
                          background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
                          color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem',
                          transition: 'background 0.2s, color 0.2s',
                        }}
                      >
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back to blog */}
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

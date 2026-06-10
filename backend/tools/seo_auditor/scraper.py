import json
import re
import urllib.robotparser
from urllib.parse import urljoin, urlparse

import httpx
from bs4 import BeautifulSoup


async def check_robots(client: httpx.AsyncClient, base_url: str, path: str) -> bool:
    try:
        r = await client.get(f"{base_url}/robots.txt")
        rp = urllib.robotparser.RobotFileParser()
        rp.set_url(f"{base_url}/robots.txt")
        rp.parse(r.text.splitlines())
        return rp.can_fetch("*", base_url + path)
    except Exception:
        return True  # unreachable robots.txt → assume allowed


async def check_sitemap(client: httpx.AsyncClient, base_url: str) -> bool:
    """Returns True if /sitemap.xml exists and returns HTTP 200."""
    try:
        r = await client.get(f"{base_url}/sitemap.xml", timeout=5.0)
        return r.status_code == 200
    except Exception:
        return False


def extract_seo(soup: BeautifulSoup, base_url: str, original_url: str, html_bytes: bytes) -> dict:
    parsed_base = urlparse(base_url)
    parsed_url  = urlparse(original_url)

    # ── Title ──────────────────────────────────────────────────────────────
    title_tag  = soup.find("title")
    title_text = title_tag.get_text(strip=True) if title_tag else ""

    # ── Meta description ───────────────────────────────────────────────────
    meta_desc_tag = soup.find("meta", attrs={"name": "description"})
    meta_desc     = meta_desc_tag.get("content", "").strip() if meta_desc_tag else ""

    # ── Robots meta ────────────────────────────────────────────────────────
    meta_robots_tag = soup.find("meta", attrs={"name": "robots"})
    meta_robots     = meta_robots_tag.get("content", "").lower().strip() if meta_robots_tag else ""
    is_noindex      = "noindex" in meta_robots

    # ── Headings ───────────────────────────────────────────────────────────
    h1_tags  = [h.get_text(strip=True) for h in soup.find_all("h1")]
    h2_count = len(soup.find_all("h2"))
    h3_count = len(soup.find_all("h3"))

    # ── Canonical ──────────────────────────────────────────────────────────
    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    canonical_raw = canonical_tag.get("href", "").strip() if canonical_tag else ""
    canonical     = urljoin(original_url, canonical_raw) if canonical_raw else ""

    # ── Images ─────────────────────────────────────────────────────────────
    all_images = soup.find_all("img")
    images_missing_alt_count = sum(
        1 for img in all_images if not img.get("alt", "").strip()
    )
    images_missing_dimensions = sum(
        1 for img in all_images if not img.get("width") and not img.get("height")
    )

    # ── Links ──────────────────────────────────────────────────────────────
    internal_links = external_links = nofollow_links = 0
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        absolute = urljoin(original_url, href)
        lp = urlparse(absolute)
        if lp.netloc == parsed_base.netloc:
            internal_links += 1
        else:
            external_links += 1
        rel = a.get("rel") or []
        if "nofollow" in rel:
            nofollow_links += 1

    # ── Open Graph ─────────────────────────────────────────────────────────
    og = {}
    for prop in ("og:title", "og:description", "og:image", "og:type", "og:site_name"):
        tag   = soup.find("meta", property=prop)
        value = tag.get("content", "").strip() if tag else ""
        if prop == "og:image" and value and not value.startswith(("http://", "https://", "//")):
            value = urljoin(original_url, value)
        og[prop.replace(":", "_")] = value

    # ── Twitter Cards ──────────────────────────────────────────────────────
    def _tw(name: str) -> str:
        tag = soup.find("meta", attrs={"name": name})
        return tag.get("content", "").strip() if tag else ""

    twitter = {
        "card":        _tw("twitter:card"),
        "title":       _tw("twitter:title"),
        "description": _tw("twitter:description"),
        "image":       _tw("twitter:image"),
    }

    # ── Viewport ───────────────────────────────────────────────────────────
    viewport         = soup.find("meta", attrs={"name": "viewport"})
    viewport_content = viewport.get("content", "").lower() if viewport else ""
    has_viewport_meta = bool(viewport) and "width" in viewport_content

    # ── Language ───────────────────────────────────────────────────────────
    html_tag = soup.find("html")
    lang     = html_tag.get("lang", "").strip() if html_tag else ""

    # ── Favicon ────────────────────────────────────────────────────────────
    has_favicon = bool(
        soup.find("link", rel=lambda r: r and ("icon" in r or "shortcut icon" in r))
    )

    # ── Structured data / Schema ───────────────────────────────────────────
    json_ld_scripts = soup.find_all("script", type="application/ld+json")
    has_schema      = len(json_ld_scripts) > 0
    schema_types    = []
    for script in json_ld_scripts:
        try:
            data = json.loads(script.string or "{}")
            items = data if isinstance(data, list) else [data]
            for item in items:
                t = item.get("@type", "")
                if t:
                    schema_types.append(t if isinstance(t, str) else ", ".join(t))
        except Exception:
            pass

    # ── Content / word count / text-to-HTML ratio ──────────────────────────
    body = soup.find("body")
    body_text   = body.get_text(separator=" ", strip=True) if body else ""
    word_count  = len(body_text.split())
    html_size_kb = round(len(html_bytes) / 1024, 1)
    text_html_ratio = round((len(body_text) / len(html_bytes)) * 100, 1) if html_bytes else 0

    # ── URL quality ────────────────────────────────────────────────────────
    url_path            = parsed_url.path or "/"
    url_length          = len(original_url)
    url_has_underscores = "_" in url_path
    url_has_uppercase   = any(c.isupper() for c in url_path)
    url_has_params      = bool(parsed_url.query)

    # ── Sitemap in <head> or robots.txt ────────────────────────────────────
    sitemap_in_head = bool(
        soup.find("link", attrs={"rel": "sitemap"})
        or soup.find("link", type="application/xml")
    )

    # ── HTTPS ──────────────────────────────────────────────────────────────
    is_https = original_url.startswith("https://")

    return {
        # Identity
        "is_https":             is_https,
        # Title
        "title":                title_text,
        "title_length":         len(title_text),
        # Meta description
        "meta_description":     meta_desc,
        "meta_description_length": len(meta_desc),
        # Robots
        "meta_robots":          meta_robots,
        "is_noindex":           is_noindex,
        # Headings
        "h1_tags":              h1_tags,
        "h2_count":             h2_count,
        "h3_count":             h3_count,
        # Canonical
        "canonical":            canonical,
        # Images
        "image_count":          len(all_images),
        "images_missing_alt_count": images_missing_alt_count,
        "images_missing_dimensions": images_missing_dimensions,
        # Links
        "internal_links":       internal_links,
        "external_links":       external_links,
        "nofollow_links":       nofollow_links,
        # Open Graph
        "open_graph":           og,
        # Twitter
        "twitter":              twitter,
        # Schema
        "has_schema":           has_schema,
        "schema_types":         schema_types,
        # Technical
        "has_viewport_meta":    has_viewport_meta,
        "has_favicon":          has_favicon,
        "lang":                 lang,
        "sitemap_in_head":      sitemap_in_head,
        # Content
        "word_count":           word_count,
        "html_size_kb":         html_size_kb,
        "text_html_ratio":      text_html_ratio,
        # URL
        "url_length":           url_length,
        "url_has_underscores":  url_has_underscores,
        "url_has_uppercase":    url_has_uppercase,
        "url_has_params":       url_has_params,
    }

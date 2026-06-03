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


def extract_seo(soup: BeautifulSoup, base_url: str, original_url: str) -> dict:
    parsed_base = urlparse(base_url)

    title_tag = soup.find("title")
    title_text = title_tag.get_text(strip=True) if title_tag else ""

    meta_desc_tag = soup.find("meta", attrs={"name": "description"})
    meta_desc = meta_desc_tag.get("content", "").strip() if meta_desc_tag else ""

    # noindex / robots meta
    meta_robots_tag = soup.find("meta", attrs={"name": "robots"})
    meta_robots = meta_robots_tag.get("content", "").lower().strip() if meta_robots_tag else ""
    is_noindex = "noindex" in meta_robots

    h1_tags = [h.get_text(strip=True) for h in soup.find_all("h1")]
    h2_count = len(soup.find_all("h2"))
    h3_count = len(soup.find_all("h3"))

    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    canonical_raw = canonical_tag.get("href", "").strip() if canonical_tag else ""
    # Resolve relative canonicals to absolute
    canonical = urljoin(original_url, canonical_raw) if canonical_raw else ""

    all_images = soup.find_all("img")
    images_missing_alt_count = sum(
        1 for img in all_images if not img.get("alt", "").strip()
    )

    internal_links, external_links = 0, 0
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

    og = {}
    for prop in ("og:title", "og:description", "og:image", "og:type"):
        tag = soup.find("meta", property=prop)
        value = tag.get("content", "").strip() if tag else ""
        # Resolve relative og:image to absolute URL
        if prop == "og:image" and value and not value.startswith(("http://", "https://", "//")):
            value = urljoin(original_url, value)
        og[prop.replace(":", "_")] = value

    # Viewport: check both presence and that content includes width specification
    viewport = soup.find("meta", attrs={"name": "viewport"})
    viewport_content = viewport.get("content", "").lower() if viewport else ""
    has_viewport_meta = bool(viewport) and "width" in viewport_content

    # lang attribute
    html_tag = soup.find("html")
    lang = html_tag.get("lang", "").strip() if html_tag else ""

    # sitemap existence (check if /sitemap.xml is referenced or declared)
    sitemap_in_head = bool(
        soup.find("link", attrs={"rel": "sitemap"})
        or soup.find("link", type="application/xml")
    )

    return {
        "title": title_text,
        "title_length": len(title_text),
        "meta_description": meta_desc,
        "meta_description_length": len(meta_desc),
        "meta_robots": meta_robots,
        "is_noindex": is_noindex,
        "h1_tags": h1_tags,
        "h2_count": h2_count,
        "h3_count": h3_count,
        "canonical": canonical,
        "image_count": len(all_images),
        "images_missing_alt_count": images_missing_alt_count,
        "internal_links": internal_links,
        "external_links": external_links,
        "open_graph": og,
        "has_viewport_meta": has_viewport_meta,
        "lang": lang,
        "sitemap_in_head": sitemap_in_head,
    }

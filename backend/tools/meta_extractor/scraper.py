import json
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

_HEADERS = {"User-Agent": "SpiderAudit/1.0 (Meta Extractor; rankspiders.com)"}


async def extract_meta(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    async with httpx.AsyncClient(timeout=10.0, follow_redirects=True, headers=_HEADERS) as client:
        response = await client.get(url)

    soup = BeautifulSoup(response.text, "html.parser")

    # ── Basic tags ─────────────────────────────────────────────────────
    title_tag = soup.find("title")
    title = title_tag.get_text(strip=True) if title_tag else ""

    def meta_content(name_attr: str, value: str) -> str:
        tag = soup.find("meta", attrs={name_attr: value})
        return tag.get("content", "").strip() if tag else ""

    description = meta_content("name", "description")
    keywords = meta_content("name", "keywords")
    robots_meta = meta_content("name", "robots")
    author = meta_content("name", "author")
    viewport = meta_content("name", "viewport")
    theme_color = meta_content("name", "theme-color")
    charset_tag = soup.find("meta", attrs={"charset": True})
    charset = charset_tag.get("charset", "") if charset_tag else ""

    # ── Open Graph ──────────────────────────────────────────────────────
    og = {}
    for tag in soup.find_all("meta", property=lambda p: p and p.startswith("og:")):
        key = tag.get("property", "").replace("og:", "")
        og[key] = tag.get("content", "").strip()

    # ── Twitter Card ────────────────────────────────────────────────────
    twitter = {}
    for tag in soup.find_all("meta", attrs={"name": lambda n: n and n.startswith("twitter:")}):
        key = tag.get("name", "").replace("twitter:", "")
        twitter[key] = tag.get("content", "").strip()

    # ── JSON-LD Schema ──────────────────────────────────────────────────
    json_ld = []
    for script in soup.find_all("script", type="application/ld+json"):
        try:
            data = json.loads(script.string or "")
            json_ld.append(data)
        except Exception:
            pass

    # ── Link tags ───────────────────────────────────────────────────────
    canonical = ""
    hreflang = []
    link_tags = []
    for tag in soup.find_all("link"):
        rel = " ".join(tag.get("rel", []))
        href = tag.get("href", "")
        if not rel or not href:
            continue
        if "canonical" in rel:
            canonical = href
        elif "alternate" in rel and tag.get("hreflang"):
            hreflang.append({"hreflang": tag.get("hreflang"), "href": href})
        link_tags.append({"rel": rel, "href": href})

    # ── Issues ──────────────────────────────────────────────────────────
    issues = []
    if not title:
        issues.append({"severity": "fail", "msg": "Missing <title> tag — critical for SEO and click-through rates."})
    elif len(title) < 30:
        issues.append({"severity": "warn", "msg": f"Title is too short ({len(title)} chars). Aim for 50–60 characters."})
    elif len(title) > 60:
        issues.append({"severity": "warn", "msg": f"Title may be truncated in SERPs ({len(title)} chars). Keep under 60."})

    if not description:
        issues.append({"severity": "fail", "msg": "Missing meta description — Google may auto-generate one, often poorly."})
    elif len(description) < 120:
        issues.append({"severity": "warn", "msg": f"Meta description is short ({len(description)} chars). Aim for 150–160 characters."})
    elif len(description) > 160:
        issues.append({"severity": "warn", "msg": f"Meta description may be cut off ({len(description)} chars). Keep under 160."})

    if not og:
        issues.append({"severity": "warn", "msg": "No Open Graph tags. Social media previews will look generic."})
    elif not og.get("image"):
        issues.append({"severity": "warn", "msg": "Missing og:image. Social shares won't show a preview image."})

    if not twitter:
        issues.append({"severity": "info", "msg": "No Twitter Card tags. Twitter/X will use Open Graph as fallback if present."})

    if not json_ld:
        issues.append({"severity": "info", "msg": "No JSON-LD schema markup found. Structured data can unlock rich results in Google."})

    if not canonical:
        issues.append({"severity": "warn", "msg": "No canonical tag. Duplicate content issues may arise without it."})

    if robots_meta and ("noindex" in robots_meta or "nofollow" in robots_meta):
        issues.append({"severity": "fail", "msg": f'robots meta is set to "{robots_meta}" — this page may be excluded from search results.'})

    if not viewport:
        issues.append({"severity": "fail", "msg": "Missing viewport meta tag — page will not be mobile-friendly."})

    pass_count = sum(1 for i in issues if i["severity"] == "fail") == 0
    score = max(0, 100 - len([i for i in issues if i["severity"] == "fail"]) * 20
                      - len([i for i in issues if i["severity"] == "warn"]) * 8
                      - len([i for i in issues if i["severity"] == "info"]) * 3)

    return {
        "url": str(response.url),
        "status_code": response.status_code,
        "score": score,
        "basic": {
            "title": title,
            "title_length": len(title),
            "description": description,
            "description_length": len(description),
            "keywords": keywords,
            "robots": robots_meta,
            "author": author,
            "viewport": viewport,
            "charset": charset,
            "theme_color": theme_color,
            "canonical": canonical,
        },
        "open_graph": og,
        "twitter_card": twitter,
        "json_ld": json_ld,
        "hreflang": hreflang,
        "link_tags": link_tags[:30],
        "issues": issues,
        "has_og": bool(og),
        "has_twitter": bool(twitter),
        "has_schema": bool(json_ld),
        "has_hreflang": bool(hreflang),
    }

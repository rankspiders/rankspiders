import ipaddress
import json
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

_HEADERS = {"User-Agent": "SpiderAudit/1.0 (Meta Extractor; rankspiders.com)"}

_PRIVATE_RANGES = [
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("169.254.0.0/16"),
]


def _is_private_host(hostname: str) -> bool:
    if not hostname or hostname.lower() == "localhost":
        return True
    try:
        addr = ipaddress.ip_address(hostname)
        return any(addr in net for net in _PRIVATE_RANGES)
    except ValueError:
        return False


async def extract_meta(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    if _is_private_host(parsed.hostname or ""):
        raise ValueError("Private or local addresses are not allowed.")

    async with httpx.AsyncClient(timeout=10.0, follow_redirects=True, headers=_HEADERS) as client:
        response = await client.get(url)

    # Content-type gate — don't try to parse PDFs, images, JSON APIs
    content_type = response.headers.get("content-type", "")
    if "text/html" not in content_type and "application/xhtml+xml" not in content_type:
        return {
            "url": str(response.url),
            "status_code": response.status_code,
            "error": f"URL does not return an HTML page ({content_type}). Meta tag extraction requires HTML content.",
        }

    # Pass bytes so BeautifulSoup handles charset detection itself
    soup = BeautifulSoup(response.content, "html.parser")

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
    # Also check legacy http-equiv charset form
    if not charset:
        he_ct = soup.find("meta", attrs={"http-equiv": lambda v: v and v.lower() == "content-type"})
        if he_ct:
            ct_val = he_ct.get("content", "")
            if "charset=" in ct_val.lower():
                charset = ct_val.lower().split("charset=")[-1].strip()

    # http-equiv refresh (meta redirect)
    refresh_tag = soup.find("meta", attrs={"http-equiv": lambda v: v and v.lower() == "refresh"})
    refresh = refresh_tag.get("content", "").strip() if refresh_tag else ""

    # ── Open Graph ──────────────────────────────────────────────────────
    og: dict[str, str] = {}
    for tag in soup.find_all("meta", property=lambda p: p and p.startswith("og:")):
        key = tag.get("property", "").replace("og:", "")
        if key and key not in og:  # first occurrence wins
            og[key] = tag.get("content", "").strip()
    # Also capture <meta name="og:*"> (some CMSes use name= instead of property=)
    for tag in soup.find_all("meta", attrs={"name": lambda n: n and n.startswith("og:")}):
        key = tag.get("name", "").replace("og:", "")
        if key and key not in og:
            og[key] = tag.get("content", "").strip()

    # ── Twitter Card ────────────────────────────────────────────────────
    twitter: dict[str, str] = {}
    for tag in soup.find_all("meta", attrs={"name": lambda n: n and n.startswith("twitter:")}):
        key = tag.get("name", "").replace("twitter:", "")
        if key and key not in twitter:  # first occurrence wins
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
        href = tag.get("href", "").strip()
        if not rel:
            continue
        if "canonical" in rel and href and not canonical:
            canonical = href  # first canonical wins
        elif "alternate" in rel and tag.get("hreflang"):
            hreflang.append({"hreflang": tag.get("hreflang"), "href": href})
        if href:
            link_tags.append({"rel": rel, "href": href})

    total_link_tags = len(link_tags)

    # ── Issues ──────────────────────────────────────────────────────────
    issues = []

    # HTTP error pages
    if response.status_code != 200:
        issues.append({"severity": "fail", "msg": f"Server returned HTTP {response.status_code}. Meta tags below may be from an error page, not your real content."})

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

    if robots_meta:
        problem_directives = [d.strip() for d in robots_meta.split(",") if d.strip() in ("noindex", "nofollow", "nosnippet", "noarchive", "noodp")]
        if problem_directives:
            issues.append({"severity": "fail", "msg": f'robots meta contains "{", ".join(problem_directives)}" — this may exclude the page from search results or limit its appearance.'})

    if not viewport:
        issues.append({"severity": "fail", "msg": "Missing viewport meta tag — page will not be mobile-friendly."})

    if refresh:
        issues.append({"severity": "warn", "msg": f'Page has a meta refresh redirect (content="{refresh}"). This harms crawl budget and user experience — use a proper HTTP redirect instead.'})

    score = max(0, 100
                - len([i for i in issues if i["severity"] == "fail"]) * 20
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
            "refresh": refresh,
        },
        "open_graph": og,
        "twitter_card": twitter,
        "json_ld": json_ld,
        "hreflang": hreflang,
        "link_tags": link_tags[:30],
        "link_tags_total": total_link_tags,
        "issues": issues,
        "has_og": bool(og),
        "has_twitter": bool(twitter),
        "has_schema": bool(json_ld),
        "has_hreflang": bool(hreflang),
    }

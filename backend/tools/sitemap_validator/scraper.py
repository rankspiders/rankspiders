import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from urllib.parse import urlparse

import httpx

_NS = "http://www.sitemaps.org/schemas/sitemap/0.9"
_HEADERS = {"User-Agent": "SpiderAudit/1.0 (Sitemap Validator; rankspiders.com)"}


def _tag(name: str) -> str:
    return f"{{{_NS}}}{name}"


def _text(elem, child: str) -> str:
    node = elem.find(_tag(child))
    return node.text.strip() if node is not None and node.text else ""


def _age_days(lastmod: str) -> int | None:
    for fmt in ("%Y-%m-%d", "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%dT%H:%M:%SZ"):
        try:
            dt = datetime.strptime(lastmod, fmt)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            return (datetime.now(timezone.utc) - dt).days
        except ValueError:
            continue
    return None


async def check_sitemap(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    # Auto-append /sitemap.xml if just a domain
    if parsed.path in ("", "/"):
        sitemap_url = f"{parsed.scheme}://{parsed.netloc}/sitemap.xml"
    else:
        sitemap_url = url

    async with httpx.AsyncClient(timeout=15.0, follow_redirects=True, headers=_HEADERS) as client:
        try:
            r = await client.get(sitemap_url)
            ct = r.headers.get("content-type", "")
            is_xml = "xml" in ct or r.text.strip().startswith("<?xml") or r.text.strip().startswith("<")
            found = r.status_code == 200 and is_xml
            raw = r.text if found else ""
        except Exception as exc:
            return {"sitemap_url": sitemap_url, "found": False, "error": str(exc)}

    if not found:
        return {
            "sitemap_url": sitemap_url,
            "found": False,
            "error": "Sitemap not found or server returned non-XML response.",
        }

    try:
        root = ET.fromstring(raw)
    except ET.ParseError as e:
        return {"sitemap_url": sitemap_url, "found": True, "error": f"XML parse error: {e}"}

    is_index = "sitemapindex" in root.tag.lower()

    if is_index:
        child_sitemaps = [
            {"loc": _text(s, "loc"), "lastmod": _text(s, "lastmod")}
            for s in root.iter(_tag("sitemap"))
            if _text(s, "loc")
        ]
        return {
            "sitemap_url": sitemap_url,
            "found": True,
            "is_index": True,
            "sitemap_count": len(child_sitemaps),
            "child_sitemaps": child_sitemaps[:50],
            "url_count": 0,
            "urls": [],
            "stats": {},
            "error": None,
        }

    urls = []
    for u in root.iter(_tag("url")):
        loc = _text(u, "loc")
        if not loc:
            continue
        lastmod = _text(u, "lastmod")
        urls.append({
            "loc": loc,
            "lastmod": lastmod,
            "changefreq": _text(u, "changefreq"),
            "priority": _text(u, "priority"),
            "age_days": _age_days(lastmod) if lastmod else None,
        })

    # Stats
    with_lastmod = [u for u in urls if u["lastmod"]]
    with_priority = [u for u in urls if u["priority"]]
    with_changefreq = [u for u in urls if u["changefreq"]]
    ages = [u["age_days"] for u in urls if u["age_days"] is not None]

    issues = []
    if len(with_lastmod) < len(urls) * 0.5:
        issues.append(f"Only {len(with_lastmod)} of {len(urls)} URLs have a lastmod date. Add lastmod to help Google prioritise crawling.")
    if len(with_priority) == 0:
        issues.append("No URLs have a priority value set. Priority hints help search engines determine crawl order.")
    if ages and max(ages) > 365:
        issues.append(f"Some URLs haven't been updated in over a year. Consider refreshing or removing stale content.")
    if len(urls) > 50000:
        issues.append("Sitemap exceeds 50,000 URLs. Split into a sitemap index for better performance.")

    stats = {
        "total_urls": len(urls),
        "with_lastmod": len(with_lastmod),
        "with_priority": len(with_priority),
        "with_changefreq": len(with_changefreq),
        "newest_url_age_days": min(ages) if ages else None,
        "oldest_url_age_days": max(ages) if ages else None,
        "avg_age_days": round(sum(ages) / len(ages)) if ages else None,
    }

    return {
        "sitemap_url": sitemap_url,
        "found": True,
        "is_index": False,
        "url_count": len(urls),
        "urls": urls[:100],
        "stats": stats,
        "issues": issues,
        "child_sitemaps": [],
        "error": None,
    }

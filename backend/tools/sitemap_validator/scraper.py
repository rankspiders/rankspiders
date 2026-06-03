import gzip
import ipaddress
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from urllib.parse import urlparse

import httpx

_NS = "http://www.sitemaps.org/schemas/sitemap/0.9"
_HEADERS = {"User-Agent": "SpiderAudit/1.0 (Sitemap Validator; rankspiders.com)"}

_PRIVATE_RANGES = [
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("169.254.0.0/16"),
]

_VALID_CHANGEFREQ = {"always", "hourly", "daily", "weekly", "monthly", "yearly", "never"}


def _is_private_host(hostname: str) -> bool:
    if not hostname or hostname.lower() == "localhost":
        return True
    try:
        addr = ipaddress.ip_address(hostname)
        return any(addr in net for net in _PRIVATE_RANGES)
    except ValueError:
        return False


def _tag(name: str) -> str:
    return f"{{{_NS}}}{name}"


def _text(elem, child: str) -> str:
    node = elem.find(_tag(child))
    return node.text.strip() if node is not None and node.text else ""


def _age_days(lastmod: str) -> int | None:
    """Return days since lastmod, or None if unparseable. Negative = future date (clamped to None)."""
    formats = (
        "%Y-%m-%d",
        "%Y-%m-%dT%H:%M:%S%z",
        "%Y-%m-%dT%H:%M:%SZ",
        "%Y-%m",        # year-month only
        "%Y",           # year only
    )
    for fmt in formats:
        try:
            dt = datetime.strptime(lastmod, fmt)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            days = (datetime.now(timezone.utc) - dt).days
            # Future dates produce negative days — treat as no date
            return days if days >= 0 else None
        except ValueError:
            continue
    return None


async def check_sitemap(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    if _is_private_host(parsed.hostname or ""):
        raise ValueError("Private or local addresses are not allowed.")

    # Auto-append /sitemap.xml if given just a domain or domain+path (not .xml)
    if parsed.path in ("", "/") or (parsed.path and not parsed.path.endswith((".xml", ".xml.gz"))):
        sitemap_url = f"{parsed.scheme}://{parsed.netloc}/sitemap.xml"
    else:
        sitemap_url = url

    async with httpx.AsyncClient(timeout=15.0, follow_redirects=True, headers=_HEADERS) as client:
        try:
            r = await client.get(sitemap_url)
        except Exception as exc:
            # Let timeout propagate to router; wrap others
            raise

    if r.status_code != 200:
        status_msg = {404: "not found (404)", 403: "access forbidden (403)", 401: "authentication required (401)"}.get(
            r.status_code, f"HTTP {r.status_code}"
        )
        return {
            "sitemap_url": str(r.url),
            "found": False,
            "error": f"Sitemap {status_msg}. Check the URL and ensure the file is publicly accessible.",
        }

    ct = r.headers.get("content-type", "").lower()

    # Handle gzip-compressed sitemaps (.xml.gz)
    is_gzip = sitemap_url.endswith(".gz") or "gzip" in ct or r.content[:2] == b"\x1f\x8b"
    if is_gzip:
        try:
            raw_bytes = gzip.decompress(r.content)
            raw = raw_bytes.decode("utf-8", errors="replace")
        except Exception as e:
            return {"sitemap_url": str(r.url), "found": True, "error": f"Could not decompress gzip sitemap: {e}"}
    else:
        raw = r.text

    # Validate it's actually XML (not an HTML error page)
    stripped = raw.strip()
    if not (stripped.startswith("<?xml") or stripped.startswith("<urlset") or stripped.startswith("<sitemapindex")):
        return {
            "sitemap_url": str(r.url),
            "found": False,
            "error": "URL did not return a valid XML sitemap. The server may have returned an HTML error page.",
        }

    try:
        root = ET.fromstring(raw)
    except ET.ParseError as e:
        return {"sitemap_url": str(r.url), "found": True, "error": f"XML parse error: {e}"}

    is_index = "sitemapindex" in root.tag.lower()

    if is_index:
        child_sitemaps = [
            {"loc": _text(s, "loc"), "lastmod": _text(s, "lastmod")}
            for s in root.iter(_tag("sitemap"))
            if _text(s, "loc")
        ]
        sitemap_count = len(child_sitemaps)
        return {
            "sitemap_url": str(r.url),
            "found": True,
            "is_index": True,
            "sitemap_count": sitemap_count,
            "child_sitemaps": child_sitemaps[:50],
            "child_sitemaps_truncated": sitemap_count > 50,
            "url_count": 0,
            "urls": [],
            "stats": None,  # null, not {}, so frontend can guard correctly
            "issues": [
                f"This is a sitemap index containing {sitemap_count} child sitemap(s). "
                "Validate individual child sitemaps for detailed URL analysis."
            ],
            "error": None,
        }

    urls = []
    issues = []
    seen_locs: set[str] = set()
    duplicate_count = 0

    for u in root.iter(_tag("url")):
        loc = _text(u, "loc")
        if not loc:
            continue
        if loc in seen_locs:
            duplicate_count += 1
            continue
        seen_locs.add(loc)

        lastmod = _text(u, "lastmod")
        changefreq = _text(u, "changefreq")
        priority = _text(u, "priority")

        urls.append({
            "loc": loc,
            "lastmod": lastmod,
            "changefreq": changefreq,
            "priority": priority,
            "age_days": _age_days(lastmod) if lastmod else None,
        })

    # Issues
    with_lastmod = [u for u in urls if u["lastmod"]]
    with_priority = [u for u in urls if u["priority"]]
    with_changefreq = [u for u in urls if u["changefreq"]]
    ages = [u["age_days"] for u in urls if u["age_days"] is not None]

    if not urls:
        issues.append("Sitemap contains no <url> entries. Add URLs to help search engines discover your content.")

    if duplicate_count > 0:
        issues.append(f"{duplicate_count} duplicate URL(s) removed. Each URL should appear only once in a sitemap.")

    if urls and len(with_lastmod) < len(urls) * 0.5:
        issues.append(f"Only {len(with_lastmod)} of {len(urls)} URLs have a lastmod date. Add lastmod to help Google prioritise crawling.")

    if urls and len(with_priority) == 0:
        issues.append("No URLs have a priority value set. Priority hints help search engines determine crawl order.")

    # Validate changefreq values
    invalid_freq = [u["changefreq"] for u in urls if u["changefreq"] and u["changefreq"] not in _VALID_CHANGEFREQ]
    if invalid_freq:
        issues.append(f"Invalid changefreq value(s): {', '.join(set(invalid_freq))}. Valid values: always hourly daily weekly monthly yearly never.")

    # Validate priority range
    invalid_priority = [u["priority"] for u in urls if u["priority"]]
    out_of_range = []
    for p in invalid_priority:
        try:
            v = float(p)
            if not (0.0 <= v <= 1.0):
                out_of_range.append(p)
        except ValueError:
            out_of_range.append(p)
    if out_of_range:
        issues.append(f"Priority value(s) out of range: {', '.join(set(out_of_range))}. Must be between 0.0 and 1.0.")

    if ages and max(ages) > 365:
        issues.append("Some URLs haven't been updated in over a year. Consider refreshing or removing stale content.")

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
        "sitemap_url": str(r.url),
        "found": True,
        "is_index": False,
        "url_count": len(urls),
        "urls": urls[:100],
        "urls_truncated": len(urls) > 100,
        "stats": stats,
        "issues": issues,
        "child_sitemaps": [],
        "error": None,
    }

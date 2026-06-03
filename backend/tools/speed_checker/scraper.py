import ipaddress
import time
from urllib.parse import urlparse

import httpx

_HEADERS = {"User-Agent": "SpiderAudit/1.0 (Speed Checker; rankspiders.com)"}

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


async def check_speed(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    if _is_private_host(parsed.hostname or ""):
        raise ValueError("Private or local addresses are not allowed.")

    redirect_chain = []

    async with httpx.AsyncClient(
        timeout=15.0,
        follow_redirects=True,
        headers=_HEADERS,
    ) as client:
        t_start = time.perf_counter()
        response = await client.get(url)
        load_time_ms = round((time.perf_counter() - t_start) * 1000, 1)

        for r in response.history:
            redirect_chain.append({"from": str(r.url), "status": r.status_code})

    h = response.headers
    encoding = h.get("content-encoding", "none").lower()
    cache = h.get("cache-control", "not set")
    server = h.get("server", "unknown")
    content_type = h.get("content-type", "").split(";")[0].strip()
    http_version = response.http_version

    # response.content is the decompressed HTML — this is the DOM size, not wire size
    dom_size_bytes = len(response.content)
    dom_size_kb = round(dom_size_bytes / 1024, 1)

    score = 100
    issues = []
    tips = []

    # Non-200 status
    if response.status_code != 200:
        score -= 20
        issues.append(
            f"Server returned HTTP {response.status_code}. Results may reflect an error page, not real page content."
        )

    if load_time_ms > 3000:
        score -= 30
        issues.append(f"Very slow response ({load_time_ms} ms). Target < 1000 ms.")
        tips.append("Upgrade hosting, enable a CDN, or reduce server-side processing time.")
    elif load_time_ms > 1000:
        score -= 15
        issues.append(f"Slow response ({load_time_ms} ms). Target < 1000 ms.")
        tips.append("Consider server-side caching or a CDN to reduce latency.")

    is_compressed = encoding in ("gzip", "br", "deflate", "zstd")
    if not is_compressed and "text" in content_type:
        score -= 20
        issues.append("No text compression (gzip/Brotli). Compressing HTML can reduce transfer size by 70%.")
        tips.append("Enable gzip or Brotli compression on your web server or CDN.")

    if dom_size_kb > 500:
        score -= 15
        issues.append(f"Large HTML document ({dom_size_kb} KB uncompressed). Keep below 100 KB.")
        tips.append("Minify HTML, defer non-critical scripts, and lazy-load images.")
    elif dom_size_kb > 100:
        score -= 5
        issues.append(f"HTML document is {dom_size_kb} KB uncompressed. Under 100 KB is ideal.")

    no_cache = "no-store" in cache or "no-cache" in cache or cache == "not set"
    if no_cache:
        score -= 10
        issues.append("No browser caching configured (Cache-Control missing or set to no-cache).")
        tips.append("Add Cache-Control headers (e.g. max-age=31536000) for static assets.")

    # Only penalise redirect chains of 2+ (one http→https redirect is normal)
    if len(redirect_chain) >= 2:
        score -= 10
        issues.append(f"{len(redirect_chain)} redirect(s) detected. Each adds ~100–300 ms.")
        tips.append("Eliminate redirect chains — link directly to the final URL.")

    if not tips:
        tips.append("Page loads fast and is well-configured. Keep monitoring as you add content.")

    return {
        "url": str(response.url),
        "status_code": response.status_code,
        "load_time_ms": load_time_ms,
        "dom_size_kb": dom_size_kb,
        "response_size_kb": dom_size_kb,  # kept for backwards compat
        "compression": encoding,
        "is_compressed": is_compressed,
        "cache_control": cache,
        "server": server,
        "http_version": http_version,
        "content_type": content_type,
        "redirect_count": len(redirect_chain),
        "redirect_chain": redirect_chain,
        "score": max(0, score),
        "issues": issues,
        "tips": tips,
    }

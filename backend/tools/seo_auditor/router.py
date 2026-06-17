import ipaddress
import socket
import time
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

from tools.seo_auditor.scraper import check_robots, check_sitemap, extract_seo

router = APIRouter()

_HEADERS = {"User-Agent": "SpiderAudit/1.0 (SEO Auditor; rankspiders.com)"}

_PRIVATE_RANGES = [
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("169.254.0.0/16"),  # AWS/GCP metadata
    ipaddress.ip_network("::1/128"),           # IPv6 loopback
    ipaddress.ip_network("fc00::/7"),          # IPv6 ULA
]


def _is_private_host(hostname: str) -> bool:
    if hostname.lower() in ("localhost", "0.0.0.0"):
        return True
    try:
        ip = ipaddress.ip_address(socket.gethostbyname(hostname))
        return any(ip in net for net in _PRIVATE_RANGES)
    except Exception:
        return True  # block on resolution failure


@router.get("/audit")
async def audit(url: str = Query(..., description="Target URL to audit")):
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    hostname = parsed.hostname or ""
    if not hostname or _is_private_host(hostname):
        return JSONResponse({"error": "invalid_url", "message": "Private or local addresses are not allowed."}, status_code=400)

    _MAX_BODY_BYTES = 5 * 1024 * 1024  # 5 MB hard cap

    try:
        async with httpx.AsyncClient(
            timeout=15.0,
            follow_redirects=True,
            headers=_HEADERS,
        ) as client:
            t_start = time.perf_counter()
            response = await client.get(url)
            load_time_ms = round((time.perf_counter() - t_start) * 1000, 1)

            if len(response.content) > _MAX_BODY_BYTES:
                return JSONResponse(
                    {"error": "too_large", "message": "Page response exceeds 5 MB — cannot audit."},
                    status_code=413,
                )

            final_parsed = urlparse(str(response.url))
            base_url = f"{final_parsed.scheme}://{final_parsed.netloc}"
            path = final_parsed.path or "/"

            robots_allowed, sitemap_exists = await _parallel(
                check_robots(client, base_url, path),
                check_sitemap(client, base_url),
            )

        content_type = response.headers.get("content-type", "")
        if "text/html" not in content_type and "application/xhtml+xml" not in content_type:
            return JSONResponse(
                {"error": "not_html", "message": f"URL does not return an HTML page ({content_type or 'no content-type'}). The SEO auditor only works on HTML pages."},
                status_code=422,
            )

        soup = BeautifulSoup(response.content, "html.parser")
        seo  = extract_seo(soup, base_url, str(response.url), response.content)

        result = {
            "url":            str(response.url),
            "status_code":    response.status_code,
            "load_time_ms":   load_time_ms,
            "robots_allowed": robots_allowed,
            "sitemap_exists": sitemap_exists,
            **seo,
        }

        if response.status_code != 200:
            result["warning"] = (
                f"Server returned HTTP {response.status_code}. "
                "Results below may reflect an error or bot-challenge page, not your actual content."
            )

        return JSONResponse(result)

    except httpx.TimeoutException:
        return JSONResponse(
            {"error": "timeout", "message": "Request timed out after 15 seconds. The site may be slow or blocking automated requests."},
            status_code=408,
        )
    except httpx.RequestError as exc:
        return JSONResponse(
            {"error": "request_failed", "message": f"Could not connect: {type(exc).__name__}. Check the URL and try again."},
            status_code=400,
        )
    except ValueError as exc:
        return JSONResponse({"error": "invalid_url", "message": str(exc)}, status_code=400)


async def _parallel(*coros):
    import asyncio
    return await asyncio.gather(*coros)

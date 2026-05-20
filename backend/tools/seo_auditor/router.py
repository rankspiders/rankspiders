import time
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

from tools.seo_auditor.scraper import check_robots, extract_seo

router = APIRouter()

_HEADERS = {"User-Agent": "SpiderAudit/1.0 (SEO Auditor; rankspiders.com)"}


@router.get("/audit")
async def audit(url: str = Query(..., description="Target URL to audit")):
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    base_url = f"{parsed.scheme}://{parsed.netloc}"
    path = parsed.path or "/"

    try:
        async with httpx.AsyncClient(
            timeout=10.0,
            follow_redirects=True,
            headers=_HEADERS,
        ) as client:
            t_start = time.perf_counter()
            response = await client.get(url)
            load_time_ms = round((time.perf_counter() - t_start) * 1000, 1)

            robots_allowed = await check_robots(client, base_url, path)

        content_type = response.headers.get("content-type", "")
        if "text/html" not in content_type:
            return JSONResponse(
                {"error": "not_html", "message": f"Response is not HTML ({content_type})"},
                status_code=422,
            )

        soup = BeautifulSoup(response.text, "html.parser")
        seo = extract_seo(soup, base_url, str(response.url))

        return JSONResponse({
            "url": str(response.url),
            "status_code": response.status_code,
            "load_time_ms": load_time_ms,
            "robots_allowed": robots_allowed,
            **seo,
        })

    except httpx.TimeoutException:
        return JSONResponse(
            {"error": "timeout", "message": "Request timed out after 10 seconds."},
            status_code=408,
        )
    except httpx.RequestError as exc:
        return JSONResponse(
            {"error": "request_failed", "message": str(exc)},
            status_code=400,
        )

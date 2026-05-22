from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
import httpx

from tools.sitemap_validator.scraper import check_sitemap

router = APIRouter()


@router.get("/sitemap")
async def sitemap(url: str = Query(..., description="Domain or direct sitemap URL")):
    try:
        result = await check_sitemap(url)
        return JSONResponse(result)
    except httpx.TimeoutException:
        return JSONResponse({"error": "timeout", "message": "Request timed out after 15 seconds."}, status_code=408)
    except httpx.RequestError as exc:
        return JSONResponse({"error": "request_failed", "message": str(exc)}, status_code=400)

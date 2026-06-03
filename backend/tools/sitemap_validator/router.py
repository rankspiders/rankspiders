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
        return JSONResponse({"error": "timeout", "message": "Request timed out after 15 seconds. The site may be slow or blocking automated requests."}, status_code=408)
    except httpx.RequestError as exc:
        return JSONResponse({"error": "request_failed", "message": f"Could not connect: {type(exc).__name__}. Check the URL and try again."}, status_code=400)
    except ValueError as exc:
        return JSONResponse({"error": "invalid_url", "message": str(exc)}, status_code=400)

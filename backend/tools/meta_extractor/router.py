from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
import httpx

from tools.meta_extractor.scraper import extract_meta

router = APIRouter()


@router.get("/meta")
async def meta(url: str = Query(..., description="Target URL to extract meta tags from")):
    try:
        result = await extract_meta(url)
        return JSONResponse(result)
    except httpx.TimeoutException:
        return JSONResponse({"error": "timeout", "message": "Request timed out after 10 seconds. The site may be slow or blocking automated requests."}, status_code=408)
    except httpx.RequestError as exc:
        return JSONResponse({"error": "request_failed", "message": f"Could not connect: {type(exc).__name__}. Check the URL and try again."}, status_code=400)
    except ValueError as exc:
        return JSONResponse({"error": "invalid_url", "message": str(exc)}, status_code=400)

from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
import httpx

from tools.keyword_density.scraper import check_keywords

router = APIRouter()


@router.get("/keywords")
async def keywords(url: str = Query(..., description="Target URL to analyse")):
    try:
        result = await check_keywords(url)
        return JSONResponse(result)
    except httpx.TimeoutException:
        return JSONResponse({"error": "timeout", "message": "Request timed out after 10 seconds."}, status_code=408)
    except httpx.RequestError as exc:
        return JSONResponse({"error": "request_failed", "message": str(exc)}, status_code=400)

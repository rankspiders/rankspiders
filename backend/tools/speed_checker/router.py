from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
import httpx

from tools.speed_checker.scraper import check_speed

router = APIRouter()


@router.get("/speed")
async def speed(url: str = Query(..., description="Target URL to test")):
    try:
        result = await check_speed(url)
        return JSONResponse(result)
    except httpx.TimeoutException:
        return JSONResponse({"error": "timeout", "message": "Request timed out after 15 seconds."}, status_code=408)
    except httpx.RequestError as exc:
        return JSONResponse({"error": "request_failed", "message": str(exc)}, status_code=400)

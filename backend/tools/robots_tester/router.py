from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
import httpx

from tools.robots_tester.scraper import check_robots

router = APIRouter()


@router.get("/robots")
async def robots(
    url: str = Query(..., description="Domain or URL to check robots.txt for"),
    test_path: str = Query("", description="Optional path to test against robots rules"),
):
    try:
        result = await check_robots(url, test_path)
        return JSONResponse(result)
    except httpx.TimeoutException:
        return JSONResponse({"error": "timeout", "message": "Request timed out after 10 seconds."}, status_code=408)
    except httpx.RequestError as exc:
        return JSONResponse({"error": "request_failed", "message": f"Could not connect: {type(exc).__name__}. Check the URL and try again."}, status_code=400)
    except ValueError as exc:
        return JSONResponse({"error": "invalid_url", "message": str(exc)}, status_code=400)

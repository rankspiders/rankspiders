import os
from urllib.parse import urlparse

import httpx

SERPER_ENDPOINT = "https://google.serper.dev/search"


def _api_key() -> str:
    key = os.environ.get("SERPER_API_KEY", "")
    if not key:
        raise ValueError("SERPER_API_KEY is not set in environment variables.")
    return key


def _bare_domain(url: str) -> str:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    netloc = urlparse(url).netloc or ""
    # Strip www. and any trailing slashes
    return netloc.replace("www.", "").lower().strip("/")


async def check_rank(
    keyword: str,
    target_url: str,
    country: str = "us",
    language: str = "en",
    device: str = "desktop",
) -> dict:
    """
    Query Serper.dev for one keyword and return position data for target_url.

    Returns:
        {
            "position": int | None,
            "ranked_url": str | None,
            "serp_features": list[str],
            "organic_count": int,        # how many results were checked
            "error": str | None,         # set if the API call itself failed
        }
    """
    target_domain = _bare_domain(target_url)

    headers = {"X-API-KEY": _api_key(), "Content-Type": "application/json"}
    payload = {
        "q": keyword,
        "gl": country,
        "hl": language,
        "num": 10,
        "device": device,
    }

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            resp = await client.post(SERPER_ENDPOINT, headers=headers, json=payload)

        # Serper returns 400/401/429 with a JSON body describing the error
        if not resp.is_success:
            try:
                err_body = resp.json()
                msg = err_body.get("message") or err_body.get("error") or f"HTTP {resp.status_code}"
            except Exception:
                msg = f"HTTP {resp.status_code}"
            return {
                "position": None,
                "ranked_url": None,
                "serp_features": [],
                "organic_count": 0,
                "error": f"Serper API error: {msg}",
            }

        data = resp.json()

    except httpx.TimeoutException:
        return {"position": None, "ranked_url": None, "serp_features": [], "organic_count": 0, "error": "Request timed out"}
    except Exception as exc:
        return {"position": None, "ranked_url": None, "serp_features": [], "organic_count": 0, "error": str(exc)}

    serp_features: list[str] = []
    if data.get("answerBox"):
        serp_features.append("Answer Box")
    if data.get("knowledgeGraph"):
        serp_features.append("Knowledge Graph")
    if data.get("peopleAlsoAsk"):
        serp_features.append("People Also Ask")
    if data.get("relatedSearches"):
        serp_features.append("Related Searches")
    if data.get("topStories"):
        serp_features.append("Top Stories")
    if data.get("images"):
        serp_features.append("Images")

    organic = data.get("organic", [])
    organic_count = len(organic)

    for item in organic:
        result_domain = _bare_domain(item.get("link", ""))
        # Exact match OR target is a subdomain of result (e.g. blog.example.com vs example.com)
        if result_domain == target_domain or result_domain.endswith("." + target_domain):
            return {
                "position": item.get("position"),
                "ranked_url": item.get("link"),
                "serp_features": serp_features,
                "organic_count": organic_count,
                "error": None,
            }

    return {
        "position": None,
        "ranked_url": None,
        "serp_features": serp_features,
        "organic_count": organic_count,
        "error": None,
    }


async def suggest_competitors(target_url: str, country: str = "us") -> list[str]:
    target_domain = _bare_domain(target_url)
    brand = target_domain.split(".")[0]
    tld_parts = " ".join(target_domain.split(".")[1:])
    query = f"{brand} {tld_parts} alternatives competitors"

    headers = {"X-API-KEY": _api_key(), "Content-Type": "application/json"}
    payload = {"q": query, "gl": country, "num": 20}

    async with httpx.AsyncClient(timeout=20.0) as client:
        resp = await client.post(SERPER_ENDPOINT, headers=headers, json=payload)
        resp.raise_for_status()
        data = resp.json()

    seen: set[str] = set()
    competitors: list[str] = []
    for item in data.get("organic", []):
        domain = _bare_domain(item.get("link", ""))
        if domain and domain != target_domain and domain not in seen:
            seen.add(domain)
            competitors.append(domain)
        if len(competitors) >= 5:
            break

    return competitors

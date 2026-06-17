import csv
import io
import ipaddress
import json
import socket
from datetime import date, datetime, timezone
from typing import Annotated, Literal
from urllib.parse import urlparse

from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel, Field
from sse_starlette.sse import EventSourceResponse

from db import supabase
from tools.rank_tracker.scraper import check_rank, suggest_competitors
from tools.keyword_density.scraper import check_keywords

router = APIRouter()

_PRIVATE_NETS = [
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("169.254.0.0/16"),
    ipaddress.ip_network("::1/128"),
    ipaddress.ip_network("fc00::/7"),
]


def _is_safe_url(raw: str) -> bool:
    """Return True only if the URL resolves to a public, non-private IP."""
    if not raw.startswith(("http://", "https://")):
        raw = "https://" + raw
    try:
        hostname = urlparse(raw).hostname or ""
        if not hostname or hostname.lower() in ("localhost", "0.0.0.0"):
            return False
        ip = ipaddress.ip_address(socket.gethostbyname(hostname))
        return not any(ip in net for net in _PRIVATE_NETS)
    except Exception:
        return False


# ── Request models ────────────────────────────────────────────────────────────

class CreateProjectRequest(BaseModel):
    website_url: str
    browser: Literal["desktop", "mobile"] = "desktop"
    country: Annotated[str, Field(min_length=2, max_length=5, pattern=r"^[a-z]{2}$")] = "us"
    country_name: Annotated[str, Field(max_length=60)] = "United States"
    language: Annotated[str, Field(min_length=2, max_length=8, pattern=r"^[a-z]{2}(-[A-Z]{2})?$")] = "en"


class AddKeywordsRequest(BaseModel):
    keywords: list[str]
    brand_name: str = ""


class AddCompetitorsRequest(BaseModel):
    competitors: list[str]


# ── Helper ────────────────────────────────────────────────────────────────────

def _get_project_or_404(project_id: str) -> dict:
    res = supabase.table("rank_projects").select("*").eq("id", project_id).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Project not found")
    return res.data[0]


def _visibility_weight(position: int | None) -> float:
    if position is None:
        return 0.0
    if position <= 3:
        return 1.0
    if position <= 10:
        return 0.6
    if position <= 30:
        return 0.3
    if position <= 100:
        return 0.1
    return 0.0


def _compute_visibility_report(keywords: list[dict]) -> dict:
    total = len(keywords)
    breakdown = {"top3": 0, "top10": 0, "top30": 0, "top100": 0, "not_ranked": 0, "total": total}
    weight_sum = 0.0
    for kw in keywords:
        pos = kw["position"]
        weight_sum += _visibility_weight(pos)
        if pos is None:
            breakdown["not_ranked"] += 1
        elif pos <= 3:
            breakdown["top3"] += 1
        elif pos <= 10:
            breakdown["top10"] += 1
        elif pos <= 30:
            breakdown["top30"] += 1
        else:
            breakdown["top100"] += 1
    score = round((weight_sum / total) * 100) if total else 0
    return {"score": score, "breakdown": breakdown}


def _build_chart_data(history_rows: list[dict]) -> list[dict]:
    by_date: dict[str, list[int]] = {}
    for row in history_rows:
        if row["position"] is None:
            continue
        d = str(row["check_date"])
        by_date.setdefault(d, []).append(row["position"])
    result = []
    for d in sorted(by_date.keys()):
        positions = by_date[d]
        result.append({"date": d, "avg_position": round(sum(positions) / len(positions), 1)})
    return result


# ── 1. Create project ─────────────────────────────────────────────────────────

@router.post("/projects")
async def create_project(body: CreateProjectRequest):
    url = body.website_url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    data = {
        "website_url": url,
        "browser": body.browser,
        "country": body.country,
        "country_name": body.country_name,
        "language": body.language,
        "status": "pending",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    res = supabase.table("rank_projects").insert(data).execute()
    if not res.data:
        raise HTTPException(status_code=500, detail="Failed to create project")
    return {"project_id": res.data[0]["id"]}


# ── 2. Suggest competitors ────────────────────────────────────────────────────

@router.get("/competitors/suggest")
async def suggest_competitors_endpoint(
    url: str = Query(...),
    country: str = Query("us"),
):
    try:
        competitors = await suggest_competitors(url, country)
        return JSONResponse({"competitors": competitors})
    except ValueError as exc:
        return JSONResponse({"error": str(exc)}, status_code=400)
    except Exception as exc:
        return JSONResponse({"error": "fetch_failed", "message": str(exc)}, status_code=500)


# ── 2b. Suggest keywords (content-based, derived from the site itself) ───────

_SINGLE_LIMIT = 15
_PHRASE_LIMIT = {"bigram": 10, "trigram": 8}


def _build_keyword_suggestions(analysis: dict) -> dict:
    singles = []
    for kw in analysis.get("top_keywords", []):
        score = kw["count"] + kw["in_title"] * 5 + kw["in_h1"] * 3 + kw["in_h2"] * 1
        singles.append({
            "phrase": kw["keyword"],
            "type": "single",
            "count": kw["count"],
            "density": kw["density"],
            "in_title": kw["in_title"],
            "in_h1": kw["in_h1"],
            "in_h2": kw["in_h2"],
            "score": score,
        })
    singles.sort(key=lambda s: s["score"], reverse=True)

    # Bigrams/trigrams carry no placement flags from check_keywords (it only
    # computes those for single words), so we rank them by raw count/density
    # rather than reaching into keyword_density's internals to add them.
    phrases: dict[str, list[dict]] = {}
    for ptype, key in (("bigram", "top_bigrams"), ("trigram", "top_trigrams")):
        items = []
        for p in analysis.get(key, []):
            items.append({
                "phrase": p["phrase"],
                "type": ptype,
                "count": p["count"],
                "density": p["density"],
                "score": p["count"],
            })
        items.sort(key=lambda s: s["score"], reverse=True)
        phrases[ptype] = items[:_PHRASE_LIMIT[ptype]]

    return {
        "single": singles[:_SINGLE_LIMIT],
        "bigram": phrases["bigram"],
        "trigram": phrases["trigram"],
    }


@router.get("/projects/{project_id}/keywords/suggest")
async def suggest_keywords_endpoint(project_id: str):
    project = _get_project_or_404(project_id)
    try:
        analysis = await check_keywords(project["website_url"])
    except ValueError as exc:
        return JSONResponse({"error": str(exc)}, status_code=400)
    except Exception as exc:
        return JSONResponse({"error": "fetch_failed", "message": str(exc)}, status_code=500)

    if "error" in analysis:
        return JSONResponse({"error": "analysis_failed", "message": analysis["error"]}, status_code=400)

    return JSONResponse({
        "source_url": analysis["url"],
        "suggestions": _build_keyword_suggestions(analysis),
    })


# ── 3. Save competitors ───────────────────────────────────────────────────────

@router.post("/projects/{project_id}/competitors")
async def save_competitors(project_id: str, body: AddCompetitorsRequest):
    _get_project_or_404(project_id)
    safe, rejected = [], []
    for c in body.competitors:
        url = c.strip()
        if not url:
            continue
        if _is_safe_url(url):
            safe.append({"project_id": project_id, "url": url, "created_at": datetime.now(timezone.utc).isoformat()})
        else:
            rejected.append(url)
    if safe:
        supabase.table("rank_competitors").insert(safe).execute()
    return {"saved": len(safe), "rejected": rejected}


# ── 4. Add keywords ───────────────────────────────────────────────────────────

@router.post("/projects/{project_id}/keywords")
async def add_keywords(project_id: str, body: AddKeywordsRequest):
    _get_project_or_404(project_id)
    brand_lower = body.brand_name.lower().strip()
    filtered = [
        kw.strip() for kw in body.keywords
        if kw.strip() and not (brand_lower and brand_lower in kw.lower())
    ]
    seen: set[str] = set()
    deduped = []
    for kw in filtered:
        if kw.lower() not in seen:
            seen.add(kw.lower())
            deduped.append(kw)
    rows = [
        {"project_id": project_id, "keyword": kw, "created_at": datetime.now(timezone.utc).isoformat()}
        for kw in deduped
    ]
    if rows:
        supabase.table("rank_keywords").insert(rows).execute()
    return {"saved": len(rows), "excluded_by_brand": len(body.keywords) - len(filtered)}


# ── 5. Get project with latest rankings ───────────────────────────────────────

@router.get("/projects/{project_id}")
async def get_project(project_id: str):
    project = _get_project_or_404(project_id)
    keywords_res = supabase.table("rank_keywords").select("*").eq("project_id", project_id).execute()
    competitors_res = supabase.table("rank_competitors").select("*").eq("project_id", project_id).execute()
    history_res = (
        supabase.table("rank_history")
        .select("*")
        .eq("project_id", project_id)
        .order("created_at", desc=True)
        .execute()
    )

    latest: dict[str, dict] = {}
    for row in (history_res.data or []):
        kid = row["keyword_id"]
        if kid not in latest:
            latest[kid] = row

    keywords_with_rank = []
    for kw in (keywords_res.data or []):
        h = latest.get(kw["id"])
        keywords_with_rank.append({
            **kw,
            "position": h["position"] if h else None,
            "ranked_url": h["ranked_url"] if h else None,
            "serp_features": h["serp_features"] if h else [],
            "check_date": h["check_date"] if h else None,
        })

    return JSONResponse({
        "project": project,
        "keywords": keywords_with_rank,
        "competitors": competitors_res.data or [],
        "chart_data": _build_chart_data(history_res.data or []),
        "report": _compute_visibility_report(keywords_with_rank),
    })


# ── 6. SSE streaming rank check ───────────────────────────────────────────────

@router.get("/projects/{project_id}/stream")
async def stream_rankings(project_id: str):
    project = _get_project_or_404(project_id)
    keywords_res = supabase.table("rank_keywords").select("*").eq("project_id", project_id).execute()
    keywords = keywords_res.data or []

    async def event_generator():
        supabase.table("rank_projects").update({"status": "running"}).eq("id", project_id).execute()
        total = len(keywords)

        for idx, kw in enumerate(keywords, start=1):
            # check_rank no longer throws — it returns an error field instead
            rank_data = await check_rank(
                keyword=kw["keyword"],
                target_url=project["website_url"],
                country=project["country"],
                language=project["language"],
                device=project["browser"],
            )

            # Only persist to history if the API call didn't error
            if rank_data["error"] is None:
                supabase.table("rank_history").insert({
                    "project_id": project_id,
                    "keyword_id": kw["id"],
                    "keyword": kw["keyword"],
                    "position": rank_data["position"],
                    "ranked_url": rank_data["ranked_url"],
                    "check_date": date.today().isoformat(),
                    "serp_features": rank_data["serp_features"],
                    "created_at": datetime.now(timezone.utc).isoformat(),
                }).execute()

            yield {
                "event": "rank_result",
                "data": json.dumps({
                    "keyword_id": kw["id"],
                    "keyword": kw["keyword"],
                    "position": rank_data["position"],
                    "ranked_url": rank_data["ranked_url"],
                    "serp_features": rank_data["serp_features"],
                    "organic_count": rank_data.get("organic_count", 0),
                    "error": rank_data["error"],
                }),
            }
            yield {"event": "progress", "data": json.dumps({"checked": idx, "total": total})}

        supabase.table("rank_projects").update({"status": "done"}).eq("id", project_id).execute()
        yield {"event": "done", "data": "{}"}

    return EventSourceResponse(event_generator())


# ── 7. CSV export ─────────────────────────────────────────────────────────────

@router.get("/projects/{project_id}/export")
async def export_csv(project_id: str):
    project = _get_project_or_404(project_id)
    keywords_res = supabase.table("rank_keywords").select("*").eq("project_id", project_id).execute()
    history_res = (
        supabase.table("rank_history")
        .select("*")
        .eq("project_id", project_id)
        .order("created_at", desc=True)
        .execute()
    )

    latest: dict[str, dict] = {}
    for row in (history_res.data or []):
        kid = row["keyword_id"]
        if kid not in latest:
            latest[kid] = row

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Keyword", "Position", "Ranking URL", "SERP Features", "Check Date"])
    for kw in (keywords_res.data or []):
        h = latest.get(kw["id"])
        writer.writerow([
            kw["keyword"],
            h["position"] if h and h["position"] else "Not Ranked",
            h["ranked_url"] if h and h["ranked_url"] else "",
            ", ".join(h["serp_features"]) if h and h["serp_features"] else "",
            h["check_date"] if h else "",
        ])

    output.seek(0)
    domain = project["website_url"].replace("https://", "").replace("http://", "").rstrip("/")
    filename = f"rank-tracker-{domain}-{date.today().isoformat()}.csv"
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )

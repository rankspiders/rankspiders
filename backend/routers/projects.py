from fastapi import APIRouter, HTTPException
from db import supabase

router = APIRouter()


@router.get("/projects")
async def get_projects():
    try:
        response = supabase.table("projects").select("*").execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/projects/{slug}")
async def get_project_by_slug(slug: str):
    try:
        response = supabase.table("projects").select("*").eq("slug", slug).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Project not found")
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

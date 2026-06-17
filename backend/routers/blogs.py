from fastapi import APIRouter, HTTPException
from db import supabase

router = APIRouter()


@router.get("/blogs")
async def get_blogs():
    try:
        response = supabase.table("blogs").select("*").order("created_at", desc=True).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/blogs/{slug}")
async def get_blog_by_slug(slug: str):
    try:
        response = supabase.table("blogs").select("*").eq("slug", slug).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Blog not found")
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

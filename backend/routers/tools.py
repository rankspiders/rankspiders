from fastapi import APIRouter

from tools.seo_auditor.router import router as seo_auditor_router

router = APIRouter()

router.include_router(seo_auditor_router)

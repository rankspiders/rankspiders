from fastapi import APIRouter

from tools.seo_auditor.router import router as seo_auditor_router
from tools.speed_checker.router import router as speed_checker_router
from tools.keyword_density.router import router as keyword_density_router
from tools.robots_tester.router import router as robots_tester_router
from tools.sitemap_validator.router import router as sitemap_validator_router
from tools.meta_extractor.router import router as meta_extractor_router
from tools.rank_tracker.router import router as rank_tracker_router

router = APIRouter()

router.include_router(seo_auditor_router)
router.include_router(speed_checker_router)
router.include_router(keyword_density_router)
router.include_router(robots_tester_router)
router.include_router(sitemap_validator_router)
router.include_router(meta_extractor_router)
router.include_router(rank_tracker_router, prefix="/rank", tags=["rank_tracker"])

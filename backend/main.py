from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.blogs import router as blogs_router
from routers.leads import router as leads_router
from routers.projects import router as projects_router
from routers.tools import router as tools_router

app = FastAPI(title="Rank Spiders API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(blogs_router, prefix="/api")
app.include_router(projects_router, prefix="/api")
app.include_router(leads_router, prefix="/api")
app.include_router(tools_router, prefix="/api/tools", tags=["Tools"])


@app.get("/")
def read_root():
    return {"message": "Rank Spiders API is running"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

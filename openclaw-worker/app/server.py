from fastapi import FastAPI
from pydantic import BaseModel
from .security import require_secret
from .runner import run_job

app = FastAPI(title="OpenClaw Worker")

class Job(BaseModel):
    owner: str
    repo: str
    base_branch: str = "main"
    task_title: str
    task_description: str | None = None
    constraints: dict = {}

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/v1/jobs/run", dependencies=[require_secret])
def run(job: Job):
    result = run_job(job.model_dump())
    return result

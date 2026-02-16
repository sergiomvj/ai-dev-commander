import httpx
import logging
import json
from app.config import settings

logger = logging.getLogger("agent-runtime.worker-client")

class WorkerClient:
    def __init__(self, base_url: str = "http://openclaw_worker:8080"):
        self.base_url = base_url
        self.headers = {
            "X-Worker-Secret": settings.WORKER_SHARED_SECRET
        }

    async def submit_job(self, job_data: dict) -> dict:
        """
        Submit a job to the remote worker.
        job_data: { owner, repo, base_branch, task_title, task_description, constraints }
        """
        url = f"{self.base_url}/v1/jobs/run"
        timeout = httpx.Timeout(settings.WORKER_REQUEST_TIMEOUT_SECONDS)
        
        async with httpx.AsyncClient(timeout=timeout) as client:
            try:
                logger.info(f"🚀 Dispatching job to {url}: {job_data.get('task_title')}")
                resp = await client.post(url, headers=self.headers, json=job_data)
                resp.raise_for_status()
                return resp.json()
            except httpx.HTTPError as e:
                logger.error(f"❌ Worker request failed: {e}")
                if hasattr(e, 'response') and e.response:
                     logger.error(f"Worker response: {e.response.text}")
                raise

worker_client = WorkerClient() # Default instance

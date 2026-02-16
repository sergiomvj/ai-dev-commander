import logging
import asyncio
from app.queue import queue_manager

logger = logging.getLogger("agent-runtime.agents")

class BaseAgent:
    def __init__(self, agent_id: str, name: str):
        self.agent_id = agent_id
        self.name = name

    async def process_task(self, task: dict):
        raise NotImplementedError

class CoderAgent(BaseAgent):
    async def process_task(self, task: dict):
        """Execute coding task via remote Worker."""
        from app.worker_client import worker_client
        
        logger.info(f"[{self.name}] analyzing requirements...")
        queue_manager.publish_event("THINK", f"[{self.name}] Analyzing requirements for: {task.get('title')}...")
        await asyncio.sleep(1)
        
        # Extract payload from task
        payload = task.get("payload", {})
        repo_info = payload.get("repository", {}) # Expected format
        
        # Prepare job for worker
        job = {
            "owner": repo_info.get("owner", settings.GITHUB_OWNER),
            "repo": repo_info.get("name", "test-repo"), # Default for MVP
            "base_branch": settings.DEFAULT_BASE_BRANCH,
            "task_title": task.get("title"),
            "task_description": task.get("description"),
            "constraints": {}
        }
        
        logger.info(f"[{self.name}] dispatching to worker...")
        queue_manager.publish_event("ACTION", f"[{self.name}] Dispatching task to OpenClaw Worker...", metadata={"job": job})
        
        try:
            # Call Worker
            result = await worker_client.submit_job(job)
            
            logger.info(f"[{self.name}] worker finished.")
            queue_manager.publish_event("SUCCESS", f"[{self.name}] Worker completed task.", metadata={"result": result})
            
            return {"status": "success", "worker_result": result}
            
        except Exception as e:
            logger.error(f"Worker failed: {e}")
            queue_manager.publish_event("ERROR", f"[{self.name}] Worker failed: {str(e)}")
            raise

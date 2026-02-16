import redis
import json
import logging
from app.config import settings

logger = logging.getLogger("agent-runtime.queue")

class QueueManager:
    def __init__(self):
        self.redis = redis.Redis(
            host=settings.REDIS_HOST,
            port=settings.REDIS_PORT,
            decode_responses=True
        )

    def publish_event(self, kind: str, message: str, metadata: dict = None):
        """Publish an event to the dashboard stream."""
        payload = {
            "kind": kind,
            "message": message,
            "metadata": metadata or {}
        }
        try:
            self.redis.publish("agent:events", json.dumps(payload))
            logger.debug(f"Published event: {kind}")
        except Exception as e:
            logger.error(f"Failed to publish event: {e}")

    def push_task(self, task_data: dict):
        """Push a task to the processing queue."""
        try:
            self.redis.rpush("tasks:queue", json.dumps(task_data))
        except Exception as e:
            logger.error(f"Failed to push task: {e}")

    def pop_task(self):
        """Blocking pop from task queue."""
        try:
            # blpop returns (key, value) tuple
            task = self.redis.blpop("tasks:queue", timeout=1)
            if task:
                return json.loads(task[1])
            return None
        except Exception as e:
            logger.error(f"Failed to pop task: {e}")
            return None

queue_manager = QueueManager()

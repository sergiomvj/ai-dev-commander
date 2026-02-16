import asyncio
import json
import redis.asyncio as redis
import os
import logging

# Configuration
REDIS_URL = os.getenv("DCC_REDIS_URL", "redis://localhost:6379/0")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("verifier")

async def verify_flow():
    logger.info(f"🔌 Connecting to Redis at {REDIS_URL}...")
    try:
        r = redis.from_url(REDIS_URL, decode_responses=True)
        await r.ping()
        logger.info("✅ Redis connected.")
    except Exception as e:
        logger.error(f"❌ Redis connection failed: {e}")
        return

    # 1. Listen for events
    pubsub = r.pubsub()
    await pubsub.subscribe("agent:events")
    logger.info("👂 Subscribed to agent:events")

    # 2. Push a test task
    task_id = "verify-task-1"
    task_payload = {
        "id": task_id,
        "title": "Verify System Stack",
        "description": "This is a test task to verify the Agent->Worker flow.",
        "agent": "@manager", # Send to Manager to test planning
        "payload": {
            "repository": {"owner": "test", "name": "test-repo"}
        }
    }
    
    logger.info(f"🚀 Pushing task: {json.dumps(task_payload)}")
    await r.rpush("tasks:queue", json.dumps(task_payload))
    
    # 3. Wait for response
    logger.info("⏳ Waiting for events...")
    
    try:
        async with asyncio.timeout(30): # 30s timeout
            async for message in pubsub.listen():
                if message["type"] == "message":
                    data = json.loads(message["data"])
                    kind = data.get("kind")
                    msg = data.get("message")
                    logger.info(f"📨 Event Received: [{kind}] {msg}")
                    
                    if kind == "SUCCESS" and "Worker completed task" in msg:
                        logger.info("✅✅ E2E FLOW VERIFIED: Worker completed the task.")
                        break
                    
                    if kind == "ERROR":
                        logger.error("❌ check failed: Received ERROR event.")
                        break
    except asyncio.TimeoutError:
        logger.error("❌ Timeout waiting for completion.")
    finally:
        await r.close()

if __name__ == "__main__":
    asyncio.run(verify_flow())

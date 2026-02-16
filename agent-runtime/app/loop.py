import asyncio
import logging
import json
from app.queue import queue_manager
from app.agents.coder import CoderAgent
from app.agents.manager import ManagerAgent
from app.config import settings

logger = logging.getLogger("agent-runtime.loop")

# Mock Agents for MVP
agents = {
    "@coder": CoderAgent(agent_id="agent-coder-1", name="@coder"),
    "@manager": ManagerAgent(agent_id="agent-manager-1", name="@manager"),
    # "@qa": QAAgent(),
}

async def run_agent_loop():
    """Main loop for processing tasks."""
    logger.info("🔄 Agent Loop Started. Waiting for tasks...")
    
    while True:
        # 1. Poll for tasks (blocking pop)
        task_data = queue_manager.pop_task()
        
        if task_data:
            logger.info(f"📨 Received task: {task_data.get('id')}")
            
            # 2. Identify target agent
            target_agent_name = task_data.get("agent", "@manager")
            agent = agents.get(target_agent_name)
            
            if not agent:
                logger.error(f"❌ Agent not found: {target_agent_name}")
                queue_manager.publish_event("ERROR", f"Agent {target_agent_name} not found.")
                continue

            # 3. Execute task
            try:
                queue_manager.publish_event("START", f"Agent {agent.name} starting task: {task_data.get('title')}", metadata={"task_id": task_data.get("id")})
                
                # Simulate processing
                await agent.process_task(task_data)
                
                queue_manager.publish_event("SUCCESS", f"Task {task_data.get('id')} completed successfully.", metadata={"task_id": task_data.get("id")})
                
            except Exception as e:
                logger.error(f"💥 Task execution failed: {e}")
                queue_manager.publish_event("ERROR", f"Task failed: {str(e)}", metadata={"task_id": task_data.get("id")})
        
        # Prevent tight loop in case of errors in pop_task
        await asyncio.sleep(0.1)

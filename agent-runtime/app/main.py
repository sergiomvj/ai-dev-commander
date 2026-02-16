import asyncio
import logging
from app.config import settings
from app.loop import run_agent_loop

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("agent-runtime")

async def main():
    logger.info("🤖 AI Dev Commander - Agent Runtime Starting...")
    logger.info(f"Environment: {settings.ENV}")
    
    # Start the processing loop
    loop_task = asyncio.create_task(run_agent_loop())
    
    logger.info("🚀 System ready. Waiting for tasks...")
    
    try:
        await loop_task
    except asyncio.CancelledError:
        logger.info("🛑 Loop cancelled")

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("🛑 Shutting down...")

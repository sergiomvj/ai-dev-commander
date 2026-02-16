import os
import logging
from app.memory.qdrant import qdrant_client

logger = logging.getLogger("agent-runtime.ingest")

def ingest_repo(repo_path: str):
    """
    Walks through a repo, chunks code, and stores in Qdrant.
    """
    logger.info(f"Ingesting repo at: {repo_path}")
    
    total_files = 0
    for root, _, files in os.walk(repo_path):
        if ".git" in root or "node_modules" in root:
            continue
            
        for file in files:
            if file.endswith(('.py', '.js', '.ts', '.tsx', '.md', '.java', '.go')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        
                        # MVP: Store whole file if small, or chunk (TODO)
                        # qdrant_client.store_text(content, {"path": file_path})
                        total_files += 1
                except Exception as e:
                    logger.warning(f"Failed to read {file_path}: {e}")
                    
    logger.info(f"Ingestion complete. Processed {total_files} files.")

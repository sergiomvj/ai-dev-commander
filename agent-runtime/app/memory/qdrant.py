from qdrant_client import QdrantClient
from qdrant_client.http import models
from app.config import settings
import logging

logger = logging.getLogger("agent-runtime.memory.qdrant")

class QdrantMemory:
    def __init__(self):
        self.client = QdrantClient(url=settings.DCC_QDRANT_URL)
        self.collection_name = "codebase"
        self._ensure_collection()

    def _ensure_collection(self):
        try:
            self.client.get_collection(self.collection_name)
        except Exception:
            logger.info(f"Creating Qdrant collection: {self.collection_name}")
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE), # OpenAI Ada-002 size
            )

    def store_text(self, text: str, meta: dict):
        # TODO: Real embedding generation via OpenAI/Ollama
        # For MVP, we mock the embedding or use a placeholder if no API key
        if not settings.OPENAI_API_KEY:
            logger.warning("No OpenAI API Key. Skipping embedding generation.")
            return

        try:
             # embedding = openai.Embedding.create(input=text, model="text-embedding-ada-002")['data'][0]['embedding']
             pass 
        except Exception as e:
            logger.error(f"Failed to generate embedding: {e}")

    def search(self, query: str, limit: int = 5):
        # Placeholder
        return []

qdrant_client = QdrantMemory()

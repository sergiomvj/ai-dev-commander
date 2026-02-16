from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams
import hashlib

def qdrant(cfg_url: str) -> QdrantClient:
    return QdrantClient(url=cfg_url)

def ensure_collection(client: QdrantClient, name: str, dim: int = 1536):
    # Placeholder dim; você ajusta quando plugar embeddings reais
    if name not in [c.name for c in client.get_collections().collections]:
        client.create_collection(
            collection_name=name,
            vectors_config=VectorParams(size=dim, distance=Distance.COSINE),
        )

def project_collection(owner: str, repo: str) -> str:
    safe = f"{owner}-{repo}".replace("/", "-")
    return f"proj_{safe}".lower()

def stable_id(text: str) -> int:
    h = hashlib.sha256(text.encode("utf-8")).hexdigest()
    return int(h[:12], 16)

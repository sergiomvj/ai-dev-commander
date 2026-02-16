import os
from fastapi import Header, HTTPException

def require_secret(x_worker_secret: str | None = Header(default=None)):
    expected = os.getenv("WORKER_SHARED_SECRET", "")
    if not expected or x_worker_secret != expected:
        raise HTTPException(status_code=401, detail="Unauthorized")

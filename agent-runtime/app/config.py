from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ENV: str = "development"
    
    # Database
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "dev_commander"
    POSTGRES_HOST: str = "postgres"
    
    # Redis
    REDIS_HOST: str = "redis"
    REDIS_PORT: int = 6379
    
    # Qdrant
    QDRANT_HOST: str = "qdrant"
    QDRANT_PORT: int = 6333
    
    # External APIs
    OPENAI_API_KEY: str = ""
    GITHUB_TOKEN: str = ""

    class Config:
        env_file = ".env"

settings = Settings()

FROM python:3.11-slim

WORKDIR /app

# Install system dependencies (git is essential for repo ops)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Set python path
ENV PYTHONPATH=/app

CMD ["python", "app/main.py"]

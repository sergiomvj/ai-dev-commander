FROM python:3.11-slim

RUN apt-get update && apt-get install -y git curl ca-certificates nodejs npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app
ENV PYTHONUNBUFFERED=1
EXPOSE 8080

CMD ["uvicorn","app.server:app","--host","0.0.0.0","--port","8080"]

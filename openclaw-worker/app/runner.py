import os
from git import Repo

def run_job(job: dict) -> dict:
    """
    job = {
      "owner": "...",
      "repo": "...",
      "base_branch": "main",
      "task_title": "...",
      "task_description": "...",
      "constraints": {...}
    }
    """
    token = os.environ["GITHUB_TOKEN"]
    owner = job["owner"]
    repo = job["repo"]
    base_branch = job.get("base_branch","main")
    workdir = os.getenv("WORKDIR","/data/workdir")
    path = f"{workdir}/{owner}/{repo}"

    # clone/pull
    if not os.path.exists(path):
        os.makedirs(f"{workdir}/{owner}", exist_ok=True)
        url = f"https://{token}@github.com/{owner}/{repo}.git"
        Repo.clone_from(url, path, branch=base_branch)
    r = Repo(path)
    r.git.checkout(base_branch)
    r.git.pull()

    # TODO: aqui você chama OpenClaw de verdade e gera patch/diff
    # MVP placeholder: cria arquivo marker
    marker = os.path.join(path, "OPENCLAW_WORKER_NOTE.md")
    with open(marker, "a", encoding="utf-8") as f:
        f.write(f"- OpenClaw worker executed: {job.get('task_title','')}\n")

    # generate diff
    diff = r.git.diff()

    return {
        "summary": "Worker executed placeholder change (plug OpenClaw here).",
        "files_changed": ["OPENCLAW_WORKER_NOTE.md"],
        "patch": diff,
        "risk_level": "low"
    }

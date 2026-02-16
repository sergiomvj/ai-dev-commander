import os, subprocess
from git import Repo

def repo_path(workspace_dir: str, owner: str, repo: str) -> str:
    return os.path.join(workspace_dir, owner, repo)

def ensure_clone(workspace_dir: str, owner: str, repo: str, token: str, base_branch: str) -> str:
    path = repo_path(workspace_dir, owner, repo)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if not os.path.exists(path):
        url = f"https://{token}@github.com/{owner}/{repo}.git"
        Repo.clone_from(url, path, branch=base_branch)
    return path

def run(cmd: list[str], cwd: str) -> tuple[int, str]:
    p = subprocess.run(cmd, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    return p.returncode, p.stdout

def create_branch(cwd: str, name: str, base_branch: str):
    r = Repo(cwd)
    r.git.checkout(base_branch)
    r.git.pull()
    r.git.checkout("-B", name)

def commit_all(cwd: str, message: str):
    r = Repo(cwd)
    r.git.add(A=True)
    if r.is_dirty():
        r.index.commit(message)
        return True
    return False

def push_branch(cwd: str, branch: str):
    r = Repo(cwd)
    r.git.push("--set-upstream", "origin", branch)

from .repo_ops import run

def detect_pm(cwd: str) -> str:
    # simplificado: ajuste depois
    # pnpm-lock.yaml, yarn.lock, package-lock.json
    import os
    if os.path.exists(f"{cwd}/pnpm-lock.yaml"):
        return "pnpm"
    if os.path.exists(f"{cwd}/yarn.lock"):
        return "yarn"
    return "npm"

def install(cwd: str):
    pm = detect_pm(cwd)
    if pm == "pnpm":
        return run(["pnpm", "install", "--frozen-lockfile"], cwd)
    if pm == "yarn":
        return run(["yarn", "install", "--frozen-lockfile"], cwd)
    return run(["npm", "ci"], cwd)

def lint(cwd: str):
    return run(["npm", "run", "lint"], cwd)

def test(cwd: str):
    return run(["npm", "test", "--silent"], cwd)

def build(cwd: str):
    return run(["npm", "run", "build"], cwd)

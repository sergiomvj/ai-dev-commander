
import requests
import os

URL = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzI5MDcwY2I3NzgzNzRlMzJiYmJiOTkxZWVjZTIxYjZmEgsSBxDPifWm3QoYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTk0NjU3MjA5NzY1MTA2NjY4Nw&filename=&opi=89354086"
OUTPUT = "c:/Projetos/AI-Dev-Commander/dashboard/public/stitch-screens/Project Portfolio Management.html"

try:
    print(f"Downloading to {OUTPUT}...")
    response = requests.get(URL)
    response.raise_for_status()
    with open(OUTPUT, "wb") as f:
        f.write(response.content)
    print("Download successful.")
except Exception as e:
    print(f"Error: {e}")

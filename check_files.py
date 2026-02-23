
import os

DIR = "c:/Projetos/AI-Dev-Commander/dashboard/public/stitch-screens"
try:
    files = os.listdir(DIR)
    print(f"Files in {DIR}:")
    for f in files:
        print(f)
except Exception as e:
    print(f"Error: {e}")

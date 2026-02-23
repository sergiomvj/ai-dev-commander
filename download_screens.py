
import json
import os
import requests
import re

# File path from previous step
JSON_FILE_PATH = r"C:/Users/OEM/.gemini/antigravity/brain/235d13a2-87e4-4261-8407-7936580b719c/.system_generated/steps/12/output.txt"
OUTPUT_DIR = r"c:/Projetos/AI-Dev-Commander/dashboard/public/stitch-screens"

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

def sanitize_filename(name):
    return re.sub(r'[<>:"/\\|?*]', '_', name)

def download_screens():
    try:
        with open(JSON_FILE_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        screens = data.get('screens', [])
        print(f"Found {len(screens)} screens to download.")
        
        for screen in screens:
            title = screen.get('title', 'Untitled')
            html_code = screen.get('htmlCode', {})
            download_url = html_code.get('downloadUrl')
            
            if download_url:
                filename = sanitize_filename(title) + ".html"
                file_path = os.path.join(OUTPUT_DIR, filename)
                
                print(f"Downloading: {title} -> {filename}")
                
                try:
                    response = requests.get(download_url)
                    response.raise_for_status()
                    with open(file_path, 'wb') as out_file:
                        out_file.write(response.content)
                    print(f"Saved: {file_path}")
                except Exception as e:
                    print(f"Failed to download {title}: {e}")
            else:
                print(f"Skipping {title}: No download URL found.")
                
    except Exception as e:
        print(f"Error processing JSON file: {e}")

if __name__ == "__main__":
    download_screens()

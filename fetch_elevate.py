import urllib.request
import re

url = "https://elevate-enhance-your-attitude.vercel.app/assets/index-DHPbEMMA.js"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        js = response.read().decode('utf-8')
        # Find all strings inside quotes that have more than 10 characters
        strings = re.findall(r'"([^"\\]{10,})"', js)
        # Filter out likely code/css strings
        filtered = [s for s in strings if ' ' in s and not s.startswith('<') and '{' not in s and '/' not in s]
        print("--- JS STRINGS ---")
        for s in list(set(filtered))[:20]:
            print(s)
            
    # Also fetch HTML
    req_html = urllib.request.Request("https://elevate-enhance-your-attitude.vercel.app/", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req_html) as response:
        html = response.read().decode('utf-8')
        html_strings = re.findall(r'>([^<]{10,})<', html)
        print("--- HTML STRINGS ---")
        for s in html_strings:
            print(s.strip())
except Exception as e:
    print(e)

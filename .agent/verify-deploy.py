#!/usr/bin/env python3
"""
Poll Vercel deployment status after a git push.
Respectful polling: initial wait 90s, then every 45s, max 10 minutes.
"""
import json, os, sys, time, urllib.request, urllib.error

# Load project settings from progress.json
PROJECT = "/root/projects/drs-website"
PRG = os.path.join(PROJECT, ".agent", "progress.json")

_TOKEN = None
for env_path in [os.path.expanduser("~/.hermes/.env"), "/root/.hermes/.env"]:
    if os.path.isfile(env_path):
        try:
            with open(env_path) as f:
                for line in f:
                    if line.startswith("VERCEL_TOKEN="):
                        _TOKEN = line.split("=", 1)[1].strip()
                        break
        except Exception:
            pass
    if _TOKEN:
        break

TOKEN = _TOKEN or os.environ.get("VERCEL_TOKEN")
PROJECT_ID = "prj_yArVAFQ6TYNDHJ2C2Y6QUFzc7OhG"
TEAM_ID = "team_qnXasLsdOXvgG6Q9ZzwYqtbR"

_SITE_URL = None
if os.path.isfile(PRG):
    try:
        with open(PRG) as f:
            _SITE_URL = json.load(f).get("site_url")
    except Exception:
        pass

SITE_URL = _SITE_URL or os.environ.get("SITE_URL", "https://drs-website-three.vercel.app")

if not TOKEN:
    print("[FATAL] VERCEL_TOKEN not found in ~/.hermes/.env or environment", file=sys.stderr)
    sys.exit(1)

def api(path):
    url = f"https://api.vercel.com{path}"
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json"
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"[HTTP {e.code}] {body}", file=sys.stderr)
        return None
    except Exception as e:
        print(f"[ERROR] {e}", file=sys.stderr)
        return None

def get_latest_deployment():
    data = api(f"/v6/deployments?projectId={PROJECT_ID}&teamId={TEAM_ID}&limit=1")
    if not data or not data.get("deployments"):
        return None
    return data["deployments"][0]

def poll_deployment(deploy_id):
    for attempt in range(1, 15):  # ~10 minutes total
        data = api(f"/v13/deployments/{deploy_id}?teamId={TEAM_ID}")
        if not data:
            print(f"  Poll {attempt}: API error, retrying...")
            time.sleep(45)
            continue
        state = data.get("readyState", "UNKNOWN")
        print(f"  Poll {attempt}: state={state}")
        if state == "READY":
            return True, data
        if state in ("ERROR", "CANCELED"):
            return False, data
        time.sleep(45)
    return False, None

def check_live_site():
    try:
        req = urllib.request.Request(SITE_URL, headers={"User-Agent": "DRS-Agent/1.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status == 200
    except Exception as e:
        print(f"[WARN] Live site check failed: {e}", file=sys.stderr)
        return False

def main():
    if not TOKEN:
        bail("VERCEL_TOKEN not set in environment")

    print(f"[1] Initial grace period (90s) for Vercel to start building...")
    time.sleep(90)

    print(f"[2] Looking up latest deployment for project {PROJECT_ID}...")
    deploy = get_latest_deployment()
    if not deploy:
        bail("Could not fetch latest deployment from Vercel API")
    deploy_id = deploy["uid"]
    url = deploy.get("url", SITE_URL)
    print(f"    Latest deploy: {deploy_id} ({url})")

    print(f"[3] Polling deployment status...")
    success, info = poll_deployment(deploy_id)
    if success:
        print(f"[4] Deployment READY. Checking live site...")
        if check_live_site():
            print(f"[5] Live site responding (HTTP 200). Verification passed.")
            sys.exit(0)
        else:
            print(f"[WARN] Deployment ready but live site check failed. Manual review needed.")
            sys.exit(2)
    else:
        print(f"[FAIL] Deployment did not reach READY state.")
        if info:
            print(json.dumps(info, indent=2))
        sys.exit(1)

def bail(msg):
    print(f"[ERROR] {msg}", file=sys.stderr)
    sys.exit(1)

if __name__ == "__main__":
    main()

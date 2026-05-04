#!/usr/bin/env bash
# Wrapper used by Hermes cron to invoke the DRS daily-run pipeline.
set -euo pipefail

PROJECT="/root/projects/drs-website"
AGENT_DIR="$PROJECT/.agent"
LOG="$AGENT_DIR/cron-$(date +%Y%m%d-%H%M%S).log"

# Source Hermes env for VERCEL_TOKEN, ANTHROPIC_AUTH_TOKEN, etc.
if [[ -f "$HOME/.hermes/.env" ]]; then
    set -a; source "$HOME/.hermes/.env"; set +a
fi

# Ensure PATH has node, npm, python3, git, claude
export PATH="/root/.nvm/versions/node/v20.20.2/bin:$PATH:/usr/local/bin:/usr/bin:/bin"

# Move into project
cd "$PROJECT"

# Run the daily pipeline
bash "$AGENT_DIR/daily-run.sh" 2>> "$LOG"

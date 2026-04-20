#!/usr/bin/env bash
# Curator run — invoked by systemd timer (see agent/systemd/) or manually.
# Runs Claude Code headlessly with the curator prompt and logs the full transcript.
#
# Usage:
#   ./agent/run.sh                  # real run
#   DRY_RUN=1 ./agent/run.sh        # no git push / PR; edits local only
#
# Env required:
#   ANTHROPIC_API_KEY   — from https://console.anthropic.com
#   GITHUB_TOKEN        — gh CLI token (needs repo + PR perms)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# Load .env if present
if [[ -f "$REPO_ROOT/agent/.env" ]]; then
  set -a; source "$REPO_ROOT/agent/.env"; set +a
fi

: "${ANTHROPIC_API_KEY:?ANTHROPIC_API_KEY not set — copy agent/.env.example to agent/.env}"

STAMP="$(date +%Y-%m-%d_%H%M%S)"
LOG="$REPO_ROOT/agent/logs/curator-$STAMP.log"

echo "[$(date -Iseconds)] curator run starting — branch base: main" | tee -a "$LOG"

# Sync to latest main before the agent edits anything
git fetch origin main --quiet
git checkout main --quiet
git reset --hard origin/main --quiet

PROMPT_FILE="$REPO_ROOT/agent/prompts/curate.md"

# Headless Claude Code invocation.
# --allowedTools scoped to what curate.md needs. No destructive tools.
# --dangerouslySkipPermissions is off; the tool list is the guard.
claude \
  --print \
  --output-format stream-json \
  --verbose \
  --allowedTools "Read,Edit,Grep,Glob,WebSearch,WebFetch,Bash(git add:*),Bash(git commit:*),Bash(git checkout:*),Bash(git push:*),Bash(git diff:*),Bash(git status),Bash(gh pr create:*),Bash(curl -I *),Bash(curl -IL *),Bash(date *)" \
  < "$PROMPT_FILE" \
  2>&1 | tee -a "$LOG"

EXIT=${PIPESTATUS[0]}
echo "[$(date -Iseconds)] curator run finished (exit $EXIT)" | tee -a "$LOG"

# Keep only last 30 logs
ls -1t "$REPO_ROOT/agent/logs/"curator-*.log 2>/dev/null | tail -n +31 | xargs -r rm -f

exit "$EXIT"

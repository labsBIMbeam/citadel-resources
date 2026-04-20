# Agent — Citadel Resources curator

A headless Claude Code invocation that weekly scans for new citadel/sovereignty resources and opens a PR with curated additions. Runs on the Linux workstation (`alflx`) via systemd timer. No always-on process — it wakes once a week, does its job, exits.

## What it does

1. Reads `src/data/resources.ts` to avoid duplicates
2. Uses WebSearch to hunt for new podcast episodes / videos / books / articles / tribes
3. Verifies URLs (curl HEAD checks) and YouTube/Spotify embeds
4. Proposes additions (max 3 per category, 10 total) on a `curator/YYYY-MM-DD` branch
5. Opens a PR — **you review and merge** (agent cannot merge)

Full behavior defined in `agent/prompts/curate.md`.

## Files

```
agent/
├── prompts/curate.md            # The operating manual for the curator
├── run.sh                       # Shell wrapper that invokes Claude Code
├── .env.example                 # Fill in keys, copy to .env
├── systemd/
│   ├── citadel-curator.service  # Oneshot service unit
│   └── citadel-curator.timer    # Weekly trigger
└── logs/                        # Last 30 run logs (gitignored)
```

## Setup on Linux (alflx)

Assumes: Claude Code CLI installed, `gh` CLI installed + authed, repo cloned to `/home/flx/projects/citadel-resources`.

```bash
# 1. Get the repo on the Linux box
cd ~/projects
git clone https://github.com/<you>/citadel-resources.git
cd citadel-resources

# 2. Fill in the agent's secrets
cp agent/.env.example agent/.env
$EDITOR agent/.env       # set ANTHROPIC_API_KEY and GITHUB_TOKEN

chmod 600 agent/.env
chmod +x agent/run.sh

# 3. Test a dry run interactively first
./agent/run.sh

# 4. Install the systemd units (edit paths in the service file if not /home/flx/...)
sudo cp agent/systemd/citadel-curator.service /etc/systemd/system/
sudo cp agent/systemd/citadel-curator.timer   /etc/systemd/system/
sudo systemctl daemon-reload

# 5. Enable + start the timer (the timer triggers the service)
sudo systemctl enable --now citadel-curator.timer

# 6. Verify it's scheduled
systemctl list-timers citadel-curator.timer
```

## Observability

```bash
# Next scheduled run
systemctl list-timers citadel-curator.timer

# Last run logs (journald)
journalctl -u citadel-curator.service -n 200

# Or run-by-run log files
ls -lt agent/logs/ | head
tail -n 200 agent/logs/curator-*.log | less
```

## Manual trigger (force a run now)

```bash
sudo systemctl start citadel-curator.service
# or, without systemd:
./agent/run.sh
```

## Cost

Weekly run with WebSearch + a handful of verifications + edit to one file usually lands around **€0.10–0.50 per run** in Anthropic API costs, i.e. ~**€5–10/year**. Monitor your console.

## Safety model

The `--allowedTools` list in `run.sh` is the hard boundary. The agent can:

- Read files, grep, glob
- Edit `src/data/resources.ts` (only file mentioned in the prompt)
- WebSearch + WebFetch
- git add/commit/checkout/push, gh pr create
- curl HEAD checks

It **cannot**:

- Merge PRs
- Push to `main`
- Run `npm install`, `npm run build`, or anything that builds/deploys
- Run arbitrary bash

You are the gate. PRs land in your inbox as GitHub notifications — skim, merge or close.

## When to disable

```bash
sudo systemctl disable --now citadel-curator.timer
```

Uninstall: delete the two unit files from `/etc/systemd/system/`, `daemon-reload`.

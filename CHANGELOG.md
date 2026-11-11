# Changelog

## 1.3.0

- README rewritten for Cursor: install from the marketplace or with `mcp.json`, a capabilities table, what the plugin adds, and a network and execution surface section. Claude Code steps moved lower down.
- New logo: the PaidSync knot, 640x640, matching the icon paidsync.ai serves.
- Added REVIEW.md, a reviewer test path with three read-only checks.
- SECURITY.md now lists what ships: 26 skills, 5 slash commands, one agent and 2 rules, and the one file written on request (`PAIDSYNC.md`).
- Added a GitHub check that validates `.cursor-plugin/plugin.json` against Cursor's plugin schema and checks every skill name matches its folder.

## 1.2.0

- Added the six PaidSync skills published at paidsync.ai/skills: `wasted-spend-hunter`, `negative-keyword-triage`, `meta-ads-audit`, `creative-fatigue-scan`, `linkedin-campaign-qa`, `tracking-health`.
- Added `paidsync-keyword-research`, `paidsync-ad-copy`, `paidsync-help` and `paidsync-brand-workspace`.
- Added 5 slash commands: `/paidsync-audit`, `/paidsync-wasted-spend`, `/paidsync-weekly-report`, `/paidsync-launch`, `/paidsync-connect`.
- Added the `paidsync-brand-context` rule for `PAIDSYNC.md` brand workspaces.
- Merged the multi-platform wasted-spend guidance into `paidsync-optimize`.

## 1.1.0

- Added 16 skills: tool discovery, setup, account audit, wasted spend, campaign launch, optimization, cross-platform reporting, saved workflows, measurement (GA4, Tag Manager, Search Console, Merchant Center), and one per platform for Google Ads, Meta, LinkedIn, TikTok, Microsoft Advertising, ChatGPT Ads, and Snapchat, Reddit, Pinterest and X.
- Added the `paidsync-performance-marketer` agent.
- Added the `use-paidsync` rule.
- Added SECURITY.md.

## 1.0.0

- First release: PaidSync MCP server and the core `paidsync` skill.

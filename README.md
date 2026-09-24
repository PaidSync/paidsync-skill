# PaidSync plugin for Claude Code

Six ads skills for Claude Code that end in done work, not a list for later: wasted spend, negative keywords, a Meta audit, creative fatigue, LinkedIn launch QA and tracking health. They run on [PaidSync](https://paidsync.ai), which connects Claude to your own ad and analytics accounts on 14 platforms: Google Ads, Meta, LinkedIn, TikTok, Microsoft, Snapchat, Reddit, Pinterest, X and ChatGPT Ads, plus GA4, Google Tag Manager, Search Console and Merchant Center.

## Install

1. **Connect PaidSync.ai in Claude.** Open https://claude.ai/directory/9f9cc23d-337e-4547-b740-9cb90c5d3e60, click Connect and sign in. The free plan needs no card. If you use Claude Code with your claude.ai login, the connector appears in Claude Code by itself (check with `/mcp`).
2. **Install the skills.** In Claude Code:

```
/plugin marketplace add PaidSync/paidsync-skill
/plugin install paidsync@paidsync
```

Or in one line, on Claude Code 2.1.275 or later: `/plugin install paidsync --marketplace PaidSync/paidsync-skill`

Using Claude Code with an API key instead of a claude.ai login? Claude.ai connectors do not load then, so add the server yourself: `claude mcp add --transport http paidsync https://mcp.paidsync.ai/mcp`, then `/mcp` to sign in.

## What can change your ad accounts

When Claude calls PaidSync over MCP, PaidSync writes no approval card, so the human check is Claude's own confirmation prompt before a tool runs. Google Ads creates and most other creates are previewed with `dry_run`, destructive operations need `confirm_destructive`, and applied changes are logged, on a best-effort basis, with a 7-day before-and-after outcome. Approval cards and one-tap undo apply only in the PaidSync workspace. If you allow PaidSync tools without a prompt, no person confirms those calls. Details: https://paidsync.ai/security

## What is in this repo

```
.claude-plugin/plugin.json        the plugin manifest
.claude-plugin/marketplace.json   lets Claude Code install the plugin straight from this repo
skills/                           the six skills, plain instructions with no scripts
paidsync/                         the original standalone Agent Skill, for use without the plugin
scripts/sync-plugin.mjs           copies the skills from the paidsync.ai build; not loaded by Claude
```

The plugin has no server connection of its own on purpose: it uses your PaidSync.ai connector. Everything it adds is in `skills/`. Read them before you install, as you should with any plugin.

<!-- GEN:plugin-readme:start. Written by scripts/sync-plugin.mjs, do not edit by hand. -->
## The skills

- `/paidsync:creative-fatigue-scan`. Scan Meta ads for creative fatigue by comparing frequency, CTR and cost per result across two 14-day windows, then pause or rebalance fatigued ads through the PaidSync MCP server after a dry run and the user's yes. Use when Meta results are sliding or someone asks which ads are tired.
- `/paidsync:linkedin-campaign-qa`. QA every live LinkedIn Ads campaign against a launch checklist (results, audience size, end dates, budgets, duplicates, conversion tracking), then fix failures through the PaidSync MCP server after a dry run and the user's yes. Use before or after a LinkedIn launch, or when LinkedIn spend is not producing leads.
- `/paidsync:meta-ads-audit`. Audit a Meta ad account by composing PaidSync read tools one check at a time (account status, pixel events, structure, delivery, creative, placements, audiences, recent changes), so every finding carries the numbers it came from. Fixes run through the PaidSync MCP server only after a dry run and the user's yes. Use for a Meta or Facebook Ads audit or health check.
- `/paidsync:negative-keyword-triage`. Weekly Google Ads search term triage. Sort new terms into block, watch and harvest, then apply blocks as negatives and harvests as exact match keywords through the PaidSync MCP server, each after a dry run and its own yes. Use for a weekly search term review.
- `/paidsync:tracking-health`. Check conversion tracking health across Google Tag Manager, GA4, Google Ads and the Meta pixel through the PaidSync MCP server. Finds duplicate, orphaned and silent conversion tags and events, and reads each tag's consent settings. It does not audit Consent Mode. Fixes are staged in a workspace after the user's yes, and publishing needs a second yes.
- `/paidsync:wasted-spend-hunter`. Find Google Ads search terms that spend money with zero conversions, then block them with negative keywords through the PaidSync MCP server after a dry run and the user's yes. Use when someone asks about wasted spend, zero-conversion search terms, or which negatives to add.

The skills are byte-identical to the ones in https://paidsync.ai/.claude-plugin/paidsync-1.0.0.zip (version 1.0.0, sha256 `d635cf3aff1f1545900f73480124fb42ec6ec415d474211aa41daadc635775bb`). This copy leaves out that build's own server connection on purpose, so Claude Code uses your PaidSync.ai connector.
<!-- GEN:plugin-readme:end -->

## Standalone skill

The `paidsync/` folder is the original Agent Skill, a guidance layer for when the PaidSync server is connected without this plugin. For Claude Code, copy it to `~/.claude/skills/paidsync`. For claude.ai, zip the folder and upload it under Settings, Features, Skills.

## Links

- Product: https://paidsync.ai
- Claude Code setup guide: https://paidsync.ai/connect/ads-to-claude-code
- Security and what can change your accounts: https://paidsync.ai/security
- Support: support@paidsync.ai

## License

MIT. See [LICENSE](LICENSE).

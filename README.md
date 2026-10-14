# PaidSync Agent Skill and Cursor Plugin

An Agent Skill that teaches AI assistants such as Claude and Cursor how to use the [PaidSync](https://paidsync.ai) MCP server well: orient before acting, audit before optimizing, and draft every change for approval before it applies.

PaidSync lets an AI assistant operate a user's own paid media accounts across 14 platforms (Google Ads, Meta, TikTok, LinkedIn, Snapchat, Reddit, Pinterest, Microsoft, X, and ChatGPT Ads, plus GA4, GTM, Search Console, and Merchant Center) through one MCP connection. This skill is the guidance layer on top of those tools.

## What is in this repo

```
paidsync-skill/
├── .cursor-plugin/
│   └── plugin.json      Cursor plugin settings
├── agents/
│   └── paidsync-performance-marketer.md   Performance marketer agent
├── rules/
│   └── use-paidsync.mdc  How to use PaidSync safely
├── skills/
│   ├── paidsync/         Core skill (SKILL.md + REFERENCE.md)
│   ├── paidsync-account-audit/   paidsync-wasted-spend/   paidsync-optimize/
│   ├── paidsync-launch-campaign/ paidsync-cross-platform-report/ paidsync-workflows/
│   ├── paidsync-google-ads/  paidsync-meta-ads/  paidsync-linkedin-ads/  paidsync-tiktok-ads/
│   ├── paidsync-microsoft-ads/  paidsync-chatgpt-ads/  paidsync-social-platforms/
│   └── paidsync-measurement/  paidsync-setup/  paidsync-tool-discovery/
├── assets/
│   └── logo.png         Plugin logo
├── mcp.json             The PaidSync server Cursor connects to
├── SECURITY.md
├── CHANGELOG.md
├── LICENSE              MIT
└── README.md
```

## Install

This skill is a guidance layer. It assumes the PaidSync MCP server is connected in the same session. Connect PaidSync first at https://paidsync.ai, then add the skill.

**Claude Code**
```
cp -r skills/paidsync ~/.claude/skills/paidsync
```
Or place it in a project at `.claude/skills/paidsync`.

**claude.ai (Pro, Max, Team, Enterprise with code execution)**
Zip the `skills/paidsync` folder and upload it under Settings, Features, Skills.

**Claude API**
Upload the `skills/paidsync` folder through the Skills API (`/v1/skills`).

## Install in Cursor

1. In Cursor, open **Customize**, search for **PaidSync.ai** and click **Install**.
2. Cursor opens PaidSync's sign-in in your browser. Sign in, or create an account (the free plan needs no card), then connect your ad accounts.
3. Ask something like "Find wasted spend in my Google Ads account this month."

The plugin adds one server, https://mcp.paidsync.ai/mcp (see `mcp.json`), 17 skills (platform skills for every ad channel, plus audit, wasted spend, launch, optimize, reporting, tracking and workflows), a performance marketer agent, and one rule. It has no hooks, runs no scripts, and holds no keys or tokens. Cursor asks before it runs each PaidSync tool unless you turn on auto-run. Most creates preview with a dry run first, and destructive operations need explicit confirmation. Details: https://paidsync.ai/security. Terms: https://paidsync.ai/terms. Privacy: https://paidsync.ai/privacy.

## How it works

Claude loads the skill name and description at startup. When a request matches (auditing ads, finding wasted spend, adjusting budgets, comparing platforms, setting up conversion tracking, and the PaidSync connector is available), Claude reads `SKILL.md` for the workflow and reads `REFERENCE.md` only when it needs the full platform list or examples. This progressive loading keeps the context light.

## Safety

Every change PaidSync makes is drafted and requires explicit user approval before it applies. PaidSync changes campaign configuration only; it never moves money or processes payments. Billing stays directly between the user and each ad platform.

Review any skill before installing it. Everything this skill does is in `SKILL.md` and `REFERENCE.md`, plain instructions with no scripts and no external calls.

## Links

- Product: https://paidsync.ai
- Documentation: https://paidsync.ai/docs
- Connect to Claude: https://paidsync.ai/docs
- Connect to Cursor: https://paidsync.ai/connect/ads-to-cursor

## License

MIT. See [LICENSE](LICENSE).

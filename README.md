# PaidSync Agent Skill

An Agent Skill that teaches Claude how to use the [PaidSync](https://paidsync.ai) MCP server well: orient before acting, audit before optimizing, and draft every change for approval before it applies.

PaidSync lets an AI assistant operate a user's own paid media accounts across 13 platforms (Google Ads, Meta, TikTok, LinkedIn, Snapchat, Reddit, Pinterest, Microsoft, and ChatGPT Ads, plus GA4, GTM, Search Console, and Merchant Center) through one MCP connection. This skill is the guidance layer on top of those tools.

## What is in this repo

```
paidsync-skill/
├── paidsync/
│   ├── SKILL.md       Core instructions and workflow (loaded when triggered)
│   └── REFERENCE.md   Platform list and example prompts (loaded on demand)
├── LICENSE            MIT
└── README.md
```

## Install

This skill is a guidance layer. It assumes the PaidSync MCP server is connected in the same session. Connect PaidSync first at https://paidsync.ai, then add the skill.

**Claude Code**
```
cp -r paidsync ~/.claude/skills/paidsync
```
Or place it in a project at `.claude/skills/paidsync`.

**claude.ai (Pro, Max, Team, Enterprise with code execution)**
Zip the `paidsync` folder and upload it under Settings, Features, Skills.

**Claude API**
Upload the `paidsync` folder through the Skills API (`/v1/skills`).

## How it works

Claude loads the skill name and description at startup. When a request matches (auditing ads, finding wasted spend, adjusting budgets, comparing platforms, setting up conversion tracking, and the PaidSync connector is available), Claude reads `SKILL.md` for the workflow and reads `REFERENCE.md` only when it needs the full platform list or examples. This progressive loading keeps the context light.

## Safety

Every change PaidSync makes is drafted and requires explicit user approval before it applies. PaidSync changes campaign configuration only; it never moves money or processes payments. Billing stays directly between the user and each ad platform.

Review any skill before installing it. Everything this skill does is in `SKILL.md` and `REFERENCE.md`, plain instructions with no scripts and no external calls.

## Links

- Product: https://paidsync.ai
- Documentation: https://paidsync.ai/docs
- Connect to Claude: https://paidsync.ai/docs

## License

MIT. See [LICENSE](LICENSE).

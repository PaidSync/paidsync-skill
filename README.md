# PaidSync plugin for Claude Code

Connect Claude Code to your own ad and analytics accounts through the [PaidSync](https://paidsync.ai) MCP server, and add six ads skills that end in done work, not a list for later: wasted spend, negative keywords, a Meta audit, creative fatigue, LinkedIn launch QA and tracking health.

PaidSync covers 14 platforms: Google Ads, Meta, LinkedIn, TikTok, Microsoft, Snapchat, Reddit, Pinterest, X and ChatGPT Ads, plus GA4, Google Tag Manager, Search Console and Merchant Center.

## Install

In Claude Code:

```
/plugin marketplace add PaidSync/paidsync-skill
/plugin install paidsync@paidsync
```

Or in one line, on Claude Code 2.1.275 or later:

```
/plugin install paidsync --marketplace PaidSync/paidsync-skill
```

Then type `/mcp`, pick PaidSync and sign in. The free plan needs no card: https://paidsync.ai/signup

Using Claude on the web or the desktop app instead? Add PaidSync.ai from the Connectors Directory: https://claude.ai/directory/9f9cc23d-337e-4547-b740-9cb90c5d3e60

## What is in this repo

```
.claude-plugin/plugin.json        the plugin manifest
.claude-plugin/marketplace.json   lets Claude Code install the plugin straight from this repo
.mcp.json                         the PaidSync server, https://mcp.paidsync.ai/mcp (OAuth, no key stored)
skills/                           the six skills, plain instructions with no scripts
paidsync/                         the original standalone Agent Skill, for use without the plugin
scripts/sync-plugin.mjs           copies the plugin from the paidsync.ai build; not loaded by Claude
```

Everything the plugin does is in `.mcp.json` and `skills/`. Read them before you install, as you should with any plugin.

<!-- GEN:plugin-readme:start. Written by scripts/sync-plugin.mjs, do not edit by hand. -->
## PaidSync for Claude Code

This plugin connects Claude Code to your ad accounts through the PaidSync MCP server, with 530+ tools across 14 ad and analytics platforms, and adds six ads skills.

### What it installs

- A server entry named `paidsync` that points at `https://mcp.paidsync.ai/mcp`. It signs in with OAuth. No key is stored in the plugin.
- Six skills. Claude Code loads them automatically, and each one is also a slash command:

  - Wasted Spend Hunter, `/paidsync:wasted-spend-hunter`. Blocks Google Ads search terms that spend and never convert.
  - Negative Keyword Triage, `/paidsync:negative-keyword-triage`. Weekly search term triage into block, watch and harvest.
  - Meta Ads Audit, `/paidsync:meta-ads-audit`. Eight-check Meta audit that composes read tools, one check at a time.
  - Creative Fatigue Scan, `/paidsync:creative-fatigue-scan`. Finds tired Meta ads, then pauses or rebalances them.
  - LinkedIn Campaign QA, `/paidsync:linkedin-campaign-qa`. Launch checklist for every live LinkedIn campaign.
  - Tracking Health, `/paidsync:tracking-health`. Finds broken conversion tracking and reads tag consent settings.

### Sign in

After the install, type `/mcp` in a Claude Code session, pick the PaidSync server and sign in with your PaidSync login. No PaidSync account yet? Create one at https://paidsync.ai/signup. The free plan needs no card.

If you already added PaidSync with `claude mcp add`, keep it. Both entries point at the same URL, so Claude Code connects to it once.

### What can change your ad accounts

When Claude Code calls PaidSync over MCP, PaidSync writes no approval card, so the human check is Claude Code's own confirmation prompt before a tool runs. Google Ads creates and most other creates are previewed with `dry_run`, destructive operations need `confirm_destructive`, and applied changes are logged, on a best-effort basis, with a 7-day before-and-after outcome. Approval cards and one-tap undo apply only in the PaidSync workspace. If you allow PaidSync tools without a prompt, for example with `--allowedTools`, no person confirms those calls.

Details: https://paidsync.ai/security

### Update or remove

- Update: `/plugin marketplace update paidsync`
- Remove: `/plugin uninstall paidsync@paidsync`

The plugin needs Claude Code 2.1.224 or later.

Setup guide: https://paidsync.ai/connect/ads-to-claude-code
Support: support@paidsync.ai

The plugin files in this repo are byte-identical to https://paidsync.ai/.claude-plugin/paidsync-1.0.0.zip (version 1.0.0, sha256 `902bb734374611108b97306d4b673f4228b26b86ca7eca990c4928d6d81e1c47`).
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

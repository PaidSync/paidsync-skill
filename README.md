# PaidSync plugin for Claude Code

Ten ads skills for Claude Code, one for each common ads question. Six end in done work, not a list for later: search terms cleanup, a Meta audit, creative fatigue, a campaign check on any platform, tracking health with set-up, and budget pacing. Four read across your channels: waste ranked across platforms, what needs attention and why results dropped, a results recap for any period, and a competitor ads scan. They run on [PaidSync](https://paidsync.ai), which connects Claude to your own ad and analytics accounts on 14 platforms: Google Ads, Meta, LinkedIn, TikTok, Microsoft, Snapchat, Reddit, Pinterest, X and ChatGPT Ads, plus GA4, Google Tag Manager, Search Console and Merchant Center.

## Install

1. **Connect PaidSync.ai in Claude.** Open https://claude.ai/directory/9f9cc23d-337e-4547-b740-9cb90c5d3e60, click Connect and sign in. If you use Claude Code with your claude.ai login, the connector appears in Claude Code by itself (check with `/mcp`).
2. **Install the skills.** In Claude Code:

```
/plugin marketplace add PaidSync/paidsync-skill
/plugin install paidsync@paidsync
```

Or in one line, on Claude Code 2.1.275 or later: `/plugin install paidsync --marketplace PaidSync/paidsync-skill`

## What can change your ad accounts

When Claude calls PaidSync over MCP, the human check for pauses, negatives, budgets and tag changes is Claude's own confirmation prompt before a tool runs, together with the skill's dry run and your yes. A removal can also ask for PaidSync's own approval, as a form in the chat, an approval link, or the chat app's own Allow button. Google Ads creates and most other creates are previewed with `dry_run`, destructive operations need `confirm_destructive`, and applied changes are logged, on a best-effort basis, with a 7-day before-and-after outcome. Approval cards and one-tap undo apply in the PaidSync workspace. If you allow PaidSync tools without a prompt, no person confirms those calls unless PaidSync asks for its own approval. Details: https://paidsync.ai/security

## What is in this repo

```
.claude-plugin/plugin.json        the plugin manifest
.claude-plugin/marketplace.json   lets Claude Code install the plugin straight from this repo
skills/                           the ten skills, plain instructions with no scripts
paidsync/                         the original standalone Agent Skill, for use without the plugin
```

The plugin has no server connection of its own on purpose: it uses your PaidSync.ai connector. Everything it adds is in `skills/`, and it runs no code. The skills are copied from the paidsync.ai build by a maintainer script kept on this repo's `plugin-tools` branch, outside the plugin. Read them before you install, as you should with any plugin.

<!-- GEN:plugin-readme:start. Written by scripts/sync-plugin.mjs, do not edit by hand. -->
## The skills

- `/paidsync:budget-pacing`. Use when someone asks if they will overspend the monthly budget, about pacing, where to add or move budget, which channel is worth it, whether to scale, a spend cap or alert, or a promo budget. Reads impression share lost to budget, keeps moves at net zero unless told, and changes after a yes.
- `/paidsync:campaign-check`. Use when a campaign is not spending or has 0 impressions, an ad was disapproved, an account is suspended or a payment failed, or to check a campaign before launch, on any platform. Checks the account first, then settings, approvals with the appeal route, and delivery. Not for results that dropped.
- `/paidsync:competitor-ads-scan`. Use when someone asks what competitors are running, for competitor ads, Ad Library research or new ad angles. Reads named competitors' ads in Meta's Ad Library, groups their themes, checks each against the brand's own truths, and ends in briefs. Says what the library cannot show.
- `/paidsync:creative-fatigue-scan`. Use when someone asks which Meta ads are tired, about creative fatigue, why Meta results slide as frequency climbs, or what creative to brief next. Reads Meta's own fatigue flag and rankings first, compares 14 days with the 14 before, shows each ad's picture, and pauses only after a yes.
- `/paidsync:meta-ads-audit`. Use for a Meta or Facebook Ads audit, a health check, or taking over a Meta account. Checks account status, the pixel against reported results, attribution windows, structure, delivery, placements, audiences and creative with pictures, and scores each Keep, Fix, Test or Check first.
- `/paidsync:results-recap`. Use when someone asks for a weekly or monthly report, a client report, how last week or month went, or a summary across platforms. Writes one recap for any period against the period before and the target, with top movers, what PaidSync changed, one next step and a Data Studio link.
- `/paidsync:search-terms-cleanup`. Use when someone asks which searches to block, for negative keywords, a search terms review, junk searches, or to add converting searches as keywords. Sorts Google Ads and Microsoft terms into block, watch and add, weekly or over 30 days, checks overblocking, and changes only after a yes.
- `/paidsync:tracking-health`. Use when conversions are zero or look wrong, GA4 and the ad platforms disagree, to check a pixel, or to set up conversion tracking for a form, purchase, Meta pixel, UET, LinkedIn Insight Tag or GA4 key event. Checks consent first, stages Tag Manager changes, and publishes only on a second yes.
- `/paidsync:waste-across-channels`. Use when someone asks where their ad money is wasted, what is not working, which spend brings no results, or which platform wastes most. Ranks waste in one list across every connected platform against the account's own target, checks tracking first, and hands each line to the skill that fixes it.
- `/paidsync:what-needs-attention`. Use when someone asks what needs attention, why results dropped, why CPA or cost per result rose, what changed, or whether a platform is broken. Confirms a drop against the account's own history, reads change histories and tracking, and gives the likely cause or says it cannot tell.

The skills are byte-identical to the ones in https://paidsync.ai/.claude-plugin/paidsync-1.0.6.zip (version 1.0.6, sha256 `d1354f799fe9730effb7569b89517886ac895f1648943a288fd65c3b4d91c111`). This copy leaves out that build's own server connection on purpose, so Claude Code uses your PaidSync.ai connector.
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

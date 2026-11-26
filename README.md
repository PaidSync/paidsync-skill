# PaidSync plugin for Claude Code

Six ads skills for Claude Code that end in done work, not a list for later: wasted spend, negative keywords, a Meta audit, creative fatigue, LinkedIn launch QA and tracking health. They run on [PaidSync](https://paidsync.ai), which connects Claude to your own ad and analytics accounts on 14 platforms: Google Ads, Meta, LinkedIn, TikTok, Microsoft, Snapchat, Reddit, Pinterest, X and ChatGPT Ads, plus GA4, Google Tag Manager, Search Console and Merchant Center.

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
skills/                           the six skills, plain instructions with no scripts
paidsync/                         the original standalone Agent Skill, for use without the plugin
```

The plugin has no server connection of its own on purpose: it uses your PaidSync.ai connector. Everything it adds is in `skills/`, and it runs no code. The skills are copied from the paidsync.ai build by a maintainer script kept on this repo's `plugin-tools` branch, outside the plugin. Read them before you install, as you should with any plugin.

<!-- GEN:plugin-readme:start. Written by scripts/sync-plugin.mjs, do not edit by hand. -->
## The skills

- `/paidsync:creative-fatigue-scan`. A trend screen for Meta ads through the PaidSync MCP server, in stages that stop for the user's go-ahead, with each ad's picture beside its numbers. Compares each ad's last 14 days with the 14 before on frequency, click rate, cost per thousand impressions and cost per result, and reads each ad as Holding, Slipping, Needs a look or Too little data. Uses Meta's own signal when a PaidSync read returns one, and otherwise says the screen is PaidSync's rule of thumb. Proposes replacements and briefs, and pauses only where another ad keeps the ad set running, after a dry run and the user's yes. Use when Meta results are sliding, someone asks which ads are tired or what creative to brief next. Not for a full Meta audit (meta-ads-audit) or tracking problems (tracking-health).
- `/paidsync:linkedin-campaign-qa`. Check every live LinkedIn Ads campaign against a launch checklist through the PaidSync MCP server, in stages that stop for the user's go-ahead, with each ad's picture. Judges results against the account's own target cost per lead, and checks audience size, end dates on tests, budgets against the campaign group, duplicate targeting and conversion tracking, then fixes failures after a dry run and the user's yes. Use before or after a LinkedIn launch, when LinkedIn spend brings no leads, or before adding budget. Not for Google Ads or Meta, and not for tracking across platforms (tracking-health).
- `/paidsync:meta-ads-audit`. Audit a Meta (Facebook and Instagram) ad account through the PaidSync MCP server by composing read tools one check at a time, in stages that stop for the user's go-ahead. Checks account status, what the pixel received beside what ads report, attribution windows side by side, structure, delivery with recent edits and learning, placements, audiences and creative with each ad's picture, then gives a Keep, Fix, Test or Check first scorecard. Fixes run only after a dry run and the user's yes. Use for a Meta or Facebook Ads audit, a health check, a new account takeover, or when Meta results dropped and nobody knows why. Not for tired creative alone (creative-fatigue-scan), tracking setup across platforms (tracking-health), or Google Ads.
- `/paidsync:negative-keyword-triage`. Weekly Google Ads search term triage through the PaidSync MCP server, in stages that stop for the user's go-ahead. Sorts new terms into block, watch and harvest against the account's own target, checks every block against converting terms and active keywords, then applies blocks as negatives or shared lists and harvests as exact match keywords, each group after a dry run and its own yes. Covers Microsoft Advertising shared lists when connected. Use when someone asks for the weekly search term review, which new searches to block or add, or to keep a negative list tidy. Not for a 30-day cleanup of terms that already cost money (wasted-spend-hunter), or for Meta, LinkedIn or tracking questions.
- `/paidsync:tracking-health`. Check conversion tracking through the PaidSync MCP server on whatever is connected, in stages that stop for the user's go-ahead. Covers Google Tag Manager, GA4 key events, Google Ads conversions with auto-tagging and offline uploads, Microsoft Advertising UET tags, goals and offline uploads, LinkedIn conversions, and what the Meta pixel received with its attribution windows. Opens with All clear or Needs a look, lists every expected conversion with its state, finds duplicate, orphaned and silent tags and events, and reads each tag's consent settings without auditing Consent Mode. Runs with or without Tag Manager. Tag Manager fixes are staged after a yes and publishing needs a second yes; a GA4 key event change applies on its own yes. Use when conversions look wrong or zero, platforms and GA4 disagree, after a site or tag change, or on any new account. Not for wasted spend or creative.
- `/paidsync:wasted-spend-hunter`. Find Google Ads search terms that spend money with no conversions and block them with negative keywords through the PaidSync MCP server, in stages that stop for the user's go-ahead, after a dry run and the user's yes. Judges each term against the account's own target cost per conversion, checks tracking first, and covers Microsoft Advertising search terms when connected. Use when someone asks where their Google Ads money goes to waste, which searches to block, why spend rose without more sales, or for a monthly search term cleanup. Not for the weekly sort of new terms into block, watch and add (negative-keyword-triage), Meta or LinkedIn spend, or a conversion tracking problem (tracking-health).

The skills are byte-identical to the ones in https://paidsync.ai/.claude-plugin/paidsync-1.0.4.zip (version 1.0.4, sha256 `f9badddbed2011403bb787bbe9f7e4b09547ead67330caa33c814cb6a244915d`). This copy leaves out that build's own server connection on purpose, so Claude Code uses your PaidSync.ai connector.
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

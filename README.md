# PaidSync.ai for Cursor

Run your ad accounts from Cursor: audit, find wasted spend, launch campaigns and report across 14 ad and analytics platforms, with every change waiting for your approval.

PaidSync connects Cursor to your own Google Ads, Meta (Facebook and Instagram), LinkedIn, TikTok, Microsoft Advertising, ChatGPT Ads, Snapchat, Reddit, Pinterest and X accounts, plus GA4, Google Tag Manager, Search Console and Merchant Center, through one hosted MCP server with 630+ tools.

## Install in Cursor

1. Open **Customize** in the Cursor sidebar, search for **PaidSync.ai** and click **Install** (project or user scope). You can also find it on the [Cursor marketplace](https://cursor.com/marketplace).
2. Cursor opens PaidSync's sign-in in your browser. Sign in, or create an account (the free plan needs no card), then connect the ad accounts you want to use.
3. Ask something like "Find wasted spend in my Google Ads account this month."

**Without the marketplace.** Add PaidSync to `.cursor/mcp.json` in your project, or to `~/.cursor/mcp.json` for every project, then open Cursor Settings, MCP, and sign in when Cursor asks:

```json
{
  "mcpServers": {
    "paidsync": {
      "type": "http",
      "url": "https://mcp.paidsync.ai/mcp"
    }
  }
}
```

This gives you the PaidSync tools. The skills, slash commands, rules and agent below come with the plugin. Setup guide: https://paidsync.ai/connect/ads-to-cursor

## Try asking

```text
Audit my Google Ads account and rank the problems by money at stake.
Find wasted spend across all my connected platforms for the last 30 days.
Build one weekly report for Google, Meta and LinkedIn: spend, conversions, CPA and ROAS.
Write new search ad headlines based on what already performs in my account.
Check that my GA4 and Tag Manager conversion tracking is working.
```

## What it can do

| Area | Capabilities |
| --- | --- |
| Audit and fix | Account audits, wasted spend, negative keywords, creative fatigue, LinkedIn campaign checks |
| Build | Campaign plans and launches as drafts, keyword research, ad copy |
| Report | One cross-platform report: spend, conversions, CPA and ROAS side by side, with what changed and why |
| Tracking | Conversion tracking setup and checks across GA4, Google Tag Manager, Search Console and Merchant Center |
| Platforms | Google Ads, Meta, LinkedIn, TikTok, Microsoft, ChatGPT Ads, Snapchat, Reddit, Pinterest, X |
| Agencies | One `PAIDSYNC.md` brand workspace per client folder, so each session starts in the right accounts |

## What the plugin adds

| Component | What ships |
| --- | --- |
| MCP server | 1: `paidsync`, `https://mcp.paidsync.ai/mcp` (see `mcp.json`) |
| Slash commands | 5: `/paidsync-audit`, `/paidsync-wasted-spend`, `/paidsync-weekly-report`, `/paidsync-launch`, `/paidsync-connect` |
| Agent | 1: `paidsync-performance-marketer`, a senior performance marketer that drafts every change for your approval |
| Rules | 2: `use-paidsync` (check connections, read before writing, approval for every change) and `paidsync-brand-context` (uses a `PAIDSYNC.md` file when the folder has one) |
| Skills | 26, listed below |
| Hooks, scripts, binaries | None |

**Skills by job:**
- Audit and fix: `paidsync-account-audit`, `meta-ads-audit`, `linkedin-campaign-qa`, `wasted-spend-hunter`, `negative-keyword-triage`, `creative-fatigue-scan`, `paidsync-optimize`
- Build: `paidsync-launch-campaign`, `paidsync-keyword-research`, `paidsync-ad-copy`
- Report and track: `paidsync-cross-platform-report`, `tracking-health`, `paidsync-measurement`, `paidsync-workflows`
- Platforms: `paidsync-google-ads`, `paidsync-meta-ads`, `paidsync-linkedin-ads`, `paidsync-tiktok-ads`, `paidsync-microsoft-ads`, `paidsync-chatgpt-ads`, `paidsync-social-platforms` (Snapchat, Reddit, Pinterest, X)
- Setup and help: `paidsync`, `paidsync-setup`, `paidsync-tool-discovery`, `paidsync-brand-workspace`, `paidsync-help`

## Network and execution surface

- **One network endpoint.** The plugin declares a single hosted HTTP MCP server, `https://mcp.paidsync.ai/mcp`. It bundles no local server and contacts no other host.
- **OAuth in the browser, no keys.** You sign in to PaidSync in your browser. Each ad platform is then connected through that platform's own OAuth screen in the PaidSync dashboard. No API key, token or secret goes in the plugin, your config or the chat. Ad platform tokens are stored encrypted by PaidSync and never pass through the plugin.
- **Nothing runs on your machine.** No hooks, scripts, binaries or background jobs. Skills, commands, rules and the agent are plain Markdown instructions. Both rules load only when the request is about advertising work.
- **Changes wait for your approval.** Reads come first. Every change to an ad account is drafted and applies only after you approve it. Cursor also asks before it runs each PaidSync tool unless you turn on auto-run, most creates preview with a dry run first, and destructive operations need explicit confirmation.
- **No payments.** PaidSync changes campaign settings only. It never moves money or processes payments; billing stays between you and each ad platform.
- **One local file, on request.** The `paidsync-brand-workspace` skill writes a `PAIDSYNC.md` file (brand, account IDs, goals, rules) in your folder when you set up a brand workspace, and shows it to you. It never writes tokens, passwords or keys into it.

Details: [Security](https://paidsync.ai/security) · [Privacy](https://paidsync.ai/privacy) · [Terms](https://paidsync.ai/terms) · [SECURITY.md](SECURITY.md)

## Use with Claude Code and Claude

The same skills work in Claude. Connect the PaidSync server first, then add the skills.

**Claude Code**
```
claude mcp add --transport http paidsync https://mcp.paidsync.ai/mcp
cp -r skills/paidsync ~/.claude/skills/paidsync
```
Run `/mcp` in Claude Code to sign in. Copy any other folder under `skills/` the same way, or place skills in a project at `.claude/skills/`.

**claude.ai (Pro, Max, Team, Enterprise with code execution)**
Zip the `skills/paidsync` folder and upload it under Settings, Features, Skills.

**Claude API**
Upload the `skills/paidsync` folder through the Skills API (`/v1/skills`).

Claude loads each skill's name and description at startup and reads the full `SKILL.md` only when a request matches, then `REFERENCE.md` only when it needs the full platform list or examples. This keeps the context light.

## For reviewers

See [REVIEW.md](REVIEW.md) for a short test path: install, sign in, and three read-only things to try.

## Links and support

- Product: https://paidsync.ai
- Documentation: https://paidsync.ai/docs
- Connect to Cursor: https://paidsync.ai/connect/ads-to-cursor
- Security: https://paidsync.ai/security
- Privacy: https://paidsync.ai/privacy
- Terms: https://paidsync.ai/terms
- Support: support@paidsync.ai
- Issues: https://github.com/PaidSync/paidsync-skill/issues

## License

MIT. See [LICENSE](LICENSE).

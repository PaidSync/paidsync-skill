# Reviewer test path

A short path to check the PaidSync.ai plugin in Cursor. It takes about five minutes and changes nothing in any ad account.

## Test account

A reviewer test account is available on request from ahmed@paidsync.ai. No credentials are kept in this repository. You can also create your own free account at https://paidsync.ai (no card needed) and connect an ad account you own.

## 1. Install

- **From the marketplace:** open **Customize** in the Cursor sidebar, search for **PaidSync.ai** and click **Install**.
- **Before listing, from this repository:** copy the repository into `~/.cursor/plugins/local/paidsync`, run **Developer: Reload Window**, then open **Customize**. You should see the `paidsync` MCP server, 26 skills, 5 slash commands, the `paidsync-performance-marketer` agent and 2 rules.

## 2. Sign in

When Cursor connects to `https://mcp.paidsync.ai/mcp`, it opens PaidSync's sign-in in your browser (OAuth). Sign in with the test account. No API key or token is pasted anywhere. Connected ad accounts are managed in the PaidSync dashboard.

## 3. Three read-only things to try

1. **See what is connected.** Ask: "What can PaidSync do here, and which ad accounts are connected?" The agent calls `paidsync_context` and lists the connected platforms and accounts.
2. **Run an audit.** Run `/paidsync-audit`. It reads the account, reports the three findings worth the most money with their numbers, date range and currency, and offers fixes as drafts only.
3. **Build a weekly report.** Run `/paidsync-weekly-report`. It reads the last 7 full days against the 7 before and shows one table of spend, conversions, CPA and ROAS per platform.

None of these changes an ad account. Cursor asks before it runs each PaidSync tool unless auto-run is on.

## What the plugin contains

One hosted HTTP MCP server, plain Markdown skills, commands, rules and an agent. No hooks, scripts, binaries or keys. See [SECURITY.md](SECURITY.md) and the "Network and execution surface" section of the [README](README.md).

Questions: ahmed@paidsync.ai or support@paidsync.ai.

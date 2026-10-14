# Security

## What this plugin contains

- One remote MCP server, `https://mcp.paidsync.ai/mcp` (see `mcp.json`).
- Skills, one agent and one rule: plain Markdown instructions.
- No hooks, no scripts, no binaries, and no API keys or tokens.

## How access works

You sign in to PaidSync in your browser (OAuth). Each ad platform is then connected separately through that platform's own OAuth screen, and you can disconnect any of them at any time from the PaidSync dashboard. Ad platform tokens are stored encrypted by PaidSync and never pass through this plugin.

Every change to an ad account is drafted first and applies only after you approve it. PaidSync changes campaign settings only; it never moves money or processes payments.

More: https://paidsync.ai/security · Privacy: https://paidsync.ai/privacy · Terms: https://paidsync.ai/terms

## Reporting a vulnerability

Email support@paidsync.ai with the details. Please do not open a public issue for security reports.

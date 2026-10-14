---
name: paidsync-help
description: Answer questions about PaidSync itself: what it can do, supported platforms and AI apps, plans and limits, connecting accounts, security and privacy, and troubleshooting, using PaidSync's official pages instead of guessing. Use when the user asks about PaidSync, its pricing, limits, setup or an error from PaidSync.
---

# PaidSync help

Answer from PaidSync's own pages. Prices, plans and limits change, so never quote them from memory: read the live page if you can fetch web pages, otherwise give the link.

| Question | Official page |
|---|---|
| Plans, prices and limits | https://paidsync.ai/pricing |
| Setup and how-to guides | https://paidsync.ai/docs |
| Connecting PaidSync to Cursor | https://paidsync.ai/connect/ads-to-cursor |
| Security | https://paidsync.ai/security |
| Privacy | https://paidsync.ai/privacy |
| Terms | https://paidsync.ai/terms |
| Anything else | support@paidsync.ai |

## What is connected right now

Call `paidsync_context`: it lists the user's connected platforms, accounts and the active account. Use it rather than assuming.

## Errors

- A reply with `success: false` and a `FIX` line: follow the FIX text (see `paidsync-tool-discovery`).
- Sign-in problems: ask the user to sign in again from Cursor's MCP settings, which reopens PaidSync's browser sign-in.
- A platform that stopped working: its connection may have expired; reconnect it with that platform's connect tool (see `paidsync-setup`).

---
name: paidsync-brand-workspace
description: Set up a brand workspace for PaidSync in this folder: a PAIDSYNC.md file with the brand, its ad accounts per platform, goals such as target CPA or ROAS, markets, currency and approval rules, so every session starts with the right accounts and targets. Use on first run in a client or brand folder, or to update it.
---

# Brand workspace

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

Agencies and multi-brand teams keep one folder per brand or client. A `PAIDSYNC.md` file at the folder root tells the agent which accounts and targets belong to this brand, so it never works in the wrong account.

## Create or update PAIDSYNC.md

1. Call `paidsync_context` and list the connected accounts per platform.
2. Ask the user which accounts belong to this brand, and for the goals below.
3. Write `PAIDSYNC.md` at the folder root with this layout, then show it to the user:

```markdown
# PaidSync brand workspace

Brand: <name>
Website: <url>

## Accounts
- Google Ads: <account name> (<id>)
- Meta: <ad account name> (<id>)
- LinkedIn: <ad account name> (<id>)

## Goals
- Main conversion: <purchase, lead, sign-up>
- Target CPA: <amount and currency>  or  Target ROAS: <ratio>
- Monthly budget: <amount and currency>

## Markets
- Countries and languages: <list>
- Currency: <code>

## Rules
- Changes always need approval. Extra limits: <for example, never raise a budget more than 20 percent>
```

Never write tokens, passwords or API keys into this file.

## Every session in this folder

If `PAIDSYNC.md` exists, read it first, set the listed account on each platform before acting (see `paidsync-setup`), and judge results against its goals.

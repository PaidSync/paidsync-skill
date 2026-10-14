---
name: paidsync-optimize
description: Optimize live campaigns with PaidSync: shift budget to what converts, adjust bids and bid strategies, pause underperformers and scale winners, each change drafted with before and after values and applied only after approval. Use when the user asks to optimize, improve ROAS or CPA, scale, reallocate budget, or pause losers.
---

# Optimize

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Steps

1. Pull performance for the date range (and the previous period for comparison).
2. Group campaigns or ad sets into: scale (profitable and limited by budget), hold, fix, and pause.
3. Draft each change as a line: what, on which campaign, from what value to what value, and why (the numbers behind it).
4. Wait for approval. Apply only the approved lines (for example `update_campaign_budget`, `pause_campaign`, `enable_campaign`).
5. Read back each change and report what landed.

## Cutting waste on social platforms

On Meta, LinkedIn, TikTok, Snapchat, Reddit, Pinterest and X, flag ad sets and ads with spend above the account's target CPA and no results, and audiences or placements that cost far more than the account average. Flag low-volume items as "watch", not "cut". On Google Ads and Microsoft, use `wasted-spend-hunter` and `negative-keyword-triage` instead.

## Guardrails

- Move budget in steps of about 20 percent or less unless the user asks for more, so learning phases are not reset.
- Never change a budget or bid without a confirmed yes from the user for that exact change.
- Keep a note of the previous values in the reply, so the user can ask to undo.

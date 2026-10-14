---
name: paidsync-meta-ads
description: Manage Meta Ads (Facebook and Instagram ads) with PaidSync: campaigns, ad sets, ads, audiences, placements, budgets and creative performance, including Business Manager accounts. Use for anything on Facebook ads, Instagram ads, Meta, FB ads or paid social on Meta.
---

# Meta Ads (Facebook and Instagram)

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Account

Choose the ad account with `set_fb_ad_account` when more than one is connected. Business Manager accounts are supported.

## Reading

Start with `get_fb_performance`, then go down to ad set and ad level using the `meta` tools listed by `paidsync_context`. Report results by the campaign's own objective (purchases, leads, or the result it optimizes for), not just clicks.

## Changing

Budgets, pauses, new ad sets and ads are drafted and approved first. Read the tool's inputs with `paidsync_tool_detail` for the budget unit and required fields (for example the Facebook Page an ad runs from).

## What to look at

- Frequency rising with click-through falling: creative fatigue. Suggest fresh creative before cutting budget.
- Ad sets stuck in learning: too many ad sets for the budget. Suggest consolidating.
- Audience overlap between ad sets that bid against each other.

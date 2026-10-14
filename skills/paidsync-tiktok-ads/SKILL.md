---
name: paidsync-tiktok-ads
description: Manage TikTok Ads with PaidSync: campaigns, ad groups, ads, audiences, budgets and video creative performance, with advertiser switching for agencies. Use for anything on TikTok ads or TikTok for Business.
---

# TikTok Ads

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Account

Agencies often hold several advertisers. Ask which one and set it with `set_active_tiktok_advertiser`.

## Reading

Pull campaign, ad group and ad performance with the TikTok tools listed by `paidsync_context`. For video ads, compare watch time and completion rates alongside cost per result: a hook that loses viewers in the first seconds is usually the problem.

## Changing

Budgets, pauses, new ad groups and ads are drafted and approved first. Read each tool's inputs with `paidsync_tool_detail` for the budget unit and minimums.

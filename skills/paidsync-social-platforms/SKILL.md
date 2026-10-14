---
name: paidsync-social-platforms
description: Manage Snapchat Ads, Reddit Ads, Pinterest Ads and X (Twitter) Ads with PaidSync: performance, budgets, pauses and new ads on each. Use for anything on Snapchat, Reddit, Pinterest or X / Twitter advertising.
---

# Snapchat, Reddit, Pinterest and X Ads

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Accounts

Set the account first when more than one is connected: `set_active_snapchat_account`, `set_active_reddit_account`, `set_active_pinterest_account`, `set_active_x_account`.

## Working with them

List each platform's tools with `paidsync_context` and read inputs with `paidsync_tool_detail`. On X Ads, PaidSync manages existing campaigns.

## What to look at

- **Snapchat:** swipe-up rate and cost per result by audience; creative tires fast.
- **Reddit:** subreddit and interest targeting; comment sentiment on promoted posts.
- **Pinterest:** saves and outbound clicks; strong for planning and shopping searches.
- **X:** engagement against cost; check that the campaign objective matches the goal.

Report these platforms next to the main channels with `paidsync-cross-platform-report`.

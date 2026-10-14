---
name: paidsync-cross-platform-report
description: Build one cross-platform performance report with PaidSync across Google Ads, Meta, LinkedIn, TikTok, Microsoft, Snapchat, Reddit, Pinterest, X and ChatGPT Ads: spend, conversions, CPA and ROAS side by side, with what changed and why. Use for weekly or monthly reporting, client reports, or comparing channels.
---

# Cross-platform report

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Steps

1. Confirm the date range and the comparison period.
2. Call `paidsync_context` to list connected platforms. Pull each platform's performance for the same range (on Google Ads, `get_performance_summary` or `get_campaign_performance`).
3. Put every platform in one table: spend, impressions, clicks, conversions, CPA, ROAS, and the change against the previous period.
4. Name the currency for each platform. Do not add up spend across different currencies without saying so.
5. List any platform or account that could not be read, separately. Never show it as zero.
6. End with the two or three changes that matter most and what likely caused them.

## Repeating it

To run the same report every week, save it as a workflow (see `paidsync-workflows`).

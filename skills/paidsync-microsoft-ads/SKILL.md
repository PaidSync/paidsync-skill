---
name: paidsync-microsoft-ads
description: Manage Microsoft Advertising (Bing Ads) with PaidSync: search campaigns, keywords, search terms, budgets and bids, and comparison with Google Ads. Use for anything on Microsoft Ads, Bing Ads or Bing search advertising.
---

# Microsoft Advertising (Bing Ads)

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Account

Choose the account with `set_active_microsoft_account` when more than one is connected.

## Working with it

Microsoft Advertising works like Google search: campaigns, ad groups, keywords, search terms and responsive search ads. The same wasted-spend steps as Google apply (see `wasted-spend-hunter` and `negative-keyword-triage`), using the Microsoft tools listed by `paidsync_context`.

When the user runs both, compare CPA and conversion volume against Google Ads for the same date range, and look for search terms that convert on one but are missing on the other.

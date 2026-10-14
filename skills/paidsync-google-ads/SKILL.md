---
name: paidsync-google-ads
description: Manage Google Ads with PaidSync: search, Performance Max and Shopping reporting, keywords, search terms, negatives, responsive search ads, budgets, bidding and Manager (MCC) accounts, plus custom GAQL queries. Use for anything on Google Ads, AdWords, Google search ads or PPC on Google.
---

# Google Ads

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Account

Manager (MCC) accounts are supported. When several accounts are connected, ask which one and set it with `set_active_account`.

## Common reads

| Need | Tool |
|---|---|
| Account overview | `get_account_summary`, `get_performance_summary` |
| Campaigns | `get_campaign_performance` |
| Ads | `get_ad_performance` |
| Keywords | `get_keyword_performance` |
| Search terms | `get_search_terms_report` |
| Wasted spend | `get_wasted_spend_report` |
| Full audit | `run_account_audit` |
| Bid strategies | `list_bidding_strategies` |
| Anything else | `run_gaql_query` (Google Ads Query Language) |

## Common changes (always drafted and approved first)

`create_search_campaign`, `create_responsive_search_ad`, `add_keywords`, `add_negative_keywords`, `update_campaign_budget`, `pause_campaign`, `enable_campaign`. For other changes, list the `google_ads` group with `paidsync_context`.

## Notes

- Responsive search ads: up to 15 headlines (30 characters each) and 4 descriptions (90 characters each). Count characters before drafting.
- Set locations, languages and networks explicitly on new campaigns.
- Shopping and Performance Max product data comes from Merchant Center (see `paidsync-measurement`).

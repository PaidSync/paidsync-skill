---
name: paidsync-account-audit
description: Run a full paid media audit with PaidSync: account structure, tracking, budgets, bidding, search terms, creative and wasted spend, with findings ranked by money at stake. Use when the user asks to audit, review, health-check or diagnose an ad account on Google Ads, Meta, LinkedIn, TikTok, Microsoft or any connected platform.
---

# Account audit

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Steps

1. Confirm the account and the date range (default: last 30 days, compared with the 30 days before).
2. On Google Ads, start with `run_account_audit`. On Meta, follow `meta-ads-audit`. On LinkedIn, follow `linkedin-campaign-qa`. On other platforms, pull campaign, ad set or ad group, and ad level performance from that platform's tools (see `paidsync-tool-discovery`).
3. Check, in this order, because earlier problems make later numbers unreliable:
   1. **Tracking.** Are conversions recording? Any conversion action with zero conversions while spend runs is the first finding. For a full check use `tracking-health`.
   2. **Wasted spend.** Spend with no conversions, irrelevant search terms, weak placements. On Google Ads use `get_wasted_spend_report` and `get_search_terms_report`, or the `wasted-spend-hunter` skill.
   3. **Budget and bidding.** Campaigns limited by budget while profitable, or spending freely while unprofitable. Bid strategy fit (`list_bidding_strategies`).
   4. **Structure.** Overlapping campaigns, ad groups or ad sets that compete with each other, missing negatives.
   5. **Creative.** Ads with low click-through or falling performance over time.
4. Rank findings by money at stake, with the number and its scope for each.
5. Offer fixes as drafts the user can approve one by one (see `paidsync-optimize`).

## Output

Lead with the three findings worth the most money. Then a short list of the rest. No change is made during an audit.

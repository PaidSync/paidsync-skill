---
name: paidsync-wasted-spend
description: Find and cut wasted ad spend with PaidSync: search terms with no conversions, irrelevant queries, non-converting keywords, ads and placements, then draft negative keywords and pauses for approval. Use when the user asks where money is wasted, what to cut, or how to lower CPA.
---

# Wasted spend

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Google Ads and Microsoft Advertising

1. Run `get_wasted_spend_report` for the chosen date range.
2. Run `get_search_terms_report` sorted by cost. Flag terms with spend and zero conversions, and terms that do not match what the business sells.
3. Run `get_keyword_performance` sorted by cost to find keywords with spend and no conversions.
4. Draft the fix:
   - Negative keywords (`add_negative_keywords`), showing each term, match type and the level it goes on (campaign or ad group).
   - Keywords to pause, with their spend and conversions.
5. Wait for approval, apply only what the user confirmed, then read back the result.

## Meta, LinkedIn, TikTok and the other social platforms

Pull ad set and ad performance. Flag ad sets and ads with spend above the account's target CPA and no results, and audiences or placements that cost far more than the account average. Draft pauses or budget moves for approval.

## Guardrails

- Do not pause anything that converts unless the user asks.
- Allow enough data: flag low-volume items as "watch", not "cut".
- Show the total spend each change would stop, with its date range.

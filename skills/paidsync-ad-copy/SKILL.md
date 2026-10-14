---
name: paidsync-ad-copy
description: Write and refresh ad copy with PaidSync for Google and Microsoft responsive search ads, Meta, LinkedIn and TikTok: headlines, descriptions and primary text inside each platform's character limits, based on what already performs in the account. Use for ad copy, headlines, new ads or refreshing tired creative.
---

# Ad copy

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Start from evidence

Pull the account's current ads and their results first (on Google Ads, `get_ad_performance`). Note which angles, offers and calls to action win, and write new copy that builds on them. On Meta, check `creative-fatigue-scan` to see whether the problem is fatigue rather than the message.

## Limits (count characters before showing a draft)

| Platform | Field | Limit |
|---|---|---|
| Google Ads and Microsoft Advertising (responsive search ads) | Headlines | up to 15, 30 characters each |
| | Descriptions | up to 4, 90 characters each |
| | Display path | 2 fields, 15 characters each |
| Meta | Primary text | about 125 characters show before "See more" |
| | Headline | about 40 characters show in most placements |
| LinkedIn sponsored content | Intro text | about 150 characters show before truncation |
| | Headline | about 70 characters show in most placements |
| TikTok | Ad text | up to 100 characters |

The Meta and LinkedIn figures are display guidance, not hard limits: longer text is accepted but cut off on screen.

## Drafting

1. Write variations across angles: benefit, proof, offer, urgency, objection handling.
2. Show the full set with character counts.
3. On approval, create the ads (for example `create_responsive_search_ad` on Google Ads) and read them back.

## Rules

- Only claims the user can back up (prices, guarantees, results).
- Follow each platform's ad policies; flag anything likely to be disapproved.

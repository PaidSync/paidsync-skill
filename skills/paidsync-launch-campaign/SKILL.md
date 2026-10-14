---
name: paidsync-launch-campaign
description: Plan and launch a new ad campaign with PaidSync on Google Ads, Meta, LinkedIn, TikTok or Microsoft: goal, budget, targeting, bidding, ads and tracking, built as a draft the user approves before anything goes live. Use when the user wants to create, launch, set up or build a campaign.
---

# Launch a campaign

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Before building

Agree these with the user, in one short list:

1. Goal and conversion it optimizes for (check the conversion is tracking; if not, start with `paidsync-measurement`).
2. Daily or total budget, in the account's currency.
3. Locations and languages.
4. Audience or keywords.
5. Landing page.
6. Bid strategy.

## Building

1. Read the create tool's inputs with `paidsync_tool_detail`. Fill every targeting field explicitly. Never rely on a platform default for locations, networks or targeting.
2. Use the tool's dry run or preview when its inputs offer one, and show the user the full draft: settings, budget, targeting, every ad.
3. Create new campaigns paused unless the user says to start them live.
4. After the user approves, create it, then read it back and confirm each setting landed as drafted.

## Platform notes

- **Google Ads search:** `create_search_campaign`, then `create_responsive_search_ad` (up to 15 headlines of 30 characters and 4 descriptions of 90 characters), then `add_keywords` and `add_negative_keywords`.
- **LinkedIn:** targeting must be set at creation. A campaign created without it can fall into audience expansion settings that cannot be undone.
- **Meta, TikTok, Snapchat, Reddit, Pinterest:** campaign, then ad set or ad group (budget, audience, placements), then ads. Ask for creative files or links.

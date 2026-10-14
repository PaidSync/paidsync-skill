---
name: paidsync-linkedin-ads
description: Manage LinkedIn Ads with PaidSync: campaign groups, campaigns, creatives, B2B targeting by job title, company and industry, lead gen performance and budgets. Use for anything on LinkedIn ads, B2B paid social, or LinkedIn Campaign Manager.
---

# LinkedIn Ads

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Account

Choose the ad account with `set_linkedin_ad_account` when more than one is connected.

## Reading

Start with `get_linkedin_performance`. Report cost per lead and lead quality signals where available, not just clicks, because LinkedIn clicks cost more than on other platforms.

## Creating campaigns

Targeting must be set when the campaign is created (job titles, functions, seniorities, companies, industries, locations). Look up targeting values with the LinkedIn tools from `paidsync_context` instead of typing them. A campaign created without targeting can end up in settings LinkedIn does not let you undo, so never create one without it.

## Related skills

`linkedin-campaign-qa` to check every live campaign against a launch checklist.

## Changing

Budgets, bids, pauses and new creatives are drafted and approved first.

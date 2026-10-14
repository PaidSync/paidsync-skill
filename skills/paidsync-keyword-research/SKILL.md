---
name: paidsync-keyword-research
description: Research search keywords with PaidSync using Google's Keyword Planner data: search volume and competition for the user's own country and language, grouped into ad groups with match types and negatives. Use for keyword ideas, keyword research, search volume or planning a new search campaign.
---

# Keyword research

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Steps

1. Ask for the seed: a landing page URL, product names or a few seed phrases.
2. Agree the scope before pulling numbers: country and language. Default to the countries and languages the account already targets, and say which scope you used. Volumes differ a lot by country.
3. Find the keyword research tool in the `google_ads` group with `paidsync_context` (it uses Keyword Planner data), read its inputs with `paidsync_tool_detail`, and run it.
4. Group the ideas by intent into ad groups of closely related terms. For each: suggested match type, monthly searches and competition (plus bid estimates when the tool returns them), with the scope named.
5. List likely negatives (jobs, free, DIY, competitor or irrelevant meanings).
6. Offer to build the campaign with `paidsync-launch-campaign`, or to add the keywords to an existing ad group as a draft for approval.

## Rules

- Never mix countries in one volume number without saying so.
- Volumes are estimates from Google; call them that.

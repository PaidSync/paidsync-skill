---
name: paidsync-chatgpt-ads
description: Manage ChatGPT Ads (OpenAI ads) with PaidSync: connect the account, read spend and results, and manage campaigns next to Google and Meta. Use for anything on ChatGPT ads or advertising inside ChatGPT.
---

# ChatGPT Ads

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Connecting

Connect with `connect_openai_ads` (it asks for the ChatGPT Ads API key) and choose the account with `set_active_openai_account`.

## Working with it

List the ChatGPT Ads tools with `paidsync_context`, read inputs with `paidsync_tool_detail`, and draft every change for approval. ChatGPT Ads is a newer channel: compare its cost per result with search and social for the same date range before moving budget into it.

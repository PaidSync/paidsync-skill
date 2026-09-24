---
name: paidsync
description: Manage paid media across 14 platforms (Google Ads, Meta, TikTok, LinkedIn, Snapchat, Reddit, Pinterest, Microsoft, X, ChatGPT Ads, plus GA4, GTM, Search Console, Merchant Center) through the PaidSync MCP server. Use when the user wants to audit ad accounts, find wasted spend, pause underperformers, adjust budgets or bids, build audiences, write ads, compare performance across platforms, or set up conversion tracking, and the PaidSync connector is available. Enforces approval-gated execution, draft every change and confirm before applying.
---

# PaidSync

PaidSync is an MCP server that operates a user's own paid media accounts across 14 platforms from one connection. This skill guides how to use those tools well: orient before acting, audit before optimizing, and draft every change for approval before it applies.

Use this skill only when the PaidSync connector is connected. If its tools are not available, tell the user to connect PaidSync at paidsync.ai first, then return.

## Core principles

1. Orient first. Call `paidsync_context` before anything else to see which platforms and accounts are connected and which account is active. Never assume an account.
2. Read before write. Start with an audit or a read query. Understand the account before proposing any change.
3. Draft, never auto-apply. Every write (budget change, pause, new ad, audience, conversion setup) is drafted and shown to the user. Nothing applies until the user confirms. State exactly what will change, on what, from what value to what value, then wait for a yes.
4. One account at a time. When the user has more than one account on a platform, use `set_active_account` to target the right one before acting.
5. Money is never moved. PaidSync changes campaign settings only. It does not move funds or process payments; billing stays between the user and each ad platform. Do not imply otherwise.

## The toolset

PaidSync exposes a small set of tools. The full catalog of platform actions runs through the executor.

- `paidsync_context`: who is connected, which accounts exist, what is active. Always start here.
- `paidsync_exec`: the executor that runs a PaidSync action (audit, read, or an approval-gated write) on any connected platform.
- `paidsync_tool_detail`: look up a specific action and its inputs when you need an exact operation.
- `set_active_account`: choose which ad account a request targets.
- `paidsync_recent_runs`: review what was run recently before repeating or undoing work.
- `paidsync_workflows_list` / `_describe` / `_run` / `_save` / `_delete`: manage repeatable multi-step workflows.
- `connect_google_ads`, `connect_facebook_ads`, `connect_tiktok_ads`, and the other `connect_*` tools: start OAuth for a platform the user has not linked yet, one per platform.
- `paidsync_qa_suite`: validate that connected platforms respond correctly.

See [REFERENCE.md](REFERENCE.md) for the full 14-platform list, agency multi-account support, cross-platform intelligence, and example prompts per platform.

## Recommended flow

Audit, then optimize, always with approval:

1. Orient with `paidsync_context`.
2. Run a read audit for the account in question: wasted spend, underperformers, or portfolio health across platforms.
3. Summarize findings in plain language with concrete numbers.
4. Propose specific changes. Show each as a draft: what changes, on what, from what to what.
5. Wait for the user to confirm. Apply only confirmed changes through `paidsync_exec`.
6. Read back the result and confirm it landed.

## Examples

- "Audit my Google Ads account." Orient, run the audit, report wasted spend and underperformers with numbers, then offer next steps.
- "Pause my worst Meta ad sets." Find them by performance, draft the pause list, confirm, then apply.
- "Compare last week across Google, Meta, and TikTok." Pull each, present one comparison, not three separate dumps.
- "Set up a purchase conversion." Configure the GA4 event and wire it through GTM, drafted for approval.
- "Connect TikTok." Call `connect_tiktok_ads` and walk the user through the OAuth step.

## When not to use

- The request is not about advertising, web analytics, or conversion tracking.
- The PaidSync connector is not available in the session. Point the user to paidsync.ai to connect, then return.

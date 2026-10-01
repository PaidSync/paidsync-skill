# PaidSync reference

The full platform list, capabilities, and example prompts. Load this when you need the complete surface; the core workflow lives in SKILL.md.

PaidSync runs a user's own paid media accounts across 14 platforms through one MCP endpoint, with hundreds of tools reachable through the executor. Every write is drafted and applies only after the user confirms.

## Connected platforms (14)

Each platform is connected separately by the user through OAuth, using the matching `connect_*` tool. A platform must be connected before its data can be read or changed.

**Ad platforms (10), read and write**

| Platform | Access | Partner status |
|---|---|---|
| Google Ads | Full edit, including Manager (MCC) accounts | Founder is a Google Premier Partner (top 3 percent globally) |
| Meta Ads (Facebook and Instagram) | Full edit, including Business Manager system user tokens | Meta Business Partner |
| LinkedIn Ads | Full read and write (most tools elsewhere are read only) | n/a |
| TikTok Ads | Full edit, including advertiser switching | TikTok Marketing Partner |
| Snapchat Ads | Full read and write | n/a |
| Reddit Ads | Full read and write | n/a |
| Pinterest Ads | Full read and write | n/a |
| Microsoft Ads | Full read and write | n/a |
| X Ads | Manages existing campaigns | n/a |
| ChatGPT Ads | Connected via API key | n/a |

**Analytics and tracking (4)**

| Platform | Access |
|---|---|
| Google Analytics 4 (GA4) | Full edit: conversion events, audiences, custom dimensions |
| Google Tag Manager (GTM) | Full edit: tags, triggers, variables, workspaces |
| Google Search Console | Read access for paid and organic blended reporting |
| Google Merchant Center | Product and feed visibility |

PaidSync is the only MCP with write access to LinkedIn, TikTok, Snapchat, Reddit, Pinterest, and Microsoft Ads.

## Capabilities

**Audit and diagnose (read)**
- Account audits that surface wasted spend, weak campaigns, and structural issues
- Search term and placement analysis
- GA4 property audits and tracking gaps

**Optimize (approval-gated write)**
- Budget shifts, bid changes, pausing underperformers
- Campaign and ad group restructuring

**Build (approval-gated write)**
- Audience building and retargeting lists
- Ad creation, including responsive search ads and dynamic creative

**Measure and track**
- Conversion tracking set up end to end: GA4 events wired through GTM
- ROAS and spend reporting per platform

**Cross-platform intelligence**
- Portfolio health across every connected platform
- Performance comparison in one view rather than platform by platform
- Anomaly detection and change-to-outcome context

**Repeatable workflows**
- Save a multi-step routine once with `paidsync_workflows_save`, then rerun it with `paidsync_workflows_run`

## Multi-account and agencies

PaidSync supports operators who manage many accounts:
- Google Ads Manager (MCC) account support
- Meta Business Manager system user tokens
- TikTok advertiser switching
- One user can manage accounts across multiple OAuth identities

Use `set_active_account` to target the right account before acting when more than one is connected.

## Example prompts by intent

**Audit and diagnose**
- "Audit my Google Ads account and show me where I'm wasting spend."
- "Which Meta campaigns have the worst return this month?"
- "Give me a portfolio health report across everything connected."

**Optimize (drafted, confirmed, then applied)**
- "Pause every Meta ad set with CPA above 40 dollars in the last 7 days."
- "Shift budget from my weakest Google campaign to my best one."
- "Raise the bid on my top three TikTok ad groups by 15 percent."

**Build (drafted, confirmed, then applied)**
- "Create a retargeting audience from my last 30 days of site visitors."
- "Draft three responsive search ads for this landing page."

**Measure and track**
- "Pull this month's spend and ROAS for Reddit, Snapchat, and ChatGPT Ads."
- "Set up a purchase conversion event in GA4 and wire it through GTM."

**Connect and orient**
- "What platforms do I have connected right now?"
- "Connect my TikTok Ads account."

## Safety model

Every change is drafted and requires explicit user approval before it applies. PaidSync changes campaign configuration only. It never moves money or processes payments. Billing stays directly between the user and each ad platform.

## Getting connected

A free PaidSync account at paidsync.ai includes 15 tool calls per month, enough to run a first audit. The user adds the PaidSync MCP server to their AI client, then connects each ad platform through OAuth. Full setup steps for Claude, ChatGPT, Gemini, Cursor, and others are at paidsync.ai/docs.

## Links

- Product: https://paidsync.ai
- Documentation: https://paidsync.ai/docs
- MCP endpoint: https://mcp.paidsync.ai/mcp
- Compare: https://paidsync.ai/compare

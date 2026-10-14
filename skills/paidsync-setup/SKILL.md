---
name: paidsync-setup
description: Connect PaidSync and the user's ad accounts: sign in to the PaidSync MCP server, link each ad platform through OAuth with its connect tool, and choose the active account. Use when the user is starting out, asks what is connected, or a platform is missing.
---

# Setup and connections

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## First run

1. Call `paidsync_context`. If it fails because the server is not signed in, ask the user to finish the browser sign-in Cursor opened (or create a free account at https://paidsync.ai), then try again.
2. Read back which platforms and accounts are connected, in one short list.
3. For each platform the user wants that is missing, call its connect tool and give the user the sign-in link it returns.

## Connect tools

| Platform | Tool |
|---|---|
| Google Ads | `connect_google_ads` |
| Meta Ads (Facebook and Instagram) | `connect_facebook_ads` |
| LinkedIn Ads | `connect_linkedin_ads` |
| TikTok Ads | `connect_tiktok_ads` |
| Microsoft Advertising | `connect_microsoft_ads` |
| Snapchat Ads | `connect_snapchat_ads` |
| Reddit Ads | `connect_reddit_ads` |
| Pinterest Ads | `connect_pinterest_ads` |
| X Ads | `connect_x_ads` |
| ChatGPT Ads | `connect_openai_ads` |
| Google Analytics 4 | `connect_ga4` |
| Google Tag Manager | `connect_gtm` |
| Google Search Console | `connect_google_search_console` |
| Google Merchant Center | `connect_merchant_center` |

## Choosing the account

When a platform has more than one account, ask which one, then set it: `set_active_account` (Google Ads), `set_fb_ad_account` (Meta), `set_linkedin_ad_account`, `set_active_tiktok_advertiser`, `set_active_microsoft_account`, `set_active_snapchat_account`, `set_active_reddit_account`, `set_active_pinterest_account`, `set_active_x_account`, `set_active_openai_account`, `set_active_merchant_account`. Never pick an account for the user.

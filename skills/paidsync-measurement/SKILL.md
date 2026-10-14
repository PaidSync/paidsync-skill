---
name: paidsync-measurement
description: Set up and check conversion tracking with PaidSync across Google Analytics 4, Google Tag Manager, Search Console and Merchant Center: conversion events, tags, triggers, product feeds, and whether ad platforms are receiving conversions. Use for GA4, GTM, conversion tracking, tags, pixels, Search Console or Merchant Center work.
---

# Measurement and tracking

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Check first

Before trusting any CPA or ROAS, check that conversions are recording: conversion actions on the ad platform, the matching GA4 event, and the GTM tag that fires it. The `tracking-health` skill runs this check across Tag Manager, GA4, Google Ads and the Meta pixel.

## Google Analytics 4

Read and set up conversion events, audiences and custom dimensions with the GA4 tools listed by `paidsync_context`.

## Google Tag Manager

Tags, triggers, variables and workspaces. Draft the full change (tag, trigger and variables together), get approval, then publish only when the user confirms the publish step separately, since publishing changes the live site.

## Search Console

Read search queries and pages to compare organic and paid demand, and find search terms worth adding as keywords.

## Merchant Center

Check product and feed status (disapproved products, missing attributes) before diagnosing Shopping or Performance Max results. Set the account with `set_active_merchant_account`.

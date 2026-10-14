---
name: paidsync-audit
description: Audit a connected ad account with PaidSync and rank the findings by money at stake.
---

# Audit an ad account

1. Call `paidsync_context`. If more than one account is connected, ask which one (or use `PAIDSYNC.md` if the folder has one).
2. Follow the `paidsync-account-audit` skill. On Meta, also use `meta-ads-audit`; on LinkedIn, `linkedin-campaign-qa`.
3. Report the three findings worth the most money first, each with its number, date range and currency.
4. Offer the fixes as drafts. Change nothing without the user's yes.

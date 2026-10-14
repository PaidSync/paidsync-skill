# PaidSync for Grok Build

Connect Grok Build to PaidSync's hosted MCP server. The plugin includes seven
skills for paid media work: a general PaidSync guide, wasted spend, negative
keywords, Meta account audits, creative fatigue, LinkedIn campaign QA, and
conversion tracking health.

## Connection and credentials

The only network endpoint configured by this plugin is
`https://mcp.paidsync.ai/mcp`. It uses PaidSync OAuth in the browser. The plugin
contains no API keys, client secrets, scripts, hooks, or executable code. A
PaidSync account is required; create one at <https://paidsync.ai/signup>.

After installing the plugin in Grok Build, open `/mcps`, select `paidsync`, and
sign in. Run `grok mcp doctor paidsync` if the connection needs diagnosis.

You can also connect without the plugin:

```sh
grok mcp add --transport http paidsync https://mcp.paidsync.ai/mcp
```

The plugin uses the same MCP endpoint and does not require a separate PaidSync
deployment.

PaidSync's `paidsync_exec` tool composes supported platform actions on the
hosted server. It does not run a shell command on the user's computer.

## Changes to ad accounts

PaidSync can change ad account settings, including budgets and campaign status.
The skills call read tools first, preview supported writes with `dry_run`, and
require a clear user confirmation before applying a change. Grok Build's own
tool permissions still govern each call. Review proposed changes before
approving them; there is no PaidSync workspace approval card for MCP calls.

## Contents

- `.mcp.json`: PaidSync's hosted MCP server
- `skills/paidsync/`: general usage and approval flow
- `skills/wasted-spend-hunter/`: search term waste and negative keywords
- `skills/negative-keyword-triage/`: weekly search term review
- `skills/meta-ads-audit/`: Meta account audit
- `skills/creative-fatigue-scan/`: Meta creative fatigue
- `skills/linkedin-campaign-qa/`: LinkedIn campaign checks
- `skills/tracking-health/`: GTM, GA4, Google Ads, and Meta tracking checks

PaidSync terms: <https://paidsync.ai/terms>.
Privacy: <https://paidsync.ai/privacy>.
Security: <https://paidsync.ai/security>.
Support: <support@paidsync.ai>.

License: MIT. See `LICENSE` in this plugin directory.

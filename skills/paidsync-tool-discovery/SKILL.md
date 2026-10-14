---
name: paidsync-tool-discovery
description: How to find and call any of PaidSync's platform tools correctly: list the catalog per platform with paidsync_context, read a tool's exact inputs with paidsync_tool_detail, run it inside paidsync_exec, and handle success:false replies that carry a FIX instruction. Use before calling any PaidSync platform tool you have not used in this session.
---

# Finding and calling PaidSync tools

PaidSync shows a small starter set of tools. The full catalog (hundreds of platform actions) is reached through three steps. Never guess a tool name or a parameter.

## The three steps

1. **List.** Call `paidsync_context`. It returns the active account, the connected platforms and the tool groups. Pass `include_tools` with the group you need (for example `["google_ads"]`, or `["*"]` for everything) to see exact tool names.
2. **Read the contract.** Call `paidsync_tool_detail` for the tool you picked. It returns the inputs, which ones are required, and the units (currency, date format, IDs as strings).
3. **Run.** Call `paidsync_exec` with code that calls the tool:

   ```js
   await paidsync.call('get_keyword_performance', { date_range: 'last_30_days', sort_by: 'cost' })
   ```

Several calls can run in one `paidsync_exec` when they are independent reads.

## Replies that are not failures

Some replies come back with `success: false` and a `FIX` line, for example: no active account set, several accounts to choose between, or the wrong platform bound. Follow the FIX text, or ask the user which account they mean. Do not retry the same call unchanged.

## Rules for numbers

- Report only numbers a tool returned in this session. Never estimate, and never carry a number over from earlier.
- Say the scope of every number: account, date range, currency, and country or language when it applies.
- If an account could not be read, say so. An unreadable account is never zero.

## Before saying something is not possible

Check the catalog for that platform with `paidsync_context` first. The starter tool list is not the full capability set.

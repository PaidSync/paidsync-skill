---
name: paidsync-workflows
description: Save and rerun multi-step PaidSync routines, such as a Monday cross-platform check or a weekly wasted-spend sweep, with paidsync_workflows_save, _list, _describe, _run and _delete. Use when the user wants something repeated, scheduled or automated.
---

# Saved workflows

Follow the core `paidsync` skill for the two rules that never change: orient with `paidsync_context` first, and draft every change for the user's approval before it runs.

## Tools

- `paidsync_workflows_save`: save a routine (its steps and inputs) under a name.
- `paidsync_workflows_list` and `paidsync_workflows_describe`: see what is saved and what each does.
- `paidsync_workflows_run`: run one.
- `paidsync_workflows_delete`: remove one, after the user confirms.
- `paidsync_recent_runs`: see what ran recently before repeating or undoing work.

## Good routines to offer

- Monday report across every connected platform.
- Weekly wasted-spend sweep that drafts negatives for approval.
- Budget pacing check mid-month.

A routine that changes accounts still drafts its changes for approval. Saving it does not grant standing permission.

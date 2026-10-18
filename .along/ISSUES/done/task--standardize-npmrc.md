---
protocol: along
protocol_version: "4.4.16"
slug: standardize-npmrc
type: task
status: done
completed: 2026-10-18
priority: medium
created: 2026-10-18
updated: 2026-10-18
agent: antigravity
parent: task--standardize-package-lockfiles-and-npmrc
tags: [pnpm, lockfile, npmrc]
blocked_by: []
related: []
---

# Standardize .npmrc and standalone pnpm environment in webmold

## Problem
In `actdim/webmold`, standalone pnpm installs and isolated test environments require `.npmrc` with `auto-install-peers=false` to prevent peer dependency resolution failures for `@actdim/*`.

## Requirements
- Add `.npmrc` with `auto-install-peers=false`.
- Ensure standalone `pnpm-lock.yaml` is synchronized.

## Acceptance Criteria
- [x] `.npmrc` exists with `auto-install-peers=false`
- [x] Standalone lockfile synchronized

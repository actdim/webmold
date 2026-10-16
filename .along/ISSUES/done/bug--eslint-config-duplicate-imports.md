---
protocol: along
protocol_version: "4.4.10"
slug: eslint-config-duplicate-imports
type: bug
status: done
completed: 2026-10-12
priority: medium
created: 2026-10-12
updated: 2026-10-12
agent: claude-code
tags: [lint, tooling]
blocked_by: []
related: []
---

# Fix duplicate imports in eslint.config.mjs that break pnpm lint

## Problem Statement / Background
eslint.config.mjs in webmold contained duplicate import statements from a merge conflict that broke pnpm lint.

## Implementation Details
1. Cleaned duplicate imports and reconciled ESLint 9 flat configuration.
2. Applied ESLint fixes and formatted configuration file.
3. Verified pnpm lint passes.

## Acceptance Criteria
- [x] Duplicate imports removed from eslint.config.mjs
- [x] pnpm lint passes without errors
- [x] ESLint config adheres to repo standards

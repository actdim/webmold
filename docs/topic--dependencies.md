---
protocol: along
protocol_version: "4.4.15"
slug: dependencies
title: Dependencies & Submodules AI Documentation and Rules
type: topic
created: 2026-10-16
updated: 2026-10-16
tags: [dependencies, ai-context, submodules, vendor, rules]
---

# Dependencies & Submodules AI Documentation and Rules

> [!NOTE]
> This document maintains a unified registry of internal subprojects, submodules, and external dependencies.
> Consult linked guidelines when developing, refactoring, or integrating components across the repository.

## Internal Subprojects, Modules & Submodules

| Subproject / Module | Path | Ecosystems | AI Documentation & Context |
| :--- | :--- | :--- | :--- |
| **`server`** | `apps/server` | `npm` | [llms-full.txt](../apps/server/llms-full.txt) <br> [llms.txt](../apps/server/llms.txt) <br> [docs/](../apps/server/docs) |
| **`webapp`** | `apps/webapp` | `npm` | [llms-full.txt](../apps/webapp/llms-full.txt) <br> [llms.txt](../apps/webapp/llms.txt) <br> [docs/](../apps/webapp/docs) |

## Internal Monorepo Dependency Graph

No internal monorepo package inter-dependencies detected.

## Declared External Dependencies with AI Guidelines

| Package | Scope / Project | Ecosystem | Version | AI Guidelines / Instructions |
| :--- | :--- | :--- | :--- | :--- |
| **`concurrently`** | `[root]` | `npm` | `9.2.1` | [docs/](../node_modules/concurrently/docs) |

## Transitive Dependency Guidelines & Invariants

No exported invariants detected across repository dependencies.

## Custom Project Dependency Hooks (`.along/scripts/dep_scan.py`)

While Along natively auto-discovers dependencies across Node.js (`package.json`), Python (`pyproject.toml`, `requirements*.txt`), .NET NuGet (`*.csproj`), Rust (`Cargo.toml`), and Go (`go.mod`), repositories using other ecosystems or internal package managers can supply a custom discovery hook:

- **Hook Path**: `.along/scripts/dep_scan.py` (or `scan_deps.py`).
- **Invocation**: `/along-dep-scan` or `along dep-scan` executes the script passing `--json` with working directory set to the project root.
- **Output Schema**: The script must write a JSON list to stdout:
  ```json
  [
    {
      "package": "custom-package",
      "ecosystem": "hex",
      "version": "1.0.0",
      "files": [
        {
          "filename": "AGENTS.md",
          "path": "deps/custom-package/AGENTS.md"
        }
      ]
    }
  ]
  ```
- **Monorepo Localization**: In multi-package repositories or submodules, subproject-specific hooks placed in `packages/<subproject>/.along/scripts/dep_scan.py` are executed automatically when scanning that subproject.

## Usage in Agent Sessions
When working on features involving any of the modules or external libraries above:
1. **Internal Submodules**: Follow conventions in the nearest `AGENTS.md` or subproject `docs/`.
2. **Third-Party Libraries**: Read the linked instruction files directly for framework-specific patterns and best practices.

# WebMold

A monorepo sandbox for exploring and comparing popular React UI component libraries, all built on **Tailwind CSS v4** and **React 19**.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/actdim/webmold)

---

## What's inside

| App | Description |
|-----|-------------|
| `apps/webapp` | Multi-page React app — one page per UI library |
| `apps/server` | Fastify API server (TypeScript) |

### UI library pages

| Page | Library | Highlights |
|------|---------|------------|
| `/tw/` | **Tailwind CSS + HyperUI** | Pure Tailwind — badges, button groups, inputs, tabs, stats, table, pagination, steps |
| `/shadcn/` | **shadcn/ui** | Full component showcase + two-tier theme switcher (4 base × 8 accent colors) + dark mode |
| `/mui/` | **Material UI v7** | Component showcase + 6 color presets + light/dark toggle |
| `/prime/` | **PrimeReact v10** | Component showcase — buttons, inputs, sliders, rating, tags, progress, accordion, DataTable |
| `/daisy/` | **DaisyUI v5** | Component showcase + switcher for all 35 built-in themes |

---

## Tech stack

- **Monorepo** — [pnpm workspaces](https://pnpm.io/workspaces) v10
- **Bundler** — [Vite](https://vitejs.dev/) v7, MPA mode (separate `index.html` per page)
- **Language** — TypeScript 5
- **UI** — React 19
- **Styles** — Tailwind CSS v4 (`@tailwindcss/vite`)
- **Server** — Fastify v5 with TypeBox schema validation

### UI libraries

| Library | Version |
|---------|---------|
| shadcn/ui (Radix UI) | latest canary |
| Material UI | 7 |
| PrimeReact | 10 |
| DaisyUI | 5 |
| HyperUI | (HTML/CSS patterns) |

---

## Getting started

```bash
# Install dependencies
pnpm install

# Run webapp only (port 5174)
pnpm dev:webapp

# Run server only (port 3000)
pnpm dev:server

# Run both concurrently
pnpm dev
```

---

## Project structure

```
webmold/
├── apps/
│   ├── webapp/               # Vite MPA
│   │   ├── index.html        # / — library index page
│   │   ├── tw/index.html     # /tw/
│   │   ├── shadcn/index.html # /shadcn/
│   │   ├── mui/index.html    # /mui/
│   │   ├── prime/index.html  # /prime/
│   │   ├── daisy/index.html  # /daisy/
│   │   └── src/
│   │       ├── tw/           # HyperUI showcase
│   │       ├── shadcn/       # shadcn/ui showcase + CSS theme system
│   │       ├── mui/          # MUI showcase
│   │       ├── prime/        # PrimeReact showcase
│   │       └── daisy/        # DaisyUI showcase
│   └── server/               # Fastify API
├── packages/                 # Shared packages (if any)
├── pnpm-workspace.yaml
└── package.json
```

---

## License

MIT

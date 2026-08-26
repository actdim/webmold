# WebMold Architecture

## Overview

**WebMold** is a multi-page web application sandbox and API server exploring and comparing React UI component libraries built on **React 19**, **Tailwind CSS v4**, **Vite v7 MPA**, and **Fastify v5**.

## Monorepo Apps & Structure

- **`apps/webapp/`**: Vite Multi-Page Application (MPA) containing dedicated showcases:
  - `/tw/`: Tailwind CSS + HyperUI HTML/CSS components.
  - `/shadcn/`: shadcn/ui (Radix UI) showcase with two-tier theme switcher (4 base x 8 accent colors) + dark mode.
  - `/mui/`: Material UI v7 showcase with 6 color presets.
  - `/prime/`: PrimeReact v10 showcase (DataTable, Form controls, Sliders, Accordion).
  - `/daisy/`: DaisyUI v5 showcase with 35 built-in theme switchers.
- **`apps/server/`**: Fastify v5 API server with TypeBox schema validation.

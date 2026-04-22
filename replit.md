# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains Austin Abuoga's portfolio web app and an API server.

## Artifacts

- **portfolio** (`artifacts/portfolio/`): React + Vite multi-page portfolio for Austin Abuoga. Three pages:
  - `/` — Home landing page (dark minimal, white text on #0a0a0a). Portal to choose portfolio. Clean modern look, two cards linking to the two portfolios.
  - `/social` — Social Media Management portfolio. Light/white design, rose/pink accent. Clients: Outering FC, MK Creative Hub, Safaricom PLC. Content samples, metrics, services, timeline.
  - `/data` — Data Analysis portfolio. Terminal/hacker aesthetic with emerald green on near-black (dark mode). Projects: Instagram Analytics Dashboard (1.5M records), Sales Revenue Dashboard ($13M), Customer Segmentation (10K customers). Skill DNA radar chart, capabilities bars.
  - Theme is managed in App.tsx: dark class applied only for /data route.
  - All GitHub links updated to austin-abuoga (after rename from kratosmatthews). Data screenshots still reference kratosmatthews repos until GitHub rename is complete.
- **api-server** (`artifacts/api-server/`): Express 5 backend, port auto-assigned. Currently only has a health check endpoint.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite, Tailwind CSS, Recharts, Framer Motion, Lucide React

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

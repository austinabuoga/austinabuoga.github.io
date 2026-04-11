# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains Austin Abuoga's portfolio web app and an API server.

## Artifacts

- **portfolio** (`artifacts/portfolio/`): React + Vite portfolio for Austin Abuoga. Terminal/hacker aesthetic with emerald green on near-black background. Monospaced font (JetBrains Mono). Features: animated header, KPI metrics, interactive hover-reveal campaign charts (Recharts AreaChart & BarChart), Skill DNA radar chart, capabilities progress bars, framer-motion animations. No backend needed — all data is hardcoded.
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

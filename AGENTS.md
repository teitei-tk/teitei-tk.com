# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `app/` (`layout.tsx`, `page.tsx`, `providers.tsx`) for global frame and providers.
- UI blocks sit in `components/` (`common/ExternalLink.tsx`, `components/page/*` for homepage sections); styling helpers such as `styles/components/layout.module.css` back shared layout rules.
- Shared logic/constants are in `lib/` (`constants.ts`, `validation.ts`, `test-utils.tsx`), shared types in `types/`, static assets in `public/`.
- Tooling configs live at the repo root (`biome.json`, `vitest.config.mts`, `tsconfig*.json`); build artifacts output to `.next/` or `out/` (ignored).

## Build, Test, and Development Commands
- Use Node `24.13.0` (see `.node-version`); install pnpm with `npm install -g pnpm@10.28.0`, then run `pnpm install`.
- `pnpm dev` boots the local Next.js server.
- `pnpm build` creates the production bundle; `pnpm start` serves it.
- `pnpm lint` / `pnpm format` auto-fix with Biome; `pnpm format:check` for CI-safe validation.
- `pnpm check` or `pnpm fix` runs Biome check + fix; prefer before commits.
- `pnpm test` runs Vitest once with jsdom; during development, `pnpm exec vitest` gives watch mode.

## Coding Style & Naming Conventions
- TypeScript throughout; prefer function components with hooks. Add `"use client"` where a component needs the client runtime.
- Use PascalCase for React components and file names under `components/`; camelCase for variables/functions; UPPER_SNAKE_CASE for constants in `lib/constants.ts`.
- Keep modules small and colocate UI pieces with their CSS modules when styling is component-specific.
- Let Biome handle formatting (2-space indent, sorted imports); avoid manual tweaks that fight the linter.

## Testing Guidelines
- Vitest + @testing-library/* with jsdom. Add `*.test.tsx|ts` next to the code under test.
- Use `lib/test-utils.tsx` for Chakra-aware renders; prefer `screen` queries and user-facing selectors.
- Cover layout or validation changes with targeted assertions; favor meaningful expectations over snapshots.
- Run `pnpm test` and at least `pnpm lint` before pushing.

## Commit & Pull Request Guidelines
- Follow Conventional Commits seen in history (`feat:`, `fix:`, `chore(deps-...):`, `refactor:`). Keep scopes short and lowercase.
- PRs should include a concise summary, linked issue/PR, and before/after screenshots for UI tweaks.
- State which commands you ran (lint, test, build). Keep diffs focused; split unrelated changes into separate PRs.

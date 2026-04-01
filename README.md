# teitei-tk.com

![](https://github.com/teitei-tk/teitei-tk.com/workflows/Lint/badge.svg)

Next.js based My Portfolio Site.

https://teitei-tk.com

## Requirements

- Node.js 24.13.0 (see `.node-version`)
- pnpm 10.28.0

## Tech Stack

- Next.js 15
- React 19
- Chakra UI 3
- TypeScript 5

## Development

```bash
npm install -g pnpm@10.28.0
```

```bash
pnpm install
```

```bash
pnpm dev
```

## Scripts

- `pnpm dev`: start local dev server
- `pnpm build`: build production bundle (`output: "export"` -> `out/`)
- `pnpm start`: serve production build
- `pnpm lint`: Biome lint (auto-fix)
- `pnpm format`: Biome format (auto-fix)
- `pnpm test`: run Vitest once

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
- `pnpm lint`: Oxlint でリント
- `pnpm format`: Oxfmt で整形
- `pnpm format:check`: Oxfmt の整形チェック
- `pnpm check`: Oxlint と Oxfmt のチェック
- `pnpm fix`: Oxfmt で整形後、Oxlint の自動修正を実行
- `pnpm test`: run Vitest once

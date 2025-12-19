# teitei-tk.com

![](https://github.com/teitei-tk/teitei-tk.com/workflows/Lint/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/250d690b-ec88-4507-aa62-d8e730c48818/deploy-status)](https://app.netlify.com/sites/teitei-tkcom/deploys)

Next.js based My Portfolio Site.

https://teitei-tk.com

## Requirements

- Node.js 24.1.0 (see `.node-version`)
- npm

## Tech Stack

- Next.js 15
- React 19
- Chakra UI 3
- TypeScript 5

## Development

```bash
npm install
```

```bash
npm run dev
```

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: build production bundle (`output: "export"` -> `out/`)
- `npm run start`: serve production build
- `npm run lint`: Biome lint (auto-fix)
- `npm run format`: Biome format (auto-fix)
- `npm run test`: run Vitest once

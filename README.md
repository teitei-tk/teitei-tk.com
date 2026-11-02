# teitei-tk.com

![](https://github.com/teitei-tk/teitei-tk.com/workflows/Lint/badge.svg)

Next.js based My Portfolio Site.

https://teitei-tk.com

## Requirements

- Node.js 26.12.1 (see `.node-version`)
- pnpm 12.17.0

## Tech Stack

- Next.js 15
- React 19
- Chakra UI 3
- TypeScript 5

## Development

```bash
npm install -g pnpm@12.17.0
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

## GitHub Actions dependencies

ワークフローの依存アクションは `.github/workflows/actions.lock` でコミットに固定しています。
ワークフローの追加や `uses:` の変更後は、認証済みの GitHub CLI で再生成し、ワークフローと lockfile の差分を一緒にコミットしてください。
lockfile は手動編集しないでください。

```bash
gh extension install github/gh-actions-lock --pin v0.4.0
gh actions-lock
gh actions-lock --verify
```

`gh actions-lock` はメジャーバージョンのタグを具体的なバージョンのタグに変換します。
CI でも `--verify` により依存関係の不足や固定コミットの有効性を確認します。
オフラインで参照の網羅性だけを確認する場合は `gh actions-lock --verify-local` を使用できます。

既存の Dependabot 設定により、アクションのバージョン更新時には対応する lockfile も更新されます。
移動したタグやブランチの固定先を更新する場合は、上流の変更内容を確認してから `gh actions-lock --relock` を実行してください。

詳細は [GitHub の workflow lockfile ドキュメント](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles) を参照してください。

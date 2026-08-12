# Vite ツールチェーン更新設計

## 目的

Vite 8 へ更新し、テスト環境を構成する Vitest と React プラグインも互換性のある最新バージョンへ揃える。

## 変更範囲

- `vite` を `^8.2.1` へ更新する。
- `vitest` を `^4.1.10` へ更新する。
- `@vitejs/plugin-react` を `^6.0.5` へ更新する。
- pnpm で依存関係を解決し、`pnpm-lock.yaml` を更新する。
- アプリケーションコードや Vitest 設定は、互換性問題が実際に発生した場合のみ最小限変更する。

## 互換性

- プロジェクトの Node.js 24.13.0 は Vite 8.2.1 の要件を満たす。
- Vitest 4.1.10 は Vite 8 を peer dependency としてサポートする。
- `@vitejs/plugin-react` 6.0.5 は Vite 8 を peer dependency として要求するため、Vite と同時に更新する。

## 実装とエラー対応

`package.json` の3依存を更新後、pnpm で lockfile を再生成する。依存解決、テスト、lint・format、Next.js ビルドの順に検証する。失敗した場合はログから更新との因果関係を切り分け、更新に必要な修正だけを行う。

## 検証

以下を実行し、すべて成功することを完了条件とする。

1. `pnpm install`
2. `pnpm test`
3. `pnpm check`
4. `pnpm build`

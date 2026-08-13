# React エコシステム更新設計

## 目的

React と React DOM を最新の安定版へ更新し、直接連動する UI・型定義・テスト関連パッケージも互換性のある最新版へ揃える。

## 変更範囲

以下の依存宣言と `pnpm-lock.yaml` を更新する。

- `react`、`react-dom`: `^19.2.8`
- `@types/react`: `^19.2.18`
- `@types/react-dom`: `^19.2.4`
- `@chakra-ui/react`: `^3.36.1`
- `framer-motion`: `^13.1.0`
- `react-icons`: `^5.7.0`
- `@testing-library/dom`: `^10.4.1`
- `@testing-library/react`: `^16.3.2`
- `@testing-library/jest-dom`: `^7.0.1`
- `jsdom`: `^30.0.1`
- `@types/node`: `^26.2.0`

`next` と `@next/third-parties` は現行の `16.3.0` が最新であるため変更しない。`@emotion/react` と `@emotion/styled` も現行が最新であるため変更しない。Oxlint、Oxfmt、Lefthook など、React と直接連動しない開発ツールは今回の対象外とする。

## 互換性

- `react` と `react-dom` は同じ `19.2.8` に揃える。
- `framer-motion` 13.1.0 は React 18・19を peer dependency としてサポートする。
- Chakra UI 3.36.1 は React 18以上、React DOM 18以上、Emotion 11以上をサポートする。
- Testing Library React 16.3.2 は React 18・19と Testing Library DOM 10をサポートする。
- Testing Library Jest DOM 7.0.1 は Testing Library DOM 10と Vitest 0.32以上をサポートする。現行の Vitest 4.1.10 は要件を満たす。
- jsdom 30.0.1 は Node.js `^22.22.2 || ^24.15.0 || >=26.0.0` を要求する。プロジェクトの Node.js 26.7.0 は要件を満たす。
- Node.js 26.7.0 に合わせ、Node.js 型定義を26系へ更新する。

## 実装方針

更新前に現行依存でテスト結果を確認する。対象パッケージをまとめて更新し、pnpm で lockfile を再生成する。アプリケーションコード、テスト、設定ファイルは、更新による互換性問題が実際に発生した場合のみ必要最小限変更する。

メジャー更新を含むため、失敗時は更新前の結果と比較し、React、Framer Motion、Testing Library Jest DOM、jsdom のどの変更に起因するかをログと型エラーから切り分ける。今回の依存更新と無関係なリファクタリングは行わない。

## 検証

Node.js 26.7.0 と pnpm 10.28.0 を使用し、以下がすべて成功することを完了条件とする。

1. 更新前の `pnpm test`
2. 更新後の `pnpm install`
3. `pnpm install --frozen-lockfile`
4. `pnpm test`
5. `pnpm check`
6. `pnpm build`
7. `git diff --check`


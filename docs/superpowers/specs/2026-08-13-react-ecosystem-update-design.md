# React エコシステム更新設計

## 目的

React と React DOM を最新の安定版へ更新し、直接連動する UI・型定義・テスト関連パッケージも互換性のある最新版へ揃える。

## 変更範囲

以下の依存宣言と `pnpm-lock.yaml` を更新する。

- `react`、`react-dom`: `^19.2.8`
- `@types/react`: `^19.2.18`
- `@types/react-dom`: `^19.2.4`
- `@chakra-ui/react`: `^3.36.1`
- `react-icons`: `^5.7.0`
- `@testing-library/dom`: `^10.4.1`
- `@testing-library/react`: `^16.3.2`
- `@testing-library/jest-dom`: `^7.0.1`
- `jsdom`: `^30.0.1`
- `@types/node`: `^26.2.0`

ソースコードから参照されておらず、他の直接依存からも要求されていない `framer-motion` は削除する。将来アニメーションが必要になった時点で、その時点の推奨パッケージと API を改めて選定する。

`next` と `@next/third-parties` は現行の `16.3.0` が最新であるため変更しない。`@emotion/react` と `@emotion/styled` も現行が最新であるため変更しない。Oxlint、Oxfmt、Lefthook など、React と直接連動しない開発ツールは今回の対象外とする。

## 互換性

- `react` と `react-dom` は同じ `19.2.8` に揃える。
- Chakra UI 3.36.1 は React 18以上、React DOM 18以上、Emotion 11以上をサポートする。
- Testing Library React 16.3.2 は React 18・19と Testing Library DOM 10をサポートする。
- Testing Library Jest DOM 7.0.1 は Testing Library DOM 10と Vitest 0.32以上をサポートする。現行の Vitest 4.1.10 は要件を満たす。
- jsdom 30.0.1 は Node.js `^22.22.2 || ^24.15.0 || >=26.0.0` を要求する。プロジェクトの Node.js 26.7.0 は要件を満たす。
- Node.js 26.7.0 に合わせ、Node.js 型定義を26系へ更新する。

## 実装方針

更新前に現行依存でテスト、静的検査、型検査、ビルドの結果を確認する。対象パッケージをまとめて更新し、未使用の `framer-motion` を削除して、pnpm で lockfile を再生成する。アプリケーションコード、テスト、設定ファイルは、更新による互換性問題が実際に発生した場合のみ必要最小限変更する。

メジャー更新を含むため、失敗時は更新前の結果と比較し、React、Testing Library Jest DOM、jsdom のどの変更に起因するかをログと型エラーから切り分ける。今回の依存更新と無関係なリファクタリングは行わない。

jsdom 30では CSS API と `getComputedStyle()` が改善されているため、`vitest.setup.ts` で `window.CSS` と `window.getComputedStyle` を置換している回避処理、および CSS パースエラーを握り潰す処理を一度外してテストする。回避処理が引き続き必要な場合は、再現する問題と対象 API を特定し、影響範囲を限定した処理だけを戻す。

Testing Library Jest DOM 7への更新時は、`@testing-library/jest-dom/vitest` の読み込みに加えて行っている手動の `expect.extend()` と、`types/jest.d.ts` の独自型拡張が必要か確認する。公式の Vitest 向け設定だけでテストと型検査が通る場合は重複設定を削除する。

Chakra UI の更新は型検査やユニットテストだけでは表示回帰を検出できないため、更新後のプロダクションビルドをブラウザで開き、デスクトップ幅とモバイル幅でトップページのレイアウト、テキスト、アイコン、外部リンク、ブラウザコンソールを確認する。

## 検証

Node.js 26.7.0 と pnpm 10.28.0 を使用し、以下がすべて成功することを完了条件とする。

1. 更新前の `pnpm test`
2. 更新前の `pnpm check`
3. 更新前の `pnpm exec tsc --noEmit`
4. 更新前の `pnpm build`
5. 更新後の `pnpm install`
6. `pnpm install --frozen-lockfile`
7. `pnpm test`
8. `pnpm check`
9. `pnpm exec tsc --noEmit`
10. `pnpm build`
11. プロダクションビルドのブラウザ表示とコンソール確認
12. `git diff --check`

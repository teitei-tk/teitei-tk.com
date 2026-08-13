# React Ecosystem Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** React、UIライブラリ、型定義、テスト環境を互換性のある最新版へ更新し、未使用依存と不要なテスト回避処理を除去する。

**Architecture:** まず Node.js 26.7.0 上で現行依存のベースラインを記録する。次に直接依存と lockfile を一括更新し、その変更とは別に jsdom 30 と Jest DOM 7で不要になったテスト設定を簡素化する。最後に静的検査、型検査、プロダクションビルド、ブラウザ表示を検証する。

**Tech Stack:** Node.js 26.7.0、pnpm 10.28.0、Next.js 16.3.0、React 19.2.8、Chakra UI 3.36.1、Vitest 4.1.10、jsdom 30.0.1

## Global Constraints

- `react` と `react-dom` は `^19.2.8` に揃える。
- `@types/react` は `^19.2.18`、`@types/react-dom` は `^19.2.4` にする。
- `@chakra-ui/react` は `^3.36.1`、`react-icons` は `^5.7.0` にする。
- `@testing-library/dom` は `^10.4.1`、`@testing-library/react` は `^16.3.2`、`@testing-library/jest-dom` は `^7.0.1` にする。
- `jsdom` は `^30.0.1`、`@types/node` は `^26.2.0` にする。
- 未使用の `framer-motion` は削除する。
- `next`、`@next/third-parties`、Emotion、Vitest、Viteは変更しない。
- アプリケーションコードは、更新に起因する失敗が確認された場合だけ最小限変更する。Next.jsコードを変更する場合は、先に `node_modules/next/dist/docs/` の該当ガイドを読む。
- `next.config.ts` は型エラーを無視する設定のため、`pnpm exec tsc --noEmit` を独立した完了条件とする。

---

### Task 1: 更新前ベースラインの記録

**Files:**

- Inspect: `package.json`
- Inspect: `pnpm-lock.yaml`
- Inspect: `vitest.setup.ts`
- Inspect: `types/jest.d.ts`

**Interfaces:**

- Consumes: Node.js 26.7.0、pnpm 10.28.0、現行の lockfile
- Produces: 更新後の結果と比較できるテスト・静的検査・型検査・ビルド結果

- [ ] **Step 1: 実行環境を確認する**

Run: `node --version && pnpm --version`

Expected: Node.js は `v26.7.0`、pnpm は `10.28.0` と表示される。

- [ ] **Step 2: 現行テストを実行する**

Run: `pnpm test`

Expected: 全 Vitest テストが成功する。失敗した場合は更新前から存在する問題としてコマンドとエラーを記録し、依存更新を開始しない。

- [ ] **Step 3: 現行の静的検査を実行する**

Run: `pnpm check`

Expected: Oxlint と Oxfmt の検証が成功する。

- [ ] **Step 4: 現行の型検査を実行する**

Run: `pnpm exec tsc --noEmit`

Expected: TypeScriptエラーなしで終了する。

- [ ] **Step 5: 現行のプロダクションビルドを実行する**

Run: `pnpm build`

Expected: Next.jsの静的エクスポートが成功し、`out/` が生成される。

### Task 2: Reactエコシステムの依存更新

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

**Interfaces:**

- Consumes: npm registry上の対象パッケージと、Task 1の成功したベースライン
- Produces: Node.js 26.7.0とpnpm 10.28.0で再現可能な更新済み依存グラフ

- [ ] **Step 1: production dependencyを更新する**

Run: `pnpm add react@19.2.8 react-dom@19.2.8 @types/react@19.2.18 @types/react-dom@19.2.4 @chakra-ui/react@3.36.1 react-icons@5.7.0`

Expected: `package.json` の各指定が対応する `^` 付きバージョンになり、`pnpm-lock.yaml` が更新される。

- [ ] **Step 2: test・Node関連のdevDependencyを更新する**

Run: `pnpm add -D @testing-library/dom@10.4.1 @testing-library/react@16.3.2 @testing-library/jest-dom@7.0.1 jsdom@30.0.1 @types/node@26.2.0`

Expected: 5件が `devDependencies` の対応する `^` 付きバージョンになり、peer dependencyエラーなく解決される。

- [ ] **Step 3: 未使用のFramer Motionを削除する**

Run: `pnpm remove framer-motion`

Expected: `package.json` と `pnpm-lock.yaml` から `framer-motion` の直接依存と不要になった推移依存が削除される。

- [ ] **Step 4: frozen lockfileで依存解決を検証する**

Run: `pnpm install --frozen-lockfile`

Expected: lockfileの変更要求とpeer dependencyエラーなしで終了する。

- [ ] **Step 5: 更新済みの直接依存を確認する**

Run: `pnpm list --depth 0`

Expected: Global Constraintsの各バージョンが表示され、`framer-motion` が表示されない。

- [ ] **Step 6: テストを実行して依存更新単体を検証する**

Run: `pnpm test`

Expected: Task 1と同じ全テストが成功する。失敗した場合は `superpowers:systematic-debugging` を使用し、依存更新に必要な修正だけを行う。

- [ ] **Step 7: 依存差分を検査する**

Run: `git diff --check && git diff -- package.json pnpm-lock.yaml`

Expected: whitespace errorがなく、指定した更新・削除とlockfileの解決結果だけが含まれる。

- [ ] **Step 8: 依存更新をコミットする**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore(deps): update React ecosystem"
```

### Task 3: jsdom・Jest DOMテスト設定の簡素化

**Files:**

- Modify: `vitest.setup.ts`
- Delete: `types/jest.d.ts`

**Interfaces:**

- Consumes: Task 2のjsdom 30.0.1、Testing Library Jest DOM 7.0.1、Vitest 4.1.10
- Produces: Jest DOMのVitest用公式エントリだけを使い、ブラウザAPIを上書きしないテスト初期化

- [ ] **Step 1: Jest DOM初期化とCSS回避処理を置き換える**

Replace all contents of `vitest.setup.ts` with:

```ts
import "@testing-library/jest-dom/vitest";
```

Expected: 重複した `expect.extend()`、`window.CSS` と `window.getComputedStyle` の上書き、`console.error` のフィルタが削除される。

- [ ] **Step 2: 独自のJest型拡張を削除する**

Delete: `types/jest.d.ts`

Expected: Jest DOMの型は `tsconfig.json` の `types` にある `@testing-library/jest-dom` とVitest用エントリから提供される。

- [ ] **Step 3: テストを実行する**

Run: `pnpm test`

Expected: CSSパースエラーを含むconsole errorが出ず、全テストが成功する。失敗した場合は `superpowers:systematic-debugging` で原因を特定し、グローバルな `CSS = null` や `getComputedStyle` スタブは戻さない。

- [ ] **Step 4: Jest DOM matcherの型を検証する**

Run: `pnpm exec tsc --noEmit`

Expected: `toBeInTheDocument`、`toHaveAttribute`、`toHaveClass` を含め、型エラーなしで終了する。

- [ ] **Step 5: 設定差分を検査する**

Run: `git diff --check && git diff -- vitest.setup.ts types/jest.d.ts`

Expected: `vitest.setup.ts` が公式エントリのimport 1行だけになり、独自型定義だけが削除される。

- [ ] **Step 6: テスト設定の整理をコミットする**

```bash
git add vitest.setup.ts types/jest.d.ts
git commit -m "test: simplify jsdom setup"
```

### Task 4: 全体回帰とブラウザ表示の検証

**Files:**

- Inspect: `package.json`
- Inspect: `pnpm-lock.yaml`
- Inspect: `vitest.setup.ts`
- Inspect: `out/`

**Interfaces:**

- Consumes: Task 2・3のコミット済み依存グラフとテスト設定
- Produces: CI、型検査、静的エクスポート、実ブラウザ表示が成功した検証記録

- [ ] **Step 1: CI相当の依存解決を再確認する**

Run: `pnpm install --frozen-lockfile`

Expected: 変更なしで成功する。

- [ ] **Step 2: 全テストを実行する**

Run: `pnpm test`

Expected: 全 Vitestテストが成功する。

- [ ] **Step 3: 静的検査を実行する**

Run: `pnpm check`

Expected: Oxlint と Oxfmt の検証が成功する。

- [ ] **Step 4: 型検査を実行する**

Run: `pnpm exec tsc --noEmit`

Expected: TypeScriptエラーなしで終了する。

- [ ] **Step 5: プロダクションビルドを実行する**

Run: `pnpm build`

Expected: Next.jsの静的エクスポートが成功し、`out/` が生成される。

- [ ] **Step 6: 静的ビルドをローカル配信する**

Run: `python3 -m http.server 4173 --directory out`

Expected: `http://127.0.0.1:4173/` でトップページを開ける。検証後にサーバーを終了する。

- [ ] **Step 7: デスクトップ表示を確認する**

Open: `http://127.0.0.1:4173/` at desktop viewport.

Expected: プロフィール、Accounts、Blogs、Contact、各アイコンと外部リンクが表示され、横方向の意図しないoverflowとブラウザコンソールエラーがない。

- [ ] **Step 8: モバイル表示を確認する**

Open: `http://127.0.0.1:4173/` at mobile viewport.

Expected: コンテンツが画面幅内に収まり、テキスト・アイコン・外部リンクが欠落せず、ブラウザコンソールエラーがない。

- [ ] **Step 9: 最終差分と作業ツリーを確認する**

Run: `git diff --check && git status --short --branch`

Expected: whitespace errorがなく、未コミットの実装差分がなく、設計・計画・依存更新・テスト設定整理のコミットだけが現在のブランチに追加されている。

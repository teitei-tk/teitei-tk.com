# Vite Toolchain Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Vite、Vitest、React plugin を互換性のある最新安定版へ更新し、既存のテスト・CI・ビルドが継続して動作する状態にする。

**Architecture:** `package.json` の直接 devDependency 3件を同時に更新し、pnpm で `pnpm-lock.yaml` を再生成する。設定変更は検証で互換性問題が確認された場合だけ行う。

**Tech Stack:** Node.js 24.13.0、pnpm 10.28.0、Vite 8.2.1、Vitest 4.1.10、`@vitejs/plugin-react` 6.0.5、Next.js 16.3.0

## Global Constraints

- `vite` は `^8.2.1` にする。
- `vitest` は `^4.1.10` にする。
- `@vitejs/plugin-react` は `^6.0.5` にする。
- アプリケーションコードと `vitest.config.mts` は、更新に起因する失敗を確認した場合だけ最小限変更する。
- `pnpm install --frozen-lockfile` を含め、CI と同等の依存解決を検証する。

---

### Task 1: Vite ツールチェーンの更新と回帰検証

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Conditionally modify: `vitest.config.mts`

**Interfaces:**
- Consumes: npm registry 上の `vite@8.2.1`、`vitest@4.1.10`、`@vitejs/plugin-react@6.0.5`
- Produces: Node.js 24.13.0 と pnpm 10.28.0 で再現可能な依存グラフ

- [ ] **Step 1: 更新前のテスト結果を記録する**

Run: `pnpm test`

Expected: 現行依存で全 Vitest テストが成功する。失敗する場合は更新前から存在する問題として記録し、更新後の結果と区別する。

- [ ] **Step 2: 3件の devDependency を同時に更新する**

Run: `pnpm add -D vite@8.2.1 vitest@4.1.10 @vitejs/plugin-react@6.0.5`

Expected: `package.json` の指定がそれぞれ `^8.2.1`、`^4.1.10`、`^6.0.5` になり、`pnpm-lock.yaml` が更新される。

- [ ] **Step 3: CI と同じ frozen lockfile 条件を確認する**

Run: `pnpm install --frozen-lockfile`

Expected: lockfile の変更要求や peer dependency エラーなしで終了する。

- [ ] **Step 4: Vite を使用する既存テストを実行する**

Run: `pnpm test`

Expected: 全 Vitest テストが成功する。失敗した場合は更新前の同一テスト結果と比較し、Vite 8 または plugin-react 6 に起因する場合だけ設定を修正する。

- [ ] **Step 5: 静的検証を実行する**

Run: `pnpm check`

Expected: Oxlint と Oxfmt の検証が成功する。

- [ ] **Step 6: Next.js の回帰ビルドを実行する**

Run: `pnpm build`

Expected: lint と Next.js production build が成功する。

- [ ] **Step 7: 差分を検査する**

Run: `git diff --check && git diff -- package.json pnpm-lock.yaml vitest.config.mts`

Expected: whitespace error がなく、差分が依存更新と必要最小限の互換性修正に限定されている。

- [ ] **Step 8: 実装をコミットする**

```bash
git add package.json pnpm-lock.yaml vitest.config.mts
git commit -m "chore(deps-dev): update Vite toolchain"
```

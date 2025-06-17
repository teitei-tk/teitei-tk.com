# CLAUDE.md

このファイルは、Claude Code（claude.ai/code）が本リポジトリのコードを扱う際のガイドラインを示します。

---

## プロジェクト概要

Next.js 14、TypeScript、Chakra UI を用いて構築した個人ポートフォリオサイトです。サイトは静的にエクスポートされ、Netlify へデプロイされます。

---

## 開発コマンド

- `npm run dev` … 開発サーバーを起動
- `npm run build` … 本番ビルド（静的エクスポート）
- `npm run start` … 本番サーバーを起動
- `npm run test` … Vitest でテスト実行
- `npm run lint` … Biome でコードをリント
- `npm run format` … Biome でコードを整形
- `npm run check` または `npm run fix` … Biome のリント＆整形を一括実行

---

## 🧑‍💻 開発ルール

### 1. TDD（テスト駆動開発）を徹底する

コードを生成するときは必ず対応するユニットテストも生成し、`npm run test` がパスすることを確認する。

```
    // 例 – 足し算関数とテスト
    function add(a: number, b: number) {
      return a + b;
    }

    test('1+2=3', () => {
      expect(add(1, 2)).toBe(3);
    });
  ```

### 2. 各ファイル冒頭に仕様コメントを記述する
```
    /**
     * 2 点間のユークリッド距離を計算する
     */
    type Point = { x: number; y: number };
    export function distance(a: Point, b: Point): number {
      return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }
```

### 3. テストは実装と同じファイルに記述する（Vitest）

```
    export function distance(a: Point, b: Point): number {
      /* ... */
    }

    if (import.meta.vitest) {
      const { test, expect } = import.meta.vitest;
      test('ユークリッド距離を計算する', () => {
        const result = distance({ x: 0, y: 0 }, { x: 3, y: 4 });
        expect(result).toBe(5);
      });
    }
```

### 4. コミットメッセージは Conventional Commits 形式を採用する

- `feat:` … 新機能
- `fix:` … バグ修正
- `docs:` … ドキュメント更新
- `style:` … コードフォーマットのみ
- `refactor:` … リファクタリング
- `test:` … テスト追加・修正
- `chore:` … ビルド・設定関連

---

## アーキテクチャ

- **フレームワーク**: Next.js 14（静的エクスポート設定 `output: "export"`）
- **UI ライブラリ**: Chakra UI v3（Emotion 使用）
- **テスト**: Vitest + Testing Library + jsdom
- **リント/フォーマット**: Biome（ESLint / Prettier の代替）
- **ビルドツール**: Next.js 内蔵 webpack
- **パッケージマネージャー**: npm

---

## ディレクトリ構成

```
    src/
    ├─ pages/                 # Next.js ページ（getStaticProps で静的データ）
    ├─ components/            # 再利用可能な React コンポーネント
    │  └─ page/index/         # ホームページ専用コンポーネント
    ├─ styles/components/     # CSS Modules（細かいスタイル調整）
    ├─ types/                 # TypeScript 型定義
    __tests__/                # src と同構成のテスト
    public/static/            # 静的アセット（ファビコン等）
```

---

## 主要パターン

- `getStaticProps` にハードコードしたデータを用いる静的サイト生成
- Chakra UI コンポーネントは TypeScript で実装
- 細かいスタイル調整は CSS Modules で対応
- パスエイリアス `@/*` は `src/*` を指す
- コンポーネントの props は TypeScript インターフェースで明示的に型付け

---

## テスト

- jsdom 環境で Vitest を利用
- React コンポーネントのテストは Testing Library を使用
- テストは `__tests__/` または実装ファイル内に記述可能
- セットアップファイル: `vitest.setup.ts`
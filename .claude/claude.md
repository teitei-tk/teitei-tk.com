# Claude AI プロジェクト設定

このディレクトリは Claude AI がプロジェクトを理解するための設定ファイルを格納します。

## 設定ファイル

- `claude.md` - Claude AI 用のプロジェクト概要とガイドライン
- `project-context.md` - プロジェクトのコンテキスト情報

## プロジェクト概要

Next.js 14 + TypeScript + Chakra UI を使用した個人ポートフォリオサイト

### 主要技術
- **フレームワーク**: Next.js 14 (静的エクスポート)
- **言語**: TypeScript
- **UI**: Chakra UI v3
- **テスト**: Vitest + Testing Library
- **リント**: Biome
- **デプロイ**: Netlify

### 開発コマンド
```bash
yarn dev      # 開発サーバー起動
yarn build    # 本番ビルド
yarn test     # テスト実行
yarn lint     # リント実行
yarn format   # コード整形
```

### 重要なパターン
- 静的サイト生成 (`getStaticProps`)
- TypeScript での型安全性
- CSS Modules + Chakra UI
- TDD アプローチ
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  moduleNameMapper: {
    // CSSモジュールのモック
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    // 静的ファイルのモック
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

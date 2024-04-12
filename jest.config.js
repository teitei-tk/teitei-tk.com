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
		"^@/(.*)$": "<rootDir>/src/$1",
		// CSSモジュールのモック
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
		// 静的ファイルのモック
		"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
	},
	transform: {
		// https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
	},
};

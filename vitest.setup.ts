import "@testing-library/jest-dom/vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

// jsdomのCSS関連エラーを抑制
Object.defineProperty(window, "CSS", { value: null });
Object.defineProperty(window, "getComputedStyle", {
	value: () => ({
		getPropertyValue: () => "",
	}),
});

// jsdomのスタイルシート関連エラーを抑制
const originalError = console.error;
console.error = (...args) => {
	if (
		typeof args[0] === "string" &&
		args[0].includes("Could not parse CSS stylesheet")
	) {
		return;
	}
	originalError.call(console, ...args);
};

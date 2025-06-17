import type { expect } from "@jest/globals";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "expect" {
	interface Matchers<R extends void | Promise<void>, T = unknown>
		extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

interface ImportMeta {
	vitest?: {
		describe: any;
		it: any;
		expect: any;
	};
}

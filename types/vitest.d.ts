import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

import "vitest";

// jest-dom 7.0.1 augments the pre-Vitest 5 Assertion interface.
declare module "vitest" {
	interface Matchers<R, T> extends TestingLibraryMatchers<T, R> {}
}

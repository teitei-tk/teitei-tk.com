import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": projectRoot,
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		include: [
			"app/**/*.{test,spec}.{js,ts,jsx,tsx}",
			"components/**/*.{test,spec}.{js,ts,jsx,tsx}",
			"lib/**/*.{test,spec}.{js,ts,jsx,tsx}",
		],
	},
});

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
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

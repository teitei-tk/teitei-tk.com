import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		includeSource: ["app/**/*.{js,ts,jsx,tsx}", "components/**/*.{js,ts,jsx,tsx}", "lib/**/*.{js,ts,jsx,tsx}"],
	},
	define: {
		"import.meta.vitest": process.env.NODE_ENV === "test" ? true : "undefined",
	},
	resolve: {
		alias: {
			"@/components": path.resolve(__dirname, "components"),
			"@/lib": path.resolve(__dirname, "lib"),
			"@/types": path.resolve(__dirname, "types"),
			"@/styles": path.resolve(__dirname, "styles"),
			"@/app": path.resolve(__dirname, "app"),
		},
	},
});

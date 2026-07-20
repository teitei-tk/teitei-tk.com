import type { NextConfig } from "next";

import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@": projectRoot,
		};
		return config;
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				"import.meta.vitest": "undefined",
			}),
		);
		return config;
	},
};

export default nextConfig;

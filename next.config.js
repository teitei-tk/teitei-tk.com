const nextConfig = {
	output: "export",
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				"import.meta.vitest": "undefined",
			})
		);
		return config;
	},
};

export default nextConfig;

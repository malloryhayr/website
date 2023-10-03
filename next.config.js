/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: false,
	webpack(webpackConfig) {
		return {
			...webpackConfig,
			optimization: {
				minimize: false,
			},
		};
	},
};

module.exports = nextConfig;

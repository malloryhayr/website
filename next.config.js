/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	images: {
		domains: ['lastfm.freetls.fastly.net'],
	},
};

module.exports = nextConfig;

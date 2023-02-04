/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	images: {
		domains: [
			'lastfm.freetls.fastly.net',
			'cdn2.steamgriddb.com',
			'steamcdn-a.akamaihd.net',
		],
	},
};

module.exports = nextConfig;

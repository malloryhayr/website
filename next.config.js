/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.ytimg.com",
			},
			{
				protocol: "https",
				hostname: "*.fastly.net",
			},
		],
	},
};

module.exports = nextConfig;

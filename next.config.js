/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.ytimg.com",
			},
		],
	},
};

module.exports = nextConfig;

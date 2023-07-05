import { headers } from 'next/headers';

export default function Head() {
	const headersList = headers();

	const description = `Mallory — trans software engineer, game designer, & creator`;

	return (
		<>
			<meta charSet="utf-8" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />

			<meta property="og:title" content="igalaxy.dev" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://igalaxy.dev" />
			<meta property="twitter:url" content="https://igalaxy.dev" />
			<title>{headersList.get('host')}</title>

			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta property="twitter:description" content={description} />
			<meta
				name="keywords"
				content="iGalaxy, Mallory, Mallory Hayr, software engineer, game designer, creator"
			/>
			<meta name="author" content="Mallory Hayr" />

			<meta name="theme-color" content="#0A000A" />
		</>
	);
}

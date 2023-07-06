import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
});

import { Metadata } from 'next';
import { headers } from 'next/headers';

import './(style)/global.scss';

import NavLink from './(components)/NavLink';
import Image from 'next/image';

import Logo from './apple-icon.png';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={jetbrainsMono.className}>
			<body>
				<nav>
					<div>
						<Image src={Logo} width={32} height={32} alt="icon" />
						<p>Mallory's observatory</p>
					</div>
					<ul>
						<NavLink route="" first />
						<NavLink route="data" />
						<NavLink route="projects" />
						<NavLink route="videos" />
						<NavLink route="blog" />
					</ul>
				</nav>
				<main>{children}</main>
			</body>
		</html>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const headersList = headers();
	const hostname = headersList.get('host')!;

	const title = "Mallory's observatory";
	const description = `trans, student, software engineer, aspiring physicist & astronomer, Minecraft enthusiast`;

	return {
		metadataBase: new URL(`https://${hostname}`),
		title,
		description,
		viewport: { width: 'device-width', initialScale: 1 },
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${hostname}`,
		},
		twitter: {
			title,
			description,
			creator: '@_iGalaxyYT',
		},
		keywords: [
			'iGalaxy',
			'Mallory',
			'Mallory Hayr',
			'software engineer',
			'game designer',
			'creator',
			'igalaxy.dev',
			'mallory.rs',
			'wii.mom',
			'starship.mom',
			'observatory.mom',
		],
		authors: [
			{
				name: 'Mallory Hayr',
				url: 'https://igalaxy.dev',
			},
		],
		themeColor: '#4866ab',
	};
}

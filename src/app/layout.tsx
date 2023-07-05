import StyledComponentsRegistry from '@/lib/registry';

import 'react-tooltip/dist/react-tooltip.css';
import './globals.scss';
import './tooltip.scss';

import NavLink from './NavLink';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { Metadata, ResolvingMetadata } from 'next';
import { headers } from 'next/headers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	dayjs.extend(duration);
	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);

	return (
		<html lang="en">
			<head />
			<body>
				<nav style={{ display: 'flex' }}>
					<NavLink route="" />
					<NavLink route="data" />
					<NavLink route="projects" />
					<NavLink route="blog" />
				</nav>
				<StyledComponentsRegistry>
					<main>
						<br />
						{children}
					</main>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}

export async function generateMetadata(
	props: {
		params: { id: string };
		searchParams: { [key: string]: string | string[] | undefined };
	},
	parent?: ResolvingMetadata
): Promise<Metadata> {
	const headersList = headers();

	const title = headersList.get('host')!;
	const description = `Mallory — trans software engineer, game designer, & creator`;

	return {
		title,
		description,
		viewport: { width: 'device-width', initialScale: 1 },
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${title}`,
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
		themeColor: '#0A000A',
	};
}

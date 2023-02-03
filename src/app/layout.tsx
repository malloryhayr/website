import StyledComponentsRegistry from '@/lib/registry';

import 'react-tooltip/dist/react-tooltip.css';
import './globals.scss';
import './tooltip.scss';

import NavLink from './NavLink';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	dayjs.extend(duration);

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

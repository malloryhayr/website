import StyledComponentsRegistry from '@/lib/registry';

import 'react-tooltip/dist/react-tooltip.css';
import './globals.scss';
import './tooltip.scss';

import NavLink from './NavLink';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	dayjs.extend(duration);
	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);
	dayjs.extend(isoWeeksInYear);
	dayjs.extend(isLeapYear);

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

import StyledComponentsRegistry from '@/lib/registry';

import './globals.scss';

import NavLink from './NavLink';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<nav style={{ display: 'flex' }}>
					<NavLink route="" />
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

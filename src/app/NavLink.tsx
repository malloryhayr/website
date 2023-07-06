'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
	route,
	first = false,
}: {
	route: string;
	first?: boolean;
}) {
	const pathname = usePathname();

	return (
		<li style={first ? { paddingLeft: '0px', borderLeft: 'none' } : {}}>
			<Link
				href={`/${route}`}
				className={pathname == `/${route}` ? 'navLink active' : 'navLink'}
			>
				{route == '' ? 'home' : route}
			</Link>
		</li>
	);
}

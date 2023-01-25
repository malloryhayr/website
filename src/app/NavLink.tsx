'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ route }: { route: string }) {
	const pathname = usePathname();

	return (
		<p>
			<Link
				href={`/${route}`}
				className={pathname == `/${route}` ? 'navLink active' : 'navLink'}
			>
				{route == '' ? 'home' : route}
			</Link>
		</p>
	);
}

import Link from "next/link";
import { PropsWithChildren } from "react";

export default function NavItems() {
	return (
		<ul>
			<NavItem href="/">about</NavItem>
			<NavItem href="/shelf">shelf</NavItem>
			<NavItem href="/projects">projects</NavItem>
			<NavItem href="/writing">writing</NavItem>
		</ul>
	);
}

interface NavItemProps {
	href: string;
}

export function NavItem({ href, children }: PropsWithChildren<NavItemProps>) {
	return (
		<li>
			<Link href={href} className="navItem">
				{children}
			</Link>
		</li>
	);
}

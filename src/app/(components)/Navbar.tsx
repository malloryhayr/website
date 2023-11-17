import Logo from "./Logo";
import NavItems from "./NavItems";

export default function Navbar() {
	return (
		<nav>
			<div>
				<div>
					<Logo />
					<h1>Mallory's observatory</h1>
				</div>
				<NavItems />
			</div>
		</nav>
	);
}

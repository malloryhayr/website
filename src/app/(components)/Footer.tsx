import MonochromeLogo from "./MonochromeLogo";
import NavItems from "./NavItems";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div>
				<MonochromeLogo color="var(--color-header-secondary)" />
				<h3>Mallory's observatory</h3>
				<p>© 2023{year != 2023 ? `—${year}` : ""} Mallory Hayr</p>
			</div>
			<div>
				<NavItems />
			</div>
		</footer>
	);
}

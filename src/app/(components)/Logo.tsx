import Image from "next/image";

import logo from "../apple-icon.png";

export default function Logo() {
	return (
		<Image
			src={logo}
			alt="Observatory logo"
			style={{ width: "3em", height: "3em" }}
		/>
	);
}

import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";

import "./(style)/global.scss";
import Navbar from "./(components)/Navbar";

export async function generateMetadata(): Promise<Metadata> {
	const headersList = headers();
	const hostname = headersList.get("host")!;

	const title = "Mallory's observatory";
	const description = `student, software engineer, game designer, physics enjoyer, Minecraft enthusiast`;

	return {
		metadataBase: new URL(`https://${hostname}`),
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://${hostname}`,
		},
		twitter: {
			title,
			description,
			creator: "@_iGalaxyYT",
		},
		keywords: [
			"iGalaxy",
			"Mallory",
			"Mallory Hayr",
			"software engineer",
			"game designer",
			"creator",
			"igalaxy.dev",
			"mallory.rs",
			"wii.mom",
			"starship.mom",
			"observatory.mom",
		],
		authors: [
			{
				name: "Mallory Hayr",
				url: "https://mallory.rs",
			},
		],
	};
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#4866ab",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

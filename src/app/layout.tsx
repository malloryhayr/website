import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";

import { Rubik } from "next/font/google";
import localFont from "next/font/local";

import "./(style)/global.scss";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

export const rubik = Rubik({ subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
	const headersList = headers();
	const hostname = headersList.get("host")!;

	const title = "Mallory's observatory";
	const description = `student, computer scientist, game designer, Minecraft enthusiast`;

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
			"igalaxy.dev",
			"mallory.rs",
			"wii.mom",
		],
		authors: [
			{
				name: "Mallory Hayr",
				url: "https://igalaxy.dev",
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
		<html lang="en" className={rubik.className}>
			<head />
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

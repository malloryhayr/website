import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
	const headersList = headers();
	const hostname = headersList.get("host")!;

	const title = "Mallory's observatory";
	const description = `student, software engineer, game designer, physics enjoyer, Minecraft enthusiast`;

	return {
		metadataBase: new URL(`https://${hostname}`),
		title,
		description,
		viewport: { width: "device-width", initialScale: 1 },
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
		themeColor: "#4866ab",
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

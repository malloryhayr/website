import { SiYoutube } from "@icons-pack/react-simple-icons";

import { XMLParser } from "fast-xml-parser";
import Link from "next/link";

export default async function YouTube() {
	const youtubeVideos = (await getYoutube()).feed.entry;

	return (
		<div
			style={{
				background: "linear-gradient(to bottom, #9b846d, #66472a)",
				padding: "6px",
				borderRadius: "2.25em",
				marginTop: "1em",
			}}
		>
			<div
				style={{
					background: "linear-gradient(to bottom, #72491f, #896342)",
					padding: "10px",
					borderRadius: "calc(2.25em - 6px)",
				}}
			>
				<main
					style={{
						padding: "0px",
						margin: 0,
						background:
							"linear-gradient(to bottom, #705d34, 5%, #d6bf84, #f4e9ca)",
						backgroundColor: "#EEE3C7",
						color: "#3f3633",
						borderRadius: "calc(2.25em - 16px)",
						border: 0,
					}}
					id="youtube"
				>
					{youtubeVideos
						.filter((x, i) => i == 0)
						.map((x) => (
							<Link
								href={x.link["@_href"]}
								target="_blank"
								key={`video${x["yt:videoId"]}`}
								style={{
									color: "#3f3633",
									textDecorationColor: "#1f291b",
								}}
								className="embed"
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										paddingTop: "0.3em",
									}}
								>
									<div
										style={{
											borderRadius: "2.5em",
											boxShadow:
												"inset 0 4px rgba(255, 255, 255, 0.5), inset 0 -2px rgba(20, 20, 20, 0.5)",
											width: 240,
											height: 135,
											backgroundImage: `url("${x["media:group"]["media:thumbnail"]["@_url"]}")`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											marginTop: "0.5em",
											marginBottom: "0.25em",
											borderBottom: "3px solid #f7f0e3",
										}}
										id="youtubeThumbnail"
									/>
									<div
										style={{
											width: "calc(240px - 1em)",
											borderRadius: "0.75em",
											padding: "0.5em",
											backgroundColor: "#7d8a67",
											color: "#1f291b",
											marginTop: "0.25em",
											marginBottom: "0.5em",
											boxShadow: "inset 0 0 0.5em 0.5em #626d51",
										}}
									>
										<p
											style={{
												whiteSpace: "nowrap",
												textOverflow: "ellipsis",
												overflow: "hidden",
												margin: 0,
											}}
										>
											<strong>{x.title}</strong>
										</p>
										<p
											style={{
												margin: 0,
											}}
										>
											{new Date(x.published).toLocaleDateString("en-US", {
												day: "2-digit",
												month: "long",
												year: "numeric",
											})}
										</p>
									</div>
									<h3
										style={{
											width: 258,
											margin: 0,
											marginBottom: "0.5em",
											display: "inline-flex",
											justifyContent: "center",
											alignItems: "center",
											gap: "0.25em",
											textDecoration: "none",
										}}
									>
										<img src="/assets/youtube.svg" height={24} />
									</h3>
								</div>
							</Link>
						))}
				</main>
			</div>
		</div>
	);
}

interface YouTubeVideo {
	id: string;
	"yt:videoId": string;
	"yt:channelId": string;
	title: string;
	link: {
		"@_rel": string;
		"@_href": string;
	};
	author: {
		name: string;
		uri: string;
	};
	published: string;
	updated: string;
	"media:group": {
		"media:title": string;
		"media:content": {
			"@_url": string;
			"@_type": string;
			"@_width": string;
			"@_height": string;
		};
		"media:thumbnail": {
			"@_url": string;
			"@_width": string;
			"@_height": string;
		};
		"media:description": string;
		"media:community": {
			"media:starRating": {
				"@_count": string;
				"@_average": string;
				"@_min": string;
				"@_max": string;
			};
			"media:statistics": {
				"@_views": string;
			};
		};
	};
}

interface YouTubeResponse {
	"?xml": { "@_version": string; "@_encoding": string };
	feed: {
		link: {
			"@_rel": string;
			"@_href": string;
		}[];
		id: string;
		"yt:channelId": string;
		title: string;
		author: {
			name: string;
			uri: string;
		};
		published: string;
		entry: YouTubeVideo[];
		"@_xmlns:yt": string;
		"@_xmlns:media": string;
		"@_xmlns": string;
	};
}

async function getYoutube(): Promise<YouTubeResponse> {
	const res = await fetch(
		"https://www.youtube.com/feeds/videos.xml?channel_id=UC62WYRrDRwINxIjzj-wJVkQ",
		{ next: { revalidate: 3600 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch YouTube videos");
	}

	const xml = await res.text();

	return new XMLParser({ ignoreAttributes: false }).parse(xml);
}

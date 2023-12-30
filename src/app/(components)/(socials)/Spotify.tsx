"use client";

import useSWR from "swr";

import Image from "next/image";
import Link from "next/link";

export default function Spotify() {
	const { data, error, isLoading } = useSWR<{ data: LastFmResponse }>(
		"/api/lastfm",
		(...args: [string | URL | Request, RequestInit?]) =>
			fetch(...args).then((res) => res.json())
	);

	if (data) {
		const track = data.data.recenttracks.track[0];

		return (
			<div style={{ marginTop: "1em" }}>
				<Link
					style={{
						borderTop: "2px solid #141213",
						textDecoration: "none",
					}}
					href="https://www.last.fm/user/iGalaxyYT"
					target="_blank"
				>
					<div
						style={{
							borderTop: "2px solid #6d6e6d",
							background: "linear-gradient(to bottom, #6C6D6D, #4B4A4A)",
							color: "white",
							border: "2px solid #323233",
							height: "72px",
							display: "flex",
						}}
					>
						<Image
							src={track.image[track.image.length - 1]["#text"]}
							width={72}
							height={72}
							alt={track.album["#text"]}
						/>
						<div
							style={{
								padding: "16px",
								fontWeight: 500,
								textOverflow: "ellipsis",
								overflow: "hidden",
								whiteSpace: "nowrap",
								textShadow: "0px -2px 0px #484748",
								position: "relative",
								width: "100%",
							}}
						>
							{track.name}
							<span
								style={{
									fontSize: "14px",
									display: "block",
									marginTop: "4px",
								}}
							>
								{track.artist["#text"]}
							</span>
							<Image
								src="/assets/Spotify-2008.png"
								height={42}
								width={42}
								alt="Spotify"
								style={{
									position: "absolute",
									right: 4,
									bottom: -8,
								}}
							/>
						</div>
					</div>
				</Link>
			</div>
		);
	} else {
		return (
			<div
				style={{
					marginTop: "1em",
					borderTop: "2px solid #141213",
				}}
			>
				<div
					style={{
						borderTop: "2px solid #6d6e6d",
						background: "linear-gradient(to bottom, #6C6D6D, #4B4A4A)",
						color: "white",
						border: "2px solid #323233",
						height: "72px",
						display: "flex",
					}}
				>
					<div
						style={{
							padding: "16px",
							fontWeight: 500,
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
							textShadow: "0px -2px 0px #484748",
							position: "relative",
							width: "100%",
						}}
					>
						<Image
							src="/assets/Spotify-2008.png"
							height={42}
							width={42}
							alt="Spotify"
							style={{
								position: "absolute",
								right: 4,
								bottom: -8,
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

interface LastFmResponse {
	recenttracks: {
		track: [LastFmTrack, LastFmTrack];
	};
	"@attr": {
		user: string;
		totalPages: string;
		page: string;
		perPage: string;
		total: string;
	};
}

interface LastFmTrack {
	artist: {
		mbid: string;
		"#text": string;
	};
	streamable: string;
	image: {
		size: string;
		"#text": string;
	}[];
	mbid: string;
	album: {
		mbid: string;
		"#text": string;
	};
	name: string;
	"@attr": {
		nowplaying: string;
	};
	url: string;
}

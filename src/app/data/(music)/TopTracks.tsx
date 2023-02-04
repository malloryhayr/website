'use client';

import Image from 'next/image';

interface LastFMTrack {
	streamable: {
		fulltrack: string;
		'#text': string;
	};
	mbid: string;
	name: string;
	image: {
		size: string;
		'#text': string;
	}[];
	artist: {
		url: string;
		name: string;
		mbid: string;
	};
	url: string;
	duration: string;
	'@attr': {
		rank: string;
	};
	playcount: string;
}

interface LastFMTrackInfo {
	name: string;
	mbid: string;
	duration: string;
	streamable: {
		'#text': string;
		fulltrack: string;
	};
	listeners: string;
	playcount: string;
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	album: {
		artist: string;
		title: string;
		mbid: string;
		url: string;
		image: {
			'#text': string;
			size: string;
		}[];
		'@attr': {
			position: string;
		};
	};
	toptags: {
		tag: {
			name: string;
			url: string;
		}[];
	};
	wiki?: {
		published: string;
		summary: string;
		content: string;
	};
}

const IMAGE_FALLBACKS: { [key: string]: string } = {
	Perfume:
		'https://lastfm.freetls.fastly.net/i/u/770x0/5f71ec3bc37f2b7f6deb2843ce1373a3.jpg',
	"It's All Futile! It's all Pointless!":
		'https://lastfm.freetls.fastly.net/i/u/770x0/5f71ec3bc37f2b7f6deb2843ce1373a3.jpg',
};

export default function TopTracks({
	tracks,
	info,
}: {
	tracks: LastFMTrack[];
	info: LastFMTrackInfo[];
}) {
	return (
		<>
			<p style={{ marginTop: 0 }}>
				<strong>Top Tracks</strong>
			</p>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '0.25rem',
					marginBottom: '-10px',
				}}
			>
				{tracks.map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
						}}
						key={`track${x.mbid}Playcount`}
					>
						<strong>#{i + 1}</strong>{' '}
						<span style={{ color: '#ab48ab' }}>{x.playcount}</span> plays
					</div>
				))}
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '0.25rem',
				}}
			>
				{tracks.map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
							display: 'flex',
							flexDirection: 'column',
						}}
						key={`track${x.mbid}`}
					>
						<div
							style={{
								width: '8.5rem',
								height: '8.5rem',
								position: 'relative',
							}}
						>
							<Image
								src={
									info[i].album
										? info[i].album.image[3]['#text']
										: IMAGE_FALLBACKS[info[i].name]
										? IMAGE_FALLBACKS[info[i].name]
										: x.image[3]['#text']
								}
								fill
								alt={x.name}
								style={{
									boxShadow: `0 0 0 1px ${
										i == 0
											? 'gold'
											: i == 1
											? 'silver'
											: i == 2
											? '#CD7F32'
											: '#ffacff'
									}`,
								}}
							/>
						</div>
						<p>
							{x.name} <br />
							<span style={{ color: '#ab48ab' }}>{x.artist.name}</span>
						</p>
					</div>
				))}
			</div>
		</>
	);
}

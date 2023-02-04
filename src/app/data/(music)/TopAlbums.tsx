'use client';

import Image from 'next/image';
import { ARTIST_NAME_OVERRIDES } from './TopArtists';

interface LastFMAlbum {
	artist: {
		url: string;
		name: string;
		mbid: string;
	};
	image: {
		size: string;
		'#text': string;
	}[];
	mbid: string;
	url: string;
	playcount: string;
	'@attr': {
		rank: string;
	};
	name: string;
}

export default function TopAlbums({ albums }: { albums: LastFMAlbum[] }) {
	return (
		<>
			<p>
				<strong>Top Albums</strong>
			</p>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '0.25rem',
					marginBottom: '-10px',
				}}
			>
				{albums.map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
						}}
						key={`album${x.mbid}Playcount`}
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
				{albums.map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
							display: 'flex',
							flexDirection: 'column',
						}}
						key={`album${x.mbid}`}
					>
						<div
							style={{
								width: '8.5rem',
								height: '8.5rem',
								position: 'relative',
							}}
						>
							<Image
								src={x.image[3]['#text']}
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
							<span style={{ color: '#ab48ab' }}>
								{ARTIST_NAME_OVERRIDES[x.artist.name]
									? ARTIST_NAME_OVERRIDES[x.artist.name]
									: x.artist.name}
							</span>
						</p>
					</div>
				))}
			</div>
		</>
	);
}

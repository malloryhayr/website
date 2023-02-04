'use client';

import Image from 'next/image';

interface LastFMArtist {
	streamable: string;
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

export const ARTIST_NAME_OVERRIDES: { [key: string]: string } = {
	LoveJoy: 'Lovejoy',
};

const IMAGE_OVERRIDES: { [key: string]: string } = {
	LoveJoy:
		'https://lastfm.freetls.fastly.net/i/u/770x0/adfa9ea970fd284823ed40dca86a0563.jpg',
	C418: 'https://lastfm.freetls.fastly.net/i/u/770x0/22541b37dc5e5ae0a6fc870e431b324b.jpg',
	'Bo Burnham':
		'https://lastfm.freetls.fastly.net/i/u/770x0/0b13017fe7fbbdb3eb62ac413f6cd1fc.jpg',
	Joji: 'https://lastfm.freetls.fastly.net/i/u/770x0/2553edee60bb0ae81e944dff5097c0cb.jpg',
	Aries:
		'https://lastfm.freetls.fastly.net/i/u/770x0/7a47296e6667d76a6d64b0ee9683c93b.jpg',
	'Tally Hall':
		'https://lastfm.freetls.fastly.net/i/u/770x0/12d3b4f6195030cc2f3814e16442be24.jpg',
	'khai dreams':
		'https://lastfm.freetls.fastly.net/i/u/770x0/12078ef8a2c0594f7b8297f662c2a17a.jpg',
};

export default function TopArtists({ artists }: { artists: LastFMArtist[] }) {
	return (
		<>
			<p style={{ marginTop: 0 }}>
				<strong>Top Artists</strong>
			</p>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '0.25rem',
					marginBottom: '-10px',
				}}
			>
				{artists.map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
						}}
						key={`artist${x.mbid}Playcount`}
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
					marginBottom: '10px',
				}}
			>
				{artists.map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
							display: 'flex',
							flexDirection: 'column',
						}}
						key={`artist${x.mbid}`}
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
									IMAGE_OVERRIDES[x.name]
										? IMAGE_OVERRIDES[x.name]
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
									objectFit: 'cover',
								}}
							/>
						</div>
						<p>
							{ARTIST_NAME_OVERRIDES[x.name]
								? ARTIST_NAME_OVERRIDES[x.name]
								: x.name}{' '}
							<br />
						</p>
					</div>
				))}
			</div>
		</>
	);
}

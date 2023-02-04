import {
	getLastFmRecentTracks,
	getLastFmTopAlbums,
	getLastFmTopArtists,
	getLastFmTopTracks,
	getLastFmTrackInfo,
	lastFmRecentTracks,
	lastFmTopTracks,
} from '@/lib/data/music';
import { formatSeconds } from '@/lib/utils';
import TopAlbums from './TopAlbums';
import TopArtists from './TopArtists';
import TopTracks from './TopTracks';

export default async function MusicDetailed() {
	if (lastFmTopTracks.length == 0) await getLastFmTopTracks();
	const topAlbums = await getLastFmTopAlbums();
	const topArtists = await getLastFmTopArtists();
	let topTrackInfo = [];
	for (let i = 0; i < 5; i++) {
		topTrackInfo[i] = (
			await getLastFmTrackInfo(
				lastFmTopTracks.slice(0, 5)[i].name,
				lastFmTopTracks.slice(0, 5)[i].artist.name
			)
		).track;
	}

	let total = 0;
	lastFmTopTracks.forEach(track => {
		total += +track.duration * +track.playcount;
	});

	return (
		<div style={{ marginTop: '4rem' }}>
			<p>
				<span style={{ color: '#ab48ab' }}>
					{formatSeconds(total, { compact: true })}
				</span>{' '}
				listening to music{' '}
				{/* (<span style={{ color: '#ab48ab' }}>---</span> daily
				average) <br />
				Most active day was <strong>---</strong> (
				<span style={{ color: '#ab48ab' }}>---</span>) */}
			</p>
			<TopAlbums albums={topAlbums.topalbums.album} />
			{/* <TopTracks tracks={lastFmTopTracks.slice(0, 5)} info={topTrackInfo} /> */}
			<TopArtists artists={topArtists.topartists.artist} />
			<p
				style={{
					color: '#ab48ab',
					textAlign: 'right',
					width: '100%',
					fontSize: '12px',
					marginTop: '-10px',
				}}
			>
				Fetched from{' '}
				<a
					href={`https://www.last.fm/user/iGalaxyYT`}
					target="_blank"
					style={{ color: '#ab48ab' }}
					className="external"
				>
					Last.fm
				</a>
			</p>
		</div>
	);
}

export function MusicDetailedLoading() {
	return <span style={{ color: '#ab48ab' }}>(loading LastFM data)</span>;
}

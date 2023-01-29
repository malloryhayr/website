import { getLastFmTopTracks, lastFmTopTracks } from '@/lib/data/music';

export default async function MusicSummary() {
	if (lastFmTopTracks.length == 0) await getLastFmTopTracks();

	let total = 0;
	lastFmTopTracks.forEach(track => {
		total += +track.duration * +track.playcount;
	});

	return (
		<>
			I've listened to over{' '}
			<span style={{ color: '#ab48ab' }}>
				{Math.floor(total / 3600).toLocaleString()}
			</span>{' '}
			hours of music
		</>
	);
}

export function MusicSummaryLoading() {
	return (
		<>
			I've listened to over{' '}
			<span style={{ color: '#ab48ab' }}>(loading LastFM data)</span> hours of
			music
		</>
	);
}

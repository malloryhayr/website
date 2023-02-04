import 'server-only';
import { sleep } from '../utils';

export async function getLastFmUserInfo() {
	let res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getInfo&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json`,
		{ next: { revalidate: 21600 } }
	);

	return res.json();
}

export let lastFmTopTracks: any[] = [];
export let lastFmRecentTracks: any[] = [];

export async function getLastFmTopTracks() {
	let tracks = [];
	let totalPages = Infinity;
	for (let i = 1; i <= totalPages; i++) {
		let res = await (
			await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json&limit=200&page=${i}`,
				{ next: { revalidate: 21600 } }
			)
		).json();

		tracks.push(...res.toptracks.track);
		totalPages = +res.toptracks['@attr'].totalPages;
		await sleep(50);
	}
	lastFmTopTracks = tracks;
	return tracks;
}

export async function getLastFmRecentTracks() {
	let tracks = [];
	let totalPages = Infinity;
	for (let i = 1; i <= totalPages; i++) {
		let res = await (
			await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json&limit=200&page=${i}`,
				{ next: { revalidate: 21600 } }
			)
		).json();

		tracks.push(...res.recenttracks.track);
		totalPages = +res.recenttracks['@attr'].totalPages;
		await sleep(50);
	}
	lastFmRecentTracks = tracks;
	return tracks;
}

export async function getLastFmTopArtists() {
	let res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json&limit=5`,
		{ next: { revalidate: 21600 } }
	);

	return res.json();
}

export async function getLastFmTopAlbums() {
	let res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json&limit=5`,
		{ next: { revalidate: 21600 } }
	);

	return res.json();
}

export async function getLastFmTrackInfo(name: string, artist: string) {
	let res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.LASTFM_KEY}&format=json&track=${name}&artist=${artist}`,
		{ next: { revalidate: 21600 } }
	);

	return res.json();
}

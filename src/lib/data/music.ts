import 'server-only';

export async function getLastFmUserInfo() {
	let res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getInfo&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json`
	);

	return res.json();
}

export let lastFmTopTracks: any[] = [];

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getLastFmTopTracks() {
	let tracks = [];
	let totalPages = Infinity;
	for (let i = 1; i <= totalPages; i++) {
		let res = await (
			await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&api_key=${process.env.LASTFM_KEY}&user=iGalaxyYT&format=json&limit=200&page=${i}`
			)
		).json();

		tracks.push(...res.toptracks.track);
		totalPages = +res.toptracks['@attr'].totalPages;
		await sleep(100);
	}
	lastFmTopTracks = tracks;
	return tracks;
}

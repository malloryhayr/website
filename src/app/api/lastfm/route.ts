export async function GET() {
	const res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_KEY}&format=json&limit=1`,
		{ cache: "no-store" }
	);
	const data = await res.json();

	return Response.json({ data });
}

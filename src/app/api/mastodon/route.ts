export async function GET() {
	const res = await fetch(
		`https://farlands.cafe/api/v1/accounts/${process.env.MASTODON_USER}/statuses?limit=1&exclude_replies=true`,
		{ cache: "no-store" }
	);
	const data = await res.json();

	return Response.json({ data });
}

const PRONOUNS = {
	unspecified: 'unspecified',
	hh: 'he/him',
	hi: 'he/it',
	hs: 'he/she',
	ht: 'he/they',
	ih: 'it/him',
	ii: 'it/its',
	is: 'it/she',
	it: 'it/they',
	shh: 'she/he',
	sh: 'she/her',
	si: 'she/it',
	st: 'she/they',
	th: 'they/he',
	ti: 'they/it',
	ts: 'they/she',
	tt: 'they/them',
	any: 'any',
	other: 'other',
	ask: 'ask',
	avoid: 'avoid',
};

export default async function Pronouns() {
	const data: { pronouns: keyof typeof PRONOUNS } = await (
		await fetch(
			'https://pronoundb.org/api/v1/lookup?platform=discord&id=182292736790102017'
		)
	).json();

	return <span style={{ color: '#ab48ab' }}>({PRONOUNS[data.pronouns]})</span>;
}

export function PronounsLoading() {
	return <span style={{ color: '#ab48ab' }}>(██████)</span>;
}

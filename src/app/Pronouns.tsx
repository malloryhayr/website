type PronounsResponse = {
	id: string;
	sets: {
		[locale: string]: PronounSetKey[];
	};
};

const PronounSets = {
	he: 'he/him',
	it: 'it/its',
	she: 'she/her',
	they: 'they/them',
	any: 'any',
	ask: 'ask',
	avoid: 'avoid',
	other: 'other',
};

type PronounSetKey = keyof typeof PronounSets;

export default async function Pronouns() {
	const data: PronounsResponse = await (
		await fetch('https://pronoundb.org/api/v2/users/60aede5de69d97250e42c78c')
	).json();

	return (
		<span style={{ color: '#ab48ab' }}>
			(
			{data.sets['en']
				.slice(0, 2)
				.map(x => PronounSets[x])
				.join('/')}
			)
		</span>
	);
}

export function PronounsLoading() {
	return <span style={{ color: '#ab48ab' }}>(██████)</span>;
}

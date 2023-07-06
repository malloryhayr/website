import Link from 'next/link';

type PronounsResponse = {
	id: string;
	sets: {
		[locale: string]: string[];
	};
};

export default async function Pronouns() {
	const data: PronounsResponse = await (
		await fetch('https://pronoundb.org/api/v2/users/60aede5de69d97250e42c78c')
	).json();

	return (
		<sup>
			<Link
				href="https://pronoundb.org/api/v2/users/60aede5de69d97250e42c78c"
				target="_blank"
				style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}
			>
				({data.sets['en'].slice(0, 2).join('/')})
			</Link>
		</sup>
	);
}

export function PronounsLoading() {
	return <sup>(▒▒▒▒▒)</sup>;
}

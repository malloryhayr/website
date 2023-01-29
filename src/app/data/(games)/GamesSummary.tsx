import { getGames } from '@/lib/data/games';
import { GameWithPlaytime } from '@/lib/types/games';

export default async function GamesSummary() {
	const games = await getGames();

	let total = 0;
	Object.values(games).forEach((column: GameWithPlaytime[]) => {
		column.forEach(game => {
			if (game.playtime) total += game.playtime;
		});
	});

	return (
		<>
			and I've played video games for at least{' '}
			<span style={{ color: '#ab48ab' }}>
				{Math.floor(total / 60).toLocaleString()}
			</span>{' '}
			hours.
		</>
	);
}

export function GamesSummaryLoading() {
	return (
		<>
			and I've played video games for at least{' '}
			<span style={{ color: '#ab48ab' }}>(loading Steam data)</span> hours.
		</>
	);
}

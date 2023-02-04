import { getGames } from '@/lib/data/games';
import { GameWithPlaytime } from '@/lib/types/games';
import { formatSeconds } from '@/lib/utils';
import { TopGames } from './TopGames';

export default async function GamesDetailed() {
	const games = await getGames();

	let total = 0;
	Object.values(games).forEach((column: GameWithPlaytime[]) => {
		column.forEach(game => {
			if (game.playtime) total += game.playtime;
		});
	});

	return (
		<div style={{ marginTop: '4rem' }}>
			<p>
				<span style={{ color: '#ab48ab' }}>
					{formatSeconds(total * 60, { compact: true })}
				</span>{' '}
				playing video games
			</p>
			<TopGames games={games} />
		</div>
	);
}

export function GamesDetailedLoading() {
	return <span style={{ color: '#ab48ab' }}>(loading games data)</span>;
}

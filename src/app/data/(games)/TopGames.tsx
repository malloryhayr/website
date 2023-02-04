import { GamesResponseWithPlaytime, GameWithPlaytime } from '@/lib/types/games';
import { formatSeconds } from '@/lib/utils';

import Image from 'next/image';

export function TopGames({ games }: { games: GamesResponseWithPlaytime }) {
	const allGamesWithPlaytime = (Object.values(games) as GameWithPlaytime[][])
		.flat()
		.filter(x => x.playtime)
		.sort((a, b) => b.playtime! - a.playtime!);

	return (
		<>
			<p>
				<strong>Top Games</strong>
			</p>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '0.25rem',
					marginBottom: '-10px',
				}}
			>
				{allGamesWithPlaytime.slice(0, 5).map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
						}}
						key={`game${x.title}Playtime`}
					>
						<strong>#{i + 1}</strong>{' '}
						<span style={{ color: '#ab48ab' }}>
							{formatSeconds(x.playtime! * 60, { compact: true })}
						</span>
					</div>
				))}
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '0.25rem',
				}}
			>
				{allGamesWithPlaytime.slice(0, 5).map((x, i) => (
					<div
						style={{
							width: '8.5rem',
							margin: '0.25rem',
							display: 'flex',
							flexDirection: 'column',
						}}
						key={`game${x.title}`}
					>
						<div
							style={{
								width: '8.5rem',
								height: '12.75rem',
								position: 'relative',
							}}
						>
							<Image
								src={x.cover}
								fill
								alt={x.title}
								style={{
									boxShadow: `0 0 0 1px ${
										i == 0
											? 'gold'
											: i == 1
											? 'silver'
											: i == 2
											? '#CD7F32'
											: '#ffacff'
									}`,
								}}
							/>
						</div>
						<p>
							{x.title} <br />
							<span style={{ color: '#ab48ab' }}>{x.platform}</span>
						</p>
					</div>
				))}
			</div>
			<p
				style={{
					color: '#ab48ab',
					textAlign: 'right',
					width: '100%',
					fontSize: '12px',
					marginTop: '-10px',
				}}
			>
				Fetched from{' '}
				<a
					href={`https://games.igalaxy.dev`}
					target="_blank"
					style={{ color: '#ab48ab' }}
					className="external"
				>
					games.igalaxy.dev
				</a>
			</p>
		</>
	);
}

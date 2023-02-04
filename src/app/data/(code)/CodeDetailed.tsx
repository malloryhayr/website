import {
	getWakatimeAllTimeSinceToday,
	getWakatimeLanguagesAllTime,
} from '@/lib/data/code';

import { formatSeconds } from '@/lib/utils';
import dayjs from 'dayjs';

export default async function CodeDetailed() {
	const languages = await getWakatimeLanguagesAllTime();
	const stats = await getWakatimeAllTimeSinceToday();

	return (
		<div>
			<p>
				<span style={{ color: '#ab48ab' }}>
					{formatSeconds(
						stats.data.grand_total.total_seconds_including_other_language,
						{ compact: true }
					)}
				</span>{' '}
				writing code (
				<span style={{ color: '#ab48ab' }}>
					{formatSeconds(
						stats.data.grand_total.daily_average_including_other_language,
						{ compact: true }
					)}{' '}
				</span>{' '}
				daily average)
				<br />
				Most active day was{' '}
				<strong>
					{dayjs(stats.data.best_day.date).format('ddd MMM DD YYYY')}
				</strong>{' '}
				(
				<span style={{ color: '#ab48ab' }}>
					{formatSeconds(stats.data.best_day.total_seconds, { compact: true })}
				</span>
				)
			</p>
			<p>
				<strong>Top Languages</strong>
			</p>
			<div
				style={{
					display: 'flex',
					width: '100%',
					flexDirection: 'column',
					marginTop: '10px',
					marginBottom: '10px',
				}}
			>
				{languages.data.slice(0, 10).map((x, i) => {
					return (
						<div
							key={`language${x.name}`}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '1.25rem',
								marginBottom: i != 9 ? '0.5rem' : '0',
							}}
						>
							<span
								style={{ lineHeight: 1, marginRight: '1rem', width: '6rem' }}
							>
								{x.name}
							</span>
							<div
								style={{
									height: '1.25rem',
									lineHeight: 1.5,
									boxShadow: `0px 0px 0px 1px ${x.color} inset`,
									color: x.color,
									flexGrow: 1,
									display: 'flex',
									alignItems: 'center',
									userSelect: 'none',
								}}
							>
								<div
									style={{
										width: `${x.percent}%`,
										height: '100%',
										backgroundColor: x.color,
										marginRight: '0.5rem',
									}}
								></div>
								{formatSeconds(
									Math.floor(
										(x.percent / 100) *
											stats.data.grand_total
												.total_seconds_including_other_language
									),
									{ compact: true }
								)}{' '}
								({x.percent}%)
							</div>
						</div>
					);
				})}
			</div>
			<p
				style={{
					color: '#ab48ab',
					textAlign: 'right',
					width: '100%',
					fontSize: '12px',
				}}
			>
				Fetched from{' '}
				<a
					href={`https://wakatime.com/@iGalaxy`}
					target="_blank"
					style={{ color: '#ab48ab' }}
					className="external"
				>
					WakaTime
				</a>
			</p>
		</div>
	);
}

export function CodeDetailedLoading() {
	return <span style={{ color: '#ab48ab' }}>(loading WakaTime data)</span>;
}

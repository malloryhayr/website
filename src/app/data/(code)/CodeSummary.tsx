import { getWakatimeAllTimeSinceToday } from '@/lib/data/code';

export default async function MusicSummary() {
	const data = await getWakatimeAllTimeSinceToday();

	return (
		<>
			I've written code for over{' '}
			<span style={{ color: '#ab48ab' }}>
				{Math.floor(
					data.data.grand_total.total_seconds_including_other_language / 3600
				)}
			</span>{' '}
			hours
		</>
	);
}

export function CodeSummaryLoading() {
	return (
		<>
			I've written code for over{' '}
			<span style={{ color: '#ab48ab' }}>(loading Wakatime data)</span> hours
		</>
	);
}

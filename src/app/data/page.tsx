import { Suspense } from 'react';

import Age from './(age)/Age';
import CodeSummary, { CodeSummaryLoading } from './(code)/CodeSummary';
import GamesSummary, { GamesSummaryLoading } from './(games)/GamesSummary';
import MusicSummary, { MusicSummaryLoading } from './(music)/MusicSummary';

export default function Data() {
	return (
		<>
			<Age />
			<p>
				During that time,{' '}
				<Suspense fallback={<CodeSummaryLoading />}>
					{/* @ts-expect-error Server Component */}
					<CodeSummary />
				</Suspense>
				,{' '}
				<Suspense fallback={<MusicSummaryLoading />}>
					{/* @ts-expect-error Server Component */}
					<MusicSummary />
				</Suspense>
				,{' '}
				<Suspense fallback={<GamesSummaryLoading />}>
					{/* @ts-expect-error Server Component */}
					<GamesSummary />
				</Suspense>
			</p>
			<p>Woah. That's a lot. Let's break it down:</p>
			<p>
				<span style={{ color: '#ab48ab' }}>(coming soon)</span>
			</p>
		</>
	);
}

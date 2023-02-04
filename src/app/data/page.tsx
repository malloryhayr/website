import { Suspense } from 'react';

import Age from './(age)/Age';
import CodeDetailed, { CodeDetailedLoading } from './(code)/CodeDetailed';
import CodeSummary, { CodeSummaryLoading } from './(code)/CodeSummary';
import GamesSummary, { GamesSummaryLoading } from './(games)/GamesSummary';
import MusicDetailed, { MusicDetailedLoading } from './(music)/MusicDetailed';
import MusicSummary, { MusicSummaryLoading } from './(music)/MusicSummary';

export const revalidate = 21600;

export default function Data() {
	return (
		<>
			<p>This page is a summary of the data I've collected about my life.</p>
			<Age />
			{/* <p>
				During that time,{' '}
				<Suspense fallback={<CodeSummaryLoading />}>
					<CodeSummary />
				</Suspense>
				,{' '}
				<Suspense fallback={<MusicSummaryLoading />}>
					<MusicSummary />
				</Suspense>
				,{' '}
				<Suspense fallback={<GamesSummaryLoading />}>
					<GamesSummary />
				</Suspense>
			</p> */}
			<p>
				<Suspense fallback={<CodeDetailedLoading />}>
					{/* @ts-expect-error Server Component */}
					<CodeDetailed />
				</Suspense>
			</p>
			<p>
				<Suspense fallback={<MusicDetailedLoading />}>
					{/* @ts-expect-error Server Component */}
					<MusicDetailed />
				</Suspense>
			</p>
		</>
	);
}

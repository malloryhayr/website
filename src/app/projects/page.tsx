import { Suspense } from 'react';

import ProjectsList, { ProjectsLoading } from './Projects';

export const revalidate = 21600;

export default function Projects() {
	return (
		<>
			<p>Here's some cool stuff I've built/worked on:</p>
			<Suspense fallback={<ProjectsLoading />}>
				{/* @ts-expect-error Server Component */}
				<ProjectsList />
			</Suspense>
			<p>
				For the time being this page is automated; I plan on expanding it in the
				future with dedicated writeups for my favorite projects.
			</p>
		</>
	);
}

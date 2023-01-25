import { Suspense } from 'react';
import Projects, { ProjectsLoading } from './Projects';

export default function Home() {
	return (
		<main>
			<p>
				Hey, I'm <strong>Mallory</strong> (she/they), otherwise known as{' '}
				<strong>iGalaxy</strong>
			</p>
			<p>I'm a trans software engineer, game designer, & creator</p>
			<p>I like to create funky stuff using Minecraft</p>
			<p>Here's some cool stuff I've built:</p>
			<Suspense fallback={<ProjectsLoading />}>
				{/* @ts-expect-error Server Component */}
				<Projects />
			</Suspense>
		</main>
	);
}

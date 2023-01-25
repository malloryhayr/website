import { Suspense } from 'react';

import Discord from './Discord';
import Projects, { ProjectsLoading } from './Projects';

export default function Home() {
	return (
		<>
			<p>
				Hey, I'm <strong>Mallory</strong> (she/they)
			</p>
			<p>I'm a trans software engineer, game designer, & creator</p>
			<p>
				You can find me at{' '}
				<a href="https://twitter.com/@_iGalaxyYT" target="_blank">
					@_iGalaxyYT
				</a>{' '}
				on Twitter,{' '}
				<a href="https://mastodon.lol/@igalaxy" target="_blank">
					@igalaxy@mastodon.lol
				</a>{' '}
				on the fediverse, and @iGalaxy#2018 on Discord <Discord />
			</p>
			<p>Here's some cool stuff I've built:</p>
			<Suspense fallback={<ProjectsLoading />}>
				{/* @ts-expect-error Server Component */}
				<Projects />
			</Suspense>
		</>
	);
}

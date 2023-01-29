import { Suspense } from 'react';

import GenericLoading from './GenericLoading';
import OnlineStatus from './OnlineStatus';
import Pronouns from './Pronouns';

export default function Home() {
	return (
		<>
			<p>
				Hi, I'm <strong>Mallory</strong>{' '}
				<Suspense fallback={<GenericLoading />}>
					{/* @ts-expect-error Server Component */}
					<Pronouns />
				</Suspense>
			</p>
			<p>
				I'm a trans software engineer, game designer, & creator.
				<br />I like doing funky stuff with Minecraft.
			</p>
			<p>
				You can find me at{' '}
				<a href="https://github.com/iGalaxyYT" target="_blank">
					iGalaxyYT
				</a>{' '}
				on GitHub,{' '}
				<a href="https://twitter.com/@_iGalaxyYT" target="_blank">
					@_iGalaxyYT
				</a>{' '}
				on Twitter,{' '}
				<a href="https://mastodon.lol/@igalaxy" target="_blank">
					@igalaxy@mastodon.lol
				</a>{' '}
				on the fediverse, and @iGalaxy#2018 on Discord.
			</p>
			<OnlineStatus />
		</>
	);
}

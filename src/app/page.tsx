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
				<a href="https://tech.lgbt/@igalaxy" target="_blank" rel="me">
					@igalaxy@tech.lgbt
				</a>{' '}
				on the fediverse, and{' '}
				<a href="https://discord.gg/9taRw3PyKn" target="_blank">
					@iGalaxy#2018
				</a>{' '}
				on Discord.
			</p>
			<OnlineStatus />
		</>
	);
}

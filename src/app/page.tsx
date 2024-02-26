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
					{/* @ts-ignore */}
					<Pronouns />
				</Suspense>
			</p>
			<p>
				I make computers do stuff sometimes
				<br />
				I'm a big fan of Minecraft, the indie web, and the Nintendo Wii
			</p>
			<p>
				This site is due to be replaced soon, but you can still look around!
			</p>
			<p>
				You can find me at{' '}
				<a href="https://github.com/malloryhayr" target="_blank">
					malloryhayr
				</a>{' '}
				on GitHub,{' '}
				<a href="https://twitter.com/@_iGalaxyYT" target="_blank">
					@_iGalaxyYT
				</a>{' '}
				on Twitter,{' '}
				<a href="https://discord.gg/9taRw3PyKn" target="_blank">
					@igalaxy
				</a>{' '}
				on Discord, and{' '}
				<a href="https://farlands.cafe/@igalaxy" target="_blank" rel="me">
					@igalaxy@farlands.cafe
				</a>{' '}
				on the fediverse.
			</p>
			<OnlineStatus />
		</>
	);
}

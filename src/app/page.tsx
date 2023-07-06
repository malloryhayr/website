import { Suspense } from 'react';

import Link from 'next/link';

import Pronouns, { PronounsLoading } from './Pronouns';
import Discord, { DiscordLoading } from './Discord';

export default function Home() {
	return (
		<>
			<p>
				hey!! i'm Mallory{' '}
				<Suspense fallback={<PronounsLoading />}>
					<Pronouns />
				</Suspense>
			</p>
			<p>
				i'm a trans student, software engineer, game designer, & aspiring
				physicist. i like doing funky stuff with Minecraft and the web
			</p>
			<p>
				i help with community management over at{' '}
				<Link href={'https://existencesmp.com'} target="_blank">
					existence smp
				</Link>{' '}
				<i>& a private community of friends called the mafia</i>
			</p>
			<p>
				you can find me at{' '}
				<Link href={'https://github.com/iGalaxyYT'} target="_blank">
					iGalaxyYT
				</Link>{' '}
				on github,{' '}
				<Link href={'https://twitter.com/@_iGalaxyYT'} target="_blank">
					@_iGalaxyYT
				</Link>{' '}
				on twitter, and{' '}
				<Link href={'https://discord.gg/9taRw3PyKn'} target="_blank">
					@igalaxy
				</Link>{' '}
				on discord.
			</p>
			<Discord />
			<p>
				i'm also{' '}
				<Link href={'https://tech.lgbt/@igalaxy'} target="_blank" rel="me">
					@igalaxy@tech.lgbt
				</Link>{' '}
				on mastodon and{' '}
				<Link href="https://cohost.org/igalaxy" target="_blank">
					@igalaxy
				</Link>{' '}
				on cohost, but i don't particularly use those platforms.{' '}
				<i>
					these accounts are just for the inevitable downfall of twitter dot com{' '}
					{'<3'}
				</i>
			</p>
		</>
	);
}

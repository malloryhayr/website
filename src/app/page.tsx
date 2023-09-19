import { Suspense } from 'react';

import Link from 'next/link';

import Pronouns, { PronounsLoading } from './(components)/Pronouns';
import Discord from './(components)/Discord';

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
				i'm a student, software engineer, game designer, & Minecraft enthusiast.
				i like doing funky stuff with Minecraft and the web
			</p>
			<p>
				i help with community management over at{' '}
				<Link href={'https://existencesmp.com/'} target="_blank">
					existence smp
				</Link>{' '}
				<i>& a private community of friends called the mafia</i>
			</p>
			<p>
				you can find me at{' '}
				<Link href={'https://github.com/malloryhayr/'} target="_blank">
					malloryhayr
				</Link>{' '}
				on github,{' '}
				<Link href={'https://farlands.cafe/@igalaxy/'} target="_blank">
					@igalaxy@farlands.cafe
				</Link>{' '}
				on mastodon,{' '}
				<Link href={'https://twitter.com/@_iGalaxyYT/'} target="_blank">
					@_iGalaxyYT
				</Link>{' '}
				on twitter,{' '}
				<Link href={'https://youtube.com/@iGalaxy_/'} target="_blank">
					@iGalaxy_
				</Link>{' '}
				on youtube, and{' '}
				<Link
					href={'https://discord.com/users/182292736790102017'}
					target="_blank"
				>
					@igalaxy
				</Link>{' '}
				on discord.
			</p>
			<Discord />
		</>
	);
}

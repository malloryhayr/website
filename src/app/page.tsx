'use client';

import { useLanyard } from 'use-lanyard';

import Image from 'next/image';

const DISCORD_ID = '182292736790102017';

export default function Home() {
	const { data } = useLanyard(DISCORD_ID);

	return (
		<main>
			<a href="https://igalaxy.dev">test</a>
			{data && data.discord_user && data.discord_user.avatar ? (
				<Image
					src={`https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.discord_user.avatar}.png`}
					alt={'avatar'}
					width={64}
					height={64}
				/>
			) : (
				<></>
			)}
		</main>
	);
}

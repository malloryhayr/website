'use client';

import { useLanyard } from 'use-lanyard';

export default function Discord() {
	const { data } = useLanyard('182292736790102017');

	if (data) {
		return (
			<span style={{ color: '#ab48ab' }}>
				(currently{' '}
				{data.active_on_discord_desktop ||
				data.active_on_discord_mobile ||
				data.active_on_discord_web
					? 'online'
					: 'offline'}
				)
			</span>
		);
	} else return <></>;
}

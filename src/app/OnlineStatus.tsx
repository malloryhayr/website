'use client';

import { useLanyard } from 'use-lanyard';

export default function OnlineStatus() {
	const { data } = useLanyard('182292736790102017');

	if (data) {
		const status =
			data.discord_status == 'dnd' ? (
				<>
					online. <span style={{ color: '#ab48ab' }}>(do not disturb)</span>
				</>
			) : (
				data.discord_status + '.'
			);

		return <p>I'm currently {status}</p>;
	} else return <></>;
}

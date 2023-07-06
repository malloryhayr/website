'use client';

import { useLanyard } from 'use-lanyard';

const DISCORD_ID = '182292736790102017';

export default function Discord() {
	const { data } = useLanyard(DISCORD_ID);

	if (data) {
		if (
			data.active_on_discord_desktop ||
			data.active_on_discord_mobile ||
			data.active_on_discord_web
		) {
			return (
				<p>
					<i>i'm actually online right now!</i>
				</p>
			);
		}
		return (
			<p>
				<i>i'm currently offline.</i>
			</p>
		);
	}

	return (
		<p>
			<i>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</i>
		</p>
	);
}

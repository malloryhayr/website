import 'server-only';

import {
	GamesResponse,
	GamesResponseWithPlaytime,
	GameWithPlaytime,
	SteamAchievement,
	SteamLibraryResponse,
} from '@/lib/types/games';
import { sleep } from '../utils';

let games: GamesResponseWithPlaytime;
let steamLibrary: SteamLibraryResponse;

async function fetchAchievements(app: string) {
	const res = await fetch(
		`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${app}&key=${process.env.STEAM_TOKEN}&steamid=76561198271705100&format=json`,
		{ next: { revalidate: 21600 } }
	);

	return await res.json();
}

export async function getGames(): Promise<GamesResponseWithPlaytime> {
	if (!steamLibrary) {
		let library = await fetch(
			`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_TOKEN}&steamid=76561198271705100&include_played_free_games=true&format=json`,
			{ next: { revalidate: 21600 } }
		).then(res => res.json());
		library.response.games = await Promise.all(
			library.response.games.map(async (game: any) => {
				const achievements = (await fetchAchievements(game.appid)).playerstats
					.achievements as SteamAchievement[];

				await sleep(50);

				return {
					...game,
					achievements: achievements != undefined ? achievements : [],
				};
			})
		);

		steamLibrary = library;
	}
	if (!games) {
		games = {} as GamesResponseWithPlaytime;
		let data: GamesResponse = await (
			await fetch(`https://games.igalaxy.dev/api/games`, {
				next: { revalidate: 21600 },
			})
		).json();
		let lanyard = await fetch(
			`https://api.lanyard.rest/v1/users/182292736790102017`,
			{ next: { revalidate: 21600 } }
		).then(res => res.json());
		Object.keys(data).forEach(key => {
			const column = data[key as keyof GamesResponse];
			column.forEach(game => {
				if (game.platform.includes('STEAM')) {
					(game as GameWithPlaytime).playtime =
						steamLibrary.response.games.find(
							x => x.appid === +game.steamid!
						)?.playtime_forever;
				}
				if (game.title == 'Minecraft: Java Edition') {
					(game as GameWithPlaytime).playtime =
						(+lanyard.data.kv.polymc_playtime_steamdeck +
							+lanyard.data.kv.polymc_playtime_macbook +
							+lanyard.data.kv.polymc_playtime) /
						100;
				}
			});
			games[key as keyof GamesResponse] = column as GameWithPlaytime[];
		});
	}

	return games;
}

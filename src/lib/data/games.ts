import 'server-only';

import {
	GamesResponse,
	GamesResponseWithPlaytime,
	GameWithPlaytime,
	SteamAchievement,
	SteamLibraryResponse,
} from '@/lib/types/games';

let games: GamesResponseWithPlaytime;
let steamLibrary: SteamLibraryResponse;

async function fetchAchievements(app: string) {
	return await fetch(
		`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${app}&key=${process.env.STEAM_TOKEN}&steamid=76561198271705100&format=json`
	).then(res => res.json());
}

export async function getGames(): Promise<GamesResponseWithPlaytime> {
	if (!steamLibrary) {
		let library = await fetch(
			`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_TOKEN}&steamid=76561198271705100&include_played_free_games=true&format=json`
		).then(res => res.json());
		library.response.games = await Promise.all(
			library.response.games.map(async (game: any) => {
				const achievements = (await fetchAchievements(game.appid)).playerstats
					.achievements as SteamAchievement[];

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
			await fetch(`https://games.igalaxy.dev/api/games`)
		).json();
		Object.keys(data).forEach(key => {
			const column = data[key as keyof GamesResponse];
			column.forEach(game => {
				if (game.platform.includes('STEAM')) {
					(game as GameWithPlaytime).playtime =
						steamLibrary.response.games.find(
							x => x.appid === +game.steamid!
						)?.playtime_forever;
				}
			});
			games[key as keyof GamesResponse] = column as GameWithPlaytime[];
		});
	}

	return games;
}